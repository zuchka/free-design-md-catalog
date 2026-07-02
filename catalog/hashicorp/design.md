---
version: alpha
name: HashiCorp
description: "HashiCorp is an infrastructure-platform brand for the hybrid-cloud era — now an IBM company — whose surface is a deep navy-to-black hero gradient punctuated by a signature cyan-to-violet diagonal slash, all of it in service of enterprise credibility. On light surfaces the voice flips to cool near-white with a structured 4px grid, squared-off 4–5px radii, and a proprietary geometric sans (HashiCorp Sans) at heavy 600 weight for headlines. The brand never rounds its buttons into pills; every CTA is a tight 5px-radius rectangle carrying a saturated IBM blue. Decoration is minimal: the gradient slash is the entire hero, and the rest of the page earns its authority through typography scale, measured whitespace, and a cool-gray surface palette."
colors:
  primary: "#1060ff"
  primary-border: "#0c56e9"
  on-primary: "#ffffff"
  brand: "#2e71e5"
  brand-link: "#2264d6"
  brand-link-on-dark: "#4294ff"
  ink: "#3b3d45"
  ink-strong: "#efeff1"
  body: "#3b3d45"
  mute: "#d5d7db"
  hairline: rgba(178, 182, 189, 0.1)
  canvas: "#ffffff"
  canvas-soft: "#f2f2f3"
  canvas-dark: "#0a0a14"
  hero-bg: "#0d0d1a"
  hero-navy: "#1a1a3e"
  gradient-start: "#63d0ff"
  gradient-end: "#844fba"
  on-dark: "#ffffff"
  on-dark-mute: "#efeff1"
  success: "#2e71e5"
  error: "#c7362b"
  warning: "#f0a500"
typography:
  display-xl:
    fontFamily: HashiCorp Sans, system-ui, -apple-system, sans-serif
    fontSize: 82px
    fontWeight: 600
    lineHeight: 96px
    letterSpacing: normal
  display-lg:
    fontFamily: HashiCorp Sans, system-ui, -apple-system, sans-serif
    fontSize: 52px
    fontWeight: 600
    lineHeight: 62px
    letterSpacing: normal
  display-md:
    fontFamily: HashiCorp Sans, system-ui, -apple-system, sans-serif
    fontSize: 34px
    fontWeight: 600
    lineHeight: 40px
    letterSpacing: normal
  display-sm:
    fontFamily: HashiCorp Sans, system-ui, -apple-system, sans-serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
    letterSpacing: normal
  body-lg:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  body-sm:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22px
  body-sm-strong:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif
    fontSize: 15px
    fontWeight: 500
    lineHeight: 22px
  caption:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  caption-caps:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.08em
  button-md:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif
    fontSize: 15px
    fontWeight: 500
    lineHeight: 22px
  button-lg:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  button: 5px
  md: 4px
  lg: 8px
  xl: 12px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 64px
  section-intro: 24px
  block: 88px
  independent: 64px
  card: 24px
  grid-gap: 24px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 64px
    padding: "{spacing.sm} {spacing.xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  nav-cta-contact:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.mute}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
  nav-cta-get-started:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    borderColor: "{colors.primary-border}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: 9px 15px
  nav-login-link:
    textColor: "{colors.brand}"
    typography: "{typography.body-sm-strong}"
    padding: "{spacing.sm} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    borderColor: "{colors.primary-border}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: 9px 15px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.mute}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
  button-ghost-dark:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    borderColor: "{colors.on-dark}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: 9px 15px
  hero-band:
    backgroundColor: "{colors.hero-bg}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: "{spacing.block} {spacing.xl}"
  hero-gradient-slash:
    gradientStart: "{colors.gradient-start}"
    gradientEnd: "{colors.gradient-end}"
    direction: 50.7deg
  announcement-banner:
    backgroundColor: "{colors.hero-bg}"
    textColor: "{colors.on-dark-mute}"
    borderColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  badge-label:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    borderColor: "{colors.on-dark}"
    typography: "{typography.caption-caps}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  logo-strip:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.mute}"
    typography: "{typography.caption-caps}"
    padding: "{spacing.3xl} {spacing.xl}"
  logo-strip-label:
    textColor: "{colors.mute}"
    typography: "{typography.caption-caps}"
    letterSpacing: 0.08em
  card-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  card-dark:
    backgroundColor: "{colors.hero-navy}"
    textColor: "{colors.on-dark}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  feature-card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  link-inline:
    textColor: "{colors.brand-link}"
    typography: "{typography.body-md}"
  link-inline-dark:
    textColor: "{colors.brand-link-on-dark}"
    typography: "{typography.body-md}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.mute}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    height: 40px
  footer:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.block} {spacing.xl}"
  footer-link:
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
  section-band-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.block} {spacing.xl}"
  section-band-soft:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.block} {spacing.xl}"
  section-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    padding: "{spacing.block} {spacing.xl}"
  ex-pricing-tier:
    description: Default pricing tier card. Canvas surface with hairline border, card-marketing chrome.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  ex-pricing-tier-featured:
    description: Featured pricing tier — polarity-flipped to primary blue surface with white text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  ex-product-selector:
    description: Product/solution summary card on canvas-soft for feature comparison panels.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  ex-cart-drawer:
    description: Subscription or plan summary panel — line items per tier add-on.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses brand primary as left-edge indicator bar.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  ex-data-table-cell:
    description: Data table chrome. Header uses caption-caps uppercase; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption-caps}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card using card-marketing chrome with form-input primitives.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  ex-modal-card:
    description: Modal dialog surface — card-marketing chrome with elevated shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  ex-empty-state-card:
    description: Empty-state frame with generous padding on canvas-soft.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — card-marketing shape with sm shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
    typography: "{typography.body-sm}"
---
## Overview

HashiCorp occupies a precise corner of enterprise infrastructure: hybrid cloud automation, identity lifecycle, secrets management — all of it governed by code. The brand's visual surface reflects that posture without apology. The hero is a deep navy canvas (`{colors.hero-bg}`) bisected by a diagonal gradient slash (`{colors.gradient-start}` cyan → `{colors.gradient-end}` violet) rendered at full bleed. That slash is the brand's single decorative gesture. Everything else earns its place through structure.

Below the fold the palette flips to light — cool near-white `{colors.canvas-soft}` sections alternating with pure-white `{colors.canvas}` cards, all separated by near-invisible 10% opacity hairlines. The type scale is set in a proprietary geometric sans (HashiCorp Sans) at 600 weight for display sizes, stepping down to system-ui at 400 for body copy. Headlines are title-case, tracking left at `normal` — the brand never applies aggressive negative tracking. It doesn't need to: 82px at 600 weight in a tight proprietary face already commands the viewport.

CTAs are deliberately un-pill-like. Both the primary "Get started" CTA and the secondary "Contact us" button carry a 5px radius — closer to a sharp rectangle than anything rounded. The primary is a saturated IBM blue (`{colors.primary}`) with a slightly deeper border (`{colors.primary-border}`), matching the acquired IBM Blue palette. The ghost hero button is white-bordered on the dark hero surface. There is no pill CTA anywhere on the page.

The trusted-by strip and footer share the darkest canvas (`{colors.canvas-dark}`), sitting as anchoring dark bands against the lighter body content. Logo strip labels are set in uppercase system-ui at 12px with generous letter-spacing — the only uppercase text on the page, used deliberately to subordinate the customer logos to a structural label rather than a marketing headline.

## Colors

### Brand & Interactive
- **Primary** (`{colors.primary}` — `#1060ff`): The IBM-aligned saturated blue. Used for every primary CTA button background and the brand link color on light surfaces.
- **Primary Border** (`{colors.primary-border}` — `#0c56e9`): A slightly deeper tone applied as the 1px solid border on `button-primary`, giving the flat CTA a subtle dimensional cue.
- **Brand** (`{colors.brand}` — `#2e71e5`): The legacy HashiCorp brand blue, surfacing as the CSS `--brand` custom property. Used for inline link text on light surfaces.
- **Brand Link** (`{colors.brand-link}` — `#2264d6`): The interactive link color on `{colors.canvas}` and `{colors.canvas-soft}` surfaces.
- **Brand Link on Dark** (`{colors.brand-link-on-dark}` — `#4294ff`): The lighter link tone used on dark-surface sections — visibly brighter to maintain contrast against `{colors.canvas-dark}`.

### Hero Gradient
- **Gradient Start** (`{colors.gradient-start}` — `#63d0ff`): The cyan origin of the `--brand-gradient` diagonal slash. Appears in the top-left of the hero diagonal.
- **Gradient End** (`{colors.gradient-end}` — `#844fba`): The violet terminus of the brand gradient. The diagonal direction is `50.7deg`.

The gradient is the brand's entire decorative system — used at hero scale only, never miniaturised to a button fill or card accent.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Card and form surfaces on light sections.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f2f2f3`): The default page body background and secondary brand surface — also maps to `--brand-secondary` and `--brand-accent`.
- **Canvas Dark** (`{colors.canvas-dark}` — `#0a0a14`): The deepest surface, used for the logo strip and footer bands. Anchors the page at top and bottom.
- **Hero Bg** (`{colors.hero-bg}` — `#0d0d1a`): The near-black hero section background — slightly warmer than `canvas-dark`.
- **Hero Navy** (`{colors.hero-navy}` — `#1a1a3e`): The deeper navy visible in the gradient-lit interior of the hero panel.

### Text
- **Ink** (`{colors.ink}` — `#3b3d45`): Default body text on light surfaces. Also the text color for secondary buttons.
- **Ink Strong** (`{colors.ink-strong}` — `#efeff1`): Heading color on dark surfaces — a cool near-white used for all H1/H2/H3 text in the hero band.
- **Mute** (`{colors.mute}` — `#d5d7db`): De-emphasised text — card subtext, footer links, logo strip label.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): Text on `{colors.primary}` button surfaces.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): All text on dark-band surfaces.
- **On Dark Mute** (`{colors.on-dark-mute}` — `#efeff1`): Secondary / body text on dark-band surfaces.

### Hairlines
- **Hairline** (`{colors.hairline}` — `rgba(178, 182, 189, 0.1)`): 1px card borders on both light and dark surfaces. Deliberately near-invisible — cards are separated by structure, not thick lines.

### Semantic
- **Success** (`{colors.success}` — `#2e71e5`): Inherits brand blue for positive states.
- **Error** (`{colors.error}` — `#c7362b`): Destructive state red.
- **Warning** (`{colors.warning}` — `#f0a500`): Caution / pending amber.

## Typography

### Font Families
Two faces carry the entire system:

1. **HashiCorp Sans** (extracted as `__hashicorpSans_96f0ca`) — a proprietary geometric sans used exclusively for display sizes (H1 through H3). Weight 600 only. The face is never used for body copy. Open-source substitute: *Inter* at 600 with `font-feature-settings: "cv11"` enabled; *Satoshi* at Bold is a close second.
2. **System UI stack** (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`) — the platform system font used for all body copy, captions, buttons, and nav links. Weights 400 and 500 are the working set.

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 82px | 600 | 96px | normal | Hero headline ("Do cloud right"). |
| `{typography.display-lg}` | 52px | 600 | 62px | normal | Section-level H2 headlines. |
| `{typography.display-md}` | 34px | 600 | 40px | normal | Card cluster and subsection H3 headlines. |
| `{typography.display-sm}` | 24px | 600 | 32px | normal | Inline subheadings and callout titles. |
| `{typography.body-lg}` | 18px | 400 | 28px | — | Lead paragraphs under hero and section headlines. |
| `{typography.body-md}` | 16px | 400 | 24px | — | Default body paragraph. |
| `{typography.body-md-strong}` | 16px | 500 | 24px | — | Bolded inline body text. |
| `{typography.body-sm}` | 15px | 400 | 22px | — | Nav links, secondary body, footer link text. |
| `{typography.body-sm-strong}` | 15px | 500 | 22px | — | Nav CTA labels, button-secondary labels. |
| `{typography.caption}` | 12px | 400 | 16px | — | Fine print, badge sub-labels. |
| `{typography.caption-caps}` | 12px | 500 | 16px | 0.08em | Logo strip section label ("TRUSTED BY LEADING ORGANIZATIONS") — the only uppercase treatment on the page. |
| `{typography.button-md}` | 15px | 500 | 22px | — | Secondary button labels, nav "Contact us". |
| `{typography.button-lg}` | 16px | 500 | 24px | — | Primary CTA "Get started" label. |

### Principles
- **Title-case headlines, normal tracking.** The brand uses title-case for display sizes ("Do cloud right", "Meet The Infrastructure Cloud") — not all-caps, not sentence-case with a period. Tracking is left at `normal`; the weight and size do the work.
- **Uppercase only for structural labels.** `{typography.caption-caps}` with generous letter-spacing is reserved for section eyebrows that subordinate content to structure ("TRUSTED BY LEADING ORGANIZATIONS"). It never appears at body scale.
- **System UI for everything operational.** Buttons, nav, body, captions — all in the system stack at 400/500. HashiCorp Sans is a headline-only voice.
- **600 is the display ceiling.** The geometric face never appears at 700+. Enterprise credibility reads as calm and measured.

## Layout

### Spacing System
- **Base unit**: 4px. Every measured value in the extraction (`4 / 6 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 88px`) is a 4px-or-6px-base multiple.
- **Key CSS custom properties**: `--space-block-padding: 88px` governs top/bottom section rhythm; `--space-card-padding: 24px` is the card interior; `--space-grid-gap: 24px` is the column gap; `--space-independent-content: 64px` separates standalone content blocks.
- **Section padding**: marketing bands use `{spacing.block}` (88px) top/bottom — generous for enterprise breathing room. The hero stretches further with atmospheric gradient fill.
- **Card interior**: `{spacing.card}` 24px on all sides — confirmed from `--space-card-padding`.
- **Grid gap**: `{spacing.grid-gap}` 24px between card columns.

### Grid & Container
- **Max width**: ~1280px centered; horizontal gutters of `{spacing.xl}` 24px on desktop, `{spacing.lg}` 16px on mobile.
- **Column patterns**:
  - Hero: single centered column, headline + body + single CTA pill.
  - Logo strip: 7-up flex row of customer logos, single row.
  - Feature grid: 3-up on desktop, scaling down to 1-up on mobile.
  - Pricing grid: 3-up at desktop, stacked at mobile.

### Whitespace Philosophy
HashiCorp's whitespace reads as enterprise-structured rather than startup-airy. The 88px block rhythm gives each section room to establish its own authority before the next begins. Inside cards, the 24px padding is consistent and mechanical — no variable inner spacing. The hero's gradient slash provides all the visual energy the page needs; the light sections below are deliberately restrained, relying on the type scale hierarchy to guide the eye rather than decorative elements or color blocks.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Hero band, logo strip, footer — full-bleed dark bands. |
| Level 1 — Hairline | `1px solid rgba(178, 182, 189, 0.1)` border. | Default card chrome on light surfaces — barely visible at rest. |
| Level 2 — Soft Drop | Light box-shadow at low opacity + hairline border. | Slightly elevated feature cards and callout panels. |
| Level 3 — Modal | Medium box-shadow + hairline border. | Modal / dialog surfaces. |

The brand avoids heavy drop-shadows. On dark surfaces, the `{colors.hairline}` 10%-opacity border is the only separation cue — content clusters are delineated by grid structure and whitespace, not elevation drama.

### Decorative Depth
- **Gradient slash as atmospheric depth**: the cyan-to-violet diagonal is the hero's single atmospheric element, painted as a CSS `linear-gradient` at `50.7deg`. It functions as the page's primary colour event — everything else is structural.
- **Dark-band polarity flip**: switching from `{colors.canvas-soft}` to `{colors.canvas-dark}` at the logo strip and footer is the page's primary depth rhythm — dark anchors, light content in between.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero and footer bands. |
| `{rounded.xs}` | 2px | Tightest inline badge or tag corners. |
| `{rounded.sm}` | 4px | Cards, secondary buttons (white background), form inputs, nav ghost hover states. Measured card radius. |
| `{rounded.button}` | 5px | All primary and CTA buttons. Measured from the live "Get started" CTA — 1px tighter than a standard rectangle, deliberately not a pill. |
| `{rounded.md}` | 4px | Card chrome baseline matching the extracted card radius. |
| `{rounded.lg}` | 8px | Larger card chrome for callout panels. |
| `{rounded.xl}` | 12px | Largest surface rounding — occasional modal or feature panel. |
| `{rounded.pill}` | 9999px | Not used in marketing CTAs — reserved for inline badges or chip labels only if introduced. |
| `{rounded.full}` | 9999px | Circular icon containers if present. |

The brand explicitly separates button radius (`{rounded.button}` 5px) from card radius (`{rounded.md}` 4px). Neither is a pill. The visual language is rectangular and structural — rounded only enough to soften a hard corner.

## Components

### Buttons

**`button-primary`** — the saturated IBM-blue rectangular CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, 1px solid `{colors.primary-border}` border, label in `{typography.button-lg}`, padding `9px 15px`, shape `{rounded.button}` 5px. This is the conversion target across every section.

**`button-secondary`** — the white-background rectangular button paired with the primary.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.mute}` border, label in `{typography.button-md}`, padding `{spacing.sm} {spacing.md}`, shape `{rounded.button}` 5px.

**`button-ghost-dark`** — the white-bordered hero button on the dark hero surface.
- Background transparent, text `{colors.on-dark}`, 1px solid `{colors.on-dark}` border, label in `{typography.button-lg}`, padding `9px 15px`, shape `{rounded.button}` 5px. Used for "Meet The Infrastructure Cloud" on the hero.

### Navigation

**`nav-bar`** — the white sticky top nav.
- Background `{colors.canvas}`, height 64px, padding `{spacing.sm} {spacing.xl}`. Layout: HashiCorp logo + "an IBM Company" lockup at left; link row center ("Solutions / Products / Pricing / Developers / Resources / Company"); "Log in / Contact us / Get started" cluster at right.

**`nav-link`** — the center-row nav links.
- Text `{colors.ink}`, label in `{typography.body-sm-strong}`, padding `{spacing.sm} {spacing.md}`, shape `{rounded.sm}` for hover ghost state.

**`nav-login-link`** — the "Log in" text link in the nav cluster.
- Text `{colors.brand}`, label in `{typography.body-sm-strong}`.

**`nav-cta-contact`** — the "Contact us" outlined button in the nav.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.mute}` border, label in `{typography.button-md}`, shape `{rounded.button}`.

**`nav-cta-get-started`** — the primary "Get started" nav CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, border `{colors.primary-border}`, label in `{typography.button-lg}`, padding `9px 15px`, shape `{rounded.button}`.

### Hero

**`hero-band`** — the full-bleed dark hero section.
- Background `{colors.hero-bg}`, text `{colors.on-dark}`, padding `{spacing.block} {spacing.xl}`. Contains: announcement banner, H1 in `{typography.display-xl}`, body lead in `{typography.body-lg}`, single `button-ghost-dark` CTA. The `hero-gradient-slash` diagonal occupies the upper-right quadrant.

**`hero-gradient-slash`** — the brand's sole decorative element.
- `linear-gradient(50.7deg, {colors.gradient-start}, {colors.gradient-end})`. Rendered at full-bleed scale behind the hero text. Never used at reduced scale.

**`announcement-banner`** — the eyebrow pill-like label above the hero headline.
- Background transparent or subtle, text `{colors.on-dark-mute}`, labeled content ("Agentic runtime security, explained") with a bordered badge and trailing body text, in `{typography.body-sm}`, shape `{rounded.sm}`.

**`badge-label`** — the outlined label badge within the announcement row.
- Border 1px solid `{colors.on-dark}`, text `{colors.on-dark}`, in `{typography.caption-caps}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.sm}`.

### Content Sections

**`section-band-light`** — white-surface content sections.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.block} {spacing.xl}`.

**`section-band-soft`** — soft-canvas alternating sections.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.block} {spacing.xl}`.

**`section-band-dark`** — polarity-flipped dark content band.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, padding `{spacing.block} {spacing.xl}`.

**`card-marketing`** — the standard feature card on light surfaces.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline}` border, padding `{spacing.card}`, shape `{rounded.md}`.

**`feature-card`** — the canvas-soft tinted feature card.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, 1px solid `{colors.hairline}` border, padding `{spacing.card}`, shape `{rounded.md}`.

**`card-dark`** — a card surface on dark-band sections.
- Background `{colors.hero-navy}`, text `{colors.on-dark}`, 1px solid `{colors.hairline}` border, padding `{spacing.card}`, shape `{rounded.md}`.

### Strip & Footer

**`logo-strip`** — the "Trusted by Leading Organizations" customer logo row.
- Background `{colors.canvas-dark}`, text `{colors.mute}`, padding `{spacing.3xl} {spacing.xl}`. Label in `{typography.caption-caps}` uppercase; logos rendered as monochrome marks at consistent height.

**`logo-strip-label`** — the all-caps section label inside the logo strip.
- Text `{colors.mute}`, `{typography.caption-caps}` with 0.08em letter-spacing.

**`footer`** — the bottom navigation band.
- Background `{colors.canvas-dark}`, text `{colors.mute}`, padding `{spacing.block} {spacing.xl}`. Column headers in `{typography.body-sm-strong}`; link rows in `{typography.body-sm}`.

**`footer-link`** — individual footer navigation links.
- Text `{colors.mute}`, `{typography.body-sm}`.

### Forms

**`form-input`** — the standard text input.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.mute}` border, body in `{typography.body-md}`, padding `{spacing.sm} {spacing.md}`, height 40px, shape `{rounded.sm}`.

### Links

**`link-inline`** — body-copy links on light surfaces.
- Text `{colors.brand-link}`, underlined, in `{typography.body-md}`.

**`link-inline-dark`** — body-copy links on dark surfaces.
- Text `{colors.brand-link-on-dark}`, in `{typography.body-md}`.

## Do's and Don'ts

### Do
- Use `{colors.primary}` (`#1060ff`) with a 1px `{colors.primary-border}` border for every primary CTA — the IBM-blue button is the conversion voice.
- Keep all CTAs at `{rounded.button}` 5px and all cards at `{rounded.md}` 4px — these are distinct, measured tokens. Never merge them.
- Set display headlines in HashiCorp Sans weight 600, title-case, at `normal` letter-spacing. The face earns its authority through weight and scale, not tracking.
- Use `{typography.caption-caps}` with `0.08em` letter-spacing only for structural section eyebrows — it is the page's single uppercase voice, reserved for subordinate labels.
- Reserve the cyan-to-violet gradient slash for the hero band only. It is the brand's one decorative gesture and loses meaning at reduced scale.
- Anchor pages with dark `{colors.canvas-dark}` bands at top (hero / logo strip) and bottom (footer); fill the middle with alternating `{colors.canvas}` and `{colors.canvas-soft}` sections.
- Use `{colors.brand-link-on-dark}` (`#4294ff`) for links on dark surfaces — it is lighter than the standard link blue precisely to maintain contrast.

### Don't
- Don't introduce pill-shaped CTAs. The 5px-radius rectangular button is the brand's explicit CTA shape — there are no 9999px pill buttons in the marketing system.
- Don't use HashiCorp Sans for body copy, captions, or button labels. It lives only at display scale (H1–H3).
- Don't render the brand gradient at icon or badge scale. The diagonal slash at full-bleed hero width is the intended context.
- Don't apply heavy drop-shadows to cards. The 10%-opacity hairline border is the only card chrome; elevation is communicated by surface color, not shadow depth.
- Don't introduce uppercase text at body or display scale. `caption-caps` with wide tracking is the only uppercase treatment, and only for structural labels like the logo strip eyebrow.
- Don't use `{colors.brand-link}` on dark surfaces — it will fail contrast. Switch to `{colors.brand-link-on-dark}` instead.
- Don't promote system-ui body copy to weight 600+. The working set is 400 (body) and 500 (strong / buttons). Weight 600 belongs to the geometric display face only.
