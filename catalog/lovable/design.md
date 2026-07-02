---
version: alpha
name: Lovable
description: Lovable is an AI-app-builder brand whose entire decorative system is a single full-bleed mesh gradient — periwinkle blue bleeding into hot magenta bleeding into tangerine orange — that floods the hero from edge to edge and acts as the page's wallpaper, brand statement, and emotional signal simultaneously. Against that chromatic backdrop sits a cream-near-white prompt card in stark contrast, the one surface that is always clean. Outside the hero the palette collapses to near-black ink on a warm off-white canvas, punctuated by a parchment-toned card surface. The brand's own proprietary variable sans — Camera Plain Variable — carries every word at weight 400 only, never bolded, never tracked aggressively; the entire typographic voice is in the letterform's geometry, not its weight.
colors:
  primary: "#030303"
  on-primary: "#fafafa"
  ink: "#1c1c1c"
  ink-secondary: "#5f5f5d"
  body: "#030303"
  mute: "#5f5f5d"
  hairline: "#e5e2db"
  canvas: "#fafafa"
  canvas-warm: "#fcfbf8"
  canvas-parchment: "#f7f4ed"
  canvas-soft: "#fafafa"
  on-canvas-inverse: "#f5f5f5"
  link: "#030303"
  error: "#ff1f2d"
  error-soft: "#ff1f2d1a"
  warning: "#eab308"
  warning-soft: "#eab3081a"
  positive: "#22c55e"
  attention: "#ff5c1a"
  attention-soft: "#ff5c1a1f"
  gradient-hero-blue: "#a5b4fc"
  gradient-hero-magenta: "#f472b6"
  gradient-hero-orange: "#fb923c"
  gradient-hero-white: "#ffffff"
  brand-bubblegum: "#c026d3"
  brand-sapphire: "#3b6ef8"
  brand-saffron: "#c2410c"
  submit-button-bg: "#030303"
  submit-button-fg: "#f8f8f8"
typography:
  display-xl:
    fontFamily: '"Camera Plain Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: 64px
    fontWeight: 400
    lineHeight: 68px
    letterSpacing: -0.5px
  display-lg:
    fontFamily: '"Camera Plain Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: 48px
    fontWeight: 400
    lineHeight: 52px
    letterSpacing: normal
  display-md:
    fontFamily: '"Camera Plain Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: 36px
    fontWeight: 400
    lineHeight: 39.6px
    letterSpacing: -0.9px
  display-sm:
    fontFamily: '"Camera Plain Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: 24px
    fontWeight: 400
    lineHeight: 30px
    letterSpacing: normal
  body-lg:
    fontFamily: '"Camera Plain Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: normal
  body-md:
    fontFamily: '"Camera Plain Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: normal
  body-sm:
    fontFamily: '"Camera Plain Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: normal
  caption:
    fontFamily: '"Camera Plain Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: normal
  button-md:
    fontFamily: '"Camera Plain Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: normal
  button-lg:
    fontFamily: '"Camera Plain Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: normal
  nav-label:
    fontFamily: '"Camera Plain Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: normal
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  button: 8px
  md: 8px
  lg: 16px
  card: 16px
  xl: 24px
  pill: 6px
  full: 9999px
spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 10px
  lg: 24px
  xl: 56px
  2xl: 80px
  3xl: 144px
  4xl: 160px
  section: 160px
components:
  nav-bar:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.sm} {spacing.lg}"
    height: 56px
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.full}"
    padding: "{spacing.xxs} {spacing.sm}"
  nav-cta-login:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
    borderColor: "{colors.hairline}"
    height: 36px
  nav-cta-get-started:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
    height: 36px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
    height: 36px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
    borderColor: "{colors.hairline}"
    height: 36px
  button-icon-circular:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    width: 32px
    height: 32px
  prompt-input:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    placeholderColor: "{colors.mute}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    shadow: 0 4px 32px rgba(0,0,0,0.10)
  prompt-action-bar:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.mute}"
    typography: "{typography.button-md}"
    padding: "{spacing.xs} {spacing.lg}"
  hero-band:
    backgroundColor: gradient-mesh
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.3xl} {spacing.lg}"
  hero-headline:
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    letterSpacing: -0.5px
  hero-subheadline:
    textColor: "{colors.mute}"
    typography: "{typography.body-lg}"
  card-parchment:
    backgroundColor: "{colors.canvas-parchment}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  card-feature:
    backgroundColor: "{colors.canvas-parchment}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  feature-band:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.2xl} {spacing.lg}"
  section-headline:
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
  section-body:
    textColor: "{colors.mute}"
    typography: "{typography.body-lg}"
  badge-pill:
    backgroundColor: "{colors.canvas-parchment}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.xs}"
  footer:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.2xl} {spacing.lg}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  nav-dropdown-panel:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.sm} {spacing.lg}"
    borderColor: "{colors.hairline}"
  ex-pricing-tier:
    description: Default tier card. Parchment surface with hairline border.
    backgroundColor: "{colors.canvas-parchment}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: Featured tier — polarity-flipped to near-black with light text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-product-selector:
    description: What's Included summary card on parchment surface.
    backgroundColor: "{colors.canvas-parchment}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary — line items per plan tier.
    backgroundColor: "{colors.canvas-warm}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses primary as left-edge indicator.
    backgroundColor: "{colors.canvas-warm}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.sm}"
  ex-data-table-cell:
    description: Data table chrome. Header uses caption token; body uses body-sm.
    headerBackground: "{colors.canvas-parchment}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xxs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card. Parchment surface with prompt-input primitives.
    backgroundColor: "{colors.canvas-parchment}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-modal-card:
    description: Modal dialog surface — same chrome as card-parchment with elevated shadow.
    backgroundColor: "{colors.canvas-warm}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-empty-state-card:
    description: Empty-state frame. Generous padding on parchment surface.
    backgroundColor: "{colors.canvas-parchment}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — warm canvas surface with subtle shadow.
    backgroundColor: "{colors.canvas-warm}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
    typography: "{typography.body-sm}"
---
## Overview

Lovable is an AI app-builder whose design language is built around a single, audacious gesture: a full-bleed mesh gradient — periwinkle white bleeding into electric blue, burning through hot magenta, and settling into tangerine orange — that occupies the entire hero viewport. That gradient is not decoration applied to a system; it IS the system. Everything else on the page is deliberately restrained so the gradient does all the emotional work.

Once the hero ends, the palette snaps to near-monochrome: near-black ink on a warm off-white canvas (`{colors.canvas-warm}`, a barely-there cream at #fcfbf8), with a slightly deeper parchment tone (`{colors.canvas-parchment}`) reserved for cards and content blocks. The brand has no secondary accent colour used at marketing scale — no persistent teal, no persistent violet — just the gradient up top and then controlled quiet below.

Typography is the brand's most distinctive quiet choice. The proprietary variable face Camera Plain Variable — a geometric sans with an open, nearly-neutral stance — runs at weight 400 exclusively. No bold, no medium, no uppercase labels. Size and spacing do the hierarchy work. The 64 px hero headline reads as a confident statement precisely because it has the same weight as the body text below it; the only difference is scale.

Surface logic is a three-step warm ladder: `{colors.canvas-warm}` (page body and nav), `{colors.canvas-parchment}` (card fills), and `{colors.primary}` near-black (primary CTAs and polarity-flipped featured tiers). Shadows are minimal — the prompt card floating above the gradient uses a soft diffuse drop to lift it off the chromatic noise beneath; feature cards on the quiet body sections are borderless or carry only a hairline.

**Key characteristics:**
- The mesh gradient (blue → magenta → orange) is deployed at hero scale only and is the brand's entire decorative vocabulary.
- Camera Plain Variable at weight 400 for everything — the brand never bolds.
- A warm off-white canvas (`{colors.canvas-warm}` / `{colors.canvas-parchment}`) rather than a cold pure white — gives the page a slight editorial warmth.
- Button radius is a measured 8 px — a rounded rectangle, never a pill — for all primary CTAs.
- The prompt input floating in the hero is the product's literal interface, materialised as a marketing component.

## Colors

### Brand & Gradient
- **Gradient Blue** (`{colors.gradient-hero-blue}` — `#a5b4fc`): The cool periwinkle-to-blue stop that anchors the left/top of the hero gradient. Represents the "AI / tech" dimension of the brand.
- **Gradient Magenta** (`{colors.gradient-hero-magenta}` — `#f472b6`): The mid-point hot pink stop. The most saturated moment of the gradient, visible as the dominant hue in the lower hero.
- **Gradient Orange** (`{colors.gradient-hero-orange}` — `#fb923c`): The warm tangerine stop at the lower-right corner of the hero. Creates the sunset feeling at the gradient's edge.
- **Gradient White** (`{colors.gradient-hero-white}` — `#ffffff`): The bleached-out centre of the gradient where blue and white converge near the top of the hero.
- **Brand Bubblegum** (`{colors.brand-bubblegum}` — `#c026d3`): Deep magenta from the brand CSS custom properties. Not used as a standalone surface colour, lives inside the gradient vocabulary.
- **Brand Sapphire** (`{colors.brand-sapphire}` — `#3b6ef8`): Saturated blue from the brand system. Part of the gradient ancestry.
- **Brand Saffron** (`{colors.brand-saffron}` — `#c2410c`): Deep burnt-orange from the brand system. The warm anchor in the gradient pair.

### Surface
- **Canvas Warm** (`{colors.canvas-warm}` — `#fcfbf8`): The page body background and nav surface. A barely-perceptible cream — warmer than pure white, cooler than parchment. Most content sits here.
- **Canvas Parchment** (`{colors.canvas-parchment}` — `#f7f4ed`): The card and content-block fill. Distinctly warmer than the canvas — creates a gentle lift without shadow.
- **Canvas / On-Primary** (`{colors.canvas}` — `#fafafa`): Near-white used as text on dark surfaces and inside the prompt input chrome.

### Text
- **Ink** (`{colors.ink}` — `#1c1c1c`): Primary display and section headline text colour. The warmest near-black; slightly off true black.
- **Primary / Body** (`{colors.primary}` — `#030303`): Near-pure black used for all body text and as the CTA button fill.
- **Mute / Secondary** (`{colors.mute}` — `#5f5f5d`): Sub-headlines, supporting body copy, nav link text. Noticeably lighter than ink — the brand's only gray in active use.
- **Hairline** (`{colors.hairline}` — `#e5e2db`): Warm-toned dividers and borders. Slightly yellow-grey, consistent with the parchment palette.

### Semantic
- **Error** (`{colors.error}` — `#ff1f2d`): Destructive action indicator from the brand's CSS custom properties.
- **Error Soft** (`{colors.error-soft}` — `#ff1f2d1a`): Soft error background fill.
- **Warning** (`{colors.warning}` — `#eab308`): Caution / attention indicator.
- **Warning Soft** (`{colors.warning-soft}` — `#eab3081a`): Soft warning background.
- **Attention** (`{colors.attention}` — `#ff5c1a`): High-salience orange-red from the brand system.
- **Attention Soft** (`{colors.attention-soft}` — `#ff5c1a1f`): Soft attention background.
- **Positive** (`{colors.positive}` — `#22c55e`): Success / positive state indicator.

## Typography

### Font Family
One proprietary variable face carries the entire system:

**Camera Plain Variable** — a geometric variable sans with a wide, open stance. The variable axis is loaded but the brand uses it exclusively at weight 400. No display-weight axis value is promoted at 500 or 600 on any captured surface. The voice comes from letterform geometry — generous apertures, circular bowls — not from weight contrast.

There is no monospaced face in use on the marketing surface. Code snippets and technical labels, if present, appear to re-use the same Camera Plain Variable rather than a dedicated mono.

### Open-source substitute
Camera Plain Variable has no direct open-source twin. Closest substitutes:
- **Plus Jakarta Sans** (400) is the best stylistic match for the open apertures.
- **DM Sans** (400) is a passable second choice.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 400 | 68px | -0.5px | Hero headline ("Build something Lovable"). |
| `{typography.display-lg}` | 48px | 400 | 52px | normal | Section headlines, pricing tier names. |
| `{typography.display-md}` | 36px | 400 | 39.6px | -0.9px | Sub-section cluster headlines. |
| `{typography.display-sm}` | 24px | 400 | 30px | normal | Card headlines, call-out labels. |
| `{typography.body-lg}` | 18px | 400 | 28px | normal | Lead paragraph under hero headline ("Create apps and websites by chatting with AI"). |
| `{typography.body-md}` | 16px | 400 | 24px | normal | Default body paragraphs and card body copy. |
| `{typography.body-sm}` | 14px | 400 | 20px | normal | Secondary body, nav links, footer columns. |
| `{typography.caption}` | 12px | 400 | 16px | normal | Badges, fine print, small labels. |
| `{typography.button-md}` | 14px | 400 | 20px | normal | Button labels — nav CTA scale. |
| `{typography.button-lg}` | 16px | 400 | 24px | normal | Marketing-scale button labels. |
| `{typography.nav-label}` | 14px | 400 | 20px | normal | Nav link text — Solutions, Resources, Pricing etc. |

### Principles
- **Weight 400 is the only weight.** The brand runs a single weight axis value. Hierarchy is established through size and colour contrast alone — never through bolding.
- **No uppercase labels.** The brand uses sentence-case throughout, including nav items and section eyebrows. Uppercase tracking is absent from the design.
- **Mild negative tracking at display sizes.** The `display-md` token carries `-0.9px` tracking at 36px. The hero display is slightly tight. Body tokens stay at neutral.
- **Scale does the work.** Because weight never changes, the jump from 14px body-sm to 48px display-lg is the only hierarchy signal. Designers must respect the scale — collapsing sizes loses the entire typographic structure.

## Layout

### Spacing System
- **Base unit**: 4 px. The majority of the brand's spacing values are multiples of 4.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 10 px · `{spacing.lg}` 24 px · `{spacing.xl}` 56 px · `{spacing.2xl}` 80 px · `{spacing.3xl}` 144 px · `{spacing.4xl}` 160 px · `{spacing.section}` 160 px.
- **Hero padding**: the gradient hero band uses `{spacing.3xl}` 144 px vertically to give the mesh gradient room to saturate the viewport.
- **Section padding**: marketing content bands use `{spacing.2xl}` 80 px top and bottom.
- **Card interior**: parchment cards use `{spacing.lg}` 24 px padding.
- **Button padding**: measured at `6px 10px` in the extracted signals, mapping to `{spacing.xs} {spacing.md}`.

### Grid & Container
- **Max width**: approximately 1280 px; content centres with horizontal gutters of `{spacing.lg}` 24 px.
- **Column patterns visible**:
  - Nav: logo left, link row centre, Log In + Get Started cluster right.
  - Hero: single centred column — headline + subhead + prompt card stacked.
  - Feature grid: likely 3-up or 2-up card clusters on the body sections.

### Whitespace Philosophy
The mesh gradient does the decorative work; the body sections earn their quiet. Section spacing is generous — `{spacing.2xl}` to `{spacing.3xl}` between bands — so the eye can reset after the hero's chroma. Inside a card the headline/body stack is tight, with a wider gap before any CTA. The prompt input sits with `{spacing.lg}` interior padding to feel open and inviting, not cramped.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero stacks; nav collapses to hamburger; headline drops to display-md scale; prompt card full-width. |
| Tablet | 640–1023px | Feature grids drop to 2-up; nav still horizontal. |
| Desktop | 1024–1279px | Full layout; hero centred at content width. |
| Wide | ≥ 1280px | Content centres at max-width; gradient bands stretch edge-to-edge. |

#### Touch Targets
Nav CTAs render at 36 px tall measured from extraction. The prompt input's submit button (the circular icon button) renders at approximately 32 px — marginal at mobile; should be padded to the 44 px floor with touch-area expansion.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed gradient hero band; polarity-flipped dark sections. |
| Level 1 — Hairline | `0 0 0 1px {colors.hairline}` border. | Card chrome on parchment surfaces where no shadow is needed. |
| Level 2 — Soft Diffuse | `0 4px 32px rgba(0,0,0,0.10)`. | Prompt input card floating above the gradient hero — the primary use of shadow in the design. |
| Level 3 — Subtle Drop | `0 2px 8px rgba(0,0,0,0.06)`. | Feature cards in the quiet body sections. |
| Level 4 — Modal | `0 8px 32px rgba(0,0,0,0.12)`. | Modal / dialog surfaces and dropdown panels. |

The brand's elevation philosophy is restraint: the single dramatic use of shadow is the prompt card floating above the gradient. Everything else is nearly flat. The warmth of the parchment surface creates visual separation from the canvas without shadow.

### Decorative Depth
- **Mesh gradient as atmospheric depth**: the hero gradient is the one piece of decorative depth — a flat 2-D atmospheric backdrop, never a 3-D illustration or texture.
- **Parchment surface as surface depth**: switching from `{colors.canvas-warm}` (page body) to `{colors.canvas-parchment}` (card) is the chief surface-depth cue in the quiet body sections — no shadow required.
- **Polarity-flipped dark**: the near-black `{colors.primary}` surface on featured pricing cards and polarity-flipped CTAs provides the strongest depth contrast on the page.

## Components

### Buttons

**`button-primary`** — the canonical near-black rounded-rectangle CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}`, padding `{spacing.xs} {spacing.md}`, height 36 px, shape `{rounded.button}` 8 px. The brand's CTA is not a pill — it is a rounded rectangle.

**`button-secondary`** — the bordered transparent sibling of the primary.
- Background transparent, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, same typography and height as `button-primary`, shape `{rounded.button}` 8 px.

**`button-icon-circular`** — the circular submit/send button inside the prompt input.
- Background `{colors.primary}`, icon in `{colors.on-primary}`, shape `{rounded.full}`, 32 × 32 px. The one circular element in the button system.

**`nav-cta-get-started`** — the filled "Get started" button in the nav bar.
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.button-md}`, shape `{rounded.button}` 8 px, height 36 px.

**`nav-cta-login`** — the outlined "Log in" button in the nav bar.
- Background transparent, text `{colors.ink}`, hairline border, same typography and height as `nav-cta-get-started`, shape `{rounded.button}` 8 px.

### Navigation

**`nav-bar`** — the sticky top nav on the warm canvas.
- Background `{colors.canvas-warm}`, text `{colors.ink}`, height 56 px, padding `{spacing.sm} {spacing.lg}`. Layout: logo + wordmark left, link row centre (Solutions ↓ / Resources ↓ / Community / Enterprise / Pricing / Security), Log In + Get Started right.

**`nav-link`** — the centred link items inside `nav-bar`.
- Text `{colors.ink}`, `{typography.nav-label}`, padding `{spacing.xxs} {spacing.sm}`. Dropdown items (Solutions, Resources) carry a chevron indicator.

**`nav-dropdown-panel`** — the fly-out panel from dropdown nav items.
- Background `{colors.canvas-warm}`, text `{colors.ink}`, `{typography.body-sm}`, 1 px hairline border, shape `{rounded.card}`, padding `{spacing.sm} {spacing.lg}`.

### Hero & Prompt

**`hero-band`** — the full-bleed gradient hero.
- Background gradient mesh (blue → white → magenta → orange), text `{colors.ink}`, padding `{spacing.3xl} {spacing.lg}`. Headline in `{typography.display-xl}`, sub-headline in `{typography.body-lg}` set in `{colors.mute}`, prompt card centred below.

**`prompt-input`** — the AI prompt textarea floating above the gradient.
- Background `{colors.canvas-warm}`, text `{colors.ink}`, placeholder in `{colors.mute}`, `{typography.body-md}`, shape `{rounded.card}` 16 px, padding `{spacing.lg}`, Level 2 soft diffuse shadow. The centrepiece component — the product interface materialised as marketing.

**`prompt-action-bar`** — the bottom row of the prompt card (the "+" icon / "Build ↓" mode selector / mic icon / submit button row).
- Background `{colors.canvas-warm}`, text `{colors.mute}`, `{typography.button-md}`, padding `{spacing.xs} {spacing.lg}`.

### Cards & Content

**`card-parchment`** — the standard content card on parchment.
- Background `{colors.canvas-parchment}`, text `{colors.ink}`, `{typography.body-md}`, shape `{rounded.card}` 16 px, padding `{spacing.lg}`.

**`card-feature`** — a feature or benefit card in the body section grids.
- Background `{colors.canvas-parchment}`, text `{colors.ink}`, `{typography.body-md}`, shape `{rounded.card}` 16 px, padding `{spacing.lg}`.

**`feature-band`** — a quiet marketing content band below the hero.
- Background `{colors.canvas-warm}`, text `{colors.ink}`, section headline in `{typography.display-lg}`, supporting body in `{typography.body-lg}`, padding `{spacing.2xl} {spacing.lg}`.

**`badge-pill`** — small metadata or category badge.
- Background `{colors.canvas-parchment}`, text `{colors.ink}`, `{typography.caption}`, shape `{rounded.pill}` 6 px, padding `{spacing.xxs} {spacing.xs}`.

**`link-inline`** — body copy inline links.
- Text `{colors.link}`, `{typography.body-md}`.

### Global

**`footer`** — the bottom nav and legal section.
- Background `{colors.canvas-warm}`, text `{colors.mute}`, `{typography.body-sm}`, padding `{spacing.2xl} {spacing.lg}`.

## Do's and Don'ts

### Do
- Deploy the mesh gradient (blue → magenta → orange) at hero scale only — it is the brand's entire decoration system. Never crop it to a swatch, badge, or icon.
- Use Camera Plain Variable at weight 400 only. Size contrast is the hierarchy tool; weight contrast is not part of the voice.
- Keep primary CTAs as rounded rectangles at `{rounded.button}` 8 px. The brand is not a pill-button brand at marketing scale.
- Use `{colors.canvas-parchment}` (#f7f4ed) for card surfaces — the warm parchment tone is a deliberate departure from cold-white card systems.
- Separate body sections with generous vertical spacing (`{spacing.2xl}` to `{spacing.3xl}`) so the page breathes after the saturated hero.
- Use the single Level 2 soft-diffuse shadow exclusively for the prompt input card floating over the gradient. All other surfaces are flat or hairline-bordered.
- Set supporting body text in `{colors.mute}` (#5f5f5d) — the brand uses this gray actively as the secondary text colour.

### Don't
- Don't introduce a weight-500 or weight-600 setting for Camera Plain Variable. The single-weight system is the brand's voice.
- Don't use a 100 px pill radius for CTAs. The measured button radius is 8 px — a rounded rectangle, not a pill.
- Don't introduce a cold pure-white (#ffffff) as a card surface. The brand's surfaces are warm (#fcfbf8 and #f7f4ed); cold white is an interloper.
- Don't miniaturise the hero gradient into a colour block, badge, or button background. It lives at atmospheric scale only.
- Don't add uppercase labels or tracking-positive eyebrow text. The brand is sentence-case throughout.
- Don't apply heavy drop-shadows to feature cards. Elevation in the quiet body sections comes from the warm parchment surface, not from shadow.
- Don't introduce new accent colours. The brand's semantic palette (error, warning, positive) is internal; the marketing surface uses only ink, mute, and the gradient.
