---
version: alpha
name: Figma
description: "Figma's design language is a study in confident restraint punctuated by a single electric violet — a brand that sells creativity by keeping its own surface almost entirely white, letting the canvas of user-made work do the decorating. The wordmark multicolor logo and one high-chroma CTA blue-violet (#4d49fc) are the only colours with a job to do; everything else defers to black ink on white ground. Type is set in the brand's own geometric sans (figmaSans), weight 400 throughout — even at 64 px hero scale — which gives the page an editorial openness rather than a tech-startup urgency. Buttons come in two clear shapes: a sharp 8 px-radius rectangle for primary CTAs and a fully-round 50 px pill for secondary ghost actions, a deliberate contrast that signals hierarchy without colour alone."
colors:
  primary: "#4d49fc"
  on-primary: "#ffffff"
  ink: "#000000"
  body: "#697485"
  mute: "#a0a8b3"
  hairline: "#e6e6e6"
  canvas: "#ffffff"
  canvas-soft: "#f5f5f5"
  canvas-dark: "#000000"
  on-dark: "#ffffff"
  link: "#4d49fc"
  success: "#1bc47d"
  error: "#f24822"
  warning: "#ffa800"
  logo-figma-red: "#f24822"
  logo-figma-orange: "#ff7262"
  logo-figma-violet: "#a259ff"
  logo-figma-blue: "#1abcfe"
  logo-figma-green: "#0acf83"
typography:
  display-xl:
    fontFamily: figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif
    fontSize: 64px
    fontWeight: 400
    lineHeight: 70.4px
    letterSpacing: -0.64px
  display-lg:
    fontFamily: figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 52.8px
    letterSpacing: -0.48px
  display-md:
    fontFamily: figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif
    fontSize: 24px
    fontWeight: 400
    lineHeight: 32.4px
    letterSpacing: -0.24px
  display-sm:
    fontFamily: figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: -0.2px
  body-lg:
    fontFamily: figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 27px
  body-md:
    fontFamily: figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif
    fontSize: 16px
    fontWeight: 480
    lineHeight: 24px
  body-sm:
    fontFamily: figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif
    fontSize: 14px
    fontWeight: 480
    lineHeight: 20px
  label:
    fontFamily: figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 20.8px
    letterSpacing: 0.64px
  caption:
    fontFamily: figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-primary:
    fontFamily: figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif
    fontSize: 18px
    fontWeight: 480
    lineHeight: 24px
  button-secondary:
    fontFamily: figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 24px
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  button: 8px
  card: 16px
  lg: 24px
  xl: 32px
  pill: 50px
  full: 9999px
spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 18px
  2xl: 24px
  3xl: 40px
  4xl: 48px
  5xl: 53px
  section: 96px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    height: 64px
    padding: "{spacing.lg} {spacing.2xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.lg}"
  nav-cta-login:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-secondary}"
    rounded: "{rounded.button}"
    padding: 8px 18px 10px
  nav-cta-contact:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button-secondary}"
    rounded: "{rounded.button}"
    padding: 8px 18px 10px
  nav-cta-get-started:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-primary}"
    rounded: "{rounded.button}"
    padding: 12px 20px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-primary}"
    rounded: "{rounded.button}"
    padding: 12px 20px
  button-secondary:
    backgroundColor: rgba(0, 0, 0, 0.08)
    textColor: "{colors.ink}"
    typography: "{typography.button-secondary}"
    rounded: "{rounded.button}"
    padding: 8px 18px 10px
  button-ghost-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-secondary}"
    rounded: "{rounded.button}"
    padding: 8px 18px 10px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.2xl}"
  logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.2xl} {spacing.2xl}"
  card-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  card-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  feature-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.section} {spacing.2xl}"
  showcase-band-light:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.section} {spacing.2xl}"
  showcase-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    padding: "{spacing.section} {spacing.2xl}"
  section-eyebrow:
    textColor: "{colors.body}"
    typography: "{typography.label}"
    letterSpacing: 0.64px
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
    height: 44px
  badge:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.sm}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  footer:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.2xl}"
  cookie-banner:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-pricing-tier:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
  ex-pricing-tier-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
  ex-product-selector:
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
  ex-data-table-cell:
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.label}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.lg}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
  ex-modal-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
  ex-empty-state-card:
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.4xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"
---
## Overview

Figma's homepage is almost aggressively white — a blank canvas that mirrors the tool itself. There is no atmospheric mesh, no gradient wallpaper, no decorative illustration system. The decoration is the work: a carousel of user-created projects (bold editorial layouts, food-typography posters, dark dashboard UIs) bleeds across the hero at full bleed, letting customers prove the product better than any brand asset could.

Type is set entirely in the brand's own geometric humanist sans (figmaSans). The remarkable choice is weight 400 at every scale — the 64 px hero headline carries no more visual tension than the 16 px nav link. The brand earns drama through scale and negative letter-spacing (`-0.64 px` at hero), never through emboldening. Section eyebrows break this rule subtly: they're set at 16 px with `+0.64 px` positive tracking and rendered in `{colors.body}` muted gray — a quiet uppercase-without-uppercase cue that marks transitions.

The CTA system is the most considered detail on the page. Primary actions ("Get started", "Get started for free") use the violet `{colors.primary}` on a crisp `{rounded.button}` 8 px rectangle — not a pill, not a full-round capsule. Secondary actions ("Log in", "Contact sales") use a transparent ghost pill at `{rounded.pill}` 50 px radius with the same ink text. The two shapes coexist in the same nav row and hero block, creating a clear hierarchy without any colour difference between them.

A dark footer and occasional dark-surface bands (`{colors.canvas-dark}`) provide the only polarity flip. Everything else sits on pure white or a near-white `{colors.canvas-soft}` surface.

## Colors

### Brand & Accent
- **Primary Violet** (`{colors.primary}` — `#4d49fc`): The single conversion colour. Used exclusively for the primary CTA button fill and inline link text. Never used as a background at section scale.
- **Figma Logo Red** (`{colors.logo-figma-red}` — `#f24822`): The bottom-left petal of the multicolour Figma wordmark logo. Appears only in the logo mark — not used in UI chrome.
- **Figma Logo Orange** (`{colors.logo-figma-orange}` — `#ff7262`): Top-left petal of the wordmark logo.
- **Figma Logo Violet** (`{colors.logo-figma-violet}` — `#a259ff`): Top-right petal of the wordmark logo.
- **Figma Logo Blue** (`{colors.logo-figma-blue}` — `#1abcfe`): Bottom-right petal of the wordmark logo.
- **Figma Logo Green** (`{colors.logo-figma-green}` — `#0acf83`): Centre petal of the wordmark logo.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The default surface for every section, card, and dialog. The brand's primary background.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f5f5f5`): A 96%-white surface for alternate sections and card cluster backgrounds.
- **Canvas Dark** (`{colors.canvas-dark}` — `#000000`): The full polarity-flip — used for the footer and occasional dark feature bands.

### Text
- **Ink** (`{colors.ink}` — `#000000`): Every primary heading and paragraph on light surfaces.
- **Body / Muted** (`{colors.body}` — `#697485`): Secondary text — section eyebrows, sub-headings, captions, logo strip labels.
- **Mute** (`{colors.mute}` — `#a0a8b3`): Lowest-priority text — placeholder text and fine print.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): All text on `{colors.canvas-dark}` surfaces.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): Button label text on `{colors.primary}` fill.

### Semantic
- **Link** (`{colors.link}` — `#4d49fc`): Matches the primary brand violet; used for inline hyperlinks in body copy.
- **Success** (`{colors.success}` — `#1bc47d`): Status-green visible in product UI mockups shown on the marketing surface.
- **Error** (`{colors.error}` — `#f24822`): Error-state red; matches the logo's red petal. Used in validation states.
- **Warning** (`{colors.warning}` — `#ffa800`): Amber warning indicator in product UI mockups.
- **Hairline** (`{colors.hairline}` — `#e6e6e6`): 1 px dividers for card borders, input borders, and table rows.

## Typography

### Font Family
One custom face carries the entire system:

**figmaSans** — a geometric humanist sans commissioned by Figma. The font stack reads: `figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif`. The fallback chain is tight — SF Pro Display is the closest system match on Apple platforms, and the custom "figmaSans Fallback" shim handles CLS before the custom font loads.

Weight 400 is the workhorse. Weight 480 (a mid-demi between regular and medium, unique to figmaSans) appears on button labels and bold inline body. The font never appears at 600 or above in the marketing surface — the brand does not need bolder to be louder.

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 400 | 70.4px | -0.64px | Hero headline ("Make anything possible, all in Figma"). |
| `{typography.display-lg}` | 48px | 400 | 52.8px | -0.48px | Sub-hero section headlines. |
| `{typography.display-md}` | 24px | 400 | 32.4px | -0.24px | Card cluster headlines, feature section heads. |
| `{typography.display-sm}` | 20px | 400 | 28px | -0.2px | In-card sub-headings and callout labels. |
| `{typography.body-lg}` | 18px | 400 | 27px | 0 | Lead paragraph under the hero headline. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph. |
| `{typography.body-md-strong}` | 16px | 480 | 24px | 0 | Bolded inline body. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Footer links, card secondary text. |
| `{typography.body-sm-strong}` | 14px | 480 | 20px | 0 | Emphasised small body. |
| `{typography.label}` | 16px | 400 | 20.8px | +0.64px | Section eyebrows — the one place Figma uses positive tracking to create an uppercase-like cue without using uppercase. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Badge labels, fine print. |
| `{typography.button-primary}` | 18px | 480 | 24px | 0 | Primary CTA labels ("Get started for free"). |
| `{typography.button-secondary}` | 18px | 400 | 24px | 0 | Secondary ghost-pill button labels ("Log in", "Contact sales"). |

### Principles
- **Weight 400 is the voice, weight 480 is the emphasis ceiling.** The brand never bolds beyond 480. Scale does the lifting that weight would normally do — a 64 px 400-weight headline is far more commanding than a 32 px 700.
- **Negative tracking at display scale.** Every headline size carries negative letter-spacing (`-0.64 px` at 64 px, tightening proportionally at smaller sizes). This is the brand's typographic signature; reverting to 0 tracking breaks it.
- **Positive tracking for eyebrows only.** Section labels use `+0.64 px` tracking as the sole positive-tracking moment on the page — a subtle indicator that these are metadata lines, not headlines.
- **Sentence-case everywhere.** Headlines, button labels, nav links — all sentence-case. No all-caps outside of the eyebrow-tracking trick.
- **No italic, no mono.** The marketing surface uses no italic or monospaced type; those are reserved for in-product UI.

### Note on Font Substitutes
figmaSans is proprietary. Open-source substitutes:
- **Geometric humanist sans** — *Plus Jakarta Sans* (400 / 500) is the closest freely available match at 64 px. *Nunito* at tight tracking is a passable second. For system-only stacks, SF Pro Display with `font-feature-settings: "case"` is the closest Apple-platform option.

## Layout

### Spacing System
- **Base unit**: 6 px (the smallest measured step on the page). Steps are not strictly 4 px multiples — the brand appears to use a 6 px base, with an irregular `53.33 px` step that corresponds to an `800 / 15` rhythm inside the hero product-image carousel.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 18 px · `{spacing.2xl}` 24 px · `{spacing.3xl}` 40 px · `{spacing.4xl}` 48 px · `{spacing.5xl}` 53 px · `{spacing.section}` 96 px.
- **Section padding**: feature bands use `{spacing.section}` top/bottom. The hero is taller, accommodating the full-bleed project carousel.
- **Card interior padding**: cards use `{spacing.lg}` 16 px as the base interior padding. Marketing-cluster cards scale to `{spacing.2xl}` 24 px.
- **Inline gap**: button rows and nav clusters use `{spacing.sm}` 8 px to `{spacing.md}` 12 px between siblings.

### Grid & Container
- **Max width**: approximately 1280 px; the page uses a centred container with `{spacing.2xl}` 24 px horizontal gutters on desktop.
- **Column patterns**:
  - Hero: single centred text column with a full-bleed project-image strip behind it, overlapping.
  - Feature cards: 2-up or 3-up grid depending on the section.
  - Logo strip: 7–8 logos wide in a single row, monochrome on white.
  - Nav: logo far-left, links centred, CTA cluster far-right.

### Whitespace Philosophy
The blank canvas is the design. Figma's whitespace is maximalist — the hero section gives the headline enormous vertical breathing room. The product-image carousel creates the only decorative density; the rest of the page is generous gutters and low-information-density sections. Inside a card, the hierarchy is: icon or image → `{spacing.lg}` gap → headline → `{spacing.sm}` gap → body. Never tight.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Hero bands, full-bleed section backgrounds, logo strip. |
| Level 1 — Card | No shadow; `1px solid {colors.hairline}` border where needed. | Marketing cards and container boxes. |
| Level 2 — Cookie Banner | Soft drop shadow (`0 4px 24px rgba(0,0,0,0.08)`). | The cookie-consent card that floats in the bottom-right corner. |
| Level 3 — Modal | Medium drop shadow (`0 8px 32px rgba(0,0,0,0.12)`) plus hairline border. | Dialog and drawer surfaces inside the product. |

The brand avoids heavy drop-shadows on its marketing surface entirely. The cookie banner is the only visually-floating element in the captured surface; everything else is flat or hairline-bordered.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands, the product-image carousel strip. |
| `{rounded.xs}` | 4px | Tightest inline chip or indicator dot. |
| `{rounded.sm}` | 6px | Subtle rounding for small UI elements. |
| `{rounded.button}` | 8px | The primary CTA button — "Get started for free", "Get started". This is the measured shape; do not promote it to a pill. |
| `{rounded.card}` | 16px | Every marketing card, cookie-consent banner, modal. |
| `{rounded.lg}` | 24px | Larger card chrome where the image cap is part of the card. |
| `{rounded.xl}` | 32px | Optional large card variant. |
| `{rounded.pill}` | 50px | Secondary ghost-pill buttons ("Log in", "Contact sales") and nav-link hover states. |
| `{rounded.full}` | 9999px | Avatar rings, small badge containers. |

The intentional duality: the black "Get started" pill in the hero uses `{rounded.pill}` 50 px, while the violet "Get started for free" CTA in the nav uses `{rounded.button}` 8 px. Both shapes are deliberately maintained as separate design decisions.

## Components

### Navigation

**`nav-bar`** — the sticky top navigation.
- Background `{colors.canvas}`, ink text, height 64 px, padding `{spacing.lg} {spacing.2xl}`. Layout: Figma multicolour logo mark far-left, dropdown link row centre ("Products", "Solutions", "Community", "Resources", "Pricing"), CTA cluster far-right.

**`nav-link`** — dropdown-trigger links inside `nav-bar`.
- Text `{colors.ink}`, set in `{typography.body-md}`, padding `{spacing.sm} {spacing.lg}`, shape `{rounded.pill}`. Includes a chevron icon for dropdown groups.

**`nav-cta-login`** — the "Log in" ghost pill in the nav.
- Background transparent, text `{colors.ink}`, set in `{typography.button-secondary}`, shape `{rounded.pill}` 50 px, padding `8px 18px 10px`.

**`nav-cta-contact`** — the "Contact sales" outlined pill in the nav.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, set in `{typography.button-secondary}`, shape `{rounded.pill}` 50 px.

**`nav-cta-get-started`** — the violet "Get started for free" primary button in the nav.
- Background `{colors.primary}`, text `{colors.on-primary}`, set in `{typography.button-primary}`, shape `{rounded.button}` 8 px, padding `12px 20px`.

### Buttons

**`button-primary`** — the canonical violet CTA rectangle.
- Background `{colors.primary}`, text `{colors.on-primary}`, set in `{typography.button-primary}` (18 px / 480), shape `{rounded.button}` 8 px, padding `12px 20px`.

**`button-secondary`** — the dark ghost pill for secondary actions.
- Background `rgba(0,0,0,0.08)`, text `{colors.ink}`, set in `{typography.button-secondary}` (18 px / 400), shape `{rounded.pill}` 50 px, padding `8px 18px 10px`.

**`button-ghost-pill`** — the transparent pill used for nav-scale secondary actions.
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.button-secondary}`, shape `{rounded.pill}` 50 px.

### Hero & Bands

**`hero-band`** — the white hero with the full-bleed project-image carousel backdrop.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.2xl}`. Inside: headline in `{typography.display-xl}` (sentence-case, no period), lead body in `{typography.body-lg}`, then a `button-primary` "Get started" CTA. The project carousel sits behind the text block at full viewport width, cropped on both sides.

**`feature-band`** — a standard alternating white section with headline + feature-card grid.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.section} {spacing.2xl}`. Section eyebrow in `{typography.label}` (`{colors.body}`, +0.64 px tracking); headline in `{typography.display-lg}`; supporting body in `{typography.body-lg}`.

**`showcase-band-light`** — a soft-canvas alternate section.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.section} {spacing.2xl}`.

**`showcase-band-dark`** — the polarity-flipped dark band.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, padding `{spacing.section} {spacing.2xl}`. Headline in `{typography.display-lg}` white on black.

### Cards & Containers

**`card-marketing`** — the standard feature card.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg}` 16 px, shape `{rounded.card}` 16 px. Carries no drop-shadow — sits on canvas-soft background for implicit separation.

**`card-dark`** — the dark-surface card variant used inside dark bands.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, padding `{spacing.lg}`, shape `{rounded.card}` 16 px.

### Utility

**`logo-strip`** — the customer-logo parade below the hero.
- Background `{colors.canvas}`, padding `{spacing.2xl}`. Logos rendered in monochrome at consistent height: Atlassian, Dropbox, Duolingo, GitHub, Microsoft, Netflix, The New York Times, etc. Horizontal scroll at mobile.

**`section-eyebrow`** — the small tracked label above section headlines.
- Text `{colors.body}`, set in `{typography.label}` (16 px / 400 / +0.64 px tracking). Used to categorise sections without using uppercase or a heavier weight.

**`badge`** — small metadata pill.
- Background `{colors.canvas-soft}`, text `{colors.body}`, set in `{typography.caption}`, shape `{rounded.pill}`, padding `{spacing.xxs} {spacing.sm}`.

**`form-input`** — text input for email capture or search fields.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, set in `{typography.body-md}`, shape `{rounded.button}` 8 px, padding `{spacing.md} {spacing.lg}`, height 44 px.

**`cookie-banner`** — the consent overlay in the bottom-right corner.
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.body-sm}`, shape `{rounded.card}` 16 px, padding `{spacing.lg}`. Features inline links in `{colors.link}` and a close-icon button.

**`link-inline`** — body-copy hyperlinks.
- Text `{colors.link}` (`#4d49fc`), set in `{typography.body-md}`. Underlined on hover.

**`footer`** — the dark bottom navigation.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, set in `{typography.body-sm}`, padding `{spacing.4xl} {spacing.2xl}`. Column labels in `{typography.label}` (tracked, `{colors.mute}`); link rows in `{typography.body-sm}`.

## Do's and Don'ts

### Do
- Use `{colors.primary}` (`#4d49fc`) exclusively as the primary CTA fill. It is the only conversion colour on the page; diluting it weakens hierarchy.
- Pair `{rounded.button}` 8 px on primary CTAs with `{rounded.pill}` 50 px on secondary ghost actions. The contrast between the two shapes IS the hierarchy signal.
- Set all display type in weight 400. Scale communicates importance; don't let your instinct toward bold undermine the brand's editorial voice.
- Use `{typography.label}` with `+0.64 px` positive tracking for section eyebrows. This is the brand's substitute for uppercase labelling.
- Let customer-created work serve as the hero decoration. Figma earns its visual richness through product screenshots, not brand illustration.
- Keep the page surface white or near-white (`{colors.canvas}` / `{colors.canvas-soft}`) for 90% of sections; reserve `{colors.canvas-dark}` for the footer and one or two polarity-flip bands maximum.

### Don't
- Don't apply `{rounded.button}` 8 px to secondary / ghost actions. Secondary buttons are always `{rounded.pill}` 50 px — the shape difference is non-negotiable.
- Don't use weight 600 or above. The font ceiling is 480; exceeding it breaks the brand's editorial lightness.
- Don't introduce decorative illustrations, mesh gradients, or icon-driven pattern fills. The brand's decoration is the product work itself.
- Don't reduce the five-petal Figma logo to a monochrome version in marketing contexts — the multicolour mark is the brand.
- Don't set eyebrow labels in all-caps; use `{typography.label}` with positive tracking on sentence-case text instead.
- Don't apply heavy drop-shadows to marketing cards. The brand's elevation system is nearly flat; hairline borders and background-colour separation do the work.
- Don't use the primary violet `{colors.primary}` as a section background colour. It exists only at button scale.
