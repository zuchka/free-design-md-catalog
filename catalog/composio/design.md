---
version: alpha
name: Composio
description: "Composio is an AI-tooling infrastructure brand whose entire surface is a deep-black canvas — near-pure #0f0f0f ink backgrounds with dark-charcoal card surfaces (#2a2a2a) — broken at hero scale by an animated 3-D bar-chart visualization rendered in cyan, teal, violet, and magenta columns that acts as the page's singular decorative system. The brand speaks to AI engineers: uppercase tracking-wide nav labels, a single weight-400 display face at 64px with -1.6px letter-spacing, and a blue-accent CTA (#51a2ff) as the sole chromatic commitment. Everything else is achromatic."

colors:
  primary: "#0f0f0f"
  on-primary: "#f6f6f6"
  ink: "#ffffff"
  body: "rgba(255,255,255,0.6)"
  mute: "rgba(255,255,255,0.35)"
  hairline: "rgba(255,255,255,0.12)"
  hairline-strong: "rgba(255,255,255,0.25)"
  canvas: "#0f0f0f"
  canvas-soft: "#1a1a1a"
  canvas-card: "#2a2a2a"
  canvas-card-soft: "#1e1e1e"
  link: "#51a2ff"
  brand-blue: "#51a2ff"
  success: "#4ade80"
  error: "#f87171"
  warning: "#fbbf24"
  neutral-300: "#d4d4d4"
  neutral-500: "#737373"
  neutral-600: "#525252"
  neutral-700: "#404040"
  accent-cyan: "oklch(78.9% .154 211.53)"
  accent-purple: "oklch(62.7% .265 303.9)"
  accent-amber: "oklch(82.8% .189 84.429)"
  accent-pink: "oklch(71.8% .202 349.761)"
  accent-green: "oklch(72.3% .219 149.579)"
  button-fill: "#1e1e1e"
  button-cta-fill: "#ffffff"
  button-cta-ink: "#0f0f0f"

typography:
  display-xl:
    fontFamily: "abcDiatype, \"abcDiatype Fallback\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 64px
    letterSpacing: -1.6px
  display-lg:
    fontFamily: "abcDiatype, \"abcDiatype Fallback\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 52px
    letterSpacing: -1.2px
  display-md:
    fontFamily: "abcDiatype, \"abcDiatype Fallback\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 33.6px
    letterSpacing: -0.5px
  display-sm:
    fontFamily: "abcDiatype, \"abcDiatype Fallback\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 30px
    letterSpacing: -0.3px
  body-lg:
    fontFamily: "abcDiatype, \"abcDiatype Fallback\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: "abcDiatype, \"abcDiatype Fallback\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: "abcDiatype, \"abcDiatype Fallback\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0.7px
  body-xs:
    fontFamily: "abcDiatype, \"abcDiatype Fallback\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0px
  caption:
    fontFamily: "abcDiatype, \"abcDiatype Fallback\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0.5px
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  nav-label:
    fontFamily: "abcDiatype, \"abcDiatype Fallback\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0.7px
  button-md:
    fontFamily: "abcDiatype, \"abcDiatype Fallback\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0.7px
  button-lg:
    fontFamily: "abcDiatype, \"abcDiatype Fallback\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0.5px

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 10px
  lg: 16px
  xl: 20px
  card: 24px
  button: .625rem
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 10px
  lg: 12px
  xl: 16px
  2xl: 20px
  3xl: 24px
  4xl: 30px
  5xl: 40px
  6xl: 48px
  section: 96px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    height: 60px
    padding: "{spacing.lg} {spacing.5xl}"
    borderBottom: "{colors.hairline}"

  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"

  nav-cta-get-started:
    backgroundColor: "{colors.button-cta-fill}"
    textColor: "{colors.button-cta-ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"

  button-primary:
    backgroundColor: "{colors.button-cta-fill}"
    textColor: "{colors.button-cta-ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"

  button-secondary:
    backgroundColor: "{colors.button-fill}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-strong}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"

  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"

  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section} {spacing.5xl}"

  logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.5xl} {spacing.5xl}"

  card-dark:
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl} {spacing.xl}"

  card-feature:
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    borderColor: "{colors.hairline}"

  card-terminal:
    backgroundColor: "{colors.canvas-card-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl} {spacing.xl}"
    borderColor: "{colors.hairline}"

  form-input:
    backgroundColor: "{colors.canvas-card-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
    height: 40px

  badge-label:
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.lg}"
    borderColor: "{colors.hairline}"

  section-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.section} {spacing.5xl}"

  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.6xl} {spacing.5xl}"
    borderTop: "{colors.hairline}"

  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"

  code-panel:
    backgroundColor: "{colors.canvas-card-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    borderColor: "{colors.hairline}"

  # ─── Examples (illustrative) ───
  ex-pricing-tier:
    description: "Default pricing tier card on dark canvas-card surface with hairline border."
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"

  ex-pricing-tier-featured:
    description: "Featured pricing tier — polarity-flipped to white fill with ink text."
    backgroundColor: "{colors.button-cta-fill}"
    textColor: "{colors.button-cta-ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"

  ex-product-selector:
    description: "What's Included summary card — repurposed for integration / app-tier feature lists."
    backgroundColor: "{colors.canvas-card}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"

  ex-cart-drawer:
    description: "Subscription summary — line items per add-on tier, not a literal cart."
    backgroundColor: "{colors.canvas-card-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    item-divider: "{colors.hairline}"

  ex-app-shell-row:
    description: "Sidebar nav row inside app shell. Active state uses brand-blue as left-edge indicator."
    backgroundColor: "{colors.canvas-soft}"
    activeIndicator: "{colors.brand-blue}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"

  ex-data-table-cell:
    description: "Data table chrome. Header uses caption uppercase tracking; body uses body-sm."
    headerBackground: "{colors.canvas-card}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.md} {spacing.lg}"
    rowBorder: "{colors.hairline}"

  ex-auth-form-card:
    description: "Sign-in / sign-up card. Uses card-dark chrome with form-input primitives inside."
    backgroundColor: "{colors.canvas-card}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"

  ex-modal-card:
    description: "Modal dialog surface — card-dark chrome with elevated shadow."
    backgroundColor: "{colors.canvas-card}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"

  ex-empty-state-card:
    description: "Empty-state illustration frame. Generous padding on canvas-soft surface."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.section}"
    captionTypography: "{typography.body-md}"

  ex-toast:
    description: "Toast notification — card-dark chrome with hairline border and body-sm text."
    backgroundColor: "{colors.canvas-card}"
    rounded: "{rounded.button}"
    padding: "{spacing.lg} {spacing.xl}"
    typography: "{typography.body-sm}"

---

## Overview

Composio operates in the dark. Every pixel of the marketing surface sits on a near-pure black canvas (`{colors.canvas}` — `#0f0f0f`), with charcoal card surfaces (`{colors.canvas-card}` — `#2a2a2a`) floating above it. The only time colour appears is in the hero's animated 3-D bar visualization — columns of cyan, teal, violet, and magenta that rise and fall like a data-center heartbeat — and in the single blue accent (`{colors.brand-blue}` — `#51a2ff`) reserved for the "Get Started" CTA. That restraint is not accidental. The brand is speaking to AI engineers who distrust decoration, and the whole visual system earns their trust by getting out of the way.

Typography is handled by a single proprietary grotesque face, abcDiatype, set exclusively at weight 400 across every size. There are no bolds. The 64 px display headline carries `-1.6 px` letter-spacing — tight enough to feel engineered — while secondary labels and nav items go the opposite direction with `+0.7 px` positive tracking in uppercase, which gives the UI layer a technical-readout quality. The face never appears heavier than 400; the hierarchy comes entirely from size and opacity, not weight.

Surface layering uses a four-stop achromatic stack: `{colors.canvas}` black for the full-bleed hero and footer, `{colors.canvas-soft}` for interior section backgrounds, `{colors.canvas-card}` for feature cards, and `{colors.canvas-card-soft}` for terminal/code panels and input fields. Card radius is a locked 24 px; button radius is the system's `.625rem` (10 px) — the two radii coexist deliberately and are never swapped. Shadows are absent in the extracted signals; elevation is communicated through background-step contrast and hairline borders alone.

The decorative system is the animated bar visualization at hero scale. It is the brand. Nothing else competes with it — no gradient swatches, no illustration, no photography. Below the fold, cards contain terminal mockups and API-panel UI fragments rendered in monospace, extending the "you are in a developer console" atmosphere through the full page.

## Colors

### Brand & Accent
- **Brand Blue** (`{colors.brand-blue}` — `#51a2ff`): The sole chromatic commitment. Used exclusively for the primary "Get Started" CTA button and inline link text. Never miniaturised to a background fill.
- **Accent Cyan** (`{colors.accent-cyan}`): One of four visualization bar colors in the hero 3-D animation — the dominant cyan column color. Visible only inside the decorative visualization; never used as UI chrome.
- **Accent Purple** (`{colors.accent-purple}`): The violet bar stop in the hero visualization.
- **Accent Amber** (`{colors.accent-amber}`): The amber/warm bar stop in the hero visualization.
- **Accent Pink** (`{colors.accent-pink}`): The magenta-pink bar stop in the hero visualization.
- **Accent Green** (`{colors.accent-green}`): The green bar stop in the hero visualization.

### Surface
- **Canvas** (`{colors.canvas}` — `#0f0f0f`): The page foundation. Full-bleed hero, nav, and footer sit here.
- **Canvas Soft** (`{colors.canvas-soft}` — `#1a1a1a`): Interior section background — one step lighter than canvas, used to visually break sections.
- **Canvas Card** (`{colors.canvas-card}` — `#2a2a2a`): The default feature card surface. Every marketing card lives here.
- **Canvas Card Soft** (`{colors.canvas-card-soft}` — `#1e1e1e`): The deepest inset surface — terminal panels, code blocks, form inputs.

### Text
- **Ink** (`{colors.ink}` — `#ffffff`): All primary headings and high-priority body text on dark surfaces.
- **Body** (`{colors.body}` — `rgba(255,255,255,0.6)`): Secondary text — card sub-copy, nav links inactive, footer column body. 60 % white.
- **Mute** (`{colors.mute}` — `rgba(255,255,255,0.35)`): Lowest-priority text — customer logo strip labels, fine print. 35 % white.
- **On Primary** (`{colors.on-primary}` — `#f6f6f6`): Text on white/light CTA button surfaces.

### Borders & Dividers
- **Hairline** (`{colors.hairline}` — `rgba(255,255,255,0.12)`): 1 px dividers — card borders, input borders, section separators.
- **Hairline Strong** (`{colors.hairline-strong}` — `rgba(255,255,255,0.25)`): Slightly more visible divider for interactive states and secondary buttons.

### Semantic
- **Link / Brand Blue** (`{colors.link}` — `#51a2ff`): Inline links and primary CTA. The brand's sole hue.
- **Success** (`{colors.success}` — `#4ade80`): Status indicators, connected-state badges.
- **Error** (`{colors.error}` — `#f87171`): Validation errors, failed-state indicators.
- **Warning** (`{colors.warning}` — `#fbbf24`): Caution states, rate-limit indicators.

## Typography

### Font Family
One proprietary grotesque face carries the entire system: **abcDiatype**. It is used at weight 400 only — no bold, no medium, no italic. The hierarchy is built entirely from size and opacity contrast. For code blocks and terminal mockups, a system monospaced stack handles the technical layer.

Open-source substitute: **Inter** at weight 400 with `font-feature-settings: "ss01"` is the closest stylistic match. *Geist* (400) is a passable second.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 400 | 64px | -1.6px | Hero headline ("Your agent decides what to do.") |
| `{typography.display-lg}` | 48px | 400 | 52px | -1.2px | Large section headlines |
| `{typography.display-md}` | 28px | 400 | 33.6px | -0.5px | Section sub-headlines, card cluster titles |
| `{typography.display-sm}` | 24px | 400 | 30px | -0.3px | Card-level display headings |
| `{typography.body-lg}` | 18px | 400 | 28px | 0px | Lead paragraphs under hero headline |
| `{typography.body-md}` | 16px | 400 | 24px | 0px | Default card body paragraph |
| `{typography.body-sm}` | 14px | 400 | 20px | +0.7px | Nav labels, secondary labels, footer links — positive tracking gives technical-readout quality |
| `{typography.body-xs}` | 12px | 400 | 16px | 0px | Fine print, tertiary metadata |
| `{typography.caption}` | 12px | 400 | 16px | +0.5px | Badge labels, section eyebrows in uppercase |
| `{typography.code}` | 13px | 400 | 20px | 0px | Terminal mockups, API panel code, inline code |
| `{typography.nav-label}` | 14px | 400 | 20px | +0.7px | Nav link labels — set in uppercase with positive tracking |
| `{typography.button-md}` | 14px | 400 | 20px | +0.7px | Small-scale button labels |
| `{typography.button-lg}` | 16px | 400 | 24px | +0.5px | Marketing-scale button labels ("GET STARTED FOR FREE") |

### Principles
- **Weight 400 is the only weight.** No bold, no medium. Size and opacity create all hierarchy. Adding a heavier weight breaks the brand's engineered calm.
- **Negative tracking for display; positive tracking for labels.** The 64 px headline sits at -1.6 px; nav labels and captions sit at +0.7 px. The inversion is deliberate — big type compresses, small type breathes.
- **Uppercase labels are a UI signal, not a brand headline treatment.** Nav items and badge eyebrows go uppercase with positive tracking. Narrative headlines stay in sentence case.
- **Mono for the terminal layer only.** Code panels, API mockups, and tool-call visualizations use the system mono stack. Body paragraphs and cards never set in mono.
- **No period-terminated headlines.** Unlike some brands, Composio's headlines end without punctuation — they read as assertions, not prose.

## Layout

### Spacing System
- **Base unit**: the extracted scale starts at 6 px and increments in small steps (6 / 8 / 10 / 12 / 16 / 20 px), reflecting a density-first developer-tool aesthetic. Extended to cover section-level spacing.
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 6px · `{spacing.sm}` 8px · `{spacing.md}` 10px · `{spacing.lg}` 12px · `{spacing.xl}` 16px · `{spacing.2xl}` 20px · `{spacing.3xl}` 24px · `{spacing.4xl}` 30px · `{spacing.5xl}` 40px · `{spacing.6xl}` 48px · `{spacing.section}` 96px.
- **Section padding**: marketing bands use `{spacing.section}` 96px top/bottom to give the hero visualization room.
- **Card interior padding**: feature cards use `{spacing.3xl}` 24px; terminal panels use `{spacing.3xl} {spacing.xl}` (24px/16px).
- **Inline gap**: button rows and icon rows use `{spacing.lg}` to `{spacing.xl}` between siblings.

### Grid & Container
- **Max width**: approximately 1280 px; content centres with `{spacing.5xl}` 40px horizontal gutters on desktop, `{spacing.xl}` 16px on mobile.
- **Column patterns**:
  - Hero: single centred column, full-bleed visualization backdrop.
  - Feature cards: 3-up on desktop, 1-up on mobile.
  - Terminal/API panel mockups: 2-up or 3-up on desktop.
  - Logo strip: 5–6 logos wide, single flex row.

### Whitespace Philosophy
The animated visualization does all the atmospheric heavy lifting — whitespace separates it from the feature cards below. Section spacing is generous at the hero level, then tightens for the card grid. Inside cards the heading/body stack is snug (8–10 px gap), with a wider gap before any CTA or code panel. The page reads as dense but intentional — not sparse minimalism, but engineered density.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero and footer bands on `{colors.canvas}`. |
| Level 1 — Hairline | 1px solid `{colors.hairline}` border only, no shadow. | Default feature cards on `{colors.canvas-card}`. |
| Level 2 — Surface Step | Background jumps one step (canvas → canvas-card) with hairline border. | The primary elevation cue — no shadow required on a dark-mode surface. |
| Level 3 — Inset Panel | Background drops one step to `{colors.canvas-card-soft}` with hairline border. | Terminal mockups, code panels, form inputs — inset within a card. |

The brand uses **zero box-shadows** in the extracted signals. Elevation is communicated entirely through surface-step contrast between the four achromatic background tokens and hairline borders. This is the correct approach for a deep-dark surface — shadows are invisible on near-black backgrounds. Do not introduce drop-shadows; they break the system.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands. Note: the CSS extractor reports `0px` as the computed button radius — this is the raw button element radius; branded `.625rem` button components apply `{rounded.button}`. |
| `{rounded.xs}` | 4px | Tightest UI micro-elements. |
| `{rounded.sm}` | 6px | Small inline chips. |
| `{rounded.md}` | 10px | General UI radius (matches `--radius: .625rem` = 10px). |
| `{rounded.button}` | .625rem | **The system button radius.** Every button and CTA must reference this token. Resolves to 10px. |
| `{rounded.lg}` | 16px | Medium cards or image containers. |
| `{rounded.xl}` | 20px | Large card variants. |
| `{rounded.card}` | 24px | **The system card radius.** Every feature card must reference this token. Locked at 24px. |
| `{rounded.pill}` | 9999px | Badge pills, tag labels. |
| `{rounded.full}` | 9999px | Circular icon containers. |

The two primary radii — `{rounded.button}` (10px) and `{rounded.card}` (24px) — coexist in every section and are never swapped. A button never gets a 24px radius; a card never gets a 10px radius.

## Components

### Buttons

**`button-primary`** — the white "GET STARTED FOR FREE" CTA.
- Background `{colors.button-cta-fill}` (white), text `{colors.button-cta-ink}` (black), label in `{typography.button-lg}`, uppercase, padding `{spacing.md} {spacing.xl}`, shape `{rounded.button}` .625rem. Appears at marketing scale in the hero row.

**`button-secondary`** — the bordered "GET A DEMO" CTA paired with the primary.
- Background `{colors.button-fill}` (#1e1e1e), text `{colors.ink}`, 1px solid `{colors.hairline-strong}` border, same typography and shape as `button-primary`.

**`button-ghost`** — subdued tertiary actions inside cards and nav areas.
- Background transparent, text `{colors.body}`, same typography, shape `{rounded.button}`.

**`nav-cta-get-started`** — the small "GET STARTED" pill in the nav row.
- Background `{colors.button-cta-fill}`, text `{colors.button-cta-ink}`, label in `{typography.button-md}` uppercase, padding `{spacing.md} {spacing.xl}`, shape `{rounded.button}`.

### Cards & Containers

**`card-dark`** — the canonical feature card.
- Background `{colors.canvas-card}`, text `{colors.ink}`, padding `{spacing.3xl} {spacing.xl}`, shape `{rounded.card}` 24px, 1px hairline border.

**`card-feature`** — larger feature card with more interior padding, used for the 3-up showcase grid.
- Background `{colors.canvas-card}`, text `{colors.ink}`, padding `{spacing.3xl}`, shape `{rounded.card}`, hairline border.

**`card-terminal`** — the dark inset panel hosting terminal / API mockup copy.
- Background `{colors.canvas-card-soft}`, text `{colors.ink}`, body in `{typography.code}` (monospace), padding `{spacing.3xl} {spacing.xl}`, shape `{rounded.card}`, hairline border.

**`code-panel`** — standalone code block surface inside a section band.
- Background `{colors.canvas-card-soft}`, text `{colors.ink}`, body in `{typography.code}`, padding `{spacing.3xl}`, shape `{rounded.card}`, hairline border.

### Inputs & Forms

**`form-input`** — the search / tool-lookup input visible in the UI mockup cards.
- Background `{colors.canvas-card-soft}`, text `{colors.ink}`, 1px solid `{colors.hairline}` border, body in `{typography.body-sm}`, padding `{spacing.md} {spacing.lg}`, height 40px, shape `{rounded.button}`.

### Navigation

**`nav-bar`** — the top navigation bar.
- Background `{colors.canvas}`, text `{colors.ink}`, height 60px, padding `{spacing.lg} {spacing.5xl}`, bottom 1px hairline border. Layout: logo left, uppercase link row centre, "GET STARTED" CTA right.

**`nav-link`** — the centred link items inside `nav-bar`.
- Text `{colors.body}`, set in `{typography.nav-label}` (uppercase, +0.7px tracking), padding `{spacing.md} {spacing.xl}`, shape `{rounded.button}` on hover.

### Signature Components

**`hero-band`** — the full-bleed dark hero with the animated 3-D bar visualization backdrop.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.section} {spacing.5xl}`. Inside: headline in `{typography.display-xl}` (sentence-case, -1.6px tracking), lead in `{typography.body-lg}`, then a CTA row with `button-primary` + `button-secondary`. The bar visualization spans full-width behind.

**`logo-strip`** — the customer / integration logo row (Twitter, Wabi, agent.ai, Zoom, Letta).
- Background `{colors.canvas}`, text `{colors.mute}`, padding `{spacing.5xl}`. Logos rendered as low-opacity monochrome marks at consistent height.

**`section-band`** — interior section containers below the hero.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.section} {spacing.5xl}`.

**`badge-label`** — the small metadata pill (e.g. "COMPOSIO_SEARCH_TOOLS" eyebrow labels visible in the UI mockup cards).
- Background `{colors.canvas-card}`, text `{colors.body}`, body in `{typography.caption}` uppercase, padding `{spacing.xs} {spacing.lg}`, shape `{rounded.pill}`, hairline border.

**`footer`** — the bottom navigation band.
- Background `{colors.canvas}`, text `{colors.body}`, padding `{spacing.6xl} {spacing.5xl}`, top 1px hairline border. Column labels in `{typography.caption}` uppercase; link rows in `{typography.body-sm}`.

**`link-inline`** — body-copy inline links.
- Text `{colors.link}` (`#51a2ff`), body in `{typography.body-md}`.

## Do's and Don'ts

### Do
- Keep the entire surface dark. `{colors.canvas}` is the ground truth; every section sits on a step within the achromatic stack.
- Use `{rounded.button}` (.625rem / 10px) for every button and CTA. Use `{rounded.card}` (24px) for every card. Never swap them.
- Set every display headline at weight 400 with negative letter-spacing. The brand's authority comes from size and tracking, not weight.
- Use `{colors.brand-blue}` (`#51a2ff`) only for the primary CTA and inline links. It is the entire colour budget.
- Use positive letter-spacing (+0.7px) for nav labels and captions. The inversion between display (negative) and label (positive) tracking defines the typographic system.
- Render the animated bar visualization at hero scale only. It is the brand's singular decorative system.
- Communicate elevation through surface-step contrast and hairline borders. No drop-shadows — they are invisible on near-black surfaces.
- Set all code, terminal, and API panel content in the system monospace stack. Keep `{typography.code}` exclusive to the technical layer.

### Don't
- Don't introduce any weight above 400. No semibold, no bold. The brand has no heavier display weight — adding one collapses the hierarchy.
- Don't use the accent colours (cyan, purple, amber, pink, green) as UI chrome. They belong exclusively to the hero bar visualization.
- Don't add drop-shadows to cards. The surface-step system is the elevation language; shadows clash with the deep-dark palette.
- Don't render the bar visualization at icon or small scale. It is a full-bleed atmospheric object, not a decorative swatch.
- Don't use `{rounded.card}` (24px) for buttons. Don't use `{rounded.button}` (10px) for cards. The two radii are domain-locked.
- Don't set body paragraphs in the monospace stack. Mono is reserved for code, terminal, and API panel surfaces.
- Don't introduce a light-mode surface. Every background token in this system is near-black or dark-charcoal; the brand has no light-canvas equivalent.
- Don't letter-space display headlines positively. Positive tracking is the label register; negative tracking is the headline register. Mixing them flattens the voice.
