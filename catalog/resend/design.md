---
version: alpha
name: Resend
description: "A developer-email platform that makes its design philosophy from a single axiom: black is the only background that matters. The entire surface is pure #000000, broken only by a near-white off-white text tone and one surgical blue accent for the primary CTA. The headline voice is set in a high-contrast serif — Domaine — at weights that feel more editorial magazine than SaaS dashboard, with zero applied weight (400 throughout), leaning entirely on size and tight negative tracking to establish hierarchy. Body copy and every UI element live in Inter. The decorative system is a single 3-D rendered geometric object — a dark faceted cube — sitting in the hero's shadow, rendered in the same near-black palette so it reads as depth, not illustration. There are no gradients, no pattern fills, no brand colours beyond the one blue."
colors:
  primary: "#00a3ff"
  on-primary: "#ffffff"
  ink: "#f0f0f0"
  body: "#a1a4a5"
  mute: "#52595b"
  hairline: "#b0c7d925"
  hairline-card: rgba(214, 235, 253, 0.19)
  canvas: "#000000"
  canvas-raised: "#191b1e"
  link: "#00a3ff"
  success: "#11ff992d"
  error: "#ff204756"
  warning: "#ffc53d"
  orange-accent: "#ff801f"
  blue-soft: "#0081fd6b"
  blue-mid: "#3b9eff"
  text-on-accent: "#000000"
  white: "#ffffff"
typography:
  display-xl:
    fontFamily: domaine, ui-sans-serif, system-ui, sans-serif
    fontSize: 96px
    fontWeight: 400
    lineHeight: 96px
    letterSpacing: -0.96px
  display-lg:
    fontFamily: domaine, ui-sans-serif, system-ui, sans-serif
    fontSize: 56px
    fontWeight: 400
    lineHeight: 67.2px
    letterSpacing: -2.8px
  display-md:
    fontFamily: domaine, ui-sans-serif, system-ui, sans-serif
    fontSize: 36px
    fontWeight: 400
    lineHeight: 43px
    letterSpacing: -1.4px
  display-sm:
    fontFamily: domaine, ui-sans-serif, system-ui, sans-serif
    fontSize: 24px
    fontWeight: 400
    lineHeight: 30px
    letterSpacing: -0.6px
  body-lg:
    fontFamily: inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 27px
  body-md:
    fontFamily: inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
  body-sm-strong:
    fontFamily: inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 21px
  caption:
    fontFamily: inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
  caption-strong:
    fontFamily: inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 600
    lineHeight: 18px
  button-md:
    fontFamily: inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  button-lg:
    fontFamily: inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  button: 4px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 32px
  4xl: 48px
  5xl: 96px
  section: 128px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 60px
    padding: "{spacing.lg} {spacing.2xl}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xxs} {spacing.sm}"
    rounded: "{rounded.pill}"
  nav-cta-get-started:
    backgroundColor: "{colors.white}"
    textColor: "{colors.canvas}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
  nav-login:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.sm}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    padding: 5px {spacing.md}
  banner-announcement:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.lg}"
    borderColor: "{colors.hairline-card}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.5xl} {spacing.2xl}"
  card:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-card}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxs} {spacing.sm} {spacing.xs}"
  feature-card:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-card}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  section-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.4xl} {spacing.2xl}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  badge:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.sm}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.2xl}"
  form-input:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-card}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    height: 40px
  code-block:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  nav-dropdown:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-card}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  ex-pricing-tier:
    description: Default pricing tier card on near-black raised surface with faint blue-tinted border.
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-card}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-pricing-tier-featured:
    description: Featured pricing tier — polarity-flipped to primary blue fill with black text on top.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-on-accent}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-product-selector:
    description: Feature comparison row — canvas-raised surface with hairline dividers between rows.
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary — line items per tier/add-on on raised surface.
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline-card}"
  ex-app-shell-row:
    description: Sidebar nav row. Active row uses primary blue as the left-edge indicator bar.
    backgroundColor: "{colors.canvas-raised}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: Table chrome — header uses caption-strong; body uses body-sm. Row borders use hairline-card.
    headerBackground: "{colors.canvas-raised}"
    headerTypography: "{typography.caption-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline-card}"
  ex-auth-form-card:
    description: Sign-in card. Canvas-raised surface with form-input primitives inside, md radius.
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-modal-card:
    description: Modal dialog — same surface as feature-card with slightly elevated shadow treatment.
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-empty-state-card:
    description: Empty-state frame — generous padding on canvas-raised surface.
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.md}"
    padding: "{spacing.4xl}"
    captionTypography: "{typography.body-sm}"
  ex-toast:
    description: Toast notification — canvas-raised surface, md radius, body-sm label.
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
    typography: "{typography.body-sm}"
---
## Overview

Resend is a developer-email platform, and its marketing surface encodes that positioning into every visual decision. The page runs on a hard #000000 — not dark-gray, not near-black: pure photographic black — as the single canvas color. Against it, a near-white `{colors.ink}` carries all copy, and one `{colors.primary}` blue fires only on the primary CTA and inline links. That three-color constraint is the entire palette; anything softer or more decorative would betray the stripped-down voice the brand is arguing for.

The headline typographic choice is the most distinctive call on the page. Domaine — a high-contrast editorial serif with elegant stroke variation — sets every display heading at weight 400. No bold, no black weight, just the face doing its own work at 96 px with -0.96 px tracking. The effect reads closer to a design magazine masthead than a SaaS product page, which is precisely the tension the brand is leaning into: email infrastructure delivered with editorial confidence. Inter carries everything else: nav, body, buttons, captions.

The only decorative element in the hero is a photo-realistic 3-D rendered cube rendered in the same charcoal-to-black palette as the page background — no color, no glow, no gradient — sitting in soft shadow so it reads as dimensional depth without ever becoming an illustration. The brand's decoration system is sculptural and monochromatic. There are no mesh gradients, no color bands, no pattern fills. The blue accent exists only as a tool, never as atmosphere.

Surface hierarchy is a two-step ladder: `{colors.canvas}` pure black for the page body and full-bleed bands, and `{colors.canvas-raised}` `#191b1e` as the slightly-lifted card and UI-chrome surface. Cards sit on the page defined by a translucent blue-tinted hairline border rather than elevation or shadow. The brand does not use drop shadows.

## Colors

### Brand Accent
- **Primary Blue** (`{colors.primary}` — `#00a3ff`): The single conversion color. Used exclusively on the "Get started" primary CTA button fill and inline hyperlinks. Never applied as a background wash or decorative element.
- **Blue Mid** (`{colors.blue-mid}` — `#3b9eff`): The slightly lighter blue registered in the system token set — used for hover states and interactive highlights derived from the primary.
- **Blue Soft** (`{colors.blue-soft}` — `#0081fd6b`): A semi-transparent blue used as subtle focus rings and selection highlights on interactive surfaces.

### Surface
- **Canvas** (`{colors.canvas}` — `#000000`): The page's only background — pure photographic black. Every full-bleed band, the nav, the footer, the hero. The brand does not use dark grays as the base; it uses true black.
- **Canvas Raised** (`{colors.canvas-raised}` — `#191b1e`): The card and UI-chrome surface. A barely-distinguishable dark charcoal that lifts feature cards, dropdown menus, and code blocks off the pure-black base.
- **White** (`{colors.white}` — `#ffffff`): Applied only to the nav "Get started" pill CTA (white fill with black text) and as `on-primary` overlay text.

### Borders
- **Hairline Card** (`{colors.hairline-card}` — `rgba(214, 235, 253, 0.19)`): The universal card border — a translucent blue-tinted white at 19% opacity. All feature cards and announcement banners use this as their only definition edge.
- **Hairline** (`{colors.hairline}` — `#b0c7d925`): The system's gray-a3 token — a low-opacity blue-gray used for fine dividers and table row rules.

### Text
- **Ink** (`{colors.ink}` — `#f0f0f0`): Every headline, body paragraph, and button label on black surfaces. A warm near-white pulled from the brand's `--color-gray-12` token.
- **Body** (`{colors.body}` — `#a1a4a5`): Secondary text — nav link labels, footer column body, supporting copy. The `--color-gray-11` token.
- **Mute** (`{colors.mute}` — `#52595b`): Lowest-priority text — placeholders, fine print, disabled labels. The `--text-placeholder` token.
- **Text On Accent** (`{colors.text-on-accent}` — `#000000`): Black text rendered on `{colors.primary}` fill surfaces (the featured pricing tier inversion, if present).

### Semantic
- **Success** (`{colors.success}` — `#11ff992d`): A semi-transparent green registered in the token set for status indicators and success states.
- **Error** (`{colors.error}` — `#ff204756`): A semi-transparent red for validation error states.
- **Warning** (`{colors.warning}` — `#ffc53d`): Amber for caution / pending states. The `--color-yellow-9` token.
- **Orange Accent** (`{colors.orange-accent}` — `#ff801f`): A warm orange registered in the token set — used for highlights and notification badges.

## Typography

### Font Families
Two faces define the entire system:

1. **Domaine** — a proprietary high-contrast editorial serif. Used for every display heading (h1 through h4 equivalents) at weight 400 only. The face never appears bold; it earns its authority through letterform contrast and size alone. Tight negative tracking at display sizes (`-0.96 px` at 96 px hero, `-2.8 px` at 56 px section heads) is structural — not optional.
2. **Inter** — the variable geometric sans carrying all body copy, UI labels, buttons, nav links, captions. Weight 400 for body, weight 600 for button labels and strong labels.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 96px | 400 | 96px | -0.96px | Hero headline — "Email for developers." The face alone at this scale is the brand statement. |
| `{typography.display-lg}` | 56px | 400 | 67.2px | -2.8px | Section headlines — product feature bands. Heavier tracking reduction than the hero. |
| `{typography.display-md}` | 36px | 400 | 43px | -1.4px | Sub-section headlines and cluster group headings. |
| `{typography.display-sm}` | 24px | 400 | 30px | -0.6px | Card-level display headings and inline section labels. |
| `{typography.body-lg}` | 18px | 400 | 27px | 0 | Hero lead paragraph — the one or two sentences under the headline. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body copy throughout feature sections. |
| `{typography.body-sm}` | 14px | 400 | 21px | 0 | Nav links, secondary labels, footer body, button secondary label. |
| `{typography.body-sm-strong}` | 14px | 600 | 21px | 0 | Emphasized inline labels and list headers. |
| `{typography.caption}` | 12px | 400 | 18px | 0 | Badge labels, code captions, footer fine print. |
| `{typography.caption-strong}` | 12px | 600 | 18px | 0 | Table header labels and mono-style eyebrows. |
| `{typography.button-md}` | 14px | 600 | 20px | 0 | Primary CTA button label — "Get started". |
| `{typography.button-lg}` | 16px | 600 | 24px | 0 | Larger marketing-context button labels. |

### Principles
- **Serif at neutral weight.** Domaine is always 400. Reaching for bold weight would collapse the editorial voice into generic SaaS. The contrast lives in the letterform, not the weight.
- **Aggressive negative tracking at display sizes.** `-2.8 px` at 56 px section heads is one of the largest tracking reductions observable on the page. This is load-bearing — reverting to default tracking softens the brand significantly.
- **Inter for everything functional.** UI, buttons, body, captions — all Inter. The serif is purely a display instrument.
- **No all-caps.** The brand uses sentence-case throughout. Uppercase labels would introduce a formality that contradicts the developer-direct tone.
- **Size as the only weight lever.** Because Domaine runs at 400 throughout, size alone establishes hierarchy. The jump from 56 px to 96 px is the brand's only bold move.

### Note on Font Substitutes
- **Domaine** is a proprietary face (Domaine Display by Klim Type Foundry). Open-source substitute: *Playfair Display* (400) is the closest free match for stroke contrast and editorial feeling. *Libre Baskerville* at 400 is a second option.
- **Inter** is open-source and available via Google Fonts. No substitute needed.

## Layout

### Spacing System
- **Base unit**: 4 px. Every captured spacing value is a multiple of 4 px (or 6 px as a minor half-step).
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 20 px · `{spacing.2xl}` 24 px · `{spacing.3xl}` 32 px · `{spacing.4xl}` 48 px · `{spacing.5xl}` 96 px · `{spacing.section}` 128 px.
- **Section padding**: full-bleed bands use `{spacing.4xl}` to `{spacing.5xl}` top/bottom; the hero uses `{spacing.5xl}` to give the 3-D cube room to breathe.
- **Card interior padding**: feature cards sit at `{spacing.2xl}` 24 px; compact info cards stay tighter at `{spacing.sm}` to `{spacing.md}`.
- **Button padding**: primary CTA uses `{spacing.md}` 12 px × `{spacing.xl}` 20 px (the measured 12px / 20px from extraction). Ghost nav button uses 5 px × `{spacing.md}` 12 px.

### Grid & Container
- **Max content width**: approximately 1200 px centred; horizontal gutters of `{spacing.2xl}` 24 px on desktop, `{spacing.lg}` 16 px on mobile.
- **Column patterns**:
  - Hero: single-column copy left, 3-D illustration filling the right half at desktop; stacks at mobile.
  - Feature grid: 3-up or 2-up card clusters.
  - Nav: logo left, link row centred, auth CTAs right.
  - Footer: 4-column link grid at desktop, stacking to 1-up at mobile.

### Whitespace Philosophy
The pure-black canvas does the work that color or pattern would do elsewhere. Section bands are separated by generous `{spacing.4xl}` to `{spacing.5xl}` vertical gaps; the absence of color transitions means whitespace (or rather black-space) is the sole sectioning device. Inside cards, content is tight — `{spacing.sm}` to `{spacing.md}` between elements — because the card's raised surface already signals the container boundary.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat Black | No border, no shadow. Pure `{colors.canvas}` surface. | Full-bleed hero, section bands, nav, footer. |
| Level 1 — Hairline Card | `1px solid rgba(214, 235, 253, 0.19)` border on `{colors.canvas-raised}`. | The universal card chrome — feature cards, dropdown menus, announcement banners. |
| Level 2 — Raised Surface | `{colors.canvas-raised}` fill (#191b1e) with no additional shadow. | Code blocks, form inputs, badges — elements that need to read as "inside a surface." |

The brand does not use drop shadows. Depth is communicated entirely through surface color steps (black → dark-charcoal) and the translucent blue hairline border. This is a deliberately flat elevation system — the 3-D cube in the hero is the only volumetric depth on the page, and it is photography, not CSS.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero and footer bands. |
| `{rounded.xs}` | 4px | Primary CTA button — "Get started" (the measured extracted radius). Every CTA/button component. |
| `{rounded.sm}` | 6px | Tight secondary interactive elements. |
| `{rounded.md}` | 8px | Cards, feature-cards, form inputs, code blocks, dropdown menus. |
| `{rounded.lg}` | 12px | Larger container chrome when a card hosts media. |
| `{rounded.xl}` | 16px | Largest card chrome (the `--radius-4xl` token resolves to 2rem / 32px; mapped here at xl). |
| `{rounded.button}` | 4px | Alias lock for every CTA/button. Preserved exactly from deterministic extraction. |
| `{rounded.pill}` | 9999px | Ghost secondary buttons ("Documentation"), nav links, announcement banner, nav "Get started" pill. |
| `{rounded.full}` | 9999px | Badge pills, avatar containers, icon button circles. |

Note: the extractor's `3.35544e+07px` for button and pill is the browser's computed equivalent of CSS `border-radius: 9999px` (a very large value clamped to the element's geometry). The "Get started" pill in the nav uses this geometry. The "Get started" primary CTA in the hero body uses the measured `4px` flat-cornered shape. Both coexist: the nav pill and the hero solid-corner button are deliberately different shapes.

## Components

### Navigation

**`nav-bar`** — the full-width fixed top bar.
- Background `{colors.canvas}`, text `{colors.ink}`, height 60 px, padding `{spacing.lg} {spacing.2xl}`. Layout: Resend wordmark left, dropdown link row centre, "Log in" text + "Get started" white pill right.

**`nav-link`** — centred dropdown-triggered nav links (Features, Company, Resources, Help, Docs, AI, Pricing).
- Text `{colors.body}`, set in `{typography.body-sm}`, padding `{spacing.xxs} {spacing.sm}`, shape `{rounded.pill}` (ghost hover state).

**`nav-cta-get-started`** — the white pill CTA in the nav right cluster.
- Background `{colors.white}`, text `{colors.canvas}` (black on white), label in `{typography.button-md}`, shape `{rounded.pill}`, padding `{spacing.xs} {spacing.lg}`. This is the pill shape variant; distinct from the hero CTA's 4 px square corner.

**`nav-login`** — the "Log in" text link in the nav right cluster.
- Background transparent, text `{colors.ink}`, label in `{typography.body-sm}`, no visible border.

**`nav-dropdown`** — the popover menu revealed on nav-link hover.
- Background `{colors.canvas-raised}`, text `{colors.ink}`, border `1px solid {colors.hairline-card}`, padding `{spacing.sm}`, shape `{rounded.md}`.

### Buttons

**`button-primary`** — the hero "Get started" CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}` (14 px / 600), shape `{rounded.button}` 4 px, padding `{spacing.md} {spacing.xl}` (the measured 12 px / 20 px). Square-cornered — not a pill.

**`button-secondary`** — the ghost "Documentation" CTA alongside the primary in the hero.
- Background transparent, text `{colors.ink}`, label in `{typography.body-sm}` (14 px / 400), shape `{rounded.pill}`, padding `5px {spacing.md}`. No border visible; text-only ghost treatment.

### Hero & Bands

**`hero-band`** — the full-bleed black hero with the 3-D cube decoration.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.2xl}`. Inside: announcement banner → display-xl serif headline → body-lg lead → button row (primary + secondary). The cube occupies the right half of the band at desktop.

**`banner-announcement`** — the "Announcing Resend Forward ›" pill at the top of the hero.
- Background `{colors.canvas-raised}`, text `{colors.ink}`, border `1px solid {colors.hairline-card}`, label in `{typography.body-sm}`, shape `{rounded.pill}`, padding `{spacing.xs} {spacing.lg}`.

**`section-band`** — generic content section with display-lg heading.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.2xl}`.

### Cards

**`card`** — the compact information card.
- Background transparent, text `{colors.ink}`, border `1px solid {colors.hairline-card}`, shape `{rounded.md}` 8 px, padding `{spacing.xxs} {spacing.sm} {spacing.xs}`.

**`feature-card`** — the larger feature-band card with more internal breathing room.
- Background `{colors.canvas-raised}`, text `{colors.ink}`, border `1px solid {colors.hairline-card}`, shape `{rounded.md}` 8 px, padding `{spacing.2xl}`.

**`code-block`** — code snippet or terminal mockup surface.
- Background `{colors.canvas-raised}`, text `{colors.ink}`, label in `{typography.caption}`, shape `{rounded.md}`, padding `{spacing.lg}`.

### Forms & Inputs

**`form-input`** — text input field.
- Background `{colors.canvas-raised}`, text `{colors.ink}`, border `1px solid {colors.hairline-card}`, label in `{typography.body-sm}`, shape `{rounded.md}`, padding `{spacing.sm} {spacing.md}`, height 40 px.

### Metadata & Labels

**`badge`** — the small inline label pill.
- Background `{colors.canvas-raised}`, text `{colors.body}`, label in `{typography.caption}`, shape `{rounded.pill}`, padding `{spacing.xxs} {spacing.sm}`.

**`link-inline`** — in-body hyperlinks.
- Text `{colors.link}` (`#00a3ff`), label in `{typography.body-md}`, no underline by default (matching extracted `text-decoration: none`).

### Footer

**`footer`** — the bottom multi-column nav.
- Background `{colors.canvas}`, text `{colors.body}`, padding `{spacing.4xl} {spacing.2xl}`. Column headers in `{typography.body-sm-strong}`; link rows in `{typography.body-sm}`.

## Do's and Don'ts

### Do
- Keep the canvas `{colors.canvas}` pure `#000000`. Never substitute a near-black gray — the brand's photographic-black commitment is structural.
- Use `{rounded.button}` 4 px for every CTA and primary action. Square-cornered buttons on a black field are the brand's product-CTA signature.
- Use `{rounded.pill}` for nav chrome, ghost secondary buttons, and announcement banners. The two radius scales (4 px product, pill nav) coexist intentionally.
- Set every display heading in Domaine at weight 400 with the appropriate negative tracking. The negative tracking is non-negotiable — it is the voice.
- Confine `{colors.primary}` blue to primary CTAs and inline links. It is a tool, not an atmosphere.
- Define card edges with the translucent blue-tinted hairline border (`rgba(214, 235, 253, 0.19)`). Cards have no shadow — the border is their only frame.
- Let the serif do the work at display sizes. Resisting the urge to bold Domaine is what keeps the page feeling editorial rather than corporate.

### Don't
- Don't introduce a second accent color. The brand operates with black + near-white + one blue. A second accent would immediately dilute the stark authority.
- Don't bold Domaine. Weight 400 is the design decision. Heavier weights exist in the typeface but are not part of the brand system.
- Don't soften the canvas to dark gray. `#191b1e` exists only as a lifted surface inside `{colors.canvas-raised}` — the page background is never that tone.
- Don't add drop shadows to cards. The elevation system is surface-color + hairline border only.
- Don't miniaturise or crop the 3-D cube decoration — it is a full-bleed hero illustration, not a repeatable motif.
- Don't apply letter-spacing loosely (positively). Every display token tracks negatively. Positive tracking on the serif face contradicts the brand voice entirely.
- Don't use the 4 px button radius on nav pills or announcement banners. The pill shape is nav-only; the square-corner is CTA-only.
