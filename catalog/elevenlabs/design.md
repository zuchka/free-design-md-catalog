---
version: alpha
name: ElevenLabs
description: ElevenLabs is an AI voice platform whose surface is a near-white warm canvas broken by large soft-gradient orbs — lavender, coral, sage, blush — that act as the entire decorative system. The type system pairs a proprietary light-weight serif display face (Waldenburg, weight 300) for headlines with Inter for all body and UI text, producing a distinctly editorial, almost magazine-like quietness. Every interactive element — buttons, tags, nav pills — collapses into a full 9999px pill. Nothing has a corner.
colors:
  primary: "#000000"
  on-primary: "#ffffff"
  ink: "#000000"
  body: "#3d3d3d"
  mute: "#767676"
  hairline: "#e8e4e0"
  hairline-soft: rgba(255,255,255,0.6)
  canvas: "#fdfcfc"
  canvas-soft: "#f5f3f1"
  canvas-orb: "#f0ede9"
  on-canvas-soft: "#000000"
  link: "#000000"
  success: "#2d7a4f"
  error: "#c0392b"
  warning: "#b45309"
  orb-lavender: "#9b8ec4"
  orb-coral: "#e8806a"
  orb-blush: "#e8b4a8"
  orb-sage: "#8aab8c"
  orb-peach: "#f0a882"
  orb-slate: "#8fa8b8"
  nav-bg: "#fdfcfc"
  button-secondary-bg: "#f5f3f1"
typography:
  display-xl:
    fontFamily: Waldenburg, "Waldenburg Fallback", Georgia, serif
    fontSize: 48px
    fontWeight: 300
    lineHeight: 52px
    letterSpacing: -0.96px
  display-lg:
    fontFamily: Waldenburg, "Waldenburg Fallback", Georgia, serif
    fontSize: 36px
    fontWeight: 300
    lineHeight: 42px
    letterSpacing: -0.72px
  display-md:
    fontFamily: Waldenburg, "Waldenburg Fallback", Georgia, serif
    fontSize: 28px
    fontWeight: 300
    lineHeight: 34px
    letterSpacing: -0.56px
  display-sm:
    fontFamily: Waldenburg, "Waldenburg Fallback", Georgia, serif
    fontSize: 20px
    fontWeight: 300
    lineHeight: 26px
    letterSpacing: -0.2px
  body-lg:
    fontFamily: Inter, "Inter Fallback", system-ui, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Inter, "Inter Fallback", system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0.16px
  body-sm:
    fontFamily: Inter, "Inter Fallback", system-ui, sans-serif
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22px
  body-xs:
    fontFamily: Inter, "Inter Fallback", system-ui, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  caption:
    fontFamily: Inter, "Inter Fallback", system-ui, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: Inter, "Inter Fallback", system-ui, sans-serif
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22px
  button-sm:
    fontFamily: Inter, "Inter Fallback", system-ui, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  nav-label:
    fontFamily: Inter, "Inter Fallback", system-ui, sans-serif
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22px
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  button: 9999px
  card: 9999px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 28px
  2xl: 32px
  3xl: 48px
  4xl: 64px
  5xl: 96px
  section: 128px
components:
  nav-bar:
    backgroundColor: "{colors.nav-bg}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    height: 56px
    padding: "{spacing.sm} {spacing.lg}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-login:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.md}
    height: 36px
  nav-cta-signup:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.md}
    height: 36px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.md}
    height: 44px
  button-secondary:
    backgroundColor: "{colors.button-secondary-bg}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.md}
    height: 44px
  tab-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.lg}"
    height: 40px
  tab-pill-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.lg}"
    height: 40px
  card-marketing:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg} {spacing.lg}"
  card-voice-orb:
    backgroundColor: transparent
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    shadow: rgba(255,255,255,0.6) 0px 0px 0px 1px inset
    padding: "{spacing.sm} {spacing.md}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.3xl} {spacing.lg}"
  feature-card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  product-tab-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "{spacing.3xl} {spacing.lg}"
  logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.lg} {spacing.lg}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.lg}"
  badge-pill:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 0px {spacing.sm}
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.md}
    height: 44px
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  play-button-circular:
    backgroundColor: "{colors.on-primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    height: 48px
    width: 48px
  ex-pricing-tier:
    description: Default pricing tier card. Pill-radius canvas-soft surface with hairline inset ring.
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: Featured tier — polarity-flipped to ink surface with white text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-auth-form-card:
    description: Sign-in / sign-up card. Canvas-soft pill-radius surface with form-input primitives inside.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-modal-card:
    description: Modal dialog surface — canvas background with elevated soft shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses ink primary as left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: Data table chrome. Header uses caption uppercase; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-toast:
    description: Toast notification — canvas surface with inset hairline ring and pill radius.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
    typography: "{typography.body-sm}"
  ex-empty-state-card:
    description: Empty-state frame. Canvas-soft pill surface with generous padding.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-cart-drawer:
    description: Subscription summary panel — canvas surface, pill-radius, hairline dividers.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
---
## Overview

ElevenLabs runs its marketing surface in a deliberately quiet register — nearly everything is near-white (`{colors.canvas}` to `{colors.canvas-soft}`), and the brand earns its visual identity not from a colour system but from a signature motif: large, heavily grainy, soft-edge gradient orbs in lavender, coral, blush, sage, and peach, arranged in a horizontal scroll across the hero like a voice sample carousel. That motif IS the decoration system. Outside the orbs, the palette is monochromatic.

Type is the decisive second voice. Headlines are set in Waldenburg — a proprietary light-weight (300) serif display face — at aggressive negative tracking (`-0.96 px` at 48 px hero). The pairing of an ultra-light serif with workhorse Inter for body and UI creates an editorial quietness that reads closer to a magazine or a luxury product site than a typical developer tool. Headlines are sentence-case; the serif weight never increases; there is no bold display moment.

Every interactive shape collapses to a 9999 px full pill. Nav links are pill-ghost. Buttons are pill. The product-tab switcher below the hero is a pill-group. Even the small voice-tag labels that float over the orbs in the hero are full-pill chips. The brand has committed completely to the rounded vocabulary — there are no rectangles in sight.

The surfaces cycle simply: `{colors.canvas}` white for the open page body, `{colors.canvas-soft}` warm off-white (`#f5f3f1`) for cards and inset regions, and `{colors.primary}` deep black for the polarity-flipped CTA buttons and featured pricing tiers. A warm hairline (`{colors.hairline}` — `#e8e4e0`) provides all borders and dividers. Elevation is handled almost entirely by the inset white-ring shadow (`rgba(255,255,255,0.6) 0px 0px 0px 1px inset`) rather than drop-shadows, which the brand avoids entirely on marketing surfaces.

**Key characteristics:**
- Signature gradient orbs (lavender · coral · sage · blush · peach) with visible film-grain texture are the entire decorative system — used at hero scale in a horizontal carousel row. Never miniaturised to an icon.
- A full-pill radius vocabulary (9999 px) applied universally — buttons, nav links, tab switchers, tag chips, and card labels all share the same shape language.
- A proprietary light-weight serif (Waldenburg, 300) for all display text, paired exclusively with Inter for body and UI. The weight never increases past 300 on the serif; the serif never appears below display size.
- Near-neutral warm-white canvas with the only accent coming from the orb gradients — the page has no coloured backgrounds, no coloured CTAs, no coloured borders outside the orbs.
- Monochromatic primary CTA: black pill with white text, always. Secondary CTA: warm off-white pill with black text.

## Colors

### Surface
- **Canvas** (`{colors.canvas}` — `#fdfcfc`): The default page body — a barely-warm true-white. Every open section, the nav bar, and the footer sit on this tone.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f5f3f1`): The card and inset region surface — a warm 96% off-white. Feature cards, secondary buttons, and the product-tab panel background use this tone.
- **Canvas Orb** (`{colors.canvas-orb}` — `#f0ede9`): The background of the hero orb carousel tray — a shade deeper than canvas-soft, providing the gentle separation between the product-tab section and the hero above it.

### Text
- **Ink** (`{colors.ink}` — `#000000`): Every headline, nav label, body paragraph, and button label on light surfaces. The brand operates almost entirely in pure black on warm white.
- **Body** (`{colors.body}` — `#3d3d3d`): Secondary body text and footer column paragraphs — a warm dark gray for reduced-emphasis content.
- **Mute** (`{colors.mute}` — `#767676`): Lowest-priority labels, footer secondary lines, placeholder text.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): All text on `{colors.primary}` surfaces (black CTA buttons, featured pricing cards).

### Brand
- **Primary / Ink** (`{colors.primary}` — `#000000`): The CTA colour. Black IS the brand's accent — Sign up button, featured-tier pricing card, polarity-flipped CTAs.
- **Button Secondary Bg** (`{colors.button-secondary-bg}` — `#f5f3f1`): The warm off-white used for secondary pill buttons like "Contact sales."

### Borders & Dividers
- **Hairline** (`{colors.hairline}` — `#e8e4e0`): A warm-toned 1 px divider used for table rows, input borders, and card borders.
- **Hairline Soft** (`{colors.hairline-soft}` — `rgba(255,255,255,0.6)`): The inset white-ring shadow on voice-tag chips and floating label pills — the brand's primary elevation cue.

### Gradient Orb Palette
The brand's signature gradient orbs draw from five recurring tones, always with heavy film-grain texture applied:
- **Orb Lavender** (`{colors.orb-lavender}` — `#9b8ec4`): The cool-purple orb — appears in the hero row and often represents the first voice sample.
- **Orb Coral** (`{colors.orb-coral}` — `#e8806a`): A warm terracotta-orange — the central hero orb, largest and most prominent, often carrying the play button.
- **Orb Blush** (`{colors.orb-blush}` — `#e8b4a8`): A soft dusty-pink — appears at the far ends of the carousel row as a cropped partial orb.
- **Orb Sage** (`{colors.orb-sage}` — `#8aab8c`): A muted green — appears as the fourth orb in the right half of the carousel.
- **Orb Peach** (`{colors.orb-peach}` — `#f0a882`): A warm peach-orange gradient stop — blends into the coral orb and appears as a distinct orb at wider viewports.
- **Orb Slate** (`{colors.orb-slate}` — `#8fa8b8`): A cool blue-gray seen in the sage-adjacent orb at the right of the carousel.

The orbs are always circular, always full-bleed to their container's `{rounded.full}` boundary, always grainy. They are never cropped to a rectangle, never reduced to a spot color, never used at icon scale.

### Semantic
- **Success** (`{colors.success}` — `#2d7a4f`): Status indicator for active/live voice states.
- **Error** (`{colors.error}` — `#c0392b`): Validation and destructive action states.
- **Warning** (`{colors.warning}` — `#b45309`): Caution indicators.

## Typography

### Font Families
Two faces carry the entire system:

1. **Waldenburg** — a proprietary light-weight serif used exclusively for display headlines. Weight 300 only — the brand never uses a heavier cut. Negative letter-spacing at display sizes (`-0.96 px` at 48 px hero). Sentence-case. The face produces an editorial, magazine-like warmth that the brand's product voice relies on entirely.

2. **Inter** — the workhorse sans-serif for all body copy, UI labels, nav links, button text, captions, and footer links. Weight 400 for body; the brand does not appear to use 500 or 600 cuts on marketing surfaces. Slight positive tracking (`+0.16 px`) at 16 px body size — a deliberate contrast to the display's negative tracking.

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 300 | 52px | -0.96px | Hero headline ("Bringing technology to life"). Waldenburg serif. |
| `{typography.display-lg}` | 36px | 300 | 42px | -0.72px | Section headlines and large callout text. Waldenburg serif. |
| `{typography.display-md}` | 28px | 300 | 34px | -0.56px | Feature section headings and pricing tier names. Waldenburg serif. |
| `{typography.display-sm}` | 20px | 300 | 26px | -0.2px | Card headline text and smaller editorial moments. Waldenburg serif. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Lead paragraph under hero headline. Inter. |
| `{typography.body-md}` | 16px | 400 | 24px | +0.16px | Default body paragraph. Inter. |
| `{typography.body-sm}` | 15px | 400 | 22px | 0 | Nav links, button labels, tab-pill labels, secondary body. Inter. |
| `{typography.body-xs}` | 13px | 400 | 20px | 0 | Small UI labels, voice-tag chip text, badge text. Inter. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Footer fine print, table header labels. Inter. |
| `{typography.button-md}` | 15px | 400 | 22px | 0 | Marketing-scale pill button labels ("Sign up", "Contact sales"). Inter. |
| `{typography.button-sm}` | 13px | 400 | 20px | 0 | Small nav CTA labels ("Log in", "Sign up" in nav). Inter. |
| `{typography.nav-label}` | 15px | 400 | 22px | 0 | Nav link labels ("ElevenCreative", "ElevenAgents", etc.). Inter. |

### Principles
- **The serif is display-only.** Waldenburg appears exclusively at `{typography.display-*}` sizes. It never appears in body text, button labels, nav links, or UI copy. Setting body text in Waldenburg breaks the brand.
- **Weight 300 is the serif ceiling.** The display face is always ultra-light. The brand never uses a medium or bold serif — the lightness is non-negotiable and produces the brand's distinctive editorial tone.
- **Negative tracking on display, positive on body.** The contrast between `-0.96 px` tracked headlines and `+0.16 px` tracked body text is deliberate and structural. Do not neutralise either.
- **Sentence-case headlines.** Display text follows sentence capitalisation — "Bringing technology to life", not "BRINGING TECHNOLOGY TO LIFE".
- **Inter at weight 400 only.** The brand does not appear to use Inter 500 or 600 on marketing surfaces. All UI text — including button labels — stays at 400.

### Note on Font Substitutes
- **Waldenburg** is proprietary. Closest open-source substitute: *Playfair Display* at weight 300 (light italic variant). *EB Garamond* at weight 300 is a second option. Neither captures the exact geometric-serif hybrid quality of Waldenburg.
- **Inter** is freely available on Google Fonts. No substitution needed.

## Layout

### Spacing System
- **Base unit**: 4 px. All measured values from the extraction are multiples of 4 (or close — the 6 px and 9 px values appear as gap/padding micro-steps).
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 28 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px · `{spacing.section}` 128 px.
- **Section padding**: hero and primary marketing bands use `{spacing.3xl}` (48 px) top/bottom at minimum; larger separation bands use `{spacing.4xl}` to `{spacing.5xl}`.
- **Card interior padding**: marketing cards use `{spacing.lg}` (24 px) uniformly. Voice-tag chips use `{spacing.xs} {spacing.md}` (6 px / 16 px).
- **Inline gap**: button row in hero uses `{spacing.sm}` (8 px) between "Sign up" and "Contact sales". Nav link row uses `{spacing.xs}` (6 px) between items.

### Grid & Container
- **Max width**: approximately 1200 px, centred with `{spacing.lg}` (24 px) gutters on desktop.
- **Column patterns**:
  - Hero: single-column headline stack left, lead body paragraph right — roughly 50/50 split at desktop.
  - Orb carousel: horizontal scroll row of 5+ circular orbs, each ~300 px diameter, with partial crops at edges.
  - Product-tab switcher: 3-up pill row (ElevenCreative / ElevenAgents / ElevenAPI), full-width content panel below.
  - Feature grid: assumed 3-up at desktop scaling to 1-up at mobile.
  - Nav: logo left, 6-link row centre, "Log in / Sign up" cluster right.

### Whitespace Philosophy
The gradient orbs do the decorative lifting; whitespace separates the conceptual zones. The page is generous with vertical rhythm — the hero has significant top padding before the headline appears, giving the warm canvas room to breathe before the serif makes contact. Inside sections, headline-to-body spacing is tight (`{spacing.sm}` 8 px), but section-to-section separation is wide (`{spacing.3xl}` to `{spacing.4xl}`). The brand reads as deliberate and unhurried — large inter-section gaps, tight intra-card stacks.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero orb tray and open page sections on canvas. |
| Level 1 — Inset Ring | `rgba(255,255,255,0.6) 0px 0px 0px 1px inset` | Voice-tag chip labels that float over orbs — the soft white ring provides the only visible surface separation. |
| Level 2 — Hairline Card | 1 px solid `{colors.hairline}` border. | Feature cards, pricing cards, and form inputs on canvas-soft. |
| Level 3 — Soft Drop | Subtle `rgba(0,0,0,0.06) 0px 2px 8px` | Elevated surface components (modals, dropdowns, nav drawer) — not visibly used on marketing surface. |

ElevenLabs avoids heavy drop-shadows entirely on marketing surfaces. The primary depth cue is surface tone — `{colors.canvas}` vs. `{colors.canvas-soft}` — and the occasional inset white-ring on floating chip elements. The orbs themselves create perceived depth through their radial gradient and grain texture.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed band backgrounds. |
| `{rounded.xs}` | 4px | Micro UI elements, inline code ticks. |
| `{rounded.sm}` | 8px | Small internal card chrome on densely-packed grid items. |
| `{rounded.md}` | 12px | Moderate card chrome where pill radius would be excessive. |
| `{rounded.lg}` | 16px | Larger content panels. |
| `{rounded.xl}` | 24px | Feature section inset regions. |
| `{rounded.button}` | 9999px | Every CTA button — "Sign up", "Contact sales", "Log in". Full pill, no exceptions. |
| `{rounded.card}` | 9999px | Product-tab container, voice-tag chips, and selected marketing card chrome. |
| `{rounded.pill}` | 9999px | Tab-pill switchers, nav-link ghost containers, badge pills. |
| `{rounded.full}` | 9999px | Orb containers, play-button circular, avatar containers. |

The brand's radius vocabulary is maximally simplified: everything interactive or labelling is a full pill. The only exceptions are structural layout containers that need a harder edge for full-bleed tiling.

## Components

### Navigation

**`nav-bar`** — the top navigation, lightly separated from page body.
- Background `{colors.nav-bg}`, text `{colors.ink}`, height ~56 px, padding `{spacing.sm} {spacing.lg}`. Layout: "IIElevenLabs" wordmark left, 6-link row centre, "Log in / Sign up" cluster right.

**`nav-link`** — the centred product-link row ("ElevenCreative", "ElevenAgents", "ElevenAPI", "Resources", "Enterprise", "Pricing").
- Text `{colors.ink}`, set in `{typography.nav-label}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.pill}` (ghost visible on hover).

**`nav-cta-login`** — the "Log in" nav button.
- Background `{colors.canvas}`, text `{colors.ink}`, shape `{rounded.button}` full pill, height ~36 px, label in `{typography.button-sm}`.

**`nav-cta-signup`** — the "Sign up" nav button (black pill).
- Background `{colors.primary}`, text `{colors.on-primary}`, shape `{rounded.button}` full pill, height ~36 px, label in `{typography.button-sm}`.

### Buttons

**`button-primary`** — the marketing-scale black pill CTA ("Sign up" in hero).
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}`, padding `0px {spacing.md}`, height ~44 px, shape `{rounded.button}`.

**`button-secondary`** — the warm off-white pill CTA paired with the primary ("Contact sales" in hero).
- Background `{colors.button-secondary-bg}`, text `{colors.ink}`, label in `{typography.button-md}`, padding `0px {spacing.md}`, height ~44 px, shape `{rounded.button}`.

**`play-button-circular`** — the white circular play control centred on the largest orb in the hero carousel.
- Background `{colors.on-primary}`, icon in `{colors.ink}`, shape `{rounded.full}`, ~48 px diameter.

### Orb & Hero

**`hero-band`** — the open hero section with headline, lead body, CTA row, and orb carousel below.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.3xl} {spacing.lg}`. Headline in `{typography.display-xl}` (Waldenburg 300, -0.96 px tracking). CTA row: `button-primary` + `button-secondary` with `{spacing.sm}` gap.

**`card-voice-orb`** — the circular gradient orb in the hero carousel. Each orb is a full circle with a radial gradient from the orb palette, heavy film-grain texture overlay, and a floating voice-tag chip.
- Background transparent (gradient applied as orb fill), shape `{rounded.full}`, shadow inset ring `{colors.hairline-soft}`. Voice-tag label inside uses `{typography.body-xs}` on a pill chip.

**`tab-pill`** — the product-switcher pill ("ElevenCreative", "ElevenAgents", "ElevenAPI") below the hero orb tray.
- Background `{colors.canvas}`, text `{colors.ink}`, label in `{typography.body-sm}`, padding `{spacing.xs} {spacing.lg}`, height ~40 px, shape `{rounded.pill}`.

**`tab-pill-active`** — the active state of the product-switcher pill.
- Background `{colors.primary}`, text `{colors.on-primary}`, same size and typography as `tab-pill`. "ElevenCreative" is active in the screenshot.

### Cards & Content

**`card-marketing`** — the standard marketing feature card used in product-section grids.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.lg}`, shape `{rounded.card}`, body in `{typography.body-md}`.

**`feature-card`** — slightly larger feature-highlight card for product capability callouts.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.lg}`, shape `{rounded.card}`.

**`badge-pill`** — small inline label chip for voice counts, language counts, or "New" markers.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, body in `{typography.caption}`, padding `0px {spacing.sm}`, shape `{rounded.pill}`.

### Forms & Inputs

**`form-input`** — the canonical text input used in sign-up and search flows.
- Background `{colors.canvas}`, text `{colors.ink}`, border 1 px solid `{colors.hairline}`, body in `{typography.body-md}`, padding `0px {spacing.md}`, height ~44 px, shape `{rounded.button}` full pill.

### Structure

**`product-tab-band`** — the full-width section housing the three-product tab switcher and its content panel.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.3xl} {spacing.lg}`. Contains `tab-pill` / `tab-pill-active` row and the associated content panel on `{colors.canvas-orb}`.

**`logo-strip`** — the customer / partner logo row.
- Background `{colors.canvas}`, text `{colors.mute}`, padding `{spacing.lg}`. Logos rendered at consistent height, monochrome.

**`footer`** — the bottom navigation grid.
- Background `{colors.canvas}`, text `{colors.body}`, padding `{spacing.3xl} {spacing.lg}`. Column labels in `{typography.body-sm}` (Inter); link rows in `{typography.body-sm}`. No monospace use — the brand does not use a technical mono face in this surface.

**`link-inline`** — body-copy inline links.
- Text `{colors.link}` (`#000000`), body in `{typography.body-md}`. The brand uses underline on hover rather than colour differentiation, consistent with its monochromatic palette.

## Do's and Don'ts

### Do
- Reserve the full pill (`{rounded.button}`) for every button, tab, chip, and nav element. The pill is the brand's universal shape language — do not introduce square or rounded-corner rectangles for interactive elements.
- Set every headline in `{typography.display-*}` using Waldenburg weight 300. Negative tracking at display sizes is part of the voice.
- Use the gradient orbs at hero scale only — large, circular, with grain texture, in the carousel layout. Never miniaturise to an icon or button fill.
- Pair `button-primary` (black pill) and `button-secondary` (warm off-white pill) as a matched set in hero and section CTA rows.
- Cycle surfaces between `{colors.canvas}` and `{colors.canvas-soft}` — the warm tone shift between the two IS the brand's depth cue on marketing surfaces.
- Use Inter weight 400 for all body, UI, button, and nav text. The brand's UI voice is consistent-weight throughout.
- Apply the inset white-ring shadow (`{colors.hairline-soft}`) on any floating chip or label that needs to lift off a gradient or orb surface.

### Don't
- Don't set display headlines in Inter. Waldenburg is the editorial voice — Inter in the headline position collapses the brand's entire personality.
- Don't increase Waldenburg's weight beyond 300. There is no medium or bold serif in this system.
- Don't introduce coloured backgrounds or coloured CTA buttons. The only accent is black — the palette is intentionally monochromatic outside the orbs.
- Don't use the orb gradients as a background fill for sections, cards, or buttons. The orbs are circular, full-pill, and appear only in the voice-carousel hero motif.
- Don't apply drop-shadows to marketing cards. The brand's elevation is inset-ring on floating chips and surface-tone differentiation on cards — never a drop-shadow.
- Don't use positive letter-spacing on display text or negative letter-spacing on body text. The tracking contrast between display and body is structural.
- Don't apply the pill radius to layout containers or section bands. The full pill is for interactive elements and labels only — structural containers should use none or a modest radius.
