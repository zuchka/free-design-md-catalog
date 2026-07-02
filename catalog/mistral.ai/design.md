---
version: alpha
name: Mistral-AI
description: "Mistral is a frontier-AI research and enterprise platform brand whose surface is an off-white warm canvas broken by a single ferocious decoration system: a collage of orange, red, crimson, and golden-yellow geometric squares tumbling across a full-bleed hero band. Away from that hero, the palette collapses to near-pure black ink on #fbfbf8 warm white — no gradients, no illustrations, no ambient glow. The logo itself is a pixelated orange-and-red mosaic that seeds the entire colour story. Type is Inter across the board, weight 400 for almost everything, with aggressive negative tracking at display scale and a deliberate refusal to go heavy — this is a research lab that lets ideas do the shouting, not typographic weight."
colors:
  primary: "#ff5229"
  on-primary: "#ffffff"
  brand-orange: "#ff8204"
  brand-red: "#e51300"
  brand-orange-mid: "#fa500f"
  brand-yellow: "#fec63a"
  brand-yellow-soft: "#ffdd73"
  ink: "#000000"
  body: "#151524"
  mute: "#343446"
  tertiary: "#5a5a6e"
  hairline: "#dcdcde"
  hairline-soft: "#b8b8cc"
  canvas: "#ffffff"
  canvas-soft: "#fbfbf8"
  canvas-tinted: "#fff0eb"
  surface-neutral: "#f5f5f7"
  surface-invert: "#151524"
  link: "#0082e6"
  link-blue: "#55b3fb"
  success: "#44ba82"
  error: "#e51300"
  nav-button-bg: "#f5f5f6"
  nav-button-text: "#151524"
typography:
  display-xl:
    fontFamily: Inter, sans-serif
    fontSize: 96px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Inter, sans-serif
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.02em
  display-md:
    fontFamily: Inter, sans-serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.02em
  display-sm:
    fontFamily: Inter, sans-serif
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.01em
  body-xl:
    fontFamily: Inter, sans-serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
  body-lg:
    fontFamily: Inter, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
  body-md:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  body-xs:
    fontFamily: Inter, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: calc(1 / 0.75)
  eyebrow:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.25rem
    letterSpacing: 0.06em
  button-md:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
  button-sm:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
  caption:
    fontFamily: Inter, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.25rem
rounded:
  none: 0px
  sm: 4px
  md: 6px
  button: 6px
  lg: 12px
  xl: 16px
  2xl: 24px
  4xl: 32px
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
  5xl: 80px
  6xl: 96px
  section: 128px
components:
  nav-bar:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    height: 56px
    padding: "{spacing.xs} {spacing.lg}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxs} {spacing.md}"
  nav-cta-start:
    backgroundColor: "{colors.nav-button-bg}"
    textColor: "{colors.nav-button-text}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-contact:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  button-ghost:
    backgroundColor: "{colors.nav-button-bg}"
    textColor: "{colors.nav-button-text}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  hero-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.6xl} {spacing.lg}"
  hero-mosaic-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    padding: "0"
  card-feature:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-news:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  card-invert:
    backgroundColor: "{colors.surface-invert}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  eyebrow-label:
    textColor: "{colors.mute}"
    typography: "{typography.eyebrow}"
    letterSpacing: 0.06em
  section-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.5xl} {spacing.lg}"
  section-band-invert:
    backgroundColor: "{colors.surface-invert}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-md}"
    padding: "{spacing.5xl} {spacing.lg}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  badge:
    backgroundColor: "{colors.canvas-tinted}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 2px {spacing.xs}
  footer:
    backgroundColor: "{colors.surface-invert}"
    textColor: "{colors.hairline-soft}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.lg}"
  news-thumbnail:
    backgroundColor: "{colors.surface-neutral}"
    rounded: "{rounded.md}"
  ex-pricing-tier:
    description: Default tier card on warm canvas with hairline border.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured tier — polarity-flipped to invert surface with white text.
    backgroundColor: "{colors.surface-invert}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-auth-form-card:
    description: Sign-in card using canvas surface with md inputs inside.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog — canvas surface, lg radius, elevated shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-data-table-cell:
    description: Data table chrome. Header uses eyebrow typography; body uses body-sm.
    headerBackground: "{colors.surface-neutral}"
    headerTypography: "{typography.eyebrow}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-toast:
    description: Toast notification — canvas surface, md radius, subtle shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
  ex-empty-state-card:
    description: Empty-state frame on tinted surface with generous padding.
    backgroundColor: "{colors.canvas-tinted}"
    rounded: "{rounded.lg}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
---
## Overview

Mistral occupies an unusual position in the AI landscape: a European research lab with frontier ambitions, communicating through one of the most restrained visual systems at its scale. The page is built almost entirely from near-black ink on `{colors.canvas-soft}` (`#fbfbf8`) warm off-white — a surface that reads warmer than pure white and cooler than cream. There are no gradients, no ambient glows, and almost no decorative illustration anywhere except for one place: the hero mosaic. That mosaic — geometric squares in `{colors.primary}` orange-red, `{colors.brand-orange}` tangerine, `{colors.brand-red}` crimson, `{colors.brand-yellow}` gold, and dark crimson — is the entire brand decoration system, the visual signature that reads as fire, as computation, and as the pixelated Mistral logo scaled to mural size. Outside the hero, the palette collapses completely.

Typography is Inter at weight 400 almost universally — a deliberate research-lab posture that refuses to shout. The display headline ("Frontier AI. In your hands.") runs at 96 px with `-0.02em` tracking, making the large type feel compressed and precise rather than expansive. There is no bold display weight, no italic, no condensed variant. Section eyebrows carry a small uppercase tracking step that signals hierarchy without reaching for weight. Button labels step up to weight 500 — the only place on the page where Inter gets a heavier hand.

Surfaces use a three-step ladder: `{colors.canvas-soft}` (`#fbfbf8`) for the page body and hero, `{colors.canvas}` (`#ffffff`) for cards and modals, `{colors.surface-invert}` (`#151524`) for the polarity-flipped dark footer and dark-themed sections. The inverted navy-near-black is warmer than pure black and reads as deliberate, not default. Cards sit almost flat — the brand relies on hairline borders rather than shadows for card definition, keeping elevation calmer than most enterprise AI peers.

The nav is minimal: wordmark left, six text links centre, two buttons right ("Start building" on a zinc-100 ghost surface, "Contact sales" on ink-black). No announcement pill, no mega-menu chrome — just flat text navigation that trusts the brand's name to carry the page.

## Colors

### Brand & Accent
- **Primary / Brand Orange-Red** (`{colors.primary}` — `#ff5229`): The signature brand red-orange. Appears as the dominant mosaic tile colour in the hero, as the `--color-text-brand-1` semantic, and as the hottest accent in call-to-action contexts.
- **Brand Orange** (`{colors.brand-orange}` — `#ff8204`): The warmer tangerine stop in the hero mosaic, also the `--color-tangerine-500` token. Sits next to the red-orange tiles in the collage, reading as fire's mid-tone.
- **Brand Red** (`{colors.brand-red}` — `#e51300`): The deepest crimson stop. Used as `--color-text-brand-3` — the most saturated signal colour for critical labels and error semantics.
- **Brand Orange Mid** (`{colors.brand-orange-mid}` — `#fa500f`): The `--color-orange-600` token — between primary and brand-orange in the mosaic stack.
- **Brand Yellow** (`{colors.brand-yellow}` — `#fec63a`): The golden-amber tile at the warm end of the mosaic collage (`--color-yellow-400`). Rarely used off the hero but anchors the warmth of the brand palette.
- **Brand Yellow Soft** (`{colors.brand-yellow-soft}` — `#ffdd73`): The lighter amber step (`--color-yellow-300`), visible as lighter tile variants in the hero gradient.

### Surface
- **Canvas Soft** (`{colors.canvas-soft}` — `#fbfbf8`): The default page and hero background. Warmer than `#fafafa`, cooler than cream. Almost every marketing section rests here.
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure white card and modal surface.
- **Canvas Tinted** (`{colors.canvas-tinted}` — `#fff0eb`): A very pale orange blush (`--color-orange-50`) used for badge and announcement backgrounds that need brand warmth without full saturation.
- **Surface Neutral** (`{colors.surface-neutral}` — `#f5f5f7`): Near-zinc used for secondary surface insets, image placeholder backgrounds, and table headers.
- **Surface Invert** (`{colors.surface-invert}` — `#151524`): The deep navy-near-black used for the footer, dark-band sections, and the polarity-flipped card variant. Not pure black — carries a subtle blue-navy undertone.
- **Nav Button Bg** (`{colors.nav-button-bg}` — `#f5f5f6`): The zinc-100 surface for the "Start building" ghost button in the nav.

### Text
- **Ink** (`{colors.ink}` — `#000000`): Every headline and body paragraph on light surfaces. Pure black with no softening.
- **Body** (`{colors.body}` — `#151524`): The nav-button text colour and primary dark-mode text. A navy-tinged near-black.
- **Mute** (`{colors.mute}` — `#343446`): Secondary text — section labels, supporting captions, de-emphasised body. The `--color-navy-800` token.
- **Tertiary** (`{colors.tertiary}` — `#5a5a6e`): The lowest-priority text tone (`--color-text-tertiary` resolved from `oklch(0.37 0.013 285.805)`). Fine print, metadata, and placeholder states.
- **Hairline** (`{colors.hairline}` — `#dcdcde`): Card borders and table dividers (`--color-navy-200`).
- **Hairline Soft** (`{colors.hairline-soft}` — `#b8b8cc`): Lighter dividers and footer secondary text (`--color-navy-300`).

### Semantic
- **Link** (`{colors.link}` — `#0082e6`): The brand's primary inline link blue (`--color-text-brand-2`). Appears on body copy links and text CTAs.
- **Link Blue** (`{colors.link-blue}` — `#55b3fb`): The lighter blue step (`--color-blue-400`) used on dark/invert surfaces for links.
- **Success** (`{colors.success}` — `#44ba82`): Status green (`--color-green-500`) for positive states, confirmations, and uptime indicators.
- **Error** (`{colors.error}` — `#e51300`): Validation red, shared with `brand-red`.

## Typography

### Font Family
Inter is the sole typeface — loaded from the Google Fonts or Bunny Fonts CDN and used at weights 400 and 500 only. There is no display serif, no mono, no condensed variant visible anywhere on the marketing surface. The entire visual hierarchy is achieved through size and letter-spacing alone, not weight contrast. This is a deliberate research-lab voice: neutral, precise, un-decorated.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 96px | 400 | 1 | -0.02em | Hero headline ("Frontier AI. In your hands."). Full-viewport-width type that reads as display-compressed. |
| `{typography.display-lg}` | 64px | 400 | 1.05 | -0.02em | Large section titles on feature-heavy bands. |
| `{typography.display-md}` | 48px | 400 | 1.1 | -0.02em | Section headlines ("We help organizations build tailored AI systems"). |
| `{typography.display-sm}` | 32px | 400 | 1.2 | -0.01em | Card cluster and subsection headlines. |
| `{typography.body-xl}` | 20px | 400 | 1.5 | 0 | Lead paragraph under hero headline. |
| `{typography.body-lg}` | 18px | 400 | 1.5 | 0 | Supporting body text in feature sections. |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default body. Nav links, card body, form labels. |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Secondary body, footer link columns, metadata. |
| `{typography.body-xs}` | 12px | 400 | calc(1 / 0.75) | 0 | Fine print, timestamps. |
| `{typography.eyebrow}` | 14px | 400 | 1.25rem | 0.06em | Section eyebrows ("FEATURED NEWS", "FRONTIER AI"). All-caps with wide tracking — the only place the brand uses uppercase. |
| `{typography.button-md}` | 16px | 500 | 1.5 | 0 | Marketing-scale button labels. The only weight-500 occurrence at body size. |
| `{typography.button-sm}` | 14px | 500 | 1.5 | 0 | Small button labels and nav CTA labels. |
| `{typography.caption}` | 12px | 400 | 1.25rem | 0 | Badge labels, news card metadata. |

### Principles
- **Weight 400 is the display ceiling.** Unlike most brands, Mistral's hero headline runs at weight 400. The visual emphasis comes entirely from scale and tight tracking. Adding weight 600+ would break the research-lab register.
- **Negative tracking at display scale is non-negotiable.** The `-0.02em` tracking at 96 px collapses the inter-letter spacing to give the headline its compressed, precise character. At body sizes, tracking is neutral.
- **Uppercase is reserved for eyebrows only.** Section labels like "FEATURED NEWS" and "FRONTIER AI" run all-caps at wide `0.06em` tracking to signal hierarchy. Headlines and body are sentence-case with no uppercase.
- **No italic, no condensed, no mono.** The entire type system is a single weight-and-size ladder in Inter Regular / Medium. This restraint is the voice.

## Layout

### Spacing System
- **Base unit**: 4 px. Every captured padding and gap value (`4px / 8px / 12px / 16px / 40px / 80px`) is a strict 4 px multiple.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 80 px · `{spacing.6xl}` 96 px · `{spacing.section}` 128 px.
- **Section padding**: marketing bands use `{spacing.5xl}` (80 px) top/bottom. The hero band uses `{spacing.6xl}` (96 px) above the headline to give the display type room to breathe. The mosaic collage below the headline is full-bleed with zero internal padding — it is the decoration, not the container.
- **Card interior padding**: feature cards sit at `{spacing.lg}` 24 px; news cards at `{spacing.md}` 16 px. Both use `{rounded.lg}` 12 px radius.
- **Inline gap**: nav links are spaced at `{spacing.xxs}` to `{spacing.xs}` between items; button clusters in the nav use `{spacing.xs}` 8 px gap.

### Grid & Container
- **Max width**: The page content is centred within a max-width container; at desktop it appears to span roughly 1200–1400 px with `{spacing.lg}` gutters on each side.
- **Column patterns**:
  - Hero: full-width left-column headline + right-column body-copy split, roughly 70/30 at desktop.
  - News / feature cards: 2-up or 3-up grid at desktop, 1-up at mobile.
  - Logo strip (if present): single horizontal flex row at consistent height.

### Whitespace Philosophy
The mosaic hero band carries all decorative weight; every other section is pure whitespace and type. Section gaps are generous — `{spacing.5xl}` between bands — and card interiors are tight (`{spacing.md}` to `{spacing.lg}`). The page reads as editorial: large breathing room outside, efficient density inside. The warm off-white canvas unifies every section without a visible band boundary — sections are separated by vertical space alone, not colour changes, except for the full-bleed mosaic and the dark footer.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Hero band, full-bleed mosaic, footer band. |
| Level 1 — Hairline Border | `1px solid {colors.hairline}` | Default card chrome. The brand's primary depth cue — a thin border ring that separates card from canvas without shadow. |
| Level 2 — Subtle Drop | `0 1px 4px rgba(0,0,0,0.06)` plus hairline border | Slightly elevated cards — news thumbnails, interactive cards. |
| Level 3 — Modal | `0 4px 24px rgba(0,0,0,0.10)` plus hairline border | Modal / dialog surfaces and dropdown panels. |

Mistral's elevation is the flattest of any enterprise AI brand at this scale. Cards are defined by a hairline ring, not shadow. This restraint mirrors the typographic restraint — the brand trusts the canvas to do the work.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero mosaic, footer bands. |
| `{rounded.sm}` | 4px | Tightest inline elements — small badges. |
| `{rounded.md}` | 6px | The brand's base UI radius — all buttons (measured lock: `6px`), form inputs, dropdown menus. |
| `{rounded.button}` | 6px | Canonical button radius (deterministic measurement). Every CTA uses this. |
| `{rounded.lg}` | 12px | Feature cards and news cards. |
| `{rounded.xl}` | 16px | Larger card chrome hosting imagery. |
| `{rounded.2xl}` | 24px | Inset image frames within large cards. |
| `{rounded.4xl}` | 32px | Rounded band corners where sections have corner-radii (the `--radius-4xl: 2rem` token). |
| `{rounded.full}` | 9999px | Pill badges and status indicator dots. |

### Geometry Notes
- **Mosaic tiles**: the hero's geometric squares are axis-aligned and 45°-rotated rectangles with sharp corners (`{rounded.none}`), rendered as absolutely-positioned divs or SVG. They are the brand's only decorative shape beyond the rectangle.
- **Buttons**: universally `{rounded.button}` 6 px — both the nav ghost button and the primary CTA share this radius. The brand does not use pill-shaped CTAs.
- **Cards**: consistently `{rounded.lg}` 12 px across feature and news card variants.

## Components

### Navigation

**`nav-bar`** — the top navigation bar.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, height 56 px, padding `{spacing.xs} {spacing.lg}`. Layout: pixelated-M logo left, six flat text links centre ("Products", "Solutions", "Research", "Developers", "Blog", "Customers", "Company"), two CTA buttons right.

**`nav-link`** — the centred flat text links.
- Text `{colors.ink}`, set in `{typography.body-md}` weight 400, padding `{spacing.xxs} {spacing.md}`, no underline, no visible hover state defined in extraction.

**`nav-cta-start`** — "Start building" ghost button.
- Background `{colors.nav-button-bg}` (zinc-100), text `{colors.nav-button-text}` (navy near-black), set in `{typography.button-md}` weight 500, rounded `{rounded.button}` 6 px, padding `{spacing.xs} {spacing.md}`. The lighter of the two nav CTAs.

**`nav-cta-contact`** — "Contact sales" filled button.
- Background `{colors.ink}` (pure black), text `{colors.on-primary}`, set in `{typography.button-md}` weight 500, rounded `{rounded.button}` 6 px, padding `{spacing.xs} {spacing.md}`. The conversion target in the nav.

### Buttons

**`button-primary`** — canonical filled CTA.
- Background `{colors.ink}`, text `{colors.on-primary}`, label in `{typography.button-md}`, rounded `{rounded.button}` 6 px, padding `{spacing.xs} {spacing.md}`.

**`button-secondary`** — outlined / ghost CTA.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, label in `{typography.button-md}`, rounded `{rounded.button}` 6 px, padding `{spacing.xs} {spacing.md}`.

**`button-ghost`** — zinc-surface ghost button, used in nav and inline contexts.
- Background `{colors.nav-button-bg}`, text `{colors.nav-button-text}`, label in `{typography.button-sm}`, rounded `{rounded.button}` 6 px, padding `{spacing.xs} {spacing.md}`.

### Hero & Bands

**`hero-band`** — the full-page opening section.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.6xl} {spacing.lg}`. Left column: headline in `{typography.display-xl}` (96 px / 400 / -0.02em tracking), period-terminated, sentence-case. Right column: body paragraph in `{typography.body-xl}`. Below both columns: the full-bleed orange mosaic.

**`hero-mosaic-band`** — the geometric-squares collage beneath the hero text.
- A full-bleed block of axis-aligned and 45°-rotated rectangles in `{colors.primary}`, `{colors.brand-orange}`, `{colors.brand-red}`, `{colors.brand-yellow}`, dark crimson. No internal padding (`padding: 0`). This is the entire brand decoration system — it never appears miniaturised.

**`section-band`** — standard on-canvas marketing section.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.lg}`. Headline in `{typography.display-md}`, body in `{typography.body-lg}`.

**`section-band-invert`** — polarity-flipped dark section.
- Background `{colors.surface-invert}`, text `{colors.on-primary}`, padding `{spacing.5xl} {spacing.lg}`. Same type hierarchy as `section-band` but on dark navy.

### Cards & Containers

**`card-feature`** — a standard feature / product card.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg}`, rounded `{rounded.lg}` 12 px. Carries a Level 1 hairline border. Inside: section eyebrow → display-sm headline → body-md supporting text.

**`card-news`** — the "Featured News" card visible in the screenshot.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md}`, rounded `{rounded.lg}` 12 px. Contains a `{news-thumbnail}` image block left and headline + share-icon right.

**`card-invert`** — a dark-surface card used inside `section-band-invert`.
- Background `{colors.surface-invert}`, text `{colors.on-primary}`, padding `{spacing.lg}`, rounded `{rounded.lg}` 12 px.

**`news-thumbnail`** — the image block inside news cards.
- Background `{colors.surface-neutral}` as placeholder, rounded `{rounded.md}` 6 px. Sized to ~64 × 64 px in the news card layout.

### Labels & Badges

**`eyebrow-label`** — the all-caps small section label ("FEATURED NEWS", "FRONTIER AI", "IN YOUR HANDS").
- Text `{colors.mute}`, set in `{typography.eyebrow}` (14 px / 400 / 0.06em tracking / uppercase). Used as a visual wayfinding device above section headings and within the hero mosaic as floating labels.

**`badge`** — the small inline pill for status or category labels.
- Background `{colors.canvas-tinted}` (pale orange blush), text `{colors.primary}` (orange-red), set in `{typography.caption}`, rounded `{rounded.full}`, padding `2px {spacing.xs}`.

### Utility

**`link-inline`** — body-copy inline links.
- Text `{colors.link}` (`#0082e6`), set in `{typography.body-md}`, no underline at rest.

**`footer`** — the dark footer navigation band.
- Background `{colors.surface-invert}`, text `{colors.hairline-soft}`, padding `{spacing.4xl} {spacing.lg}`, set in `{typography.body-sm}`. Column headers in `{typography.eyebrow}` (uppercase / tracked).

## Do's and Don'ts

### Do
- Use `{colors.primary}` (`#ff5229`) exclusively in the mosaic hero decoration. It is not a button colour — Mistral's buttons are ink-black and zinc-ghost.
- Set display headlines at weight 400 with `-0.02em` tracking. The compressed, light display type is the brand's voice — adding bold weight breaks it immediately.
- Use `{rounded.button}` 6 px for every button and CTA. The brand does not use pill-shaped CTAs at any scale.
- Use uppercase with `0.06em` letter-spacing for eyebrow labels only — never for headlines or body text.
- Keep the mosaic full-bleed and at hero scale. It is never miniaturised, never cropped to a swatch, never recoloured to a single tile.
- Cycle surfaces through `{colors.canvas-soft}` → `{colors.canvas}` (cards) → `{colors.surface-invert}` (dark band / footer). The warm off-white and the navy-near-black are the only two surface poles.
- Define card depth through a `1px solid {colors.hairline}` border ring, not shadow. This is a deliberately flat visual language.

### Don't
- Don't set any headline or display text at weight 500 or 600. Weight 500 is reserved for button labels only.
- Don't introduce gradients, glows, or ambient blur effects. The mosaic IS the decoration — everything else is flat.
- Don't use pill-shaped buttons. The brand's CTA shape is 6 px square radius at every scale.
- Don't use `{colors.primary}` orange-red as a button fill or text colour in body copy — it lives in the mosaic and in badge / label accents only.
- Don't set body paragraphs in uppercase. Uppercase is an eyebrow-only device.
- Don't add a monospace face. Mistral's marketing surface uses Inter exclusively; no code or mono elements appear in the marketing layer.
- Don't add heavy drop-shadows to cards. A 1 px hairline border is the brand's entire elevation vocabulary on marketing surfaces.
