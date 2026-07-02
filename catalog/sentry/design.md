---
version: alpha
name: Sentry
description: "Sentry is a developer-obsessed error tracking and performance monitoring brand that lives entirely in the dark — a deep purple-violet night sky (#1f1633) as the universal canvas, with white type punched hard at display scale and a signature hot-pink accent word breaking the headline. The decoration system is a textured dark-purple field with scattered star-dot noise, no gradients miniaturised to swatches, no light-mode surface anywhere above the fold. Two typefaces split the work cleanly: a custom rounded display sans (Dammit Sans) carries every headline at weight 700 with normal tracking — the rounded terminals are the brand's warmth signal — while Rubik handles all body, nav, and UI copy in the same weight set. CTAs are white-filled rectangles with 8 px corners, never pills; cards are frosted-glass panels at 12 px. The brand earns its developer credibility through restraint on the dark field and a single shocking-pink word in the hero."
colors:
  primary: "#6a5fc1"
  on-primary: "#ffffff"
  bg-primary: "#1f1633"
  bg-secondary: "#181225"
  bg-dk-violet: "#362d59"
  surface-glass: rgba(255, 255, 255, 0.18)
  ink: "#ffffff"
  body: "#cfcfdb"
  mute: "#ececf1"
  hairline: rgba(255, 255, 255, 0.12)
  canvas: "#1f1633"
  canvas-soft: "#181225"
  canvas-elevated: "#362d59"
  blurple: "#6a5fc1"
  dk-purple: "#452650"
  md-violet: "#584674"
  md-pink: "#e1567c"
  dk-pink: "#c73852"
  hot-pink: "#fd44b0"
  lt-orange: "#ffb287"
  md-orange: "#f4834f"
  v-lt-purple: "#e2abe0"
  success: "#72c219"
  error: "#c73852"
  warning: "#f4834f"
  on-dark: "#ffffff"
  selection-bg: "#6a5fc1"
  selection-fg: "#ffffff"
typography:
  display-xl:
    fontFamily: '"Dammit Sans", sans-serif'
    fontSize: 88px
    fontWeight: 700
    lineHeight: 105.6px
    letterSpacing: normal
  display-lg:
    fontFamily: '"Dammit Sans", sans-serif'
    fontSize: 60px
    fontWeight: 700
    lineHeight: 66px
    letterSpacing: normal
  display-md:
    fontFamily: '"Dammit Sans", sans-serif'
    fontSize: 40px
    fontWeight: 700
    lineHeight: 48px
    letterSpacing: normal
  display-sm:
    fontFamily: '"Dammit Sans", sans-serif'
    fontSize: 24px
    fontWeight: 700
    lineHeight: 28px
    letterSpacing: normal
  body-lg:
    fontFamily: Rubik, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Rubik, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: Rubik, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: Rubik, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
  caption:
    fontFamily: Rubik, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: Rubik, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
  button-lg:
    fontFamily: Rubik, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
  nav-link:
    fontFamily: Rubik, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
rounded:
  none: 0px
  xs: 4px
  sm: 4px
  button: 8px
  md: 8px
  card: 12px
  lg: 12px
  xl: 16px
  pill: 9999px
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
  4xl: 64px
  5xl: 96px
  6xl: 128px
  section: 192px
components:
  nav-bar:
    backgroundColor: "{colors.bg-primary}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
    padding: "{spacing.sm} {spacing.lg}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-get-demo:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    borderColor: "{colors.blurple}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
  nav-cta-get-started:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    borderColor: "{colors.blurple}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
  card-glass:
    backgroundColor: "{colors.surface-glass}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xs}"
    shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px 0px
  card-feature:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  card-product-mockup:
    backgroundColor: "{colors.bg-secondary}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
  hero-band:
    backgroundColor: "{colors.bg-primary}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  hero-accent-word:
    textColor: "{colors.hot-pink}"
    typography: "{typography.display-xl}"
  feature-band:
    backgroundColor: "{colors.bg-secondary}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.lg}"
  section-band:
    backgroundColor: "{colors.bg-primary}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.4xl} {spacing.lg}"
  footer:
    backgroundColor: "{colors.bg-secondary}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.lg}"
  badge-label:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.v-lt-purple}"
    typography: "{typography.caption}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.xs}"
  form-input:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.sm}
    height: 40px
  link-inline:
    textColor: "{colors.blurple}"
    typography: "{typography.body-md}"
  product-mockup-replay:
    backgroundColor: "{colors.bg-secondary}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
  product-mockup-trace:
    backgroundColor: "{colors.bg-secondary}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
  seer-panel:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
  ex-pricing-tier:
    description: Default pricing tier card on the dark canvas.
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured pricing tier — blurple-filled with white text.
    backgroundColor: "{colors.blurple}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: Feature/product summary card on the dark elevated surface.
    backgroundColor: "{colors.canvas-elevated}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary drawer — dark surface, hairline row dividers.
    backgroundColor: "{colors.bg-secondary}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses blurple as left-edge indicator.
    backgroundColor: "{colors.canvas-elevated}"
    activeIndicator: "{colors.blurple}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: Data table chrome on dark surface. Header uses caption; body uses body-sm.
    headerBackground: "{colors.canvas-elevated}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in card on dark elevated surface with form-input primitives.
    backgroundColor: "{colors.canvas-elevated}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog on dark surface with soft drop shadow.
    backgroundColor: "{colors.canvas-elevated}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame on dark-secondary surface.
    backgroundColor: "{colors.bg-secondary}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification on dark elevated surface.
    backgroundColor: "{colors.canvas-elevated}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Sentry's marketing surface is a fully committed dark-mode brand — there is no light canvas, no grey-on-white body, no mode toggle above the fold. The page ground is `{colors.bg-primary}` (`#1f1633`), a deep purple-near-black, with `{colors.bg-secondary}` (`#181225`) as the slightly deeper inset surface used for secondary bands and card interiors. The only surface variation is `{colors.canvas-elevated}` (`#362d59`), the brand's mid-violet that appears inside raised cards, badges, and panel UI. The entire hierarchy is dark field → slightly-deeper dark → violet-raised.

The decoration system is a textured starfield — scattered dot noise on the purple ground — not a gradient, not an illustration, not a mesh. The only deliberate accent colour on the hero is a single word rendered in `{colors.hot-pink}` (`#fd44b0`). That word, "breaks," appears in the headline "Code breaks, fix it faster" and carries the brand's entire emotional punch. Outside the hero, the accent palette (`{colors.md-pink}`, `{colors.md-orange}`, `{colors.lt-orange}`, `{colors.v-lt-purple}`) surfaces inside product UI mockups and illustration details — never as full-band fills. Blurple (`{colors.blurple}`, `#6a5fc1`) is the brand's system colour, used for the meta theme, CTA outlines, and active-state indicators.

Two typefaces run the entire system. Dammit Sans — a custom rounded-terminal display sans — carries every headline at weight 700. Its rounded curves are the warmth signal inside an otherwise stark dark system: headlines never go tracked-tight, always normal spacing, always mixed-case. Rubik handles body, navigation, buttons, and UI labels — a neutral humanist sans that stays readable at small sizes on dark backgrounds. There is no monospace face anywhere on the marketing surface (unlike Vercel's technical-label mono system).

CTAs are blunt-cornered white rectangles at `{rounded.button}` 8 px — never pills, never capsules. The primary action ("Get Started") is white-filled with dark text; the secondary action ("See How in Sandbox" / "Get Demo") uses a transparent fill with a blurple border. Cards are frosted-glass panels at `{rounded.card}` 12 px, a measured radius that is deliberately different from the button radius.

## Colors

### Brand & Accent
- **Blurple** (`{colors.blurple}` — `#6a5fc1`): The brand's system primary — the theme-color meta, CTA borders, active-state indicators. Never used as a full-band background.
- **Hot Pink** (`{colors.hot-pink}` — `#fd44b0`): The hero accent word. The brand's single strongest saturation hit. Used on one word in the hero headline; not repeated as a surface.
- **Mid Pink** (`{colors.md-pink}` — `#e1567c`): A slightly cooler pink used inside product UI illustrations and feature-band accent marks.
- **Dark Pink** (`{colors.dk-pink}` — `#c73852`): The error / destructive semantic tone and deep pink used inside product UI.
- **Mid Orange** (`{colors.md-orange}` — `#f4834f`): Warning / caution semantic and illustration accent.
- **Light Orange** (`{colors.lt-orange}` — `#ffb287`): Lighter illustration accent, product mockup highlights.
- **Very Light Purple** (`{colors.v-lt-purple}` — `#e2abe0`): Used inside badges and product-UI label text on dark-elevated surfaces.

### Surface
- **Canvas / BG Primary** (`{colors.bg-primary}` — `#1f1633`): The universal page ground. Every marketing band sits on this.
- **Canvas Soft / BG Secondary** (`{colors.bg-secondary}` — `#181225`): A slightly deeper inset — used for alternate bands and card inner surfaces.
- **Canvas Elevated** (`{colors.canvas-elevated}` — `#362d59`): The raised violet surface — card fills, badge backgrounds, panel chrome.
- **Surface Glass** (`{colors.surface-glass}` — `rgba(255,255,255,0.18)`): The frosted-glass overlay used on product-mockup cards that sit on top of the dark hero field.
- **Hairline** (`{colors.hairline}` — `rgba(255,255,255,0.12)`): 1 px white-alpha dividers on dark surfaces — card borders, row separators.

### Text
- **Ink** (`{colors.ink}` — `#ffffff`): All display and body text on dark surfaces.
- **Body** (`{colors.body}` — `#cfcfdb`): Secondary text — footer columns, card sub-copy, muted labels.
- **Mute** (`{colors.mute}` — `#ececf1`): Lowest-priority text — fine print, placeholder copy.

### Semantic
- **Success** (`{colors.success}` — `#72c219`): Green progress bars and "Reasoning" indicator lines visible in the Seer panel on the screenshot.
- **Error** (`{colors.error}` — `#c73852`): Destructive state and error-type labels.
- **Warning** (`{colors.warning}` — `#f4834f`): Caution indicators in product mockups.

## Typography

### Font Families
Two faces divide the entire system:

1. **Dammit Sans** — a custom rounded-terminal display sans, weight 700 only. Carries every headline from `{typography.display-xl}` down to `{typography.display-sm}`. Normal tracking throughout — the rounded terminals are the brand signal; artificially tightening the tracking would undercut the warmth. Mixed-case, never all-caps.
2. **Rubik** — a humanist geometric sans, weights 400 and 700. Handles all body text, navigation labels, button labels, captions, and UI copy. The same face scales from hero subheads to 12 px footer fine print.

There is no monospaced face in the marketing surface. Code-like UI elements inside product mockups use the Rubik stack at small sizes.

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 88px | 700 | 105.6px | normal | Hero headline — "Code breaks, fix it faster." The largest type on the page, mixed-case, Dammit Sans. |
| `{typography.display-lg}` | 60px | 700 | 66px | normal | Section heroes — major feature heading scale. |
| `{typography.display-md}` | 40px | 700 | 48px | normal | Sub-section headlines, card-cluster headings. |
| `{typography.display-sm}` | 24px | 700 | 28px | normal | Card-level inline headings, pricing-tier names. |
| `{typography.body-lg}` | 18px | 400 | 28px | — | Lead paragraph under hero headline — "Application monitoring software considered…" |
| `{typography.body-md}` | 16px | 400 | 24px | — | Default body paragraph. |
| `{typography.body-sm}` | 14px | 400 | 20px | — | Nav links, secondary card body, button labels. |
| `{typography.body-sm-strong}` | 14px | 700 | 20px | — | Bolded UI labels, nav dropdown section headers. |
| `{typography.caption}` | 12px | 400 | 16px | — | Badge labels, footer fine print, product-mockup micro-labels. |
| `{typography.button-md}` | 14px | 700 | 20px | — | Nav-scale button labels — "Get Demo", "Get Started" in the nav bar. |
| `{typography.button-lg}` | 16px | 700 | 24px | — | Marketing-scale button labels — "Get Started", "See How in Sandbox" in the hero. |
| `{typography.nav-link}` | 14px | 400 | 20px | — | Horizontal nav items — "Platform", "Solutions", "Resources", "Docs", "Pricing", "Sign In". |

### Principles
- **Normal tracking at all sizes.** Sentry's display type never applies negative letter-spacing. The rounded letterforms of Dammit Sans are the voice — they work at natural spacing.
- **Mixed-case headlines, no full-stop punctuation.** Headlines read as product names, not sentences. No period at the end.
- **Single accent word in pink, never the full headline.** The hot-pink hero word is a deliberate one-word insertion. Spreading the pink to multiple words dilutes it.
- **Rubik is the system face for everything non-display.** Buttons, nav, body, captions — all Rubik. The brand's developer credibility lives in the simplicity of two faces with a clear boundary between them.

### Note on Font Substitutes
Dammit Sans is a proprietary custom face. The closest open-source substitute with rounded terminals at weight 700 is **Nunito** (weight 700) or **Poppins** (weight 700). Neither fully matches the x-height; Nunito is the closer stylistic fit. For Rubik, it is available on Google Fonts directly.

## Layout

### Spacing System
- **Base unit**: 4 px.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px · `{spacing.6xl}` 128 px · `{spacing.section}` 192 px.
- **Section padding**: marketing bands use `{spacing.4xl}` to `{spacing.5xl}` top/bottom. The hero band is tall enough to accommodate the product mockup cluster that peeks in from the bottom.
- **Card interior padding**: glass-overlay product cards use the tight `{spacing.xs}` 8 px padding from deterministic extraction. Feature cards use `{spacing.lg}` 24 px.
- **Button padding**: `{spacing.sm}` 12 px vertical, `{spacing.md}` 16 px horizontal — matching the extracted `12px 16px` computed padding.
- **Inline gap**: button pairs in the hero use `{spacing.md}` 16 px between siblings.

### Grid & Container
- **Max width**: approximately 1200 px content width with `{spacing.lg}` 24 px horizontal gutters at desktop.
- **Column patterns**:
  - Hero: centred single column — headline, sub-copy, two-button row, then the product mockup cluster spanning the full width below.
  - Feature grid: 3-up card rows for "Errors / Replays / Traces / Profiling" style feature sections.
  - Product mockup band: 3-panel horizontal strip — left card, centre illustration, right card — visible at the bottom of the hero screenshot.

### Whitespace Philosophy
The textured dark field does all the atmospheric work. Whitespace separates bands by stepping between `{colors.bg-primary}` and `{colors.bg-secondary}` — the surface colour change IS the band separator. Inside the hero, the headline-to-body gap is generous (`{spacing.lg}` 24 px), the body-to-button gap a full `{spacing.xl}` 32 px, giving each element room to read clearly on the dark background. Cards use tight internal padding because their frosted-glass chrome provides enough visual containment.

### Responsive Strategy

#### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 600px | Hero headline drops to `--text-hero-h1-mobile` (~50px); nav collapses to hamburger; product mockup cards stack vertically. |
| Tablet | 600–959px | 3-up feature grids drop to 2-up; nav stays horizontal. |
| Desktop | 960–1199px | Full 3-up feature grids; hero at full 88px display-xl. |
| Wide | ≥ 1200px | Content centres at ~1200px; bands stretch edge-to-edge in the dark canvas. |

#### Touch Targets
Nav CTA buttons at `{spacing.sm}` 12 px padding render approximately 40–44 px tall, meeting the WCAG touch-target floor. Marketing hero buttons at 12 px / 16 px padding render approximately 48 px tall.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed dark hero and section bands. |
| Level 1 — Glass Overlay | `rgba(255,255,255,0.18)` fill + `rgba(0,0,0,0.08) 0px 2px 8px 0px` drop. | Product-mockup cards floating over the hero field. |
| Level 2 — Raised Violet | `{colors.canvas-elevated}` fill (`#362d59`) + hairline border. | Feature cards, badge pills, panel chrome. |
| Level 3 — Soft Drop | `rgba(0,0,0,0.08) 0px 2px 8px 0px` on elevated surface. | Seer panel, trace panel, floating UI mockups. |

The brand uses the surface-colour step — from `{colors.bg-primary}` to `{colors.canvas-elevated}` — as its primary elevation cue, not shadow depth. Shadow is additive on top of the colour step, always soft and single-offset. The brand never stacks multiple shadow layers.

### Decorative Depth
- **Starfield texture**: scattered dot noise on the `{colors.bg-primary}` ground is the brand's sole atmospheric effect. Applied as a background image overlay on the hero band. Never applied to card surfaces.
- **Hot-pink accent word**: the single `{colors.hot-pink}` word in the hero headline creates foreground-punch depth — the eye goes there first, then reads the surrounding white text.
- **Product mockup cluster**: the three product UI panels (Errors, Replays, Traces / Seer) sit slightly below the hero fold as an implicit third depth layer — content peeks in to invite scrolling.

## Shapes

### Border Radius Scale
| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero and section bands. |
| `{rounded.xs}` | 4px | Tightest UI element corners — small internal badges inside product mockups. |
| `{rounded.button}` | 8px | Every button and CTA — "Get Started", "Get Demo", "See How in Sandbox", nav CTAs. The measured radius from deterministic extraction. |
| `{rounded.md}` | 8px | Same as button — shared by form inputs and small UI panels. |
| `{rounded.card}` | 12px | All marketing and product-mockup cards. Kept separate from the button radius by deliberate design. |
| `{rounded.lg}` | 12px | Alias of card — larger card chrome. |
| `{rounded.xl}` | 16px | Largest card chrome variant, if used. |
| `{rounded.full}` | 9999px | Avatar chips or circular icon containers if they appear in product UI. |

The two-radius system — 8 px for interactive controls, 12 px for containers — is a visible and deliberate signal. A button should never inherit a card's 12 px corner.

## Components

### Buttons

**`button-primary`** — the white-filled CTA, marketing scale.
- Background `{colors.ink}` (white), text `{colors.bg-primary}` (dark), label in `{typography.button-lg}`, padding `{spacing.sm} {spacing.md}`, shape `{rounded.button}` 8 px. Hero buttons ("Get Started") render approximately 48 px tall.

**`button-secondary`** — the transparent/outlined CTA paired with the primary.
- Background transparent, text `{colors.ink}`, 1 px solid `{colors.blurple}` border, same typography and padding as `button-primary`, shape `{rounded.button}`. ("See How in Sandbox", "Get Demo".)

**Nav CTAs:**

**`nav-cta-get-demo`** — the outlined "Get Demo" button in the nav.
- Background transparent, text `{colors.ink}`, blurple border, label `{typography.button-md}`, padding `{spacing.sm} {spacing.md}`, shape `{rounded.button}` 8 px.

**`nav-cta-get-started`** — the white-filled "Get Started" button in the nav.
- Background `{colors.ink}`, text `{colors.bg-primary}`, same typography, padding, and shape as `nav-cta-get-demo`.

### Navigation

**`nav-bar`** — the top navigation.
- Background `{colors.bg-primary}`, text `{colors.ink}`, height 64 px, padding `{spacing.sm} {spacing.lg}`. Layout: logo mark + wordmark left; "Platform / Solutions / Resources / Docs / Pricing / Sign In" link row centre-left; "Get Demo / Get Started" cluster right.

**`nav-link`** — the horizontal nav items with expand chevrons.
- Text `{colors.ink}`, set in `{typography.nav-link}`, padding `{spacing.xs} {spacing.sm}`. Chevron (›) appended to items with dropdown menus.

### Cards & Panels

**`card-glass`** — the frosted-glass product-mockup card.
- Background `{colors.surface-glass}` (`rgba(255,255,255,0.18)`), text `{colors.ink}`, padding `{spacing.xs}` 8 px, shape `{rounded.card}` 12 px, shadow `rgba(0,0,0,0.08) 0px 2px 8px`. Hosts the product UI mockups (Errors, Replays, Traces panels) that sit over the hero field.

**`card-feature`** — the raised violet feature card.
- Background `{colors.canvas-elevated}`, text `{colors.ink}`, padding `{spacing.lg}` 24 px, shape `{rounded.card}` 12 px.

**`card-product-mockup`** — the inner content surface inside product mockup panels.
- Background `{colors.bg-secondary}`, text `{colors.ink}`, padding `{spacing.md}`, shape `{rounded.card}` 12 px. Contains Rubik body-sm labels and coloured progress bars.

**`seer-panel`** — the "Seer" AI root-cause panel visible in the screenshot.
- Background `{colors.canvas-elevated}`, text `{colors.ink}`, padding `{spacing.md}`, shape `{rounded.card}` 12 px. Contains "ReferenceError", "Reasoning" label with a `{colors.success}` green progress bar, and "Root Cause" breakdown rows.

**`product-mockup-replay`** — the "Replays" panel in the hero strip.
- Background `{colors.bg-secondary}`, text `{colors.ink}`, padding `{spacing.md}`, shape `{rounded.card}` 12 px. Contains a video-scrubber UI with coloured event markers.

**`product-mockup-trace`** — the "Traces" panel in the hero strip.
- Background `{colors.bg-secondary}`, text `{colors.ink}`, padding `{spacing.md}`, shape `{rounded.card}` 12 px. Contains nested trace-span rows with coloured bars.

### Other Components

**`hero-band`** — the dark hero with starfield texture.
- Background `{colors.bg-primary}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.lg}`. Inside: the display-xl headline (with one hot-pink accent word), a body-lg lead paragraph, then the two-button CTA row, followed by the product mockup strip.

**`hero-accent-word`** — the single hot-pink word inside the hero headline.
- Text `{colors.hot-pink}`, typography `{typography.display-xl}`. Applied inline to one word only — the emotional anchor of the brand's hero.

**`feature-band`** — alternate-surface section band.
- Background `{colors.bg-secondary}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.lg}`. Section headline in `{typography.display-lg}`.

**`section-band`** — primary-surface section band.
- Background `{colors.bg-primary}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.lg}`. Section headline in `{typography.display-md}`.

**`badge-label`** — the small category pill used on cards.
- Background `{colors.canvas-elevated}`, text `{colors.v-lt-purple}`, typography `{typography.caption}`, padding `{spacing.xxs} {spacing.xs}`, shape `{rounded.button}` 8 px.

**`form-input`** — text input field.
- Background `{colors.canvas-elevated}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, typography `{typography.body-sm}`, padding `0px {spacing.sm}`, height 40 px, shape `{rounded.button}` 8 px.

**`link-inline`** — body-copy inline links.
- Text `{colors.blurple}`, typography `{typography.body-md}`.

**`footer`** — the bottom navigation band.
- Background `{colors.bg-secondary}`, text `{colors.body}`, padding `{spacing.4xl} {spacing.lg}`. Column header labels in `{typography.body-sm-strong}`; link rows in `{typography.body-sm}`.

## Do's and Don'ts

### Do
- Keep every surface dark — `{colors.bg-primary}` or `{colors.bg-secondary}` for bands, `{colors.canvas-elevated}` for raised cards. This brand has no light-mode marketing surface.
- Reserve `{colors.hot-pink}` for one word or one element per composition. Its power comes from isolation.
- Use `{rounded.button}` 8 px for all interactive controls and `{rounded.card}` 12 px for all containers. Never blend the two radius values on the same component.
- Set every headline in Dammit Sans at weight 700, mixed-case, with normal letter-spacing. The rounded terminals are the warmth — do not apply negative tracking.
- Use the white-filled `button-primary` as the single primary CTA and the blurple-outlined `button-secondary` as the paired alternative. The button hierarchy is white-on-dark versus transparent-on-dark.
- Apply the starfield texture only to the `{colors.bg-primary}` hero band. Feature bands use the flat `{colors.bg-secondary}` ground.
- Step between `{colors.bg-primary}` and `{colors.bg-secondary}` to signal band boundaries — the surface colour change is the separator.

### Don't
- Don't introduce a light or white canvas anywhere above the footer. The entire marketing surface is dark.
- Don't spread `{colors.hot-pink}` to a full headline, a button, or a section background. One word only.
- Don't use pill-shaped (9999 px) buttons. This brand's CTAs are 8 px corners — blunt, not capsule.
- Don't apply negative letter-spacing to Dammit Sans headlines. Normal tracking is part of the rounded-face voice.
- Don't use the frosted-glass card style (`{colors.surface-glass}`) for feature cards — that chrome belongs to the product-mockup overlay panels only.
- Don't use a monospaced typeface anywhere on the marketing surface. Rubik handles all body, label, and UI copy.
- Don't reduce the brand's palette to blurple alone — the hot-pink + blurple + violet-surface triad is the minimum system; removing any one piece flattens it.
