---
version: alpha
name: Coinbase
description: "Coinbase is a financial-platform brand whose surface is a crisp white-and-near-black duet broken at hero scale by a deep cobalt-to-sapphire blue gradient that bleeds across the left-hand app mockup — the only place colour lives at full saturation on the marketing page. The brand's typographic voice is carried by two proprietary faces: a rounded, optically-wide display sans (CoinbaseDisplay) at weight 400 for headlines — never bold, never tracked aggressively — and a clean humanist sans (CoinbaseSans) for body and UI. Buttons are large 56px-radius pill-ish capsules in Coinbase blue, a deliberate softness that reads trustworthy rather than aggressive. The design system is confidence through restraint: one accent colour, generous white space, and a card chrome that relies on a single 12px-blur shadow and a hairline border rather than layered depth tricks."
colors:
  primary: "#0052ff"
  on-primary: "#ffffff"
  ink: "#0a0b0d"
  body: "#5b616e"
  mute: "#8a919e"
  hairline: rgba(91, 97, 110, 0.2)
  canvas: "#ffffff"
  canvas-soft: "#f5f5f5"
  link: "#0052ff"
  success: "#05b169"
  success-soft: "#e6f9f0"
  error: "#df1c41"
  error-soft: "#fce8ec"
  warning: "#f5a623"
  gradient-hero-start: "#1652f0"
  gradient-hero-end: "#0a0b8a"
  chart-positive: "#05b169"
  chart-line: "#0052ff"
  badge-bg: "#e8efff"
  badge-text: "#0052ff"
typography:
  display-xl:
    fontFamily: CoinbaseDisplay, -apple-system, system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif
    fontSize: 80px
    fontWeight: 400
    lineHeight: 80px
    letterSpacing: normal
  display-lg:
    fontFamily: CoinbaseDisplay, -apple-system, system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 56px
    letterSpacing: normal
  display-md:
    fontFamily: CoinbaseDisplay, -apple-system, system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif
    fontSize: 32px
    fontWeight: 400
    lineHeight: 40px
    letterSpacing: normal
  display-sm:
    fontFamily: CoinbaseDisplay, -apple-system, system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: normal
  body-lg:
    fontFamily: CoinbaseSans, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: CoinbaseSans, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: CoinbaseSans, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  body-sm:
    fontFamily: CoinbaseSans, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: CoinbaseSans, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  caption:
    fontFamily: CoinbaseSans, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: CoinbaseSans, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  button-sm:
    fontFamily: CoinbaseSans, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  label-nav:
    fontFamily: CoinbaseSans, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  button: 56px
  pill: 100000px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 80px
  5xl: 96px
  section: 128px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label-nav}"
    height: 64px
    padding: "{spacing.md} {spacing.lg}"
    borderBottom: 1px solid {colors.hairline}
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label-nav}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-signin:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.md}
    height: 40px
    border: 1px solid {colors.hairline}
  nav-cta-signup:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.md}
    height: 40px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.lg}
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.lg}
    border: 1px solid {colors.hairline}
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.md}
  icon-button-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: 1px solid {colors.hairline}
    rounded: "{rounded.button}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.3xl} {spacing.lg}"
  hero-app-mockup:
    backgroundColor: "{colors.gradient-hero-start}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.lg}
    height: 56px
    border: 1px solid {colors.hairline}
  card-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md} {spacing.md} {spacing.md}"
    border: 1px solid {colors.hairline}
    shadow: rgba(0, 0, 0, 0.12) 0px 8px 12px 0px
  card-asset:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xs} {spacing.md} {spacing.md}"
    border: 1px solid {colors.hairline}
    shadow: rgba(0, 0, 0, 0.12) 0px 8px 12px 0px
  badge-promo:
    backgroundColor: "{colors.badge-bg}"
    textColor: "{colors.badge-text}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.sm}"
  announcement-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.lg}"
    borderBottom: 1px solid {colors.hairline}
  asset-list-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "{spacing.xs} {spacing.md}"
  asset-price-positive:
    textColor: "{colors.success}"
    typography: "{typography.body-sm-strong}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.2xl} {spacing.lg}"
    borderTop: 1px solid {colors.hairline}
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  legal-caption:
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    padding: 0px {spacing.lg}
  tab-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.sm}"
    border: 1px solid {colors.hairline}
  ex-pricing-tier:
    description: Default tier card. Canvas surface with hairline border and single drop shadow.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: Featured tier — polarity-flipped to Coinbase blue surface with white text and white CTA.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-product-selector:
    description: Asset or product summary card — repurposed for crypto asset or account type selection.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  ex-cart-drawer:
    description: Order summary panel for crypto purchase flows — line items per asset, not a literal cart.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row for the Coinbase dashboard. Active state uses primary blue as a left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.md}"
  ex-data-table-cell:
    description: Asset price table row. Header uses body-sm-strong; body uses body-sm. Positive delta in success green.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.body-sm-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card. Uses card-marketing chrome with form-input primitives and button-primary CTA.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-modal-card:
    description: Modal dialog surface — card-marketing chrome with elevated shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-empty-state-card:
    description: Empty-state frame on canvas-soft with generous padding.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.2xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — card-marketing shape with body-sm text and single drop shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Coinbase is a crypto-financial platform brand whose marketing surface operates on a fundamentally sparse register — white canvas, near-black ink, and a single cobalt-blue primary (`{colors.primary}`) that carries every conversion target on the page. The decorative system is exactly one object: a deep blue-to-indigo gradient that bleeds across the hero app mockup panel on the left side of the split hero, bringing the product into view without resorting to illustration or pattern. That gradient IS the atmosphere; outside of it, colour disappears almost entirely.

The typographic voice is distinctive and restrained. Two proprietary faces carry the system — CoinbaseDisplay, a rounded geometric display sans used exclusively at weight 400 for all headlines (never heavier), and CoinbaseSans, a humanist sans for body, labels, and UI text. The decision to set 80px headlines at weight 400 rather than 700 is deliberate and brand-defining: it reads as calm authority rather than urgency, which is exactly the posture a financial platform needs to earn consumer trust. Tracking is left at optical default — no aggressive negative spacing, no uppercase treatment.

Buttons are the second major brand signal. The primary CTA is a large capsule at 56px radius — softer than a strict rectangle, not quite a true pill — set in bold CoinbaseSans against `{colors.primary}` cobalt. The secondary nav sign-in button inverts to white with a hairline border using the same 56px capsule geometry. This consistent radius across primary and secondary actions unifies the interactive chrome and makes the brand's interactive layer immediately recognisable.

Surface depth is almost entirely absent. Cards use a single `rgba(0,0,0,0.12) 0px 8px 12px` drop shadow plus a faint `rgba(91,97,110,0.2)` hairline border — one shadow, one ring, no stacking. The page background stays at pure white `{colors.canvas}` throughout; there is no canvas-soft alternation in the marketing zones. Whitespace and generous section padding do all the separation work that other brands delegate to background colour changes.

**Key Characteristics:**
- A single cobalt primary `{colors.primary}` carries every CTA — sign up, sign in, form submit. The brand has one conversion colour.
- The hero app mockup is the only zone where the blue gradient appears at saturation; everywhere else the page is white and near-black.
- CoinbaseDisplay weight 400 for all display sizes — never bolded. Calm authority is the typographic voice.
- 56px-radius capsule buttons are the brand's interactive fingerprint. Not a pill, not a rectangle — a deliberate middle geometry.
- Cards use a single `8px-blur` drop shadow plus hairline border. No layered stacking, no inset ring tricks.
- Asset price rows show green positive deltas (`{colors.success}`) as the only secondary colour in the data layer.

## Colors

### Brand & Accent
- **Primary Blue** (`{colors.primary}` — `#0052ff`): The single conversion colour. Every primary CTA button, the app mockup gradient base, inline links, and active state indicators. It is used nowhere as a background outside of interactive elements and the hero mockup.
- **Gradient Hero Start** (`{colors.gradient-hero-start}` — `#1652f0`): The brighter stop of the hero app mockup gradient — the cobalt face of the dashboard panel shown in the screenshot.
- **Gradient Hero End** (`{colors.gradient-hero-end}` — `#0a0b8a`): The deep indigo terminus of the hero gradient — the dark base of the phone/dashboard panel.
- **Badge Blue** (`{colors.badge-bg}` — `#e8efff`) / **Badge Text** (`{colors.badge-text}` — `#0052ff`): A soft blue fill used for promotional badges and "new feature" announcement pills — the blue-tinted chip visible at the top announcement bar.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The universal page and card background. Coinbase does not use an off-white body tone — every section sits on pure white.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f5f5f5`): A very light gray used for inset table header rows and secondary surface zones.

### Text
- **Ink** (`{colors.ink}` — `#0a0b0d`): Every headline and primary body paragraph. Near-black rather than pure black — warmer and softer.
- **Body** (`{colors.body}` — `#5b616e`): Secondary text — sub-headings, nav labels, footer body, caption lines. A warm mid-gray.
- **Mute** (`{colors.mute}` — `#8a919e`): Lowest-priority text — placeholders, fine print, legal disclaimers.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): All text on `{colors.primary}` blue surfaces.

### Semantic
- **Hairline** (`{colors.hairline}` — `rgba(91, 97, 110, 0.2)`): Card borders, input borders, row dividers, nav bottom rule. The semi-transparent value means it adapts slightly to underlying surface tone.
- **Success** (`{colors.success}` — `#05b169`): Positive price deltas in the asset list (the green `↑ $131.36 (1.38%)` visible in the screenshot). Also used for success confirmation states.
- **Success Soft** (`{colors.success-soft}` — `#e6f9f0`): The pastel background for success banners or positive-state pill badges.
- **Error** (`{colors.error}` — `#df1c41`): Destructive actions, validation errors, negative price deltas.
- **Error Soft** (`{colors.error-soft}` — `#fce8ec`): Error banner / field background.
- **Warning** (`{colors.warning}` — `#f5a623`): Caution states — pending transaction, incomplete verification.
- **Chart Line** (`{colors.chart-line}` — `#0052ff`): The asset price sparkline colour in the hero app mockup — matches primary blue.
- **Chart Positive** (`{colors.chart-positive}` — `#05b169`): Green positive price movement, matching `{colors.success}`.

## Typography

### Font Families
Two proprietary faces carry the entire brand:

1. **CoinbaseDisplay** — a rounded, optically-wide geometric display sans used for every headline at weight 400. Never heavier. The roundness softens what could read as a cold financial interface. Used from 20px sub-headings up to 80px hero headlines. Open-source substitute: *Plus Jakarta Sans* (400) or *DM Sans* (400) — both share the rounded geometric character.
2. **CoinbaseSans** — a clean humanist sans for all body copy, labels, navigation, and button text. Weight 400 for body; weight 600 for strong text and button labels. Open-source substitute: *Inter* (400/600).

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 80px | 400 | 80px | normal | Hero headline ("The future of finance is here.") — CoinbaseDisplay, weight 400. |
| `{typography.display-lg}` | 48px | 400 | 56px | normal | Major section headlines. |
| `{typography.display-md}` | 32px | 400 | 40px | normal | Section sub-headings and card cluster titles. |
| `{typography.display-sm}` | 20px | 400 | 28px | normal | Card-level headings and feature call-outs. |
| `{typography.body-lg}` | 18px | 400 | 28px | — | Lead paragraphs beneath hero headline. |
| `{typography.body-md}` | 16px | 400 | 24px | — | Default body paragraph. Nav labels. |
| `{typography.body-md-strong}` | 16px | 600 | 24px | — | Bolded inline body, nav link emphasis. |
| `{typography.body-sm}` | 14px | 400 | 20px | — | Secondary body, footer lines, legal text. |
| `{typography.body-sm-strong}` | 14px | 600 | 20px | — | Asset delta labels, badge text, table header. |
| `{typography.caption}` | 12px | 400 | 16px | — | Legal disclaimer lines at the bottom of the hero. |
| `{typography.button-md}` | 16px | 600 | 24px | — | All marketing-scale and nav CTA button labels. |
| `{typography.button-sm}` | 14px | 600 | 20px | — | Smaller button labels inside cards. |
| `{typography.label-nav}` | 16px | 400 | 24px | — | Top-level nav link labels (Cryptocurrencies, Individuals, etc.). |

### Principles
- **Weight 400 is the display ceiling.** CoinbaseDisplay never appears heavier than 400. This is the brand's primary trust signal — calm, not aggressive.
- **No tracking manipulation.** Letter-spacing is left at optical default throughout. The brand does not use negative tracking at display sizes; the rounded geometry of CoinbaseDisplay already provides optical comfort at large sizes.
- **Sentence-case headlines.** "The future of finance is here." — sentence-case with a terminal period. The period is a deliberate editorial choice that mirrors the calm authority posture.
- **CoinbaseSans carries the action layer.** Buttons, nav, labels, and body copy all sit in CoinbaseSans. Only headlines step into CoinbaseDisplay.
- **Weight 600 is the button/strong ceiling in body copy.** The brand's interactive and emphasis layer tops out at semibold — matching the single-weight display restraint.

### Note on Font Substitutes
Both faces are proprietary. Open-source fallbacks:
- **CoinbaseDisplay** — *Plus Jakarta Sans* (weight 400) is the closest rounded geometric match. *DM Sans* is a passable second.
- **CoinbaseSans** — *Inter* (400/600) is the closest humanist match at body sizes.

## Layout

### Spacing System
- **Base unit**: 4px. The extracted scale (`4 / 8 / 10 / 12 / 16 / 32`) maps cleanly onto a 4px grid with a `10px` micro-step used for tight UI gaps.
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.2xl}` 48px · `{spacing.3xl}` 64px · `{spacing.4xl}` 80px · `{spacing.5xl}` 96px · `{spacing.section}` 128px.
- **Section padding**: marketing bands use `{spacing.3xl}` to `{spacing.4xl}` top/bottom. The hero band uses `{spacing.4xl}` to give the app mockup panel and the headline sufficient air.
- **Card interior padding**: asset cards use `{spacing.xs} {spacing.md} {spacing.md}` (matching the extracted `8px 16px 16px`). Marketing feature cards use `{spacing.md}` on all sides.
- **Inline gap**: button rows in the hero use `{spacing.sm}` between the email input and the CTA button. Nav item gaps use `{spacing.md}`.

### Grid & Container
- **Max width**: approximately 1200px; content centres with horizontal gutters of `{spacing.lg}` on desktop, `{spacing.md}` on mobile.
- **Column patterns**:
  - Hero: 50/50 split at desktop — app mockup panel on the left, headline + form on the right. Stacks to single column at mobile.
  - Asset list: single column list inside the hero app mockup card.
  - Feature card row: 3-up or 4-up at desktop, 1-up at mobile.
  - Announcement bar: full-width single row centred text.

### Whitespace Philosophy
Coinbase uses whitespace as the primary section separator. Unlike brands that cycle background colours through bands, this page stays on white throughout — the visual breathing room between sections comes entirely from generous vertical padding and typographic scale changes. The split hero allocates roughly half the viewport width to the blue gradient mockup, which acts as the only "decorative weight" on the page. Inside cards, padding is relatively tight (`{spacing.md}`) because the card shadow and border provide sufficient visual enclosure without needing expansive internal padding.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 600px | Hero stacks to single column; nav collapses; app mockup panel may hide or scale down. |
| Tablet | 600–959px | Hero may stay split at reduced scale; 3-up card rows drop to 2-up. |
| Desktop | 960–1199px | Full split hero; 3-up feature cards. |
| Wide | ≥ 1200px | Content caps at ~1200px; bands stretch edge-to-edge. |

#### Touch Targets
The primary CTA button renders at approximately 56px tall in the hero (matching the 56px radius capsule geometry). Nav CTAs render at 40px. Both comfortably meet the 44×44px WCAG touch floor.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed page background, hero band background. |
| Level 1 — Hairline Ring | `1px solid rgba(91, 97, 110, 0.2)` border only. | Input fields, ghost button outlines, nav separator. |
| Level 2 — Card Drop | `rgba(0, 0, 0, 0.12) 0px 8px 12px 0px` plus hairline border. | All marketing cards, asset list cards — the brand's universal "card" cue. |
| Level 3 — Modal | More pronounced shadow (same blur, higher opacity) plus hairline border. | Modal dialogs and elevated drawer panels. |

The brand uses a SINGLE drop shadow per card — one offset, one blur, no stacking. This is a deliberate choice that keeps the surface reading as light and trustworthy rather than heavy and layered. The inset hairline border ensures the card edge stays crisp without competing with the shadow.

### Decorative Depth
- **Blue gradient as the hero's sole atmospheric effect**: the deep cobalt-to-indigo gradient on the app mockup panel is the brand's only decorative surface at marketing scale. It is treated as a contained panel, not a full-bleed backdrop.
- **White-on-white section separation**: the brand relies on padding and typography scale rather than alternating background colours. There are no dark polarity-flipped bands on this marketing page.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed announcement bar, footer. |
| `{rounded.xs}` | 4px | Tightest internal UI elements. |
| `{rounded.sm}` | 8px | Small UI chips, inner elements. |
| `{rounded.md}` | 16px | Ghost/secondary UI buttons at nav scale. |
| `{rounded.lg}` | 24px | The brand's card radius — all marketing cards and asset panel cards. |
| `{rounded.xl}` | 32px | Larger card chrome variants. |
| `{rounded.button}` | 56px | The primary CTA capsule — every `button-primary`, `nav-cta-signup`, `nav-cta-signin`, and hero form submit button. Non-negotiable. |
| `{rounded.pill}` | 100000px | True pill elements — promo badges, announcement chips, tab pills. |
| `{rounded.full}` | 9999px | Circular icon buttons (search, globe icon in nav). |

## Components

### Buttons

**`button-primary`** — the canonical 56px-radius cobalt capsule, marketing scale.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}` (16px / 600), padding `0px {spacing.lg}`, shape `{rounded.button}` 56px.

**`button-secondary`** — the white capsule with hairline border, paired with the primary CTA.
- Background `{colors.canvas}`, text `{colors.ink}`, same typography + radius as `button-primary`, 1px solid `{colors.hairline}` border.

**`button-ghost`** — smaller, lower-emphasis button for card-level actions.
- Background transparent, text `{colors.ink}`, label in `{typography.button-sm}`, shape `{rounded.md}` 16px.

**`icon-button-circular`** — the circular icon containers in the nav (search, globe).
- Background `{colors.canvas}`, dark icon, 1px solid `{colors.hairline}` border, shape `{rounded.full}`.

**Nav CTAs:**

**`nav-cta-signin`** — the white "Sign in" button in the nav row.
- Background `{colors.canvas}`, text `{colors.ink}`, label `{typography.button-md}`, height 40px, shape `{rounded.button}` 56px, 1px solid `{colors.hairline}` border.

**`nav-cta-signup`** — the cobalt "Sign up" button in the nav row.
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.button-md}`, height 40px, shape `{rounded.button}` 56px.

### Cards & Containers

**`card-asset`** — the dominant card type — the dashboard asset panel inside the hero mockup.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.xs} {spacing.md} {spacing.md}`, shape `{rounded.lg}` 24px, 1px `{colors.hairline}` border, single `rgba(0,0,0,0.12) 0px 8px 12px` drop shadow.

**`card-marketing`** — standard marketing feature card.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md}`, shape `{rounded.lg}` 24px, same shadow as `card-asset`.

**`hero-app-mockup`** — the blue gradient app preview panel in the hero.
- Background gradient `{colors.gradient-hero-start}` → `{colors.gradient-hero-end}`, shape `{rounded.lg}` 24px, padding `{spacing.md}`. Contains `card-asset` panel inside.

### Inputs & Forms

**`form-input`** — the hero email input field.
- Background `{colors.canvas}`, text `{colors.ink}`, placeholder in `{colors.body}`, 1px solid `{colors.hairline}` border, body in `{typography.body-md}`, padding `0px {spacing.lg}`, height 56px, shape `{rounded.button}` 56px (matches CTA radius to create the unified input+button row chrome).

### Navigation

**`nav-bar`** — the top navigation.
- Background `{colors.canvas}`, text `{colors.ink}`, height 64px, padding `{spacing.md} {spacing.lg}`. Layout: logo left, link row centre, icon buttons + "Sign in" + "Sign up" cluster right. Bottom 1px `{colors.hairline}` rule.

**`nav-link`** — the primary navigation link items (Cryptocurrencies, Individuals, Businesses, etc.).
- Text `{colors.ink}`, set in `{typography.label-nav}`, padding `{spacing.xs} {spacing.md}`.

**`announcement-bar`** — the top-of-page promotional banner ("Earn up to $2,000 when you buy $50 in crypto").
- Background `{colors.canvas}`, text `{colors.ink}`, body in `{typography.body-sm}`, padding `{spacing.xs} {spacing.lg}`, underlined link in `{colors.primary}`, 1px `{colors.hairline}` bottom rule.

### Data & Asset Display

**`asset-list-row`** — a single row in the asset breakdown list (Crypto, Stocks, Derivatives, etc.).
- Background `{colors.canvas}`, text `{colors.ink}`, body in `{typography.body-md}`, padding `{spacing.xs} {spacing.md}`. Asset name left, value right.

**`asset-price-positive`** — the green positive delta label.
- Text `{colors.success}`, set in `{typography.body-sm-strong}`. Prefixed with an up-arrow character.

**`tab-pill`** — the time-range selector tabs (1H, 1D, 1W, 1M, 1Y, All) inside the chart panel.
- Background `{colors.canvas}`, text `{colors.ink}`, label in `{typography.body-sm-strong}`, shape `{rounded.pill}`, 1px `{colors.hairline}` border. Active tab: background `{colors.primary}`, text `{colors.on-primary}`.

**`badge-promo`** — inline promotional badge / chip.
- Background `{colors.badge-bg}`, text `{colors.badge-text}`, body in `{typography.body-sm-strong}`, shape `{rounded.pill}`, padding `{spacing.xxs} {spacing.sm}`.

### Page-Level

**`hero-band`** — the split hero section.
- Background `{colors.canvas}`, padding `{spacing.3xl} {spacing.lg}`. Left column: `hero-app-mockup`. Right column: headline in `{typography.display-xl}`, body in `{typography.body-lg}`, then the email `form-input` + `button-primary` row.

**`footer`** — the bottom navigation band.
- Background `{colors.canvas}`, text `{colors.body}`, body in `{typography.body-sm}`, padding `{spacing.2xl} {spacing.lg}`, 1px `{colors.hairline}` top rule.

**`link-inline`** — body-copy inline links (the announcement bar underline link).
- Text `{colors.link}`, body in `{typography.body-md}`, underlined.

**`legal-caption`** — the fine-print disclaimer block below the hero.
- Text `{colors.body}`, set in `{typography.caption}`, padding `0px {spacing.lg}`.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (`#0052ff`) exclusively for primary CTAs, active states, inline links, and the hero gradient. It is the brand's only accent — protect its scarcity.
- Use `{rounded.button}` 56px for every CTA button — primary and secondary alike. The consistent capsule geometry is the brand's interactive fingerprint.
- Set all display headlines in CoinbaseDisplay weight 400. The calm, unbolded display scale is the brand's trust signal — never promote it to 600 or 700.
- Use the blue gradient exclusively inside the hero app mockup panel. It is a contained product preview, not a page backdrop.
- Apply the single card shadow (`rgba(0,0,0,0.12) 0px 8px 12px`) plus `{colors.hairline}` border to all cards. Do not layer multiple shadows.
- Keep `{colors.success}` (`#05b169`) for positive financial deltas and confirmation states only. It has a specific semantic meaning in the financial context.
- Use `{colors.canvas}` white as the universal page background. Do not introduce alternating background-colour bands — Coinbase separates sections with padding and type scale, not surface colour.

### Don't
- Don't bold CoinbaseDisplay beyond weight 400. The 80px hero headline at weight 400 is intentional and non-negotiable.
- Don't apply negative letter-spacing to display sizes. Coinbase uses optical default tracking — enforcing aggressive negative tracking breaks the rounded character of the display face.
- Don't use `{rounded.lg}` 24px for buttons. Cards are 24px, buttons are 56px — the two radii must never cross.
- Don't miniaturise or crop the hero gradient to a small swatch, icon, or button fill. The gradient lives inside the app mockup panel at hero scale only.
- Don't introduce a second accent colour. The cobalt primary is the brand's only saturated hue on marketing surfaces.
- Don't set headlines in CoinbaseSans. CoinbaseDisplay and CoinbaseSans have strictly separated roles — display face for headlines, sans for everything interactive and body.
- Don't use `{rounded.pill}` 100000px for CTA buttons. True pills are reserved for badges, chips, and time-range tab selectors — not the primary conversion action.
