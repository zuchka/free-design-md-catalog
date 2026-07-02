---
version: alpha
name: PlayStation-design-system
description: "PlayStation is a consumer gaming brand whose surface is a deep cinematic darkness on near-black canvas, broken at hero scale by full-bleed game key art — character photography and illustrated cinematics that act as the entire decorative system. A proprietary condensed sans (SST) carries every label, headline, and button at weights 300–500; the brand never uses a serif or geometric face. The one accent that cuts through the darkness is a signature PlayStation blue (#0070cc), reserved for primary CTAs, the Sign In button, and interactive focus states. Everything else is controlled restraint: near-black surfaces, white type on dark imagery, a single-step card shadow, and pill-shaped buttons that run the full curve at 999 px."
colors:
  primary: "#0070cc"
  on-primary: "#ffffff"
  primary-dark: "#0064bd"
  primary-focus: "#0064b7"
  ink: "#1f1f1f"
  ink-dark: "#17181a"
  body: "#1f1f1f"
  mute: "#999999"
  on-dark: "#ffffff"
  canvas: "#ffffff"
  canvas-soft: "#f3f3f3"
  canvas-subtle: "#f5f7fa"
  page-dark: "#17181a"
  surface-dark: "#1f2024"
  surface-dark-2: "#2c2d33"
  hairline: "#f3f3f3"
  hairline-dark: "#2c2d33"
  link: "#0070cc"
  link-dark: "#53b1ff"
  commerce: "#d53b00"
  commerce-active: "#aa2f00"
  warning: "#c81b3a"
  error: "#ff143f"
  gradient-dark-start: "#17181a"
  gradient-dark-end: "#1f2024"
  gradient-surface-start: "#f3f3f3"
  gradient-surface-end: "#ffffff"
  gradient-emphasis-start-dark: "#12131400"
  gradient-emphasis-end-light: "#f5f7fa"
  sony-bar: "#000000"
typography:
  display-xl:
    fontFamily: SST, Arial, sans-serif
    fontSize: 34px
    fontWeight: 300
    lineHeight: 42.5px
    letterSpacing: 0.1px
  display-lg:
    fontFamily: SST, Arial, sans-serif
    fontSize: 34px
    fontWeight: 300
    lineHeight: 42.7px
    letterSpacing: 0px
  display-md:
    fontFamily: SST, Arial, sans-serif
    fontSize: 22px
    fontWeight: 300
    lineHeight: 27.5px
    letterSpacing: 0.1px
  display-sm:
    fontFamily: SST, Arial, sans-serif
    fontSize: 18px
    fontWeight: 300
    lineHeight: 24px
    letterSpacing: 0px
  body-lg:
    fontFamily: SST, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md:
    fontFamily: SST, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
  body-sm:
    fontFamily: SST, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
  caption:
    fontFamily: SST, Arial, sans-serif
    fontSize: 11px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: SST, Arial, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  button-lg:
    fontFamily: SST, Arial, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  nav-label:
    fontFamily: SST, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 14px
  lg: 28px
  pill: 999px
  full: 9999px
  button: 999px
spacing:
  xxs: 5px
  xs: 7px
  sm: 10px
  md: 14px
  lg: 21px
  xl: 28px
  2xl: 42px
  3xl: 56px
  4xl: 84px
  section: 120px
components:
  sony-bar:
    backgroundColor: "{colors.sony-bar}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    padding: "{spacing.xxs} {spacing.lg}"
    height: 28px
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    height: 64px
    padding: "{spacing.xs} {spacing.xl}"
    borderBottom: 1px solid {colors.hairline}
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-signin:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
    height: 36px
  nav-search-icon:
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    borderColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
    border: 1px solid {colors.on-dark}
  hero-band:
    backgroundColor: "{colors.page-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: "{spacing.3xl} {spacing.xl}"
  game-thumbnail-strip:
    backgroundColor: "{colors.page-dark}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
    gap: "{spacing.xs}"
  game-thumbnail-card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
    shadow: rgba(0, 0, 0, 0.8) 0px 4px 7px 0px
  card-game:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
    shadow: rgba(0, 0, 0, 0.8) 0px 4px 7px 0px
  card-editorial:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
    shadow: rgba(0, 0, 0, 0.8) 0px 4px 7px 0px
  section-band-dark:
    backgroundColor: "{colors.page-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    padding: "{spacing.2xl} {spacing.xl}"
  section-band-light:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.2xl} {spacing.xl}"
  badge-platform:
    backgroundColor: "{colors.surface-dark-2}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xxs} {spacing.xs}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  link-inline-dark:
    textColor: "{colors.link-dark}"
    typography: "{typography.body-md}"
  footer:
    backgroundColor: "{colors.page-dark}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.2xl} {spacing.xl}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.sm}"
    height: 40px
  modal-signin:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
    shadow: rgba(0, 0, 0, 0.8) 0px 4px 7px 0px
  ex-pricing-tier:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-product-selector:
    backgroundColor: "{colors.surface-dark}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    backgroundColor: "{colors.surface-dark}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xxs} {spacing.sm}"
  ex-data-table-cell:
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-md}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-modal-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-md}"
---
## Overview

PlayStation's marketing surface is built around one principle: the game is the brand. Every hero band is a full-bleed cinematic — key art from GTA VI, character photography, illustrated cinematics — and the design system's job is to get out of the way. The chrome is held in two near-black surface tones (`{colors.page-dark}` and `{colors.surface-dark}`), white type floats over the imagery, and a single PlayStation blue (`{colors.primary}`) carries every CTA and interactive state. Nothing decorates; only the game artwork does.

Type is entirely the brand's proprietary condensed sans (SST), a face that reads as utilitarian and technical at light weights — heading-scale text arrives at weight 300, creating a deliberately understated voice at 34 px. Buttons step up to weight 500 for legibility on dark imagery. There is no secondary typeface, no monospaced face, no serif moment anywhere in the captured surface.

Surfaces follow a two-register system: a light register (`{colors.canvas}` and `{colors.canvas-soft}`) for the global nav and support pages, and a dark register (`{colors.page-dark}` and `{colors.surface-dark}`) for every game-content band. The Sony corporate bar above the nav is pure `{colors.sony-bar}` black — a deliberate hierarchy signal that says "parent brand above, PlayStation below." Cards in the dark register carry a heavy-weighted shadow (`rgba(0,0,0,0.8) 0px 4px 7px`) that reads as a vignette lift rather than geometric elevation.

**Key characteristics:**
- PlayStation blue (`{colors.primary}`) is the only non-neutral colour in the chrome — it appears on exactly two surfaces: the Sign In pill in the nav, and primary CTA pills over hero imagery.
- The 999 px pill radius is the universal button shape. There is no rectangular CTA anywhere in the captured surface. Every actionable button runs full pill.
- Game card thumbnails use a 6 px radius (`{rounded.sm}`) — a tight, controlled corner that separates card chrome from the full-pill button geometry.
- A Sony corporate black bar (`{colors.sony-bar}`) sits above the PlayStation nav as a permanent parent-brand identifier.
- The SST typeface at weight 300 is the brand's display voice. The brand never uses weight 700 or heavier.

## Colors

### Brand & Interactive
- **Primary** (`{colors.primary}` — `#0070cc`): The PlayStation blue. Used exclusively on the Sign In button in the global nav and the primary "Pre-order now" / "Sign In" CTA pills over hero content. The entire conversion surface runs on this one blue.
- **Primary Dark** (`{colors.primary-dark}` — `#0064bd`): The hover/pressed state of the PlayStation blue CTA. Visible as a slightly deeper tone on button interaction.
- **Primary Focus** (`{colors.primary-focus}` — `#0064b7`): Focus ring and keyboard-navigation highlight for the primary button, extracted from `--color-role-backgrounds-primary-link-focus-light`.
- **Commerce** (`{colors.commerce}` — `#d53b00`): The orange-red used for commerce-context borders and price-action states, extracted from `--color-role-borders-commerce-link-base-light`.
- **Commerce Active** (`{colors.commerce-active}` — `#aa2f00`): The pressed/active tone for commerce elements.
- **Link Dark** (`{colors.link-dark}` — `#53b1ff`): The lighter blue used for inline links on dark surfaces, extracted from `--color-role-text-link-base-dark`.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure white — used for the global nav background, modal surfaces, and light-register support pages.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f3f3f3`): The 95%-white page background for light-register content bands. Extracted from `--color-8-light` and `--color-role-borders-divider-line-base-light`.
- **Canvas Subtle** (`{colors.canvas-subtle}` — `#f5f7fa`): The slightly blue-tinted light surface for filter backgrounds and section-end gradients.
- **Page Dark** (`{colors.page-dark}` — `#17181a`): The primary dark canvas — used as the full-page background behind game content, hero bands, and the dark footer. Extracted from `--color-role-section-gradients-primary-start-dark`.
- **Surface Dark** (`{colors.surface-dark}` — `#1f2024`): The slightly lighter dark surface for game cards, in-page modals, and content containers on dark bands.
- **Surface Dark 2** (`{colors.surface-dark-2}` — `#2c2d33`): The tertiary dark surface for nested elements — extracted from `--color-6-dark`.
- **Sony Bar** (`{colors.sony-bar}` — `#000000`): The pure black bar at the absolute top of the page carrying the Sony wordmark. A different visual register from the PlayStation dark surfaces.

### Text
- **Ink** (`{colors.ink}` — `#1f1f1f`): Dark near-black for all body text on light surfaces (nav links, support text).
- **Ink Dark** (`{colors.ink-dark}` — `#17181a`): The deepest near-black, matching the page dark for text on mid-tone surfaces.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): All text, labels, and button labels on dark surfaces and hero imagery.
- **Mute** (`{colors.mute}` — `#999999`): Secondary text — footer fine print, disabled states, placeholder labels.
- **Hairline** (`{colors.hairline}` — `#f3f3f3`): The 1 px divider on light surfaces — nav bottom border, card separators.
- **Hairline Dark** (`{colors.hairline-dark}` — `#2c2d33`): The 1 px divider on dark surfaces.

### Semantic
- **Warning** (`{colors.warning}` — `#c81b3a`): Warning and error text on light surfaces, extracted from `--color-role-text-warning-light`.
- **Error** (`{colors.error}` — `#ff143f`): The vivid red for destructive/error indicators, extracted from `--color-13-dark`.

### Gradients
- **Gradient Dark** (`{colors.gradient-dark-start}` `#17181a` → `{colors.gradient-dark-end}` `#1f2024`): The vertical content gradient used in dark bands — extracted from `--color-role-gradients-content-dark`. Creates depth between the page background and card surfaces.
- **Gradient Surface** (`{colors.gradient-surface-start}` `#f3f3f3` → `{colors.gradient-surface-end}` `#ffffff`): The upward light-surface gradient for wizard / onboarding panels.

## Typography

### Font Family
One proprietary face carries the entire system:

**SST** — PlayStation's custom condensed humanist sans. The face appears at weight 300 for all display/heading use, weight 400 for body and nav links, and weight 500 for button labels. It is never used at weight 600 or heavier in the captured surface. The face has a slightly condensed set-width that gives PlayStation marketing its distinctive tight efficiency — headlines at 34 px with weight 300 read as confident understatement, not weakness.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 34px | 300 | 42.5px | 0.1px | Primary hero headline ("Grand Theft Auto VI") on full-bleed key art. |
| `{typography.display-lg}` | 34px | 300 | 42.7px | 0px | Section headlines on dark content bands. |
| `{typography.display-md}` | 22px | 300 | 27.5px | 0.1px | Sub-section headers and card cluster headlines. |
| `{typography.display-sm}` | 18px | 300 | 24px | 0px | Smaller editorial heads and callout labels. |
| `{typography.body-lg}` | 16px | 400 | 24px | 0px | Lead body paragraphs under hero headlines. |
| `{typography.body-md}` | 14px | 400 | 21px | 0px | Default body copy, nav links, card descriptions. |
| `{typography.body-sm}` | 12px | 400 | 18px | 0px | Footer links, legal fine print, secondary metadata. |
| `{typography.caption}` | 11px | 400 | 16px | 0px | Platform badges (PS5, PS4), price labels, thumbnail captions. |
| `{typography.button-md}` | 14px | 500 | 20px | 0px | All button labels — nav Sign In, hero CTAs, modal actions. |
| `{typography.button-lg}` | 16px | 500 | 24px | 0px | Large-scale marketing CTA labels. |
| `{typography.nav-label}` | 14px | 400 | 20px | 0px | Top-nav dropdown labels (Games, PS5, PS4, PS Plus, etc.). |

### Principles
- **Weight 300 is the display voice.** PlayStation's headlines are intentionally light — the art does the heavy lifting, the type provides a clean label. Never promote display text to weight 600 or 700; it breaks the visual hierarchy with the game imagery.
- **No letter-spacing extremes.** Display text tracks at a near-neutral `0.1 px` — barely perceptible. The brand does not use aggressive negative tracking or positive tracking. The SST face's native spacing is the voice.
- **One face, no exceptions.** SST carries everything. There is no editorial sub-brand serif, no monospaced technical face, no geometric headline supplement.
- **Sentence-case throughout.** Nav labels, button labels, and headlines all appear in sentence-case. The brand does not use all-caps outside of the Sony corporate bar.

### Note on Font Substitutes
SST is a proprietary Sony typeface. Open-source substitutes:
- **SST** — *Roboto Condensed* (300 / 400 / 500) is the closest stylistic match for the condensed humanist proportions. *Source Sans 3* is a capable second choice. Both should be used at the same weights — 300 for display, 400 for body, 500 for buttons.

## Layout

### Spacing System
- **Base unit**: 7 px (the brand's `--space-3` CSS custom property). The measured spacing scale (`5 / 7 / 10 / 14 / 21 / 28 / 42 / 56 px`) builds from 7 px steps, not a pure 4 px grid. This produces a slightly looser feel than 4 px systems — appropriate for a content-heavy game-discovery surface.
- **Tokens**: `{spacing.xxs}` 5 px · `{spacing.xs}` 7 px · `{spacing.sm}` 10 px · `{spacing.md}` 14 px (`--space-5`) · `{spacing.lg}` 21 px · `{spacing.xl}` 28 px (`--space-7`) · `{spacing.2xl}` 42 px · `{spacing.3xl}` 56 px · `{spacing.4xl}` 84 px · `{spacing.section}` 120 px.
- **Section padding**: content bands use `{spacing.2xl}` to `{spacing.3xl}` top/bottom. Hero bands with full-bleed art effectively have zero padding at the top — the image fills the container — with CTA clusters positioned via absolute positioning within the hero.
- **Card interior padding**: game thumbnail cards use the tightest interior — `{spacing.xs}` 7 px — matching the extracted card padding. Editorial cards use `{spacing.sm}` 10 px.
- **Gap between thumbnails**: the horizontal game strip uses `{spacing.xs}` 7 px gaps between cards.

### Grid & Container
- **Max width**: the page appears to run to approximately 1920 px at full-bleed for hero bands, with content constrained to roughly 1200–1440 px for text content. Nav horizontal padding sits at `{spacing.xl}` 28 px.
- **Column patterns**:
  - Hero band: full-bleed image, 1-up with text overlay positioned left.
  - Thumbnail strip: 8–10 items wide horizontally scrolling row at desktop, narrowing at mobile.
  - Editorial card grid: estimated 3–4 up at desktop, collapsing to 1-up at mobile.
- **Sony bar**: full-bleed black bar, logo right-aligned.

### Whitespace Philosophy
The game art does the decorative work; the chrome is stripped back to near-nothing. Dark bands have minimal internal padding — the art fills the container edge-to-edge and text overlays float inside. Light-register bands (nav, support) use slightly more padding to breathe. Card grids are dense and tight — `{spacing.xs}` 7 px gaps — because the game thumbnails themselves are information-rich and need to sit close together for the browsing rhythm to work.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow. | Full-bleed hero bands and the Sony corporate bar. |
| Level 1 — Heavy Vignette | `rgba(0, 0, 0, 0.8) 0px 4px 7px 0px` | The standard game card shadow — extracted directly. A heavy-opacity, tight-radius shadow that reads as a vignette lift in the dark environment. |
| Level 2 — Nav Separation | `1px solid {colors.hairline}` bottom border | The nav bar's separation from page content on light surfaces. Not a shadow — a hairline rule. |
| Level 3 — Modal | Background dimming + card-surface `{colors.canvas}` with `{rounded.sm}` corners | The Sign In modal that appears over dark content — uses the light-register surface to create contrast against the dark page. |

The brand's elevation story is unusual: the only shadow in the system is a heavy-opacity short-radius shadow on game cards, designed to read as depth in a dark environment. There are no "stacked soft-offset" shadows — a single vignette-weight drop is the entire depth vocabulary. On light surfaces, depth is conveyed by surface steps (`{colors.canvas}` → `{colors.canvas-soft}`) rather than shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero bands, Sony bar, section bands. |
| `{rounded.xs}` | 4px | Platform badge chips (PS5 / PS4 platform indicators). |
| `{rounded.sm}` | 6px | The brand's card radius — game thumbnail cards, editorial cards, modal dialog surfaces. The measured card radius from extraction. |
| `{rounded.md}` | 14px | Form inputs and search fields in the nav. |
| `{rounded.lg}` | 28px | The observed pill radius for larger chips and promo banners — not used on primary CTAs. |
| `{rounded.pill}` | 999px | The universal button shape. Every CTA in the system — nav Sign In, hero "Pre-order now", hero "Buy a PS5", modal Sign In. The measured button radius from extraction. |
| `{rounded.full}` | 9999px | Icon-only circular tap targets (the search icon container in the nav). |

The two-radius system — `{rounded.sm}` 6 px for cards and `{rounded.pill}` 999 px for buttons — is the defining shape grammar of the PlayStation surface. The contrast between the tight card corner and the fully-rounded button creates deliberate visual tension: the content container is restrained, the action is generous.

## Components

### Navigation

**`sony-bar`** — The thin corporate-black bar at the absolute top of every PlayStation page.
- Background `{colors.sony-bar}` pure black, Sony wordmark right-aligned in white at `{typography.caption}` scale. Height approximately 28 px with `{spacing.xxs} {spacing.lg}` padding. This bar is never interactive for PlayStation navigation; it belongs to the Sony parent brand.

**`nav-bar`** — The global PlayStation navigation.
- Background `{colors.canvas}`, height approximately 64 px, PlayStation logo left, category dropdowns (Games, PS5, PS4, PS Plus, Accessories, News, Store, Support) centred, Sign In pill + search icon right. Separated from page content by a `1px solid {colors.hairline}` bottom rule. Text in `{typography.nav-label}`.

**`nav-link`** — The individual dropdown trigger links inside `nav-bar`.
- Text `{colors.ink}`, set in `{typography.nav-label}`, padding `{spacing.xs} {spacing.sm}`.

**`nav-cta-signin`** — The Sign In pill button in the global nav.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}`, shape `{rounded.pill}` 999 px, height approximately 36 px. The most consistently placed PlayStation blue element on every page.

### Buttons

**`button-primary`** — The canonical PlayStation blue pill CTA. "Pre-order now", "Buy a PS5".
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}`, shape `{rounded.pill}` 999 px, padding `{spacing.xs} {spacing.lg}`.

**`button-secondary`** — The ghost pill CTA paired with primary on hero imagery. "Buy a PS5" secondary.
- Background transparent, text `{colors.on-dark}`, 1 px solid white border, label in `{typography.button-md}`, shape `{rounded.pill}` 999 px, padding `{spacing.xs} {spacing.lg}`. Used on dark/image backgrounds where a fully filled secondary would compete with the hero art.

### Cards

**`card-game`** — The individual game title card in the horizontal thumbnail strip and game grids.
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, shape `{rounded.sm}` 6 px, padding `{spacing.xs}`, shadow `rgba(0, 0, 0, 0.8) 0px 4px 7px`. Hosts a game cover image at the top, title and platform badge below.

**`card-editorial`** — Editorial / news feature cards in content band grids.
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, shape `{rounded.sm}` 6 px, padding `{spacing.sm}`, same heavy shadow. Hosts a wider aspect-ratio image cap with headline below.

### Page Bands

**`hero-band`** — The full-bleed game key-art hero.
- Background `{colors.page-dark}` (visible in the image-less fallback state), text `{colors.on-dark}`, padding `{spacing.3xl} {spacing.xl}`. Inside: game title in `{typography.display-xl}` (weight 300), a short descriptor in `{typography.body-lg}`, then a CTA row with `button-primary` + `button-secondary`. The key art image fills the full band width and sets the band height.

**`section-band-dark`** — A content section band on the dark page register.
- Background `{colors.page-dark}`, text `{colors.on-dark}`, section headline in `{typography.display-lg}`, padding `{spacing.2xl} {spacing.xl}`.

**`section-band-light`** — A content section band on the light page register (used for PS Plus offers and support content).
- Background `{colors.canvas-soft}`, text `{colors.ink}`, section headline in `{typography.display-lg}`, padding `{spacing.2xl} {spacing.xl}`.

**`game-thumbnail-strip`** — The horizontally scrolling row of game thumbnails below the hero.
- Background `{colors.page-dark}`, padding `{spacing.xs}`, gap `{spacing.xs}` between items. Clips overflow horizontally on mobile; no scroll indicator visible.

### Utility

**`badge-platform`** — The PS5 / PS4 platform indicator chip on game cards.
- Background `{colors.surface-dark-2}`, text `{colors.on-dark}`, set in `{typography.caption}`, shape `{rounded.xs}` 4 px, padding `{spacing.xxs} {spacing.xs}`.

**`link-inline`** — Body-copy inline links on light surfaces.
- Text `{colors.link}`, set in `{typography.body-md}`.

**`link-inline-dark`** — Body-copy inline links on dark surfaces.
- Text `{colors.link-dark}` (`#53b1ff`), set in `{typography.body-md}`.

**`footer`** — The dark bottom navigation band.
- Background `{colors.page-dark}`, text `{colors.mute}`, set in `{typography.body-sm}`, padding `{spacing.2xl} {spacing.xl}`.

**`modal-signin`** — The Sign In modal overlay that appears when unauthenticated users click account-gated content.
- Background `{colors.canvas}` (light-register surface floated over the dark page), text `{colors.ink}`, shape `{rounded.sm}` 6 px, padding `{spacing.xl}`. Contains `form-input` fields and a `button-primary` pill CTA.

**`form-input`** — Text input field for the Sign In modal and search.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, set in `{typography.body-md}`, shape `{rounded.md}` 14 px, height 40 px, padding `{spacing.xs} {spacing.sm}`.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (`#0070cc`) for primary CTAs and the Sign In button only. It is the single conversion colour; diluting it to decorative use flattens the hierarchy.
- Use `{rounded.pill}` 999 px for every interactive button without exception. The pill is the brand's action grammar.
- Use `{rounded.sm}` 6 px for every card, modal, and container. Keep card and button radii visually distinct.
- Set all headlines at SST weight 300 — the deliberate lightness is the voice. The game art is doing the visual heavy lifting; the type is a calm label.
- Use full-bleed game key art as the primary decorative system. The hero band's purpose is to present the art at maximum fidelity.
- Maintain the two-surface-register system: `{colors.canvas}` / `{colors.canvas-soft}` for light contexts (nav, support), `{colors.page-dark}` / `{colors.surface-dark}` for game-content contexts. Never mix light cards into dark bands.
- Use the Sony bar (`{colors.sony-bar}`) at the absolute top of every PlayStation page as a fixed parent-brand identifier.

### Don't
- Don't introduce a new accent colour. The chrome operates on one blue; adding green, orange, or purple accents breaks the system. (Commerce orange `{colors.commerce}` exists for transactional price states only — not for decorative use.)
- Don't use rectangular CTA buttons. Every button in the system is `{rounded.pill}` 999 px; a flat-cornered button has no place in this brand.
- Don't promote SST to weight 600, 700, or 800. The display ceiling is weight 300–500. Heavy weight type competes with the game imagery.
- Don't apply light-surface shadows (soft stacked offsets) to game cards on dark bands. The heavy single-offset shadow (`rgba(0,0,0,0.8) 0px 4px 7px`) is the correct dark-environment elevation cue.
- Don't miniaturise the hero key art or crop it to a card-scale thumbnail in the hero position. The full-bleed art IS the hero; treat it as such.
- Don't use `{colors.link-dark}` (`#53b1ff`) on light surfaces or `{colors.link}` (`#0070cc`) on dark surfaces. Each link colour is register-specific.
- Don't set body paragraphs at SST weight 300. Weight 300 is for display headlines only; body text uses weight 400 for legibility.
