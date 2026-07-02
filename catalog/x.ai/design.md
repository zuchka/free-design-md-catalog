---
version: alpha
name: xAI
description: "xAI is a frontier-AI brand whose surface is a near-pure white canvas holding ink-black type with almost no chromatic decoration — save a single orange-amber accent that fires only on the 'New' pill badge and the brand's CSS custom property set. Two proprietary sans faces carry the entire system: a display cut (universalSansDisplay) for headlines at weight 500 with aggressive negative tracking, and a text cut (universalSans) for every body, label, and nav string. Cards sit on a warm off-white (#f9f8f6) with 16px rounding — visually distinct from the page's pure-white background. Buttons are 8px-rounded rectangles at marketing scale and split-pill at the 'Try for free' nav CTA. The brand is spare to the point of severity: no gradients, no illustration system, no decorative colour bands — just the typographic voice and whitespace doing all the work."

colors:
  primary: "#0a0a0a"
  on-primary: "#ffffff"
  ink: "#0a0a0a"
  ink-80: "rgba(10, 10, 10, 0.8)"
  body: "#3a3f47"
  mute: "#7f8388"
  hairline: "#e2e4e6"
  canvas: "#ffffff"
  canvas-soft: "#f9f8f6"
  canvas-nimbus: "#eef0f5"
  canvas-hover: "#d8dce6"
  accent: "#f47c00"
  accent-hover: "#ffd080"
  link: "#0a0a0a"
  codeblock: "#121212"
  on-codeblock: "#ffffff"
  twilight: "#9b7dfa"
  dusk: "#6b2fe0"
  midnight: "#0b2040"
  breeze: "#93b6df"
  evenfall: "#3d4f63"
  steel: "#373d44"
  pewter: "#9da5b0"
  fog: "#7b8085"
  dove: "#d2d7e5"
  success: "#0a0a0a"
  error: "#ef4444"
  warning: "#f47c00"

typography:
  display-xl:
    fontFamily: "universalSansDisplay, \"universalSansDisplay Fallback\", system-ui, sans-serif"
    fontSize: 60px
    fontWeight: 500
    lineHeight: 60px
    letterSpacing: -1.5px
  display-lg:
    fontFamily: "universalSansDisplay, \"universalSansDisplay Fallback\", system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: -1.2px
  display-md:
    fontFamily: "universalSansDisplay, \"universalSansDisplay Fallback\", system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 38px
    letterSpacing: -0.8px
  display-sm:
    fontFamily: "universalSansDisplay, \"universalSansDisplay Fallback\", system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 30px
    letterSpacing: -0.6px
  body-lg:
    fontFamily: "universalSans, \"universalSans Fallback\", system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: "universalSans, \"universalSans Fallback\", system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: "universalSans, \"universalSans Fallback\", system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 19px
    letterSpacing: -0.35px
  body-sm-strong:
    fontFamily: "universalSans, \"universalSans Fallback\", system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 19px
    letterSpacing: -0.35px
  caption:
    fontFamily: "universalSans, \"universalSans Fallback\", system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  button-md:
    fontFamily: "universalSans, \"universalSans Fallback\", system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  button-lg:
    fontFamily: "universalSans, \"universalSans Fallback\", system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  nav-label:
    fontFamily: "universalSans, \"universalSans Fallback\", system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  button: 8px
  card: 16px
  lg: 16px
  xl: 24px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 40px
  3xl: 48px
  4xl: 64px
  5xl: 96px
  section: 120px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    height: 64px
    padding: "{spacing.sm} {spacing.xl}"
    borderBottom: "1px solid {colors.hairline}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.sm} {spacing.md}"
  nav-cta-contact:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.lg}"
    height: 36px
  nav-cta-try-free:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.md}"
    height: 36px
  nav-cta-dropdown:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    width: 36px
    height: 36px
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
  badge-new:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent}"
    borderColor: "{colors.accent}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.xs}"
  banner-announcement:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.sm} {spacing.md}"
    rounded: "{rounded.pill}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.5xl} {spacing.xl}"
  card-feature:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  card-chat-demo:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  card-code-demo:
    backgroundColor: "{colors.codeblock}"
    textColor: "{colors.on-codeblock}"
    typography: "{typography.code}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  chat-bubble-user:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.lg}"
    borderColor: "{colors.hairline}"
  chat-bubble-assistant:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.lg}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.xl}"
    borderTop: "1px solid {colors.hairline}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
    height: 40px
  badge-secondary:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.mute}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.sm}"
  ex-pricing-tier:
    description: "Default pricing tier card on canvas-soft with hairline border."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-pricing-tier-featured:
    description: "Featured tier — polarity-flipped to ink primary with white text."
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Uses canvas-soft surface with form-input primitives inside."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-modal-card:
    description: "Modal dialog surface — canvas card with hairline border and soft shadow."
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-app-shell-row:
    description: "Sidebar nav row. Active state uses primary ink as left-edge indicator bar."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
  ex-data-table-cell:
    description: "Data table chrome. Header on canvas-soft in body-sm-strong; body rows in body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.body-sm-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-empty-state-card:
    description: "Empty-state frame on canvas-soft with generous padding."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification — canvas surface with hairline border and button-md typography."
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.lg}"
    typography: "{typography.button-md}"

---

## Overview

xAI is an AI-research company whose marketing surface is a study in deliberate restraint. The page is pure white (`{colors.canvas}`) with near-black ink (`{colors.ink}`) holding every word, and almost nothing else — no gradient system, no illustration library, no coloured bands competing for attention. The one chromatic exception is an orange-amber accent (`{colors.accent}`) that lives exclusively on the "New" badge pill beside the announcement row; it never spreads to buttons or decorative swaths. The warm off-white card surface (`{colors.canvas-soft}` — `#f9f8f6`) gives cards their only tonal lift against the white page.

Two proprietary typefaces carry the entire typographic system. The display cut (universalSansDisplay) handles every headline at weight 500 with aggressive negative letter-spacing — `-1.5px` at 60px hero, `-1.2px` at 48px section. It never goes heavier than 500 and never relaxes its tracking. The text cut (universalSans) handles body, labels, nav strings, and button copy at weight 400 for reading and 500 for interactive emphasis. The combination reads as a purpose-built AI-company voice: technical confidence without the loud colour palettes that competitors reach for.

Buttons are 8px-radius rectangles at marketing scale — not pills. The nav's "Try for free" CTA is the only pill shape (9999px), deliberately split with a chevron dropdown separator, which signals a different interaction model from the body CTAs. Cards sit at 16px radius, warmer than the button geometry, on the `{colors.canvas-soft}` surface with zero shadow — the warm tint against white is the only elevation cue the brand uses. There is no stacked-shadow system; depth is handled entirely through surface-colour contrast.

The hero's interactive demo panels — a chat window and a code editor — appear as side-by-side cards on `{colors.canvas-soft}` and `{colors.codeblock}` respectively. These are the brand's primary "show, don't tell" device, visible above the fold without any scroll. The xAI mark (the stylised X-diagonal logomark) is the only graphic asset in the nav; everything else is type and negative space.

## Colors

### Brand & Accent
- **Accent / Sunset** (`{colors.accent}` — `#f47c00`): The brand's single chromatic accent, sourced from `--accent` / `--color-sunset`. Appears only on the "New" badge pill border and text in the announcement row. Nowhere else on the captured surface.
- **Accent Hover / Dawn** (`{colors.accent-hover}` — `#ffd080`): The lighter hover state for the accent, from `--color-dawn` / `--accent-hover`. Paired with `{colors.accent}` only.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The default page background. Nearly every section and the nav sit on pure white.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f9f8f6`): The warm off-white card surface — slightly ivory, sourced from the extracted card background. Carries the feature cards and demo panel containers.
- **Canvas Nimbus** (`{colors.canvas-nimbus}` — `#eef0f5`): A cool-tinted light surface from `--color-nimbus`. Available for inset regions or hover states that need a cooler tint than `canvas-soft`.
- **Canvas Hover** (`{colors.canvas-hover}` — `#d8dce6`): Pressed / hover background state from `--background-hover`. Used on interactive surface roll-overs.
- **Hairline** (`{colors.hairline}` — `#e2e4e6`): 1px dividers — nav bottom border, card borders, input borders, row separators.

### Text
- **Ink** (`{colors.ink}` — `#0a0a0a`): Every headline and primary body string on light surfaces.
- **Ink 80** (`{colors.ink-80}` — `rgba(10, 10, 10, 0.8)`): The h3-level secondary heading color — slightly de-emphasised, used for sub-section labels.
- **Body** (`{colors.body}` — `#3a3f47`): Secondary body text, sourced from `--color-ink` (`213 11% 16%` resolves to approximately `#232830`; `{colors.body}` is a practical approximation from the evenfall / umbra cluster for readable secondary text).
- **Mute** (`{colors.mute}` — `#7f8385`): Lowest-priority strings — footer text, placeholder labels, sourced from `--color-fog` (`216 4% 51%`).
- **Pewter** (`{colors.pewter}` — `#9da5b0`): The mid-gray from `--color-pewter` / `--secondary-hover`. Used for inactive nav elements and secondary captions.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): All text on `{colors.primary}` surfaces (the black CTA button and nav pill).

### Named Semantic Palette
- **Twilight** (`{colors.twilight}` — `#9b7dfa`): Light purple from `--color-twilight`. Present in the design token set; visible in product UI contexts.
- **Dusk** (`{colors.dusk}` — `#6b2fe0`): Deep purple from `--color-dusk`. A deeper companion to twilight.
- **Midnight** (`{colors.midnight}` — `#0b2040`): The deep navy from `--color-midnight`. Used for deepest dark surfaces in product UI.
- **Breeze** (`{colors.breeze}` — `#93b6df`): A mid-blue from `--color-breeze`. Soft informational tint.
- **Dove** (`{colors.dove}` — `#d2d7e5`): Light cool gray from `--color-dove`. Hairline-weight backgrounds.
- **Codeblock** (`{colors.codeblock}` — `#121212`): The near-black surface for code editor demo panels, from `--color-codeblock`.

### Semantic
- **Error** (`{colors.error}` — `#ef4444`): Standard destructive red for validation states.
- **Warning** (`{colors.warning}` — `#f47c00`): Shares the accent orange; doubles as the caution state.

## Typography

### Font Families
Two proprietary faces carry the entire system:

1. **universalSansDisplay** — the display-cut sans used for every headline token. Weight 500 is the only weight in use. Aggressive negative letter-spacing is baked into every display size; the face never appears at weight 600 or heavier, and never at positive tracking. Open-source substitute: *Inter* at weight 500 with `font-feature-settings: "ss01"` enabled, or *Satoshi Medium*.
2. **universalSans** — the text-cut companion for body, labels, nav copy, and button strings. Weights 400 (reading) and 500 (interactive / strong emphasis) are the working set. Open-source substitute: *Inter Regular / Medium*.
3. **System monospace stack** — `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas` — used inside code-editor demo panels. No proprietary mono face was observed.

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 60px | 500 | 60px | -1.5px | Hero headline ("Frontier AI models for everything you imagine.") |
| `{typography.display-lg}` | 48px | 500 | 48px | -1.2px | Section headlines below the hero. |
| `{typography.display-md}` | 32px | 500 | 38px | -0.8px | Card cluster or feature-section sub-headlines. |
| `{typography.display-sm}` | 24px | 500 | 30px | -0.6px | Inline micro-headlines inside cards. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Lead paragraph under hero headline. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph and card body copy. |
| `{typography.body-sm}` | 14px | 400 | 19px | -0.35px | Nav labels, secondary body, sub-labels. |
| `{typography.body-sm-strong}` | 14px | 500 | 19px | -0.35px | Emphasized inline labels and table headers. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Badge labels, fine print, footer secondary lines. |
| `{typography.code}` | 13px | 400 | 20px | 0 | Code editor demo panel content. |
| `{typography.button-lg}` | 16px | 500 | 24px | 0 | Marketing-scale CTA button labels. |
| `{typography.button-md}` | 14px | 500 | 20px | 0 | Nav-scale and secondary button labels. |
| `{typography.nav-label}` | 14px | 400 | 20px | 0 | Nav link text and dropdown trigger labels. |

### Principles
- **Negative tracking is the brand's primary typographic gesture.** Every display token carries negative letter-spacing; `-1.5px` at 60px hero is the most aggressive. Resetting to 0 tracking breaks the voice immediately.
- **Weight 500 is the ceiling.** The display face never appears at 600 or 700. xAI's headlines read as confident without being heavy — a deliberate tonal choice that separates it from bolder AI-brand competitors.
- **Sentence-case, often period-terminated.** "Frontier AI models for everything you imagine." ends with a period. Headlines lean literary rather than advertising-punchy.
- **Mono is for code panels only.** No section eyebrow, label, or UI string uses a monospaced face outside of the code-editor demo card.

### Note on Font Substitutes
The two primary faces are proprietary. Open-source nearest matches:
- **universalSansDisplay / universalSans** — *Inter* at the matching weights is the closest geometric-neutral substitute. Enable `font-feature-settings: "ss01", "cv11"` for the geometric alternates. *Satoshi* (by Fontshare) is a close second.
- **Monospace** — *JetBrains Mono* (400) at 12–13px is a clean substitute for the code panel.

## Layout

### Spacing System
- **Base unit**: 4px. Every measured spacing value on the page is a multiple of 2px or 4px, with the exception of 6px which appears at high frequency as a tight inline gap.
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 6px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.2xl}` 40px · `{spacing.3xl}` 48px · `{spacing.4xl}` 64px · `{spacing.5xl}` 96px · `{spacing.section}` 120px.
- **Card interior padding**: feature cards sit at `{spacing.2xl}` (40px) — this is the measured card padding from deterministic extraction.
- **Hero top padding**: the hero band uses `{spacing.5xl}` (96px) to `{spacing.section}` (120px) top padding — visible in the measured `96px×9` frequency from the live page.
- **Inline gap**: button row, nav cluster, and chat-bubble rows use `{spacing.sm}` to `{spacing.md}` between siblings.

### Grid & Container
- **Max width**: approximately 1200px, centred with horizontal gutters of `{spacing.xl}` 24px on desktop and `{spacing.lg}` 16px on mobile.
- **Column patterns**:
  - Hero: single-column centred text block above the demo card pair.
  - Demo card pair: 2-up side-by-side at desktop (chat panel left, code panel right), stacking to 1-up at mobile.
  - Feature grid: likely 3-up cards at desktop, collapsing toward 1-up at mobile.
  - Nav: logo left, link row centre, CTA cluster right.

### Whitespace Philosophy
The brand earns its premium signal through whitespace alone — no decorative swaths, no gradients, no icons filling gaps. Section spacing is generous; the hero breathing room before the demo cards uses `{spacing.5xl}` to `{spacing.section}`. Inside cards, content is padded at 40px on all sides — the brand's single measured interior padding value. The page reads as considered and scientific, not commercial.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero stacks to 1-col; demo cards stack vertically; nav collapses to logo + hamburger. |
| Tablet | 640–1023px | Demo cards may remain side-by-side at reduced width; feature grid drops to 2-up. |
| Desktop | 1024–1279px | Full layout; 2-up demo cards; nav fully expanded. |
| Wide | ≥ 1280px | Content centres at ~1200px max-width; bands stretch edge-to-edge in white. |

#### Touch Targets
Nav CTAs ("Contact Sales", "Try for free") render at 36px tall — below the 44px WCAG floor. Marketing body CTAs ("Get API Access", "View Documentation") should render at 48px tall to meet the accessibility floor. The brand's 8px button radius is retained at all scales.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Hero band, full-bleed sections, nav bar. |
| Level 1 — Surface Contrast | No shadow; card sits on `{colors.canvas-soft}` against `{colors.canvas}` page background. | Feature cards, demo panel containers — elevation is purely tonal. |
| Level 2 — Hairline Ring | `0 0 0 1px {colors.hairline}` inset border. | Input fields, secondary buttons, announcement banner pills. |

The xAI surface uses zero drop-shadows on any visible component. Depth is created entirely through the warm off-white card surface (`{colors.canvas-soft}`) contrasting against the pure-white page — a single-step tonal ladder rather than a shadow stack. This is the brand's most distinctive elevation decision and must not be supplemented with shadow on any card component.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed sections and the page background itself. |
| `{rounded.xs}` | 4px | Tightest inline chips or icon containers. |
| `{rounded.sm}` | 6px | Compact interactive chips. |
| `{rounded.md}` / `{rounded.button}` | 8px | All marketing-scale CTA buttons ("Get API Access", "View Documentation"). The brand's `--radius` token is `.5rem` = 8px. |
| `{rounded.card}` / `{rounded.lg}` | 16px | All cards — feature cards, demo panel containers. Measured directly from the extracted card radius. |
| `{rounded.xl}` | 24px | Larger container shapes if needed. |
| `{rounded.pill}` / `{rounded.full}` | 9999px | The nav "Try for free" split-pill CTA and the "Contact Sales" outline pill; the "New" badge; announcement row pill. |

### Shape Contrast
The deliberate gap between `{rounded.button}` (8px) for body CTAs and `{rounded.pill}` (9999px) for nav CTAs is intentional brand geometry — the two scales must not be homogenised. Body CTAs are rectangular with soft corners; nav CTAs are full pills. Mixing them breaks the hierarchy.

## Components

### Navigation

**`nav-bar`** — the top sticky nav holding the xAI logomark, five dropdown nav links, and the "Contact Sales" + "Try for free" cluster.
- Background `{colors.canvas}`, 1px solid `{colors.hairline}` bottom border, height 64px, padding `{spacing.sm} {spacing.xl}`. Nav labels in `{typography.nav-label}` (14px / 400).

**`nav-link`** — individual nav dropdown triggers ("Products", "Solutions", "Developer", "Company", "Pricing", "News").
- Text `{colors.ink}`, `{typography.nav-label}`, padding `{spacing.sm} {spacing.md}`.

**`nav-cta-contact`** — the "Contact Sales" outline pill in the nav cluster.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline}` border, `{typography.button-md}`, `{rounded.pill}`, height 36px.

**`nav-cta-try-free`** — the filled black "Try for free" portion of the split-pill nav CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.button-md}`, `{rounded.pill}`, height 36px.

**`nav-cta-dropdown`** — the chevron segment appended to `nav-cta-try-free`, forming the split button.
- Background `{colors.primary}`, text `{colors.on-primary}`, `{rounded.pill}`, 36×36px square.

### Buttons

**`button-primary`** — the canonical marketing CTA ("Get API Access").
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.button-lg}`, `{rounded.button}` 8px, padding `{spacing.md} {spacing.xl}`.

**`button-secondary`** — the outline companion CTA ("View Documentation").
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline}` border, `{typography.button-lg}`, `{rounded.button}` 8px, padding `{spacing.md} {spacing.xl}`.

### Badges & Announcements

**`badge-new`** — the orange-bordered "New" pill badge beside the announcement row.
- Background `{colors.canvas}`, text `{colors.accent}`, 1px solid `{colors.accent}` border, `{typography.caption}`, `{rounded.pill}`, padding `{spacing.xxs} {spacing.xs}`.

**`banner-announcement`** — the full announcement row ("New — Grok Build Beta →").
- Background `{colors.canvas}`, text `{colors.ink}`, `{typography.body-sm}`, padding `{spacing.sm} {spacing.md}`, `{rounded.pill}`.

### Hero

**`hero-band`** — the centred white hero with the display headline, lead body paragraph, and primary CTA row.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.xl}`. Headline in `{typography.display-xl}` (60px / 500 / -1.5px tracking), lead in `{typography.body-lg}`, CTA row holds `button-primary` + `button-secondary` at `{spacing.md}` gap.

### Cards & Demo Panels

**`card-feature`** — the product / feature marketing card.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, `{typography.body-md}`, `{rounded.card}` 16px, padding `{spacing.2xl}` 40px. No shadow.

**`card-chat-demo`** — the left hero demo panel showing Grok chat conversation bubbles.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, `{typography.body-md}`, `{rounded.card}` 16px, padding `{spacing.xl}`.

**`card-code-demo`** — the right hero demo panel showing Grok code generation output.
- Background `{colors.codeblock}`, text `{colors.on-codeblock}`, `{typography.code}`, `{rounded.card}` 16px, padding `{spacing.xl}`.

**`chat-bubble-user`** — the user-turn bubble in the chat demo (outlined pill shape).
- Background `{colors.canvas}`, text `{colors.ink}`, `{typography.body-sm}`, `{rounded.pill}`, padding `{spacing.sm} {spacing.lg}`, 1px solid `{colors.hairline}` border.

**`chat-bubble-assistant`** — the assistant-turn response in the chat demo (flat text, no bubble chrome).
- Background `{colors.canvas}`, text `{colors.ink}`, `{typography.body-sm}`, `{rounded.button}`, padding `{spacing.sm} {spacing.lg}`.

### Navigation Footer

**`footer`** — the bottom nav / legal strip.
- Background `{colors.canvas}`, text `{colors.mute}`, `{typography.body-sm}`, padding `{spacing.3xl} {spacing.xl}`, 1px solid `{colors.hairline}` top border.

### Forms & Inputs

**`form-input`** — standard text input field.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline}` border, `{typography.body-md}`, `{rounded.button}` 8px, padding `{spacing.sm} {spacing.md}`, height 40px.

### Inline

**`link-inline`** — body-copy inline links.
- Text `{colors.link}` (`{colors.ink}`), `{typography.body-md}`. The brand underlines on hover but not by default.

**`badge-secondary`** — a neutral metadata pill.
- Background `{colors.canvas-soft}`, text `{colors.mute}`, `{typography.caption}`, `{rounded.pill}`, padding `{spacing.xxs} {spacing.sm}`.

## Do's and Don'ts

### Do
- Use `{colors.accent}` exclusively on the "New" badge and its hover state. It is the only chromatic element on the page; diluting it by spreading it to buttons or sections destroys the brand signal.
- Set all headlines in `{typography.display-*}` at weight 500 with their prescribed negative letter-spacing. Tracking is non-negotiable — it is the most distinctive typographic mark of this brand.
- Use `{rounded.button}` (8px) for every body CTA and `{rounded.pill}` (9999px) for every nav-cluster CTA. The two scales must coexist without being conflated.
- Use `{rounded.card}` (16px) for all feature cards and demo panels. Never round cards to 8px.
- Rely on `{colors.canvas-soft}` (#f9f8f6) tonal contrast — not shadow — as the sole elevation cue for cards.
- Keep body and demo panel text in `{typography.body-md}` (16px / universalSans) and reserve the mono stack for code panel content only.

### Don't
- Don't introduce gradient decoration. There is no gradient system in this brand; adding one misrepresents the voice entirely.
- Don't add drop-shadows to cards. Depth is achieved through surface tint contrast alone — a shadow stack reads as a different brand.
- Don't set headlines at weight 600 or 700. The display ceiling is 500; heavier weights break the restrained, scientific tone.
- Don't use positive letter-spacing on display text. The brand only tracks negatively.
- Don't spread `{colors.accent}` orange beyond badge contexts. It is not a CTA color, not a highlight color, and not a link color.
- Don't use the pill radius (9999px) on body CTAs. Body buttons are 8px-radius rectangles; conflating them with the pill nav CTA removes the intentional scale hierarchy.
- Don't render copy in all-caps. The brand uses sentence-case across every context observed.
