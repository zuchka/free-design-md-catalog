---
version: alpha
name: Expo Design System
description: "Expo is a React Native platform brand whose surface reads as clean-room developer confidence: near-white canvas washed in a soft ice-blue atmospheric gradient, a single near-black ink as the only chromatic anchor, and Inter as the sole typeface at every scale. The hero headline tracks aggressively negative at -3px and weighs in at 700 — heavy enough to communicate authority without resorting to a decorative typeface. CTAs are distinctively rounded at 36px — neither a pill nor a rectangle, but a confident large-radius button that reads as approachable and modern. Cards sit at 24px radius with a two-stop soft shadow that lifts them just barely off the canvas. The atmospheric ice-blue gradient behind the hero is the entire decorative system: there are no gradients on buttons, no accent splashes, no illustrative fills. The brand is surgical — one ink, one background, one font, one gradient backdrop."
colors:
  primary: "#1c2024"
  on-primary: "#ffffff"
  ink: "#1c2024"
  body: "#60646c"
  mute: "#8b8d98"
  hairline: "#e5e7eb"
  canvas: "#ffffff"
  canvas-soft: "#f8f9fa"
  canvas-blue-wash: "#eef2f7"
  link: "#1c2024"
  success: "#30a46c"
  success-soft: "#d6f0e0"
  error: "#e5484d"
  error-soft: "#fce8e8"
  warning: "#f76b15"
  warning-soft: "#ffe8d6"
  new-badge-bg: "#f0fdf4"
  new-badge-text: "#16a34a"
  on-dark: "#ffffff"
  dark-surface: "#1c2024"
typography:
  display-xl:
    fontFamily: Inter, -apple-system, system-ui, sans-serif
    fontSize: 64px
    fontWeight: 700
    lineHeight: 70.4px
    letterSpacing: -3px
  display-lg:
    fontFamily: Inter, -apple-system, system-ui, sans-serif
    fontSize: 48px
    fontWeight: 700
    lineHeight: 57.6px
    letterSpacing: -2px
  display-md:
    fontFamily: Inter, -apple-system, system-ui, sans-serif
    fontSize: 32px
    fontWeight: 700
    lineHeight: 38.4px
    letterSpacing: -1px
  display-sm:
    fontFamily: Inter, -apple-system, system-ui, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 28.8px
    letterSpacing: -0.5px
  body-lg:
    fontFamily: Inter, -apple-system, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 25.2px
  body-md:
    fontFamily: Inter, -apple-system, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 22.4px
  body-md-strong:
    fontFamily: Inter, -apple-system, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 700
    lineHeight: 22.4px
  body-sm:
    fontFamily: Inter, -apple-system, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 19.6px
  body-sm-strong:
    fontFamily: Inter, -apple-system, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 19.6px
  caption:
    fontFamily: Inter, -apple-system, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 19.2px
  caption-strong:
    fontFamily: Inter, -apple-system, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 700
    lineHeight: 19.2px
  code:
    fontFamily: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  button-md:
    fontFamily: Inter, -apple-system, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 19.6px
  button-lg:
    fontFamily: Inter, -apple-system, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 700
    lineHeight: 22.4px
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  card: 24px
  button: 36px
  pill: 24px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 48px
  4xl: 96px
  5xl: 144px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 60px
    padding: "{spacing.xs} {spacing.xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-login:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-signup:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  nav-github-count:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.sm}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.5xl} {spacing.lg}"
  hero-announcement-badge:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xxs} {spacing.sm}"
    borderColor: "{colors.hairline}"
  hero-announcement-new-chip:
    backgroundColor: "{colors.new-badge-bg}"
    textColor: "{colors.new-badge-text}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.full}"
    padding: "{spacing.xxs} {spacing.xs}"
  card-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    shadow: 0px 3px 6px rgba(0,0,0,0.08), 0px 2px 4px rgba(0,0,0,0.07)
  card-feature:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
    shadow: 0px 3px 6px rgba(0,0,0,0.08), 0px 2px 4px rgba(0,0,0,0.07)
  card-dark:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  code-block:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
    height: 40px
  badge-new:
    backgroundColor: "{colors.new-badge-bg}"
    textColor: "{colors.new-badge-text}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.full}"
    padding: "{spacing.xxs} {spacing.xs}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  enterprise-callout:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md} 0"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.xl}"
  showcase-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.4xl} {spacing.lg}"
  feature-section:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.4xl} {spacing.lg}"
  ex-pricing-tier:
    description: Default pricing tier card. Canvas surface with hairline border and card-level shadow.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured tier — polarity-flipped to dark-surface with on-dark text.
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: Feature summary card — canvas-soft surface for what-is-included lists.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary panel — line items per add-on.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses primary ink as left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: Data table chrome. Header uses caption-strong; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card. card-marketing chrome with form-input primitives inside.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog surface — card-feature chrome with elevated shadow.
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
    description: Toast notification surface — card-marketing shape with soft shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xs} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Expo is a developer platform — the page reads exactly the way the product behaves: straightforward, confident, and unadorned. The surface is near-pure white with a single atmospheric ice-blue gradient wash behind the hero that dissolves gently into the canvas below. That gradient — a soft sky-blue haze fading to white — is the only decorative element. There are no background shapes, no accent colour splashes, no illustrative fills of any kind. The decoration system starts and ends with one diffuse blue backdrop.

Inter carries the entire typographic system at every scale, from the 64px hero headline to 12px captions. The brand makes no distinction between a display face and a body face; the only axis of contrast is weight (700 for display, 400 for body) and size. Display sizes are tracked aggressively at -3px, which is the brand's single strongest stylistic signal — that negative tracking at 64px gives the hero a density that reads as engineering precision rather than editorial flair.

The shape language is defined by two radii: 36px for all buttons and interactive controls, and 24px for cards. The 36px button radius is distinctive — large enough to feel modern and approachable without collapsing into a full pill. It appears consistently on every CTA, from the hero's "Get started for free" to the nav's "Sign up." Cards sit at 24px with a two-stop shadow (8% and 7% black) that is soft enough to be invisible at a casual glance but present enough to establish hierarchy. The brand never uses hard shadows or heavy elevation.

The colour palette is minimal by design: near-black ink (`#1c2024`) on white canvas, with a secondary gray (`#60646c`) for supporting copy and a faint hairline gray for borders. The only departure from this duet is the green "What's new?" badge that appears in the hero announcement strip — a functional signal, not a brand accent.

## Colors

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The default page and card surface. Every marketing band and card sits on pure white.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f8f9fa`): A barely-perceptible off-white for inset regions, alternate bands, and table headers. Almost indistinguishable from canvas at a glance but adds structure.
- **Canvas Blue Wash** (`{colors.canvas-blue-wash}` — `#eef2f7`): The ice-blue atmospheric tint visible in the hero backdrop gradient. Used as a gradient stop, not a solid fill.

### Text
- **Ink** (`{colors.ink}` — `#1c2024`): The single primary text colour. Every heading, body paragraph, nav link, and button label on light surfaces. Also the CTA fill.
- **Body** (`{colors.body}` — `#60646c`): Secondary text — sub-headings, supporting copy beneath section headlines, footer column body. Extracted from the h2 color signal.
- **Mute** (`{colors.mute}` — `#8b8d98`): Lowest-priority text — placeholder copy, fine-print captions, disabled states.
- **On Primary / On Dark** (`{colors.on-primary}` — `#ffffff`): All text that sits on the dark `{colors.primary}` CTA surface or dark cards.

### Interactive
- **Link** (`{colors.link}` — `#1c2024`): Inline links default to ink. The brand does not use a distinct blue link colour in navigation or body copy — links are differentiated by context and underline behaviour rather than hue.

### Semantic
- **Success** (`{colors.success}` — `#30a46c`): The green status indicator, visible in the "What's new?" badge dot.
- **Success Soft** (`{colors.success-soft}` — `#d6f0e0`): Background fill for success-state pills and notification surfaces.
- **New Badge BG** (`{colors.new-badge-bg}` — `#f0fdf4`): The pale green fill behind the "What's new?" chip.
- **New Badge Text** (`{colors.new-badge-text}` — `#16a34a`): The green label text inside the "What's new?" chip.
- **Error** (`{colors.error}` — `#e5484d`): Destructive action and form validation red.
- **Error Soft** (`{colors.error-soft}` — `#fce8e8`): Soft red background for error state surfaces.
- **Warning** (`{colors.warning}` — `#f76b15`): Caution / pending state indicator.
- **Warning Soft** (`{colors.warning-soft}` — `#ffe8d6`): Soft amber background for warning state surfaces.

### Brand
- **Primary / Dark Surface** (`{colors.primary}` — `#1c2024`): The single CTA colour, the polarity-flip for dark-band sections, and the text colour throughout. One ink does every job.
- **Hairline** (`{colors.hairline}` — `#e5e7eb`): 1px dividers — card borders, input borders, nav separators.

## Typography

### Font Family
One face: **Inter** (400 / 700 working weights). The brand loads no secondary or monospaced face for marketing surfaces — code blocks use the system monospace stack. There is no custom typeface, no display-specific cut, no variable-weight use beyond 400 and 700. The discipline is strict.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 700 | 70.4px | -3px | Hero headline ("Everything you need to build apps"). The brand's loudest voice. |
| `{typography.display-lg}` | 48px | 700 | 57.6px | -2px | Large section headlines. |
| `{typography.display-md}` | 32px | 700 | 38.4px | -1px | Section block headings, feature group titles. |
| `{typography.display-sm}` | 24px | 700 | 28.8px | -0.5px | Card-level headlines, pricing tier names. |
| `{typography.body-lg}` | 18px | 400 | 25.2px | 0 | Lead paragraph beneath hero and section headlines. |
| `{typography.body-md}` | 16px | 400 | 22.4px | 0 | Default body paragraph. |
| `{typography.body-md-strong}` | 16px | 700 | 22.4px | 0 | Bolded inline body emphasis. |
| `{typography.body-sm}` | 14px | 400 | 19.6px | 0 | Secondary body, nav links, badge labels, button labels. |
| `{typography.body-sm-strong}` | 14px | 700 | 19.6px | 0 | Nav CTA labels, table emphasis, button-md equivalent. |
| `{typography.caption}` | 12px | 400 | 19.2px | 0 | Footer fine print, secondary metadata. |
| `{typography.caption-strong}` | 12px | 700 | 19.2px | 0 | Table column headers, small badge labels. |
| `{typography.code}` | 13px | 400 | 20px | 0 | Code snippets and terminal mockups inside dark card surfaces. |
| `{typography.button-md}` | 14px | 700 | 19.6px | 0 | Small-scale button labels — nav CTAs. |
| `{typography.button-lg}` | 16px | 700 | 22.4px | 0 | Marketing-scale button labels — hero CTAs. |

### Principles
- **-3px tracking is the brand's loudest typographic statement.** The hero headline at 64px with -3px letter-spacing is the single most distinctive typography decision on the page. Do not soften it.
- **One weight for display, one for body.** 700 carries every heading at every size; 400 carries every body paragraph and label. The brand never uses 500, 600, or 800. This simplicity is intentional.
- **No uppercase display text.** Headlines are sentence-case without exception. Uppercase appears only in specific small-label contexts where all-caps is semantically meaningful.
- **Inter is not supplemented.** There is no decorative display face, no monospaced brand face. The system monospace stack handles code surfaces. The marketing voice lives entirely in one typeface, two weights.
- **Line heights are tight at display scale.** 1.1 line-height at 64px, scaling toward 1.6 at caption scale — the brand compresses display text vertically, which reinforces the density of the negative tracking.

## Layout

### Spacing System
- **Base unit**: 4px. The extracted scale (`4px / 8px / 12px / 16px / 24px / 32px`) is a strict 4px grid. Larger values (`48px / 96px / 144px`) appear as section padding and are multiples of the base.
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.2xl}` 40px · `{spacing.3xl}` 48px · `{spacing.4xl}` 96px · `{spacing.5xl}` 144px.
- **Section padding**: marketing bands use `{spacing.4xl}` (96px) top/bottom. The hero band stretches to `{spacing.5xl}` (144px) to give the atmospheric gradient room to breathe.
- **Card interior padding**: marketing cards sit at `{spacing.lg}` (24px); feature cards at `{spacing.xl}` (32px).
- **Button padding**: the primary CTA uses `{spacing.md}` (16px) vertical / `{spacing.xl}` (32px) horizontal. Nav CTAs use `{spacing.xs}` (8px) vertical / `{spacing.md}` (16px) horizontal.

### Grid & Container
- **Max width**: approximately 1200px centred. Content uses horizontal gutters of `{spacing.xl}` (32px) on desktop.
- **Column patterns**:
  - Hero: single centred column for headline + body + CTA row.
  - Feature grid: 3-up at desktop, collapsing to 1-up on mobile.
  - Code/app showcase: split two-column layout with code editor left and device mockup right.
  - Nav: logo left, link row centre, GitHub count + Log in + Sign up right.

### Whitespace Philosophy
The ice-blue gradient does the atmospheric heavy lifting; whitespace handles section separation. The hero's generous top padding (`{spacing.5xl}`) lets the gradient breathe before the headline lands. Inside cards, headline and body stack tightly (`{spacing.xs}` 8px gap), then a wider gap before any CTA. The page reads as airy and uncluttered — large inter-section gaps, tight intra-card rhythm, nothing in between.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero band and dark-surface polarity-flipped sections. |
| Level 1 — Hairline Border | `0 0 0 1px {colors.hairline}` | Input fields, nav CTA outlines, announcement badge rings. |
| Level 2 — Soft Card | `0px 3px 6px rgba(0,0,0,0.08), 0px 2px 4px rgba(0,0,0,0.07)` | The canonical card elevation — extracted directly from the card component. Barely-there but consistent. |
| Level 3 — Lifted | Soft Card shadow + mild inset hairline ring. | Feature cards that sit above a canvas-soft band. |

The brand uses stacked soft shadows — two small offsets at low opacity — never a single heavy drop. The result is that cards appear to rest on the page rather than float above it. Combined with the 24px card radius, the effect is warm and grounded rather than clinical.

### Decorative Depth
- **Ice-blue atmospheric gradient as hero depth**: the soft blue haze behind the hero — fading from `{colors.canvas-blue-wash}` to `{colors.canvas}` — is the brand's sole atmospheric effect. It is rendered at hero scale only and never miniaturised.
- **Polarity-flipped dark surface**: switching from `{colors.canvas}` to `{colors.dark-surface}` is the brand's section-depth cue, used for dark cards and dark bands containing code mockups.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands and edge-to-edge image frames. |
| `{rounded.xs}` | 4px | Smallest inline indicators — status dots, micro badges. |
| `{rounded.sm}` | 8px | Tight UI chrome — small chips and secondary labels. |
| `{rounded.md}` | 12px | Mid-scale containers — dropdown menus, sidebar nav rows. |
| `{rounded.lg}` | 16px | Intermediate card variants. |
| `{rounded.xl}` | 24px | Card chrome — the measured `{rounded.card}` value. |
| `{rounded.card}` | 24px | Every card surface on the page. Measured directly from the card component. |
| `{rounded.button}` | 36px | Every button and interactive CTA on the page. The brand's most distinctive shape decision. Measured directly. |
| `{rounded.pill}` | 24px | Pill-shaped announcement badges and chip elements. |
| `{rounded.full}` | 9999px | Circular avatar rings, icon containers, nav announcement strip. |

### Notes on Shape Decisions
The 36px button radius is the brand's single most opinionated shape choice. It is not a pill (which would be ≥ half the button height) and not a standard rounded rectangle (which would be 8–12px). At 36px on a ~48px-tall button, the corners are dramatically rounded without fully collapsing the rectangular form. This radius appears on every interactive element — primary hero CTA, secondary CTA, nav Log In, nav Sign Up, and form inputs — making it the system's universal interactive shape.

## Components

### Buttons

**`button-primary`** — the canonical dark CTA at marketing scale.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-lg}`, padding `{spacing.md} {spacing.xl}`, shape `{rounded.button}` 36px. The "Get started for free" button in the hero.

**`button-secondary`** — the outlined companion CTA paired with `button-primary`.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline}` border, same typography and padding as `button-primary`, shape `{rounded.button}` 36px. The "Read the docs" button in the hero.

**`nav-cta-signup`** — the small dark "Sign up" button in the nav.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.button}` 36px. Consistent radius with marketing CTAs — the brand uses one button shape everywhere.

**`nav-cta-login`** — the outlined "Log in" button in the nav.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline}` border, same typography and shape as `nav-cta-signup`.

### Cards & Containers

**`card-marketing`** — the standard feature card.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg}`, shape `{rounded.card}` 24px, shadow Level 2 soft card.

**`card-feature`** — the larger feature card for primary content clusters.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.xl}`, shape `{rounded.card}` 24px, shadow Level 2 soft card.

**`card-dark`** — the polarity-flipped dark card used for code and technical content.
- Background `{colors.dark-surface}`, text `{colors.on-dark}`, padding `{spacing.xl}`, shape `{rounded.card}` 24px.

**`code-block`** — the dark code-preview surface inside feature bands.
- Background `{colors.dark-surface}`, text `{colors.on-dark}`, body in `{typography.code}`, padding `{spacing.lg}`, shape `{rounded.card}` 24px.

### Navigation

**`nav-bar`** — the top navigation bar.
- Background `{colors.canvas}`, text `{colors.ink}`, height 60px, padding `{spacing.xs} {spacing.xl}`. Layout: Expo logo mark left, link row centre, GitHub star count + Log in + Sign up cluster right.

**`nav-link`** — the centred navigation link row inside `nav-bar`.
- Text `{colors.ink}`, set in `{typography.body-sm}`, padding `{spacing.xs} {spacing.sm}`.

**`nav-github-count`** — the GitHub star count badge in the nav (showing "50K").
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.body-sm}`, padding `{spacing.xs} {spacing.sm}`.

### Hero & Bands

**`hero-band`** — the white hero with the ice-blue atmospheric gradient backdrop.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.lg}`. Inside: `hero-announcement-badge` above the headline, headline in `{typography.display-xl}` (sentence-case, -3px tracking), lead body in `{typography.body-lg}`, CTA row with `button-primary` + `button-secondary`, enterprise callout line below.

**`hero-announcement-badge`** — the "What's new? Introducing EAS Observe →" pill at the top of the hero.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline}` border, set in `{typography.body-sm}`, padding `{spacing.xxs} {spacing.sm}`, shape `{rounded.full}`. Contains a `hero-announcement-new-chip` sub-element on the left.

**`hero-announcement-new-chip`** — the green "What's new?" chip inside the announcement badge.
- Background `{colors.new-badge-bg}`, text `{colors.new-badge-text}`, set in `{typography.caption-strong}`, padding `{spacing.xxs} {spacing.xs}`, shape `{rounded.full}`.

**`feature-section`** — a full-width marketing section for feature clusters.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.lg}`, section headline in `{typography.display-md}`.

**`showcase-band`** — a soft-canvas section for product showcase content.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.lg}`, headline in `{typography.display-md}`.

### Utility

**`form-input`** — the canonical text input.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline}` border, set in `{typography.body-sm}`, padding `{spacing.xs} {spacing.md}`, height 40px, shape `{rounded.button}` 36px. The input radius matches the button radius — both interactive, same shape language.

**`badge-new`** — the green "What's new?" status chip.
- Background `{colors.new-badge-bg}`, text `{colors.new-badge-text}`, set in `{typography.caption-strong}`, shape `{rounded.full}`, padding `{spacing.xxs} {spacing.xs}`.

**`enterprise-callout`** — the "Enterprise needs? Talk to our team" line below the hero CTAs.
- Background transparent, text `{colors.body}`, set in `{typography.body-sm}`, padding `{spacing.md} 0`. Contains an avatar cluster and an inline link.

**`link-inline`** — body-copy inline links.
- Text `{colors.link}`, set in `{typography.body-md}`. The brand underlines on hover rather than by default.

**`footer`** — the bottom multi-column navigation.
- Background `{colors.canvas}`, text `{colors.body}`, set in `{typography.body-sm}`, padding `{spacing.4xl} {spacing.xl}`.

## Do's and Don'ts

### Do
- Use `{rounded.button}` (36px) for every interactive control — buttons, CTAs, inputs. One radius, all interactive surfaces.
- Use `{rounded.card}` (24px) for every card surface. Keep card and button radii distinct.
- Set hero headlines in `{typography.display-xl}` with -3px letter spacing. Negative tracking is the voice.
- Treat the ice-blue atmospheric gradient as the hero's sole decorative element — use it at hero scale only, never miniaturised.
- Maintain the one-ink system: `{colors.primary}` (`#1c2024`) does triple duty as CTA fill, primary text, and dark-band surface.
- Use weight 700 exclusively for display and button text; 400 exclusively for body. Never introduce an intermediate weight.
- Reserve the green badge palette (`{colors.new-badge-bg}` / `{colors.new-badge-text}`) for status / announcement signals only — it is the one moment of colour.

### Don't
- Don't use a pill shape (full border-radius) for buttons. The 36px radius is deliberate — a large-radius rectangle, not a pill.
- Don't introduce a distinct link-blue colour. Expo's links are ink-coloured; context and underline differentiate them.
- Don't add accent colours. The palette is ink + gray + canvas. One green status badge is the ceiling.
- Don't reduce the hero gradient to a flat fill or a single colour. The soft blue wash is the entire decorative system.
- Don't use the card radius (24px) on buttons, or the button radius (36px) on cards. The two radii coexist deliberately and must stay separate.
- Don't set display text at weight 500 or 600. The brand's display ceiling is 700; body stays at 400. No intermediate weights.
- Don't apply heavy drop shadows. The brand's elevation is two soft offsets at 7–8% black opacity — barely perceptible, always stacked.
