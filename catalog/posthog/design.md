---
version: alpha
name: PostHog
description: PostHog is a developer-tools platform with a personality — a sand-toned, parchment-warm canvas system paired with a hedgehog mascot and hand-drawn illustration style that flatly refuses to look like enterprise SaaS. The brand's surface is a muted sage-linen background (#eeefe9) under near-black ink, broken at the CTA level by a single amber-golden primary that glows like a harvest lantern. A rounded display face (Open Runde, weight 800) carries all headlines with slight negative tracking; IBM Plex Sans Variable does every body and UI label. No gradients, no decoration system, no hero shimmer — just warm paper, one amber accent, and an opinionated hedgehog.
colors:
  primary: "#cd8407"
  primary-border: "#b17816"
  primary-hover: "#eb9d2a"
  on-primary: "#4d4f46"
  ink: "#111827"
  body: "#374151"
  mute: "#4d4f46"
  hairline: "#b6b7af"
  canvas: "#ffffff"
  canvas-soft: "#eeefe9"
  canvas-warm: "#e5e7e0"
  canvas-tab-active: "#dfe0d9"
  link: "#4d4f46"
  link-underline: "#cd8407"
  success: "#22c55e"
  error: "#ef4444"
  warning: "#f59e0b"
  badge-bg: "#eeefe9"
  badge-border: "#b6b7af"
  selection-bg: "#cd8407"
  selection-fg: "#ffffff"
typography:
  display-xl:
    fontFamily: '"Open Runde", sans-serif'
    fontSize: 48px
    fontWeight: 800
    lineHeight: 52px
    letterSpacing: -1.2px
  display-lg:
    fontFamily: '"Open Runde", sans-serif'
    fontSize: 36px
    fontWeight: 800
    lineHeight: 40px
    letterSpacing: -0.9px
  display-md:
    fontFamily: '"Open Runde", sans-serif'
    fontSize: 24px
    fontWeight: 800
    lineHeight: 32px
    letterSpacing: -0.6px
  display-sm:
    fontFamily: '"Open Runde", sans-serif'
    fontSize: 21px
    fontWeight: 800
    lineHeight: 30px
    letterSpacing: -0.54px
  display-xs:
    fontFamily: '"Open Runde", sans-serif'
    fontSize: 19px
    fontWeight: 800
    lineHeight: 30px
    letterSpacing: -0.48px
  body-lg:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", -apple-system, system-ui, sans-serif'
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", -apple-system, system-ui, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", -apple-system, system-ui, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", -apple-system, system-ui, sans-serif'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  caption:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", -apple-system, system-ui, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", -apple-system, system-ui, sans-serif'
    fontSize: 15px
    fontWeight: 600
    lineHeight: 20px
  button-sm:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", -apple-system, system-ui, sans-serif'
    fontSize: 13px
    fontWeight: 600
    lineHeight: 18px
  nav-label:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", -apple-system, system-ui, sans-serif'
    fontSize: 15px
    fontWeight: 600
    lineHeight: 20px
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  button: 6px
  card: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px
spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 64px
  5xl: 96px
  section: 128px
components:
  nav-bar:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    height: 52px
    padding: "{spacing.sm} {spacing.xl}"
    borderBottom: 1px solid {colors.hairline}
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.sm} {spacing.md}"
    rounded: "{rounded.sm}"
  nav-cta-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    border: 1px solid {colors.primary-border}
    padding: "{spacing.sm} {spacing.lg}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    border: 1px solid {colors.primary-border}
    padding: "{spacing.sm} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    border: 1px solid {colors.hairline}
    padding: "{spacing.sm} {spacing.lg}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.mute}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.sm}"
  tab-pill:
    backgroundColor: "{colors.canvas-soft}"
    activeBackgroundColor: "{colors.canvas-tab-active}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.lg}"
    borderBottom: 2px solid {colors.primary}
  card-feature:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    border: 1px solid {colors.hairline}
    padding: "{spacing.lg}"
  card-sidebar-nav:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    border: 1px solid {colors.hairline}
    padding: "{spacing.md} {spacing.lg}"
  hero-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  feature-tab-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.card}"
    border: 1px solid {colors.hairline}
    padding: "{spacing.xl}"
  icon-item:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.sm}"
  badge:
    backgroundColor: "{colors.badge-bg}"
    textColor: "{colors.mute}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    border: 1px solid {colors.badge-border}
    padding: "{spacing.xxs} {spacing.xs}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
    textDecorationColor: "{colors.link-underline}"
  cookie-banner:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    border: 1px solid {colors.hairline}
    padding: "{spacing.lg}"
  footer:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    borderTop: 1px solid {colors.hairline}
    padding: "{spacing.3xl} {spacing.xl}"
  sidebar-desktop:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    border: 1px solid {colors.hairline}
    padding: "{spacing.lg}"
  ex-pricing-tier:
    description: Default pricing tier card on the warm canvas surface with a hairline border.
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured tier — amber-primary fill with on-primary dark text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: Product suite selector card — one card per tool (analytics, session replay, flags, etc.).
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary drawer — line items per active PostHog product.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row inside the PostHog app shell. Active row uses amber primary left indicator.
    backgroundColor: "{colors.canvas-soft}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.sm}"
  ex-data-table-cell:
    description: Data-table chrome. Header uses body-sm-strong; body uses body-sm. Hairline row borders.
    headerBackground: "{colors.canvas-warm}"
    headerTypography: "{typography.body-sm-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card on canvas-soft with button-primary CTA.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog surface — card-feature chrome with hairline border and slight shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame — warm canvas-soft with generous padding and hedgehog illustration slot.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — compact card-feature chrome at body-sm scale.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

PostHog's design language is best understood as warm-parchment engineering. Where most developer platforms reach for dark mode and electric accents, PostHog lands on a sun-bleached sage-linen canvas (`{colors.canvas-soft}`, `#eeefe9`) that reads less like a software dashboard and more like a sketchbook left in the sun. The parchment surface is the brand's single most distinctive decision — it immediately signals "we are not the same enterprise SaaS you've seen before."

The colour system is austere by design. Near-black `{colors.ink}` carries all headlines and the navigation. A single amber-golden primary (`{colors.primary}`, `#cd8407`) does everything a second colour is asked to do: primary CTA backgrounds, active tab indicators, underline accents on links, and the brand mark's diagonal stripe motif. There is no blue link colour, no gradient, no mesh, no hero glow. The amber IS the accent system.

Typography runs on two faces. Open Runde — a custom rounded geometric display sans at weight 800 — carries all headings with -0.5 to -1.2 px letter-spacing. IBM Plex Sans Variable handles every body copy, button label, nav item, and caption at weights 400 and 600. The pairing reads technically precise (IBM Plex) yet approachable and slightly playful (Open Runde's rounded terminals). Headlines are sentence-case. There is no uppercase.

The illustration system — a hedgehog mascot in hand-drawn style, placed at hero scale — replaces photography entirely. No stock photos, no screenshot mockups in traditional dark chrome. The UI is shown in a skeuomorphic "desktop OS window" chrome (visible in the screenshot), with a warm-paper sidebar containing icon-nav items. This embedded product-shell illustration is the brand's hero graphic. Elevation is flat: every card uses a 1 px hairline border on the warm canvas, never a shadow.

## Colors

### Brand & Accent
- **Primary Amber** (`{colors.primary}` — `#cd8407`): The single conversion colour. Used as the background of every primary CTA button, the active tab underline indicator, and the PostHog logomark stripe. Never used decoratively at scale — it stays concentrated at interaction points.
- **Primary Border** (`{colors.primary-border}` — `#b17816`): The darkened-amber border always paired with the amber button surface to give the CTA a pressed, inset look on the warm background.
- **Primary Hover** (`{colors.primary-hover}` — `#eb9d2a`): The slightly lighter amber visible on the "Install with AI" secondary button, which uses the hover amber as its resting surface to distinguish it from the main CTA.

### Surface
- **Canvas Soft** (`{colors.canvas-soft}` — `#eeefe9`): The page body background — the brand's signature warm sage-linen. Every section, card, and sidebar sits on this tone.
- **Canvas Warm** (`{colors.canvas-warm}` — `#e5e7e0`): The slightly deeper warm tone used as the nav-bar background and the desktop-app sidebar background. The meta theme-color matches this exactly.
- **Canvas Tab Active** (`{colors.canvas-tab-active}` — `#dfe0d9`): The active-state background on tab-pill rows, one step darker than canvas-soft.
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure white used only inside dialogs, modals, the cookie banner, and the embedded product-window chrome.
- **Hairline** (`{colors.hairline}` — `#b6b7af`): The universal 1 px divider — card borders, input borders, nav bottom border, table row separators.

### Text
- **Ink** (`{colors.ink}` — `#111827`): All headline text and active nav labels.
- **Body** (`{colors.body}` — `#374151`): Secondary body paragraphs and card content.
- **Mute** (`{colors.mute}` — `#4d4f46`): Low-priority text — button labels on amber surfaces (on-primary), sub-labels, ghost button text.
- **On Primary** (`{colors.on-primary}` — `#4d4f46`): The dark-muted tone used as text on amber CTA surfaces. Notably not white — the amber is light enough that the brand opts for near-black-mute instead.

### Semantic
- **Link** (`{colors.link}` — `#4d4f46`): Inline body links use the muted near-black, not a blue. The amber underline (`{colors.link-underline}`) provides the colour cue.
- **Success** (`{colors.success}` — `#22c55e`): Status indicators.
- **Error** (`{colors.error}` — `#ef4444`): Validation states.
- **Warning** (`{colors.warning}` — `#f59e0b`): Caution states.

## Typography

### Font Family
Two faces define the entire system:

1. **Open Runde** — a rounded geometric display sans, weight 800 only, used exclusively for headlines at every level. The rounded terminals soften what would otherwise be a stark bold headline — they match the brand's hedgehog-and-hand-drawn personality. Negative letter-spacing (`-0.48 px` to `-1.2 px`) is applied at all display sizes.
2. **IBM Plex Sans Variable** — the body and UI workhorse. Weight 400 for reading, weight 600 for emphasis, button labels, and nav items. A variable-axis font that keeps the weight transitions smooth across UI states.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 800 | 52px | -1.2px | Top-of-page hero headline ("The new way to build products"). |
| `{typography.display-lg}` | 36px | 800 | 40px | -0.9px | Major section headings. |
| `{typography.display-md}` | 24px | 800 | 32px | -0.6px | Card cluster headings ("Understand what users are doing"). |
| `{typography.display-sm}` | 21px | 800 | 30px | -0.54px | Sub-section headings. |
| `{typography.display-xs}` | 19px | 800 | 30px | -0.48px | Card-level headings and sidebar section labels. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Hero lead paragraph. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph, card body. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary body, nav sub-labels, footer links. |
| `{typography.body-sm-strong}` | 14px | 600 | 20px | 0 | Tab-pill labels, table row emphasis. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Badge labels, fine print. |
| `{typography.button-md}` | 15px | 600 | 20px | 0 | Primary and secondary button labels. |
| `{typography.button-sm}` | 13px | 600 | 18px | 0 | Small ghost buttons and inline icon-buttons. |
| `{typography.nav-label}` | 15px | 600 | 20px | 0 | Top navigation item labels ("Product OS", "Pricing", "Docs"). |

### Principles
- **Rounded headline terminals are non-negotiable.** Open Runde's soft corners make the 800-weight headlines feel approachable, not aggressive. Substituting a sharp geometric sans breaks the personality entirely.
- **Negative tracking at every display size.** The brand consistently applies `-0.5 px` to `-1.2 px` tracking on all Open Runde display sizes. Leaving tracking at default makes headlines feel loose and wrong.
- **Sentence-case only.** Neither display nor UI text goes uppercase. All-caps is entirely absent from the brand.
- **Weight 600 is the IBM Plex ceiling.** Body paragraphs stay at 400; emphasis and interactive labels step to 600. No 700 or 800 in the UI face.
- **On-primary text is dark, not white.** Because the amber primary is light enough, button labels use `{colors.on-primary}` (`#4d4f46`) — a warm near-black — rather than white. Swapping to white on the amber breaks the brand's contrast calibration.

### Note on Font Substitutes
Open Runde is a proprietary/custom rounded face. The closest open-source substitute is **Nunito** (weight 800) or **Quicksand** (weight 700) — both share rounded terminals. For IBM Plex Sans Variable, use **IBM Plex Sans** (static) at weights 400 and 600; the variable version is available on Google Fonts.

## Layout

### Spacing System
- **Base unit**: 4 px. The extracted scale (`4px / 5px / 6px / 8px / 12px / 16px`) has a 4 px foundation with a 5 px and 6 px fractional step for tight inline gaps.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px · `{spacing.section}` 128 px.
- **Most frequent gap on the page**: 8 px (203 occurrences), followed by 6 px (150) and 4 px (140). This confirms the brand's extremely tight, information-dense internal spacing.
- **Card interior padding**: 16 px (`{spacing.lg}`) — confirmed by deterministic extraction.
- **Section padding**: hero and marketing bands use `{spacing.4xl}` to `{spacing.5xl}` top/bottom; tighter content bands stay at `{spacing.xl}` to `{spacing.2xl}`.

### Grid & Container
- **Max width**: approximately 1200 px; content centres with horizontal gutters of `{spacing.xl}` 24 px on desktop.
- **Column patterns**:
  - Hero: two-column at desktop (headline + body left, hedgehog illustration right); single-column at mobile.
  - Feature tab panel: full-width tab row with 4-up tab pills, content panel below.
  - Desktop-app sidebar illustration: fixed-width left sidebar + content area mimicking a product OS shell.
- **The embedded OS-window chrome** (visible in the screenshot) is treated as a single illustration block, not a real UI grid.

### Whitespace Philosophy
PostHog packs information tightly — the dominant spacing values (4–8 px) confirm an information-dense aesthetic that respects engineers who want to scan quickly. The wide spacing is reserved for section-level breathing room between page bands, not within components. Cards are compact. The page reads as a well-organised developer tool, not a spacious marketing brochure.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed page bands on canvas-soft. |
| Level 1 — Hairline | `1px solid #b6b7af` border, no shadow. | The universal card chrome — every feature card, sidebar nav card, and input. |
| Level 2 — Surface Lift | `1px solid #b6b7af` border + `{colors.canvas}` white background against the canvas-soft body. | Dialog surfaces, cookie banner, modal-style panels that need to feel above the page. |

The brand uses **no drop-shadows** anywhere visible in the extraction or screenshot. Depth is communicated entirely by surface-colour contrast (canvas-soft body vs. canvas-white card) and hairline borders. This is a deliberate choice that reinforces the flat, paper-like aesthetic.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands and dividers. |
| `{rounded.xs}` | 4px | Tightest inline chips and micro-labels. |
| `{rounded.sm}` | 6px | Nav-link ghost hover state. |
| `{rounded.button}` | 6px | **Measured primary button radius** — all CTA and secondary button shapes. |
| `{rounded.card}` | 6px | **Measured card radius** — all feature cards, sidebar nav cards, and panels. |
| `{rounded.md}` | 8px | Slightly larger UI container rounding where applicable. |
| `{rounded.lg}` | 12px | Large panel chrome. |
| `{rounded.xl}` | 16px | Largest container rounding. |
| `{rounded.pill}` | 9999px | Fully circular pill shapes (nav indicators, tag chips if present). |

**Note on button geometry:** The primary CTA ("Get started – free") and secondary button ("Install with AI") both measure exactly 6 px radius from deterministic extraction. This is a distinctly square-cornered button for a brand with round headline fonts — the contrast is intentional. Do not promote to a pill shape.

## Components

### Buttons

**`button-primary`** — the amber CTA button, brand conversion target.
- Background `{colors.primary}` (#cd8407), text `{colors.on-primary}` (#4d4f46), border `1px solid {colors.primary-border}`, label in `{typography.button-md}` (15 px / 600), shape `{rounded.button}` 6 px. Height approximately 36–40 px in context.

**`button-secondary`** — the lighter amber secondary button ("Install with AI").
- Background `{colors.primary-hover}` (#eb9d2a), text `{colors.on-primary}`, same border and typography as `button-primary`, shape `{rounded.button}` 6 px. Visually paired with the primary — amber family, slightly lighter to establish hierarchy.

**`button-ghost`** — the text-level ghost button used for inline actions ("Watch a demo", "Talk to a human").
- Background transparent, text `{colors.mute}`, label in `{typography.button-sm}`, shape `{rounded.button}` 6 px. Often prefixed with a small icon.

**`nav-cta-primary`** — the amber "Get started – free" button inside the top navigation bar.
- Same chrome as `button-primary` but rendered at the nav scale. Background `{colors.primary}`, text `{colors.on-primary}`, border `1px solid {colors.primary-border}`, shape `{rounded.button}` 6 px, typography `{typography.button-md}`.

### Navigation

**`nav-bar`** — the top sticky navigation.
- Background `{colors.canvas-warm}` (#e5e7e0), text `{colors.ink}`, height ~52 px, padding `{spacing.sm} {spacing.xl}`, bottom border `1px solid {colors.hairline}`. Layout: logo + brand name left, primary nav links centre, amber CTA right.

**`nav-link`** — the flat nav text links ("Product OS", "Pricing", "Docs", "Community", "Company", "More").
- Text `{colors.ink}`, typography `{typography.nav-label}` (15 px / 600), padding `{spacing.sm} {spacing.md}`, ghost hover state with `{rounded.sm}` 6 px background.

**`sidebar-desktop`** — the left icon-sidebar nav within the embedded OS-window illustration.
- Background `{colors.canvas-warm}`, border-right `1px solid {colors.hairline}`, padding `{spacing.lg}`. Contains icon + label rows for "home.mdx", "Product OS", "Pricing", "customers.mdx", etc. Typography `{typography.body-sm}`.

### Cards & Panels

**`card-feature`** — the general content card used throughout feature sections.
- Background `{colors.canvas-soft}`, text `{colors.body}`, padding `{spacing.lg}` 16 px, shape `{rounded.card}` 6 px, border `1px solid {colors.hairline}`. No shadow.

**`card-sidebar-nav`** — the item-row card in the OS-window sidebar illustration.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, typography `{typography.body-sm}`, shape `{rounded.card}` 6 px, border `1px solid {colors.hairline}`, padding `{spacing.md} {spacing.lg}`.

**`feature-tab-band`** — the tab-switched content panel ("Understand product usage / One place for product data / Debug & fix issues / Test & roll out changes").
- Background `{colors.canvas}`, text `{colors.ink}`, shape `{rounded.card}` 6 px, border `1px solid {colors.hairline}`, padding `{spacing.xl}`. Tab row above with `tab-pill` components, amber bottom-border on active tab.

### Interactive

**`tab-pill`** — the horizontal tab navigation pill.
- Background `{colors.canvas-soft}` (inactive) / `{colors.canvas-tab-active}` (active), text `{colors.ink}`, typography `{typography.body-sm-strong}`, shape `{rounded.button}` 6 px, padding `{spacing.sm} {spacing.lg}`. Active state: 2 px solid `{colors.primary}` bottom border.

**`icon-item`** — the small icon + label inline combination used below hero CTAs ("MCP", "Watch a demo", "Talk to a human").
- Background transparent, text `{colors.mute}`, typography `{typography.body-sm}`, padding `{spacing.xs} {spacing.sm}`. Prefixed with a small SVG icon.

### Surface & Utility

**`hero-band`** — the top-of-page section.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Contains: brand logo, headline in `{typography.display-xl}` (sentence-case), lead body in `{typography.body-lg}`, CTA row with `button-primary` + `button-secondary`, icon-item row below. Illustrated hedgehog at a desk appears to the right as the only visual decoration.

**`cookie-banner`** — the cookie notice card (visible bottom-right of screenshot).
- Background `{colors.canvas}`, text `{colors.body}`, typography `{typography.body-sm}`, shape `{rounded.card}` 6 px, border `1px solid {colors.hairline}`, padding `{spacing.lg}`. Contains a dismiss (×) button, headline in `{typography.body-sm-strong}`, body paragraph, and an amusing "Ursula von der Leyen" illustration.

**`badge`** — the small inline metadata tag.
- Background `{colors.badge-bg}`, text `{colors.mute}`, typography `{typography.caption}`, shape `{rounded.sm}` 6 px, border `1px solid {colors.badge-border}`, padding `{spacing.xxs} {spacing.xs}`.

**`link-inline`** — body-copy inline links.
- Text `{colors.link}` (#4d4f46), typography `{typography.body-md}`, underline decoration in `{colors.link-underline}` (amber). Links are dark-muted, not blue — the amber underline is the colour cue.

**`footer`** — the bottom navigation block.
- Background `{colors.canvas-soft}`, text `{colors.body}`, typography `{typography.body-sm}`, border-top `1px solid {colors.hairline}`, padding `{spacing.3xl} {spacing.xl}`.

## Do's and Don'ts

### Do
- Use `{colors.canvas-soft}` (#eeefe9) as the page body background everywhere. The warm sage-linen IS the brand surface.
- Keep `{rounded.button}` and `{rounded.card}` at exactly 6 px. The square-cornered button against the round Open Runde headline is a deliberate brand contrast.
- Use `{colors.on-primary}` (#4d4f46 — dark mute) as text on amber CTA surfaces, not white.
- Set every headline in Open Runde weight 800, sentence-case, with negative letter-spacing. Omitting the negative tracking makes headlines feel wrong.
- Apply the amber primary (`{colors.primary}`) only to interactive targets: primary buttons, active tab indicators, link underlines. It is not a decorative fill.
- Use IBM Plex Sans Variable at weight 400 for body and 600 for buttons / nav labels. Those two weights are the entire UI weight set.
- Communicate depth through hairline borders (`1px solid {colors.hairline}`) and surface-tone contrast — never shadows.

### Don't
- Don't introduce a second accent colour. The amber is the entire accent system; adding blue links or green highlights breaks the voice.
- Don't render headlines in all-caps or uppercase. Sentence-case only.
- Don't apply a drop-shadow to cards. The brand's elevation is hairline border + canvas-white surface — nothing heavier.
- Don't make buttons pill-shaped. The measured 6 px radius is deliberate; promoting to `{rounded.pill}` misrepresents the brand.
- Don't use photography. The brand's visual language is hand-drawn hedgehog illustration and OS-window product chrome. Stock photos displace the personality entirely.
- Don't set body copy in Open Runde. It is a display-only face at weight 800. IBM Plex Sans carries all reading text.
- Don't lighten the page background to pure white (#ffffff) for marketing sections. The parchment surface must persist everywhere except dialogs and modals.
