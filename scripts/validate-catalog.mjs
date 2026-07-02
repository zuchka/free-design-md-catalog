#!/usr/bin/env node
import { access, readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("..", import.meta.url);
const catalogDir = new URL("catalog/", root);
const slugRe = /^[a-z0-9][a-z0-9_.-]{1,79}$/;
const required = [
  "slug",
  "aliases",
  "title",
  "sourceUrl",
  "category",
  "description",
  "bestFor",
];

const errors = [];

function fail(message) {
  errors.push(message);
}

function isHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

const dirs = (await readdir(catalogDir, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b));

const seenSpecifiers = new Map();
const metadataEntries = [];

for (const dir of dirs) {
  const base = join(catalogDir.pathname, dir);
  const metadataPath = join(base, "metadata.json");
  const designPath = join(base, "design.md");

  let metadata;
  try {
    metadata = JSON.parse(await readFile(metadataPath, "utf8"));
  } catch (err) {
    fail(`${dir}: could not read metadata.json (${err.message})`);
    continue;
  }

  metadataEntries.push(metadata);

  for (const key of required) {
    if (!(key in metadata)) fail(`${dir}: missing ${key}`);
  }
  if (metadata.slug !== dir) fail(`${dir}: slug must match directory name`);
  if (!slugRe.test(metadata.slug ?? "")) fail(`${dir}: invalid slug`);
  if (!Array.isArray(metadata.aliases))
    fail(`${dir}: aliases must be an array`);
  if (!isHttpUrl(metadata.sourceUrl)) fail(`${dir}: sourceUrl must be http(s)`);
  for (const key of ["title", "category", "description", "bestFor"]) {
    if (typeof metadata[key] !== "string" || metadata[key].trim() === "") {
      fail(`${dir}: ${key} must be a non-empty string`);
    }
  }

  for (const specifier of [metadata.slug, ...(metadata.aliases ?? [])]) {
    if (!slugRe.test(specifier)) fail(`${dir}: invalid specifier ${specifier}`);
    const previous = seenSpecifiers.get(specifier);
    if (previous) {
      fail(`${dir}: specifier ${specifier} already used by ${previous}`);
    } else {
      seenSpecifiers.set(specifier, dir);
    }
  }

  try {
    await access(designPath);
    const markdown = await readFile(designPath, "utf8");
    if (!markdown.startsWith("---\n")) {
      fail(`${dir}: design.md must start with YAML frontmatter`);
    }
    if (!markdown.includes("\n## ")) {
      fail(`${dir}: design.md must include section headings`);
    }
  } catch (err) {
    fail(`${dir}: could not read design.md (${err.message})`);
  }
}

let index;
try {
  index = JSON.parse(
    await readFile(new URL("catalog/index.json", root), "utf8"),
  );
} catch (err) {
  fail(`catalog/index.json: could not read index (${err.message})`);
}

if (index) {
  if (index.count !== metadataEntries.length) {
    fail(
      `catalog/index.json: count ${index.count} does not match ${metadataEntries.length}`,
    );
  }
  const indexSlugs = (index.designs ?? []).map((entry) => entry.slug).sort();
  const metadataSlugs = metadataEntries.map((entry) => entry.slug).sort();
  if (JSON.stringify(indexSlugs) !== JSON.stringify(metadataSlugs)) {
    fail("catalog/index.json: designs do not match metadata files");
  }
}

if (errors.length > 0) {
  for (const error of errors) console.error(`catalog validation: ${error}`);
  process.exit(1);
}

console.log(`Catalog valid: ${metadataEntries.length} designs.`);
