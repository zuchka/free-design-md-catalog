---
version: alpha
name: Mintlify
description: "Mintlify is a knowledge-infrastructure brand whose surface is a warm near-white — cream-tinted canvas rather than sterile white — broken at hero scale by a fine-line generative arc system in lime-to-cyan gradients that suggests data flowing through a network. The headline face is a proprietary editorial serif (arizonaFlare) used at unexpectedly large scale with aggressive negative tracking, which is the single most distinctive design decision on the page: soft letterforms at heavy optical size, sentence-case, no period. The body system is Inter, neutral and utilitarian, letting the serif do the personality work. The brand's single accent color is a vivid botanical green (#0c8c5e) that appears in the logo, the active sidebar indicator, the stat badge, and every primary CTA — nothing else earns that hue."

colors:
  primary: "#0c8c5e"
  primary-vivid: "#1fa77a"
  primary-light: "#d2f7ea"
  primary-speedy: "#18e299"
  on-primary: "#ffffff"
  ink: "#050505"
  ink-60: "rgba(6,6,6,0.6)"
  ink-40: "rgba(6,6,6,0.4)"
  body: "#717d79"
  hairline: "rgba(0,0,0,0.04)"
  hairline-secondary: "rgba(0,0,0,0.06)"
  hairline-tertiary: "rgba(0,0,0,0.08)"
  hairline-solid: "#050505"
  canvas: "#fefdfb"
  canvas-secondary: "#faf8f5"
  canvas-tertiary: "#ebe9e6"
  canvas-gray-subtle: "#f7f6f4"
  neutral-300: "#cfcdca"
  purple: "#d87cff"
  pink: "#ffa3d3"
  orange: "#ffa723"
  gradient-arc-start: "#18e299"
  gradient-arc-end: "#6dee6b"
  black-8: "rgba(0,0,0,0.08)"
  white: "#ffffff"

typography:
  display-xl:
    fontFamily: "arizonaFlare, \"arizonaFlare Fallback\", Georgia, serif"
    fontSize: 50px
    fontWeight: 400
    lineHeight: 52px
    letterSpacing: -2px
  display-lg:
    fontFamily: "arizonaFlare, \"arizonaFlare Fallback\", Georgia, serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 40px
    letterSpacing: -1px
  display-md:
    fontFamily: "arizonaFlare, \"arizonaFlare Fallback\", Georgia, serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: -0.24px
  display-sm:
    fontFamily: "arizonaFlare, \"arizonaFlare Fallback\", Georgia, serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: normal
  body-lg:
    fontFamily: "inter, \"inter Fallback\", system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 27px
  body-md:
    fontFamily: "inter, \"inter Fallback\", system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: "inter, \"inter Fallback\", system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-medium:
    fontFamily: "inter, \"inter Fallback\", system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  caption:
    fontFamily: "inter, \"inter Fallback\", system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: "inter, \"inter Fallback\", system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  button-lg:
    fontFamily: "inter, \"inter Fallback\", system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px

rounded:
  none: 0px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  2xl: 16px
  3xl: 24px
  4xl: 32px
  pill: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 48px
  4xl: 64px
  5xl: 96px
  6xl: 128px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 64px
    padding: "{spacing.sm} {spacing.xl}"
    borderBottom: "1px solid {colors.hairline-secondary}"
  nav-link:
    textColor: "{colors.ink-60}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxs} {spacing.xs}"
  nav-cta-contact:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-signin:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xs} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.xl}"
    padding: "{spacing.sm} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.xl}"
    padding: "{spacing.sm} {spacing.lg}"
    border: "1px solid {colors.hairline-tertiary}"
  badge-stat:
    backgroundColor: "{colors.canvas-secondary}"
    textColor: "{colors.ink}"
    accentColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxs} {spacing.sm}"
    border: "1px solid {colors.hairline-secondary}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  card-feature:
    backgroundColor: "#f9f6f3"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline-tertiary}"
  card-doc-preview:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline-secondary}"
  sidebar-nav:
    backgroundColor: "{colors.canvas-secondary}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.sm} {spacing.md}"
  sidebar-nav-active:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm-medium}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxs} {spacing.xs}"
    accentBar: "{colors.primary}"
  tab-pill:
    backgroundColor: "{colors.canvas-secondary}"
    textColor: "{colors.ink-60}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.md}"
  tab-pill-active:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-medium}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.md}"
    border: "1px solid {colors.hairline-secondary}"
  link-inline:
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    textDecoration: underline
  form-input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-tertiary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxs} {spacing.sm}"
    height: 36px
  footer:
    backgroundColor: "{colors.canvas-secondary}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.xl}"
  logo-wordmark:
    textColor: "{colors.ink}"
    accentColor: "{colors.primary}"
    typography: "{typography.body-sm-medium}"
  arc-decoration:
    strokeStart: "{colors.gradient-arc-start}"
    strokeEnd: "{colors.gradient-arc-end}"
  showcase-band:
    backgroundColor: "{colors.canvas-secondary}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.5xl} {spacing.xl}"
  ex-pricing-tier:
    description: "Default pricing tier card on cream canvas-secondary surface."
    backgroundColor: "{colors.canvas-secondary}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-tertiary}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured pricing tier — polarity-flipped to ink fill with white text."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  ex-auth-form-card:
    description: "Sign-in card. Cream canvas surface with form-input primitives inside."
    backgroundColor: "{colors.canvas-secondary}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as card-feature with elevated shadow."
    backgroundColor: "{colors.white}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  ex-app-shell-row:
    description: "Sidebar nav row. Active state uses brand primary as the left-edge indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxs} {spacing.sm}"
  ex-data-table-cell:
    description: "Data table chrome. Header uses caption uppercase Inter; body uses body-sm."
    headerBackground: "{colors.canvas-secondary}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xxs} {spacing.sm}"
    rowBorder: "{colors.hairline-secondary}"
  ex-toast:
    description: "Toast notification — card-feature shape at small scale."
    backgroundColor: "{colors.white}"
    rounded: "{rounded.xl}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
  ex-empty-state-card:
    description: "Empty-state illustration frame on canvas-secondary."
    backgroundColor: "{colors.canvas-secondary}"
    rounded: "{rounded.xl}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-product-selector:
    description: "Feature summary card for plan tiers and included capabilities."
    backgroundColor: "{colors.canvas-secondary}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: "Subscription summary — line items per add-on."
    backgroundColor: "{colors.white}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline-secondary}"

---

## Overview

Mintlify is a documentation infrastructure brand positioned at the intersection of developer tooling and editorial craft — a pairing that is immediately legible in its visual language. The page's first surprise is the headline typeface: arizonaFlare, a proprietary editorial serif (related to the Arizona Variable family) set at 50 px with −2 px letter-spacing, weight 400. That choice is conspicuous in a product space dominated by geometric sans-serifs, and it reads as a deliberate brand statement — "we take prose seriously." Beneath it, Inter carries all body copy, labels, and navigation, keeping the utilitarian layer clean and familiar.

The surface palette is warm, not cold. The page background is `{colors.canvas}` (`#fefdfb`), a barely-tinted cream rather than pure white, and the card background (`#f9f6f3`) continues that warm step down. There is no dark-mode polarity flip anywhere in the marketing surface; the brand operates in a single warm-light register throughout. The sole punch of saturated color is a botanical green — `{colors.primary}` (`#0c8c5e`) — that appears in the logomark, the active sidebar indicator in the doc preview, the stat badge accent, and the "Get started" CTA arrow. Nothing else earns that hue.

The hero's decorative system is a network of fine generative arcs in lime-to-cyan gradient strokes, radiating from a vanishing point at the right edge of the viewport. These arcs function the same way Vercel's mesh gradient does — they are the entire decorative language, used at hero scale only, never miniaturised into an icon or badge. The arcs suggest data routing, knowledge graphs, and interconnected agents without resorting to literal illustration.

Component shapes are uniformly 12 px radius (`{rounded.xl}`) for cards and doc-preview surfaces, with the primary CTA button also landing at 12 px — a shape that reads as rounded-rectangle rather than pill. The brand does not use pill-shaped marketing CTAs; it stays in a tighter, more precise rectangle that feels more tool-like than consumer-app. Navigation links are ghost text with a subtle 6 px rounded hover state; the only filled nav button is the black "Contact sales" rectangle.

## Colors

### Brand Accent
- **Primary** (`{colors.primary}` — `#0c8c5e`): The single brand green. Appears in the logomark leaf, the active sidebar nav indicator, the stat badge percentage text, and as the arrow icon inside the "Get started" CTA. Never used as a fill on a large surface.
- **Primary Vivid** (`{colors.primary-vivid}` — `#1fa77a`): The lighter, slightly more luminous green used for hover states and the logo's secondary rendering.
- **Primary Light** (`{colors.primary-light}` — `#d2f7ea`): A very soft mint fill used as the active sidebar row background and informational badge backgrounds.
- **Primary Speedy / Arc Start** (`{colors.primary-speedy}` / `{colors.gradient-arc-start}` — `#18e299`): The bright mint that anchors the generative arc decoration and appears as the vivid stop in the gradient system.
- **Arc End** (`{colors.gradient-arc-end}` — `#6dee6b`): The lime-green terminus of the hero arc gradient.

### Surface
- **Canvas** (`{colors.canvas}` — `#fefdfb`): The default page background — a barely-perceptible warm cream. Not pure white; the warmth is intentional.
- **Canvas Secondary** (`{colors.canvas-secondary}` — `#faf8f5`): Card and sidebar backgrounds — one step deeper than canvas. Used for the doc-preview sidebar and most feature card fills.
- **Canvas Tertiary** (`{colors.canvas-tertiary}` — `#ebe9e6`): The deepest light surface step, for inset regions and divider fills.
- **White** (`{colors.white}` — `#ffffff`): Pure white, used for card chrome inside the doc preview and modal surfaces — where contrast against canvas-secondary is needed.

### Text
- **Ink** (`{colors.ink}` — `#050505`): Near-black for all headings and primary body text. Resolved from the lab() value `lab(2.42579 -0.165291 -0.470081)`.
- **Ink 60** (`{colors.ink-60}` — `rgba(6,6,6,0.6)`): Secondary text — nav-link inactive state, sub-headings.
- **Ink 40** (`{colors.ink-40}` — `rgba(6,6,6,0.4)`): Lowest-priority text — placeholders, deemphasised captions.
- **Body** (`{colors.body}` — `#717d79`): Mid-level muted text for footer body and secondary labels.
- **Neutral 300** (`{colors.neutral-300}` — `#cfcdca`): Hairline-level gray for decorative dividers and inactive toggles.

### Borders
- **Hairline** (`{colors.hairline}` — `rgba(0,0,0,0.04)`): The lightest border — primary card borders, barely visible on warm canvas.
- **Hairline Secondary** (`{colors.hairline-secondary}` — `rgba(0,0,0,0.06)`): Standard dividers — nav bottom border, doc-preview chrome.
- **Hairline Tertiary** (`{colors.hairline-tertiary}` — `rgba(0,0,0,0.08)`): Slightly stronger — card borders in feature grids, input borders.

### Decorative / Semantic
- **Purple** (`{colors.purple}` — `#d87cff`): Appears in the sidebar feature row as a component-type color indicator.
- **Pink** (`{colors.pink}` — `#ffa3d3`): Secondary decorative accent in the sidebar illustration area.
- **Orange** (`{colors.orange}` — `#ffa723`): A third decorative accent visible in feature indicator dots.

## Typography

### Font Families
Two faces carry the entire system:

1. **arizonaFlare** — A proprietary editorial serif used exclusively for display-scale headings. Weight 400 only; the face never appears bold or in body copy. Its optical personality — slightly flared serifs, tall x-height, elegant terminals — is the brand's primary differentiator against the developer-tools category norm. At 50 px / −2 px tracking it reads as intentionally editorial. Open-source substitute: *DM Serif Display* at 400 is the closest stylistic match; *Playfair Display* is a passable second.

2. **Inter** — The universal system sans for all body, label, button, nav, caption, and UI text. Weights 400 and 500. Nothing in the UI uses 600 or heavier; the brand's weight ceiling is 500 for Inter. This deliberate restraint keeps the sans layer feeling approachable and tool-like rather than aggressive.

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 50px | 400 | 52px | -2px | Hero headline ("The knowledge infrastructure agents build on"). |
| `{typography.display-lg}` | 36px | 400 | 40px | -1px | Section-level headlines in marketing bands. |
| `{typography.display-md}` | 24px | 400 | 28px | -0.24px | Sub-section headings, card cluster titles. |
| `{typography.display-sm}` | 16px | 400 | 24px | normal | Tertiary headings, feature label heads. |
| `{typography.body-lg}` | 18px | 400 | 27px | 0 | Lead paragraph under hero headline. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Nav links, secondary body, sidebar rows, footer copy. |
| `{typography.body-sm-medium}` | 14px | 500 | 20px | 0 | Active sidebar items, badge labels, nav CTA text. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Footer fine print, metadata labels. |
| `{typography.button-md}` | 14px | 500 | 20px | 0 | Nav-scale button labels ("Sign in", "Contact sales"). |
| `{typography.button-lg}` | 16px | 500 | 24px | 0 | Hero-scale CTA labels ("Get started"). |

### Principles
- **The serif is the entire personality.** arizonaFlare at weight 400 with −2 px tracking is the brand's single most distinctive design choice. Never set it bold; never set it in body copy.
- **Sentence-case headlines, no period.** Unlike Vercel's period-terminated headlines, Mintlify ends headlines without punctuation — the arc decoration provides visual closure instead.
- **Inter weight ceiling is 500.** The brand never uses Inter 600 or 700. The system reads calm and precise because of this.
- **Negative tracking on display only.** The −2 px and −1 px tracking is applied only at display sizes; body and caption stay at default tracking.

## Layout

### Spacing System
- **Base unit**: 4 px. Every captured padding and gap value is a multiple of 4.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px · `{spacing.6xl}` 128 px.
- **Section padding**: marketing bands use `{spacing.4xl}` to `{spacing.5xl}` top/bottom. The hero has generous top breathing room before the headline arrives.
- **Card interior padding**: feature cards use `{spacing.xl}` 32 px interior. The doc-preview card interior uses `{spacing.md}` 16 px — tighter because it mimics a real UI density.
- **Inline gap**: button rows and nav clusters use `{spacing.xs}` to `{spacing.sm}` between siblings.

### Grid & Container
- **Max width**: approximately 1280 px, centred with `{spacing.xl}` 32 px horizontal gutters at desktop.
- **Column patterns**:
  - Hero: two-column split — left half holds the headline + CTA stack; right half holds the floating doc-preview UI mockup.
  - Feature section: 3-up card grid at desktop; the cards share equal width with `{spacing.md}` gaps.
  - Doc-preview: a two-panel layout — narrow sidebar (~220 px) + wide content pane — rendered as a card mockup.
- **Hero decoration**: the arc system fills the right half of the viewport behind the doc mockup and bleeds off the right edge; it is not contained to the content column.

### Whitespace Philosophy
The warm canvas does almost no decorative work — all atmosphere comes from the arc system. Section spacing is moderate; the brand doesn't use the extreme `192 px` section gaps of Vercel. Cards sit close to one another with `{spacing.md}` gutters. Inside the doc-preview mockup, density mirrors a real product — tight rows, `{spacing.xxs}` gaps. The overall feel is "designed tool" rather than "spacious marketing."

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero band and page background bands. |
| Level 1 — Hairline Ring | `1px solid rgba(0,0,0,0.07)` border, no shadow. | Default feature card chrome (`card-feature`). The warmth of the canvas means cards need only a hairline to separate. |
| Level 2 — Soft Border | `1px solid rgba(0,0,0,0.08)` border. | Doc-preview outer card chrome. Slightly crisper to suggest a floating UI panel. |
| Level 3 — Float | Light box-shadow + `1px solid rgba(0,0,0,0.06)` border. | Active nav dropdown or tooltip surface. |

The brand uses very little shadow. Cards are differentiated from the canvas primarily by their warm-cream fill (`#f9f6f3`) against the near-white canvas (`#fefdfb`) — a surface-step rather than a shadow-step. This is a calm, flat-to-hairline elevation system.

### Decorative Depth
- **Generative arc system**: fine-stroke lines in lime-to-cyan gradient (`{colors.gradient-arc-start}` → `{colors.gradient-arc-end}`), radiating as a fan from the right edge of the hero. This is the brand's sole atmospheric decoration — the visual equivalent of Vercel's mesh gradient, but geometric-linear rather than mesh. Used at hero scale only.
- **Warm surface ladder**: the step from `{colors.canvas}` to `{colors.canvas-secondary}` to `{colors.canvas-tertiary}` provides depth cues without shadows.

## Components

### Buttons

**`button-primary`** — the black rounded-rectangle CTA ("Get started").
- Background `{colors.ink}`, text `{colors.on-primary}`, label in `{typography.button-lg}`, padding `{spacing.sm} {spacing.lg}`, shape `{rounded.xl}` 12 px. The arrow icon inside is `{colors.primary}` green — the one place the brand green appears inside a button.

**`button-secondary`** — the white rounded-rectangle paired CTA ("Sign up with Google").
- Background `{colors.white}`, text `{colors.ink}`, same typography + padding as `button-primary`, `{rounded.xl}` shape, `1px solid {colors.hairline-tertiary}` border.

**`nav-cta-contact`** — the small black "Contact sales" button in the nav.
- Background `{colors.ink}`, text `{colors.on-primary}`, label in `{typography.button-md}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.xl}` 12 px.

**`nav-cta-signin`** — the ghost "Sign in" link in the nav.
- Background transparent, text `{colors.ink}`, same typography + shape as `nav-cta-contact`, no border.

### Navigation

**`nav-bar`** — the top navigation bar.
- Background `{colors.canvas}`, text `{colors.ink}`, height 64 px, padding `{spacing.sm} {spacing.xl}`, bottom border `1px solid {colors.hairline-secondary}`. Layout: logo + wordmark left, link row centre (Products / Solutions / Resources / Pricing), Sign in + Contact sales cluster right.

**`nav-link`** — centred dropdown trigger links.
- Text `{colors.ink-60}`, body in `{typography.body-sm}`, padding `{spacing.xxs} {spacing.xs}`, shape `{rounded.md}` on hover state.

**`footer`** — the bottom navigation.
- Background `{colors.canvas-secondary}`, text `{colors.body}`, padding `{spacing.3xl} {spacing.xl}`. Column headings in `{typography.body-sm-medium}`; link rows in `{typography.body-sm}`.

### Bands & Sections

**`hero-band`** — the split-layout hero.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Left column: stat badge → headline in `{typography.display-xl}` → body lead in `{typography.body-lg}` → CTA row. Right column: the doc-preview card mockup. Arc decoration fills the right half.

**`showcase-band`** — a secondary marketing section with feature cards.
- Background `{colors.canvas-secondary}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.xl}`.

### Cards

**`card-feature`** — the canonical marketing feature card (3-up grid).
- Background `#f9f6f3`, text `{colors.ink}`, padding `{spacing.xl}` 32 px, shape `{rounded.xl}` 12 px, border `1px solid {colors.hairline-tertiary}`. The measured card radius is the source-of-truth token.

**`card-doc-preview`** — the floating documentation UI mockup card in the hero.
- Background `{colors.white}`, text `{colors.ink}`, padding `{spacing.md}`, shape `{rounded.xl}` 12 px, border `1px solid {colors.hairline-secondary}`. Contains a sidebar-nav sub-component and a content pane.

### Sidebar Components (inside doc-preview)

**`sidebar-nav`** — the navigation rows in the doc sidebar.
- Background `{colors.canvas-secondary}`, text `{colors.ink}`, padding `{spacing.sm} {spacing.md}`, body in `{typography.body-sm}`.

**`sidebar-nav-active`** — the active / selected sidebar row (shown as "Quickstart" in the screenshot).
- Background `{colors.primary-light}`, text `{colors.primary}`, padding `{spacing.xxs} {spacing.xs}`, shape `{rounded.md}`, label in `{typography.body-sm-medium}`. The brand green is used here — the only filled-surface use of the primary color.

**`tab-pill`** — the tab row inside the doc-preview content pane ("API Reference / Libraries / Changelog").
- Background `{colors.canvas-secondary}`, text `{colors.ink-60}`, padding `{spacing.xxs} {spacing.md}`, shape `{rounded.pill}`.

**`tab-pill-active`** — the active tab within the tab row.
- Background `{colors.white}`, text `{colors.ink}`, label in `{typography.body-sm-medium}`, same shape + padding, border `1px solid {colors.hairline-secondary}`. The active tab sits on white against a canvas-secondary tray.

### Badges & Labels

**`badge-stat`** — the small "Agent traffic 56.9236% ›" badge above the hero headline.
- Background `{colors.canvas-secondary}`, text `{colors.ink}`, accent number color `{colors.primary}`, padding `{spacing.xxs} {spacing.sm}`, shape `{rounded.xl}`, border `1px solid {colors.hairline-secondary}`, body in `{typography.body-sm}`. The green percentage is the hook that connects the stat to the brand color.

### Inputs

**`form-input`** — the standard text input (search field inside the doc preview).
- Background `{colors.white}`, text `{colors.ink}`, border `1px solid {colors.hairline-tertiary}`, body in `{typography.body-sm}`, padding `{spacing.xxs} {spacing.sm}`, height 36 px, shape `{rounded.lg}` 8 px.

### Decoration

**`arc-decoration`** — the generative fine-line arc system in the hero.
- Stroke gradient from `{colors.gradient-arc-start}` (#18e299 mint) to `{colors.gradient-arc-end}` (#6dee6b lime). Fan of thin SVG paths radiating from the right horizon. Used at hero scale only; never miniaturised.

**`logo-wordmark`** — the Mintlify logo mark + wordmark.
- Leaf icon in `{colors.primary}` green; "mintlify" wordmark in `{colors.ink}`, set in `{typography.body-sm-medium}`.

## Do's and Don'ts

### Do
- Use arizonaFlare exclusively for display headings at weight 400. The editorial serif is the brand's primary voice; give it room.
- Keep `{colors.primary}` (#0c8c5e) green reserved for the logomark, active sidebar indicator, stat badge accent, and CTA arrow. Do not use it as a button fill or section background.
- Use `{rounded.xl}` 12 px as the universal card and button radius. The brand is a rounded-rectangle system, not a pill system.
- Apply the arc decoration only at hero scale, originating from the right horizon. Never crop it to an icon or apply it as a repeating pattern.
- Step surfaces warm-cream-to-white (`{colors.canvas}` → `{colors.canvas-secondary}` → `{colors.white}`) to create depth without shadows.
- Set Inter at weight 400 for body and 500 for labels/buttons. The weight ceiling is 500.
- Sentence-case all headlines; omit trailing punctuation.

### Don't
- Don't set arizonaFlare bold or at body sizes. Its optical presence is calibrated for display only.
- Don't use the brand green as a large surface fill. It exists as an accent token, not a background.
- Don't introduce pill-shaped CTAs. The brand's button shape is `{rounded.xl}` 12 px; the pill is reserved only for tab components.
- Don't miniaturise the arc system into a badge, icon, or small decorative flourish.
- Don't add new saturated accent colors beyond the green + the decorative purple/pink/orange trio visible in the sidebar feature indicators.
- Don't use Inter 600 or heavier. The Inter weight ceiling is 500.
- Don't substitute a cold pure-white canvas. The warm cream tint (`#fefdfb`) is the brand's deliberate thermal signature.
