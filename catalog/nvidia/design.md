---
version: alpha
name: NVIDIA
description: "NVIDIA's design language is a high-contrast dark-on-light system punctuated by a single electric signature: NVIDIA Green (#76b900), a chartreuse-adjacent hue that appears on the logo, primary CTAs, and nowhere else. The page surface is pure white canvas; typography is set exclusively in a proprietary geometric sans (NVIDIA-NALA) at zero border-radius — every button, every card, every input is sharp-cornered, zero-radius, deliberately industrial. The decorative system is photography and video at full bleed: GPU close-ups, data-center renders, developer faces. No gradients, no soft shadows, no pill shapes. Square geometry plus the green signal IS the brand."

colors:
  primary: "#76b900"
  on-primary: "#000000"
  ink: "#000000"
  body: "#222222"
  mute: "#4b4b4b"
  hairline: "#e0e0e0"
  hairline-soft: "#eeeeee"
  canvas: "#ffffff"
  canvas-soft: "#f7f7f7"
  canvas-muted: "#e0e0e0"
  gray-400: "#898989"
  gray-500: "#757575"
  gray-700: "#4b4b4b"
  gray-800: "#313131"
  gray-900: "#222222"
  gray-950: "#161616"
  link: "#0074df"
  link-deep: "#0046a4"
  link-deep-2: "#002781"
  success: "#3f8500"
  success-light: "#cfff40"
  success-bright: "#bff230"
  error: "#e52020"
  error-deep: "#961515"
  error-deeper: "#650b0b"
  error-soft: "#ff8181"
  warning: "#ef9100"
  warning-deep: "#df6500"
  warning-soft: "#fcde7b"
  warning-softer: "#feeeb2"
  purple: "#952fc6"
  purple-deep: "#4d1368"
  purple-soft: "#f9d4ff"
  fuchsia: "#d2308e"
  fuchsia-deep: "#5d1337"
  teal-soft: "#adfcf8"
  teal-deep: "#04554b"
  blue-soft: "#cbf5ff"

typography:
  display-xl:
    fontFamily: "NVIDIA-NALA, Arial, Helvetica, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 52px
    letterSpacing: -0.5px
  display-lg:
    fontFamily: "NVIDIA-NALA, Arial, Helvetica, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 40px
    letterSpacing: -0.3px
  display-md:
    fontFamily: "NVIDIA-NALA, Arial, Helvetica, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 28px
  display-sm:
    fontFamily: "NVIDIA-NALA, Arial, Helvetica, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 24px
  body-lg:
    fontFamily: "NVIDIA-NALA, Arial, Helvetica, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 26px
  body-md:
    fontFamily: "NVIDIA-NALA, Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: "NVIDIA-NALA, Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
  body-sm:
    fontFamily: "NVIDIA-NALA, Arial, Helvetica, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: "NVIDIA-NALA, Arial, Helvetica, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
  caption:
    fontFamily: "NVIDIA-NALA, Arial, Helvetica, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  caption-strong:
    fontFamily: "NVIDIA-NALA, Arial, Helvetica, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 16px
  button-md:
    fontFamily: "NVIDIA-NALA, Arial, Helvetica, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
  button-lg:
    fontFamily: "NVIDIA-NALA, Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 20px
  nav-link:
    fontFamily: "NVIDIA-NALA, Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 20px

rounded:
  none: 0px
  xs: 0px
  sm: 0px
  md: 0px
  lg: 0px
  xl: 0px
  pill: 0px
  full: 0px

spacing:
  xxs: 5px
  xs: 7px
  sm: 10px
  sm2: 11px
  md: 15px
  md2: 20px
  lg: 24px
  xl: 30px
  2xl: 40px
  3xl: 48px
  4xl: 64px
  5xl: 96px
  section: 120px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderBottom: "1px solid {colors.hairline}"
    typography: "{typography.nav-link}"
    height: 64px
    padding: "{spacing.sm} {spacing.lg}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  nav-link-utility:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  nav-icon-button:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} 0px"
  hero-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  hero-band-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  card-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  card-dark:
    backgroundColor: "{colors.gray-950}"
    textColor: "{colors.canvas}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  card-soft:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  feature-grid-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section} {spacing.lg}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
    textDecoration: underline
  link-nav-bold:
    textColor: "{colors.ink}"
    typography: "{typography.body-md-strong}"
    textDecoration: none
  footer:
    backgroundColor: "{colors.gray-950}"
    textColor: "{colors.canvas}"
    typography: "{typography.body-sm}"
    padding: "{spacing.2xl} {spacing.lg}"
  footer-link:
    textColor: "{colors.canvas}"
    typography: "{typography.caption}"
    textDecoration: none
  badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.none}"
    padding: "2px {spacing.xs}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.gray-700}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
    height: 40px
  ex-pricing-tier:
    description: "Default feature/product tier card on white surface with a hairline border."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured tier — polarity-flipped to near-black surface with white text and green CTA."
    backgroundColor: "{colors.gray-950}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "Product category summary card — GPU/software tier summary on canvas-soft."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    description: "Subscription or order summary panel — line items per product add-on."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row. Active state uses NVIDIA Green as a left-edge indicator bar."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.md}"
  ex-data-table-cell:
    description: "Data-table chrome. Header uses caption-strong uppercase; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. White surface with square-edged form inputs inside."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog surface — same card-marketing chrome with a drop shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state frame on canvas-soft with generous padding."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification — flat square card-marketing chrome with a hairline border."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"

---

## Overview

NVIDIA's design surface is one of the most restrained in the technology industry. The visual system resolves to three decisions: pure-white canvas, absolute-black ink, and a single electric-green signal (`{colors.primary}` — `#76b900`) that belongs exclusively to the logo and the primary call-to-action button. Everything else is gray scale. There is no gradient, no rounded corner, no decorative illustration. The brand's decorative budget is spent entirely on photography and video — GPU die shots, data-center corridors, blue-tinted silicon renders — set inside zero-radius rectangular frames at full bleed.

Square geometry is the brand's most distinctive formal decision. Every interactive element — buttons, inputs, nav dropdowns, cards — carries `{rounded.none}`: 0 px border-radius across the board. This is an explicit engineering posture, signalling precision and hardware rather than consumer friendliness. The CTA button extracted at radius 0 px (`10px 12px` padding, `#76b900` background) is the canonical expression of this. No pill, no softening. Rectangles all the way down.

Typography is set in a single proprietary face, NVIDIA-NALA, at weights 400 and 700 only. There is no intermediate weight. Headings are weight 700 and run in sentence-case at modest negative tracking; body copy is weight 400 with neutral tracking. A fallback stack of Arial / Helvetica / sans-serif is specified, acknowledging that NALA is a custom typeface loaded from NVIDIA's own CDN.

The page's grey palette is a well-resolved nine-step scale from `{colors.canvas-soft}` (`#f7f7f7`) through `{colors.gray-950}` (`#161616`). The darkest tones form the footer and dark-band hero surfaces; mid-grays carry secondary text and borders; near-white tones form the soft-canvas backgrounds. The system carries a full semantic palette — link blue, success green, error red, warning amber, plus purple, fuchsia, and teal accent families — but these are held in CSS custom properties and appear primarily on product-category landing pages rather than the global marketing surface.

## Colors

### Brand Signal
- **NVIDIA Green** (`{colors.primary}` — `#76b900`): The brand's only accent. Appears on the eye-of-the-storm logo mark and the primary CTA button background exclusively. Nowhere else on the marketing surface. Its `on-primary` pair is pure black text — the brand avoids reversing out to white on this mid-lightness green.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The universal page background and default card surface.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f7f7f7`): The 025-level near-white used for inset sections, soft-tinted card backgrounds, and hover states.
- **Canvas Muted** (`{colors.canvas-muted}` — `#e0e0e0`): The 100-level gray; dividers, disabled-state fills, skeleton loaders.
- **Hairline Soft** (`{colors.hairline-soft}` — `#eeeeee`): The 050-level gray used for the lightest visible borders.
- **Hairline** (`{colors.hairline}` — `#e0e0e0`): The standard 1 px divider line between cards and rows.

### Text
- **Ink** (`{colors.ink}` — `#000000`): All primary headings and bold nav labels on light surfaces.
- **Body** (`{colors.body}` — `#222222`): The default body paragraph color (gray-900 level). Slightly softened from pure black for reading comfort.
- **Mute** (`{colors.mute}` — `#4b4b4b`): Secondary captions, metadata labels, footer sub-copy.
- **Gray 400** (`{colors.gray-400}` — `#898989`): Placeholder text and deemphasised inline labels.
- **Gray 500** (`{colors.gray-500}` — `#757575`): Mid-tone tertiary labels, icon fill.
- **Gray 800** (`{colors.gray-800}` — `#313131`): Near-dark text on lighter dark surfaces.
- **Gray 950** (`{colors.gray-950}` — `#161616`): The near-black used as the dark hero and footer background — the brand's "dark mode" surface tone.

### Semantic
- **Link** (`{colors.link}` — `#0074df`): Primary hyperlink color for body-copy inline links.
- **Link Deep** (`{colors.link-deep}` — `#0046a4`): Hover / visited state for links.
- **Link Deep 2** (`{colors.link-deep-2}` — `#002781`): Pressed / active link state.
- **Success** (`{colors.success}` — `#3f8500`): On-page success status indicators and confirmed states.
- **Success Light** (`{colors.success-light}` — `#cfff40`): Soft lime background for success badges.
- **Success Bright** (`{colors.success-bright}` — `#bff230`): The green-100 level — near-NVIDIA-green but lighter, used in product category decorative spots.
- **Error** (`{colors.error}` — `#e52020`): Validation errors and destructive action labels.
- **Error Soft** (`{colors.error-soft}` — `#ff8181`): Soft error background tint.
- **Warning** (`{colors.warning}` — `#ef9100`): Caution and in-progress states.
- **Warning Soft** (`{colors.warning-soft}` — `#fcde7b`) / **Warning Softer** (`{colors.warning-softer}` — `#feeeb2`): Background tints for warning badges.

### Accent Families (Product Pages)
- **Purple** (`{colors.purple}` — `#952fc6`) / **Purple Deep** (`{colors.purple-deep}` — `#4d1368`) / **Purple Soft** (`{colors.purple-soft}` — `#f9d4ff`): The AI / software product accent family.
- **Fuchsia** (`{colors.fuchsia}` — `#d2308e`) / **Fuchsia Deep** (`{colors.fuchsia-deep}` — `#5d1337`): The creative / entertainment product accent.
- **Teal Soft** (`{colors.teal-soft}` — `#adfcf8`) / **Teal Deep** (`{colors.teal-deep}` — `#04554b`): The enterprise / networking product accent.
- **Blue Soft** (`{colors.blue-soft}` — `#cbf5ff`): The data-center / cloud product tint.

## Typography

### Font Family
A single proprietary face — **NVIDIA-NALA** — carries every element on the page: display headlines, body copy, navigation labels, button labels, captions. Two weights only: **400** (regular) and **700** (bold). There is no intermediate 500 or 600 weight in evidence. The fallback stack is `Arial, Helvetica, sans-serif` — both are metrically close enough to NALA to avoid catastrophic layout shift.

No monospaced face, no secondary serif. NALA alone.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 700 | 52px | -0.5px | Primary hero headline. |
| `{typography.display-lg}` | 36px | 700 | 40px | -0.3px | Section headlines in marketing bands. |
| `{typography.display-md}` | 24px | 700 | 28px | 0 | Card cluster headings, product category names. |
| `{typography.display-sm}` | 20px | 700 | 24px | 0 | Inline sub-headings within content sections. |
| `{typography.body-lg}` | 18px | 400 | 26px | 0 | Lead paragraph under hero headline. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph and nav link labels. |
| `{typography.body-md-strong}` | 16px | 700 | 24px | 0 | Bolded body, link labels in nav dropdowns. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary metadata, CTA label at measured size, utility nav links. |
| `{typography.body-sm-strong}` | 14px | 700 | 20px | 0 | Bold secondary labels, ghost button text. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Fine print, footer sub-links, legal lines. |
| `{typography.caption-strong}` | 12px | 700 | 16px | 0 | Badge labels, eyebrow labels. |
| `{typography.button-md}` | 14px | 700 | 20px | 0 | Primary CTA button (measured at 14px/700). |
| `{typography.button-lg}` | 16px | 700 | 20px | 0 | Large marketing CTA variant. |
| `{typography.nav-link}` | 16px | 400 | 20px | 0 | Global nav primary links (Products, Solutions, Industries). |

### Principles
- **Two weights, zero compromise.** NALA appears only at 400 and 700. The jump from regular to bold is the brand's only typographic emphasis mechanism — no medium, no semibold, no italic in evidence on the marketing surface.
- **Square geometry extends to type.** Headlines carry subtle negative tracking at display sizes but nothing as aggressive as a developer-platform brand. NALA is a relatively tight face; the tracking adjustment is restrained.
- **No mono face.** Unlike developer-platform brands, NVIDIA's global marketing surface uses zero monospaced typography. Code blocks and terminal text, where they appear, are still set in NALA or the system fallback stack.
- **Sentence-case throughout.** Navigation labels, headlines, button labels — all sentence-case. The brand does not use all-caps except sparingly in badge / eyebrow contexts.

### Note on Font Substitutes
NVIDIA-NALA is a proprietary custom face. Open-source substitutes:
- **NALA** — *Inter* (400 / 700) is the closest geometric sans substitute. *Barlow* (400 / 700) is a passable second choice with a similar condensed character.

## Layout

### Spacing System
- **Base unit**: The extracted scale clusters around 5, 7, 10, 11, 15, 20, 30 px — not a strict power-of-2 scale. The most frequent values (11 px × 528, 15 px × 510) confirm that 11 px and 15 px are the brand's principal micro-spacing units.
- **Tokens**: `{spacing.xxs}` 5 px · `{spacing.xs}` 7 px · `{spacing.sm}` 10 px · `{spacing.sm2}` 11 px · `{spacing.md}` 15 px · `{spacing.md2}` 20 px · `{spacing.lg}` 24 px · `{spacing.xl}` 30 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px · `{spacing.section}` 120 px.
- **CTA button padding**: extracted at `10px 12px` — maps to `{spacing.sm}` vertical / `{spacing.lg}` horizontal (closest match).
- **Button element padding**: extracted at `5px 0px 5px 15px` — the ghost/text-link button style, padding start only.
- **Section padding**: marketing bands use `{spacing.4xl}` to `{spacing.section}` top/bottom depending on band weight.

### Grid & Container
- **Max width**: approximately 1400 px content width; page bands stretch edge-to-edge in color, content centres with horizontal gutters of `{spacing.lg}` 24 px on desktop.
- **Column patterns**:
  - Nav bar: logo left, three dropdown links centred-left, utility links (Shop / Drivers / Support) centred-right, icon cluster far right.
  - Hero band: full-bleed imagery with headline overlay, single column.
  - Feature grid: typically 3-up or 4-up card grids at desktop.
  - Footer: multi-column link grid, 4–6 columns at desktop.

### Whitespace Philosophy
Photography does the decorative work; whitespace separates the photography from the typography. The brand's section rhythm is generous at the band level — `{spacing.section}` 120 px top/bottom on primary hero sections — but card interiors are pragmatic, not lavish. The page reads as dense and informational (it is a hardware brand's catalogue) rather than the spacious landing-page aesthetic of a developer SaaS. The operative principle is: let the image breathe, then pack the copy tightly underneath.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 600px | Full-bleed hero; nav collapses to hamburger; feature grids drop to 1-up. |
| Tablet | 600–959px | 2-up feature grids; nav may show partial links. |
| Desktop | 960–1199px | Full 3–4-up grids; full nav. |
| Wide | 1200–1399px | Container caps at ~1400 px. |
| Ultra-wide | ≥ 1400px | Content holds max-width; bands stretch edge-to-edge. |

#### Touch Targets
The primary CTA button at `10px 12px` padding meets minimum 44 px touch targets when combined with its 14 px label line-height. Zero-radius corners are preserved at all breakpoints — the square geometry does not soften on mobile.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero and footer bands. Polarity-flipped dark sections. |
| Level 1 — Hairline | `0 0 0 1px {colors.hairline}` border. | Default card chrome — the brand's "you can see this card" cue. |
| Level 2 — Subtle Drop | `0px 2px 4px rgba(0,0,0,0.08)` plus hairline border. | Slightly elevated cards and dropdown menus. |
| Level 3 — Panel | `0px 4px 12px rgba(0,0,0,0.12)` plus hairline border. | Nav dropdown panels, modal dialogs. |

NVIDIA's elevation system is flat by intent. The brand relies on dark-band / light-band contrast and full-bleed imagery to create depth — not shadow stacking. Cards are defined by hairline borders, not shadows. The engineering aesthetic demands clarity over softness.

### Decorative Depth
- **Photography as depth**: full-bleed GPU and data-center imagery at zero radius creates the brand's sense of scale and depth. No illustrated gradients.
- **Dark-band polarity flip**: switching from `{colors.canvas}` to `{colors.gray-950}` between sections is the brand's primary depth cue.
- **No decorative illustration or gradient**: unlike most technology brands, NVIDIA's global surface carries zero CSS gradient decoration.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Everything. Every button, every card, every input, every dropdown, every badge. |

The brand's radius vocabulary has exactly one entry: zero. This is not an omission — it is the brand's sharpest formal declaration. The extracted CTA button radius is 0 px. The extracted button element radius is 0 px. No soft corner appears anywhere in the deterministic extraction. Designers working in this system must resist the instinct to add border-radius. The square is the brand.

## Components

### Navigation

**`nav-bar`** — the global sticky top bar.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px bottom border `{colors.hairline}`, height 64 px, padding `{spacing.sm} {spacing.lg}`. Layout: NVIDIA logo (green eye mark + wordmark) far left; Products / Solutions / Industries dropdown links centred-left; Shop / Drivers / Support utility links centred-right; search icon, globe/region selector, and login icon cluster far right.

**`nav-link`** — the primary dropdown trigger links (Products, Solutions, Industries).
- Text `{colors.ink}`, set in `{typography.nav-link}` (16 px / 400), padding `{spacing.sm} {spacing.md}`, zero radius. No visible underline at rest; dropdown trigger caret implied.

**`nav-link-utility`** — the secondary utility links (Shop, Drivers, Support).
- Text `{colors.ink}`, set in `{typography.body-sm}` (14 px / 400), padding `{spacing.sm} {spacing.md}`, zero radius.

**`nav-icon-button`** — the search, globe, and login icon buttons in the nav cluster.
- Background transparent on `{colors.canvas}`, text `{colors.ink}`, zero radius, padding `{spacing.xs}`.

### Buttons

**`button-primary`** — the canonical NVIDIA Green CTA button.
- Background `{colors.primary}` (`#76b900`), text `{colors.on-primary}` (black), label in `{typography.button-md}` (14 px / 700), padding `{spacing.sm} {spacing.md}` (measured: `10px 12px`), zero radius. The brand's single conversion vehicle.

**`button-secondary`** — the outlined secondary action.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, label in `{typography.button-md}`, same padding, zero radius.

**`button-ghost`** — the text-only link-style button used for inline actions.
- Background transparent, text `{colors.ink}`, label in `{typography.body-sm-strong}`, padding `{spacing.xs} 0px` (left padding only, as extracted: `5px 0px 5px 15px`), zero radius. Renders as a bold link with no chrome.

### Cards & Containers

**`card-marketing`** — the standard content card on white canvas.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.xl}` 30 px, zero radius. Defined by a hairline border, not shadow.

**`card-dark`** — the polarity-flipped dark card used inside dark bands.
- Background `{colors.gray-950}`, text `{colors.canvas}`, padding `{spacing.xl}`, zero radius.

**`card-soft`** — the soft-tinted variant for secondary feature clusters.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.xl}`, zero radius.

### Page Bands

**`hero-band`** — the primary full-bleed dark hero.
- Background `{colors.ink}` or `{colors.gray-950}`, text `{colors.canvas}`, padding `{spacing.4xl} {spacing.lg}`. Interior: headline in `{typography.display-xl}`, lead in `{typography.body-lg}`, `button-primary` CTA. Hosts a full-bleed photography or video backdrop.

**`hero-band-light`** — the light-surface hero variant.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.lg}`. Same interior rhythm as `hero-band`.

**`feature-grid-band`** — a section hosting a product or feature card grid.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.section} {spacing.lg}`. Section headline in `{typography.display-lg}`; 3-up or 4-up card grid inside.

### Taxonomy

**`badge`** — the small flat label used for product categories and status indicators.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.caption-strong}`, padding `2px {spacing.xs}`, zero radius. The only inline element that carries NVIDIA Green other than the logo.

**`link-inline`** — body-copy inline hyperlinks.
- Text `{colors.link}` (`#0074df`), set in `{typography.body-md}`, underlined.

**`link-nav-bold`** — the bold black nav / dropdown links.
- Text `{colors.ink}`, set in `{typography.body-md-strong}`, no underline.

### Forms

**`form-input`** — the standard text input.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.gray-700}` border, body in `{typography.body-sm}`, padding `{spacing.xs} {spacing.sm}`, height 40 px, zero radius.

### Footer

**`footer`** — the global dark footer.
- Background `{colors.gray-950}`, text `{colors.canvas}`, padding `{spacing.2xl} {spacing.lg}`. Multi-column link grid; column headings in `{typography.body-sm-strong}` (white, 700); link rows in `{typography.caption}` (light gray, 400). The NVIDIA logo appears in white at the footer's top left.

**`footer-link`** — individual footer navigation links.
- Text `{colors.canvas}`, set in `{typography.caption}`, no underline at rest, underline on hover.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (`#76b900`) exclusively for the primary CTA button and the logo mark. NVIDIA Green is the brand's single most protected asset.
- Use `{rounded.none}` (0 px) on every interactive element without exception. The square geometry is the brand's hardware-engineering posture.
- Set every headline in `{typography.display-*}` at weight 700, sentence-case. The brand does not use all-caps headlines.
- Use full-bleed photography and video as the primary decorative system. Let the image carry the visual weight.
- Flip sections from `{colors.canvas}` to `{colors.gray-950}` when a dark band is needed. This polarity shift IS the depth system.
- Pair `button-primary` (green fill) with `button-secondary` (outlined) or `button-ghost` (text-only) for CTA hierarchies.
- Use only weights 400 and 700 from NVIDIA-NALA. There is no medium or semibold in the brand's working weight set.

### Don't
- Don't add border-radius to any element. Even 2 px feels wrong. Zero is non-negotiable.
- Don't use `{colors.primary}` as a text color, a background for sections, or a border tint. Green belongs on the button and the logo only.
- Don't introduce a gradient as decoration. NVIDIA's marketing surface is gradient-free.
- Don't set body copy at weight 500 or 600. The brand jumps from 400 to 700 with nothing in between.
- Don't use the accent families (purple, fuchsia, teal) on the global marketing surface. They belong on product-specific landing pages.
- Don't soften the dark band by using `{colors.gray-800}` instead of `{colors.gray-950}`. The dark section should be near-black, not charcoal.
- Don't add drop-shadows to cards. Hairline borders define the card edge; shadows introduce a softness the brand rejects.
