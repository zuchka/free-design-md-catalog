---
version: alpha
name: Lamborghini
description: "Automobili Lamborghini operates at the absolute edge of automotive theatrics — a brand whose digital surface is as uncompromising as its machines. Pure black canvas, near-zero ornamentation, and a proprietary extended display face (LamboType) set in all-caps at weights and sizes that feel physically heavy. The one moment of colour is the brand's signature acid yellow-gold, reserved exclusively for the primary CTA — a flat, zero-radius rectangle that reads like a stripe of livery paint on a race car. Everything else is white ink on darkness, full-bleed photography, and editorial silence."

colors:
  primary: "#000000"
  on-primary: "#ffffff"
  ink: "#181818"
  body: "#202020"
  mute: "#666666"
  hairline: "#2a2a2a"
  canvas: "#000000"
  canvas-light: "#ffffff"
  canvas-soft: "#111111"
  cta-gold: "#ffc000"
  on-cta-gold: "#000000"
  link: "#ffffff"
  overlay-dark: "#000000"
  text-on-dark: "#ffffff"
  text-on-light: "#181818"
  error: "#cc0000"

typography:
  display-xl:
    fontFamily: "LamboType, Roboto, \"Helvetica Neue\", Arial"
    fontSize: 120px
    fontWeight: 400
    lineHeight: 110px
    letterSpacing: normal
  display-lg:
    fontFamily: "LamboType, Roboto, \"Helvetica Neue\", Arial"
    fontSize: 54px
    fontWeight: 400
    lineHeight: 64px
    letterSpacing: normal
  display-md:
    fontFamily: "LamboType, Roboto, \"Helvetica Neue\", Arial"
    fontSize: 27px
    fontWeight: 400
    lineHeight: 37px
    letterSpacing: normal
  display-sm:
    fontFamily: "LamboType, Roboto, \"Helvetica Neue\", Arial"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: normal
  body-lg:
    fontFamily: "LamboType, Roboto, \"Helvetica Neue\", Arial"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: "LamboType, Roboto, \"Helvetica Neue\", Arial"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: "LamboType, Roboto, \"Helvetica Neue\", Arial"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  caption:
    fontFamily: "LamboType, Roboto, \"Helvetica Neue\", Arial"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  label-uppercase:
    fontFamily: "LamboType, Roboto, \"Helvetica Neue\", Arial"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 2px
  button-md:
    fontFamily: "LamboType, Roboto, \"Helvetica Neue\", Arial"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  button-lg:
    fontFamily: "LamboType, Roboto, \"Helvetica Neue\", Arial"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px

rounded:
  none: 0px
  xs: 0px
  sm: 0px
  md: 0px
  lg: 0px
  pill: 0px
  full: 0px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 30px
  2xl: 40px
  3xl: 48px
  4xl: 64px
  5xl: 80px
  6xl: 120px
  section: 160px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.label-uppercase}"
    height: 80px
    padding: "{spacing.lg} {spacing.lg}"
  nav-menu-trigger:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.label-uppercase}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-icon-button:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.none}"
  button-primary:
    backgroundColor: "{colors.cta-gold}"
    textColor: "{colors.on-cta-gold}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    borderColor: "{colors.text-on-dark}"
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  hero-event-label:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.label-uppercase}"
    padding: "{spacing.xs} {spacing.sm}"
  card-model:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.display-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  card-news:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  card-event:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.display-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  section-band-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.lg}"
  section-band-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.text-on-light}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.lg}"
  discover-cta-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.label-uppercase}"
    padding: "{spacing.lg} {spacing.lg}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.lg}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  badge-label:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.label-uppercase}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-on-dark}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0px {spacing.lg}"
    height: 48px
  ex-pricing-tier:
    description: "Default model-tier card. Dark canvas surface with hairline border and zero-radius chrome."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.text-on-dark}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured model or edition — gold CTA accent strip at the base; dark fill."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-on-dark}"
    accentColor: "{colors.cta-gold}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "Model configuration / What's Included summary — used for trim and spec selectors."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: "Configurator summary — line items per specification add-on."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Side-nav or mega-menu row. Active state uses gold accent as left-edge indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.cta-gold}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: "Spec comparison table. Header in label-uppercase; body in body-sm on dark surface."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.label-uppercase}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.lg}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Dealer / account sign-in card. Dark canvas surface with form-input primitives inside."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog — dark canvas surface, zero-radius, hairline border."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state frame — generous padding on canvas-soft dark surface."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification — flat dark surface, zero-radius, body-sm text."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.lg}"
    typography: "{typography.body-sm}"

---

## Overview

Lamborghini's digital surface is not a website in any ordinary sense — it is a controlled cinematic environment built to make a carbon-bodied supercar feel inevitable. The base is absolute black (`{colors.canvas}` — `#000000`), not a softened near-black or a dark-mode system color. Everything that is not a photograph lives on that black ground: white type, white hairlines, and one electrifying exception.

That exception is acid gold. The brand's CTA colour (`{colors.cta-gold}` — `#ffc000`) is deployed with extreme restraint — appearing on primary action buttons only, rendered as a flat zero-radius rectangle that echoes the angular geometry of the cars. There is no gradient, no glow, no shadow. The gold simply sits on the black like a livery stripe and demands the eye. No other brand colour competes with it.

Typography is the brand's second most powerful tool. LamboType — a proprietary extended display face — dominates every headline at weights and sizes that physically fill the viewport. The hero headline runs at 120 px / weight 400 / line-height 110 px: tighter than its own size, which collapses the letters into a monolithic block. The face appears exclusively in all-capitals at display scale, making sentence-case a non-option; the brand's editorial register is typographic command, not invitation. Below the display tier, LamboType continues as body and UI text in a more restrained scale, but the uppercase register persists in labels and navigation.

Surfaces are handled with radical simplicity: either the absolute black canvas (for dark editorial sections and the hero) or pure white (`{colors.canvas-light}` — `#ffffff`) for the occasional inverted section. There is no intermediate surface tone in the marketing presentation — no canvas-soft, no off-white. The brand switches polarity at full contrast, not by degrees. Photography is always full-bleed, treated as the surface itself rather than an element placed on a surface.

## Colors

### Brand Core
- **Canvas / Primary** (`{colors.canvas}` — `#000000`): The universal page background. Not a dark-mode adaptation — black is the brand's default. Every hero, navigation bar, model card, and footer sits on absolute black.
- **CTA Gold** (`{colors.cta-gold}` — `#ffc000`): The single accent in the entire system. Used exclusively on primary action buttons ("DISCOVER MORE", "CONFIGURE"). A flat, zero-radius gold rectangle — the only non-black, non-white element in the UI chrome.
- **On CTA Gold** (`{colors.on-cta-gold}` — `#000000`): The text color on the gold CTA — black on gold, maximum contrast, no ambiguity.
- **Canvas Light** (`{colors.canvas-light}` — `#ffffff`): The inverted surface used for occasional light-band sections. Used as text color on dark surfaces.

### Text
- **Text on Dark** (`{colors.text-on-dark}` — `#ffffff`): All headlines, body copy, nav labels, and button labels on dark surfaces. Pure white, no off-white softening.
- **Ink** (`{colors.ink}` — `#181818`): The near-black used for text and heading color on light surfaces (per extracted h3 color).
- **Body** (`{colors.body}` — `#202020`): Default computed text color — the extracted body text value, used when content surfaces on very light backgrounds.
- **Mute** (`{colors.mute}` — `#666666`): Secondary / de-emphasised text — extracted from the `--secondary` custom property. Used for footer fine print, captions, and metadata.
- **Link** (`{colors.link}` — `#ffffff`): Inline links inherit white text on the dark canvas; no branded link blue exists in this system.

### Surface & Structure
- **Canvas Soft** (`{colors.canvas-soft}` — `#111111`): A marginally lighter dark surface used as the base for news cards and inset content modules — distinguishable from absolute black only at close proximity.
- **Hairline** (`{colors.hairline}` — `#2a2a2a`): Dividers, card borders, and form input borders on dark surfaces. Barely visible against black — the brand keeps structural lines extremely quiet.
- **Overlay Dark** (`{colors.overlay-dark}` — `#000000`): The full-bleed photograph overlay used to ensure headline legibility over hero imagery.

### Semantic
- **Error** (`{colors.error}` — `#cc0000`): Form validation errors. Not observed prominently in the marketing surface but documented for system completeness.

## Typography

### Font Family
One proprietary face carries the entire system: **LamboType** — an extended display sans designed specifically for the brand. It appears at every scale from 120 px hero headlines down to 12 px caption labels. The face is not publicly available; the brand stacks it against `Roboto` and `"Helvetica Neue"` as open-source fallbacks, but those fallbacks do not replicate the condensed, angular character of LamboType.

LamboType is used in all-capitals at display scale — this is the brand's typographic law, not a CSS transform applied casually. At body scale, mixed case appears in editorial body text. The face's weight throughout is consistently 400 — there is no bold, no 500, no 600 variation deployed in the captured surface. The brand's display power comes entirely from size and uppercase register, never from weight contrast.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display-xl}` | 120px | 400 | 110px | Hero headline at full viewport width. The 110px line-height collapses the lines into a monolithic slab. "SAVE THE DATE." |
| `{typography.display-lg}` | 54px | 400 | 64px | Section headlines — model names, event titles, editorial section heads. |
| `{typography.display-md}` | 27px | 400 | 37px | Sub-section labels, card headline within model-grid cards. |
| `{typography.display-sm}` | 20px | 400 | 28px | Smaller editorial labels and event date strings. |
| `{typography.body-lg}` | 18px | 400 | 28px | Lead body paragraph beneath section headlines. |
| `{typography.body-md}` | 16px | 400 | 24px | Default body. Also the CTA and button label size. |
| `{typography.body-sm}` | 14px | 400 | 20px | Secondary body, footer links, card meta. |
| `{typography.caption}` | 12px | 400 | 16px | Fine print, timestamps, small metadata. |
| `{typography.label-uppercase}` | 12px | 400 | 16px | Nav labels ("MENU"), section eyebrows, event date labels. All-caps enforced via text-transform; tracked at +2px for legibility at small size. |
| `{typography.button-md}` | 16px | 400 | 24px | Button labels at standard marketing scale. |
| `{typography.button-lg}` | 16px | 400 | 24px | Primary CTA label ("DISCOVER MORE"). Uppercase, tracked. |

### Principles
- **All-caps is the display voice.** Hero headlines, section names, navigation labels, and CTAs all appear in uppercase. Lowercase body text is reserved for editorial paragraph copy only. Reverting display type to mixed case breaks the brand.
- **Weight 400 is the only weight.** Unlike most digital brands that use 600–700 for impact, Lamborghini achieves typographic dominance through size and uppercase register alone. Never introduce a heavier weight.
- **Line-height tighter than font-size at hero scale.** The 120px / 110px pairing collapses display text into a dense architectural block. This intentional tightness is the brand's typographic signature — do not expand to standard 1.2× ratios.
- **Zero letter-spacing at display scale.** The brand uses `normal` tracking — not tight, not loose. The all-caps register at large size is sufficient; no additional letter-spacing is applied to make it feel "designed."

### Note on Font Substitutes
LamboType is proprietary and not publicly available. The closest open-source substitute for the extended display register is **Barlow Condensed** (weight 400–500) or **Bebas Neue** for all-caps display contexts. For the body and UI scale where LamboType runs in a more neutral register, **Roboto** (the first fallback in the extracted stack) is an adequate substitute.

## Layout

### Spacing System
- **Base unit**: 4 px. The extracted spacing scale is `4px / 8px / 12px / 16px / 24px / 30px`.
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 30px · `{spacing.2xl}` 40px · `{spacing.3xl}` 48px · `{spacing.4xl}` 64px · `{spacing.5xl}` 80px · `{spacing.6xl}` 120px · `{spacing.section}` 160px.
- **Button padding**: `{spacing.lg}` 24px on all sides — producing a large, square-feeling button with zero radius. The 24px padding is the extracted CTA measurement.
- **Section padding**: dark editorial bands use `{spacing.5xl}` 80px top/bottom, allowing full-bleed photography to dominate. The hero band extends to `{spacing.4xl}` top/bottom with the image occupying the full viewport height beneath the nav.
- **Gap between elements**: 24px is the dominant cross-page gap (extracted as highest-frequency padding value at 221 occurrences); 8px is the secondary gap for tight stacks.

### Grid & Container
- **Layout approach**: full-bleed photographic surfaces with content anchored to the lower-left or lower-right of the viewport — the brand uses the photograph as the container, not as an element inside a container.
- **Nav**: logo centred, hamburger menu trigger left, icon cluster right. Full-width at all breakpoints.
- **Model grid**: typically presented as full-bleed single-model hero panels stacked vertically, or as a 2–3 column grid at desktop for secondary model listings.
- **Text positioning**: hero copy sits at the bottom-left of the full-bleed image with the CTA button at the bottom-right — a split layout that creates a horizontal tension across the image.

### Whitespace Philosophy
The brand's whitespace strategy is unusual: it is not whitespace in the traditional sense but **darkness**. The black canvas between photographic panels acts as breathing room. Sections are separated by the transition between absolute black and the next full-bleed image, not by padding tokens. When padding does appear it is generous — 24px minimum, 80px for section transitions — because the brand never crowds content. The only density is in the typography itself, where the tight line-height creates a compression that the surrounding space counterbalances.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border, no radius. | Every element in the system. The brand uses zero elevation effects. |
| Level 1 — Hairline Border | `1px solid {colors.hairline}` (`#2a2a2a`) | Card borders and form input outlines on dark surfaces — barely visible, purely structural. |

The brand operates at a single elevation level. There are no drop shadows, no layered glow effects, no elevated cards floating above the page. Everything is flat against the black canvas. The photography provides all the visual depth the brand needs; UI chrome stays strictly two-dimensional.

### Decorative Depth
- **Full-bleed photography as depth**: the hero image occupies the entire viewport — the car emerging from near-total darkness creates a sense of enormous depth with no CSS trickery. The image IS the elevation system.
- **Polarity flip as section separator**: switching from absolute black to pure white (or white back to black) between content bands is the brand's only structural depth cue.
- **Gold CTA as focal point**: the flat `{colors.cta-gold}` rectangle on a black field creates the sharpest possible contrast focal point — the equivalent of a spotlight without any shadow or glow.

## Shapes

### Border Radius Scale
Every token in the rounded scale is `0px`. The brand uses no border radius anywhere in its UI chrome — not on buttons, not on cards, not on inputs, not on image crops. Angular geometry is a direct extension of the car design language. Introducing any radius — even 2px — would be a brand violation.

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | All buttons, cards, inputs, badges, image crops. The universal value. |

### Photography Geometry
- **Hero images**: full-bleed, no crop radius, no border, edge-to-edge. The photograph bleeds to every edge of the viewport.
- **Model card images**: sharp-cropped to rectangular frames with zero radius, occupying the full card surface.
- **Logo (Lamborghini bull)**: white SVG mark, centred in the nav bar, rendered at small icon scale (~40px height).

## Components

### Navigation

**`nav-bar`** — the full-width navigation bar sitting over the hero image.
- Background `{colors.canvas}` (opaque or semi-transparent over imagery), text `{colors.text-on-dark}`, height 80px, padding `{spacing.lg}`. Layout: hamburger + "MENU" label left, Lamborghini bull logo centred, icon cluster (compare, search) right. All labels in `{typography.label-uppercase}`.

**`nav-menu-trigger`** — the "☰ MENU" trigger on the left of the nav.
- Uppercase label in `{typography.label-uppercase}`, white text, padding `{spacing.xs} {spacing.sm}`, zero radius.

**`nav-icon-button`** — the icon-only buttons (compare, search) on the right of the nav.
- White icons on black, zero radius, no explicit border.

### Buttons

**`button-primary`** — the flat gold CTA rectangle ("DISCOVER MORE").
- Background `{colors.cta-gold}`, text `{colors.on-cta-gold}`, label in `{typography.button-lg}` uppercase, padding `{spacing.lg}` (24px) on all sides, shape `{rounded.none}` 0px. The arrow icon sits inline to the right of the label. This is the brand's only coloured element.

**`button-secondary`** — the white-bordered ghost button used as the secondary action.
- Background `{colors.canvas}` (transparent), text `{colors.text-on-dark}`, 1px solid white border, padding `{spacing.lg}`, shape `{rounded.none}` 0px.

**`button-ghost`** — an unbordered text-only action link styled as a button.
- Background transparent, text `{colors.text-on-dark}`, padding `{spacing.lg}`, zero radius.

### Hero & Sections

**`hero-band`** — the full-bleed photographic hero with copy anchored to the bottom.
- Background `{colors.canvas}` behind and over the image, text `{colors.text-on-dark}`, headline in `{typography.display-xl}` (120px / 400 / 110px line-height), CTA in `{typography.label-uppercase}`, padding `{spacing.4xl} {spacing.lg}`. Date label sits above the headline in `{typography.label-uppercase}`; the primary CTA (`button-primary`) sits bottom-right.

**`hero-event-label`** — the small date / time label above the hero headline ("1ST JULY — 12:00 PM CEST").
- Text `{colors.text-on-dark}`, typography `{typography.label-uppercase}`, all-caps, padding `{spacing.xs} {spacing.sm}`.

**`section-band-dark`** — a full-width dark editorial section.
- Background `{colors.canvas}`, text `{colors.text-on-dark}`, section headline in `{typography.display-lg}`, padding `{spacing.5xl} {spacing.lg}`.

**`section-band-light`** — the inverted full-width section on pure white.
- Background `{colors.canvas-light}`, text `{colors.text-on-light}`, section headline in `{typography.display-lg}`, padding `{spacing.5xl} {spacing.lg}`.

**`discover-cta-strip`** — a full-width strip housing a single discover / explore CTA.
- Background `{colors.canvas}`, text `{colors.text-on-dark}`, label in `{typography.label-uppercase}`, padding `{spacing.lg}`.

### Cards

**`card-model`** — the car model card used in model listing grids.
- Background `{colors.canvas}`, text `{colors.text-on-dark}`, model name in `{typography.display-md}`, padding `{spacing.lg}`, zero radius. The photograph occupies the majority of the card surface.

**`card-news`** — the editorial news / article card.
- Background `{colors.canvas-soft}`, text `{colors.text-on-dark}`, headline in `{typography.display-md}`, body in `{typography.body-md}`, padding `{spacing.lg}`, zero radius.

**`card-event`** — the event or reveal card.
- Background `{colors.canvas}`, text `{colors.text-on-dark}`, event name in `{typography.display-md}`, date in `{typography.label-uppercase}`, padding `{spacing.lg}`, zero radius.

### Form & Input

**`form-input`** — the text input for search or dealer forms.
- Background `{colors.canvas}`, text `{colors.text-on-dark}`, 1px solid `{colors.hairline}` border, typography `{typography.body-md}`, height 48px, padding `0px {spacing.lg}`, zero radius.

### Typography & Labels

**`badge-label`** — small uppercase metadata label ("NEW", "HYBRID", "SOLD OUT").
- Background `{colors.canvas}`, text `{colors.text-on-dark}`, typography `{typography.label-uppercase}`, zero radius, padding `{spacing.xs} {spacing.sm}`.

**`link-inline`** — inline body-copy link.
- Text `{colors.link}` (white), typography `{typography.body-md}`.

### Footer

**`footer`** — the bottom navigation and legal band.
- Background `{colors.ink}`, text `{colors.mute}`, typography `{typography.body-sm}`, padding `{spacing.4xl} {spacing.lg}`. Column labels in `{typography.label-uppercase}`.

## Do's and Don'ts

### Do
- Use `{colors.cta-gold}` (`#ffc000`) exclusively for the primary action button. It is the brand's one colour — deploying it anywhere else destroys its power.
- Keep every button, card, input, and image crop at `{rounded.none}` 0px. Angular geometry is non-negotiable and extends the car design language into the digital surface.
- Set display headlines in `{typography.display-xl}` at all-caps, weight 400, with the line-height tighter than the font-size. The 120px / 110px collapse is the brand's typographic signature.
- Use `{colors.canvas}` absolute black as the default page surface. Black is not dark mode — it is the brand's default.
- Let full-bleed photography carry all decorative and atmospheric work. The camera is the decoration system, not gradients or illustrations.
- Keep button padding at `{spacing.lg}` 24px — the flat, wide gold rectangle is what makes the CTA readable against a dark photograph.
- Write navigation labels and section eyebrows in `{typography.label-uppercase}` — uppercase, tracked, small. This is the brand's UI voice.

### Don't
- Don't introduce any border radius. Not 2px, not 4px — zero is the law. A rounded button on a Lamborghini surface reads as a different brand entirely.
- Don't add drop shadows, glows, or elevation effects. The system is flat. Photography provides all depth.
- Don't use the gold accent (`{colors.cta-gold}`) for decorative elements, icons, or secondary buttons. One use, one purpose.
- Don't introduce additional accent colours — no blue, no green, no red beyond the semantic error state. The palette is black, white, and one gold.
- Don't set display headlines in mixed case. All-caps at display scale is the brand's absolute typographic rule.
- Don't apply weight 700 or 600 to LamboType. The face appears at weight 400 throughout — size and uppercase register create hierarchy, not weight contrast.
- Don't miniaturise photography or crop it to small aspect ratios. The brand's image system is full-bleed and cinematic — thumbnail-scale imagery undermines the brand's premium positioning.
- Don't use soft or intermediate surface tones between black and white. The brand operates at full polarity contrast — there is no greige, no off-black, no warm-dark.
