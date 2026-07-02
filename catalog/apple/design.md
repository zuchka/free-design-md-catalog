---
version: alpha
name: Apple
description: "Apple's design language is an exercise in material restraint — a near-white canvas of soft silver-gray, a single near-black ink, and one link-blue accent that does all the interactive work. The surface is the product photography: vivid device renders on muted f5f5f7 cards, shot against a body background just a shade lighter. SF Pro — Apple's own optical-size-aware system font — carries every word at precisely engineered weights and letter-spacings, its h1 tracking barely negative, its sub-heads at 12 px doing the quiet work of categorisation. Buttons are full pills (50% radius), cards are stadium-oval slabs (980 px radius), and the entire spacing grammar lives in a compact 7–22 px staircase. There are no decorative gradients, no illustrative chrome, no drop-shadows on cards — only typography, white space, and the devices themselves."
colors:
  primary: "#1d1d1f"
  on-primary: "#ffffff"
  ink: "#1d1d1f"
  body: "#6e6e73"
  mute: "#86868b"
  hairline: "#d2d2d7"
  canvas: "#ffffff"
  canvas-soft: "#f5f5f7"
  canvas-nav: "#fafafa"
  link: "#0066cc"
  link-hover: "#004499"
  success: "#28cd41"
  error: "#ff3b30"
  warning: "#ff9f0a"
  button-frosted-bg: rgba(210, 210, 215, 0.64)
  button-frosted-fg: rgba(0, 0, 0, 0.48)
  overlay: rgba(0, 0, 0, 0.48)
typography:
  display-xl:
    fontFamily: '"SF Pro Display", "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 56px
    fontWeight: 600
    lineHeight: 60px
    letterSpacing: -0.5px
  display-lg:
    fontFamily: '"SF Pro Display", "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 40px
    fontWeight: 600
    lineHeight: 44px
    letterSpacing: 0px
  display-md:
    fontFamily: '"SF Pro Display", "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 34px
    fontWeight: 600
    lineHeight: 50px
    letterSpacing: -0.374px
  display-sm:
    fontFamily: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 24px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: 0px
  body-lg:
    fontFamily: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 19px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 25px
    letterSpacing: 0px
  body-sm:
    fontFamily: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0px
  caption:
    fontFamily: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: -0.12px
  caption-strong:
    fontFamily: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: -0.12px
  eyebrow:
    fontFamily: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: -0.12px
  button-md:
    fontFamily: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 25px
    letterSpacing: 0px
  button-sm:
    fontFamily: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0px
  nav-link:
    fontFamily: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: -0.12px
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 18px
  xl: 20px
  card: 980px
  button: 50%
  full: 9999px
spacing:
  xxs: 7px
  xs: 8px
  sm: 9px
  md: 11px
  lg: 15px
  xl: 22px
  2xl: 40px
  3xl: 44px
  4xl: 48px
  5xl: 84px
  6xl: 88px
  section: 120px
components:
  nav-bar:
    backgroundColor: "{colors.canvas-nav}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 44px
    padding: 0px {spacing.xl}
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.nav-link}"
    padding: "{spacing.xs} {spacing.md}"
  nav-search-icon:
    textColor: "{colors.ink}"
    padding: "{spacing.xs}"
  nav-bag-icon:
    textColor: "{colors.ink}"
    padding: "{spacing.xs}"
  button-primary:
    backgroundColor: "{colors.link}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.link}"
    borderColor: "{colors.link}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"
  button-frosted:
    backgroundColor: "{colors.button-frosted-bg}"
    textColor: "{colors.button-frosted-fg}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  link-chevron:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  card-product:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl} {spacing.xl}"
  card-product-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl} {spacing.xl}"
  hero-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.4xl} {spacing.xl}"
  eyebrow-label:
    textColor: "{colors.body}"
    typography: "{typography.eyebrow}"
  product-headline:
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
  product-subhead:
    textColor: "{colors.body}"
    typography: "{typography.display-sm}"
  footer:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    padding: "{spacing.xl} {spacing.xl}"
  footer-link:
    textColor: "{colors.body}"
    typography: "{typography.caption}"
  footer-legal:
    textColor: "{colors.mute}"
    typography: "{typography.caption}"
  badge-new:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.md}"
  ex-pricing-tier:
    description: Default product-tier card. Uses canvas-soft surface with stadium-oval radius, no border.
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl} {spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured product tier — polarity-flipped ink surface with on-primary text.
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl} {spacing.xl}"
  ex-product-selector:
    description: Capacity / colour selector card — compact canvas-soft slab with caption typography.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.md} {spacing.xl}"
  ex-cart-drawer:
    description: Bag summary overlay — white surface with hairline dividers between line items.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row for in-app surfaces. Active state uses link-blue left indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.link}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  ex-data-table-cell:
    description: Spec-comparison table chrome. Header uses eyebrow/caption-strong; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.eyebrow}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.md} {spacing.xl}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in card. Canvas surface with hairline border and body-md inputs inside.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.3xl} {spacing.xl}"
  ex-modal-card:
    description: Modal dialog surface — white with xl rounding and hairline ring.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.3xl} {spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame — generous canvas-soft surface, body-lg caption.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.5xl} {spacing.xl}"
    captionTypography: "{typography.body-lg}"
  ex-toast:
    description: Toast notification — frosted-glass pill, body-sm text.
    backgroundColor: "{colors.button-frosted-bg}"
    rounded: "{rounded.full}"
    padding: "{spacing.md} {spacing.xl}"
    typography: "{typography.body-sm}"
---
## Overview

Apple's marketing surface is as controlled as the products it photographs. The page body sits on `{colors.canvas-soft}` — a barely-there silver-gray (`#f5f5f7`) that reads as white in ambient light but lets the product imagery breathe against a non-competing ground. Pure white (`{colors.canvas}`) is reserved for the global nav and specific card surfaces that need maximum contrast. Near-black ink (`{colors.ink}`, `#1d1d1f`) carries all text on light surfaces; it reverses cleanly to white when a card flips to the dark treatment. There are no decorative gradients, no ambient glows, no illustrative chrome — the device photography IS the decoration, and everything else gets out of its way.

SF Pro — Apple's own optical-size-aware system typeface — handles every word on the page. The same font stack appears at 12 px caption scale and 56 px display scale; weight 600 for anything hierarchically dominant, 400 for body and nav. Letter-spacing is either precisely negative at display scale (`-0.374 px` at 34 px, `-0.5 px` at 56 px) or neutral at reading sizes. The brand never uses all-caps outside of the most subordinate label contexts, never uses positive tracking, and never reaches for a decorative face.

Two radius values define the shape grammar: `50%` (full pill) for every interactive button and CTA, and `980 px` for product cards — a stadium-oval so large on a standard card width that it reads as a smooth horizontal superellipse. These two shapes coexist deliberately at every scroll depth and never bleed into each other's context.

The link-blue (`{colors.link}`, `#0066cc`) is the single accent doing all the interactive and conversion work. It appears on "Learn more" and "Shop" pills, all inline links, and occasionally as a text CTA without a pill shape. Outside that single accent, the brand's colour palette is a three-step gray series from near-white to near-black.

## Colors

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The global nav background and white-treatment card surfaces.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f5f5f7`): The default page body background and the standard product-card surface. Every iPhone hero section sits on this tone.
- **Canvas Nav** (`{colors.canvas-nav}` — `#fafafa`): The nav bar's slightly warm off-white, distinct from both canvas tones to give the nav a stable visual layer.

### Text
- **Ink** (`{colors.ink}` — `#1d1d1f`): Every headline and dark-mode-off body paragraph. The closest the brand gets to pure black without being flat neutral.
- **Body** (`{colors.body}` — `#6e6e73`): Sub-headlines, eyebrow labels, secondary descriptive copy, and footer nav links.
- **Mute** (`{colors.mute}` — `#86868b`): The quietest text layer — legal fine print, footnotes, the most de-emphasised footer content.

### Interactive
- **Link** (`{colors.link}` — `#0066cc`): The brand's singular blue accent. Every CTA button fill, every "Learn more" inline link, every "Shop X" pill. All conversion logic lives in this token.
- **Link Hover** (`{colors.link-hover}` — `#004499`): The pressed/active tone of `{colors.link}`. Darker, not lighter — the brand doesn't lighten on press.

### Dividers
- **Hairline** (`{colors.hairline}` — `#d2d2d7`): Section dividers, footer rule lines, comparison-table row separators.

### Frosted / Overlay
- **Button Frosted Bg** (`{colors.button-frosted-bg}` — `rgba(210, 210, 215, 0.64)`): The translucent fill for utility buttons rendered over imagery or video backdrops — the measured extraction confirms this exact value on button elements.
- **Button Frosted Fg** (`{colors.button-frosted-fg}` — `rgba(0, 0, 0, 0.48)`): The semi-transparent label color inside frosted-button contexts.

### Semantic
- **Success** (`{colors.success}` — `#28cd41`): System-standard green for confirmation states.
- **Error** (`{colors.error}` — `#ff3b30`): System-standard red for destructive actions and validation errors.
- **Warning** (`{colors.warning}` — `#ff9f0a`): System-standard amber for caution states.

## Typography

### Font Family
A single proprietary face — SF Pro — carries the entire page. It appears in two optical-size variants (`SF Pro Display` for large headlines, `SF Pro Text` for reading sizes) but resolves to the same stack: `"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif`. There is no second face, no monospace, no display serif. The brand's typographic voice is entirely in spacing, weight selection, and optical-size tuning — not in font variety.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 600 | 60px | -0.5px | Full-bleed hero headline at the largest marketing moments. |
| `{typography.display-lg}` | 40px | 600 | 44px | 0px | Primary section headline — "Meet the latest iPhone lineup." |
| `{typography.display-md}` | 34px | 600 | 50px | -0.374px | Hero sub-headline and section-opening product names. Extracted directly. |
| `{typography.display-sm}` | 24px | 600 | 28px | 0px | Card-cluster sub-headings and in-card product descriptors. |
| `{typography.body-lg}` | 19px | 400 | 28px | 0px | Lead paragraph under section headlines on marketing pages. |
| `{typography.body-md}` | 17px | 400 | 25px | 0px | Default body paragraph and button label text. Extracted as the button font-size. |
| `{typography.body-sm}` | 15px | 400 | 22px | 0px | Secondary body, card descriptor copy, nav sub-item text. |
| `{typography.caption}` | 12px | 400 | 16px | -0.12px | Footer column links, legal text, metadata. Extracted h2 size. |
| `{typography.caption-strong}` | 12px | 600 | 16px | -0.12px | Eyebrow labels above product names, small category labels. |
| `{typography.eyebrow}` | 12px | 600 | 16px | -0.12px | Section eyebrow categorisation labels like "New" or product category identifiers. |
| `{typography.button-md}` | 17px | 400 | 25px | 0px | Primary and secondary pill button labels at marketing scale. |
| `{typography.button-sm}` | 15px | 400 | 22px | 0px | Smaller contextual button labels inside card CTAs. |
| `{typography.nav-link}` | 12px | 400 | 16px | -0.12px | Global nav item labels — Store, Mac, iPad, iPhone, etc. |

### Principles
- **One face, all scales.** SF Pro's optical-size interpolation means the same font-family declaration looks right at 12 px caption and 56 px display without weight-switching tricks.
- **Precise negative tracking at display scale.** The `-0.374 px` at 34 px and implied tighter tracking at larger sizes are non-negotiable — reverting to 0 makes the headlines feel loose and generic.
- **Weight ceiling of 600.** The brand never uses 700 or 800. "Bold" in Apple's voice is 600, not heavier.
- **No all-caps in body context.** Eyebrow labels can sit at 12 px strong, but the brand avoids all-caps transforms in marketing body copy.
- **Sentence-case product names.** Headlines like "Meet the latest iPhone lineup." use sentence case and are punctuated with a period at hero scale.

### Note on Font Substitutes
SF Pro is a proprietary Apple system font, not available to third parties for web embedding. Open-source substitutes:
- **Display and body** — *Inter* (400 / 600) with `font-feature-settings: "cv01", "cv02"` is the closest geometric-neutral match. *Plus Jakarta Sans* is a passable second.

## Layout

### Spacing System
- **Base unit**: 7–8 px (the brand's smallest extracted values are 7 px and 8 px, not the conventional 4 px base). The scale is compact and non-linear: 7 / 8 / 9 / 11 / 15 / 22 px in the extracted values, extending to 40 / 44 / 48 / 84 / 88 px for section and component padding.
- **Tokens**: `{spacing.xxs}` 7 px · `{spacing.xs}` 8 px · `{spacing.sm}` 9 px · `{spacing.md}` 11 px · `{spacing.lg}` 15 px · `{spacing.xl}` 22 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 44 px · `{spacing.4xl}` 48 px · `{spacing.5xl}` 84 px · `{spacing.6xl}` 88 px · `{spacing.section}` 120 px.
- **Card interior padding**: product cards use `{spacing.3xl}` (44 px) top/bottom and `{spacing.xl}` (22 px) horizontal — wide enough for the stadium-oval radius to show cleanly.
- **Inline button padding**: extracted as `{spacing.md}` (11 px) vertical and `{spacing.xl}` (22 px) horizontal for standard pill CTAs.
- **Section rhythm**: full-bleed product bands use `{spacing.4xl}` to `{spacing.6xl}` top/bottom vertical padding; the tallest hero bands can reach `{spacing.section}`.

### Grid & Container
- **Max width**: ~980 px content column (Apple's canonical `980px` grid, matching the card radius value — a deliberate coincidence in the design language). Wide marketing modules break to full-bleed.
- **Column patterns**:
  - Product hero: single centred column, text above image.
  - Product grid: 2-up or 3-up of stadium-oval cards at desktop, 1-up at mobile.
  - Nav: flex row of 11 items centred, search + bag icons right-aligned.
  - Footer: 5-column link grid at desktop, stacked at mobile.

### Whitespace Philosophy
Apple uses whitespace as the primary separating mechanism — no visible dividers between most sections, just vertical breathing room. Card interiors are generous: the 980 px radius demands wide padding or the corners appear to bite into the content. The nav is the most compact surface on the page at 44 px tall; every other surface gives the photography room to command. The page reads as deliberate emptiness punctuated by product beauty shots.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed product photography bands, page body, hero sections. |
| Level 1 — Surface Contrast | Background color shift from `{colors.canvas}` to `{colors.canvas-soft}`. No shadow. | Product cards — the color shift alone separates card from page without any shadow. |
| Level 2 — Subtle Inset | `1px solid {colors.hairline}` inset border only. | Footer dividers, comparison-table row separators. |
| Level 3 — Nav Float | Subtle blur-backed frosted surface (the nav) with no explicit shadow. | Global nav bar — background opacity gives the impression of floating. |

The brand does not use drop-shadows on product cards. Elevation is expressed through surface-color contrast and the physical shape of the 980 px stadium-oval alone. This is unusually flat even by modern standards — Apple trusts the photography to create all the visual mass.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero bands and footer. |
| `{rounded.xs}` | 4px | Tightest UI chrome — small inline tags if present. |
| `{rounded.sm}` | 8px | In-app utility surfaces, drawer edges. |
| `{rounded.md}` | 12px | Medium UI containers. |
| `{rounded.lg}` | 18px | Larger overlay panels. |
| `{rounded.xl}` | 20px | Modal dialogs and sign-in cards. |
| `{rounded.card}` | 980px | Every product card on the page — the brand's signature stadium-oval. |
| `{rounded.button}` | 50% | Every pill button and CTA — Learn more, Shop iPhone, frosted utility buttons. |
| `{rounded.full}` | 9999px | Badge pills, small tag elements. |

The two dominant shapes — `{rounded.button}` (50% pill) and `{rounded.card}` (980 px stadium-oval) — are the entire shape vocabulary of the page. No other radius appears at marketing scale.

## Components

### Navigation

**`nav-bar`** — the slim 44 px global nav.
- Background `{colors.canvas-nav}`, height 44 px, padding `0px {spacing.xl}`. Left: Apple logo. Centre: full link row in `{typography.nav-link}` (12 px / 400) in `{colors.body}`. Right: search + bag icons. No border — the background shift from the page body is the only separator.

**`nav-link`** — individual nav item.
- Text `{colors.body}`, set in `{typography.nav-link}`, padding `{spacing.xs} {spacing.md}`. No underline, no visible indicator in default state; hover/active state adds an underline.

### Buttons & CTAs

**`button-primary`** — the filled blue pill CTA.
- Background `{colors.link}` (`#0066cc`), text `{colors.on-primary}`, label in `{typography.button-md}` (17 px / 400), shape `{rounded.button}` (50%), padding `{spacing.md} {spacing.xl}`. Visible as "Learn more" throughout the iPhone section.

**`button-secondary`** — the outlined blue pill CTA.
- Background `{colors.canvas}`, text `{colors.link}`, 1 px solid `{colors.link}` border, same typography and shape as `button-primary`. Visible as "Shop iPhone."

**`button-frosted`** — the translucent utility pill rendered over images or dark surfaces.
- Background `{colors.button-frosted-bg}` (`rgba(210, 210, 215, 0.64)`), text `{colors.button-frosted-fg}` (`rgba(0, 0, 0, 0.48)`), label in `{typography.button-md}`, shape `{rounded.button}`. Extracted directly from live button elements.

**`link-inline`** — body-copy inline links.
- Text `{colors.link}`, set in `{typography.body-md}`, no underline by default (matches extraction `textDecoration: none`), underline on hover.

**`link-chevron`** — the "Learn more ›" text link pattern common in Apple product pages.
- Text `{colors.link}`, set in `{typography.body-md}`. No button shape — pure text + chevron character.

### Cards & Content Surfaces

**`card-product`** — the standard iPhone / product showcase card.
- Background `{colors.canvas-soft}` (`#f5f5f7`), text `{colors.ink}`, padding `{spacing.3xl} {spacing.xl}`, shape `{rounded.card}` (980 px). No shadow. Product photography centred inside. Extracted directly from the card component.

**`card-product-dark`** — the polarity-flipped dark-surface variant (used for certain Pro or premium products).
- Background `{colors.ink}`, text `{colors.on-primary}`, same padding and shape as `card-product`.

**`hero-band`** — the page hero section.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Headline in `{typography.display-md}` centred, sub-head in `{typography.body-lg}`, then a CTA row of `button-primary` + `button-secondary` centred below. Product photography below the text cluster, full-width within the band.

**`product-headline`** — the section-opening product name display.
- Text `{colors.ink}`, set in `{typography.display-lg}` (40 px / 600). Centred on the card or band.

**`product-subhead`** — the descriptor line below a product name.
- Text `{colors.body}`, set in `{typography.display-sm}` (24 px / 600). Always below `product-headline`.

**`eyebrow-label`** — the small category label above a product name ("New", category descriptor).
- Text `{colors.body}`, set in `{typography.eyebrow}` (12 px / 600 / `{colors.body}`).

### Footer

**`footer`** — the multi-column global footer.
- Background `{colors.canvas-soft}`, text `{colors.body}`, padding `{spacing.xl} {spacing.xl}`, typography `{typography.caption}` (12 px / 400). Hairline rule at the top separating it from the page.

**`footer-link`** — individual footer column link.
- Text `{colors.body}`, set in `{typography.caption}`. Underline on hover only.

**`footer-legal`** — the fine-print text at the very bottom of the footer.
- Text `{colors.mute}`, set in `{typography.caption}`. Copyright, footnote markers, disclaimer copy.

### Badges

**`badge-new`** — the small "New" or status badge.
- Background `{colors.canvas-soft}`, text `{colors.body}`, set in `{typography.caption-strong}`, shape `{rounded.full}`, padding `{spacing.xs} {spacing.md}`.

## Do's and Don'ts

### Do
- Use `{rounded.button}` (50% pill) for every interactive CTA and `{rounded.card}` (980 px) for every product card. These two shapes are the entire shape grammar.
- Let product photography carry all the visual weight. Whitespace and surface-color contrast do the structural work; decoration is the device itself.
- Set display headlines in `{typography.display-md}` or larger at weight 600 with the precise negative letter-spacing. The `-0.374 px` at 34 px is not optional.
- Use `{colors.link}` (`#0066cc`) as the sole interactive accent. Every conversion CTA and every inline link uses this token and nothing else.
- Keep the nav at 44 px. That height is a deliberate nod to Apple's own HIG touch-target spec and must not inflate.
- Use `{colors.canvas-soft}` (`#f5f5f7`) as the page body background — not pure white. The near-white gives product photos their characteristic "floating on silver" quality.
- Use the frosted-glass button token (`{colors.button-frosted-bg}`) only when a button appears over imagery or a non-solid background.

### Don't
- Don't introduce drop-shadows on product cards. The brand's entire depth system is surface-color contrast plus shape — shadows would contradict the material restraint.
- Don't use a second typeface. SF Pro is the only face; introducing a display serif or a geometric alternate from another family breaks the system.
- Don't mix the 980 px card radius with the 50% button radius on the same element. They are context-specific and never combined.
- Don't use positive letter-spacing on any text. The brand tracks negative or neutral — positive tracking reads as a different brand entirely.
- Don't promote weight to 700 or 800. The display ceiling is 600. Heavier weights are not in the Apple marketing vocabulary.
- Don't use `{colors.ink}` for inline link text. That token is for body copy; `{colors.link}` is the only correct link color.
- Don't use decorative gradients or patterned backgrounds. The near-white canvas is intentionally empty — photography is the only visual decoration.
