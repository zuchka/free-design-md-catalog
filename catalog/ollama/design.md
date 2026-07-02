---
version: alpha
name: Ollama
description: "Ollama is a developer-tool brand whose entire visual surface is a deliberate exercise in restraint — pure white canvas, single-weight ink-black text, a rounded system-UI typeface that feels approachable rather than corporate, and a handdrawn llama mascot as the only decorative object on the page. No gradients, no accent palette, no marketing colour. The brand earns attention through clarity and the quiet confidence of a terminal command front-and-centre in the hero."

colors:
  ink: "#000000"
  on-ink: "#ffffff"
  body: "#404040"
  mute: "#737373"
  hairline: "#e5e5e5"
  hairline-soft: "#f5f5f5"
  canvas: "#ffffff"
  canvas-soft: "#fafafa"
  link: "#737373"
  code-bg: "#f5f5f5"
  code-text: "#000000"
  dot-red: "#ff5f57"
  dot-yellow: "#febc2e"
  dot-green: "#28c840"
  error: "#ef4444"
  success: "#22c55e"
  warning: "#f59e0b"

typography:
  display-xl:
    fontFamily: "\"SF Pro Rounded\", system-ui, -apple-system, sans-serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 56px
    letterSpacing: -0.5px
  display-lg:
    fontFamily: "\"SF Pro Rounded\", system-ui, -apple-system, sans-serif"
    fontSize: 36px
    fontWeight: 500
    lineHeight: 40px
    letterSpacing: normal
  display-md:
    fontFamily: "\"SF Pro Rounded\", system-ui, -apple-system, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: normal
  display-sm:
    fontFamily: "\"SF Pro Rounded\", system-ui, -apple-system, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: normal
  body-lg:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\""
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\""
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\""
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  caption:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\""
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  button-md:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\""
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  button-lg:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\""
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  nav-label:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\""
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 16px
  xl: 24px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 80px
  section: 120px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.sm} {spacing.lg}"
    borderBottom: "1px solid {colors.hairline}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.xxs} {spacing.xs}"
  nav-search:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-signin:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-download:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.3xl} {spacing.lg}"
  hero-install-command:
    backgroundColor: "{colors.code-bg}"
    textColor: "{colors.code-text}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.lg}"
  hero-install-caption:
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.xl}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.xl}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.mute}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs} {spacing.xs}"
  card-feature:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-model:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  terminal-mockup:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  terminal-traffic-lights:
    dotRed: "{colors.dot-red}"
    dotYellow: "{colors.dot-yellow}"
    dotGreen: "{colors.dot-green}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  link-inline:
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    textDecoration: underline
  badge:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.mute}"
    borderColor: "{colors.hairline}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.xs}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    borderTop: "1px solid {colors.hairline}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xl} {spacing.lg}"
  mascot-display:
    description: "The handdrawn llama mascot — the brand's sole decorative object. Rendered as an SVG/PNG, centred above the hero headline. No colour fill, ink-line illustration style."
    display: block
    margin: "0 auto {spacing.lg} auto"
  ex-pricing-tier:
    description: "Default tier card. Same chrome as card-feature on canvas background with hairline border."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: "Featured tier — polarity-flipped to ink surface with white text."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-auth-form-card:
    description: "Sign-in card. Uses card-feature chrome with form-input primitives inside."
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-modal-card:
    description: "Modal dialog surface — card-feature chrome with subtle shadow."
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-toast:
    description: "Toast notification — card-feature shape with body-sm typography."
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
  ex-empty-state-card:
    description: "Empty state frame — generous padding on canvas-soft."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.2xl}"
    captionTypography: "{typography.body-md}"
  ex-data-table-cell:
    description: "Model list table. Header uses caption uppercase; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row. Active state uses ink as left-edge indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"

---

## Overview

Ollama is a developer-tool brand that has made radical simplicity its entire aesthetic position. The page is white — genuinely, unapologetically white — with black text and a single monospaced install command as the hero's conversion moment. There are no brand colours beyond ink-on-white, no gradient, no illustration system beyond the hand-drawn llama mascot that sits above the headline like a friendly footnote. It is a UI that trusts the product to speak for itself.

The typeface choice is the brand's most deliberate decision. Headings are set in SF Pro Rounded — the system-UI rounded variant — which gives the brand warmth and approachability without requiring a custom typeface budget. It reads as "Apple-native" rather than "corporate tech," signalling that Ollama lives on the Mac. Body text falls back to the OS default sans-serif stack, reinforcing that aesthetic of "this is software, not a SaaS marketing site."

The hero's primary CTA is not a button — it's a `curl` command in a rounded code pill, treated as the real conversion moment. Below it, a muted caption offers "download Ollama" as a soft link. This inversion — terminal command before download link — is a precise signal about who Ollama is talking to. The navigation reinforces the same polarity: "Sign in" is an outlined pill, "Download" is the solid ink-black pill, and both sit quietly at the far right of the nav with minimal visual weight.

Cards carry 16px rounded corners, 1px `#e5e5e5` hairline borders, and no shadow whatsoever — they sit flat on white, separated only by their border ring. The terminal mockup at the lower section introduces the brand's only RGB colour: the three macOS traffic-light dots (red / yellow / green), which function as a recognisable platform cue rather than a brand accent.

## Colors

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The entire page background. Cards, nav, footer — everything sits on pure white.
- **Canvas Soft** (`{colors.canvas-soft}` — `#fafafa`): Subtle surface variation for inset regions, empty states, and table headers.
- **Code Bg** (`{colors.code-bg}` — `#f5f5f5`): The pill background behind the hero install command and inline code blocks.
- **Hairline** (`{colors.hairline}` — `#e5e5e5`): The brand's universal 1px border — card borders, nav separator, input borders.
- **Hairline Soft** (`{colors.hairline-soft}` — `#f5f5f5`): Lighter divider used for row separators inside dense lists.

### Text
- **Ink** (`{colors.ink}` — `#000000`): Every heading, the primary CTA background, and the nav Download button. The only heavy tone on the page.
- **Body** (`{colors.body}` — `#404040`): Mid-weight body paragraphs beneath section headlines.
- **Mute** (`{colors.mute}` — `#737373`): Secondary text — nav links (inactive), footer body, caption text, inline link color. Extracted directly from the `link` component and button color signal.
- **On Ink** (`{colors.on-ink}` — `#ffffff`): Text rendered on ink-black CTA surfaces (Download button, polarity-flipped cards).
- **Code Text** (`{colors.code-text}` — `#000000`): Monospaced text inside code pills and terminal mockups.

### Semantic
- **Error** (`{colors.error}` — `#ef4444`): Form validation and destructive action states.
- **Success** (`{colors.success}` — `#22c55e`): Confirmation and positive status indicators.
- **Warning** (`{colors.warning}` — `#f59e0b`): Caution states.

### Decorative (macOS Traffic Lights)
- **Dot Red** (`{colors.dot-red}` — `#ff5f57`): macOS close-button dot inside terminal mockups.
- **Dot Yellow** (`{colors.dot-yellow}` — `#febc2e`): macOS minimise-button dot.
- **Dot Green** (`{colors.dot-green}` — `#28c840`): macOS fullscreen-button dot.

These three are the brand's only chromatic accent — used exclusively as a platform signal inside the terminal mockup component, never as UI chrome elsewhere.

## Typography

### Font Families

Two font families carry the entire system:

1. **SF Pro Rounded** (`"SF Pro Rounded", system-ui, -apple-system, sans-serif`) — the heading face at weight 500 only. The rounded terminals give the brand a warm, accessible quality that distinguishes it from the typical developer-tool geometric sans. Never appears heavier than 500; never appears in body copy.
2. **System UI sans-serif** (`ui-sans-serif, system-ui, sans-serif, …`) — the body and UI label face. Maps to the OS default sans on every platform. Weight 400 for body, 500 for button labels. Emoji fallbacks are explicitly included in the stack, consistent with a Tailwind-derived setup.
3. **Monospace** (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, …`) — used exclusively for the install command pill, terminal mockup text, and inline code. Weight 400 at 14px.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 500 | 56px | -0.5px | Reserved for the largest possible hero headline treatment. |
| `{typography.display-lg}` | 36px | 500 | 40px | normal | Hero headline ("The easiest way to build with open models"). Extracted directly. |
| `{typography.display-md}` | 24px | 500 | 32px | normal | Section sub-headlines ("Run any app or agent with open…"). |
| `{typography.display-sm}` | 20px | 500 | 28px | normal | Card cluster headlines, feature titles. |
| `{typography.body-lg}` | 18px | 400 | 28px | — | Lead paragraphs under section headlines. |
| `{typography.body-md}` | 16px | 400 | 24px | — | Default body paragraph and card body text. |
| `{typography.body-sm}` | 14px | 400 | 20px | — | Nav labels, captions, footer links, muted secondary text. |
| `{typography.caption}` | 12px | 400 | 16px | — | Badge labels, metadata fine print. |
| `{typography.code}` | 14px | 400 | 20px | — | The install command pill and all terminal mockup content. |
| `{typography.button-md}` | 14px | 500 | 20px | — | Nav-scale buttons (Sign in, small CTAs). |
| `{typography.button-lg}` | 16px | 500 | 24px | — | Marketing-scale pill buttons (Download). |
| `{typography.nav-label}` | 14px | 400 | 20px | — | Navigation link text (Models, Docs, Pricing). |

### Principles
- **Rounded sans for headings, system sans for everything else.** The SF Pro Rounded stack is never used at body size — the brand's warmth comes from the headline face alone; body remains neutral.
- **Weight 500 is the display ceiling.** No bold (700) anywhere on the page. The brand reads calm and restrained because of this single constraint.
- **Normal tracking on headings.** Unlike many developer brands, Ollama does not use negative letter-spacing on its display type. The rounded face's natural letter-fit is preserved.
- **Monospace for the technical layer only.** The install command and terminal lines. Nothing else.
- **Sentence-case throughout.** No uppercase headlines, no all-caps labels.

### Note on Font Substitutes
SF Pro Rounded is a proprietary Apple system font, not available for web embedding. Closest open-source substitutes:
- **Rounded heading face** — *Nunito* (weight 500) or *Varela Round* are the closest open-source matches to SF Pro Rounded's rounded terminals at this weight.
- **System UI body** — the stack already degrades gracefully to the OS default sans on all platforms; no substitute needed.
- **Monospace** — *JetBrains Mono* or *Fira Code* at 14px/400.

## Layout

### Spacing System
- **Base unit**: 4px. All captured values (8, 12, 16, 24, 80px) are multiples of 4.
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.2xl}` 48px · `{spacing.3xl}` 80px · `{spacing.section}` 120px.
- **Section padding**: marketing bands use `{spacing.3xl}` (80px) top/bottom — a generous, open rhythm that lets the minimal surface breathe.
- **Card interior padding**: all cards use `{spacing.lg}` (24px) — extracted directly, consistent across the model cards and feature cards.
- **Inline gap**: nav links and button rows use `{spacing.xs}` to `{spacing.sm}` (8–12px) between siblings.
- **Component-level gaps**: 12px and 24px are the dominant recurrence (24 appears 42 times, 12 appears 24 times in the page extraction).

### Grid & Container
- **Max width**: approximately 1200px; content centres with `{spacing.lg}` (24px) gutters on desktop.
- **Column patterns**:
  - Hero: single-column centred, headline + code pill + caption stacked vertically.
  - Feature section: 2-up or 3-up grid of `card-feature` components on desktop, 1-up on mobile.
  - Model library: multi-column grid of `card-model` components, consistent height.
  - Terminal mockup: full-width or 2-column split with prose on one side, terminal on the other.

### Whitespace Philosophy
The page's decoration IS its whitespace. With no gradient, no illustration system, and no colour, the only design lever is spatial generosity. Section bands use 80px vertical padding — this is not padding, it is the design. The install command pill sits centred with breathing room above and below. Cards are separated by their hairline borders rather than spacing, allowing a tighter grid without visual crowding.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero stacks vertically; nav collapses to logo + hamburger; card grids drop to 1-up. |
| Tablet | 640–1023px | 2-up card grid; nav links may truncate. |
| Desktop | ≥ 1024px | Full nav; 3-up card grid; terminal mockup in 2-column layout. |

#### Touch Targets
Nav buttons (Sign in, Download) render with `{spacing.xs}` vertical padding, meeting a minimum 32px touch height. The Download pill inflates to comfortable touch size through its `{rounded.pill}` shape.

#### Collapsing Strategy
- **Nav**: logo + Models / Docs / Pricing links + search bar + Sign in / Download at desktop. Collapses to logo + hamburger at mobile.
- **Hero**: always single-column centred; mascot illustration above, headline, code pill, caption below.
- **Card grids**: 3-up → 2-up → 1-up through breakpoints. Card chrome (`{rounded.lg}`, `{colors.hairline}` border) preserved at all viewports.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero band and section backgrounds. |
| Level 1 — Hairline Ring | `1px solid #e5e5e5` border, no shadow. | The universal card chrome — every `card-feature`, `card-model`, and input element. |
| Level 2 — Soft Lift | `0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)` + hairline border. | Hover state elevation for interactive cards and modal surfaces. |

Ollama's elevation system is the flattest of any production developer brand — Level 1 hairline rings are the only consistent depth cue. No stacked shadow system, no Material-style elevation. The brand trusts border rings and background contrast alone.

### Decorative Depth
- **macOS traffic lights as platform cue**: the three coloured dots inside the terminal mockup are the page's only chromatic element — they function as a depth/context cue ("this is a real terminal") rather than decorative colour.
- **Code pill contrast**: the `{colors.code-bg}` (#f5f5f5) pill against the white canvas creates a subtle inset-region effect without any shadow.
- **Polarity flip**: switching a card or band surface from `{colors.canvas}` to `{colors.ink}` is the brand's primary depth and emphasis tool.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands; raw button elements (extracted button radius is 0px). |
| `{rounded.xs}` | 4px | Tight inline badges and micro UI elements. |
| `{rounded.sm}` | 6px | Small interactive elements and form micro-components. |
| `{rounded.md}` | 8px | Medium UI elements where card radius would be too large. |
| `{rounded.lg}` | 16px | The brand's primary card radius — every `card-feature` and `card-model`. Extracted directly. |
| `{rounded.xl}` | 24px | Larger card chrome when hosting imagery. |
| `{rounded.pill}` | 9999px | Nav buttons (Sign in, Download), search bar, install command pill, marketing CTAs. |
| `{rounded.full}` | 9999px | Icon containers, avatar chips. |

**Important distinction**: the extracted button element has `radius: 0px` — this applies to raw `<button>` elements used as ghost/text controls (e.g. the copy icon next to the curl command). The nav pill buttons (Sign in, Download) achieve their pill shape through CSS classes and use `{rounded.pill}`. Do not conflate the two.

## Components

### Navigation

**`nav-bar`** — the top navigation bar.
- Background `{colors.canvas}`, text `{colors.ink}`, height auto with `{spacing.sm} {spacing.lg}` padding, 1px bottom border in `{colors.hairline}`. Layout: llama logo left, "Models / Docs / Pricing" links centre-left, search bar centred, "Sign in / Download" cluster right.

**`nav-link`** — individual navigation text links (Models, Docs, Pricing).
- Text `{colors.ink}`, set in `{typography.nav-label}` (14px / 400), no background, no border. Muted on hover.

**`nav-search`** — the centred search bar spanning much of the nav width.
- Background `{colors.canvas}`, placeholder text `{colors.mute}`, 1px solid `{colors.hairline}` border, `{typography.body-sm}`, `{rounded.pill}`, padding `{spacing.xs} {spacing.md}`. Carries a search icon at the left edge.

**`nav-cta-signin`** — the "Sign in" outlined pill button.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline}` border, `{typography.button-md}`, `{rounded.pill}`, padding `{spacing.xs} {spacing.md}`.

**`nav-cta-download`** — the "Download" solid ink pill button.
- Background `{colors.ink}`, text `{colors.on-ink}`, `{typography.button-md}`, `{rounded.pill}`, padding `{spacing.xs} {spacing.md}`.

### Hero

**`hero-band`** — the centred hero section.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.3xl} {spacing.lg}`. Contains: `mascot-display` above, headline in `{typography.display-lg}`, `hero-install-command` pill below, then `hero-install-caption`.

**`mascot-display`** — the hand-drawn llama mascot SVG/PNG.
- Centred block, sits above the hero headline. The brand's sole illustrative element. No colour fill — ink-line only. Never miniaturised to icon scale.

**`hero-install-command`** — the curl command pill in the hero.
- Background `{colors.code-bg}` (#f5f5f5), text `{colors.code-text}`, set in `{typography.code}` (14px monospace), `{rounded.lg}` (16px), padding `{spacing.sm} {spacing.lg}`. Carries a copy icon at the right edge using a `button-ghost`.

**`hero-install-caption`** — the muted caption below the install pill.
- Text `{colors.mute}`, set in `{typography.body-sm}`. Contains a `link-inline` for "download Ollama".

### Buttons & Controls

**`button-primary`** — the main marketing CTA pill.
- Background `{colors.ink}`, text `{colors.on-ink}`, `{typography.button-lg}`, `{rounded.pill}`, padding `{spacing.sm} {spacing.xl}`.

**`button-secondary`** — the outlined secondary CTA pill.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline}` border, `{typography.button-lg}`, `{rounded.pill}`, padding `{spacing.sm} {spacing.xl}`.

**`button-ghost`** — the transparent utility button (copy icon, text controls).
- Background transparent, text `{colors.mute}`, `{typography.button-md}`, `{rounded.none}` (matches extracted button radius of 0px), padding `{spacing.xxs} {spacing.xs}`.

### Cards

**`card-feature`** — the primary feature/content card.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline}` border, `{typography.body-md}`, `{rounded.lg}` (16px — extracted directly), padding `{spacing.lg}` (24px — extracted directly). No shadow.

**`card-model`** — the model library listing card.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline}` border, `{typography.body-sm}`, `{rounded.lg}` (16px), padding `{spacing.lg}`. Contains model name, size/parameter metadata, and a brief description.

**`terminal-mockup`** — the macOS terminal window simulation.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline}` border, body in `{typography.code}`, `{rounded.lg}`, padding `{spacing.lg}`. Hosts `terminal-traffic-lights` at the top-left corner.

**`terminal-traffic-lights`** — the three macOS window control dots.
- Three 12px circular dots: `{colors.dot-red}`, `{colors.dot-yellow}`, `{colors.dot-green}`. The brand's only chromatic element. Used exclusively inside `terminal-mockup`.

### Forms & Inputs

**`form-input`** — the standard text input.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline}` border, `{typography.body-sm}`, `{rounded.pill}`, padding `{spacing.xs} {spacing.md}`.

### Supplementary

**`link-inline`** — inline body-copy links.
- Text `{colors.mute}` (#737373 — extracted directly from link component), `{typography.body-sm}`, underline decoration.

**`badge`** — small metadata pill.
- Background `{colors.canvas-soft}`, text `{colors.mute}`, 1px solid `{colors.hairline}` border, `{typography.caption}`, `{rounded.pill}`, padding `{spacing.xxs} {spacing.xs}`.

**`footer`** — the bottom navigation area.
- Background `{colors.canvas}`, text `{colors.mute}`, 1px top border in `{colors.hairline}`, `{typography.body-sm}`, padding `{spacing.xl} {spacing.lg}`.

## Do's and Don'ts

### Do
- Use `{colors.ink}` (#000000) as the only strong primary — for the Download CTA, primary buttons, and all headings. Black ink IS the brand.
- Use `{rounded.pill}` (9999px) for nav buttons, the search bar, and marketing CTAs. Use `{rounded.lg}` (16px) for cards. Never mix the two within the same component level.
- Set all headings in SF Pro Rounded weight 500. The rounded terminals at 500 are the brand's warmth — do not promote to 700 or switch to a geometric sans.
- Keep the install command / terminal command as the hero's primary conversion moment. The curl command is the CTA.
- Use the macOS traffic-light dots (`{colors.dot-red}`, `{colors.dot-yellow}`, `{colors.dot-green}`) exclusively inside terminal mockup components as a platform signal.
- Rely on 1px hairline borders (`{colors.hairline}`) and white space as the depth system. No shadows on cards.
- Keep the llama mascot at hero / section scale only. It is the brand's sole illustrative element — never miniaturise to favicon scale in UI contexts.

### Don't
- Don't introduce a colour accent. The brand has no accent palette beyond ink-on-white. Adding blue, purple, or any marketing gradient breaks the voice immediately.
- Don't use the monospace font for body copy or labels. Mono is for the install command and terminal content only.
- Don't add drop-shadows to cards. The brand's elevation system is hairline-border-only. A shadow, however subtle, reads as foreign to this aesthetic.
- Don't render headings in SF Pro Rounded at weight 700 or heavier. Weight 500 is the ceiling.
- Don't set headings in all-caps or with positive letter-spacing. Normal tracking, sentence-case.
- Don't use `{rounded.lg}` for buttons or `{rounded.none}` for cards. The radius scale maps directly to component type — card = 16px, pill CTA = 9999px, raw button control = 0px.
- Don't miniaturise the mascot illustration or use it as a decorative pattern. It appears once, large, in the hero — that is its full role.
