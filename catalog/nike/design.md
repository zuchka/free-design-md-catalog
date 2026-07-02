---
version: alpha
name: Nike
description: Nike's design language is a study in athletic compression — a near-black ink on pure white canvas with zero decorative chrome, where the full-bleed hero photograph IS the brand expression. All-caps condensed headlines at massive weight dominate the screen; the Helvetica Now Display family does the shouting while Helvetica Now Text carries every supporting word at a quiet 400. Buttons are deliberately oversized pill shapes at 30 px radius, never sharp-cornered, never soft — the roundness signals approachability inside a system that is otherwise uncompromising. No gradients, no illustration system, no brand accent colour — just black, white, and the saturated photography that Nike controls with relentless art direction.
colors:
  primary: "#111111"
  on-primary: "#ffffff"
  ink: "#111111"
  body: "#111111"
  mute: "#757575"
  hairline: "#e5e5e5"
  canvas: "#ffffff"
  canvas-soft: "#f5f5f5"
  on-canvas: "#111111"
  link: "#111111"
  error: "#d43f21"
  sale: "#c8102e"
  on-dark: "#ffffff"
  overlay-dark: rgba(0,0,0,0.4)
typography:
  display-xl:
    fontFamily: '"Helvetica Now Display Medium", Helvetica, Arial, sans-serif'
    fontSize: 76px
    fontWeight: 500
    lineHeight: 68.4px
    letterSpacing: normal
  display-lg:
    fontFamily: '"Helvetica Now Display Medium", Helvetica, Arial, sans-serif'
    fontSize: 48px
    fontWeight: 500
    lineHeight: 52px
    letterSpacing: normal
  display-md:
    fontFamily: '"Helvetica Now Display Medium", Helvetica, Arial, sans-serif'
    fontSize: 36px
    fontWeight: 500
    lineHeight: 40px
    letterSpacing: normal
  display-sm:
    fontFamily: '"Helvetica Now Display Medium", Helvetica, Arial, sans-serif'
    fontSize: 24px
    fontWeight: 500
    lineHeight: 28.8px
    letterSpacing: normal
  body-lg:
    fontFamily: '"Helvetica Now Text", Helvetica, Arial, sans-serif'
    fontSize: 18px
    fontWeight: 400
    lineHeight: 27px
  body-md:
    fontFamily: '"Helvetica Now Text", Helvetica, Arial, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: '"Helvetica Now Text", Helvetica, Arial, sans-serif'
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  body-sm:
    fontFamily: '"Helvetica Now Text", Helvetica, Arial, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: '"Helvetica Now Text", Helvetica, Arial, sans-serif'
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  caption:
    fontFamily: '"Helvetica Now Text", Helvetica, Arial, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: '"Helvetica Now Text", Helvetica, Arial, sans-serif'
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  button-lg:
    fontFamily: '"Helvetica Now Text", Helvetica, Arial, sans-serif'
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  nav-label:
    fontFamily: '"Helvetica Now Text", Helvetica, Arial, sans-serif'
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  button: 30px
  pill: 30px
  full: 9999px
spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 36px
  3xl: 48px
  4xl: 64px
  5xl: 96px
  6xl: 128px
  section: 80px
components:
  utility-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.caption}"
    height: 36px
    padding: 0px {spacing.xl}
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    height: 60px
    padding: 0px {spacing.xl}
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.sm} {spacing.md}"
  nav-icon-button:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm}"
  search-bar:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 0px {spacing.lg}
    height: 40px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
  button-white:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
  hero-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: 0px
  hero-overlay-text:
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: "{spacing.3xl} {spacing.2xl}"
  hero-subtext:
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    padding: "{spacing.sm} 0px"
  product-card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  product-card-label:
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
  product-card-name:
    textColor: "{colors.ink}"
    typography: "{typography.body-md-strong}"
  product-card-price:
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
  sale-badge:
    backgroundColor: "{colors.sale}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs} {spacing.xs}"
  editorial-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    padding: 0px
  editorial-card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.lg}"
    rounded: "{rounded.none}"
  category-card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-sm}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.xl}"
  footer-heading:
    textColor: "{colors.ink}"
    typography: "{typography.body-md-strong}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  badge-new:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 0px {spacing.xs}
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.lg}
    height: 48px
  icon-button-circular:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm}"
  ex-pricing-tier:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-product-selector:
    backgroundColor: "{colors.canvas-soft}"
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
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.body-sm-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-modal-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.lg}"
    typography: "{typography.body-sm}"
---
## Overview

Nike operates one of the most photographically dominant retail surfaces on the web. The design language is not built around a colour palette or an illustration system — it is built around the uninterrupted full-bleed hero image. Every hero band stretches edge to edge without padding, letting a single art-directed photograph carry the entire emotional weight of the page. The brand's job is to get out of the way: near-black `{colors.primary}` ink on pure white `{colors.canvas}`, with zero decorative chrome between the nav and the photography.

Type is where Nike's personality lives, not in colour. `Helvetica Now Display Medium` renders hero headlines in all-caps at 76 px with a compressed 0.9× line-height — the letters feel stacked and dense, like a jersey number. There is no tracking manipulation; the weight and case do the work. `Helvetica Now Text` handles everything else at 400 weight — body, captions, nav utility links — deliberately quiet so that the display face and the photographs remain the visual anchors. The system has exactly two typographic voices: loud (display, uppercase, image-overlaid) and plain (text, mixed-case, functional).

The button shape is the most distinctive structural element: a fixed 30 px radius pill that applies equally to primary CTAs, secondary CTAs, watch buttons, and search inputs. This is the brand's only rounding gesture — nothing else in the layout is rounded. Cards, product tiles, and editorial bands are all sharp-cornered rectangles. The 30 px pill is a deliberate softening of an otherwise hard-edged athletic system.

The surface palette is three stops: `{colors.canvas}` white for the nav and product backgrounds, `{colors.canvas-soft}` near-white for the product grid tiles and category cards, and `{colors.primary}` near-black for the polarity-flipped hero bands and editorial overlay text. No gradients, no tints, no accent colours. The red `{colors.sale}` badge is the only non-neutral colour in the system and it appears only on discounted product.

## Colors

### Brand & Surface
- **Ink / Primary** (`{colors.primary}` — `#111111`): The dominant surface and text colour. Applied as the hero-band background when a full-bleed dark image is used, as the polarity-flipped editorial card, and as the primary CTA button fill. Everything defaults to this before a photograph takes over.
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure white — the nav bar, the product-detail pages, the footer background, the secondary button surface. The "off" state of every interactive element.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f5f5f5`): The 95%-white surface used for product grid tiles, category cards, and search-bar background. Creates just enough lift to separate a product card from the page without adding a border or shadow.

### Text
- **Ink** (`{colors.ink}` — `#111111`): Every heading and body paragraph on light surfaces, every nav link, every product name and price.
- **Mute** (`{colors.mute}` — `#757575`): Secondary and tertiary text — product category labels ("Men's Running Shoes"), footer utility links, placeholder text in the search bar.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): All text and CTA labels rendered over dark hero photographs or the `{colors.primary}` polarity-flipped surface.

### Semantic
- **Sale** (`{colors.sale}` — `#c8102e`): The red badge marking discounted products. The only saturated accent colour in the system — used sparingly and only on the pricing row of a product card. Visible in the product grid when sale items are present.
- **Error** (`{colors.error}` — `#d43f21`): Form validation error state.
- **Hairline** (`{colors.hairline}` — `#e5e5e5`): Dividers between footer columns, table row separators, form input borders.
- **Overlay Dark** (`{colors.overlay-dark}` — `rgba(0,0,0,0.4)`): The semi-transparent scrim applied over hero photographs when text legibility needs a boost.

## Typography

### Font Family
Two custom faces carry the entire system:

1. **Helvetica Now Display Medium** — the display face. Applied exclusively to hero headlines, section headers, and editorial card titles. Always weight 500. Set in all-caps on hero surfaces; mixed-case in smaller card contexts. The face's compressed proportions at large size give Nike headlines their characteristic stacked-jersey density. No letter-spacing manipulation — the face does the work at its native tracking.
2. **Helvetica Now Text** — the body face. Applied to every navigation label, product card name, price, body paragraph, button label, footer link, and caption. Weight 400 for reading text, weight 500 for strong labels and button CTAs.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 76px | 500 | 68.4px | normal | Full-bleed hero headline ("WEAR IT WITH GRIT"). All-caps, overlaid on photography. |
| `{typography.display-lg}` | 48px | 500 | 52px | normal | Section-level headline for editorial bands. |
| `{typography.display-md}` | 36px | 500 | 40px | normal | Editorial card headlines, large category titles. |
| `{typography.display-sm}` | 24px | 500 | 28.8px | normal | Card-cluster sub-heads, category card labels. |
| `{typography.body-lg}` | 18px | 400 | 27px | normal | Lead paragraph under hero headline ("Rep the fabric of England with unflinching pride."). |
| `{typography.body-md}` | 16px | 400 | 24px | normal | Default body copy, product descriptions, nav labels. |
| `{typography.body-md-strong}` | 16px | 500 | 24px | normal | Product card name, section sub-labels. |
| `{typography.body-sm}` | 14px | 400 | 20px | normal | Product card category label, footer links, secondary copy. |
| `{typography.body-sm-strong}` | 14px | 500 | 20px | normal | Table headers, bolded inline copy. |
| `{typography.caption}` | 12px | 400 | 16px | normal | Sale badge text, fine print, colour swatches count. |
| `{typography.button-md}` | 14px | 500 | 20px | normal | Small button labels. |
| `{typography.button-lg}` | 16px | 500 | 24px | normal | Marketing-scale CTA labels ("Shop England", "Watch"). |
| `{typography.nav-label}` | 16px | 500 | 24px | normal | Primary nav links ("Men", "Women", "Kids", "Jordan"). |

### Principles
- **All-caps is the hero voice, not the system voice.** Only hero-band headlines are uppercase. Navigation, product names, body copy, and button labels are all mixed-case sentence-style. The uppercase is art direction on the photograph, not a system-wide rule.
- **No letter-spacing manipulation.** Nike does not track headlines positively or negatively. Tracking is always `normal`. The compressed density of the display face at 76 px is inherent to the typeface, not manufactured through CSS.
- **Compressed line-height at display scale.** The 76 px headline renders at a 68.4 px line-height — a 0.9× multiplier that locks consecutive lines tight. This is the stacked-jersey effect.
- **Weight 500 is the display ceiling.** Helvetica Now Display Medium (500) is the heaviest weight in the system. Nothing heavier appears on nike.com.
- **Two voices only.** Display + all-caps for photography-scale moments. Text + sentence-case for everything else. No intermediate editorial weight.

### Note on Font Substitutes
Both faces are licensed typefaces. Open-source substitutes:
- **Helvetica Now Display Medium** — *Archivo* (700, condensed variant) is the closest proportional match for the compressed hero display. *Inter* at 600 is a passable second choice for body-compatible contexts.
- **Helvetica Now Text** — *Inter* (400 / 500) matches the neutral neo-grotesque voice at body scale.

## Layout

### Spacing System
- **Base unit**: 4 px. The scale extracted from the page resolves to multiples of the 4 px grid: 4 / 6 / 8 / 12 / 16 / 36 / 48 px.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 36 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px · `{spacing.6xl}` 128 px · `{spacing.section}` 80 px.
- **Hero bands**: zero padding — the photograph bleeds edge to edge. Overlay text sits at `{spacing.3xl}` from the bottom-left of the image.
- **Button padding**: measured at `{spacing.xs}` 6 px vertical × `{spacing.lg}` 16 px horizontal — tighter than most retail systems, consistent with Nike's athletic compression.
- **Product grid gap**: `{spacing.sm}` 8 px between tiles at desktop.
- **Section gap**: `{spacing.section}` 80 px between major content bands.

### Grid & Container
- **Max width**: ~1600 px; content centres with `{spacing.xl}` 24 px gutters at desktop.
- **Column patterns**:
  - Hero: single full-bleed image, no column grid.
  - Product grid: 3-up at desktop, 2-up at tablet, 1-up at mobile (standard retail grid).
  - Editorial card row: 3-up at desktop with equal-width rectangular cards.
  - Category row: 2-up or 3-up at desktop with squared image cards.
- **Nav**: logo flush-left; primary nav links centred; utility cluster (Search, Favourites, Bag) flush-right.

### Whitespace Philosophy
The page earns its authority by giving the full-bleed hero photograph 100 vw × 100 vh with no interior padding. Whitespace is compressed rather than generous — product grids sit tight, `{spacing.sm}` gaps rather than the `{spacing.lg}` gaps common in lifestyle brands. The compression reinforces the athletic voice. The only spacious moment is the section gap between content bands, which reads as a breath between editorial moments rather than generous padding inside any single component.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | All hero bands, product tiles, editorial cards, nav bar. |
| Level 1 — Surface Step | Background colour change from `{colors.canvas}` → `{colors.canvas-soft}`. | Product tiles sitting on the page background — colour-step substitutes for shadow. |
| Level 2 — Overlay Scrim | `{colors.overlay-dark}` semi-transparent fill over hero photography. | Text legibility layer on dark hero images. |

Nike's elevation system is colour-step only — no drop-shadows appear anywhere in the marketing surface. Depth is communicated by switching surface colour or by overlaying text directly on photography. The absence of shadow is deliberate; the system reads as flat and confident.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | All cards, product tiles, editorial bands, hero crops. Everything rectangular. |
| `{rounded.xs}` | 4px | Micro-radius for tight inline badges. |
| `{rounded.sm}` | 8px | Slightly rounded modal surfaces. |
| `{rounded.md}` | 16px | Mid-weight rounding for internal UI panels. |
| `{rounded.lg}` | 24px | Reserved for larger internal surface moments. |
| `{rounded.button}` | 30px | The brand's definitive pill — every CTA button, every watch button, the search bar. Measured as 30 px. |
| `{rounded.pill}` | 30px | Alias for `rounded.button`; used on all pill-shaped interactive elements. |
| `{rounded.full}` | 9999px | Icon button circular containers (Favourites, Bag nav icons). |

The 30 px button pill is the single rounding personality of the system. Everything else is a hard rectangle. Do not apply the button radius to cards, image crops, or editorial bands — those surfaces are always `{rounded.none}`.

## Components

### Navigation

**`utility-bar`** — the slim top utility row above the primary nav.
- Background `{colors.canvas}`, text `{colors.mute}`, set in `{typography.caption}`. Contains "Find a Store", "Help", "Join Us", "Sign In" links and the Jordan / Converse sub-brand logos at the far left. Height ~36 px.

**`nav-bar`** — the primary sticky navigation.
- Background `{colors.canvas}`, text `{colors.ink}`, height 60 px, padding `0px {spacing.xl}`. Layout: Nike Swoosh logo flush-left; "Men Women Kids Jordan NikeSKIMS Sale Nike Soccer" centred; Search input + Favourites icon + Bag icon flush-right. Labels in `{typography.nav-label}` (16 px / 500).

**`nav-link`** — each link in the primary nav row.
- Text `{colors.ink}`, set in `{typography.nav-label}`, padding `{spacing.sm} {spacing.md}`. No background on rest state; underline on hover.

**`nav-icon-button`** — the circular icon containers for Favourites and Bag.
- Background transparent on rest, `{colors.canvas-soft}` on hover, text `{colors.ink}`, shape `{rounded.full}`, padding `{spacing.sm}`.

**`search-bar`** — the search input embedded in the nav.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, set in `{typography.body-md}`, shape `{rounded.pill}` 30 px, height 40 px.

### Buttons

**`button-primary`** — the default black CTA pill.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-lg}`, shape `{rounded.button}` 30 px, padding `{spacing.xs} {spacing.lg}`. Used for "Shop England" and primary purchase actions.

**`button-secondary`** — the white pill with ink border, used alongside `button-primary`.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, same typography + shape + padding as `button-primary`. Used for "Watch ▶" alongside a hero primary CTA.

**`button-white`** — the white pill used over dark hero photography where no border is needed.
- Background `{colors.canvas}`, text `{colors.ink}`, shape `{rounded.button}` 30 px, label in `{typography.button-lg}`.

### Hero & Editorial

**`hero-band`** — the full-bleed hero carousel.
- Background image occupies 100 vw; no interior padding. Overlay text and CTAs sit in `hero-overlay-text` positioned over the lower-left quadrant of the image.

**`hero-overlay-text`** — the text and CTA cluster overlaid on the hero photograph.
- Text `{colors.on-dark}`, headline in `{typography.display-xl}` (all-caps, 76 px), sub-text in `{typography.body-md}`, CTA row with `button-primary` + `button-secondary`, padding `{spacing.3xl} {spacing.2xl}`.

**`editorial-band`** — a full-bleed dark editorial section with a photograph and overlaid display headline.
- Background `{colors.primary}`, text `{colors.on-dark}`, padding 0 (image fills the band). Headline in `{typography.display-lg}`.

**`editorial-card`** — a rectangular image card with a headline beneath.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, set in `{typography.display-md}`, padding `{spacing.lg}`, shape `{rounded.none}`.

**`category-card`** — the square category-navigation card.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, label in `{typography.display-sm}`, shape `{rounded.none}`, padding `{spacing.lg}`. Contains a product or lifestyle photograph above the label.

### Product Cards

**`product-card`** — the standard product tile in the grid.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, shape `{rounded.none}`, padding `{spacing.lg}`. Hosts product image at the top, then label / name / price stack below.

**`product-card-label`** — the secondary category label on the product card.
- Text `{colors.mute}`, set in `{typography.body-sm}`. Example: "Men's Running Shoes".

**`product-card-name`** — the product name on the product card.
- Text `{colors.ink}`, set in `{typography.body-md-strong}`.

**`product-card-price`** — the price row on the product card.
- Text `{colors.ink}`, set in `{typography.body-md}`.

**`sale-badge`** — the red discount badge applied to sale product cards.
- Background `{colors.sale}`, text `{colors.on-primary}`, set in `{typography.caption}`, shape `{rounded.none}`, padding `{spacing.xxs} {spacing.xs}`. The only saturated colour in the system — used sparingly.

### Forms & Inputs

**`form-input`** — the standard text input used in search and email capture forms.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, set in `{typography.body-md}`, shape `{rounded.button}` 30 px, height 48 px.

### Misc

**`badge-new`** — a small inline label pill for new arrivals or feature callouts.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, set in `{typography.caption}`, shape `{rounded.full}`, padding `0px {spacing.xs}`.

**`link-inline`** — body-copy inline links and footer navigation links.
- Text `{colors.link}`, set in `{typography.body-md}`.

**`footer`** — the bottom navigation and legal footer.
- Background `{colors.canvas}`, text `{colors.mute}`, padding `{spacing.3xl} {spacing.xl}`. Column headers in `{typography.body-md-strong}` at `{colors.ink}`; link rows in `{typography.body-sm}`.

**`icon-button-circular`** — circular icon containers used in nav and carousel controls.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, shape `{rounded.full}`, padding `{spacing.sm}`.

## Do's and Don'ts

### Do
- Let the full-bleed photograph be the hero. Zero padding on hero bands — the image earns its 100 vw.
- Apply `{rounded.button}` 30 px to every CTA pill, every watch button, and the search bar. The pill is the system's one rounding gesture.
- Set every hero and editorial headline in `{typography.display-xl}` or `{typography.display-lg}`, all-caps, in `{colors.on-dark}` over photography.
- Use `{colors.canvas-soft}` as the product tile surface — no borders, no shadows. The colour step is the only depth cue.
- Reserve `{colors.sale}` exclusively for discounted product badges. Never use it as a decorative accent or CTA colour.
- Keep `{typography.display-*}` at weight 500 (Medium). Do not promote to bold or black weights.
- Use sharp `{rounded.none}` corners on all cards, editorial bands, and image crops. Only buttons and the search bar get the 30 px pill.

### Don't
- Don't round product cards, editorial cards, or category tiles. The 30 px radius belongs exclusively to interactive pill elements.
- Don't introduce gradients or decorative illustration. The photograph IS the decoration.
- Don't apply the all-caps headline treatment below the hero context — mixed-case sentence-style governs everywhere else.
- Don't add drop-shadows to any surface. Nike's elevation system is colour-step only.
- Don't use `{colors.sale}` outside the discount-price / sale-badge context. It is a functional signal, not a brand accent.
- Don't promote Helvetica Now Text beyond weight 500. The system cap is Medium; no Bold or Black weights appear in the product surface.
- Don't use letter-spacing manipulation on any type token. Tracking is always `normal` — the typeface speaks for itself.
