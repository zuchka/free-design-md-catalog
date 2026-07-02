---
version: alpha
name: GitHub-Features-design-system
description: "GitHub's features surface is a dark-mode-first developer platform — near-black canvas (#0d1117) with white text, a single cobalt-blue primary action, and a deep purple-to-black atmospheric gradient that dominates the hero. The brand is deliberately spare: one accent colour, one variable-weight geometric sans (Mona Sans) at two weights, and card surfaces that hover barely above the page background. Decoration is almost entirely chromatic depth — purple atmospheric glows, dark card shells on dark backgrounds, and a measured cobalt CTA that earns its place by being the only saturated element on screen."
colors:
  primary: "#1f6feb"
  on-primary: "#ffffff"
  ink: "#f0f6fc"
  body: "#d2d9d4"
  mute: "#a4aea6"
  hairline: "#30363d"
  hairline-strong: "#6e7681"
  canvas: "#0d1117"
  canvas-soft: "#161b22"
  canvas-raised: "#21262d"
  canvas-card: "#0f1511"
  canvas-overlay: "#1e2327"
  link: "#58a6ff"
  link-hover: "#79c0ff"
  success: "#3fb950"
  success-muted: "#08872b"
  error: "#f85149"
  warning: "#d29922"
  purple-glow-start: "#2d1b69"
  purple-glow-end: "#0d1117"
  purple-accent: "#6e40c9"
  purple-icon-bg: "#3d1f8a"
  cobalt-btn-bg: "#0a50db"
  btn-secondary-bg: rgba(255, 255, 255, 0.12)
  theme-chrome: "#1e2327"
  black-deep: "#010409"
typography:
  display-xl:
    fontFamily: '"Mona Sans VF", -apple-system, "system-ui", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
    fontSize: 40px
    fontWeight: 600
    lineHeight: 48px
    letterSpacing: normal
  display-lg:
    fontFamily: '"Mona Sans VF", -apple-system, "system-ui", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
    fontSize: 32px
    fontWeight: 600
    lineHeight: 40px
    letterSpacing: normal
  display-md:
    fontFamily: '"Mona Sans VF", -apple-system, "system-ui", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
    fontSize: 24px
    fontWeight: 600
    lineHeight: 36px
    letterSpacing: normal
  display-sm:
    fontFamily: '"Mona Sans VF", -apple-system, "system-ui", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: normal
  body-lg:
    fontFamily: '"Mona Sans VF", -apple-system, "system-ui", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: '"Mona Sans VF", -apple-system, "system-ui", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-medium:
    fontFamily: '"Mona Sans VF", -apple-system, "system-ui", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
    fontSize: 16px
    fontWeight: 550
    lineHeight: 24px
  body-sm:
    fontFamily: '"Mona Sans VF", -apple-system, "system-ui", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0.21px
  body-sm-medium:
    fontFamily: '"Mona Sans VF", -apple-system, "system-ui", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
    fontSize: 14px
    fontWeight: 550
    lineHeight: 20px
    letterSpacing: 0.21px
  caption:
    fontFamily: '"Mona Sans VF", -apple-system, "system-ui", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 20px
  caption-label:
    fontFamily: '"Mona Sans VF", -apple-system, "system-ui", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
    fontSize: 12px
    fontWeight: 600
    lineHeight: 19.5px
  code:
    fontFamily: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  button-md:
    fontFamily: '"Mona Sans VF", -apple-system, "system-ui", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  button: 6px
  card: 8px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 6px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 80px
  5xl: 96px
  6xl: 128px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 64px
    padding: "{spacing.xs} {spacing.xl}"
    borderBottom: "{colors.hairline}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-sub-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xxs} {spacing.xs}"
    backgroundColor: "{colors.canvas-soft}"
  nav-cta-signup:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-signin:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    padding: "{spacing.xs} {spacing.md}"
    rounded: "{rounded.button}"
  sub-nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    borderBottom: "{colors.hairline}"
    padding: "{spacing.xs} {spacing.xl}"
  sub-nav-link:
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.sm}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.btn-secondary-bg}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.6xl} {spacing.lg}"
    backgroundEffect: radial purple-to-black atmospheric gradient
  feature-card:
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl} {spacing.4xl}"
  feature-card-dark:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  icon-badge:
    backgroundColor: "{colors.purple-icon-bg}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  card-link:
    textColor: "{colors.link}"
    typography: "{typography.body-sm-medium}"
  section-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.lg}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.caption}"
    borderTop: "{colors.hairline}"
    padding: "{spacing.2xl} {spacing.xl}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-sm-medium}"
  badge-label:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.mute}"
    typography: "{typography.caption-label}"
    rounded: "{rounded.full}"
    padding: "{spacing.xxs} {spacing.xs}"
  ex-pricing-tier:
    description: Default pricing tier card on dark canvas-card surface with hairline border.
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: Featured pricing tier — cobalt primary fill with white text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-auth-form-card:
    description: Sign-in / sign-up surface on canvas-soft with hairline border.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog — canvas-overlay surface with hairline border.
    backgroundColor: "{colors.canvas-overlay}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-data-table-cell:
    description: Table chrome. Header uses caption-label; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption-label}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses primary as left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-toast:
    description: Toast notification — canvas-raised surface, sm radius, body-sm typography.
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
    typography: "{typography.body-sm}"
  ex-empty-state-card:
    description: Empty state illustration frame — canvas-soft, generous padding.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
---
## Overview

GitHub's features page operates on a near-black canvas (`{colors.canvas}` `#0d1117`) that never lifts to white — this is a dark-mode-native surface, not a dark-mode variant. The decorative system is a single tool: a deep purple radial gradient that bleeds from behind the hero headline and fades into the surrounding black. Everything else is typography and structure. There is no multi-stop rainbow, no mesh, no illustration system competing with the content. The hero relies on one white headline, one sub-row of navigation labels, and two buttons — that restraint is the brand's voice.

The single saturated colour on the page is the cobalt primary (`{colors.primary}` `#1f6feb`) which appears only as the Sign Up CTA and primary button. Every other interactive element is either white text with no background, white text on a 12%-opacity white fill, or the platform's blue link colour (`{colors.link}` `#58a6ff`). The brand earns enormously high contrast ratios on dark backgrounds — the foreground ink is `#f0f6fc`, essentially white, against a near-black canvas — and it leans on that contrast instead of colour variety.

Cards are the surface that does the most visual work. The feature cards visible in the screenshot are a deep near-black green (`{colors.canvas-card}` `#0f1511`) on the dark canvas — barely lighter than the page background, separated only by their `{rounded.card}` 8 px radius and a hairline perimeter. Inside each card sits a purple icon badge and a white headline. The platform uses zero heavy drop-shadows; depth is implied entirely by chroma shift between surfaces, not by elevation blur.

Typography is a single variable-weight geometric sans — Mona Sans VF — at two working weights (400 for body, 600 for display) with a mid-range 550 for medium-emphasis labels and links. The scale is conventional rather than aggressively tracked; letter-spacing stays at normal or the brand's minimal `0.21 px` at small sizes.

## Colors

### Brand & Accent
- **Primary / Cobalt** (`{colors.primary}` — `#1f6feb`): The single conversion colour. Used exclusively for the Sign Up button and primary CTAs. One of the only fully saturated elements on the page.
- **Cobalt Button Background** (`{colors.cobalt-btn-bg}` — `#0a50db`): The slightly deeper cobalt visible as the video-player play-button and active-state primary background.
- **Purple Glow Start** (`{colors.purple-glow-start}` — `#2d1b69`): The inner stop of the hero's radial atmospheric gradient — a deep violet that radiates outward from behind the headline.
- **Purple Glow End** (`{colors.purple-glow-end}` — `#0d1117`): The outer stop of the hero gradient — merges seamlessly with the page background.
- **Purple Accent** (`{colors.purple-accent}` — `#6e40c9`): The brand's secondary purple used for decorative highlights and gradient-stop labels.
- **Purple Icon Badge** (`{colors.purple-icon-bg}` — `#3d1f8a`): The fill behind the Copilot and GitHub Previews icon badges visible on feature cards.

### Surface
- **Canvas** (`{colors.canvas}` — `#0d1117`): The base page background — deep near-black with a hint of blue. Every section sits on this tone.
- **Canvas Soft** (`{colors.canvas-soft}` — `#161b22`): The slightly lifted surface for nav dropdowns, sidebar panels, and secondary card backgrounds.
- **Canvas Raised** (`{colors.canvas-raised}` — `#21262d`): The three-step surface used for hover states, inline code blocks, and label badges.
- **Canvas Card** (`{colors.canvas-card}` — `#0f1511`): The specific near-black surface seen on feature cards — a dark green-black that sits barely above the page canvas.
- **Canvas Overlay** (`{colors.canvas-overlay}` — `#1e2327`): The meta theme-colour — used for modal/dialog overlays and the browser chrome tint.
- **Black Deep** (`{colors.black-deep}` — `#010409`): The deepest surface token, used for full-bleed footer bands and the darkest structural zones.

### Text
- **Ink** (`{colors.ink}` — `#f0f6fc`): Every headline and primary body text on dark surfaces — near-white with a slight blue cool.
- **Body** (`{colors.body}` — `#d2d9d4`): Secondary body text and video player labels — slightly warmer off-white.
- **Mute** (`{colors.mute}` — `#a4aea6`): Lowest-priority text: footer links, sub-nav labels, captions. Also the brand's `--brand-color-text-muted`.
- **Hairline** (`{colors.hairline}` — `#30363d`): 1 px dividers — nav borders, card outlines, table row separators.
- **Hairline Strong** (`{colors.hairline-strong}` — `#6e7681`): Slightly more visible border — used for active/focused state borders and stronger dividers.

### Link & Semantic
- **Link** (`{colors.link}` — `#58a6ff`): The brand's primary inline link colour — a lighter cobalt that reads on dark backgrounds. Used on "Learn more" anchors in feature cards.
- **Link Hover** (`{colors.link-hover}` — `#79c0ff`): Hover/focus state for inline links.
- **Success** (`{colors.success}` — `#3fb950`): Status success — green used in CI/CD pass states and positive indicators.
- **Error** (`{colors.error}` — `#f85149`): Validation red for destructive actions and build failures.
- **Warning** (`{colors.warning}` — `#d29922`): Caution / pending status indicator.
- **Secondary Button** (`{colors.btn-secondary-bg}` — `rgba(255, 255, 255, 0.12)`): The frosted-glass fill behind secondary action buttons visible in the hero and card CTAs.

## Typography

### Font Family
One variable-weight geometric sans — **Mona Sans VF** — carries the entire page. The font is loaded as a variable font and activated at two primary weights (400 / 600) with a mid-range 550 for emphasis states in links and medium-weight body. There is no display-only typeface, no monospaced companion visible on the features surface (though the platform's code surfaces use system monospace).

The font stack falls back gracefully through `-apple-system`, `"system-ui"`, `"Segoe UI"`, `"Noto Sans"`, Helvetica, Arial — standard platform-sans progression. Emoji faces are explicitly appended to prevent emoji rendering from triggering a font substitution.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 40px | 600 | 48px | normal | Hero headline ("The tools you need to build what you want"). |
| `{typography.display-lg}` | 32px | 600 | 40px | normal | Section-level headlines and feature group titles. |
| `{typography.display-md}` | 24px | 600 | 36px | normal | Feature card headlines, "Experience AI with Copilot Chat". |
| `{typography.display-sm}` | 20px | 600 | 28px | normal | Sub-section headlines and callout titles. |
| `{typography.body-lg}` | 18px | 400 | 28px | — | Lead paragraphs under section headlines. |
| `{typography.body-md}` | 16px | 400 | 24px | — | Default body paragraph text. |
| `{typography.body-md-medium}` | 16px | 550 | 24px | — | Bolded inline body emphasis. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0.21px | Nav links, button labels, secondary body, card sub-text. |
| `{typography.body-sm-medium}` | 14px | 550 | 20px | 0.21px | "Learn more" links, nav CTA labels, inline medium-emphasis. |
| `{typography.caption}` | 12px | 400 | 20px | — | Footer secondary lines, meta labels. |
| `{typography.caption-label}` | 12px | 600 | 19.5px | — | Sub-nav section labels, small category eyebrows. |
| `{typography.code}` | 13px | 400 | 20px | — | Inline code fragments and terminal snippets. |
| `{typography.button-md}` | 14px | 400 | 20px | — | All button labels — Sign Up, Sign in, Learn more. |

### Principles
- **Weight 400 for buttons** — unusually, the brand sets CTA button labels at weight 400 rather than the platform-standard 500/600. This keeps buttons visually level with surrounding body text; the cobalt fill provides the emphasis instead.
- **Weight 550 as the medium register** — the variable font's 550 weight (between regular and semibold) is used for links and medium-emphasis text, splitting the difference without reaching full 600 headline weight.
- **Normal letter-spacing throughout** — the brand avoids aggressive negative tracking. Display sizes carry no negative letter-spacing; only `body-sm` introduces a minimal `0.21 px` positive tracking at small sizes, per the `--brand-text-letterSpacing-100` token.
- **Sentence-case, no period termination** — headlines like "The tools you need to build what you want" are sentence-cased, informal, unpunctuated. The voice is conversational rather than declarative.
- **Open-source substitute** — Mona Sans is available as an open-source release from GitHub. If unavailable, *Plus Jakarta Sans* (400/550/600) is the closest stylistic match; *Inter* (400/600) is the second-best option.

## Layout

### Spacing System
- **Base unit**: 4 px. The spacing scale extracted from the page is exactly 4-multiples: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128 px.
- **Most-used gaps**: 32 px appears 260 times (the dominant component-internal gap), 4 px appears 175 times (tight inline gap), 16 px appears 114 times (standard body gap), 80 px appears 38 times (card interior padding-inline), 64 px appears 19 times (card interior padding-block).
- **Section padding**: marketing bands use `{spacing.5xl}` to `{spacing.6xl}` top/bottom. The hero band needs room for the atmospheric gradient and uses the full `{spacing.6xl}` 128 px.
- **Card interior padding**: feature cards use a generous `{spacing.3xl}` 64 px block / `{spacing.4xl}` 80 px inline — the measured `64px 80px` padding from extraction.
- **Inline gap**: nav rows and button clusters use `{spacing.xs}` to `{spacing.md}` between siblings.

### Grid & Container
- **Max width**: ~1280 px. Content centres with horizontal gutters of `{spacing.xl}` 32 px on desktop, `{spacing.md}` 16 px on mobile. The brand's `--brand-Grid-spacing-margin` is exactly 1 rem (16 px).
- **Column patterns**:
  - Two-feature card row: 2-up at desktop (Copilot Chat / GitHub Previews), stacks to 1-up at mobile.
  - Sub-nav pill row: horizontal scroll row of flat text links below the primary nav.
  - Section feature grids: typically 3-up at desktop, 1-up at mobile.
- **Breakpoints** (from CSS custom properties): xsmall 320 px · large ~1012 px · xlarge ~1280 px.

### Whitespace Philosophy
Dark surfaces need more air than light ones — the brand gives sections generous vertical padding so the purple atmospheric glow can breathe before the next section begins. Card-interior whitespace is deliberately large (`64px × 80px`) relative to the card's content, which centres a small icon badge and two lines of text in a wide dark shell. The generous emptiness is intentional: it makes each feature feel weighty rather than cramped.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero bands and the atmospheric gradient section. |
| Level 1 — Chroma Lift | Surface colour shifts from `{colors.canvas}` to `{colors.canvas-card}` or `{colors.canvas-soft}`. No shadow. | Feature cards. Depth is implied by surface-colour difference, not blur. |
| Level 2 — Hairline Border | `1px solid {colors.hairline}` perimeter. | Nav bar bottom border, card outlines, table dividers. |
| Level 3 — Overlay | `{colors.canvas-overlay}` `#1e2327` surface used for modal, dropdown, tooltip backgrounds. | Dropdown menus, modal dialogs. |

The brand does not use drop-shadow elevation on any surface visible in the screenshot. Depth is produced entirely through surface-colour chroma shifts — the card shell is barely lighter than the canvas it sits on, but perceptibly distinct.

### Decorative Depth
- **Purple radial atmospheric gradient**: the hero's signature decoration. A radial gradient from deep violet (`{colors.purple-glow-start}`) to black (`{colors.purple-glow-end}`) sits behind the headline, fading into the canvas. Never cropped, never miniaturised. Used at hero scale only — this gradient IS the decoration system.
- **Icon badge as depth cue**: the purple-filled square badge (`{colors.purple-icon-bg}`) inside each feature card is the only bright interior element, drawing the eye into the otherwise dark card shell.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero bands. |
| `{rounded.xs}` | 4px | Tightest inline elements — tight label tags. |
| `{rounded.sm}` | 6px | The brand's base UI radius — also the measured button radius and pill radius. |
| `{rounded.button}` | 6px | All button and CTA shapes — Sign Up, Sign in, Learn more. Measured at 6 px. |
| `{rounded.card}` | 8px | Feature cards, pricing cards, dialog shells. Measured at 8 px. |
| `{rounded.md}` | 8px | General medium-card alias. |
| `{rounded.lg}` | 12px | Larger callout surfaces and expanded modals. |
| `{rounded.xl}` | 16px | Largest card chrome — image-cap cards. |
| `{rounded.pill}` | 6px | Explicitly pill-shaped elements (measured at 6 px — the brand does not use large-radius pills on CTAs). |
| `{rounded.full}` | 9999px | Avatar and icon circular containers, badge pills. |

**Note**: GitHub's buttons are 6 px radius — a tight, nearly-square corner. This is not a large marketing pill shape. The brand's CTAs read as deliberate rectangular buttons with a subtle rounding, consistent with a developer-tool aesthetic that resists marketing excess.

## Components

### Navigation

**`nav-bar`** — the sticky top nav on near-black `{colors.canvas}`.
- Background `{colors.canvas}`, text `{colors.ink}`, height 64 px, padding `{spacing.xs} {spacing.xl}`, bottom 1 px hairline border. Layout: GitHub logo left, dropdown nav links centre, search icon + Sign in + Sign up cluster right.

**`nav-link`** — dropdown-equipped navigation link (Platform, Solutions, Resources, Open Source, Enterprise, Pricing).
- Text `{colors.ink}`, set in `{typography.body-sm}`, padding `{spacing.xs} {spacing.sm}`. Renders with a chevron indicator.

**`nav-cta-signup`** — the small "Sign up" button in the nav.
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.button-md}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.button}` 6 px.

**`nav-cta-signin`** — the "Sign in" link in the nav, unstyled.
- Text `{colors.ink}`, label `{typography.button-md}`, no background fill.

**`sub-nav-bar`** — the secondary flat link bar below the primary nav (Features / GitHub Copilot / Security / Actions / Codespaces / Issues / Code review / Discussions / Code search).
- Background `{colors.canvas}`, text `{colors.mute}`, body `{typography.body-sm}`, bottom 1 px hairline border, padding `{spacing.xs} {spacing.xl}`.

### Buttons

**`button-primary`** — the cobalt primary action button.
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.button-md}` (14 px / 400), padding `{spacing.xs} {spacing.lg}`, shape `{rounded.button}` 6 px.

**`button-secondary`** — the frosted-glass secondary button.
- Background `{colors.btn-secondary-bg}` (`rgba(255,255,255,0.12)`), text `{colors.ink}`, label `{typography.button-md}`, padding `{spacing.xs} {spacing.lg}`, shape `{rounded.button}` 6 px.

### Cards & Containers

**`feature-card`** — the dark feature highlight card (Copilot Chat / GitHub Previews 2-up row).
- Background `{colors.canvas-card}` `#0f1511`, text `{colors.ink}`, padding `{spacing.3xl} {spacing.4xl}` (64 px × 80 px, matching extraction), shape `{rounded.card}` 8 px. No shadow — depth comes from chroma shift. Hosts icon-badge + headline + "Learn more" link.

**`feature-card-dark`** — secondary card surface for less prominent feature groups.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.lg}`, shape `{rounded.card}` 8 px.

**`icon-badge`** — the small purple-filled square icon container inside feature cards.
- Background `{colors.purple-icon-bg}`, shape `{rounded.md}` 8 px, padding `{spacing.sm}`. Holds a white icon at ~20 px.

### Signature Components

**`hero-band`** — the dark hero with the purple radial atmospheric gradient.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.6xl} {spacing.lg}`. The radial gradient from `{colors.purple-glow-start}` to `{colors.purple-glow-end}` sits behind the headline as the sole atmospheric decoration. Headline in `{typography.display-xl}`, sentence-case, no period. No sub-headline body copy visible at the features page level — the hero is headline-only.

**`section-band`** — a general content section on the dark canvas.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.lg}`. Section headline in `{typography.display-lg}`.

**`badge-label`** — inline metadata badge (e.g. section category tags).
- Background `{colors.canvas-raised}`, text `{colors.mute}`, label `{typography.caption-label}`, shape `{rounded.full}`, padding `{spacing.xxs} {spacing.xs}`.

**`card-link`** — the "Learn more" inline anchor inside feature cards.
- Text `{colors.link}` `#58a6ff`, label `{typography.body-sm-medium}` (14 px / 550), no underline at rest. This is the platform's standard interactive link colour on dark surfaces.

**`link-inline`** — body-copy inline links throughout feature descriptions.
- Text `{colors.link}`, label `{typography.body-sm-medium}`.

**`footer`** — the bottom navigation and legal strip.
- Background `{colors.canvas}`, text `{colors.mute}`, body `{typography.caption}`, top 1 px hairline border, padding `{spacing.2xl} {spacing.xl}`.

### Examples (illustrative)

**`ex-pricing-tier`** — Default pricing tier card on the dark canvas-card surface.
- Properties: `backgroundColor: "{colors.canvas-card}"`, `textColor: "{colors.ink}"`, `borderColor: "{colors.hairline}"`, `rounded: "{rounded.card}"`, `padding: "{spacing.lg}"`

**`ex-pricing-tier-featured`** — Featured tier — cobalt primary fill with white text.
- Properties: `backgroundColor: "{colors.primary}"`, `textColor: "{colors.on-primary}"`, `rounded: "{rounded.card}"`, `padding: "{spacing.lg}"`

**`ex-auth-form-card`** — Sign-in / sign-up surface.
- Properties: `backgroundColor: "{colors.canvas-soft}"`, `rounded: "{rounded.card}"`, `padding: "{spacing.xl}"`

**`ex-modal-card`** — Modal dialog on the overlay surface.
- Properties: `backgroundColor: "{colors.canvas-overlay}"`, `rounded: "{rounded.card}"`, `padding: "{spacing.xl}"`

**`ex-data-table-cell`** — Data table chrome. Header uses caption-label; body uses body-sm.
- Properties: `headerBackground: "{colors.canvas-soft}"`, `headerTypography: "{typography.caption-label}"`, `bodyTypography: "{typography.body-sm}"`, `cellPadding: "{spacing.xs} {spacing.sm}"`, `rowBorder: "{colors.hairline}"`

**`ex-app-shell-row`** — Sidebar nav row with primary active indicator.
- Properties: `backgroundColor: "{colors.canvas}"`, `activeIndicator: "{colors.primary}"`, `rounded: "{rounded.sm}"`, `padding: "{spacing.xs} {spacing.sm}"`

**`ex-toast`** — Toast notification on canvas-raised surface.
- Properties: `backgroundColor: "{colors.canvas-raised}"`, `rounded: "{rounded.sm}"`, `padding: "{spacing.xs} {spacing.md}"`, `typography: "{typography.body-sm}"`

**`ex-empty-state-card`** — Empty state frame on canvas-soft.
- Properties: `backgroundColor: "{colors.canvas-soft}"`, `rounded: "{rounded.card}"`, `padding: "{spacing.3xl}"`, `captionTypography: "{typography.body-md}"`

## Do's and Don'ts

### Do
- Keep the canvas dark. `{colors.canvas}` `#0d1117` is the ground truth — all surfaces sit ON this tone, never replacing it with white.
- Reserve `{colors.primary}` cobalt exclusively for conversion CTAs. It is the only saturated colour on the page; diluting it to decorative use destroys the hierarchy.
- Use `{rounded.button}` 6 px for every button and `{rounded.card}` 8 px for every card. These two radii are deliberately close but distinct.
- Set feature card padding to `{spacing.3xl} {spacing.4xl}` (64 px × 80 px). The generous interior whitespace is part of the card's weight.
- Use the purple radial gradient as the hero's single atmospheric decoration at hero scale only. Never miniaturise it to a swatch or icon fill.
- Set display headlines in `{typography.display-xl}` or `{typography.display-lg}` at weight 600, sentence-case, no trailing period.
- Use `{colors.link}` `#58a6ff` for all "Learn more" and inline anchors — the lighter cobalt is calibrated for dark-surface contrast, not the primary `#1f6feb`.

### Don't
- Don't introduce a light-mode surface. The page is dark-mode-native; adding `#ffffff` backgrounds breaks the brand's core identity.
- Don't set button labels at weight 600. Buttons use weight 400 — the cobalt fill is the emphasis, not the weight.
- Don't use large-radius pills (100 px) for CTAs. GitHub buttons are 6 px radius rectangular shapes; a pill CTA would import a different brand's marketing grammar.
- Don't add drop-shadows to cards. The brand uses surface-colour chroma shift for depth; adding blur shadows on dark surfaces creates visual mud.
- Don't use `{colors.primary}` as a link colour on dark surfaces — use `{colors.link}` `#58a6ff` instead. The primary cobalt is a button fill, not a text link tone.
- Don't set body paragraphs in weight 600. The display ceiling is headline-only; body and nav text never exceed 550.
- Don't miniaturise the purple atmospheric gradient. It is a full-band hero backdrop, not an icon fill or card accent.
