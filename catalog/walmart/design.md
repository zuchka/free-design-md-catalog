---
version: alpha
name: Walmart
description: "Walmart's design language is a high-volume retail system built on one conviction: price clarity above all else. A saturated Walmart blue dominates every conversion surface — nav bar, primary CTA, hero band — while a near-white light-gray canvas keeps product photography front and center. The single proprietary face, EverydaySans, carries every string at weights 400 and 700 with zero letter-spacing affectation; headlines are sentence-case, direct, and never tracked negatively. The brand's most distinctive shape decision is the full-radius 1000px pill on every button — a soft, approachable form language that coexists with sharp 8px card corners on product tiles. Spark yellow punctuates clearance and promotional badges. There is no gradient system, no atmospheric decoration: the product image IS the decoration."
colors:
  primary: "#0053e2"
  on-primary: "#ffffff"
  primary-high: "#004f9a"
  primary-deep: "#003fb2"
  primary-darkest: "#001e60"
  ink: "#000000"
  body: "#2e2f32"
  mute: "#74767c"
  mute-mid: "#686a70"
  mute-strong: "#5d5e63"
  hairline: "#cccccc"
  canvas: "#ffffff"
  canvas-soft: "#f1f1f2"
  canvas-warm: "#f5f5f5"
  spark: "#ffc220"
  spark-bright: "#ffce4d"
  clearance-orange: "#fa6400"
  success: "#3f931c"
  success-soft: "#eaf3e6"
  success-deep: "#267a03"
  error: "#a20c00"
  error-soft: "#fce8e9"
  error-deep: "#9b1419"
  teal: "#0083c7"
  teal-deep: "#0076b3"
  link: "#0053e2"
typography:
  display-xl:
    fontFamily: EverydaySans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 32px
    fontWeight: 700
    lineHeight: 38px
    letterSpacing: 0px
  display-lg:
    fontFamily: EverydaySans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 30px
    letterSpacing: 0px
  display-md:
    fontFamily: EverydaySans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 20px
    fontWeight: 700
    lineHeight: 26px
    letterSpacing: 0px
  display-sm:
    fontFamily: EverydaySans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 700
    lineHeight: 22px
    letterSpacing: 0px
  body-lg:
    fontFamily: EverydaySans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-md:
    fontFamily: EverydaySans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  body-sm:
    fontFamily: EverydaySans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0px
  body-md-strong:
    fontFamily: EverydaySans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 17.5px
    letterSpacing: 0px
  caption:
    fontFamily: EverydaySans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0px
  caption-strong:
    fontFamily: EverydaySans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 700
    lineHeight: 16px
    letterSpacing: 0px
  button-md:
    fontFamily: EverydaySans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: 0px
  button-lg:
    fontFamily: EverydaySans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
    letterSpacing: 0px
  price-lg:
    fontFamily: EverydaySans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 30px
    letterSpacing: 0px
  price-md:
    fontFamily: EverydaySans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 700
    lineHeight: 22px
    letterSpacing: 0px
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 37px
  button: 1000px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 48px
  4xl: 64px
  5xl: 96px
  section: 129px
components:
  nav-bar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    height: 56px
    padding: "{spacing.xs} {spacing.lg}"
  nav-search-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
    height: 44px
  nav-search-button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  nav-link:
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-utility-link:
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    padding: "{spacing.xs} {spacing.xs}"
  nav-departments-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md-strong}"
    padding: "{spacing.xs} {spacing.lg}"
    borderBottom: "{colors.hairline}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.md}
    height: 36px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.xs}
    height: 36px
  button-options:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.md}
    height: 36px
  hero-banner:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-xl}"
    padding: "{spacing.lg} {spacing.xl}"
    rounded: "{rounded.none}"
  hero-cta:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.md}
    height: 36px
  product-card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  product-card-image:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
  product-price-current:
    textColor: "{colors.ink}"
    typography: "{typography.price-md}"
  product-price-was:
    textColor: "{colors.mute}"
    typography: "{typography.body-md}"
  badge-clearance:
    backgroundColor: "{colors.spark}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xxs} {spacing.xs}"
  badge-flash-deal:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xxs} {spacing.xs}"
  section-header:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.md} {spacing.lg}"
  section-subhead:
    textColor: "{colors.mute}"
    typography: "{typography.body-md}"
  link-view-all:
    textColor: "{colors.primary}"
    typography: "{typography.body-md-strong}"
  fulfillment-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.md}
    height: 44px
  footer:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.lg} {spacing.xl}"
  modal-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  modal-overlay:
    backgroundColor: "{colors.ink}"
    opacity: "0.5"
  ex-pricing-tier:
    description: Default membership tier card — canvas-soft surface with hairline border.
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: Featured membership tier — polarity-flipped to primary blue with white text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-product-selector:
    description: Category tile — compact image + label on canvas-soft surface.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  ex-cart-drawer:
    description: Cart / reorder summary panel — line items per product on canvas surface.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: My Items / Account sidebar row. Active state uses primary blue left indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: Order history table. Header uses caption-strong; body uses body-md.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption-strong}"
    bodyTypography: "{typography.body-md}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in card. Canvas surface with form-input primitives and button-primary CTA.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog — canvas surface with rounded.lg chrome and modal-overlay backdrop.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty cart / wishlist frame. Generous padding on canvas-soft.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — canvas surface with hairline border and body-md text.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-md}"
---
## Overview

Walmart's homepage is a mass-retail information architecture problem solved with blunt force and a clear hierarchy: Walmart blue on top, product on canvas, price in bold. There is no ambient decoration — no gradient system, no atmospheric photography, no illustrative chrome. The hero band is a full-bleed saturated blue (`{colors.primary}`) carrying white display copy and a white pill CTA; below it, a dense product-card grid takes over and never lets go. The brand earns its single-font, two-weight simplicity because EverydaySans is doing real work: it has to communicate a 36-cent savings and a $129 clearance item with equal legibility at thumbnail scale.

The shape system is the brand's most opinionated design decision. Every interactive element — search bar, primary CTA, "Options" button, fulfillment toggle — uses the same 1000 px full-radius pill. This is not incidental; it is a deliberate softness applied to every affordance so the user never mistakes a pill for a container. Cards stay at a tight 8 px radius, strictly separate from the button geometry. The contrast between round-everything buttons and boxy product tiles is the system.

Color usage is narrow on purpose. Walmart blue (`{colors.primary}`) owns the nav bar, hero band, primary CTA, and in-page links. Spark yellow (`{colors.spark}`) is reserved entirely for promotional and clearance callouts — a small, deliberate signal that reads as "deal" without competing with the blue. The canvas is near-white `{colors.canvas-soft}` for cards and pure white for image frames; both serve the product photography, not the brand.

Typography runs a single face at two weights. Weight 700 carries every heading, price, and button label. Weight 400 carries every secondary descriptor, sub-label, and meta line. There is no italic, no condensed variant, no negative letter-spacing — the brand relies on size contrast alone for hierarchy. Price display gets its own typographic role: the current price is always larger and bolder than the was-price, which renders in `{colors.mute}` to visually retreat.

## Colors

### Brand
- **Primary** (`{colors.primary}` — `#0053e2`): The Walmart blue. Appears in the nav bar background, hero band background, primary CTAs, and all in-page link text. The single dominant brand color.
- **Primary High** (`{colors.primary-high}` — `#004f9a`): The pressed / hover state for the primary blue.
- **Primary Deep** (`{colors.primary-deep}` — `#003fb2`): Active / focused state for interactive blue elements.
- **Primary Darkest** (`{colors.primary-darkest}` — `#001e60`): Deep brand navy, appears in footer and dense type contexts.
- **Spark** (`{colors.spark}` — `#ffc220`): The Walmart "Spark" yellow — used exclusively on clearance badges, sale callouts, and the Walmart+ spark icon. Never used as a button color.
- **Spark Bright** (`{colors.spark-bright}` — `#ffce4d`): Lighter spark tone for badge hover or layered states.
- **Clearance Orange** (`{colors.clearance-orange}` — `#fa6400`): Accent for rollback / clearance price emphasis when spark is already in use.
- **Teal** (`{colors.teal}` — `#0083c7`): Supporting accent visible in informational states and some category tiles.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure white — used as the product image frame and modal / dialog background.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f1f1f2`): The default product card background and page body fill. Near-white gray that makes product photography pop without a visible border.
- **Canvas Warm** (`{colors.canvas-warm}` — `#f5f5f5`): Slightly warmer variant for section band backgrounds.
- **Hairline** (`{colors.hairline}` — `#cccccc`): 1 px dividers between nav sections, card borders, and input borders.

### Text
- **Ink** (`{colors.ink}` — `#000000`): All primary headings, current prices, and active product titles on light surfaces.
- **Body** (`{colors.body}` — `#2e2f32`): Default body text and secondary button labels.
- **Mute** (`{colors.mute}` — `#74767c`): Was-prices, secondary metadata, sub-labels, and h3-level captions.
- **Mute Mid** (`{colors.mute-mid}` — `#686a70`): Slightly darker muted tone for supporting text in denser contexts.
- **Mute Strong** (`{colors.mute-strong}` — `#5d5e63`): The strongest muted text tone before crossing to ink.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): All text rendered on the blue nav bar, hero band, and primary CTA surfaces.

### Semantic
- **Success** (`{colors.success}` — `#3f931c`): In-stock, positive status indicator.
- **Success Soft** (`{colors.success-soft}` — `#eaf3e6`): Background fill for success / confirmation banners.
- **Success Deep** (`{colors.success-deep}` — `#267a03`): Pressed state for success indicators.
- **Error** (`{colors.error}` — `#a20c00`): Destructive actions, out-of-stock warnings, form validation.
- **Error Soft** (`{colors.error-soft}` — `#fce8e9`): Background for error state banners.
- **Error Deep** (`{colors.error-deep}` — `#9b1419`): Deep error tone for text on soft error backgrounds.
- **Link** (`{colors.link}` — `#0053e2`): Inline text links — same as primary blue; all links are the brand color.

## Typography

### Font Family
Walmart runs a single proprietary face — **EverydaySans** — across every string on the page. It is a humanist sans with open apertures, designed for legibility at small sizes under compressed product-grid conditions. The full stack falls back to Helvetica Neue, Helvetica, Arial, then system sans-serif — all geometric-leaning neutral faces that preserve the brand's no-personality-in-type posture.

No second face is present. No mono face, no display variant, no condensed weight. The system works because price hierarchy is carried by size and color contrast rather than typeface contrast.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 32px | 700 | 38px | 0 | Hero band headline ("Join Walmart+ for Free Delivery on gifts for Dad"). |
| `{typography.display-lg}` | 24px | 700 | 30px | 0 | Section group headings ("Flash Deals"), pricing tier names. |
| `{typography.display-md}` | 20px | 700 | 26px | 0 | Card cluster headlines and sub-section leads. |
| `{typography.display-sm}` | 16px | 700 | 22px | 0 | Inline display callouts, category tile labels. |
| `{typography.body-lg}` | 16px | 400 | 24px | 0 | Supporting body copy under section headlines. |
| `{typography.body-md}` | 14px | 400 | 20px | 0 | Default product descriptors, secondary nav labels, sub-copy. |
| `{typography.body-md-strong}` | 14px | 700 | 17.5px | 0 | Departments / Services nav labels, product name emphasis, view-all links. |
| `{typography.body-sm}` | 12px | 400 | 16px | 0 | Fine print, footer secondary lines, from-price meta. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Muted utility labels, nav utility links (Reorder, Account). |
| `{typography.caption-strong}` | 12px | 700 | 16px | 0 | Clearance and Flash Deal badge labels. |
| `{typography.button-md}` | 14px | 700 | 20px | 0 | Primary button labels, "Options" pill labels, nav CTA labels. |
| `{typography.button-lg}` | 16px | 700 | 24px | 0 | Large marketing CTA labels. |
| `{typography.price-lg}` | 24px | 700 | 30px | 0 | Hero promotional price display. |
| `{typography.price-md}` | 16px | 700 | 22px | 0 | Product card current price — always larger than the was-price. |

### Principles
- **No letter-spacing, anywhere.** EverydaySans is never tracked positively or negatively. The brand's clarity comes from weight contrast at 400 / 700, not spacing.
- **Sentence-case only.** The brand does not use all-caps headlines. "Flash Deals" not "FLASH DEALS."
- **Price as a typographic tier.** Current price uses `{typography.price-md}` in `{colors.ink}`; was-price retreats to `{typography.body-md}` in `{colors.mute}`. This demotion of the old price is systematic, not ad hoc.
- **Weight 700 is the display ceiling.** No 800 or 900 weights appear. The face never goes compressed or expanded.
- **Single face for all contexts.** There is no mono face, no editorial display variant. EverydaySans handles navigation, headlines, prices, and legal text alike.

### Note on Font Substitutes
EverydaySans is proprietary to Walmart. Open-source substitutes:
- **Primary body + display** — *Inter* (400 / 700) is the closest open-source match in aperture and weight range. *Source Sans 3* is a serviceable second choice.
- No monospace substitute is needed — the system has no code or technical label typography.

## Layout

### Spacing System
- **Base unit**: 4 px. Every captured padding and gap value is a multiple of 4.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px · `{spacing.section}` 129 px.
- **Section padding**: marketing hero bands use `{spacing.lg}` to `{spacing.xl}` vertically. The 129 px value appears as a large horizontal section offset in wide-grid product carousels.
- **Card interior padding**: product cards use `{spacing.sm}` 12 px uniformly — tight enough to show more products per row.
- **Inline gap**: button rows and pill rows use `{spacing.xs}` to `{spacing.sm}` between siblings.

### Grid & Container
- **Max width**: full-bleed at viewport width up to ~1600 px; content areas use horizontal gutters of `{spacing.lg}` 24 px on desktop, `{spacing.sm}` 12 px on mobile.
- **Column patterns**:
  - Product carousel row: 6-up at desktop, scrollable with a next-arrow affordance.
  - Hero band: full-bleed image with text overlaid left, CTA below headline.
  - Departments bar: horizontal scroll row of pill toggles.
  - Flash Deals section: 6-up card grid with horizontal scroll.

### Whitespace Philosophy
The page is deliberately dense. Walmart's whitespace philosophy is the inverse of a premium brand: product density signals value availability. Card padding stays tight at `{spacing.sm}` so more items fit per row. Section headings get `{spacing.md}` to `{spacing.lg}` breathing room, then the grid immediately packs in. The nav bar is compact at ~56 px tall. The hero band is the only generous surface — it gets `{spacing.lg}` to `{spacing.xl}` vertical padding because it carries the primary promotional message.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Hero bands, nav bar, page body bands. |
| Level 1 — Soft Surface | Background `{colors.canvas-soft}` replaces canvas — no shadow needed. | Product cards — the off-white fill distinguishes the card from the page without a drop-shadow. |
| Level 2 — Hairline Border | `0 0 0 1px {colors.hairline}` inset border, no shadow. | Form inputs, "Options" pill buttons, fulfillment toggles. |
| Level 3 — Modal | Overlay `{colors.ink}` at 50 % opacity + white card surface with `{rounded.lg}`. | Bot-check modal, dialogs, drawers. |

The brand uses no box-shadow on product cards — the `{colors.canvas-soft}` background is the entire depth cue. Elevation via shadow is reserved for modal-level surfaces only.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero bands, nav bar. |
| `{rounded.xs}` | 4px | Tight badge corners (clearance, flash deal labels). |
| `{rounded.sm}` | 6px | Subtle corner on small utility elements. |
| `{rounded.md}` | 8px | Product card chrome — the brand's universal card radius. |
| `{rounded.lg}` | 12px | Modal card chrome; slightly larger dialog containers. |
| `{rounded.xl}` | 16px | Large content panels. |
| `{rounded.pill}` | 37px | Fulfillment-type toggle pills ("Pickup or delivery?"). |
| `{rounded.button}` | 1000px | Every interactive button and search bar — the brand's full-radius pill. |
| `{rounded.full}` | 9999px | Avatar / icon containers. |

The key shape tension in Walmart's system: product cards stay at `{rounded.md}` 8 px (boxy, container-like), while every button regardless of size uses `{rounded.button}` 1000 px (fully round, affordance-signaling). These two radii never mix — a card never gets button radius and a button never gets card radius.

## Components

### Navigation

**`nav-bar`** — the Walmart blue top bar.
- Background `{colors.primary}`, text `{colors.on-primary}`, height ~56 px, padding `{spacing.xs} {spacing.lg}`. Contains the Walmart logo left, search bar centre, and utility links (Reorder / Account / Cart) right.

**`nav-search-bar`** — the full-radius search input inside the nav.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, set in `{typography.body-md}`, padding `{spacing.xs} {spacing.md}`, height 44 px, shape `{rounded.button}` 1000 px. Ends with a blue search-submit button using `{rounded.button}`.

**`nav-search-button`** — the blue magnifier pill at the end of the search bar.
- Background `{colors.primary}`, icon `{colors.on-primary}`, shape `{rounded.button}`.

**`nav-link`** — text links inside the blue nav row (Reorder, Account).
- Text `{colors.on-primary}`, set in `{typography.caption}` with a label below at `{typography.body-md-strong}`.

**`nav-departments-bar`** — the secondary white bar below the main nav.
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.body-md-strong}`, padding `{spacing.xs} {spacing.lg}`, 1 px bottom border in `{colors.hairline}`. Contains "Departments ▾" and "Services ▾" dropdown triggers.

**`fulfillment-pill`** — the "Pickup or delivery?" toggle pill in the nav.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, set in `{typography.body-md-strong}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.pill}` 37 px.

### Buttons

**`button-primary`** — the canonical Walmart blue pill CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, set in `{typography.button-md}`, padding `0px {spacing.md}`, height 36 px, shape `{rounded.button}` 1000 px.

**`button-secondary`** — the white pill button (appears in hero band as the light CTA).
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.button-lg}`, padding `0px {spacing.xs}`, height 36 px, shape `{rounded.button}` 1000 px.

**`button-options`** — the "Options" pill on each product card.
- Background `{colors.canvas}`, text `{colors.body}`, 1 px solid `{colors.hairline}` border, set in `{typography.button-md}`, padding `0px {spacing.md}`, height 36 px, shape `{rounded.button}` 1000 px.

**`hero-cta`** — the white CTA pill inside the blue hero band ("Try Walmart+ for $1").
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.button-md}`, padding `0px {spacing.md}`, height 36 px, shape `{rounded.button}` 1000 px.

### Cards & Product Tiles

**`product-card`** — the canonical product tile in Flash Deals and category carousels.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.sm}` 12 px, shape `{rounded.md}` 8 px. No shadow — the off-white fill is the depth cue. Hosts a white image well, product title in `{typography.body-md}`, current price in `{typography.price-md}`, was-price in `{typography.body-md}` / `{colors.mute}`, and an "Options" pill at the bottom.

**`product-card-image`** — the image well inside the product card.
- Background `{colors.canvas}`, shape `{rounded.md}`. The white fill ensures product photography is always shown on a clean white ground.

**`hero-banner`** — the full-bleed blue promotional band.
- Background `{colors.primary}`, text `{colors.on-primary}`, headline in `{typography.display-xl}`, padding `{spacing.lg} {spacing.xl}`. Product photography bleeds to the right edge. Contains one `hero-cta` pill.

**`modal-card`** — the dialog card (visible in the bot-check prompt).
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.body-md}`, shape `{rounded.lg}` 12 px, padding `{spacing.xl}`. Floats over `{colors.ink}` overlay.

### Labels & Badges

**`badge-clearance`** — the spark-yellow clearance label on product cards.
- Background `{colors.spark}`, text `{colors.ink}`, set in `{typography.caption-strong}`, padding `{spacing.xxs} {spacing.xs}`, shape `{rounded.xs}` 4 px. Used for "Clearance" callouts.

**`badge-flash-deal`** — the black flash-deal label.
- Background `{colors.ink}`, text `{colors.canvas}`, set in `{typography.caption-strong}`, padding `{spacing.xxs} {spacing.xs}`, shape `{rounded.xs}` 4 px.

### Section Structure

**`section-header`** — the section title row ("Flash Deals", "View all").
- Background `{colors.canvas}`, text `{colors.ink}`, headline in `{typography.display-lg}`, padding `{spacing.md} {spacing.lg}`. Paired with `link-view-all` right-aligned.

**`section-subhead`** — the secondary descriptor below a section title ("Up to 65% off").
- Text `{colors.mute}`, set in `{typography.body-md}`.

**`link-view-all`** — the "View all" inline link at the top-right of section headers.
- Text `{colors.link}`, set in `{typography.body-md-strong}`.

**`footer`** — the bottom utility band.
- Background `{colors.canvas-soft}`, text `{colors.mute}`, set in `{typography.body-sm}`, padding `{spacing.lg} {spacing.xl}`.

**`form-input`** — the standard text input.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, set in `{typography.body-md}`, padding `0px {spacing.md}`, height 44 px, shape `{rounded.button}` 1000 px (consistent with the brand's full-radius input language).

## Do's and Don'ts

### Do
- Use `{colors.primary}` (`#0053e2`) for every primary CTA, the nav bar background, and in-page link text. Blue IS the conversion signal.
- Apply `{rounded.button}` 1000 px to every interactive button — search bar, primary CTA, secondary CTA, "Options" pill. The full-radius pill is the brand's affordance language.
- Keep product cards at `{rounded.md}` 8 px. The boxy card and the round button coexist deliberately — do not blur the distinction.
- Use `{colors.spark}` exclusively for promotional / clearance callouts. Spark yellow means "deal" — it loses its signal if used decoratively.
- Set all prices as a paired display: current price in `{typography.price-md}` / `{colors.ink}` dominant, was-price in `{typography.body-md}` / `{colors.mute}` receding.
- Keep the page dense. Product density is the brand's value signal. Do not introduce large whitespace sections that mimic premium-brand aesthetics.
- Use EverydaySans at weight 400 and 700 only. No other weights are present in the system.

### Don't
- Don't introduce a gradient system. Walmart's decorative language is flat photography on flat color bands — no mesh gradients, no atmospheric backdrops.
- Don't apply `{rounded.button}` to product cards. Cards are always `{rounded.md}` 8 px.
- Don't use `{colors.spark}` as a button or nav color. Yellow is reserved for deal badges only.
- Don't track type positively or negatively. EverydaySans uses 0 letter-spacing at all sizes.
- Don't add box-shadow to product cards. The `{colors.canvas-soft}` background is the complete depth cue.
- Don't use all-caps headlines. Sentence-case is the rule throughout the system.
- Don't introduce a second typeface. The entire system runs on EverydaySans alone.
