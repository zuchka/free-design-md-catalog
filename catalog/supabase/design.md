---
version: alpha
name: Supabase
description: "Supabase is a Postgres-first developer platform whose visual language is a study in deliberate restraint punctuated by a single electric green: the brand's signature mint (#72e3ad) lands on near-white canvas as both the hero's second headline and the primary CTA fill, doing all the decorative work the design needs. Everything else — headlines, nav, body, cards — sits in a stark ink-on-near-white system that lets the platform's technical depth speak louder than decoration. The geometric custom sans (Circular) carries every level of the hierarchy at weight 400, a conscious rejection of heavy display weights; the brand's voice is calm and confident, not emphatic. Card surfaces are pure white on off-white canvas, bordered by a hairline and softened with an 11 px radius. Buttons are compact 6 px squares — never pills — filled with that one green when primary, ghosted with a thin border when secondary."
colors:
  primary: "#72e3ad"
  on-primary: "#171717"
  brand-deep: "#1a9761"
  brand-link: "#00b96b"
  ink: "#171717"
  body: "#707070"
  mute: "#9a9a9a"
  hairline: "#e8e8e8"
  hairline-soft: "#ededed"
  hairline-strong: "#d4d4d4"
  canvas: "#ffffff"
  canvas-soft: "#fcfcfc"
  canvas-overlay: "#f5f5f5"
  theme-dark: "#1e1e1e"
  success: "#30a46c"
  success-soft: "#ccebd7"
  error: "#e93d82"
  error-soft: "#f9d8ec"
  warning: "#fa934e"
  warning-soft: "#ffcca7"
  info-blue: "#0081f1"
  info-blue-soft: "#e1f0ff"
  violet: "#5746af"
  violet-soft: "#e4defc"
  purple-soft: "#f9f1fe"
  purple-mid: "#be93e4"
  amber-soft: "#fff4d5"
  green-soft: "#ccebd7"
  slate-mute: "#687076"
  gray-100: "#fcfcfc"
  gray-300: "#f3f3f3"
  gray-400: "#ededed"
  gray-500: "#e8e8e8"
typography:
  display-xl:
    fontFamily: Circular, custom-font, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 72px
    fontWeight: 400
    lineHeight: 72px
    letterSpacing: normal
  display-lg:
    fontFamily: Circular, custom-font, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 52px
    letterSpacing: normal
  display-md:
    fontFamily: Circular, custom-font, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 36px
    fontWeight: 400
    lineHeight: 44px
    letterSpacing: normal
  display-sm:
    fontFamily: Circular, custom-font, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 24px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: normal
  body-lg:
    fontFamily: Circular, custom-font, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: normal
  body-md:
    fontFamily: Circular, custom-font, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: normal
  body-sm:
    fontFamily: Circular, custom-font, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: normal
  caption:
    fontFamily: Circular, custom-font, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: normal
  label-sm:
    fontFamily: Circular, custom-font, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: normal
  button-md:
    fontFamily: Circular, custom-font, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: normal
  button-sm:
    fontFamily: Circular, custom-font, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: normal
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  button: 6px
  md: 8px
  card: 11px
  lg: 12px
  xl: 16px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 80px
  5xl: 96px
  section: 128px
components:
  nav-bar:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 60px
    padding: "{spacing.xs} {spacing.xl}"
    borderBottom: 1px solid {colors.hairline}
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-signin:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
    border: 1px solid {colors.hairline-strong}
  nav-cta-start:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
    border: 1px solid {colors.hairline-strong}
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.xs}
  card-feature:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl} {spacing.md}"
    border: 1px solid {colors.hairline}
  card-product:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
    border: 1px solid {colors.hairline}
  hero-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.5xl} {spacing.xl}"
  hero-headline-accent:
    textColor: "{colors.primary}"
    typography: "{typography.display-xl}"
  logo-strip:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    padding: "{spacing.xl} {spacing.2xl}"
  logo-strip-label:
    textColor: "{colors.body}"
    typography: "{typography.caption}"
  section-band-light:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.4xl} {spacing.xl}"
  section-band-dark:
    backgroundColor: "{colors.theme-dark}"
    textColor: "{colors.canvas}"
    typography: "{typography.display-md}"
    padding: "{spacing.4xl} {spacing.xl}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
    height: 36px
  badge:
    backgroundColor: "{colors.gray-300}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 2px {spacing.xs}
  badge-brand:
    backgroundColor: "{colors.success-soft}"
    textColor: "{colors.brand-deep}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 2px {spacing.xs}
  github-star-chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.button}"
    padding: 2px {spacing.xs}
    border: 1px solid {colors.hairline}
  footer:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.xl}"
    borderTop: 1px solid {colors.hairline}
  link-inline:
    textColor: "{colors.brand-link}"
    typography: "{typography.body-md}"
  nav-dropdown:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.xs}"
    border: 1px solid {colors.hairline}
  ex-pricing-tier:
    description: Default pricing tier card. Canvas surface with hairline border and card radius.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured pricing tier — brand-green accent surface with on-primary text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: Product feature summary card — canvas-soft surface for grouping platform primitives.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    description: Subscription add-on summary panel — canvas surface with hairline dividers.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses brand-green left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  ex-data-table-cell:
    description: Data table chrome. Header uses label-sm; body uses body-sm.
    headerBackground: "{colors.gray-300}"
    headerTypography: "{typography.label-sm}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card. Canvas surface with card radius and form-input primitives inside.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog surface — card chrome with elevated shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame. Canvas-soft with generous padding.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-sm}"
  ex-toast:
    description: Toast notification — canvas surface with caption typography and hairline border.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Supabase is a Postgres-first developer platform — the page is a technical product surface aimed at engineers, written by people who trust the product to make the argument. Its visual identity is nearly monochromatic: near-white `{colors.canvas-soft}` body, near-black `{colors.ink}` text, a full gray ladder of hairlines and dividers, and a single mint-green accent (`{colors.primary}` — `#72e3ad`) that carries the entire brand presence. That green appears in exactly two places on the hero: the second line of the headline ("Scale to millions") and the primary CTA fill. That economy is not accidental — it makes the green feel like a signal, not decoration.

Type is set exclusively in Circular, a geometric round sans at weight 400 across every level of the hierarchy. The brand never promotes to bold for display; the hero headline at 72 px is still 400 weight, relying on size and the green accent for emphasis. There are no negative tracking values, no uppercase labels, no mono face for technical labels in the marketing surface. The system is calm and horizontal — body and secondary text sit comfortably in `{colors.body}` (`#707070`), a warm mid-gray that never feels disabled.

Surfaces follow a two-step ladder: `{colors.canvas-soft}` (`#fcfcfc`) for the page body and section bands, `{colors.canvas}` (`#ffffff`) for card faces. Cards carry an 11 px radius and a `{colors.hairline}` border — no shadow, no glow. Buttons use a 6 px radius — deliberately square relative to a pill — and the distinction between the two radii (card at 11 px, button at 6 px) is intentional and should never be collapsed. The secondary button is a white ghost with a hairline border, paired consistently with the green primary in every CTA cluster.

**Key Characteristics:**
- One green (`{colors.primary}`) does all brand work — headline accent, CTA fill, link hover. Nothing else is chromatic in the marketing surface.
- Circular at weight 400 everywhere. The brand has no bold display weight; scale alone creates hierarchy.
- 6 px square buttons (never pills) paired with 11 px card surfaces — two deliberate radii that coexist at every viewport.
- Hairline borders (`{colors.hairline}` `#e8e8e8`) are the elevation system — no shadows on cards in the marketing surface.
- Customer logos rendered as monochrome in a single flex row with a "Trusted by fast-growing companies worldwide" caption underneath.
- A dark theme surface (`{colors.theme-dark}` `#1e1e1e`) is referenced in meta theme-color and likely used for in-product / dashboard surfaces.

## Colors

### Brand & Accent
- **Primary Green** (`{colors.primary}` — `#72e3ad`): The entire brand accent. Used as the hero accent headline color ("Scale to millions"), the primary CTA background, and link hover states. The single chromatic element in the marketing surface.
- **Brand Deep** (`{colors.brand-deep}` — `#1a9761`): The deep green used for brand-badge text and pressed states on the primary green CTA.
- **Brand Link** (`{colors.brand-link}` — `#00b96b`): The green tone used for inline text links and anchor hovers — slightly more saturated than `{colors.primary}` for legibility on white.
- **Success** (`{colors.success}` — `#30a46c`): Success indicator green — semantic, used in status badges and validation states.
- **Success Soft** (`{colors.success-soft}` — `#ccebd7`): Soft pastel green fill for brand-tinted badges and success notification backgrounds.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure-white card and dialog surface.
- **Canvas Soft** (`{colors.canvas-soft}` — `#fcfcfc`): The near-white page body — `{colors.gray-100}` in the extracted tokens. Almost every section band sits on this tone.
- **Canvas Overlay** (`{colors.canvas-overlay}` — `#f5f5f5`): Hover and overlay state — extracted from `--background-overlay-hover`.
- **Gray 300** (`{colors.gray-300}` — `#f3f3f3`): Inset backgrounds for table headers and secondary surfaces.
- **Gray 400** (`{colors.gray-400}` — `#ededed`): The `{colors.hairline-soft}` layer — softest divider.
- **Gray 500** (`{colors.gray-500}` — `#e8e8e8`): The default `{colors.hairline}` — used for card borders, input borders, nav bottom border.
- **Theme Dark** (`{colors.theme-dark}` — `#1e1e1e`): The dark-mode surface referenced in `meta theme-color`. Used for polarity-flipped section bands in the full-page context.

### Text
- **Ink** (`{colors.ink}` — `#171717`): Every heading and active text on light surfaces.
- **Body** (`{colors.body}` — `#707070`): Secondary text — card body, nav secondary labels, logo strip caption, footer body.
- **Mute** (`{colors.mute}` — `#9a9a9a`): Lowest-priority text — placeholders, fine print, de-emphasised labels.
- **Slate Mute** (`{colors.slate-mute}` — `#687076`): The `--color-slate-1100` token; used for subtle label text in certain component contexts.
- **On Primary** (`{colors.on-primary}` — `#171717`): Text on the green primary surface — ink-dark, not white, because the green is light enough.

### Semantic
- **Error / Crimson** (`{colors.error}` — `#e93d82`): Destructive action and validation error red-pink. Extracted from `--color-crimson-900`.
- **Error Soft** (`{colors.error-soft}` — `#f9d8ec`): Pastel pink background for error states. Extracted from `--color-pink-500`.
- **Warning** (`{colors.warning}` — `#fa934e`): Caution / pending indicator. Extracted from `--color-orange-800`.
- **Warning Soft** (`{colors.warning-soft}` — `#ffcca7`): Soft orange pastel for warning backgrounds. Extracted from `--color-orange-600`.
- **Info Blue** (`{colors.info-blue}` — `#0081f1`): Informational link and status color. Extracted from `--color-blue-1000`.
- **Info Blue Soft** (`{colors.info-blue-soft}` — `#e1f0ff`): Soft blue background for info states. Extracted from `--color-blue-400`.
- **Violet** (`{colors.violet}` — `#5746af`): Purple accent for secondary feature highlights. Extracted from `--color-violet-1100`.
- **Violet Soft** (`{colors.violet-soft}` — `#e4defc`): Soft violet fill for badge and chip backgrounds.
- **Amber Soft** (`{colors.amber-soft}` — `#fff4d5`): Soft amber for warning / highlight backgrounds. Extracted from `--color-amber-300`.

## Typography

### Font Family
One face carries the entire system: **Circular**, a geometric round sans with optically even strokes, used at weight 400 across display, body, button, and label. The brand does not use a separate monospace face in its marketing surface. The full stack is `Circular, custom-font, "Helvetica Neue", Helvetica, Arial, sans-serif` — Circular is a licensed proprietary face; the nearest open-source match is *Nunito* or *DM Sans* at weight 400.

There are no bold weights, no italic treatments, no uppercase labels in the extracted marketing surface. The brand earns hierarchy purely through size and the single green accent. Letter-spacing is `normal` at every level — the brand does not track headlines negatively the way Vercel does, giving Supabase a softer, more approachable texture at large scale.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 400 | 72px | normal | Hero headline — "Build in a weekend" (ink) + "Scale to millions" (green accent). |
| `{typography.display-lg}` | 48px | 400 | 52px | normal | Major section headlines. |
| `{typography.display-md}` | 36px | 400 | 44px | normal | Section sub-headlines, feature-cluster headings. |
| `{typography.display-sm}` | 24px | 400 | 32px | normal | Card cluster headings, pricing-tier names. |
| `{typography.body-lg}` | 18px | 400 | 28px | normal | Lead paragraphs under hero or section headlines. |
| `{typography.body-md}` | 16px | 400 | 24px | normal | Default body paragraph. |
| `{typography.body-sm}` | 14px | 400 | 20px | normal | Secondary body, nav-link text, CTA labels, card body. |
| `{typography.caption}` | 12px | 400 | 16px | normal | Logo strip caption, badge labels, footer secondary lines. |
| `{typography.label-sm}` | 12px | 400 | 16px | normal | Table headers, technical micro-labels. |
| `{typography.button-md}` | 14px | 400 | 20px | normal | Primary and secondary CTA labels — "Start your project", "Sign in". |
| `{typography.button-sm}` | 12px | 400 | 16px | normal | Ghost button labels, GitHub star chip. |

### Principles
- **Weight 400 is the only weight.** The brand never reaches for bold or medium. Emphasis is created entirely through size, color (the green accent), and spatial contrast. Reverting to a heavier weight breaks the voice.
- **Normal tracking throughout.** Unlike many developer brands, Supabase does not apply negative letter-spacing to its large headlines. The 72 px hero reads open and friendly, not compressed.
- **Sentence-case everywhere.** No all-caps labels, no uppercase eyebrows.
- **Green for one line only.** The hero uses the green accent on the second headline line only. Every other headline is `{colors.ink}`. The rule is one green moment per hero — not a gradient, not a gradient stop.
- **No mono face in the marketing surface.** Technical credibility is carried by copy ("Postgres", "APIs", "Edge Functions") not by font choice. The mono face lives in the in-product dashboard only.

### Note on Font Substitutes
Circular is a licensed proprietary typeface (Lineto). Open-source substitutes for this system:
- **Circular** — *DM Sans* (weight 400) is the closest round geometric match at scale. *Nunito* works at body sizes. *Plus Jakarta Sans* at 400 is a usable second option.

## Layout

### Spacing System
- **Base unit**: 4 px. Every captured value is a multiple of 4, confirming a strict 4 px grid.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 20 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 80 px · `{spacing.5xl}` 96 px · `{spacing.section}` 128 px.
- **Section padding**: marketing bands use `{spacing.4xl}` (80 px) to `{spacing.5xl}` (96 px) top/bottom. The hero uses `{spacing.5xl}` to give the headline breathing room.
- **Card interior**: feature cards use `{spacing.xl}` 24 px / `{spacing.md}` 16 px (matching the extracted `24px 16px` padding). Product cards use `{spacing.xl}` on all sides.
- **Inline gap**: CTA button rows use `{spacing.xs}` 8 px gap between siblings; nav CTA cluster uses `{spacing.xs}` between "Sign in" and "Start your project".

### Grid & Container
- **Max width**: approximately 1200 px; content centres with horizontal gutters of `{spacing.xl}` 24 px on desktop, `{spacing.md}` 16 px on mobile.
- **Column patterns**:
  - Hero: centred single column with two stacked headline lines.
  - Logo strip: ~5 logos wide in a single flex row, single line label underneath.
  - Feature grid: 3-up or 4-up card grid at desktop, collapsing to 1-up at mobile.
  - Nav: logo left, link row centre (5–6 items with dropdown indicators), GitHub star + "Sign in" + "Start your project" cluster right.

### Whitespace Philosophy
The page reads as airy and uncrowded. The single green accent does heavy lifting precisely because it is given room — the hero top-padding is `{spacing.5xl}` before the headline appears, and there is generous space between the headline block and the CTA row. Inside cards, the 11 px radius and the hairline border contain the content without compressing it; `{spacing.xl}` interior padding keeps text from crowding the edge. Section separation is handled by spacing alone — no decorative dividers, no gradient washes between bands.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero headline wraps; nav collapses to logo + hamburger; feature grids drop to 1-up; logo strip scrolls horizontally. |
| Tablet | 640–1023px | 3-up grids drop to 2-up; nav stays horizontal with fewer items. |
| Desktop | 1024–1279px | Full grid and nav layouts. |
| Wide | ≥ 1280px | Content caps at ~1200 px; bands stretch edge-to-edge in canvas-soft. |

#### Touch Targets
The `button-primary` and `button-secondary` render at approximately 36 px tall (8 px top + 20 px line-height + 8 px bottom). Nav CTAs are similarly compact. The brand targets a developer audience comfortable with tighter touch targets; a mobile-specific padding bump is expected but not captured in this surface.

#### Collapsing Strategy
- **Nav**: full link row + GitHub chip + "Sign in" + "Start your project" at desktop. Hamburger at mobile.
- **Hero**: centred column at all viewports; green accent line wraps naturally on narrow screens.
- **Feature grids**: 3-up → 2-up → 1-up. Cards keep `{rounded.card}` 11 px at all viewports.
- **Logo strip**: flex row with overflow-x scroll at mobile; logos maintain consistent height.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero and section bands on `{colors.canvas-soft}`. |
| Level 1 — Hairline Border | `1px solid {colors.hairline}` (`#e8e8e8`). | The universal card chrome — feature cards, product cards, nav bottom rule. |
| Level 2 — Hairline + Soft Fill | `1px solid {colors.hairline}` on `{colors.gray-300}` (`#f3f3f3`) inset surface. | Table header rows, secondary inset regions. |
| Level 3 — Dialog | `1px solid {colors.hairline}` + browser-native backdrop-filter. | Dropdown menus and nav mega-menus (inferred from nav-dropdown component). |

The Supabase marketing surface uses **no drop-shadows** on cards. Elevation is communicated entirely through hairline borders and surface-tone steps (`canvas-soft` → `canvas`). This is a deliberate flatness — the platform's technical authority doesn't need theatrical depth.

### Decorative Depth
- **Green accent as the only decorative moment**: the single chromatic element on the page is the green headline line and the CTA fill. No gradients, no mesh, no illustration.
- **Canvas-to-canvas-soft step**: switching from `{colors.canvas}` (white cards) to `{colors.canvas-soft}` (off-white bands) is the page's chief surface-depth cue. The contrast is subtle — approximately 3 % luminance difference — but consistent.
- **Dark polarity band** (`{colors.theme-dark}` `#1e1e1e`): the meta theme-color and CSS custom properties indicate a dark-surface section exists in the full page. This is the brand's second depth tool — ink-dark band against the near-white body.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands and horizontal rules. |
| `{rounded.xs}` | 4px | Tightest inline element (tooltip arrows, micro-chips). |
| `{rounded.sm}` | 6px | Matches `{rounded.button}` — the base UI radius for all interactive controls. |
| `{rounded.button}` | 6px | **Measured lock** — every button and CTA: "Start your project", "Sign in", nav CTAs. Never a pill. |
| `{rounded.md}` | 8px | Intermediate radius; available in the token scale for minor UI variations. |
| `{rounded.card}` | 11px | **Measured lock** — every feature card and product card. Intentionally larger than the button radius. |
| `{rounded.lg}` | 12px | Slightly larger card treatment for modals or featured callouts. |
| `{rounded.xl}` | 16px | Large card chrome for image-capped cards. |
| `{rounded.pill}` | 9999px | Badge pills and status chips — the brand uses pills only at badge scale, never for CTA buttons. |
| `{rounded.full}` | 9999px | Circular avatar / icon containers. |

The two locked radii — button at 6 px and card at 11 px — must never be swapped or consolidated. The deliberate gap between them (square-ish buttons inside softly-rounded cards) is a signature of the Supabase component language.

## Components

### Buttons

**`button-primary`** — the canonical green CTA: "Start your project."
- Background `{colors.primary}` (`#72e3ad`), text `{colors.on-primary}` (`#171717`), label in `{typography.button-md}` (14 px / 400), padding `{spacing.xs} {spacing.md}` (8 px / 16 px), shape `{rounded.button}` 6 px. Height approximately 36 px. The green is light enough that ink-dark text is always the correct pairing — never white text on the primary green.

**`button-secondary`** — the white ghost CTA: "Request a demo."
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline-strong}` border, same typography + padding + shape as `button-primary`.

**`button-ghost`** — the frameless minimal button used for secondary nav actions.
- Background transparent, text `{colors.body}`, label in `{typography.button-sm}` (12 px), shape `{rounded.button}`, no border.

**Nav CTAs:**

**`nav-cta-start`** — "Start your project" in the nav — a compact green button.
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.button-md}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.button}` 6 px.

**`nav-cta-signin`** — "Sign in" in the nav — white ghost with hairline border.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline-strong}`, same typography + shape as `nav-cta-start`.

### Cards & Containers

**`card-feature`** — the canonical marketing feature card used in product grids.
- Background `{colors.canvas}`, text `{colors.body}`, padding `{spacing.xl} {spacing.md}` (24 px / 16 px — matching the measured extraction), shape `{rounded.card}` 11 px, 1 px solid `{colors.hairline}` border. No shadow.

**`card-product`** — a wider product-level card for feature callouts.
- Background `{colors.canvas}`, text `{colors.body}`, padding `{spacing.xl}` on all sides, shape `{rounded.card}` 11 px, 1 px solid `{colors.hairline}` border.

### Badges & Chips

**`badge`** — the default neutral metadata pill.
- Background `{colors.gray-300}`, text `{colors.body}`, label in `{typography.caption}` (12 px), shape `{rounded.pill}`, padding `2px {spacing.xs}`.

**`badge-brand`** — the green-tinted status badge.
- Background `{colors.success-soft}`, text `{colors.brand-deep}`, same label + shape + padding as `badge`.

**`github-star-chip`** — the "104.3K" GitHub star count chip in the nav.
- Background `{colors.canvas}`, text `{colors.ink}`, label in `{typography.caption}`, shape `{rounded.button}` 6 px, 1 px solid `{colors.hairline}` border.

### Navigation

**`nav-bar`** — the sticky top nav.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, height ~60 px, padding `{spacing.xs} {spacing.xl}`, 1 px solid `{colors.hairline}` bottom border. Layout: logo + wordmark left, dropdown link row centre ("Product", "Developers", "Solutions", "Pricing", "Docs", "Blog"), GitHub chip + "Sign in" + "Start your project" right.

**`nav-link`** — the centred link row inside `nav-bar`.
- Text `{colors.ink}`, set in `{typography.body-sm}`, padding `{spacing.xs} {spacing.md}`. Links have chevron indicators for dropdown items.

**`nav-dropdown`** — the mega-menu that opens from nav links.
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.body-sm}`, shape `{rounded.card}` 11 px, 1 px solid `{colors.hairline}`, padding `{spacing.xs}`.

**`footer`** — the bottom navigation section.
- Background `{colors.canvas-soft}`, text `{colors.body}`, padding `{spacing.4xl} {spacing.xl}`, 1 px solid `{colors.hairline}` top border. Column labels in `{typography.body-sm}`; link rows in `{typography.body-sm}`.

### Signature Components

**`hero-band`** — the hero section.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.xl}`. Inside: a two-line headline where line one ("Build in a weekend") is in `{typography.display-xl}` at `{colors.ink}`, line two ("Scale to millions") is in `{typography.display-xl}` at `{colors.primary}`. Sub-headline in `{typography.body-md}` at `{colors.ink}`. CTA row: `button-primary` + `button-secondary` with `{spacing.xs}` gap.

**`hero-headline-accent`** — the brand-green accent line of the hero headline.
- Text `{colors.primary}`, set in `{typography.display-xl}`. Used only for the second line of the hero — the green is the entire decorative system at hero scale.

**`logo-strip`** — the customer-logo trust band beneath the hero.
- Background `{colors.canvas-soft}`, text `{colors.body}`, padding `{spacing.xl} {spacing.2xl}`. Logos rendered in monochrome at consistent height in a single flex row. Caption below: "Trusted by fast-growing companies worldwide" in `{typography.caption}` at `{colors.body}`.

**`logo-strip-label`** — the caption under the logo row.
- Text `{colors.body}`, set in `{typography.caption}`.

**`section-band-light`** — a standard content section on the near-white surface.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Section headline in `{typography.display-md}`; supporting body in `{typography.body-md}`.

**`section-band-dark`** — the polarity-flipped dark band (in-product feature showcase areas).
- Background `{colors.theme-dark}`, text `{colors.canvas}`, padding `{spacing.4xl} {spacing.xl}`. Section headline in `{typography.display-md}` (white on dark). The brand's depth cue between light and dark surfaces.

**`form-input`** — the canonical text input (sign-in form, contact forms).
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, label in `{typography.body-sm}`, padding `{spacing.xs} {spacing.md}`, height 36 px, shape `{rounded.button}` 6 px.

**`link-inline`** — body-copy inline links.
- Text `{colors.brand-link}` (`#00b96b`), set in `{typography.body-md}`. The green link color is the only inline chromatic element in body text.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (`#72e3ad`) for the single hero accent line and the primary CTA. The green's authority comes from scarcity — use it in exactly one place per section.
- Use `{rounded.button}` 6 px for all buttons and interactive controls. Never use the card radius on buttons, and never use a pill shape for CTAs.
- Use `{rounded.card}` 11 px for all cards and containers. The deliberate gap between button radius (6 px) and card radius (11 px) is a brand signature.
- Set every headline, body, and button in Circular (or DM Sans as substitute) at weight 400. The brand has no bold display weight.
- Carry elevation through hairline borders (`{colors.hairline}` `#e8e8e8`) and surface tone steps (`{colors.canvas-soft}` → `{colors.canvas}`), not drop-shadows.
- Use `{colors.on-primary}` (`#171717`) — ink dark — as text on the green primary surface. The mint green is light; white text would fail contrast.
- Render customer logos as monochrome at a consistent height in a single flex row.

### Don't
- Don't apply a pill shape (`{rounded.pill}`) to CTA buttons. Pills live only at badge / chip scale.
- Don't introduce a second accent color alongside the green. The brand's palette is effectively monochromatic outside the semantic set; adding a second brand hue breaks the voice.
- Don't set headlines at font-weight 600 or 700. The geometric round sans at 400 is the voice — heavier weights feel jarring and off-brand.
- Don't apply negative letter-spacing to headlines. The brand uses `normal` tracking at every size; tightening it changes the friendly rounded texture of the face.
- Don't add drop-shadows to feature cards. The marketing surface uses hairline borders only; shadows belong to the in-product dashboard context.
- Don't miniaturise the green accent into a swatch strip or gradient. The brand's one-color discipline means the green appears as a solid tone — never blended into a gradient, never as a pattern fill.
- Don't use `{colors.body}` (`#707070`) for primary headline text. Body gray is for secondary and supporting copy only; headings always use `{colors.ink}`.
