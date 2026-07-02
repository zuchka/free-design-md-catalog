import { resolveHostOverride } from "./config.js";
import { fetchCatalog } from "./fetch-catalog.js";
import type { CatalogDesignSummary } from "./types.js";

export interface ListOptions {
  host: string | undefined;
  category: string | undefined;
  search: string | undefined;
  json: boolean;
}

export interface ListRenderOptions {
  columns?: number;
  color?: boolean;
}

export interface FilteredCatalog {
  count: number;
  categories: string[];
  designs: CatalogDesignSummary[];
}

export async function runList(
  opts: ListOptions,
  renderOpts: ListRenderOptions = {},
): Promise<string> {
  const host = resolveHostOverride(opts.host);
  const catalog = await fetchCatalog(host);
  const filtered = filterCatalog(catalog, opts);

  if (opts.json) {
    return `${JSON.stringify(filtered, null, 2)}\n`;
  }

  return formatCatalog(filtered, opts, renderOpts);
}

export function filterCatalog(
  catalog: FilteredCatalog,
  opts: Pick<ListOptions, "category" | "search">,
): FilteredCatalog {
  const categoryNeedle = opts.category?.trim().toLowerCase();
  const searchNeedle = opts.search?.trim().toLowerCase();
  const designs = catalog.designs.filter((design) => {
    if (categoryNeedle && design.category.toLowerCase() !== categoryNeedle) {
      return false;
    }
    if (!searchNeedle) return true;
    const haystack = [
      design.slug,
      ...design.aliases,
      design.title,
      design.sourceUrl,
      design.category,
      design.description,
      design.bestFor,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(searchNeedle);
  });

  return {
    count: designs.length,
    categories: catalog.categories.filter((category) =>
      designs.some((design) => design.category === category),
    ),
    designs,
  };
}

export function formatCatalog(
  catalog: FilteredCatalog,
  opts: Partial<Pick<ListOptions, "category" | "search">> = {},
  renderOpts: ListRenderOptions = {},
): string {
  const width = clamp(renderOpts.columns ?? 100, 72, 140);
  const paint = styles(Boolean(renderOpts.color));
  const lines: string[] = [];
  const filters = [
    opts.category ? `category "${opts.category}"` : null,
    opts.search ? `search "${opts.search}"` : null,
  ].filter((item): item is string => Boolean(item));

  lines.push(
    `${paint.bold("Free design.md catalog")} - ${catalog.count} curated design${catalog.count === 1 ? "" : "s"}`,
  );
  if (filters.length > 0) {
    lines.push(`Filtered by ${filters.join(", ")}`);
  }
  lines.push("");

  if (catalog.designs.length === 0) {
    lines.push("No curated designs matched.");
    lines.push("");
    lines.push("Run: free-design-md list");
    return `${lines.join("\n")}\n`;
  }

  const slugWidth = columnWidth(
    catalog.designs.map((design) => design.slug),
    10,
    18,
  );
  const titleWidth = columnWidth(
    catalog.designs.map((design) => design.title),
    12,
    22,
  );
  const urlWidth = columnWidth(
    catalog.designs.map((design) => design.sourceUrl),
    18,
    32,
  );
  const descWidth = Math.max(24, width - slugWidth - titleWidth - urlWidth - 9);

  for (const category of catalog.categories) {
    const designs = catalog.designs.filter(
      (design) => design.category === category,
    );
    if (designs.length === 0) continue;
    lines.push(paint.heading(category));
    for (const design of designs) {
      lines.push(
        `  ${pad(truncate(design.slug, slugWidth), slugWidth)} ` +
          `${pad(truncate(design.title, titleWidth), titleWidth)} ` +
          `${pad(truncate(design.sourceUrl, urlWidth), urlWidth)} ` +
          truncate(design.bestFor, descWidth),
      );
    }
    lines.push("");
  }

  lines.push("Run: free-design-md add <slug>");
  return `${lines.join("\n")}\n`;
}

function columnWidth(values: string[], min: number, max: number): number {
  const longest = values.reduce((acc, value) => Math.max(acc, value.length), 0);
  return clamp(longest, min, max);
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function pad(value: string, width: number): string {
  return value.length >= width
    ? value
    : value + " ".repeat(width - value.length);
}

function truncate(value: string, width: number): string {
  if (value.length <= width) return value;
  if (width <= 1) return value.slice(0, width);
  if (width <= 3) return value.slice(0, width);
  return `${value.slice(0, width - 3)}...`;
}

function styles(enabled: boolean): {
  bold: (value: string) => string;
  heading: (value: string) => string;
} {
  if (!enabled) {
    return {
      bold: (value) => value,
      heading: (value) => value,
    };
  }
  return {
    bold: (value) => `\u001B[1m${value}\u001B[22m`,
    heading: (value) => `\u001B[1m${value}\u001B[22m`,
  };
}
