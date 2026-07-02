---
version: alpha
name: Vercel
description: "Vercel is the developer-platform brand that earns minimalism at scale: near-white canvas-soft body, ink-near-black primary text, and a geometric sans (Geist) that does everything — display, body, button, label — at just three weights. The single moment of decoration is a radial mesh gradient (coral-red through amber through mint-teal) that erupts from the lower half of the hero and is the entire ornamental vocabulary. Navigation buttons are measured 6 px square-cornered rectangles; the marketing CTAs are 9999 px pill-shaped — two radius scales coexisting deliberately. The grid is telegraphed by a visible hairline column guide behind the hero, and subtle stacked-shadow cards (8 % inset ring + 4 % 2 px drop) sit directly on the page without ever levitating on heavy shadow."
colors:
  primary: "#171717"
  on-primary: "#ffffff"
  ink: "#171717"
  body: "#4d4d4d"
  mute: "#888888"
  mute-strong: "#999999"
  hairline: "#eaeaea"
  hairline-mid: "#e0e0e0"
  canvas: "#ffffff"
  canvas-soft: "#fafafa"
  link: "#0070f3"
  success: "#0070f3"
  error: "#ee0000"
  warning: "#f5a623"
  accents-2: "#eaeaea"
  accents-3: "#999999"
  accents-4: "#888888"
  accents-6: "#444444"
  accents-8: "#111111"
  gray-300: "#e6e6e6"
  gradient-hero-warm-start: "#ff4d4d"
  gradient-hero-warm-mid: "#f9a825"
  gradient-hero-cool-end: "#50e3c2"
  selection-bg: "#171717"
  selection-fg: "#f2f2f2"
typography:
  display-xl:
    fontFamily: Geist, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 48px
    letterSpacing: -2.28px
  display-lg:
    fontFamily: Geist, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 40px
    letterSpacing: -1.28px
  display-md:
    fontFamily: Geist, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
    letterSpacing: -0.96px
  display-sm:
    fontFamily: Geist, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: -0.6px
  body-lg:
    fontFamily: Geist, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: Geist, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-md-strong:
    fontFamily: Geist, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  body-sm:
    fontFamily: Geist, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: -0.28px
  body-sm-strong:
    fontFamily: Geist, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: -0.28px
  caption:
    fontFamily: Geist, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: Geist, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  button-lg:
    fontFamily: Geist, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  button: 6px
  card: 6px
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
  3xl: 40px
  4xl: 48px
  5xl: 64px
  6xl: 96px
  section: 128px
components:
  nav-bar:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 64px
    padding: "{spacing.sm} {spacing.xl}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-signup:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.xs}
    height: 28px
  nav-cta-login:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.xs}
    height: 28px
  nav-cta-ask-ai:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.xs}
    height: 28px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.md}
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.md}
  button-primary-sm:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.xs}
    height: 28px
  button-secondary-sm:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.xs}
    height: 28px
  hero-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  hero-announcement-badge:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.md}"
  hero-badge-label:
    backgroundColor: "{colors.link}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.xs}"
  card-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  feature-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.6xl} {spacing.lg}"
  showcase-band-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    padding: "{spacing.6xl} {spacing.lg}"
  footer:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    borderColor: "{colors.hairline}"
    padding: "{spacing.4xl} {spacing.lg}"
  badge-event:
    backgroundColor: "{colors.link}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.xs}"
  announcement-bar:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.xl}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.md}
    height: 40px
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  nav-dropdown-panel:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
  ex-pricing-tier:
    description: Default tier card. Canvas surface with hairline border and card-radius chrome.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured/highlighted tier — polarity-flipped to ink primary with on-primary text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: Feature summary card on canvas-soft — re-purposed for SaaS feature tiers.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary panel — line items per add-on, not a literal e-commerce cart.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses brand primary as a left-edge indicator bar.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.md}"
  ex-data-table-cell:
    description: Data-table th + td chrome. Header uses caption weight 500; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card. Canvas surface with form-input primitives inside.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog surface — card-marketing chrome with elevated shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state illustration frame. Generous padding on canvas-soft.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification surface — card-marketing shape with subtle stacked shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"
---
## Overview

Vercel's marketing surface is engineered minimalism: a `{colors.canvas-soft}` `#fafafa` page body so close to white it reads as white until cards lift away from it, carrying an ink-near-black `{colors.primary}` `#171717` that handles every heading, body paragraph, and primary CTA simultaneously. The geometric custom sans (Geist) is the only type face across the entire page — there is no monospaced companion on the marketing surface, no serif, no condensed alternate. Three weights (400 / 500 / 600) carry everything; 600 is the display ceiling.

The single decorative act is the radial mesh gradient in the hero: a coral-red through warm amber through mint-teal bloom that erupts from behind a geometric triangular illustration, filling roughly the lower half of the hero container. It is the brand's entire ornamental vocabulary on this page. Every other surface is neutral — no accent fills, no tinted cards, no gradient buttons.

Two radius scales coexist deliberately and must never be conflated. Navigation and in-page action buttons are measured at exactly 6 px — a tight, squared-corner rectangle. The pair of marketing CTAs ("Start Deploying" and "Get a Demo") are 9999 px pill-shaped. Applying pill geometry to the 6 px contexts, or 6 px to the pill CTAs, breaks the brand's internal logic.

Elevation is expressed through stacked compound shadow: an 8 % opacity 1 px inset ring plus a 4 % opacity 2 px drop, painted over the `{colors.canvas-soft}` body. Cards never float on a heavy single drop-shadow. A visible column-guide grid of `{colors.hairline}` lines behind the hero signals the underlying layout system without imposing it visually.

**Key characteristics:**
- One typeface, three weights, aggressive negative tracking at display scale. Sentence-case headlines, often period-terminated.
- Hero mesh gradient (coral → amber → teal) is the entire decoration system — used at full-bleed hero scale only.
- 6 px button radius for nav/in-page buttons; 9999 px pill for marketing CTAs. Two scales, never mixed.
- Stacked compound shadow (inset ring + micro drop) — never a single heavy drop.
- `{colors.canvas-soft}` body with `{colors.canvas}` card surfaces is the only surface ladder needed for the marketing page.

## Colors

### Brand & Surface
- **Primary / Ink** (`{colors.primary}` — `#171717`): The single black-near-pure tone that carries every headline, body paragraph, primary CTA background, and dark-band surface. The brand is essentially monochromatic outside the hero gradient.
- **Canvas** (`{colors.canvas}` — `#ffffff`): The pure-white card surface. Lifts away from the canvas-soft body through stacked shadow rather than a colour step.
- **Canvas Soft** (`{colors.canvas-soft}` — `#fafafa`): The default page body background — 98 % white. Every section band sits on this tone; it also drives the `meta theme-color`.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): All text and iconography on `{colors.primary}` surfaces — nav signup button, "Start Deploying" pill CTA, dark-band sections.

### Text
- **Body** (`{colors.body}` — `#4d4d4d`): Secondary text — h2-scale subheadings (as measured at 14 px / `-0.28px` tracking), nav-link inactive text, card body copy, footer column text.
- **Mute** (`{colors.mute}` — `#888888`): Low-priority labels, placeholder text, fine print. Maps to the extracted `--accents-4` token.
- **Mute Strong** (`{colors.mute-strong}` — `#999999`): Slightly stronger muted text. Maps to `--accents-3`.
- **Accents 6** (`{colors.accents-6}` — `#444444`): Mid-range text for secondary interactive labels.
- **Accents 8** (`{colors.accents-8}` — `#111111`): Near-black accent; the step just above primary for high-contrast inline contexts.

### Borders & Dividers
- **Hairline** (`{colors.hairline}` — `#eaeaea`): 1 px card borders, input borders, nav-dropdown panel borders. Extracted directly as `--accents-2`. Used as the inset ring in the stacked card shadow.
- **Hairline Mid** (`{colors.hairline-mid}` — `#e0e0e0`): Slightly stronger divider for table rows and section separators.
- **Gray 300** (`{colors.gray-300}` — `#e6e6e6`): The `--color-gray-300` token — used in subtle structural grid lines visible in the hero column guide.

### Semantic
- **Link / Success** (`{colors.link}` — `#0070f3`): The brand's link blue and event-badge fill. Visible as the "Events" label fill in the announcement bar and as the brand's inline link tone.
- **Error** (`{colors.error}` — `#ee0000`): Destructive action and form validation red.
- **Warning** (`{colors.warning}` — `#f5a623`): Caution and pending status. Maps to `--color-yellow-600` family.

### Hero Gradient
The hero's radial mesh gradient is a three-stop bloom:
- **Gradient warm start** (`{colors.gradient-hero-warm-start}` — `#ff4d4d`): The coral-red centre of the radial bloom, visible behind the geometric triangle illustration.
- **Gradient warm mid** (`{colors.gradient-hero-warm-mid}` — `#f9a825`): The amber-orange band spreading outward from the warm centre.
- **Gradient cool end** (`{colors.gradient-hero-cool-end}` — `#50e3c2`): The mint-teal halo at the outer edge of the gradient. The gradient dissolves into the `{colors.canvas-soft}` page background.

Treat the gradient as a single object — do not miniaturise it, do not reduce it to a single stop, do not reorder the colour sequence. It lives at hero scale only.

## Typography

### Font Family
A single geometric sans — Geist, the brand's own custom-cut face — carries the entire system. Three weights only: 400 (body), 500 (buttons, strong labels), 600 (display headings). The face never appears heavier than 600 on the marketing surface. There is no monospaced companion used on this page.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 600 | 48px | -2.28px | Hero headline ("Build and deploy on the AI Cloud."). Measured directly from extraction. |
| `{typography.display-lg}` | 32px | 600 | 40px | -1.28px | Section headlines. Measured directly from h3 extraction. |
| `{typography.display-md}` | 24px | 600 | 32px | -0.96px | Card-cluster headings and feature-card titles. |
| `{typography.display-sm}` | 20px | 600 | 28px | -0.6px | Inline display micro-headings. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0px | Lead paragraph under hero headline. |
| `{typography.body-md}` | 16px | 400 | 24px | 0px | Default body paragraph inside cards and feature sections. |
| `{typography.body-md-strong}` | 16px | 500 | 24px | 0px | Bolded inline body emphasis. |
| `{typography.body-sm}` | 14px | 400 | 20px | -0.28px | Nav links, card captions, footer body, announcement bar text. Measured from h2/button extraction. |
| `{typography.body-sm-strong}` | 14px | 500 | 20px | -0.28px | Nav CTA labels (Log In, Sign Up, Ask AI). |
| `{typography.caption}` | 12px | 400 | 16px | 0px | Event badge label ("Events"), footer fine print. |
| `{typography.button-md}` | 14px | 500 | 20px | 0px | Small button labels — nav-scale and in-page action buttons. |
| `{typography.button-lg}` | 16px | 500 | 24px | 0px | Marketing-scale pill button labels ("Start Deploying", "Get a Demo"). |

### Principles
- **Negative tracking is part of the voice.** Display sizes carry `-2.28 px` to `-0.6 px` tracking. Body stays at neutral or `-0.28 px`. Positive tracking never appears.
- **Sentence-case headlines, often period-terminated.** "Build and deploy on the AI Cloud." ends with a deliberate full stop — that period is a brand marker, not a typo.
- **One face, three weights, hard ceiling at 600.** The brand's display scale never reaches 700 or 800. The system reads restrained because of this.
- **No mono face on the marketing surface.** Unlike many developer platforms, Vercel's marketing page does not deploy a monospaced face for code labels or eyebrows — everything runs through the same geometric sans.

### Note on Font Substitutes
Geist is a proprietary custom face. Open-source substitute: **Inter** (400 / 500 / 600) with `font-feature-settings: "ss01", "ss02"` enabled for geometric alternates. *Satoshi* is a passable secondary option.

## Layout

### Spacing System
- **Base unit**: 4 px. The CSS custom property scale (`4px / 6px / 8px / 12px / 16px / 48px`) is extracted directly from the live page.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 40 px · `{spacing.4xl}` 48 px · `{spacing.5xl}` 64 px · `{spacing.6xl}` 96 px · `{spacing.section}` 128 px.
- **Most-used measured gaps**: 12 px (268 instances), 8 px (178 instances), 6 px (68 instances), 16 px (62 instances), 48 px (34 instances), 4 px (32 instances). The system is genuinely tight — the modal gaps are 12 px, not 24 px.
- **Section padding**: marketing feature bands use `{spacing.4xl}` to `{spacing.6xl}` top/bottom. Hero band stretches to give the mesh gradient room to breathe.
- **Card interior padding**: cards sit at `{spacing.lg}` 16 px — tighter than many marketing systems; the content density is deliberate.

### Grid & Container
- **Column guide**: a visible `{colors.hairline}` column grid is rendered behind the hero as a structural landmark — the brand makes its grid visible at the marketing level.
- **Content max-width**: approximately 1200 px, centred with horizontal gutters of `{spacing.xl}` 24 px at desktop, `{spacing.lg}` 16 px at mobile.
- **Column patterns observed:**
  - Hero: single centred column for headline + body + CTA row.
  - Announcement bar: single centred row with badge + text + CTA.
  - Feature grid: 3-up at desktop, collapsing to 1-up at mobile.
  - Nav: logo left, link row centre, CTA cluster right.

### Whitespace Philosophy
The hero mesh gradient carries all decorative weight; whitespace creates section rhythm. Inside cards, the headline/body stack is tight at `{spacing.md}` 12 px gap — the brand reads dense and information-forward at the card level, then breathes at the section level with `{spacing.4xl}` to `{spacing.6xl}` inter-section gaps. Large section gaps plus tight interior is the consistent pattern.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 600px | Hero stacks vertically; nav collapses; feature grids drop to 1-up; column guide removed. |
| Tablet | 600–959px | Feature grids 2-up; nav still visible. |
| Desktop | 960–1199px | Full 3-up feature grid; hero centred. |
| Wide | ≥ 1200px | Content caps at ~1200 px; bands stretch edge-to-edge in colour. |

#### Touch Targets
Nav CTA buttons (28 px tall at desktop) inflate to a minimum 44 × 44 px touch area on mobile through padding. Marketing pill CTAs render at ~48 px tall and comfortably exceed WCAG touch targets at all viewports.

#### Collapsing Strategy
- **Nav**: full link row + Ask AI / Log In / Sign Up cluster at desktop. Collapses to logo + hamburger at mobile.
- **Hero**: mesh gradient stays centred; headline + body + CTA stacks vertically. No split-hero layout.
- **Feature grids**: 3-up → 2-up → 1-up. Cards keep `{rounded.card}` 6 px radius across all viewports.
- **Announcement bar**: remains a single row at all breakpoints; text may truncate on narrowest mobile.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero and dark-band sections. |
| Level 1 — Inset Ring | `rgba(0,0,0,0.08) 0px 0px 0px 1px` inset border. | The universal card-is-visible cue — hairline ring on canvas against canvas-soft body. |
| Level 2 — Stacked Card | `rgba(0,0,0,0.08) 0px 0px 0px 1px` inset + `rgba(0,0,0,0.04) 0px 2px 2px 0px` drop. | Standard marketing card chrome — extracted directly from live card shadow value. |
| Level 3 — Float | Additional offset layer for slightly elevated interactive surfaces (dropdowns, nav panels). | Nav dropdown panels, hover-elevated cards. |
| Level 4 — Modal | Multi-offset stacked shadow for dialog surfaces. | Modal / dialog containers. |

The brand's stacked shadow formula is exact: the extracted card shadow is `rgba(0,0,0,0) × 4 nulled layers, rgba(0,0,0,0.08) 0 0 0 1px inset ring, rgba(0,0,0,0.04) 0 2px 2px 0 drop, rgb(250,250,250) 0 0 0 1px inner canvas-soft ring`. The innermost `rgb(250,250,250)` ring simulates the body background bleeding to the card edge — a subtle three-layer trick. Never replace this with a single heavy drop.

### Decorative Depth
- **Mesh gradient as atmospheric depth**: the hero's radial bloom (coral → amber → teal) is the only "atmospheric" effect on the page. It sits behind the geometric triangle illustration as a full-bleed backdrop, never cropped to a frame.
- **Column grid as structural depth**: the visible `{colors.hairline}` column guide behind the hero creates a secondary layer of perceived depth without any shadow.
- **Dark-band polarity flip**: switching a section from `{colors.canvas-soft}` to `{colors.primary}` is the brand's chief inter-section depth cue — no gradient needed.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands, column guide lines. |
| `{rounded.xs}` | 4px | Tightest interior radius — sub-badge corners. |
| `{rounded.button}` / `{rounded.sm}` | 6px | **The measured button/CTA radius.** Every nav button (Ask AI, Log In, Sign Up), every in-page action button. Extracted directly as the live button radius. |
| `{rounded.card}` / `{rounded.md}` | 6px | **The measured card radius.** All marketing cards. Extracted directly. Separate token from button even though the value is equal — do not collapse. |
| `{rounded.lg}` | 12px | Larger card chrome for feature-cluster callout panels. |
| `{rounded.xl}` | 16px | Largest card chrome hosting a hero image cap. |
| `{rounded.pill}` / `{rounded.full}` | 9999px | Exclusively for pill-shaped elements: marketing CTA buttons ("Start Deploying", "Get a Demo"), announcement bar, event badge, hero announcement pill. Measured directly from live page. |

### Radius Rule
6 px and 9999 px coexist deliberately. The 6 px radius belongs to nav/action buttons and cards; the 9999 px pill belongs to marketing CTAs and badges. Assigning pill geometry to a nav button or 6 px to a marketing CTA breaks the internal logic.

## Components

### Navigation

**`nav-bar`** — The sticky top navigation.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, height 64 px, padding `{spacing.sm} {spacing.xl}`. Layout: Vercel logo-mark left, product link row centre (Products / Resources / Solutions / Enterprise / Pricing), Ask AI + Log In + Sign Up cluster right.

**`nav-link`** — The centred link row items.
- Text `{colors.body}`, set in `{typography.body-sm}` 14 px / 400, padding `{spacing.xs} {spacing.md}`, ghost pill shape `{rounded.pill}` (visible on hover/active only).

**`nav-cta-signup`** — The black "Sign Up" button.
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.body-sm-strong}`, padding `0px {spacing.xs}`, height 28 px, shape `{rounded.button}` 6 px.

**`nav-cta-login`** — The "Log In" button.
- Background `{colors.canvas}`, text `{colors.ink}`, same typography / height / shape as `nav-cta-signup`.

**`nav-cta-ask-ai`** — The "Ask AI" button with hairline border.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, same typography / height / shape.

### Buttons

**`button-primary`** — The canonical marketing pill CTA ("Start Deploying").
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.button-lg}` 16 px / 500, padding `0px {spacing.md}`, shape `{rounded.pill}` 9999 px. Renders ~48 px tall in the hero CTA row.

**`button-secondary`** — The white pill paired with `button-primary` ("Get a Demo").
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, same typography and pill shape as `button-primary`.

**`button-primary-sm`** — Smaller primary button for in-page actions and announcement CTAs.
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.button-md}` 14 px / 500, shape `{rounded.button}` 6 px, height 28 px.

**`button-secondary-sm`** — Smaller secondary button for in-page actions.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}`, same typography and shape as `button-primary-sm`.

### Cards & Containers

**`card-marketing`** — The standard feature card.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg}` 16 px, shape `{rounded.card}` 6 px. Carries the measured stacked shadow: 8 % inset ring + 4 % 2 px drop + inner canvas-soft ring.

**`hero-band`** — The white/canvas-soft hero with the mesh gradient backdrop.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.lg}`. Contains: announcement badge above, headline in `{typography.display-xl}` (sentence-case, period-terminated), lead body in `{typography.body-lg}`, CTA row with `button-primary` + `button-secondary`. The radial mesh gradient sits behind, filling the lower half of the container.

**`feature-band`** — Section bands hosting feature card grids.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.6xl} {spacing.lg}`. Section headline in `{typography.display-lg}`; supporting body in `{typography.body-md}`.

**`showcase-band-dark`** — The polarity-flipped dark band.
- Background `{colors.primary}`, text `{colors.on-primary}`, padding `{spacing.6xl} {spacing.lg}`. Headline in `{typography.display-lg}` rendered white-on-black.

**`announcement-bar`** — The sub-nav event announcement row ("Ship 26 is coming to 5 cities").
- Background `{colors.canvas-soft}`, text `{colors.body}`, body in `{typography.body-sm}`, padding `{spacing.xs} {spacing.xl}`. Contains: `badge-event` pill ("Events") + plain text + `button-primary-sm` CTA ("Get your ticket").

**`hero-announcement-badge`** — The pill wrapper around the announcement row itself when rendered as a badge.
- Background `{colors.canvas}`, text `{colors.body}`, 1 px solid `{colors.hairline}` border, body in `{typography.body-sm}`, shape `{rounded.pill}`, padding `{spacing.xxs} {spacing.md}`.

**`badge-event`** — The small inline "Events" category pill.
- Background `{colors.link}`, text `{colors.on-primary}`, body in `{typography.caption}` 12 px / 400, shape `{rounded.pill}`, padding `{spacing.xxs} {spacing.xs}`.

**`nav-dropdown-panel`** — The mega-nav dropdown panel.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, body in `{typography.body-sm}`, shape `{rounded.card}` 6 px, padding `{spacing.md}`.

**`footer`** — The bottom multi-column navigation footer.
- Background `{colors.canvas-soft}`, text `{colors.body}`, body in `{typography.body-sm}`, top border 1 px solid `{colors.hairline}`, padding `{spacing.4xl} {spacing.lg}`.

**`form-input`** — The canonical text input.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, body in `{typography.body-sm}` 14 px, padding `0px {spacing.md}`, height 40 px, shape `{rounded.button}` 6 px.

**`link-inline`** — Body-copy inline links.
- Text `{colors.link}` `#0070f3`, body in `{typography.body-md}`, underlined on hover.

### Examples (illustrative)

**`ex-pricing-tier`** — Default pricing tier card. Canvas surface with hairline border.
- `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`** — Featured tier — polarity-flipped to primary with on-primary text.
- `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`** — Feature summary card on canvas-soft. Re-purposed for SaaS feature tiers.
- `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`** — Subscription summary panel — line items per add-on.
- `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`** — Sidebar nav row. Active state uses primary as left-edge indicator.
- `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`** — Data-table th + td chrome. Caption weight headers; body-sm cells.
- `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-auth-form-card`** — Sign-in / sign-up card. Canvas surface with form-input primitives inside.
- `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`** — Modal dialog surface — card-marketing chrome with elevated shadow.
- `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`** — Empty-state illustration frame on canvas-soft.
- `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`** — Toast notification — card-marketing shape with medium stacked shadow.
- `backgroundColor`, `rounded`, `padding`, `typography`

## Do's and Don'ts

### Do
- Use `{rounded.button}` 6 px for every nav button and in-page action button. Use `{rounded.pill}` 9999 px for marketing CTAs and badge pills. Keep the two scales separate.
- Set every headline in `{typography.display-*}` weight 600, sentence-case, often period-terminated. Aggressive negative tracking (`-2.28 px` at 48 px) is part of the voice.
- Deploy the hero mesh gradient (coral → amber → teal) at full-bleed hero scale only. Never miniaturise it, never reduce to a single stop.
- Use `{colors.primary}` `#171717` for every primary CTA background — black ink is the conversion target.
- Layer the stacked card shadow (inset 8 % ring + 4 % 2 px drop + inner canvas-soft ring) exactly. Never substitute a single heavy drop-shadow.
- Use `{colors.canvas-soft}` `#fafafa` as the default page body and cycle to `{colors.primary}` for dark-band polarity-flip sections. That contrast is the only depth cue needed.
- Keep all type in Geist at weights 400 / 500 / 600. Do not reach for 700 or heavier.

### Don't
- Don't apply `{rounded.pill}` to nav buttons or form inputs. 6 px is the measured in-page radius.
- Don't apply `{rounded.button}` 6 px to marketing CTAs. The pill shape is non-negotiable at hero scale.
- Don't render headlines in all-caps or uppercase. Sentence-case plus negative tracking is the brand's typographic identity.
- Don't introduce accent colours outside of the observed palette (link blue for badges, semantic error/warning). The marketing surface is intentionally near-monochromatic.
- Don't replace the stacked compound shadow with a single `box-shadow` drop. The three-layer formula (inset ring + micro drop + inner canvas-soft ring) is the brand's elevation signature.
- Don't miniaturise the hero gradient to a button fill, icon background, or section stripe. It exists only at atmospheric hero scale.
- Don't set body paragraphs in weight 600 or higher. The display ceiling is 600; body is always 400.
- Don't introduce a monospaced face on the marketing surface — Geist handles everything including technical labels on this page.
