import { afterEach, describe, expect, it, vi } from "vitest";
import { formatCatalog, runList } from "../src/list.js";
import type { CatalogDesignListResponse } from "../src/types.js";

const sampleCatalog: CatalogDesignListResponse = {
  count: 3,
  categories: ["Fintech & Crypto", "Developer Tools & IDEs"],
  designs: [
    {
      slug: "stripe",
      aliases: [],
      title: "Stripe",
      sourceUrl: "https://stripe.com",
      category: "Fintech & Crypto",
      description: "Payment infrastructure.",
      bestFor: "API docs, fintech onboarding, checkout flows, and B2B SaaS.",
      hasArtifact: true,
    },
    {
      slug: "linear.app",
      aliases: ["linear"],
      title: "Linear",
      sourceUrl: "https://linear.app",
      category: "Developer Tools & IDEs",
      description: "Issue-tracking system.",
      bestFor: "Engineering workflows and focused SaaS.",
      hasArtifact: true,
    },
    {
      slug: "vercel",
      aliases: [],
      title: "Vercel",
      sourceUrl: "https://vercel.com",
      category: "Developer Tools & IDEs",
      description: "Frontend platform system.",
      bestFor: "Developer platforms, docs, deployment flows, and dashboards.",
      hasArtifact: true,
    },
  ],
};

function mockFetchCatalog(
  body: unknown,
  init: { status?: number; statusText?: string } = {},
) {
  return vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
    new Response(JSON.stringify(body), {
      status: init.status ?? 200,
      statusText: init.statusText ?? "OK",
      headers: { "Content-Type": "application/json" },
    }),
  );
}

describe("runList", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("fetches the catalog and renders grouped terminal output", async () => {
    const spy = mockFetchCatalog(sampleCatalog);

    const output = await runList({
      host: "http://localhost:8080",
      category: undefined,
      search: undefined,
      json: false,
    });

    expect(spy).toHaveBeenCalledWith(
      "http://localhost:8080/api/catalog-designs",
      expect.anything(),
    );
    expect(output).toContain("Free design.md catalog - 3 curated designs");
    expect(output).toContain("Fintech & Crypto");
    expect(output).toContain("stripe");
    expect(output).toContain("Developer Tools & IDEs");
    expect(output).toContain("Run: free-design-md add <slug>");
  });

  it("filters by category and search", async () => {
    mockFetchCatalog(sampleCatalog);

    const output = await runList({
      host: "http://localhost:8080",
      category: "Developer Tools & IDEs",
      search: "linear",
      json: false,
    });

    expect(output).toContain("Free design.md catalog - 1 curated design");
    expect(output).toContain(
      'Filtered by category "Developer Tools & IDEs", search "linear"',
    );
    expect(output).toContain("linear.app");
    expect(output).not.toContain("stripe");
    expect(output).not.toContain("vercel");
  });

  it("returns filtered JSON output", async () => {
    mockFetchCatalog(sampleCatalog);

    const output = await runList({
      host: "http://localhost:8080",
      category: undefined,
      search: "developer",
      json: true,
    });

    const parsed = JSON.parse(output) as CatalogDesignListResponse;
    expect(parsed.count).toBe(2);
    expect(parsed.categories).toEqual(["Developer Tools & IDEs"]);
    expect(parsed.designs.map((design) => design.slug)).toEqual([
      "linear.app",
      "vercel",
    ]);
  });

  it("surfaces an unexpected response shape", async () => {
    mockFetchCatalog({ items: [] });

    await expect(
      runList({
        host: "http://localhost:8080",
        category: undefined,
        search: undefined,
        json: false,
      }),
    ).rejects.toThrow(/unexpected response shape/i);
  });
});

describe("formatCatalog", () => {
  it("renders an empty state for filters with no matches", () => {
    const output = formatCatalog(
      { count: 0, categories: [], designs: [] },
      { category: "Retail", search: undefined },
    );

    expect(output).toContain("No curated designs matched.");
    expect(output).toContain("Run: free-design-md list");
  });

  it("truncates long fields to fit narrow terminals", () => {
    const output = formatCatalog(sampleCatalog, {}, { columns: 72 });

    expect(output).toContain("...");
  });
});
