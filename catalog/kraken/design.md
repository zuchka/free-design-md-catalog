---
version: alpha
name: Kraken-design-system
description: "Kraken is a crypto-exchange brand whose surface is a cool lavender-tinted off-white canvas punctuated by a single assertive purple — a signal that reads simultaneously as trustworthy fintech and forward-leaning crypto-native. The proprietary brand face (Kraken-Brand) carries headlines at an unusually light weight-400, letting the generous 48px hero tracking do the heavy lifting, while the product sans (Kraken-Product) handles every number, label, and body line in clean Helvetica-adjacent neutrality. A deep navy-to-purple gradient band appears as the sole atmospheric decoration — used for promotional callouts and dark hero sections — never miniaturised. The colour vocabulary is deliberately minimal: purple primary, lavender canvas, near-black ink, and white-on-dark surfaces."
colors:
  primary: "#7132f5"
  on-primary: "#ffffff"
  ink: "#101114"
  body: "#3d3d3d"
  mute: "#6b6b6b"
  hairline: "#e0dce8"
  hairline-strong: "#c4bdd4"
  canvas: "#ffffff"
  canvas-soft: "#f6f5f9"
  canvas-lavender: "#f1efff"
  on-dark: "#ffffff"
  dark-band-start: "#0e0b1a"
  dark-band-end: "#1e1040"
  promo-band-start: "#0d0b2b"
  promo-band-mid: "#2d1a6e"
  promo-band-end: "#1a0a3d"
  link: "#7132f5"
  success: "#00b67a"
  error: "#e03131"
  warning: "#f59f00"
  stat-ink: "#101114"
typography:
  display-xl:
    fontFamily: Kraken-Brand, "IBM Plex Sans", Helvetica, Arial, sans-serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 56px
    letterSpacing: normal
  display-lg:
    fontFamily: Kraken-Brand, "IBM Plex Sans", Helvetica, Arial, sans-serif
    fontSize: 36px
    fontWeight: 400
    lineHeight: 44px
    letterSpacing: normal
  display-md:
    fontFamily: Kraken-Brand, "IBM Plex Sans", Helvetica, Arial, sans-serif
    fontSize: 28px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: normal
  display-sm:
    fontFamily: Kraken-Brand, "IBM Plex Sans", Helvetica, Arial, sans-serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: normal
  body-lg:
    fontFamily: Kraken-Product, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Kraken-Product, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: Kraken-Product, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  body-sm:
    fontFamily: Kraken-Product, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: Kraken-Product, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  caption:
    fontFamily: Kraken-Product, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  caption-strong:
    fontFamily: Kraken-Product, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
  stat:
    fontFamily: Kraken-Brand, "IBM Plex Sans", Helvetica, Arial, sans-serif
    fontSize: 28px
    fontWeight: 400
    lineHeight: 36px
  button-md:
    fontFamily: Kraken-Product, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  button-lg:
    fontFamily: Kraken-Product, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  button: 12px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 30px
  4xl: 48px
  5xl: 56px
  6xl: 96px
  section: 120px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 64px
    padding: "{spacing.sm} {spacing.xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.sm} {spacing.md}"
  nav-cta-login:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.lg}"
  nav-cta-signup:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.lg}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-strong}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
  button-primary-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
  icon-button-circular:
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.button}"
    width: 40px
    height: 40px
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.primary}"
    placeholderColor: "{colors.mute}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
    height: 48px
  hero-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  hero-email-signup-row:
    backgroundColor: "{colors.canvas-soft}"
    inputComponent: "{components.form-input}"
    buttonComponent: "{components.button-primary}"
    gap: "{spacing.sm}"
    rounded: "{rounded.button}"
  social-signup-button:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    width: 48px
    height: 48px
  stat-block:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.stat-ink}"
    labelColor: "{colors.mute}"
    headingTypography: "{typography.stat}"
    labelTypography: "{typography.body-sm}"
    padding: "{spacing.lg} {spacing.xl}"
  promo-band:
    backgroundColor: "{colors.promo-band-start}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.lg}"
    padding: "{spacing.4xl} {spacing.2xl}"
  promo-band-cta:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"
  badge-disclaimer:
    backgroundColor: "{colors.canvas-lavender}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.md}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.xl}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  nav-search:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.mute}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  ex-pricing-tier:
    description: Default tier card on canvas-soft surface with hairline border.
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured/highlighted tier — primary purple fill with white text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-auth-form-card:
    description: Sign-in / sign-up card on canvas surface with form-input primitives inside.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog surface — canvas white with hairline border and elevated shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-toast:
    description: Toast notification — compact card with border on canvas surface.
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"
  ex-data-table-cell:
    description: Data table chrome. Header uses caption-strong; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses primary purple as left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  ex-empty-state-card:
    description: Empty-state frame on lavender canvas-soft with generous padding.
    backgroundColor: "{colors.canvas-lavender}"
    rounded: "{rounded.lg}"
    padding: "{spacing.4xl}"
    captionTypography: "{typography.body-md}"
---
## Overview

Kraken is a crypto-exchange brand that earns trust through restraint. Where many fintech brands reach for gradients and neon, Kraken operates on a cool lavender-tinted canvas (`{colors.canvas-soft}` — a near-imperceptible tint of `#f6f5f9`) with a single purple primary that does every conversion job on the page. That purple (`{colors.primary}` — `#7132f5`) is the brand's only assertive colour — it appears in the primary CTA, the active input border, the nav Sign Up button, and the promotional band buttons. Everything else steps back into ink, muted gray, and hairline.

The type system is deliberately low-contrast between weights. The proprietary brand face (Kraken-Brand) carries every headline at weight 400 — unusually light for a fintech display face — which gives headlines a refined, editorial feel rather than a shouted pitch. The product sans (Kraken-Product) handles every body line, label, and button in a Helvetica-adjacent neutral. There is no monospaced face in the marketing surface; technical labelling stays in the product sans at caption scale.

The brand's one atmospheric decoration is a deep navy-to-purple gradient (`{colors.promo-band-start}` → `{colors.promo-band-mid}`) used in the FIFA World Cup promotional band. It functions like Vercel's mesh gradient — a full-bleed atmospheric object, never reduced to a swatch or icon. Outside of that band, decoration is absent. The page earns its visual hierarchy from type size, spacing, and the purple signal alone.

Surface cycling is simple: lavender `{colors.canvas-soft}` for the hero and most sections, pure white `{colors.canvas}` for cards and the nav, deep navy for promotional or campaign bands. Cards sit on gentle hairline borders at `{rounded.button}` 12 px radius — the same measured radius applied consistently to buttons, inputs, and cards alike.

## Colors

### Brand & Accent
- **Primary Purple** (`{colors.primary}` — `#7132f5`): The single conversion colour. Active CTA buttons, Sign Up in the nav, the active state on the email input border, promotional band CTAs. Never diluted — it appears at full saturation or not at all.
- **Link** (`{colors.link}` — `#7132f5`): Inline links share the primary purple, reinforcing the single-accent discipline.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure white — the nav bar, card surfaces, social-signup icon buttons, the log-in button background.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f6f5f9`): The default page background — a cool lavender-tinted near-white. Almost every marketing section sits on this.
- **Canvas Lavender** (`{colors.canvas-lavender}` — `#f1efff`): A slightly more saturated lavender tint for disclaimer badges and informational callout chips. Sourced from `--background-color-disclaimer`.
- **Hairline** (`{colors.hairline}` — `#e0dce8`): Card borders, input borders at rest, nav dividers.
- **Hairline Strong** (`{colors.hairline-strong}` — `#c4bdd4`): The slightly deeper border tone for secondary buttons and table row dividers.

### Text
- **Ink** (`{colors.ink}` — `#101114`): Every heading on light surfaces. Near-black with a faint blue-black cool tint.
- **Body** (`{colors.body}` — `#3d3d3d`): Secondary text, sub-headings, nav link text, footer column body.
- **Mute** (`{colors.mute}` — `#6b6b6b`): Placeholder text, fine print, low-priority stat labels.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): All text on dark promotional band surfaces.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): Text on purple primary surfaces.

### Promotional / Dark Band
- **Promo Band Start** (`{colors.promo-band-start}` — `#0d0b2b`): The deep near-black navy that anchors the FIFA promotional band.
- **Promo Band Mid** (`{colors.promo-band-mid}` — `#2d1a6e`): The mid-purple gradient stop visible in the band's atmospheric gradient.
- **Promo Band End** (`{colors.promo-band-end}` — `#1a0a3d`): The deepest purple edge of the promotional band.

### Semantic
- **Success** (`{colors.success}` — `#00b67a`): Positive status indicators, gain states in market data.
- **Error** (`{colors.error}` — `#e03131`): Validation errors, destructive actions, loss states in market data.
- **Warning** (`{colors.warning}` — `#f59f00`): Caution states.

## Typography

### Font Families
Two proprietary faces carry the entire system:

1. **Kraken-Brand** — a custom sans for display and headline use. The defining characteristic is weight 400 at large sizes — the brand never reaches for a bold display cut. At 48 px the face reads assured without shouting. Open-source fallback: *IBM Plex Sans* (400) matches the refined, lightly geometric character best. *Inter* is a passable second.
2. **Kraken-Product** — a neutral product sans for all body, label, button, and caption text. A Helvetica Neue–adjacent face; weight 400 for body, 500 for buttons and strong labels. Open-source fallback: *Helvetica Neue* or *Inter* (400 / 500).

There is no monospaced face in the marketing surface.

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 400 | 56px | normal | Hero headline ("Own the power of your money"). Weight-400 display — the brand never bolds its headlines. |
| `{typography.display-lg}` | 36px | 400 | 44px | normal | Section headlines and promotional band hero text. |
| `{typography.display-md}` | 28px | 400 | 36px | normal | Sub-section headlines, stat cluster headings. |
| `{typography.display-sm}` | 20px | 400 | 28px | normal | Card-level headings and inline display moments. |
| `{typography.stat}` | 28px | 400 | 36px | normal | The hero stat figures ("Since 2011", "$2T+"). Kraken-Brand face giving numbers a headline posture. |
| `{typography.body-lg}` | 18px | 400 | 28px | — | Lead sub-headings below hero headlines ("Crypto, stocks, futures, and more — trusted by millions worldwide"). |
| `{typography.body-md}` | 16px | 400 | 24px | — | Default body paragraph. |
| `{typography.body-md-strong}` | 16px | 500 | 24px | — | Bolded inline body, promotional band emphasis text (e.g. "FWC26"). |
| `{typography.body-sm}` | 14px | 400 | 20px | — | Nav links, secondary body, stat labels, footer body. |
| `{typography.body-sm-strong}` | 14px | 500 | 20px | — | Nav CTA labels, table emphasis, badge text. |
| `{typography.caption}` | 12px | 400 | 16px | — | Disclaimer badges, fine print. |
| `{typography.caption-strong}` | 12px | 500 | 16px | — | Table column headers. |
| `{typography.button-md}` | 14px | 500 | 20px | — | Nav-scale button labels (Log in, Sign up in nav). |
| `{typography.button-lg}` | 16px | 500 | 24px | — | Marketing-scale CTA labels ("Try Kraken", "Sign up"). |

### Principles
- **Weight 400 is the display ceiling for Kraken-Brand.** The brand face never appears bold. The display type earns its hierarchy from size alone, not weight. Introducing a 600 or 700 cut breaks the refined, editorial voice.
- **Sentence-case headlines throughout.** "Own the power of your money" — no title-case, no all-caps in the brand face.
- **The product sans handles all weight variation.** Weight 500 is only used in the product face, for buttons and strong labels. The display face stays at 400.
- **No monospaced face in marketing.** Technical signals are absent from the marketing surface — numbers and data labels use the product sans.

### Note on Font Substitutes
Both faces are proprietary. Open-source substitutes:
- **Kraken-Brand** — *IBM Plex Sans* (400) is the specified fallback and the closest match for the light-weight refined geometric character.
- **Kraken-Product** — *Helvetica Neue* is the specified fallback; *Inter* (400 / 500) is more web-accessible and a strong match.

## Layout

### Spacing System
- **Base unit**: 4 px. The spacing scale is built on 4 px increments with a 6 px micro step.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 20 px · `{spacing.2xl}` 24 px · `{spacing.3xl}` 30 px · `{spacing.4xl}` 48 px · `{spacing.5xl}` 56 px · `{spacing.6xl}` 96 px · `{spacing.section}` 120 px.
- **Section padding**: hero and marketing bands use `{spacing.4xl}` to `{spacing.5xl}` top/bottom. The hero specifically matches the 48–56 px vertical rhythm observed in the spacing frequency data.
- **Component interior padding**: buttons use `{spacing.md}` 12 px vertically, `{spacing.lg}` 16 px horizontally (nav scale) or `{spacing.lg}` 16 px at marketing scale. Cards use `{spacing.xl}` 20 px.
- **Inline gap**: the email + CTA row in the hero uses `{spacing.sm}` 8 px gap. Social signup icon gap uses `{spacing.md}` 12 px.

### Grid & Container
- **Max width**: approximately 1200 px centred. Horizontal gutters at `{spacing.xl}` 20 px on desktop, `{spacing.lg}` 16 px on mobile.
- **Column patterns**:
  - Hero: single-column centred stack (headline + sub + email-row + social-row + stats).
  - Stats row: 3-up at desktop, inline centred, collapsing to 1-up at mobile.
  - Promotional band: full-bleed with logo left, headline centre, CTA right at desktop.
  - Nav: logo left, link row centre, utility cluster (globe + search + Log in + Sign up) right.

### Whitespace Philosophy
The page reads as generous and un-cluttered. The lavender canvas does most of the tonal work; whitespace between sections is the primary separator. The hero stack is tightly composed (headline → sub → email row → social row → stat row) with consistent `{spacing.2xl}` to `{spacing.3xl}` between layers. Section bands use `{spacing.4xl}` to `{spacing.5xl}` top/bottom to give each topic room to breathe. The promotional band breaks the rhythm as a full-bleed dark object — the transition is stark, by design.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero band, promotional dark band, footer. |
| Level 1 — Hairline Ring | `0 0 0 1px {colors.hairline}` | Default card chrome. The brand's universal "this is a card" signal. |
| Level 2 — Subtle Drop | `0px 2px 8px rgba(0,0,0,0.06)` plus hairline ring | Slightly elevated cards and dropdown menus. |
| Level 3 — Float | `0px 4px 16px rgba(0,0,0,0.10)` plus hairline ring | Modal dialog and active dropdown surfaces. |

The brand uses hairline borders rather than heavy shadows as its primary elevation signal — consistent with the restrained, fintech-serious visual voice. Shadow is used sparingly and softly.

### Decorative Depth
- **Navy-to-purple gradient band**: the FIFA promotional section is the brand's only full-bleed atmospheric decoration. Treat it as a single indivisible object — do not crop to a swatch, do not use the gradient at card scale.
- **Surface cycling as depth cue**: switching from `{colors.canvas-soft}` lavender to the deep navy `{colors.promo-band-start}` is the brand's primary depth and attention signal between sections.
- **Active input purple border**: the email input in the hero carries a `{colors.primary}` border at rest — a subtle but deliberate use of the brand's single accent colour as a directional cue toward the conversion action.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed promotional and hero bands. |
| `{rounded.xs}` | 4px | Tightest internal chips and micro-badges. |
| `{rounded.sm}` | 8px | Small utility elements, search bar. |
| `{rounded.button}` | 12px | The brand's universal interactive radius — primary and secondary buttons, form inputs, card chrome. This is the measured value from the live extraction and is non-negotiable. |
| `{rounded.md}` | 12px | Card chrome — same as button, the brand uses a single radius for both. |
| `{rounded.lg}` | 16px | Larger card containers and modal surfaces. |
| `{rounded.xl}` | 20px | Oversized card moments, feature imagery frames. |
| `{rounded.2xl}` | 24px | Promotional band inset panels. |
| `{rounded.pill}` | 9999px | Explicitly pill-shaped elements only — the social signup (Apple / Google) circular icon buttons. Not used for standard rectangular CTAs. |
| `{rounded.full}` | 9999px | Circular icon containers (globe icon button, social sign-in icons). |

**Critical constraint**: the measured primary button radius is 12 px (`{rounded.button}`). The brand does not use a pill-shaped CTA for its main conversion buttons — the "Try Kraken" and "Sign up" buttons are rounded-rectangle, not pill.

## Components

### Navigation

**`nav-bar`** — the top navigation bar.
- Background `{colors.canvas}`, text `{colors.ink}`, height 64 px, padding `{spacing.sm} {spacing.xl}`. Layout: Kraken logo left, five link items centre (Individuals / Businesses / VIP / Affiliates / Markets / About), utility cluster right (globe icon + search bar + Log in + Sign up).

**`nav-link`** — individual nav link items.
- Text `{colors.ink}`, set in `{typography.body-sm}`, padding `{spacing.sm} {spacing.md}`. Ghost on rest, no visible pill border.

**`nav-cta-login`** — the "Log in" button in the nav utility cluster.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px `{colors.hairline}` border, `{typography.button-md}`, shape `{rounded.button}` 12 px.

**`nav-cta-signup`** — the "Sign up" button in the nav utility cluster.
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.button-md}`, shape `{rounded.button}` 12 px.

**`nav-search`** — the keyboard-shortcut-hinted search bar.
- Background `{colors.canvas-soft}`, text `{colors.mute}`, border `{colors.hairline}`, `{typography.body-sm}`, shape `{rounded.button}`, displays "/" shortcut badge on right edge.

### Hero & Sections

**`hero-band`** — the lavender hero section centred on the page.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.lg}`. Inside: headline in `{typography.display-xl}` (weight 400, sentence-case), sub-line in `{typography.body-lg}`, then the email + CTA inline row, then the social signup row, then the 3-up stat block row.

**`hero-email-signup-row`** — the inline email input + "Try Kraken" button row.
- Uses `{components.form-input}` + `{components.button-primary}` side by side with `{spacing.sm}` gap. This is the primary conversion surface.

**`form-input`** — the email input field with active purple border.
- Background `{colors.canvas}`, text `{colors.ink}`, border `{colors.primary}` (active), placeholder in `{colors.mute}`, `{typography.body-md}`, shape `{rounded.button}` 12 px, height 48 px, padding `{spacing.md} {spacing.lg}`.

**`button-primary`** — the canonical purple CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.button-lg}`, shape `{rounded.button}` 12 px, padding `{spacing.md} {spacing.lg}`. Measured: 12 px radius, not pill.

**`button-secondary`** — the ghost secondary button paired with `button-primary`.
- Background `{colors.canvas}`, text `{colors.ink}`, border `{colors.hairline-strong}`, `{typography.button-lg}`, shape `{rounded.button}` 12 px.

### Social & Auth

**`social-signup-button`** — the circular Apple / Google sign-in icon buttons.
- Background `{colors.canvas}`, border `{colors.hairline}`, shape `{rounded.full}` (pill), 48 × 48 px. The only place the 9999 px pill radius is used in the hero.

**`icon-button-circular`** — the globe/language icon button in the nav.
- Background `{colors.canvas}`, border `{colors.hairline}`, shape `{rounded.full}`, 40 × 40 px.

### Stats & Data

**`stat-block`** — the 3-up hero stats row ("Since 2011 / $2T+ / Forbes Most popular...").
- Background `{colors.canvas-soft}`, stat number in `{typography.stat}` (Kraken-Brand 28 px / 400), label in `{typography.body-sm}` (Kraken-Product). No card border — the stats sit directly on the lavender canvas.

### Promotional

**`promo-band`** — the full-bleed FIFA World Cup promotional section.
- Background gradient `{colors.promo-band-start}` → `{colors.promo-band-mid}`, text `{colors.on-dark}`, shape `{rounded.lg}` on inset content areas (the band itself is full-bleed), padding `{spacing.4xl} {spacing.2xl}`. Inside: sponsor logos left, headline + sub centre in `{typography.display-lg}`, CTA button right.

**`promo-band-cta`** — the "Sign up" button inside the promotional dark band.
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.button-lg}`, shape `{rounded.button}` 12 px. Purple on deep navy — the brand's conversion signal is consistent across light and dark surfaces.

### Utility

**`badge-disclaimer`** — the lavender informational chip.
- Background `{colors.canvas-lavender}`, text `{colors.body}`, `{typography.caption}`, shape `{rounded.md}` 12 px, padding `{spacing.xs} {spacing.md}`. Used for fine print, disclaimer callouts, and "or sign up with" divider context.

**`link-inline`** — body-copy inline links.
- Text `{colors.link}` (`#7132f5`), `{typography.body-md}`.

**`footer`** — the bottom navigation section.
- Background `{colors.canvas}`, text `{colors.body}`, `{typography.body-sm}`, padding `{spacing.4xl} {spacing.xl}`. Multi-column link layout.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (`#7132f5`) exclusively for conversion-critical surfaces: primary CTAs, the active input border, the Sign Up nav button. The single-purple discipline is the brand's entire accent system.
- Use `{rounded.button}` 12 px for every button, input, and card. The brand applies a single interactive radius consistently — do not introduce different radii for "large" vs "small" buttons.
- Set every headline in Kraken-Brand at weight 400. The brand earns its hierarchy from size, not weight.
- Use the navy-to-purple gradient exclusively at full-bleed band scale for promotional or campaign moments. Never crop it to a swatch, gradient border, or icon.
- Keep the page surface on `{colors.canvas-soft}` lavender for most sections — it is the brand's resting tone, not white.
- Use `{rounded.full}` 9999 px only for explicitly circular icon buttons (social sign-in, nav globe). Not for standard rectangular CTAs.
- Set body and button text in Kraken-Product (weight 400 for body, 500 for buttons/strong). The display face is for headlines only.

### Don't
- Don't introduce a second accent colour. The brand operates with purple primary and neutral grays only — additional accent colours dilute the conversion signal.
- Don't use a pill radius (9999 px) on the primary "Try Kraken" or "Sign up" CTA buttons. The measured radius is 12 px (`{rounded.button}`), and that rounded-rectangle shape is the brand's conversion button — not a pill.
- Don't set Kraken-Brand headlines at weight 500 or 600. The display ceiling is 400. Bolder weights break the refined, low-pressure voice.
- Don't use the promotional navy-purple gradient at card scale or as a decorative border. It belongs at full-bleed band scale only.
- Don't render the hero on pure white `{colors.canvas}`. The hero background is `{colors.canvas-soft}` lavender — the distinction from pure white is intentional and brand-defining.
- Don't introduce drop shadows heavier than Level 2. The brand's elevation system is hairline-first; heavy shadows read as a different brand entirely.
- Don't use the Kraken-Product sans for hero display headlines. The two faces have distinct roles and must not be swapped.
