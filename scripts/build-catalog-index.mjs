#!/usr/bin/env node
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("..", import.meta.url);
const catalogDir = new URL("catalog/", root);

const slugs = (await readdir(catalogDir, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b));

const designs = [];
for (const slug of slugs) {
  const metadataPath = join(catalogDir.pathname, slug, "metadata.json");
  const metadata = JSON.parse(await readFile(metadataPath, "utf8"));
  designs.push({
    ...metadata,
    designMdPath: `catalog/${slug}/design.md`,
  });
}

const categories = Array.from(
  new Set(designs.map((design) => design.category)),
).sort((a, b) => a.localeCompare(b));

await writeFile(
  new URL("catalog/index.json", root),
  `${JSON.stringify({ count: designs.length, categories, designs }, null, 2)}\n`,
  "utf8",
);

console.log(`Wrote catalog/index.json with ${designs.length} designs.`);
