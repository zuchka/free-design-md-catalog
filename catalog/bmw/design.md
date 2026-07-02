---
version: alpha
name: BMW USA
description: "BMW USA's design language is a study in controlled austerity: a single proprietary sans-serif carrying every word at light weight, a near-black ink surface on pure white canvas, and one electric blue reserved exclusively for the primary CTA. The hero is always a full-bleed photographic band — dark automotive imagery overlaid with white all-caps headlines set with generous tracking — and every button is a sharp-cornered rectangle, zero radius, no exceptions. The brand earns its luxury read not through ornament but through restraint: no gradients, no decorative shadows, no rounded softness anywhere in the chrome."

colors:
  primary: "#1c69d4"
  on-primary: "#ffffff"
  ink: "#262626"
  ink-deep: "#000000"
  body: "#414141"
  mute: "#767676"
  hairline: "#d4d4d4"
  hairline-strong: "#a0a0a0"
  canvas: "#ffffff"
  canvas-soft: "#f2f2f2"
  canvas-dark: "#000000"
  canvas-hero: "#1a1a1a"
  link: "#1c69d4"
  on-dark: "#ffffff"
  button-secondary-bg: "#efefefef"
  button-secondary-text: "#000000"
  success: "#1c69d4"
  error: "#cc0000"
  warning: "#f5a623"

typography:
  display-xl:
    fontFamily: "bmwTypeNextWeb, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 300
    lineHeight: 56px
    letterSpacing: 1px
  display-lg:
    fontFamily: "bmwTypeNextWeb, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 35px
    fontWeight: 300
    lineHeight: 50px
    letterSpacing: normal
  display-md:
    fontFamily: "bmwTypeNextWeb, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 300
    lineHeight: 38px
    letterSpacing: normal
  display-sm:
    fontFamily: "bmwTypeNextWeb, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 22px
    fontWeight: 300
    lineHeight: 32px
    letterSpacing: normal
  body-lg:
    fontFamily: "bmwTypeNextWeb, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 300
    lineHeight: 28px
  body-md:
    fontFamily: "bmwTypeNextWeb, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 300
    lineHeight: 24px
  body-md-strong:
    fontFamily: "bmwTypeNextWeb, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  body-sm:
    fontFamily: "bmwTypeNextWeb, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 300
    lineHeight: 20px
  body-sm-strong:
    fontFamily: "bmwTypeNextWeb, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  caption:
    fontFamily: "bmwTypeNextWeb, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 300
    lineHeight: 16px
  button-md:
    fontFamily: "bmwTypeNextWeb, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 20px
  button-lg:
    fontFamily: "bmwTypeNextWeb, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  nav-label:
    fontFamily: "bmwTypeNextWeb, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px

rounded:
  none: 0px
  xs: 0px
  sm: 0px
  md: 0px
  lg: 0px
  xl: 0px
  pill: 0px
  full: 0px

spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 48px
  4xl: 64px
  5xl: 96px
  section: 96px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    height: 64px
    padding: "{spacing.sm} {spacing.lg}"
    borderBottom: "1px solid {colors.hairline}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.nav-label}"
    padding: "{spacing.sm} {spacing.md}"
    rounded: "{rounded.none}"
  nav-cta-dealer:
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.sm} {spacing.md}"
    rounded: "{rounded.none}"
  nav-icon-button:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
    border: "1px solid {colors.ink}"
  button-ghost-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
    border: "1px solid {colors.on-dark}"
  button-ui:
    backgroundColor: "{colors.button-secondary-bg}"
    textColor: "{colors.button-secondary-text}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "1px 6px"
  hero-band:
    backgroundColor: "{colors.canvas-hero}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.lg}"
  hero-headline:
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    letterSpacing: 1px
    textTransform: uppercase
  card-model:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  card-offer:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  feature-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.5xl} {spacing.lg}"
  feature-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    padding: "{spacing.5xl} {spacing.lg}"
  nav-mega-menu:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.lg}"
    borderTop: "1px solid {colors.hairline}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-strong}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
    height: 40px
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.5xl} {spacing.lg}"
  footer-link:
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  badge-disclaimer:
    textColor: "{colors.mute}"
    typography: "{typography.caption}"
    padding: "{spacing.xxs} {spacing.sm}"
  cookie-banner:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"

  ex-pricing-tier:
    description: "Default model trim / offer card. Hairline border on canvas surface; zero-radius corners are non-negotiable."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: "Featured offer or highlighted trim — inverted to canvas-dark with white text and blue CTA."
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-product-selector:
    description: "Model selector / configurator summary card used in Build Your Own flow."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: "Finance / lease summary panel — line items per option, not a literal cart."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar or mega-menu nav row. Active state uses brand blue as left-edge indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.md}"
  ex-data-table-cell:
    description: "Spec comparison table chrome. Header uses body-sm-strong uppercase; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.body-sm-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "BMW ID sign-in card. Zero-radius form-input primitives on canvas surface."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog — canvas surface, zero radius, hairline border, no decorative shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty inventory / no-results frame. Canvas-soft background, generous padding."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification — flat canvas card, hairline border, zero radius."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"

---

## Overview

BMW USA operates from one of the most rigorous constraints in automotive web design: every surface is either pure white or near-black, the entire type system runs in a single proprietary light-weight sans, and the only permitted accent colour is a corporate electric blue that appears on exactly one element — the primary CTA button. There is no gradient, no illustration, no rounded corner anywhere on the page. The brand earns its luxury read entirely through photography and spatial discipline.

The hero is a full-bleed dark photographic band. White all-caps headlines sit over the image at a generous 35 px with slightly positive letter-spacing — the opposite of the negative-tracking trend dominating tech brands. The copy is short and directive ("FIND YOUR DRIVE."), never ornate. Below the headline, two zero-radius buttons sit side by side: a solid `{colors.primary}` blue pill for the primary action and a white-with-ink-border ghost for the secondary. No other coloured elements appear in the hero.

The white canvas sections below the hero follow an austere grid: model photography with flat drop no-shadow cards, light `{colors.canvas-soft}` fills used sparingly as inset regions, and hairline `{colors.hairline}` rules as the only dividers. Spacing is either very tight (4–12 px between inline elements) or very wide (96 px between sections) — the brand does not use a graduated mid-range rhythm. The result reads as engineered rather than decorated, which is precisely the brand posture.

Navigation is a flat white bar with medium-weight nav labels and a dealer-locator text link on the far right. There is no hero gradient, no floating card shadow, no badge accent. The BMW roundel sits top-left and the system chrome disappears entirely behind the photographic hero the moment the page scrolls.

## Colors

### Brand & Accent
- **BMW Blue** (`{colors.primary}` — `#1c69d4`): The single permitted accent. Used exclusively on the primary CTA button — never on text, never as a background for non-interactive surfaces. Its presence is deliberate and rare, which is what makes it read as premium.
- **Link** (`{colors.link}` — `#1c69d4`): The same electric blue is reused as the inline body-link colour, keeping the accent language coherent.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The default page surface — model-card backgrounds, nav bar, modal surfaces. Pure white, no tinting.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f2f2f2`): The inset-region fill used on offer cards and spec table headers. A 95% white that reads as recessed without introducing a colour.
- **Canvas Hero** (`{colors.canvas-hero}` — `#1a1a1a`): The near-black used as the hero band's image fallback and dark overlay base. Not quite pure black.
- **Canvas Dark** (`{colors.canvas-dark}` — `#000000`): Pure black used for the footer and polarity-flipped feature bands.
- **Button Secondary BG** (`{colors.button-secondary-bg}` — `#efefef`): The OS-default browser button background captured in the extraction. Used on small utility buttons.

### Text
- **Ink** (`{colors.ink}` — `#262626`): The primary heading and body text colour on light surfaces. H2 and H3 headings are set in this tone.
- **Body** (`{colors.body}` — `#414141`): Secondary body copy, nav-link text, and navigation labels — one step lighter than ink.
- **Mute** (`{colors.mute}` — `#767676`): Disclaimer lines, fine-print captions, image attribution ("Some images may be computer generated").
- **On Dark** (`{colors.on-dark}` — `#ffffff`): All text and CTA labels on dark photographic or black-canvas surfaces. H1 on the hero is set in this token.
- **Button Secondary Text** (`{colors.button-secondary-text}` — `#000000`): Labels on the utility button component.

### Structure
- **Hairline** (`{colors.hairline}` — `#d4d4d4`): 1 px dividers — the nav bar bottom border, card borders, table row separators.
- **Hairline Strong** (`{colors.hairline-strong}` — `#a0a0a0`): Slightly heavier rule for form input borders and stronger separators.

### Semantic
- **Error** (`{colors.error}` — `#cc0000`): Form validation and destructive action state.
- **Warning** (`{colors.warning}` — `#f5a623`): Caution / pending status indicators.

## Typography

### Font Family
One face carries everything: **bmwTypeNextWeb**, a proprietary geometric sans cut for the BMW Group. Weight 300 (light) is the default for all headlines, body, and captions — a deliberate softness that counters the hard-edged zero-radius geometry of the buttons and cards. Weight 500 (medium) is used only for button labels, nav labels, and bolded inline body. There is no weight 700 or heavier anywhere on the page.

Fallback stack: `"Helvetica Neue", Helvetica, Arial, sans-serif` — the brand's own fallback, confirmed in the deterministic extraction.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 300 | 56px | 1px | Large hero treatment at maximum viewport width. |
| `{typography.display-lg}` | 35px | 300 | 50px | normal | Hero headline ("FIND YOUR DRIVE."). Set all-caps via text-transform, not a separate face. |
| `{typography.display-md}` | 28px | 300 | 38px | normal | Section headlines on white canvas bands. |
| `{typography.display-sm}` | 22px | 300 | 32px | normal | Card cluster headlines, subsection labels. |
| `{typography.body-lg}` | 18px | 300 | 28px | — | Lead paragraphs under hero or section headlines. |
| `{typography.body-md}` | 16px | 300 | 24px | — | Default body paragraph, model-card body copy. |
| `{typography.body-md-strong}` | 16px | 500 | 24px | — | Bolded inline body, table header labels. |
| `{typography.body-sm}` | 14px | 300 | 20px | — | Nav links, secondary body, footer link rows. |
| `{typography.body-sm-strong}` | 14px | 500 | 20px | — | Nav CTA labels, emphasized table cells. |
| `{typography.caption}` | 12px | 300 | 16px | — | Disclaimers, image attribution, fine print. |
| `{typography.button-md}` | 15px | 500 | 20px | — | Utility button labels (captured from extraction). |
| `{typography.button-lg}` | 16px | 500 | 24px | — | Primary and secondary marketing CTA labels. |
| `{typography.nav-label}` | 14px | 500 | 20px | — | Top nav items ("Models", "Build Your Own", etc.). |

### Principles
- **All-caps headlines on dark surfaces are set via text-transform, not a separate typeface.** The font weight stays at 300 — the letterspacing reads as slightly positive rather than negative, giving the automotive brand its distinct upright authority.
- **Weight 300 is the voice.** The brand never promotes its headlines to 700 or bold. The lightness of bmwTypeNextWeb at 300 is the luxury signal — dense, bold type would feel mass-market.
- **One face, no mono.** Unlike tech brands that reach for a monospace for technical labels, BMW's system uses the same geometric sans for everything. There is no code face.
- **Sentence-case for body, all-caps for hero.** Secondary headlines and body copy are sentence-case; hero headlines are all-caps. The brand does not mix these within a single visual tier.

### Note on Font Substitutes
bmwTypeNextWeb is a proprietary corporate typeface and is not publicly available. The closest open-source substitute for the light display weight is **Outfit** (weight 300) or **DM Sans** (weight 300) — both are geometric and share the low-contrast stroke structure. For the medium-weight labels, **Inter** (weight 500) is a passable second choice.

## Layout

### Spacing System
- **Base unit**: 4 px. The scale extracted is `4 / 6 / 8 / 12 / 24 / 96 px` — a compressed lower end and a dramatic jump to 96 px for section separation.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px.
- **Section padding**: marketing bands use `{spacing.5xl}` 96 px top and bottom. The hero is full-bleed with no section padding — it extends to viewport edges.
- **Card interior padding**: model cards use `{spacing.md}` 12 px; offer cards use `{spacing.lg}` 24 px.
- **Inline gap**: button rows use `{spacing.md}` 12 px between siblings; nav items use `{spacing.md}` between labels.

### Grid & Container
- **Max width**: approximately 1280 px; content centres with horizontal gutters of `{spacing.lg}` 24 px on desktop, `{spacing.md}` 12 px on mobile.
- **Column patterns**:
  - Hero: full-bleed photographic with overlaid copy left-aligned at ~50% width.
  - Model card grid: typically 3–4 up at desktop, 1-up at mobile.
  - Offer card row: 2–3 up with equal-width cards.
  - Feature band: single-column centred headline with full-bleed imagery.

### Whitespace Philosophy
The brand operates at two extremes: tight inline spacing (4–12 px) and wide section separation (96 px). There is no graduated mid-range rhythm. This binary approach — packed elements inside a card, vast space between sections — is the primary whitespace cue that signals luxury. The page breathes at the section level; it is dense at the component level.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hero stacks vertically; nav collapses to hamburger; model grids go 1-up; button row stacks. |
| Tablet | 768–1023px | Model grids go 2-up; nav still horizontal. |
| Desktop | 1024–1279px | Full 3–4 up grids; hero split layout active. |
| Wide | ≥ 1280px | Content caps at ~1280 px; hero photography fills edge to edge. |

#### Touch Targets
Primary and secondary CTA buttons render at approximately 48 px tall with `{spacing.md}` 12 px vertical padding. Nav links meet the 44 px touch target through generous hit areas even though the visible label is smaller.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero photographic bands and dark feature sections. |
| Level 1 — Hairline Border | `1px solid {colors.hairline}` | Default card chrome — the brand's only card-edge cue. No drop shadow. |
| Level 2 — Soft Canvas Lift | `{colors.canvas-soft}` background fill, no shadow. | Offer cards and inset spec regions — depth through surface tone, not shadow. |
| Level 3 — Cookie / Modal Overlay | `1px solid {colors.hairline}` border on canvas surface, page overlay behind. | Cookie consent banner and modal dialogs. |

BMW USA uses no drop-shadow elevation. Depth is communicated entirely through surface-colour contrast (white card on soft-gray ground) and hairline borders. This is deliberate — decorative shadows would undercut the austere, engineered aesthetic.

## Shapes

### Border Radius Scale
The BMW USA design system uses a universal zero-radius across every interactive and container element. Buttons are sharp rectangles. Cards are sharp rectangles. Inputs are sharp rectangles. The cookie banner is a sharp rectangle. There are no rounded corners, no pills, no circles used as decorative shapes anywhere in the captured surface.

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Everything — buttons, cards, inputs, nav, modal, badge. The single radius for the entire system. |

This is the most distinctive geometric decision in the system. The zero-radius constraint communicates precision engineering and should never be relaxed in UI derived from this design language. Introducing even a 4 px radius on a button would immediately read as off-brand.

## Components

### Buttons

**`button-primary`** — the solid blue CTA. Background `{colors.primary}` (#1c69d4), text `{colors.on-primary}`, label `{typography.button-lg}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.none}`. This is the rarest element on the page — its blue reads as premium precisely because nothing else on the surface is blue. Seen as "Offer details" and "See all offers".

**`button-secondary`** — the ghost CTA paired with primary. Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, same typography and padding. Used for secondary actions like "Build yours". No radius.

**`button-ghost-on-dark`** — the ghost CTA on dark hero surfaces. Same as button-secondary but border and text are `{colors.on-dark}` white. Used where the hero image is too dark for an ink border to read.

**`button-ui`** — the small utility button (captured from browser extraction). Background `{colors.button-secondary-bg}`, text `{colors.button-secondary-text}`, label `{typography.button-md}` (15 px / 500), padding `1px 6px`, `{rounded.none}`.

### Navigation

**`nav-bar`** — the sticky top bar. Background `{colors.canvas}`, text `{colors.ink}`, height 64 px, padding `{spacing.sm} {spacing.lg}`, 1 px hairline bottom border. Layout: BMW roundel far left, nav link row centre-left, dealer locator text + account icon + search icon far right.

**`nav-link`** — the top-level nav items ("Models", "Build Your Own", "Shopping", "BMW Electric", "Owners"). Text `{colors.body}`, `{typography.nav-label}`, padding `{spacing.sm} {spacing.md}`, `{rounded.none}`. Chevron icon follows each label.

**`nav-cta-dealer`** — the "Choose your local BMW Center" utility link in the right cluster. Text `{colors.body}`, `{typography.body-sm}`, inline with a location pin icon.

**`nav-icon-button`** — the account and search icon buttons at far right. Background `{colors.canvas}`, `{rounded.none}`, padding `{spacing.sm}`.

**`nav-mega-menu`** — the full-width dropdown overlay triggered by nav links. Background `{colors.canvas}`, text `{colors.ink}`, `{typography.body-sm}`, padding `{spacing.lg}`, 1 px hairline top border separating it from the nav bar.

### Hero & Bands

**`hero-band`** — the full-bleed photographic hero. Background fallback `{colors.canvas-hero}`, text `{colors.on-dark}`, padding `{spacing.5xl} {spacing.lg}`. Copy sits left-aligned over the image: headline in `{typography.display-lg}` all-caps, body in `{typography.body-lg}`, then a horizontal button row.

**`hero-headline`** — the all-caps white headline rendered over the hero image. Text `{colors.on-dark}`, `{typography.display-lg}`, text-transform uppercase. The punctuation is retained ("FIND YOUR DRIVE.") — the period is part of the brand voice.

**`feature-band`** — white canvas section below the hero for model discovery or promotional content. Background `{colors.canvas}`, text `{colors.ink}`, `{typography.display-md}`, padding `{spacing.5xl} {spacing.lg}`.

**`feature-band-dark`** — polarity-flipped band when the brand wants photographic drama below the hero. Background `{colors.canvas-dark}`, text `{colors.on-dark}`, same typography and padding as `feature-band`.

### Cards

**`card-model`** — the individual model tile in the vehicle grid. Background `{colors.canvas}`, text `{colors.ink}`, `{typography.body-md}`, padding `{spacing.md}`, `{rounded.none}`. Hosts a vehicle photograph above the copy and a link/CTA below.

**`card-offer`** — the promotional offer tile (APR / lease / loyalty offers). Background `{colors.canvas-soft}`, text `{colors.ink}`, `{typography.body-md}`, padding `{spacing.lg}`, `{rounded.none}`. Seen partially at the bottom of the screenshot.

### Forms & Inputs

**`form-input`** — the canonical text input used in the dealer finder and build configurator. Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline-strong}`, `{typography.body-md}`, padding `{spacing.sm} {spacing.md}`, height 40 px, `{rounded.none}`.

### Footer & Utility

**`footer`** — the bottom navigation block. Background `{colors.ink}` (near-black), text `{colors.on-dark}`, `{typography.body-sm}`, padding `{spacing.5xl} {spacing.lg}`.

**`footer-link`** — links inside the footer column rows. Text `{colors.on-dark}`, `{typography.body-sm}`.

**`link-inline`** — body-copy inline links. Text `{colors.link}` (#1c69d4), `{typography.body-md}`.

**`badge-disclaimer`** — the fine-print attribution line ("Some images may be computer generated"). Text `{colors.mute}`, `{typography.caption}`, padding `{spacing.xxs} {spacing.sm}`. Not interactive.

**`cookie-banner`** — the consent overlay. Background `{colors.canvas}`, text `{colors.body}`, `{typography.body-sm}`, padding `{spacing.lg}`, 1 px solid `{colors.hairline}` border, `{rounded.none}`. Close icon top-right. Contains inline bold links for privacy policy and opt-out.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#1c69d4) exclusively for the primary CTA button. It must appear on nothing else — no text links, no decorative fills, no hover states on non-interactive surfaces.
- Use `{rounded.none}` 0 px on every interactive and container element. The zero-radius rectangle IS the BMW USA geometric identity.
- Set all hero headlines all-caps at `{typography.display-lg}` weight 300 on `{colors.on-dark}` white. The light weight + all-caps combination is the brand's most distinctive typographic gesture.
- Pair `button-primary` and `button-secondary` as a two-button row. Never use the blue primary button alone without the ghost secondary — the pairing is the pattern.
- Use photography as the primary decoration system. The hero's depth and drama come from automotive imagery, not gradients or illustration.
- Separate page sections with `{spacing.5xl}` 96 px gaps. The dramatic whitespace between bands is the luxury signal.
- Use `{colors.canvas-soft}` (#f2f2f2) as the only permitted inset region fill. No other surface tint is in the system.

### Don't
- Don't introduce rounded corners anywhere. A 4 px radius on a button would immediately break the brand's engineered precision read.
- Don't use `{colors.primary}` blue for text, backgrounds, or decorative elements. It lives on the CTA button only.
- Don't promote bmwTypeNextWeb (or its substitute) above weight 500. The brand's display ceiling is medium — no bold, no heavy.
- Don't use gradients or drop shadows for elevation. BMW USA communicates depth through surface-colour contrast and hairline borders exclusively.
- Don't set hero headlines in sentence case. All-caps is the hero-band convention; mixing case registers breaks the brand's directorial tone.
- Don't miniaturise the photographic hero into a card thumbnail without the `{rounded.none}` constraint applied to the image frame.
- Don't introduce a secondary accent colour. The blue/white/near-black triad is the complete surface palette — adding a third accent (green, amber, violet) dilutes the restraint that defines the brand.
