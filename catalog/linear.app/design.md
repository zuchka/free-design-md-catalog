---
version: alpha
name: Linear
description: "Linear is a product-development tool brand whose surface is almost pure obsidian — a near-black canvas (#08090a) that swallows everything except the type and a single electric-lime accent that carries every conversion target on the page. There is no gradient system, no illustration palette, no photography: the decorative work is done entirely by the app UI mockup rendered inside the hero, floating on the dark ground as a softly-bordered panel. Inter Variable is the sole typeface at every scale — the brand treats it as a precision instrument, dialling weight to 510 (a variable-font midpoint between Regular and Medium) for all display text and tracking headlines aggressively negative. The result reads as engineered restraint: dark, fast, deliberate."
colors:
  primary: "#e4f222"
  on-primary: "#08090a"
  ink: "#f7f8f8"
  body: "#d0d6e0"
  mute: "#8a8f98"
  dim: "#62666d"
  hairline: "#23252a"
  hairline-secondary: "#34343a"
  hairline-tertiary: "#3e3e44"
  hairline-translucent: rgba(255,255,255,0.05)
  canvas: "#08090a"
  canvas-marketing: "#010102"
  canvas-panel: "#0f1011"
  canvas-level-3: "#191a1b"
  canvas-line-tint: "#141516"
  link: "#828fff"
  link-hover: "#828fff"
  brand-purple: "#5e6ad2"
  security: "#7a7fad"
  success: "#27a644"
  button-invert-bg: "#e5e5e6"
  button-invert-bg-hover: "#fff"
  overlay: rgba(0,0,0,0.85)
  surface-card: rgba(255,255,255,0.01)
  surface-button: rgba(255,255,255,0.04)
typography:
  display-xl:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, system-ui, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif
    fontSize: 64px
    fontWeight: 510
    lineHeight: 64px
    letterSpacing: -1.408px
  display-lg:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, system-ui, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif
    fontSize: 40px
    fontWeight: 510
    lineHeight: 44px
    letterSpacing: -0.88px
  display-md:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, system-ui, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif
    fontSize: 20px
    fontWeight: 510
    lineHeight: 27px
    letterSpacing: -0.24px
  body-lg:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, system-ui, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif
    fontSize: 17px
    fontWeight: 400
    lineHeight: 27px
    letterSpacing: -0.011em
  body-md:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, system-ui, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif
    fontSize: 15px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: -0.011em
  body-sm:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, system-ui, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
    letterSpacing: -0.011em
  caption:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, system-ui, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 17px
    letterSpacing: 0
  tiny:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, system-ui, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif
    fontSize: 10px
    fontWeight: 400
    lineHeight: 15px
  button-cta:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, system-ui, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  button-sm:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, system-ui, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  nav-label:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, system-ui, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  button: 8px
  md: 12px
  lg: 16px
  xl: 24px
  pill: 9999px
  full: 50%
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
  6xl: 128px
  section: 160px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    height: 56px
    padding: "{spacing.sm} {spacing.xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.sm} {spacing.md}"
  nav-cta-signup:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.lg}"
  nav-cta-login:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.sm} {spacing.md}"
    rounded: "{rounded.button}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-cta}"
    rounded: "{rounded.button}"
    padding: "{spacing.xl} {spacing.2xl}"
  button-secondary:
    backgroundColor: "{colors.surface-button}"
    textColor: "{colors.body}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.xs}
  button-invert:
    backgroundColor: "{colors.button-invert-bg}"
    textColor: "{colors.canvas}"
    typography: "{typography.button-cta}"
    rounded: "{rounded.button}"
    padding: "{spacing.xl} {spacing.2xl}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  card-feature:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    borderColor: rgba(255,255,255,0.08)
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  card-app-panel:
    backgroundColor: "{colors.canvas-panel}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  app-sidebar:
    backgroundColor: "{colors.canvas-panel}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    borderColor: "{colors.hairline}"
    padding: "{spacing.sm} {spacing.md}"
  app-sidebar-row:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xxs} {spacing.sm}"
  app-issue-row:
    backgroundColor: "{colors.canvas-panel}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    borderColor: "{colors.hairline}"
    padding: "{spacing.sm} {spacing.xl}"
  badge-status:
    backgroundColor: "{colors.canvas-level-3}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xxs} {spacing.sm}"
  badge-priority:
    backgroundColor: transparent
    textColor: "{colors.mute}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xxs} {spacing.xs}"
  pill-label:
    backgroundColor: "{colors.canvas-level-3}"
    textColor: "{colors.mute}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.md}"
  section-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.xl}"
  section-band-dark:
    backgroundColor: "{colors.canvas-marketing}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.xl}"
  feature-grid-card:
    backgroundColor: "{colors.canvas-level-3}"
    textColor: "{colors.body}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    borderColor: "{colors.hairline}"
    padding: "{spacing.4xl} {spacing.xl}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  form-input:
    backgroundColor: "{colors.canvas-level-3}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 0px {spacing.md}
    height: 36px
  ex-pricing-tier:
    backgroundColor: "{colors.canvas-level-3}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-product-selector:
    backgroundColor: "{colors.canvas-panel}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    backgroundColor: "{colors.canvas-level-3}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    backgroundColor: "{colors.canvas-panel}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xxs} {spacing.sm}"
  ex-data-table-cell:
    headerBackground: "{colors.canvas-level-3}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    backgroundColor: "{colors.canvas-panel}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-modal-card:
    backgroundColor: "{colors.canvas-panel}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    backgroundColor: "{colors.canvas-level-3}"
    rounded: "{rounded.sm}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    backgroundColor: "{colors.canvas-level-3}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Linear's design language is built on a single premise: the tool should disappear into the work. The marketing surface enforces that idea literally — the page background is as close to pure black as a hex value gets (`{colors.canvas}` at `#08090a`), and the only pigment that breaks through is the electric-lime primary (`{colors.primary}` at `#e4f222`) reserved exclusively for the conversion CTA. Everything else — headlines, body copy, nav links, card borders — is rendered in graduated whites and grays against the obsidian ground.

There is no gradient decoration system, no hero illustration, no photography. The entire visual proof-of-concept is the app UI itself: a faithful rendering of Linear's issue-tracker interface floats inside the hero band as a softly-lit dark panel, demonstrating the product in the most direct possible way. The brand trusts the product to be the hero graphic.

Inter Variable is the single typeface across every scale. It runs at weight 510 — a variable-font midpoint that sits between Regular and Medium, giving headlines a sense of authority without the bluntness of bold — and it is tracked aggressively negative at display sizes (`-1.408px` at 64 px). Nav labels and body paragraphs drop to weight 400 with a consistent `-0.011em` tracking, which gives even small text a slightly condensed, precise quality. The brand never introduces a secondary face.

**Key characteristics:**
- The electric-lime `{colors.primary}` is the single accent in an otherwise monochromatic palette — it appears on one element per page context (the primary CTA) and nowhere else.
- Borders are almost invisible: `{colors.hairline}` at `#23252a` is a 1-step lift above the canvas, functioning as a whisper rather than a line.
- The app-panel card chrome (`{colors.canvas-panel}` at `#0f1011`) forms the interior UI surface — a three-step dark ladder: marketing canvas → panel → level-3 container.
- Weight 510 is the display ceiling. The brand never uses bold or heavy weights on any marketing surface.
- The purple link color (`{colors.link}` at `#828fff`) and the brand purple (`{colors.brand-purple}` at `#5e6ad2`) signal the underlying product's accent, appearing in interactive inline links and the product logo mark.

## Colors

### Brand Accent
- **Primary / Electric Lime** (`{colors.primary}` — `#e4f222`): The single conversion accent. Used exclusively as the background of the primary marketing CTA button. Never used as a text color elsewhere on the page, never as a decorative element. Its restraint is the point.
- **On Primary** (`{colors.on-primary}` — `#08090a`): Text color on the lime CTA surface — the page background color recycled as button text, creating a closed loop.

### Surface
- **Canvas** (`{colors.canvas}` — `#08090a`): The marketing page background. Near-pure black — the brand's foundational ground. Matches the `meta theme-color` and the `--color-bg-marketing` value.
- **Canvas Marketing** (`{colors.canvas-marketing}` — `#010102`): The deepest marketing background step, used in alternating full-bleed section bands for a barely-perceptible depth rhythm.
- **Canvas Panel** (`{colors.canvas-panel}` — `#0f1011`): The app UI panel surface — the "card" within the dark ground. One step lighter than the page canvas.
- **Canvas Level 3** (`{colors.canvas-level-3}` — `#191a1b`): The tertiary surface — inset containers, hover states, badge backgrounds, form inputs. The third step in the dark surface ladder.
- **Canvas Line Tint** (`{colors.canvas-line-tint}` — `#141516`): A mid-step tint used for subtle row dividers and inset surface variants.

### Text
- **Ink** (`{colors.ink}` — `#f7f8f8`): Primary text — headings, active nav links, body on dark panels. A warm near-white rather than a pure `#ffffff`.
- **Body** (`{colors.body}` — `#d0d6e0`): Secondary text — body paragraphs, sidebar nav labels, card descriptions. Pulled from the h3 heading color in the extraction.
- **Mute** (`{colors.mute}` — `#8a8f98`): Tertiary text — sub-labels, section eyebrows, placeholder states. The CSS custom property `--color-text-tertiary`.
- **Dim** (`{colors.dim}` — `#62666d`): Lowest-priority text — fine print, disabled states, timestamp captions.

### Border & Line
- **Hairline** (`{colors.hairline}` — `#23252a`): The primary 1 px border — card edges, sidebar dividers, input outlines. Almost invisible against the dark canvas; functions as a texture rather than a line.
- **Hairline Secondary** (`{colors.hairline-secondary}` — `#34343a`): A slightly lifted border used on interactive focus rings and hover-state card borders.
- **Hairline Tertiary** (`{colors.hairline-tertiary}` — `#3e3e44`): The most visible dark-mode border, used sparingly for dropdown menus and modal rims.
- **Hairline Translucent** (`{colors.hairline-translucent}` — `rgba(255,255,255,0.05)`): The CSS token `--color-border-translucent`, used as a semi-transparent card rim over photo or gradient surfaces.

### Interactive
- **Link** (`{colors.link}` — `#828fff`): Inline link color and interactive accent. The periwinkle-purple derived from the brand's product purple — consistent with `--color-link-primary` and `--color-accent-hover`.
- **Brand Purple** (`{colors.brand-purple}` — `#5e6ad2`): The product's identity color — visible in the Linear logo mark and in the `--color-brand-bg` token. Not used as a CTA background on the marketing surface.
- **Security** (`{colors.security}` — `#7a7fad`): A muted slate-purple used for security/trust badging contexts.

### Semantic
- **Success** (`{colors.success}` — `#27a644`): Status green for "In Progress" and completion indicators inside the app UI mockup.
- **Button Invert BG** (`{colors.button-invert-bg}` — `#e5e5e6`): The off-white background for inverted secondary buttons on very dark bands.
- **Overlay** (`{colors.overlay}` — `rgba(0,0,0,0.85)`): Modal scrim and dropdown backdrop.

## Typography

### Font Family
Linear uses a single typeface at every scale: **Inter Variable** — a variable font that allows the brand to dial weight to 510, a midpoint not available in the standard Inter static weight set. The full font stack cascades through SF Pro Display, system-ui, and the standard sans-serif chain. There is no secondary or monospace face in use on the marketing surface.

The key typographic decision is the combination of weight 510 with aggressive negative tracking at display sizes. This produces a headline that reads as designed rather than defaulted — denser, more controlled than plain weight-500 Inter, yet calmer than bold.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 510 | 64px | -1.408px | Hero headline ("The product development system for teams and agents"). Full-bleed, near-baseline line height. |
| `{typography.display-lg}` | 40px | 510 | 44px | -0.88px | Section headlines. Appears in muted gray `{colors.mute}` in some contexts — a distinctive brand move. |
| `{typography.display-md}` | 20px | 510 | 27px | -0.24px | Card-cluster headings, feature-grid titles. Color varies by surface: `{colors.body}` on dark panels. |
| `{typography.body-lg}` | 17px | 400 | 27px | -0.011em | Lead paragraphs under hero headline. "Purpose-built for planning and building products." |
| `{typography.body-md}` | 15px | 400 | 24px | -0.011em | Standard body paragraphs, card descriptions. |
| `{typography.body-sm}` | 14px | 400 | 21px | -0.011em | Secondary body, sidebar nav labels, app-UI text, button labels at nav scale. |
| `{typography.caption}` | 12px | 400 | 17px | 0 | Badge labels, status indicators, metadata inside the app UI mockup. |
| `{typography.tiny}` | 10px | 400 | 15px | 0 | Micro labels, keyboard shortcut indicators. |
| `{typography.button-cta}` | 16px | 400 | 24px | 0 | Marketing CTA button label ("Sign up" / "Get started"). Weight 400 — the lime button does not need typographic weight to assert itself. |
| `{typography.button-sm}` | 13px | 400 | 20px | 0 | Small in-app buttons, nav-scale secondary CTAs. |
| `{typography.nav-label}` | 14px | 400 | 20px | 0 | Top-nav link labels ("Product", "Resources", "Pricing", etc.). |

### Principles
- **Weight 510 is the display voice.** The brand uses a variable-font intermediate weight that sits between Regular (400) and Medium (500) — not a named static weight. Replicating this with a standard weight stack requires weight 500 as the closest approximation. Never use bold or semibold in marketing display contexts.
- **Negative tracking at every scale above body.** From `-0.011em` at 14–15 px body through `-1.408px` at 64 px display, the brand never lets text track neutrally. Even the smallest tracking increments are intentional.
- **Section headlines can be muted.** The h2 color is often `{colors.mute}` (`#8a8f98`) rather than `{colors.ink}` — a deliberate choice that deprioritises the label in favor of the content below it. This is unique and brand-defining; do not override to white.
- **Single typeface, zero exceptions.** There is no mono face, no display slab, no editorial second font. Inter Variable does everything.
- **Sentence-case throughout.** No all-caps labels anywhere on the marketing surface.

### Note on Font Substitutes
Inter Variable is open-source and available from Google Fonts. The static Inter weight-500 is the closest substitute for weight-510 display text. The SF Pro Display system face activates automatically on Apple devices; no substitute needed.

## Layout

### Spacing System
- **Base unit**: 4 px. Every spacing value in the extraction is a multiple of 4 (or the 6 px micro-step that appears frequently in tight UI chrome contexts).
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px · `{spacing.6xl}` 128 px · `{spacing.section}` 160 px.
- **Section padding**: marketing bands use `{spacing.5xl}` top/bottom as the standard rhythm. The hero band opens to `{spacing.4xl}` above the headline to give the dark canvas room before content begins.
- **Card interior padding**: feature cards use `{spacing.lg}` to `{spacing.xl}`; the app UI panels use tighter `{spacing.md}` to `{spacing.sm}` to mirror the actual product density.
- **Inline gap**: the nav link row uses `{spacing.xxs}` to `{spacing.sm}` between siblings. Button rows in the hero use `{spacing.md}` gap.

### Grid & Container
- **Max width**: the page content centres at approximately 1200 px with generous horizontal gutters of `{spacing.xl}` 24 px on desktop.
- **Column patterns**:
  - Hero: single-column headline stack, full-width app mockup panel below.
  - Feature grid: 3-up on desktop, 1-up on mobile.
  - Footer: 4-column nav on desktop, 2-up on tablet, 1-up on mobile.

### Whitespace Philosophy
The dark canvas demands generous whitespace — sections separated by `{spacing.5xl}` or more so the near-black background breathes between content clusters. Inside the app UI panel, the brand deliberately uses the product's actual dense spacing to contrast with the generous marketing spacing around it. The juxtaposition of tight product chrome inside a spacious dark marketing band is intentional.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. Full-bleed canvas color. | Hero band background, full-bleed section bands. |
| Level 1 — Hairline Border | `1px solid {colors.hairline}` (`#23252a`). No shadow. | Default card chrome, sidebar container, app panel rim. |
| Level 2 — Translucent + Shadow Ring | `1px solid rgba(255,255,255,0.08)` + `rgba(0,0,0,0.2) 0px 0px 0px 1px`. | Feature cards on the marketing surface — the extracted card shadow. |
| Level 3 — Panel Float | `1px solid {colors.hairline}` + `rgba(0,0,0,0.4) 0px 4px 24px`. | The hero app UI mockup panel — needs to float convincingly on the pure-black background. |

The brand uses no multi-step stacked shadows in the Material or Vercel style. Elevation is communicated almost entirely through surface color stepping (canvas → panel → level-3) rather than drop-shadow depth. A 1 px border at `{colors.hairline}` is often all that separates a card from the background.

### Decorative Depth
- **The app UI mockup as the single depth object**: the hero panel is the only visually "elevated" element on the page. It earns its depth through a rim shadow and the lighter panel surface color against the black canvas.
- **Surface ladder as section rhythm**: alternating `{colors.canvas}` and `{colors.canvas-marketing}` between sections creates a barely-perceptible depth beat — visible on close inspection, invisible at a glance.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed section bands, hero background. |
| `{rounded.xs}` | 4px | Tightest UI chrome — sidebar row hover states, badge corners, status pills in the app mockup. |
| `{rounded.sm}` | 6px | The brand's base UI radius (`--radius-6`) — card corners, secondary buttons, form inputs, dropdown menus. |
| `{rounded.button}` | 8px | The measured marketing CTA radius (`--radius-8`). Applied to `button-primary` and `nav-cta-signup`. Distinct from the card/input radius. |
| `{rounded.md}` | 12px | Medium container radius (`--radius-12`) — modal dialogs, larger panel cards. |
| `{rounded.lg}` | 16px | Large container radius (`--radius-16`). |
| `{rounded.xl}` | 24px | Extra-large radius (`--radius-24`) for feature image frames. |
| `{rounded.pill}` | 9999px | Explicitly pill-shaped elements only — label badges, tag pills. Not used on rectangular CTAs. |
| `{rounded.full}` | 50% | Circular elements — avatar frames, icon-button circles. |

The measured primary CTA button radius is 8 px — a deliberate step above the 6 px base card radius. This distinction matters: do not collapse them to a single token or inflate to pill shape.

## Components

### Navigation

**`nav-bar`** — the sticky top nav on the dark canvas.
- Background `{colors.canvas}`, text `{colors.ink}`, height 56 px, padding `{spacing.sm} {spacing.xl}`. Layout: Linear logo + wordmark left, 5-link centred row ("Product / Resources / Customers / Pricing / Now / Contact"), divider, then "Log in / Sign up" cluster right.

**`nav-link`** — the centred nav link row.
- Text `{colors.ink}`, set in `{typography.nav-label}`, padding `{spacing.sm} {spacing.md}`. Ghost state — no visible background or border until hover.

**`nav-cta-login`** — the ghost "Log in" link in the nav cluster.
- Transparent background, text `{colors.ink}`, same typography and padding as `nav-link`.

**`nav-cta-signup`** — the small "Sign up" button at nav scale.
- Background `{colors.primary}` (lime), text `{colors.on-primary}` (near-black), set in `{typography.button-sm}`, shape `{rounded.button}` 8 px, padding `{spacing.sm} {spacing.lg}`. The lime appears here in miniature before the full marketing CTA below.

### Buttons

**`button-primary`** — the canonical lime marketing CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, set in `{typography.button-cta}` (16 px / 400), shape `{rounded.button}` 8 px, padding `{spacing.xl} {spacing.2xl}` (24 px × 32 px exactly as measured). This is the single most important element in the brand's conversion hierarchy.

**`button-secondary`** — the low-key UI-scale button (ghost / muted fill).
- Background `{colors.surface-button}` (`rgba(255,255,255,0.04)`), text `{colors.body}`, set in `{typography.button-sm}` (13 px), shape `{rounded.sm}` 6 px, padding `0px {spacing.xs}`. Appears inside the app UI mockup and in secondary action contexts.

**`button-invert`** — the off-white button used on deepest-dark band backgrounds.
- Background `{colors.button-invert-bg}` (`#e5e5e6`), text `{colors.canvas}`, same shape and padding as `button-primary`. Used when the lime CTA would be too bright against an ultra-dark background.

### Hero & Bands

**`hero-band`** — the dark opening band with the headline and app mockup.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Inside: headline in `{typography.display-xl}` (weight 510, -1.408px tracking), lead body in `{typography.body-lg}`, then `button-primary` CTA. The full-width app-panel mockup sits below the headline stack.

**`section-band`** — a standard dark marketing section.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.xl}`. Section headlines often render in `{colors.mute}` rather than `{colors.ink}` — an intentional brand choice.

**`section-band-dark`** — the deeper-black alternating section.
- Background `{colors.canvas-marketing}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.xl}`. Used to create a barely-visible rhythm between full-bleed sections.

### Cards & Panels

**`card-feature`** — the marketing feature card used in 3-up grids.
- Background `{colors.surface-card}` (`rgba(255,255,255,0.01)`), text `{colors.ink}`, `1px solid rgba(255,255,255,0.08)` border, shape `{rounded.sm}` 6 px, padding `{spacing.md} {spacing.lg}`. Carries Level 2 translucent shadow ring.

**`feature-grid-card`** — a slightly elevated feature card on the level-3 surface.
- Background `{colors.canvas-level-3}`, text `{colors.body}`, `1px solid {colors.hairline}` border, shape `{rounded.sm}`, padding `{spacing.xl}`.

**`card-app-panel`** — the app UI mockup container — the hero's centrepiece.
- Background `{colors.canvas-panel}`, text `{colors.ink}`, `1px solid {colors.hairline}` border, shape `{rounded.sm}`, padding `{spacing.md}`. Contains the rendered app chrome including sidebar, issue list, and detail panel.

### App UI Chrome (visible in screenshot)

**`app-sidebar`** — the left navigation panel inside the app mockup.
- Background `{colors.canvas-panel}`, text `{colors.body}`, `1px solid {colors.hairline}` right border, set in `{typography.body-sm}`, padding `{spacing.sm} {spacing.md}`.

**`app-sidebar-row`** — individual nav rows inside the sidebar.
- Transparent background (active: `{colors.canvas-level-3}`), text `{colors.body}`, set in `{typography.body-sm}`, shape `{rounded.xs}` 4 px, padding `{spacing.xxs} {spacing.sm}`.

**`app-issue-row`** — an issue list row inside the app panel.
- Background `{colors.canvas-panel}`, text `{colors.ink}`, `1px solid {colors.hairline}` bottom border, set in `{typography.body-sm}`, padding `{spacing.sm} {spacing.xl}`.

### Badges & Labels

**`badge-status`** — a status indicator badge ("In Progress", "High").
- Background `{colors.canvas-level-3}`, text `{colors.body}`, set in `{typography.caption}`, shape `{rounded.xs}` 4 px, padding `{spacing.xxs} {spacing.sm}`.

**`badge-priority`** — a minimal priority label.
- Transparent background, text `{colors.mute}`, set in `{typography.caption}`, shape `{rounded.xs}`, padding `{spacing.xxs} {spacing.xs}`.

**`pill-label`** — an explicitly pill-shaped metadata tag.
- Background `{colors.canvas-level-3}`, text `{colors.mute}`, set in `{typography.caption}`, shape `{rounded.pill}` 9999 px, padding `{spacing.xxs} {spacing.md}`. The only context where the pill radius applies.

### Structure

**`form-input`** — text input on dark surface.
- Background `{colors.canvas-level-3}`, text `{colors.ink}`, `1px solid {colors.hairline-secondary}` border, set in `{typography.body-sm}`, shape `{rounded.sm}` 6 px, padding `0px {spacing.md}`, height 36 px.

**`footer`** — the bottom 4-column nav.
- Background `{colors.canvas}`, text `{colors.mute}`, `1px solid {colors.hairline}` top border, set in `{typography.body-sm}`, padding `{spacing.4xl} {spacing.xl}`.

**`link-inline`** — body-copy inline link.
- Text `{colors.link}` (`#828fff`), set in `{typography.body-md}`. The periwinkle stands out clearly on the dark canvas without competing with the lime CTA.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (`#e4f222`) for the single primary CTA per page context. The lime works precisely because it is used nowhere else.
- Use weight 510 (variable font) or weight 500 (static fallback) for all display text. The brand's typographic voice depends on this deliberate midpoint.
- Apply aggressive negative tracking at display sizes: `-1.408px` at 64 px, `-0.88px` at 40 px. Never let display text track neutrally.
- Use `{rounded.button}` (8 px) for marketing CTAs and `{rounded.sm}` (6 px) for cards, inputs, and secondary buttons. Honour the two-radius distinction.
- Step surfaces through the three-level dark ladder: `{colors.canvas}` → `{colors.canvas-panel}` → `{colors.canvas-level-3}`. Use color, not shadow, as the primary depth cue.
- Render section eyebrow / secondary headlines in `{colors.mute}` (`#8a8f98`) — the brand deliberately deprioritises section labels to let content lead.
- Use `{colors.link}` (`#828fff`) for inline interactive text. The periwinkle is the only interactive accent besides the lime CTA.

### Don't
- Don't use `{colors.primary}` (lime) as a text color, background fill, border color, or decorative element. It appears on exactly one component: `button-primary`.
- Don't introduce a monospaced typeface. Linear's marketing surface uses Inter Variable exclusively — there is no code-block voice distinct from body.
- Don't use bold or semibold weights. Weight 510 is the ceiling. Heavier weights break the brand's engineered-restraint quality.
- Don't apply `{rounded.pill}` to rectangular CTAs. The 9999 px pill radius is reserved for label chips and tag pills — the marketing button is 8 px, not pill-shaped.
- Don't use white (`#ffffff`) as a text color in place of `{colors.ink}` (`#f7f8f8`). The near-white is intentional; pure white reads too cold on the obsidian canvas.
- Don't introduce decorative gradients, illustrations, or photography. The app UI mockup is the sole decorative device — everything else is type on dark ground.
- Don't letter-space positively at any scale. The brand tracks negatively at display and maintains a subtle `-0.011em` even at body scale.
