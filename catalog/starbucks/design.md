---
version: alpha
name: Starbucks
description: "Starbucks operates in a deep forest-green and warm cream duet — a brand whose entire surface is the colour of the bean, not the cup. The signature #00754a Starbucks green carries every CTA, the announcement band, the hero split-panel, and the siren mark itself. White and a near-black ink handle all typography. The only decorative system is the full-bleed lifestyle photography that bleeds to the left edge while a forest-green panel holds the copy flush-right. Buttons are generous 50px pills — soft, approachable, unmistakably coffee-shop — and the sole typeface, the proprietary SoDoSans, reads warm and editorial at every weight."
colors:
  primary: "#00754a"
  primary-deep: "#006341"
  on-primary: "#ffffff"
  ink: "#000000"
  body: rgba(0, 0, 0, 0.87)
  mute: rgba(0, 0, 0, 0.54)
  hairline: rgba(0, 0, 0, 0.12)
  canvas: "#ffffff"
  canvas-soft: "#f9f9f9"
  surface-green: "#00754a"
  surface-green-deep: "#006341"
  on-surface-green: "#ffffff"
  link: "#00754a"
  success: "#00754a"
  error: "#d11a1a"
  warning: "#c47a00"
typography:
  display-xl:
    fontFamily: SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 50px
    fontWeight: 600
    lineHeight: 56px
    letterSpacing: -0.16px
  display-lg:
    fontFamily: SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 36px
    fontWeight: 600
    lineHeight: 50.4px
    letterSpacing: -0.16px
  display-md:
    fontFamily: SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 28px
    fontWeight: 600
    lineHeight: 36px
    letterSpacing: -0.16px
  display-sm:
    fontFamily: SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 36px
    letterSpacing: -0.16px
  body-lg:
    fontFamily: SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 22px
    fontWeight: 400
    lineHeight: 32px
  body-md:
    fontFamily: SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 19px
    fontWeight: 400
    lineHeight: 28px
  body-sm:
    fontFamily: SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-xs:
    fontFamily: SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-xxs:
    fontFamily: SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 18px
  caption:
    fontFamily: SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 18px
  button-md:
    fontFamily: SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
  button-lg:
    fontFamily: SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 32px
  nav-label:
    fontFamily: SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: 0.08em
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  button: 50px
  pill: 50px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 40px
  2xl: 48px
  3xl: 56px
  4xl: 64px
  5xl: 80px
  section: 96px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.nav-label}"
    height: 64px
    padding: "{spacing.xs} {spacing.lg}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.nav-label}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-join:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 7px {spacing.sm}
  nav-cta-signin:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    borderColor: "{colors.body}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 7px {spacing.sm}
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 7px {spacing.sm}
  button-primary-lg:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    borderColor: "{colors.body}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 7px {spacing.sm}
  button-secondary-on-green:
    backgroundColor: transparent
    textColor: "{colors.on-primary}"
    borderColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 7px {spacing.sm}
  announcement-band:
    backgroundColor: "{colors.surface-green}"
    textColor: "{colors.on-surface-green}"
    typography: "{typography.body-sm}"
    padding: "{spacing.sm} {spacing.lg}"
  hero-split-panel:
    backgroundColor: "{colors.surface-green}"
    textColor: "{colors.on-surface-green}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section} {spacing.lg}"
  hero-image-panel:
    backgroundColor: "{colors.canvas}"
    padding: 0px
  card-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  promo-card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  rewards-band:
    backgroundColor: "{colors.surface-green}"
    textColor: "{colors.on-surface-green}"
    typography: "{typography.display-md}"
    padding: "{spacing.section} {spacing.lg}"
  menu-category-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.display-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-xs}"
    padding: "{spacing.2xl} {spacing.lg}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-sm}"
  badge-rewards:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.xs}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 7px {spacing.sm}
    height: 40px
  ex-pricing-tier:
    description: Default rewards-tier card — soft canvas-soft surface with hairline border.
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: Featured rewards tier — polarity-flipped to primary green with white text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-product-selector:
    description: Menu category selector — round-tile format matching the menu-category-card chrome.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
  ex-cart-drawer:
    description: Order summary drawer — line items per drink/food add-on.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar/menu nav row. Active state uses primary green as a left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: Nutritional info table. Header uses nav-label uppercase caps; body uses body-xs.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.nav-label}"
    bodyTypography: "{typography.body-xs}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / join card. Canvas-soft surface with form-input primitives inside.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-modal-card:
    description: Modal dialog surface — canvas with soft drop shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-empty-state-card:
    description: Empty-state frame for empty cart or no rewards — generous padding on canvas-soft.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-sm}"
  ex-toast:
    description: Toast notification — flat canvas card with hairline border.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
    typography: "{typography.body-xs}"
---
## Overview

Starbucks is a hospitality brand that wears its forest-green identity without apology. The entire marketing surface is organised around one anchor colour — `{colors.primary}` `#00754a`, the same green as the siren mark — used for every CTA pill, every promotional band, and every hero panel that carries the conversion copy. It never looks clinical; the warm SoDoSans typeface and full-bleed lifestyle photography (lattes in summer light, whipped cream stacked high) make the experience feel like the store itself.

The layout system relies on one dominant compositional move: a full-bleed split where the photograph bleeds edge-to-edge on the left half and a solid `{colors.surface-green}` panel anchors the headline and CTA flush-right. White canvas handles every neutral section between green bands, keeping the page from feeling monotonous. There is no gradient, no gradient mesh, no decoration — the food and drink photography IS the decoration system.

Typography is a single-family world. SoDoSans, a proprietary humanist sans, carries every level from the 50 px hero down to 13 px footer fine print. Headlines are sentence-case, set at weight 600 with a barely-perceptible `-0.16 px` tracking. Buttons reach weight 700 — the only place the face goes that heavy. The brand never uses a condensed or monospaced companion face.

Buttons are the brand's most distinctive geometric signature: a 50 px radius pill that reads as a complete oval at small sizes. This is non-negotiable — the pill shape is part of the Starbucks sensory language, the same soft curve as the siren mark's framing ring.

## Colors

### Brand Green
- **Primary** (`{colors.primary}` — `#00754a`): The Starbucks signature green. Used on every CTA pill, the announcement band, the hero split-panel, the Rewards band, and any surface that says "this is a decision point." The single most-used colour on the page after white.
- **Primary Deep** (`{colors.primary-deep}` — `#006341`): The brand's meta theme-color — a shade darker, used for browser chrome theming and pressed/hover states on the primary green.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure white. The default section background between green bands and the card surface for menu tiles.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f9f9f9`): The lightest off-white, appearing as a button-element background on utility actions and inset card regions.
- **Surface Green** (`{colors.surface-green}` — `#00754a`): The solid green used as a full-bleed band background — announcement strip, hero right panel, Rewards sections. Identical hex to primary; token separated for semantic clarity.

### Text
- **Body** (`{colors.body}` — `rgba(0,0,0,0.87)`): The brand's default near-black for all body copy and headings on white surfaces.
- **Mute** (`{colors.mute}` — `rgba(0,0,0,0.54)`): Footer secondary lines, legal fine print, secondary captions.
- **On Primary / On Surface Green** (`{colors.on-primary}` — `#ffffff`): All typography rendered on any green surface. Headlines, body copy, and CTA labels within green panels are universally white.
- **Ink** (`{colors.ink}` — `#000000`): Hard black for nav labels set in uppercase weight-700.

### Semantic
- **Link** (`{colors.link}` — `#00754a`): Inline body links resolve to the primary green.
- **Hairline** (`{colors.hairline}` — `rgba(0,0,0,0.12)`): 1 px dividers between nav items, table rows, and card borders.
- **Error** (`{colors.error}` — `#d11a1a`): Form validation red.
- **Warning** (`{colors.warning}` — `#c47a00`): Caution / out-of-stock status.

## Typography

### Font Family
One proprietary humanist sans — **SoDoSans** — carries every level of the type hierarchy. There is no display-only partner face, no mono companion. The fallback stack is Helvetica Neue → Helvetica → Arial → system sans. The face reads warm and legible at 13 px caption and confidently editorial at 50 px hero. Weight 400 handles all body; 600 carries all display headings; 700 is reserved exclusively for button labels.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 50px | 600 | 56px | -0.16px | Largest hero headline. |
| `{typography.display-lg}` | 36px | 600 | 50.4px | -0.16px | Hero split-panel headline ("S'mores early access starts tomorrow"). |
| `{typography.display-md}` | 28px | 600 | 36px | -0.16px | Section lead headlines, Rewards band headings. |
| `{typography.display-sm}` | 24px | 600 | 36px | -0.16px | Card cluster headlines, menu-category labels. |
| `{typography.body-lg}` | 22px | 400 | 32px | 0 | Lead paragraphs under section headlines. |
| `{typography.body-md}` | 19px | 400 | 28px | 0 | Default editorial body copy. |
| `{typography.body-sm}` | 16px | 400 | 24px | 0 | Standard body, announcement-band copy, nav secondary text. |
| `{typography.body-xs}` | 14px | 400 | 20px | 0 | Footer links, secondary card labels. |
| `{typography.body-xxs}` | 13px | 400 | 18px | 0 | Fine print, legal disclosures. |
| `{typography.caption}` | 13px | 400 | 18px | 0 | Badge labels, tag labels. |
| `{typography.button-md}` | 16px | 700 | 24px | 0 | Standard CTA pill label (nav Join now, hero Start an order, card Join now). |
| `{typography.button-lg}` | 24px | 700 | 32px | 0 | Large-band CTA pill labels. |
| `{typography.nav-label}` | 14px | 700 | 20px | 0.08em | Nav link row labels (MENU, REWARDS, GIFT CARDS) — uppercase tracked. |

### Principles
- **Sentence-case headings, always.** The brand does not uppercase its headlines; that register is reserved for the nav-link labels only.
- **Single face, three weights.** 400 for reading, 600 for display, 700 for buttons. No 300-weight editorial moments, no 800-weight punches.
- **Barely-negative tracking at display.** `-0.16 px` at 36 px hero — not the aggressive -2 px of a tech brand, but a deliberate tightening that keeps multi-line stacked headlines cohesive.
- **White on green, near-black on white.** Colour assignments are binary and follow the surface. The brand never introduces a third text colour beyond the two-surface system.

### Note on Font Substitutes
SoDoSans is proprietary. The closest open-source match is **Lato** (400 / 600 / 700) for its humanist warmth at similar x-height. **Nunito Sans** is a passable second choice. Neither is a perfect match at display sizes, but both share the rounded apertures that define SoDoSans's coffee-shop approachability.

## Layout

### Spacing System
- **Base unit**: 8 px. The brand's `--space-2` is exactly `0.8rem` / 8 px; all marketing values are multiples.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 16 px · `{spacing.md}` 24 px · `{spacing.lg}` 32 px · `{spacing.xl}` 40 px · `{spacing.2xl}` 48 px · `{spacing.3xl}` 56 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 80 px · `{spacing.section}` 96 px.
- **Section padding**: green bands and hero panels use `{spacing.section}` 96 px top/bottom; marketing card rows sit at `{spacing.2xl}` 48 px.
- **Card interior**: menu category tiles use `{spacing.md}` 24 px; marketing cards use `{spacing.lg}` 32 px.
- **Button padding**: all pill CTAs use `7px {spacing.sm}` (7 px top/bottom, 16 px sides) — the 7 px vertical is the brand's deliberate non-multiple-of-8, producing a compact but soft pill.

### Grid & Container
- **Max width**: content centres at approximately 1440 px with horizontal gutters of `{spacing.lg}` 32 px on desktop.
- **Column patterns**:
  - Hero split: 50 / 50 — photo left, green copy panel right.
  - Menu category row: 5-up or 6-up circular tiles on desktop.
  - Marketing promo cards: 2-up or 3-up on desktop.
  - Announcement band: full-width single-row centred text + inline CTA.

### Whitespace Philosophy
The photography does the decoration; whitespace between sections separates the emotional beats. Green bands are generous (`{spacing.section}` top/bottom) so the colour has visual weight; white card rows are more compact, creating a visual "breath" between green moments. Inside a card or panel, the headline → body → CTA stack is tight — `{spacing.xs}` 8 px between headline and body, `{spacing.sm}` 16 px before the CTA — keeping the conversion path short and legible.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero split panels, green announcement band, Rewards band. |
| Level 1 — Hairline | `0 0 0 1px rgba(0,0,0,0.12)` inset border. | Menu category tiles, form inputs, nav separator lines. |
| Level 2 — Soft Drop | `0px 2px 8px rgba(0,0,0,0.08)` | Promo cards, lifted menu tiles on hover. |
| Level 3 — Card Float | `0px 4px 16px rgba(0,0,0,0.12)` | Modals, drawers, order-summary panels. |

The brand's elevation language is restrained — the photography already introduces depth via perspective and light. Cards sit flat with hairline borders rather than heavy shadows. The green surface itself is the depth cue: a green band advancing from the white page is the brand's primary foreground/background signal.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero panels, announcement band, footer, navigation bar. |
| `{rounded.xs}` | 4px | Smallest inline chips, tag accents. |
| `{rounded.sm}` | 8px | Form inputs, toast notifications, utility cards. |
| `{rounded.md}` | 16px | Promo cards, modal dialogs. |
| `{rounded.lg}` | 24px | Larger card variants. |
| `{rounded.button}` | 50px | Every CTA and button pill — "Join now", "Sign in", "Start an order", "Start Delivering". The brand's defining shape. |
| `{rounded.pill}` | 50px | Explicitly pill-shaped badge and label elements. |
| `{rounded.full}` | 9999px | Menu category circular tiles, avatar containers. |

The 50 px pill is the brand's most recognisable geometric signature. It must appear on every interactive CTA regardless of size. The only exception is the utility form-button (the "find a store" input submit), which can resolve to `{rounded.sm}` when embedded inline within a form field.

## Components

### Navigation

**`nav-bar`** — the white sticky header.
- Background `{colors.canvas}`, height 64 px, padding `{spacing.xs} {spacing.lg}`. Layout: siren-mark logo left, nav-link row left-of-centre (MENU / REWARDS / GIFT CARDS in uppercase tracked `{typography.nav-label}`), "Find a store" text link + "Sign in" + "Join now" pill cluster right.

**`nav-link`** — the three uppercase nav labels.
- Text `{colors.body}`, `{typography.nav-label}`, padding `{spacing.xs} {spacing.sm}`.

**`nav-cta-join`** — the primary "Join now" pill in the nav.
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.button-md}`, `{rounded.button}`, padding `7px {spacing.sm}`.

**`nav-cta-signin`** — the outlined "Sign in" pill next to Join now.
- Background `{colors.canvas}`, text `{colors.body}`, 1 px solid `{colors.body}` border, `{typography.button-md}`, `{rounded.button}`, padding `7px {spacing.sm}`.

### Buttons

**`button-primary`** — the standard green pill CTA ("Join now", "Start an order").
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.button-md}` (16 px / 700), `{rounded.button}` 50 px, padding `7px {spacing.sm}`.

**`button-primary-lg`** — the large-band green pill for section-level CTAs.
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.button-lg}` (24 px / 700), `{rounded.button}`, padding `{spacing.sm} {spacing.lg}`.

**`button-secondary`** — the outlined dark pill for secondary actions on white surfaces.
- Background `{colors.canvas}`, text `{colors.body}`, 1 px solid `{colors.body}` border, `{typography.button-md}`, `{rounded.button}`.

**`button-secondary-on-green`** — the outlined white pill for secondary actions on green surfaces ("Start an order" in the announcement band).
- Background transparent, text `{colors.on-primary}`, 1 px solid `{colors.on-primary}` border, `{typography.button-md}`, `{rounded.button}`, padding `7px {spacing.sm}`.

### Bands & Sections

**`announcement-band`** — the full-width green strip at the top of the page below the nav.
- Background `{colors.surface-green}`, text `{colors.on-surface-green}`, `{typography.body-sm}`, padding `{spacing.sm} {spacing.lg}`. Contains inline copy ("It's a great day for coffee") and a `button-secondary-on-green` pill inline to the right.

**`hero-split-panel`** — the right-hand green copy panel in the full-bleed hero split.
- Background `{colors.surface-green}`, text `{colors.on-surface-green}`, `{typography.display-lg}`, padding `{spacing.section} {spacing.lg}`. Hosts headline, supporting body in `{typography.body-md}` white, and a `button-primary` pill (white-on-green inverted or dark-on-white depending on surface context).

**`hero-image-panel`** — the left-hand full-bleed photography panel.
- Background `{colors.canvas}`, no padding, image bleeds to edge.

**`rewards-band`** — the large green Rewards promotion section.
- Background `{colors.surface-green}`, text `{colors.on-surface-green}`, `{typography.display-md}`, padding `{spacing.section} {spacing.lg}`. Contains Rewards programme headline, body copy, and a `button-primary` CTA.

### Cards & Tiles

**`menu-category-card`** — the circular category tile (Coffee, Tea, Cold Drinks, etc.).
- Background `{colors.canvas}`, text `{colors.body}`, `{typography.display-sm}`, `{rounded.full}`, padding `{spacing.md}`. Contains a circular product photograph above the label.

**`card-marketing`** — the rectangular editorial promo card on white sections.
- Background `{colors.canvas}`, text `{colors.body}`, `{typography.body-md}`, `{rounded.none}`, padding `{spacing.lg}`.

**`promo-card`** — a softer off-white card for secondary promotions.
- Background `{colors.canvas-soft}`, text `{colors.body}`, `{typography.body-sm}`, `{rounded.sm}`, padding `{spacing.sm}`.

### Forms & Inputs

**`form-input`** — the standard text input (search, store finder).
- Background `{colors.canvas}`, text `{colors.body}`, 1 px solid `{colors.hairline}` border, `{typography.body-sm}`, `{rounded.sm}`, height 40 px, padding `7px {spacing.sm}`.

### Badges & Labels

**`badge-rewards`** — the small green Rewards star/status badge.
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.caption}`, `{rounded.button}`, padding `{spacing.xxs} {spacing.xs}`.

**`link-inline`** — body-copy inline links.
- Text `{colors.link}`, `{typography.body-sm}`, underlined.

### Footer

**`footer`** — the bottom navigation and legal section.
- Background `{colors.canvas}`, text `{colors.mute}`, `{typography.body-xs}`, padding `{spacing.2xl} {spacing.lg}`. Contains multi-column link groups and fine print.

### Examples (illustrative)

**`ex-pricing-tier`** — Default rewards-tier card. Soft canvas-soft surface with a hairline border.
- `backgroundColor: "{colors.canvas-soft}"`, `borderColor: "{colors.hairline}"`, `rounded: "{rounded.md}"`, `padding: "{spacing.lg}"`

**`ex-pricing-tier-featured`** — Featured rewards tier — polarity-flipped to primary green with white text.
- `backgroundColor: "{colors.primary}"`, `textColor: "{colors.on-primary}"`, `rounded: "{rounded.md}"`, `padding: "{spacing.lg}"`

**`ex-product-selector`** — Menu category selector — circular tile format.
- `backgroundColor: "{colors.canvas-soft}"`, `rounded: "{rounded.full}"`, `padding: "{spacing.md}"`

**`ex-cart-drawer`** — Order summary drawer — line items per drink or food item.
- `backgroundColor: "{colors.canvas}"`, `rounded: "{rounded.md}"`, `padding: "{spacing.lg}"`, `item-divider: "{colors.hairline}"`

**`ex-app-shell-row`** — Sidebar nav row. Active state uses primary green as a left-edge indicator.
- `backgroundColor: "{colors.canvas}"`, `activeIndicator: "{colors.primary}"`, `rounded: "{rounded.sm}"`, `padding: "{spacing.xs} {spacing.sm}"`

**`ex-data-table-cell`** — Nutritional info table. Header uses `nav-label` uppercase; body uses `body-xs`.
- `headerBackground: "{colors.canvas-soft}"`, `headerTypography: "{typography.nav-label}"`, `bodyTypography: "{typography.body-xs}"`, `cellPadding: "{spacing.xs} {spacing.sm}"`, `rowBorder: "{colors.hairline}"`

**`ex-auth-form-card`** — Sign-in / join card. Canvas-soft surface with form-input primitives inside.
- `backgroundColor: "{colors.canvas-soft}"`, `rounded: "{rounded.md}"`, `padding: "{spacing.lg}"`

**`ex-modal-card`** — Modal dialog surface — same chrome as card-marketing with elevated shadow.
- `backgroundColor: "{colors.canvas}"`, `rounded: "{rounded.md}"`, `padding: "{spacing.lg}"`

**`ex-empty-state-card`** — Empty-state frame for empty cart or no rewards balance.
- `backgroundColor: "{colors.canvas-soft}"`, `rounded: "{rounded.md}"`, `padding: "{spacing.3xl}"`, `captionTypography: "{typography.body-sm}"`

**`ex-toast`** — Toast notification — flat canvas card with hairline border.
- `backgroundColor: "{colors.canvas}"`, `rounded: "{rounded.sm}"`, `padding: "{spacing.xs} {spacing.sm}"`, `typography: "{typography.body-xs}"`

## Do's and Don'ts

### Do
- Use `{colors.primary}` `#00754a` for every CTA pill, every announcement band, every green band. The green IS the brand.
- Apply `{rounded.button}` 50 px to every interactive CTA — pill shape is non-negotiable in the Starbucks system.
- Set headlines in `{typography.display-*}` weight 600, sentence-case. Period-termination is optional; the brand uses it selectively.
- Set button labels in weight 700 exclusively — the only place the typeface reaches that weight.
- Use white text (`{colors.on-primary}`) on every green surface without exception.
- Let the lifestyle photography occupy full half-panels or full-bleed bands — it is the entire decorative system.
- Maintain the two-surface pattern: white canvas sections alternate with solid green bands for rhythm.

### Don't
- Don't use the 50 px pill on form inputs or utility elements — reserve it for CTAs. Utility controls use `{rounded.sm}` 8 px.
- Don't introduce accent colours beyond the green/white/near-black triad — there is no gradient, no teal, no gold on the marketing surface.
- Don't uppercase headline copy — uppercase is for nav labels only (MENU, REWARDS, GIFT CARDS).
- Don't set body paragraphs in weight 700 — that weight belongs exclusively to button labels.
- Don't use a shadow heavier than `0px 4px 16px rgba(0,0,0,0.12)` on any surface — the green colour does the heavy lifting; shadows stay subtle.
- Don't miniaturise the food photography to a small thumbnail inside a pill — the brand's imagery always has room to breathe at panel or half-page scale.
- Don't introduce a second typeface. SoDoSans (or its open-source substitute) is the only voice in this system.
