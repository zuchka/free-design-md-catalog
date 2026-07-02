---
version: alpha
name: Together AI Design System
description: Together AI is an AI-native cloud platform whose visual identity is built on a stark black-and-white duet punctuated by a vivid three-color brand accent system — a soft lavender-purple, a hot magenta, and a punchy construction-orange — that appear most dramatically in the 3-D abstract hero illustration and the colorful logomark. The surface is near-pure white canvas with pure-black ink text, carrying a single geometric sans-serif face ('The Future') at weight 500 for display and 400 for body. Headlines track aggressively negative at display scale. Buttons and cards share a tight 3.56 px radius — deliberately near-square, never pill — giving the UI a precise, engineering-tool character. The page reads less like a startup and more like a research institution that also ships fast.
colors:
  primary: "#000000"
  on-primary: "#ffffff"
  ink: "#000000"
  body: "#000000"
  mute: "#0006"
  hairline: "#e5e5e5"
  canvas: "#ffffff"
  canvas-soft: "#f7f7f7"
  canvas-dark: "#010120"
  on-dark: "#ffffff"
  brand-purple: "#caaef5"
  brand-magenta: "#ef2cc1"
  brand-orange: "#fc4c02"
  card-glass: rgba(255, 255, 255, 0.08)
  card-glass-strong: rgba(255, 255, 255, 0.12)
  link: "#000000"
  success: "#22c55e"
  error: "#ef4444"
  warning: "#f59e0b"
typography:
  display-xl:
    fontFamily: '"The Future", Arial, sans-serif'
    fontSize: 56.8889px
    fontWeight: 500
    lineHeight: 62.5778px
    letterSpacing: -1.70667px
  display-lg:
    fontFamily: '"The Future", Arial, sans-serif'
    fontSize: 35.5556px
    fontWeight: 500
    lineHeight: 42.6667px
    letterSpacing: -0.711111px
  display-md:
    fontFamily: '"The Future", Arial, sans-serif'
    fontSize: 28.4444px
    fontWeight: 500
    lineHeight: 34px
    letterSpacing: -0.5px
  display-sm:
    fontFamily: '"The Future", Arial, sans-serif'
    fontSize: 21.3333px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: -0.3px
  body-lg:
    fontFamily: '"The Future", Arial, sans-serif'
    fontSize: 17.7778px
    fontWeight: 400
    lineHeight: 26px
  body-md:
    fontFamily: '"The Future", Arial, sans-serif'
    fontSize: 14.2222px
    fontWeight: 400
    lineHeight: 22px
  body-md-strong:
    fontFamily: '"The Future", Arial, sans-serif'
    fontSize: 14.2222px
    fontWeight: 500
    lineHeight: 22px
  body-sm:
    fontFamily: '"The Future", Arial, sans-serif'
    fontSize: 12.4444px
    fontWeight: 400
    lineHeight: 18px
  body-sm-strong:
    fontFamily: '"The Future", Arial, sans-serif'
    fontSize: 12.4444px
    fontWeight: 500
    lineHeight: 18px
  caption:
    fontFamily: '"The Future", Arial, sans-serif'
    fontSize: 10.6667px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: '"The Future", Arial, sans-serif'
    fontSize: 14.2222px
    fontWeight: 500
    lineHeight: 20px
  button-lg:
    fontFamily: '"The Future", Arial, sans-serif'
    fontSize: 17.7778px
    fontWeight: 500
    lineHeight: 24px
  label-caps:
    fontFamily: '"The Future", Arial, sans-serif'
    fontSize: 10.6667px
    fontWeight: 500
    lineHeight: 14px
    letterSpacing: 0.8px
rounded:
  none: 0px
  button: 3.55556px
  card: 3.55556px
  sm: 3.55556px
  md: 7.11111px
  lg: 14.2222px
  pill: 9999px
spacing:
  xxs: 5.33333px
  xs: 7.11111px
  sm: 10.6667px
  md: 14.2222px
  lg: 17.7778px
  xl: 21.3333px
  2xl: 28.4444px
  3xl: 35.5556px
  4xl: 42.6667px
  5xl: 56.8889px
  6xl: 71.1111px
  7xl: 88.8889px
components:
  announcement-bar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.lg}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    height: 64px
    padding: "{spacing.sm} {spacing.xl}"
    borderBottom: "{colors.hairline}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-signin:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md-strong}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
  nav-cta-contact:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md-strong}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"
    borderColor: "{colors.primary}"
  button-glass:
    backgroundColor: "{colors.card-glass-strong}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.7xl} {spacing.xl}"
  card-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg} {spacing.3xl}"
    borderColor: "{colors.hairline}"
  card-glass:
    backgroundColor: "{colors.card-glass}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg} {spacing.3xl}"
  card-feature:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl} {spacing.xl}"
    borderColor: "{colors.hairline}"
  hero-illustration:
    description: The 3-D abstract sculptural illustration that anchors the hero — composed of floating disc/arch forms in brand-purple, brand-magenta, and brand-orange on a light-blue atmospheric ground. Treated as a full-bleed image asset; never miniaturised.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
  logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.lg} {spacing.xl}"
  label-tag:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.sm}"
  section-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.7xl} {spacing.xl}"
  section-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    padding: "{spacing.7xl} {spacing.xl}"
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.5xl} {spacing.xl}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
    height: 42px
  pricing-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl} {spacing.xl}"
    borderColor: "{colors.hairline}"
  pricing-card-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl} {spacing.xl}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  ex-pricing-tier:
    description: Default pricing tier card on white canvas with hairline border.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured tier — polarity-flipped to pure-black fill with white text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: Platform capability summary card — re-purposed for inference / fine-tuning / GPU cluster tiers.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    description: Subscription summary — line items per compute tier, not a literal e-commerce cart.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row inside an AI-platform app shell. Active state uses brand primary as left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: Data table cell chrome. Header uses label-caps typography; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.label-caps}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card. White canvas with form-input primitives and a primary CTA.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog — white canvas surface with hairline border and subtle drop shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame. Canvas-soft background with generous padding.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.5xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — white card surface with near-square radius and body-sm text.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Together AI is a full-stack AI infrastructure company — inference, fine-tuning, model shaping, and dedicated GPU clusters — wearing the visual identity of a precision research instrument. The page is almost entirely black-and-white: `{colors.canvas}` (#ffffff) body, `{colors.ink}` (#000000) text, a tight near-square `{rounded.button}` / `{rounded.card}` 3.56 px radius on every interactive surface. The brand's only concession to color is a trio of vivid accents — `{colors.brand-purple}` lavender, `{colors.brand-magenta}` hot magenta, and `{colors.brand-orange}` construction orange — which appear almost exclusively inside the 3-D abstract hero illustration and the flame-colored logomark. Those accents are never used as button fills or card backgrounds on the light-mode marketing surface; they are the decoration system, and the illustration is where they live.

The typeface is a single proprietary geometric sans, "The Future," deployed at weight 500 for all display copy and 400 for body. There is no secondary or monospace face. Headlines track aggressively negative (`-1.71 px` at 56.89 px hero, `-0.71 px` at 35.56 px section) — the negative tracking is the brand's typographic signature, not an accident. All headline copy is sentence-case.

Surface logic is binary: white canvas for the marketing body, near-black `{colors.canvas-dark}` (#010120) for any section that flips polarity (a dark band used for platform-depth storytelling), and translucent glass cards (`rgba(255,255,255,0.08)`) for content that sits on the dark-band sections. There is no intermediate gray surface — the brand does not do soft-canvas steps the way neutral-palette platforms do.

Buttons are deliberately blunt — near-square 3.56 px radius at both marketing and nav scale. The primary CTA is solid black-fill white-text; the secondary is white-fill black-outline. No pill shapes appear in the navigation or in any observed CTA cluster. This is the anti-pill brand.

## Colors

### Brand Accents
- **Brand Purple** (`{colors.brand-purple}` — `#caaef5`): The lavender hue composing the disc/arch forms in the hero illustration. Also the background tint of the Together AI logomark gradient. Never used as a button or text color on the marketing surface.
- **Brand Magenta** (`{colors.brand-magenta}` — `#ef2cc1`): The hot-pink accent in the hero illustration and the logomark. Signals the "model shaping" / research edge of the platform. Not used as a background fill anywhere else on the page.
- **Brand Orange** (`{colors.brand-orange}` — `#fc4c02`): The construction-orange accent — the sharpest, warmest stop in the hero sculpture. Appears in the logomark's lower flame. Not used outside illustration and brand mark contexts.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The default page background and card surface. Every section on the light side of the page sits on pure white.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f7f7f7`): A barely-off-white surface for inset feature cards and secondary sections.
- **Canvas Dark** (`{colors.canvas-dark}` — `#010120`): The deep navy-black used in polarity-flipped dark bands. Extracted from `--brand--dark-blue`.
- **Card Glass** (`{colors.card-glass}` — `rgba(255,255,255,0.08)`): Translucent frosted card surface used when cards sit on dark sections.
- **Card Glass Strong** (`{colors.card-glass-strong}` — `rgba(255,255,255,0.12)`): The slightly more opaque glass variant, used for button surfaces on dark backgrounds.

### Text
- **Ink** (`{colors.ink}` — `#000000`): All headings and body text on light surfaces.
- **Mute** (`{colors.mute}` — `#0006`): 40% black — secondary text, logo-strip labels, fine print. Extracted from `--text--black-40`.
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — `#ffffff`): All text on black-fill or dark-band surfaces.

### Semantic
- **Hairline** (`{colors.hairline}` — `#e5e5e5`): 1 px dividers, card borders, input borders.
- **Link** (`{colors.link}` — `#000000`): Inline links match the ink color; underline is the differentiator.
- **Success** (`{colors.success}` — `#22c55e`): Status indicators (inferred; not prominently observed on marketing surface).
- **Error** (`{colors.error}` — `#ef4444`): Validation and destructive-state color.
- **Warning** (`{colors.warning}` — `#f59e0b`): Caution indicators.

## Typography

### Font Family
A single proprietary geometric sans — **"The Future"** — carries the entire system. Weight 500 for display and interactive labels; weight 400 for body. There is no secondary face and no monospaced face. The face is loaded with Arial as the system fallback. The brand's typographic voice is built on a single variable: tracking. At display scale the negative tracking is so pronounced it defines the headline character; at body scale tracking is neutral.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56.89px | 500 | 62.58px | -1.71px | Hero headline ("Build what's next / on the AI Native Cloud"). |
| `{typography.display-lg}` | 35.56px | 500 | 42.67px | -0.71px | Section headlines ("The Together AI Platform"). |
| `{typography.display-md}` | 28.44px | 500 | 34px | -0.5px | Sub-section callout heads. |
| `{typography.display-sm}` | 21.33px | 500 | 28px | -0.3px | Card cluster headlines. |
| `{typography.body-lg}` | 17.78px | 400 | 26px | 0 | Hero lead ("Full-stack AI platform, powered by cutting-edge research."). |
| `{typography.body-md}` | 14.22px | 400 | 22px | 0 | Default body paragraphs, nav links, button labels. |
| `{typography.body-md-strong}` | 14.22px | 500 | 22px | 0 | Nav CTA labels, emphasized inline body. |
| `{typography.body-sm}` | 12.44px | 400 | 18px | 0 | Logo strip labels, footer body, secondary copy. |
| `{typography.body-sm-strong}` | 12.44px | 500 | 18px | 0 | Small emphasis labels. |
| `{typography.caption}` | 10.67px | 400 | 16px | 0 | Fine print, metadata labels. |
| `{typography.label-caps}` | 10.67px | 500 | 14px | 0.8px | Section eyebrows and category tags (the only positively-tracked text in the system). |
| `{typography.button-md}` | 14.22px | 500 | 20px | 0 | All CTA button labels. |
| `{typography.button-lg}` | 17.78px | 500 | 24px | 0 | Large marketing-scale button labels. |

### Principles
- **Negative tracking is the voice.** Display sizes use `-1.71` to `-0.3 px` tracking. Reverting to default tracking immediately softens the brand's engineering character.
- **Sentence-case throughout.** The brand does not use all-caps headlines. The only positive-tracking text is the `{typography.label-caps}` eyebrow token.
- **One face does everything.** "The Future" carries display, body, button, and caption. Introducing a second face — especially a monospace or serif — contradicts the brand's austere system.
- **Weight 500 is the display ceiling.** The brand never goes to 600, 700, or heavier. The face reads as deliberately restrained.

### Note on Font Substitutes
"The Future" is a proprietary face. Open-source substitutes:
- **Geometric sans** — *DM Sans* (500 / 400) or *Outfit* are the closest stylistic matches for the rounded-geometric character. *Inter* is acceptable as a utility fallback but loses the distinctive letterform softness.

## Layout

### Spacing System
- **Base unit**: 1.77778 px (the page appears to use a sub-4-px base, with the smallest measured gap at 5.33 px ≈ 3 × 1.78 px). For practical token naming, `{spacing.xxs}` is set at 5.33 px as the floor.
- **Tokens**: `{spacing.xxs}` 5.33 px · `{spacing.xs}` 7.11 px · `{spacing.sm}` 10.67 px · `{spacing.md}` 14.22 px · `{spacing.lg}` 17.78 px · `{spacing.xl}` 21.33 px · `{spacing.2xl}` 28.44 px · `{spacing.3xl}` 35.56 px · `{spacing.4xl}` 42.67 px · `{spacing.5xl}` 56.89 px · `{spacing.6xl}` 71.11 px · `{spacing.7xl}` 88.89 px.
- **Section padding**: marketing bands use `{spacing.7xl}` (88.89 px) top/bottom on desktop. Hero band needs extra room for the illustration.
- **Card interior padding**: glass cards and feature cards use `{spacing.lg}` top/bottom and `{spacing.3xl}` left/right — matching the extracted `17.7778px 35.5556px` measurement.
- **Inline gap**: nav links, button clusters, and chip rows use `{spacing.sm}` to `{spacing.md}` between siblings.

### Grid & Container
- **Max width**: approximately 1280 px; content centres with horizontal gutters of `{spacing.xl}` at desktop, `{spacing.md}` at mobile.
- **Column patterns**:
  - Hero: two-column split at desktop (copy left, illustration right), stacks 1-up at mobile.
  - Trusted-by logo strip: single row of monochrome logos, horizontally scrolling.
  - Platform section: centered single-column headline with feature-card rows below.
  - Navigation: logo left, link cluster centre, "Contact Sales / Sign In" CTA pair right.

### Whitespace Philosophy
The hero illustration handles all decorative weight; whitespace separates sections cleanly. Section gaps are generous (`{spacing.7xl}`) but not extravagant — the brand reads as structured and efficient rather than airy. Inside cards the headline/body stack uses a tight `{spacing.xs}` to `{spacing.sm}` gap, then a wider gap before any CTA. The page never uses whitespace as decoration; it uses the hero illustration for that.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero band, dark polarity-flip sections, announcement bar. |
| Level 1 — Hairline | 1 px solid `{colors.hairline}` border. | Default white card chrome on light sections. |
| Level 2 — Glass | `rgba(255,255,255,0.08)` fill with no border. | Cards on dark-band sections. |
| Level 3 — Subtle Drop | Single light drop shadow (observed but not extracted precisely). | Elevated marketing cards and dialog surfaces. |

The brand does not use stacked multi-offset shadows. Elevation is communicated primarily through surface polarity (white on dark, or hairline-bordered white on white) rather than shadow depth.

### Decorative Depth
- **Hero illustration as atmospheric depth**: the 3-D sculptural illustration (disc, arch, and angular shard forms in `{colors.brand-purple}`, `{colors.brand-magenta}`, `{colors.brand-orange}`) is the brand's entire decorative apparatus. It operates at hero scale only and is never miniaturised.
- **Polarity-flip dark band**: switching from `{colors.canvas}` to `{colors.canvas-dark}` (#010120) is the page's chief depth cue between sections.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero bands, footer, announcement bar. |
| `{rounded.button}` | 3.55556px | Every button and CTA — the measured lock value. Near-square, deliberately not a pill. |
| `{rounded.card}` | 3.55556px | Every card surface — matches button radius exactly at this scale. |
| `{rounded.sm}` | 3.55556px | Smallest interactive surface radius (alias of button/card at this scale). |
| `{rounded.md}` | 7.11111px | Slightly rounded auxiliary containers. |
| `{rounded.lg}` | 14.2222px | Larger container rounding, section inserts. |
| `{rounded.pill}` | 9999px | Not observed in core CTA or nav — reserved if a badge or status chip requires it. |

### Photography & Illustration Geometry
- **Hero illustration**: rendered as a 2-D image of 3-D abstract forms; occupies the right half of the hero at desktop, full-width below the headline at mobile. Never cropped to a circle or card frame.
- **Brand logomark**: the flame/sphere icon combining orange, magenta, and purple gradients at consistent height in the nav.
- **Customer logos**: monochrome at consistent height in the logo strip; horizontal flex row.

## Components

### Buttons

**`button-primary`** — the canonical solid-black CTA ("START BUILDING").
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}`, padding `{spacing.md} {spacing.xl}`, shape `{rounded.button}` 3.56 px. The near-square radius is non-negotiable — this brand does not use pill CTAs.

**`button-secondary`** — the white-fill outlined CTA ("CONTACT SALES").
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.primary}` border, same typography and radius as `button-primary`.

**`button-glass`** — the translucent CTA used on dark sections.
- Background `{colors.card-glass-strong}` (`rgba(255,255,255,0.12)`), text `{colors.on-primary}`, same radius and typography.

### Navigation

**`announcement-bar`** — the full-width black strip at the very top of the page ("⚡ On-demand B200s now available...").
- Background `{colors.primary}`, text `{colors.on-primary}`, body in `{typography.body-sm}`, no radius. Acts as a persistent product announcement, not a cookie banner.

**`nav-bar`** — the sticky top nav.
- Background `{colors.canvas}`, text `{colors.ink}`, height 64 px, padding `{spacing.sm} {spacing.xl}`. Layout: logomark + wordmark left, dropdown link cluster centre, "Contact Sales / Sign In" pair right. All nav links use `{typography.body-md}`.

**`nav-link`** — dropdown-enabled links ("Inference", "Compute", "Model Shaping", etc.).
- Text `{colors.ink}`, set in `{typography.body-md}`, padding `{spacing.xs} {spacing.sm}`.

**`nav-cta-contact`** — the "CONTACT SALES" text-style nav button.
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.body-md-strong}`, `{rounded.button}`.

**`nav-cta-signin`** — the "SIGN IN" filled nav button.
- Background `{colors.primary}`, text `{colors.on-primary}`, set in `{typography.body-md-strong}`, `{rounded.button}`.

### Hero & Sections

**`hero-band`** — the two-column hero with headline copy left and 3-D illustration right.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.7xl} {spacing.xl}`. Inside: headline in `{typography.display-xl}` (two-line, mixed-weight visual effect via gradient text on the second line), lead body in `{typography.body-lg}`, then a CTA row with `button-primary` + `button-secondary`.

**`hero-illustration`** — the 3-D sculptural asset anchoring the hero.
- A composed image of floating disc, arch, and angular shard forms in `{colors.brand-purple}`, `{colors.brand-magenta}`, and `{colors.brand-orange}`. Occupies the right half of the hero container. Never miniaturised or used as an icon.

**`section-band`** — a standard white marketing section.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.7xl} {spacing.xl}`. Section headline in `{typography.display-lg}`.

**`section-band-dark`** — the deep-navy polarity-flipped section.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, same padding as `section-band`. Glass cards and `button-glass` CTAs live inside this surface.

### Cards

**`card-marketing`** — the standard light-mode feature card.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, padding `{spacing.lg} {spacing.3xl}` (matching the extracted `17.78px 35.56px`), shape `{rounded.card}` 3.56 px.

**`card-glass`** — the translucent card used on dark-band sections.
- Background `{colors.card-glass}` (`rgba(255,255,255,0.08)`), text `{colors.on-primary}`, same padding as `card-marketing`, same radius. No opaque border — the glass fill provides the edge definition.

**`card-feature`** — a slightly warmer soft-canvas card for platform feature grids.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, padding `{spacing.xl} {spacing.xl}`, shape `{rounded.card}`.

### Supplementary

**`logo-strip`** — the "TRUSTED BY" customer-logo row.
- Background `{colors.canvas}`, text `{colors.mute}`, padding `{spacing.lg} {spacing.xl}`. Logos rendered as monochrome marks at consistent height in a horizontal flex row. The "TRUSTED BY" eyebrow is in `{typography.label-caps}`.

**`label-tag`** — a small category eyebrow pill/tag ("INFERENCE", "COMPUTE", etc.).
- Background `{colors.canvas-soft}`, text `{colors.ink}`, set in `{typography.label-caps}` (the brand's one positively-tracked token), padding `{spacing.xxs} {spacing.sm}`, shape `{rounded.button}`.

**`form-input`** — the standard text input.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, set in `{typography.body-md}`, padding `{spacing.sm} {spacing.md}`, height 42 px, shape `{rounded.button}`.

**`pricing-card`** — the default pricing tier card.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, padding `{spacing.xl} {spacing.xl}`, shape `{rounded.card}`.

**`pricing-card-featured`** — the polarity-flipped featured tier.
- Background `{colors.primary}`, text `{colors.on-primary}`, same padding and shape as `pricing-card`.

**`link-inline`** — body-copy inline links.
- Text `{colors.link}` (matches ink), underline as the distinguishing treatment, set in `{typography.body-md}`.

**`footer`** — the bottom navigation band.
- Background `{colors.primary}`, text `{colors.on-primary}`, set in `{typography.body-sm}`, padding `{spacing.5xl} {spacing.xl}`.

## Do's and Don'ts

### Do
- Keep the near-square `{rounded.button}` 3.56 px radius on every CTA. This blunt geometry is core to the brand's engineering character.
- Use "The Future" at weight 500 for all display copy and 400 for body. There is no weight above 500 in this system.
- Apply aggressive negative tracking at display scale (`-1.71 px` at hero, `-0.71 px` at section). It is the primary typographic personality.
- Reserve the brand-purple / brand-magenta / brand-orange trio exclusively for the hero illustration and the logomark. Do not use them as button fills or card tints.
- Use `{colors.canvas-dark}` (#010120) as the only dark surface — the brand's dark mode is a deep near-black navy, not a neutral charcoal.
- Set all headline copy in sentence-case. The `{typography.label-caps}` token (positively-tracked caps) is the only all-caps treatment.
- Use the hero illustration at large scale as the brand's sole decorative element. It is the gradient equivalent — do not miniaturise it.

### Don't
- Don't make pill-shaped CTAs. The measured button radius is 3.56 px; pill shapes contradict the brand's identity.
- Don't introduce a monospace face. The brand's single-font system is intentional — adding a code face breaks the austerity.
- Don't use brand-purple, brand-magenta, or brand-orange as fill colors for interactive components. They live in illustration contexts only.
- Don't promote "The Future" above weight 500. The brand's display ceiling is medium-weight — heavier weights crush the face's geometric character.
- Don't introduce intermediate gray surface steps between `{colors.canvas}` and `{colors.canvas-dark}`. The surface system is binary; canvas-soft is used sparingly only for inset cards.
- Don't miniaturise the hero illustration into icons, badges, or loading indicators. The 3-D sculpture operates at hero scale only.
- Don't letter-space body or display text positively. Positive tracking appears only in `{typography.label-caps}` eyebrows.
