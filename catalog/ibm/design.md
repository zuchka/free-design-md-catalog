---
version: alpha
name: IBM
description: "IBM's design language is a century-old engineering institution distilled into type and negative space: IBM Plex Sans at light weight 300 carries every headline — a deliberate softness against a field of near-black ink and pure white canvas — while the brand's signature blue (#0f62fe) does the entire conversion-signal work. No gradients, no decorative illustration, no gradient-mesh theatrics. Carbon Design System discipline means every element snaps to a 4-px base grid, every radius is exactly 4 px whether it is a button, a card, or an input, and every surface edge is marked by a 1 px mid-gray hairline. The system reads as precise, institutional, and quietly confident — a brand that has nothing to prove by shouting."
colors:
  primary: "#0f62fe"
  on-primary: "#ffffff"
  ink: "#161616"
  body: "#525252"
  mute: "#8d8d8d"
  hairline: "#c6c6c6"
  hairline-strong: "#a8a8a8"
  canvas: "#ffffff"
  canvas-soft: "#f4f4f4"
  canvas-mid: "#e0e0e0"
  topbar: "#171717"
  on-topbar: "#ffffff"
  link: "#0f62fe"
  link-hover: "#0043ce"
  link-visited: "#8a3ffc"
  interactive: "#0f62fe"
  interactive-hover: "#0043ce"
  button-secondary-bg: "#c6c6c6"
  button-secondary-fg: "#8d8d8d"
  success: "#198038"
  error: "#da1e28"
  warning: "#f1c21b"
  info: "#0043ce"
  overlay: rgba(0,0,0,0.5)
  gradient-start: rgba(0,0,0,0.9)
  gradient-end: rgba(0,0,0,0)
typography:
  display-xl:
    fontFamily: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: 54px
    fontWeight: 300
    lineHeight: 64px
    letterSpacing: 0px
  display-lg:
    fontFamily: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: 47px
    fontWeight: 300
    lineHeight: 56px
    letterSpacing: 0px
  display-md:
    fontFamily: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: 32px
    fontWeight: 300
    lineHeight: 40px
    letterSpacing: 0px
  display-sm:
    fontFamily: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: 24px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: 0px
  body-lg:
    fontFamily: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  body-sm-strong:
    fontFamily: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0px
  caption:
    fontFamily: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0.32px
  label:
    fontFamily: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.32px
  code:
    fontFamily: '"IBM Plex Mono", "Menlo", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier, monospace'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  button-md:
    fontFamily: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  button-lg:
    fontFamily: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
rounded:
  none: 0px
  button: 4px
  card: 4px
  input: 4px
  tag: 4px
  xs: 2px
  sm: 4px
  md: 4px
  lg: 4px
  pill: 9999px
  full: 9999px
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
  section: 96px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    borderBottom: 1px solid {colors.hairline}
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 48px
    padding: 0px {spacing.md}
  nav-topbar:
    backgroundColor: "{colors.topbar}"
    textColor: "{colors.on-topbar}"
    typography: "{typography.caption}"
    height: 32px
    padding: 0px {spacing.md}
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.md}"
  nav-icon-button:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs}"
    size: 48px
    rounded: "{rounded.button}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 14px {spacing.md}
    height: 48px
  button-secondary:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 14px {spacing.md}
    height: 48px
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 14px {spacing.md}
    height: 48px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 14px {spacing.md}
    height: 48px
  card-content:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
  card-recommended:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
    labelTypography: "{typography.caption}"
  card-news:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.2xl} {spacing.md}"
  hero-band-dark:
    backgroundColor: "{colors.topbar}"
    textColor: "{colors.on-topbar}"
    typography: "{typography.display-lg}"
    padding: "{spacing.2xl} {spacing.md}"
  feature-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.section} {spacing.md}"
  news-sidebar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderLeft: 1px solid {colors.hairline}
    typography: "{typography.body-md}"
    padding: "{spacing.md}"
  pagination-control:
    textColor: "{colors.primary}"
    activeTextColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    borderBottom: 2px solid {colors.primary}
    padding: "{spacing.xs}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
    textDecoration: none
  link-arrow:
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} 0px"
  tag-label:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: 2px {spacing.xs}
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    borderBottom: 1px solid {colors.ink}
    typography: "{typography.body-md}"
    rounded: "{rounded.input}"
    padding: "{spacing.xs} {spacing.md}"
    height: 40px
  footer:
    backgroundColor: "{colors.topbar}"
    textColor: "{colors.on-topbar}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xl} {spacing.md}"
  ai-assistant-button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-topbar}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs}"
    size: 48px
  privacy-banner:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.caption}"
    rounded: "{rounded.card}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-pricing-tier:
    description: Default pricing tier card using canvas surface with hairline border.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured tier — polarity-flipped to primary blue fill with white text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: Solution summary card on canvas-soft surface — used for software / infra category tiles.
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription/trial summary panel — line items per add-on on canvas with hairline dividers.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row — active state uses primary blue left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  ex-data-table-cell:
    description: Carbon-style data table — header uses label typography; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.label}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in card using canvas surface with Carbon form-input primitives inside.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog — canvas surface, 4 px radius, Carbon-style header + body.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame on canvas-soft with caption typography below.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Notification toast — flat canvas surface, 4 px radius, body-sm text.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xs} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

IBM.com is Carbon Design System made canonical — the house system that every internal product team is measured against. The brand's visual posture is institutional restraint: a pure white canvas punctuated by a single-step gray hierarchy and one high-saturation blue (`{colors.primary}` — `#0f62fe`) that carries every meaningful interactive signal. There are no brand gradients at marketing scale, no mesh backdrops, no decorative illustration systems. The craft lives entirely in typography spacing and grid discipline.

IBM Plex Sans at weight 300 is the voice of the headline. That light weight is a deliberate institutional choice — a century-old engineering firm that does not need to shout. Body paragraphs step up to weight 400, and only labels, navigation eyebrows, and button-adjacent elements ever reach weight 600. The face is paired with IBM Plex Mono for every technical or code-adjacent surface, maintaining a clean separation between narrative and technical registers that mirrors the Carbon documentation itself.

Surfaces are a four-step grayscale staircase: `{colors.canvas}` (pure white for cards and content), `{colors.canvas-soft}` (the 96 % white used for feature bands and inset regions), `{colors.canvas-mid}` (the visible divider tone), and `{colors.topbar}` (`#171717`, the near-black header and footer). Elevation is conveyed almost entirely through hairline borders (`1px solid {colors.hairline}`) rather than shadow — a conscious rejection of the shadow-heavy depth languages common elsewhere. Cards sit flat against the page, bounded by their `1px` border and a 4 px radius that is the same on every element: button, card, input, tag.

The page's only concession to dynamism is the IBM AI assistant button — a filled blue circle floating at the bottom-right, using the pill radius that appears nowhere else in the documented system. Its contrast against the flat-hairline world reads as intentional: AI is the brand's current editorial priority, and it gets the one rounded shape on the page.

## Colors

### Brand & Interactive
- **Primary Blue** (`{colors.primary}` — `#0f62fe`): The single interactive signal. Every CTA button, every inline link, every arrow link, the AI assistant button, the active pagination underline. IBM does not distribute this blue across decoration — it is a pure semantic token.
- **Interactive Hover** (`{colors.interactive-hover}` — `#0043ce`): The pressed / hover state for all primary-blue interactive elements. Slightly darker, same hue family.
- **Link Visited** (`{colors.link-visited}` — `#8a3ffc`): The purple visited-link state visible in longer editorial pages and news feeds.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure white — default card, modal, and content surface. Every card on the "Recommended for you" and "Latest News" grids sits on this tone.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f4f4f4`): The 96 % white used for page section backgrounds, inset regions, and tag/badge fills. Feature bands alternate between this and pure canvas.
- **Canvas Mid** (`{colors.canvas-mid}` — `#e0e0e0`): The mid-gray used for horizontal dividers, rule lines, and the secondary button background family.
- **Topbar** (`{colors.topbar}` — `#171717`): The near-black tone that colors the navigation header, the site footer, and polarity-flipped dark-band sections. Extracted from `--color-topbar-background`.

### Text
- **Ink** (`{colors.ink}` — `#161616`): Every heading and default body paragraph on light surfaces. The Carbon `$text-primary` token.
- **Body** (`{colors.body}` — `#525252`): Secondary body text — card descriptions, supporting copy, tag text.
- **Mute** (`{colors.mute}` — `#8d8d8d`): Lowest priority text — placeholder values, disabled states, fine-print captions. Extracted from the button disabled color signal (`rgb(141,141,141)`).
- **Hairline** (`{colors.hairline}` — `#c6c6c6`): The 1 px border color on every card, input, and divider. Pulled directly from the card border extraction.
- **On Primary / On Topbar** (`{colors.on-primary}` / `{colors.on-topbar}` — `#ffffff`): All text on blue or near-black surfaces.

### Semantic
- **Success** (`{colors.success}` — `#198038`): Carbon's green success state, visible in confirmation notices and status indicators.
- **Error** (`{colors.error}` — `#da1e28`): Carbon's red destructive / alert state.
- **Warning** (`{colors.warning}` — `#f1c21b`): Carbon's amber caution state.
- **Info** (`{colors.info}` — `#0043ce`): Carbon's blue informational state — one step darker than primary.

### Overlays
- **Gradient Start / End** (`{colors.gradient-start}` / `{colors.gradient-end}`): The video-overlay gradient that darkens hero imagery — `rgba(0,0,0,0.9)` to `rgba(0,0,0,0)`. Visible in the identity hero video band. Extracted from `--color-gradient-start` and `--color-gradient-end`.

## Typography

### Font Family
Two faces carry the entire system:

1. **IBM Plex Sans** — the custom humanist sans designed in-house for IBM. Every display, body, button, nav, and label token. Weights 300 (display headlines) / 400 (body, buttons, nav links) / 600 (labels, eyebrows, strong-body) are the working set. The face never appears at 700 or heavier in documented marketing surfaces.
2. **IBM Plex Mono** — the companion monospace face for code blocks, terminal mockups, and technical data. Weight 400 only at 12–14 px. Positive letter-spacing at 0.32 px for caption-scale mono labels.

Both faces are open-source (available on Google Fonts and the IBM GitHub repository), so no substitution guidance is needed.

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 54px | 300 | 64px | 0 | Largest hero headline, above-the-fold band maximum. |
| `{typography.display-lg}` | 47px | 300 | 56px | 0 | Primary hero headline ("Embed trust in every identity"). The extracted 47.25 px h1 size. |
| `{typography.display-md}` | 32px | 300 | 40px | 0 | Section headlines — "Recommended for you", "Latest News". |
| `{typography.display-sm}` | 24px | 400 | 32px | 0 | Card cluster sub-headlines and pricing tier names. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Lead paragraph under hero headline. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph, news card body. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary body, nav link text, card captions, button labels. |
| `{typography.body-sm-strong}` | 14px | 600 | 20px | 0 | Section eyebrow labels, nav CTA text. |
| `{typography.caption}` | 12px | 400 | 16px | 0.32px | Footer fine print, tag labels, content-type labels ("Free trial", "Report"). |
| `{typography.label}` | 12px | 600 | 16px | 0.32px | Table column headers, form labels, uppercase-styled captions. |
| `{typography.code}` | 13px | 400 | 20px | 0 | Inline code, API references, terminal copy. |
| `{typography.button-md}` | 14px | 400 | 20px | 0 | All button labels — primary, secondary, ghost. |
| `{typography.button-lg}` | 16px | 400 | 24px | 0 | Large-scale CTA buttons at hero / band scale. |

### Principles
- **Weight 300 is the display register.** IBM Plex Sans at light weight for every headline is the brand's most distinctive typographic choice. It communicates institutional confidence without visual noise. Never promote headlines to 400 or heavier.
- **No negative letter-spacing.** IBM Plex Sans is optically balanced at the sizes IBM uses it; the brand does not apply negative tracking at any size. All letter-spacing is 0 or a small positive value at caption scale (0.32 px). This is the opposite of the aggressive-tracking geometric-sans pattern.
- **Sentence-case headlines.** IBM headlines are sentence-case — "Embed trust in every identity" — never title-case, never all-caps (outside of small label tokens).
- **Blue is the only interactive hue.** IBM Plex Sans never appears in any colour other than ink, body, mute, on-primary, or blue in marketing surfaces. No red links, no green CTAs.
- **Mono for the technical layer only.** IBM Plex Mono appears exclusively in code, terminal, and data-table header contexts. Body paragraphs never use mono.

## Layout

### Spacing System
- **Base unit**: 4 px. The Carbon spacing scale is strictly 4-px-based: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 px. The extracted frequency data confirms 16 px (267 occurrences) and 32 px (145 occurrences) as the dominant interior spacing values, with 4 and 8 px as the micro-gap layer.
- **Dominant interior gap**: `{spacing.md}` (16 px) — used inside cards, between label and headline, between nav items.
- **Section vertical rhythm**: `{spacing.2xl}` (48 px) to `{spacing.section}` (96 px) between major bands. The hero band extends to `{spacing.3xl}` (64 px) top/bottom.
- **Page horizontal gutter**: `{spacing.md}` (16 px) at mobile, expands with the grid container at desktop.

### Grid & Container
- **Max content width**: approximately 1584 px (the Carbon `max-breakpoint`); content centres within this with 16 px edge gutters narrowing to 0 at the outermost bleed edges.
- **Column patterns visible on page**:
  - Hero: 2-column asymmetric split — copy left (~35 %), video right (~55 %), news sidebar far right (~20 %).
  - "Recommended for you": 4-up horizontal card row.
  - "Latest News": single-column right sidebar with numbered pagination.
  - Nav: full-width flex row — logo left, category links centre, utility icons right.
- **Grid language**: Carbon's 12- or 16-column grid underlies every layout. Cards snap to column boundaries with no fractional widths.

### Whitespace Philosophy
IBM uses whitespace as the primary organisational tool. Sections are separated by surface-color shifts (white to gray-10 and back) rather than decorative dividers. Inside cards, the vertical rhythm is tight (16 px between label and headline, 8–12 px between headline and body), then generous 32–48 px gaps before the next section. The page reads as a series of clean institutional panels, not a continuous scroll experience.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No border, no shadow. | Full-bleed hero bands, dark topbar/footer sections. |
| Level 1 — Hairline | `1px solid {colors.hairline}` border, no shadow. | All cards — content cards, recommended cards, news cards. The IBM default "you can see this element" cue. |
| Level 2 — Focus Ring | `0 0 0 2px {colors.primary}` outline offset. | Keyboard-focused interactive elements — Carbon's standard focus style. |
| Level 3 — Overlay | `rgba(0,0,0,0.5)` backdrop. | Modal overlays and drawer backgrounds. |

IBM's Carbon system explicitly avoids decorative box-shadows on cards and containers. The `card-content` shadow extraction returned `none` — that is intentional, not an omission. Depth is communicated by the hairline border alone. Modals receive a heavier drop-shadow internally in the Carbon component library but the marketing surface does not expose them.

### Decorative Depth
- **Video gradient overlay**: The hero video band uses the `{colors.gradient-start}` to `{colors.gradient-end}` gradient (`rgba(0,0,0,0.9)` → transparent) as a left-edge scrim over dark imagery, ensuring the white headline text remains legible. This is the only gradient in the documented surface.
- **Topbar polarity flip**: The navigation header and footer shift to `{colors.topbar}` (`#171717`), creating the page's primary sense of vertical bracketing. No shadow is needed — the color contrast is the depth cue.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands, horizontal rules, table rows. |
| `{rounded.xs}` | 2px | Sub-pixel fine elements (rare, reserved). |
| `{rounded.sm}` / `{rounded.md}` / `{rounded.button}` / `{rounded.card}` / `{rounded.input}` / `{rounded.tag}` | 4px | Every button, every card, every form input, every tag pill — the universal Carbon radius. Measured at 4 px from deterministic extraction for both button and card. |
| `{rounded.pill}` / `{rounded.full}` | 9999px | The AI assistant floating button only. The single exception to the flat-corner rule; signals a distinct, newer interaction pattern within the IBM surface. |

### Shape Philosophy
IBM Carbon uses a single radius value for essentially every interactive element — the 4 px corner is the brand's shape fingerprint. Unlike systems that vary radius by component size (small inputs at 2 px, large cards at 12 px, CTAs at pill), Carbon applies the same 4 px to the 12 px tag and the 48 px primary button alike. This creates a flat, engineered visual rhythm — shapes are defined by their content and grid position, not their curvature.

## Components

### Navigation

**`nav-topbar`** — the near-black announcement / utility bar above the main nav.
- Background `{colors.topbar}`, text `{colors.on-topbar}`, height 32 px, typography `{typography.caption}`. Hosts language selectors and account utilities.

**`nav-bar`** — the main product navigation.
- Background `{colors.canvas}`, `1px solid {colors.hairline}` bottom border, height 48 px, padding `0px {spacing.md}`. Left: IBM logo. Centre: Software / Infrastructure / Consulting / Support / Think dropdown links in `{typography.body-sm}`. Right: search, chat, globe, and user icon buttons.

**`nav-link`** — individual nav category link.
- Text `{colors.ink}`, `{typography.body-sm}`, padding `{spacing.xs} {spacing.md}`. No shape on default state; hover/active produces a bottom-border indicator in `{colors.primary}`.

**`nav-icon-button`** — the utility icon cluster (search, chat, language, user).
- Text `{colors.ink}`, padding `{spacing.xs}`, 48 × 48 px touch target.

### Buttons

**`button-primary`** — the filled blue CTA ("Make identity accountable").
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.button-md}`, `{rounded.button}` (4 px), padding `14px {spacing.md}`, height 48 px. Carries a right-arrow icon inline.

**`button-secondary`** — the outlined or ghost secondary CTA ("Modernize access with IBM Vault").
- Background `{colors.canvas-soft}`, text `{colors.ink}`, `1px solid {colors.hairline}`, `{typography.button-md}`, `{rounded.button}` (4 px), padding `14px {spacing.md}`, height 48 px. External-link icon inline.

**`button-tertiary`** — the blue-border ghost variant for supporting actions.
- Background `{colors.canvas}`, text `{colors.primary}`, `1px solid {colors.primary}`, `{typography.button-md}`, `{rounded.button}`, padding `14px {spacing.md}`, height 48 px.

**`button-ghost`** — text-only blue CTA with no visible border.
- Background transparent, text `{colors.primary}`, `{typography.button-md}`, `{rounded.button}`, padding `14px {spacing.md}`.

### Cards

**`card-content`** — the standard content card ("Recommended for you" grid tiles).
- Background `{colors.canvas}`, text `{colors.ink}`, `1px solid {colors.hairline}`, `{rounded.card}` (4 px), padding `{spacing.md}`. Hosts a thumbnail image at top, a content-type label in `{typography.caption}`, a headline in `{typography.body-md-strong}` (implied), and a body teaser in `{typography.body-sm}`.

**`card-recommended`** — same chrome as `card-content` with an explicit content-type eyebrow ("Free trial", "Report", "Insight", "Webinar").
- Inherits all `card-content` properties; eyebrow label in `{typography.caption}` set in `{colors.body}`.

**`card-news`** — the news article card inside the "Latest News" sidebar.
- Background `{colors.canvas}`, text `{colors.ink}`, `{rounded.card}`, padding `{spacing.md}`. Headline as inline link in `{colors.primary}`, `{typography.body-md}`. Followed by an arrow link row.

### Bands & Sections

**`hero-band`** — the primary marketing hero with video and copy.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.2xl} {spacing.md}`. Headline in `{typography.display-lg}` (47 px / weight 300), body in `{typography.body-md}`, CTA row with `button-primary` + `button-secondary`. Right column hosts the product video behind the `{colors.gradient-start}` overlay.

**`hero-band-dark`** — the polarity-flipped dark hero variant (used on sub-pages and product sections).
- Background `{colors.topbar}`, text `{colors.on-topbar}`, padding `{spacing.2xl} {spacing.md}`. Headline in `{typography.display-lg}` white-on-dark.

**`feature-band`** — a secondary section on `{colors.canvas-soft}` for supporting content clusters.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.section} {spacing.md}`. Section headline in `{typography.display-md}`.

### Sidebar & Navigation Components

**`news-sidebar`** — the "Latest News" right-rail column.
- Background `{colors.canvas}`, text `{colors.ink}`, `1px solid {colors.hairline}` left border, padding `{spacing.md}`. Headline "Latest News" in `{typography.display-sm}`. News cards stacked vertically with hairline dividers between.

**`pagination-control`** — the numbered carousel below the news sidebar.
- Active page: text `{colors.ink}`, `2px solid {colors.primary}` bottom border. Inactive: text `{colors.primary}`, no border. Typography `{typography.body-sm}`.

### Utility Components

**`link-inline`** — body-copy inline links (news headlines, article teasers).
- Text `{colors.link}`, `{typography.body-md}`, no underline by default (underline on hover per Carbon pattern).

**`link-arrow`** — the right-arrow CTA link pattern ("→") used below news items and card footers.
- Text `{colors.primary}`, `{typography.body-sm}`, padding `{spacing.xs} 0px`.

**`tag-label`** — the content-type categorisation pill ("Free trial", "Report", "Insight", "Webinar").
- Background `{colors.canvas-soft}`, text `{colors.body}`, `{typography.label}`, `{rounded.tag}` (4 px), padding `2px {spacing.xs}`.

**`form-input`** — the Carbon text input (present in search and contact surfaces).
- Background `{colors.canvas}`, text `{colors.ink}`, `1px solid {colors.hairline}` full border + `1px solid {colors.ink}` bottom emphasis, `{typography.body-md}`, `{rounded.input}` (4 px), padding `{spacing.xs} {spacing.md}`, height 40 px.

**`privacy-banner`** — the "Your privacy choices" compliance notice at the bottom-left.
- Background `{colors.canvas}`, text `{colors.ink}`, `1px solid {colors.hairline}`, `{rounded.card}` (4 px), padding `{spacing.xs} {spacing.sm}`, `{typography.caption}`.

**`ai-assistant-button`** — the IBM AI floating action button at bottom-right.
- Background `{colors.primary}`, text `{colors.on-primary}`, `{rounded.pill}` (the single pill-radius element on the surface), size 48 × 48 px, padding `{spacing.xs}`. The "AI" logotype sits centred inside.

**`footer`** — the site-wide bottom navigation.
- Background `{colors.topbar}`, text `{colors.on-topbar}`, padding `{spacing.xl} {spacing.md}`, `{typography.body-sm}`. Multi-column link grid with `{typography.label}` column eyebrows.

## Do's and Don'ts

### Do
- Use `{colors.primary}` (`#0f62fe`) as the single interactive signal. Every link, every CTA button, every arrow link resolves to this blue. IBM does not distribute accent colours across decoration.
- Set all display headlines in `{typography.display-lg}` or `{typography.display-md}` at weight 300. The light-weight headline is the brand's most distinctive typographic gesture.
- Apply `{rounded.button}` (4 px) to every button, card, input, and tag. The flat-corner discipline is non-negotiable in the Carbon system.
- Bound every card with `1px solid {colors.hairline}` and no shadow. Elevation is communicated by border alone on IBM marketing surfaces.
- Use `{colors.topbar}` for the nav header and footer, creating a dark bracket around the white content body.
- Keep letter-spacing at 0 for all display and body sizes. IBM Plex Sans is optically balanced without tracking adjustment.
- Separate the polarity-flipped dark band (`hero-band-dark`, footer) from light content bands using the `{colors.topbar}` surface alone — no gradients, no shadow, no decorative border.

### Don't
- Don't introduce additional accent colours. No orange, no purple, no green in marketing-surface CTAs. The semantic palette (success, error, warning) is for status states only, not decoration.
- Don't set headlines at weight 400 or heavier. Weight 300 is the display register; promoting it to regular weight breaks the institutional tone.
- Don't apply shadow to cards or containers. The extracted card shadow is `none` — that is the correct answer, not a gap to fill.
- Don't use `{rounded.pill}` on buttons or cards. The 9999 px radius is reserved for the AI assistant floating button only. Every other interactive element uses the 4 px square corner.
- Don't underline links by default. Carbon's link pattern is color-only on default state, underlined on hover — reversing this creates visual noise at IBM's content density.
- Don't apply the video gradient (`{colors.gradient-start}` → `{colors.gradient-end}`) decoratively. It exists solely to ensure headline legibility over dark video; it is not a brand decoration system.
- Don't use positive letter-spacing on display or body text. The 0.32 px value belongs exclusively to caption and label tokens at 12 px scale.
