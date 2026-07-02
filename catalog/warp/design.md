---
version: alpha
name: Warp-design-system
description: "Warp is a developer-tool brand whose surface reads as a considered near-monochrome system: near-black ink on off-white canvas, broken at the bottom of the viewport by a slow-scrolling ticker of uppercase spaced utility claims. The headline face is a proprietary geometric sans (theFuture) set at weight 400 — unusually light for a hero at 64 px — with aggressive negative tracking that makes the display sizes feel editorial rather than technical. Body copy rides on Matter, a contemporary humanist sans that stays readable and warm against the cool utility of the interface. The only colour relief is a soft warm-tan for secondary text and card borders, a lavender-tinted app-preview surface, and a faint warm-cream for link text on dark bands."
colors:
  primary: "#0a0908"
  on-primary: "#f8f5ee"
  ink: "#0a0908"
  ink-soft: "#141414"
  body: "#5f5d59"
  mute: "#8a8880"
  hairline: "#c4c0ba"
  canvas: "#ffffff"
  canvas-soft: "#fcfcfc"
  canvas-warm: "#f8f5ee"
  canvas-app: "#eeecf4"
  surface-card: "#f5f3ee"
  link: "#0a0908"
  link-on-dark: "#f8f5ee"
  tertiary-accent: "#c59fff"
  success: "#4caf82"
  status-active: "#4a7fcb"
  input-border: "#3d3a35"
  announcement-bg: "#0a0908"
  announcement-text: "#f8f5ee"
  ticker-bg: "#0a0908"
  ticker-text: "#f8f5ee"
typography:
  display-xl:
    fontFamily: theFuture, "theFuture Fallback", "The Future", system-ui, sans-serif
    fontSize: 64px
    fontWeight: 400
    lineHeight: 70.4px
    letterSpacing: -2.24px
  display-lg:
    fontFamily: theFuture, "theFuture Fallback", "The Future", system-ui, sans-serif
    fontSize: 30px
    fontWeight: 400
    lineHeight: 40px
    letterSpacing: -1.05px
  display-md:
    fontFamily: theFuture, "theFuture Fallback", "The Future", system-ui, sans-serif
    fontSize: 24px
    fontWeight: 400
    lineHeight: 30px
    letterSpacing: -0.6px
  display-sm:
    fontFamily: theFuture, "theFuture Fallback", "The Future", system-ui, sans-serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 25px
    letterSpacing: 0px
  body-lg:
    fontFamily: Matter, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 27px
  body-md:
    fontFamily: Matter, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: Matter, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
  body-sm-strong:
    fontFamily: Matter, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 21px
  caption:
    fontFamily: Matter, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  caption-strong:
    fontFamily: Matter, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
  ticker:
    fontFamily: Matter, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0.12px
  code:
    fontFamily: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  button-md:
    fontFamily: Matter, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  button-lg:
    fontFamily: Matter, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  nav-label:
    fontFamily: Matter, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  button: 5px
  md: 8px
  lg: 12px
  xl: 16px
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
  4xl: 64px
  section: 96px
components:
  announcement-bar:
    backgroundColor: "{colors.announcement-bg}"
    textColor: "{colors.announcement-text}"
    typography: "{typography.caption}"
    padding: "{spacing.md} {spacing.lg}"
  nav-bar:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    height: 60px
    padding: "{spacing.md} {spacing.xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.sm} {spacing.md}"
  nav-cta-download:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.lg}"
  nav-cta-contact:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.sm} {spacing.lg}"
    rounded: "{rounded.button}"
  nav-github-badge:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
  hero-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  hero-install-snippet:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.body}"
    typography: "{typography.code}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"
  hero-copy-button:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs}"
  card-feature:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
  card-app-preview:
    backgroundColor: "{colors.canvas-app}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ticker-bar:
    backgroundColor: "{colors.ticker-bg}"
    textColor: "{colors.ticker-text}"
    typography: "{typography.ticker}"
    padding: "{spacing.md} 0px"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  link-on-dark:
    textColor: "{colors.link-on-dark}"
    typography: "{typography.body-sm-strong}"
  badge-pill:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.md}"
  form-input:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    borderColor: "{colors.input-border}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    height: 40px
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.xl}"
  footer-link:
    textColor: "{colors.link-on-dark}"
    typography: "{typography.body-sm}"
  section-band-light:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section} {spacing.xl}"
  section-band-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section} {spacing.xl}"
  ex-pricing-tier:
    description: Default pricing tier card — warm off-white surface with hairline border.
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured pricing tier — polarity-flipped to ink with cream text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: What's Included summary card for plan features.
    backgroundColor: "{colors.canvas-warm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary — add-on line items, not a literal cart.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row for the Warp app shell. Active state uses primary ink as left-edge indicator.
    backgroundColor: "{colors.canvas-app}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  ex-data-table-cell:
    description: Data table chrome. Header uses caption-strong; body uses body-sm.
    headerBackground: "{colors.surface-card}"
    headerTypography: "{typography.caption-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card. Warm canvas surface with form-input primitives inside.
    backgroundColor: "{colors.canvas-warm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog surface — card-feature chrome with elevated shadow.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame. Generous padding on canvas-warm.
    backgroundColor: "{colors.canvas-warm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — card-feature shape with subtle shadow.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"
---
## Overview

Warp is a developer-tool brand aimed at professional engineers who want their terminal to behave like a modern IDE — agentic, orchestratable, and self-hostable. The page wears this positioning lightly: a near-monochrome system of near-black ink on warm off-white canvas, with almost no chromatic decoration. The entire surface reads as quietly confident rather than aggressively technical.

The headline face — a proprietary geometric sans called theFuture — is the brand's decisive voice. It sits at weight 400 even at 64 px, a deliberately light choice that gives display headlines a contemplative, editorial quality rather than the punchy heaviness of weight 700. Negative tracking is applied aggressively at hero scale (`-2.24 px` at 64 px, `-1.05 px` at 30 px); the brand never letter-spaces positively. Body copy moves to Matter, a warm humanist sans that keeps secondary paragraphs approachable and readable.

The colour palette is restrained to four meaningful tones: near-black ink (`#0a0908`) for primary text and CTAs, a warm cream-white (`#fcfcfc`) for the page canvas, a secondary warm tan (`#5f5d59`) for supporting text and borders, and a pale lavender tint (`#eeecf4`) for the app-preview panel that floats in the hero. A scrolling ticker band at the bottom of the hero section reverses to full-black with cream text — this polarity flip is the brand's chief structural depth cue, used again in the footer. The only decorative accent visible across the page is a soft lavender-purple (`#c59fff`) reserved for system-level highlights and status indicators inside the app UI.

The navigation CTA is a tight 5 px-radius black rectangle labelled "Download" — explicitly square-cornered relative to any pill system, and this geometry carries through all interactive surfaces. Cards use a matching 4 px radius with a warm tan hairline border. There are no large drop-shadows, no gradients on the marketing surface, no background photography. The page is pure type, structure, and the app preview as the hero illustration.

## Colors

### Brand & Surface
- **Ink** (`{colors.primary}` — `#0a0908`): The single primary action color. Pure near-black used for the Download CTA, every heading, the ticker band, and the footer. The brand's entire conversion surface lives here.
- **Canvas Soft** (`{colors.canvas-soft}` — `#fcfcfc`): The default page background — a warm off-white that sits slightly above pure white. Every section band uses this tone unless polarity-flipped.
- **Canvas Warm** (`{colors.canvas-warm}` — `#f8f5ee`): A slightly deeper warm cream used for the install-snippet inline code background, link text on dark surfaces, and card tints. Distinctly warmer than the page canvas.
- **On Primary** (`{colors.on-primary}` — `#f8f5ee`): The warm cream tone used as text on all `{colors.primary}` surfaces — the nav Download CTA, the ticker, and the footer.

### Text
- **Body** (`{colors.body}` — `#5f5d59`): The brand's secondary text color, extracted as `--color-text-secondary` and `--color-accent`. Used for card body copy, nav sub-labels, install-snippet text, and form placeholder text. A warm brownish-gray that reads as intentionally analogue.
- **Ink Soft** (`{colors.ink-soft}` — `#141414`): An H2-level text tone extracted from the heading signal — marginally lighter than the primary ink. Used for sub-level display headings.
- **Mute** (`{colors.mute}` — `#8a8880`): Lowest-priority text — timestamps, fine-print labels, deemphasised metadata.

### Structural
- **Hairline** (`{colors.hairline}` — `#c4c0ba`): The warm tan used for card borders and dividers throughout the system. Extracted directly from the card border signal. Noticeably warmer than a neutral gray.
- **Input Border** (`{colors.input-border}` — `#3d3a35`): The darker border tone for form inputs on dark surfaces, extracted from `--color-input`.
- **Canvas App** (`{colors.canvas-app}` — `#eeecf4`): The pale lavender-tinted surface visible in the hero app-preview panel. The brand's only hue break on the marketing surface.
- **Surface Card** (`{colors.surface-card}` — `#f5f3ee`): A warm intermediate card surface — slightly deeper than canvas-warm, used for feature-card tint states.

### Accent & Semantic
- **Tertiary Accent** (`{colors.tertiary-accent}` — `#c59fff`): The soft lavender visible inside the app preview and extracted as `--color-tertiary`. Used for system-level status highlights and icon accents inside the terminal UI. Never used as a background on marketing surfaces.
- **Success** (`{colors.success}` — `#4caf82`): Extracted from `--color-status-success`. Used for successful session indicators inside the app-preview UI.
- **Status Active** (`{colors.status-active}` — `#4a7fcb`): Extracted from `--color-status-active`. Used for active-state indicators inside the app preview.

## Typography

### Font Families
Two typefaces carry the entire system:

1. **theFuture** — a proprietary geometric sans for every display heading. Weight 400 throughout — the brand deliberately avoids bold display weight. Tight negative tracking at display sizes (`-2.24 px` at 64 px, `-1.05 px` at 30 px) provides the authority that weight would otherwise supply. The face reads as European modernist, closer to Futura than to a grotesque.
2. **Matter** — a contemporary humanist sans for body copy, button labels, captions, and the scrolling ticker. Weight 400 for body, 500 for buttons and strong labels. No tracking override at body sizes.
3. A system **monospace stack** (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas`) carries the inline install snippet and any code-surface labels inside the app preview.

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 400 | 70.4px | -2.24px | Hero headline ("From the terminal to the cloud, with any agent"). |
| `{typography.display-lg}` | 30px | 400 | 40px | -1.05px | Section headlines in feature and showcase bands. |
| `{typography.display-md}` | 24px | 400 | 30px | -0.6px | Card cluster headlines and feature card headings. |
| `{typography.display-sm}` | 20px | 400 | 25px | 0px | Sub-level display moments — the H2 scale. |
| `{typography.body-lg}` | 18px | 400 | 27px | 0px | Hero lead paragraph ("Warp is an open agentic development environment…"). |
| `{typography.body-md}` | 16px | 400 | 24px | 0px | Default body paragraph inside section bands. |
| `{typography.body-sm}` | 14px | 400 | 21px | 0px | Secondary body, card meta, nav link labels. |
| `{typography.body-sm-strong}` | 14px | 500 | 21px | 0px | Contact Sales label, inline strong body. |
| `{typography.caption}` | 12px | 400 | 16px | 0px | Ticker text, badge labels, fine-print. |
| `{typography.caption-strong}` | 12px | 500 | 16px | 0px | GitHub star badge label, nav utility labels. |
| `{typography.ticker}` | 12px | 400 | 16px | 0.12px | The scrolling ticker strip — uppercase-spaced utility claims. |
| `{typography.code}` | 13px | 400 | 20px | 0px | Install snippet (`$ brew install --cask warp`), terminal mockups inside the app preview. |
| `{typography.button-md}` | 14px | 500 | 20px | 0px | Small button labels — nav Download, utility CTAs. |
| `{typography.button-lg}` | 16px | 500 | 24px | 0px | Marketing-scale CTA labels — hero Download, Contact Sales. |
| `{typography.nav-label}` | 14px | 400 | 20px | 0px | Nav link labels, nav-level anchor text. |

### Principles
- **Weight 400 is the display voice.** theFuture is never set heavier than 400 on the marketing surface. The brand earns hierarchy through size and tracking, not weight.
- **Negative tracking at display, neutral at body.** Hero headlines carry `-2.24 px` of tracking; the brand never applies positive tracking to display sizes. Body and caption sizes run at default tracking except the ticker's faint `+0.12 px` for the spaced uppercase feel.
- **Sentence-case throughout.** Headlines and button labels use sentence-case. The ticker's all-caps is the only exception, and it reads as a deliberate structural contrast.
- **Mono for terminal surfaces only.** The install snippet and any code labels inside the app preview use the system monospace stack. Body paragraphs and headings never touch mono.

### Font Substitutes
Both primary faces are proprietary. Open-source substitutes:
- **theFuture** — *Futura PT* (400) is the closest geometric match; *Nunito* or *DM Sans* at weight 300–400 can approximate the light geometric voice.
- **Matter** — *Inter* (400 / 500) is the closest stylistic stand-in; *DM Sans* is a warmer second choice.

## Layout

### Spacing System
- **Base unit**: 4 px. Every captured value in the extraction is a multiple of 4 (or sits at the 6 px / 10 px fractional points observed in nav padding).
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 40 px · `{spacing.4xl}` 64 px · `{spacing.section}` 96 px.
- **Section padding**: marketing bands use `{spacing.section}` 96 px top/bottom. The `--space-section: calc(4rem * 1)` CSS token (64 px base) is the root section rhythm.
- **Card interior**: feature cards use `{spacing.md}` vertical / `{spacing.xl}` horizontal — matching the 12 px / 20 px extraction signal directly.
- **Inline gap**: button rows and nav items use `{spacing.sm}` to `{spacing.md}` between siblings. The hero CTA row gaps the Download button from the install snippet by `{spacing.lg}`.

### Grid & Container
- **Max width**: approximately 1280 px for the content column, centred with horizontal gutters of `{spacing.xl}` 24 px on desktop.
- **Column patterns**:
  - Hero: split two-column at desktop — large headline left, body paragraph right; stacks to single column at mobile.
  - Feature card row: appears as 3-up or 2-up card grid in section bands.
  - App preview: a single large panel that occupies the lower two-thirds of the hero viewport.
  - Ticker bar: full-bleed single row of scrolling text, no grid.

### Whitespace Philosophy
The page is engineered space. The hero headline has room to breathe at `{spacing.4xl}` top padding before it. Inside feature cards, the headline-to-body gap stays tight at `{spacing.sm}` to `{spacing.md}`, then a wider gap before any CTA. Section bands cycle between `{colors.canvas-soft}` light and `{colors.primary}` dark without any intermediate gradient — the hard polarity flip is the depth cue. Nothing floats on a heavy shadow; the card chrome relies on the `{colors.hairline}` border to separate it from the canvas.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero stacks to single column; nav collapses; ticker stays full-bleed. |
| Tablet | 640–1023px | Two-column hero may compress; feature cards drop to 2-up. |
| Desktop | 1024–1279px | Full hero split; 3-up feature grids. |
| Wide | ≥ 1280px | Content caps at ~1280 px; bands stretch edge-to-edge in colour. |

#### Collapsing Strategy
- **Nav**: full link row + GitHub badge + Contact sales + Download at desktop. Collapses to hamburger at mobile.
- **Hero**: two-column split at desktop (headline left, body right), single-column stack at mobile. App preview panel scales proportionally.
- **Feature cards**: 3-up → 2-up → 1-up across breakpoints; cards keep their `{rounded.sm}` 4 px shape at all viewports.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero bands, ticker band, footer. |
| Level 1 — Hairline | `1px solid {colors.hairline}` border only, no shadow. | Default feature card chrome — the brand's only "you can see this card" cue. |
| Level 2 — Subtle | Hairline border + `0 1px 4px rgba(0,0,0,0.06)`. | Slightly elevated surfaces — app preview panel, install snippet container. |

The brand uses no stacked multi-offset shadows on the marketing surface. Depth is communicated through surface color change (canvas-soft → primary polarity flip) rather than through elevation. Cards sit flush on the page held by the warm tan hairline only.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero bands, ticker bar, footer. |
| `{rounded.xs}` | 2px | Tightest micro-radius — icon containers, copy icon inside install snippet. |
| `{rounded.sm}` | 4px | Card radius — every feature card and the app-preview panel. Measured directly from extraction. |
| `{rounded.button}` | 5px | CTA and button radius — the nav Download button, hero Download CTA, all interactive button elements. Measured directly from extraction; explicitly not a pill. |
| `{rounded.md}` | 8px | Larger card chrome for dialog or modal surfaces. |
| `{rounded.lg}` | 12px | Optional large card radius for future surface variants. |
| `{rounded.xl}` | 16px | Reserved for image-cap cards or large illustration frames. |
| `{rounded.full}` | 9999px | Badge pills only — the small metadata chip in the hero area. |

The brand runs two deliberate radius scales in parallel: the 4 px card radius and the 5 px button radius. These are intentionally close but distinct — cards and buttons should never share the same radius token.

## Components

### Buttons

**`button-primary`** — the hero Download CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-lg}`, padding `{spacing.md} {spacing.xl}`, shape `{rounded.button}` 5 px. Never a pill — the brand's CTA geometry is deliberately square-cornered at 5 px.

**`button-secondary`** — the hero Contact Sales ghost button.
- Background transparent, text `{colors.ink}`, same typography and padding as `button-primary`, shape `{rounded.button}`. Carries an underline or a border treatment to distinguish from body links.

**`button-ghost`** — utility-scale ghost buttons in section bands.
- Background transparent, text `{colors.body}`, label in `{typography.button-md}`, padding `{spacing.sm} {spacing.md}`, shape `{rounded.button}`.

**`nav-cta-download`** — the nav-scale Download button.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}`, padding `{spacing.sm} {spacing.lg}`, shape `{rounded.button}` 5 px. Slightly tighter than the hero CTA.

**`nav-cta-contact`** — the nav Contact sales ghost link.
- Background transparent, text `{colors.ink}`, label in `{typography.nav-label}`, padding `{spacing.sm} {spacing.lg}`. No border — relies on text color alone.

### Navigation

**`nav-bar`** — the top nav.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, height 60 px, padding `{spacing.md} {spacing.xl}`. Layout: logo left, product links centre, GitHub badge + Contact sales + Download cluster right.

**`nav-link`** — the centred product link row.
- Text `{colors.ink}`, label in `{typography.nav-label}`, padding `{spacing.sm} {spacing.md}`. No visible border on rest state; carries a hover underline or a background ghost-fill.

**`nav-github-badge`** — the "⭐ 63k" GitHub star count badge in the nav cluster.
- Background transparent, text `{colors.ink}`, label in `{typography.caption-strong}`, shape `{rounded.button}` 5 px, padding `{spacing.xs} {spacing.md}`. Carries a hairline border to separate it from the surrounding nav row.

### Announcements & Banners

**`announcement-bar`** — the full-width top banner ("Now available: Orchestrate Claude Code, Codex, and Warp Agent in Oz").
- Background `{colors.announcement-bg}` (ink), text `{colors.announcement-text}` (warm cream), label in `{typography.caption}`, padding `{spacing.md} {spacing.lg}`. A close icon sits flush right.

**`ticker-bar`** — the full-bleed scrolling utility-claims strip at the bottom of the hero.
- Background `{colors.ticker-bg}` (ink), text `{colors.ticker-text}` (warm cream), label in `{typography.ticker}` uppercase-spaced, padding `{spacing.md} 0px`. Scrolls horizontally; separators are bullet characters.

### Hero

**`hero-band`** — the white hero section containing the split headline and app preview.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Inside: display headline in `{typography.display-xl}` left-column, body paragraph in `{typography.body-lg}` right-column, CTA row below.

**`hero-install-snippet`** — the inline install command next to the hero CTA.
- Background `{colors.canvas-warm}`, text `{colors.body}`, monospace content in `{typography.code}`, shape `{rounded.button}`, padding `{spacing.md} {spacing.xl}`. Contains a copy-to-clipboard icon flush right.

**`hero-copy-button`** — the copy icon inside the install snippet.
- Background transparent, text `{colors.body}`, shape `{rounded.xs}`, padding `{spacing.xs}`.

**`card-app-preview`** — the large app-UI mockup panel in the hero.
- Background `{colors.canvas-app}` (pale lavender), text `{colors.ink}`, shape `{rounded.sm}`, padding `{spacing.xl}`. Hosts the Warp Desktop session list and command-output mockup.

### Cards & Containers

**`card-feature`** — the canonical section feature card.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, typography `{typography.body-md}`, shape `{rounded.sm}` 4 px, padding `{spacing.md} {spacing.xl}` (matching the 12 px / 20 px measured signal). No shadow.

**`section-band-light`** — the default light section band.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, typography `{typography.display-lg}`, padding `{spacing.section} {spacing.xl}`.

**`section-band-dark`** — the polarity-flipped dark band.
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.display-lg}`, padding `{spacing.section} {spacing.xl}`. The brand's chief depth cue between sections.

### Utilities

**`badge-pill`** — small inline metadata pill for announcement labels and feature callouts.
- Background `{colors.canvas-warm}`, text `{colors.body}`, label in `{typography.caption}`, shape `{rounded.full}`, padding `{spacing.xs} {spacing.md}`.

**`form-input`** — text input field.
- Background transparent, text `{colors.ink}`, border `1px solid {colors.input-border}`, typography `{typography.body-sm}`, shape `{rounded.sm}`, padding `{spacing.sm} {spacing.md}`, height 40 px.

**`link-inline`** — body-copy inline link on light surfaces.
- Text `{colors.link}`, typography `{typography.body-md}`. Underlined on hover.

**`link-on-dark`** — inline link on dark (ticker / footer / announcement) surfaces.
- Text `{colors.link-on-dark}` (warm cream `#f8f5ee`), typography `{typography.body-sm-strong}`. Underlined.

**`footer`** — the bottom multi-column nav.
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.body-sm}`, padding `{spacing.3xl} {spacing.xl}`. Column headings in `{typography.body-sm-strong}`; link rows in `{typography.body-sm}` at `{colors.link-on-dark}`.

## Do's and Don'ts

### Do
- Use `{colors.primary}` (`#0a0908`) as the single CTA background. Black ink is the conversion target; no other color should carry a primary button.
- Use `{rounded.button}` 5 px for every button and CTA element. Use `{rounded.sm}` 4 px for every card. Keep these two radii distinct — their proximity is deliberate, not an accident.
- Set all headlines in `{typography.display-*}` at weight 400, sentence-case, with the measured negative tracking. The lightness of the face at display sizes is the brand voice.
- Reserve `{colors.canvas-app}` lavender-tint for the app-preview panel only. It is the only hue on the marketing surface and should never appear as a section background.
- Use the full-black polarity flip (`{colors.primary}` background) to separate sections rather than relying on shadows or gradients.
- Set install snippets and all terminal-surface content in the system monospace stack at `{typography.code}`. The mono face is the voice of the platform layer.
- Use `{colors.hairline}` tan borders as the sole elevation cue on feature cards. No shadow is needed.

### Don't
- Don't set display headlines in anything heavier than weight 400. theFuture at 700 is not the Warp voice.
- Don't introduce chromatic accent colors on the marketing surface. `{colors.tertiary-accent}` lavender lives inside the app UI only — it should never appear as a button color or section tint.
- Don't use a pill shape (`{rounded.full}`) for CTAs. Warp's CTA is a 5 px-radius rectangle, not a pill. The brand never rounds its conversion targets to softness.
- Don't apply drop-shadows to cards. The hairline border alone defines the card edge.
- Don't letter-space headlines positively. Negative tracking or zero — never positive for the heading face.
- Don't set body paragraphs in theFuture. The geometric face is display-only; every paragraph uses Matter.
- Don't miniaturise the ticker or announcement-bar polarity flip to individual card chrome. The full-bleed dark band is the brand's structural device, not a decorative fill for small surfaces.
