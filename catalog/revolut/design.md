---
version: alpha
name: Revolut
description: "Revolut is a global neobank whose marketing surface opens cold and photographic — a full-bleed sky photograph behind near-white headline text, with a sky-blue-to-violet ambient gradient bar running above the fold as the only decorative chrome. The hero is stripped to two things: an oversized geometric sans headline at near-90px with aggressive negative tracking, and a single pill-shaped white CTA. Below that, the page snaps to a pure white canvas. Ink is near-black (#1f1f1f), never full black; the only accent colour visible in the announcement bar is a cool gradient wash from medium blue to periwinkle violet. The brand earns authority by restraint — one font family for headings (Aeonik Pro, weight 500), one for body (Inter, weight 400), zero decorative illustration, zero icon explosion. Every interactive element is a full pill (9999px) or a 12px-radius card surface."
colors:
  primary: "#1f1f1f"
  on-primary: "#ffffff"
  ink: "#1f1f1f"
  body: "#3d3d3d"
  mute: "#6b6b6b"
  hairline: "#e5e5e5"
  canvas: "#ffffff"
  canvas-soft: "#f7f7f7"
  link: "#0050ff"
  link-on-dark: "#ffffff"
  success: "#00b386"
  error: "#e53935"
  warning: "#f5a623"
  gradient-bar-start: "#4169e1"
  gradient-bar-end: "#7c5cbf"
  hero-overlay-dark: rgba(0,0,0,0.35)
  announcement-bg-start: "#3a6fd8"
  announcement-bg-end: "#6e4fc5"
  on-announcement: "#ffffff"
  nav-bg: "#ffffff"
  nav-text: "#1f1f1f"
  cta-bg: "#ffffff"
  cta-text: "#000000"
  app-card-bg: "#ffffff"
  app-card-text: "#1f1f1f"
typography:
  display-xl:
    fontFamily: Aeonik Pro, sans-serif
    fontSize: 84.6578px
    fontWeight: 500
    lineHeight: 84.6578px
    letterSpacing: -2.08px
  display-lg:
    fontFamily: Aeonik Pro, sans-serif
    fontSize: 50.3289px
    fontWeight: 500
    lineHeight: 50.3289px
    letterSpacing: -0.6px
  display-md:
    fontFamily: Aeonik Pro, sans-serif
    fontSize: 32px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: -0.4px
  display-sm:
    fontFamily: Aeonik Pro, sans-serif
    fontSize: 24px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: -0.2px
  body-lg:
    fontFamily: Inter, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  body-sm:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  caption:
    fontFamily: Inter, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  label:
    fontFamily: Aeonik Pro, sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 24px
  button-md:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  button-lg:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  card: 12px
  button: 9999px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  2xl: 32px
  3xl: 40px
  4xl: 56px
  5xl: 64px
  6xl: 80px
  section: 96px
components:
  announcement-bar:
    backgroundColor: linear-gradient(to right, {colors.announcement-bg-start}, {colors.announcement-bg-end})
    textColor: "{colors.on-announcement}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.xl}"
    height: 44px
  locale-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.xl}"
    height: 48px
    borderBottom: 1px solid {colors.hairline}
  nav-bar:
    backgroundColor: "{colors.nav-bg}"
    textColor: "{colors.nav-text}"
    typography: "{typography.body-md}"
    height: 64px
    padding: "{spacing.xs} {spacing.xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-md-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-login:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md-strong}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
  nav-cta-signup:
    backgroundColor: "{colors.cta-bg}"
    textColor: "{colors.cta-text}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 10px 26px
    border: 1px solid {colors.ink}
  button-primary:
    backgroundColor: "{colors.cta-bg}"
    textColor: "{colors.cta-text}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: 10px 26px
    border: 1px solid {colors.ink}
  button-primary-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: 10px 26px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: 10px 26px
    border: 1px solid {colors.on-primary}
  hero-band:
    backgroundColor: photo-overlay
    textColor: "{colors.on-primary}"
    typography: "{typography.display-xl}"
    padding: "{spacing.6xl} {spacing.xl}"
  app-card:
    backgroundColor: "{colors.app-card-bg}"
    textColor: "{colors.app-card-text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  feature-card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  section-band-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section} {spacing.xl}"
  section-band-soft:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section} {spacing.xl}"
  account-balance-card:
    backgroundColor: "{colors.app-card-bg}"
    textColor: "{colors.app-card-text}"
    typography: "{typography.display-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  pill-tag:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.5xl} {spacing.xl}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  banner-announcement:
    backgroundColor: linear-gradient(to right, {colors.gradient-bar-start}, {colors.gradient-bar-end})
    textColor: "{colors.on-announcement}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.xl}"
  ex-pricing-tier:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
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
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.body-sm-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Revolut's marketing surface is built on a studied contradiction: the brand is a global financial platform with 75+ million customers, and it announces itself with one of the most visually stripped-back hero pages in fintech. The opening view is a full-bleed lifestyle photograph — sky, natural light, a close-cropped portrait — with two lines of near-90px Aeonik Pro set in white, tracked at −2.08px, sitting unframed on the photograph. No card borders, no gradient overlays beyond a light scrim. A single pill CTA — white background, black text, 9999px radius — sits below the copy like a period at the end of a sentence.

The colour system is almost deliberately bare. The body of the page is pure white canvas. The near-black ink (`#1f1f1f`) is the only text colour on light surfaces. The one place the brand introduces deliberate colour is the announcement bar above the nav: a cool blue-to-violet gradient (`#3a6fd8` → `#6e4fc5`) that reads as a technological ambient wash, not a brand palette decision. It appears once, at the very top, and disappears. Below it, white and near-black carry everything.

Type is the real design system. Aeonik Pro (weight 500) handles every headline — from the 84px hero down to 18px section labels. Inter (weight 400 / 500) handles all body, button labels, nav links, and captions. The two families never overlap in role. Aeonik Pro is never used at 400; Inter is never used for display. The heading tracking at hero scale (−2.08px) is the brand's most specific fingerprint — remove it and the headline reads generic. At section scale the tracking relaxes to −0.6px and the weight stays 500.

Buttons are the most emphatic shape decision Revolut makes. Every CTA — nav signup, hero download, in-section action — uses a 9999px radius full pill. There is no rectangular button anywhere in the screenshot. The in-app product card (`app-card`) uses a 12px radius, the only instance of a cornered surface visible in the fold. The brand uses these two radii — full pill for actions, 12px card for surfaces — and nothing in between for interactive chrome.

## Colors

### Brand & Ink
- **Ink** (`{colors.primary}` — `#1f1f1f`): The brand's near-black. Used for all body text on white, for the border and label of the primary CTA on white backgrounds, and as the polarity-flip fill for dark-surface CTAs. It is not full black — the slight warmth is deliberate.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): White text on the ink-filled CTA variant. Also the entire hero text color, sitting directly on the photograph.
- **Body** (`{colors.body}` — `#3d3d3d`): Secondary body text for footer, sub-labels, and supporting copy where the full ink weight is too heavy.
- **Mute** (`{colors.mute}` — `#6b6b6b`): Lowest-priority text — placeholder, fine print, disabled states.
- **Hairline** (`{colors.hairline}` — `#e5e5e5`): Card borders, row dividers, the locale-bar bottom edge.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Default page background. Every section band, card, and nav sits on this.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f7f7f7`): Inset surfaces, feature-card backgrounds, and alternating section bands.
- **Nav Background** (`{colors.nav-bg}` — `#ffffff`): The main nav sits on pure white; the transparency collapses to white on scroll.

### Semantic
- **Link** (`{colors.link}` — `#0050ff`): Inline anchor text on white surfaces. Observed on the announcement bar link ("Open an account →").
- **Link on Dark** (`{colors.link-on-dark}` — `#ffffff`): Link text on the gradient announcement bar — fully white with underline as the only differentiator.
- **Success** (`{colors.success}` — `#00b386`): Confirmed states, in-app positive balances.
- **Error** (`{colors.error}` — `#e53935`): Validation, destructive action states.
- **Warning** (`{colors.warning}` — `#f5a623`): Pending, caution states.

### Announcement Gradient
- **Gradient Bar Start** (`{colors.gradient-bar-start}` / `{colors.announcement-bg-start}` — `#3a6fd8` / `#4169e1`): The cool royal-blue left stop of the top announcement band. This gradient IS the only decorative colour on the page — used exclusively here.
- **Gradient Bar End** (`{colors.gradient-bar-end}` / `{colors.announcement-bg-end}` — `#6e4fc5` / `#7c5cbf`): The periwinkle-violet right stop. The gradient sweeps left to right, atmospheric, never miniaturised.
- **On Announcement** (`{colors.on-announcement}` — `#ffffff`): All text in the gradient bar is white.

### CTA Surface
- **CTA Background** (`{colors.cta-bg}` — `#ffffff`): The white pill button surface observed on the hero and in the nav "Sign up" button.
- **CTA Text** (`{colors.cta-text}` — `#000000`): The button label — marginally darker than the brand ink, rendered black at button scale.

## Typography

### Font Families

Two faces, strict role separation:

1. **Aeonik Pro** — the brand's geometric sans. Weight 500 only. Every headline from `display-xl` (hero) down to `label` (section eyebrows and card headings). Never used at body weight (400). The face is licensed/proprietary; closest open-source substitute is *Plus Jakarta Sans* (500) with tight letter-spacing enabled, or *Inter* with `font-feature-settings: "ss01"` as a functional fallback.

2. **Inter** — the brand's body and UI face. Weights 400 (body, captions) and 500 (button labels, nav links, strong inline). Never used for display headlines. Available open-source as *Inter* from Google Fonts.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 84.66px | 500 | 84.66px | −2.08px | Hero headline ("Banking & Beyond"). |
| `{typography.display-lg}` | 50.33px | 500 | 50.33px | −0.6px | Section-level headlines. |
| `{typography.display-md}` | 32px | 500 | 36px | −0.4px | Sub-section and callout headlines. |
| `{typography.display-sm}` | 24px | 500 | 28px | −0.2px | Card-level and in-app mockup labels. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Lead paragraphs beneath section headlines. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph; nav link text. |
| `{typography.body-md-strong}` | 16px | 500 | 24px | 0 | Nav link labels, emphasized inline text. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Supporting captions, announcement bar body. |
| `{typography.body-sm-strong}` | 14px | 500 | 20px | 0 | Pill tag labels, table emphasis. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Footer small print, metadata. |
| `{typography.label}` | 18px | 500 | 24px | 0 | Section eyebrow labels (Aeonik Pro). |
| `{typography.button-md}` | 16px | 500 | 24px | 0 | Nav-scale button labels. |
| `{typography.button-lg}` | 16px | 500 | 24px | 0 | Marketing-scale pill button labels. |

### Principles
- **Negative tracking at display scale is the brand fingerprint.** The −2.08px tracking on the 84.66px hero is not optional — it collapses the word spacing to produce the dense, confident feel. At 50px section scale, tracking relaxes to −0.6px. Body is always 0.
- **Weight 500 is the display ceiling.** Aeonik Pro never goes to 600 or 700 in the captured surfaces. The brand reads calmer for it — substantial without aggressive.
- **No all-caps.** Headlines are title-case or sentence-case. The brand never uses uppercase tracking as a design device.
- **Two faces, hard role boundary.** Aeonik Pro for anything that names or titles. Inter for anything that explains or acts. The boundary never blurs.

### Note on Font Substitutes
- **Aeonik Pro** is a licensed geometric sans. *Plus Jakarta Sans* (500) is the closest open-source match for the rounded geometric forms. *Inter* with `font-feature-settings: "ss02"` is a functional fallback.
- **Inter** is fully open-source and identical to the brand's body face.

## Layout

### Spacing System
- **Base unit**: 4px. All measured paddings on the page are multiples of 4.
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.2xl}` 32px · `{spacing.3xl}` 40px · `{spacing.4xl}` 56px · `{spacing.5xl}` 64px · `{spacing.6xl}` 80px · `{spacing.section}` 96px.
- **Button padding**: the measured button is `10px` top/bottom × `26px` left/right — a non-standard vertical that keeps the pill compact; mapped to the measured values directly.
- **Section bands**: marketing sections use `{spacing.section}` 96px top/bottom. The hero band uses `{spacing.6xl}` 80px to give the photograph room without overextending.
- **Card interior**: `app-card` and `feature-card` sit at `{spacing.xl}` 24px; tighter utility elements use `{spacing.md}` 16px.

### Grid & Container
- **Max width**: approximately 1200px; content centres with `{spacing.xl}` 24px horizontal gutters at desktop, `{spacing.md}` 16px at mobile.
- **Column patterns**:
  - Hero: single full-bleed column with left-aligned copy at desktop.
  - Feature sections: 2-up or 3-up at desktop, stacking to 1-up at mobile.
  - In-app mockup card: centered floating card overlaid on the hero photograph, approximately 380px wide.
  - Nav: logo left, link cluster centre, auth cluster right.

### Whitespace Philosophy
The brand uses white space as the primary separator — no decorative illustration, no gradient bands between sections. Large top/bottom section padding (`{spacing.section}`) creates breathing room between content clusters. The hero photograph bleeds edge-to-edge with no border or margin, maximising the photographic impact. Inside content sections, headline and body stack tightly (`{spacing.xs}` 8px gap) with a wider gap before the CTA row.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 600px | Hero copy stacks; nav collapses to logo + hamburger; hero CTA remains pill-shaped; in-app card may hide. |
| Tablet | 600–959px | 2-up feature grids; nav link row may collapse. |
| Desktop | 960–1199px | Full nav, 3-up feature grids, hero split with photograph. |
| Wide | ≥ 1200px | Content caps at ~1200px; bands stretch edge-to-edge. |

#### Collapsing Strategy
- **Nav**: full link row at desktop, logo + hamburger at mobile.
- **Hero**: copy left-aligned with photograph behind at desktop; stacks to single column at mobile.
- **Feature cards**: 3-up → 2-up → 1-up.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Hero photograph bands, full-bleed announcement bar. |
| Level 1 — Hairline Border | `1px solid {colors.hairline}` | `app-card` and `feature-card` outer edge — the brand's lightest "you can see this card" cue. |
| Level 2 — Subtle Drop | `0px 2px 8px rgba(0,0,0,0.08)` | Slightly elevated cards — the in-app balance card floating over the hero. |
| Level 3 — Float | `0px 4px 16px rgba(0,0,0,0.12)` | Modal / dialog surfaces, dropdown menus. |

The brand does not use heavy stacked shadows on the marketing surface. The in-app card floating over the hero photograph earns its apparent elevation from contrast against the photograph, not from shadow depth. On white sections, cards sit flat with hairline borders only.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero, announcement bar. |
| `{rounded.sm}` | 4px | Tightest UI detail — form checkbox, small badge. |
| `{rounded.md}` | 8px | Input fields, small surface insets. |
| `{rounded.lg}` | 12px | The `card` radius — `app-card`, `feature-card`, in-app balance card. |
| `{rounded.xl}` | 16px | Larger card surfaces when extra softness is needed. |
| `{rounded.button}` | 9999px | Every button and CTA on the page — the brand's most emphatic shape decision. |
| `{rounded.pill}` | 9999px | Navigation pills, `pill-tag`, chip elements. |
| `{rounded.full}` | 9999px | Circular icon containers, avatar frames. |

### Shape Philosophy
Revolut operates exactly two radius registers: **full pill** (9999px) for anything interactive, and **12px card** for any surface that contains content. These two shapes coexist at every scroll depth and never interchange roles. There is no medium-rounded button, no squared card. The binary is the system.

## Components

### Navigation

**`locale-bar`** — the top utility bar ("You're on the United Kingdom website. Choose your country or region.").
- White background, near-black text, `{typography.body-sm}`, 1px hairline bottom border, height 48px. Contains a country selector pill and a circular arrow button.

**`announcement-bar`** — the blue-to-violet gradient savings rate announcement ("Earn 5% AER (variable) on savings.").
- Background is the `announcement-bg-start` → `announcement-bg-end` gradient, white text, `{typography.body-sm}`, padding `{spacing.xs} {spacing.xl}`. The gradient IS the bar's design — it should never be replaced with a flat colour.

**`nav-bar`** — the sticky main navigation.
- White background, near-black text, height 64px, padding `{spacing.xs} {spacing.xl}`. Layout: Revolut wordmark logo left, four nav links (Personal / Business / Kids & Teens / Company) centre, Log in + Sign up right.

**`nav-link`** — the centred link row inside `nav-bar`.
- Text `{colors.ink}`, `{typography.body-md-strong}`, padding `{spacing.xs} {spacing.md}`, ghost pill shape `{rounded.pill}`.

**`nav-cta-login`** — the "Log in" text button in the nav.
- Transparent background, text `{colors.ink}`, `{typography.body-md-strong}`, `{rounded.pill}`, padding `{spacing.xs} {spacing.lg}`.

**`nav-cta-signup`** — the "Sign up" pill button in the nav.
- White background, black label, 1px solid ink border, `{typography.button-md}`, `{rounded.button}` 9999px, measured padding `10px 26px`.

### Buttons

**`button-primary`** — the canonical white pill CTA ("Download the app").
- Background `{colors.cta-bg}` white, text `{colors.cta-text}` black, 1px solid ink border, `{typography.button-lg}`, `{rounded.button}` 9999px, measured padding `10px 26px`. This is the hero CTA; white-on-photo serves as a light-mode CTA shape.

**`button-primary-dark`** — the ink-filled pill variant for use on white sections.
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.button-lg}`, `{rounded.button}` 9999px, padding `10px 26px`.

**`button-secondary`** — the ghost pill paired with the dark primary on dark surfaces.
- Transparent background, white text, 1px solid white border, `{typography.button-lg}`, `{rounded.button}` 9999px, padding `10px 26px`.

### Cards & Surfaces

**`app-card`** — the floating in-app product mockup card overlaid on the hero photograph (shows "Personal / £6,012 / Accounts").
- White background, near-black text, 12px radius `{rounded.card}`, padding `{spacing.xl}`. Elevated above the photograph. Contains a balance figure in `{typography.display-md}` and a secondary pill tag ("Accounts") in `{typography.body-sm-strong}`.

**`account-balance-card`** — the balance display sub-element inside `app-card`.
- Background `{colors.app-card-bg}`, text `{colors.app-card-text}`, balance numeral in `{typography.display-md}`, label ("Personal") in `{typography.caption}`.

**`pill-tag`** — the small pill chip inside the app-card ("Accounts").
- Background `{colors.canvas}`, text `{colors.ink}`, `{typography.body-sm-strong}`, `{rounded.pill}` 9999px, padding `{spacing.xs} {spacing.md}`. Appears as a white pill with soft shadow floating inside the card.

**`feature-card`** — generic content card for below-fold feature sections.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, `{typography.body-md}`, `{rounded.card}` 12px, padding `{spacing.xl}`.

### Bands & Layout

**`hero-band`** — the full-bleed opening photograph section.
- Full-bleed lifestyle photograph as background, scrim overlay `{colors.hero-overlay-dark}`, text `{colors.on-primary}`, padding `{spacing.6xl} {spacing.xl}`. Headline in `{typography.display-xl}`, body in `{typography.body-lg}`, single `button-primary` CTA.

**`section-band-light`** — a white-background content section.
- Background `{colors.canvas}`, text `{colors.ink}`, `{typography.display-lg}` section headlines, padding `{spacing.section} {spacing.xl}`.

**`section-band-soft`** — a canvas-soft alternating content section.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, `{typography.display-lg}` headlines, padding `{spacing.section} {spacing.xl}`.

### Utility

**`footer`** — the bottom multi-column nav.
- Background `{colors.canvas}`, text `{colors.body}`, `{typography.body-sm}`, padding `{spacing.5xl} {spacing.xl}`. Column headers in `{typography.body-sm-strong}` (Inter 500).

**`link-inline`** — body-copy inline links.
- Text `{colors.link}` on light surfaces, `{colors.link-on-dark}` on the announcement bar, `{typography.body-md}`.

**`banner-announcement`** — the gradient savings announcement bar.
- Gradient background `{colors.gradient-bar-start}` → `{colors.gradient-bar-end}`, text `{colors.on-announcement}`, `{typography.body-sm}`, padding `{spacing.xs} {spacing.xl}`.

### Examples (illustrative)

**`ex-pricing-tier`** — Default tier card for Revolut's Standard / Plus / Premium plan layout.
- `backgroundColor: {colors.canvas-soft}`, `textColor: {colors.ink}`, `borderColor: {colors.hairline}`, `rounded: {rounded.card}`, `padding: {spacing.xl}`.

**`ex-pricing-tier-featured`** — Highlighted plan (e.g. Metal / Ultra) — ink-fill polarity flip.
- `backgroundColor: {colors.primary}`, `textColor: {colors.on-primary}`, `rounded: {rounded.card}`, `padding: {spacing.xl}`.

**`ex-product-selector`** — "What's Included" feature summary card.
- `backgroundColor: {colors.canvas-soft}`, `rounded: {rounded.card}`, `padding: {spacing.lg}`.

**`ex-cart-drawer`** — Subscription plan summary side panel.
- `backgroundColor: {colors.canvas}`, `rounded: {rounded.card}`, `padding: {spacing.lg}`, `item-divider: {colors.hairline}`.

**`ex-app-shell-row`** — Sidebar nav row; active state uses ink primary as left-edge indicator.
- `backgroundColor: {colors.canvas}`, `activeIndicator: {colors.primary}`, `rounded: {rounded.md}`, `padding: {spacing.xs} {spacing.sm}`.

**`ex-data-table-cell`** — Data table chrome. Header uses body-sm-strong; body uses body-sm.
- `headerBackground: {colors.canvas-soft}`, `headerTypography: {typography.body-sm-strong}`, `bodyTypography: {typography.body-sm}`, `cellPadding: {spacing.xs} {spacing.md}`, `rowBorder: {colors.hairline}`.

**`ex-auth-form-card`** — Sign-in / sign-up form card.
- `backgroundColor: {colors.canvas}`, `rounded: {rounded.card}`, `padding: {spacing.xl}`.

**`ex-modal-card`** — Modal dialog surface — app-card chrome with Level 3 float shadow.
- `backgroundColor: {colors.canvas}`, `rounded: {rounded.card}`, `padding: {spacing.xl}`.

**`ex-empty-state-card`** — Empty-state illustration frame.
- `backgroundColor: {colors.canvas-soft}`, `rounded: {rounded.card}`, `padding: {spacing.3xl}`, `captionTypography: {typography.body-md}`.

**`ex-toast`** — Toast notification.
- `backgroundColor: {colors.canvas}`, `rounded: {rounded.lg}`, `padding: {spacing.sm} {spacing.md}`, `typography: {typography.body-sm}`.

## Do's and Don'ts

### Do
- Use `{rounded.button}` 9999px for every CTA, nav button, and interactive pill. The full-pill shape is non-negotiable and applies universally across all button scales.
- Use `{rounded.card}` 12px for every content surface — app cards, feature cards, modal surfaces. No other radius is used for containers.
- Set every headline in `{typography.display-*}` at weight 500 (Aeonik Pro). Negative tracking is part of the voice — −2.08px at hero scale, −0.6px at section scale.
- Use the blue-to-violet gradient exclusively for the announcement/notification bar. It is a one-time accent at the top of the page, not a repeating brand pattern.
- Keep the hero full-bleed and photograph-first. The photograph IS the hero background; it should never be replaced with a flat colour or gradient.
- Maintain the strict two-font boundary — Aeonik Pro for titles and labels, Inter for body, buttons, and UI.
- Use `{colors.cta-bg}` white-pill-on-dark and `{colors.primary}` dark-pill-on-light as the two CTA modes — never introduce a coloured CTA (blue, green, etc.).

### Don't
- Don't round buttons to anything other than 9999px. A 12px button, a 6px button, or a rectangular CTA violates the shape system entirely.
- Don't use 12px radius (`{rounded.card}`) on buttons or interactive elements — it belongs only to passive card surfaces.
- Don't introduce a new accent colour. The brand operates on ink + white + the single gradient bar. Adding a coloured button or section accent breaks the system.
- Don't use Aeonik Pro at weight 400 or Inter at 600+. The weight roles are fixed.
- Don't miniaturise the announcement gradient to a swatch, chip, or icon background. It is a full-width atmospheric bar, not a brand colour.
- Don't set body paragraphs in Aeonik Pro. Inter is the body face.
- Don't apply heavy drop-shadows to marketing cards. Hairline borders and at most a 2-step soft shadow are the elevation range.
