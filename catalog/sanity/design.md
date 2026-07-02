---
version: alpha
name: Sanity-design-system
description: "Sanity is a developer-first headless CMS brand whose surface is a near-total inversion: a deep ink-black canvas with white headline type, broken by a single high-saturation royal blue (#0052ef) that owns every CTA and accent. The typographic voice is its own story — a custom display face (Waldenburg) set at weight 400 with aggressive negative tracking, enormous at hero scale, sentence-case, never shouting. The decoration system lives in the product UI mockups floating on the dark background rather than in gradients or illustration."
colors:
  primary: "#0052ef"
  on-primary: "#ffffff"
  ink: "#0b0b0b"
  ink-raised: "#212121"
  ink-border: "#353535"
  on-ink: "#ffffff"
  canvas: "#ffffff"
  canvas-inverse: "#0b0b0b"
  canvas-raised: "#212121"
  canvas-border: "#353535"
  body: "#b9b9b9"
  mute: "#797979"
  hairline: "#353535"
  hairline-light: "#ededed"
  link: "#0052ef"
  blue-light: "#55beff"
  blue-dim: "#afe3ff"
  accent-green: "#19d600"
  accent-magenta: "#f500ff"
  accent-magenta-light: "#fa84ff"
  accent-yellow: "#ffff9f"
  error: "#dd0000"
  shadow-penumbra: "#14171f14"
typography:
  display-xl:
    fontFamily: waldenburgNormal, "waldenburgNormal Fallback", ui-sans-serif, system-ui, sans-serif
    fontSize: 112px
    fontWeight: 400
    lineHeight: 112px
    letterSpacing: -4.48px
  display-lg:
    fontFamily: waldenburgNormal, "waldenburgNormal Fallback", ui-sans-serif, system-ui, sans-serif
    fontSize: 72px
    fontWeight: 400
    lineHeight: 75.6px
    letterSpacing: -2.88px
  display-md:
    fontFamily: waldenburgNormal, "waldenburgNormal Fallback", ui-sans-serif, system-ui, sans-serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 51.84px
    letterSpacing: -1.68px
  display-sm:
    fontFamily: waldenburgNormal, "waldenburgNormal Fallback", ui-sans-serif, system-ui, sans-serif
    fontSize: 24px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: -0.72px
  body-lg:
    fontFamily: waldenburgNormal, "waldenburgNormal Fallback", ui-sans-serif, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: waldenburgNormal, "waldenburgNormal Fallback", ui-sans-serif, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: waldenburgNormal, "waldenburgNormal Fallback", ui-sans-serif, system-ui, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  caption:
    fontFamily: waldenburgNormal, "waldenburgNormal Fallback", ui-sans-serif, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-lg:
    fontFamily: waldenburgNormal, "waldenburgNormal Fallback", ui-sans-serif, system-ui, sans-serif
    fontSize: 24px
    fontWeight: 400
    lineHeight: 32px
  button-md:
    fontFamily: waldenburgNormal, "waldenburgNormal Fallback", ui-sans-serif, system-ui, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  card: 6px
  button: 99999px
  pill: 9999px
  full: 99999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  5xl: 128px
components:
  nav-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.body-sm}"
    height: 56px
    padding: "{spacing.sm} {spacing.lg}"
  nav-link:
    textColor: "{colors.on-ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-contact:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.canvas}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
  nav-cta-get-started:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.sm}"
  nav-login:
    backgroundColor: transparent
    textColor: "{colors.on-ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.sm}"
  announcement-banner:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.lg}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.xl}"
  button-primary-sm:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.sm}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.sm}"
  hero-band:
    backgroundColor: "{colors.canvas-inverse}"
    textColor: "{colors.on-ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  feature-band:
    backgroundColor: "{colors.canvas-inverse}"
    textColor: "{colors.on-ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.4xl} {spacing.lg}"
  card-dark:
    backgroundColor: "{colors.canvas-inverse}"
    textColor: "{colors.on-ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xs}"
  card-raised:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.on-ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xs}"
  logo-strip:
    backgroundColor: "{colors.canvas-inverse}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.lg} {spacing.xl}"
  cookie-banner:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-light}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.sm}"
    height: 36px
  badge-pill:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.xs}"
  link-inline:
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.lg}"
  ex-pricing-tier:
    description: Default pricing tier card on the dark canvas surface with hairline border.
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.on-ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: Featured tier — primary blue fill with white text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-auth-form-card:
    description: Sign-in card on the inverse canvas with form-input primitives inside.
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog on the dark surface, same chrome as card-raised.
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-toast:
    description: Toast notification — card-dark chrome with body-sm text.
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.card}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
  ex-data-table-cell:
    description: Table chrome on the dark surface. Header uses caption; body uses body-sm.
    headerBackground: "{colors.canvas-raised}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-empty-state-card:
    description: Empty-state frame on ink-raised canvas with generous padding.
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
---
## Overview

Sanity stakes out a visual position that is the inverse of the typical SaaS marketing playbook: the page is built on a near-black `{colors.canvas-inverse}` (`#0b0b0b`) ground, not a white one. The entire decorative vocabulary sits in that darkness — product UI mockups float as lit rectangles at 6 px card radius, customer logos render as monochrome silhouettes in the logo strip, and the only chromatic accent across the page is the brand's royal blue `{colors.primary}` (`#0052ef`) that owns every CTA, every link, and the single interactive state colour.

Type is the dominant design element and the strongest brand signal. Sanity uses a proprietary display face (Waldenburg) at weight 400 across every scale — headline to body — with negative letter-spacing as aggressive as `-4.48 px` at the 112 px hero headline. The typeface is wide and confident at low weight; the tracking tightens as size increases so the letterforms knit into dense, blocky wordmarks rather than floating display text. Sentence-case is the rule; the brand never capitalises headlines decoratively. On the marketing surface, Waldenburg is the *only* typeface — there is no mono secondary face, no serif accent.

Surfaces use a three-step dark ladder: `{colors.canvas-inverse}` 11/11/11 (the page base), `{colors.canvas-raised}` 33/33/33 (card interiors and elevated panels), `{colors.ink-border}` 53/53/53 (card borders and dividers). The single light-mode surface is `{colors.canvas}` pure white, appearing inside the cookie consent modal and the nav's "Contact Sales" pill. Shadows are minimal to the point of deliberate absence — cards sit on the dark page held by a single `1px solid {colors.hairline}` border, never by a drop-shadow.

**Key characteristics:**
- One brand CTA colour: `{colors.primary}` blue owns every "Get Started" and "Contact Sales" button. There is no secondary accent colour competing for conversion attention.
- The nav is dark, flush with the page background — it reads as part of the canvas, not as a contrasting chrome bar.
- Product UI screenshots are the brand's decorative system at hero scale. They are never reduced to icons or thumbnails; they float at their natural rendered size against the dark ground.
- Button geometry is a fully-rounded pill at `99999px` — no intermediate radius CTAs anywhere in the captured surface.
- Cards use a tight `6px` radius — almost square, deliberately not rounded — separating them visually from the pill CTA shape.
- The multi-brand logo strip is styled in muted gray, not the brand's primary blue, so it defers to the hero headline.

## Colors

### Brand
- **Primary Blue** (`{colors.primary}` — `#0052ef`): The single conversion colour. Every CTA button, every active link, every accent border. Visible in the "GET STARTED" nav pill and the hero-scale CTA. Resolved from `--color-blue-700` and `--color-border-accent-blue`.
- **Blue Light** (`{colors.blue-light}` — `#55beff`): A lighter tint of the brand blue, available as a paired tonal step for hover states and soft accent moments. From `--color-blue-300`.
- **Blue Dim** (`{colors.blue-dim}` — `#afe3ff`): The palest blue, used as a soft badge fill or informational background. From `--color-blue-100` / `--color-bg-accent-blue-dim`.

### Surface (Dark)
- **Canvas Inverse** (`{colors.canvas-inverse}` — `#0b0b0b`): The primary page surface — an ink near-black that the entire dark hero and feature bands sit on. From `--bg1--dark` / `--color-bg-inverse-base`.
- **Canvas Raised** (`{colors.canvas-raised}` — `#212121`): The elevated dark surface for card interiors and panel backgrounds. From `--bg2--dark` / `--bg3--dark`.
- **Canvas Border** (`{colors.canvas-border}` — `#353535`): The 1 px card border and hairline divider colour on dark surfaces. From `--bg4--dark`. Keeps cards legible without shadow.

### Surface (Light)
- **Canvas** (`{colors.canvas}` — `#ffffff`): The pure-white surface, appearing inside the cookie banner modal and as the "Contact Sales" button fill. From `--color-bg-base`.
- **Hairline Light** (`{colors.hairline-light}` — `#ededed`): 1 px borders on light surfaces. From `--color-gray-100`.

### Text
- **On Ink** (`{colors.on-ink}` — `#ffffff`): All primary text rendered on dark surfaces. Hero headlines, nav links, card headings. From `--fg1--dark` / `--color-fg-inverse-base`.
- **Body** (`{colors.body}` — `#b9b9b9`): Secondary text on dark surfaces — subheadings, logo strip labels, footer nav links. From `--color-gray-300`.
- **Mute** (`{colors.mute}` — `#797979`): Lowest-priority text on dark surfaces — captions, metadata, placeholder text. From `--color-gray-500` / `--color-fg-inverse-faint`.
- **Ink** (`{colors.ink}` — `#0b0b0b`): Primary text on light surfaces (cookie banner, light-mode card copy).

### Semantic Accents
- **Accent Green** (`{colors.accent-green}` — `#19d600`): Status indicator — "live" or "active" system states. From `--color-border-accent-green`.
- **Accent Magenta** (`{colors.accent-magenta}` — `#f500ff`): High-energy accent, visible in the display-P3 token system as a highlight step. From `--color-magenta-700`.
- **Accent Yellow** (`{colors.accent-yellow}` — `#ffff9f`): A soft neon yellow paired with dark surfaces for callout moments. From `--color-yellow-300`.
- **Error** (`{colors.error}` — `#dd0000`): Validation and destructive action red. From `--color-fg-error`.

## Typography

### Font Family
Sanity uses a single proprietary display face across the entire marketing surface:

**Waldenburg** (extracted as `waldenburgNormal`) — a wide, low-contrast geometric typeface used at weight 400 for every scale from 112 px hero to 13 px button label. The weight never changes; size and tracking carry all the hierarchy. There is no monospace secondary face on the marketing surface. There is no bold variant; the face never appears at 500 or above.

The negative letter-spacing is load-bearing: at 112 px, the tracking is `-4.48 px`; at 72 px, `-2.88 px`; at 48 px, `-1.68 px`. Remove the tracking and the brand voice collapses into generic wide-set text.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 112px | 400 | 112px | -4.48px | Hero headline ("All your content applications in one platform"). |
| `{typography.display-lg}` | 72px | 400 | 75.6px | -2.88px | Section-level headlines. |
| `{typography.display-md}` | 48px | 400 | 51.84px | -1.68px | Sub-section and feature cluster headlines. |
| `{typography.display-sm}` | 24px | 400 | 32px | -0.72px | Large button labels, card-level display text. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Hero lead paragraph ("Model content, automate workflows..."). |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraphs and card descriptions. |
| `{typography.body-sm}` | 13px | 400 | 20px | 0 | Nav links, button labels, fine print. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Badge labels, metadata, footer secondary lines. |
| `{typography.button-lg}` | 24px | 400 | 32px | 0 | Hero-scale CTA button labels. |
| `{typography.button-md}` | 13px | 400 | 20px | 0 | Nav-scale button labels ("GET STARTED", "CONTACT SALES"). |

### Principles
- **Negative tracking is the entire typographic voice.** At display scales the brand's tracking is among the tightest in the industry. Any reset to default tracking will visually break the brand.
- **Sentence-case, no decorative caps.** Headlines like "All your content applications in one platform" are lower-case after the first word. All-caps is reserved for the button labels only (a nav-level stylistic choice, not a type-scale property).
- **Weight 400 at every scale.** The brand never uses a bold or semi-bold variant of Waldenburg. Hierarchy is communicated through size and tracking alone.
- **One typeface, no mono.** Unlike most developer-facing brands, Sanity does not introduce a monospaced secondary face on the marketing surface. The product UI screenshots carry the "technical" signal instead.

### Note on Font Substitutes
Waldenburg is a proprietary face commissioned for the brand. Open-source substitutes:
- **Display text** — *Inter* at weight 400 with `letter-spacing: -0.04em` at large sizes is the closest stylistically neutral option. *Syne* or *Unbounded* are passable alternatives for the wide-tracked geometric quality.

## Layout

### Spacing System
- **Base unit**: 4 px. All extracted values are exact multiples of 4.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 48 px · `{spacing.3xl}` 64 px · `{spacing.4xl}` 96 px · `{spacing.5xl}` 128 px.
- **Section padding**: marketing bands use `{spacing.4xl}` to `{spacing.5xl}` top/bottom. The hero band gives product UI screenshots room to breathe with `{spacing.5xl}` or more.
- **Card interior padding**: dark cards sit at `{spacing.xs}` 8 px (tight, product-UI-style chrome). Content cards use `{spacing.lg}` 24 px.
- **Inline gap**: nav link rows use `{spacing.sm}` to `{spacing.md}`; CTA pairs use `{spacing.xs}` between siblings.

### Grid & Container
- **Max width**: approximately 1280 px, centred with horizontal gutters of `{spacing.lg}` 24 px on desktop and `{spacing.md}` 16 px on mobile.
- **Column patterns**:
  - Hero: full-width headline stack with product UI mockup occupying the right half or overlapping at large viewport.
  - Logo strip: single-row flex of customer logos, monochrome, consistent height.
  - Feature section: typically 2-column split (copy left, screenshot right) or 3-up feature card grid.
  - Cookie banner: fixed-bottom drawer at mobile scale, inline card at desktop.

### Whitespace Philosophy
The dark background means whitespace is not literally white — it is negative space in the ink canvas. The brand uses generous vertical rhythm between sections (`{spacing.4xl}` to `{spacing.5xl}`) to prevent the product screenshots from crowding each other. Inside cards, the padding is deliberately tight (`{spacing.xs}`) to mirror the product UI aesthetic: these are meant to look like actual interface panels, not marketing brochure cards.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero and feature bands on the ink canvas. |
| Level 1 — Hairline Border | `1px solid {colors.hairline}` (`#353535`). | Default dark card chrome — the brand's primary "this is a card" cue on dark surfaces. |
| Level 2 — Raised Panel | `background {colors.canvas-raised}` + hairline border. | Elevated card surface — panels, dropdowns, modal-adjacent components. |
| Level 3 — Light Modal | `background {colors.canvas}` (white) on dark page. | Cookie banner, light-surface modals that need maximum contrast against the dark ground. |

The brand does not use drop-shadow on dark surfaces. The elevation language is entirely built from background-colour stepping (`canvas-inverse` → `canvas-raised`) and hairline border rings — never from shadow blur.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands and strict rectangular layout regions. |
| `{rounded.xs}` | 4px | Micro UI elements — status indicators, small tags. |
| `{rounded.card}` | 6px | The brand's card radius — product UI panel chrome, feature cards, modal surfaces. Near-square: a deliberate contrast to the pill CTA. |
| `{rounded.md}` | 8px | Slightly softer interior elements. |
| `{rounded.lg}` | 12px | Larger card-like containers where a softer corner is appropriate. |
| `{rounded.pill}` | 9999px | Explicit pill-shaped badge labels and status chips. |
| `{rounded.button}` | 99999px | Every CTA button and nav action pill. The brand's primary interactive shape. |

The two radii that define Sanity's visual grammar are `{rounded.card}` (6 px, nearly square) and `{rounded.button}` (99999 px, fully pill). The contrast between these two shapes — the tight card and the fully-rounded CTA — is a deliberate and non-negotiable part of the system. Do not intermediate them.

## Components

### Navigation

**`nav-bar`** — the sticky top bar, dark and flush with the page.
- Background `{colors.ink}`, text `{colors.on-ink}`, height 56 px, padding `{spacing.sm} {spacing.lg}`. Layout: logo left, link row centre, "LOG IN / CONTACT SALES / GET STARTED" cluster right. The nav reads as part of the dark canvas — it has no visible bottom border at rest.

**`nav-link`** — the centred navigation links (PRODUCTS, SOLUTIONS, RESOURCES, DOCS, ENTERPRISE, PRICING).
- Text `{colors.on-ink}`, set in `{typography.body-sm}`, padding `{spacing.xs} {spacing.sm}`. All-caps rendering is a CSS text-transform layer, not a font weight change.

**`nav-login`** — the "LOG IN" text action in the nav.
- Background transparent, text `{colors.on-ink}`, set in `{typography.body-sm}`.

**`nav-cta-contact`** — the "CONTACT SALES" pill button in the nav.
- Background `{colors.canvas}` (white), text `{colors.ink}`, rounded `{rounded.button}`, typography `{typography.button-md}`, padding `{spacing.xs} {spacing.lg}`.

**`nav-cta-get-started`** — the "GET STARTED" pill button in the nav.
- Background `{colors.primary}`, text `{colors.on-primary}`, rounded `{rounded.button}`, typography `{typography.button-md}`, padding `{spacing.xxs} {spacing.sm}`.

### Announcement

**`announcement-banner`** — the full-width top announcement bar ("See how we built our intranet. Live + Q&A, June 30 →").
- Background `{colors.ink}`, text `{colors.on-ink}`, set in `{typography.body-sm}`, padding `{spacing.xs} {spacing.lg}`. Monospace arrow character at the end is the only icon-scale element.

### Buttons

**`button-primary`** — the hero-scale CTA pill.
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.button-lg}` (24 px), rounded `{rounded.button}`, padding `{spacing.xs} {spacing.xl}`.

**`button-primary-sm`** — the nav and card-scale CTA pill.
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.button-md}` (13 px), rounded `{rounded.button}`, padding `{spacing.xxs} {spacing.sm}`.

**`button-secondary`** — the white pill paired with `button-primary` inside dark bands.
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.button-md}`, rounded `{rounded.button}`, padding `{spacing.xxs} {spacing.sm}`.

### Cards & Surfaces

**`card-dark`** — the canonical dark product-UI panel.
- Background `{colors.canvas-inverse}`, text `{colors.on-ink}`, border `1px solid {colors.hairline}`, rounded `{rounded.card}` 6 px, padding `{spacing.xs}`. This is the tightest card variant — it mimics the product UI chrome.

**`card-raised`** — the slightly elevated dark card for feature content and panels.
- Background `{colors.canvas-raised}`, text `{colors.on-ink}`, border `1px solid {colors.hairline}`, rounded `{rounded.card}` 6 px, padding `{spacing.xs}`.

### Bands

**`hero-band`** — the full-bleed dark hero.
- Background `{colors.canvas-inverse}`, text `{colors.on-ink}`, padding `{spacing.4xl} {spacing.lg}`. Headline in `{typography.display-xl}` (112 px / 400 weight / -4.48 px tracking), sub-headline in `{typography.body-lg}`, then a CTA pair (`button-primary` + optional `button-secondary`). Product UI screenshots float on the dark ground as the decorative element.

**`feature-band`** — secondary section bands with feature copy and screenshots.
- Background `{colors.canvas-inverse}`, text `{colors.on-ink}`, padding `{spacing.4xl} {spacing.lg}`. Section headline in `{typography.display-lg}`.

**`logo-strip`** — the customer brand logo row (Figma, Shopify, Brex, Replit, etc.).
- Background `{colors.canvas-inverse}`, text `{colors.mute}`, padding `{spacing.lg} {spacing.xl}`. Logos rendered as monochrome SVGs at consistent height on the dark ground.

### Utility

**`badge-pill`** — the small metadata pill ("2 updates", "1 updates" visible in product UI mockups).
- Background `{colors.canvas-raised}`, text `{colors.body}`, typography `{typography.caption}`, rounded `{rounded.pill}`, padding `{spacing.xxs} {spacing.xs}`.

**`form-input`** — text input for search and inline forms.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline-light}`, typography `{typography.body-sm}`, rounded `{rounded.button}`, padding `{spacing.xxs} {spacing.sm}`, height 36 px.

**`cookie-banner`** — the consent modal (visible in screenshot, lower-left overlay).
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.body-sm}`, rounded `{rounded.sm}` 6 px, padding `{spacing.lg}`. Contains plain text body, a "Privacy Policy" inline link, and three side-by-side button pills: ACCEPT (`button-primary-sm`), DENY NON-ESSENTIAL and PREFERENCES (both `button-secondary` style).

**`link-inline`** — body-copy inline links.
- Text `{colors.primary}` (`#0052ef`), typography `{typography.body-md}`.

**`footer`** — the bottom navigation band.
- Background `{colors.ink}`, text `{colors.body}`, typography `{typography.body-sm}`, padding `{spacing.4xl} {spacing.lg}`.

## Do's and Don'ts

### Do
- Keep the page surface dark. `{colors.canvas-inverse}` is the default ground — the brand lives in the dark. Light surfaces are punctuation, not the base.
- Use `{rounded.button}` (99999 px) for every CTA pill and `{rounded.card}` (6 px) for every card or panel. The contrast between these two shapes is the system.
- Set every headline in `{typography.display-*}` at weight 400 with the measured negative tracking. The tracking is not optional.
- Use `{colors.primary}` blue as the single conversion CTA colour. Do not introduce a second accent colour to compete with it.
- Render customer logos as monochrome silhouettes on the dark canvas — consistent height, no brand colours.
- Use product UI screenshots as the hero decoration. They carry the "platform" signal more effectively than any illustration or gradient.

### Don't
- Don't switch to a light background for hero or feature bands. The dark surface is the brand identity.
- Don't increase Waldenburg's font weight beyond 400. The brand's typographic voice is entirely built on the weight-400 wide face with tracking.
- Don't apply `{rounded.card}` (6 px) to buttons or CTAs. The pill–card shape contrast is non-negotiable.
- Don't introduce a shadow system for cards on dark surfaces. Elevation is communicated through background-colour stepping and hairline borders — never drop-shadow.
- Don't render headlines in all-caps. Button labels may use `text-transform: uppercase` as a CSS layer; display typography is sentence-case.
- Don't reduce the letter-spacing at display sizes. At 112 px, `-4.48 px` tracking is required; softening it to zero breaks the brand's typographic density.
- Don't add a monospaced typeface to the marketing surface. Waldenburg carries everything.
