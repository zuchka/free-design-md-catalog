---
version: alpha
name: ClickHouse
description: "ClickHouse is a database-performance brand that speaks entirely in dark mode: a near-black charcoal canvas (#131312) holds white display type set in a custom geometric sans (Basier) at aggressive weight 600 — the headline at 96 px is the loudest thing on the page. The single chromatic gesture is a muted forest-green (#166534) that owns every CTA and trusted-by callout label, never decorative, always transactional. Cards are barely-darker surfaces that float on the page held by a 10–15 px soft drop-shadow and an 8 px radius — no borders, no noise. The brand's restraint is deliberate: it has nothing to prove visually; the millisecond query claim does the work."

colors:
  primary: "#166534"
  on-primary: "#fefefe"
  ink: "#ffffff"
  body: "#f5f5f5"
  mute: "#a3a3a3"
  mute-deep: "#737373"
  hairline: "rgba(255,255,255,0.10)"
  canvas: "#131312"
  canvas-soft: "#1e1e1c"
  canvas-card: "#1d1d1b"
  canvas-raised: "#232321"
  link: "#4ade80"
  success: "#166534"
  error: "#ef4444"
  warning: "#d97706"
  amber: "#d97706"
  amber-soft: "#fef3c7"
  green-deep: "#14532d"
  green-mid: "#166534"
  green-light: "#bbf7d0"
  yellow-cta: "#facc15"
  neutral-200: "#e5e5e5"
  neutral-300: "#d4d4d4"
  neutral-500: "#737373"
  neutral-700: "#404040"
  neutral-750: "#1e1d1b"
  neutral-900: "#0a0a0a"
  on-canvas: "#f5f5f5"

typography:
  display-xl:
    fontFamily: "basier, \"basier Fallback\", Inter, system-ui, sans-serif"
    fontSize: 96px
    fontWeight: 600
    lineHeight: 96px
    letterSpacing: normal
  display-lg:
    fontFamily: "basier, \"basier Fallback\", Inter, system-ui, sans-serif"
    fontSize: 60px
    fontWeight: 600
    lineHeight: 60px
    letterSpacing: normal
  display-md:
    fontFamily: "basier, \"basier Fallback\", Inter, system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 45px
    letterSpacing: normal
  display-sm:
    fontFamily: "basier, \"basier Fallback\", Inter, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
    letterSpacing: normal
  body-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 32px
  body-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-medium:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  caption:
    fontFamily: "Inter, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  caption-medium:
    fontFamily: "Inter, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 25px
  button-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  button-lg:
    fontFamily: "basier, \"basier Fallback\", Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  button: 3.35544e+07px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 10px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 40px
  4xl: 48px
  5xl: 64px
  6xl: 96px
  section: 128px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-canvas}"
    typography: "{typography.body-sm}"
    height: 64px
    padding: "{spacing.xs} {spacing.xl}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.body-sm-medium}"
    padding: "{spacing.xs} {spacing.md}"
    rounded: "{rounded.full}"
  nav-cta-get-started:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
  nav-link-sign-in:
    backgroundColor: "transparent"
    textColor: "{colors.on-canvas}"
    typography: "{typography.body-sm-medium}"
    padding: "{spacing.xs} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-canvas}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
  button-yellow:
    backgroundColor: "{colors.yellow-cta}"
    textColor: "{colors.canvas}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.6xl} {spacing.xl}"
  trusted-by-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.caption-medium}"
    padding: "{spacing.xl} {spacing.xl}"
  card-feature:
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.on-canvas}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  card-announcement:
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.on-canvas}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  card-stat:
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  badge-label:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.caption-medium}"
    rounded: "{rounded.full}"
    padding: "{spacing.xxs} {spacing.xs}"
  section-band-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.5xl} {spacing.xl}"
  cookie-banner:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.on-canvas}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-sm}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.xl}"

  ex-pricing-tier:
    description: "Default pricing tier card on the dark canvas surface."
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.on-canvas}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — primary green fill with white text."
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "Feature comparison summary card on canvas-card surface."
    backgroundColor: "{colors.canvas-card}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    description: "Subscription summary drawer — line items per tier add-on."
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row. Active state uses green primary as left-edge indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  ex-data-table-cell:
    description: "Data table chrome. Header uses caption-medium; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption-medium}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card — card-feature chrome with form fields inside."
    backgroundColor: "{colors.canvas-card}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog surface — card-feature chrome with elevated shadow."
    backgroundColor: "{colors.canvas-card}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state frame — generous padding on canvas-soft surface."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification — card-announcement chrome with soft drop-shadow."
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"

---

## Overview

ClickHouse is an unambiguously dark brand. The entire marketing surface lives on a near-black charcoal (`{colors.canvas}` — `#131312`) that admits almost no light except through its single chromatic signature: a muted forest-green (`{colors.primary}` — `#166534`) used exclusively for conversion surfaces and the "CLICKHOUSE IS TRUSTED BY" callout. There is no gradient, no hero illustration, no photography — just white display type colliding with the darkness at 96 px and the green CTA pill cutting through it. This restraint reads as confidence: the product is the spectacle, not the interface.

The typographic system splits in two: Basier, a proprietary geometric sans, carries every display headline at weight 600 with 1:1 line-height at hero scale — tight enough that the 96 px headline sits like a logotype. Inter handles everything below display — body, captions, nav labels — at weights 400 and 500. There are no italic moments, no uppercase tracking effects, no decorative type gestures. The hierarchy is enforced through size alone.

Surface depth is minimal. Cards are barely-darker rectangles (`{colors.canvas-card}` — `#1d1d1b`) that separate from the page background by a 10–15 px soft shadow rather than a hard border. Card radius is a measured 8 px — a pragmatic square-ish corner that reads as "product UI" rather than "marketing." CTAs are a stark counterpoint: the button radius is measured as `3.35544e+07px`, which renders as a full pill at any width. The pill shape is the brand's only geometric flourish.

The page uses green (`{colors.primary}`) for CTAs and a yellow-gold accent (`{colors.yellow-cta}`) that appears in secondary surface callouts — possibly the Langfuse acquisition announcement. The green is dark enough to pass WCAG AA against white text; the yellow is bright against the dark canvas. Neither colour appears in decorative contexts — both are purely functional.

## Colors

### Brand & Action
- **Primary Green** (`{colors.primary}` — `#166534`): The single conversion colour. Carries the "Get Started" nav CTA, the "Start free cloud trial" hero button, and the "CLICKHOUSE IS TRUSTED BY" label. Never used decoratively.
- **On Primary** (`{colors.on-primary}` — `#fefefe`): All text sitting on green primary surfaces.
- **Yellow CTA** (`{colors.yellow-cta}` — `#facc15`): A high-visibility amber-yellow that appears on secondary CTAs and announcement callouts — visible in the cookie consent "Allow cookies" button and the Langfuse acquisition panel.
- **Green Deep** (`{colors.green-deep}` — `#14532d`): The darker green tone from the CSS `--color-primary-900` step — used for pressed/hover states on the primary button.
- **Green Light** (`{colors.green-light}` — `#bbf7d0`): The lightest green from the primary scale — used in success states or highlight badges.
- **Link** (`{colors.link}` — `#4ade80`): The bright mint-green used for inline links on dark surfaces.

### Surface
- **Canvas** (`{colors.canvas}` — `#131312`): The primary page background. Everything lives on this near-black charcoal.
- **Canvas Soft** (`{colors.canvas-soft}` — `#1e1e1c`): A one-step-lighter surface for inset regions and secondary bands.
- **Canvas Card** (`{colors.canvas-card}` — `#1d1d1b`): The card surface — barely distinguishable from canvas, with separation achieved through shadow rather than colour contrast.
- **Canvas Raised** (`{colors.canvas-raised}` — `#232321`): The highest-surface layer — used for the cookie banner, dropdown overlays, and raised panels.
- **Hairline** (`{colors.hairline}` — `rgba(255,255,255,0.10)`): 10 % white — the subtle border that appears on card edges, announcement panels, and form inputs.

### Text
- **Ink** (`{colors.ink}` — `#ffffff`): Pure white — all h1 and h2 headlines on dark surfaces.
- **Body** (`{colors.body}` — `#f5f5f5`): Near-white — body paragraphs and nav links. The brand's default on-dark text tone.
- **Mute** (`{colors.mute}` — `#a3a3a3`): The 400-step neutral — secondary captions, footer links, supporting body copy.
- **Mute Deep** (`{colors.mute-deep}` — `#737373`): The 500-step neutral — lowest-priority text, fine print.

### Neutral Scale (system)
- **Neutral 200** (`{colors.neutral-200}` — `#e5e5e5`): Light-value neutral from the CSS token set.
- **Neutral 300** (`{colors.neutral-300}` — `#d4d4d4`): Mid-light neutral.
- **Neutral 700** (`{colors.neutral-700}` — `#404040`): Mid-dark neutral — dividers on slightly-lighter surfaces.
- **Neutral 750** (`{colors.neutral-750}` — `#1e1d1b`): Near-canvas neutral, matching canvas-soft.
- **Neutral 900** (`{colors.neutral-900}` — `#0a0a0a`): Near-black — the darkest neutral in the system.

### Semantic
- **Success** (`{colors.success}` — `#166534`): Maps to primary green in this brand — the green IS the success signal.
- **Error** (`{colors.error}` — `#ef4444`): Standard destructive red visible in the CSS `--color-red-400` step.
- **Warning / Amber** (`{colors.warning}` — `#d97706`): The amber-600 tone from the CSS tokens — caution badges and warning states.

## Typography

### Font Families
Two faces carry the entire system:

1. **Basier** — a proprietary geometric sans used exclusively for display and headline roles at weight 600. The extractor identifies it as `basier` with a `"basier Fallback"` stack. It never appears at body sizes. The 96 px hero headline has 1:1 line-height — the face is tight-set enough that leading at display scale is line-height equals font-size.
2. **Inter** — the open-source humanist sans that handles everything else: body paragraphs, nav labels, button labels, captions. Weights 400 (body) and 500 (medium labels) are the working set.

There are no monospaced faces visible on the marketing surface — this is a database brand that, surprisingly, keeps code samples out of the hero.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display-xl}` | 96px | 600 | 96px | Hero headline ("The leading database for AI") — Basier at 1:1 tight set. |
| `{typography.display-lg}` | 60px | 600 | 60px | Large section headlines at intermediate breakpoints. |
| `{typography.display-md}` | 36px | 600 | 45px | Section heads ("Powering agentic systems" sub-titles, stat callout numbers). |
| `{typography.display-sm}` | 24px | 600 | 32px | Card-level headlines, feature titles. |
| `{typography.label}` | 20px | 600 | 25px | h3-level card subheads (Basier at 20 px). |
| `{typography.body-lg}` | 18px | 400 | 32px | Lead paragraph under hero headline ("Powering agentic systems with millisecond queries at petabyte scale."). |
| `{typography.body-md}` | 16px | 400 | 24px | Default body paragraph in cards and feature sections. |
| `{typography.body-sm}` | 14px | 400 | 20px | Nav links, secondary body, cookie banner text, announcement card body. |
| `{typography.body-sm-medium}` | 14px | 500 | 20px | Nav link labels, button labels, emphasized secondary text. |
| `{typography.caption}` | 12px | 400 | 16px | Footer fine print, metadata labels. |
| `{typography.caption-medium}` | 12px | 500 | 16px | "CLICKHOUSE IS TRUSTED BY" label — uppercase tracking at small size. |
| `{typography.button-md}` | 14px | 400 | 20px | CTA button labels ("Start free cloud trial", "Contact sales", "Get Started"). |
| `{typography.button-lg}` | 16px | 600 | 24px | Large marketing button labels where Basier face is promoted. |

### Principles
- **Size is the only hierarchy tool.** The brand never uses colour to distinguish heading from sub-heading — both are white on dark. Weight 600 at large size does all the work.
- **1:1 line-height at hero scale is non-negotiable.** The 96 px display headline has 96 px line-height. This is a deliberate tight-set, not a default — reversing it to 1.2 breaks the locked-block feel of the hero.
- **Basier for display, Inter for everything else.** The font boundary is at approximately 20 px / weight 600. Below that threshold, Inter takes over completely.
- **No letter-spacing manipulation.** The extracted letter-spacing for all headings is `normal`. The brand does not compensate with tracking — the geometric face handles density natively.

### Note on Font Substitutes
Basier is proprietary. The closest open-source substitutes:
- **Geometric sans** — *Plus Jakarta Sans* (600) or *Outfit* (600) match the squarish-geometric construction. *DM Sans* is a second-best option.
- **Body** — Inter is already open-source; no substitution needed.

## Layout

### Spacing System
- **Base unit**: 8 px. The CSS scale extracted is `8 / 10 / 12 / 16 / 24 / 32 px`. The 10 px step is an unusual addition — likely used for tight internal component gaps (icon + label spacing).
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 10 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 40 px · `{spacing.4xl}` 48 px · `{spacing.5xl}` 64 px · `{spacing.6xl}` 96 px · `{spacing.section}` 128 px.
- **Section padding**: marketing bands use `{spacing.5xl}` to `{spacing.6xl}` top/bottom. The hero is especially generous to let the oversized headline breathe.
- **Card interior padding**: feature cards sit at `{spacing.xl}` 24 px; announcement cards tighten to `{spacing.lg}` 16 px.
- **Button padding**: the CTA button uses `{spacing.md} {spacing.lg}` — 12 px vertical × 16 px horizontal, confirmed by the deterministic extraction.

### Grid & Container
- **Max width**: the page content appears to centre at approximately 1280 px with horizontal gutters of `{spacing.xl}` 24 px on desktop.
- **Column patterns**:
  - Hero: single centred column — headline, sub-headline, CTA pair, all centred.
  - Feature card row: likely 3-up or 4-up at desktop.
  - Announcement / acquisition callout: appears as a horizontally-laid card below the hero CTA pair.
  - Trusted-by strip: logo row, single line, centred.

### Whitespace Philosophy
The dark canvas absorbs visual weight, so the brand compensates with generous section spacing. The hero is tall — the 96 px headline alone plus lead paragraph plus CTA pair plus trusted-by strip reads as a long first impression. Cards are separated from each other by gap rather than borders; the near-identical surface colour means whitespace IS the separator. Inside cards, content is tight — the brand doesn't pad to fill space.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero and section bands that share the canvas colour. |
| Level 1 — Hairline | `1px solid rgba(255,255,255,0.10)` border only. | Announcement cards, form inputs, subtle dividers. |
| Level 2 — Soft Drop | `0px 10px 15px -3px rgba(0,0,0,0.10), 0px 4px 6px -4px rgba(0,0,0,0.10)` | Feature cards floating on the canvas — the primary card elevation in the system. |
| Level 3 — Raised | Shadow Level 2 + hairline border combo. | Cookie banner, modal surfaces, raised panels. |

The brand uses a standard two-offset drop shadow (confirmed by extraction) — Tailwind's `shadow-lg` pattern. It is not a stacked multi-offset system like Vercel; it is simpler and appropriate for a dark surface where shadow is barely visible anyway. The card separation is achieved as much by the `{colors.canvas-card}` surface tone as by the shadow.

### Note on Dark-Mode Depth
On a dark canvas, lighter surfaces appear "raised" — so `{colors.canvas-card}` (`#1d1d1b`) feels elevated above `{colors.canvas}` (`#131312`) even without shadow. The brand uses this dark-mode surface-tone trick as its primary depth system. Shadow is additive confirmation, not the primary cue.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands, hero section. |
| `{rounded.xs}` | 4px | Tightest component corners — small badges, tiny chips. |
| `{rounded.sm}` | 6px | Mid-small UI radius. |
| `{rounded.md}` | 8px | The card radius — confirmed by deterministic extraction. All feature cards, announcement cards, stat cards. |
| `{rounded.lg}` | 12px | Slightly larger card chrome for modal/dialog contexts. |
| `{rounded.xl}` | 16px | Large card chrome for image-capped cards. |
| `{rounded.button}` | 3.35544e+07px | The fully-rendered pill CTA — "Get Started", "Start free cloud trial", "Contact sales", "Allow cookies". Renders as a perfect pill at any width. Confirmed by deterministic extraction. |
| `{rounded.full}` | 9999px | Icon-button circular containers, nav ghost pills. |

The coexistence of a square card (8 px) and a full-pill button is the brand's defining geometric tension. Cards say "product database"; pill buttons say "modern SaaS." The two radii never bleed into each other's roles.

## Components

### Buttons

**`button-primary`** — the forest-green pill CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}` (14 px / 400), padding `{spacing.md} {spacing.lg}` (12 × 16 px), shape `{rounded.button}` (full pill). Used for "Start free cloud trial" in hero and "Get Started" in nav.

**`button-secondary`** — the ghost pill for the secondary marketing action.
- Background transparent, text `{colors.on-canvas}`, 1 px solid `{colors.hairline}` border, same typography + padding + shape as `button-primary`. Used for "Contact sales" paired with the green primary.

**`button-yellow`** — the amber-yellow pill for high-visibility secondary callouts.
- Background `{colors.yellow-cta}`, text `{colors.canvas}` (dark text on light fill), same typography + shape as `button-primary`. Used in the cookie consent "Allow cookies" button and secondary announcement CTAs.

**`nav-cta-get-started`** — the compact green pill in the nav bar.
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.button-md}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.button}`. The nav-scale version of `button-primary`.

### Navigation

**`nav-bar`** — the sticky top navigation.
- Background `{colors.canvas}`, text `{colors.on-canvas}`, height 64 px, padding `{spacing.xs} {spacing.xl}`. Layout: ClickHouse logo-mark + wordmark left, primary link row centre, GitHub star count + "Sign in" + "Get Started" pill cluster right.

**`nav-link`** — the centred nav link row (Products, Solutions, Docs, Resources, Pricing, Contact us).
- Text `{colors.body}`, set in `{typography.body-sm-medium}`, padding `{spacing.xs} {spacing.md}`. Includes a dropdown chevron indicator for expandable items.

**`nav-link-sign-in`** — the transparent "Sign in" link in the nav cluster.
- Text `{colors.on-canvas}`, `{typography.body-sm-medium}`, no background, no border.

### Hero & Bands

**`hero-band`** — the full-bleed dark hero with the oversized headline.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.6xl} {spacing.xl}`. Inside: display-xl headline centred at 96 px, `{typography.body-lg}` lead paragraph, then a CTA row with `button-primary` + `button-secondary`. No gradient, no image — raw dark canvas is the hero backdrop.

**`section-band-dark`** — the recurring section pattern (feature areas, stat callouts).
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.xl}`. Headline in `{typography.display-md}`.

### Cards

**`card-feature`** — the standard feature-area card.
- Background `{colors.canvas-card}`, text `{colors.on-canvas}`, padding `{spacing.xl}` 24 px, shape `{rounded.md}` 8 px. Carries Level 2 soft drop-shadow. Holds an icon or graphic cap, a `{typography.label}` 20 px headline, and a `{typography.body-md}` body paragraph.

**`card-announcement`** — the acquisition/news callout card (Langfuse panel visible in screenshot).
- Background `{colors.canvas-card}`, text `{colors.on-canvas}`, 1 px solid `{colors.hairline}` border, padding `{spacing.lg}`, shape `{rounded.md}`. Hosts a product logo on the left and a body paragraph on the right.

**`card-stat`** — a stat/metric callout card (speed / scale numbers).
- Background `{colors.canvas-card}`, headline in `{typography.display-md}` white, supporting label in `{typography.body-sm}`, padding `{spacing.xl}`, shape `{rounded.md}`.

### Utility

**`trusted-by-strip`** — the "CLICKHOUSE IS TRUSTED BY" logo row.
- Background `{colors.canvas}`, label text in `{colors.primary}` using `{typography.caption-medium}`, padding `{spacing.xl}`. Logos rendered as monochrome light-coloured SVGs on the dark canvas. The primary green label colour is the only brand-colour moment outside of CTAs.

**`badge-label`** — the small inline tag ("New", acquisition labels).
- Text `{colors.primary}`, `{typography.caption-medium}`, transparent background, shape `{rounded.full}`.

**`link-inline`** — body-copy inline links on dark surfaces.
- Text `{colors.link}` (`#4ade80` bright mint), `{typography.body-sm}`. The mint-green against near-black reads distinctly without being jarring.

**`cookie-banner`** — the cookie consent overlay visible at bottom-left.
- Background `{colors.canvas-raised}`, text `{colors.on-canvas}`, 1 px solid `{colors.hairline}` border, padding `{spacing.lg}`, shape `{rounded.md}`. Contains `{typography.body-sm}` body, a `link-inline` "Learn more" link, a `button-yellow` "Allow cookies" CTA, and a plain text "Dismiss" link.

**`footer`** — the bottom navigation block.
- Background `{colors.canvas}`, text `{colors.mute}`, padding `{spacing.4xl} {spacing.xl}`. Column labels in `{typography.body-sm-medium}` at slightly brighter `{colors.body}`; link rows in `{typography.body-sm}` `{colors.mute}`.

## Do's and Don'ts

### Do
- Use `{colors.primary}` (`#166534`) exclusively for conversion surfaces — CTAs and the trusted-by label. Every other surface is dark neutrals only.
- Always render CTA buttons as full pills (`{rounded.button}` — `3.35544e+07px`). The pill is the brand's only geometric signature.
- Keep card radius strictly at `{rounded.md}` 8 px. Cards are square-ish and product-adjacent; they do not inherit the pill radius.
- Set hero headlines in `{typography.display-xl}` (Basier 96 px / weight 600 / 1:1 line-height). Reducing the headline weight or opening the line-height immediately softens the brand's assertive register.
- Use `{colors.canvas-card}` as the card surface — the near-invisible tone separation from `{colors.canvas}` plus a soft drop-shadow is the entire card depth system.
- Keep Inter for all body and label text below 20 px / weight 600. Basier does not appear at small sizes.
- Layer soft drop-shadows (`0px 10px 15px -3px rgba(0,0,0,0.10)`) on cards rather than borders — the dark surface makes hairline borders nearly invisible anyway.

### Don't
- Don't introduce a light-mode surface. The brand is dark-only; forcing canvas to white breaks every typographic and colour relationship.
- Don't use the green primary for decorative purposes — icon fills, section backgrounds, border accents. Green = CTA only.
- Don't round cards to a pill or even a generous 16 px. The 8 px radius is deliberate — it signals "database product," not "consumer SaaS."
- Don't set body paragraphs in Basier. The face is for display sizes only; Inter below 20 px is non-negotiable.
- Don't open the hero headline's line-height past 1:1. The 96 px / 96 px ratio creates the locked-block impact. Adding conventional 1.2 leading immediately weakens the hero.
- Don't reduce the green CTA to a filled rectangle by swapping `{rounded.button}` for `{rounded.md}`. The pill shape is the brand's only concession to warmth in an otherwise austere system.
- Don't add a decorative gradient or hero illustration. The brand deliberately withholds decoration — the raw dark canvas is the statement.
