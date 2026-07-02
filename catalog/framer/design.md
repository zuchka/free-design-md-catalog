---
version: alpha
name: Framer
description: "Framer is a professional website builder whose marketing surface is a deep-black canvas with near-white type — the kind of stark inversion that signals craft without ornamentation. The decorative system is almost nonexistent: a charcoal-on-black card surface, soft rounded corners at two distinct scales (8 px for interactive controls, 15 px for content cards), and a single proprietary rounded geometric sans (GT Walsheim) doing all the heavy lifting at every scale. Negative letter-spacing at the headline level is structural — -2.16 px at 54 px creates the compressed, editorial weight that makes the hero feel designed rather than defaulted."
colors:
  canvas: "#000000"
  canvas-raised: "#1f1f1f"
  canvas-mid: "#222222"
  canvas-soft: "#2a2a2a"
  ink: "#ffffff"
  on-primary: "#000000"
  body: "#f5f5f5"
  mute: "#888888"
  hairline: "#333333"
  hairline-strong: "#444444"
  primary: "#ffffff"
  nav-bg: "#000000"
  card-bg: "#1f1f1f"
  card-text: "#ffffff"
  button-bg: "#222222"
  button-text: "#000000"
  badge-bg: "#1f1f1f"
  badge-text: "#f5f5f5"
  link: "#f5f5f5"
  success: "#22c55e"
  error: "#ef4444"
  warning: "#f5a623"
typography:
  display-xl:
    fontFamily: '"GT Walsheim Medium", "GT Walsheim Medium Placeholder", sans-serif'
    fontSize: 54px
    fontWeight: 500
    lineHeight: 54px
    letterSpacing: -2.16px
  display-lg:
    fontFamily: '"GT Walsheim Medium", "GT Walsheim Medium Placeholder", sans-serif'
    fontSize: 44px
    fontWeight: 500
    lineHeight: 48.4px
    letterSpacing: -1.76px
  display-md:
    fontFamily: '"GT Walsheim Medium", "GT Walsheim Medium Placeholder", sans-serif'
    fontSize: 32px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: -1.2px
  display-sm:
    fontFamily: '"GT Walsheim Medium", "GT Walsheim Medium Placeholder", sans-serif'
    fontSize: 24px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: -0.72px
  body-lg:
    fontFamily: '"GT Walsheim Medium", "GT Walsheim Medium Placeholder", sans-serif'
    fontSize: 18px
    fontWeight: 500
    lineHeight: 23.4px
    letterSpacing: -0.01px
  body-md:
    fontFamily: sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  caption:
    fontFamily: sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  button-sm:
    fontFamily: sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
  nav-label:
    fontFamily: sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  badge-label:
    fontFamily: sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  button: 8px
  md: 8px
  card: 15px
  lg: 15px
  pill: 15px
  full: 9999px
spacing:
  xxs: 4px
  xs: 5px
  sm: 8px
  md: 10px
  lg: 15px
  xl: 20px
  2xl: 25px
  3xl: 30px
  4xl: 40px
  5xl: 60px
  section: 80px
components:
  nav-bar:
    backgroundColor: "{colors.nav-bg}"
    textColor: "{colors.body}"
    typography: "{typography.nav-label}"
    height: 56px
    padding: "{spacing.md} {spacing.xl}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-login:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-signup:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.xl}"
  button-secondary:
    backgroundColor: "{colors.canvas-mid}"
    textColor: "{colors.body}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section} {spacing.xl}"
  card-marketing:
    backgroundColor: "{colors.card-bg}"
    textColor: "{colors.card-text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.md} {spacing.4xl} {spacing.md} {spacing.md}"
  card-feature:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  card-ui-preview:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
  badge:
    backgroundColor: "{colors.badge-bg}"
    textColor: "{colors.badge-text}"
    typography: "{typography.badge-label}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  tab-pill:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.body}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.lg}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  form-input:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.lg}"
    height: 36px
  pricing-card:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  pricing-card-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.xl}"
  feature-grid-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.xl}"
  logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.lg} {spacing.xl}"
  ex-pricing-tier:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-product-selector:
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  ex-data-table-cell:
    headerBackground: "{colors.canvas-raised}"
    headerTypography: "{typography.badge-label}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Framer's marketing surface is defined by one strong commitment: total black. Not dark gray, not dark navy — the canvas is a pure `{colors.canvas}` `#000000`, and every other surface decision radiates outward from that choice. The brand borrows the visual logic of design-tool UIs applied at marketing scale: charcoal cards that float on black, subtle hairline divisions at 333-level gray, and a near-white `{colors.body}` `#f5f5f5` for all text. There is no accent color in the marketing layer — color is reserved entirely for the product UI previews embedded inside the hero.

The single typeface doing all the editorial work is GT Walsheim, a proprietary rounded geometric sans that Framer uses at weight 500 across every scale. At 54 px in the hero, the combination of rounded geometry and aggressive negative tracking (`-2.16 px`) produces a quietly authoritative voice — warm enough not to feel technical, compressed enough to feel deliberate. The brand never goes heavier than weight 500; there is no bold, no condensed, no italic moment in sight.

Shapes follow a two-radius system with a hard boundary between interactive controls and content surfaces. Buttons and inputs live at 8 px — a gently rounded rectangle that reads as a product-native UI control. Cards, pills, and container surfaces live at 15 px — a noticeably rounder shape that gives content clusters a warm, blobby quality borrowed from the canvas tool itself. These two radii coexist deliberately and should never be swapped.

The page is unusually sparse in decorative system terms. There are no gradients used at the brand system level, no illustrations, no icon system visible in the marketing layer. The product itself — an embedded UI mockup of the Framer canvas editor — functions as the hero's decoration. The brand trusts the product to be its own best advertisement.

## Colors

### Surfaces
- **Canvas** (`{colors.canvas}` — `#000000`): The page background. Not a dark-mode adaptation — this is the primary surface. Every band and section sits on this deep black.
- **Canvas Raised** (`{colors.canvas-raised}` — `#1f1f1f`): The card surface. Measured directly from the extracted card background. Sits one perceptible step above the page black, enough to give cards volume without border-assisted elevation.
- **Canvas Mid** (`{colors.canvas-mid}` — `#222222`): The button-background surface for secondary/ghost controls. Measured from the extracted button-bg `rgba(34, 34, 34, 0.8)` at full opacity. Used for the nav-embedded "Log in" area and secondary tool buttons.
- **Canvas Soft** (`{colors.canvas-soft}` — `#2a2a2a`): A slightly lighter raised surface for hover states and active selections inside the embedded UI preview mockups.

### Text
- **Ink** (`{colors.ink}` — `#ffffff`): Pure white. Used for headlines on the black canvas — the `h1`, `h2`, `h3` extractions confirm `#ffffff`.
- **Body** (`{colors.body}` — `#f5f5f5`): Near-white. The computed text color across body paragraphs, nav links, and secondary labels. One step softer than ink to distinguish hierarchy without introducing a new hue.
- **Mute** (`{colors.mute}` — `#888888`): Mid-gray used for footer secondary text, placeholder labels, and deemphasized captions.
- **On Primary** (`{colors.on-primary}` — `#000000`): The text color placed on the white `{colors.primary}` CTA surface — a hard black-on-white inversion for the "Sign up" button.

### Structural
- **Hairline** (`{colors.hairline}` — `#333333`): The default 1 px divider between cards and inside the nav. Barely visible on black — presence felt more than seen.
- **Hairline Strong** (`{colors.hairline-strong}` — `#444444`): A slightly stronger divider for inset panels and selected states inside the UI preview.

### Interactive
- **Primary** (`{colors.primary}` — `#ffffff`): The single CTA color. White is the brand's conversion target on a black canvas — "Sign up" and "Get started for free" both render as white-background buttons with black ink. There is no colored primary; white is the inversion of the black page.
- **Link** (`{colors.link}` — `#f5f5f5`): Inline links carry the same near-white as body text; they are not a separate blue — the brand surfaces on a black canvas where blue-link conventions are irrelevant.

### Semantic
- **Success** (`{colors.success}` — `#22c55e`): Green used inside the embedded UI for status indicators and published-state badges in the product preview.
- **Error** (`{colors.error}` — `#ef4444`): Red for destructive UI states in the embedded product mockup.
- **Warning** (`{colors.warning}` — `#f5a623`): Amber for cautionary states.

## Typography

### Font Family
GT Walsheim Medium is the brand's sole named typeface — a proprietary rounded geometric sans with optically softened terminals. It appears at weight 500 across every named size from caption-level feature labels up to the 54 px hero. The body fallback degrades cleanly to the system `sans-serif` stack, meaning the design holds even when the custom face hasn't loaded. There is no serif, no monospaced, and no condensed display variant in the captured surfaces.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 54px | 500 | 54px | -2.16px | Hero headline ("Framer is the AI website builder for standout sites"). |
| `{typography.display-lg}` | 44px | 500 | 48.4px | -1.76px | Section headlines — second-tier band headlines. |
| `{typography.display-md}` | 32px | 500 | 36px | -1.2px | Card cluster headlines, feature section sub-headers. |
| `{typography.display-sm}` | 24px | 500 | 28px | -0.72px | Inline callout headings inside feature cards. |
| `{typography.body-lg}` | 18px | 500 | 23.4px | -0.01px | The h3 scale — feature card headers and section sub-labels in GT Walsheim. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph, card description text. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary body, nav-link text, footer column links. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Footer fine print, metadata labels. |
| `{typography.button-md}` | 14px | 500 | 20px | 0 | Marketing CTA labels ("Get started for free"), nav CTA labels. |
| `{typography.button-sm}` | 12px | 500 | 16px | 0 | Small in-UI button labels inside embedded product preview. |
| `{typography.nav-label}` | 14px | 400 | 20px | 0 | Top nav link text (Product, Community, Resources, Enterprise, Pricing). |
| `{typography.badge-label}` | 12px | 400 | 16px | 0 | Pill badge text and small tab-pill labels. |

### Principles
- **Negative tracking is structural at display scale.** The hero at 54 px uses `-2.16 px` letter-spacing and the h2 at 44 px uses `-1.76 px`. This compression is what makes GT Walsheim read as editorial rather than playful — without it, the rounded face becomes bubbly.
- **Weight 500 is the ceiling.** The brand never goes heavier. There is no bold moment, no 700-weight emphasis anywhere in the captured surfaces. Hierarchy is expressed through size, not weight escalation.
- **GT Walsheim covers the display/heading layer; system sans covers body.** This is a clear two-tier system — branded type for what you notice first, system-native type for what you read.
- **No mono, no serif, no uppercase treatment.** The captured surfaces show no monospaced labels, no ALL-CAPS eyebrows, no italic emphasis. The brand is typographically minimal.

### Note on Font Substitutes
GT Walsheim is proprietary. Open-source substitutes:
- **Rounded geometric sans** — *Nunito* (500) matches the terminal softness; *DM Sans* (500) is a cleaner, less overtly rounded second option. *Plus Jakarta Sans* (500) is a closer stylistic match to GT Walsheim's proportions.

## Layout

### Spacing System
- **Base unit**: 5 px (the smallest measured gap across the extraction). All scale steps are multiples or practical increments of this base.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 5 px · `{spacing.sm}` 8 px · `{spacing.md}` 10 px · `{spacing.lg}` 15 px · `{spacing.xl}` 20 px · `{spacing.2xl}` 25 px · `{spacing.3xl}` 30 px · `{spacing.4xl}` 40 px · `{spacing.5xl}` 60 px · `{spacing.section}` 80 px.
- **Card interior padding**: The measured card padding is `10px 40px 10px 10px` — a deliberately asymmetric pattern (generous trailing padding, tight leading) suggesting cards hold inline-trailing icon or caret affordances.
- **Section padding**: Feature bands use `{spacing.5xl}` to `{spacing.section}` top/bottom, giving the embedded product UI space to breathe inside the hero.
- **Inline gap**: Nav links and button rows use `{spacing.md}` to `{spacing.lg}` between siblings.

### Grid & Container
- **Max width**: ~1200 px. Content centers with horizontal gutters of `{spacing.xl}` 20 px on desktop, `{spacing.lg}` 15 px on mobile.
- **Column patterns**:
  - Hero: single-column headline left, embedded product UI full-width below.
  - Feature grid: 3-up card clusters at desktop, 1-up at mobile.
  - Pricing: 3-up at desktop with featured card center-elevated.
  - Footer: 4-column nav at desktop, 2-column at tablet, 1-column at mobile.

### Whitespace Philosophy
Framer's marketing page is sparser than most SaaS sites — the product mockup does the decorative heavy lifting, and whitespace separates it from the headline above and the feature bands below. Section padding is generous relative to the tight internal card spacing. Inside cards, headline and descriptor text sit close together (`{spacing.md}` gap), with more air below before any CTA. The rhythm is: compressed interior, airy exterior.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed page canvas and hero band. |
| Level 1 — Surface Raise | Background step from `{colors.canvas}` to `{colors.canvas-raised}` only — no shadow. | Default card chrome. The brand relies on surface color contrast rather than shadow for elevation. |
| Level 2 — Hairline Border | 1 px solid `{colors.hairline}` border, no shadow. | Form inputs, tab panels, selected states in the embedded UI. |
| Level 3 — Embedded UI | Cards inside the product preview mockup carry their own inner shadow system — treated as a product-fidelity simulation, not a marketing-surface design token. | Hero product mockup only. |

Framer's marketing layer uses **no drop-shadows**. The extracted card has `shadow: none`. Depth is communicated entirely through the surface-color stacking: black page → charcoal card → mid-gray interactive control. The hierarchy is read as material stacking, not light-and-shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero bands, page-width image breaks. |
| `{rounded.xs}` | 4px | Tightest internal detail — micro-badge or nested control inside the product UI preview. |
| `{rounded.sm}` | 6px | Slightly rounded inline chip or secondary icon button. |
| `{rounded.button}` | 8px | All interactive controls: buttons, inputs, dropdowns. The universal UI-control radius measured from extraction. |
| `{rounded.card}` | 15px | All content cards and pill-shaped elements. The softer, rounder surface shape that gives Framer's marketing cards their distinctive blobby quality. |
| `{rounded.full}` | 9999px | Circular avatar frames and fully circular icon-button containers in the nav/product UI. |

The two-radius rule is strict: **8 px for controls, 15 px for content**. A button should never acquire the 15 px card radius, and a card should never be rendered at 8 px.

## Components

### Buttons

**`button-primary`** — the canonical white-on-black CTA ("Get started for free").
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}` (14 px / 500), shape `{rounded.button}` 8 px, padding `{spacing.sm} {spacing.xl}`.

**`button-secondary`** — the charcoal ghost button used for secondary in-UI actions.
- Background `{colors.canvas-mid}`, text `{colors.body}`, label in `{typography.button-sm}` (12 px / 500), shape `{rounded.button}` 8 px, padding `{spacing.xs} {spacing.md}`.

**`nav-cta-signup`** — the white "Sign up" button in the top nav.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}`, shape `{rounded.button}` 8 px, padding `{spacing.xs} {spacing.lg}`.

**`nav-cta-login`** — the ghost "Log in" button in the top nav.
- Background transparent, text `{colors.body}`, same typography and shape as `nav-cta-signup`.

### Navigation

**`nav-bar`** — the sticky top bar.
- Background `{colors.nav-bg}`, text `{colors.body}`, height 56 px, padding `{spacing.md} {spacing.xl}`. Layout: logo mark left, link row center, "Log in / Sign up" cluster right.

**`nav-link`** — the centred link row inside `nav-bar` (Product, Community, Resources, Enterprise, Pricing).
- Text `{colors.body}`, set in `{typography.nav-label}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.full}` (ghost hover pill).

**`footer`** — the bottom 4-column link matrix.
- Background `{colors.canvas}`, text `{colors.mute}`, padding `{spacing.4xl} {spacing.xl}`. Column headers in `{typography.body-lg}` (GT Walsheim 500), link rows in `{typography.body-sm}`.

### Cards & Containers

**`card-marketing`** — the canonical charcoal feature card.
- Background `{colors.card-bg}`, text `{colors.card-text}`, padding `{spacing.md} {spacing.4xl} {spacing.md} {spacing.md}` (asymmetric — matches measured extraction), shape `{rounded.card}` 15 px. No shadow.

**`card-feature`** — a larger feature card with symmetric padding for section-level feature clusters.
- Background `{colors.canvas-raised}`, text `{colors.ink}`, padding `{spacing.xl}`, shape `{rounded.card}` 15 px.

**`card-ui-preview`** — the embedded product interface preview card shown in the hero and feature sections.
- Background `{colors.canvas-raised}`, text `{colors.ink}`, body in `{typography.body-sm}`, padding `{spacing.md}`, shape `{rounded.card}` 15 px. This card hosts a faithful rendering of the Framer canvas editor UI.

### Badges & Chips

**`badge`** — the small metadata pill (e.g. "Framer 3.0 — Everything we shipped →").
- Background `{colors.badge-bg}`, text `{colors.badge-text}`, body in `{typography.badge-label}`, shape `{rounded.pill}` 15 px, padding `{spacing.xs} {spacing.md}`.

**`tab-pill`** — the section-filter tab pill used in feature or pricing section selectors.
- Background `{colors.canvas-raised}`, text `{colors.body}`, body in `{typography.button-sm}`, shape `{rounded.pill}` 15 px, padding `{spacing.xs} {spacing.lg}`.

### Bands

**`hero-band`** — the full-bleed black hero with the large GT Walsheim headline and embedded product UI below.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.section} {spacing.xl}`. Headline in `{typography.display-xl}` (-2.16 px tracked), CTA "Get started for free" as `button-primary` below.

**`feature-grid-band`** — the section hosting the 3-up card cluster.
- Background `{colors.canvas}`, text `{colors.ink}`, section headline in `{typography.display-lg}`, padding `{spacing.5xl} {spacing.xl}`.

**`logo-strip`** — a row of partner or customer logos.
- Background `{colors.canvas}`, text `{colors.mute}`, padding `{spacing.lg} {spacing.xl}`.

### Forms

**`form-input`** — the standard text input.
- Background `{colors.canvas-raised}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, body in `{typography.body-sm}`, shape `{rounded.button}` 8 px, padding `{spacing.sm} {spacing.lg}`, height 36 px.

### Pricing

**`pricing-card`** — default tier card.
- Background `{colors.canvas-raised}`, text `{colors.ink}`, padding `{spacing.xl}`, shape `{rounded.card}` 15 px.

**`pricing-card-featured`** — the highlighted tier — polarity-flipped to white surface with black text.
- Background `{colors.primary}`, text `{colors.on-primary}`, same padding and shape as `pricing-card`.

### Inline

**`link-inline`** — body-copy inline links.
- Text `{colors.link}`, body in `{typography.body-md}`.

## Do's and Don'ts

### Do
- Maintain pure `{colors.canvas}` `#000000` as the page background at all times — diluting to dark gray breaks the brand's commitment.
- Use `{rounded.button}` 8 px for every interactive control and `{rounded.card}` 15 px for every content surface — the two-radius rule is non-negotiable.
- Set every headline in GT Walsheim weight 500 with the measured negative letter-spacing applied. The compression at `-2.16 px` is part of the voice at hero scale.
- Keep `{colors.primary}` (white) as the sole CTA surface — the brand's conversion target is a white button on a black page, not a colored action.
- Use surface-color stacking (black → charcoal → mid-gray) to communicate elevation. Never add a drop-shadow to a marketing card.
- Trust the product UI as decoration — the embedded canvas editor mockup is the brand's hero illustration; it should render faithfully and prominently.

### Don't
- Don't introduce a color accent into the marketing layer. The product UI contains color; the surrounding marketing surface does not.
- Don't apply the card 15 px radius to buttons or inputs. The two-radius system has a hard boundary.
- Don't exceed weight 500 in GT Walsheim. There is no bold moment in this brand.
- Don't use drop-shadows on cards. The brand's elevation is surface-color only.
- Don't use blue-link conventions (`#0000ee` appears in the raw extraction as a browser-default artifact — it is not a brand color and should not be used in the design system).
- Don't reduce letter-spacing at display scale to 0 — the compressed tracking at `-2.16 px` and `-1.76 px` is structurally part of the typographic voice and must be preserved.
