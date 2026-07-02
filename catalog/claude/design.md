---
version: alpha
name: Claude-by-Anthropic
description: "Claude is Anthropic's AI assistant brand — a warm, intellectual presence built on a parchment-cream canvas that signals thoughtfulness over technical sterility. The surface is a quiet off-white (#faf9f5) paired with near-black ink, broken by a terracotta-coral accent used sparingly on the primary CTA and the brand's signature illustrated mark. Two proprietary faces carry the entire system: a serif for all display and heading moments, lending editorial warmth and cognitive depth; a clean humanist sans for body, labels, and navigation. The result reads like a well-considered notebook — approachable, a little literary, never cold."
colors:
  primary: "#da6c47"
  on-primary: "#faf9f5"
  ink: "#141413"
  body: "#3d3d3a"
  mute: "#6b6b67"
  hairline: "#e8e6dc"
  canvas: "#faf9f5"
  canvas-white: "#ffffff"
  canvas-soft: "#f0ede3"
  on-dark: "#faf9f5"
  link: "#141413"
  success: "#4a7c59"
  error: "#c0392b"
  warning: "#d4a017"
  border-card: "#e8e6dc"
typography:
  display-xl:
    fontFamily: '"Anthropic Serif", Georgia, sans-serif'
    fontSize: 60px
    fontWeight: 500
    lineHeight: 66px
    letterSpacing: normal
  display-lg:
    fontFamily: '"Anthropic Serif", Georgia, sans-serif'
    fontSize: 49px
    fontWeight: 500
    lineHeight: 59px
    letterSpacing: normal
  display-md:
    fontFamily: '"Anthropic Serif", Georgia, sans-serif'
    fontSize: 36px
    fontWeight: 500
    lineHeight: 44px
    letterSpacing: normal
  display-sm:
    fontFamily: '"Anthropic Serif", Georgia, sans-serif'
    fontSize: 24px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: normal
  body-lg:
    fontFamily: '"Anthropic Sans", Arial, sans-serif'
    fontSize: 20px
    fontWeight: 400
    lineHeight: 30px
  body-md:
    fontFamily: '"Anthropic Sans", Arial, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: '"Anthropic Sans", Arial, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  label-md:
    fontFamily: '"Anthropic Sans", Arial, sans-serif'
    fontSize: 18.86px
    fontWeight: 400
    lineHeight: 26px
  label-sm:
    fontFamily: '"Anthropic Sans", Arial, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  caption:
    fontFamily: '"Anthropic Sans", Arial, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: '"Anthropic Sans", Arial, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  button-lg:
    fontFamily: '"Anthropic Sans", Arial, sans-serif'
    fontSize: 19.86px
    fontWeight: 400
    lineHeight: 28px
  nav-link:
    fontFamily: '"Anthropic Sans", Arial, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  button: 12px
  card: 12px
  pill: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 10px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 60px
  5xl: 96px
  section: 190px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
    padding: "{spacing.xs} {spacing.xl}"
    borderBottom: 1px solid {colors.hairline}
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "{spacing.xs} {spacing.md}"
    rounded: "{rounded.md}"
  nav-cta-contact:
    backgroundColor: "{colors.canvas-white}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
    border: 1px solid {colors.hairline}
  nav-cta-try:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas-white}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
    border: 1px solid {colors.hairline}
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  chip-pill:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.md}"
    border: 1px solid {colors.hairline}
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  hero-input:
    backgroundColor: "{colors.canvas-white}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
    border: 1px solid {colors.hairline}
  card-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.border-card}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xs}"
    border: 1px solid {colors.border-card}
  card-feature:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  form-input:
    backgroundColor: "{colors.canvas-white}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
    border: 1px solid {colors.hairline}
    height: 48px
  nav-dropdown:
    backgroundColor: "{colors.canvas-white}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    border: 1px solid {colors.hairline}
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.xl}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  badge-secondary:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.xs}"
    border: 1px solid {colors.hairline}
  ex-pricing-tier:
    description: Default pricing tier card on parchment surface with hairline border.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.border-card}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
    border: 1px solid {colors.border-card}
  ex-pricing-tier-featured:
    description: Featured tier — ink-dark fill with parchment text, terracotta CTA inside.
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: What's Included summary card — canvas-soft surface with md radius.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary — line items per plan add-on on white surface.
    backgroundColor: "{colors.canvas-white}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses terracotta primary as a left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.md}"
  ex-data-table-cell:
    description: Data table chrome. Header uses label-sm sans; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.label-sm}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in card — white surface with hairline border and md radius.
    backgroundColor: "{colors.canvas-white}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
    border: 1px solid {colors.border-card}
  ex-modal-card:
    description: Modal dialog surface — canvas-white with card radius and soft shadow.
    backgroundColor: "{colors.canvas-white}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame — generous padding on canvas-soft.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — white surface, card radius, hairline border.
    backgroundColor: "{colors.canvas-white}"
    rounded: "{rounded.card}"
    padding: "{spacing.xs} {spacing.md}"
    typography: "{typography.body-sm}"
    border: 1px solid {colors.border-card}
---
## Overview

Claude's visual identity is built on restraint and warmth — a parchment-cream canvas (`{colors.canvas}`) that reads like quality paper rather than a digital screen. The page never reaches for saturated colour at scale; the only accent that breaks the near-monochrome surface is a terracotta-coral (`{colors.primary}`) reserved for the primary "Ask Claude" CTA and the brand's illustrated molecule mark in the hero. Everything else sits in a controlled range of near-black to soft greige, held together by hairline borders and barely-there card surfaces.

The typographic system is the brand's strongest design statement. A proprietary serif face — warm, slightly editorial, somewhere between a quality book typeface and a refined display serif — carries every headline, from the 60 px hero through section subheads. The brand never uses the serif for body copy or labels; that layer belongs entirely to a companion humanist sans. The pairing is deliberate: the serif signals intelligence and care, the sans signals clarity and accessibility. No monospaced face appears on the marketing surface — this brand is for thinkers, not operators.

Surfaces use only three practical layers: the parchment canvas `{colors.canvas}` for the page and most cards, a slightly cooler off-white `{colors.canvas-white}` for interactive input fields and modal surfaces, and a warm soft tone `{colors.canvas-soft}` for inset or secondary feature regions. The deep ink `{colors.ink}` appears as the footer background and occasionally as a polarity-flipped dark CTA button, creating a contained dark moment without committing to a dark-mode system.

Radius is consistent and deliberate: 12 px everywhere for both buttons and cards — the brand does not differentiate button shape from card shape at the marketing scale. This single-radius discipline creates a cohesive, notebook-like feel across all interactive surfaces.

## Colors

### Brand & Accent
- **Terracotta / Primary** (`{colors.primary}` — `#da6c47`): The brand's only true accent colour. Reserved for the primary "Ask Claude" CTA button and the illustrated star-burst mark in the hero. Used at a single point on the page — never scattered.
- **On Primary** (`{colors.on-primary}` — `#faf9f5`): The parchment text color rendered on terracotta surfaces; a deliberate near-white rather than pure white, keeping the accent from reading as too harsh.

### Surface
- **Canvas** (`{colors.canvas}` — `#faf9f5`): The page's primary background — a warm off-white with a slight cream cast. Every marketing section sits on this tone.
- **Canvas White** (`{colors.canvas-white}` — `#ffffff`): Pure white used specifically for interactive surfaces — the hero text input, form fields, nav CTA buttons, and modal dialog surfaces.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f0ede3`): A slightly deeper parchment tone used for feature cards, chip pills, and secondary inset regions.

### Borders & Dividers
- **Hairline** (`{colors.hairline}` — `#e8e6dc`): The universal 1 px border used on cards, inputs, nav buttons, and dropdown menus. The same warm greige as the canvas family — borders never feel harsh.
- **Border Card** (`{colors.border-card}` — `#e8e6dc`): Identical to hairline; aliased as a semantic token for card contexts.

### Text
- **Ink** (`{colors.ink}` — `#141413`): Near-pure black used for all headings, body paragraphs, and the footer background. The brand's anchor tone.
- **Body** (`{colors.body}` — `#3d3d3a`): The mid-dark tone for secondary text — h3 labels, chip text, supporting body copy.
- **Mute** (`{colors.mute}` — `#6b6b67`): Lowest-priority text — placeholders, fine print, disabled states.
- **On Dark** (`{colors.on-dark}` — `#faf9f5`): Parchment text rendered on the dark `{colors.ink}` footer and dark CTA surfaces.

### Semantic
- **Link** (`{colors.link}` — `#141413`): Inline links use the ink color directly rather than a blue accent — the brand's understated approach to hyperlinks.
- **Success** (`{colors.success}` — `#4a7c59`): Muted green for positive confirmation states.
- **Error** (`{colors.error}` — `#c0392b`): Standard red for validation and destructive states.
- **Warning** (`{colors.warning}` — `#d4a017`): Amber for cautionary states.

## Typography

### Font Families
Two proprietary faces carry the entire system:

1. **Anthropic Serif** — the brand's bespoke display serif. Warm, slightly editorial, weight 500 only. Used exclusively for `h1` through `h4` contexts: hero headlines, section titles, card cluster heads. Never used for body copy, labels, or buttons. No bold weight, no italic style appears on the marketing surface. Negative letter-spacing is not applied — the face tracks at its optical default. Closest open-source substitute: *Lora* or *Source Serif 4* at weight 500.

2. **Anthropic Sans** — the companion humanist sans-serif, weight 400. Used for every body paragraph, button label, nav link, caption, and form field. The face is notably light for marketing copy — weight 400 throughout, no 500/600 bolding in the captured surfaces. Closest open-source substitute: *Plus Jakarta Sans* or *Inter* at weight 400.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 60px | 500 | 66px | normal | Hero headline ("Meet your thinking partner"). Set in Anthropic Serif. |
| `{typography.display-lg}` | 49px | 500 | 59px | normal | Primary section headlines. Anthropic Serif. |
| `{typography.display-md}` | 36px | 500 | 44px | normal | Secondary section heads and large card titles. |
| `{typography.display-sm}` | 24px | 500 | 32px | normal | Tertiary subsection titles and feature card heads. |
| `{typography.body-lg}` | 20px | 400 | 30px | — | Lead paragraphs under hero headline and section openers. Anthropic Sans. |
| `{typography.body-md}` | 16px | 400 | 24px | — | Default body paragraph. |
| `{typography.body-sm}` | 14px | 400 | 20px | — | Secondary body, nav dropdown items, footer links. |
| `{typography.label-md}` | 18.86px | 400 | 26px | — | Button labels at marketing scale (extracted from button element). |
| `{typography.label-sm}` | 14px | 400 | 20px | — | Chip pills, badge labels, nav link secondary items. |
| `{typography.caption}` | 12px | 400 | 16px | — | Footer fine print, micro metadata labels. |
| `{typography.button-lg}` | 19.86px | 400 | 28px | — | Primary CTA button label at hero scale ("Ask Claude"). |
| `{typography.button-md}` | 16px | 400 | 24px | — | Standard button labels (nav CTAs, secondary buttons). |
| `{typography.nav-link}` | 16px | 400 | 24px | — | Top navigation link items. |

### Principles
- **The serif is the brand's voice; the sans is its clarity.** Every headline uses Anthropic Serif (weight 500). Every label, body paragraph, and interactive control uses Anthropic Sans (weight 400). The two faces never mix within a single text element.
- **No aggressive tracking.** Unlike many developer-platform brands, Claude uses normal letter-spacing throughout — no negative tracking on display type. The serif face's optical spacing is treated as correct.
- **Weight discipline is strict.** Anthropic Sans never appears at weight 500 or 600 in the marketing surface. All buttons, nav links, and body copy are weight 400. Emphasis is achieved through size and colour, not weight.
- **Title case for headlines.** Display headings use title/sentence case — not all-caps, not uppercase-tracked labels.
- **No monospaced face.** The brand is consumer and enterprise AI, not a developer tool. No code or mono face appears on this surface.

### Font Substitutes
Both faces are proprietary. Open-source proxies:
- **Anthropic Serif** — *Lora* 500 or *Source Serif 4* 500 for the warmest match; *Playfair Display* 500 for a more editorial feel.
- **Anthropic Sans** — *Plus Jakarta Sans* 400 or *DM Sans* 400. Inter 400 works but reads slightly more technical.

## Layout

### Spacing System
- **Base unit**: 4 px. The extracted custom property `--radius--x-small: .25rem` = 4 px confirms this base.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 10 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 60 px · `{spacing.5xl}` 96 px · `{spacing.section}` 190 px.
- **Most frequent gap**: 8 px (`{spacing.xs}`) is the dominant internal gap (407 occurrences in extraction), used between button icon and label, between inline chip pills, and within tight card interiors.
- **Section padding**: marketing bands use `{spacing.4xl}` to `{spacing.5xl}` top/bottom. The hero band's top padding reaches `{spacing.section}` to give the illustrated mark room.
- **Card interior**: cards use `{spacing.xs}` (8 px) padding at the measured default — unusually tight, consistent with the notebook aesthetic.

### Grid & Container
- **Column patterns visible**:
  - Hero: split two-column — copy left, illustration right — at desktop; stacks at mobile.
  - Feature chips: horizontal wrapping flex row of `chip-pill` elements below the hero input.
  - Nav: logo left, link row centre, CTA cluster right.
- **Gutters**: horizontal gutters of approximately `{spacing.xl}` 24 px on desktop.

### Whitespace Philosophy
The parchment canvas does the atmospheric work that gradients do on other brands — the warmth of the surface colour is the decoration. Section spacing is generous, letting the serif headlines breathe. Inside cards, spacing is intentionally tighter (8 px) to preserve the compact notebook feel. The illustrated mark in the hero sits in open negative space rather than a contained frame — the brand uses illustration as a spatial object, not an icon.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero and footer bands. |
| Level 1 — Hairline Border | `1px solid #e8e6dc` | Default card chrome — the universal "you can see this card" cue. No shadow added. |
| Level 2 — Border + Soft Shadow | `1px solid #e8e6dc` + `0 2px 8px rgba(0,0,0,0.06)` | Slightly elevated interactive cards and nav dropdowns. |
| Level 3 — Modal | `1px solid #e8e6dc` + `0 4px 24px rgba(0,0,0,0.10)` | Modal and dialog surfaces. |

The brand's elevation system is exceptionally flat — the primary depth cue is the hairline border rather than shadow. No heavy drop shadows appear on the marketing surface. Cards sit on the page as though pressed into it, not floating above it.

## Components

### Buttons

**`button-primary`** — the terracotta "Ask Claude" CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-lg}`, padding `{spacing.xs} {spacing.lg}`, shape `{rounded.button}` 12 px. The only terracotta surface on the page.

**`button-secondary`** — white button with hairline border.
- Background `{colors.canvas-white}`, text `{colors.ink}`, 1 px solid `{colors.hairline}`, same typography and shape as primary.

**`button-ghost`** — text-only interaction with no fill.
- Background transparent, text `{colors.ink}`, typography `{typography.button-md}`, shape `{rounded.button}` 12 px.

**Nav CTAs:**

**`nav-cta-try`** — the dark "Try Claude" pill in the nav.
- Background `{colors.ink}`, text `{colors.on-dark}`, typography `{typography.button-md}`, shape `{rounded.button}` 12 px, padding `{spacing.xs} {spacing.lg}`.

**`nav-cta-contact`** — the ghost "Contact sales" nav button.
- Background `{colors.canvas-white}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, same shape and padding.

### Navigation

**`nav-bar`** — the top navigation.
- Background `{colors.canvas}`, height 64 px, padding `{spacing.xs} {spacing.xl}`, hairline bottom border. Layout: logo left, dropdown link row centre, CTA pair right. Link items use `{typography.nav-link}`.

**`nav-link`** — individual nav items with dropdown chevrons.
- Text `{colors.ink}`, typography `{typography.nav-link}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.md}`.

**`nav-dropdown`** — the dropdown panel revealed on nav item hover.
- Background `{colors.canvas-white}`, text `{colors.ink}`, typography `{typography.body-sm}`, rounded `{rounded.md}`, 1 px solid `{colors.hairline}` border, padding `{spacing.md}`.

### Hero

**`hero-band`** — the opening hero section.
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.display-xl}`, padding `{spacing.4xl} {spacing.xl}`. Layout: serif display headline left, proprietary illustrated mark right. Below the headline: a sub-copy paragraph in `{typography.body-lg}`, then the `hero-input` row.

**`hero-input`** — the inline chat-prompt input field with submit button.
- Background `{colors.canvas-white}`, text `{colors.ink}`, placeholder text in `{colors.mute}`, 1 px solid `{colors.hairline}` border, typography `{typography.body-lg}`, rounded `{rounded.button}` 12 px, padding `{spacing.xs} {spacing.lg}`. The terracotta `button-primary` ("Ask Claude →") sits inset at the input's right edge.

**`chip-pill`** — the "Write / Learn / Code" suggestion chips below the hero input.
- Background `{colors.canvas-soft}`, text `{colors.body}`, typography `{typography.label-sm}`, rounded `{rounded.pill}`, padding `{spacing.xxs} {spacing.md}`, 1 px solid `{colors.hairline}` border.

### Cards

**`card-marketing`** — the canonical marketing feature card.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.border-card}` border, rounded `{rounded.card}` 12 px, padding `{spacing.xs}`. Tight interior padding is intentional — the notebook feel.

**`card-feature`** — the secondary feature card on a soft canvas surface.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, typography `{typography.body-md}`, rounded `{rounded.card}` 12 px, padding `{spacing.lg}`.

### Utility

**`form-input`** — standard text input.
- Background `{colors.canvas-white}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, typography `{typography.body-md}`, rounded `{rounded.button}` 12 px, height 48 px, padding `{spacing.xs} {spacing.md}`.

**`badge-secondary`** — small metadata pill.
- Background `{colors.canvas-soft}`, text `{colors.body}`, typography `{typography.caption}`, rounded `{rounded.pill}`, padding `{spacing.xxs} {spacing.xs}`, 1 px solid `{colors.hairline}` border.

**`link-inline`** — body-copy inline links.
- Text `{colors.link}` (`#141413`), typography `{typography.body-md}`. The brand uses ink color for links — no blue accent.

**`footer`** — the dark bottom section.
- Background `{colors.ink}`, text `{colors.on-dark}`, typography `{typography.body-sm}`, padding `{spacing.3xl} {spacing.xl}`. Column link labels in `{typography.body-sm}`.

## Do's and Don'ts

### Do
- Keep the terracotta `{colors.primary}` for a single primary CTA per view. Its scarcity is its power — the moment the eye hits terracotta on parchment, it knows what to do.
- Set every headline in `{typography.display-*}` using Anthropic Serif at weight 500. The serif IS the brand's intellectual warmth.
- Use `{rounded.button}` 12 px and `{rounded.card}` 12 px consistently — the single-radius discipline is what gives the system its notebook cohesion.
- Let the parchment canvas `{colors.canvas}` breathe. Generous section padding and minimal colour variation do the atmospheric work.
- Use the illustrated mark (the terracotta molecule / starburst) as a spatial hero object — never shrink it to icon scale or place it in a constrained frame.
- Keep button and body label weight at 400. Heaviness is not part of this brand's voice.

### Don't
- Don't introduce a blue link colour or any additional accent beyond the terracotta. The brand's restraint depends on exactly one accent.
- Don't use Anthropic Serif for body copy, labels, or buttons. The serif is for display moments only.
- Don't add heavy drop shadows. The brand's elevation is hairline borders + flat surfaces — shadow breaks the notebook metaphor.
- Don't apply the serif at a weight heavier than 500. The brand never goes bold.
- Don't letter-space display type negatively or positively — the face tracks at its optical default and that spacing is non-negotiable.
- Don't use all-caps for any text layer. The brand is sentence-case throughout.
- Don't add additional accent colours (violet, cyan, amber) not visible in the captured surface. The parchment-terracotta-ink trio is the complete palette.
