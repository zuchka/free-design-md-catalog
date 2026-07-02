export interface SavedDesign {
  id: string;
  title: string;
  enrichedMarkdown: string;
  deterministicMarkdown: string;
}

export interface CatalogDesignSummary {
  slug: string;
  aliases: string[];
  title: string;
  sourceUrl: string;
  category: string;
  description: string;
  bestFor: string;
  hasArtifact: boolean;
  designMdPath?: string;
}

export interface CatalogDesignListResponse {
  count: number;
  categories: string[];
  designs: CatalogDesignSummary[];
}
