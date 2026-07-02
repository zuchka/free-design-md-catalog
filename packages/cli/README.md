# free-design-md

Download `design.md` files from [Free design.md](https://freedesign.md): public saved designs by share ID or URL, plus curated catalog artifacts by slug.

## Usage

```bash
npx free-design-md add <id-or-url-or-slug> [--out <path>] [--host https://...] [--force]
npx free-design-md list [--category <name>] [--search <text>] [--json] [--host https://...]
```

Typical flow:

```bash
npx free-design-md list
npx free-design-md list --search stripe
npx free-design-md add stripe --out specs/stripe.design.md
```

Use `list` to browse the curated catalog. Use `add` to write a `design.md` file into your project.

`<id-or-url-or-slug>` accepts:

- a bare share ID, such as `abc123xyz`
- a full share URL, such as `https://freedesign.md/d/abc123xyz`
- a curated catalog slug, such as `stripe` or `linear.app`

### Flags

- `--out <path>`: output file. Defaults to `<resolved-id>.design.md` in the current directory, such as `stripe.design.md` or `linear.app.design.md`.
- `--host <url>`: override the host. Defaults to `FREE_DESIGN_MD_HOST`, then the bundled production host.
- `--force`: overwrite an existing file.
- `--category <name>`: filter `list` output to a category.
- `--search <text>`: filter `list` output by slug, title, URL, category, description, or best-use text.
- `--json`: print catalog metadata as JSON instead of a terminal table.

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
