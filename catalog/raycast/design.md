---
version: alpha
name: Raycast
description: "Raycast is a power-user productivity brand whose surface is a near-pure black canvas broken by a single dramatic device: raked, high-saturation red-to-black streaks of light that act as the entire decoration system. Everything else is disciplined restraint — Inter at weight 600 for display, neutral-weight 400 for body, near-white text on near-black ground, and a button system that stays resolutely rectangular at 4 px radius. The brand earns its dark-mode-only posture by controlling every lumen on the page."
colors:
  canvas: "#07080a"
  canvas-raised: "#101111"
  canvas-card: "#18191a"
  canvas-subtle: "#313133"
  ink: "#f2f3f5"
  ink-secondary: "#c2c7ca"
  ink-muted: "#78787c"
  ink-faint: "#5e6366"
  on-button: "#18191a"
  hairline: hsl(195, 5%, 15%)
  hairline-card: rgba(255, 255, 255, 0.06)
  hairline-inset: rgba(255, 255, 255, 0.10)
  primary-red: hsl(0, 100%, 69%)
  primary-red-transparent: hsla(0, 100%, 69%, 0.15)
  accent-blue: hsl(202, 100%, 67%)
  accent-blue-transparent: hsla(202, 100%, 67%, 0.15)
  accent-green: hsl(151, 59%, 59%)
  accent-green-transparent: hsla(151, 59%, 59%, 0.15)
  accent-yellow: hsl(43, 100%, 60%)
  accent-yellow-transparent: hsla(43, 100%, 60%, 0.15)
  button-bg: hsla(0, 0%, 100%, 0.815)
  button-bg-hover: hsl(0, 0%, 100%)
  button-fg: "#2f3031"
typography:
  display-xl:
    fontFamily: Inter, "Inter Fallback", sans-serif
    fontSize: 64px
    fontWeight: 600
    lineHeight: 70.4px
    letterSpacing: normal
  display-lg:
    fontFamily: Inter, "Inter Fallback", sans-serif
    fontSize: 48px
    fontWeight: 600
    lineHeight: 52px
    letterSpacing: normal
  display-md:
    fontFamily: Inter, "Inter Fallback", sans-serif
    fontSize: 32px
    fontWeight: 600
    lineHeight: 38px
    letterSpacing: normal
  display-sm:
    fontFamily: Inter, "Inter Fallback", sans-serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 30px
    letterSpacing: 0.2px
  body-lg:
    fontFamily: Inter, "Inter Fallback", sans-serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Inter, "Inter Fallback", sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: Inter, "Inter Fallback", sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: Inter, "Inter Fallback", sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  caption:
    fontFamily: Inter, "Inter Fallback", sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  label-nav:
    fontFamily: Inter, "Inter Fallback", sans-serif
    fontSize: 20px
    fontWeight: 600
    lineHeight: normal
    letterSpacing: 0.2px
  button-md:
    fontFamily: Inter, "Inter Fallback", sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  button-lg:
    fontFamily: Inter, "Inter Fallback", sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
rounded:
  none: 0px
  xs: 4px
  button: 4px
  sm: 6px
  md: 8px
  lg: 12px
  card: 20px
  pill: 43px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 10px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 64px
  5xl: 96px
  section: 224px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 64px
    padding: "{spacing.xs} {spacing.xl}"
    borderBottom: 1px solid {colors.hairline}
  nav-link:
    textColor: "{colors.ink-secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xxs} {spacing.md}"
  nav-cta-download:
    backgroundColor: "{colors.button-bg}"
    textColor: "{colors.button-fg}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 2px {spacing.md}
    height: 32px
  nav-login:
    textColor: "{colors.ink-secondary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xxs} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.button-bg}"
    textColor: "{colors.button-fg}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.xl}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.xl}"
  badge-pill:
    backgroundColor: "{colors.primary-red-transparent}"
    textColor: "{colors.primary-red}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.xs}"
  badge-accent:
    backgroundColor: "{colors.accent-blue-transparent}"
    textColor: "{colors.accent-blue}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.xs}"
  card-feature:
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xs}"
    border: 1px solid {colors.hairline-card}
    insetHighlight: 0px 1px 0px 0px {colors.hairline-inset} inset
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  section-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.3xl} {spacing.xl}"
  section-band-raised:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.3xl} {spacing.xl}"
  feature-card-grid:
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
    border: 1px solid {colors.hairline-card}
  pricing-card:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
    border: 1px solid {colors.hairline}
  pricing-card-featured:
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
    border: 1px solid {colors.hairline-card}
    insetHighlight: 0px 1px 0px 0px {colors.hairline-inset} inset
  form-input:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
    height: 36px
  link-inline:
    textColor: "{colors.ink-secondary}"
    typography: "{typography.body-md}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.xl}"
    borderTop: 1px solid {colors.hairline}
  divider:
    borderColor: "{colors.hairline}"
    height: 1px
  ex-pricing-tier:
    description: Default pricing tier card on the near-black raised surface with hairline border.
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured tier — slightly lighter card surface with inset highlight ring to lift it off the page.
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: Extension / plugin selector card — canvas-card surface, card radius, inner content in body-sm.
    backgroundColor: "{colors.canvas-card}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    description: Subscription summary — line items per plan add-on on canvas-raised surface.
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses primary-red as a left-edge indicator bar.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary-red}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.md}"
  ex-data-table-cell:
    description: Data table — header uses body-sm-strong on canvas-raised; rows use body-sm on canvas.
    headerBackground: "{colors.canvas-raised}"
    headerTypography: "{typography.body-sm-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in card — canvas-card surface with card-radius and form-input primitives inside.
    backgroundColor: "{colors.canvas-card}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog — canvas-card surface with card radius and stacked shadow elevation.
    backgroundColor: "{colors.canvas-card}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame — generous padding on canvas-raised.
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — canvas-card surface, sm radius, compact padding.
    backgroundColor: "{colors.canvas-card}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"
---
## Overview

Raycast is a developer-productivity brand that bets its entire visual identity on a dark-mode-only world. The page body is a near-pure black (`{colors.canvas}` `#07080a`) — not midnight blue, not dark grey — anchored by a single dramatic decoration: raked, diagonal streaks of high-saturation crimson light that bleed across the hero like a motion-blurred laser array. That photograph IS the brand's decoration system. Everything else on the surface is disciplined restraint.

Type is a single face — Inter — in two working weights: 600 for every display headline, 400 for every supporting paragraph and nav link. The display scale is large and confident (64 px hero with a 1.1 line-height) and tracking is left at the browser's natural default — the brand earns its weight from scale and contrast rather than typographic trickery. There is no monospace face on the marketing surface; no eyebrow labels set in technical-looking caps.

Surfaces layer in three shallow steps above the base canvas: `{colors.canvas-raised}` for secondary sections, `{colors.canvas-card}` for card interiors, and `{colors.canvas-subtle}` for the highest-contrast UI element backgrounds. Cards carry a compound stacked shadow plus a 6-percent-white border plus a 10-percent-white inset highlight at their top edge — the same "soft glass shelf" trick that makes the launcher window look real. The button system stays rectangular at a measured 4 px radius; cards breathe at 20 px. The single pill-shaped element clocks in at 43 px and is used exclusively for badge labels.

The brand's accent colour system is a four-token semantic set — red, blue, green, yellow — each paired with a 15-percent-opacity transparent sibling used as a glow or badge fill. Red (`{colors.primary-red}`) is the hero accent and the closest thing to a primary brand colour, but it appears only in the photographic backdrop and in red-tinted status badges — never as a button fill. Buttons are near-white on black, keeping the conversion surface legible and calm.

**Key Characteristics:**
- Near-pure black canvas with a single high-saturation red photographic streak as the entire decorative system.
- Inter at weight 600 (display) and 400 (body), natural tracking, no monospace.
- Rectangular 4 px buttons — never pill CTAs. Cards at 20 px, badges at 43 px pill.
- Compound stacked shadow + subtle white border + white inset highlight on every card surface.
- A four-token semantic accent palette (red / blue / green / yellow), each with a 15% transparent glow sibling.
- Dark-mode-only: there is no light-mode surface visible on this site.

## Colors

### Canvas & Surface
- **Canvas** (`{colors.canvas}` — `#07080a`): The page body — an almost-pure black that reads warmer than a pure neutral. Every section band sits on this ground.
- **Canvas Raised** (`{colors.canvas-raised}` — `#101111`): The first elevation step — secondary section backgrounds, pricing card default surfaces, form input fills.
- **Canvas Card** (`{colors.canvas-card}` — `#18191a`): Interior card fill — feature cards, the "featured" pricing card, modal surfaces.
- **Canvas Subtle** (`{colors.canvas-subtle}` — `#313133`): The highest-contrast background step — used for active chip states and subtle UI element fills.
- **Hairline** (`{colors.hairline}` — `hsl(195, 5%, 15%)`): The brand's default 1 px divider — card borders, input borders, section separators.
- **Hairline Card** (`{colors.hairline-card}` — `rgba(255, 255, 255, 0.06)`): The near-invisible white-tinted border ring on glass-style cards.
- **Hairline Inset** (`{colors.hairline-inset}` — `rgba(255, 255, 255, 0.10)`): The top-edge inset highlight on elevated card surfaces — the "shelf" cue.

### Text
- **Ink** (`{colors.ink}` — `#f2f3f5`): The primary text colour — all headlines and primary body copy on dark surfaces. Slightly warm white rather than pure.
- **Ink Secondary** (`{colors.ink-secondary}` — `#c2c7ca`): Secondary text — nav links, sub-headings, card body paragraphs.
- **Ink Muted** (`{colors.ink-muted}` — `#78787c`): Third-tier text — footer body, placeholder text, caption labels.
- **Ink Faint** (`{colors.ink-faint}` — `#5e6366`): Lowest-priority text — fine print, disabled states.

### Button
- **Button BG** (`{colors.button-bg}` — `hsla(0, 0%, 100%, 0.815)`): The near-white translucent fill for the primary download CTA — intentionally slightly-off-pure-white so it doesn't punch too hard.
- **Button BG Hover** (`{colors.button-bg-hover}` — `hsl(0, 0%, 100%)`): Pure white on hover — a subtle but deliberate shift.
- **Button FG** (`{colors.button-fg}` — `#2f3031`): The near-black text rendered on the near-white button — not pure black, stays comfortable.
- **On Button** (`{colors.on-button}` — `#18191a`): Alternative button text colour at deeper contrast.

### Semantic Accents
- **Primary Red** (`{colors.primary-red}` — `hsl(0, 100%, 69%)`): The brand's signature crimson — visible in the hero photograph, red status badges, and the active-indicator colour in the app shell. Never used as a button fill.
- **Primary Red Transparent** (`{colors.primary-red-transparent}` — `hsla(0, 100%, 69%, 0.15)`): The glow / badge-background sibling — a soft crimson blush behind error or "new" badge labels.
- **Accent Blue** (`{colors.accent-blue}` — `hsl(202, 100%, 67%)`): A sky-cyan accent for informational or "AI" contexts.
- **Accent Blue Transparent** (`{colors.accent-blue-transparent}` — `hsla(202, 100%, 67%, 0.15)`): Soft blue glow behind informational badges.
- **Accent Green** (`{colors.accent-green}` — `hsl(151, 59%, 59%)`): Success / active status indicator.
- **Accent Green Transparent** (`{colors.accent-green-transparent}` — `hsla(151, 59%, 59%, 0.15)`): Soft green glow behind success badges.
- **Accent Yellow** (`{colors.accent-yellow}` — `hsl(43, 100%, 60%)`): Warning / caution indicator.
- **Accent Yellow Transparent** (`{colors.accent-yellow-transparent}` — `hsla(43, 100%, 60%, 0.15)`): Soft amber glow behind warning badges.

## Typography

### Font Family
The entire marketing surface runs a single face: **Inter** (with the "Inter Fallback" auto-generated metric-matching fallback and `sans-serif` as the terminal fallback). Two weights carry the full hierarchy — 600 for every display headline and button label, 400 for body copy and nav links. The brand does not use a monospaced face anywhere on the marketing surface.

Tracking is left at the browser's natural default for both display and body — no aggressive negative letter-spacing, no uppercase-with-tracking labels. The brand earns its voice from scale, weight contrast, and the near-black field, not from typographic compression.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 600 | 70.4px | normal | Hero headline ("Your shortcut to everything."). |
| `{typography.display-lg}` | 48px | 600 | 52px | normal | Large section headlines. |
| `{typography.display-md}` | 32px | 600 | 38px | normal | Section sub-headlines, feature cluster headings. |
| `{typography.display-sm}` | 24px | 600 | 30px | 0.2px | Card-level headings, pricing tier names. |
| `{typography.body-lg}` | 20px | 400 | 28px | — | Hero sub-headline / lead paragraph. |
| `{typography.body-md}` | 16px | 400 | 24px | — | Default card and section body copy. |
| `{typography.body-sm}` | 14px | 400 | 20px | — | Nav links, secondary labels, footer body. |
| `{typography.body-sm-strong}` | 14px | 600 | 20px | — | Table headers, strong inline labels. |
| `{typography.caption}` | 12px | 400 | 16px | — | Badge labels, fine print. |
| `{typography.label-nav}` | 20px | 600 | normal | 0.2px | "Raycast" wordmark / brand label in the nav. |
| `{typography.button-md}` | 14px | 600 | 20px | — | Nav-scale CTA labels (Download button in nav). |
| `{typography.button-lg}` | 16px | 600 | 24px | — | Marketing-scale CTA labels. |

### Principles
- **Natural tracking throughout.** Neither display nor body text uses negative letter-spacing. The brand's confidence comes from scale and weight, not compression.
- **Weight 600 is the ceiling.** Inter never appears at 700 or heavier on this surface. The display/body contrast is achieved by jumping weight rather than pushing to bold-bold.
- **Single face, clean.** No decorative, serif, or monospace faces on the marketing surface. The brand is a tool brand — it communicates through clarity, not typographic variety.
- **Sentence-case headlines, period-terminated.** The hero reads "Your shortcut to everything." — the period is intentional, part of the brand's confident, clipped tone.

## Layout

### Spacing System
- **Base unit**: 4 px, but the most-used increment in the extracted data is 8 px (`{spacing.xs}`).
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 10 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px · `{spacing.section}` 224 px.
- **Section padding**: marketing bands use `{spacing.3xl}` to `{spacing.4xl}` top/bottom. The hero band rises to `{spacing.4xl}` to give the photographic backdrop room to breathe.
- **Card interior padding**: feature cards use `{spacing.xl}` 24 px; the card outer wrapper has a tighter `{spacing.xs}` 8 px so the inner content tile floats inside the glass frame.
- **Inline gap**: nav link rows and chip rows use `{spacing.md}` 12 px to `{spacing.lg}` 16 px between siblings.

### Grid & Container
- **Max width**: the content reads approximately 1200 px wide, centred with `{spacing.xl}` 24 px gutters on desktop.
- **Column patterns**:
  - Feature card cluster: 3-up at desktop, stacking to 1-up at mobile.
  - Pricing grid: 3-up at desktop with the featured card visually elevated.
  - Nav link row: 8 links centred between logo and CTA cluster.

### Whitespace Philosophy
The photographic hero backdrop does the decorative heavy-lifting; whitespace keeps every other band quiet. Section gaps are generous — `{spacing.3xl}` to `{spacing.section}` — so the black canvas breathes between content clusters. Inside a card, the headline/body stack is compact (8 px gap), with the CTA or interactive element sitting further below with a larger gap. The page reads as precision-engineered: large inter-section gaps, tight intra-card spacing.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. The raw canvas. | Hero band background, full-bleed photo sections. |
| Level 1 — Hairline | `1px solid {colors.hairline}` border only. | Input fields, dividers, basic separation. |
| Level 2 — Glass Card | `1px solid {colors.hairline-card}` border + `0px 1px 0px 0px {colors.hairline-inset}` inset top highlight. | Feature cards, pricing cards. The "glass shelf" effect. |
| Level 3 — Stacked Drop | Full compound shadow (`rgba(0,0,0,0.2) 0px 0px 1px`, `rgba(0,0,0,0.17) 0px 2px 2px`, `rgba(0,0,0,0.1) 0px 4px 3px`, `rgba(0,0,0,0.03) 0px 7px 3px`, `rgba(0,0,0,0.25) 0px 4px 4px`) + glass border. | The primary card component — simulates the actual Raycast launcher window. |
| Level 4 — Modal | Stacked drop + larger spread on a canvas-card surface. | Modal and overlay dialogs. |

The brand uses five-layer stacked shadows — progressively larger offsets at lower opacities — the same technique used to render the Raycast launcher window itself. A single `box-shadow` drop is never used alone. The inset white highlight at the top of each card is as important as the shadow beneath it: together they sell the illusion of a dark glass panel catching ambient light from above.

### Decorative Depth
- **Photographic streak as atmospheric depth**: the hero's diagonal crimson light rays are the brand's only "atmospheric" device — a photograph treated as a full-bleed backdrop, never reduced to an icon or pattern.
- **Surface stepping as depth cue**: canvas → canvas-raised → canvas-card is the brand's primary depth ladder. There is no polarity-flip to a light surface.
- **Inset highlight + stacked drop combo**: the top-edge `rgba(255,255,255,0.10)` inset ring and the five-stop shadow together produce the "launcher pane floating in dark space" effect.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero/footer bands. |
| `{rounded.xs}` / `{rounded.button}` | 4px | Every button and CTA — the measured, consistent button radius across the site. Rectangular, not pill. |
| `{rounded.sm}` | 6px | Brand's `--radius-md` CSS custom property — form inputs, small UI chip elements. |
| `{rounded.md}` | 8px | Intermediate UI surface (e.g. inner content regions inside a card). |
| `{rounded.lg}` | 12px | Slightly larger card-interior regions. |
| `{rounded.card}` | 20px | The canonical card chrome — feature cards, pricing cards, the launcher-window mockup. |
| `{rounded.pill}` | 43px | Observed pill — badge labels and status chips only. Not used on buttons. |
| `{rounded.full}` | 9999px | Icon-button circular containers, nav ghost pill hover states. |

## Components

### Buttons

**`button-primary`** — the near-white rectangular CTA, marketing scale.
- Background `{colors.button-bg}`, text `{colors.button-fg}`, label in `{typography.button-lg}`, padding `{spacing.xs} {spacing.xl}`, shape `{rounded.button}` 4 px. Strictly rectangular — the brand does not use pill-shaped marketing CTAs.

**`button-secondary`** — the ghost outline CTA paired alongside the primary.
- Background transparent, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, same typography and shape as `button-primary`.

**`nav-cta-download`** — the small near-white "Download" button with the Apple logo in the nav.
- Background `{colors.button-bg}`, text `{colors.button-fg}`, label in `{typography.button-md}` (14 px / 600), padding `2px {spacing.md}`, height 32 px, shape `{rounded.button}` 4 px. Scaled down from the marketing button but same geometry.

**`nav-login`** — the plain text "Log in" link in the nav.
- Text `{colors.ink-secondary}`, set in `{typography.body-sm}`, no background, no border.

### Cards & Containers

**`card-feature`** — the canonical dark glass card used in feature grids and the launcher mockup.
- Background `{colors.canvas-card}`, text `{colors.ink}`, padding `{spacing.xs}` outer wrap, shape `{rounded.card}` 20 px, border `1px solid {colors.hairline-card}`, top-edge inset highlight `0px 1px 0px 0px {colors.hairline-inset}`. Carries Level 3 stacked shadow. The inner content region uses `{spacing.xl}` padding.

**`feature-card-grid`** — the content region inside a feature card, when used in a 3-up grid.
- Background `{colors.canvas-card}`, text `{colors.ink}`, padding `{spacing.xl}`, shape `{rounded.card}`, border `1px solid {colors.hairline-card}`.

**`pricing-card`** — the default pricing tier card.
- Background `{colors.canvas-raised}`, text `{colors.ink}`, padding `{spacing.xl}`, shape `{rounded.card}`, border `1px solid {colors.hairline}`. Inside: tier name in `{typography.display-sm}`, price in `{typography.display-md}`, feature list in `{typography.body-sm}` rows, CTA at the bottom in `button-primary`.

**`pricing-card-featured`** — the visually elevated featured tier card.
- Background `{colors.canvas-card}`, text `{colors.ink}`, same shape and padding as `pricing-card`, border `1px solid {colors.hairline-card}`, top-edge inset highlight. Slightly lighter surface than default sibling cards so it lifts without needing colour inversion.

### Badges & Chips

**`badge-pill`** — the small rounded status / category badge (red accent variant).
- Background `{colors.primary-red-transparent}`, text `{colors.primary-red}`, label in `{typography.caption}`, padding `{spacing.xxs} {spacing.xs}`, shape `{rounded.pill}` 43 px.

**`badge-accent`** — the informational or "AI" badge (blue accent variant).
- Background `{colors.accent-blue-transparent}`, text `{colors.accent-blue}`, same typography and shape as `badge-pill`.

### Inputs & Forms

**`form-input`** — the canonical text input.
- Background `{colors.canvas-raised}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, typography `{typography.body-sm}`, padding `{spacing.xs} {spacing.md}`, height 36 px, shape `{rounded.sm}` 6 px.

### Navigation

**`nav-bar`** — the sticky top navigation.
- Background `{colors.canvas}`, text `{colors.ink}`, height 64 px, padding `{spacing.xs} {spacing.xl}`, bottom border `1px solid {colors.hairline}`. Layout: logo + wordmark left, 8-link row centre, "Log in / Download" cluster right.

**`nav-link`** — the centred navigation link.
- Text `{colors.ink-secondary}`, set in `{typography.body-sm}`, padding `{spacing.xxs} {spacing.md}`, shape `{rounded.full}` (ghost pill — visible on hover/active).

### Sections & Bands

**`hero-band`** — the full-bleed hero with the photographic streak backdrop.
- Background `{colors.canvas}` (photograph sits behind), text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Inside: hero headline in `{typography.display-xl}` (sentence-case, period-terminated), sub-headline in `{typography.body-lg}`, CTA row below. The diagonal crimson streaks occupy the entire backdrop — they are the band's decoration.

**`section-band`** — a standard content section on the base canvas.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.3xl} {spacing.xl}`. Section headline in `{typography.display-md}`.

**`section-band-raised`** — a slightly elevated content section (secondary visual rhythm).
- Background `{colors.canvas-raised}`, text `{colors.ink}`, padding `{spacing.3xl} {spacing.xl}`.

### Inline & Utility

**`link-inline`** — body-copy inline links.
- Text `{colors.ink-secondary}`, set in `{typography.body-md}`, no underline by default.

**`divider`** — horizontal rule between content blocks.
- `1px solid {colors.hairline}`, full width, no margin tokens baked in.

**`footer`** — the bottom navigation band.
- Background `{colors.canvas}`, text `{colors.ink-muted}`, padding `{spacing.3xl} {spacing.xl}`, top border `1px solid {colors.hairline}`. Column headers in `{typography.body-sm-strong}`; link rows in `{typography.body-sm}`.

## Do's and Don'ts

### Do
- Keep the canvas at `{colors.canvas}` `#07080a`. The brand lives in near-pure black — do not lighten the background to a charcoal or navy.
- Use `{rounded.button}` 4 px for every CTA button. The brand's button geometry is deliberately rectangular — that precision IS part of the voice.
- Use `{rounded.card}` 20 px for all card surfaces and the launcher-window mockup. These two radius values coexist deliberately and must not blur together.
- Set the "Download" CTA with a near-white `{colors.button-bg}` fill and dark `{colors.button-fg}` text. It is the only non-text CTA surface and earns its contrast on the dark field.
- Apply the full compound shadow stack (five offsets + white inset highlight) on every elevated card. A single drop-shadow looks wrong here.
- Reserve `{colors.primary-red}` for the photographic decoration, status badges, and the active-nav indicator. It must not fill a button or CTA surface.
- Use Inter weight 600 for every display headline and button label; 400 for all body and nav link text. No weight between.

### Don't
- Don't add a light-mode surface or section. There is no light-mode treatment anywhere on this site.
- Don't use pill-shaped buttons. The 43 px pill radius is for badges only — CTAs stay at 4 px rectangular.
- Don't letter-space display headlines. Natural tracking is the brand's choice; negative or positive compression both break the voice.
- Don't introduce a new decorative system. The diagonal crimson photograph is the entire decoration — patterns, illustrations, or gradients outside that vocabulary are off-brand.
- Don't use the accent colours (red, blue, green, yellow) as button fills. They are semantic status colours and glow fills, not CTA surfaces.
- Don't apply a single flat drop-shadow to cards. The brand's elevation is five-layer stacked; shortcuts are legible as cheap.
- Don't set body paragraphs in weight 600. The weight jump from 400 (body) to 600 (display) is the sole typographic hierarchy signal — muddying it undermines the system.
