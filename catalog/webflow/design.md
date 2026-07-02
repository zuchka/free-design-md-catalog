---
version: alpha
name: Webflow
description: "Webflow is an agentic web platform brand whose surface is a high-contrast near-black-on-white canvas punctuated by a single saturated cobalt-blue primary (#146ef5) that carries every conversion target — the announcement banner, the primary CTA, and the meta theme-color are all the same blue. The brand's custom variable sans (WF Visual Sans Variable) does all the typographic work: a generous 74 px hero headline with slight negative tracking sits above a short lead sentence at neutral weight, and every button, nav link, and caption inherits the same face. Shapes are deliberately square — a 4 px radius on buttons and cards signals precision engineering over friendliness, and nothing on the marketing surface rounds past that. The page earns its whitespace."
colors:
  primary: "#146ef5"
  on-primary: "#ffffff"
  ink: "#080808"
  body: "#3a3a3a"
  mute: "#767676"
  hairline: "#e5e5e5"
  hairline-strong: "#c0c0c0"
  canvas: "#ffffff"
  canvas-soft: "#f5f5f5"
  canvas-dark: "#080808"
  on-dark: "#ffffff"
  link: "#146ef5"
  link-hover: "#0f55c4"
  announcement-bg: "#146ef5"
  announcement-text: "#ffffff"
  button-ghost-bg: rgba(239,239,239,0)
  button-ghost-text: "#080808"
  success: "#1a8a4a"
  error: "#d93025"
  warning: "#f59e0b"
  badge-new-bg: "#146ef5"
  badge-new-text: "#ffffff"
typography:
  display-xl:
    fontFamily: '"WF Visual Sans Variable", Arial, sans-serif'
    fontSize: 74px
    fontWeight: 600
    lineHeight: 78px
    letterSpacing: -0.75px
  display-lg:
    fontFamily: '"WF Visual Sans Variable", Arial, sans-serif'
    fontSize: 48px
    fontWeight: 600
    lineHeight: 52px
    letterSpacing: -0.48px
  display-md:
    fontFamily: '"WF Visual Sans Variable", Arial, sans-serif'
    fontSize: 32px
    fontWeight: 600
    lineHeight: 38px
    letterSpacing: -0.32px
  display-sm:
    fontFamily: '"WF Visual Sans Variable", Arial, sans-serif'
    fontSize: 23px
    fontWeight: 600
    lineHeight: 30px
    letterSpacing: 0px
  body-lg:
    fontFamily: '"WF Visual Sans Variable", Arial, sans-serif'
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: '"WF Visual Sans Variable", Arial, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-md-strong:
    fontFamily: '"WF Visual Sans Variable", Arial, sans-serif'
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: '"WF Visual Sans Variable", Arial, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  body-sm-strong:
    fontFamily: '"WF Visual Sans Variable", Arial, sans-serif'
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0px
  caption:
    fontFamily: '"WF Visual Sans Variable", Arial, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0px
  caption-strong:
    fontFamily: '"WF Visual Sans Variable", Arial, sans-serif'
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0px
  button-md:
    fontFamily: '"WF Visual Sans Variable", Arial, sans-serif'
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0px
  button-lg:
    fontFamily: '"WF Visual Sans Variable", Arial, sans-serif'
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0px
  nav-link:
    fontFamily: '"WF Visual Sans Variable", Arial, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
rounded:
  none: 0px
  button: 4px
  card: 4px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
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
  section: 160px
components:
  announcement-bar:
    backgroundColor: "{colors.announcement-bg}"
    textColor: "{colors.announcement-text}"
    typography: "{typography.body-sm-strong}"
    padding: "{spacing.xs} {spacing.lg}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
    padding: "{spacing.xs} {spacing.lg}"
    borderBottom: "{colors.hairline}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "{spacing.xs} {spacing.sm}"
    rounded: "{rounded.none}"
  nav-cta-login:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-contact:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-signup:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
  button-ghost:
    backgroundColor: "{colors.button-ghost-bg}"
    textColor: "{colors.button-ghost-text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.xs}"
  badge-new:
    backgroundColor: "{colors.badge-new-bg}"
    textColor: "{colors.badge-new-text}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.button}"
    padding: 2px {spacing.xs}
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  feature-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.md} {spacing.xs} {spacing.md} {spacing.md}"
  feature-card-highlight:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.md} {spacing.xs} {spacing.md} {spacing.md}"
  card-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  logo-strip:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.lg} {spacing.xl}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  cookie-banner:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.lg}"
  ex-pricing-tier:
    description: Default pricing tier card — canvas surface with hairline border and 4px radius matching the brand's square geometry.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured pricing tier — polarity-flipped to primary blue with white text, matching the announcement-bar blue.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: Feature summary card — canvas-soft surface for secondary feature groupings.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary panel — white surface with hairline item dividers.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row — active state uses primary blue as left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: Data table chrome — header uses canvas-soft background with caption-strong typography; rows use body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card — canvas surface with 4px radius matching the button geometry.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog surface — canvas with hairline border and 4px radius.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame — canvas-soft with generous padding.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — canvas surface with hairline border and 4px radius.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Webflow is a brand that has earned the authority to use restraint. The entire marketing surface runs on two values: near-black ink (`{colors.ink}`) on pure white canvas, with one loud exception — a saturated cobalt blue (`{colors.primary}`) that appears as the announcement-bar background, the primary CTA fill, and the page's meta theme-color simultaneously. That triple-use is intentional: when blue appears anywhere on the page, it means "act." Everything else recedes to gray scale.

The type system is a single variable sans — WF Visual Sans Variable — operating across every role from 74 px hero to 12 px caption. The brand does not split heading and body into different faces; it differentiates by weight (600 for display, 500 for interactive, 400 for body) and size. The hero headline at 74 px carries a measured -0.75 px letter-spacing that tightens the mass; below display scale, tracking returns to neutral. Headlines are sentence-case, unpunctuated, written as direct imperative statements ("Make your website a growth engine").

Shapes are the brand's most opinionated choice. Both buttons and cards measure exactly 4 px radius — the smallest non-zero radius visible in the extraction. There is no pill, no rounded-lg card, no soft corner anywhere on the marketing surface. The geometry reads as a tool built by engineers for people who want precision, not a lifestyle product. The 4 px token is held consistently from the primary CTA through the "NEW" badge through the card feature grid.

The announcement bar above the nav is the brand's one full-bleed blue moment at page load — a thin strip that sets the primary colour expectation before any other element renders. Below it, the white nav with ink text and a single blue "Start for free" button restates the hierarchy cleanly.

## Colors

### Brand & Interactive
- **Primary Blue** (`{colors.primary}` — `#146ef5`): The single conversion colour. Applied to the announcement bar background, every primary CTA button, card highlight surfaces, and the "NEW" badge. Also used as `meta theme-color` — the brand's most totalising colour commitment.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): All text and icons sitting on `{colors.primary}` surfaces — announcement bar text, CTA button labels, highlighted card body copy.
- **Link** (`{colors.link}` — `#146ef5`): Inline hyperlinks share the primary blue. "Get started →" inline link in the hero is the visible instance.
- **Link Hover** (`{colors.link-hover}` — `#0f55c4`): The darker blue pressed / hover state for inline links.

### Text
- **Ink** (`{colors.ink}` — `#080808`): Near-black used for every headline and primary body paragraph on white surfaces. Extracted as the computed text color for h1/h2/h3 and the body default.
- **Body** (`{colors.body}` — `#3a3a3a`): Secondary text — sub-headings, feature card body paragraphs, nav dropdown copy.
- **Mute** (`{colors.mute}` — `#767676`): Lowest-priority text — captions, fine print, placeholder text in form inputs.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The default page background and card surface — pure white.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f5f5f5`): Inset regions, alternate section bands, secondary card backgrounds.
- **Canvas Dark** (`{colors.canvas-dark}` — `#080808`): The brand's polarity-flip surface — used in the logo strip band at the bottom of the hero to create contrast before the customer logos render.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): Text and logo fills on `{colors.canvas-dark}` surfaces.

### Structure
- **Hairline** (`{colors.hairline}` — `#e5e5e5`): 1 px card borders, table row dividers, nav bottom border.
- **Hairline Strong** (`{colors.hairline-strong}` — `#c0c0c0`): The stronger divider tone for separating major page sections or active states.

### Semantic
- **Success** (`{colors.success}` — `#1a8a4a`): Form validation success, status indicators.
- **Error** (`{colors.error}` — `#d93025`): Destructive actions, form validation errors.
- **Warning** (`{colors.warning}` — `#f59e0b`): Caution states, pending status.

### Announcement / Badge
- **Announcement Bg** (`{colors.announcement-bg}` — `#146ef5`): The full-bleed announcement bar — same token as `{colors.primary}` to make the intent explicit.
- **Badge New Bg** (`{colors.badge-new-bg}` — `#146ef5`): The "NEW" pill badge next to "Webflow AEO" in the feature card grid.

## Typography

### Font Family
One variable sans face carries the entire system: **WF Visual Sans Variable** (a proprietary variable font, loaded from Webflow's CDN). It operates at weights 400, 500, and 600. There is no secondary display face and no monospace face visible anywhere in the extracted surface. Arial is the declared fallback.

Open-source substitute: *Inter* variable at the same three weights is the closest stylistic match, particularly with `font-feature-settings: "cv05"` enabled for the single-storey 'a'. *Plus Jakarta Sans* is a second-best option for the variable-weight optical feel.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 74px | 600 | 78px | -0.75px | Hero headline — "Make your website a growth engine". The dominant visual mass on the page. |
| `{typography.display-lg}` | 48px | 600 | 52px | -0.48px | Section-level headlines at major content bands. |
| `{typography.display-md}` | 32px | 600 | 38px | -0.32px | Subsection headlines, pricing tier names. |
| `{typography.display-sm}` | 23px | 600 | 30px | 0px | Card cluster headlines — extracted h2 at 23.4 px. |
| `{typography.body-lg}` | 20px | 400 | 28px | 0px | Hero lead sentence — "Build your brand. Rank in AI search. Drive real revenue." |
| `{typography.body-md}` | 16px | 400 | 24px | 0px | Default body paragraph, feature card body copy. |
| `{typography.body-md-strong}` | 16px | 500 | 24px | 0px | Bolded inline body, announcement bar copy. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0px | Secondary body, nav link hover labels, footer column body. |
| `{typography.body-sm-strong}` | 14px | 500 | 20px | 0px | Announcement bar link labels, table-row emphasis. |
| `{typography.caption}` | 12px | 400 | 16px | 0px | Footer fine print, cookie-banner body. |
| `{typography.caption-strong}` | 12px | 500 | 16px | 0px | "NEW" badge label, tag pills. |
| `{typography.button-md}` | 14px | 500 | 20px | 0px | Nav-scale interactive labels — "Log in", "Contact Sales". |
| `{typography.button-lg}` | 16px | 500 | 24px | 0px | Marketing CTA labels — "Start for free", extracted at 16 px / 500. |
| `{typography.nav-link}` | 16px | 400 | 24px | 0px | Top nav dropdown trigger labels — "Platform", "Solutions", "Resources". |

### Principles
- **One face, three weights.** The brand does not differentiate heading from body by typeface — only by size and weight. The uniformity of WF Visual Sans across every role gives the page a focused, tool-like precision.
- **Negative tracking at display scale only.** The -0.75 px tracking at 74 px compresses the headline into a tight visual unit. Below 24 px, tracking stays at 0 — the brand never positively letter-spaces.
- **Sentence-case, imperative, unpunctuated.** Headlines read as product statements, not marketing slogans. "Make your website a growth engine" has no trailing period.
- **Weight 600 is the display ceiling.** The variable font is never pushed above 600. The brand reads as purposeful without straining.

## Layout

### Spacing System
- **Base unit**: 8 px. The extracted spacing scale (`8px`, `16px`, `24px`, `32px`) is a clean 8-step system; the fractional values (`7.02857px`, `8.43429px`, `15.1429px`, `15.7143px`) are rendering artefacts from the variable-weight optical sizing, not intended tokens.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px · `{spacing.6xl}` 128 px · `{spacing.section}` 160 px.
- **Button padding**: the primary CTA uses `16px 24px` (top/bottom `{spacing.md}`, left/right `{spacing.lg}`) — an extracted hard measurement.
- **Section padding**: marketing bands use `{spacing.4xl}` top/bottom. The hero gives the headline vertical breathing room with `{spacing.4xl}` above and below.
- **Card interior**: feature cards sit at `{spacing.md}` all-round with the extracted `12px 8px 12px 16px` asymmetry; marketing utility cards use `{spacing.lg}`.

### Grid & Container
- **Max width**: approximately 1280 px, centred with horizontal gutters of `{spacing.lg}` 24 px on desktop.
- **Column patterns**:
  - Hero: single centred column at all breakpoints — no split hero layout.
  - Feature card row: 3-up grid in the screenshot (Enterprise / AEO / Future of Search).
  - Logo strip: horizontal flex row of customer logos, single row on desktop.
  - Announcement bar: full-bleed, single centred text row.

### Whitespace Philosophy
The page earns whitespace by restraint. The hero headline runs large and then the page opens into a wide vertical gap before the feature card row — the gap is the signal that the content has weight. Inside cards, the layout is tighter: headline immediately above body with only `{spacing.xs}` between, then a wider gap before any CTA. The brand never pads everything uniformly; it creates rhythm through deliberate compression and release.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero stacks; nav collapses to hamburger; 3-up feature grid drops to 1-up; announcement bar text may truncate. |
| Tablet | 640–1023px | Feature grid drops to 2-up; nav may stay horizontal with fewer visible items. |
| Desktop | 1024–1279px | Full 3-up feature grid; full nav link row. |
| Wide | ≥ 1280px | Content caps at ~1280 px; bands stretch edge-to-edge in colour. |

#### Collapsing Strategy
- **Nav**: full link row + "Log in / Contact Sales / Start for free" cluster at desktop; collapses to logo + hamburger at mobile.
- **Hero**: single centred column at all breakpoints; headline wraps naturally; CTA row stays inline until mobile where it stacks vertically.
- **Feature card grid**: 3-up → 1-up. Cards keep their `{rounded.card}` 4 px geometry at all breakpoints.
- **Logo strip**: horizontal flex with possible overflow scroll on mobile.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Hero band, announcement bar, full-bleed section backgrounds. |
| Level 1 — Hairline Border | `0 0 0 1px {colors.hairline}` | Feature cards, nav bottom divider — the brand's universal "this is a contained surface" cue. |
| Level 2 — Subtle Drop | `0px 1px 3px rgba(0,0,0,0.08)` | Card hover states, cookie banner. |
| Level 3 — Soft Float | `0px 4px 12px rgba(0,0,0,0.10)` | Elevated modals, dropdown menus, cookie consent panel. |

The brand's shadows are conservative — the extraction shows `shadow: none` on the primary card sample. Depth is conveyed through surface colour contrast (white card on white page → hairline border; blue card on white page → no border needed) rather than drop shadows. Elevation levels above Level 1 are inferred for interactive states and modal contexts not directly captured in the extraction.

### Decorative Depth
- **Cobalt blue announcement bar** as the entry-level depth signal — the only full-bleed colour break above the fold.
- **Dark canvas logo strip** as the page's deepest surface — `{colors.canvas-dark}` creates a hard contrast break that frames the customer logos.
- **Polarity-flipped feature card** (`{colors.primary}` background) as the brand's card-level depth cue — one blue card in an otherwise white grid creates hierarchy without needing a shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands, nav links, ghost button states. Extracted button element radius is 0px for ghost/text buttons. |
| `{rounded.button}` | 4px | Every primary and secondary CTA button — the measured extracted value. Non-negotiable. |
| `{rounded.card}` | 4px | Every card surface — feature card, highlight card, cookie banner. Same measured value as button, kept as a separate semantic token. |
| `{rounded.sm}` | 4px | Alias for the brand's base radius — used for badges, input fields, small UI chips. |
| `{rounded.md}` | 6px | Available in the system for internal product UI; not visible at marketing scale in the extraction. |
| `{rounded.lg}` | 8px | Available for future product surfaces. |
| `{rounded.xl}` | 12px | Available for future product surfaces. |
| `{rounded.pill}` | 9999px | Reserved — not observed in the marketing surface. The brand does not use pill buttons on this page. |
| `{rounded.full}` | 9999px | Reserved for avatar or icon containers in product UI. |

The 4 px radius is the brand's entire shape vocabulary on the marketing surface. The fact that both buttons and cards share the same 4 px value — and that the extraction explicitly locks both — means the brand is making a deliberate choice: UI elements and content containers belong to the same geometric family.

## Components

### Navigation

**`announcement-bar`** — the full-bleed cobalt-blue strip above the nav.
- Background `{colors.announcement-bg}`, text `{colors.announcement-text}`, set in `{typography.body-sm-strong}`, padding `{spacing.xs} {spacing.lg}`. Contains a text link with right-arrow — "New for Enterprise: Webflow AEO. Own your visibility in AI search →".

**`nav-bar`** — the sticky top navigation.
- Background `{colors.canvas}`, text `{colors.ink}`, height 64 px, padding `{spacing.xs} {spacing.lg}`, 1 px bottom border in `{colors.hairline}`. Layout: logo left, link row centre-left, "Log in / Contact Sales / Start for free" cluster right.

**`nav-link`** — the dropdown trigger links inside `nav-bar` ("Platform", "Solutions", "Resources", "Enterprise", "Pricing").
- Text `{colors.ink}`, set in `{typography.nav-link}` (16 px / 400), padding `{spacing.xs} {spacing.sm}`, no visible radius on rest state.

**`nav-cta-login`** — the "Log in" ghost link in the nav.
- Background transparent, text `{colors.ink}`, set in `{typography.button-md}`, no border, no radius.

**`nav-cta-contact`** — the "Contact Sales" ghost link in the nav.
- Background transparent, text `{colors.ink}`, set in `{typography.button-md}`, no border, no radius.

**`nav-cta-signup`** — the "Start for free" blue button in the nav.
- Background `{colors.primary}`, text `{colors.on-primary}`, set in `{typography.button-lg}` (16 px / 500), rounded `{rounded.button}` 4 px, padding `{spacing.md} {spacing.lg}` (16 px 24 px — the exact extracted value).

### Buttons

**`button-primary`** — the canonical blue CTA, marketing scale.
- Background `{colors.primary}`, text `{colors.on-primary}`, label set in `{typography.button-lg}`, rounded `{rounded.button}` 4 px, padding `{spacing.md} {spacing.lg}`. Exact measured padding from extraction: 16 px 24 px.

**`button-secondary`** — the white CTA with ink border, used as a secondary action alongside `button-primary`.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, set in `{typography.button-lg}`, rounded `{rounded.button}` 4 px, padding `{spacing.md} {spacing.lg}`.

**`button-ghost`** — the text-level ghost button (extracted as transparent background, `{colors.ink}` text, 0 px radius, minimal padding).
- Background `{colors.button-ghost-bg}`, text `{colors.button-ghost-text}`, set in `{typography.body-md}`, rounded `{rounded.none}`, padding `{spacing.xs}`.

### Cards & Containers

**`feature-card`** — the marketing feature preview card (Enterprise, AEO, Future of Search in the screenshot).
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, set in `{typography.body-md}`, rounded `{rounded.card}` 4 px, padding `{spacing.md} {spacing.xs} {spacing.md} {spacing.md}` (extracted: 12 px 8 px 12 px 16 px).

**`feature-card-highlight`** — the polarity-flipped blue variant of `feature-card`.
- Background `{colors.primary}`, text `{colors.on-primary}`, rounded `{rounded.card}` 4 px, padding `{spacing.md} {spacing.xs} {spacing.md} {spacing.md}`. No border needed — the blue fill creates sufficient differentiation.

**`card-marketing`** — the general-purpose marketing content card used in feature and solution bands.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, rounded `{rounded.card}` 4 px, padding `{spacing.lg}`.

**`cookie-banner`** — the consent panel overlaid at the bottom-left (visible in the screenshot).
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, rounded `{rounded.card}` 4 px, padding `{spacing.lg}`. Contains `{typography.body-sm}` body, a link in `{colors.link}`, and two buttons: `button-ghost` ("Reject all") and `button-primary` ("Accept all").

### Badges & Labels

**`badge-new`** — the "NEW" label pill next to "Webflow AEO" in the feature card.
- Background `{colors.badge-new-bg}`, text `{colors.badge-new-text}`, set in `{typography.caption-strong}`, rounded `{rounded.button}` 4 px, padding `2px {spacing.xs}`.

### Landmark Sections

**`hero-band`** — the white hero section with the centred headline and lead sentence.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.lg}`. Inside: a large centred headline in `{typography.display-xl}` (sentence-case, no trailing period), a lead sentence in `{typography.body-lg}` below it, then a sub-CTA row ("Start building for free. Upgrade any time. Get started →") in `{typography.body-md}`.

**`logo-strip`** — the dark band hosting customer brand logos (NCR, monday.com, Spotify, TED, Dropbox, Greenhouse, etc.).
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, padding `{spacing.lg} {spacing.xl}`. Logos rendered as monochrome-on-dark lockups.

**`footer`** — the bottom multi-column nav.
- Background `{colors.canvas}`, text `{colors.body}`, padding `{spacing.4xl} {spacing.lg}`. Column headers in `{typography.body-md-strong}`; link rows in `{typography.body-sm}`.

**`link-inline`** — body-copy inline links ("Get started →", "cookie policy").
- Text `{colors.link}`, set in `{typography.body-md}`, underlined. Arrow suffix is part of the label, not a separate element.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (`#146ef5`) exclusively for conversion targets — CTAs, the announcement bar, the "NEW" badge. Blue means "act." When it appears anywhere else, it loses that authority.
- Use `{rounded.button}` 4 px for every CTA and `{rounded.card}` 4 px for every card. The brand's geometric vocabulary is a single value — honour it.
- Set every headline in `{typography.display-xl}` through `{typography.display-sm}` at weight 600, sentence-case, no trailing punctuation. The voice is direct and imperative.
- Let whitespace do the sectioning. The hero earns its impact from the gap above and below the headline, not from decorative chrome.
- Use the dark canvas strip (`{colors.canvas-dark}`) as the brand's depth cue between major sections — it is more emphatic than any shadow.
- Keep buttons and text labels in `{typography.button-lg}` at 16 px / 500. The brand never drops below 14 px for interactive labels.
- Match the "NEW" badge exactly — `{colors.primary}` background, white text, 4 px radius — so it reads as a system signal, not an ad hoc decoration.

### Don't
- Don't round buttons or cards beyond 4 px. There is no pill, no 8 px card, no 12 px anything on this marketing surface. Larger radii would read as a different product.
- Don't introduce a second accent colour. The entire brand accent budget is cobalt blue. A second colour would destabilise the "blue = act" rule.
- Don't set headlines at weight 700 or above. The variable font supports it technically, but the brand's display ceiling is 600 — above that it tips from confident into aggressive.
- Don't use positive letter-spacing anywhere. The brand tracks display type slightly negative and leaves everything else at 0. Positive tracking reads as a different design language entirely.
- Don't use drop shadows on cards. The brand uses hairline borders for card definition, not elevation shadows. A heavy drop-shadow would contradict the precision-tool aesthetic.
- Don't render the logo strip on white canvas — the dark band is the intentional contrast break. Placing logos on white removes the visual rhythm of the page.
- Don't set body copy in weight 600. Weight 600 is reserved for display headings only; body paragraphs at 600 collapse the hierarchy.
