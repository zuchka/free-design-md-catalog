---
version: alpha
name: Renault-Group-design-system
description: "Renault Group's corporate web presence is a cinematic editorial system built for a global automotive group — a dark-photography-first surface where full-bleed hero imagery does the decorative heavy lifting, overlaid with white headline text set in a proprietary variable sans (RenaultGroup-Variable) that carries aggressive negative tracking at display scale. The brand's palette is anchored by a warm taupe-brown primary — the signature colour of the group identity — surfacing on buttons, borders, and structural accents against a chromatic near-black canvas. Cards use a generous 24 px radius; interactive controls share a consistent 16 px radius. Whitespace is editorial and generous: section bands breathe at 40–56 px vertical padding, and the navigation sits on a warm dark bar that separates the stock-ticker utility strip above from the full-bleed content below."
colors:
  primary: "#786450"
  primary-light: "#ccc5be"
  primary-lighter: "#edeceb"
  primary-dark: "#1c0a06"
  primary-disabled: "#ddd8d2"
  on-primary: "#000000"
  ink: "#000000"
  ink-70: rgba(0,0,0,0.7)
  ink-50: rgba(0,0,0,0.5)
  ink-30: rgba(0,0,0,0.3)
  ink-15: rgba(0,0,0,0.15)
  ink-10: rgba(0,0,0,0.1)
  on-dark: "#ffffff"
  on-dark-90: rgba(255,255,255,0.9)
  on-dark-70: rgba(255,255,255,0.7)
  on-dark-50: rgba(255,255,255,0.5)
  on-dark-30: rgba(255,255,255,0.3)
  on-dark-15: rgba(255,255,255,0.15)
  canvas: "#ffffff"
  canvas-soft: "#f8f8fd"
  canvas-master: "#f0ede8"
  bento: "#1c1c1c"
  hairline: "#e4e2e2"
  hairline-mid: "#978b7f"
  neutral-100: "#1e1e1e"
  neutral-200: "#2f2f2f"
  neutral-400: "#9e9e9e"
  neutral-600: "#cccccc"
  neutral-700: "#dddddd"
  neutral-800: "#e0e0e0"
  grey: "#b2b2b2"
  tan: "#d4b896"
  yellow: "#ff8f3d"
  red: "#e50000"
  blue: "#427ce1"
  highlight: "#4dc9b8"
  purple: "#4c44ff"
typography:
  display-xl:
    fontFamily: RenaultGroup-Variable, system-ui, -apple-system, sans-serif
    fontSize: 40px
    fontWeight: 700
    lineHeight: 44px
    letterSpacing: -1.8px
  display-lg:
    fontFamily: RenaultGroup-Variable, system-ui, -apple-system, sans-serif
    fontSize: 30px
    fontWeight: 700
    lineHeight: 34px
    letterSpacing: -1.2px
  display-md:
    fontFamily: RenaultGroup-Variable, system-ui, -apple-system, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 28px
    letterSpacing: -0.6px
  display-sm:
    fontFamily: RenaultGroup-Variable, system-ui, -apple-system, sans-serif
    fontSize: 18px
    fontWeight: 700
    lineHeight: 22px
    letterSpacing: -0.3px
  body-lg:
    fontFamily: RenaultGroupAH-Variable, system-ui, -apple-system, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: RenaultGroupAH-Variable, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: RenaultGroupAH-Variable, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
  body-sm:
    fontFamily: RenaultGroupAH-Variable, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: RenaultGroupAH-Variable, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
  caption:
    fontFamily: RenaultGroupAH-Variable, system-ui, -apple-system, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  caption-strong:
    fontFamily: RenaultGroupAH-Variable, system-ui, -apple-system, sans-serif
    fontSize: 12px
    fontWeight: 700
    lineHeight: 16px
  button-md:
    fontFamily: RenaultGroupAH-Variable, system-ui, -apple-system, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-lg:
    fontFamily: RenaultGroupAH-Variable, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
  eyebrow:
    fontFamily: RenaultGroupAH-Variable, system-ui, -apple-system, sans-serif
    fontSize: 12px
    fontWeight: 700
    lineHeight: 16px
    letterSpacing: 0.8px
rounded:
  none: 0px
  sm: 8px
  md: 16px
  button: 16px
  lg: 20px
  card: 24px
  xl: 32px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 10px
  md: 12px
  base: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 56px
  4xl: 64px
  5xl: 80px
  section: 120px
components:
  utility-bar:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.on-dark-70}"
    typography: "{typography.caption}"
    padding: "{spacing.xs} {spacing.xl}"
    height: 40px
  nav-bar:
    backgroundColor: "{colors.bento}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    height: 72px
    padding: "{spacing.base} {spacing.xl}"
  nav-link:
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm-strong}"
    padding: "{spacing.xs} {spacing.md}"
    rounded: "{rounded.none}"
  nav-cta-search:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.base}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    borderColor: "{colors.on-dark}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.base}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.base}"
  hero-carousel:
    backgroundColor: "{colors.bento}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: "{spacing.2xl} {spacing.xl}"
  hero-slide-headline:
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    letterSpacing: -1.8px
  carousel-nav-button:
    backgroundColor: "{colors.on-dark}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "{spacing.md}"
  category-badge:
    backgroundColor: "{colors.primary-lighter}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.base}"
  article-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl} {spacing.xl}"
    borderColor: "{colors.hairline-mid}"
  article-card-date:
    textColor: "{colors.neutral-400}"
    typography: "{typography.caption}"
  article-link-arrow:
    backgroundColor: "{colors.on-dark}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  feature-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.3xl} {spacing.xl}"
  bento-card:
    backgroundColor: "{colors.bento}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl} {spacing.xl}"
  footer:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.on-dark-70}"
    typography: "{typography.body-sm}"
    padding: "{spacing.2xl} {spacing.xl}"
  footer-link:
    textColor: "{colors.on-dark-70}"
    typography: "{typography.caption}"
  lang-selector:
    backgroundColor: "{colors.bento}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.xs}"
  accessibility-toggle:
    backgroundColor: "{colors.neutral-200}"
    textColor: "{colors.on-dark-70}"
    typography: "{typography.caption}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.xs}"
  stock-ticker:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.on-dark-70}"
    typography: "{typography.caption-strong}"
  image-overlay-headline:
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
  ex-pricing-tier:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-mid}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-pricing-tier-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-product-selector:
    backgroundColor: "{colors.canvas-master}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.md}"
  ex-data-table-cell:
    headerBackground: "{colors.canvas-master}"
    headerTypography: "{typography.eyebrow}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-modal-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-empty-state-card:
    backgroundColor: "{colors.canvas-master}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.base}"
    typography: "{typography.body-sm}"
---
## Overview

Renault Group's corporate site is a dark-first, photography-led editorial system. The visual strategy is simple and committed: full-bleed hero carousels dominate the above-the-fold experience, placing aerial industrial photography — shipyards, factories, assembly lines — behind large white display headlines. The brand's decorative identity is carried not by colour fields or gradient systems but by the photography itself; the warm taupe-brown primary (`{colors.primary}`) surfaces only on interactive controls, category badges, and structural accents, providing warmth without competing with the images.

The nav architecture layers three horizontal bands: a near-black utility strip (`{colors.neutral-100}`) carrying stock prices, language selectors, and accessibility toggles in small caption text; a dark bento-tone main nav (`{colors.bento}`) with white sans-serif links and a circular search button; and then the full-bleed content below. This three-tier header is a deliberate corporate signal — it says "major institution" before a word of content is read.

Type is set in two proprietary variable faces: `RenaultGroup-Variable` for all headings (weight 700, aggressive negative tracking at display scale) and `RenaultGroupAH-Variable` for body and UI copy (weight 400/700, neutral tracking). The display voice is bold and editorial — 40 px hero headlines with `-1.8 px` letter-spacing read as print-magazine titles applied to an automotive context. Sentence-case only; no all-caps headlines.

Surfaces cycle between a warm near-white canvas (`{colors.canvas-soft}`) for content bands, a pure-white card surface (`{colors.canvas}`), and the deep bento-dark (`{colors.bento}`) for nav and dark-card bento modules. Cards are generous: 24 px radius, `40px 32px` interior padding, warm taupe hairline borders (`{colors.hairline-mid}`). The brand uses no dramatic shadows — cards sit flat on the surface, distinguished by their border and radius rather than elevation.

## Colors

### Brand
- **Primary** (`{colors.primary}` — `#786450`): The group's signature warm taupe-brown. Appears on primary buttons, category badge fills, card border accents, and structural separators. The brand's only named accent.
- **Primary Light** (`{colors.primary-light}` — `#ccc5be`): A desaturated warm beige used for secondary borders, disabled border states, and subtle dividers on light surfaces.
- **Primary Lighter** (`{colors.primary-lighter}` — `#edeceb`): The lightest tint — used as the background fill of category eyebrow badges (e.g. "Actualités du Groupe") and master-detail inset surfaces.
- **Primary Dark** (`{colors.primary-dark}` — `#1c0a06`): A near-black warm brown, extracted as the darkest tone in the primary ramp. Used as a deep shadow or extreme dark accent.
- **Primary Disabled** (`{colors.primary-disabled}` — `#ddd8d2`): The washed-out disabled state for primary controls.
- **Tan** (`{colors.tan}` — `#d4b896`): A warm sand tone visible in the brand's colour scale. Used for warm tinted surfaces and illustration accents.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure white. The default card surface and modal background.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f8f8fd`): The default page body background — a very light lavender-white that reads as neutral at distance.
- **Canvas Master** (`{colors.canvas-master}` — `#f0ede8`): A warm cream inset surface derived from `--color--master-detail`. Used for bento inset regions and alternate-row fills.
- **Bento** (`{colors.bento}` — `#1c1c1c`): The primary dark surface — nav bar, dark-card modules, overlay backgrounds. Not pure black; slightly warmer.
- **Hairline** (`{colors.hairline}` — `#e4e2e2`): 1 px dividers on light surfaces — table rows, card borders, form input edges.
- **Hairline Mid** (`{colors.hairline-mid}` — `#978b7f`): A warmer, slightly darker border visible on article cards. The brand's mid-tone warm divider.

### Text
- **Ink** (`{colors.ink}` — `#000000`): All body text on light surfaces.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): All text on dark surfaces — nav links, hero headlines, dark-band body copy.
- **On Dark 70** (`{colors.on-dark-70}`): Secondary text on dark surfaces — footer body, utility bar labels.
- **On Dark 50 / 30** (`{colors.on-dark-50}` / `{colors.on-dark-30}`): Dimmed overlays and disabled text on dark backgrounds.
- **Neutral 400** (`{colors.neutral-400}` — `#9e9e9e`): Mid-gray for article date labels and secondary metadata on light surfaces.

### Semantic
- **Yellow / Warm Orange** (`{colors.yellow}` — `#ff8f3d`): The brand's alert / callout accent. Not used for primary CTAs.
- **Red** (`{colors.red}` — `#e50000`): Error and destructive-action state.
- **Blue** (`{colors.blue}` — `#427ce1`): Link and informational accent in editorial contexts.
- **Highlight** (`{colors.highlight}` — `#4dc9b8`): A teal-cyan highlight used in data visualisation and special-topic callouts.
- **Purple** (`{colors.purple}` — `#4c44ff`): A secondary digital accent, used for in-product digital feature surfaces.

## Typography

### Font Families
Two proprietary variable faces cover the entire system:

1. **RenaultGroup-Variable** — The display and heading face. Weight 700 exclusively at all heading levels. Geometric-flavoured variable sans with tighter, more condensed proportions at large sizes. Aggressive negative letter-spacing (`-1.8 px` at 40 px hero) is a signature trait. Used only for `h1`–`h3` and display tokens.
2. **RenaultGroupAH-Variable** — The humanist body and UI face. Weights 400 (body) and 700 (strong/button labels). Neutral to slightly open tracking. Covers all body copy, captions, eyebrows, button labels, and navigation text.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 40px | 700 | 44px | -1.8px | Hero carousel headline, full-bleed editorial titles. |
| `{typography.display-lg}` | 30px | 700 | 34px | -1.2px | Section headings inside content bands. |
| `{typography.display-md}` | 24px | 700 | 28px | -0.6px | Card cluster headings, bento-module titles. |
| `{typography.display-sm}` | 18px | 700 | 22px | -0.3px | Sub-section inline headings. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Lead body paragraphs under section headings. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph inside cards and bands. |
| `{typography.body-md-strong}` | 16px | 700 | 24px | 0 | Bold inline body emphasis. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary body copy, nav link labels. |
| `{typography.body-sm-strong}` | 14px | 700 | 20px | 0 | Nav link active state, strong UI labels. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Date labels, footer secondary lines, utility bar text. |
| `{typography.caption-strong}` | 12px | 700 | 16px | 0 | Stock ticker values, eyebrow category labels in compact contexts. |
| `{typography.button-md}` | 12px | 400 | 16px | 0 | Primary button label at the measured extracted scale. |
| `{typography.button-lg}` | 14px | 700 | 20px | 0 | Secondary/ghost button labels at marketing scale. |
| `{typography.eyebrow}` | 12px | 700 | 16px | 0.8px | Category badges like "Actualités du Groupe" — positive tracking distinguishes these from body captions. |

### Principles
- **Negative tracking is the display voice.** The heading face drops to `-1.8 px` at 40 px hero; never use default or positive tracking on display tokens.
- **Sentence-case only.** Headlines and category labels appear sentence-case. No all-caps display text — the eyebrow token uses positive tracking instead of caps to signal category.
- **700 is the heading ceiling.** The variable face is used at weight 700 and 400 only. No intermediate weights at 500 or 600 in the observed surfaces.
- **The heading face stays in headings.** `RenaultGroup-Variable` never appears in body copy, buttons, or nav. The two-face split is strict.

### Note on Substitutes
Both faces are proprietary. Open-source substitutes:
- **Heading face (RenaultGroup-Variable)** — *Barlow Semi Condensed* (700) is the closest geometric-condensed substitute. *Montserrat* (700) is a passable second.
- **Body/UI face (RenaultGroupAH-Variable)** — *Inter* (400/700) matches the humanist proportions well at UI scales.

## Layout

### Spacing System
- **Base unit**: 8 px. The dominant padding values in the extraction are multiples of 8 px (8, 16, 24, 32, 40, 56, 64).
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 10 px · `{spacing.md}` 12 px · `{spacing.base}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 56 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 80 px · `{spacing.section}` 120 px.
- **Section vertical padding**: content bands use `{spacing.2xl}` to `{spacing.3xl}` top/bottom. The hero carousel is full-bleed with no internal padding — the image fills edge to edge.
- **Card interior**: article cards use `40px 32px` (`{spacing.2xl}` vertical, `{spacing.xl}` horizontal) — generous for editorial readability.
- **The 10 px (`{spacing.sm}`) value** appears frequently (62 instances in extraction) — it is the brand's tight inter-element gap inside utility bars and caption rows.

### Grid & Container
- **Max width**: approximately 1280 px; content centres with horizontal gutters of `{spacing.xl}` 32 px at desktop.
- **Column patterns**:
  - Hero carousel: full-bleed, 3-card horizontal scroll with prev/next arrow controls.
  - Content bands: 2-up or 3-up article card grids.
  - Nav row: logo left · link cluster centre · utility cluster right.
  - Utility bar: stock ticker left · accessibility / language controls right.

### Whitespace Philosophy
Photography is the decoration; whitespace separates editorial modules. Section bands use `{spacing.2xl}` to `{spacing.3xl}` top/bottom to let imagery breathe. Inside cards, headline and metadata stack tightly (`{spacing.xs}` gap), then a wider gap before the article link arrow CTA. The page reads as a magazine — content is dense but clearly articulated by consistent card borders and generous card padding.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero carousel bands, dark bento bands. |
| Level 1 — Border Only | `1px solid {colors.hairline-mid}` | Article cards on light canvas — the border, not shadow, carries the card edge. |
| Level 2 — Light Hairline | `1px solid {colors.hairline}` | Form inputs, dividers on canvas-soft surfaces. |
| Level 3 — Overlay Scrim | `rgba(0,0,0,0.5)` gradient scrim | Image overlay scrim beneath white hero headline text. |

The brand does not use shadow-based elevation. Cards are flat on the page surface, distinguished by their 24 px radius and warm hairline border. The polarity flip from `{colors.canvas-soft}` to `{colors.bento}` dark is the primary depth cue between content bands.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero images, nav bar, utility bar. |
| `{rounded.sm}` | 8px | Tightest UI radius for small inline elements. |
| `{rounded.md}` | 16px | The brand's universal interactive control radius — buttons, pills, language selector, accessibility toggle, category badges. Also the pill radius. |
| `{rounded.button}` | 16px | Canonical button radius (measured). Shared with `rounded.md` — both resolve to 16 px. |
| `{rounded.lg}` | 20px | Intermediate card radius for smaller card modules. |
| `{rounded.card}` | 24px | The brand's article card and bento-card radius (measured). |
| `{rounded.xl}` | 32px | Largest surface radius for oversized callout panels. |
| `{rounded.full}` | 9999px | Circular icon buttons — carousel prev/next arrows, search icon container. |

## Components

### Navigation

**`utility-bar`** — The topmost strip carrying stock price (RNO 25,28 € -3,03%), language selector (FR), accessibility toggle, and help icon.
- Background `{colors.neutral-100}` (near-black), text `{colors.on-dark-70}`, set in `{typography.caption}`. Height 40 px. This band signals institutional scale immediately.

**`nav-bar`** — The primary horizontal navigation below the utility strip.
- Background `{colors.bento}`, text `{colors.on-dark}`, height 72 px. Layout: Renault Group logo left; Groupe / Marques / Responsabilité / Magazine / Carrières / Investisseurs / Presse link cluster; circular search icon right. Set in `{typography.body-sm-strong}`.

**`nav-link`** — Individual nav items inside `nav-bar`.
- Text `{colors.on-dark}`, set in `{typography.body-sm-strong}`, no background, no radius. Active state uses `{colors.primary}` as an underline indicator.

**`lang-selector`** — The "FR ▾" language picker in the utility bar.
- Background `{colors.bento}`, text `{colors.on-dark}`, set in `{typography.caption-strong}`, `{rounded.button}` 16 px.

**`accessibility-toggle`** — The "Accessibilité OFF" toggle in the utility bar.
- Background `{colors.neutral-200}`, text `{colors.on-dark-70}`, set in `{typography.caption}`, `{rounded.button}` 16 px.

**`stock-ticker`** — The "RNO 25,28 € -3,03 %" line in the utility bar.
- Background `{colors.neutral-100}`, text `{colors.on-dark-70}`, set in `{typography.caption-strong}`. Value change shown in semantic red or muted neutral.

### Hero & Carousel

**`hero-carousel`** — The full-bleed sliding image carousel that occupies the full viewport width below the nav.
- Background `{colors.bento}` (placeholder state), text `{colors.on-dark}`. Images fill edge-to-edge with no internal padding. Headline set in `{typography.display-xl}` white on image scrim. Prev/next arrow buttons float left/right centre.

**`hero-slide-headline`** — The white headline overlaid on each carousel image.
- Text `{colors.on-dark}`, set in `{typography.display-xl}` (40 px / 700 / -1.8 px tracking). Sentence-case, no period termination observed.

**`carousel-nav-button`** — The circular prev/next arrow controls flanking the hero carousel.
- Background `{colors.on-dark}`, icon `{colors.ink}`, `{rounded.full}`, padding `{spacing.md}`. Sits on the image at vertical centre.

**`image-overlay-headline`** — The category badge + headline + date stack overlaid on the bottom-left of each carousel slide.
- Text `{colors.on-dark}`, headline in `{typography.display-xl}`, date in `{typography.caption}` with `{colors.on-dark-70}`.

### Cards

**`category-badge`** — The editorial category pill visible on carousel slides ("Actualités du Groupe", "Tech").
- Background `{colors.primary-lighter}`, text `{colors.ink}`, set in `{typography.eyebrow}` (positive 0.8 px tracking), `{rounded.button}` 16 px, padding `{spacing.xxs} {spacing.base}`.

**`article-card`** — The editorial news/article card below the hero carousel.
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.body-md}`, `{rounded.card}` 24 px, padding `{spacing.2xl} {spacing.xl}`, 1 px solid `{colors.hairline-mid}` border. Hosts a category badge, headline, date, and arrow-link CTA.

**`article-card-date`** — The publication date line inside `article-card`.
- Text `{colors.neutral-400}`, set in `{typography.caption}`.

**`article-link-arrow`** — The circular arrow-link button on each article card (diagonal arrow-up-right).
- Background `{colors.on-dark}`, icon `{colors.ink}`, `{rounded.full}`, padding `{spacing.xs}`. Inverts on hover.

**`bento-card`** — A dark-surface bento module card used in editorial grid sections.
- Background `{colors.bento}`, text `{colors.on-dark}`, `{rounded.card}` 24 px, padding `{spacing.2xl} {spacing.xl}`. Headline set in `{typography.display-md}`.

### Buttons

**`button-primary`** — The brand's warm taupe CTA button.
- Background `{colors.primary}`, text `{colors.on-primary}` (black-on-taupe), set in `{typography.button-md}` (12 px / 400 — extracted measurement), `{rounded.button}` 16 px, padding `{spacing.xs} {spacing.base}`.

**`button-secondary`** — White-outlined ghost button for use on dark surfaces.
- Background transparent, text `{colors.on-dark}`, 1 px solid `{colors.on-dark}` border, set in `{typography.button-lg}`, `{rounded.button}` 16 px.

**`button-ghost`** — Borderless text-link CTA in brand primary colour on light surfaces.
- Background transparent, text `{colors.primary}`, set in `{typography.body-sm-strong}`, `{rounded.button}` 16 px.

### Structure

**`feature-band`** — A light content band hosting article grid clusters or editorial callouts.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, section heading in `{typography.display-lg}`, padding `{spacing.3xl} {spacing.xl}`.

**`footer`** — The bottom navigation band.
- Background `{colors.neutral-100}`, text `{colors.on-dark-70}`, set in `{typography.body-sm}`, padding `{spacing.2xl} {spacing.xl}`.

**`footer-link`** — Inline links inside the footer column rows.
- Text `{colors.on-dark-70}`, set in `{typography.caption}`.

## Do's and Don'ts

### Do
- Use `{colors.primary}` (`#786450`) sparingly — on interactive controls, category badges, and structural accents only. It is the warmth cue, not the primary surface colour.
- Set all headings in `RenaultGroup-Variable` weight 700 with negative letter-spacing. The display voice depends on this tracking.
- Use `{rounded.card}` 24 px for article and bento cards, and `{rounded.button}` 16 px for all interactive controls. Keep these two radii distinct.
- Use `{rounded.full}` 9999 px for circular icon buttons (carousel arrows, search). These are the brand's only fully circular interactive elements.
- Overlay white (`{colors.on-dark}`) type directly on photography with a gradient scrim (`{colors.ink-50}` to transparent). The photography carries the visual weight — type stays clean white above it.
- Use the utility bar pattern (near-black strip above the main nav) for institutional context signals — stock ticker, accessibility, language.
- Use positive letter-spacing (`0.8 px`) on eyebrow/category badge labels to separate them from body caption text set in the same 12 px size.

### Don't
- Don't introduce colour gradients as decoration. The brand uses no gradient fill system — photography is the decoration.
- Don't use `RenaultGroup-Variable` for body copy, buttons, or navigation. The heading face stays in headings only.
- Don't apply `{rounded.card}` 24 px to buttons or `{rounded.button}` 16 px to large card surfaces. The two radii serve distinct roles.
- Don't use all-caps headlines. Sentence-case with negative tracking is the brand's display standard.
- Don't add heavy drop-shadows to cards. The brand's card chrome is a 1 px warm border on flat white — elevation is surface-switch, not shadow-based.
- Don't miniaturise the hero photography to thumbnail scale and expect the editorial voice to survive. The brand's visual system depends on large, cinematic image treatments.
- Don't use the warm taupe `{colors.primary}` as a background for large surface areas. It is a control-and-accent colour, never a page section background.
