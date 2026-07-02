---
version: alpha
name: BMW-M-design-system
description: "BMW M is a performance-marque brand whose surface is a deep charcoal-near-black canvas broken by a single hero photograph of red metal and asphalt — the image IS the decoration system. A proprietary sans-serif cut in Light and Regular carries all type at neutral tracking, never condensed, never italic. The only introduced colour is a single saturated BMW blue CTA that lands with surgical precision against the dark ground. All-caps headlines, zero border-radius on every interactive element, and an almost military discipline around whitespace communicate that this is not a lifestyle brand — it is a performance division."

colors:
  primary: "#1c69d4"
  on-primary: "#ffffff"
  ink: "#262626"
  body: "#262626"
  mute: "#8e8e8e"
  hairline: "#3a3a3a"
  canvas: "#ffffff"
  canvas-dark: "#1a1a1a"
  canvas-dark-mid: "#2a2a2a"
  canvas-dark-nav: "#1e1e1e"
  on-dark: "#ffffff"
  on-dark-muted: "#b0b0b0"
  m-blue: "#1c69d4"
  m-blue-deep: "#1456b0"
  m-stripe-blue: "#1c69d4"
  m-stripe-violet: "#6f00e8"
  m-stripe-red: "#e8000d"
  theme-mid: "#8e8e8e"

typography:
  display-xl:
    fontFamily: "\"BMWTypeNextLatin Light\", Helvetica, Arial, \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", Meiryo, sans-serif"
    fontSize: 40px
    fontWeight: 300
    lineHeight: 52px
    letterSpacing: normal
  display-lg:
    fontFamily: "\"BMWTypeNextLatin Light\", Helvetica, Arial, \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", Meiryo, sans-serif"
    fontSize: 40px
    fontWeight: 300
    lineHeight: 52px
    letterSpacing: normal
  display-md:
    fontFamily: "\"BMWTypeNextLatin Light\", Helvetica, Arial, \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", Meiryo, sans-serif"
    fontSize: 24px
    fontWeight: 300
    lineHeight: 31px
    letterSpacing: normal
  display-sm:
    fontFamily: "\"BMWTypeNextLatin Light\", Helvetica, Arial, \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", Meiryo, sans-serif"
    fontSize: 20px
    fontWeight: 300
    lineHeight: 28px
    letterSpacing: normal
  body-lg:
    fontFamily: "BMWTypeNextLatin, Helvetica, Arial, \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", Meiryo, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: "BMWTypeNextLatin, Helvetica, Arial, \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", Meiryo, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: "BMWTypeNextLatin, Helvetica, Arial, \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", Meiryo, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  caption:
    fontFamily: "BMWTypeNextLatin, Helvetica, Arial, \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", Meiryo, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: "BMWTypeNextLatin, Helvetica, Arial, \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", Meiryo, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
  button-sm:
    fontFamily: "BMWTypeNextLatin, Helvetica, Arial, \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", Meiryo, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
  nav-label:
    fontFamily: "BMWTypeNextLatin, Helvetica, Arial, \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", Meiryo, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  eyebrow:
    fontFamily: "BMWTypeNextLatin, Helvetica, Arial, \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", Meiryo, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 4px
  lg: 4px
  xl: 4px
  pill: 0px
  full: 0px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 56px
  4xl: 64px
  5xl: 100px
  6xl: 128px
  section: 100px

components:
  nav-bar:
    backgroundColor: "{colors.canvas-dark-nav}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-label}"
    height: 64px
    padding: "{spacing.sm} {spacing.lg}"
  nav-logo:
    backgroundColor: "{colors.canvas-dark-nav}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    padding: "{spacing.sm} {spacing.lg}"
  nav-link:
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-link-dropdown:
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
    indicatorColor: "{colors.m-stripe-blue}"
  nav-search:
    backgroundColor: "{colors.canvas-dark-nav}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "0px {spacing.lg}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "1px 6px"
  hero-band:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: "{spacing.5xl} {spacing.lg}"
  hero-eyebrow:
    textColor: "{colors.on-dark}"
    typography: "{typography.eyebrow}"
    padding: "0px 0px {spacing.xs} 0px"
  hero-headline:
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
  hero-image-panel:
    backgroundColor: "{colors.canvas-dark-mid}"
    rounded: "{rounded.none}"
  card-article:
    backgroundColor: "{colors.canvas-dark-mid}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  card-article-title:
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
  card-model:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  feature-band:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.lg}"
  section-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.lg}"
  m-stripe-accent:
    colors: "{colors.m-stripe-blue} / {colors.m-stripe-violet} / {colors.m-stripe-red}"
    height: 4px
  link-inline:
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  footer:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.lg}"
  badge-label:
    backgroundColor: "{colors.canvas-dark-mid}"
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "0px {spacing.xs}"
  ex-pricing-tier:
    description: "Default model tier card on dark surface — mirrors card-article chrome."
    backgroundColor: "{colors.canvas-dark-mid}"
    textColor: "{colors.on-dark}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: "Featured / highlighted M model — polarity shift to M blue fill with white text."
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-product-selector:
    description: "Model configurator summary card — feature row per spec line on dark canvas."
    backgroundColor: "{colors.canvas-dark-mid}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: "Build summary panel — line items per selected option, not a literal cart."
    backgroundColor: "{colors.canvas-dark}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sub-nav row. Active state uses M blue as a bottom-edge indicator bar."
    backgroundColor: "{colors.canvas-dark-nav}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: "Spec comparison table. Header uses eyebrow caps typography; body uses body-sm on dark surface."
    headerBackground: "{colors.canvas-dark-mid}"
    headerTypography: "{typography.eyebrow}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / registration card on dark canvas with zero-radius form inputs."
    backgroundColor: "{colors.canvas-dark-mid}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog surface — zero-radius card on dark canvas with hairline border."
    backgroundColor: "{colors.canvas-dark}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state frame on dark canvas — generous padding, muted caption text."
    backgroundColor: "{colors.canvas-dark-mid}"
    rounded: "{rounded.none}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification — zero-radius strip with hairline border on dark canvas."
    backgroundColor: "{colors.canvas-dark-mid}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"

---

## Overview

BMW M is a marque-within-a-marque brand — the page speaks directly to the driver who already understands what the three-color stripe means. The design surface is relentlessly dark: a charcoal-near-black `{colors.canvas-dark}` field that forces every element to earn its place. Photography does the decorative heavy lifting — a full-bleed hero image of red bodywork under motion blur is the brand's equivalent of another site's hero gradient. There is no gradient, no pattern, no texture. The car is the decoration.

Type is set in BMW's proprietary Latin face — a humanist sans in two weights: Light (300) for all display and headline work, Regular (400) for body and navigation. Headlines are ALL-CAPS with neutral letter-spacing, a sharp contrast to the tracking-negative approach common in tech brands. The face never goes bold for display; weight 300 is the hero ceiling. Bold (700) is reserved exclusively for button labels and nav CTAs — a deliberate restraint that makes the CTA stand out without introducing a new typographic personality.

Surfaces are a two-step ladder: `{colors.canvas-dark}` (the deepest charcoal field) and `{colors.canvas-dark-mid}` (a slightly elevated mid-dark for cards and inset panels). There is no light-mode surface in the captured hero experience — the brand operates entirely in the dark register on this marketing surface. The single introduced colour is `{colors.primary}` — a BMW Group corporate blue — which appears exclusively on the primary CTA button. The M-division's three-stripe accent (blue / violet / red) appears as a top-of-page bar, a 4 px chromatic flag that anchors every page.

**Key Characteristics:**
- Zero border-radius everywhere. Buttons, cards, inputs — all sharp right angles. The brand does not round anything.
- A single BMW-blue `{colors.primary}` CTA against a dark field carries every conversion action on the page.
- All-caps display headlines at weight 300, neutral tracking — the opposite of a tech brand's negative-tracking aggressive condensed voice.
- Full-bleed photography is the entire decoration system. The hero image IS the brand expression, not a supporting element.
- The M three-stripe accent (blue-violet-red) is the marque's heraldic identifier — always a thin horizontal bar, never applied as a fill or gradient on other surfaces.

## Colors

### Brand & Accent
- **M Blue** (`{colors.m-blue}` — `#1c69d4`): The single conversion colour. Used exclusively on `button-primary` — the "Experience now" CTA. Derived from the BMW Group corporate blue and the M-stripe first colour. Never used as a surface fill or text colour in the captured surfaces.
- **M Blue Deep** (`{colors.m-blue-deep}` — `#1456b0`): The pressed / hover deepening of M Blue. Not extracted independently but present as the natural shadow step of the primary.
- **M Stripe Blue** (`{colors.m-stripe-blue}` — `#1c69d4`): The first stop of the iconic BMW M three-stripe heraldic bar — matches M Blue.
- **M Stripe Violet** (`{colors.m-stripe-violet}` — `#6f00e8`): The middle stop of the M three-stripe bar. Visible in the top-of-page accent ribbon.
- **M Stripe Red** (`{colors.m-stripe-red}` — `#e8000d`): The third stop of the M three-stripe bar. Closes the chromatic trio.

### Surface
- **Canvas Dark** (`{colors.canvas-dark}` — `#1a1a1a`): The primary page background — the deep charcoal field that every element sits on.
- **Canvas Dark Mid** (`{colors.canvas-dark-mid}` — `#2a2a2a`): The elevated card surface — slightly lighter than the background, creating the brand's only surface depth cue without a drop shadow.
- **Canvas Dark Nav** (`{colors.canvas-dark-nav}` — `#1e1e1e`): The navigation bar surface — perceptibly darker than the mid card field, anchoring the top bar as a distinct zone.

### Text
- **On Dark** (`{colors.on-dark}` — `#ffffff`): All primary text on dark surfaces — headlines, nav labels, body copy on dark canvas.
- **On Dark Muted** (`{colors.on-dark-muted}` — `#b0b0b0`): Secondary text on dark — caption labels, footer secondary lines, metadata.
- **Ink** (`{colors.ink}` — `#262626`): The standard dark text token — used on light surfaces if they appear. Extracted from the CSS body text color.
- **Mute / Theme Mid** (`{colors.mute}` — `#8e8e8e`): The meta theme-color midpoint. Used as the mid-gray for disabled states and secondary labels.

### Semantic
- **On Primary** (`{colors.on-primary}` — `#ffffff`): Text on the M Blue button surface.
- **Hairline** (`{colors.hairline}` — `#3a3a3a`): The divider tone between dark surfaces — table rows, card separators, inset borders.

## Typography

### Font Family
Two weights of a single proprietary face carry the entire system:

1. **BMW Type Next Latin Light** (weight 300) — the display face. Set at 40 px for hero and section headlines, 24 px for card headlines. All display use is ALL-CAPS. Neutral letter-spacing. Never italicised, never condensed. Fallback stack: Helvetica, Arial, then a Japanese sans-serif sequence for East Asian locales.
2. **BMW Type Next Latin** (weight 400) — the body and navigation face. Same optical family, Regular cut. Used for all nav labels, body paragraphs, captions, and button labels at weight 700 (the face supports a bold variant used exclusively for CTAs).

A weight 700 (bold) of BMWTypeNextLatin is extracted from button and link components. This bold never appears in display context — it is a strictly functional weight for interactive elements.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 40px | 300 | 52px | normal | Hero headline ("BMW M CONCEPT NEUE KLASSE.") — ALL-CAPS. |
| `{typography.display-lg}` | 40px | 300 | 52px | normal | Section-level headlines at marketing band scale. |
| `{typography.display-md}` | 24px | 300 | 31px | normal | Card headlines and sub-section headings. |
| `{typography.display-sm}` | 20px | 300 | 28px | normal | Inline display micro-headings. |
| `{typography.body-lg}` | 18px | 400 | 28px | — | Lead paragraphs under section headlines. |
| `{typography.body-md}` | 16px | 400 | 24px | — | Default body paragraph and card body copy. |
| `{typography.body-sm}` | 14px | 400 | 20px | — | Secondary body, metadata, nav sub-labels. |
| `{typography.caption}` | 12px | 400 | 16px | — | Fine-print labels, logo sub-copy ("The Ultimate Driving Machine"). |
| `{typography.button-md}` | 16px | 700 | 24px | — | Primary CTA button label ("Experience now"). |
| `{typography.button-sm}` | 14px | 700 | 20px | — | Smaller interactive label contexts. |
| `{typography.nav-label}` | 16px | 400 | 24px | — | Navigation link row — "Home", "Magazine", "Models", etc. |
| `{typography.eyebrow}` | 14px | 400 | 20px | — | Pre-headline eyebrow line ("Design meets Performance."). |

### Principles
- **ALL-CAPS headlines are non-negotiable.** Every h1 and h2 in the captured surface is capitalised in content. Do not revert to sentence-case — it would destroy the marque's authoritative voice.
- **Weight 300 is the display ceiling.** The brand never sets a headline in Regular (400) or Bold (700). Light is the display weight; Regular is the text weight.
- **Bold is for actions only.** Weight 700 appears in button labels and bold link text. It never appears in headlines or body paragraphs.
- **Neutral letter-spacing throughout.** The brand does not manipulate tracking positively or negatively. The letterforms carry the voice without spacing tricks.
- **Eyebrow lines introduce headlines.** A short sentence-case line ("Design meets Performance.") sits above the all-caps headline, providing a tonal contrast and a reading entry point.

### Note on Font Substitutes
Both faces are proprietary BMW Group cuts, unavailable publicly. Open-source substitutes:
- **Light display face** — *Raleway* (300) is the closest geometric-humanist thin match. *Lato Light* (300) is a safe second.
- **Regular body face** — *Lato Regular* (400) matches the humanist rhythm. *Source Sans Pro* (400) is a comparable alternative.

## Layout

### Spacing System
- **Base unit**: 4 px. Extracted scale: 4 px · 5 px · 12 px · 16 px · 24 px · 100 px. The 100 px value is the brand's section-breathing token — used to give hero photography room.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 56 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 100 px · `{spacing.6xl}` 128 px.
- **Section padding**: hero bands use `{spacing.5xl}` (100 px) top/bottom to frame the photography. Standard feature bands use `{spacing.4xl}` to `{spacing.5xl}`.
- **Card interior padding**: article and model cards use `{spacing.md}` to `{spacing.lg}` interior. The brand's card density is moderate — not cramped, not as generous as a lifestyle brand.
- **Button padding**: primary CTA is `0px {spacing.lg}` (0 × 24 px) horizontal-only — height is determined by the line-height and the font, not an explicit height token.

### Grid & Container
- **Max width**: the nav bar appears to constrain content to approximately 1280 px centred with `{spacing.lg}` gutters.
- **Column patterns**:
  - Hero split: left-aligned text column (approximately 40% width) against a right-anchored full-bleed hero photograph.
  - Article/magazine card grid: multi-column card row, each card taking equal column share.
  - Navigation: logo + wordmark left, full link row centre-right, search icon far right.
- **Photography**: full-bleed images are the primary grid element. They do not sit inside a contained card frame at hero scale — they break to the viewport edge.

### Whitespace Philosophy
The dark canvas absorbs whitespace differently than a white surface — generous padding is essential to prevent the dark from feeling oppressive. The `{spacing.5xl}` 100 px section gap is the brand's primary breath token. Inside a hero, the headline stack sits at the left third of the viewport, with the photograph occupying the remaining two-thirds. The brand reads as composed, controlled, and deliberate — large gaps, tight interior card stacks, photography doing the emotional work.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero bands and photography panels. |
| Level 1 — Surface Step | Background shifts from `{colors.canvas-dark}` to `{colors.canvas-dark-mid}`. | Cards and article panels — the brand uses surface tone rather than shadow for elevation. |
| Level 2 — Hairline Border | 1 px solid `{colors.hairline}` border on `{colors.canvas-dark-mid}` surfaces. | Card chrome on the dark ground — a subtle edge definition without glow or drop. |

The brand does not use drop shadows in the captured surfaces. Elevation is communicated entirely through surface tone stepping — the mid-dark card reads as "above" the dark background without any shadow artifact. This is the engineering discipline of the brand: no unnecessary decoration.

### Decorative Depth
- **Full-bleed photography as depth**: the hero image of the M Concept Neue Klasse carries all spatial drama. Depth is photographic, not designed.
- **M-stripe accent bar**: the 4 px three-colour horizontal bar at the absolute top of the page is the brand's heraldic depth cue — it sits above the nav, marking the brand layer as distinct from the content layer.
- **Dark-on-dark surface stepping**: the two-stop dark palette (`{colors.canvas-dark}` / `{colors.canvas-dark-mid}`) creates card depth without any shadow, consistent with the brand's zero-decoration philosophy.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Everything. Buttons, cards, inputs, image frames — the brand uses zero radius universally. |
| `{rounded.xs}` | 2px | Reserved token; not observed in captured surfaces. |
| `{rounded.sm}` | 4px | Reserved token; not observed in captured surfaces. |

The BMW M design system on this surface is categorically zero-radius. The absence of rounding is as deliberate as another brand's use of pill shapes — it communicates precision, sharpness, and engineering exactness. Do not introduce rounded corners.

### Photography Geometry
- **Hero image**: full-bleed landscape, zero-radius frame, extends to the viewport edge. The car subject is photographed at speed — motion blur reinforces the performance voice.
- **Secondary editorial image**: a tighter crop detail (shifter / interior component) sits inset in the lower-left quadrant of the hero, overlapping the main photograph. Zero-radius square frame.
- **Navigation bar**: sharp-cornered horizontal band, zero-radius, anchored to the top of the viewport.

## Components

### Navigation

**`nav-bar`** — the sticky dark top navigation.
- Background `{colors.canvas-dark-nav}`, text `{colors.on-dark}`, height 64 px, padding `{spacing.sm} {spacing.lg}`. Layout: BMW roundel + M logo + "The Ultimate Driving Machine" wordmark at left; "Home / Magazine / Models / M Motorsport / AREA M / Heritage / More" link row at centre-right; search icon at far right.

**`nav-link`** — the horizontal nav link items.
- Text `{colors.on-dark}`, set in `{typography.nav-label}`, padding `{spacing.xs} {spacing.sm}`, shape `{rounded.none}`. Dropdown-bearing links show a chevron indicator.

**`nav-link-dropdown`** — nav links with expandable sub-menus ("M Motorsport ▾", "AREA M ▾", "Heritage ▾", "More ▾").
- Same chrome as `nav-link` with a downward-chevron glyph. Drop indicator in `{colors.m-stripe-blue}` on active state.

**`nav-search`** — the circular search icon button at the far right of the nav.
- Background `{colors.canvas-dark-nav}`, icon `{colors.on-dark}`, shape `{rounded.none}`, padding `{spacing.xs}`. Circular in appearance but rendered with zero CSS radius — the circle is the icon itself.

### Hero & Bands

**`hero-band`** — the full-viewport dark hero with split photography.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, padding `{spacing.5xl} {spacing.lg}`. Inside: eyebrow line in `{typography.eyebrow}`, ALL-CAPS headline in `{typography.display-xl}`, CTA `button-primary` below. Photography occupies the right two-thirds of the viewport as a full-bleed panel.

**`hero-eyebrow`** — the sentence-case pre-headline line above the ALL-CAPS hero headline.
- Text `{colors.on-dark}`, set in `{typography.eyebrow}`, bottom padding `{spacing.xs}`. Example: "Design meets Performance."

**`hero-image-panel`** — the full-bleed photography zone inside the hero.
- Background `{colors.canvas-dark-mid}` (placeholder), shape `{rounded.none}`. At full size, the photography breaks to the viewport right edge.

**`feature-band`** — a secondary dark section hosting editorial content and photography.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, padding `{spacing.5xl} {spacing.lg}`. Section headline in `{typography.display-lg}`.

**`section-band-dark`** — the standard full-width dark-canvas content band.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, padding `{spacing.5xl} {spacing.lg}`.

**`m-stripe-accent`** — the 4 px three-colour heraldic stripe at the very top of the page.
- Three-stop horizontal bar: `{colors.m-stripe-blue}` / `{colors.m-stripe-violet}` / `{colors.m-stripe-red}`, height 4 px. This is the brand's marque identifier — never scaled up, never used as a fill.

### Cards

**`card-article`** — the editorial / magazine article card.
- Background `{colors.canvas-dark-mid}`, text `{colors.on-dark}`, padding `{spacing.md}`, shape `{rounded.none}`. Title in `{typography.display-md}`, body in `{typography.body-md}`.

**`card-model`** — the model showcase card.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, padding `{spacing.lg}`, shape `{rounded.none}`. Model name in `{typography.display-md}`.

### Buttons & Actions

**`button-primary`** — the single conversion CTA ("Experience now").
- Background `{colors.primary}` (`#1c69d4`), text `{colors.on-primary}`, label in `{typography.button-md}` (16 px / 700), padding `0px {spacing.lg}`, shape `{rounded.none}` (0 px radius — measured from the live CTA). The only coloured interactive element on the page.

**`button-ghost`** — the transparent dark-surface button variant used in nav and secondary contexts.
- Background `transparent`, text `{colors.on-dark}`, label in `{typography.button-md}`, padding `1px 6px`, shape `{rounded.none}`.

### Typography & Labels

**`hero-headline`** — the primary hero heading component.
- Text `{colors.on-dark}`, set in `{typography.display-xl}` (40 px / 300 / 52 px line-height), ALL-CAPS content.

**`badge-label`** — small inline metadata label.
- Background `{colors.canvas-dark-mid}`, text `{colors.on-dark-muted}`, set in `{typography.caption}`, padding `0px {spacing.xs}`, shape `{rounded.none}`.

**`link-inline`** — body-copy inline links.
- Text `{colors.primary}`, set in `{typography.body-md}`.

### Footer

**`footer`** — the bottom navigational zone.
- Background `{colors.canvas-dark}`, text `{colors.on-dark-muted}`, padding `{spacing.4xl} {spacing.lg}`, set in `{typography.body-sm}`. Column headers in `{typography.eyebrow}` (Regular, not bold — the brand does not use bold for structural labels outside of CTAs).

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (`#1c69d4`) exclusively for the primary CTA button. It is the only saturated colour on the page — its power comes from isolation.
- Use ALL-CAPS for every headline rendered in `{typography.display-xl}` and `{typography.display-lg}`. The voice is the capslock.
- Set display headlines in weight 300. The lightness of the face against the dark canvas is the brand's typographic tension.
- Use zero border-radius (`{rounded.none}`) on every interactive and container element. Sharpness is the brand.
- Let full-bleed photography carry all decorative and emotional weight. The design system's job is to stay out of the photograph's way.
- Apply the M-stripe three-colour bar (`{colors.m-stripe-blue}` / `{colors.m-stripe-violet}` / `{colors.m-stripe-red}`) only as a thin horizontal accent ribbon — it is heraldic, not decorative.
- Cycle surfaces between `{colors.canvas-dark}` and `{colors.canvas-dark-mid}` to create depth without shadows.

### Don't
- Don't introduce rounded corners. Not 4 px, not 2 px — the brand is categorically square-cornered.
- Don't set a headline in sentence-case. ALL-CAPS is the display convention; changing case breaks the authoritative voice.
- Don't promote a headline to weight 400 or 700. Light (300) is the ceiling for display.
- Don't use `{colors.primary}` BMW blue for text, surfaces, or decorative fills. It lives on the CTA button and nowhere else.
- Don't scale the M-stripe accent into a large fill or background gradient. It is a 4 px bar — that is its only sanctioned dimension.
- Don't introduce a light-mode surface on the dark hero. The dark canvas is the brand experience; a white surface would break the performance register entirely.
- Don't add drop shadows. The brand's depth system is surface-tone stepping only — shadows introduce a softness incompatible with the marque's precision language.
