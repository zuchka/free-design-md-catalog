---
version: alpha
name: Tesla
description: "Tesla's design language is one of the most disciplined restraint systems in consumer hardware marketing — a pure white canvas stretched edge-to-edge behind full-bleed vehicle photography, with near-black ink for headlines and a single red accent reserved exclusively for destructive or promotional callouts. The page is the car. Typography is the only decoration: a clean geometric sans at display weight carries sentence-case headlines with neutral tracking, and the entire UI chrome — nav links, CTAs, footnotes — sits in the same face at progressively smaller weights. No gradients, no illustration, no texture. Just the photograph and the word."

colors:
  primary: "#000000"
  on-primary: "#ffffff"
  ink: "#000000"
  body: "#393c41"
  mute: "#5c5e62"
  hairline: "#d0d0d0"
  canvas: "#ffffff"
  canvas-soft: "#f4f4f4"
  canvas-dark: "#000000"
  on-dark: "#ffffff"
  link: "#000000"
  link-light: "#ffffff"
  error: "#cc0000"
  accent-red: "#e31937"
  nav-bg: "rgba(0,0,0,0)"
  overlay-dark: "rgba(0,0,0,0.4)"

typography:
  display-xl:
    fontFamily: "Tesla, 'Gotham SSm', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 56px
    letterSpacing: 0px
  display-lg:
    fontFamily: "Tesla, 'Gotham SSm', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: 0px
  display-md:
    fontFamily: "Tesla, 'Gotham SSm', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 40px
    letterSpacing: 0px
  display-sm:
    fontFamily: "Tesla, 'Gotham SSm', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: 0px
  body-lg:
    fontFamily: "Tesla, 'Gotham SSm', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: "Tesla, 'Gotham SSm', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: "Tesla, 'Gotham SSm', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  caption:
    fontFamily: "Tesla, 'Gotham SSm', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0px
  button-md:
    fontFamily: "Tesla, 'Gotham SSm', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0.5px
  button-lg:
    fontFamily: "Tesla, 'Gotham SSm', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0.5px
  label:
    fontFamily: "Tesla, 'Gotham SSm', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.8px

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 20px
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
  nav-bar:
    backgroundColor: "{colors.nav-bg}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    height: 56px
    padding: "0px {spacing.lg}"
  nav-bar-scrolled:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 56px
    padding: "0px {spacing.lg}"
  nav-link:
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-link-dark:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.sm}"
  button-primary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.xl}"
    padding: "{spacing.sm} {spacing.xl}"
  button-primary-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.xl}"
    padding: "{spacing.sm} {spacing.xl}"
  button-secondary:
    backgroundColor: "rgba(255,255,255,0.15)"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.xl}"
    padding: "{spacing.sm} {spacing.xl}"
  button-outline:
    backgroundColor: "rgba(0,0,0,0)"
    textColor: "{colors.on-primary}"
    borderColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.xl}"
    padding: "{spacing.sm} {spacing.xl}"
  hero-band:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  hero-subtext:
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
  vehicle-section:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "0px"
  vehicle-headline:
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
  vehicle-subline:
    textColor: "{colors.mute}"
    typography: "{typography.body-md}"
  cta-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.4xl} {spacing.lg}"
  stat-callout:
    textColor: "{colors.ink}"
    typography: "{typography.display-sm}"
    padding: "{spacing.md} {spacing.lg}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.caption}"
    padding: "{spacing.xl} {spacing.lg}"
  footer-link:
    textColor: "{colors.mute}"
    typography: "{typography.caption}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-sm}"
  badge-promo:
    backgroundColor: "{colors.accent-red}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xxs} {spacing.xs}"
  overlay-cta-row:
    backgroundColor: "rgba(255,255,255,0)"
    padding: "{spacing.lg} {spacing.lg}"
  scroll-indicator:
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
  ex-pricing-tier:
    description: "Vehicle configuration summary card — mirrors vehicle-section chrome on canvas surface."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured configuration — polarity-flipped to dark surface with white text."
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "Model selector card — used for vehicle trim or color choice surfaces."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: "Order summary panel — line items per selected option or add-on."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Account sidebar nav row. Active state uses primary ink as left-edge indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: "Specs comparison table. Header uses label uppercase; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.label}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in card — canvas-soft surface with form-input primitives inside."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog — canvas surface with elevated shadow and rounded-lg chrome."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state frame — generous canvas-soft padding with body-md caption."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification — flat card chrome with subtle shadow and caption text."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"

---

## Overview

Tesla's website is not a web page in the conventional sense — it is a full-viewport slideshow of vehicle photography with a transparent navigation strip floating above it. Each slide is one car, one headline, one or two CTAs. The design system exists entirely in service of not being seen: the UI chrome is as minimal as physically possible so the vehicle fills every pixel. That philosophy produces one of the most extreme restraint systems in consumer marketing.

The palette is binary. Pure white canvas for light sections, near-black for the dark hero zones, with ink-black text on white surfaces and white text reversed on dark ones. The single exception is a saturated promotional red (`{colors.accent-red}`) used sparingly for limited-offer banners — it appears once per page cycle and is never used as a structural accent. No gradients, no tinted cards, no decorative fills.

Typography carries the entire brand voice. A proprietary geometric sans (extracted as Tesla's custom face, closest open-source match: Helvetica Neue or Inter at weight 400–500) renders all display, body, button, and footnote copy. The font never exceeds weight 500; the brand reads deliberately lighter than comparable automotive peers. Headlines are sentence-case, letter-spacing neutral to slightly positive at label scale. There is no monospace face anywhere in the marketing surface.

Surfaces use a two-step scheme: `{colors.canvas}` white for light vehicle sections and `{colors.canvas-soft}` for inset spec bands, with full-bleed photography as the third "surface." The dark hero uses a full-viewport image backed by `{colors.canvas-dark}` with a semi-transparent overlay. Elevation is essentially absent — no shadow system, no card chrome. The only structural separator is a `{colors.hairline}` 1-px divider between footnote rows.

## Colors

### Brand & Primary
- **Primary / Ink** (`{colors.primary}` — `#000000`): The brand's single primary — used for dark-surface CTAs and all body text on white surfaces. Every "Order Now" button on a light section resolves here.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): White text and icon color on all `{colors.primary}` surfaces, including the dark hero and polarity-flipped CTAs.
- **Accent Red** (`{colors.accent-red}` — `#e31937`): The only chromatic accent in the system. Used exclusively on promotional callout badges ("Limited offer," "In stock") and never as a structural UI color.
- **Error** (`{colors.error}` — `#cc0000`): Form validation and destructive-action states.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The default white surface behind every vehicle section below the hero.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f4f4f4`): A near-white inset tone for spec callout rows and secondary information panels.
- **Canvas Dark** (`{colors.canvas-dark}` — `#000000`): The full-viewport hero background behind the lead vehicle photograph. Always paired with `{colors.on-dark}` text and a semi-transparent image overlay.
- **Overlay Dark** (`{colors.overlay-dark}` — `rgba(0,0,0,0.4)`): Applied over hero photography to ensure white text legibility without washing out the image.
- **Nav Bg** (`{colors.nav-bg}` — `rgba(0,0,0,0)`): The navigation bar starts fully transparent over the dark hero — it is invisible until the user scrolls.

### Text
- **Ink** (`{colors.ink}` — `#000000`): All headline and primary body text on light surfaces.
- **Body** (`{colors.body}` — `#393c41`): Secondary copy, vehicle sub-labels, and supporting paragraph text on white sections.
- **Mute** (`{colors.mute}` — `#5c5e62`): Footer text, fine-print footnotes, inactive nav links on scrolled state. The lowest-priority text in the system.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): All text on dark hero and overlay surfaces.
- **Link Light** (`{colors.link-light}` — `#ffffff`): Inline links inside dark hero zones.

### Hairline
- **Hairline** (`{colors.hairline}` — `#d0d0d0`): 1-px horizontal dividers between footer link columns and spec table rows. The only structural line in the system.

## Typography

### Font Family
Tesla uses a single proprietary geometric sans across every surface. It is extracted as the brand's own cut, metrically similar to Helvetica Neue or Gotham. A single monospace face does not appear anywhere in the marketing surface — this is a pure single-family system.

- **Display / Body / Button** — Tesla custom geometric sans. Open-source fallback: *Inter* at weight 400/500, or *Helvetica Neue* when Inter is unavailable.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 500 | 56px | 0px | Hero headline over full-bleed vehicle photography. |
| `{typography.display-lg}` | 40px | 500 | 48px | 0px | Section-level vehicle model name ("Model S"). |
| `{typography.display-md}` | 32px | 500 | 40px | 0px | Sub-section headlines, stat callouts, CTA band headlines. |
| `{typography.display-sm}` | 24px | 500 | 32px | 0px | Performance stat figures, card-level headlines. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0px | Hero supporting copy below the vehicle headline. |
| `{typography.body-md}` | 16px | 400 | 24px | 0px | Default body copy, vehicle sub-labels. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0px | Nav links, secondary body, CTA footnotes. |
| `{typography.caption}` | 12px | 400 | 16px | 0px | Footer columns, legal fine print, scroll labels. |
| `{typography.button-lg}` | 15px | 500 | 20px | 0.5px | Marketing-scale CTA button labels ("Order Now", "Learn More"). |
| `{typography.button-md}` | 14px | 500 | 20px | 0.5px | Smaller action labels, inline configurator buttons. |
| `{typography.label}` | 11px | 500 | 16px | 0.8px | Promo badge text, spec category eyebrows, uppercase callout labels. |

### Principles
- **Neutral tracking at display.** Unlike brands that use aggressive negative letter-spacing for display, Tesla keeps tracking at 0 for all display sizes. The weight 500 reading does the job alone.
- **Slight positive tracking at label scale.** The `{typography.label}` and `{typography.button-*}` tokens carry `+0.5 to +0.8 px` tracking to aid legibility at small sizes and support an uppercase variant for promotional labels.
- **Sentence-case everywhere.** Vehicle names, section headlines, and CTAs are sentence-case. The lone uppercase usage is the `{typography.label}` token in promo badges and spec eyebrows.
- **Weight 500 is the display ceiling.** The brand never renders the geometric sans at 700 or bold. The restraint is intentional — it reads calmer than any automotive peer that screams weight 800.
- **Single-family discipline.** No second face, no monospace. Every character on the page is the same geometric sans. Hierarchy is established by size and weight alone.

### Note on Font Substitutes
The primary face is proprietary. Open-source substitutes:
- **Geometric sans** — *Inter* (400/500) is the closest match for web deployment. *Helvetica Neue* is a faithful fallback when system fonts are preferred. *Satoshi* is a stylistically closer alternative for design tools.

## Layout

### Spacing System
- **Base unit**: 4 px. All captured padding and gap values are multiples of 4.
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.2xl}` 40px · `{spacing.3xl}` 48px · `{spacing.4xl}` 64px · `{spacing.5xl}` 96px · `{spacing.6xl}` 128px · `{spacing.section}` 160px.
- **Hero padding**: CTAs float at the bottom of the viewport over the photograph with `{spacing.lg}` bottom offset and `{spacing.lg}` horizontal gutters.
- **Vehicle section padding**: The white vehicle sections below the hero use zero top padding — the image bleeds to the section edge — and `{spacing.lg}` horizontal gutters for the headline/CTA stack.
- **Footer padding**: `{spacing.xl}` top/bottom, `{spacing.lg}` horizontal.

### Grid & Container
- **Max width**: Full viewport width. Tesla's marketing surface is intentionally 100vw — no max-width container constrains the photography. Text columns are centred with a soft max-width of approximately 800 px for readability.
- **Column patterns**:
  - Hero: single centred column — headline above, CTA pair below, photography full bleed.
  - Vehicle row: full-bleed image with headline + sub-label + CTA row overlaid at the bottom-centre.
  - Stat row: 3-up horizontal stat callouts inside a white band between vehicle sections.
  - Footer: multi-column link grid, approximately 6-up on desktop, collapsing to 2-up on mobile.

### Whitespace Philosophy
The photograph IS the content. Every whitespace decision subordinates to the image. Section padding is generous only where text must breathe on a white surface — vehicle sections use minimal internal padding because the image fills the frame. Footer and legal rows compress to `{spacing.xl}` to signal low priority. CTAs are the only interactive elements given generous surrounding space: the CTA row inside each vehicle section has `{spacing.lg}` above and below the button group to ensure tap targets never crowd the image edge.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 600px | Hero headline drops to display-md; CTA buttons stack vertically; nav collapses to Tesla logo + hamburger; vehicle stat rows drop to 1-up stacked. |
| Tablet | 600–959px | CTAs remain horizontal; nav still horizontal; vehicle sections keep full-bleed. |
| Desktop | 960–1439px | Full multi-column footer; 3-up stat rows; all nav links visible. |
| Wide | ≥ 1440px | Photography scales to fill; text column stays max 800px centred. |

#### Touch Targets
`{components.button-primary}` renders at approximately 44 px tall with `{spacing.sm}` 12 px top/bottom padding. Both "Order Now" and "Learn More" / "Demo Drive" CTAs meet the 44 × 44 px WCAG floor comfortably in every vehicle section.

#### Collapsing Strategy
- **Nav**: Full horizontal link row at desktop. Collapses to logo + hamburger icon at mobile; menu opens as a full-overlay panel.
- **Hero**: Single-column headline + CTA pair at all breakpoints — no split-hero pattern.
- **Vehicle section**: Full-bleed image at all widths; headline/CTA block shifts from centred to left-aligned at mobile.
- **Stat row**: 3-up at desktop, 1-up stacked at mobile with `{colors.hairline}` dividers between rows.
- **Footer**: 6-up at desktop → 3-up at tablet → 2-up at mobile.

## Elevation & Depth

Tesla's marketing surface uses no shadow system in the conventional sense. Elevation is communicated through a different mechanism:

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | All vehicle sections and the hero band. Every surface is flat. |
| Level 1 — Hairline Divide | `border-top: 1px solid {colors.hairline}` | Footer row dividers and spec table separators. |
| Level 2 — Overlay | `{colors.overlay-dark}` semi-transparent fill over photography | Used above the hero image to ensure white text legibility. Not a shadow — an overlay. |

There is no card elevation, no drop-shadow, no stacked-shadow system. The brand deliberately avoids material-depth metaphors. Depth is communicated by the photograph itself — the three-dimensional car is the only Z-axis object on the page.

### Decorative Depth
- **Full-bleed photography as depth**: the vehicle photograph is the entire decorative and depth system. No gradients, no illustrated backgrounds, no mesh effects.
- **Dark-to-light section alternation**: the page alternates between dark hero zones and white vehicle sections. That contrast is the only structural rhythm — it IS the depth cue.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero sections, vehicle photography frames, footer bands. |
| `{rounded.xs}` | 4px | Promo badge chips and tight inline labels. |
| `{rounded.sm}` | 6px | Small UI elements, dropdown menus. |
| `{rounded.md}` | 8px | Spec cards and configuration panels. |
| `{rounded.lg}` | 12px | Modal and overlay dialog chrome. |
| `{rounded.xl}` | 20px | The CTA button shape — the brand's signature rounded-rectangle button. Not a pill, not a square: a deliberately soft rectangle. |
| `{rounded.pill}` | 100px | Rarely used; reserved for tag/badge overflow variants. |
| `{rounded.full}` | 9999px | Circular icon targets, avatar frames. |

### Photography Geometry
- **Hero image**: 100vw × 100vh, no border-radius, no shadow. The car bleeds to every edge.
- **Vehicle section image**: full-bleed within the section viewport height — same rule as hero.
- **CTA buttons**: `{rounded.xl}` 20 px — the signature softened rectangle that distinguishes Tesla from pill-button peers.

## Components

### Buttons
**`button-primary`** — the white CTA used on dark overlay surfaces ("Order Now" over a vehicle photograph).
- Background `{colors.canvas}`, text `{colors.ink}`, label `{typography.button-lg}`, padding `{spacing.sm} {spacing.xl}`, shape `{rounded.xl}` 20 px.

**`button-primary-dark`** — the black CTA used on white surfaces ("Order Now" in a light vehicle section).
- Background `{colors.primary}`, text `{colors.on-primary}`, same typography + padding + shape.

**`button-secondary`** — the semi-transparent frosted secondary ("Learn More," "Demo Drive") over photography.
- Background `rgba(255,255,255,0.15)`, text `{colors.on-primary}`, same typography + shape.

**`button-outline`** — the bordered secondary on dark surfaces.
- Transparent background, 1px solid `{colors.on-primary}` border, text `{colors.on-primary}`, same typography + shape.

### Navigation
**`nav-bar`** — the transparent floating nav over the hero photograph.
- Background `{colors.nav-bg}` (fully transparent), text `{colors.on-dark}`, height 56 px, padding `0px {spacing.lg}`. Hosts the Tesla wordmark/logo left, link row centre, utility icons right.

**`nav-bar-scrolled`** — the white opaque nav after scroll.
- Background `{colors.canvas}`, text `{colors.ink}`, same height and padding.

**`nav-link`** — link items inside the transparent nav.
- Text `{colors.on-dark}`, `{typography.body-sm}`, padding `{spacing.xs} {spacing.sm}`.

**`nav-link-dark`** — link items inside the scrolled white nav.
- Text `{colors.ink}`, same typography and padding.

### Content Bands
**`hero-band`** — the full-viewport opening hero with vehicle photography.
- Background `{colors.canvas-dark}` (fallback behind image), text `{colors.on-dark}`, padding `{spacing.4xl} {spacing.lg}`. Inside: vehicle name in `{typography.display-xl}`, a supporting line in `{typography.body-lg}`, then an `overlay-cta-row` with `button-primary` + `button-secondary`.

**`vehicle-section`** — each full-bleed vehicle band below the hero.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `0px`. Photography fills the container; headline and CTA pair sit at the bottom-centre.

**`cta-band`** — a white text-only band between vehicle sections (stat callouts, "Schedule a Test Drive").
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.lg}`.

**`overlay-cta-row`** — the CTA button pair floating above photography.
- Transparent background, padding `{spacing.lg} {spacing.lg}`. Hosts `button-primary` + `button-secondary` in a flex row centred or bottom-aligned.

### Typography Atoms
**`vehicle-headline`** — the model name rendered over each vehicle section.
- Text `{colors.ink}`, `{typography.display-md}`.

**`vehicle-subline`** — the supporting descriptor below the model name ("Dual Motor All-Wheel Drive").
- Text `{colors.mute}`, `{typography.body-md}`.

**`stat-callout`** — a single performance figure with label (e.g., "1.99s / 0–60 mph").
- Text `{colors.ink}`, figure in `{typography.display-sm}`, label in `{typography.label}`, padding `{spacing.md} {spacing.lg}`.

**`hero-subtext`** — the supporting line directly below the hero headline.
- Text `{colors.on-dark}`, `{typography.body-md}`.

### Badges & Labels
**`badge-promo`** — the promotional callout chip ("Limited offer").
- Background `{colors.accent-red}`, text `{colors.on-primary}`, `{typography.label}`, padding `{spacing.xxs} {spacing.xs}`, shape `{rounded.xs}`.

**`scroll-indicator`** — the downward scroll cue at the bottom of the hero.
- Text `{colors.on-dark}`, `{typography.caption}`.

### Footer
**`footer`** — the bottom multi-column link nav and legal row.
- Background `{colors.canvas}`, text `{colors.mute}`, `{typography.caption}`, padding `{spacing.xl} {spacing.lg}`. Column headers in `{typography.body-sm}` weight 500; link rows in `{typography.caption}`.

**`footer-link`** — individual link in the footer column.
- Text `{colors.mute}`, `{typography.caption}`.

**`link-inline`** — body-copy inline link.
- Text `{colors.link}`, `{typography.body-sm}`.

## Do's and Don'ts

### Do
- Treat the vehicle photograph as the primary design element. Every other decision subordinates to keeping the image unobstructed.
- Use `{rounded.xl}` 20 px for all CTA buttons — the softened rectangle is the brand's distinctive shape; do not swap it for a pill or a hard square.
- Keep the nav transparent over the hero and transition to `{colors.canvas}` only on scroll — that transparency is intentional, not an oversight.
- Pair `button-primary` (white) with `button-secondary` (frosted) on dark photography surfaces. On white surfaces, use `button-primary-dark` (black).
- Reserve `{colors.accent-red}` exclusively for promotional callout badges. It should appear at most once per page view.
- Set all display type in weight 500 maximum. The brand's calm authority comes from restraint in weight, not size.
- Use sentence-case for all headlines and CTAs without exception.

### Don't
- Don't add decorative gradients, mesh effects, or texture overlays to any surface. The photograph is the decoration.
- Don't use the geometric sans at weight 700 or bold. The display ceiling is 500.
- Don't apply any shadow system to cards or panels — the brand carries no elevation metaphor. Use `{colors.hairline}` dividers instead.
- Don't shrink the CTA button radius to a sharp square or inflate it to a full pill. The `{rounded.xl}` 20 px softened rectangle is the signature shape.
- Don't render positive letter-spacing at display scale. Tracking remains at 0 for sizes 24 px and above.
- Don't introduce a secondary accent colour. The system is ink, white, gray, and one promotional red — adding another hue breaks the restraint.
- Don't set any label, eyebrow, or nav copy in a monospace face. There is no technical face in this system.
