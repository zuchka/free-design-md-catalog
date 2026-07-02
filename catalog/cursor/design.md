---
version: alpha
name: Cursor
description: "Cursor is a developer-tool brand that earns its posture through radical restraint: a warm off-white canvas the color of aged paper, a near-black ink that reads darker than pure black because of its subtle warm cast, and a single forest-green primary that functions as the sole conversion surface. The decorative system is essentially nothing — no gradients, no illustrations, no icon libraries — just the brand's own proprietary gothic face (CursorGothic) set at weight 400 across every size, from a 52 px hero headline tracked tight to a 12 px button label. That single-weight typographic discipline is the voice. The only other color visible is a warm amber used for a secondary badge inside the app mockup — a technical accent, not a marketing one."
colors:
  primary: "#34785c"
  on-primary: "#ffffff"
  accent-amber: "#c08532"
  accent-orange: "#f54e00"
  ink: "#26251e"
  body: "#26251e"
  mute: "color-mix(in oklab, #26251e 60%, transparent)"
  hairline: "color-mix(in oklab, #26251e 5%, transparent)"
  hairline-mid: "color-mix(in oklab, #26251e 20%, transparent)"
  canvas: "#f7f7f4"
  canvas-soft: "#f2f1ed"
  canvas-chrome: "#f2f1ed"
  on-canvas: "#26251e"
  white: "#ffffff"
  button-theme-bg: "#26251e"
  button-sec-bg: transparent
  button-sec-text: "#26251e"
  success: "#34785c"
  warning: "#f54e00"
  warning-bg: "color-mix(in srgb, #f54e00 15%, transparent)"
typography:
  display-xl:
    fontFamily: CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 52px
    fontWeight: 400
    lineHeight: 59.8px
    letterSpacing: -1.3px
  display-lg:
    fontFamily: CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 22px
    fontWeight: 400
    lineHeight: 28.6px
    letterSpacing: -0.11px
  display-md:
    fontFamily: CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 31px
    letterSpacing: 0px
  body-lg:
    fontFamily: CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 22px
    fontWeight: 400
    lineHeight: 33px
    letterSpacing: 0px
  body-md:
    fontFamily: CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
    letterSpacing: 0px
  caption:
    fontFamily: CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0px
  button-md:
    fontFamily: CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0px
  button-lg:
    fontFamily: CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0px
  nav-label:
    fontFamily: CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  button: 4px
  card: 4px
  md: 8px
  lg: 16px
  pill: 9999px
spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 32px
  4xl: 40px
  5xl: 48px
  6xl: 64px
  section: 96px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    height: 48px
    padding: "{spacing.sm} {spacing.lg}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.sm} {spacing.md}"
  nav-cta-download:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-contact:
    backgroundColor: "{colors.button-sec-bg}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-mid}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-signin:
    backgroundColor: "{colors.button-sec-bg}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.sm} {spacing.md}"
    rounded: "{rounded.button}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
    border: 1px solid {colors.primary}
  button-secondary:
    backgroundColor: "{colors.button-sec-bg}"
    textColor: "{colors.button-sec-text}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
    border: 1px solid {colors.hairline-mid}
  button-amber:
    backgroundColor: "{colors.accent-amber}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 2px {spacing.sm}
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.5xl} {spacing.lg}"
  hero-headline:
    fontFamily: "{typography.display-xl}"
    textColor: "{colors.ink}"
    letterSpacing: -1.3px
  card-feature:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.md} {spacing.lg} {spacing.lg}"
  card-app-mockup:
    backgroundColor: "{colors.canvas-chrome}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
  app-sidebar-row:
    backgroundColor: "{colors.canvas-chrome}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    padding: "{spacing.xs} {spacing.md}"
  app-tab-bar:
    backgroundColor: "{colors.canvas-chrome}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    padding: "{spacing.xs} {spacing.md}"
  app-editor-surface:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md} {spacing.lg}"
  badge-status:
    backgroundColor: "{colors.canvas-chrome}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 2px {spacing.xs}
  badge-build:
    backgroundColor: "{colors.accent-amber}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 2px {spacing.sm}
  link-inline:
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-mid}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
    height: 32px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    padding: "{spacing.3xl} {spacing.lg}"
  section-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section} {spacing.lg}"
  pricing-card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl} {spacing.2xl}"
  ex-pricing-tier:
    description: Default pricing tier card on canvas-soft with hairline border and body-md feature list.
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl} {spacing.2xl}"
  ex-pricing-tier-featured:
    description: Featured tier — polarity-flipped to ink-dark surface with white text.
    backgroundColor: "{colors.button-theme-bg}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl} {spacing.2xl}"
  ex-product-selector:
    description: Feature summary card on canvas-chrome surface — repurposed for plan feature tiers.
    backgroundColor: "{colors.canvas-chrome}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary panel — line items per plan add-on.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses primary green as a left-edge indicator bar.
    backgroundColor: "{colors.canvas-chrome}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  ex-data-table-cell:
    description: Data table chrome. Header uses caption weight 400; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card on canvas-soft with form-input primitives inside.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-modal-card:
    description: Modal dialog surface — card-feature chrome with slightly elevated soft shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-empty-state-card:
    description: Empty-state frame on canvas-soft with generous padding.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.4xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — card-feature shape with soft ambient shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.caption}"
---
## Overview

Cursor's design language is one of the quietest in developer tooling — and that quiet is earned, not accidental. Every surface sits on a warm off-white (`{colors.canvas}` `#f7f7f4`) that reads like uncoated paper rather than screen-glare white. The ink is not pure black; it's `{colors.ink}` `#26251e`, a near-black with enough warmth to feel like letterpress type. Against this palette, the only saturated note is a single forest green (`{colors.primary}` `#34785c`) reserved entirely for primary CTAs and success semantics. The page's hierarchy is built by size and weight alone — not by colour, not by background tinting, not by decorative chrome.

The typographic system is unusually disciplined: CursorGothic, the brand's proprietary gothic face, appears at weight 400 across every role from 52 px hero headline to 12 px button label. The only exception is the button label, which steps to weight 600 — the single heaviest weight deployed anywhere on the surface. Headlines are set with deliberate negative tracking (`-1.3 px` at 52 px), giving the hero text an editorial density more common in print than on screen. No uppercase. No mono. No decorative eyebrow labels. The face does all the work.

The app mockup visible in the hero is the brand's one concession to visual richness: a macOS-chrome window rendered in the slightly-warmer `{colors.canvas-chrome}` `#f2f1ed`, carrying a sidebar, a task list, and a code editor — all set in the same face at body-sm scale. An amber `{colors.accent-amber}` "Build" pill fires inside the mockup as a technical status badge, not a marketing accent. That amber never appears outside the application-layer surfaces.

Decoration is essentially absent. No gradients. No illustrations. No icon system visible at marketing scale. The mesh or gradient-backed hero pattern common to other developer-tool brands does not exist here — the hero background is the same `{colors.canvas}` as the rest of the page. The restraint is the brand.

## Colors

### Surface
- **Canvas** (`{colors.canvas}` — `#f7f7f4`): The universal page background. The warm off-white that gives the entire site its paper-like character. Also the meta theme-color — the brand considers this its defining surface tone.
- **Canvas Soft / Chrome** (`{colors.canvas-soft}` — `#f2f1ed`): The slightly-darker step used for card fills and the app-mockup window background (`--color-theme-product-chrome`). Cards float on this rather than pure white.

### Brand
- **Primary / Forest Green** (`{colors.primary}` — `#34785c`): The sole conversion colour. Used for "Download for macOS" and every other primary CTA, its 1 px solid border, and the semantic success token. Never used as a background band, never used decoratively.
- **Accent Amber** (`{colors.accent-amber}` — `#c08532`): The warm amber visible on the "Build" status pill inside the app mockup. A technical state indicator, not a marketing accent. Does not appear at marketing scale.
- **Accent Orange / Warning** (`{colors.accent-orange}` — `#f54e00`): The `--color-accent` CSS custom property; surfaces in warning states and the `{colors.warning-bg}` soft tint.

### Text
- **Ink / Body** (`{colors.ink}` — `#26251e`): Every heading, every body paragraph, every nav label on the warm-white surface. The warm cast is non-negotiable — do not substitute pure `#000`.
- **Mute** (`{colors.mute}`): A `color-mix(in oklab, #26251e 60%, transparent)` computed tone — used for secondary body text, placeholders, and de-emphasised labels.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): Text on the green primary surface.
- **White** (`{colors.white}` — `#ffffff`): Absolute white — used on dark-polarity-flipped surfaces.

### Borders
- **Hairline** (`{colors.hairline}`): `color-mix(in oklab, #26251e 5%, transparent)` — the thinnest divider, used for card outlines and input borders at rest.
- **Hairline Mid** (`{colors.hairline-mid}`): `color-mix(in oklab, #26251e 20%, transparent)` — the slightly-stronger divider used for "Contact sales" button outlines and prominent separators.

### Semantic
- **Success** (`{colors.success}` — `#34785c`): Resolves to the same forest green as `{colors.primary}` — the brand unifies conversion and success under one token.
- **Warning** (`{colors.warning}` — `#f54e00`): The brand's caution/alert colour; appears in error states.
- **Warning Bg** (`{colors.warning-bg}`): `color-mix(in srgb, #f54e00 15%, transparent)` — soft pastel tint for inline warning banners.

## Typography

### Font Family
CursorGothic is a single proprietary gothic face that carries the entire typographic system. It is humanist-grotesque in character — closer to a Gill Sans or Johnston lineage than to a geometric Futura. Every role — display, body, button, caption — uses the same face. The weight axis is nearly binary: 400 for everything narrative, 600 for button labels only. The brand never promotes type to 700 or heavier.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 52px | 400 | 59.8px | -1.3px | Hero headline ("Cursor is your coding agent for building ambitious software."). The brand's most recognisable typographic moment. |
| `{typography.display-lg}` | 22px | 400 | 28.6px | -0.11px | Section sub-headlines and card cluster headings. |
| `{typography.display-md}` | 20px | 400 | 31px | 0 | Secondary section headings, pricing tier names. |
| `{typography.body-lg}` | 22px | 400 | 33px | 0 | Lead paragraphs immediately under section headlines. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph. |
| `{typography.body-sm}` | 14px | 400 | 21px | 0 | Secondary body, app-mockup interface text, card supporting copy. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Footer links, badge labels, app-mockup fine labels. |
| `{typography.button-md}` | 12px | 600 | 16px | 0 | The canonical CTA label size — "Download for macOS", "Request a demo". The only 600-weight use. |
| `{typography.button-lg}` | 14px | 600 | 20px | 0 | Larger button label when a CTA warrants marketing scale. |
| `{typography.nav-label}` | 14px | 400 | 20px | 0 | Nav product / enterprise / pricing / resources links. |

### Principles
- **Single-face, single-weight discipline.** CursorGothic at 400 is the entire voice. Introducing a second face or a heavier weight breaks the system.
- **Negative tracking is reserved for the hero.** Only `{typography.display-xl}` carries `-1.3 px` tracking. Section headings sit at `-0.11 px` or neutral. Body copy never tracks negatively.
- **No uppercase, no smallcaps, no mono.** Headlines and labels are in sentence-case throughout. There is no monospace face in the marketing layer — the app mockup renders its code in the same CursorGothic, not a technical mono.
- **Weight 600 is the absolute ceiling and appears only on button labels.** Every other token is 400. The brand's visual calm comes directly from this constraint.

### Note on Font Substitutes
CursorGothic is proprietary. The closest open-source substitute for the humanist-grotesque character is **Gill Sans Nova** (400 / 600) or, as a screen-optimised alternative, **Nunito** (400 / 600). For the warm-inkiness of the ink color, ensure `font-smooth: antialiased` is set.

## Layout

### Spacing System
The brand's spacing scale is built on a 4 px base unit with pragmatic intermediate steps pulled from the live page:

- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 20 px · `{spacing.2xl}` 24 px · `{spacing.3xl}` 32 px · `{spacing.4xl}` 40 px · `{spacing.5xl}` 48 px · `{spacing.6xl}` 64 px · `{spacing.section}` 96 px.
- **Section padding**: marketing bands use `{spacing.5xl}` to `{spacing.section}` top/bottom. The hero gives the large headline room with ~96 px above/below.
- **Card interior padding**: feature cards sit at `{spacing.md}` top with `{spacing.lg}` side — approximately 12 px / 15 px as measured — comfortable but not extravagant.
- **Button padding**: the extracted primary CTA is `6px 10px` — maps to `{spacing.xs}` vertical / `{spacing.md}` horizontal. The brand's buttons are intentionally small and precise, not marketing-billboard-scale.

### Grid & Container
- **Max width**: approximately 1280 px centred, with `{spacing.lg}` 16–24 px gutters.
- **Column patterns**:
  - Hero: single-column headline + CTA row, then a full-width app-mockup screenshot below.
  - Feature section: likely 2-up or 3-up card grids, each card in `{colors.canvas-soft}` fill.
  - Pricing: 3-up at desktop, vertical stack at mobile.
  - Nav: logo left, link row centre, CTAs right.

### Whitespace Philosophy
The brand uses whitespace as its primary decorative tool — no ornamental backgrounds, no colour bands, no gradient washes. Section spacing is generous enough that the page never feels dense, but the hero headline's sheer scale at 52 px does the heavy lifting. The app mockup drops immediately below the CTA row and runs close to full page width — it is the centrepiece, not a sidebar. Interior card spacing is tight: the brand does not pad cards generously; it trusts the face to breathe on its own.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero band, nav bar, section bands. |
| Level 1 — Hairline Ring | `0 0 0 1px color-mix(in oklab, #26251e 5%, transparent)` inset. | Default card chrome — the barely-visible ring that tells you a surface is a card. |
| Level 2 — Ambient Glow | `rgba(0,0,0,0.02) 0px 0px 16px 0px, rgba(0,0,0,0.008) 0px 0px 8px 0px` | The measured card shadow — a barely-there ambient glow with two stacked radial blurs. Never a directional drop. |

The brand uses the subtlest possible elevation language — the card shadow is so soft (2 % and 0.8 % opacity) that it functions more as a vignette than a shadow. Cards are distinguished by their `{colors.canvas-soft}` fill relative to the `{colors.canvas}` page background, not by any dramatic depth.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands, nav, footer. |
| `{rounded.xs}` | 2px | Tightest UI radius — the `--radius-2xs` token; status chips inside the app mockup. |
| `{rounded.sm}` | 4px | The brand's base UI radius (`--radius-sm` as `.25rem`). Canonical for all buttons and cards. |
| `{rounded.button}` | 4px | Extracted primary CTA radius — explicitly measured and locked. Every `button-primary`, `button-secondary`, `nav-cta-*` resolves here. |
| `{rounded.card}` | 4px | Extracted card radius — explicitly measured and locked. All card components resolve here. |
| `{rounded.md}` | 8px | Mid-range radius for slightly softer surfaces (`--radius-md`). |
| `{rounded.lg}` | 16px | Largest card chrome (`--radius-2xl` is 16 px in the system). |
| `{rounded.pill}` | 9999px | Not observed in the marketing CTA layer — the brand does not use pill-shaped marketing buttons. Reserved for any inline chip that needs full-round. |

**Critical observation**: Cursor does NOT use pill-shaped CTAs. Both "Download for macOS" and "Request a demo" are square-cornered with a 4 px radius. Do not apply `{rounded.pill}` to any button component.

## Components

### Buttons

**`button-primary`** — the forest-green download / primary conversion CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.button-md}` (12 px / 600), padding `{spacing.xs} {spacing.md}`, shape `{rounded.button}` 4 px, 1 px solid `{colors.primary}` border.

**`button-secondary`** — the outline-style secondary CTA ("Request a demo →").
- Background `{colors.button-sec-bg}` transparent, text `{colors.ink}`, same typography as `button-primary`, 1 px solid `{colors.hairline-mid}` border, shape `{rounded.button}` 4 px.

**`button-amber`** — the amber "Build" pill inside the app mockup.
- Background `{colors.accent-amber}`, text `{colors.on-primary}`, label `{typography.button-md}`, padding `2px {spacing.sm}`, shape `{rounded.button}` 4 px. Used as a technical status badge inside the editor chrome, not as a marketing CTA.

### Navigation

**`nav-bar`** — the top navigation.
- Background `{colors.canvas}`, text `{colors.ink}`, height ~48 px, padding `{spacing.sm} {spacing.lg}`. Left: logotype. Centre: Product / Enterprise / Pricing / Resources links. Right: Sign in / Contact sales / Download CTAs.

**`nav-link`** — the centred link row items.
- Text `{colors.ink}`, set in `{typography.nav-label}` (14 px / 400), padding `{spacing.sm} {spacing.md}`. No visible hover pill or background on the extracted surface.

**`nav-cta-download`** — the small "Download" button at the nav's far right.
- Background `{colors.primary}`, text `{colors.on-primary}`, shape `{rounded.button}` 4 px, label `{typography.button-md}`.

**`nav-cta-contact`** — the "Contact sales" outline button beside Download.
- Background `{colors.button-sec-bg}` transparent, text `{colors.ink}`, 1 px solid `{colors.hairline-mid}` border, shape `{rounded.button}` 4 px.

**`nav-cta-signin`** — the plain "Sign in" link in the nav.
- No background, text `{colors.ink}`, set in `{typography.nav-label}`.

### Cards & Containers

**`card-feature`** — the standard marketing feature card.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding approximately `{spacing.md} {spacing.lg} {spacing.lg}`, shape `{rounded.card}` 4 px. Carries the Level 2 ambient glow shadow.

**`card-app-mockup`** — the macOS-chrome app window in the hero.
- Background `{colors.canvas-chrome}`, text `{colors.ink}`, shape `{rounded.card}` 4 px. Contains a sidebar (`app-sidebar-row`), a tab bar (`app-tab-bar`), and an editor surface (`app-editor-surface`).

**`app-sidebar-row`** — a task-list row inside the mockup sidebar.
- Background `{colors.canvas-chrome}`, text `{colors.ink}`, set in `{typography.caption}`, padding `{spacing.xs} {spacing.md}`.

**`app-tab-bar`** — the filename tab row across the top of the editor.
- Background `{colors.canvas-chrome}`, text `{colors.ink}`, set in `{typography.caption}`, padding `{spacing.xs} {spacing.md}`.

**`app-editor-surface`** — the main code/document view inside the mockup.
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.body-sm}`, padding `{spacing.md} {spacing.lg}`.

### Badges & Labels

**`badge-status`** — the "IN PROGRESS 2" / "READY FOR REVIEW 4" section-header labels inside the app sidebar.
- Background `{colors.canvas-chrome}`, text `{colors.ink}`, set in `{typography.caption}`, shape `{rounded.xs}` 2 px, padding `2px {spacing.xs}`.

**`badge-build`** — the amber "Build" pill at the top-right of the editor pane.
- Background `{colors.accent-amber}`, text `{colors.on-primary}`, set in `{typography.button-md}`, shape `{rounded.button}` 4 px.

### Section Bands & Layouts

**`hero-band`** — the warm-white hero section.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.lg}`. Contains `{typography.display-xl}` headline (sentence-case, no period observed), a CTA row with `button-primary` + `button-secondary`, then the full-width `card-app-mockup`.

**`section-band`** — a standard marketing section.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.section} {spacing.lg}`. Section headlines in `{typography.display-lg}`.

**`pricing-card`** — a pricing tier card.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.xl} {spacing.2xl}`, shape `{rounded.card}` 4 px. Tier name in `{typography.display-md}`.

**`footer`** — the bottom navigation band.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.3xl} {spacing.lg}`, set in `{typography.caption}`.

### Inputs

**`form-input`** — the standard text input.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline-mid}` border, set in `{typography.body-sm}`, shape `{rounded.sm}` 4 px, padding `{spacing.xs} {spacing.sm}`, height 32 px.

**`link-inline`** — body-copy inline links.
- Text `{colors.primary}`, set in `{typography.body-md}`. The brand uses its primary green as the link colour — the only place green appears outside of a button background.

## Do's and Don'ts

### Do
- Use `{colors.canvas}` `#f7f7f4` as the universal page background. The warm-paper character is the brand's entire ambient identity.
- Set every CTA in `{rounded.button}` 4 px — the brand is resolutely square-cornered at every interactive scale.
- Use CursorGothic at weight 400 for every narrative role. Step to 600 only for button labels.
- Apply `-1.3 px` letter-spacing to hero-scale headlines (`{typography.display-xl}`) and leave all other sizes at default or near-default tracking.
- Reserve `{colors.primary}` `#34785c` for primary CTAs and success semantics only — it does not appear as a decorative background, a badge colour, or a section band.
- Use the very-soft ambient card shadow (`rgba(0,0,0,0.02) 0px 0px 16px`) — the brand's elevation is so subtle it reads as a surface texture, not a depth effect.
- Distinguish cards from the page background through the `{colors.canvas-soft}` fill rather than through border or shadow drama.

### Don't
- Don't apply `{rounded.pill}` to marketing CTAs. The brand uses 4 px square corners for every button — a pill CTA breaks the voice entirely.
- Don't introduce a second typeface. CursorGothic is the only face at every scale; no mono, no serif, no condensed display secondary.
- Don't use weight 700 or 800. The ceiling is 600, and that appears only on button labels.
- Don't promote `{colors.accent-amber}` to a marketing accent colour. It lives only inside the application-layer mockup as a technical status badge.
- Don't track body copy negatively. The `-1.3 px` tracking is reserved for the 52 px hero headline only.
- Don't introduce colour bands or gradient backdrops. The page background is flat `{colors.canvas}` from nav to footer — the brand earns its authority through typographic scale, not surface decoration.
- Don't add heavy drop shadows. The only shadow in the system is a two-stop ambient glow at 2 % and 0.8 % opacity.
