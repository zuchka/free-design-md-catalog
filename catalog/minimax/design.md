---
version: alpha
name: MiniMax
description: "MiniMax is a Chinese-origin frontier AI platform whose surface reads as ink-dark sophistication cut by a single vivid coral-orange brand mark — the brand's signature waveform icon bleeding into section art and hero illustrations. The page operates on two tones of near-black (the deep navy-ink canvas at #181e25 and pure zinc-near-black text at #18181b) against a white body, with a 60-pixel fully-rounded card radius that gives every content block a generous, pill-forward geometry. Buttons are decidedly soft-pill at 32px — not capsule, not rectangular — sitting between the two extremes and carrying the brand's friendly-yet-precise engineer voice."
colors:
  primary: "#181e25"
  on-primary: "#ffffff"
  ink: "#18181b"
  body: "#45515e"
  mute: "#86909c"
  mute-light: "#c9cdd4"
  hairline: "#e5e7eb"
  canvas: "#ffffff"
  canvas-soft: "#f5f5f5"
  canvas-dark: "#181e25"
  brand-coral: "#f45c2b"
  brand-blue: "#1456f0"
  brand-blue-mid: "#2563eb"
  brand-blue-deep: "#1d4ed8"
  brand-blue-light: "#60a5fa"
  brand-blue-pale: "#ecf2fe"
  brand-blue-pale-2: "#e3ebfd"
  brand-blue-wash: "#dbeafe"
  brand-blue-ultra-pale: "#eff6ff"
  brand-blue-primary: "#3b82f6"
  brand-grey: "#5f5f5f"
  link: "#1456f0"
  success: "#3b82f6"
  error: "#ef4444"
  warning: "#f59e0b"
typography:
  display-xl:
    fontFamily: Outfit, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 56px
    fontWeight: 600
    lineHeight: 64px
    letterSpacing: -0.5px
  display-lg:
    fontFamily: Outfit, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 40px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: -0.3px
  display-md:
    fontFamily: Outfit, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 28px
    fontWeight: 400
    lineHeight: 48px
    letterSpacing: normal
  display-sm:
    fontFamily: Outfit, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: normal
  body-lg:
    fontFamily: MiSans, "PingFang SC", "PingFang HK", "Microsoft Yahei", 微软雅黑, Arial, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: MiSans, "PingFang SC", "PingFang HK", "Microsoft Yahei", 微软雅黑, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: MiSans, "PingFang SC", "PingFang HK", "Microsoft Yahei", 微软雅黑, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  caption:
    fontFamily: MiSans, "PingFang SC", "PingFang HK", "Microsoft Yahei", 微软雅黑, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  label:
    fontFamily: Outfit, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  button-md:
    fontFamily: Outfit, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  button-lg:
    fontFamily: Outfit, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 28px
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  button: 32px
  pill: 32px
  card: 60px
  full: 9999px
spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 60px
  5xl: 80px
  6xl: 96px
  section: 120px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    height: 64px
    padding: "{spacing.md} {spacing.xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.lg}"
  nav-cta-login:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.xl}
    height: 40px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 0px 28px
    height: 44px
  button-secondary:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 0px 28px
    height: 44px
  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 0px 28px
    height: 44px
  button-coral:
    backgroundColor: "{colors.brand-coral}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 0px 28px
    height: 44px
  card-feature:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl} {spacing.xl}"
  card-model:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl} {spacing.xl}"
  card-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl} {spacing.xl}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.5xl} {spacing.xl}"
  hero-model-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section} {spacing.xl}"
  feature-card-icon:
    backgroundColor: "{colors.brand-blue-pale}"
    textColor: "{colors.brand-blue}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  section-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-md}"
    padding: "{spacing.5xl} {spacing.xl}"
  section-band-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.5xl} {spacing.xl}"
  badge-model:
    backgroundColor: "{colors.brand-coral}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.md}"
  badge-label:
    backgroundColor: "{colors.brand-blue-pale}"
    textColor: "{colors.brand-blue}"
    typography: "{typography.caption}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.md}"
  carousel-dot:
    backgroundColor: "{colors.mute-light}"
    activeColor: "{colors.primary}"
    rounded: "{rounded.full}"
    width: 8px
    height: 8px
  footer:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.mute-light}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.xl}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  lang-toggle:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.lg}"
  ex-pricing-tier:
    description: Default model tier card on dark canvas. Uses card-feature chrome with muted border.
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured model tier — coral accent border or badge distinguishes it from siblings.
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-primary}"
    borderColor: "{colors.brand-coral}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: Model capability summary card — repurposed for coding / multimodal / long-context feature tiers.
    backgroundColor: "{colors.canvas-dark}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    description: Token Plan summary — line items per API tier (not a literal e-commerce cart).
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row inside product shell. Active state uses brand-coral as left indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.brand-coral}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
  ex-data-table-cell:
    description: Model comparison table. Header uses label token in Outfit; body uses body-sm in MiSans.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.label}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.lg}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in card. Light canvas surface with soft-pill input fields inside.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-modal-card:
    description: Modal dialog — light canvas surface with card-light chrome and soft shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-empty-state-card:
    description: Empty state frame — dark canvas with generous padding and muted caption.
    backgroundColor: "{colors.canvas-dark}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — light canvas surface, soft-pill shape, body-sm typography.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"
---
## Overview

MiniMax is a frontier AI company whose marketing surface makes a deliberate polarity statement: the page opens on white, then plunges into a deep navy-ink dark canvas (`{colors.canvas-dark}` `#181e25`) for its model and feature showcases before returning to white again. The rhythm of light → dark → light bands is the brand's primary structural device — not gradients, not imagery, but the stark alternation of surface tone. The single expressive accent is a vivid coral-orange (`{colors.brand-coral}`) that surfaces in the logo waveform, hero illustration details, and the M3 badge — it is the brand's entire colour gesture, used sparingly and never stretched to backgrounds.

Type splits cleanly between two faces for two audiences: Outfit (a geometric Latin sans, weight 400–600) carries every headline, button, label, and display element — it is the brand's English voice, rounded and precise. MiSans carries all body paragraphs, captions, and CJK content — a humanist sans purpose-built for Chinese-Japanese-Korean rendering at every weight. The brand never mixes them within the same semantic role: Outfit headlines, MiSans body. That discipline is visible at every viewport width.

Geometry is the most distinctive systemic choice. Cards use a 60-pixel border radius — an unusually large arc that gives every content block a soft, pill-adjacent presence without becoming a true capsule. Buttons are 32-pixel radius, landing precisely between a rectangle and a full pill. The two radii coexist without collision because they appear at different scales: the 60-pixel card radius reads at section width; the 32-pixel button radius reads at inline interaction width. Neither borrows from the other.

The blue token set (`{colors.brand-blue}` through `{colors.brand-blue-ultra-pale}`) powers interactive states, badges, and occasional feature-card accents. It is a full 50–700-step palette kept almost entirely off the marketing surface, visible mainly as soft pale-blue badge fills and the CSS custom properties available to in-product surfaces.

## Colors

### Brand & Accent
- **Brand Coral** (`{colors.brand-coral}` — `#f45c2b`): The brand's only warm accent. Appears in the MiniMax logo waveform, the M3 product badge, and hero section illustration details. Never used as a button fill on its own except `button-coral` for specific product CTAs.
- **Brand Blue** (`{colors.brand-blue}` — `#1456f0`): The deep interactive blue, used for link text and strong-emphasis interactive elements.
- **Brand Blue Mid** (`{colors.brand-blue-mid}` — `#2563eb`): The primary-600 step — dark pressed/hover state for blue interactive elements.
- **Brand Blue Deep** (`{colors.brand-blue-deep}` — `#1d4ed8`): The primary-700 step — deepest blue for heavy emphasis.
- **Brand Blue Light** (`{colors.brand-blue-light}` — `#60a5fa`): Primary-light — used in lighter contexts and gradient-adjacent treatments.
- **Brand Blue Pale** (`{colors.brand-blue-pale}` — `#ecf2fe`): Softest blue tint — the fill for feature-icon backgrounds and badge chips on light surfaces.
- **Brand Blue Pale 2** (`{colors.brand-blue-pale-2}` — `#e3ebfd`): A fractionally deeper pale blue, used as a secondary badge background.
- **Brand Blue Wash** (`{colors.brand-blue-wash}` — `#dbeafe`): Primary-100 — the palest blue surface wash.
- **Brand Blue Primary** (`{colors.brand-blue-primary}` — `#3b82f6`): The design-system's `--color-primary` anchor for in-product surfaces.
- **Brand Grey** (`{colors.brand-grey}` — `#5f5f5f`): The mid-grey brand ramp step, used for secondary icon and label treatment.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The default white page and card surface for light-mode sections.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f5f5f5`): The near-white used for secondary/ghost button fills and hover states on light surfaces.
- **Canvas Dark** (`{colors.canvas-dark}` — `#181e25`): The deep navy-ink used for dark-band sections, dark cards, and the footer. The meta `theme-color` is extracted from this value — it is the brand's dark identity.

### Text
- **Ink** (`{colors.ink}` — `#18181b`): Primary headline and body text on light surfaces.
- **Body** (`{colors.body}` — `#45515e`): Secondary body text and captions on light surfaces (`--text-4`).
- **Mute** (`{colors.mute}` — `#86909c`): Tertiary / deemphasised text (`--text-3`).
- **Mute Light** (`{colors.mute-light}` — `#c9cdd4`): The softest text ramp step — placeholder text and fine print (`--text-2`).
- **On Primary** (`{colors.on-primary}` — `#ffffff`): All text and icons on `{colors.canvas-dark}` or `{colors.brand-coral}` surfaces.

### Semantic
- **Link** (`{colors.link}` — `#1456f0`): Inline link colour, maps to `--brand-6`.
- **Success** (`{colors.success}` — `#3b82f6`): In-product success / positive indicator.
- **Error** (`{colors.error}` — `#ef4444`): Destructive / validation error state.
- **Warning** (`{colors.warning}` — `#f59e0b`): Caution / pending state.

## Typography

### Font Families
Two purpose-separate faces define the system:

1. **Outfit** — a geometric Latin display sans used for all headings, button labels, nav links, and display elements. Weight 400 carries most display use; 500 and 600 appear at the largest display sizes. The face's rounded-aperture geometry echoes the brand's rounded-card aesthetic. Used for Latin/numeral content exclusively.
2. **MiSans** — a humanist CJK-capable sans covering every body paragraph, caption, and Chinese-language UI label. The face is designed for high legibility at small sizes in CJK scripts while remaining legible for Latin body text. Weight 400 throughout the marketing surface.

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 600 | 64px | -0.5px | Primary hero headline ("MiniMax M3"). |
| `{typography.display-lg}` | 40px | 500 | 48px | -0.3px | Section hero headlines ("旗舰模型"). |
| `{typography.display-md}` | 28px | 400 | 48px | normal | Section sub-headlines and product names (h2/h3 level). |
| `{typography.display-sm}` | 20px | 400 | 28px | normal | Card cluster headlines and smaller section titles. |
| `{typography.body-lg}` | 18px | 400 | 28px | — | Lead body paragraphs under section headlines. |
| `{typography.body-md}` | 16px | 400 | 24px | — | Default body and card body text. |
| `{typography.body-sm}` | 14px | 400 | 20px | — | Secondary body, captions, footer link rows. |
| `{typography.caption}` | 12px | 400 | 16px | — | Badge labels, fine print, metadata chips. |
| `{typography.label}` | 16px | 400 | 24px | — | Nav links and non-button interactive labels (Outfit face). |
| `{typography.button-md}` | 16px | 400 | 24px | — | Standard button label. |
| `{typography.button-lg}` | 18px | 500 | 28px | — | Hero-scale button labels. |

### Principles
- **Outfit for Latin structure, MiSans for CJK flow.** The two faces are never swapped. Headlines set in Outfit; body set in MiSans. This boundary is the brand's legibility strategy across bilingual content.
- **Display headlines are weight 400–600, never heavier.** The brand reads as calm precision — not aggressive weight contrast.
- **Neutral letter-spacing at most sizes.** Only the largest display sizes carry a mild negative tracking (`-0.5px` at 56 px). The brand does not use aggressive negative tracking the way a pure-Latin tech brand might.
- **Line-height is generous on display.** The 48-px line-height on 28-px display-md and the 64-px on 56-px display-xl give the bilingual content room to breathe around descenders.

### Note on Font Substitutes
- **Outfit** is openly available on Google Fonts. No substitute needed.
- **MiSans** is a proprietary face (originally developed for Xiaomi MIUI). The closest open-source CJK substitute is *Noto Sans SC* (Simplified Chinese) or *Source Han Sans*. For Latin-only contexts, *Inter* is the stylistic nearest neighbour.

## Layout

### Spacing System
- **Base unit**: 4 px (implicit — the smallest observed value is 4 px with the primary rhythm at 6 px and 8 px).
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 6px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.2xl}` 32px · `{spacing.3xl}` 48px · `{spacing.4xl}` 60px · `{spacing.5xl}` 80px · `{spacing.6xl}` 96px · `{spacing.section}` 120px.
- **Section padding**: Marketing bands use `{spacing.5xl}` (80px) to `{spacing.section}` (120px) top/bottom.
- **Card interior padding**: Feature cards use `{spacing.xl}` (24px) all-round; the dark model cards use the same.
- **Inline gap**: Button rows and nav rows use `{spacing.md}` (12px) to `{spacing.lg}` (16px) between siblings.

### Grid & Container
- **Max width**: approximately 1200px centred with `{spacing.xl}` 24px gutters on desktop.
- **Column patterns**:
  - Hero: single centred column for headline + CTA row.
  - Feature card row: 3-up at desktop scaling to 1-up on mobile.
  - Model showcase: alternating 2-column split (text left / visual right) or full-width card.
  - Footer: 4–5 column link grid on dark canvas.
- **Hero CTA row**: two or three pill-button siblings at `{spacing.md}` gap.

### Whitespace Philosophy
The brand uses the dark-band / light-band alternation as its chief structural separator — there are no divider lines between major sections. Within sections, spacing is generous: headlines sit with `{spacing.xl}` clearance above the body paragraph, and the body sits with `{spacing.xl}` clearance above the CTA cluster. Inside cards, the icon → headline → body stack is tight at `{spacing.sm}` to `{spacing.md}` between elements, keeping each card visually compact despite the large 60-pixel radius.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Dark-band section cards (`card-feature`, `card-model`) — the deep canvas surface carries itself without shadow. |
| Level 1 — Soft Ring | `0 0 0 1px rgba(0,0,0,0.08)` inset. | Light-surface cards on white canvas — a barely-visible edge ring to separate card from page. |
| Level 2 — Subtle Drop | `0 2px 8px rgba(0,0,0,0.06)` | Floating nav bar on scroll; dropdown surfaces. |
| Level 3 — Modal | `0 8px 32px rgba(0,0,0,0.16)` | Modal dialogs and elevated overlay panels. |

Dark-band cards (`card-feature`, `card-model`) carry zero shadow — the contrast between `{colors.canvas-dark}` and the surrounding lighter band is the depth cue. Light-surface cards use only a hairline inset ring; the brand avoids any heavy drop-shadow in marketing contexts.

### Decorative Depth
- **Coral waveform illustration**: the hero section uses a large brand-coral abstract waveform / blob illustration as the sole atmospheric decoration — it is the brand's visual identity at scale, analogous to a gradient in other systems.
- **Dark-band polarity flip**: switching from `{colors.canvas}` to `{colors.canvas-dark}` is the primary depth and section-separation device.
- **60-pixel card arc as perceived depth**: the large radius gives cards a 3-D softness without any shadow, making them appear to float gently off the surface.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero illustration backgrounds and footer bands. |
| `{rounded.xs}` | 4px | Tightest internal UI — tooltip corners, small chip internal radius. |
| `{rounded.sm}` | 8px | Small icon containers and internal UI elements. |
| `{rounded.md}` | 12px | Medium cards in product UI and modal inner panels. |
| `{rounded.lg}` | 16px | Feature icon background squares (`feature-card-icon`). |
| `{rounded.xl}` | 24px | Larger inline UI panels. |
| `{rounded.button}` | 32px | Every button and CTA on the marketing surface — the measured 32px soft-pill. |
| `{rounded.pill}` | 32px | Badge chips and carousel nav pills — same measured value as button radius. |
| `{rounded.card}` | 60px | Every marketing feature card and model card — the brand's signature generous arc. |
| `{rounded.full}` | 9999px | Circular avatar / icon frames and carousel dots. |

### Geometry Philosophy
The 60-pixel card radius is the most distinctive brand geometry decision. At typical card widths (~360–400 px), a 60-pixel corner arc is large enough to read as "pillowed" without becoming a true oval. The 32-pixel button radius, applied to buttons ~44 px tall, produces a soft-pill that stops just short of being a full capsule. The two values are deliberate and must not be conflated: card geometry belongs on cards, button geometry belongs on interactive elements.

## Components

### Buttons

**`button-primary`** — the canonical dark soft-pill button, marketing scale.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}`, padding `0px 28px`, height 44px, shape `{rounded.button}` 32px.

**`button-secondary`** — the grey ghost pill paired with `button-primary` in hero CTA rows.
- Background `{colors.canvas-soft}`, text `{colors.primary}`, same typography + padding + height, shape `{rounded.button}`.

**`button-outline`** — a white-fill button with hairline border, used for "了解更多" (learn more) tertiary CTAs.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline}` border, same typography + padding + height, shape `{rounded.button}`.

**`button-coral`** — a coral-fill variant for brand-accented product CTAs.
- Background `{colors.brand-coral}`, text `{colors.on-primary}`, same typography + padding + height, shape `{rounded.button}`.

### Cards

**`card-feature`** — the dark feature card used inside model showcase bands.
- Background `{colors.canvas-dark}`, text `{colors.on-primary}`, padding `{spacing.xl}`, shape `{rounded.card}` 60px. Zero shadow — the dark surface is the card.

**`card-model`** — the dark model-capability card (front/back of the carousel trio).
- Background `{colors.canvas-dark}`, text `{colors.on-primary}`, padding `{spacing.xl}`, shape `{rounded.card}` 60px. Carries a small coral or blue badge at the top corner.

**`card-light`** — the white feature card used in light-band sections.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.xl}`, shape `{rounded.card}` 60px. Carries a Level 1 inset hairline ring.

### Navigation

**`nav-bar`** — the top navigation bar.
- Background `{colors.canvas}`, text `{colors.ink}`, height 64px, padding `{spacing.md} {spacing.xl}`. Layout: coral waveform logo + "MINIMAX" wordmark left; link row centre; language toggle + login button right.

**`nav-link`** — the centred nav link row items (模型 / 产品 / API / Token Plan / 研究 / 关于我们).
- Text `{colors.ink}`, label in `{typography.label}` (Outfit 16px/400), padding `{spacing.sm} {spacing.lg}`, shape `{rounded.button}` (ghost — radius visible on hover).

**`nav-cta-login`** — the "登录" login button in the nav right cluster.
- Background `{colors.canvas-soft}`, text `{colors.primary}`, label in `{typography.button-md}`, shape `{rounded.button}`, height 40px.

**`lang-toggle`** — the "EN" language selector in the nav.
- Background `{colors.canvas}`, text `{colors.ink}`, label in `{typography.body-md}`, shape `{rounded.button}`, padding `{spacing.sm} {spacing.lg}`.

### Section Containers

**`hero-band`** — the page hero section.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.xl}`. Contains headline in `{typography.display-xl}`, body sub-head in `{typography.body-lg}`, and a row of `button-primary` + `button-secondary` + `button-outline` siblings. The coral waveform hero illustration floats behind the card carousel below the headline.

**`hero-model-band`** — the "旗舰模型" flagship model section.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.section} {spacing.xl}`. Headline in `{typography.display-lg}`.

**`section-band-dark`** — a full-width dark-canvas section band.
- Background `{colors.canvas-dark}`, text `{colors.on-primary}`, padding `{spacing.5xl} {spacing.xl}`. Used for model capability feature grids.

**`section-band-light`** — a full-width white-canvas section band.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.xl}`. Used for product feature call-outs.

### Labels & Badges

**`badge-model`** — the coral product-name badge (e.g. the "T" M3 badge in the hero headline).
- Background `{colors.brand-coral}`, text `{colors.on-primary}`, label in `{typography.caption}`, shape `{rounded.pill}`, padding `{spacing.xxs} {spacing.md}`.

**`badge-label`** — a blue-pale feature label chip.
- Background `{colors.brand-blue-pale}`, text `{colors.brand-blue}`, label in `{typography.caption}`, shape `{rounded.pill}`, padding `{spacing.xxs} {spacing.md}`.

**`feature-card-icon`** — the icon background square inside feature cards.
- Background `{colors.brand-blue-pale}`, icon color `{colors.brand-blue}`, shape `{rounded.lg}` 16px, padding `{spacing.md}`.

### Utility

**`carousel-dot`** — the three pagination dots below the hero card carousel.
- Inactive fill `{colors.mute-light}`, active fill `{colors.primary}`, shape `{rounded.full}`, 8×8px.

**`footer`** — the bottom dark navigation band.
- Background `{colors.canvas-dark}`, text `{colors.mute-light}`, label in `{typography.body-sm}`, padding `{spacing.3xl} {spacing.xl}`. Column headers in Outfit `{typography.label}` weight 500.

**`link-inline`** — body-copy inline links.
- Text `{colors.link}`, label in `{typography.body-md}`.

## Do's and Don'ts

### Do
- Reserve `{colors.brand-coral}` for the logo, the M3-style product badges, and hero illustration accents. It is the brand's single warm gesture — use it as a signal, not a fill.
- Use `{rounded.button}` (32px) for every button and `{rounded.card}` (60px) for every marketing card. The two radii coexist at different scales — never swap them.
- Set display headlines in Outfit (weight 400–600) and all body/CJK content in MiSans. The face split is the bilingual legibility strategy.
- Alternate light canvas → dark canvas bands as the primary section separator. Divider lines are not part of this brand's structural grammar.
- Use dark-band section cards (`card-feature`, `card-model`) with zero shadow — the surface contrast carries the elevation.
- Keep blue tokens (`{colors.brand-blue}` family) for interactive states, badges, and in-product surfaces. Do not promote them to marketing headlines or CTA fills.

### Don't
- Don't use `{colors.brand-coral}` as a background fill for large surfaces or full-width bands. It appears only as a small badge, icon, or illustration accent.
- Don't set body paragraphs in Outfit or display headlines in MiSans. The two faces have dedicated semantic roles that must not be crossed.
- Don't apply a heavy drop-shadow to dark-band cards. The `{colors.canvas-dark}` surface is its own elevation cue.
- Don't use the 60-pixel card radius on buttons, form inputs, or small UI elements. The large arc belongs at card / container scale only.
- Don't introduce a third typeface. The brand's bilingual legibility rests on two purpose-built faces — adding a third disrupts both the visual and the technical CJK strategy.
- Don't use aggressive negative letter-spacing at body sizes. MiSans at body scale requires neutral or positive tracking for CJK legibility.
