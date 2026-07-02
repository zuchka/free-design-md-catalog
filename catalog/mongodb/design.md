---
version: alpha
name: MongoDB
description: "MongoDB is a developer-data platform brand built on a deep-sea-teal dark canvas — the signature night-ocean surface (#001e2b) that swallows nearly every hero band, nav, and dark-mode card. Into that darkness the brand drives a single electric-green accent (#00ed64) at every conversion target: primary CTA buttons, the leaf mark in the logo, the glowing gradient text on the hero headline. The typographic voice is deliberately split: serif warmth (a custom value serif for all headlines) collides with the utility of a system sans for UI controls, creating a brand that reads as both scholarly and engineered."
colors:
  primary: "#00ed64"
  on-primary: "#001e2b"
  ink-dark: "#001e2b"
  ink-mid: "#21313c"
  ink-surface: "#3d4f58"
  ink-border: "#5d6c74"
  canvas: "#ffffff"
  canvas-soft: "#e8edeb"
  canvas-mid: "#f9fbfa"
  body-on-dark: "#e8edeb"
  mute-on-dark: "#89979b"
  ink-on-light: "#001e2b"
  body-on-light: "#3d4f58"
  mute-on-light: "#5d6c74"
  hairline-dark: "#5d6c74"
  hairline-light: "#c1cdd4"
  link: "#00684a"
  link-on-dark: "#00ed64"
  success: "#00ed64"
  error: "#db3030"
  warning: "#f5a622"
  hero-dark: "#001e2b"
  card-dark: "#21313c"
  banner-green: "#00ed64"
  banner-green-text: "#001e2b"
  gradient-headline-start: "#ffffff"
  gradient-headline-end: "#00ed64"
  tab-active: "#0e6fdf"
  tab-active-bg: "#0e6fdf"
  on-tab-active: "#ffffff"
typography:
  display-xl:
    fontFamily: MongoDB Value Serif, Georgia, Times New Roman, serif
    fontSize: 56px
    fontWeight: 400
    lineHeight: 64px
    letterSpacing: normal
  display-lg:
    fontFamily: MongoDB Value Serif, Georgia, Times New Roman, serif
    fontSize: 36px
    fontWeight: 400
    lineHeight: 48px
    letterSpacing: normal
  display-md:
    fontFamily: MongoDB Value Serif, Georgia, Times New Roman, serif
    fontSize: 24px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: normal
  display-sm:
    fontFamily: MongoDB Value Serif, Georgia, Times New Roman, serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: normal
  body-lg:
    fontFamily: Times, Times New Roman, serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Times, Times New Roman, serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: Times, Times New Roman, serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  body-sm:
    fontFamily: Times, Times New Roman, serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: Times, Times New Roman, serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  caption:
    fontFamily: Times, Times New Roman, serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: Times, Times New Roman, serif
    fontSize: 13px
    fontWeight: 500
    lineHeight: 20px
  button-lg:
    fontFamily: Times, Times New Roman, serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  label-caps:
    fontFamily: Times, Times New Roman, serif
    fontSize: 12px
    fontWeight: 700
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  none: 0px
  button: 4px
  card: 8px
  sm: 4px
  md: 8px
  lg: 12px
  pill: 24px
  full: 9999px
spacing:
  xxs: 8px
  xs: 10px
  sm: 15px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 48px
  4xl: 56px
  5xl: 80px
  section: 96px
components:
  announcement-banner:
    backgroundColor: "{colors.banner-green}"
    textColor: "{colors.banner-green-text}"
    typography: "{typography.body-sm-strong}"
    padding: "{spacing.xxs} {spacing.lg}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-on-light}"
    typography: "{typography.body-md}"
    height: 72px
    padding: "{spacing.xxs} {spacing.xl}"
  nav-link:
    textColor: "{colors.ink-on-light}"
    typography: "{typography.body-md}"
    padding: "{spacing.xxs} {spacing.md}"
  nav-cta:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.lg}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.lg}"
    border: 1px solid {colors.on-primary}
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.canvas}"
    borderColor: "{colors.canvas}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.lg}"
  button-ghost-dark:
    backgroundColor: transparent
    textColor: "{colors.ink-on-light}"
    borderColor: "{colors.hairline-light}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 1px 6px
  tab-pill-active:
    backgroundColor: "{colors.tab-active-bg}"
    textColor: "{colors.on-tab-active}"
    typography: "{typography.body-md-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.lg}"
  tab-pill-inactive:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body-on-light}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.lg}"
  hero-band:
    backgroundColor: "{colors.hero-dark}"
    textColor: "{colors.canvas}"
    typography: "{typography.display-xl}"
    padding: "{spacing.5xl} {spacing.lg}"
  hero-announcement-badge:
    backgroundColor: transparent
    borderColor: "{colors.hairline-dark}"
    textColor: "{colors.body-on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.md}"
  hero-ai-input:
    backgroundColor: "{colors.ink-mid}"
    textColor: "{colors.body-on-dark}"
    borderColor: "{colors.hairline-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.md} {spacing.lg}"
  card-dark:
    backgroundColor: "{colors.card-dark}"
    textColor: "{colors.body-on-dark}"
    borderColor: "{colors.hairline-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg} {spacing.lg} {spacing.lg} {spacing.xl}"
  card-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-on-light}"
    borderColor: "{colors.hairline-light}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  feature-band-dark:
    backgroundColor: "{colors.hero-dark}"
    textColor: "{colors.canvas}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section} {spacing.lg}"
  feature-band-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-on-light}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section} {spacing.lg}"
  badge-new:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: 2px {spacing.xxs}
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-on-light}"
    borderColor: "{colors.hairline-light}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
    height: 48px
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  link-inline-on-dark:
    textColor: "{colors.link-on-dark}"
    typography: "{typography.body-md}"
  footer:
    backgroundColor: "{colors.hero-dark}"
    textColor: "{colors.mute-on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.lg}"
  logo-leaf:
    textColor: "{colors.primary}"
  experience-toggle:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink-on-light}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.xxs}"
  ex-pricing-tier:
    description: Default pricing tier card on dark canvas surface with visible border.
    backgroundColor: "{colors.card-dark}"
    textColor: "{colors.body-on-dark}"
    borderColor: "{colors.hairline-dark}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured pricing tier — green-accented or polarity-lifted surface.
    backgroundColor: "{colors.ink-mid}"
    textColor: "{colors.canvas}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-auth-form-card:
    description: Sign-in / sign-up card on light canvas with form-input primitives inside.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog — light canvas surface with card-light chrome and elevated shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-toast:
    description: Toast notification — dark card-dark surface, body-sm typography, top-of-viewport.
    backgroundColor: "{colors.card-dark}"
    rounded: "{rounded.card}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses primary green as left-edge indicator.
    backgroundColor: "{colors.hero-dark}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.md}"
  ex-data-table-cell:
    description: Data table — header on canvas-soft, body rows on canvas. Typography body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.label-caps}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xxs} {spacing.md}"
    rowBorder: "{colors.hairline-light}"
  ex-empty-state-card:
    description: Empty-state frame — card-dark on hero-dark band. Caption in body-md.
    backgroundColor: "{colors.card-dark}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
---
## Overview

MongoDB is not a neutral gray-scale SaaS surface — it is a deep-ocean brand. The page opens on near-black `{colors.hero-dark}` (`#001e2b`) and never fully leaves that tonal register until feature sections explicitly step up to white. The single most decisive colour decision the brand makes is `{colors.primary}` (`#00ed64`): a lime-to-mint electric green that appears nowhere in the decorative system and everywhere in the conversion path — logo leaf, primary CTA fill, hero headline gradient terminus, AI assistant icon, and the announcement banner strip across the top.

The typographic voice carries an unusual tension. The display face is "MongoDB Value Serif" — a custom editorial serif at weight 400 — which gives every headline warmth and academic authority. The hero headline ("One data platform. / Unlimited AI potential.") renders this serif at 56 px with the second line gradient-tinted from white to electric green. Body copy and UI labels fall back to Times, which preserves the serif register rather than switching to a utility sans. The result reads like a technical journal wrapped in a deployment dashboard.

Surfaces operate across two poles. The dark pole — `{colors.hero-dark}` for full-bleed bands, `{colors.card-dark}` (`#21313c`) for surface cards, `{colors.ink-surface}` (`#3d4f58`) for secondary text and borders — carries the hero, nav, and dark-mode feature sections. The light pole — pure `{colors.canvas}` white and `{colors.canvas-soft}` `#e8edeb` — appears in content-dense documentation bands and light-mode cards. The brand moves between poles deliberately section by section; it never mixes them within a single card.

The experience-toggle pill ("Builder / Business Leader") visible in the hero is an unusual brand affordance — a persona selector rendered as a segmented control with an active pill in `{colors.tab-active}` blue and an inactive pill on the soft canvas. The CTA architecture is characteristically simple: one green rectangle with a dark border, one transparent outline rectangle for the secondary action.

## Colors

### Brand & Accent
- **Electric Green** (`{colors.primary}` — `#00ed64`): The brand's singular accent. Every primary CTA button fill, the logo leaf, the hero headline gradient end-stop, the AI-assistant sparkle icon. Never used at body-text scale.
- **Deep Forest** (`{colors.link}` — `#00684a`): The darker companion green used for inline body links on light surfaces. Provides sufficient contrast against `{colors.canvas}`.
- **Link on Dark** (`{colors.link-on-dark}` — `#00ed64`): On dark bands, links use the full electric green — same hex as the primary CTA, context disambiguates.
- **Tab Active** (`{colors.tab-active}` — `#0e6fdf`): The experience-toggle active-pill blue. Used only for this persona-selector component; not a general accent.

### Dark Surface
- **Hero Dark** (`{colors.hero-dark}` — `#001e2b`): The page's dominant surface. Full-bleed nav, hero band, and dark-mode feature sections sit on this near-black teal-ink.
- **Card Dark** (`{colors.card-dark}` — `#21313c`): The default dark card surface — 1 step lighter than the hero band, giving cards legibility against the band.
- **Ink Surface** (`{colors.ink-surface}` — `#3d4f58`): Secondary UI chrome — deemphasised text, nav-link hover, and button ghost on light surfaces.
- **Ink Border** (`{colors.ink-border}` — `#5d6c74`): Card borders and dividers on dark surfaces. Extracted exactly from the `1px solid #5d6c74` card border.
- **Body on Dark** (`{colors.body-on-dark}` — `#e8edeb`): The text color for card body copy and paragraphs sitting on dark surfaces. A warm near-white, not pure white.
- **Mute on Dark** (`{colors.mute-on-dark}` — `#89979b`): Footer secondary text, fine print, lowest-priority labels on dark surfaces.

### Light Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure-white cards and light-mode band backgrounds.
- **Canvas Soft** (`{colors.canvas-soft}` — `#e8edeb`): The soft pale surface — used inside the experience-toggle inactive state, light-mode section backgrounds, and table-header rows.
- **Canvas Mid** (`{colors.canvas-mid}` — `#f9fbfa`): Slightly warmer near-white; occasional light-band secondary fill.
- **Hairline Dark** (`{colors.hairline-dark}` — `#5d6c74`): Dividers on dark surfaces.
- **Hairline Light** (`{colors.hairline-light}` — `#c1cdd4`): Dividers and borders on light surfaces.
- **Body on Light** (`{colors.body-on-light}` — `#3d4f58`): Secondary body text on white/canvas-soft surfaces.
- **Mute on Light** (`{colors.mute-on-light}` — `#5d6c74`): Lowest-priority text on light surfaces — captions, fine print.

### Semantic
- **Success** (`{colors.success}` — `#00ed64`): Shares the primary green; the brand's success state is the same electric mint.
- **Error** (`{colors.error}` — `#db3030`): Standard destructive red; visible in validation contexts.
- **Warning** (`{colors.warning}` — `#f5a622`): Amber caution indicator.
- **On Primary** (`{colors.on-primary}` — `#001e2b`): Text placed on the electric-green CTA button — the deep hero-dark, not black. Provides a branded contrast pair.

## Typography

### Font Families
Two faces define the brand's entire typographic palette:

1. **MongoDB Value Serif** — a custom editorial serif at weight 400, used exclusively for display sizes. The brand never goes bold on its serif; 400 is the only operating weight. This creates a calm, authoritative headline voice that feels more like a data journal than a dashboard. The hero renders it at 56 px / 64 px line-height with normal letter-spacing — no negative tracking, unlike typical geometric-sans display systems.

2. **Times** (the system fallback stack) — the working body face. All body paragraphs, nav links, button labels, captions, and form fields use Times at 400 for body and 500 for emphasis / buttons. The brand leans into the serif throughout rather than switching to sans for UI controls.

### Type Scale Table

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 400 | 64px | normal | Hero headline — "One data platform." at full dark-band scale. |
| `{typography.display-lg}` | 36px | 400 | 48px | normal | Section headlines — "One platform. Every workload." |
| `{typography.display-md}` | 24px | 400 | 32px | normal | Card cluster headlines and subsection labels. |
| `{typography.display-sm}` | 20px | 400 | 28px | normal | Smaller display moments inside feature bands. |
| `{typography.body-lg}` | 18px | 400 | 28px | — | Lead paragraphs directly below section headlines. |
| `{typography.body-md}` | 16px | 400 | 24px | — | Default body paragraph, nav links, AI input placeholder. |
| `{typography.body-md-strong}` | 16px | 500 | 24px | — | Experience-toggle active label, emphasized inline body. |
| `{typography.body-sm}` | 14px | 400 | 20px | — | Secondary body, footer link rows, badge annotation copy. |
| `{typography.body-sm-strong}` | 14px | 500 | 20px | — | Announcement banner text ("Build Fest SF is happening…"). |
| `{typography.caption}` | 13px | 400 | 16px | — | Ghost button labels in browser-chrome controls. |
| `{typography.button-lg}` | 16px | 500 | 24px | — | Primary and secondary CTA button labels. |
| `{typography.button-md}` | 13px | 500 | 20px | — | Small ghost-button controls. |
| `{typography.label-caps}` | 12px | 700 | 16px | 0.08em | "NEW" badge label, table header uppercase eyebrows. |

### Principles
- **Weight 400 is the serif ceiling.** The custom serif never goes bold. The brand's authority comes from face + size, not weight.
- **No negative tracking.** Unlike most contemporary display systems, MongoDB's serif is tracked at `normal` — letting the letterforms breathe at hero scale. Applying negative tracking would break the scholarly warmth.
- **Sentence-case with period-termination.** Hero headlines end with a period: "One data platform." That punctuation is a brand voice choice.
- **Gradient text is a one-time signature.** The second hero line ("Unlimited AI potential.") transitions from white to electric green via CSS gradient-clip. This effect lives only at hero scale and always uses the exact two-stop pair (`{colors.gradient-headline-start}` → `{colors.gradient-headline-end}`).
- **Serif throughout.** The brand does not switch to sans-serif for UI labels. Times carries even button text, which produces an unusually unified typographic register.

### Note on Font Substitutes
"MongoDB Value Serif" is a proprietary custom cut. The closest open-source alternatives:
- **Headline serif** — *Playfair Display* (weight 400) or *Source Serif 4* (weight 400) captures the transitional-serif warmth.
- **Body / UI serif** — *Georgia* is nearly identical to Times at body sizes; *IBM Plex Serif* (400 / 500) is a refined alternative with comparable rhythm.

## Layout

### Spacing System
- **Base unit**: 8 px. The brand's extracted spacing scale (`8 / 10 / 15 / 16 / 24 / 32 px`) is an 8-px grid with a 10-px and 15-px refinement for internal component breathing room.
- **Tokens**: `{spacing.xxs}` 8 px · `{spacing.xs}` 10 px · `{spacing.sm}` 15 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 56 px · `{spacing.5xl}` 80 px · `{spacing.section}` 96 px.
- **Section padding**: major marketing bands use `{spacing.5xl}` (80 px) to `{spacing.section}` (96 px) top/bottom. The hero band is the tallest — the dark canvas needs room for the gradient-text headline + body + CTA row + AI assistant input.
- **Card interior**: dark cards use 14 px top/bottom and 20 px left with 14 px right — an asymmetric padding that was directly extracted (`14px 14px 14px 20px`). This left-heavy padding gives card content a visual anchor against the border.
- **CTA button**: 15 px top/bottom, 24 px left/right — extracted exactly. Produces a generous click target at ~48 px tall.
- **Inline gap**: nav link rows and CTA pairs use `{spacing.lg}` 24 px between siblings.

### Grid & Container
- **Max width**: approximately 1280 px; content centres with horizontal gutters of `{spacing.lg}` 24 px on desktop.
- **Column patterns**:
  - Hero: single centred column, headline + body + CTA row stacked vertically.
  - Experience toggle: full-width centred row of two pills.
  - Feature-card grid: 3-up on desktop, collapsing to 1-up on mobile.
  - Dark card cluster: 2-up or 3-up grids with `{colors.card-dark}` surface.
  - Logo strip: ~5–6 partner logos in a single row.

### Whitespace Philosophy
The hero-dark canvas IS the whitespace. MongoDB doesn't use blank white space to separate sections — it uses the switch between dark and light bands as the structural separator. Inside bands, section spacing is generous (`80–96 px`) and card interiors are tight-but-asymmetric. The AI assistant input box sits below the CTA row as a tertiary affordance, separated by a comfortable 32 px gap.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero and dark-band sections on `{colors.hero-dark}`. |
| Level 1 — Border Ring | `1px solid {colors.hairline-dark}` inset border only; no shadow (extracted: `shadow: none`). | Default `{components.card-dark}` — the visible card edge on the dark canvas. |
| Level 2 — Light Border | `1px solid {colors.hairline-light}` on light-surface cards. | Cards on white/canvas-soft bands. |
| Level 3 — Soft Drop | Subtle `0 2px 8px rgba(0,0,0,0.12)`. | Dropdown menus, nav mega-menus floating over the page. |
| Level 4 — Modal | `0 8px 24px rgba(0,0,0,0.2)` + border ring. | Modal/dialog surfaces on hero-dark underlay. |

The brand's card elevation is border-first, not shadow-first. The `{colors.hairline-dark}` ring is the primary depth cue on dark surfaces; shadow is reserved for floating elements.

## Components

### Navigation

**`announcement-banner`** — the electric-green strip at the very top of the page.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.body-sm-strong}`. Contains a dark pill badge ("MONGODB EVENT") on the left, body copy center, and a call-to-action link right. The green fills edge-to-edge.

**`nav-bar`** — the white sticky top navigation.
- Background `{colors.canvas}`, text `{colors.ink-on-light}`, height 72 px, padding `{spacing.xxs} {spacing.xl}`. Contains logo-leaf mark left, product/resources/solutions/company/pricing link row center-left, and the "Get Started" CTA button right alongside a "…" overflow icon.

**`nav-link`** — the horizontal navigation links with dropdown chevrons.
- Text `{colors.ink-on-light}`, set in `{typography.body-md}`, padding `{spacing.xxs} {spacing.md}`. Chevron indicates a mega-menu flyout.

**`nav-cta`** — the "Get Started" button in the top-right of the nav.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-lg}`, shape `{rounded.button}` 4 px, padding `{spacing.sm} {spacing.lg}`. The only green element in an otherwise white nav.

### Hero & Bands

**`hero-band`** — the full-bleed dark hero section.
- Background `{colors.hero-dark}`, text `{colors.canvas}`, padding `{spacing.5xl} {spacing.lg}`. Contains: experience-toggle pill row, announcement badge, serif headline at `{typography.display-xl}` with gradient-text on line two, lead body at `{typography.body-lg}`, CTA row (`button-primary` + `button-secondary`), and AI assistant input below.

**`experience-toggle`** — the "Select Experience: Builder / Business Leader" segmented control.
- Background `{colors.canvas-soft}` outer container, `{rounded.pill}` shape. Active pill: `{colors.tab-active-bg}` fill, `{colors.on-tab-active}` text, `{typography.body-md-strong}`. Inactive pill: canvas-soft fill, `{colors.ink-on-light}` text, `{typography.body-md}`.

**`hero-announcement-badge`** — the "NEW → Celebrating 10 Years of MongoDB Atlas" pill below the toggle.
- Transparent background, `1px solid {colors.hairline-dark}` border, text `{colors.body-on-dark}`, `{typography.body-sm}`, shape `{rounded.pill}`, padding `{spacing.xxs} {spacing.md}`. The "NEW" label inside uses `{badge-new}` chrome.

**`feature-band-dark`** — subsequent full-bleed sections on the hero-dark canvas.
- Background `{colors.hero-dark}`, text `{colors.canvas}`, padding `{spacing.section} {spacing.lg}`. Section headlines in `{typography.display-lg}`.

**`feature-band-light`** — full-bleed sections on white canvas.
- Background `{colors.canvas}`, text `{colors.ink-on-light}`, padding `{spacing.section} {spacing.lg}`. Section headlines in `{typography.display-lg}`.

### Cards

**`card-dark`** — the primary surface card on dark bands.
- Background `{colors.card-dark}`, text `{colors.body-on-dark}`, `1px solid {colors.hairline-dark}` border, shape `{rounded.card}` 8 px, padding `14px 14px 14px 20px` (asymmetric — extracted directly). No shadow.

**`card-light`** — the card on light-band sections.
- Background `{colors.canvas}`, text `{colors.ink-on-light}`, `1px solid {colors.hairline-light}` border, shape `{rounded.card}` 8 px, padding `{spacing.lg}`.

### Buttons

**`button-primary`** — the electric-green "Get Started" / primary CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-lg}`, shape `{rounded.button}` 4 px, padding `{spacing.sm} {spacing.lg}`, `1px solid {colors.on-primary}` border. The dark border is the brand's distinctive CTA detail — the green pill is outlined in the deep-forest ink.

**`button-secondary`** — the "Documentation" outline button beside the primary on hero.
- Background transparent, text `{colors.canvas}`, `1px solid {colors.canvas}` border, label in `{typography.button-lg}`, shape `{rounded.button}` 4 px, padding `{spacing.sm} {spacing.lg}`.

**`button-ghost-dark`** — the small ghost button used for browser-chrome controls.
- Background transparent, text `{colors.ink-surface}`, `1px solid {colors.hairline-light}` border, label in `{typography.button-md}`, shape `{rounded.button}` 4 px, padding `1px 6px`.

### Inputs & Forms

**`form-input`** — the standard text input.
- Background `{colors.canvas}`, text `{colors.ink-on-light}`, `1px solid {colors.hairline-light}` border, body in `{typography.body-md}`, shape `{rounded.button}` 4 px, padding `{spacing.sm} {spacing.md}`, height 48 px.

**`hero-ai-input`** — the "Ask MongoDB Assistant" search bar in the hero.
- Background `{colors.card-dark}`, text `{colors.mute-on-dark}`, `1px solid {colors.hairline-dark}` border, body in `{typography.body-md}`, shape `{rounded.card}` 8 px, padding `{spacing.md} {spacing.lg}`. Contains a `{colors.primary}` sparkle icon left and an arrow-submit button right.

### Badges & Labels

**`badge-new`** — the "NEW" uppercase label inside announcement badges.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.label-caps}`, shape `{rounded.sm}` 4 px, padding `2px 8px`.

**`hero-announcement-badge`** — the pill containing "NEW" + announcement copy.
- See Hero & Bands above.

### Navigation Footer

**`footer`** — the bottom dark navigation band.
- Background `{colors.hero-dark}`, text `{colors.mute-on-dark}`, padding `{spacing.4xl} {spacing.lg}`. Column headers in `{typography.label-caps}`; link rows in `{typography.body-sm}`. The MongoDB logo-leaf appears in `{colors.primary}` green above the columns.

### Inline & Utility

**`link-inline`** — body-copy links on light surfaces.
- Text `{colors.link}` (`#00684a`), set in `{typography.body-md}`, no underline by default (extracted: `textDecoration: none`).

**`link-inline-on-dark`** — inline links on dark surfaces.
- Text `{colors.link-on-dark}` (`#00ed64`), set in `{typography.body-md}`.

### Examples (illustrative)

**`ex-pricing-tier`** — default pricing tier card on dark surface with visible hairline border.
- `backgroundColor: {colors.card-dark}`, `borderColor: {colors.hairline-dark}`, `rounded: {rounded.card}`, `padding: {spacing.xl}`.

**`ex-pricing-tier-featured`** — featured tier — green-bordered on slightly lifted dark surface.
- `backgroundColor: {colors.ink-mid}`, `textColor: {colors.canvas}`, `borderColor: {colors.primary}`, `rounded: {rounded.card}`, `padding: {spacing.xl}`.

**`ex-auth-form-card`** — sign-in / sign-up card on light canvas with `form-input` primitives.
- `backgroundColor: {colors.canvas}`, `rounded: {rounded.card}`, `padding: {spacing.xl}`.

**`ex-modal-card`** — modal dialog on `{colors.hero-dark}` underlay, light surface.
- `backgroundColor: {colors.canvas}`, `rounded: {rounded.card}`, `padding: {spacing.xl}`.

**`ex-toast`** — toast notification on dark `{colors.card-dark}` surface.
- `backgroundColor: {colors.card-dark}`, `rounded: {rounded.card}`, `padding: {spacing.sm} {spacing.md}`, `typography: {typography.body-sm}`.

**`ex-app-shell-row`** — sidebar nav row with primary green left-edge indicator on active.
- `backgroundColor: {colors.hero-dark}`, `activeIndicator: {colors.primary}`, `rounded: {rounded.sm}`, `padding: {spacing.xxs} {spacing.md}`.

**`ex-data-table-cell`** — data table with `{colors.canvas-soft}` header row, body-sm rows, and hairline dividers.
- `headerBackground: {colors.canvas-soft}`, `headerTypography: {typography.label-caps}`, `bodyTypography: {typography.body-sm}`, `cellPadding: {spacing.xxs} {spacing.md}`, `rowBorder: {colors.hairline-light}`.

**`ex-empty-state-card`** — empty-state frame on hero-dark band; generous padding, body-md caption.
- `backgroundColor: {colors.card-dark}`, `rounded: {rounded.card}`, `padding: {spacing.3xl}`, `captionTypography: {typography.body-md}`.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (`#00ed64`) for primary CTAs, the logo leaf, and the hero gradient endpoint only. Green IS the conversion signal.
- Use `{rounded.button}` 4 px for every button and CTA — including nav CTAs. The brand is square-cornered on interactive controls.
- Use `{rounded.card}` 8 px for cards, modals, and the AI-input bar. Keep the two radii distinct.
- Always pair the primary button's green fill with the `1px solid {colors.on-primary}` dark border — the outlined edge is part of the CTA identity.
- Set all headlines in the custom serif (or its open-source substitute) at weight 400. Never bold the display face.
- Switch surfaces section-by-section between `{colors.hero-dark}` and `{colors.canvas}` to create depth. Mixed dark/light within a single card breaks the system.
- Use `{colors.body-on-dark}` (`#e8edeb`) — not pure white — for body text on dark surfaces. The warm near-white is measured and deliberate.
- Track all display text at `normal` — do not apply negative letter-spacing to the serif.

### Don't
- Don't use `{colors.primary}` green as a decorative background fill behind text. It belongs on buttons and the logo leaf only.
- Don't apply the hero headline gradient-text effect at card or caption scale. It is a one-time hero signature.
- Don't apply `{rounded.pill}` 24 px to CTAs. That shape belongs to the experience-toggle persona selector only.
- Don't switch the display face to sans-serif. The serif is the brand's voice — even at large display sizes.
- Don't use a single heavy drop-shadow on dark cards. The brand's card elevation is border-only; shadow is reserved for floating/modal surfaces.
- Don't introduce a new accent colour. The palette is exactly two functional colours (deep-ocean dark + electric green) plus a single blue reserved for the experience-toggle active state.
- Don't set link text in `{colors.primary}` green on light surfaces — use `{colors.link}` (`#00684a`) instead for sufficient contrast.
