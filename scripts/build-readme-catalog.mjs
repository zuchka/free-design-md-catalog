#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises";

const root = new URL("..", import.meta.url);
const readmeUrl = new URL("README.md", root);
const indexUrl = new URL("catalog/index.json", root);

const readme = await readFile(readmeUrl, "utf8");
const index = JSON.parse(await readFile(indexUrl, "utf8"));

const designs = [...index.designs].sort((a, b) => {
  const category = a.category.localeCompare(b.category);
  if (category !== 0) return category;
  return a.title.localeCompare(b.title);
});

const rows = [
  `Catalog count: ${index.count} curated designs.`,
  "",
  "| Design | Category | Source | Best for |",
  "| --- | --- | --- | --- |",
  ...designs.map((design) => {
    const designLink = `[${escapeCell(design.title)}](./${design.designMdPath})`;
    const sourceLink = `[${escapeCell(new URL(design.sourceUrl).hostname.replace(/^www\\./, ""))}](${design.sourceUrl})`;
    return `| ${designLink} | ${escapeCell(design.category)} | ${sourceLink} | ${escapeCell(design.bestFor)} |`;
  }),
].join("\n");

const next = readme.replace(
  /<!-- catalog-list:start -->[\s\S]*?<!-- catalog-list:end -->/,
  `<!-- catalog-list:start -->\n${rows}\n<!-- catalog-list:end -->`,
);

if (next === readme) {
  throw new Error("README catalog markers not found.");
}

await writeFile(readmeUrl, next, "utf8");
console.log(`Updated README.md with ${index.count} catalog rows.`);

function escapeCell(value) {
  return String(value).replaceAll("|", "\\|").replace(/\s+/g, " ").trim();
}
