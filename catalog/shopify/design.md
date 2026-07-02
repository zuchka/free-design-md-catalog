---
version: alpha
name: Shopify
description: "Shopify is a commerce-platform brand whose surface is an immersive full-bleed video hero on near-black canvas, interrupted by a stark white pill CTA that does all the conversion work. The decorative system is almost nothing: real photography, real merchants, real motion — the brand earns its claim to 'the world's best commerce platform' by getting out of the way. Type is set in a single workhorse grotesque (Neue Haas Grotesk) at weight 400 across every scale — display, body, button — with the display headline pushing to 96 px and a letter-spacing of zero. No italic, no heavy weight, no gradient text. Surfaces cycle from near-black to pure white with an 8 px card radius as the only geometry; buttons are 9999 px pill-shaped exclusively. The brand's one accent colour is Shopify green, present in the logo mark only — the rest of the palette is a disciplined zinc/shade gray scale."
colors:
  primary: "#000000"
  on-primary: "#ffffff"
  ink: "#000000"
  ink-deep: "#18181b"
  ink-mid: "#3f3f46"
  body: "#71717a"
  mute: "#a1a1aa"
  hairline: "#d4d4d8"
  hairline-soft: "#f4f4f5"
  canvas: "#ffffff"
  canvas-soft: "#f4f4f5"
  canvas-dark: "#000000"
  canvas-dark-secondary: "#18181b"
  text-on-dark: "#f5f5f5"
  link-dark: "#9797a2"
  link-dark-hover: "#d4d4d8"
  link-dark-active: "#a1a1aa"
  link-dark-focus: "#ffffff"
  shopify-green: "#96bf48"
  aloe-10: "#c1fbd4"
  pistachio-10: "#d4f9e0"
  purple-500: "#7c3aed"
  success: "#18a34a"
  error: "#dc2626"
  warning: "#d97706"
typography:
  display-xl:
    fontFamily: NeueHaasGrotesk, Helvetica, Arial, sans-serif
    fontSize: 96px
    fontWeight: 400
    lineHeight: 96px
    letterSpacing: 0px
  display-lg:
    fontFamily: NeueHaasGrotesk, Helvetica, Arial, sans-serif
    fontSize: 55px
    fontWeight: 400
    lineHeight: 64px
    letterSpacing: 0px
  display-md:
    fontFamily: NeueHaasGrotesk, Helvetica, Arial, sans-serif
    fontSize: 40px
    fontWeight: 400
    lineHeight: 48px
    letterSpacing: 0px
  display-sm:
    fontFamily: NeueHaasGrotesk, Helvetica, Arial, sans-serif
    fontSize: 32px
    fontWeight: 400
    lineHeight: 40px
    letterSpacing: 0px
  body-xl:
    fontFamily: NeueHaasGrotesk, Helvetica, Arial, sans-serif
    fontSize: 24px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: 0px
  body-lg:
    fontFamily: NeueHaasGrotesk, Helvetica, Arial, sans-serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: NeueHaasGrotesk, Helvetica, Arial, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-sm:
    fontFamily: NeueHaasGrotesk, Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-xs:
    fontFamily: NeueHaasGrotesk, Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  caption:
    fontFamily: NeueHaasGrotesk, Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0px
  button-lg:
    fontFamily: NeueHaasGrotesk, Helvetica, Arial, sans-serif
    fontSize: 18px
    fontWeight: 550
    lineHeight: 28px
    letterSpacing: 0px
  button-md:
    fontFamily: NeueHaasGrotesk, Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 550
    lineHeight: 24px
    letterSpacing: 0px
  button-sm:
    fontFamily: NeueHaasGrotesk, Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 550
    lineHeight: 20px
    letterSpacing: 0px
  nav-link:
    fontFamily: NeueHaasGrotesk, Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 550
    lineHeight: 24px
    letterSpacing: 0px
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  button: 9999px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 10px
  md: 12px
  base: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 64px
  4xl: 96px
  5xl: 128px
  section: 160px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
    padding: "{spacing.base} {spacing.xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "{spacing.xs} {spacing.md}"
    rounded: "{rounded.full}"
  nav-cta-start:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
  nav-login:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "{spacing.xs} {spacing.md}"
  hero-band:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  hero-cta-primary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"
  hero-cta-secondary:
    backgroundColor: transparent
    textColor: "{colors.text-on-dark}"
    borderColor: "{colors.text-on-dark}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"
  button-ghost-dark:
    backgroundColor: transparent
    textColor: "{colors.text-on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.lg}"
  card-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.base}"
  card-dark:
    backgroundColor: "{colors.canvas-dark-secondary}"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.base}"
  feature-band:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section} {spacing.xl}"
  feature-band-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section} {spacing.xl}"
  logo-strip:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.lg} {spacing.xl}"
  pricing-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  pricing-card-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
    height: 48px
  badge:
    backgroundColor: "{colors.aloe-10}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "{spacing.xxs} {spacing.xs}"
  badge-dark:
    backgroundColor: "{colors.canvas-dark-secondary}"
    textColor: "{colors.mute}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "{spacing.xxs} {spacing.xs}"
  footer:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.xl}"
  link-inline:
    textColor: "{colors.link-dark}"
    typography: "{typography.body-sm}"
  video-play-button:
    backgroundColor: transparent
    textColor: "{colors.text-on-dark}"
    borderColor: "{colors.text-on-dark}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.xl}"
  ex-pricing-tier:
    description: Default pricing tier card on canvas surface with hairline border.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured tier — polarity-flipped to ink-primary with white text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: Feature summary card for plan comparison or product tier selection.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary drawer — line items per tier or add-on.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses brand primary as a left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  ex-data-table-cell:
    description: Data table chrome. Header uses caption weight-550 uppercase; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card. Uses card-marketing chrome with pill form inputs inside.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog surface — card-marketing chrome with soft drop shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame on canvas-soft with generous padding.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — card-marketing chrome, compact padding.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.base}"
    typography: "{typography.body-sm}"
---
## Overview

Shopify is a commerce platform whose marketing surface makes an immediate, confident claim by letting real merchants fill the entire viewport. The hero is a full-bleed video — no abstract gradient, no illustration, no decorative chrome — just a person in a purple hoodie, joyful, in motion. The brand earns authority through restraint: near-black canvas, off-white type, and a single pill-shaped white CTA that says "Start for free." That is the whole decorative system.

Type is set in a single grotesque — Neue Haas Grotesk — at weight 400 across every scale from 96 px display to 12 px caption. There is no italic, no bold headline, no uppercase shouting. The 96 px display headline at weight 400 is quietly radical: the brand trusts the size alone to carry hierarchy. A semi-medium weight (550) appears only on button labels and nav links — the smallest possible distinction between "interactive" and "editorial."

Surfaces operate on a strict two-stop palette: near-black `{colors.canvas-dark}` (`#000000`) for hero bands and polarity-flipped sections, pure white `{colors.canvas}` for content sections and cards. The 8 px card radius is the only geometric accent on cards; buttons use an exclusive 9999 px pill shape. These two radii never cross — pill is for CTAs, 8 px is for cards, and the brand never mixes them.

The zinc/shade gray scale provides every divider, muted label, and secondary text step. The Shopify green (`{colors.shopify-green}`) appears only in the logo mark — it is never promoted to a CTA color, never used as a background. The brand's restraint here is intentional: green signals Shopify the product, not Shopify the marketing page.

## Colors

### Surfaces
- **Canvas** (`{colors.canvas}` — `#ffffff`): The default light-section background. Cards, pricing tiers, and content bands sit on pure white.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f4f4f5`): The lightest gray step used for inset regions, hover states, and form backgrounds.
- **Canvas Dark** (`{colors.canvas-dark}` — `#000000`): The hero band and polarity-flipped section background. Near-pure black — the brand's single dark surface tone.
- **Canvas Dark Secondary** (`{colors.canvas-dark-secondary}` — `#18181b`): One shade lighter than black for dark card surfaces nested inside hero sections.

### Text
- **Ink** (`{colors.ink}` — `#000000`): Every heading and body paragraph on white surfaces.
- **Ink Deep** (`{colors.ink-deep}` — `#18181b`): The darkest near-black for high-contrast body copy on soft surfaces.
- **Ink Mid** (`{colors.ink-mid}` — `#3f3f46`): Mid-gray for secondary captions and de-emphasised card text.
- **Body** (`{colors.body}` — `#71717a`): Low-emphasis body copy, sub-labels, footer link rows.
- **Mute** (`{colors.mute}` — `#a1a1aa`): Placeholder text, fine print, and logo-strip caption labels on dark surfaces.
- **Text on Dark** (`{colors.text-on-dark}` — `#f5f5f5`): All text rendered on `{colors.canvas-dark}` hero and feature bands.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): Text on `{colors.primary}` (black) polarity-flipped surfaces.

### Borders & Dividers
- **Hairline** (`{colors.hairline}` — `#d4d4d8`): 1 px card borders, form input borders, and table row dividers.
- **Hairline Soft** (`{colors.hairline-soft}` — `#f4f4f5`): Barely-visible dividers on ultra-light sections.

### Navigation Links (Dark Surface)
- **Link Dark** (`{colors.link-dark}` — `#9797a2`): Default footer and dark-band link text.
- **Link Dark Hover** (`{colors.link-dark-hover}` — `#d4d4d8`): Hover state for links on dark surfaces.
- **Link Dark Active** (`{colors.link-dark-active}` — `#a1a1aa`): Active/visited state on dark surfaces.
- **Link Dark Focus** (`{colors.link-dark-focus}` — `#ffffff`): Focus ring / focus state on dark surfaces.

### Brand Accent
- **Shopify Green** (`{colors.shopify-green}` — `#96bf48`): The logo mark's signature green. Present in the wordmark SVG only — never promoted to button or background.
- **Aloe 10** (`{colors.aloe-10}` — `#c1fbd4`): Soft mint pastel used for light-mode badge and highlight chips.
- **Pistachio 10** (`{colors.pistachio-10}` — `#d4f9e0`): Near-identical pastel mint for secondary badge chips.

### Semantic
- **Success** (`{colors.success}` — `#18a34a`): Positive status indicators and success state labels.
- **Error** (`{colors.error}` — `#dc2626`): Form validation errors and destructive action states.
- **Warning** (`{colors.warning}` — `#d97706`): Caution / pending states.

## Typography

### Font Family
One face carries the entire system: **Neue Haas Grotesk** (proprietary — the brand's own licensed grotesque). It is used at weight 400 for every display, body, and label context, and at weight 550 only for button labels and nav links. The face never appears at 700 or heavier; the brand's hierarchy is built from size alone, not weight contrast.

There is no separate monospaced face on this marketing surface. All technical labels (if any) use the same grotesque.

Open-source substitute: *Helvetica Neue* is the design ancestor. For open-source work, *Inter* or *Plus Jakarta Sans* are the closest stylistic matches at 400/550.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 96px | 400 | 96px | 0px | Hero headline ("Be the next"). Full-viewport display, white on video. |
| `{typography.display-lg}` | 55px | 400 | 64px | 0px | Section headlines on feature bands. |
| `{typography.display-md}` | 40px | 400 | 48px | 0px | Sub-section callout heads and pricing tier names. |
| `{typography.display-sm}` | 32px | 400 | 40px | 0px | Card cluster headlines and secondary feature labels. |
| `{typography.body-xl}` | 24px | 400 | 32px | 0px | Large lead paragraphs under display headlines. |
| `{typography.body-lg}` | 20px | 400 | 28px | 0px | Supporting body under section headlines. |
| `{typography.body-md}` | 18px | 400 | 28px | 0px | Default body paragraph and button-lg labels. |
| `{typography.body-sm}` | 16px | 400 | 24px | 0px | Secondary body, nav link text, footer link rows. |
| `{typography.body-xs}` | 14px | 400 | 20px | 0px | Fine print, badge labels, ancillary metadata. |
| `{typography.caption}` | 12px | 400 | 16px | 0px | Lowest-priority captions and footer secondary lines. |
| `{typography.button-lg}` | 18px | 550 | 28px | 0px | Marketing-scale pill CTA labels ("Start for free"). |
| `{typography.button-md}` | 16px | 550 | 24px | 0px | Nav-scale and secondary CTA labels. |
| `{typography.button-sm}` | 14px | 550 | 20px | 0px | Compact CTAs and in-card action links. |
| `{typography.nav-link}` | 16px | 550 | 24px | 0px | Top nav primary links ("Why Shopify", "Products", etc.). |

### Principles
- **Weight 400 is the display voice.** The 96 px hero headline sits at regular weight — size alone carries authority. This is deliberate and non-negotiable; promoting display headlines to 700 would break the brand's posture entirely.
- **Weight 550 is reserved for interactive affordances.** Only button labels and nav links get the semi-medium step. Everything editorial stays at 400.
- **No tracking manipulation at display scale.** Unlike many developer-brand peers, Shopify's display type sits at zero letter-spacing. The brand's voice is neutral and open, not technical-compressed.
- **Sentence-case throughout.** Headlines like "Be the next" are never set in all-caps or title case with excessive capitalisation.
- **One grotesque, no serifs, no mono.** The single-family discipline is part of the brand's commercial directness.

### Note on Font Substitutes
Neue Haas Grotesk is a licensed typeface (Linotype/Monotype). Open-source substitutes:
- **Grotesque sans** — *Inter* (400/550) is the closest geometric match at web sizes. Enable `font-feature-settings: "ss01"` for the single-storey 'a'. *Plus Jakarta Sans* is a passable warm-grotesque alternative.

## Layout

### Spacing System
- **Base unit**: 4 px. The brand's `--space-*` tokens step in multiples of 4 from 4 px to 160 px.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 10 px · `{spacing.md}` 12 px · `{spacing.base}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 64 px · `{spacing.4xl}` 96 px · `{spacing.5xl}` 128 px · `{spacing.section}` 160 px.
- **Hero padding**: hero bands use `{spacing.4xl}` to `{spacing.section}` vertically to give the video backdrop and display headline breathing room.
- **Button padding**: measured as `12px 26px 12px 16px` — asymmetric right padding accommodates icon/arrow elements inside the pill CTA.
- **Card interior**: marketing cards sit at `{spacing.base}` 16 px (compact grid) to `{spacing.xl}` 32 px (pricing-tier cards).
- **Section gaps**: the `--space-2xl` (4 rem / 64 px) and `--space-xl` (2.5 rem / 40 px) custom properties drive section-level vertical rhythm.

### Grid & Container
- **Max width**: ~1280 px centred; horizontal gutters of `{spacing.xl}` 32 px on desktop, `{spacing.base}` 16 px on mobile.
- **Column patterns**:
  - Hero: full-bleed video, single-column copy stack left-aligned.
  - Feature row: 3-up on desktop, 1-up on mobile.
  - Pricing grid: 3-up on desktop with the featured tier centre-polarity-flipped.
  - Logo strip: single row of partner/merchant logos at consistent height.

### Whitespace Philosophy
The full-bleed video hero demands generous vertical space — the 96 px headline needs room, and the video needs to read before the copy layer lands. Below the hero, the brand uses alternating black and white bands to create section depth without dividers. Inside a band, the headline/body stack is tight (`{spacing.xs}` to `{spacing.md}` gap), then a wider gap before the CTA. The page reads as commercial-confident: large section gaps, tight interior stacks, never the reverse.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero video and polarity-flipped dark bands. |
| Level 1 — Hairline | `0 0 0 1px {colors.hairline}` border. | Default card chrome on white surfaces — cards are held by line, not shadow. |
| Level 2 — Soft Drop | `0px 2px 8px rgba(0,0,0,0.08)` | Slightly elevated marketing cards and dropdown menus. |
| Level 3 — Modal | `0px 4px 24px rgba(0,0,0,0.14)` | Modal / dialog surfaces. |

The brand favours flat-to-hairline elevation over stacked shadow. Cards read as pages on a table, not floating objects. Dark bands read as depth-through-polarity, not depth-through-shadow.

### Decorative Depth
- **Full-bleed video as the depth engine**: the hero's real-photography video is the brand's entire atmospheric layer — no gradient, no mesh, no illustration.
- **Polarity flip as section depth**: switching from `{colors.canvas}` white to `{colors.canvas-dark}` black between bands is the primary depth cue.
- **Pill CTA contrast as the conversion signal**: the white pill on dark video surface is the single highest-contrast object on the page.

## Components

### Buttons

**`button-primary`** — the canonical 9999 px pill, black on white.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-lg}`, padding `{spacing.md} {spacing.xl}`, shape `{rounded.button}`.

**`button-secondary`** — the outlined pill paired with the primary in light sections.
- Background `{colors.canvas}`, text `{colors.primary}`, hairline border, label in `{typography.button-lg}`, shape `{rounded.button}`.

**`hero-cta-primary`** — the white pill on dark/video hero surface.
- Background `{colors.canvas}`, text `{colors.primary}`, label in `{typography.button-lg}`, shape `{rounded.button}`. This is the single highest-priority conversion target on the page.

**`hero-cta-secondary`** — the outlined ghost pill on dark/video hero surface.
- Background transparent, text `{colors.text-on-dark}`, border `{colors.text-on-dark}`, label in `{typography.button-lg}`, shape `{rounded.button}`. Hosts a play-icon for the "Why we build Shopify" video trigger.

**`button-ghost-dark`** — compact ghost pill for secondary actions on dark bands.
- Background transparent, text `{colors.text-on-dark}`, label in `{typography.button-md}`, shape `{rounded.button}`.

**`nav-cta-start`** — the "Start for free" pill in the top nav.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}`, shape `{rounded.button}`, padding `{spacing.xs} {spacing.lg}`.

### Navigation

**`nav-bar`** — the white sticky top nav.
- Background `{colors.canvas}`, text `{colors.ink}`, height 64 px, padding `{spacing.base} {spacing.xl}`. Layout: logo mark left, primary links centre, "Log in / Start for free" cluster right.

**`nav-link`** — the primary nav link items ("Why Shopify", "Products", "Pricing", "Enterprise").
- Text `{colors.ink}`, label in `{typography.nav-link}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.full}` (ghost pill — visible on hover/active only).

**`nav-login`** — the "Log in" text button in the nav.
- Background transparent, text `{colors.ink}`, label in `{typography.nav-link}`, padding `{spacing.xs} {spacing.md}`.

### Cards & Surfaces

**`card-marketing`** — the canonical white marketing card.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.base}` 16 px, shape `{rounded.md}` 8 px. Held by a 1 px hairline border.

**`card-dark`** — the dark marketing card for use inside black bands.
- Background `{colors.canvas-dark-secondary}`, text `{colors.text-on-dark}`, padding `{spacing.base}`, shape `{rounded.md}`.

**`pricing-card`** — the default pricing-tier card.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.xl}`, shape `{rounded.md}`. Inside: tier name in `{typography.display-sm}`, price in `{typography.display-md}`, feature list in `{typography.body-sm}`, CTA at the bottom.

**`pricing-card-featured`** — the polarity-flipped featured pricing card.
- Background `{colors.primary}`, text `{colors.on-primary}`, same shape and padding as `pricing-card`. CTA inverts to white pill.

### Bands

**`hero-band`** — the full-bleed video hero.
- Background `{colors.canvas-dark}`, text `{colors.text-on-dark}`, padding `{spacing.4xl} {spacing.xl}`. Hosts display-xl headline, body-lg lead copy, and the two hero pill CTAs. The video fills the entire viewport behind the copy layer.

**`feature-band`** — a full-width dark content section.
- Background `{colors.canvas-dark}`, text `{colors.text-on-dark}`, padding `{spacing.section} {spacing.xl}`. Headline in `{typography.display-lg}`.

**`feature-band-light`** — a full-width white content section.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.section} {spacing.xl}`. Headline in `{typography.display-lg}`.

### Utility

**`form-input`** — the canonical pill-shaped text input (used in newsletter and search contexts).
- Background `{colors.canvas}`, text `{colors.ink}`, border `{colors.hairline}`, label in `{typography.body-md}`, shape `{rounded.button}`, height 48 px. Note: inputs inherit the button's pill shape — the brand does not use square or rounded-rectangle inputs at marketing scale.

**`badge`** — the mint-tinted status chip on light surfaces.
- Background `{colors.aloe-10}`, text `{colors.ink-deep}`, label in `{typography.caption}`, shape `{rounded.full}`, padding `{spacing.xxs} {spacing.xs}`.

**`badge-dark`** — the dark-surface muted chip.
- Background `{colors.canvas-dark-secondary}`, text `{colors.mute}`, label in `{typography.caption}`, shape `{rounded.full}`, padding `{spacing.xxs} {spacing.xs}`.

**`logo-strip`** — the partner/merchant logo row.
- Background `{colors.canvas-dark}`, text `{colors.mute}`, padding `{spacing.lg} {spacing.xl}`. Logos rendered at consistent height; muted treatment keeps them subordinate to the headline above.

**`footer`** — the bottom nav.
- Background `{colors.canvas-dark}`, text `{colors.mute}`, padding `{spacing.3xl} {spacing.xl}`. Link rows in `{typography.body-sm}` `{colors.link-dark}`; column labels in `{typography.button-sm}` (weight 550).

**`link-inline`** — body-copy inline links.
- Text `{colors.link-dark}`, body in `{typography.body-sm}`.

**`video-play-button`** — the circular or pill-shaped play trigger on video thumbnails.
- Background transparent, text `{colors.text-on-dark}`, border `{colors.text-on-dark}`, label in `{typography.button-lg}`, shape `{rounded.button}`.

## Do's and Don'ts

### Do
- Use the 9999 px pill shape exclusively for every CTA button. `{rounded.button}` is non-negotiable — the brand never uses square or softly-rounded buttons.
- Keep `{rounded.md}` 8 px as the exclusive card radius. Cards are geometric, CTAs are pill-shaped, and the two shapes never cross.
- Set every headline at weight 400. Size is the hierarchy signal, not weight.
- Reserve weight 550 for button labels and nav links only — the smallest interactive affordance distinction.
- Let real photography (video, merchant portraits) do the decorative work. Don't introduce gradients, mesh backdrops, or illustration in place of photography.
- Use the two-stop polarity system — white band → black band → white band — as the primary depth and section-separation mechanism.
- Keep Shopify Green in the logo mark only. Never promote it to a CTA color, hover state, or background fill.

### Don't
- Don't set headlines in all-caps or weight 700. The brand's posture is confident-and-open, not loud.
- Don't apply the pill CTA radius to card surfaces. `{rounded.md}` 8 px is for cards; `{rounded.button}` 9999 px is for CTAs.
- Don't introduce a third surface tone between white and black. The brand operates on a binary — introducing a mid-gray band dilutes the polarity system.
- Don't add letter-spacing to display headlines. Zero tracking at 96 px is the brand's typographic voice.
- Don't miniaturise the video hero to a thumbnail or illustration. The full-bleed real-person photography is the entire decoration system.
- Don't use the Shopify green for conversion actions. It belongs to the mark, not the marketing surface.
- Don't add heavy drop-shadows to cards. The brand's elevation is hairline border + flat surface — never Material-style floating.
