---
version: alpha
name: Superhuman
description: "Superhuman is a premium AI productivity brand whose marketing surface is built on a single sustained purple gradient — a deep violet-to-periwinkle wash that covers the entire hero and acts as the sole decorative system. There are no accent splashes, no mesh confetti: the gradient IS the brand expression. On top of it sits a single proprietary variable-weight sans (Super Sans VF), set heavy and large for display moments, lighter for body — a face that flexes its weight axis rather than swapping families. Cards float on the gradient with a translucent white-20% border and no fill, creating a glass-panel effect. The only hard surface is the off-white canvas that appears once the hero gives way to feature sections below the fold."
colors:
  primary: "#714cb6"
  primary-hover: "#533192"
  primary-light: "#d4c7ff"
  on-primary: "#ffffff"
  ink: "#292827"
  ink-deep: "#141413"
  body: "#73716d"
  mute: "#8d8a86"
  hairline: "#8d8a86"
  hairline-soft: rgba(115,113,109,0.2)
  hairline-sub: rgba(115,113,109,0.05)
  canvas: "#ffffff"
  canvas-soft: "#fcfaf7"
  canvas-warm: "#f7f5f2"
  hero-gradient-start: "#5b3fa0"
  hero-gradient-end: "#9b9dd4"
  glass-border: rgba(255,255,255,0.2)
  overlay: rgba(20,20,19,0.6)
  surface-disabled: rgba(141,138,134,0.2)
  icon-soft: rgba(41,40,39,0.5)
  link: "#714cb6"
  success: "#714cb6"
  error: "#ee0000"
  warning: "#f5a623"
typography:
  display-xl:
    fontFamily: '"Super Sans VF", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
    fontSize: 64px
    fontWeight: 540
    lineHeight: 61.44px
    letterSpacing: normal
  display-lg:
    fontFamily: '"Super Sans VF", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
    fontSize: 48px
    fontWeight: 540
    lineHeight: 52px
    letterSpacing: normal
  display-md:
    fontFamily: '"Super Sans VF", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
    fontSize: 28px
    fontWeight: 540
    lineHeight: 32px
    letterSpacing: -0.63px
  display-sm:
    fontFamily: '"Super Sans VF", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
    fontSize: 26px
    fontWeight: 540
    lineHeight: 33.8px
    letterSpacing: normal
  body-lg:
    fontFamily: '"Super Sans VF", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
    fontSize: 18px
    fontWeight: 460
    lineHeight: 28px
  body-md:
    fontFamily: '"Super Sans VF", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
    fontSize: 16px
    fontWeight: 460
    lineHeight: 24px
  body-sm:
    fontFamily: '"Super Sans VF", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
    fontSize: 14px
    fontWeight: 460
    lineHeight: 20px
  body-sm-strong:
    fontFamily: '"Super Sans VF", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  caption:
    fontFamily: '"Super Sans VF", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
    fontSize: 12px
    fontWeight: 460
    lineHeight: 16px
  button-md:
    fontFamily: '"Super Sans VF", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  button-lg:
    fontFamily: '"Super Sans VF", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 16px
  xl: 20px
  button: 8px
  card: 8px
  pill: 20px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 56px
  4xl: 64px
  5xl: 96px
  section: 128px
components:
  nav-bar:
    backgroundColor: transparent
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    height: 64px
    padding: "{spacing.xs} {spacing.lg}"
  nav-link:
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-signup:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 6px {spacing.md}
  nav-link-secondary:
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.sm}"
  announcement-banner:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.sm} {spacing.lg}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 6px {spacing.md}
  button-secondary:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 6px {spacing.md}
  hero-band:
    backgroundColor: "{colors.hero-gradient-start}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  hero-cta:
    backgroundColor: "{colors.on-primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.xl}"
  glass-card:
    backgroundColor: transparent
    textColor: "{colors.on-primary}"
    borderColor: "{colors.glass-border}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.sm}"
  ai-chat-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.sm}"
  ui-mockup-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
  feature-card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  tab-pill:
    backgroundColor: transparent
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  tab-pill-active:
    backgroundColor: "{colors.on-primary}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  badge-inline:
    backgroundColor: "{colors.glass-border}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 2px {spacing.xs}
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-soft}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
    height: 40px
  link-inline:
    textColor: "{colors.primary-light}"
    typography: "{typography.body-sm}"
  icon-button:
    backgroundColor: transparent
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs}"
  footer:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xl} {spacing.lg}"
  ex-pricing-tier:
    description: Default pricing tier card on canvas-soft surface with hairline border.
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: Featured pricing tier — primary purple fill with white text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-product-selector:
    description: Feature summary card on canvas-soft with section label and icon row.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary panel — line items per plan add-on.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline-soft}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses primary purple as a left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: Data table chrome. Header uses body-sm-strong; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.body-sm-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline-soft}"
  ex-auth-form-card:
    description: Sign-in / sign-up card on canvas-soft with form-input primitives inside.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-modal-card:
    description: Modal dialog surface — canvas white with hairline border and soft shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-empty-state-card:
    description: Empty-state frame on canvas-soft with generous padding.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — canvas white card with body-sm label and soft shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Superhuman's marketing surface makes a single uncompromising visual decision: the entire hero is a sustained violet-to-periwinkle gradient — deep `{colors.hero-gradient-start}` at the top bleeding into a soft blue-purple by the midpoint — and that gradient is the complete decoration system. There is no secondary illustration, no mesh texture, no icon grid backdrop. White headline type sits directly on this wash, and UI mockup cards float on it with only a translucent `{colors.glass-border}` 20%-white border to define their edges. The effect is polished and premium without being loud.

The typeface is the second strong design choice: a single proprietary variable sans (Super Sans VF) handles every role on the page. Weight 540 carries display headlines and 460 carries all body and navigation text. The face's variable axis means the brand can dial from "soft readable" to "confident display" without changing families — a coherent single-voice system. There is no monospace layer, no secondary editorial face. Everything is Super Sans.

Below the hero, the surface shifts to warm off-white `{colors.canvas-soft}` for feature sections. This transition from rich purple to cream is the page's only depth cue — no polarity-flipped dark bands, no heavy card shadows. Cards on the light surface carry the same `{rounded.card}` 8 px radius as on the gradient, now with a soft hairline border. The primary CTA button — `{colors.primary}` purple at exactly 8 px radius — is the brand's conversion target both in the nav and inside the hero. It never becomes a pill.

**Key characteristics:**
- A single sustained purple gradient is the entire decorative system. Never miniaturise it to a swatch or reduce it to a flat purple fill — the gradient wash is the brand identity.
- Super Sans VF at weight 540 for display, 460 for body. The weight axis, not family swaps, is how the brand expresses hierarchy.
- All interactive buttons use exactly 8 px radius — a deliberate soft-square shape, never a pill.
- Glass-panel cards with transparent fill and 20%-white border appear only on the gradient hero; below the fold, cards shift to warm canvas fills.
- The announcement banner at the very top of the page uses the deepest ink tone `{colors.ink-deep}`, making it a discrete black strip above the purple gradient.

## Colors

### Brand & Primary
- **Primary** (`{colors.primary}` — `#714cb6`): The brand's signature purple. Carried by every CTA button, active state, and link on light surfaces. Computed from `--color-primary-base` (light mode value).
- **Primary Hover** (`{colors.primary-hover}` — `#533192`): The pressed / hover tone for primary interactive surfaces. From `--color-action-primary-hover`.
- **Primary Light** (`{colors.primary-light}` — `#d4c7ff`): The light mode inverse of primary — used for inline links and accent moments on dark surfaces. From `--color-primary-base` (dark mode value surfaced as the light accent).
- **On Primary** (`{colors.on-primary}` — `#ffffff`): All text and icons on the purple CTA and the gradient hero band.

### Gradient
- **Hero Gradient Start** (`{colors.hero-gradient-start}` — `#5b3fa0`): The deep violet at the top of the hero gradient. Observed in the screenshot as the darkest purple in the wash.
- **Hero Gradient End** (`{colors.hero-gradient-end}` — `#9b9dd4`): The periwinkle-blue tone at the bottom of the hero gradient wash. The gradient is the entire decoration system — used at hero scale only.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure white — used for UI mockup cards and modal / form surfaces.
- **Canvas Soft** (`{colors.canvas-soft}` — `#fcfaf7`): The warm near-white used as the default page body background below the hero fold. From `--color-faded-lighter`.
- **Canvas Warm** (`{colors.canvas-warm}` — `#f7f5f2`): The slightly deeper warm surface — footer and inset regions. From `--color-border-base` warm floor.
- **Glass Border** (`{colors.glass-border}` — `rgba(255,255,255,0.2)`): The 20%-white border used on glass-panel cards floating on the gradient. The only structural edge visible on the hero.
- **Overlay** (`{colors.overlay}` — `rgba(20,20,19,0.6)`): The dark scrim used for modal backdrops and overlay states.

### Text
- **Ink** (`{colors.ink}` — `#292827`): The primary text color on all light surfaces — headings and body paragraphs below the fold.
- **Ink Deep** (`{colors.ink-deep}` — `#141413`): The deepest near-black — used as the announcement banner background.
- **Body** (`{colors.body}` — `#73716d`): Secondary body text — captions, footer copy, subdued labels.
- **Mute** (`{colors.mute}` — `#8d8a86`): Lowest-priority text — placeholder, fine print. From `--color-border-base`.
- **Icon Soft** (`{colors.icon-soft}` — `rgba(41,40,39,0.5)`): Semi-transparent ink used for secondary icon states. From `--color-icon-soft`.

### Borders
- **Hairline** (`{colors.hairline}` — `#8d8a86`): The standard 1 px border color for inputs and card edges on light surfaces.
- **Hairline Soft** (`{colors.hairline-soft}` — `rgba(115,113,109,0.2)`): The 20%-opacity border — most card and divider edges below the fold. From `--color-border-sub`.
- **Hairline Sub** (`{colors.hairline-sub}` — `rgba(115,113,109,0.05)`): Barely-there 5% border for the most subtle divider moments. From `--color-border-soft`.

### Semantic
- **Link** (`{colors.link}` — `#714cb6`): Inline link color on light surfaces — same as brand primary.
- **Error** (`{colors.error}` — `#ee0000`): Destructive / validation red.
- **Warning** (`{colors.warning}` — `#f5a623`): Caution indicator.

## Typography

### Font Family
One variable-weight proprietary sans carries everything: **Super Sans VF**. The working weight range is 460 (body, navigation, labels) to 540 (all display and heading moments) to 600 (button labels and strong emphasis). The face never appears below 460 or above 600 in any captured surface. There is no secondary family, no monospace layer.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 540 | 61.44px | normal | Hero headline ("Superpowers, everywhere you work"). The brand's statement moment — white on gradient. |
| `{typography.display-lg}` | 48px | 540 | 52px | normal | Large section headlines below the fold. |
| `{typography.display-md}` | 28px | 540 | 32px | -0.63px | Feature-cluster headlines and card headings. The -0.63px tracking is applied at this size and below. |
| `{typography.display-sm}` | 26px | 540 | 33.8px | normal | Sub-section headings and callout titles. |
| `{typography.body-lg}` | 18px | 460 | 28px | — | Lead paragraph under the hero headline ("Mail, Docs, and AI that works in every app and tab"). |
| `{typography.body-md}` | 16px | 460 | 24px | — | Default body paragraph on light surfaces. |
| `{typography.body-sm}` | 14px | 460 | 20px | — | Navigation links, secondary body, card body text. |
| `{typography.body-sm-strong}` | 14px | 600 | 20px | — | Emphasised nav labels, active tab text. |
| `{typography.caption}` | 12px | 460 | 16px | — | Badges, fine print, footer tertiary lines. |
| `{typography.button-md}` | 14px | 600 | 20px | — | CTA button label at nav and card scale. |
| `{typography.button-lg}` | 16px | 600 | 24px | — | Primary hero CTA button label ("Sign Up It's Free"). |

### Principles
- **The variable axis is the hierarchy tool.** The brand moves between 460 and 540 on a single face rather than switching families. Body and nav never exceed 460; headings never drop below 540.
- **No negative tracking at display sizes.** Unlike many developer-platform brands, Superhuman does not letter-space headlines negatively at hero scale — only at 28 px (`-0.63px`) does subtle tightening appear.
- **Weight 600 is reserved for interactive labels.** Button text and strong inline emphasis use 600; display headings stay at 540. This keeps the CTA visually distinct from the headline.
- **No monospace layer.** There is no code-voice in this brand's typography system. Every surface — including AI chat mockups — uses Super Sans VF.
- **All headlines are set in white on the gradient hero.** Once below the fold on canvas-soft, headlines switch to `{colors.ink}` without any treatment change.

### Note on Font Substitutes
Super Sans VF is a proprietary variable typeface cut for the brand. The closest open-source substitute is **Plus Jakarta Sans** (variable, weight 300–800; use 460 ≈ weight 450, 540 ≈ weight 550, 600 ≈ weight 600). **DM Sans** is a passable second choice with similar geometric warmth.

## Layout

### Spacing System
- **Base unit**: 4 px. The brand's `--space-1x` token equals `calc(4 / 16 * 1rem)` = 4 px; all spacing values are multiples of 4.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 56 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px · `{spacing.section}` 128 px.
- **Hero band padding**: `{spacing.4xl}` 64 px top/bottom, giving the gradient and headline room to breathe.
- **Section padding**: feature bands below the fold use `{spacing.5xl}` 96 px top/bottom.
- **Card interior**: glass-panel hero cards use tight `{spacing.sm}` 12 px padding; feature cards below the fold use `{spacing.lg}` 24 px.
- **Nav height**: 64 px with `{spacing.xs} {spacing.lg}` padding — the same rhythm as the hero band.

### Grid & Container
- **Max width**: approximately 1200 px centred; horizontal gutters of `{spacing.lg}` 24 px at desktop.
- **Column patterns**:
  - Hero: single centred column for headline + CTA; UI mockup cards float below in a 2-up offset arrangement.
  - Feature sections: 2-up or 3-up card grids at desktop, collapsing to 1-up at mobile.
  - Announcement banner: full-bleed single-row strip at the very top.

### Whitespace Philosophy
The gradient hero demands generous vertical padding — the purple wash needs vertical space to express itself. Section spacing is intentionally large (`{spacing.5xl}`) so the transition from gradient to canvas-soft reads as a deliberate surface change, not a tight seam. Inside cards, padding is compact relative to section gaps: the brand's rhythm is wide sections + tight interior, never the reverse.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero gradient band and announcement banner. |
| Level 1 — Glass Panel | `1px solid rgba(255,255,255,0.2)` border, transparent fill. | UI mockup cards floating on the gradient hero. |
| Level 2 — Hairline Card | `1px solid rgba(115,113,109,0.2)` border, canvas-soft fill. | Feature cards below the fold on light surfaces. |
| Level 3 — Soft Float | Hairline border + `box-shadow: 0 4px 16px rgba(0,0,0,0.08)`. | Elevated UI components within mockup panels (e.g. the AI chat suggestion chip). |

The brand does not use heavy drop-shadows anywhere in the captured surfaces. Depth is communicated through surface-color contrast (purple gradient → cream canvas) and translucent glass borders, not shadow stacking.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands (hero, announcement banner). |
| `{rounded.xs}` | 4px | Tightest inline element radii. From `--radius-1x`. |
| `{rounded.sm}` | 6px | Slightly softened small elements. From `--radius-1_5x`. |
| `{rounded.md}` | 8px | The universal button and card radius — the brand's primary shape token. Measured on CTA button and all cards. |
| `{rounded.lg}` | 16px | Larger card chrome or panel containers. From `--radius-4x`. |
| `{rounded.xl}` | 20px | The widest non-pill radius — modal panels or large containers. From `--radius-5x`. |
| `{rounded.button}` | 8px | Locked measured radius for all CTA and nav buttons. Source-of-truth from extraction. |
| `{rounded.card}` | 8px | Locked measured radius for all card surfaces. Source-of-truth from extraction. |
| `{rounded.pill}` | 20px | Tab-pill elements on the hero. From `--radius-5x`. |
| `{rounded.full}` | 9999px | Icon button circular containers and avatar chips. |

The brand makes a deliberate choice: buttons are soft-square (8 px), not pill. This is non-negotiable — converting to a 100 px pill would break the brand's identity.

## Components

### Buttons

**`button-primary`** — the canonical purple CTA button.
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.button-md}` (14 px / 600), padding 6 px vertical × 16 px horizontal, shape `{rounded.button}` 8 px. The measured padding `6px 16px` is source-of-truth from extraction.

**`button-secondary`** — the light-surface secondary action.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, same typography + shape as `button-primary`.

**`hero-cta`** — the oversized hero CTA ("Sign Up It's Free →").
- Background `{colors.on-primary}`, text `{colors.ink}`, label `{typography.button-lg}` (16 px / 600), padding `{spacing.sm} {spacing.xl}`, shape `{rounded.button}` 8 px. The white fill on the gradient background makes it the highest-contrast element in the hero.

**`nav-cta-signup`** — the small "Sign up" button in the top nav.
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.button-md}`, padding 6 px × 16 px, shape `{rounded.button}` 8 px.

**`tab-pill`** — ghost tab pills in feature selector rows.
- Background transparent, text `{colors.on-primary}`, label `{typography.body-sm}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.pill}` 20 px.

**`tab-pill-active`** — the selected state of a tab pill.
- Background `{colors.on-primary}`, text `{colors.ink}`, label `{typography.body-sm-strong}`, same padding + shape as `tab-pill`. The white fill against the gradient background is the active indicator.

**`icon-button`** — small circular icon controls inside mockup panels.
- Background transparent, text `{colors.on-primary}`, shape `{rounded.full}`, padding `{spacing.xs}`.

### Cards & Containers

**`glass-card`** — UI mockup cards floating on the hero gradient.
- Background transparent, text `{colors.on-primary}`, 1 px solid `{colors.glass-border}` border, body `{typography.body-sm}`, padding `{spacing.sm}` 12 px, shape `{rounded.card}` 8 px. The glass-panel treatment is exclusive to the gradient band.

**`ai-chat-card`** — the AI conversation panel visible in the hero screenshot (left-side AI chat mockup).
- Background `{colors.canvas}`, text `{colors.ink}`, body `{typography.body-sm}`, padding `{spacing.sm}` 12 px, shape `{rounded.card}` 8 px. White fill on the gradient makes it read as a floating product window.

**`ui-mockup-card`** — the team-workspace / docs panel visible in the hero (right-side product mockup).
- Background `{colors.canvas}`, text `{colors.ink}`, body `{typography.body-sm}`, padding `{spacing.md}` 16 px, shape `{rounded.card}` 8 px.

**`feature-card`** — cards in feature sections below the fold.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, 1 px solid `{colors.hairline-soft}` border, body `{typography.body-md}`, padding `{spacing.lg}` 24 px, shape `{rounded.card}` 8 px.

**`badge-inline`** — small contextual chips (e.g. "#launch-project-chat" label in the AI chat mockup).
- Background `{colors.glass-border}`, text `{colors.on-primary}`, body `{typography.caption}`, padding 2 px × `{spacing.xs}`, shape `{rounded.sm}` 6 px.

### Navigation

**`nav-bar`** — the top navigation strip sitting on the gradient.
- Background transparent, text `{colors.on-primary}`, height 64 px, padding `{spacing.xs} {spacing.lg}`. Layout: logo left, "Product / Enterprise / Education / Pricing" links centre, "Contact sales / Log in / Sign up" cluster right.

**`nav-link`** — the centred link row inside `nav-bar`.
- Text `{colors.on-primary}`, `{typography.body-sm}`, padding `{spacing.xs} {spacing.sm}`, shape `{rounded.full}` (ghost — visible on hover only).

**`nav-link-secondary`** — "Contact sales" and "Log in" links at the right of the nav.
- Text `{colors.on-primary}`, `{typography.body-sm}`.

**`announcement-banner`** — the full-bleed dark strip at the very top of the page ("Looking for Superhuman Mail? Learn more →").
- Background `{colors.ink-deep}` `#141413`, text `{colors.on-primary}`, body `{typography.body-sm}`, padding `{spacing.sm} {spacing.lg}`.

### Page Sections

**`hero-band`** — the purple gradient hero containing the headline, lead, and CTA.
- Background `{colors.hero-gradient-start}` (gradient wash), text `{colors.on-primary}`, padding `{spacing.4xl} {spacing.lg}`. Headline in `{typography.display-xl}`; lead in `{typography.body-lg}`; then the `hero-cta`.

**`footer`** — the warm-canvas bottom nav.
- Background `{colors.canvas-warm}`, text `{colors.body}`, body `{typography.body-sm}`, padding `{spacing.xl} {spacing.lg}`.

### Inputs & Forms

**`form-input`** — the standard text input.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline-soft}` border, body `{typography.body-sm}`, padding `{spacing.xs} {spacing.sm}`, height 40 px, shape `{rounded.button}` 8 px.

**`link-inline`** — inline links on the gradient / dark surface.
- Text `{colors.primary-light}` `#d4c7ff` (the light version of the brand purple — legible on dark backgrounds), body `{typography.body-sm}`.

## Do's and Don'ts

### Do
- Sustain the purple gradient at hero scale as the brand's sole decorative surface. The wash is the identity — it needs vertical room to breathe.
- Use `{rounded.button}` 8 px on every CTA and button. The soft-square shape is deliberate and non-negotiable.
- Set all display copy in Super Sans VF weight 540 on the gradient and `{colors.ink}` on light surfaces.
- Use transparent glass-border cards (`{colors.glass-border}`) exclusively on the gradient band. Shift to `{colors.canvas-soft}` + hairline border below the fold.
- Use `{colors.primary-light}` `#d4c7ff` for inline links and accents on the dark/gradient surface — pure white links would lose distinction from body text.
- Let the surface transition from purple gradient to `{colors.canvas-soft}` cream do the heavy lifting of section separation. No dark polarity-flip bands are needed.

### Don't
- Don't convert buttons to pills. The 8 px radius is the brand; a 100 px pill belongs to a different design language entirely.
- Don't miniaturise the gradient to a purple swatch or flat fill. The brand requires the full violet-to-periwinkle wash — a single flat `{colors.primary}` fill reads as a failed approximation.
- Don't introduce a monospace or secondary typeface. Super Sans VF is the entire typographic system.
- Don't add heavy drop-shadows to cards. The brand's elevation is built from glass borders and surface-color contrast — not shadow stacking.
- Don't render body paragraphs at weight 540 or higher. Weight 540 is reserved for display headings; body stays at 460.
- Don't use `{colors.primary}` purple as a text color on the gradient hero — it disappears. Use `{colors.on-primary}` white for all hero text.
- Don't introduce letter-spacing at display sizes. Negative tracking is not part of this brand's voice; the only tightening appears at 28 px (`-0.63 px`).
