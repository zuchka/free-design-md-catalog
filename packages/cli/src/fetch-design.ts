import type { SavedDesign } from "./types.js";
import { DEFAULT_HOST, PUBLIC_CATALOG_BASE } from "./config.js";
import { fetchCatalog } from "./fetch-catalog.js";

export async function fetchDesign(
  host: string | undefined,
  id: string,
): Promise<SavedDesign> {
  if (host) return fetchHostedDesign(host, id);

  const savedUrl = `${DEFAULT_HOST}/api/saved-enrichments/${encodeURIComponent(id)}`;
  const saved = await tryFetchDesign(savedUrl);
  if (saved.status === "found") return saved.design;

  const catalog = await tryFetchPublicCatalogDesign(id);
  if (catalog.status === "found") return catalog.design;
  throw new Error(
    `Design "${id}" was not found in saved designs or the public catalog.`,
  );
}

async function fetchHostedDesign(
  host: string,
  id: string,
): Promise<SavedDesign> {
  const savedUrl = `${host}/api/saved-enrichments/${encodeURIComponent(id)}`;
  const catalogUrl = `${host}/api/catalog-designs/${encodeURIComponent(id)}`;
  const saved = await tryFetchDesign(savedUrl);
  if (saved.status === "found") return saved.design;
  const catalog = await tryFetchDesign(catalogUrl);
  if (catalog.status === "found") return catalog.design;
  throw new Error(`Design "${id}" was not found at ${host}.`);
}

type FetchDesignResult =
  | { status: "found"; design: SavedDesign }
  | { status: "not-found" };

async function tryFetchDesign(url: string): Promise<FetchDesignResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30_000);
  try {
    const res = await fetch(url, { signal: controller.signal });
    if (res.status === 404) {
      return { status: "not-found" };
    }
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(
        `Fetch failed (${res.status} ${res.statusText})${body ? `: ${body}` : ""}`,
      );
    }
    const json = (await res.json()) as Partial<SavedDesign>;
    if (
      typeof json.id !== "string" ||
      typeof json.title !== "string" ||
      typeof json.enrichedMarkdown !== "string" ||
      typeof json.deterministicMarkdown !== "string"
    ) {
      throw new Error(
        "Unexpected response shape from saved-enrichments endpoint.",
      );
    }
    return { status: "found", design: json as SavedDesign };
  } finally {
    clearTimeout(timeout);
  }
}

async function tryFetchPublicCatalogDesign(
  specifier: string,
): Promise<FetchDesignResult> {
  const catalog = await fetchCatalog(undefined);
  const normalized = specifier.trim().toLowerCase();
  const summary = catalog.designs.find(
    (design) =>
      design.slug === normalized || design.aliases.includes(normalized),
  );
  if (!summary) return { status: "not-found" };

  const designMdPath =
    summary.designMdPath ?? `catalog/${summary.slug}/design.md`;
  const markdown = await fetchText(
    `${PUBLIC_CATALOG_BASE}/${encodePath(designMdPath)}`,
  );

  return {
    status: "found",
    design: {
      id: summary.slug,
      title: summary.title,
      enrichedMarkdown: markdown,
      deterministicMarkdown: markdown,
    },
  };
}

async function fetchText(url: string): Promise<string> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30_000);
  try {
    const res = await fetch(url, { signal: controller.signal });
    if (res.status === 404) {
      throw new Error(`Public catalog artifact not found: ${url}`);
    }
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(
        `Fetch failed (${res.status} ${res.statusText})${body ? `: ${body}` : ""}`,
      );
    }
    return await res.text();
  } finally {
    clearTimeout(timeout);
  }
}

function encodePath(path: string): string {
  return path.split("/").map(encodeURIComponent).join("/");
}
