---
version: alpha
name: HP-Official-Site
description: "HP's consumer and commercial storefront operates as a clean white-canvas retail system — pure white and near-black ink on an open page, punctuated by a single HP-blue accent that carries the brand mark and primary call-to-action buttons. The decorative system is the product itself: hero banners lead with full-bleed lifestyle photography, not abstract gradients or illustration. Type is set in a geometric sans at bold weights for headlines with generous line-height and normal tracking — approachable retail rather than engineered precision. The card system uses an unusually large 74 px radius to give category tiles a pill-like softness, and the primary Shop button is a compact, flat-cornered rectangle that sits flush with no rounded-corner theatrics. The page breathes through consistent 16–24 px interior gutters and a light gray band separating the hero from the product grid below."

colors:
  primary: "#0096d6"
  on-primary: "#ffffff"
  ink: "#000000"
  ink-soft: "#1a1a1a"
  body: "#3d3d3d"
  mute: "#767676"
  hairline: "#e0e0e0"
  canvas: "#ffffff"
  canvas-soft: "#f5f5f5"
  canvas-hero: "#ffffff"
  link: "#0096d6"
  error: "#cc0000"
  success: "#007a3d"
  warning: "#d47c10"
  hp-blue: "#0096d6"
  cta-bg: "#0096d6"
  nav-bg: "#ffffff"
  footer-bg: "#f5f5f5"
  card-overlay: "rgba(255, 255, 255, 0.6)"

typography:
  display-xl:
    fontFamily: "HP Simplified, Forma DJR, Arial, Helvetica, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 56px
    letterSpacing: normal
  display-lg:
    fontFamily: "HP Simplified, Forma DJR, Arial, Helvetica, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 48px
    letterSpacing: normal
  display-md:
    fontFamily: "HP Simplified, Forma DJR, Arial, Helvetica, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 28px
    letterSpacing: normal
  display-sm:
    fontFamily: "HP Simplified, Forma DJR, Arial, Helvetica, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 28px
    letterSpacing: normal
  body-lg:
    fontFamily: "HP Simplified, Forma DJR, Arial, Helvetica, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: "HP Simplified, Forma DJR, Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: "HP Simplified, Forma DJR, Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
  body-sm:
    fontFamily: "HP Simplified, Forma DJR, Arial, Helvetica, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: "HP Simplified, Forma DJR, Arial, Helvetica, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
  caption:
    fontFamily: "HP Simplified, Forma DJR, Arial, Helvetica, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: "HP Simplified, Forma DJR, Arial, Helvetica, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
  button-lg:
    fontFamily: "HP Simplified, Forma DJR, Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 24px
  card-pill: 74px
  full: 9999px

spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 36px
  4xl: 48px
  5xl: 64px
  6xl: 96px
  section: 128px

components:
  nav-bar:
    backgroundColor: "{colors.nav-bg}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    height: 56px
    padding: "{spacing.sm} {spacing.lg}"
    borderBottom: "{colors.hairline}"
  nav-logo:
    color: "{colors.hp-blue}"
    width: 32px
    height: 32px
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    padding: "{spacing.sm} {spacing.lg}"
  nav-icon-button:
    textColor: "{colors.ink}"
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.2xl}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.2xl}"
    borderColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  hero-band:
    backgroundColor: "{colors.canvas-hero}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.3xl}"
  hero-headline:
    typography: "{typography.display-xl}"
    textColor: "{colors.ink}"
  hero-subheadline:
    typography: "{typography.body-md-strong}"
    textColor: "{colors.ink}"
  hero-body:
    typography: "{typography.body-md}"
    textColor: "{colors.body}"
  hero-carousel-indicator:
    backgroundColor: "{colors.hairline}"
    activeColor: "{colors.ink}"
    rounded: "{rounded.full}"
  category-card:
    backgroundColor: "{colors.card-overlay}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.card-pill}"
    padding: "{spacing.md} {spacing.4xl}"
  products-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.3xl} {spacing.lg}"
  section-headline:
    typography: "{typography.display-md}"
    textColor: "{colors.ink}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  footer:
    backgroundColor: "{colors.footer-bg}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.lg}"
  badge:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "0px {spacing.sm}"

  ex-pricing-tier:
    description: "Default product tier card on canvas-soft surface with hairline border."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.2xl}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — HP blue fill with white text."
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.2xl}"
  ex-product-selector:
    description: "Category selector card using the brand's large-radius pill shape on translucent white."
    backgroundColor: "{colors.card-overlay}"
    rounded: "{rounded.card-pill}"
    padding: "{spacing.md} {spacing.4xl}"
  ex-cart-drawer:
    description: "Cart summary panel — line items per product, flat white surface, hairline dividers."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.2xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Nav row inside account/dashboard shell. Active state uses hp-blue left-edge indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.lg}"
  ex-data-table-cell:
    description: "Spec comparison table. Header uses body-sm-strong; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.body-sm-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.lg}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in card. Flat white surface with form-input primitives and a primary CTA."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.2xl}"
  ex-modal-card:
    description: "Modal dialog surface — white card with hairline border, flat corners."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.2xl}"
  ex-empty-state-card:
    description: "Empty-state frame on canvas-soft with centered caption."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.4xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification — white surface, flat corners, hairline border."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
    typography: "{typography.body-sm}"

---

## Overview

HP.com is a consumer and commercial retail storefront operating in one of the cleanest white-canvas traditions in consumer electronics — pure white page surface, near-black ink text, and a single brand-blue (`{colors.hp-blue}`) that does double duty as the logo fill and the primary CTA button color. The decorative system is the product photography itself: the hero is a split layout with bold headline copy on the left and a high-resolution product shot on the right, against white. There is no gradient backdrop, no illustration system, no atmospheric effect. The page earns its energy from contrast alone.

The most visually distinctive element is the category tile shape: an unusually generous 74 px radius applied to translucent white cards (`rgba(255, 255, 255, 0.6)`) sitting over hero imagery. This super-pill shape is unique to the brand's marketing surfaces and should not be confused with the primary button, which is a square-cornered rectangle with zero border-radius — a deliberate retail convention that signals "press here" without softness. The two shapes coexist on the same page and serve different registers: the pill card is decorative wayfinding, the flat button is transactional.

Type is set in a geometric sans throughout — the extracted fallback stack points to `HP Simplified` (the brand's proprietary face) with `Arial/Helvetica` as the open-web substitute. Display headlines run at 56 px / 700 weight with normal (not negative) tracking, giving the page a warm, approachable retail quality quite distinct from the tight-tracked developer-tool aesthetic. Body text runs at 16 px / 400 with standard line-height. The type system is uncomplicated: two weights (400 body, 700 display/bold), one size scale, one family.

The layout divides cleanly into horizontal bands: the sticky white nav with the HP logo, category links, and icon buttons; a full-width hero carousel with product photography; and a light gray `{colors.canvas-soft}` band introducing the "Our Products" category grid. Spacing is a 4/6/8/12/16/36 px scale derived from the live extraction — the dominant gap unit is 16 px for interior padding and 36 px for inter-section rhythm.

## Colors

### Brand
- **HP Blue** (`{colors.hp-blue}` — `#0096d6`): The brand's signature accent, used on the HP logo mark in the nav and as the fill for primary CTA buttons. The single chromatic note in an otherwise monochrome system.
- **Primary** (`{colors.primary}` — `#0096d6`): Aliases `hp-blue`; carries every interactive CTA surface.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): White text on HP-blue button surfaces.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The default page background, nav surface, card default surface, and modal surface.
- **Canvas Hero** (`{colors.canvas-hero}` — `#ffffff`): Hero band background — pure white to maximise contrast with product photography.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f5f5f5`): The light gray used for the "Our Products" section band and secondary card fills.
- **Card Overlay** (`{colors.card-overlay}` — `rgba(255, 255, 255, 0.6)`): The semi-transparent white fill for the super-pill category tiles, allowing product imagery to show through.

### Text
- **Ink** (`{colors.ink}` — `#000000`): Hero headlines, section headings, primary display text.
- **Ink Soft** (`{colors.ink-soft}` — `#1a1a1a`): H3-level headings and slightly softened ink.
- **Body** (`{colors.body}` — `#3d3d3d`): Body paragraphs, nav links, secondary copy, link text.
- **Mute** (`{colors.mute}` — `#767676`): Fine print, captions, low-priority labels, placeholder text.
- **Hairline** (`{colors.hairline}` — `#e0e0e0`): 1 px dividers between nav items, card borders, section separators.

### Semantic
- **Link** (`{colors.link}` — `#0096d6`): Inline hyperlinks, consistent with HP blue.
- **Error** (`{colors.error}` — `#cc0000`): Destructive action and form validation states.
- **Success** (`{colors.success}` — `#007a3d`): Order confirmation, availability indicators.
- **Warning** (`{colors.warning}` — `#d47c10`): Stock or delivery caution states.

## Typography

### Font Family
HP's system uses a single proprietary geometric sans — **HP Simplified** — across every surface. The extracted CSS points to `Times` as a computed fallback (likely a rendering artifact from a FOUT state), but the visible type on the page is clearly a clean, low-contrast geometric sans. The correct open-source substitute is **Arial or Helvetica** as a close geometric fallback; *Inter* or *Forma DJR* are closer stylistically for design-system use.

Two weights constitute the full working set: **400** for all body and secondary copy, **700** for all display, headings, and button labels. The brand never uses intermediate weights (500, 600) and never applies negative letter-spacing — tracking stays at `normal` throughout.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 700 | 56px | normal | Hero carousel headline ("4th of July Sale"). |
| `{typography.display-lg}` | 40px | 700 | 48px | normal | Secondary hero headlines, large section titles. |
| `{typography.display-md}` | 24px | 700 | 28px | normal | Section headings ("Our Products"), card headlines, H3 labels. |
| `{typography.display-sm}` | 20px | 700 | 28px | normal | Sub-section and cluster headings. |
| `{typography.body-lg}` | 18px | 400 | 28px | normal | Lead paragraph text under hero headlines. |
| `{typography.body-md}` | 16px | 400 | 24px | normal | Default body copy ("Protect your brand-new PC and save 30%..."). |
| `{typography.body-md-strong}` | 16px | 700 | 24px | normal | Hero sub-headline emphasis ("Save up to 71% on select products..."). |
| `{typography.body-sm}` | 14px | 400 | 20px | normal | Nav links, secondary body, footer copy. |
| `{typography.body-sm-strong}` | 14px | 700 | 20px | normal | Nav active labels, table row emphasis. |
| `{typography.caption}` | 12px | 400 | 16px | normal | Footer fine print, badge labels, product spec captions. |
| `{typography.button-md}` | 14px | 700 | 20px | normal | Small button labels, ghost action labels. |
| `{typography.button-lg}` | 16px | 700 | 24px | normal | Primary "Shop" CTA and secondary button labels. |

### Principles
- **Normal tracking throughout.** HP never applies negative letter-spacing; the brand reads as warm and accessible, not engineered or compressed.
- **Bold (700) is the only display weight.** The system uses 400 for body and jumps directly to 700 for every headline and button — no intermediate 500 or 600 weight appears on marketing surfaces.
- **Sentence-case headlines.** "4th of July Sale", "Save up to 71%", "Our Products" — titles are sentence-case or title-case retail copy, never all-caps.
- **One family, always.** The geometric sans carries everything — there is no secondary editorial face, no mono face, no condensed display variant. Simplicity is the system.

### Note on Font Substitutes
HP Simplified is a proprietary face not available on the open web. Closest open-source substitutes:
- **Primary sans** — *Inter* at 400/700 with `font-feature-settings: "ss01"` is the closest metric match. *Helvetica Neue* is acceptable for print-adjacent contexts. *Forma DJR* matches the stroke contrast most closely.

## Layout

### Spacing System
- **Base unit**: 4 px. The extracted scale (`4px / 6px / 8px / 12px / 16px / 36px`) maps to a loose 4-base system with a 6 px intermediate for tight inline gaps.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 20 px · `{spacing.2xl}` 24 px · `{spacing.3xl}` 36 px · `{spacing.4xl}` 48 px · `{spacing.5xl}` 64 px · `{spacing.6xl}` 96 px · `{spacing.section}` 128 px.
- **Section rhythm**: the hero band uses generous top/bottom padding in the 36–48 px range; the products band uses 36 px top padding. Inter-section gaps are the primary breathing mechanism.
- **Card interior**: category pill tiles use `10px 55px` native padding (captured as `{spacing.md} {spacing.4xl}` in tokens); standard cards use `{spacing.lg}` to `{spacing.2xl}`.
- **Inline gap**: nav links use `{spacing.lg}` horizontal padding; icon buttons use `{spacing.sm}` pad.

### Grid & Container
- **Max width**: approximately 1400 px; content centres with `{spacing.lg}` horizontal gutters on desktop.
- **Column patterns**:
  - Hero band: 2-column split — left third for headline/CTA copy, right two-thirds for product photography.
  - Category grid ("Our Products"): 6-up icon row at desktop, scaling down at mobile.
  - Hero carousel: full-width single carousel with pagination dots and previous/next arrow controls.

### Whitespace Philosophy
HP uses whitespace conservatively — the hero is dense with product imagery, not open space. Sections divide visually through background color changes (white hero → gray products band) rather than through large vertical gaps. The inner card tiles pack closely together. The page reads as a retail shelf — generous in imagery, tight in structural spacing — rather than an editorial publication with dramatic margins.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero bands, nav bar, footer. |
| Level 1 — Overlay Card | `rgba(255,255,255,0.6)` fill with no shadow. | Category pill tiles sitting over hero photography — depth through translucency, not shadow. |
| Level 2 — Hairline Card | 1 px solid `{colors.hairline}` border, no shadow. | Product listing cards, form inputs. |
| Level 3 — Subtle Drop | `0 2px 8px rgba(0,0,0,0.08)`. | Dropdown nav menus, tooltip panels. |
| Level 4 — Modal | `0 4px 24px rgba(0,0,0,0.12)`. | Modal dialogs, cart drawers. |

The brand relies on translucency and background-color banding rather than shadow-based elevation. Cards sit on surfaces through hairline borders or background contrast, not through drop-shadow depth. The category pill tiles achieve their "floating" quality through the semi-transparent white fill over photography, not through any shadow system.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Primary CTA buttons ("Shop"), nav icon buttons — the flat-corner retail convention. |
| `{rounded.xs}` | 4px | Micro-corner rounding on inline badges or tags. |
| `{rounded.sm}` | 6px | Form inputs, secondary compact buttons. |
| `{rounded.md}` | 8px | Standard content cards, modal dialogs. |
| `{rounded.lg}` | 12px | Larger content cards, panel containers. |
| `{rounded.xl}` | 24px | Rounded section containers. |
| `{rounded.card-pill}` | 74px | The brand-signature super-pill shape used for category navigator tiles — the most distinctive geometric element on the page. Measured directly from the live extraction. |
| `{rounded.full}` | 9999px | Carousel pagination dots, icon badge counters. |

### Photography Geometry
- **Hero photography**: product shots on white background, no border-radius applied, spanning approximately two-thirds of the hero column at desktop.
- **Category tiles**: translucent super-pill overlays (`{rounded.card-pill}` 74 px) containing category label text — the pill shape is the frame.
- **Carousel controls**: arrow buttons (prev/next) and dot pagination indicators use `{rounded.full}` circular containment.

## Components

### Navigation

**`nav-bar`** — the sticky white top navigation.
- Background `{colors.nav-bg}`, text `{colors.ink}`, height 56 px, padding `{spacing.sm} {spacing.lg}`. Layout: HP logo left, category link row centre, search/cart/account icon cluster right. Hairline bottom border separates nav from page content.

**`nav-logo`** — the HP shield mark in the top-left.
- Rendered in `{colors.hp-blue}` as an SVG icon at approximately 32 × 32 px. The single chromatic element in the nav.

**`nav-link`** — the category links (Laptops, Desktops, Printers, Accessories, Subscriptions, Business Solutions, Support).
- Text `{colors.body}`, set in `{typography.body-md}`, horizontal padding `{spacing.lg}`. No border-radius visible in active state from this viewport.

**`nav-icon-button`** — the search, cart, and account icons in the nav right cluster.
- Background `{colors.canvas}`, icon in `{colors.ink}`, no border-radius (`{rounded.none}`), padding `{spacing.sm}`.

### Buttons

**`button-primary`** — the brand's transactional CTA (the "Shop" button in the hero).
- Background `{colors.primary}` HP blue, text `{colors.on-primary}` white, label in `{typography.button-lg}` 16 px / 700, shape `{rounded.none}` — flat square corners. Padding `{spacing.sm} {spacing.2xl}`. The flat corner is deliberate retail convention.

**`button-secondary`** — white button with dark border for secondary actions.
- Background `{colors.canvas}`, text `{colors.ink}`, border `{colors.ink}`, same typography and flat shape as `button-primary`.

**`button-ghost`** — low-priority text-action (carousel controls, link-style CTAs).
- Background `transparent`, text `{colors.body}`, label in `{typography.button-md}`, no border, no radius.

### Hero & Carousel

**`hero-band`** — the full-width two-column hero carousel.
- Background `{colors.canvas-hero}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.3xl}`. Left column: headline + subheadline + body + CTA. Right column: product photography.

**`hero-headline`** — the large sale/promo headline ("4th of July Sale").
- Set in `{typography.display-xl}` 56 px / 700 / normal tracking.

**`hero-subheadline`** — the bold supporting statement ("Save up to 71% on select products and get free shipping.").
- Set in `{typography.body-md-strong}` 16 px / 700.

**`hero-body`** — the secondary support copy ("Protect your brand-new PC and save 30%...").
- Set in `{typography.body-md}` 16 px / 400, color `{colors.body}`.

**`hero-carousel-indicator`** — the dot + dash pagination below the hero.
- Active indicator: elongated dash in `{colors.ink}`; inactive dots in `{colors.hairline}`; shape `{rounded.full}`.

### Product Grid

**`category-card`** — the super-pill translucent category navigator tile (the brand's most distinctive component).
- Background `{colors.card-overlay}` (`rgba(255,255,255,0.6)`), text `{colors.ink}`, label in `{typography.display-md}`, shape `{rounded.card-pill}` 74 px, padding `{spacing.md} {spacing.4xl}`. Used in the category nav row sitting over hero imagery or on the canvas-soft band.

**`products-band`** — the "Our Products" gray section below the hero.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, section headline in `{typography.display-md}`, padding `{spacing.3xl} {spacing.lg}`.

**`section-headline`** — section-level headings ("Our Products").
- Set in `{typography.display-md}` 24 px / 700, color `{colors.ink}`.

### Utility

**`link-inline`** — body-copy inline links.
- Text `{colors.link}` HP blue, set in `{typography.body-md}`, underlined on hover.

**`badge`** — small metadata pill (sale %, "New", status labels).
- Background `{colors.canvas-soft}`, text `{colors.body}`, set in `{typography.caption}`, shape `{rounded.full}`, padding `0px {spacing.sm}`.

**`footer`** — the bottom navigation and legal band.
- Background `{colors.footer-bg}`, text `{colors.body}`, set in `{typography.body-sm}`, padding `{spacing.3xl} {spacing.lg}`.

## Do's and Don'ts

### Do
- Reserve `{colors.hp-blue}` (`#0096d6`) for the HP logo and primary CTA buttons only — it is the brand's single chromatic accent and loses meaning if overused.
- Use `{rounded.none}` for primary transactional buttons. The flat-corner "Shop" button is a deliberate retail signal — rounding it to a pill changes the register from commercial to playful.
- Use `{rounded.card-pill}` 74 px exclusively for category navigator tiles. The super-pill is the brand's decorative signature; applying it to generic content cards dilutes the effect.
- Keep type weight to 400 (body) and 700 (display/button) only. The system has no 500 or 600 weight; adding intermediate weights fragments the clean retail voice.
- Set display headlines at normal letter-spacing — the brand's approachable warmth comes from standard tracking, not compressed negative-tracking.
- Use background-color banding (white → gray → white) as the primary section-separation device; shadow-based depth is reserved for overlays and modals only.
- Render the HP logo mark in `{colors.hp-blue}` at all times — it should never appear in black or gray.

### Don't
- Don't apply `{rounded.card-pill}` 74 px to standard content cards, buttons, or form inputs. That radius belongs to the category tile system only.
- Don't introduce a second accent color. The brand operates with hp-blue + ink + gray; additional hues flatten the focused retail voice.
- Don't round the primary CTA button. A pill-shaped "Shop" button misreads as a social-media UI, not a retail transaction trigger.
- Don't set body paragraphs in bold (700). The weight distinction between 400 body and 700 display is the entire hierarchy system; collapsing it makes the page feel uniformly heavy.
- Don't apply negative letter-spacing to any text. Normal tracking at every size is a brand constraint.
- Don't use the semi-transparent card overlay (`{colors.card-overlay}`) on solid white backgrounds — the translucency is only meaningful over photographic content.
- Don't introduce a monospaced or condensed face. HP Simplified is the only face in the system.
