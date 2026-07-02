---
version: alpha
name: Zapier
description: "Zapier's design language is a warm-neutral operator platform — a cream-white canvas the color of aged paper (#fffefb) anchored by a deep aubergine-plum primary (#381933) that appears almost burgundy in low light, offset by a signature orange-flame accent (#ff4a00 range, visible in the hero CTA and stat numerals) that provides the only moment of high-saturation energy on the page. Two typefaces carry all the weight: Degular Display, a soft geometric display face at weight 500, brings editorial warmth to headlines with slightly negative tracking at larger sizes; Inter handles every body sentence and UI label with clean neutrality at weight 400. The shape vocabulary is deliberately restrained — 4 px radii across buttons, cards, and inputs, never pillified, never square-zero — a signal that this is a productivity tool, not a consumer app. Whitespace is generous and structured in powers-of-two multiples of 4 px."
colors:
  primary: "#381933"
  on-primary: "#fffefb"
  accent: "#ff4a00"
  accent-hover: "#e04000"
  ink: "#201515"
  body: "#605d52"
  mute: "#9c9484"
  hairline: "#e8e3db"
  hairline-strong: "#c9c2b8"
  canvas: "#fffefb"
  canvas-soft: "#f8f4f0"
  canvas-soft-2: "#f0ebe4"
  surface-card: "#f8f4f0"
  on-surface-dark: "#fffefb"
  link: "#381933"
  link-accent: "#ff4a00"
  success: "#00875a"
  error: "#d0021b"
  warning: "#f5a623"
  badge-bg: "#f0ebe4"
  badge-text: "#605d52"
  stat-accent: "#ff4a00"
  compliance-mute: "#605d52"
typography:
  display-xl:
    fontFamily: '"Degular Display", DegularDisplay, "DegularDisplay Fallback", Inter, system-ui, sans-serif'
    fontSize: 56px
    fontWeight: 500
    lineHeight: 56px
    letterSpacing: -1px
  display-lg:
    fontFamily: '"Degular Display", DegularDisplay, "DegularDisplay Fallback", Inter, system-ui, sans-serif'
    fontSize: 40px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: -0.8px
  display-md:
    fontFamily: '"Degular Display", DegularDisplay, "DegularDisplay Fallback", Inter, system-ui, sans-serif'
    fontSize: 28px
    fontWeight: 500
    lineHeight: 35px
    letterSpacing: -1px
  display-sm:
    fontFamily: '"Degular Display", DegularDisplay, "DegularDisplay Fallback", Inter, system-ui, sans-serif'
    fontSize: 20px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: -0.4px
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
  body-sm:
    fontFamily: Inter, "Inter Fallback", system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: Inter, "Inter Fallback", system-ui, sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  caption:
    fontFamily: Inter, "Inter Fallback", system-ui, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: 0.48px
  caption-upper:
    fontFamily: Inter, "Inter Fallback", system-ui, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 18px
    letterSpacing: 0.48px
  eyebrow:
    fontFamily: Inter, "Inter Fallback", system-ui, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 18px
    letterSpacing: 0.48px
  button-md:
    fontFamily: Inter, "Inter Fallback", system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  button-lg:
    fontFamily: Inter, "Inter Fallback", system-ui, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  stat-display:
    fontFamily: '"Degular Display", DegularDisplay, "DegularDisplay Fallback", Inter, system-ui, sans-serif'
    fontSize: 40px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: -0.8px
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  button: 4px
  card: 4px
  md: 6px
  lg: 8px
  xl: 12px
  pill: 100px
  full: 9999px
spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 32px
  3xl: 40px
  4xl: 48px
  5xl: 64px
  6xl: 96px
  section: 160px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 56px
    padding: "{spacing.sm} {spacing.lg}"
    borderBottom: "{colors.hairline}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.sm} {spacing.md}"
    rounded: "{rounded.sm}"
  nav-cta-signup:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.lg}"
  nav-cta-login:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 4px {spacing.lg} {spacing.sm}
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
    borderColor: "{colors.hairline-strong}"
  button-google-sso:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
    borderColor: "{colors.hairline-strong}"
  tab-segment:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    borderColor: "{colors.hairline}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  eyebrow-label:
    textColor: "{colors.body}"
    typography: "{typography.eyebrow}"
    letterSpacing: 0.48px
  stat-block:
    textColor: "{colors.stat-accent}"
    typography: "{typography.stat-display}"
    labelTypography: "{typography.body-sm}"
    labelColor: "{colors.body}"
  card-feature:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  card-integration:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    borderColor: "{colors.hairline}"
  card-app-logo:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    borderColor: "{colors.hairline}"
    padding: "{spacing.md}"
  badge-compliance:
    backgroundColor: "{colors.badge-bg}"
    textColor: "{colors.compliance-mute}"
    typography: "{typography.caption-upper}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.sm}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-strong}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
    height: 40px
  footer:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.lg}"
  link-inline:
    textColor: "{colors.link-accent}"
    typography: "{typography.body-md}"
  showcase-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.5xl} {spacing.lg}"
  section-band-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-md}"
    padding: "{spacing.5xl} {spacing.lg}"
  ex-pricing-tier:
    description: Default pricing tier card on canvas-soft surface with hairline border.
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-pricing-tier-featured:
    description: Featured/highlighted tier — plum primary fill with cream text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-product-selector:
    description: What's Included summary card for integration or plan comparison.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary — line items per add-on plan tier.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses accent as left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.accent}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.sm}"
  ex-data-table-cell:
    description: Table chrome. Header uses eyebrow uppercase caption; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.eyebrow}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card with form-input primitives inside on canvas-soft surface.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-modal-card:
    description: Modal dialog surface — card-feature chrome with soft drop shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-empty-state-card:
    description: Empty-state frame — generous padding on canvas-soft.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.4xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — card-feature chrome with compact padding.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Zapier's surface is a warm, papery calm — its canvas (`{colors.canvas}`) is not a pure white but a cream-near-white (#fffefb), the kind of tone that reads as considered rather than clinical. The primary plum (`{colors.primary}`, #381933) functions as the brand's authority mark: it anchors the primary CTA, the deep polarity-flip bands, and the logo. That aubergine hue never competes for attention mid-page; instead the real kinetic energy comes from the flame-orange accent (`{colors.accent}`) that appears in the hero CTA button and the three large stat numerals — 450K+, 9,000+, 3.39M+ — where the brand lets its utility brag without restraint.

Two type faces run the system. Degular Display, a soft geometric display face at weight 500 only, handles every headline from the 56 px hero down to 28 px card titles. It carries a slight negative letter-spacing at larger sizes that gives the brand an editorial relaxation you would not expect from a workflow tool. Inter handles every body paragraph, UI label, navigation link, and button label at weight 400 — workhorse-neutral, correctly sized at 14 px for buttons and labels. The combination of a warm display face plus a neutral utility sans is the exact typographic signal for "powerful but approachable."

Shapes are deliberately flat and consistent: 4 px corner radius on every button, every card, every input — no pills, no zeros. The consistency is the point. A platform serving 3 million businesses cannot afford gestural shape variety; it needs predictability. The spacing system is a 4 px base grid scaled conservatively — heavy use of 6 px, 8 px, 12 px, and 16 px in component interiors, rising to 48 px, 64 px, and 160 px for section vertical rhythm.

The brand's decoration system is the orange stat numerals and the integration-logo grid — not a gradient, not an illustration. When the page needs depth, it cycles from cream canvas to warm-gray `{colors.canvas-soft}` to the plum polarity-flip; that three-tone ladder is the entire depth vocabulary.

## Colors

### Brand & Accent
- **Primary Plum** (`{colors.primary}` — `#381933`): The brand's authority anchor. Appears in the logo, the primary email CTA button, the deep polarity-flip section bands. Never used as a tint or gradient — always solid.
- **Accent Orange** (`{colors.accent}` — `#ff4a00`): The sole high-saturation surface on the page. Used for the "Sign up" nav CTA and the three large stat numerals that quantify Zapier's scale. The brand's conversion color.
- **Accent Hover** (`{colors.accent-hover}` — `#e04000`): The deepened orange on interactive hover; not visible as a static surface but consistent with how orange CTAs darken on press across the page.

### Surface
- **Canvas** (`{colors.canvas}` — `#fffefb`): The default page background — warm near-white with a very faint yellow undertone. Reads as cream rather than pure white.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f8f4f0`): The brand's card and secondary-section background. Appears in the "Get started in seconds" panel, feature cards, and footer. Warm gray-beige, visibly warmer than a 98% gray.
- **Canvas Soft 2** (`{colors.canvas-soft-2}` — `#f0ebe4`): A slightly deeper inset surface used for badge fills and hover states.
- **Hairline** (`{colors.hairline}` — `#e8e3db`): Standard 1 px border for cards, inputs, dividers. Warm-toned so it blends with the cream canvas.
- **Hairline Strong** (`{colors.hairline-strong}` — `#c9c2b8`): A stronger divider tone for input borders and the secondary button outline.

### Text
- **Ink** (`{colors.ink}` — `#201515`): Near-black with a warm red undertone — all headings and primary body text on light surfaces.
- **Body** (`{colors.body}` — `#605d52`): Mid-tone warm gray for secondary text, nav links (inactive), footer body, eyebrow labels. The h2 eyebrow line color.
- **Mute** (`{colors.mute}` — `#9c9484`): Lowest-priority text — fine print, compliance caption lines.
- **On Primary** (`{colors.on-primary}` — `#fffefb`): All text on the plum or orange surfaces. The same cream-white as the canvas — deliberate brand coherence.

### Semantic
- **Link** (`{colors.link}` — `#381933`): The primary inline link color inherits the brand plum.
- **Link Accent** (`{colors.link-accent}` — `#ff4a00`): High-priority inline links and text CTAs use the orange accent.
- **Success** (`{colors.success}` — `#00875a`): Status-positive indicator for connected apps and workflow states.
- **Error** (`{colors.error}` — `#d0021b`): Destructive action and validation error state.
- **Warning** (`{colors.warning}` — `#f5a623`): Caution / pending status.
- **Stat Accent** (`{colors.stat-accent}` — `#ff4a00`): The orange applied to the hero stat numerals ("450K+", "9,000+", "3.39M+").

## Typography

### Font Family
Two faces only:

1. **Degular Display** — a soft geometric display face used exclusively for headings (display-xl through display-sm and the large stat numerals). Weight 500 only — the brand never goes heavier. Negative letter-spacing at display sizes (`-1px` at 56 px and 28 px) gives the headlines an editorial ease that contrast with the tighter utility sans below.
2. **Inter** — the neutral workhorse for every body paragraph, UI label, navigation link, button, caption, and eyebrow. Weight 400 for body; weight 500 for eyebrows and medium labels; weight 600 for `body-sm-strong` emphasis. Never used for display headings.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 500 | 56px | -1px | Hero headline ("Your tools. Your rules. Any AI.") |
| `{typography.display-lg}` | 40px | 500 | 48px | -0.8px | Large section headings and stat display numbers |
| `{typography.display-md}` | 28px | 500 | 35px | -1px | Card cluster headings ("Get started in seconds") |
| `{typography.display-sm}` | 20px | 500 | 28px | -0.4px | Smaller sub-section headings |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Hero lead paragraph under the headline |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraphs inside feature cards |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Nav links, button labels, secondary body |
| `{typography.body-sm-strong}` | 14px | 600 | 20px | 0 | Emphasized inline body and link CTAs |
| `{typography.caption}` | 12px | 400 | 18px | 0.48px | Footer secondary lines, fine print |
| `{typography.caption-upper}` | 12px | 500 | 18px | 0.48px | Uppercase compliance badges ("SOC 2 TYPE II") |
| `{typography.eyebrow}` | 12px | 500 | 18px | 0.48px | Section eyebrow labels ("AI AUTOMATION, GOVERNED", "FOR BUILDERS") |
| `{typography.button-md}` | 14px | 400 | 20px | 0 | Primary and secondary button labels, nav CTA labels |
| `{typography.button-lg}` | 16px | 500 | 24px | 0 | Marketing-scale button labels |
| `{typography.stat-display}` | 40px | 500 | 48px | -0.8px | Hero stat numerals set in Degular Display, colored accent-orange |

### Principles
- **Eyebrows are uppercase Inter, not Degular.** The section eyebrows ("AI AUTOMATION, GOVERNED", "FOR BUILDERS") are set in Inter at 12 px / weight 500 / +0.48 px tracking — the mono-caps effect is achieved with letter-spacing, not a separate face.
- **Degular Display at weight 500 only.** The display face never goes to 400 or 600/700 anywhere on the captured surface. A single weight is the brand consistency.
- **Negative tracking is an editorial signal.** The -1 px tracking at 56 px and 28 px headline sizes gives Degular Display its relaxed quality. Reverting to default tracking removes the editorial warmth.
- **Inter for all utility text.** Navigation links, button labels, body paragraphs, captions — all Inter, all weight 400, with weight 500–600 used sparingly for emphasis.
- **No monospaced face.** Unlike developer-platform brands, Zapier does not use a mono face anywhere in the captured surface. Code blocks or technical output surfaces are outside this capture.

### Note on Font Substitutes
- **Degular Display** — a proprietary display face. Closest open-source substitute: *Plus Jakarta Sans* (weight 500) with slightly adjusted letter-spacing, or *DM Serif Display* for a warmer editorial feel. *Fraunces* at weight 400 is a stylistically-adjacent option.
- **Inter** — openly available; use directly from Google Fonts or Fontsource.

## Layout

### Spacing System
- **Base unit**: 4 px. Every measured value in the extraction is a multiple of 2 px or 4 px.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 20 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 40 px · `{spacing.4xl}` 48 px · `{spacing.5xl}` 64 px · `{spacing.6xl}` 96 px · `{spacing.section}` 160 px.
- **Section vertical rhythm**: major marketing bands use `{spacing.4xl}` to `{spacing.5xl}` (48–64 px) top/bottom. The hero band stretches to `{spacing.section}` 160 px vertical to give the headline room to breathe.
- **Card interior padding**: feature cards and integration cards use `{spacing.2xl}` 32 px interior padding as measured. Tighter grid cards use `{spacing.lg}` 16 px.
- **Component gap**: button rows and inline clusters use `{spacing.sm}` 8 px to `{spacing.md}` 12 px between siblings.

### Grid & Container
- **Max content width**: approximately 1200 px centred with horizontal gutters of `{spacing.lg}` 16–24 px on desktop.
- **Column patterns**:
  - Hero stat row: 3-up centred ("450K+ / 9,000+ / 3.39M+").
  - Feature / builder card grid: 4-up or 5-up integration logo grid at desktop.
  - "Get started in seconds" panel: centred single column with a tab segment row ("MCP / SDK / CLI") above an app-logo grid.
  - Compliance badge row: 2-up inline ("SOC 2 TYPE II" + "GDPR + CCPA COMPLIANT") centred below the stat row.

### Whitespace Philosophy
Whitespace does the structural work that decoration does not. The page relies on generous vertical gaps between bands — `{spacing.4xl}` to `{spacing.section}` — rather than illustrations or gradients to separate content. Inside cards the interior is tight (32 px padding, 12–16 px interior gaps) so the content reads as dense and useful. The page rhythm: large gap → card cluster → large gap → polarity-flip band, repeating. No decorative filler between sections.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero stacks; nav collapses to hamburger; stat row stacks to 1-up; button row stacks vertically. |
| Tablet | 640–1023px | 2-up grids; nav stays horizontal; tab segment row scrolls horizontally. |
| Desktop | 1024–1279px | Full grid layouts; 3-up stat row; 4-up app logo grid. |
| Wide | ≥ 1280px | Content centred at max-width; bands stretch edge-to-edge. |

#### Touch Targets
The primary buttons render at approximately 40 px tall with the measured `4px 16px 8px` padding at 14 px body-sm. The brand comfortably meets 44 px WCAG touch target floors when padding adjusts on mobile.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero and section bands. |
| Level 1 — Hairline Card | `0 0 0 1px {colors.hairline}` 1 px border ring. | Integration app-logo cards, input fields. |
| Level 2 — Soft Card | Hairline border + very subtle `0 1px 4px rgba(0,0,0,0.06)`. | Feature cards and "Get started" builder panel. |

The brand uses minimal elevation — the card.shadow extracted as `none` confirms that the canvas-soft background contrast (canvas → canvas-soft) is the depth cue, not shadow lifting. Cards sit on the page by surface-color contrast, not by floating above it.

### Decorative Depth
- **Surface-color cycling**: `{colors.canvas}` → `{colors.canvas-soft}` → `{colors.primary}` polarity-flip is the brand's three-tone depth vocabulary. The dark plum band IS the dramatic depth cue.
- **Stat numerals as visual anchors**: the three flame-orange stat numbers at hero scale (40 px Degular Display, accent-colored) act as the page's only decorative "pop" in lieu of photography or gradients.
- **App-logo grid as social proof decoration**: the integration logo grid functions visually as a pattern texture, filling the "Get started" panel without requiring illustrations.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero bands and footer edge-to-edge. |
| `{rounded.xs}` | 2px | Tightest inline indicator — active tab underline segment. |
| `{rounded.sm}` | 4px | Nav-link ghost hover state. |
| `{rounded.button}` | 4px | Every button and CTA — primary, secondary, SSO, nav. The measured source-of-truth radius. |
| `{rounded.card}` | 4px | Every card surface — feature cards, integration cards, app-logo tiles, input fields. |
| `{rounded.md}` | 6px | The CTA element bottom corners measured as `0px 0px 6px 6px` on the primary hero CTA — used for asymmetric-corner treatments. |
| `{rounded.lg}` | 8px | Occasionally larger surface panels. |
| `{rounded.xl}` | 12px | Largest card chrome on wide marketing callouts. |
| `{rounded.pill}` | 100px | Not used on primary product surfaces — reserved for future badge or tag patterns if needed. |
| `{rounded.full}` | 9999px | Icon-only circular containers. |

**Important**: The brand's CTA and card radius is uniformly 4 px. This is a deliberate productivity-tool signal — rounded enough to not feel aggressive, square enough to feel structured. Do not pilify these components.

## Components

### Buttons

**`button-primary`** — the canonical plum CTA, used for "Start free with email" in the hero.
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.button-md}` (14 px / 400), padding `4px 16px 8px` (as extracted), radius `{rounded.button}` 4 px.

**`button-secondary`** — the white-background button paired with the primary in hero rows.
- Background `{colors.canvas}`, text `{colors.ink}`, same typography, radius `{rounded.button}` 4 px, 1 px solid `{colors.hairline-strong}` border.

**`button-google-sso`** — the "Start free with Google" SSO button, visually styled as secondary with a Google logo prefix icon.
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.button-md}`, radius `{rounded.button}` 4 px, hairline border.

**`nav-cta-signup`** — the orange "Sign up" button in the top-right nav cluster.
- Background `{colors.accent}`, text `{colors.on-primary}`, label `{typography.button-md}`, radius `{rounded.button}` 4 px, padding `{spacing.sm} {spacing.lg}`.

**`nav-cta-login`** — the ghost "Log in" button in the nav.
- Background `{colors.canvas}`, text `{colors.ink}`, same typography and radius as `nav-cta-signup`.

**`tab-segment`** — the "MCP / SDK / CLI" pill-row inside the "Get started" builder panel.
- Background `{colors.canvas}`, text `{colors.ink}`, `{typography.body-sm}`, radius `{rounded.sm}` 4 px, `{colors.hairline}` border. Active state highlights the selected tab with `{colors.canvas-soft-2}` background.

### Cards & Containers

**`card-feature`** — the primary feature-section card (soft warm-gray background).
- Background `{colors.surface-card}` (#f8f4f0), text `{colors.ink}`, padding `{spacing.2xl}` 32 px, radius `{rounded.card}` 4 px.

**`card-integration`** — the per-app integration card in the builder grid.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg}` 16 px, radius `{rounded.card}` 4 px, 1 px solid `{colors.hairline}` border.

**`card-app-logo`** — the small app logo tile inside the integration grid.
- Background `{colors.canvas}`, radius `{rounded.card}` 4 px, `{colors.hairline}` border, padding `{spacing.md}` 12 px. Hosts the app icon at a consistent square size.

### Navigation

**`nav-bar`** — the sticky top navigation.
- Background `{colors.canvas}`, text `{colors.ink}`, height 56 px, padding `{spacing.sm} {spacing.lg}`. Left: Zapier logo. Centre: Products / Solutions / Resources / Enterprise / Pricing with chevron dropdowns. Right: GitHub icon, grid icon, "Contact sales" ghost link, "Log in", "Sign up" orange CTA.

**`nav-link`** — the centred dropdown-trigger links in the nav row.
- Text `{colors.ink}`, `{typography.body-sm}`, padding `{spacing.sm} {spacing.md}`, radius `{rounded.sm}`.

### Bands & Sections

**`hero-band`** — the white hero section with the headline, body, dual CTA, stat row, and compliance row.
- Background `{colors.canvas}`, text `{colors.ink}`, headline `{typography.display-xl}`, body `{typography.body-lg}`, padding `{spacing.4xl} {spacing.lg}`. Contains: eyebrow label → display-xl headline → body-lg lead → button-primary + button-google-sso row → stat-block row → compliance badge row.

**`showcase-band`** — the warm-gray content panel ("Get started in seconds" / builder section).
- Background `{colors.canvas-soft}`, text `{colors.ink}`, `{typography.display-md}`, padding `{spacing.5xl} {spacing.lg}`. Contains: eyebrow → display-md headline → tab-segment row → card-app-logo grid.

**`section-band-dark`** — the plum polarity-flip section for high-contrast feature storytelling.
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.display-md}`, padding `{spacing.5xl} {spacing.lg}`.

### Labels & Metadata

**`eyebrow-label`** — the small uppercase section label above every headline ("AI AUTOMATION, GOVERNED", "FOR BUILDERS").
- Text `{colors.body}`, `{typography.eyebrow}` (12 px / 500 / +0.48 px tracking), uppercase rendered via CSS text-transform. Not Degular Display — deliberately Inter to create typographic contrast with the headline below.

**`stat-block`** — the three large orange numeral + label pairs in the hero ("450K+ / Agents built").
- Numeral: `{typography.stat-display}` 40 px / 500 / Degular Display, color `{colors.stat-accent}`. Label below in `{typography.body-sm}` / `{colors.body}`.

**`badge-compliance`** — the "SOC 2 (TYPE II)" and "GDPR + CCPA COMPLIANT" trust indicator pills.
- Background `{colors.badge-bg}`, text `{colors.compliance-mute}`, `{typography.caption-upper}`, radius `{rounded.sm}` 4 px, padding `{spacing.xxs} {spacing.sm}`. Rendered with a small icon prefix (shield / checkmark).

**`form-input`** — the email / text input field.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline-strong}` border, `{typography.body-sm}`, radius `{rounded.button}` 4 px, height 40 px.

**`link-inline`** — body-copy inline links.
- Text `{colors.link-accent}`, `{typography.body-md}`, underlined on hover.

### Footer

**`footer`** — the multi-column navigation footer.
- Background `{colors.canvas-soft}`, text `{colors.body}`, `{typography.body-sm}`, padding `{spacing.4xl} {spacing.lg}`. Column headers in `{typography.body-sm-strong}` (14 px / 600).

## Do's and Don'ts

### Do
- Use `{colors.accent}` (orange, #ff4a00) for the primary conversion CTA and metric numerals — it is the brand's only moment of high energy and should be reserved for exactly those two purposes.
- Use `{colors.primary}` (plum, #381933) for the email/email-alternative CTA and all deep polarity-flip bands — the brand's authority color.
- Keep every button and card at `{rounded.button}` / `{rounded.card}` — 4 px. This deliberate restraint is the brand's productivity-tool signal.
- Set every section eyebrow in `{typography.eyebrow}` — 12 px Inter / weight 500 / +0.48 px tracking / uppercase. Never set eyebrows in Degular Display.
- Set every headline in `{typography.display-*}` with Degular Display at weight 500 only. Negative letter-spacing (-1 px at 56 px, -0.8 px at 40 px, -1 px at 28 px) is mandatory.
- Cycle surfaces: `{colors.canvas}` → `{colors.canvas-soft}` → `{colors.primary}` for section depth. The warm-gray and plum surfaces ARE the decorative system.
- Treat the stat numerals (Degular Display / 40 px / accent-orange) as the page's decorative centerpiece in lieu of photography.

### Don't
- Don't pill-ify buttons or cards. 4 px radius is the system's fixed answer. Rounding up to 100 px breaks the productivity-tool character entirely.
- Don't use Degular Display for body text, captions, eyebrows, or button labels. It is a display-only face at one weight.
- Don't introduce a cold-white (#ffffff) background. The canvas is warm cream (#fffefb) — substituting pure white flattens the brand's warmth.
- Don't use `{colors.accent}` (orange) for decorative elements, illustrations, or inline links where it will dilute the CTA signal. Orange means "act now."
- Don't add gradients or mesh backgrounds. Zapier's decorative vocabulary is surface-color contrast and stat numerals — not atmospheric backdrops.
- Don't set eyebrows in Inter weight 400 — the +0.48 px tracking eyebrow must be weight 500 to hold its form at 12 px.
- Don't promote Inter to weight 700 or 800 anywhere in the UI. The brand's weight ceiling for Inter is 600 (body-sm-strong); heavier weights fight the calm tone.
