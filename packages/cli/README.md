# free-design-md

Download a public or curated `design.md` from [Free design.md](https://github.com/zuchka/free-design-md-catalog) by ID, share URL, or catalog slug.

## Usage

```bash
npx free-design-md add <id-or-url-or-slug> [--out <path>] [--host https://...] [--force]
npx free-design-md list [--category <name>] [--search <text>] [--json] [--host https://...]
```

`<id-or-url-or-slug>` accepts a bare nanoid (e.g. `abc123xyz`), a full share URL (e.g. `https://freedesign.md/d/abc123xyz`), or a curated catalog slug (e.g. `stripe`, `linear.app`).

Use `list` to browse every curated design.md artifact available for download.

### Flags

- `--out <path>` — output file. Default is `<resolved-id>.design.md` in cwd, such as `stripe.design.md` or `linear.app.design.md`.
- `--host <url>` — override the host. Default reads `FREE_DESIGN_MD_HOST` env, then falls back to the bundled production host.
- `--force` — overwrite an existing file.
- `--category <name>` — filter `list` output to a category.
- `--search <text>` — filter `list` output by slug, title, URL, category, description, or best-use text.
- `--json` — print catalog metadata as JSON instead of a terminal table.

### Examples

```bash
npx free-design-md list
npx free-design-md list --category "Developer Tools & IDEs"
npx free-design-md list --search stripe
npx free-design-md list --json
npx free-design-md add abc123xyz
npx free-design-md add stripe
npx free-design-md add linear.app
npx free-design-md add linear.app --out specs/linear.md
npx free-design-md add https://freedesign.md/d/abc123xyz --out specs/stripe.md
FREE_DESIGN_MD_HOST=http://localhost:8080 npx free-design-md list
FREE_DESIGN_MD_HOST=http://localhost:8080 npx free-design-md add abc123xyz
```
