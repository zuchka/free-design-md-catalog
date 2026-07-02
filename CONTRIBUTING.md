# Contributing

This catalog accepts generated `design.md` artifacts for public websites.

## Add Or Update A Design

1. Add or edit `catalog/<slug>/metadata.json`.
2. Add or edit `catalog/<slug>/design.md`.
3. Run:

```bash
pnpm build:catalog-index
pnpm validate:catalog
pnpm test
```

## Metadata

Each `metadata.json` file must include:

- `slug`
- `aliases`
- `title`
- `sourceUrl`
- `category`
- `description`
- `bestFor`

Use lowercase URL-safe slugs. Keep aliases unique across the catalog.

## Rights And Attribution

Only commit generated `design.md` text and public metadata. Do not copy proprietary brand assets, screenshots, logos, or private website content. Brand names identify source websites only; no affiliation or endorsement is implied.
