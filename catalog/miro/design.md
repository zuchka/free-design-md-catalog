---
version: alpha
name: Miro
description: "Miro is a collaborative visual-workspace brand whose surface is a near-white dotted-canvas backdrop washed with a soft lavender-to-blush radial gradient, anchored by a vivid yellow primary that reads as a highlighter stroke — warm, energetic, unmistakably human. The brand's custom geometric rounded sans (Roobert PRO) carries every headline with tightly-negative tracking and medium weight, never heavy, never all-caps. Cards are dramatically rounded at 40 px — almost pill-shaped rectangles — while buttons stay compact at 8 px, a deliberate two-scale system that separates container geometry from action geometry. The dark announcement bar and white nav float above a hero that feels like a shared whiteboard: dotted grid, ambient colour wash, and a single blue CTA that contrasts sharply with the yellow brand."
colors:
  primary: "#fde050"
  on-primary: "#1c1c1e"
  blue-cta: "#4262ff"
  on-blue-cta: "#ffffff"
  ink: "#1c1c1e"
  body: "#3d3d3d"
  mute: "#717171"
  hairline: "#e0e0e0"
  canvas: "#ffffff"
  canvas-soft: "#f9f9f9"
  canvas-dot: "#f0f0f0"
  announcement-bar: "#1c1c1e"
  on-announcement-bar: "#ffffff"
  badge-outline: "#1c1c1e"
  on-badge-outline: "#1c1c1e"
  gradient-hero-start: "#e8e4f7"
  gradient-hero-end: "#fce8f0"
  link: "#4262ff"
  success: "#1aab5f"
  error: "#d93025"
  warning: "#f5a623"
  shadow-card: rgba(0, 0, 0, 0.06)
typography:
  display-xl:
    fontFamily: '"Roobert PRO Medium", "Roobert PRO Medium Placeholder", sans-serif'
    fontSize: 48px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: -1.44px
  display-lg:
    fontFamily: '"Roobert PRO Medium", "Roobert PRO Medium Placeholder", sans-serif'
    fontSize: 40px
    fontWeight: 500
    lineHeight: 46px
    letterSpacing: -1.2px
  display-md:
    fontFamily: '"Roobert PRO Medium", "Roobert PRO Medium Placeholder", sans-serif'
    fontSize: 32px
    fontWeight: 500
    lineHeight: 38px
    letterSpacing: -0.96px
  display-sm:
    fontFamily: '"Roobert PRO Medium", "Roobert PRO Medium Placeholder", sans-serif'
    fontSize: 24px
    fontWeight: 500
    lineHeight: 30px
    letterSpacing: -0.6px
  body-lg:
    fontFamily: sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: sans-serif
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
  body-sm:
    fontFamily: sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
  caption:
    fontFamily: sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: sans-serif
    fontSize: 14px
    fontWeight: 900
    lineHeight: 20px
  button-lg:
    fontFamily: sans-serif
    fontSize: 16px
    fontWeight: 900
    lineHeight: 24px
  nav-label:
    fontFamily: sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  button: 8px
  lg: 12px
  xl: 16px
  2xl: 24px
  card: 40px
  pill: 100px
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
    backgroundColor: "{colors.announcement-bar}"
    textColor: "{colors.on-announcement-bar}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.lg}"
    height: 44px
  announcement-cta:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.sm}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    height: 64px
    padding: "{spacing.sm} {spacing.lg}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-login:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    padding: "{spacing.xs} {spacing.sm}"
    rounded: "{rounded.button}"
  nav-cta-contact:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-signup:
    backgroundColor: "{colors.blue-cta}"
    textColor: "{colors.on-blue-cta}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
  button-primary:
    backgroundColor: "{colors.blue-cta}"
    textColor: "{colors.on-blue-cta}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
  button-yellow:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
  badge-outline:
    backgroundColor: transparent
    textColor: "{colors.on-badge-outline}"
    borderColor: "{colors.badge-outline}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "{spacing.xxs} {spacing.xs}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
    height: 48px
  card-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    shadow: rgba(0, 0, 0, 0.06) 0px 1px 8px 0px
  card-feature:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
    shadow: rgba(0, 0, 0, 0.06) 0px 1px 8px 0px
  card-soft:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  hero-band:
    backgroundColor: "{colors.canvas-dot}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  feature-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.lg}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-announcement-bar}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.lg}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  avatar-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "{spacing.xxs} {spacing.xs}"
  ex-pricing-tier:
    description: Default pricing tier card. White surface with large 40 px radius and soft drop shadow.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured pricing tier — yellow fill with ink text, same 40 px card radius.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: Feature summary card — canvas-soft surface with card radius.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary panel — white surface, card radius, hairline item dividers.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row — active state uses brand yellow as left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: Data table chrome — header uses body-sm-strong uppercase; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.body-sm-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card — white surface with large card radius, form-input primitives inside.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog surface — white surface with card radius and elevated shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame — canvas-soft, generous padding, card radius.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — white surface, button radius, soft shadow, body-sm text.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Miro is a visual-workspace platform for teams — and its marketing surface communicates that posture through design rather than copy. The page opens with a dark announcement bar the width of the viewport, a stark `{colors.announcement-bar}` ribbon carrying a yellow `{colors.primary}` CTA chip, then immediately lifts into a pure-white nav. Everything below sits on a near-white dotted grid (`{colors.canvas-dot}`) washed from the centre with a soft lavender-to-blush radial gradient — the closest thing the brand has to a mesh-gradient equivalent. It reads as a shared whiteboard, and that metaphor is doing deliberate work.

Typography is the second decisive voice. The brand's custom geometric rounded sans — Roobert PRO — carries every headline at weight 500 with aggressive negative tracking (`-1.44 px` at 48 px hero, `-1.2 px` at 40 px section). It is never bolded above 500, never all-caps, always sentence-case. Body and button labels fall back to a neutral system sans, but buttons punch their weight with a 900 font-weight label — the heaviest weight on the page, reserved exclusively for action text.

The shape system operates on a deliberate two-scale logic: cards are dramatically rounded at 40 px — almost pill-shaped rectangles — while every button, input, and nav chip stays tight at 8 px. The contrast between these two radii is not accidental; it separates passive container geometry from active interaction geometry. The yellow `{colors.primary}` does not appear as a page-fill anywhere — it lives exclusively as a CTA background in the announcement bar and as a brand accent, while the true conversion CTA in the hero and nav uses a vivid blue `{colors.blue-cta}`.

**Key characteristics:**
- Yellow `{colors.primary}` is the brand signature, not the primary CTA. The primary conversion action uses `{colors.blue-cta}` — a vivid cobalt blue.
- A soft lavender-to-blush radial gradient is the only atmospheric decoration; it floats behind the hero copy as a canvas wash and is never applied to a card or button.
- Cards live at 40 px radius; buttons live at 8 px. These two values never swap.
- Roobert PRO at weight 500 with negative tracking is the entire display-type voice. Body and UI labels use a system sans.
- Button labels are set at font-weight 900 — the heaviest weight on the page, exclusively reserved for CTAs.

## Colors

### Brand & Accent
- **Yellow Primary** (`{colors.primary}` — `#fde050`): The Miro brand yellow. Used as the announcement-bar CTA chip background and as a brand-recognition swatch. This is not the hero CTA color — it is the brand's signature highlighter tone.
- **Blue CTA** (`{colors.blue-cta}` — `#4262ff`): The cobalt blue that carries every primary conversion action — hero "Get started free" button, nav "Get started free" button. Visually dominant against the light hero background.
- **On Blue CTA** (`{colors.on-blue-cta}` — `#ffffff`): White label text on every blue CTA button.
- **On Primary** (`{colors.on-primary}` — `#1c1c1e`): The near-black ink color used as label text on yellow surfaces.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure-white card and nav surface.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f9f9f9`): Near-white inset surface for soft-tinted cards and section alternates.
- **Canvas Dot** (`{colors.canvas-dot}` — `#f0f0f0`): The dotted-grid page background, a near-neutral off-white that the hero gradient overlays.
- **Hairline** (`{colors.hairline}` — `#e0e0e0`): Card borders, input borders, divider lines.
- **Gradient Hero Start** (`{colors.gradient-hero-start}` — `#e8e4f7`): The lavender stop of the hero radial gradient — visible at the left-centre of the hero.
- **Gradient Hero End** (`{colors.gradient-hero-end}` — `#fce8f0`): The blush stop of the hero radial gradient — visible at the right-centre of the hero.

### Text
- **Ink** (`{colors.ink}` — `#1c1c1e`): The near-black used for all headings, nav text, and body on light surfaces. Slightly warmer than pure black — extracted from `--foreground`.
- **Body** (`{colors.body}` — `#3d3d3d`): Secondary text level for supporting paragraphs and sub-headings.
- **Mute** (`{colors.mute}` — `#717171`): Placeholder text, fine-print labels, and disabled states.
- **On Announcement Bar** (`{colors.on-announcement-bar}` — `#ffffff`): White text on the dark announcement bar and dark footer.

### Semantic
- **Link** (`{colors.link}` — `#4262ff`): Inline link color — shares the same cobalt as the primary CTA.
- **Success** (`{colors.success}` — `#1aab5f`): Confirmation / positive status.
- **Error** (`{colors.error}` — `#d93025`): Validation errors and destructive states.
- **Warning** (`{colors.warning}` — `#f5a623`): Caution indicators.

### Announcement Bar
- **Announcement Bar** (`{colors.announcement-bar}` — `#1c1c1e`): Full-width dark ribbon at the very top of the page. Houses the yellow CTA chip and white body copy.

## Typography

### Font Families
Two faces carry the system:

1. **Roobert PRO Medium** — the brand's custom geometric rounded sans. Used exclusively for display headings at weight 500. The rounded terminals give it a warmer, more approachable feel than a strict geometric like Inter. Aggressively negative-tracked at every display size. Never appears at weight 700 or heavier — the display ceiling is 500.

2. **System sans-serif** — the fallback stack carries all body copy, nav labels, and button labels. At body sizes this is neutral and readable. At button size it is set at weight 900 — an intentional contrast to the display face's calm 500 weight.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 500 | 48px | -1.44px | Hero headline ("The collaboration layer your AI tools are missing."). |
| `{typography.display-lg}` | 40px | 500 | 46px | -1.2px | Section headlines below the hero. |
| `{typography.display-md}` | 32px | 500 | 38px | -0.96px | Card-cluster sub-headlines and feature titles. |
| `{typography.display-sm}` | 24px | 500 | 30px | -0.6px | Inline card headings and small display moments. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Lead paragraph under the hero headline. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph and form placeholder text. |
| `{typography.body-md-strong}` | 16px | 700 | 24px | 0 | Inline emphasis in body copy. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary body, footer link rows, announcement bar copy. |
| `{typography.body-sm-strong}` | 14px | 700 | 20px | 0 | Nav label emphasis and table header text. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Badge labels, avatar pill text, fine print. |
| `{typography.button-md}` | 14px | 900 | 20px | 0 | Small-scale CTA labels (announcement bar chip). |
| `{typography.button-lg}` | 16px | 900 | 24px | 0 | Marketing-scale CTA labels ("Get started free", "Contact sales"). |
| `{typography.nav-label}` | 16px | 400 | 24px | 0 | Nav link text (Product, Solutions, Resources, Pricing). |

### Principles
- **Weight 900 is exclusively for action.** The heaviest weight on the page lives only inside button/CTA labels. It never appears in headings or body copy.
- **Roobert PRO at weight 500 is the display ceiling.** The custom geometric face never appears at 600 or heavier — the brand reads calm and approachable because of this.
- **Negative tracking is part of the voice.** Display sizes carry `-1.44 px` to `-0.6 px` tracking. Reverting to default tracking flattens the Roobert PRO personality.
- **Sentence-case headlines.** "The collaboration layer your AI tools are missing." — never all-caps, always terminal-punctuated at display scale.
- **System sans for utility.** Body, nav, and buttons fall back to the OS system sans — this is a deliberate contrast to the custom heading face, not an oversight.

### Note on Font Substitutes
Roobert PRO is a proprietary face. Open-source substitutes:
- **Geometric rounded sans** — *Plus Jakarta Sans* (weight 500) is the closest available rounded-terminal match. *Nunito* is a softer fallback. *DM Sans* at 500 is the sharpest acceptable substitute.

## Layout

### Spacing System
- **Base unit**: 4 px. Every measured value on the page is a multiple of 4.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px · `{spacing.6xl}` 128 px · `{spacing.section}` 160 px.
- **Section padding**: marketing bands use `{spacing.4xl}` to `{spacing.5xl}` top/bottom. The hero band uses `{spacing.4xl}` to give the gradient wash room to breathe.
- **Card interior padding**: large feature cards use `{spacing.xl}` 32 px; standard marketing cards use `{spacing.lg}` 24 px.
- **Inline gap**: button rows and nav elements use `{spacing.xs}` to `{spacing.sm}` between siblings.

### Grid & Container
- **Max width**: approximately 1280 px; content centres with horizontal gutters of `{spacing.lg}` 24 px on desktop.
- **Column patterns**:
  - Hero: centred single-column headline + email input + CTA button stack.
  - Feature sections: 2-up or 3-up card grids at desktop, collapsing to 1-up at mobile.
  - Nav: logo left, link row centre, CTA cluster right.

### Whitespace Philosophy
The hero's lavender-to-blush radial gradient is the decorative anchor; whitespace separates what would otherwise be a very content-dense canvas. Section gaps are generous — `{spacing.4xl}` to `{spacing.5xl}` between bands. Inside cards, headline and body stack tightly, then a wider gap before the CTA. The dotted background grid is visible through the whitespace and reinforces the "whiteboard" metaphor — whitespace is part of the content, not empty filler.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed announcement bar and footer dark bands. |
| Level 1 — Card Float | `rgba(0, 0, 0, 0.06) 0px 1px 8px 0px` | The universal card elevation — white cards floating on the dotted canvas. Every `card-marketing` and `card-feature` uses this single shadow. |
| Level 2 — Elevated | Slightly deeper single drop, still low-opacity. | Modals and dropdown menus. |

Miro uses a single flat shadow across all card surfaces — `rgba(0, 0, 0, 0.06) 0px 1px 8px 0px`. The brand does not layer multiple shadow offsets; the single low-opacity drop is intentional and produces a clean, paper-on-whiteboard feel. The dramatically rounded card corners (`{rounded.card}` 40 px) do the visual heavy lifting that other brands achieve with shadow complexity.

### Decorative Depth
- **Hero radial gradient as canvas wash**: the lavender-to-blush gradient is applied as a full-bleed atmospheric layer behind the hero copy. It never appears at card scale or inside a button. It is the brand's only decorative effect.
- **Dark announcement bar as entry depth**: the `{colors.announcement-bar}` ribbon at the top creates a dark-to-light band transition that anchors the page before the white nav appears.
- **Dotted grid as texture**: the `{colors.canvas-dot}` background carries a visible dot grid that reinforces the whiteboard canvas metaphor without adding visual weight.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed announcement bar and footer bands. |
| `{rounded.xs}` | 4px | Tightest inline elements. |
| `{rounded.sm}` | 6px | Subtle UI element rounding. |
| `{rounded.md}` | 8px | — |
| `{rounded.button}` | 8px | Every button and CTA, every form input. The brand's action-element radius. |
| `{rounded.lg}` | 12px | Occasional card-interior image crops. |
| `{rounded.xl}` | 16px | Slightly larger inset surfaces. |
| `{rounded.2xl}` | 24px | Intermediate container rounding. |
| `{rounded.card}` | 40px | Every marketing card and feature card. The brand's signature container radius — dramatically rounded, almost pill-shaped rectangle. |
| `{rounded.pill}` | 100px | Avatar pills and badge outline elements. |
| `{rounded.full}` | 9999px | Circular avatar containers and fully-round chip elements. |

The two-scale shape logic — `{rounded.button}` 8 px for actions, `{rounded.card}` 40 px for containers — is the most distinctive geometric characteristic of the Miro brand. Swapping these values or homogenising to a single radius breaks the system.

## Components

### Navigation

**`announcement-bar`** — the full-width dark ribbon above the nav.
- Background `{colors.announcement-bar}`, text `{colors.on-announcement-bar}`, body in `{typography.body-sm}`, padding `{spacing.xs} {spacing.lg}`, height 44 px. Contains an avatar pill on the left, body copy centred, and a yellow `announcement-cta` chip on the right.

**`announcement-cta`** — the yellow CTA chip inside the announcement bar.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}` (16 px / 900), shape `{rounded.button}` 8 px, padding `{spacing.xxs} {spacing.sm}`. This is the primary use of yellow as an action surface.

**`nav-bar`** — the sticky white top nav.
- Background `{colors.canvas}`, text `{colors.ink}`, height 64 px, padding `{spacing.sm} {spacing.lg}`. Layout: logo + wordmark left, dropdown link row centre, "Login / Contact sales / Get started free" cluster right.

**`nav-link`** — dropdown-enabled navigation links (Product, Solutions, Resources, Pricing).
- Text `{colors.ink}`, set in `{typography.nav-label}` (16 px / 400), padding `{spacing.xs} {spacing.sm}`.

**`nav-cta-login`** — the ghost "Login" text button in the nav.
- Transparent background, text `{colors.ink}`, label in `{typography.button-lg}` (16 px / 900), padding `{spacing.xs} {spacing.sm}`.

**`nav-cta-contact`** — the "Contact sales" outlined button in the nav.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, label in `{typography.button-lg}`, shape `{rounded.button}` 8 px, padding `{spacing.xs} {spacing.sm}`.

**`nav-cta-signup`** — the blue "Get started free" button in the nav.
- Background `{colors.blue-cta}`, text `{colors.on-blue-cta}`, label in `{typography.button-lg}`, shape `{rounded.button}` 8 px, padding `{spacing.xs} {spacing.sm}`.

### Buttons

**`button-primary`** — the blue "Get started free" CTA at marketing scale (hero).
- Background `{colors.blue-cta}`, text `{colors.on-blue-cta}`, label in `{typography.button-lg}` (16 px / 900), shape `{rounded.button}` 8 px, padding `{spacing.xs} {spacing.sm}`.

**`button-yellow`** — the yellow brand-accent button when the brand color is the CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-lg}` (16 px / 900), shape `{rounded.button}` 8 px, padding `{spacing.xs} {spacing.sm}`.

**`button-secondary`** — the outlined button paired with the primary CTA.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, label in `{typography.button-lg}`, shape `{rounded.button}` 8 px, padding `{spacing.xs} {spacing.sm}`.

### Cards & Containers

**`card-marketing`** — the canonical feature card.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg}` 24 px, shape `{rounded.card}` 40 px, shadow `rgba(0, 0, 0, 0.06) 0px 1px 8px 0px`.

**`card-feature`** — the larger feature card with more generous interior padding.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.xl}` 32 px, shape `{rounded.card}` 40 px, shadow `rgba(0, 0, 0, 0.06) 0px 1px 8px 0px`.

**`card-soft`** — a soft-tinted container for inset regions.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.lg}`, shape `{rounded.card}` 40 px.

### Inputs & Forms

**`form-input`** — the email input in the hero.
- Background `{colors.canvas}`, text `{colors.ink}`, border 1 px solid `{colors.hairline}`, placeholder text in `{typography.body-md}`, shape `{rounded.button}` 8 px, padding `{spacing.xs} {spacing.sm}`, height 48 px.

### Badges & Labels

**`badge-outline`** — the small outlined pill badge (e.g. "Andrey" persona badge in the announcement bar).
- Transparent background, text `{colors.on-badge-outline}`, 1 px solid `{colors.badge-outline}` border, label in `{typography.caption}` (12 px / 400), shape `{rounded.full}`, padding `{spacing.xxs} {spacing.xs}`.

**`avatar-pill`** — the user avatar + name pill visible in the announcement bar persona indicators.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, label in `{typography.caption}`, shape `{rounded.full}`, padding `{spacing.xxs} {spacing.xs}`.

**`link-inline`** — inline body-copy links.
- Text `{colors.link}`, body in `{typography.body-md}`.

### Bands & Layout Regions

**`hero-band`** — the dotted-canvas hero with radial gradient wash.
- Background `{colors.canvas-dot}` with lavender-to-blush radial gradient overlay, text `{colors.ink}`, padding `{spacing.4xl} {spacing.lg}`. Inside: centred headline in `{typography.display-xl}`, lead body in `{typography.body-lg}`, email `form-input`, and `button-primary`.

**`feature-band`** — a standard white content band below the hero.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.lg}`. Section headline in `{typography.display-lg}`.

**`footer`** — the dark bottom band.
- Background `{colors.ink}`, text `{colors.on-announcement-bar}`, padding `{spacing.4xl} {spacing.lg}`, body in `{typography.body-sm}`.

## Do's and Don'ts

### Do
- Reserve `{colors.blue-cta}` for every primary conversion action. The cobalt blue IS the CTA — the yellow is the brand identity.
- Apply `{rounded.card}` 40 px to every card container and `{rounded.button}` 8 px to every button and input. Never swap these two radius values.
- Set every display headline in Roobert PRO at weight 500 with negative letter-spacing. The `-1.44 px` tracking at 48 px is non-negotiable.
- Reserve font-weight 900 exclusively for button and CTA labels. It never appears in headings or body copy.
- Use the lavender-to-blush radial gradient as a full-bleed hero wash only — never crop it to a card background or button.
- Keep the dotted grid background as the page's texture — it reinforces the whiteboard metaphor.
- Use a single low-opacity shadow (`rgba(0, 0, 0, 0.06) 0px 1px 8px 0px`) for card elevation — never stack multiple shadow offsets.

### Don't
- Don't use `{colors.primary}` yellow as the primary page CTA. It belongs on the announcement-bar chip and as a brand-accent, not on the hero button.
- Don't round buttons or inputs to 40 px — that radius belongs to cards only.
- Don't round cards to 8 px — that radius belongs to buttons and inputs only.
- Don't set headlines in weight 600, 700, or 900. The Roobert PRO display voice is calm weight 500.
- Don't set body paragraphs at weight 900. Heavy weight lives only in CTA labels.
- Don't miniaturise the hero radial gradient to a badge or icon — it is an atmospheric effect at page scale only.
- Don't introduce new accent colors. The system operates on yellow-brand + blue-cta + ink + gradient; additions dilute the voice.
- Don't use all-caps for headlines. Sentence-case is the brand's editorial posture.
