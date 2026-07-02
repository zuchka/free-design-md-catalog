---
version: alpha
name: Clay
description: "Clay is a GTM infrastructure brand whose surface is a warm off-white canvas broken at hero scale by a lush, painterly 3-D illustration — rolling hills, cartoon objects, saturated volumetric toys — that acts as the entire decorative system. Below the illustration, the system is disciplined and warm: a near-cream background, a single variable-weight geometric sans (Roobertvf) running from weight 400 body text to weight 575 bold display, and a tight quartet of semantic accent colours (yellow-chartreuse for primary CTA, deep green for the hero surface, blue for links, a warm grey-medium for muted text). The brand earns its playfulness by restraint everywhere else — rounded-square buttons at 12 px, generously rounded cards at 18 px, and almost no decorative chrome outside the hero illustration."
colors:
  primary: "#1b1a18"
  on-primary: "#fefdfb"
  ink: "#000000"
  body: "#1b1a18"
  mute: "#a2a8b7"
  hairline: "#e8e6e1"
  canvas: "#fefdfb"
  canvas-soft: "#f4f3f0"
  canvas-hero: "#2a5e3f"
  link: "#038ff7"
  success: "#047e4a"
  error: "#ee0000"
  warning: "#f5a623"
  cta-primary-bg: "#d4f250"
  cta-primary-text: "#1b1a18"
  cta-demo-bg: "#1b1a18"
  cta-demo-text: "#fefdfb"
  hero-text: "#fefdfb"
  badge-text: "#86521e"
  badge-bg: "#f5e0c3"
  grey-medium: "#a2a8b7"
  clay-black: "#000000"
  blue-500: "#038ff7"
  green-600: "#047e4a"
typography:
  display-xl:
    fontFamily: Roobertvf, Arial, sans-serif
    fontSize: 88px
    fontWeight: 575
    lineHeight: 88px
    letterSpacing: -3.52px
  display-lg:
    fontFamily: Roobertvf, Arial, sans-serif
    fontSize: 72px
    fontWeight: 575
    lineHeight: 72px
    letterSpacing: -2.16px
  display-md:
    fontFamily: Roobertvf, Arial, sans-serif
    fontSize: 48px
    fontWeight: 575
    lineHeight: 48px
    letterSpacing: -1.92px
  display-sm:
    fontFamily: Roobertvf, Arial, sans-serif
    fontSize: 32px
    fontWeight: 575
    lineHeight: 36px
    letterSpacing: -1.28px
  body-lg:
    fontFamily: Roobertvf, Arial, sans-serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Roobertvf, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: Roobertvf, Arial, sans-serif
    fontSize: 16px
    fontWeight: 575
    lineHeight: 24px
  body-sm:
    fontFamily: Roobertvf, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: Roobertvf, Arial, sans-serif
    fontSize: 14px
    fontWeight: 575
    lineHeight: 20px
  caption:
    fontFamily: Roobertvf, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  label-caps:
    fontFamily: Roobertvf, Arial, sans-serif
    fontSize: 11px
    fontWeight: 575
    lineHeight: 16px
    letterSpacing: 0.6px
  button-md:
    fontFamily: Roobertvf, Arial, sans-serif
    fontSize: 14px
    fontWeight: 575
    lineHeight: 20px
  button-lg:
    fontFamily: Roobertvf, Arial, sans-serif
    fontSize: 16px
    fontWeight: 575
    lineHeight: 24px
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  button: 12px
  lg: 18px
  card: 18px
  pill: 10px
  xl: 24px
  pill-full: 40px
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
  5xl: 80px
  6xl: 120px
  section: 160px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    height: 64px
    padding: "{spacing.sm} {spacing.lg}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-demo:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-trial:
    backgroundColor: "{colors.cta-demo-bg}"
    textColor: "{colors.cta-demo-text}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.cta-primary-bg}"
    textColor: "{colors.cta-primary-text}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  button-secondary:
    backgroundColor: "{colors.cta-demo-bg}"
    textColor: "{colors.cta-demo-text}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  button-ghost:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  hero-band:
    backgroundColor: "{colors.canvas-hero}"
    textColor: "{colors.hero-text}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  hero-eyebrow:
    textColor: "{colors.cta-primary-bg}"
    typography: "{typography.label-caps}"
    letterSpacing: 0.6px
  card-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.md} {spacing.lg}"
  card-feature:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg} {spacing.xl}"
  badge-announcement:
    backgroundColor: "{colors.badge-bg}"
    textColor: "{colors.badge-text}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.sm}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
    height: 44px
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  footer:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.lg}"
  logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.lg} {spacing.xl}"
  tab-pill:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  cookie-banner:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg} {spacing.xl}"
  ex-pricing-tier:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    backgroundColor: "{colors.cta-demo-bg}"
    textColor: "{colors.cta-demo-text}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-product-selector:
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.cta-primary-bg}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.label-caps}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    backgroundColor: "{colors.canvas-soft}"
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
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Clay is a GTM-infrastructure platform — the homepage reads as a tools brand pitching engineers and revenue teams simultaneously. Its design earns that dual audience with a strikingly literal visual metaphor: the hero is a full-bleed, painterly 3-D illustration of a grassy diorama populated with cartoon objects (a pencil, a mailbox, a funnel, a bar chart, a magnifying glass), rendered on a saturated deep-green ground `{colors.canvas-hero}`. Below the fold, the surface immediately resets to warm off-white — the brand's workhorse canvas — and stays there for the rest of the page.

The type system is built around a single variable-weight geometric sans, **Roobertvf**, used for everything. The face runs at weight 575 for all display headings (the brand's "bold" — not a conventional 700, which makes it feel friendly rather than authoritative) and weight 400 for body copy. Letter-spacing goes deeply negative at display scale: -3.52 px at 88 px hero, -2.16 px at 72 px section. The brand never uses a monospace face or a secondary serif; Roobertvf does the entire job.

The colour system is deliberately minimal outside the hero illustration. A warm near-white `{colors.canvas}` (#fefdfb) is the primary surface; `{colors.canvas-soft}` (#f4f3f0) is used for card insets and nav button fills. The only marketing accent is a saturated yellow-chartreuse `{colors.cta-primary-bg}` (#d4f250), reserved exclusively for primary CTAs. Secondary CTAs invert to near-black `{colors.cta-demo-bg}` (#1b1a18). The brand does not use gradients, decorative blobs, or geometric backgrounds — the 3-D illustration is the entire decoration system.

Shapes are rounded but squared, never pill. Primary CTAs carry a 12 px radius (`{rounded.button}`) — a deliberate rounded-rectangle rather than a pill. Cards sit at 18 px (`{rounded.card}`). The brand's large radius CSS token (`--radius--large`, 2.5 rem ≈ 40 px) appears on modal-scale containers only. Everything reads as warm, approachable engineering — not consumer-app bubbly.

**Key Characteristics:**
- Hero band: deep-green surface with the 3-D illustration as full-bleed backdrop; all CTA text is warm off-white on that green.
- Yellow-chartreuse `{colors.cta-primary-bg}` is the single primary accent. It appears only on the "Get a demo" and "Start free trial" CTAs; nowhere else in the chrome.
- Rounded-rectangle buttons at exactly 12 px, not pill-shaped. The 10 px pill token exists for badge/tag elements only.
- Announcement eyebrow labels in warm amber-on-peach badge styling (`{colors.badge-bg}` / `{colors.badge-text}`), all-caps tracked, above hero headlines.
- No secondary typeface. Roobertvf weight 575 is the display face; weight 400 is body.

## Colors

### Brand & Accent
- **Canvas** (`{colors.canvas}` — `#fefdfb`): The warm off-white page surface — not pure white. Every card, modal, and nav bar sits on this tone. The slight warmth reads as premium-without-trying.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f4f3f0`): The secondary surface — button fills for ghost CTAs, card inset regions, footer background. Extracted directly from the live button bg `rgb(244, 243, 240)`.
- **Canvas Hero** (`{colors.canvas-hero}` — `#2a5e3f`): The hero section's deep muted green. Carries the 3-D illustration and warm-white hero copy. The brand's only full-bleed saturated background.
- **CTA Primary BG** (`{colors.cta-primary-bg}` — `#d4f250`): The yellow-chartreuse exclusive to primary CTAs. High visual contrast against both the dark hero surface and the light canvas. Never used as text, never used for decoration.
- **CTA Demo BG** (`{colors.cta-demo-bg}` — `#1b1a18`): Near-black used as the secondary CTA surface ("Get a demo" dark button) and for primary ink text throughout the page.
- **Blue 500** (`{colors.blue-500}` — `#038ff7`): The link colour. Extracted from the `--color--blue-500` CSS variable. Used for inline links and interactive text states.
- **Green 600** (`{colors.green-600}` — `#047e4a`): Success / positive-state indicator. Extracted from `--color--green-600`. Used for check marks, success badges, and positive copy.

### Text
- **Ink** (`{colors.ink}` — `#000000`): The absolute-black heading colour used on light surfaces below the hero.
- **Body** (`{colors.body}` — `#1b1a18`): The working near-black for all body paragraphs and nav text on light surfaces. Warmer than pure black.
- **Hero Text** (`{colors.hero-text}` — `#fefdfb`): Warm white, used for all copy and labels inside the hero band on the deep-green surface.
- **Grey Medium** (`{colors.grey-medium}` — `#a2a8b7`): Extracted from `--color--grey-medium`. Muted text: placeholder copy, logo strip labels, secondary captions.

### Semantic
- **Link** (`{colors.link}` — `#038ff7`): The brand's inline link colour. Blue-500 CSS variable.
- **Success** (`{colors.success}` — `#047e4a`): Green-600. Used for checkmarks and positive-state labels on pricing and feature lists.
- **Error** (`{colors.error}` — `#ee0000`): Destructive / validation red.
- **Warning** (`{colors.warning}` — `#f5a623`): Caution / pending indicator.
- **Hairline** (`{colors.hairline}` — `#e8e6e1`): Warm-toned divider lines — card borders, table rows, input borders.

### Badge
- **Badge BG** (`{colors.badge-bg}` — `#f5e0c3`): Warm peach fill for the announcement eyebrow pill ("LATEST LAUNCH: AUDIENCES IN CLAY").
- **Badge Text** (`{colors.badge-text}` — `#86521e`): Dark amber text set inside the announcement pill.

## Typography

### Font Family
One variable-weight geometric sans, **Roobertvf**, carries the entire system. It appears at weight 575 for every display heading and button label, and weight 400 for every body paragraph, nav link, caption, and form input. The brand does not use a secondary face, a mono face, or a serif. The variable-font axis means intermediate weights (e.g. 575) are available without separate font files — a technically clean but visually distinctive choice, because 575 sits between typical "semibold" (600) and "medium" (500) and reads as deliberately friendly.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 88px | 575 | 88px | -3.52px | Hero headline ("Build systems to grow revenue"). Full-bleed, white on green. |
| `{typography.display-lg}` | 72px | 575 | 72px | -2.16px | Section headlines on light canvas — major content bands. |
| `{typography.display-md}` | 48px | 575 | 48px | -1.92px | Sub-section headings, feature-card cluster headlines. |
| `{typography.display-sm}` | 32px | 575 | 36px | -1.28px | Smaller section titles and card eyebrow headings. |
| `{typography.body-lg}` | 20px | 400 | 28px | 0 | Lead paragraphs directly under section headlines. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body text, nav links, form inputs. |
| `{typography.body-md-strong}` | 16px | 575 | 24px | 0 | Inline emphasis within body paragraphs. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary body, footer columns, card sub-labels. |
| `{typography.body-sm-strong}` | 14px | 575 | 20px | 0 | Tab-pill labels, small button labels. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Footnotes, fine print, small metadata labels. |
| `{typography.label-caps}` | 11px | 575 | 16px | 0.6px | All-caps eyebrow labels ("LATEST LAUNCH:"). The only positive-tracking use in the system. |
| `{typography.button-md}` | 14px | 575 | 20px | 0 | Nav-scale button labels ("Log in", "Get a demo" nav). |
| `{typography.button-lg}` | 16px | 575 | 24px | 0 | Marketing-scale CTA labels ("Start free trial", "Get a demo"). |

### Principles
- **Negative tracking is part of the voice.** Display headlines use aggressive -3.52 px to -1.28 px tracking. Body text and buttons stay at 0. The contrast between tightly-tracked display and neutral body is the typographic heartbeat of the system.
- **One font, all weights.** Roobertvf's variable-font axis means the brand does not stack typefaces. The system reads unified; differentiation comes from weight and size only.
- **Weight 575 is the display ceiling.** The brand never goes to 700 or 800. This keeps the brand feeling warm and approachable rather than assertive.
- **All-caps only for eyebrows.** The `{typography.label-caps}` token is the only positive-tracking, all-caps usage. Headlines and buttons are always sentence-case.
- **No mono face.** Unlike developer-platform brands, Clay does not use a monospaced face anywhere. Code or technical references appear in body-weight Roobertvf.

### Note on Font Substitutes
Roobertvf is a proprietary variable-font. Closest open-source substitute: **Inter** (variable font, weight axis covers 400–700) with `font-feature-settings: "ss01"` for the geometric alternates. For the 575 weight axis, interpolate between `font-weight: 500` and `font-weight: 600`. **Plus Jakarta Sans** is a strong second option.

## Layout

### Spacing System
- **Base unit**: 4 px. The spacing scale is 4 px-rooted; the extracted values (4 px, 4.96 px, 6.08 px, 8 px, 16 px) confirm this. The fractional values (4.96, 6.08) come from Webflow's layout engine scaling — treat the clean multiples as the canonical tokens.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 80 px · `{spacing.6xl}` 120 px · `{spacing.section}` 160 px.
- **Hero band padding**: `{spacing.4xl}` top/bottom to give the 3-D illustration room without the copy floating.
- **Card interior padding**: feature cards use `{spacing.md}` / `{spacing.lg}` (16–24 px); the extracted card value is `16px 20px` — mapped to `{spacing.md}` vertical and close to `{spacing.lg}` horizontal.
- **Section gap**: major content bands separate by `{spacing.5xl}` to `{spacing.6xl}`.

### Grid & Container
- **Max width**: approximately 1200–1280 px; content centres with `{spacing.lg}` horizontal gutters on desktop.
- **Column patterns**:
  - Hero: full-bleed illustration + centred or left-aligned headline + 2-CTA row.
  - Feature row: 3-up or 4-up cards on desktop, stacking to 1-up on mobile.
  - Logo strip: single scrolling row of partner / customer logos.
  - Pricing: 3-up on desktop with a featured tier distinguished by dark surface.

### Whitespace Philosophy
The 3-D hero illustration does all the decorative work; the body of the page is intentionally spacious and quiet. Section padding is generous — bands breathe. Inside cards, content is tighter (`{spacing.md}` 16 px) to keep the grid dense enough to feel informative. The brand reads as structured and purposeful, not airy editorial.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Hero band, full-bleed illustration backdrop, footer. |
| Level 1 — Warm Border | `1px solid {colors.hairline}` | Default card chrome — warm divider ring distinguishes card from canvas. |
| Level 2 — Soft Lift | `0 2px 8px rgba(0,0,0,0.06)` plus hairline ring | Feature cards and marketing callout cards — very gentle lift. |
| Level 3 — Modal | `0 8px 32px rgba(0,0,0,0.12)` plus hairline ring | Cookie banner, modal dialogs, dropdown menus. |

The brand avoids strong drop shadows. Elevation is communicated primarily through surface colour change (`{colors.canvas}` cards on `{colors.canvas-soft}` background) rather than shadow depth. The cookie banner in the screenshot sits at Level 3 — it is the most elevated element visible.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero and footer bands. |
| `{rounded.xs}` | 4px | Tightest UI element corners — internal chips. |
| `{rounded.sm}` | 8px | Small utility elements. Corresponds to `--radius--small` (0.5 rem). |
| `{rounded.md}` | 12px | Button radius — the brand's standard CTA shape. All buttons measured at exactly 12 px. |
| `{rounded.button}` | 12px | Canonical CTA radius. Every button component resolves here. |
| `{rounded.lg}` | 18px | Card radius — feature cards, marketing cards, cookie banner card. |
| `{rounded.card}` | 18px | Canonical card radius. Every card component resolves here. |
| `{rounded.pill}` | 10px | Announcement badge / tag pill only. Not used on standard rectangular CTAs. |
| `{rounded.xl}` | 24px | Larger container chrome. |
| `{rounded.pill-full}` | 40px | Large-radius modal containers. Corresponds to `--radius--large` (2.5 rem). |
| `{rounded.full}` | 9999px | Circular avatar / icon containers. |

The 12 px button radius is a deliberate rounded-rectangle — not a pill. The brand signals approachability without sacrificing the structured, tool-like reading that pill buttons (at 100 px) would undercut.

## Components

### Buttons

**`button-primary`** — the chartreuse CTA. The brand's single conversion-target colour.
- Background `{colors.cta-primary-bg}` (#d4f250), text `{colors.cta-primary-text}` (#1b1a18), label in `{typography.button-lg}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.button}` 12 px.

**`button-secondary`** — the near-black "Get a demo" CTA paired with the chartreuse primary.
- Background `{colors.cta-demo-bg}` (#1b1a18), text `{colors.cta-demo-text}` (#fefdfb), same typography + padding + shape as `button-primary`.

**`button-ghost`** — the soft canvas-toned ghost button used in nav ("Get a demo" nav variant).
- Background `{colors.canvas-soft}`, text `{colors.body}`, label in `{typography.button-md}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.button}` 12 px. Extracted from live button: `rgb(244, 243, 240)` bg, `rgb(27, 26, 24)` text.

**Nav CTAs:**

**`nav-cta-demo`** — the small "Get a demo" button in the nav, ghost-toned.
- Background `{colors.canvas-soft}`, text `{colors.body}`, label `{typography.button-md}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.button}` 12 px.

**`nav-cta-trial`** — the small "Start free trial" button in the nav, dark-filled.
- Background `{colors.cta-demo-bg}`, text `{colors.cta-demo-text}`, same typography / padding / shape as `nav-cta-demo`.

### Navigation

**`nav-bar`** — the top sticky navigation.
- Background `{colors.canvas}`, text `{colors.ink}`, height 64 px, padding `{spacing.sm} {spacing.lg}`. Layout: logo left, link row centre, "Get a demo / Start free trial" cluster right. Keyboard shortcut indicators (⌘K, search) sit between the links and the CTAs.

**`nav-link`** — the centred nav text links (Product, Use Cases, Solutions, Resources, Company, Pricing, Log in).
- Text `{colors.body}`, label in `{typography.body-md}`, padding `{spacing.xs} {spacing.sm}`, shape `{rounded.full}` on hover.

### Hero

**`hero-band`** — the deep-green full-bleed hero with 3-D illustration backdrop.
- Background `{colors.canvas-hero}` (#2a5e3f), text `{colors.hero-text}`, padding `{spacing.4xl} {spacing.lg}`. Inside: announcement badge above the headline, headline in `{typography.display-xl}` (sentence-case, deeply negative-tracked), a right-column body lead in `{typography.body-lg}`, then a 2-CTA row with `button-primary` + `button-secondary`. The 3-D illustration occupies the full band background — it is the decoration system.

**`hero-eyebrow`** — the "LATEST LAUNCH: AUDIENCES IN CLAY →" label above the hero headline.
- Background `{colors.badge-bg}`, text `{colors.badge-text}`, label in `{typography.label-caps}` (all-caps, tracked), shape `{rounded.pill}` 10 px.

### Cards & Containers

**`card-marketing`** — the canonical content card.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.card}` 18 px. Carries Level 1 warm-border ring.

**`card-feature`** — the inset feature card on soft-canvas background.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.lg} {spacing.xl}`, shape `{rounded.card}` 18 px.

**`tab-pill`** — filter / tab chips used to switch between feature categories.
- Background `{colors.canvas-soft}`, text `{colors.body}`, label in `{typography.body-sm-strong}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.pill}` 10 px.

**`badge-announcement`** — the "LATEST LAUNCH" eyebrow pill.
- Background `{colors.badge-bg}`, text `{colors.badge-text}`, label in `{typography.label-caps}`, shape `{rounded.pill}` 10 px, padding `{spacing.xs} {spacing.sm}`.

### Inputs & Forms

**`form-input`** — the standard text input.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, label in `{typography.body-md}`, padding `{spacing.xs} {spacing.md}`, height 44 px, shape `{rounded.button}` 12 px.

### Miscellaneous

**`logo-strip`** — the partner / customer logo row.
- Background `{colors.canvas}`, text `{colors.mute}`, padding `{spacing.lg} {spacing.xl}`. Logos rendered at consistent height in muted/greyscale treatment.

**`link-inline`** — inline body-copy links.
- Text `{colors.link}` (#038ff7), label in `{typography.body-md}`, underline on hover.

**`cookie-banner`** — the cookie consent modal (visible in screenshot).
- Background `{colors.canvas}`, text `{colors.ink}`, label in `{typography.body-sm}`, shape `{rounded.card}` 18 px, padding `{spacing.lg} {spacing.xl}`. Elevated to Level 3 shadow. Contains two buttons: "Accept all" (`button-ghost`) and a text link "More choices".

**`footer`** — the bottom multi-column navigation.
- Background `{colors.canvas-soft}`, text `{colors.body}`, label in `{typography.body-sm}`, padding `{spacing.4xl} {spacing.lg}`. Column headers in `{typography.body-sm-strong}`.

## Do's and Don'ts

### Do
- Use `{colors.cta-primary-bg}` (#d4f250) exclusively on primary CTAs. The chartreuse is the brand's only saturated accent — diluting it by applying it to decorative elements destroys its signal value.
- Keep all buttons at `{rounded.button}` 12 px — rounded rectangle, not pill. The shape communicates "tool" not "consumer app."
- Set every headline in `{typography.display-*}` at weight 575 with deeply negative tracking. The tracking is the brand's typographic fingerprint.
- Use the 3-D illustration as the hero backdrop at its intended scale — full-bleed, filling the entire hero band. Never crop to a small icon or miniaturise it.
- Maintain the warm off-white `{colors.canvas}` (#fefdfb) as the page surface — not pure #ffffff. The warmth is deliberate and distinguishes Clay from cold tech brands.
- Reserve `{rounded.pill}` 10 px for badge / tag / announcement elements only. Do not apply it to buttons.
- Use `{typography.label-caps}` (all-caps, 0.6 px tracked) exclusively for eyebrow labels — the only positive-tracked instance in the system.

### Don't
- Don't pill-shape the primary CTA. The measured button radius is 12 px — a rounded rectangle. Pill shapes misrepresent the brand.
- Don't introduce gradient backgrounds or blob decorations. The 3-D illustration is the decoration system; everything else is flat.
- Don't use the chartreuse `{colors.cta-primary-bg}` for text, borders, or background fills outside of CTA buttons.
- Don't apply weight 700 or heavier to Roobertvf. The display ceiling is 575.
- Don't use all-caps outside of `{typography.label-caps}` eyebrows. Headlines and buttons are sentence-case throughout.
- Don't set body paragraphs in anything other than weight 400 Roobertvf. The brand uses one face, one body weight.
- Don't use heavy drop shadows. Elevation is communicated through surface-colour shifts and hairline borders, not dramatic shadow depth.
