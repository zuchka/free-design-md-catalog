---
version: alpha
name: Meta-Store-design-analysis
description: "Meta's consumer hardware storefront operates in two registers simultaneously: a premium fashion editorial mode (full-bleed lifestyle photography, white headline type reversed over imagery) and a clean commerce surface underneath. The hero is pure photography — no decorative gradients, no illustration — with massive white type set in a rounded geometric sans that communicates approachability rather than the technical authority you might expect from an AR platform. The only persistent colour is Meta Blue, a vivid mid-blue used exclusively for primary CTAs; everything else defers to the photograph or a near-white canvas."
colors:
  primary: "#0457cb"
  primary-hover: "#1B74E4"
  on-primary: "#ffffff"
  ink: "#0a1317"
  ink-dark: "#1c1e21"
  body: "#606770"
  secondary-text: "#65676B"
  mute: "#65676B"
  hairline: rgba(10, 19, 23, 0.45)
  hairline-light: "#E4E6EB"
  canvas: "#ffffff"
  canvas-soft: "#F0F2F5"
  canvas-deemphasized: "#E7F3FF"
  on-media-primary: "#ffffff"
  on-media-secondary: rgba(255, 255, 255, 0.9)
  success: "#31A24C"
  error: "#e41e3f"
  warning: hsl(40, 89%, 52%)
  info: hsl(214, 89%, 52%)
  accent-blue: hsl(214, 89%, 52%)
  focus-indicator: "#D24294"
  button-secondary-bg: "#E4E6EB"
  button-secondary-text: "#050505"
  button-deemphasized-bg: "#E7F3FF"
  button-deemphasized-text: "#1877F2"
  text-highlight: rgba(24, 119, 242, 0.2)
typography:
  display-xl:
    fontFamily: Helvetica, Arial, sans-serif
    fontSize: 72px
    fontWeight: 700
    lineHeight: 76px
    letterSpacing: -1px
  display-lg:
    fontFamily: Helvetica, Arial, sans-serif
    fontSize: 48px
    fontWeight: 700
    lineHeight: 52px
    letterSpacing: -0.5px
  display-md:
    fontFamily: Helvetica, Arial, sans-serif
    fontSize: 32px
    fontWeight: 700
    lineHeight: 38px
    letterSpacing: -0.32px
  display-sm:
    fontFamily: Helvetica, Arial, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 30px
    letterSpacing: normal
  body-lg:
    fontFamily: Helvetica, Arial, sans-serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: -0.16px
  body-sm:
    fontFamily: Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22px
  caption:
    fontFamily: Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  caption-strong:
    fontFamily: Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
  button-md:
    fontFamily: Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 20px
  button-lg:
    fontFamily: Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  nav-label:
    fontFamily: Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  button: 100px
  pill: 100px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 10px
  md: 16px
  lg: 20px
  xl: 22px
  2xl: 24px
  3xl: 32px
  4xl: 40px
  5xl: 48px
  6xl: 80px
  section: 96px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-dark}"
    typography: "{typography.nav-label}"
    height: 56px
    padding: "{spacing.md} {spacing.3xl}"
    borderBottom: 1px solid {colors.hairline-light}
  nav-link:
    textColor: "{colors.ink-dark}"
    typography: "{typography.nav-label}"
    padding: "{spacing.xxs} {spacing.xs}"
  nav-icon-button:
    textColor: "{colors.ink-dark}"
    backgroundColor: transparent
    rounded: "{rounded.button}"
    padding: "{spacing.xs}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 14px 30px
    border: 2px solid {colors.primary}
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 14px 30px
    border: 2px solid {colors.on-media-primary}
  button-secondary-surface:
    backgroundColor: "{colors.button-secondary-bg}"
    textColor: "{colors.button-secondary-text}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 14px 30px
  button-deemphasized:
    backgroundColor: "{colors.button-deemphasized-bg}"
    textColor: "{colors.button-deemphasized-text}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 14px 30px
  hero-band:
    backgroundColor: transparent
    textColor: "{colors.on-media-primary}"
    typography: "{typography.display-xl}"
    padding: "{spacing.5xl} {spacing.3xl}"
  hero-eyebrow:
    textColor: "{colors.on-media-secondary}"
    typography: "{typography.body-lg}"
    padding: "{spacing.md} 0px"
  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    border: 1px solid {colors.hairline}
  product-card-label:
    textColor: "{colors.body}"
    typography: "{typography.caption}"
  feature-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.6xl} {spacing.3xl}"
  feature-band-dark:
    backgroundColor: "{colors.ink-dark}"
    textColor: "{colors.on-media-primary}"
    typography: "{typography.display-md}"
    padding: "{spacing.6xl} {spacing.3xl}"
  section-headline:
    textColor: "{colors.ink}"
    typography: "{typography.display-sm}"
  section-body:
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
  badge-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.full}"
    padding: 6px 6px
  badge-info:
    backgroundColor: "{colors.info}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.full}"
    padding: 6px 6px
  badge-error:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.full}"
    padding: 6px 6px
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-dark}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px {spacing.md}
  link-inline:
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  footer:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.secondary-text}"
    typography: "{typography.caption}"
    padding: "{spacing.3xl} {spacing.3xl}"
  ex-pricing-tier:
    description: Product tier card — mirrors product-card chrome on canvas surface with hairline border.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  ex-pricing-tier-featured:
    description: Featured product tier — polarity-flipped to primary blue surface with white text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  ex-product-selector:
    description: What's Included summary card for hardware SKU configuration.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Shopping cart / bag summary panel — line items per product SKU.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline-light}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses primary blue as a left-edge indicator bar.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xs} {spacing.md}"
  ex-data-table-cell:
    description: Spec comparison table. Header uses caption-strong; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline-light}"
  ex-auth-form-card:
    description: Sign-in / account card — product-card chrome with form-input primitives inside.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  ex-modal-card:
    description: Modal dialog surface — product-card chrome with elevated shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  ex-empty-state-card:
    description: Empty-state frame — generous padding on canvas-soft.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.5xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — product-card shape with compact padding.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"
---
## Overview

Meta's storefront is a fashion editorial surface masquerading as a hardware commerce page. The hero is entirely a full-bleed lifestyle photograph — no gradients, no geometric decoration, no illustration — with massive white headline type reversed out directly over the image. The brand earns its premium register through photography quality and generous scale, not surface ornamentation.

Beneath the hero, the surface reverts to a clean, near-flat commerce canvas: white backgrounds, a restrained gray body text (`{colors.body}`), and thin hairline card borders. The entire colour vocabulary of the brand collapses to a single functional accent — Meta Blue (`{colors.primary}` `#0457cb`) — which appears exclusively on primary CTAs and nowhere else on marketing surfaces. Secondary actions render as transparent-with-white-border pills when sitting over photography, and as light-gray fills (`{colors.button-secondary-bg}`) when sitting on white surfaces.

Type is set entirely in Helvetica (or Arial as its system fallback). There is no custom display face, no mono layer, no technical voice. The type hierarchy is weight-driven: headlines heavy at 700, body at 400, buttons surprisingly light at 400 weight for the primary CTA label (the measured `fontWeight: 400` at 12 px button size is deliberate — the shape carries the visual weight, not the label). The rounded pill shape (`{rounded.button}` 100 px) is the brand's single most distinctive geometric token, applied universally to every CTA regardless of size.

**Key Characteristics:**
- Full-bleed lifestyle photography is the entire decorative system. No mesh gradients, no SVG backgrounds — the image IS the brand moment.
- Meta Blue (`{colors.primary}`) is used for primary CTAs only. It never appears as a section background, a text colour, or a decorative accent.
- 100 px pill radius on every button — from small nav badges to large marketing CTAs. The pill is non-negotiable geometry.
- Card radius is a distinct 12 px (`{rounded.md}`), kept strictly separate from the button radius.
- Helvetica carries all type at every scale; weight 700 for display, 400 for body and button labels.

## Colors

### Brand & Accent
- **Meta Blue** (`{colors.primary}` — `#0457cb`): The singular CTA colour. Appears exclusively on `button-primary` fills. Never used as a text colour or section background on the marketing surface.
- **Primary Hover** (`{colors.primary-hover}` — `#1B74E4`): The hovered / focused state of the primary button, pulled from the `--primary-button-background` CSS token.
- **Focus Indicator** (`{colors.focus-indicator}` — `#D24294`): The brand's keyboard-focus ring colour — a vivid magenta-pink used only as an accessibility affordance, never decoratively.
- **Accent Blue** (`{colors.accent-blue}` — `hsl(214, 89%, 52%)`): Badge info and accent highlight backgrounds; the `--accent` CSS property.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The default page and card background everywhere below the hero.
- **Canvas Soft** (`{colors.canvas-soft}` — `#F0F2F5`): The deemphasised background tone — footer surface, inset callout regions.
- **Canvas Deemphasized** (`{colors.canvas-deemphasized}` — `#E7F3FF`): Pastel blue fill for deemphasised / informational button variants and soft info-state cards.
- **Hairline** (`{colors.hairline}` — `rgba(10, 19, 23, 0.45)`): Measured card border colour — a near-black at ~45% opacity that reads as a refined dark line, not a flat gray.
- **Hairline Light** (`{colors.hairline-light}` — `#E4E6EB`): Secondary dividers — table rows, nav bottom border, UI separators.

### Text
- **Ink** (`{colors.ink}` — `#0a1317`): H2 and H3 heading colour from the measured extraction. The deepest surface text tone.
- **Ink Dark** (`{colors.ink-dark}` — `#1c1e21`): Body text colour on white surfaces.
- **Body** (`{colors.body}` — `#606770`): Secondary body copy, card subtitles, product sub-labels.
- **Secondary Text** (`{colors.secondary-text}` — `#65676B`): Muted copy — footer links, fine print, icon labels.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): Text and icons on Meta Blue surfaces.
- **On Media Primary** (`{colors.on-media-primary}` — `#ffffff`): White text reversed over hero photography at full opacity.
- **On Media Secondary** (`{colors.on-media-secondary}` — `rgba(255, 255, 255, 0.9)`): Sub-headlines and body copy reversed over photography at 90% opacity — a deliberate legibility softening.

### Semantic
- **Success** (`{colors.success}` — `#31A24C`): Badge and status indicator green.
- **Error** (`{colors.error}` — `#e41e3f`): Destructive / critical badge and validation red.
- **Warning** (`{colors.warning}` — `hsl(40, 89%, 52%)`): Caution / attention badge amber.
- **Info** (`{colors.info}` — `hsl(214, 89%, 52%)`): Informational badge blue — matches `--accent`.
- **Text Highlight** (`{colors.text-highlight}` — `rgba(24, 119, 242, 0.2)`): The soft blue wash used as a text-selection or focus-highlight background.

## Typography

### Font Family
One face — **Helvetica** (with Arial as the system fallback) — carries every role from hero display to button label. There is no custom typeface, no mono layer, no condensed variant. The brand relies entirely on weight contrast (400 vs 700) and scale to build hierarchy. The absence of a distinctive display face is itself a design choice: it keeps the type anonymous, letting the photography and hardware product be the personality.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 700 | 76px | -1px | Hero headline reversed over photography ("Meta Glasses", "by Kylie"). |
| `{typography.display-lg}` | 48px | 700 | 52px | -0.5px | Large section headlines on feature bands. |
| `{typography.display-md}` | 32px | 700 | 38px | -0.32px | Mid-section product category headlines. |
| `{typography.display-sm}` | 24px | 700 | 30px | normal | Card cluster headlines and callout titles. (Extracted h2: 24px / lh 30px.) |
| `{typography.body-lg}` | 20px | 400 | 28px | 0 | Hero sub-headline / eyebrow copy over photography. |
| `{typography.body-md}` | 16px | 400 | 24px | -0.16px | Default body paragraph. (Extracted h3: 16px / lh 24px / ls -0.16px.) |
| `{typography.body-sm}` | 14px | 400 | 22px | 0 | Secondary body, nav-link text, footer column body. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Footer fine print, product card sub-labels. |
| `{typography.caption-strong}` | 12px | 500 | 16px | 0 | Badge labels, status indicators. |
| `{typography.button-md}` | 12px | 400 | 20px | 0 | CTA button label — all pill CTAs. (Measured: 12px / weight 400.) |
| `{typography.button-lg}` | 16px | 500 | 24px | 0 | Larger surface button label variant. |
| `{typography.nav-label}` | 14px | 400 | 20px | 0 | Top navigation link text. |

### Principles
- **Weight 700 is the display ceiling — and it appears at scale.** The hero headline renders at 72 px in weight 700, but button labels stay at 400. The CTA pill's shape carries the visual weight; the label inside it is deliberately light.
- **No negative tracking at body scale.** Only display sizes carry negative letter-spacing; body and caption sizes track neutrally. The measured h3 `-0.16px` is the smallest tracked token and stays close to zero.
- **No mono layer.** Meta's consumer storefront has no code, no technical labels, no terminal aesthetics. Helvetica at every level.
- **Sentence-case throughout.** Product names are title-case ("Meta Glasses", "AI glasses"); navigation labels are sentence-case; there is no all-caps usage on the storefront surface.
- **Note on font substitutes.** Helvetica is a system typeface unavailable in many web renderers. The closest web-safe substitute is **Arial**. For brand-grade digital reproduction, *Inter* at `font-feature-settings: "kern"` is the cleanest open-source match; *Plus Jakarta Sans* is a passable rounded alternative.

## Layout

### Spacing System
- **Base unit**: 4 px. The extracted spacing scale (`4 / 8 / 10 / 16 / 20 / 22 / 24 / 32 / 40 / 48 / 80 px`) confirms a 4 px grid with occasional 10 and 22 px exceptions that appear in typographic line-height offsets.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 10 px · `{spacing.md}` 16 px · `{spacing.lg}` 20 px · `{spacing.xl}` 22 px · `{spacing.2xl}` 24 px · `{spacing.3xl}` 32 px · `{spacing.4xl}` 40 px · `{spacing.5xl}` 48 px · `{spacing.6xl}` 80 px · `{spacing.section}` 96 px.
- **Hero padding**: hero bands use `{spacing.5xl}` top/bottom; the photograph fills edge-to-edge behind and the text layer sits inset with `{spacing.3xl}` horizontal.
- **Card interior padding**: product cards sit at `{spacing.md}` 16 px (measured).
- **Button padding**: measured CTA is `14px 30px` — a slightly off-grid vertical value that gives the pill a comfortable tap height without matching a clean token multiple. Preserved verbatim.
- **Section padding**: feature bands use `{spacing.6xl}` 80 px top/bottom; commerce grids tighten to `{spacing.5xl}` 48 px.

### Grid & Container
- **Max width**: ~1280 px; content centred with horizontal gutters of `{spacing.3xl}` 32 px on desktop, `{spacing.md}` 16 px on mobile.
- **Column patterns**:
  - Hero: full-bleed single column, photography background.
  - Product grid: 3- to 4-up on desktop, 1- to 2-up on mobile.
  - Feature pair: 2-up split (image + copy) on desktop, stacked on mobile.
  - Nav: logo left, link cluster left-centre, utility icons right.

### Whitespace Philosophy
Photography does the atmospheric heavy lifting; whitespace separates the commerce bands below. Feature sections use generous vertical breathing room (`{spacing.6xl}`) between bands. Inside cards, the content stack is tight — label, title, price, CTA — with `{spacing.xs}` to `{spacing.md}` between elements. The page reads as retail-confident: clear hierarchy, no wasted space, photography given full room.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero photography bands. |
| Level 1 — Hairline Border | `1px solid rgba(10, 19, 23, 0.45)` | Measured product card border — the brand's default "card" cue. No drop shadow. |
| Level 2 — Light Divider | `1px solid #E4E6EB` | Table rows, nav bottom border, section dividers. |
| Level 3 — Elevated (Light) | Subtle `box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08)` | Modals and drawers, inferred from the commerce surface conventions. |

The Meta storefront surface is deliberately flat. Cards are defined entirely by their hairline border — no drop shadows anywhere on the measured surface. This is a retail-minimal choice: the photography provides the depth; the cards stay on the page, not floating above it.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero bands; system browser button (measured `radius: 0px` on utility button element). |
| `{rounded.xs}` | 4px | Tightest UI element — small icon chip, nav active indicator. |
| `{rounded.sm}` | 8px | Form inputs, dropdown menus, small UI containers. |
| `{rounded.md}` | 12px | Product cards (measured `radius: 12px`). Strictly separate from button geometry. |
| `{rounded.lg}` | 16px | Larger content cards hosting imagery. |
| `{rounded.xl}` | 24px | Callout panels or oversized media cards. |
| `{rounded.button}` | 100px | Every CTA pill — primary, secondary, deemphasised. Measured as `100px`. |
| `{rounded.pill}` | 100px | Pill-shaped label badges and tag chips. |
| `{rounded.full}` | 9999px | Avatar containers, icon-button circular touch targets. |

Two radius scales coexist by design: the 12 px card radius and the 100 px button pill are treated as entirely separate geometries. A button never inherits card radius; a card never inflates to pill shape.

## Components

### Navigation

**`nav-bar`** — the sticky white top navigation.
- Background `{colors.canvas}`, text `{colors.ink-dark}`, height 56 px, padding `{spacing.md} {spacing.3xl}`. Layout: Meta logo left, product-category links ("AI glasses / Meta Quest / Apps and games") left-of-centre, utility links ("Explore Meta / Support") right-of-centre, icon cluster (search / region / bag / account) far right.

**`nav-link`** — text links inside the nav row.
- Text `{colors.ink-dark}`, set in `{typography.nav-label}`, padding `{spacing.xxs} {spacing.xs}`. No border-radius visible in default state.

**`nav-icon-button`** — search, bag, account icon buttons.
- Transparent background, `{colors.ink-dark}` icon, rounded `{rounded.full}`, padding `{spacing.xs}`.

### Buttons

**`button-primary`** — the Meta Blue CTA pill.
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.button-md}` (12 px / weight 400), padding `14px 30px`, rounded `{rounded.button}` 100 px, 2 px solid border in `{colors.primary}`. Measured directly from the "Shop" button on the hero.

**`button-secondary`** — the ghost pill used over photography.
- Transparent background, text `{colors.on-media-primary}`, label `{typography.button-md}`, same padding and radius as `button-primary`, 2 px solid white border. Visible as "Learn more" alongside the blue "Shop" pill in the hero.

**`button-secondary-surface`** — the gray-fill pill used on white surfaces.
- Background `{colors.button-secondary-bg}` (`#E4E6EB`), text `{colors.button-secondary-text}`, same shape and typography as `button-primary`.

**`button-deemphasized`** — the soft blue-tinted pill for lower-priority actions.
- Background `{colors.button-deemphasized-bg}` (`#E7F3FF`), text `{colors.button-deemphasized-text}` (`#1877F2`), same shape and typography. Sourced from `--primary-deemphasized-button-*` tokens.

### Hero & Bands

**`hero-band`** — the full-bleed photography hero.
- Transparent / image background, text `{colors.on-media-primary}`, headline in `{typography.display-xl}`, padding `{spacing.5xl} {spacing.3xl}`. The photograph fills the entire container; text sits bottom-left over the image. The "by Kylie" signature renders in the same display-xl scale at bottom-right.

**`hero-eyebrow`** — the sub-headline body copy reversed over the hero image.
- Text `{colors.on-media-secondary}` (90% white), set in `{typography.body-lg}`, padding `{spacing.md} 0px` above the CTA row.

**`feature-band`** — a white-surface marketing section below the hero.
- Background `{colors.canvas}`, text `{colors.ink}`, section headline in `{typography.display-md}`, padding `{spacing.6xl} {spacing.3xl}`.

**`feature-band-dark`** — a polarity-flipped dark section used for product contrast moments.
- Background `{colors.ink-dark}`, text `{colors.on-media-primary}`, section headline in `{typography.display-md}`, padding `{spacing.6xl} {spacing.3xl}`.

### Product Cards

**`product-card`** — the individual hardware product tile.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md}` (measured 16 px), rounded `{rounded.md}` (measured 12 px), border `1px solid {colors.hairline}`. Contains a product image, product name in `{typography.display-sm}`, sub-label in `{typography.body-sm}`, price, and a `button-primary` pill.

**`product-card-label`** — the muted category or feature sub-label inside a product card.
- Text `{colors.body}`, set in `{typography.caption}`.

### Section Typography

**`section-headline`** — standalone section headings between product bands.
- Text `{colors.ink}`, set in `{typography.display-sm}`.

**`section-body`** — supporting body copy beneath a section headline.
- Text `{colors.body}`, set in `{typography.body-md}`.

### Badges

**`badge-success`** — green status badge.
- Background `{colors.success}`, text `{colors.on-primary}`, `{typography.caption-strong}`, padding `6px 6px`, rounded `{rounded.full}`.

**`badge-info`** — blue informational badge.
- Background `{colors.info}`, text `{colors.on-primary}`, same shape as `badge-success`.

**`badge-error`** — red critical badge.
- Background `{colors.error}`, text `{colors.on-primary}`, same shape as `badge-success`.

### Forms & Inputs

**`form-input`** — standard text field.
- Background `{colors.canvas}`, text `{colors.ink-dark}`, 1 px solid `{colors.hairline}` border, `{typography.body-md}`, padding `12px {spacing.md}`, rounded `{rounded.sm}` 8 px.

### Utility

**`link-inline`** — body-copy inline link.
- Text `{colors.primary}`, set in `{typography.body-md}`.

**`footer`** — the bottom navigation and legal band.
- Background `{colors.canvas-soft}`, text `{colors.secondary-text}`, `{typography.caption}`, padding `{spacing.3xl} {spacing.3xl}`. Column headers in `{typography.body-sm}` weight 500; link rows in `{typography.caption}`.

## Do's and Don'ts

### Do
- Reserve Meta Blue (`{colors.primary}` `#0457cb`) for primary CTA fills only. It is the single brand accent; diluting it breaks the conversion hierarchy.
- Apply `{rounded.button}` 100 px to every pill CTA — primary, secondary, deemphasized — at every scale. The pill is the brand's geometric signature.
- Keep `{rounded.md}` 12 px strictly for product cards. Never inflate a card to pill shape.
- Set display headlines in weight 700 at scale. The visual weight of the type must match the photography scale.
- Use full-bleed photography as the decorative system at hero scale. No gradients, no illustration, no SVG backdrop — the image is the decoration.
- Use `{colors.on-media-secondary}` (90% white) for body copy reversed over photography, not full white — the slight translucency prevents text from feeling stamped on.
- Deliver secondary CTAs as transparent ghost pills with a white border when placed over photography; switch to `{colors.button-secondary-bg}` fills when placed on white surfaces.

### Don't
- Don't introduce a second accent colour. Meta Blue is the only colour CTA colour on the storefront.
- Don't use drop shadows on product cards. The brand's card cue is a hairline border only — shadows flatten the retail register.
- Don't set button labels in weight 700 to match headline weight. The measured CTA label is weight 400; the pill shape carries the visual weight.
- Don't apply the 100 px button radius to cards or content containers — these use the 12 px `{rounded.md}` radius.
- Don't miniaturise the hero photography into thumbnail crops as decorative elements. Photography works at full-bleed scale; it doesn't translate to icon or chip scale.
- Don't introduce a monospaced typeface. Meta's consumer storefront has no technical voice; Helvetica at every level is the correct system.
- Don't use `{colors.primary}` as a text colour or section background — it reads only as a button fill.
