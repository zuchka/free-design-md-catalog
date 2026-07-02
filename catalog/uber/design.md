---
version: alpha
name: Uber
description: "Uber's design language is a study in controlled contrasts — a pitch-black navigation bar and bold black CTAs punched against an almost-clinical white page body, with the brand's proprietary UberMove typeface doing the heavy visual lifting in the absence of any decorative gradient or illustration system. The surface is sparse by design: no brand color accent competes with the functional black-and-white duet, and the only visual relief comes from photography, service-category iconography, and the hard pill geometry of every interactive element."
colors:
  primary: "#000000"
  on-primary: "#ffffff"
  ink: "#000000"
  body: "#000000"
  mute: "#6b6b6b"
  hairline: "#e2e2e2"
  canvas: "#ffffff"
  canvas-soft: "#f3f3f3"
  canvas-overlay: rgba(255, 255, 255, 0.2)
  nav-bg: "#000000"
  nav-text: "#ffffff"
  badge-promo: "#ff0000"
  badge-promo-text: "#ffffff"
  link: "#000000"
  link-underline: "#000000"
  success: "#108000"
  error: "#c0392b"
  warning: "#f5a623"
typography:
  display-xl:
    fontFamily: UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 52px
    fontWeight: 700
    lineHeight: 64px
    letterSpacing: 0px
  display-lg:
    fontFamily: UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 36px
    fontWeight: 700
    lineHeight: 44px
    letterSpacing: 0px
  display-md:
    fontFamily: UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 32px
    letterSpacing: 0px
  display-sm:
    fontFamily: UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 20px
    fontWeight: 700
    lineHeight: 28px
    letterSpacing: 0px
  body-lg:
    fontFamily: UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
  caption:
    fontFamily: UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
  button-lg:
    fontFamily: UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
rounded:
  none: 0px
  sm: 8px
  md: 16px
  lg: 24px
  card: 16px
  button: 999px
  pill: 999px
  full: 999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 36px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  section: 128px
components:
  nav-bar:
    backgroundColor: "{colors.nav-bg}"
    textColor: "{colors.nav-text}"
    typography: "{typography.body-sm}"
    height: 56px
    padding: "{spacing.xs} {spacing.lg}"
  nav-link:
    textColor: "{colors.nav-text}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-signup:
    backgroundColor: "{colors.on-primary}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
    height: 36px
  nav-cta-login:
    backgroundColor: "{colors.nav-bg}"
    textColor: "{colors.nav-text}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
    height: 36px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    padding: 0px
    rounded: "{rounded.button}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.3xl} {spacing.lg}"
  form-input:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
    height: 48px
  form-input-location:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.md}"
    height: 52px
  pickup-time-selector:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
  service-category-chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
  service-category-card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.md} {spacing.sm}"
  badge-promo:
    backgroundColor: "{colors.badge-promo}"
    textColor: "{colors.badge-promo-text}"
    typography: "{typography.caption}"
    rounded: "{rounded.button}"
    padding: 2px {spacing.xs}
  card-marketing:
    backgroundColor: "{colors.canvas-overlay}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.md} {spacing.sm}"
  hero-image-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-sm}"
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.nav-text}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.lg}"
  location-label:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.caption}"
    padding: 0px {spacing.xs}
  ex-pricing-tier:
    description: Default service tier card. White canvas surface with hairline border, used for ride-type selection.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
  ex-pricing-tier-featured:
    description: Featured / highlighted tier — polarity-flipped to black fill with white text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
  ex-product-selector:
    description: Service-type summary card — used for Ride / Reserve / Airport / Black tier selection flows.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
  ex-cart-drawer:
    description: Ride summary panel — line items for pickup, drop-off, and estimated price.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row inside the app shell. Active state uses brand primary as a left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: Trip history data table. Header uses bold body-sm; rows use body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.body-sm-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in card — canvas surface with pill inputs and a black CTA pill inside.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog — white canvas, card radius, soft drop shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame — canvas-soft fill, generous padding for illustration area.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — white surface, card radius, brief body-sm copy.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Uber's visual language is a deliberate reduction exercise: strip every accent, every gradient, every decorative surface until only function remains. The result is a hard black-and-white system where the jet-black navigation bar (`{colors.nav-bg}`) is the brand's loudest visual statement, set against a white or near-white page body with no competing hues. There is no signature brand color beyond black and white — the only exception is the promotional red badge (`{colors.badge-promo}`) that flags discounts on specific service tiles.

The proprietary typeface — UberMove for headings, with UberMoveText as the text-body companion — carries nearly all the brand personality. Headlines are dense and uppercase-free at 700 weight, set without letter-spacing adjustment; the large hero headline at 52 px and 64 px line height is the dominant decorative element on any page. Every interactive surface — buttons, inputs, time selectors, pickup chips — uses the same hard 999 px pill radius, giving the page a consistent rounded vocabulary that contrasts with the square-cornered photography.

Photography does the color work the palette refuses to do. The hero image is a full-bleed photograph on the right half of the viewport; service-category tiles are illustrated with playful 3-D rendered icons, each on a soft `{colors.canvas-soft}` background. The card chrome is minimal — a 16 px radius, no shadow, no border other than a hairline where distinction is needed. Elevation is nearly absent from the marketing surface; the page reads flat and direct, matching the utility-first brand posture.

Form interactions are the most opinionated surface: location inputs use a rounded-rectangle container (`{rounded.md}` 16 px, not pill-shaped) to signal that they accept typed content, while the action button that accompanies them ("See prices") is a solid black pill — the clearest conversion target on the page.

## Colors

### Brand
- **Primary / Ink** (`{colors.primary}` — `#000000`): The entire brand CTA system — "See prices" button, "Sign up" pill in nav, footer background. Black IS the brand.
- **On-Primary / Canvas** (`{colors.on-primary}` — `#ffffff`): Text on all black surfaces; also the default page body background.
- **Nav Background** (`{colors.nav-bg}` — `#000000`): The sticky top navigation. Black bar extends edge-to-edge; white text and white logo sit on it.
- **Nav Text** (`{colors.nav-text}` — `#ffffff`): All text and links inside the black nav bar.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The main page body and card surfaces.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f3f3f3`): Input field backgrounds, service-category tile backgrounds, inset regions.
- **Canvas Overlay** (`{colors.canvas-overlay}` — `rgba(255,255,255,0.2)`): Translucent card overlaid on photography — used in the hero image caption card.

### Text
- **Ink** (`{colors.ink}` — `#000000`): All headings and body copy on light surfaces.
- **Mute** (`{colors.mute}` — `#6b6b6b`): Placeholder text in location inputs; secondary captions; location city label.
- **Hairline** (`{colors.hairline}` — `#e2e2e2`): Row dividers, input borders, card separators.

### Accent & Semantic
- **Badge Promo** (`{colors.badge-promo}` — `#ff0000`): The red "Promo" badge overlaid on the Rental Cars service tile. The only non-neutral hue on the page.
- **Badge Promo Text** (`{colors.badge-promo-text}` — `#ffffff`): White label on the red promo badge.
- **Link** (`{colors.link}` — `#000000`): Inline links ("Change city", "Log in to see your recent activity") are set in black with an underline — the only typographic link treatment visible.
- **Success** (`{colors.success}` — `#108000`): Not visible in hero view but present in form validation states.
- **Error** (`{colors.error}` — `#c0392b`): Destructive actions and form-error states.

## Typography

### Font Family
A single proprietary family does all the work: **UberMove** for display and headings, **UberMoveText** as its text-companion variant for body copy and labels. No monospaced face appears anywhere on the marketing surface. The fallback stack is `system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif` — the brand's rendering degrades gracefully to system sans-serif on any device that lacks the custom face.

Weight usage is disciplined: 700 for every heading and every button label; 400 for all body copy. There is no 500 or 600 step in use — the brand reads bold-or-not, with no intermediate weight.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 52px | 700 | 64px | 0 | Hero headline ("Go anywhere with Uber"). |
| `{typography.display-lg}` | 36px | 700 | 44px | 0 | Section headlines for marketing bands. |
| `{typography.display-md}` | 24px | 700 | 32px | 0 | Card cluster headlines, feature-section titles. |
| `{typography.display-sm}` | 20px | 700 | 28px | 0 | Inline micro-headings, tier names. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Lead paragraphs under section headlines. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body copy. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Nav links, service-tile labels, secondary captions. |
| `{typography.body-sm-strong}` | 14px | 700 | 20px | 0 | Button labels, bold inline callouts. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Badge labels, fine print, promo pill text. |
| `{typography.button-md}` | 14px | 700 | 20px | 0 | Primary and nav-scale button labels. |
| `{typography.button-lg}` | 16px | 700 | 24px | 0 | Larger marketing-context button labels. |

### Principles
- **Zero letter-spacing.** Unlike brands that use negative tracking at display scale, Uber's UberMove is set at default tracking even at 52 px. The face's proportions are designed to read tight without adjustment.
- **Bold or regular — nothing in between.** The brand uses 700 for display and UI actions, 400 for body. There is no medium weight in the visible stack.
- **No uppercase transformation.** Headlines and buttons are sentence-case or title-case; no all-caps labels appear on the marketing surface.
- **Single face for the entire system.** UberMove/UberMoveText handles everything from the 52 px hero to the 12 px badge — there is no separate display face, no mono face.

### Note on Font Substitutes
UberMove is proprietary. Open-source substitutes:
- **Display + body**: *Inter* (700 / 400) at these same sizes is the closest neutral-grotesque match. *DM Sans* is a slightly warmer alternative.

## Layout

### Spacing System
- **Base unit**: 4 px. The full extracted spacing scale aligns to 4 px multiples throughout.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 36 px · `{spacing.2xl}` 48 px · `{spacing.3xl}` 64 px · `{spacing.4xl}` 96 px · `{spacing.section}` 128 px.
- **Section padding**: marketing bands use `{spacing.3xl}` 64 px top/bottom. The hero band sits at `{spacing.3xl}` to give the photograph space.
- **Card interior padding**: service-category cards use `{spacing.md}` 16 px × `{spacing.sm}` 12 px; marketing overlay cards match the extracted 16 × 12 px rhythm.
- **Inline gaps**: form fields in the location-entry cluster use `{spacing.xs}` 8 px between siblings; nav link clusters use `{spacing.sm}` 12 px.

### Grid & Container
- **Split-hero layout**: the hero section is a two-column split — form/copy left, full-height photograph right. The photograph fills approximately 55% of the viewport width.
- **Service-category row**: a single horizontal scrolling row of icon + label tiles below the hero, each tile roughly 72–80 px wide.
- **Max container**: appears to max out around 1200 px centred; horizontal gutters use `{spacing.lg}` 24 px on desktop.
- **Mobile**: hero stacks vertically, photograph moves below the form; nav collapses to logo + hamburger.

### Whitespace Philosophy
The page reads airy for a utility product — large gaps between the nav and the hero headline, and generous internal padding inside the location-entry form cluster. Whitespace is used to separate the functional form area from the surrounding page rather than to create decorative breathing room. The black nav bar acts as a hard visual anchor at the top; everything else floats on white.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero photograph; black nav bar; footer band. |
| Level 1 — Hairline | 1 px solid `{colors.hairline}` border. | Location input fields, form containers; distinguishes interactive fields from the white page body. |
| Level 2 — Soft Card | `{rounded.card}` 16 px, no shadow, `{colors.canvas-soft}` fill. | Service-category tiles; distinguishes tile from white canvas without elevation. |
| Level 3 — Overlay Card | `rgba(255,255,255,0.2)` background on photograph. | Hero image caption card ("Everything you need to cheer with your city") — floats on top of photography with translucent fill. |

The brand uses no multi-offset stacked shadows on the marketing surface. All depth is achieved through surface-color contrast (black bar, white body, soft-gray tile) rather than shadow. The flatness is intentional — the brand looks like a dashboard, not a storefront.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed photography edges; footer band. |
| `{rounded.sm}` | 8px | Tight UI elements in dense contexts. |
| `{rounded.md}` | 16px | Location input fields — the only rounded-rectangle (non-pill) interactive element on the hero. |
| `{rounded.card}` | 16px | Service-category tiles, marketing cards, hero overlay caption card. |
| `{rounded.lg}` | 24px | Large card chrome where image-capped cards need more rounding. |
| `{rounded.button}` | 999px | Every CTA button, nav action pill, "Pickup now" selector, "See prices" primary CTA. The universal interactive shape. |
| `{rounded.pill}` | 999px | Promo badge, time-selector pill, any pill-shaped non-button element. |
| `{rounded.full}` | 999px | Icon-button circular containers. |

The brand's most visible design decision: **a single 999 px pill governs every button and pill-shaped element on the page**, while a separate 16 px radius governs every card and every text-input field. These two radii never mix on the same component.

## Components

### Buttons

**`button-primary`** — the canonical black pill CTA ("See prices").
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}` 14 px / 700, shape `{rounded.button}` 999 px, padding `{spacing.xs} {spacing.sm}`.

**`button-secondary`** — a white or outlined pill for secondary actions.
- Background `{colors.canvas}`, text `{colors.primary}`, 1 px `{colors.hairline}` border, same typography + shape as `button-primary`.

**`button-ghost`** — the text-only link-style action ("Log in to see your recent activity").
- No background, text `{colors.primary}`, set in `{typography.body-sm}`, underlined. No border, no radius.

### Navigation

**`nav-bar`** — the sticky black top bar.
- Background `{colors.nav-bg}`, text `{colors.nav-text}`, height 56 px, padding `{spacing.xs} {spacing.lg}`. Layout: white Uber logo left; "Ride / Earn / Business / Uber Eats / About" links in the centre row; "EN / Help / Log in / Sign up" cluster right.

**`nav-link`** — links inside the black nav.
- Text `{colors.nav-text}`, set in `{typography.body-sm}` 14 px / 400, padding `{spacing.xs} {spacing.sm}`. Dropdown-capable links show a chevron.

**`nav-cta-signup`** — the white pill "Sign up" button in the nav.
- Background `{colors.on-primary}`, text `{colors.primary}`, label `{typography.button-md}`, shape `{rounded.button}` 999 px, height 36 px.

**`nav-cta-login`** — the ghost "Log in" link in the nav.
- Background `{colors.nav-bg}`, text `{colors.nav-text}`, label `{typography.button-md}`, shape `{rounded.button}`.

### Form & Inputs

**`form-input-location`** — the pickup and drop-off location text fields.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, placeholder in `{colors.mute}`, border 1 px `{colors.hairline}`, body in `{typography.body-md}`, shape `{rounded.md}` 16 px, height 52 px, padding `{spacing.xs} {spacing.md}`. Paired vertically with a connecting dot-line between pickup and drop-off fields.

**`pickup-time-selector`** — the "Pickup now" pill toggle above the location form.
- Background `{colors.canvas}`, text `{colors.ink}`, label `{typography.body-sm-strong}`, border 1 px `{colors.hairline}`, shape `{rounded.button}` 999 px, padding `{spacing.xs} {spacing.sm}`.

### Cards & Surfaces

**`hero-band`** — the split-layout hero section.
- Background `{colors.canvas}`, text `{colors.ink}`, headline in `{typography.display-xl}`, padding `{spacing.3xl} {spacing.lg}`. Left column: location+time form above the headline; right column: full-height photograph.

**`card-marketing`** — the translucent caption card overlaid on the hero photograph.
- Background `{colors.canvas-overlay}`, text `{colors.ink}`, body in `{typography.body-md}`, shape `{rounded.card}` 16 px, padding `{spacing.md} {spacing.sm}`.

**`service-category-card`** — the horizontal-scroll service tile row ("Ride / Reserve / Airport / Black / Rental Cars / Courier / Seniors / Black SUV / Food").
- Background `{colors.canvas-soft}`, text `{colors.ink}`, label in `{typography.body-sm}`, shape `{rounded.card}` 16 px, padding `{spacing.md} {spacing.sm}`. Hosts a 3-D illustrated icon above the label.

**`badge-promo`** — the red "Promo" badge overlaid on the Rental Cars service tile.
- Background `{colors.badge-promo}`, text `{colors.badge-promo-text}`, label in `{typography.caption}`, shape `{rounded.pill}` 999 px, padding `2px {spacing.xs}`.

**`location-label`** — the "Palm Springs, US / Change city" location indicator above the hero headline.
- Text `{colors.ink}` / `{colors.mute}`, body in `{typography.body-sm}`. The "Change city" link is underlined inline.

**`link-inline`** — inline body-copy links.
- Text `{colors.link}`, body in `{typography.body-sm}`, underlined.

**`footer`** — the black footer band.
- Background `{colors.primary}`, text `{colors.nav-text}`, body in `{typography.body-sm}`, padding `{spacing.3xl} {spacing.lg}`.

## Do's and Don'ts

### Do
- Keep every button and pill element at `{rounded.button}` 999 px. The pill is the brand's single interactive shape.
- Keep every card and input field at `{rounded.card}` 16 px. The two radii — 999 px pill and 16 px card — are the entire shape vocabulary.
- Set all headings in UberMove weight 700, sentence-case, zero letter-spacing. The typeface is designed to be tight; do not add negative tracking.
- Use `{colors.primary}` black for every primary CTA. There is no accent colour to promote — black IS the conversion signal.
- Use photography and illustrated 3-D icons as the sole decorative layer. The palette itself carries no decoration.
- Keep the black nav bar as the page's only full-bleed black band above the fold; it anchors the entire surface.

### Don't
- Don't introduce a brand accent color. The brand operates on black / white / gray + photography; a new accent colour breaks the utility-first voice.
- Don't apply the 999 px pill radius to card containers or input fields. Cards are 16 px radius only.
- Don't add drop-shadows to cards or buttons. The brand is intentionally flat — depth comes from surface contrast, not elevation.
- Don't set body copy at weight 700. Bold weight is reserved exclusively for headings and button labels.
- Don't use the translucent overlay card (`{colors.canvas-overlay}`) outside of a photographic backdrop — it only makes sense on top of imagery.
- Don't set button labels in 400 weight. Every button label is 700 — there is no soft button in the system.
