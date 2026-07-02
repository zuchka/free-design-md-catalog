import type { CatalogDesignListResponse } from "./types.js";
import { PUBLIC_CATALOG_BASE } from "./config.js";

export async function fetchCatalog(
  host: string | undefined,
): Promise<CatalogDesignListResponse> {
  const url = host
    ? `${host}/api/catalog-designs`
    : `${PUBLIC_CATALOG_BASE}/catalog/index.json`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30_000);

  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(
        `Fetch failed (${res.status} ${res.statusText})${body ? `: ${body}` : ""}`,
      );
    }

    const json = (await res.json()) as Partial<CatalogDesignListResponse>;
    if (
      typeof json.count !== "number" ||
      !Array.isArray(json.categories) ||
      !Array.isArray(json.designs) ||
      !json.designs.every(isCatalogDesignSummary)
    ) {
      throw new Error("Unexpected response shape from catalog endpoint.");
    }

    return normalizeCatalog(json);
  } finally {
    clearTimeout(timeout);
  }
}

function normalizeCatalog(
  json: Partial<CatalogDesignListResponse>,
): CatalogDesignListResponse {
  return {
    count: json.count!,
    categories: json.categories!,
    designs: json.designs!.map((design) => ({
      ...design,
      hasArtifact: design.hasArtifact ?? Boolean(design.designMdPath),
    })),
  };
}

function isCatalogDesignSummary(value: unknown): boolean {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.slug === "string" &&
    Array.isArray(item.aliases) &&
    item.aliases.every((alias) => typeof alias === "string") &&
    typeof item.title === "string" &&
    typeof item.sourceUrl === "string" &&
    typeof item.category === "string" &&
    typeof item.description === "string" &&
    typeof item.bestFor === "string" &&
    (typeof item.hasArtifact === "boolean" ||
      typeof item.designMdPath === "string")
  );
}
