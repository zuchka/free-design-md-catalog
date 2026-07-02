---
version: alpha
name: Runway-design-system
description: "Runway is a generative-AI research brand whose surface is almost entirely cinematic — full-bleed video and photography doing the decorative work that gradients or illustration systems do elsewhere. The canvas is near-pure black (#0c0c0c theme-color) when the hero runs, flipping to white for informational prose sections. A single proprietary grotesque (abcNormal) carries every word at weight 400 — no bold display, no condensed, no mono — the typographic restraint is deliberate: the imagery is loud enough. Navigation labels are all-caps tracked-out at 0.35 px; hero headlines are large, lowercase-friendly, lightly negative-tracked. The one accent the brand permits is a blue-purple gradient on the announcement banner. Buttons are small, nearly square-cornered at 4 px, white-on-dark or dark-on-light — never pill-shaped."
colors:
  primary: "#0c0c0c"
  on-primary: "#ffffff"
  ink: "#0c0c0c"
  ink-mid: "#404040"
  body: "#404040"
  mute: "#888888"
  hairline: "#e0e0e0"
  canvas: "#ffffff"
  canvas-dark: "#0c0c0c"
  link: "#0c0c0c"
  on-dark: "#ffffff"
  on-dark-muted: "#999999"
  banner-gradient-start: "#4f46e5"
  banner-gradient-end: "#7c3aed"
  button-ghost-border: "#ffffff"
  nav-bg: "#ffffff"
  hero-overlay: rgba(0,0,0,0.35)
  success: "#22c55e"
  error: "#ef4444"
  warning: "#f59e0b"
typography:
  display-xl:
    fontFamily: abcNormal, "abcNormal Fallback", sans-serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 48px
    letterSpacing: -1.2px
  display-lg:
    fontFamily: abcNormal, "abcNormal Fallback", sans-serif
    fontSize: 36px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: -0.9px
  display-md:
    fontFamily: abcNormal, "abcNormal Fallback", sans-serif
    fontSize: 24px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: -0.5px
  body-lg:
    fontFamily: abcNormal, "abcNormal Fallback", sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 26px
  body-md:
    fontFamily: abcNormal, "abcNormal Fallback", sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: abcNormal, "abcNormal Fallback", sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  label-caps:
    fontFamily: abcNormal, "abcNormal Fallback", sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0.35px
  caption:
    fontFamily: abcNormal, "abcNormal Fallback", sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-sm:
    fontFamily: abcNormal, "abcNormal Fallback", sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  button-md:
    fontFamily: abcNormal, "abcNormal Fallback", sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  nav-label:
    fontFamily: abcNormal, "abcNormal Fallback", sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0.35px
rounded:
  none: 0px
  button: 4px
  card: 4px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  pill: 9999px
spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 15px
  lg: 22.5px
  xl: 28px
  2xl: 40px
  3xl: 56px
  4xl: 80px
  5xl: 112px
  section: 160px
components:
  announcement-banner:
    backgroundColor: "{colors.banner-gradient-start}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.md}"
  nav-bar:
    backgroundColor: "{colors.nav-bg}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    height: 64px
    padding: "{spacing.sm} {spacing.lg}"
  nav-link:
    textColor: "{colors.ink-mid}"
    typography: "{typography.label-caps}"
    padding: "{spacing.sm} {spacing.md}"
  nav-cta-login:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
  nav-cta-enterprise:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
  nav-cta-try:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.sm}"
  button-ghost-dark:
    backgroundColor: rgba(0,0,0,0)
    textColor: "{colors.on-primary}"
    borderColor: "{colors.button-ghost-border}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.sm}"
  hero-band:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section} {spacing.lg}"
  hero-video-overlay:
    backgroundColor: "{colors.hero-overlay}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-xl}"
  hero-category-label:
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.label-caps}"
    padding: "{spacing.xxs} 0px"
  feature-band-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-mid}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.lg}"
  feature-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.lg}"
  card-feature:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  card-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-mid}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  link-terms-banner:
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
  badge-category:
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.label-caps}"
    padding: 0px {spacing.xxs}
  footer:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.lg}"
  ex-pricing-tier:
    description: Default pricing tier. Near-square-cornered card on canvas with hairline border.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-pricing-tier-featured:
    description: Featured tier — polarity-flipped to canvas-dark with white text.
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-product-selector:
    description: Feature summary card for model tiers (Gen-3, Characters, etc.).
    backgroundColor: "{colors.canvas-dark}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary — line items per plan add-on.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses on-primary as the left-edge indicator on dark shell.
    backgroundColor: "{colors.canvas-dark}"
    activeIndicator: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.sm}"
  ex-data-table-cell:
    description: Data table chrome. Header uses label-caps; body uses body-sm.
    headerBackground: "{colors.canvas}"
    headerTypography: "{typography.label-caps}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xxs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card on canvas with square-cornered inputs.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-modal-card:
    description: Modal dialog surface — card-light chrome with elevated shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-empty-state-card:
    description: Empty-state frame on dark surface with generous padding.
    backgroundColor: "{colors.canvas-dark}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification surface — near-square card chrome on dark.
    backgroundColor: "{colors.canvas-dark}"
    rounded: "{rounded.card}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Runway is not a product landing page — it's closer to a gallery announcement. The design treats the browser as a cinema screen: full-bleed video footage of forests, waterfalls, and generated worlds runs from edge to edge, with brand copy set in white directly on top of the moving image. Every decoration decision defers to the footage. There are no mesh gradients, no illustrated icons, no geometric patterns — the generated imagery IS the system.

The page operates on a strict two-surface palette. When content is contextualised against the footage, the surface is `{colors.canvas-dark}` near-black (`#0c0c0c`), and all type is white. When the brand shifts to prose — marketing copy, feature descriptions, navigation — the surface flips to `{colors.canvas}` pure white with `{colors.ink-mid}` gray-charcoal text. The transition between these two poles, made simply by changing `background-color`, is the brand's primary depth cue.

A single proprietary grotesque (abcNormal) carries the entire typographic system at weight 400. The brand never goes bold for display, never uses a separate display face, never touches a monospace. Navigation labels are set all-caps with `+0.35 px` tracking — the one place the brand adds positive tracking. Hero headlines go the opposite direction: 48 px with `-1.2 px` tracking. The collision of those two extremes in the same narrow typeface is the brand's typographic voice.

Buttons are conspicuously small and nearly square-cornered (`{rounded.button}` — 4 px). "Get Started" and "Try Runway" are modest rectangles, not bold pills. The restraint reads as confident: the brand earns attention through its imagery, not its call-to-action chrome.

## Colors

### Brand & Surface
- **Primary / Canvas Dark** (`{colors.primary}` — `#0c0c0c`): The theme-color of the site and the primary dark surface. Used as the hero background, footer background, and every section the brand wants to feel cinematic.
- **Canvas** (`{colors.canvas}` — `#ffffff`): The light-mode surface for informational sections, the nav bar, and card interiors. Pure white — no softening.
- **Ink** (`{colors.ink}` — `#0c0c0c`): Near-pure black text on light surfaces. Used for nav links and body copy on white backgrounds.
- **Ink Mid** (`{colors.ink-mid}` — `#404040`): The default text color on `{colors.canvas}` surfaces — a slightly softened charcoal for body and section copy.

### Text
- **On Primary** (`{colors.on-primary}` — `#ffffff`): All text and button labels on dark `{colors.canvas-dark}` surfaces, including hero headlines and footer text.
- **On Dark Muted** (`{colors.on-dark-muted}` — `#999999`): Subdued labels on dark surfaces — category labels, footer secondary lines.
- **Mute** (`{colors.mute}` — `#888888`): Low-priority secondary text on light surfaces.

### Accents & Interactive
- **Link** (`{colors.link}` — `#0c0c0c`): Inline links on light surfaces carry the same near-black ink; the underline on hover is the only interactive indicator.
- **Button Ghost Border** (`{colors.button-ghost-border}` — `#ffffff`): The border for ghost-style CTAs sitting on dark or video surfaces.
- **Hairline** (`{colors.hairline}` — `#e0e0e0`): Dividers, card borders, and input borders on light surfaces.
- **Hero Overlay** (`{colors.hero-overlay}` — `rgba(0,0,0,0.35)`): A translucent scrim that darkens the video layer enough for white text to remain legible without obscuring the footage.

### Announcement Banner
- **Banner Gradient Start** (`{colors.banner-gradient-start}` — `#4f46e5`) / **Banner Gradient End** (`{colors.banner-gradient-end}` — `#7c3aed`): The blue-to-violet gradient used exclusively on the top announcement strip. It is the only decorative colour in the system that isn't black or white.

### Semantic
- **Success** (`{colors.success}` — `#22c55e`): Status positive.
- **Error** (`{colors.error}` — `#ef4444`): Validation and destructive state.
- **Warning** (`{colors.warning}` — `#f59e0b`): Caution state.

## Typography

### Font Family
The entire system runs on a single proprietary grotesque: **abcNormal** (extracted as `abcNormal, "abcNormal Fallback"`). It is used at weight 400 throughout — no bold, no italic, no secondary face. The closest open-source substitute is *ABC Diatype* (commercial) or *Inter* (400 weight only, with `font-feature-settings: "ss01"` for the single-storey 'a').

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 400 | 48px | -1.2px | Hero headline ("Building AI to Simulate the World"). |
| `{typography.display-lg}` | 36px | 400 | 36px | -0.9px | Section headlines on feature bands. |
| `{typography.display-md}` | 24px | 400 | 28px | -0.5px | Sub-section headlines and card cluster titles. |
| `{typography.body-lg}` | 18px | 400 | 26px | 0 | Lead paragraphs under section headlines. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph on light surfaces. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary body, banner copy, footer links. |
| `{typography.label-caps}` | 14px | 400 | 20px | +0.35px | All-caps navigation labels, category labels on hero ("RUNWAY CHARACTERS", "MEDIA AND ENTERTAINMENT"). |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Fine print, image credit captions. |
| `{typography.button-sm}` | 14px | 400 | 20px | 0 | Small CTA button labels ("Get Started", "Try Runway"). |
| `{typography.button-md}` | 16px | 400 | 24px | 0 | Mid-scale button labels. |
| `{typography.nav-label}` | 14px | 400 | 20px | +0.35px | Nav link labels rendered in all-caps. |

### Principles
- **Weight 400 is the only weight.** The brand never boldens. The display ceiling is regular — this is unusual and intentional. Hierarchy comes from size and tracking, not weight.
- **Positive tracking for labels, negative for display.** Navigation and category labels track at `+0.35 px` all-caps. Hero display sizes track at `-1.2 px` to `-0.9 px`. The brand never uses a middle-ground neutral-tracking headline.
- **All-caps navigation is not all-caps editorial.** Only nav links and cinematic category labels ("GENERAL WORLD MODELS") are uppercased. Body and hero headlines are sentence-case.
- **One face for everything.** No mono, no slab, no condensed — abcNormal is the entire typographic system.

### Note on Font Substitutes
abcNormal is proprietary. For production use without a license:
- **Grotesque sans (weight 400 only)** — *Inter* at 400 weight is a functional substitute. Disable ligatures, enable `"ss01"`. *Sohne* (Klim) is a premium-tier stylistic match.

## Layout

### Spacing System
- **Base unit**: The measured scale is `4 px / 6 px / 7.5 px / 8 px / 15 px / 22.5 px` — multiples of a 1.5-multiplier chain rather than a strict base-4 grid. The dominant padding values across the page are `22.5 px` (229 occurrences) and `8 px` (118 occurrences), confirming these as the primary interior and gap values.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 15 px · `{spacing.lg}` 22.5 px · `{spacing.xl}` 28 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 56 px · `{spacing.4xl}` 80 px · `{spacing.5xl}` 112 px · `{spacing.section}` 160 px.
- **Button padding**: Measured as `4px 8px` — `{spacing.xxs}` vertical, `{spacing.sm}` horizontal. The brand's CTAs are intentionally compact.
- **Interior card padding**: `{spacing.lg}` 22.5 px is the dominant interior value.

### Grid & Container
- **Column patterns visible in screenshot**: The hero uses a two-column asymmetric split — headline and CTA on the left third, cinematic category links on the right half. Both columns sit directly on the video layer.
- **Nav**: Logo left, five nav-link groups centred, three CTA buttons clustered right.
- **Category link list**: A vertical stack of four all-caps labels ("RUNWAY CHARACTERS", "MEDIA AND ENTERTAINMENT", "ROBOTICS AND AUTONOMY", "GENERAL WORLD MODELS") positioned mid-right on the hero — they function as jump-links into the brand's research verticals.

### Whitespace Philosophy
The footage does the heavy visual work; whitespace is used sparingly and functionally. The hero band has no interior padding breathing room in the traditional sense — the video fills every pixel. Type and buttons are anchored to the lower-left by absolute or flex-end positioning. Section bands on the light surface use `{spacing.5xl}` to `{spacing.section}` top-and-bottom to let the single-typeface, low-contrast prose read without crowding.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed video hero and dark cinematic bands. |
| Level 1 — Hairline | `0 0 0 1px {colors.hairline}` border. | Cards on light surfaces; nav bar boundary. |
| Level 2 — Scrim | `{colors.hero-overlay}` rgba tint layer over video. | Keeping white hero text legible over moving footage. |

Runway does not use elevated drop-shadows. The depth system is entirely surface-contrast — dark band vs. light band vs. scrim-over-video — with no blurred shadow stacking.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero video, footer bands. |
| `{rounded.xs}` | 2px | Tightest inline micro-element (reserved). |
| `{rounded.button}` | 4px | Every button CTA — the measured value from extraction. "Get Started", "Try Runway", "Try now", nav CTAs. |
| `{rounded.card}` | 4px | Feature cards and content containers. |
| `{rounded.sm}` | 4px | General small-radius UI elements. |
| `{rounded.md}` | 6px | Slightly softer containers where needed. |
| `{rounded.lg}` | 8px | Largest card chrome. |
| `{rounded.pill}` | 9999px | Not used in visible brand surfaces — documented for completeness. |

The brand's default shape language is **nearly square**. Four-pixel corners are the maximum radius used on interactive elements. This pairs with the typeface's lack of weight variation to create a deliberately flat, understated interface that never competes with the video content.

## Components

### Navigation

**`nav-bar`** — the white top navigation.
- Background `{colors.nav-bg}` white, text `{colors.ink}`, height 64 px, padding `{spacing.sm} {spacing.lg}`. Logo left as wordmark; five link groups ("RESEARCH", "PRODUCT", "RESOURCES", "SOLUTIONS", "COMPANY") in all-caps `{typography.nav-label}` centred; "Enterprise Sales", "Login", "Try Runway" clustered right.

**`nav-link`** — individual nav group labels.
- Text `{colors.ink-mid}`, typography `{typography.label-caps}`, padding `{spacing.sm} {spacing.md}`. All-caps, `+0.35 px` tracking. No underline at rest.

**`nav-cta-enterprise`** / **`nav-cta-login`** — secondary nav actions with a hairline border.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px `{colors.hairline}` border, typography `{typography.button-sm}`, radius `{rounded.button}` 4 px, padding `{spacing.sm} {spacing.md}`.

**`nav-cta-try`** — the primary "Try Runway" nav button.
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.button-sm}`, radius `{rounded.button}` 4 px, padding `{spacing.sm} {spacing.md}`.

### Announcement

**`announcement-banner`** — the top-of-page promotional strip ("Agent 2.0 is here. Get 30% off…").
- Background gradient from `{colors.banner-gradient-start}` to `{colors.banner-gradient-end}` (indigo-to-violet), text `{colors.on-primary}`, typography `{typography.body-sm}`, padding `{spacing.xs} {spacing.md}`. Contains a "Terms" underlined link and a "Try now ›" ghost CTA.

### Hero

**`hero-band`** — the full-bleed cinematic hero.
- Background `{colors.canvas-dark}` (video sits behind), text `{colors.on-primary}`, headline in `{typography.display-xl}` (48 px / 400 / -1.2 px tracking), padding `{spacing.section}`. CTA is `button-primary` (white rectangle) bottom-left. Category links are `hero-category-label` mid-right.

**`hero-video-overlay`** — the translucent scrim over the video layer.
- Background `{colors.hero-overlay}` rgba(0,0,0,0.35). Ensures white type remains legible without obscuring the footage.

**`hero-category-label`** — the four vertical research-area jump-links on the hero ("RUNWAY CHARACTERS", "MEDIA AND ENTERTAINMENT", "ROBOTICS AND AUTONOMY", "GENERAL WORLD MODELS").
- Text `{colors.on-dark-muted}`, typography `{typography.label-caps}`, all-caps, `+0.35 px` tracking. No background, no border — text-only on the video surface.

### Buttons

**`button-primary`** — the canonical light CTA ("Get Started").
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.button-sm}`, radius `{rounded.button}` 4 px, padding `{spacing.xxs} {spacing.sm}` (measured: `4px 8px`). Small, compact rectangle — not a pill.

**`button-ghost-dark`** — a ghost-style button on dark/video surfaces.
- Background transparent, text `{colors.on-primary}`, 1 px `{colors.button-ghost-border}` border, typography `{typography.button-sm}`, radius `{rounded.button}` 4 px, padding `{spacing.xxs} {spacing.sm}`.

### Cards & Bands

**`feature-band-light`** — informational section on white.
- Background `{colors.canvas}`, text `{colors.ink-mid}`, headline in `{typography.display-lg}`, padding `{spacing.5xl} {spacing.lg}`.

**`feature-band-dark`** — cinematic section on near-black.
- Background `{colors.canvas-dark}`, text `{colors.on-primary}`, headline in `{typography.display-lg}`, padding `{spacing.5xl} {spacing.lg}`.

**`card-feature`** — content card on dark surface.
- Background `{colors.canvas-dark}`, text `{colors.on-primary}`, typography `{typography.body-md}`, radius `{rounded.card}` 4 px, padding `{spacing.lg}`.

**`card-light`** — content card on white surface.
- Background `{colors.canvas}`, text `{colors.ink-mid}`, typography `{typography.body-md}`, radius `{rounded.card}` 4 px, padding `{spacing.lg}`.

### Utility

**`badge-category`** — small all-caps research-area label.
- Text `{colors.on-dark-muted}`, typography `{typography.label-caps}`, padding `0px {spacing.xxs}`. Used as section eyebrows on dark surfaces.

**`link-inline`** — body-copy inline link on light surfaces.
- Text `{colors.link}`, typography `{typography.body-md}`. Underlined.

**`link-terms-banner`** — inline link inside the announcement banner.
- Text `{colors.on-primary}`, typography `{typography.body-sm}`. Underlined.

**`footer`** — the dark bottom navigation.
- Background `{colors.canvas-dark}`, text `{colors.on-dark-muted}`, typography `{typography.body-sm}`, padding `{spacing.4xl} {spacing.lg}`.

## Do's and Don'ts

### Do
- Let the video and photography carry all decoration. The design system's job is to stay out of the way.
- Use `{rounded.button}` 4 px on every interactive element. Near-square corners are the brand's shape voice — never round to a pill.
- Set every navigation label in `{typography.label-caps}` all-caps with `+0.35 px` tracking. It's the only place the brand tracks positively.
- Keep headlines at weight 400. The brand never bolds display text. Size and negative tracking create hierarchy, not weight.
- Flip surfaces between `{colors.canvas-dark}` and `{colors.canvas}` to create section rhythm. The two-tone polarity swap IS the layout system.
- Use the banner gradient (`{colors.banner-gradient-start}` → `{colors.banner-gradient-end}`) only on the top announcement strip. It is the brand's one permitted accent colour.
- Keep buttons small and compact (`4px 8px` padding). The restrained CTA scale is deliberate — the imagery earns the click, not the button.

### Don't
- Don't add bold or semi-bold type. abcNormal at weight 400 is the entire typographic system. Introducing 600 or 700 breaks the voice.
- Don't use pill-shaped buttons. The 4 px corner radius is measured and locked — never round CTAs to `{rounded.pill}`.
- Don't introduce illustration, icons, gradients, or patterns on top of the video surfaces. The footage is the decoration.
- Don't set positive tracking on headlines. Only nav labels and category labels track at `+0.35 px`; display sizes are negative.
- Don't use the banner gradient on cards, buttons, or any surface other than the announcement strip.
- Don't place text directly on full-saturation video without the `{colors.hero-overlay}` scrim. Legibility depends on the 35 % black tint layer.
- Don't introduce a second typeface. abcNormal is the single face — no mono, no serif, no condensed variant.
