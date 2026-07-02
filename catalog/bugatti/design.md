---
version: alpha
name: Bugatti
description: "Bugatti's digital surface is pure cinematic restraint — a near-total black void pierced by a single chromatic weapon: Bugatti Red. The hero occupies the entire viewport, a full-bleed photographic darkness of sculpted bodywork lit from within by that signature crimson. Headlines are set in all-capitals with aggressive open tracking, the typeface a condensed geometric sans that reads like an engineering specification stamped onto metal. Buttons are ghost pills — transparent with a hairline white border — never filled, never colored, never in red. The brand doesn't shout; it pressurises."
colors:
  primary: "#cc0000"
  primary-deep: "#990000"
  on-primary: "#ffffff"
  ink: "#ffffff"
  ink-muted: "#a0a0a0"
  ink-faint: "#666666"
  canvas: "#000000"
  canvas-soft: "#111111"
  canvas-mid: "#1a1a1a"
  surface: "#0d0d0d"
  hairline: "#333333"
  hairline-soft: "#222222"
  mute: "#666666"
  script-accent: "#d4d4a0"
  overlay-dark: "#00000099"
  overlay-darker: "#000000cc"
typography:
  display-xl:
    fontFamily: ui-sans-serif, system-ui, sans-serif
    fontSize: 60px
    fontWeight: 700
    lineHeight: 60px
    letterSpacing: 1.4px
  display-lg:
    fontFamily: ui-sans-serif, system-ui, sans-serif
    fontSize: 48px
    fontWeight: 700
    lineHeight: 52px
    letterSpacing: 1.4px
  display-md:
    fontFamily: ui-sans-serif, system-ui, sans-serif
    fontSize: 36px
    fontWeight: 700
    lineHeight: 40px
    letterSpacing: 1.2px
  display-sm:
    fontFamily: ui-sans-serif, system-ui, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 28px
    letterSpacing: 1.2px
  eyebrow:
    fontFamily: ui-sans-serif, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 1.2px
  body-lg:
    fontFamily: ui-sans-serif, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: ui-sans-serif, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: ui-sans-serif, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  caption:
    fontFamily: ui-sans-serif, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 1.2px
  button:
    fontFamily: ui-sans-serif, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 1.2px
  nav-label:
    fontFamily: ui-sans-serif, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 1.2px
rounded:
  none: 0px
  sm: 4px
  md: 8px
  button: 9999px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 6px
  sm: 12px
  md: 24px
  lg: 36px
  xl: 48px
  2xl: 64px
  3xl: 96px
  section: 120px
components:
  nav-bar:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    height: 64px
    padding: "{spacing.sm} {spacing.md}"
  nav-logo:
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    letterSpacing: 2px
  nav-menu-trigger:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.xxs} {spacing.sm}"
  nav-store-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.xxs} {spacing.sm}"
  button-ghost-pill:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    borderWidth: 1px
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.2xl} {spacing.md}"
  hero-headline:
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    letterSpacing: 1.4px
  hero-subline:
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    letterSpacing: 1.2px
  hero-cta:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
  full-bleed-image-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    padding: 0px
  section-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "{spacing.section} {spacing.md}"
  section-band-soft:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "{spacing.section} {spacing.md}"
  card-model:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  card-model-overlay:
    backgroundColor: "{colors.overlay-dark}"
    textColor: "{colors.ink}"
    typography: "{typography.display-sm}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  eyebrow-label:
    textColor: "{colors.ink-muted}"
    typography: "{typography.eyebrow}"
    letterSpacing: 1.2px
  section-headline:
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
  script-logotype:
    textColor: "{colors.script-accent}"
    fontStyle: italic
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    padding: "{spacing.xl} {spacing.md}"
  link-inline:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    textDecoration: none
  badge-label:
    backgroundColor: transparent
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    letterSpacing: 1.2px
  ex-pricing-tier:
    description: Model / edition tier card on a near-black surface with hairline border.
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  ex-pricing-tier-featured:
    description: Featured / hero edition — red primary surface with white text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  ex-product-selector:
    description: Model configuration summary — spec list on canvas-soft.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Store cart drawer — dark surface, line-item list per product.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Side nav row for configurator shell. Active state uses brand red left-edge indicator.
    backgroundColor: "{colors.canvas-soft}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs} {spacing.sm}"
  ex-data-table-cell:
    description: Spec / comparison table. Header uses eyebrow uppercase tracking; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.eyebrow}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xxs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Account / store login card on near-black surface.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-modal-card:
    description: Modal dialog — dark surface with hairline ring and elevated overlay.
    backgroundColor: "{colors.canvas-mid}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-empty-state-card:
    description: Empty-state frame — generous padding on near-black canvas.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — dark surface, hairline border, caption typography.
    backgroundColor: "{colors.canvas-mid}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.caption}"
---
## Overview

Bugatti's web presence is one of the most maximally restrained in any ultra-luxury category. The page is essentially a sequence of full-bleed photographic voids — deep black or deep crimson — into which headline text is reverse-printed in pure white at all-capital uppercase. There is no background pattern, no texture, no gradient (beyond the inherent drama of the photography). The single chromatic identity carrier is Bugatti Red, a saturated crimson used sparingly: it lives inside the car's sculpted bodywork visible through the hero photograph, not applied to buttons, not sprayed across section backgrounds. That restraint is deliberate and communicates ultra-exclusivity more precisely than any decorative system could.

Typography is the second definitive voice. Every headline and label is set in all-capitals with positive open letter-spacing (1.2–1.4 px measured) — the opposite of the tech-brand negative-tracking convention. The typeface is a compact geometric sans (resolved from `ui-sans-serif` fallback stack) at weight 700 for display, weight 400 for labels and buttons. The body copy and caption scale stays small and quiet, always uppercase-tracked, subordinate to the photography. A contrasting script logotype (italic, warm cream-gold) appears as a decorative counterpoint — the Solitaire wordmark visible in the lower hero — providing the only calligraphic warmth in the system.

Buttons are ghost pills — `9999px` radius, transparent fill, hairline white 1 px border — against the dark photography. They never fill with red; they never go solid black. The ghost pill is the only CTA shape the marketing surface uses. Navigation operates from two sparse text labels (`MENU` and `STORE`) flanking a centred wordmark, all in the same 12 px uppercase caption scale. The page reads as editorial luxury: maximum photography, minimum interface.

**Key characteristics:**
- All-black canvas system — `{colors.canvas}` true black for the page, `{colors.canvas-soft}` near-black for surface cards.
- Bugatti Red (`{colors.primary}`) is a photographic material, not a UI decoration color. It appears inside hero imagery, not on buttons or sections.
- Every headline is all-caps + positive open tracking (1.2–1.4 px). Weight 700 for display, 400 for labels.
- Ghost pill (`{rounded.button}` 9999 px, transparent fill, white hairline border) is the singular CTA shape across the entire marketing surface.
- Script / italic logotype in warm cream-gold (`{colors.script-accent}`) appears as a calligraphic accent for named model identities.
- A sparse three-element nav: hamburger MENU left, BUGATTI wordmark centre, STORE right — all 12 px uppercase.

## Colors

### Brand
- **Primary Red** (`{colors.primary}` — `#cc0000`): Bugatti's signature crimson. Appears as the colour of the car's bodywork and interior photography in the hero. Not used as a button fill or section background on the marketing surface — it is the car's colour, not the UI's colour.
- **Primary Red Deep** (`{colors.primary-deep}` — `#990000`): The shadow depth tone of the brand red, visible in the darkest folds of the hero car photography.

### Text
- **Ink** (`{colors.ink}` — `#ffffff`): All reverse-printed text on dark surfaces — headlines, nav labels, button labels, captions. The only text colour in use across the marketing surface.
- **Ink Muted** (`{colors.ink-muted}` — `#a0a0a0`): Secondary labels, footer copy, eyebrow lines at reduced optical weight.
- **Ink Faint** (`{colors.ink-faint}` — `#666666`): Lowest-priority captions and fine print against the dark canvas.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): Text on the rare red-filled surfaces.
- **Script Accent** (`{colors.script-accent}` — `#d4d4a0`): The warm cream-gold tone of the Solitaire script logotype visible at the base of the hero. A calligraphic warmth token, not a general-purpose accent.

### Surface
- **Canvas** (`{colors.canvas}` — `#000000`): True black — the default page surface, hero band, and footer.
- **Canvas Soft** (`{colors.canvas-soft}` — `#111111`): Near-black inset surface for card components and alternate sections.
- **Canvas Mid** (`{colors.canvas-mid}` — `#1a1a1a`): Mid-dark surface for modal and drawer components.
- **Surface** (`{colors.surface}` — `#0d0d0d`): Slightly warm near-black used for deep interior card tones.
- **Overlay Dark** (`{colors.overlay-dark}` — `#00000099`): 60 % black overlay for text-over-image panels.
- **Overlay Darker** (`{colors.overlay-darker}` — `#000000cc`): 80 % black overlay for high-contrast text-over-image situations.

### Borders & Dividers
- **Hairline** (`{colors.hairline}` — `#333333`): Card borders, table row dividers, inset panel edges.
- **Hairline Soft** (`{colors.hairline-soft}` — `#222222`): The lightest division between adjacent dark surfaces.
- **Mute** (`{colors.mute}` — `#666666`): Deactivated state and footer legal text.

## Typography

### Font Family
The brand's digital presence uses the system sans-serif stack (`ui-sans-serif, system-ui, sans-serif`) as the resolved fallback — no proprietary named face is extractable from the CSS signals. The typeface in use appears geometrically condensed and closely spaced in the screenshot: weight 700 at display sizes, weight 400 at caption and label sizes. There is no monospace layer; the brand has no code or technical label system in the marketing surface.

A second contrasting face — an italic script — appears in the Solitaire named-model logotype. It is used as image-proximate decoration, not as a body or heading face.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 60px | 700 | 60px | 1.4px | Hero headline — "THE BUGATTI F.K.P. HOMMAGE". Full-viewport, all-caps. |
| `{typography.display-lg}` | 48px | 700 | 52px | 1.4px | Section hero headline at sub-hero bands. |
| `{typography.display-md}` | 36px | 700 | 40px | 1.2px | Section headings inside content bands. |
| `{typography.display-sm}` | 24px | 700 | 28px | 1.2px | Card overlay titles, model name headings. |
| `{typography.eyebrow}` | 12px | 400 | 16px | 1.2px | All-caps section eyebrows, nav labels, button labels — the brand's universal small-text scale. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0px | Lead paragraph under section headlines. |
| `{typography.body-md}` | 16px | 400 | 24px | 0px | Default body copy. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0px | Secondary body copy, link labels. |
| `{typography.caption}` | 12px | 400 | 16px | 1.2px | Footer text, metadata labels. |
| `{typography.button}` | 12px | 400 | 16px | 1.2px | CTA pill button labels — uppercase tracked. |
| `{typography.nav-label}` | 12px | 400 | 16px | 1.2px | Nav MENU / STORE / BUGATTI wordmark labels. |

### Principles
- **All-caps with positive tracking is the brand's voice.** Every headline, label, and button is set in uppercase with 1.2–1.4 px letter-spacing. This is the opposite of the tech-brand negative-tracking convention — do not revert to sentence-case or zero tracking.
- **Display weight is 700 only for headlines; everything else is 400.** The brand achieves authority through tracking and uppercase, not through weight. Buttons, captions, and nav labels all stay at 400.
- **No monospace layer.** The system has no code, terminal, or technical label tier. The caption scale serves all small-text needs.
- **Script as decoration, not a type role.** The italic script face appears only as a named-model logotype (Solitaire). Never use it for body, caption, or UI labels.

### Note on Font Substitutes
The proprietary headline face used in Bugatti's print and exhibition materials does not resolve from CSS signals. For digital reproduction:
- **Geometric condensed sans** — *Barlow Condensed* (700) or *Oswald* (700) are the closest open-source matches for the display scale; weight 400 for labels.
- The system sans stack (`ui-sans-serif`) is the documented web fallback and is acceptable for all digital surfaces.

## Layout

### Spacing System
- **Base unit**: 6 px (the brand's `--gap: .5rem` = 8 px CSS token, but observed spacing steps are 4/6/12/24/36/48 px).
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 12 px · `{spacing.md}` 24 px · `{spacing.lg}` 36 px · `{spacing.xl}` 48 px · `{spacing.2xl}` 64 px · `{spacing.3xl}` 96 px · `{spacing.section}` 120 px.
- **Section padding**: full-bleed hero bands use 0 padding (photography bleeds to all edges). Text-content bands use `{spacing.section}` 120 px top/bottom to give the photography room and prevent the copy from feeling cramped.
- **Button interior**: ghost pill padding is `{spacing.sm} {spacing.md}` — 12 px vertical, 24 px horizontal — producing a compact pill proportioned for the 12 px label text.
- **Nav**: `{spacing.sm} {spacing.md}` padding; height approximately 64 px.

### Grid & Container
- **Max width**: not constrained to a fixed content column on the marketing surface — hero bands are truly full-bleed edge-to-edge. Text content within bands appears centre-aligned within an implied ~960–1200 px column.
- **Column patterns**:
  - Hero: single centred column — eyebrow line, headline, subline, CTA pill, stacked vertically at the vertical centre of the viewport.
  - Model grid: 2-up or 3-up full-bleed photography cards at desktop, stacking to 1-up at mobile.
  - Navigation: three-column flex row — hamburger left, wordmark centre, store right — each element at the same 12 px caption scale.

### Whitespace Philosophy
Photography does all the decorative work. Whitespace (or rather, blackspace) exists to isolate the image and give the headline space to breathe at its large tracked scale. The page reads as a sequence of full-viewport frames rather than a scrolling document. Transition between bands is a hard cut — no gradients between sections, no soft-scroll reveal chrome. Text blocks are sparse: a two-line headline + a four-word subline + one ghost pill. The compression of copy amplifies the luxury signal.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 600px | Hero stacks; headline size reduces; nav collapses to MENU hamburger + centred logo only; model grids drop to 1-up. |
| Tablet | 600–959px | 2-up model grids; full nav row retained. |
| Desktop | 960–1199px | Full hero and model grids. |
| Wide | ≥ 1200px | Photography scales to fill width; text content stays centred at implied max-width. |

#### Touch Targets
The ghost pill button renders at approximately 40 px tall given `{spacing.sm}` padding and 16 px line height. The nav labels (MENU, STORE) are touch-area inflated via implicit padding to meet the 44 px floor on mobile.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero photography bands — the image is the surface. |
| Level 1 — Hairline Ring | `0 0 0 1px {colors.hairline}` inset. | Card borders on canvas-soft surfaces. |
| Level 2 — Overlay | `{colors.overlay-dark}` 60% black fill over photography. | Text-over-image overlay panels — model name / CTA panels atop full-bleed photography. |
| Level 3 — Deep Overlay | `{colors.overlay-darker}` 80% black fill. | High-contrast text-over-image situations requiring maximum legibility. |

The brand does not use drop-shadows. Depth is communicated entirely through photographic darkness and overlay opacity — the car's sculpted form creates the only three-dimensional illusion on the page. Never add a box-shadow to a card or button; the ghost pill floats on photography without any shadow.

## Components

### Navigation

**`nav-bar`** — sparse three-element top bar.
- Transparent background over photography, text `{colors.ink}`. Height ~64 px, padding `{spacing.sm} {spacing.md}`. Layout: MENU hamburger trigger left, BUGATTI wordmark centred, STORE + bag icon right. All labels in `{typography.nav-label}` 12 px uppercase.

**`nav-menu-trigger`** — the MENU hamburger.
- Text `{colors.ink}`, label `{typography.nav-label}`, preceded by a three-line hamburger icon. No background, no border.

**`nav-store-link`** — the STORE text + bag icon.
- Text `{colors.ink}`, label `{typography.nav-label}`. No background, no border.

**`nav-logo`** — the BUGATTI wordmark at the nav centre.
- All-caps, `{typography.nav-label}`, white on transparent. Acts as the primary brand anchor.

### Buttons & CTAs

**`button-ghost-pill`** — the canonical marketing CTA.
- Background transparent, text `{colors.ink}`, 1 px solid `{colors.ink}` border, label in `{typography.button}` (12 px / 400 / uppercase / 1.2 px tracking), padding `{spacing.sm} {spacing.md}`, shape `{rounded.button}` 9999 px. Example label: "WITNESS THE LEGEND".

**`hero-cta`** — the hero band's primary call-to-action — identical to `button-ghost-pill` in all properties.
- Sits centred below the hero subline on the photography void.

### Hero & Bands

**`hero-band`** — the full-viewport photographic hero.
- Background `{colors.canvas}` (true black base beneath photography), text `{colors.ink}`. Copy sits vertically centred: eyebrow → headline in `{typography.display-xl}` → subline in `{typography.eyebrow}` → `hero-cta` ghost pill. Photography is a full-bleed layer; text is reverse-printed on top.

**`hero-headline`** — the hero-scale title.
- All-caps, `{typography.display-xl}` 60 px / 700 / 1.4 px tracking. Example: "THE BUGATTI F.K.P. HOMMAGE".

**`hero-subline`** — the short descriptor line beneath the hero headline.
- `{typography.eyebrow}` 12 px / 400 / 1.2 px tracking, all-caps. Example: "HONORING THE VEYRON AND ITS VISIONARY CREATOR".

**`full-bleed-image-band`** — a secondary photography band with no padding.
- Background `{colors.canvas}`, no text padding — image bleeds edge-to-edge. Used for named-model reveals and the Solitaire script logotype section.

**`section-band`** — a text-and-copy content band.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.section} {spacing.md}`. Hosts `eyebrow-label` + `section-headline` + `{typography.body-md}` body.

**`section-band-soft`** — alternate dark-surface content band.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, same padding rhythm as `section-band`.

### Cards

**`card-model`** — model / edition card in a grid.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.md}`, shape `{rounded.none}` (square-cornered — no radius on model cards). Hosts a full-bleed photography cap above the text block.

**`card-model-overlay`** — text panel overlaid on photography inside a model card.
- Background `{colors.overlay-dark}`, text `{colors.ink}`, padding `{spacing.md}`, shape `{rounded.none}`. Title in `{typography.display-sm}`.

### Text Elements

**`eyebrow-label`** — the section-level uppercase overline.
- Text `{colors.ink-muted}`, `{typography.eyebrow}` 12 px / 400 / 1.2 px tracking. Appears above every section headline as a category identifier.

**`section-headline`** — section-level display heading.
- Text `{colors.ink}`, `{typography.display-md}` 36 px / 700 / 1.2 px tracking. All-caps.

**`script-logotype`** — the calligraphic italic model logotype (Solitaire).
- Text `{colors.script-accent}` warm cream-gold, italic, display scale. Decoration only — not a UI type role.

**`link-inline`** — inline body links.
- Text `{colors.ink}`, `{typography.body-sm}`, no underline (`textDecoration: none`).

**`badge-label`** — small metadata label.
- Text `{colors.ink-muted}`, `{typography.caption}` 12 px, uppercase + 1.2 px tracking. No background fill.

### Footer

**`footer`** — bottom navigation and legal.
- Background `{colors.canvas}`, text `{colors.ink-muted}`, `{typography.caption}` 12 px, padding `{spacing.xl} {spacing.md}`. Column links in uppercase tracked caption; legal fine print at `{colors.mute}`.

## Do's and Don'ts

### Do
- Use `{colors.canvas}` true black as the default page background. Every band, every card, every modal starts from black.
- Set every headline, label, and button in ALL-CAPS with 1.2–1.4 px positive letter-spacing. Tracked uppercase is the brand's voice — do not revert to sentence-case.
- Render CTAs as `{rounded.button}` 9999 px ghost pills — transparent fill, 1 px solid white border. The ghost pill is the only CTA shape.
- Keep display type at weight 700 only. Every other level — buttons, captions, nav labels, body — stays at 400.
- Treat Bugatti Red (`{colors.primary}`) as the car's colour, not a UI colour. It appears in photography, not in buttons or section fills.
- Use `{spacing.section}` 120 px vertical padding on text-content bands. Sparse text in a vast dark field is the brand's spatial voice.
- Use square corners (`{rounded.none}`) on all content cards. Only the CTA pill carries a radius.

### Don't
- Don't fill any CTA button with Bugatti Red. The ghost pill is always transparent-on-white-border. Red is reserved for the bodywork.
- Don't set headlines in sentence-case or with zero tracking. The all-caps + open-tracking combination is non-negotiable.
- Don't add drop-shadows to cards, buttons, or modals. The brand has no shadow system — depth is photographic darkness and overlay opacity only.
- Don't introduce a lighter background surface (white, off-white, light gray). The system is dark-only; `{colors.canvas}` black and `{colors.canvas-soft}` near-black are the ceiling of surface brightness.
- Don't use the script logotype as a body or label face. It is a named-model decoration, not a type system role.
- Don't introduce positive-tracked lowercase or mixed-case headlines. The brand never sets headlines in mixed case.
- Don't add decorative gradients, patterns, or geometric chrome. Photography is the entire decoration system.
