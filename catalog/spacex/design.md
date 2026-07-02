---
version: alpha
name: SpaceX
description: "A brand that operates at the edge of atmosphere and vacuum — SpaceX's design language is pure cinematic darkness: full-bleed launch photography as the entire decorative system, white-on-black type in a condensed military-grade sans, and a navigation bar so transparent it nearly disappears into the stars. There is no colour palette to speak of beyond near-white text on absolute black. The decoration is the mission itself."
colors:
  primary: "#ffffff"
  on-primary: "#000000"
  ink: "#f0f0fa"
  body: "#f0f0fa"
  mute: "#999999"
  hairline: "#333333"
  hairline-strong: "#555555"
  canvas: "#000000"
  canvas-soft: "#0a0a0a"
  canvas-raised: "#111111"
  on-canvas: "#f0f0fa"
  button-ghost-bg: rgba(240, 240, 250, 0.1)
  button-ghost-text: "#f0f0fa"
  nav-bg: rgba(0, 0, 0, 0.0)
  overlay-dark: rgba(0, 0, 0, 0.55)
  success: "#4caf50"
  error: "#f44336"
  warning: "#ff9800"
typography:
  display-xl:
    fontFamily: D-DIN, Arial, Verdana, sans-serif
    fontSize: 60px
    fontWeight: 700
    lineHeight: 54px
    letterSpacing: -1px
  display-lg:
    fontFamily: D-DIN, Arial, Verdana, sans-serif
    fontSize: 40px
    fontWeight: 700
    lineHeight: 44px
    letterSpacing: -0.5px
  display-md:
    fontFamily: D-DIN, Arial, Verdana, sans-serif
    fontSize: 28px
    fontWeight: 700
    lineHeight: 32px
    letterSpacing: -0.3px
  display-sm:
    fontFamily: D-DIN, Arial, Verdana, sans-serif
    fontSize: 20px
    fontWeight: 700
    lineHeight: 24px
    letterSpacing: 0px
  body-lg:
    fontFamily: D-DIN, Arial, Verdana, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: D-DIN, Arial, Verdana, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: D-DIN, Arial, Verdana, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  caption:
    fontFamily: D-DIN, Arial, Verdana, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  eyebrow:
    fontFamily: D-DIN, Arial, Verdana, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: 2px
  button-md:
    fontFamily: D-DIN, Arial, Verdana, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 1px
  button-lg:
    fontFamily: D-DIN, Arial, Verdana, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 1px
  nav-label:
    fontFamily: D-DIN, Arial, Verdana, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 1.5px
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  lg: 16px
  button: 32px
  pill: 32px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 20px
  lg: 24px
  xl: 40px
  2xl: 64px
  3xl: 96px
  4xl: 128px
  section: 160px
components:
  nav-bar:
    backgroundColor: "{colors.nav-bg}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    height: 64px
    padding: "{spacing.xs} {spacing.lg}"
  nav-logo:
    textColor: "{colors.ink}"
    typography: "{typography.display-sm}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-launches:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
    height: 40px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.xl} {spacing.lg}"
    overlay: "{colors.overlay-dark}"
  hero-eyebrow:
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
  hero-headline:
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
  button-ghost:
    backgroundColor: "{colors.button-ghost-bg}"
    textColor: "{colors.button-ghost-text}"
    borderColor: "{colors.hairline-strong}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 18px {spacing.lg}
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: 18px {spacing.lg}
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 18px {spacing.lg}
  card-mission:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  watch-cta:
    backgroundColor: "{colors.button-ghost-bg}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-strong}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 18px {spacing.lg}
  full-bleed-photo-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 0px
    overlay: "{colors.overlay-dark}"
  date-label:
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.caption}"
    padding: "{spacing.xl} {spacing.lg}"
  link-inline:
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
  dropdown-menu:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.md}"
  ex-pricing-tier:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-product-selector:
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    headerBackground: "{colors.canvas-raised}"
    headerTypography: "{typography.eyebrow}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-modal-card:
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

SpaceX's website is not a product page — it's a mission brief. The entire design vocabulary reduces to a single axiom: full-bleed launch photography is the decoration system. There are no cards with drop-shadows, no gradient meshes, no illustration-style icons. Every section is a full-viewport photograph of hardware, exhaust, and sky, with `{colors.ink}` near-white text floating over a darkened overlay. The brand earns its seriousness by removing everything that isn't the mission.

The colour palette is absolute. `{colors.canvas}` is true black `#000000`. Text is `{colors.ink}` — a near-white `#f0f0fa` with a faint blue shift rather than a warm cream, which reads as technical and cold under the launch photography. There is no secondary accent, no highlight hue, no gradient. The single moment of colour on the entire page is the exhaust and flame photographed into the hero image itself.

Typography is D-DIN — a condensed, military-legible grotesque — used in all-caps for headlines and navigation. The brand's display headlines at 60 px with `-1 px` letter-spacing and a tight `54 px` line-height pack two stacked headline lines into a dense slab of text that sits confidently over rocket photography. Tracking is slightly positive on small labels and eyebrows (uppercase, wide-spaced), negative only at large display scale.

Surfaces are stratified from `{colors.canvas}` through `{colors.canvas-soft}` and `{colors.canvas-raised}` — three nearly-identical blacks that separate nav, band, and card chrome without introducing any lightness. The only relief from the flat-black system is a translucent ghost button (`rgba(240, 240, 250, 0.1)`) — the brand's universal CTA surface — that sits on top of photography without occluding it.

**Key Characteristics:**
- Full-bleed hero photography is the entire decorative system. The brand does not use illustration, gradients, or abstract shapes.
- All-caps D-DIN condensed grotesque carries every headline and nav label. Weight 700 at display, 400 at body and navigation.
- The 32 px pill radius (`{rounded.button}`) is used on every CTA — ghost buttons, watch buttons, outline buttons all share the same pill shape.
- The transparent nav bar dissolves into whatever image is behind it; it has no visible background at rest.
- Dark-on-dark elevation: `{colors.canvas}` → `{colors.canvas-soft}` → `{colors.canvas-raised}` are the only surface steps — no whites, no light-mode panel.

## Colors

### Brand Surface
- **Canvas** (`{colors.canvas}` — `#000000`): True black. Every page band, every section background. The brand lives in the dark.
- **Canvas Soft** (`{colors.canvas-soft}` — `#0a0a0a`): A nearly-indistinguishable step up from pure black used for subtle panel separation.
- **Canvas Raised** (`{colors.canvas-raised}` — `#111111`): The "elevated" surface — dropdown menus, launch-schedule pill, and contained UI components.
- **Overlay Dark** (`{colors.overlay-dark}` — `rgba(0,0,0,0.55)`): The vignette layer applied over hero photography so white text stays legible against bright launch flames and sky.

### Text
- **Ink** (`{colors.ink}` — `#f0f0fa`): The brand's single text color — a cool near-white with a barely perceptible blue cast. Used for every headline, body paragraph, and nav label.
- **Body** (`{colors.body}` — `#f0f0fa`): Same value as ink; the brand does not differentiate primary from secondary text at a separate token level. Everything is near-white on black.
- **Mute** (`{colors.mute}` — `#999999`): Used in fine print, footer secondary lines, and metadata captions where maximum legibility is not required.

### Borders & Dividers
- **Hairline** (`{colors.hairline}` — `#333333`): 1 px borders on the launch-schedule dropdown and contained UI panels.
- **Hairline Strong** (`{colors.hairline-strong}` — `#555555`): The slightly brighter ring visible on ghost-button borders and active nav states.

### CTAs
- **Primary** (`{colors.primary}` — `#ffffff`): Reserved for filled-button states where maximum contrast against a dark surface is needed.
- **On Primary** (`{colors.on-primary}` — `#000000`): Text that sits on a white button fill.
- **Button Ghost Bg** (`{colors.button-ghost-bg}` — `rgba(240,240,250,0.1)`): The translucent fill of the brand's signature ghost CTA — sits on top of photography without blocking the image.
- **Button Ghost Text** (`{colors.button-ghost-text}` — `#f0f0fa`): White-spectrum label on ghost buttons.

### Semantic
- **Nav Bg** (`{colors.nav-bg}` — `rgba(0,0,0,0.0)`): The nav bar is fully transparent at rest, disappearing into the hero image.
- **Success** (`{colors.success}` — `#4caf50`): Status indicator; not visible on the marketing surface but held as a system token.
- **Error** (`{colors.error}` — `#f44336`): Validation and destructive-state red.
- **Warning** (`{colors.warning}` — `#ff9800`): Caution indicator.

## Typography

### Font Family
One face carries the entire system: **D-DIN** — a condensed military grotesque with tight letter geometry and strong vertical stress. It reads as aerospace specification-sheet typography. The fallback stack is `Arial, Verdana, sans-serif` — both wider and less characteristic, but the brand accepts them as functional fallbacks on systems without D-DIN installed.

There is no monospaced face and no serif face visible anywhere on the page. The entire typographic voice lives in a single grotesque.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 60px | 700 | 54px | -1px | Hero headline — "STARSHIP'S TWELFTH FLIGHT TEST". All-caps slab packed tight. |
| `{typography.display-lg}` | 40px | 700 | 44px | -0.5px | Section headlines on secondary full-bleed bands. |
| `{typography.display-md}` | 28px | 700 | 32px | -0.3px | Card-cluster headlines and mission-name labels. |
| `{typography.display-sm}` | 20px | 700 | 24px | 0px | Inline sub-headlines and feature callouts. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Lead body copy under section headlines. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph; mission description text. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary body, fine print, card supporting copy. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Footer links, legal lines, smallest metadata. |
| `{typography.eyebrow}` | 13px | 400 | 18px | 2px | Date labels ("MAY 22, 2026") and section eyebrows — positive tracking, all-caps. |
| `{typography.button-md}` | 13px | 400 | 20px | 1px | Ghost button and watch-CTA labels — slightly tracked-out. |
| `{typography.button-lg}` | 14px | 400 | 20px | 1px | Primary and outline button labels. |
| `{typography.nav-label}` | 13px | 400 | 20px | 1.5px | Nav link labels — the widest tracked value on the page, uppercase. |

### Principles
- **All-caps is non-negotiable at display and navigation scale.** The brand never uses sentence-case headlines. D-DIN in lowercase reads as a different brand entirely.
- **Negative tracking only at the largest display sizes.** The 60 px hero headline at `-1 px` is the single instance of negative tracking. Every smaller size tracks neutral-to-positive.
- **Positive tracking on labels and eyebrows.** Eyebrows, date labels, and nav links all carry `1–2 px` letter-spacing — the technical, engineering-document quality the brand projects.
- **Weight 700 is display-only.** Body, captions, buttons, and nav all sit at weight 400. The condensed geometry of D-DIN at 400 reads as authoritative without needing extra weight.
- **No decorative type treatments.** No gradient text, no outlined type, no typographic illustration. The type is purely functional and reads against photography.

### Note on Font Substitutes
D-DIN is a proprietary condensed grotesque. Open-source substitutes:
- **Condensed grotesque** — *Barlow Condensed* (700 for display, 400 for body) is the closest freely available match. *Oswald* is a passable second choice at display scale. *Roboto Condensed* covers the body-weight range well.

## Layout

### Spacing System
- **Base unit**: 4 px. Every measured value on the page (`4px`, `8px`, `12px`, `20px`) is a multiple of 4.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 20 px · `{spacing.lg}` 24 px · `{spacing.xl}` 40 px · `{spacing.2xl}` 64 px · `{spacing.3xl}` 96 px · `{spacing.4xl}` 128 px · `{spacing.section}` 160 px.
- **Hero band**: text overlay sits in the lower-left quadrant of the full-bleed image. The date eyebrow appears at roughly `{spacing.xl}` from the left edge; the CTA sits `{spacing.md}` below the headline.
- **Button interior padding**: `18px` top and bottom (measured), `{spacing.lg}` 24 px left and right — producing a tall, wide pill that reads as premium on a dark background.
- **Nav interior**: `{spacing.xs}` 8 px vertical, `{spacing.sm}` 12 px horizontal per link.

### Grid & Container
- **Full-bleed model**: every section is 100 vw × 100 vh (or close to it). The brand does not use a max-width content container on the hero bands — the photograph always bleeds to the viewport edge.
- **Text overlay alignment**: hero text is left-aligned, positioned in the lower-left of the viewport with consistent left margin of approximately `{spacing.lg}` 24 px.
- **Nav layout**: logo left-anchored, link row centred, "UPCOMING LAUNCHES" dropdown right-anchored. The nav is fixed-position and transparent, so it sits above the full-bleed hero image without a background plate.

### Whitespace Philosophy
The brand uses massive whitespace as a frame for photography — there is no busy card grid, no tight content cluster. Each full-bleed section is essentially one photograph, one headline, and one CTA. Interior spacing between the date eyebrow, the headline, and the CTA is tight (`{spacing.md}` gaps) so the text cluster reads as a dense editorial block against the expansive photograph behind it.

### Responsive Strategy

#### Key Breakpoints
The page is a full-bleed cinematic experience; at narrower viewports the photography crops and the text overlay remains anchored bottom-left. Nav collapses to a hamburger at mobile. Button sizes stay constant — the 32 px pill radius holds at all breakpoints.

#### Touch Targets
Ghost buttons render at `18px` top/bottom padding + `13 px` text, producing approximately 49 px total height — comfortably above the 44 × 44 px WCAG touch target minimum.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Photo Flood | No shadow, no border. The photograph is the surface. | Full-bleed hero bands and mission-photography sections. |
| Level 1 — Dark Overlay | `rgba(0,0,0,0.55)` gradient vignette over the image. | Applied to every hero band to ensure white text legibility over bright launch photography. |
| Level 2 — Ghost Surface | `rgba(240,240,250,0.1)` fill + `{colors.hairline-strong}` 1 px border. | The ghost button — the only UI chrome that appears directly on top of photography. |
| Level 3 — Raised Panel | Solid `{colors.canvas-raised}` `#111111` surface. | The "UPCOMING LAUNCHES" dropdown and contained UI panels. |

Elevation is achieved entirely through surface-colour darkening and translucency — never through box-shadow. The brand does not use drop-shadows at any scale. The photograph itself provides all apparent depth.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed photo bands, nav bar, footer. The brand defaults to sharp corners on containers. |
| `{rounded.xs}` | 2px | Smallest UI chrome — not commonly visible but held as a floor token. |
| `{rounded.sm}` | 4px | Fine UI controls at smallest scale. |
| `{rounded.md}` | 8px | Intermediate UI panel rounding (dropdowns). |
| `{rounded.lg}` | 16px | Slightly rounded panel chrome. |
| `{rounded.button}` | 32px | The brand's measured CTA radius — every ghost button, watch button, and outline button uses this pill shape. |
| `{rounded.pill}` | 32px | Alias for button; same measured value. Used on the "UPCOMING LAUNCHES" pill in the nav. |
| `{rounded.full}` | 9999px | Circular icon containers if needed. |

The brand's single radius decision is the 32 px pill — containers stay at sharp 0 px corners while CTAs are fully rounded. This contrast between rectangular bands and pill buttons is the brand's chief shape language.

## Components

### Navigation

**`nav-bar`** — the transparent fixed header.
- Background `{colors.nav-bg}` (fully transparent), text `{colors.ink}`, height 64 px. Logo hard-left, link row centred, launches dropdown hard-right. The bar is invisible against the hero image — only the white text and logo are visible.

**`nav-logo`** — the SpaceX wordmark in the top-left.
- White SVG logotype, sized roughly at `{typography.display-sm}` 20 px cap height. No background plate.

**`nav-link`** — the centred navigation items (VEHICLES / HUMAN SPACEFLIGHT / STARLINK / etc.).
- Text `{colors.ink}`, set in `{typography.nav-label}` (13 px / tracked 1.5 px), all-caps, padding `{spacing.xs} {spacing.sm}`.

**`nav-cta-launches`** — the "UPCOMING LAUNCHES" dropdown button on the right side of the nav.
- Background `{colors.canvas-raised}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, typography `{typography.nav-label}`, shape `{rounded.none}`, padding `{spacing.xs} {spacing.md}`, height 40 px. Carries a down-chevron icon.

**`dropdown-menu`** — the launch-schedule dropdown that opens from `nav-cta-launches`.
- Background `{colors.canvas-raised}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, `{typography.nav-label}`, shape `{rounded.none}`, padding `{spacing.xs} {spacing.md}`.

### Hero & Bands

**`hero-band`** — the full-bleed launch-photography hero section.
- Background `{colors.canvas}` behind the image, text `{colors.ink}`, padding `{spacing.xl} {spacing.lg}` for the text overlay region. The photograph covers 100 vw × 100 vh. A `{colors.overlay-dark}` translucent vignette ensures text legibility. Text cluster anchored bottom-left.

**`full-bleed-photo-band`** — secondary mission-photography sections below the hero (same visual treatment, different content).
- Background `{colors.canvas}`, text `{colors.ink}`, padding 0 px (the photograph is the band). Date eyebrow + headline + CTA overlaid at lower-left.

**`hero-eyebrow`** — the date / mission-label line above the hero headline.
- Text `{colors.ink}`, set in `{typography.eyebrow}` — 13 px, all-caps, 2 px letter-spacing, as seen: "MAY 22, 2026".

**`hero-headline`** — the primary mission headline on the hero band.
- Text `{colors.ink}`, set in `{typography.display-xl}` — 60 px / 700 weight / 54 px line-height / -1 px tracking. All-caps, two stacked lines.

**`date-label`** — standalone date or metadata label used above section headlines.
- Text `{colors.ink}`, `{typography.eyebrow}`, all-caps positive tracking.

### Buttons & CTAs

**`button-ghost`** — the brand's primary CTA surface. Appears as "WATCH →" on the hero.
- Background `{colors.button-ghost-bg}` (translucent 10 % white), text `{colors.button-ghost-text}`, 1 px solid `{colors.hairline-strong}` border, typography `{typography.button-md}` (13 px / tracked 1 px), shape `{rounded.button}` 32 px, padding `18px {spacing.lg}`.

**`watch-cta`** — alias for `button-ghost` in the context of video-play launch CTAs.
- Same chrome as `button-ghost`. Carries a right-arrow glyph inline with the label.

**`button-primary`** — the filled white button for contexts requiring maximum contrast.
- Background `{colors.primary}` white, text `{colors.on-primary}` black, typography `{typography.button-lg}`, shape `{rounded.button}` 32 px, padding `18px {spacing.lg}`.

**`button-outline`** — the white-bordered transparent button for secondary actions.
- Background `transparent`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, typography `{typography.button-md}`, shape `{rounded.button}` 32 px, padding `18px {spacing.lg}`.

### Cards & Content

**`card-mission`** — the mission/vehicle feature card used in grid sections.
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.body-md}`, shape `{rounded.none}` (sharp corners — the brand does not round containers), padding `{spacing.md}`.

### Footer & Utility

**`footer`** — the bottom nav and legal strip.
- Background `{colors.canvas}`, text `{colors.mute}`, typography `{typography.caption}`, padding `{spacing.xl} {spacing.lg}`.

**`link-inline`** — body-copy inline links.
- Text `{colors.ink}`, typography `{typography.body-md}`.

### Examples (illustrative)

**`ex-pricing-tier`** — Default tier card adapted to the dark system.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, shape `{rounded.none}`, padding `{spacing.xl}`.

**`ex-pricing-tier-featured`** — Featured tier — polarity-flipped to white fill with black text.
- Background `{colors.primary}`, text `{colors.on-primary}`, shape `{rounded.none}`, padding `{spacing.xl}`.

**`ex-product-selector`** — Feature comparison summary panel.
- Background `{colors.canvas-raised}`, shape `{rounded.none}`, padding `{spacing.lg}`.

**`ex-cart-drawer`** — Subscription line-item summary.
- Background `{colors.canvas}`, shape `{rounded.none}`, padding `{spacing.lg}`, item-divider `{colors.hairline}`.

**`ex-app-shell-row`** — Sidebar nav row. Active state uses white as the left-edge indicator.
- Background `{colors.canvas}`, activeIndicator `{colors.primary}`, shape `{rounded.none}`, padding `{spacing.xs} {spacing.sm}`.

**`ex-data-table-cell`** — Data table chrome. Header uses eyebrow uppercase tracked typography; body uses body-sm.
- headerBackground `{colors.canvas-raised}`, headerTypography `{typography.eyebrow}`, bodyTypography `{typography.body-sm}`, cellPadding `{spacing.xs} {spacing.sm}`, rowBorder `{colors.hairline}`.

**`ex-auth-form-card`** — Sign-in card on dark surface.
- Background `{colors.canvas-soft}`, shape `{rounded.none}`, padding `{spacing.xl}`.

**`ex-modal-card`** — Modal dialog on the dark system.
- Background `{colors.canvas-raised}`, shape `{rounded.none}`, padding `{spacing.xl}`.

**`ex-empty-state-card`** — Empty-state frame with generous padding.
- Background `{colors.canvas-soft}`, shape `{rounded.none}`, padding `{spacing.3xl}`, captionTypography `{typography.body-md}`.

**`ex-toast`** — Toast notification on dark surface.
- Background `{colors.canvas-raised}`, shape `{rounded.none}`, padding `{spacing.sm} {spacing.md}`, typography `{typography.body-sm}`.


## Do's and Don'ts

### Do
- Use full-bleed photography as the only decoration. The brand's "hero illustration" is always a real photograph of a rocket, spacecraft, or launch.
- Set every headline in `{typography.display-xl}` or `{typography.display-lg}` at weight 700, all-caps. The condensed grotesque at all-caps is non-negotiable.
- Apply the 32 px pill radius (`{rounded.button}`) to every CTA button. Containers stay at `{rounded.none}` — the contrast between sharp bands and pill buttons is the brand's shape language.
- Use `{colors.button-ghost-bg}` translucent fill for CTAs that sit on top of photography — never a solid opaque button on a photo background.
- Keep the nav bar transparent (`{colors.nav-bg}`) over hero imagery. It should appear to float.
- Use positive letter-spacing (`1–2 px`) on all labels, eyebrows, and nav items for the engineering-document quality.
- Keep the palette monochromatic — true black surfaces, near-white text, nothing else. Any colour introduced must come from the photography itself.

### Don't
- Don't introduce rounded corners on containers, cards, or bands. Only the 32 px pill on buttons is permitted.
- Don't use drop-shadows. The brand has zero box-shadow usage — the dark surfaces flatten naturally.
- Don't set headlines in sentence-case. All-caps D-DIN is the brand's identity; sentence-case reads as a different company.
- Don't introduce any brand accent colour (blue, red, orange, etc.) as a UI element. Colour belongs only to the photography.
- Don't lighten the background. Every surface token is a shade of black; there is no light-mode panel or card.
- Don't reduce the ghost button to a flat text link — the translucent pill is the only CTA shape the brand uses on photo backgrounds.
- Don't use the monospace or serif faces — D-DIN only, no exceptions visible on the live surface.
