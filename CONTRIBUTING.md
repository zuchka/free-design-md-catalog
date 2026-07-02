# Contributing

This repo accepts fixes to the public CLI and docs. The generated catalog is a mirror of the private Free design.md app catalog.

## Add Or Update A Design

Do not hand-edit `catalog/<slug>/metadata.json`, `catalog/<slug>/design.md`, or `catalog/index.json` for routine catalog changes.

The proper flow is:

1. Add or regenerate the design in the private `free-design-md` app repo.
2. Run `pnpm export:public-catalog` from that private repo.
3. Commit the resulting public repo changes.
4. Run:

```bash
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
