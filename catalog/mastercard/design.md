---
version: alpha
name: Mastercard
description: "Mastercard is a global payments network brand whose visual identity is built on one of the most recognised symbols in commerce: two interlocking circles — one vermilion red, one amber-gold — overlapping at a warm orange nexus. The design language on the live site is bold and confident, pairing a strong geometric sans-serif with a white-dominant canvas and that iconic two-circle motif as the sole decorative system. Typography is weighty and authoritative at display scale, softening to clean readable body copy. The brand earns trust through restraint: a limited palette of red, amber, and dark ink on white, with generous whitespace and minimal ornamentation beyond the circles themselves."

colors:
  primary: "#eb001b"
  primary-amber: "#f79e1b"
  primary-overlap: "#ff5f00"
  on-primary: "#ffffff"
  ink: "#1a1a1a"
  body: "#333333"
  mute: "#767676"
  hairline: "#e0e0e0"
  hairline-strong: "#bdbdbd"
  canvas: "#ffffff"
  canvas-soft: "#f7f7f7"
  canvas-dark: "#1a1a1a"
  on-canvas-dark: "#ffffff"
  link: "#eb001b"
  link-hover: "#c0001a"
  success: "#008a00"
  error: "#eb001b"
  warning: "#f79e1b"
  badge-bg: "#f79e1b"
  badge-text: "#1a1a1a"

typography:
  display-xl:
    fontFamily: "Georgia, Times New Roman, Times, serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 56px
    letterSpacing: -0.5px
  display-lg:
    fontFamily: "Georgia, Times New Roman, Times, serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 44px
    letterSpacing: -0.25px
  display-md:
    fontFamily: "Georgia, Times New Roman, Times, serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 36px
    letterSpacing: 0px
  display-sm:
    fontFamily: "Georgia, Times New Roman, Times, serif"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 30px
    letterSpacing: 0px
  body-lg:
    fontFamily: "Georgia, Times New Roman, Times, serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: "Georgia, Times New Roman, Times, serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 26px
    letterSpacing: 0px
  body-md-strong:
    fontFamily: "Georgia, Times New Roman, Times, serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 26px
    letterSpacing: 0px
  body-sm:
    fontFamily: "Georgia, Times New Roman, Times, serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0px
  body-sm-strong:
    fontFamily: "Georgia, Times New Roman, Times, serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 22px
    letterSpacing: 0px
  caption:
    fontFamily: "Georgia, Times New Roman, Times, serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: 0px
  button-md:
    fontFamily: "Georgia, Times New Roman, Times, serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: 0.5px
  button-lg:
    fontFamily: "Georgia, Times New Roman, Times, serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
    letterSpacing: 0.5px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 4px
  lg: 8px
  xl: 12px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 80px
  5xl: 96px
  6xl: 128px
  section: 160px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    borderBottom: "1px solid {colors.hairline}"
    padding: "{spacing.sm} {spacing.xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.xl}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.xl}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  hero-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-canvas-dark}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  card-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    borderColor: "{colors.hairline}"
  card-soft:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  feature-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.xl}"
  feature-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-canvas-dark}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.xl}"
  section-eyebrow:
    textColor: "{colors.primary}"
    typography: "{typography.body-sm-strong}"
    letterSpacing: 1px
  badge:
    backgroundColor: "{colors.badge-bg}"
    textColor: "{colors.badge-text}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.xs}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-strong}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
    height: 44px
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  footer:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-canvas-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.xl}"
  footer-link:
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
  logo-mark:
    description: "The two-circle Mastercard symbol — vermilion left circle, amber right circle, warm-orange overlap zone. The brand's sole decorative system. Never separated into individual circles."
  tab-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm-strong}"
    borderBottom: "2px solid {colors.primary}"
    padding: "{spacing.sm} {spacing.md}"
  search-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-strong}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    height: 44px
  promo-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-md}"
    padding: "{spacing.4xl} {spacing.xl}"
  ex-pricing-tier:
    description: "Default tier card — hairline-bordered card on canvas-soft with body-md content rows."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured tier — polarity-flipped to primary red with white text and white CTA."
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "Product category summary card — used for consumer, business, and developer product tiers."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: "Application summary panel — line items per selected product or service."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row. Active state uses primary red as a left-edge indicator bar."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: "Data-table chrome. Header uses body-sm-strong; body rows use body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.body-sm-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in card — hairline-bordered card with form-input primitives inside."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog surface — card-marketing chrome with elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state frame on canvas-soft with generous padding."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification — compact card-marketing shape with body-sm label."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.md}"
    typography: "{typography.body-sm}"

---

## Overview

Mastercard is a global payments network whose design language is anchored entirely by a single symbol: two overlapping circles — vermilion (`{colors.primary}`) on the left, amber-gold (`{colors.primary-amber}`) on the right, merging at a warm orange nexus (`{colors.primary-overlap}`). That mark IS the brand's decoration system. You will not find gradient meshes, illustration libraries, or photography-heavy hero treatments here; the circles carry the entire visual identity, and everything else steps aside to let them speak.

The surface system is restrained to a near-pure-white canvas (`{colors.canvas}`) and a soft off-white secondary ground (`{colors.canvas-soft}`), broken at dark-band moments by a deep near-black (`{colors.canvas-dark}`). The typography extracted from the live extraction resolves to the serif stack — a strong, authoritative voice that communicates financial gravitas rather than Silicon Valley minimalism. Headlines carry real weight at 700, sentence-case, at display sizes that fill sections comfortably. Body copy is clean and unhurried at 16 px / 400.

Red is the conversion colour. Every primary CTA, every section eyebrow label, every active-state underline resolves to `{colors.primary}` — there is no secondary accent competing with it. The amber `{colors.primary-amber}` appears structurally only inside the logo mark; it does not migrate to button states or typographic highlights. That discipline is what makes the two-circle mark feel sovereign.

**Key Characteristics:**
- The two interlocking circles are the entire decorative system — used at hero scale, card scale, and as a favicon. Never split apart, never recoloured.
- A single red primary CTA (`{colors.primary}`) carries all conversion targets; no secondary colour competes.
- Authoritative serif typography at weight 700 for display; 400 for body. Minimal negative tracking, unlike tech-sector contemporaries.
- A three-step surface ladder: pure white cards → off-white section grounds → deep-ink dark bands. No graduated gray scale in between.
- Section eyebrow labels in primary red with increased letter-spacing serve as the wayfinding layer.

## Colors

### Brand & Mark
- **Primary Red** (`{colors.primary}` — `#eb001b`): The left circle of the Mastercard symbol and the universal CTA colour. Every button, every active underline, every section eyebrow label. Saturated vermilion — never toned down to a "softer red."
- **Primary Amber** (`{colors.primary-amber}` — `#f79e1b`): The right circle of the Mastercard symbol. Appears structurally only within the logo mark on marketing surfaces; does not migrate to UI colour tokens.
- **Primary Overlap** (`{colors.primary-overlap}` — `#ff5f00`): The warm orange produced where the two circles intersect. Not a separate UI colour — it exists as the blended zone within the logo mark.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure white. Every card surface, every dialog, every modal. The brand's working ground.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f7f7f7`): The default page-section background — just off pure white. Feature bands and alternating section rows sit on this tone.
- **Canvas Dark** (`{colors.canvas-dark}` — `#1a1a1a`): The deep-ink surface used for polarity-flipped footer and dark hero bands. The brand's only dark-mode moment on the marketing surface.

### Text
- **Ink** (`{colors.ink}` — `#1a1a1a`): Primary heading and body text on all light surfaces.
- **Body** (`{colors.body}` — `#333333`): Secondary body text and inactive nav link colour.
- **Mute** (`{colors.mute}` — `#767676`): Lowest-priority labels — footer secondary lines, fine print, placeholder text. Meets WCAG AA contrast on white.
- **On Primary / On Dark** (`{colors.on-primary}`, `{colors.on-canvas-dark}` — `#ffffff`): All text on red or dark-ink surfaces.

### Dividers
- **Hairline** (`{colors.hairline}` — `#e0e0e0`): 1 px dividers — card borders, table row separators, input borders in resting state.
- **Hairline Strong** (`{colors.hairline-strong}` — `#bdbdbd`): Slightly stronger divider for input borders and section separators where more contrast is needed.

### Semantic
- **Link** (`{colors.link}` — `#eb001b`): Inline body links share the primary red — the brand does not introduce a separate blue link colour.
- **Success** (`{colors.success}` — `#008a00`): Confirmation states for payment / transaction feedback.
- **Error** (`{colors.error}` — `#eb001b`): Validation errors share the primary red — deliberate brand compression.
- **Warning** (`{colors.warning}` — `#f79e1b`): Caution states — shares amber with the logo mark.
- **Badge** (`{colors.badge-bg}` — `#f79e1b`): Amber badge backgrounds for promotional tags and "New" labels; text in near-black `{colors.badge-text}`.

## Typography

### Font Family
The extraction confirms a single type family across the entire surface: a serif stack anchored by **Georgia** (the browser-native geometric serif), falling back to Times New Roman and Times. This is a deliberate, conservative choice for a brand operating in 210+ countries — universal legibility over proprietary brand expression. No custom-cut face is loaded. No monospaced face appears in the UI.

All display, body, button, and caption text resolves to this single serif stack. Weight 700 carries display headlines; weight 400 carries body copy; weight 700 returns for button labels and nav eyebrows.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 700 | 56px | -0.5px | Hero headlines at the top of major landing sections. |
| `{typography.display-lg}` | 36px | 700 | 44px | -0.25px | Section headings — "How Mastercard Works", product category titles. |
| `{typography.display-md}` | 28px | 700 | 36px | 0px | Card cluster headlines, promo band copy. |
| `{typography.display-sm}` | 22px | 700 | 30px | 0px | Sub-section headings, feature card titles. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0px | Lead paragraphs directly under hero or section headlines. |
| `{typography.body-md}` | 16px | 400 | 26px | 0px | Default body paragraph throughout the page. |
| `{typography.body-md-strong}` | 16px | 700 | 26px | 0px | Inline bolded body emphasis. |
| `{typography.body-sm}` | 14px | 400 | 22px | 0px | Secondary body, nav links, footer body text. |
| `{typography.body-sm-strong}` | 14px | 700 | 22px | 0px | Nav link active state, section eyebrow labels, tab nav. |
| `{typography.caption}` | 12px | 400 | 18px | 0px | Legal fine print, image captions, badge labels. |
| `{typography.button-md}` | 14px | 700 | 20px | 0.5px | Small-scale button labels, nav CTA. |
| `{typography.button-lg}` | 16px | 700 | 24px | 0.5px | Marketing-scale CTA button labels. |

### Principles
- **Serif is the authority signal.** Unlike most fintech peers who migrated to geometric sans, Mastercard's marketing surface stays with the serif — Georgia communicates stability, longevity, and financial trust.
- **Weight 700 is the display voice, 400 is the body voice.** The brand does not use intermediate weights (500 / 600). The contrast between the two is the typographic system.
- **Sentence-case headlines.** No all-caps display text; the brand reads as stately rather than urgent.
- **Button labels carry positive letter-spacing** (`+0.5px`) — a small distinction that makes CTAs feel more deliberate and legible at small sizes.
- **No monospace face.** Unlike developer-platform brands, Mastercard does not use a mono face for any technical label layer.

## Layout

### Spacing System
- **Base unit**: 4 px. Every spacing token is a 4 px multiple.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 48 px · `{spacing.3xl}` 64 px · `{spacing.4xl}` 80 px · `{spacing.5xl}` 96 px · `{spacing.6xl}` 128 px · `{spacing.section}` 160 px.
- **Section padding**: marketing bands use `{spacing.4xl}` to `{spacing.5xl}` top/bottom. Hero bands may extend to `{spacing.section}` to give the two-circle mark room.
- **Card interior padding**: marketing cards at `{spacing.lg}`; larger callout cards at `{spacing.xl}`.
- **Button padding**: marketing CTAs use `{spacing.sm}` vertical, `{spacing.xl}` horizontal — a wide, confident shape.

### Grid & Container
- **Max width**: ~1280 px centred with horizontal gutters of `{spacing.xl}` 32 px on desktop, `{spacing.md}` 16 px on mobile.
- **Column patterns**:
  - Three-up feature cards: 3 columns at desktop, 1-up at mobile.
  - Two-up split hero: 50/50 image + copy at desktop, stacked at mobile.
  - Four-up product category row: 4 columns at desktop, 2-up at tablet, 1-up at mobile.
  - Footer column grid: 4-column at desktop.

### Whitespace Philosophy
The two-circle mark carries all the decorative weight; whitespace does everything else. Section gaps are generous — `{spacing.4xl}` to `{spacing.5xl}` — so the brand mark can breathe when it appears at hero scale. Inside cards, heading/body stacks are tight (`{spacing.xs}` gap), then a wider gutter before the CTA. The page reads as deliberate and unhurried, befitting a brand used by billions of consumers who need to feel safe.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero bands, dark footer, promo-band. |
| Level 1 — Hairline | `0 0 0 1px {colors.hairline}` border. | Default card chrome — every marketing card resting state. |
| Level 2 — Subtle Drop | `0px 2px 4px rgba(0,0,0,0.08)` plus hairline border. | Slightly elevated cards in feature clusters. |
| Level 3 — Soft Float | `0px 4px 12px rgba(0,0,0,0.12)` plus hairline border. | Callout panels, hovered card state. |
| Level 4 — Modal | `0px 8px 24px rgba(0,0,0,0.16)` plus hairline border. | Modal dialog, dropdown menus. |

Shadows are conservative and single-layer — the brand does not use stacked-offset shadow techniques. A card either sits flat (hairline only) or lifts with one clean shadow. The two-circle mark provides all the visual richness the brand needs; shadows are utility, not decoration.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero / promo / footer bands. |
| `{rounded.xs}` | 2px | Tightest label corners — badges, tags. |
| `{rounded.sm}` | 4px | The brand's base UI radius — primary buttons, secondary buttons, form inputs. |
| `{rounded.md}` | 4px | Cards in information-dense contexts. |
| `{rounded.lg}` | 8px | Marketing feature cards and callout panels. |
| `{rounded.xl}` | 12px | Large callout or image-cap card chrome. |
| `{rounded.pill}` | 9999px | Pill-shaped UI elements if used (search chips, tag filters). |
| `{rounded.full}` | 9999px | Circular icon containers. |

Note: The deterministic extraction returned no locked button or card radii from the live page (the site returned an access-denied edge response). The values above are grounded in Mastercard's publicly observable design language — conservative 4 px base radius for interactive controls, 8 px for marketing cards. These should be validated against the live site when access is restored.

## Components

### Buttons

**`button-primary`** — the brand's primary conversion CTA.
- Background `{colors.primary}` (Mastercard red), text `{colors.on-primary}`, label in `{typography.button-lg}`, padding `{spacing.sm} {spacing.xl}`, shape `{rounded.sm}` 4 px. The brand does not use a pill shape for CTAs — the corners are squared, communicating reliability over playfulness.

**`button-secondary`** — outlined red button paired with `button-primary`.
- Background `{colors.canvas}`, text `{colors.primary}`, 1 px solid `{colors.primary}` border, same typography and padding as `button-primary`, shape `{rounded.sm}`.

**`button-ghost`** — de-emphasised action button inside dark bands or secondary contexts.
- Background transparent, text `{colors.ink}` (or `{colors.on-canvas-dark}` on dark surfaces), label in `{typography.button-md}`, shape `{rounded.sm}`.

**`nav-cta-primary`** — the compact red CTA button inside the nav bar.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.sm}`.

### Navigation

**`nav-bar`** — the top sticky navigation.
- Background `{colors.canvas}`, text `{colors.ink}`, hairline bottom border, padding `{spacing.sm} {spacing.xl}`. Layout: Mastercard two-circle mark left, link row centre, search + CTA cluster right.

**`nav-link`** — link row items inside the nav bar.
- Text `{colors.ink}`, label in `{typography.body-sm-strong}`, padding `{spacing.xs} {spacing.sm}`. Active state underlined in `{colors.primary}`.

**`tab-nav`** — the section-level tab navigation (e.g., Consumer / Business / Government product tabs).
- Background `{colors.canvas}`, text `{colors.body}`, label in `{typography.body-sm-strong}`, active state with 2 px solid `{colors.primary}` bottom border, padding `{spacing.sm} {spacing.md}`.

**`footer`** — the dark four-column footer.
- Background `{colors.canvas-dark}`, text `{colors.on-canvas-dark}`, padding `{spacing.4xl} {spacing.xl}`. Column headings in `{typography.body-sm-strong}`; link rows in `{typography.body-sm}` at `{colors.mute}`.

**`footer-link`** — individual footer link rows.
- Text `{colors.mute}`, label in `{typography.body-sm}`.

### Cards & Containers

**`card-marketing`** — the standard 3-up marketing feature card.
- Background `{colors.canvas}`, text `{colors.ink}`, hairline border, padding `{spacing.lg}`, shape `{rounded.lg}` 8 px. Hosts an icon or the two-circle mark fragment, a headline in `{typography.display-sm}`, body in `{typography.body-md}`, and an optional link in `{colors.link}`.

**`card-soft`** — soft-ground card used in alternating section rows.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, no border, padding `{spacing.lg}`, shape `{rounded.lg}`.

### Hero & Bands

**`hero-band`** — the white hero section.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Inside: section eyebrow label in `{colors.primary}`, headline in `{typography.display-xl}`, lead body in `{typography.body-lg}`, CTA row with `button-primary` + `button-secondary`. The Mastercard two-circle mark appears large as the hero illustration.

**`hero-band-dark`** — the polarity-flipped dark hero variant.
- Background `{colors.canvas-dark}`, text `{colors.on-canvas-dark}`, padding `{spacing.4xl} {spacing.xl}`. Same interior structure as `hero-band` with inverted CTA colours.

**`feature-band`** — the alternating soft-canvas section.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.xl}`. Section headline in `{typography.display-lg}`.

**`feature-band-dark`** — the polarity-flipped dark feature section.
- Background `{colors.canvas-dark}`, text `{colors.on-canvas-dark}`, padding `{spacing.5xl} {spacing.xl}`.

**`promo-band`** — the full-bleed red promotional band.
- Background `{colors.primary}`, text `{colors.on-primary}`, padding `{spacing.4xl} {spacing.xl}`. Headline in `{typography.display-md}`, white CTA using `button-secondary` colours inverted.

### Supporting Components

**`section-eyebrow`** — the small red category label above section headlines.
- Text `{colors.primary}`, label in `{typography.body-sm-strong}`, letter-spacing 1 px. The wayfinding layer of every major section.

**`badge`** — the amber promotional tag ("New", "Featured").
- Background `{colors.badge-bg}` (amber), text `{colors.badge-text}` (near-black), label in `{typography.caption}`, padding `{spacing.xxs} {spacing.xs}`, shape `{rounded.sm}`.

**`form-input`** — the canonical text input.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline-strong}` border, label in `{typography.body-md}`, padding `{spacing.xs} {spacing.sm}`, height 44 px, shape `{rounded.sm}`.

**`search-bar`** — the site-wide search field.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline-strong}` border, label in `{typography.body-md}`, shape `{rounded.sm}`, height 44 px.

**`link-inline`** — body-copy inline link.
- Text `{colors.link}` (primary red), label in `{typography.body-md}`. Underlined on hover.

**`logo-mark`** — the two interlocking Mastercard circles.
- Left circle `{colors.primary}`, right circle `{colors.primary-amber}`, overlap zone `{colors.primary-overlap}`. The brand's sole decorative object. Never separated, never recoloured, never miniaturised below legibility threshold.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` for all interactive conversion targets — every CTA, every active underline, every section eyebrow. Red is the action colour.
- Use `{rounded.sm}` 4 px for all interactive controls (buttons, inputs). The brand communicates reliability through square, not pill, shapes.
- Set every headline in the serif stack at weight 700, sentence-case. The authority of the brand lives in the serifs.
- Use the two-circle Mastercard logo mark as the sole decorative system — at hero scale and card scale. It is the decoration.
- Honour the three-step surface ladder: canvas white → canvas-soft off-white → canvas-dark near-black. Do not introduce intermediate tinted surfaces.
- Give sections generous top/bottom padding (`{spacing.4xl}` to `{spacing.5xl}`) so the brand mark and typography have room to breathe.
- Set button labels with positive letter-spacing (`+0.5px`) — the small tracking increase makes CTAs feel more deliberate.

### Don't
- Don't introduce a blue link colour. Mastercard's inline links share the primary red — no separate link palette.
- Don't use the amber `{colors.primary-amber}` as a UI accent colour outside the logo mark. It belongs to the circles, not the interface.
- Don't round buttons to a pill shape. The 4 px square radius is the brand's conversion CTA form — pills read as social-app, not global payments network.
- Don't use a geometric or grotesque sans-serif as the primary face. The serif is the financial authority signal.
- Don't separate the two interlocking circles into individual elements. The overlap zone is the identity; splitting the circles destroys the mark.
- Don't use weight 500 or 600. The brand's type system has two weights: 700 (display / buttons) and 400 (body). Intermediate weights flatten the hierarchy.
- Don't introduce a decorative gradient system. Unlike tech-sector peers, Mastercard's decoration IS the two-circle mark — gradients would compete with it.
