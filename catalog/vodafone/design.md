---
version: alpha
name: Vodafone
description: "A global telecommunications brand that earns its authority through restraint and scale: the Vodafone speechmark red is deployed with surgical precision — one logo, one CTA, one stat-highlight — while the rest of the surface stays in near-black ink on pure white. Hero headlines explode at fluid clamp sizes with a custom proprietary sans cut at weight 800 and tight -1px tracking, all-uppercase, filling the full viewport width like a broadcast. The decoration system is photography — full-bleed cinematic human portraits — not gradient or illustration. Red is never background; red is always signal."

colors:
  primary: "#e60000"
  on-primary: "#ffffff"
  ink: "#25282b"
  body: "#25282b"
  body-secondary: "#7e7e7e"
  on-dark: "#ffffff"
  hairline: "#d9d9d9"
  canvas: "#ffffff"
  canvas-card: "#ffffff"
  canvas-panel: "#ffffff"
  canvas-card-hover: "#25282b"
  canvas-dark: "#25282b"
  stats-accent: "#e60000"
  orange: "#eb6100"
  yellow: "#fecb00"
  teal: "#00697c"
  plum: "#5e2750"
  purple: "#9c2aa0"
  green: "#008a00"
  error: "#bd0000"
  utility-overlay: "#000000cc"
  display: "#25282b"
  quote: "#25282b"
  pictogram: "#25282b"

typography:
  display-hero:
    fontFamily: "Vodafone, Arial, Helvetica, sans-serif"
    fontSize: "clamp(4.8rem, 1.3585rem + 9.0566vw, 14.4rem)"
    fontWeight: 800
    lineHeight: "clamp(6rem, 3.7774rem + 5.8491vw, 12.2rem)"
    letterSpacing: "-1px"
  display-xl:
    fontFamily: "Vodafone, Arial, Helvetica, sans-serif"
    fontSize: 115px
    fontWeight: 800
    lineHeight: 105px
    letterSpacing: "-1px"
  display-lg:
    fontFamily: "Vodafone, Arial, Helvetica, sans-serif"
    fontSize: 64px
    fontWeight: 800
    lineHeight: 72px
    letterSpacing: "-1px"
  display-md:
    fontFamily: "Vodafone, Arial, Helvetica, sans-serif"
    fontSize: 40px
    fontWeight: 800
    lineHeight: 48px
    letterSpacing: "-1px"
  display-sm:
    fontFamily: "Vodafone, Arial, Helvetica, sans-serif"
    fontSize: 24px
    fontWeight: 800
    lineHeight: 32px
    letterSpacing: "normal"
  body-lg:
    fontFamily: "Vodafone, Arial, Helvetica, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 30px
  body-md:
    fontFamily: "Vodafone, Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: "Vodafone, Arial, Helvetica, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  caption:
    fontFamily: "Vodafone, Arial, Helvetica, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  label:
    fontFamily: "Vodafone, Arial, Helvetica, sans-serif"
    fontSize: 19px
    fontWeight: 800
    lineHeight: 25px
    letterSpacing: "normal"
  button-md:
    fontFamily: "Vodafone, Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 800
    lineHeight: 24px
  button-lg:
    fontFamily: "Vodafone, Arial, Helvetica, sans-serif"
    fontSize: 24px
    fontWeight: 800
    lineHeight: 32px
  nav-link:
    fontFamily: "Vodafone, Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px

rounded:
  none: "0px"
  xs: "4px"
  sm: "6px"
  md: "12px"
  lg: "24px"
  xl: "40px"
  xxl: "60px"
  full: "9999px"

spacing:
  xxs: "4px"
  xs: "8px"
  sm: "11px"
  md: "16px"
  lg: "23px"
  xl: "30px"
  2xl: "44px"
  3xl: "59px"
  4xl: "89px"
  5xl: "120px"
  section: "160px"

components:
  utility-bar:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.lg}"

  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: "80px"
    padding: "{spacing.xs} {spacing.lg}"
    borderBottom: "1px solid {colors.hairline}"

  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "{spacing.xs} {spacing.md}"

  nav-search-icon:
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"

  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.lg}"

  button-primary-lg:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.xl}"

  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.lg}"
    borderColor: "{colors.ink}"

  button-ghost-dark:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.lg}"
    borderColor: "{colors.on-dark}"

  hero-band:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-hero}"
    padding: "{spacing.4xl} {spacing.lg}"

  hero-headline-outline:
    textColor: "transparent"
    typography: "{typography.display-hero}"
    description: "First line of the hero headline rendered as outline/stroke text — white stroke on dark photographic backdrop."

  hero-headline-filled:
    textColor: "{colors.on-dark}"
    typography: "{typography.display-hero}"
    description: "Second line of the hero headline rendered as solid white fill — uppercase, full-bleed width."

  hero-body-quote:
    textColor: "{colors.on-dark}"
    typography: "{typography.body-lg}"
    padding: "{spacing.md} {spacing.lg}"
    description: "Lead paragraph beneath hero headline, set off by a left-edge white vertical rule / border-left treatment."

  card-marketing:
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"

  card-marketing-hover:
    backgroundColor: "{colors.canvas-card-hover}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"

  card-stat:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    accentColor: "{colors.stats-accent}"

  feature-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.lg}"

  feature-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.lg}"

  section-label:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    description: "All-caps or heavy-weight section eyebrow label used above section headlines."

  footer:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.lg}"

  footer-link:
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"

  link-inline:
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"

  badge-utility:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xxs} {spacing.xs}"

  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.md}"
    height: "48px"

  ex-pricing-tier:
    description: "Default content card with ink hover-flip — canvas surface at rest, dark ink surface on hover."
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"

  ex-pricing-tier-featured:
    description: "Featured / highlighted tier — polarity-flipped to canvas-dark surface with on-dark text."
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"

  ex-product-selector:
    description: "Topic/category selector card — used for navigating business vs consumer segments."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"

  ex-cart-drawer:
    description: "Subscription or plan summary panel — line items per service, not literal e-commerce cart."
    backgroundColor: "{colors.canvas-panel}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"

  ex-app-shell-row:
    description: "Sidebar or mega-menu nav row. Active state uses brand primary red as left-edge indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.md}"

  ex-data-table-cell:
    description: "Stats or data table — header uses label typography uppercase; body uses body-sm."
    headerBackground: "{colors.canvas-dark}"
    headerTypography: "{typography.label}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"

  ex-auth-form-card:
    description: "Sign-in / register card — flat zero-radius card with form-input primitives inside."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"

  ex-modal-card:
    description: "Modal dialog surface — card-marketing chrome with soft md radius and elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"

  ex-empty-state-card:
    description: "Empty state frame — generous padding on canvas surface with body-lg caption."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-lg}"

  ex-toast:
    description: "Toast notification — flat card with xs radius, body-sm text, ink or primary surface depending on severity."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xs} {spacing.md}"
    typography: "{typography.body-sm}"

---

## Overview

Vodafone's design language operates on a simple, powerful asymmetry: one proprietary typeface, one red, everything else in ink and white. The custom "Vodafone" sans carries every word on the site — from the 115 px hero that fills the entire viewport to the smallest 12 px caption — at weights 400 and 800. There is no midweight, no italic, no decorative face. That constraint gives the system an unusual consistency: you always know you're on a Vodafone surface because the letterforms are invariant.

The hero is the brand's defining gesture. Headlines are set all-uppercase in the custom face at a fluid clamp size that scales from roughly 48 px at mobile to 144 px at ultra-wide. The first line is rendered as an outline/stroke treatment (white stroke, transparent fill) while the second line drops to solid white fill — a typographic trick that layers the letters against the full-bleed portrait photograph behind them without occluding the image entirely. This is the brand's entire decoration system: the photograph IS the background, the type IS the foreground, and no gradient, no illustration, and no colour block intercedes.

Red (`#e60000`) appears exactly where conversion happens — the speechmark logo and the primary CTA button. Everywhere else the palette is near-black ink (`#25282b`) on pure white canvas. The CTA button is deliberately square-cornered (`border-radius: 0`), a conscious departure from the rounded-pill conventions of most consumer tech brands. That zero radius carries authority — this is a telecommunications infrastructure company, not a fintech startup. Card hover states flip polarity: the card surface inverts from white to ink (`#25282b`) with text going white, a confident interaction gesture.

The spacing system is rooted in an 8 px / 11 px dual grid — the 11.3967 px value appearing at high frequency alongside the 8 px standard, suggesting a parallel 4 px base unit with some line-height-derived spacings. Section padding is generous: `89 px` top/bottom on interior bands, `120–160 px` on hero-scale regions, giving the full-bleed photography room to assert itself. The overall effect reads as broadcast media adapted for the web — big, direct, human.

## Colors

### Brand Red
- **Primary** (`{colors.primary}` — `#e60000`): The Vodafone signature red. Used exclusively for the speechmark logo, primary CTA buttons, and stat-highlight numerals. Never used as a surface background at section scale.
- **Error / Deep Red** (`{colors.error}` — `#bd0000`): The pressed / danger variant of the brand red. Used for destructive confirmations and error states.
- **Stats Accent** (`{colors.stats-accent}` — `#e60000`): Same hex as primary; named separately to signal its role as a data-highlight colour in stats modules.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The default page and card surface — pure white.
- **Canvas Card** (`{colors.canvas-card}` — `#ffffff`): Explicit card surface token, mirrors canvas. Cards sit at rest on white.
- **Canvas Card Hover** (`{colors.canvas-card-hover}` — `#25282b`): The polarity-flip ink surface that cards reveal on hover. White text on dark ink — the brand's confident interaction signature.
- **Canvas Panel** (`{colors.canvas-panel}` — `#ffffff`): Panel / drawer surface, matching canvas.
- **Canvas Dark** (`{colors.canvas-dark}` — `#25282b`): The near-black ink surface used for the utility bar, footer, and polarity-flipped content bands.

### Text
- **Ink / Body** (`{colors.ink}` — `#25282b`): Every heading and paragraph on light surfaces. The brand's only "black."
- **Body Secondary** (`{colors.body-secondary}` — `#7e7e7e`): Muted secondary text — captions, disclaimers, supporting copy.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): All text rendered on `{colors.canvas-dark}` surfaces — hero copy, footer links, utility bar.
- **Display** (`{colors.display}` — `#25282b`): Semantic alias for display-scale headline colour on light surfaces.
- **Quote** (`{colors.quote}` — `#25282b`): Pull-quote text colour.
- **Pictogram** (`{colors.pictogram}` — `#25282b`): Icon and pictogram fill on light surfaces.
- **Utility Overlay** (`{colors.utility-overlay}` — `#000000cc`): Semi-transparent black used for overlays, scrim layers behind modals and drawers.

### Secondary Palette
The CSS custom properties expose a full secondary palette used across sub-brands and category indicators:
- **Orange** (`{colors.orange}` — `#eb6100`): Secondary-3, used for product-category labelling and alert states.
- **Yellow** (`{colors.yellow}` — `#fecb00`): Secondary-4, used for warning indicators and category highlights.
- **Teal** (`{colors.teal}` — `#00697c`): Secondary-1, used for sustainability and environment-related content.
- **Plum** (`{colors.plum}` — `#5e2750`): Secondary-2, used for Vodafone Foundation and social impact content.
- **Purple** (`{colors.purple}` — `#9c2aa0`): Secondary-6, used for innovation / technology-forward content areas.
- **Green** (`{colors.green}` — `#008a00`): Secondary-5, used for positive status indicators and eco-content.
- **Hairline** (`{colors.hairline}` — `#d9d9d9`): Dividers, card borders, input strokes.

## Typography

### Font Family
The entire site runs on a single proprietary face: **Vodafone** (a custom geometric humanist sans commissioned for the brand). It appears at two weights only: 400 (body) and 800 (display, buttons, labels). There is no 500, no 600, no 700. The absence of intermediate weights is deliberate — it creates a high-contrast typographic rhythm between display and body that reads at broadcast scale.

Open-source substitutes: *Nunito* (800 weight) is the closest geometric with comparable width for display; *Roboto* 400 works as a body substitute. Neither is a precise match — the proprietary face has distinctive letterform details not found in free alternatives.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-hero}` | clamp(4.8rem → 14.4rem) | 800 | clamp(6rem → 12.2rem) | -1px | Full-viewport hero headline. Fluid, all-caps, outline + fill split. |
| `{typography.display-xl}` | 115px | 800 | 105px | -1px | Large display at fixed hero scale when fluid clamp is not used. |
| `{typography.display-lg}` | 64px | 800 | 72px | -1px | Section headlines — "Our purpose", "Our company". |
| `{typography.display-md}` | 40px | 800 | 48px | -1px | Card cluster headlines, stats numbers. |
| `{typography.display-sm}` | 24px | 800 | 32px | normal | Sub-section headings, card titles. |
| `{typography.body-lg}` | 20px | 400 | 30px | — | Lead paragraphs — the hero body quote beneath the headline. |
| `{typography.body-md}` | 16px | 400 | 24px | — | Default body paragraph, card body text. |
| `{typography.body-sm}` | 14px | 400 | 20px | — | Secondary body, footer links, nav utility text. |
| `{typography.caption}` | 12px | 400 | 16px | — | Fine print, legal disclaimers, badge labels. |
| `{typography.label}` | 19px | 800 | 25px | normal | Section eyebrow labels and h3-level sub-headings. |
| `{typography.button-md}` | 16px | 800 | 24px | — | Standard CTA button label. |
| `{typography.button-lg}` | 24px | 800 | 32px | — | Hero-scale CTA label ("OUR PURPOSE →"). |
| `{typography.nav-link}` | 16px | 400 | 24px | — | Primary nav link text. |

### Principles
- **All-caps at display scale.** Hero headlines ("EVERYONE. / CONNECTED") are always all-uppercase. This is not optional — it is the brand's broadcast voice.
- **Outline + fill split is the hero device.** First line outline/stroke, second line solid fill. Do not render both lines as solid fill; the outline treatment is the distinctive visual signature.
- **-1px tracking at display.** All display tokens carry a -1px letter-spacing. At 115 px scale this is barely perceptible, but it tightens the letterforms into a dense block. Never letter-space positively at display sizes.
- **Weight 800 only for emphasis.** Buttons, headlines, labels. Body and secondary copy stay at weight 400. The binary contrast is the system.
- **No italic, no oblique.** The Vodafone face is used upright at all times in the captured surfaces.

## Layout

### Spacing System
- **Base unit**: 4 px, with an overlapping 8 px / 11.4 px dual grid derived from line-height cascades.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 11 px · `{spacing.md}` 16 px · `{spacing.lg}` 23 px · `{spacing.xl}` 30 px · `{spacing.2xl}` 44 px · `{spacing.3xl}` 59 px · `{spacing.4xl}` 89 px · `{spacing.5xl}` 120 px · `{spacing.section}` 160 px.
- **Section padding**: interior content bands use `{spacing.4xl}` (89 px) top/bottom. Hero-scale bands use `{spacing.5xl}` to `{spacing.section}` to give photography room to breathe.
- **Card interior**: `{spacing.lg}` (23 px) default; tighter at `{spacing.md}` for dense grids.
- **Inline gap**: nav link rows and button clusters use `{spacing.xs}` to `{spacing.md}` between siblings.

### Grid & Container
- **Max width**: approximately 1280–1400 px; content centres with horizontal gutters of `{spacing.lg}` on desktop, `{spacing.md}` on mobile.
- **Column patterns**:
  - Hero: full-bleed photograph with overlaid type — no column grid, the type wraps to the viewport.
  - Feature card row: 3-up or 4-up at desktop, collapsing to 1-up at mobile.
  - Stats band: 2-up or 3-up stat cards with a left-side red numeral.
  - Utility bar: single full-width row with right-aligned subsidiary nav links.

### Whitespace Philosophy
Photography IS the whitespace equivalent. The full-bleed hero portrait commands the entire viewport — no padding squeezes it, no container clips it. Interior sections use generous vertical spacing so the page breathes between discrete content blocks. Cards are square-cornered and flush-edged; their breathing room comes from the grid gutter, not interior padding inflation. The overall cadence is: large open bands, tight cards within them.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 600px | Hero type scales down to 4.8rem minimum; nav collapses to hamburger; card grids drop to 1-up. |
| Tablet | 600–960px | 2-up card grids; nav remains horizontal with fewer visible links. |
| Desktop | 960–1280px | Full 3-up / 4-up card grids; hero at full fluid scale. |
| Wide | ≥ 1280px | Container caps; hero type approaches 14.4rem maximum. |

#### Touch Targets
The primary CTA button ("OUR PURPOSE →") renders at approximately 48 px tall — meeting WCAG minimum touch target at all breakpoints. Square-cornered buttons inflate their tap area via padding rather than radius increase.

#### Collapsing Strategy
- **Nav**: full horizontal link row at desktop; hamburger menu at mobile.
- **Hero**: photography stays full-bleed at all breakpoints; type scales fluidly via clamp; outline/fill headline split is preserved at all sizes.
- **Card grids**: 4-up → 2-up → 1-up; zero-radius cards maintain their shape.
- **Stats band**: 3-up → 1-up; red numeral accent is always preserved.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero photography bands and footer. |
| Level 1 — Hairline | `0 0 0 1px {colors.hairline}` border. | Default card chrome on white canvas — the edge that separates card from page. |
| Level 2 — Subtle Drop | `0px 2px 8px rgba(0,0,0,0.08)` | Slightly elevated interactive cards on hover states. |
| Level 3 — Panel | `0px 4px 16px rgba(0,0,0,0.12)` | Mega-menu / dropdown panel surfaces. |
| Level 4 — Modal | `0px 8px 32px rgba(0,0,0,0.16)` | Modal dialog and drawer surfaces. |

The brand favours surface-colour contrast (white card / ink hover-flip) as its primary depth cue rather than shadow layering. Shadows are used sparingly — when they appear, they are single-offset, not stacked. The polarity-flip hover interaction is the brand's distinctive elevation gesture.

### Decorative Depth
- **Full-bleed photography as atmospheric backdrop**: the hero portrait occupies 100 vw × 100 vh; type overlays it with the outline/fill split. The photograph is the brand's entire decorative system at hero scale.
- **Ink polarity-flip as section depth**: switching from white canvas to `{colors.canvas-dark}` ink is the primary inter-section depth cue — used in the utility bar, footer, and dark-band sections.
- **Card hover inversion**: white-to-ink flip on hover is the brand's signature interactive depth gesture, signalling interactivity without a shadow.

## Components

### Buttons

**`button-primary`** — the canonical Vodafone red square-cornered CTA button.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}`, padding `{spacing.xs} {spacing.lg}`, shape `{rounded.none}` (0 px radius). The zero radius is non-negotiable — it is a brand identity marker, not a default.

**`button-primary-lg`** — the hero-scale red CTA ("OUR PURPOSE →").
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-lg}` (24 px / 800), same zero radius. Arrow icon appended as part of the label.

**`button-secondary`** — white button with ink border, light-surface contexts.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, label in `{typography.button-md}`, shape `{rounded.none}`.

**`button-ghost-dark`** — transparent button with white border on dark/photographic surfaces.
- Background `transparent`, text `{colors.on-dark}`, white border, label in `{typography.button-md}`, shape `{rounded.none}`.

### Navigation

**`utility-bar`** — the slim top bar above the main nav.
- Background `{colors.canvas-dark}` (near-black `#25282b`), text `{colors.on-dark}`, links in `{typography.body-sm}` — "Vodafone Business / Vodafone Foundation / Our sites ▾". Anchors the page with an ink band before the white nav.

**`nav-bar`** — the main horizontal navigation.
- Background `{colors.canvas}`, text `{colors.ink}`, height 80 px, padding `{spacing.xs} {spacing.lg}`. Left: red speechmark logo SVG. Centre: primary nav links in `{typography.nav-link}`. Right: search icon.

**`nav-link`** — individual nav link items.
- Text `{colors.ink}`, typography `{typography.nav-link}`, padding `{spacing.xs} {spacing.md}`. No visible radius at rest; underline or colour shift on hover.

**`nav-search-icon`** — the circular search icon button at the right of the nav bar.
- Text `{colors.ink}`, shape `{rounded.full}`, padding `{spacing.xs}`.

### Hero & Bands

**`hero-band`** — full-viewport cinematic band with photography backdrop and type overlay.
- Background: transparent (photography sits beneath), text `{colors.on-dark}`, padding `{spacing.4xl} {spacing.lg}`. Contains `hero-headline-outline`, `hero-headline-filled`, `hero-body-quote`, and `button-primary-lg`.

**`hero-headline-outline`** — first line of the hero headline, rendered as white stroke on transparent fill.
- Typography `{typography.display-hero}`, all-uppercase, visible only as outline against the photograph. The brand's most distinctive single typographic gesture.

**`hero-headline-filled`** — second line of the hero headline, rendered as solid white fill.
- Typography `{typography.display-hero}`, all-uppercase, solid `{colors.on-dark}` fill.

**`hero-body-quote`** — the lead paragraph beneath the hero headline.
- Typography `{typography.body-lg}`, color `{colors.on-dark}`, left-edge white vertical rule (border-left decoration), padding `{spacing.md} {spacing.lg}`.

**`feature-band`** — white interior section band.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.lg}`. Section headline in `{typography.display-lg}`.

**`feature-band-dark`** — ink-surface interior section band.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, padding `{spacing.5xl} {spacing.lg}`.

### Cards

**`card-marketing`** — standard marketing content card at rest.
- Background `{colors.canvas-card}`, text `{colors.ink}`, padding `{spacing.lg}`, shape `{rounded.none}`. Carries Level 1 hairline border.

**`card-marketing-hover`** — card on hover / active state (polarity-flipped).
- Background `{colors.canvas-card-hover}` (ink), text `{colors.on-dark}`, padding `{spacing.lg}`, shape `{rounded.none}`.

**`card-stat`** — the statistics module card.
- Background `{colors.canvas}`, text `{colors.ink}`, numeral in `{typography.display-md}` coloured `{colors.stats-accent}` (red), padding `{spacing.lg}`, shape `{rounded.none}`.

### Utilities

**`section-label`** — the heavy-weight section eyebrow label above section headlines.
- Text `{colors.ink}`, typography `{typography.label}` (19 px / 800).

**`link-inline`** — inline body-copy links.
- Text `{colors.primary}` (red), typography `{typography.body-md}`.

**`badge-utility`** — small utility badge / tag.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, typography `{typography.caption}`, shape `{rounded.xs}` 4 px, padding `{spacing.xxs} {spacing.xs}`.

**`form-input`** — text input field.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, typography `{typography.body-md}`, shape `{rounded.none}` (zero radius, matching button system), height 48 px, padding `{spacing.xs} {spacing.md}`.

**`footer`** — the bottom navigation band.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, typography `{typography.body-sm}`, padding `{spacing.4xl} {spacing.lg}`. Column headers in `{typography.label}` (800 weight); link rows in `{typography.body-sm}` 400.

**`footer-link`** — individual footer nav links.
- Text `{colors.on-dark}`, typography `{typography.body-sm}`.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (`#e60000`) for the logo, primary CTAs, and stat-highlight numerals only. Red earns its impact through scarcity.
- Use `{rounded.none}` (0 px) on all buttons and form inputs. The square corner is a brand identity marker, not a gap in the design system.
- Set hero headlines all-uppercase with the outline/fill split — first line outline, second line filled white. Both lines must use `{typography.display-hero}` at the fluid clamp scale.
- Use the proprietary Vodafone face at weight 800 for all display, label, and button copy; weight 400 for all body and secondary text. No intermediate weights.
- Apply -1px letter-spacing at all display token sizes. Tighter tracking at large sizes is part of the broadcast voice.
- Use full-bleed portrait photography as the hero's entire decorative system. The photograph is the brand; do not overlay gradients, illustrations, or colour blocks on it.
- Flip card surfaces from white to ink (`{colors.canvas-card-hover}`) on hover. This polarity inversion is the brand's signature interactive gesture.
- Set body quotes and lead paragraphs beneath hero headlines with a left-edge vertical rule decoration.

### Don't
- Don't round button corners. A pill or even a 4 px radius on a Vodafone button is a brand violation — zero radius only.
- Don't use red as a section background. Red is never a surface; it is always a signal.
- Don't introduce intermediate font weights (500, 600, 700). The binary 400/800 contrast is the system; midweights dilute it.
- Don't letter-space display headlines positively. Negative or neutral only.
- Don't render hero headlines in mixed case. All-uppercase is mandatory at display scale.
- Don't miniaturise the photography crop. Full-bleed is the only sanctioned treatment for hero photography.
- Don't use the secondary palette colours (teal, plum, purple, orange, yellow, green) as primary interactive elements. They are category indicators and should appear in content contexts only.
- Don't use italic or oblique type. The Vodafone face is set upright at all times.
- Don't apply heavy drop-shadows to cards. Hairline borders and polarity-flip hover states are the elevation system; deep shadows read as foreign to the brand.
