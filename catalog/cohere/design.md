---
version: alpha
name: Cohere
description: "Cohere is an enterprise AI brand whose visual language is built on a tension between warmth and precision — a cream-toned surface palette offset by a stark black announcement bar and a pair of proprietary typefaces: CohereText, a low-contrast serif-adjacent display face that sets massive 96 px headlines at weight 400 with tight negative tracking, and Unica77, a humanist grotesque that carries every body line. The single accent colour is a coral-orange used exclusively on the primary CTA and one inline link, making it land with full weight every time it appears."

colors:
  ink: "#212121"
  ink-deep: "#17171c"
  on-dark: "#ffffff"
  body: "#212121"
  mute: "#6b6b6b"
  hairline: "#d9d6cf"
  canvas: "#ffffff"
  canvas-warm: "#f0eee9"
  canvas-dark: "#1a1a1a"
  announcement-bar: "#000000"
  announcement-text: "#ffffff"
  coral: "#ff7759"
  on-coral: "#ffffff"
  link-underline: "#212121"
  status-ready: "#4caf50"
  card-surface: "#f0eee9"
  card-dark: "#2a2a2e"

typography:
  display-xl:
    fontFamily: "CohereText, \"Space Grotesk\", Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 96px
    fontWeight: 400
    lineHeight: 96px
    letterSpacing: -1.92px
  display-lg:
    fontFamily: "CohereText, \"Space Grotesk\", Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 57.6px
    letterSpacing: -0.48px
  display-md:
    fontFamily: "CohereText, \"Space Grotesk\", Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 38.4px
    letterSpacing: -0.32px
  display-sm:
    fontFamily: "CohereText, \"Space Grotesk\", Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 30px
    letterSpacing: -0.24px
  body-lg:
    fontFamily: "\"Unica77 Cohere Web\", Inter, Arial, ui-sans-serif, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: "\"Unica77 Cohere Web\", Inter, Arial, ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: "\"Unica77 Cohere Web\", Inter, Arial, ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  caption:
    fontFamily: "\"Unica77 Cohere Web\", Inter, Arial, ui-sans-serif, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  label:
    fontFamily: "\"Unica77 Cohere Web\", Inter, Arial, ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  button-md:
    fontFamily: "\"Unica77 Cohere Web\", Inter, Arial, ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  button-lg:
    fontFamily: "\"Unica77 Cohere Web\", Inter, Arial, ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 22px
  pill: 50px
  full: 9999px

spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 28px
  3xl: 32px
  4xl: 40px
  5xl: 64px
  6xl: 96px
  section: 128px

components:
  announcement-bar:
    backgroundColor: "{colors.announcement-bar}"
    textColor: "{colors.announcement-text}"
    typography: "{typography.body-sm}"
    padding: "{spacing.sm} {spacing.xl}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    height: 64px
    padding: "{spacing.md} {spacing.xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "{spacing.sm} {spacing.md}"
  nav-cta-contact:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.xl}"
  nav-cta-signin:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    padding: "{spacing.sm} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.xl}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.none}"
    borderBottom: "1px solid {colors.ink}"
    padding: "{spacing.xs} 0px"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.6xl} {spacing.xl}"
  card-marketing:
    backgroundColor: "{colors.card-surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-dark:
    backgroundColor: "{colors.card-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  agent-card:
    backgroundColor: "{colors.card-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  status-badge:
    backgroundColor: "{colors.card-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.sm}"
    accentColor: "{colors.status-ready}"
  feature-band:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.section} {spacing.xl}"
  section-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    padding: "{spacing.section} {spacing.xl}"
  link-inline:
    textColor: "{colors.coral}"
    typography: "{typography.body-sm}"
  link-underline:
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    borderBottom: "1px solid {colors.ink}"
  footer:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.xl}"
  logo-mark:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  ex-pricing-tier:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-product-selector:
    backgroundColor: "{colors.card-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.coral}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.sm}"
  ex-data-table-cell:
    headerBackground: "{colors.canvas-warm}"
    headerTypography: "{typography.label}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    backgroundColor: "{colors.canvas-warm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-modal-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    backgroundColor: "{colors.canvas-warm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.4xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
    typography: "{typography.body-sm}"

---

## Overview

Cohere's marketing surface is one of the quietest enterprise AI pages on the web — deliberately. Where competitors reach for saturated feature-grid palettes, Cohere lets two proprietary typefaces and a single accent do all the work. The hero headline, "Own your AI," sits at 96 px in CohereText weight 400, a display face that reads somewhere between a humanist serif and a geometric display; the extraordinary size at normal weight is the brand's entire first-impression gesture. No gradient, no illustration, no photography in the above-the-fold area — just the oversized word mark of an idea.

Below the fold the page introduces warmth through a cream canvas (`{colors.canvas-warm}`, `#f0eee9`) that wraps feature cards and section bands. Dark content surfaces — the announcement bar, the agent-demo card cluster — use a near-black `{colors.canvas-dark}` that contrasts cleanly against the cream. The page cycles through three surface states: pure white (the nav and hero), cream (feature sections), and near-black (demo sections). That three-step polarity is the entire layout rhythm.

The only colour that breaks the neutral palette is coral-orange (`{colors.coral}`, `#ff7759`). It appears on the nav "Learn more" link in the announcement bar and on the "Contact us" text-only button treatment in one section — never as a fill on a standard CTA button. The primary CTA (`button-primary`) is ink-black with a pill radius of 50 px; the secondary CTA ("Explore products") is a borderless underline link in ink. These two shapes coexist as the brand's conversion pair.

Cohere's card geometry is distinctive: 22 px radius on the visible sides, with cards in the hero section appearing to bleed off-screen at the bottom (radius only on the top corners). The announcement bar is pure black, edge-to-edge, with coral and white inline text — the sharpest moment of brand intensity on the page.

## Colors

### Brand & Accent
- **Coral** (`{colors.coral}` — `#ff7759`): The sole accent colour. Appears on the "Learn more" inline link in the announcement bar and one section CTA. Never used as a button fill on primary actions — its restraint is the point. Any expansion of coral kills the voice.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure white — the hero background, nav surface, and card interiors on light sections.
- **Canvas Warm** (`{colors.canvas-warm}` — `#f0eee9`): A warm cream that defines feature bands, the footer, and the default card surface. The brand's primary page tone below the hero.
- **Canvas Dark** (`{colors.canvas-dark}` — `#1a1a1a`): Near-black band used for demo sections and the agent-card cluster. Polarity-flip without going full black.
- **Card Surface** (`{colors.card-surface}` — `#f0eee9`): The warm cream applied to feature cards — identical in value to canvas-warm, acting as the card's natural background against the white hero.
- **Card Dark** (`{colors.card-dark}` — `#2a2a2e`): The dark surface inside the demo agent-cards — slightly warmer than canvas-dark, used for inline card-within-band surfaces.

### Text
- **Ink** (`{colors.ink}` — `#212121`): The headline and body primary. Every display heading on light surfaces.
- **Ink Deep** (`{colors.ink-deep}` — `#17171c`): The h2-level heading colour — marginally cooler than ink-standard; used by the extracted h2 headings.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): All text on dark surfaces — announcement bar, agent cards, section-band-dark.
- **Body** (`{colors.body}` — `#212121`): Same value as ink; semantic alias to clarify intent in body copy.
- **Mute** (`{colors.mute}` — `#6b6b6b`): Secondary body copy, caption lines, footer metadata.
- **Hairline** (`{colors.hairline}` — `#d9d6cf`): Card borders and row dividers on warm-surface sections.

### Semantic
- **Status Ready** (`{colors.status-ready}` — `#4caf50`): The green dot used on agent-card status badges ("READY" label alongside service logos in the demo section).

### Announcement
- **Announcement Bar** (`{colors.announcement-bar}` — `#000000`): Full-bleed black bar at page top.
- **Announcement Text** (`{colors.announcement-text}` — `#ffffff`): White body copy inside the bar; coral links are the accent.

## Typography

### Font Families
Two proprietary faces carry the entire system:

1. **CohereText** — the brand's display face, used at weight 400 for all headlines. At 96 px with −1.92 px tracking it dominates the hero; the same face at 48 px and 32 px carries section headlines. It has an editorial, slightly warm geometry — not a standard grotesque, not a traditional serif. Weight 400 is the only weight in use; the brand never bolds its display text.

2. **Unica77 Cohere Web** — the body grotesque. Used at weight 400 for body paragraphs, nav links, button labels, captions, and status text. It is a clean, neutral humanist sans that defers to CohereText at every scale.

Fallback open-source substitutes: *Space Grotesk* (weight 400) is the closest available match for CohereText; *Inter* covers Unica77 acceptably at small sizes.

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 96px | 400 | 96px | -1.92px | Hero headline — "Own your AI." Single line, full-width, sentence-case. |
| `{typography.display-lg}` | 48px | 400 | 57.6px | -0.48px | Section flagship headlines (h3-level). |
| `{typography.display-md}` | 32px | 400 | 38.4px | -0.32px | Section sub-headlines (h2-level). |
| `{typography.display-sm}` | 24px | 400 | 30px | -0.24px | Card-cluster headlines and callout labels. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Lead body paragraph under hero headline. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body — feature descriptions, nav items. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary body, nav CTA labels, button-md labels. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Status badge labels, footer fine print. |
| `{typography.label}` | 14px | 500 | 20px | 0 | Section eyebrow labels, table column headers. |
| `{typography.button-md}` | 14px | 400 | 20px | 0 | Small button labels, nav CTAs. |
| `{typography.button-lg}` | 16px | 400 | 24px | 0 | Marketing-scale CTA labels. |

### Principles
- **Weight 400 is the display ceiling.** CohereText never appears in 500 or higher. The brand's restraint is absolute — the type scale reads calm because no headline is bolded.
- **Sentence-case everywhere.** "Own your AI." — not "OWN YOUR AI." Not even title case for h2 headlines.
- **Negative tracking at display sizes.** −1.92 px at 96 px, −0.48 px at 48 px. The tracking tightens with size but always stays negative — never positive, never default at display scale.
- **Unica77 is neutral by design.** Body text defers entirely to the display face. The two-face system works because Unica77 has almost no personality at reading size — which is the intention.
- **No monospaced face.** Unlike many developer-adjacent AI brands, Cohere does not use a mono typeface for technical labels on this marketing surface. Technical items (agent status, service logos) are handled with Unica77 at caption scale.

## Layout

### Spacing System
- **Base unit**: 4 px. The extracted scale confirms 4 / 6 / 8 / 12 / 16 / 24 px as the core increment set.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 28 px · `{spacing.3xl}` 32 px · `{spacing.4xl}` 40 px · `{spacing.5xl}` 64 px · `{spacing.6xl}` 96 px · `{spacing.section}` 128 px.
- **Section padding**: major bands use `{spacing.section}` 128 px top/bottom. The hero breathes at `{spacing.6xl}` 96 px. Card interior padding sits at `{spacing.lg}` 16 px to `{spacing.xl}` 24 px.
- **Most frequent observed padding**: 16 px (79 instances) and 8 px (72 instances) — confirming `{spacing.lg}` and `{spacing.sm}` as the primary interior spacing units.

### Grid & Container
- **Max width**: approximately 1280 px, centred, with `{spacing.xl}` 24 px horizontal gutters.
- **Column patterns**:
  - Hero: single centred column for headline + CTA row; demo cards appear as a 2-up grid below.
  - Feature section: 3-up card grid on desktop, collapses to 1-up on mobile.
  - Agent demo cluster: 2-up large cards side by side.
  - Nav: logo left, links centre, sign-in + contact-us right.

### Whitespace Philosophy
Cohere uses whitespace as its primary decorative layer. The 96 px headline at weight 400 needs significant breathing room — the hero section never crowds the headline with competing content. Feature band sections use `{spacing.section}` vertical padding to ensure each content island reads as its own environment. Card interior spacing is deliberately modest (`{spacing.lg}` 16 px) because the warm cream background does the visual separating work.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Announcement bar, hero band, section bands. Full-bleed surfaces. |
| Level 1 — Surface Change | Background colour shift (white → cream → dark). | The primary depth cue. Polarity cycling between canvas, canvas-warm, and canvas-dark replaces shadow as the inter-section separator. |
| Level 2 — Card Edge | 1 px solid `{colors.hairline}` border on select cards. | Warm-surface feature cards that sit on matching-tone backgrounds — hairline edge prevents visual merging. |
| Level 3 — Card Dark | Solid dark fill (`{colors.card-dark}`) inside a dark band. | Agent-demo cards. The dark-within-dark layering reads as a subtle elevation step without any shadow. |

The brand deliberately avoids drop-shadows. Elevation is expressed entirely through surface-colour stepping and border hairlines. This is consistent with the quiet-confidence brand voice — shadows would feel too product-demo; colour cycling keeps it editorial.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Announcement bar, full-bleed bands, the secondary "Explore products" underline-link CTA. |
| `{rounded.xs}` | 4px | Tightest inline elements — status-dot containers. |
| `{rounded.sm}` | 8px | Small internal UI elements, logo-mark background chip. |
| `{rounded.md}` | 12px | Moderate-radius containers — modal and drawer surfaces. |
| `{rounded.lg}` | 22px | **The brand's signature card radius.** All feature cards, agent cards, and demo-UI cards use 22 px. The measured extraction confirms this explicitly. On hero-bleed cards, only the top two corners display at 22 px; the bottom bleeds off-screen. |
| `{rounded.pill}` | 50px | The primary marketing CTA pill (`button-primary`) and the nav "Contact us" pill. This is the only pill shape in use — reserved for the primary conversion action. |
| `{rounded.full}` | 9999px | Icon-mark circle containers and status-badge pills. |

## Components

### Navigation

**`nav-bar`** — the persistent top nav on white canvas.
- Logo (Cohere wordmark with colourful dot mark) sits left. Five text links (Products / Solutions / Research / Resources / Company) sit centre in `{typography.body-md}`. "Sign in" text-only link and "Contact us" ink-black pill sit right.

**`nav-link`** — the centred dropdown-trigger links.
- Text `{colors.ink}`, set in `{typography.body-md}`, padding `{spacing.sm} {spacing.md}`. No visible hover border in default state.

**`nav-cta-contact`** — the "Contact us" pill in the nav.
- Background `{colors.ink}`, text `{colors.on-dark}`, `{typography.button-md}`, `{rounded.pill}` 50 px. This is the smaller-scale pill — the nav converts at pill shape consistent with the marketing CTA.

**`nav-cta-signin`** — the ghost "Sign in" nav link.
- Background transparent, text `{colors.ink}`, `{typography.button-md}`, no radius. Appears as a plain text action before the pill CTA.

**`announcement-bar`** — the full-bleed black banner at page top.
- Background `{colors.announcement-bar}`, text `{colors.announcement-text}`, set in `{typography.body-sm}`. Contains inline coral link ("Learn more") with underline. Full-width, no radius, dismissible via × button.

### Buttons & CTAs

**`button-primary`** — the ink-black 50 px pill, marketing scale.
- Background `{colors.ink}`, text `{colors.on-dark}`, `{typography.button-lg}`, `{rounded.pill}` 50 px, padding `{spacing.md} {spacing.xl}`. Used for "Contact us" in the hero. This is the primary conversion shape across the page.

**`button-secondary`** — the underline-only text CTA ("Explore products").
- Background transparent, text `{colors.ink}`, `{typography.button-lg}`, `{rounded.none}`, padding `{spacing.xs} 0px` with 1 px bottom border in `{colors.ink}`. Never a filled shape — the brand's secondary action is deliberately lower-visual-weight.

**`link-inline`** — coral inline link used in the announcement bar.
- Text `{colors.coral}`, `{typography.body-sm}`. The only coral element on the page; underlined.

**`link-underline`** — ink-coloured underline link used in body copy.
- Text `{colors.ink}`, `{typography.body-md}`, 1 px solid underline.

### Cards

**`card-marketing`** — the standard feature card in warm cream sections.
- Background `{colors.card-surface}`, text `{colors.ink}`, padding `{spacing.lg}` 16 px, `{rounded.lg}` 22 px. Carries a hairline border when sitting on a matching-tone background.

**`agent-card`** — the larger dark-surface card in the demo section.
- Background `{colors.card-dark}`, text `{colors.on-dark}`, padding `{spacing.xl}` 24 px, `{rounded.lg}` 22 px. Contains an agent-name heading in `{typography.display-sm}`, a logo-mark chip, and a row of `status-badge` components below.

**`status-badge`** — the inline status pill inside the agent card.
- Background `{colors.card-dark}`, text `{colors.on-dark}`, `{typography.caption}`, `{rounded.pill}` 50 px, padding `{spacing.xxs} {spacing.sm}`. Includes a leading green dot (`{colors.status-ready}`) and "READY" label text alongside a service logo icon.

**`logo-mark`** — the single-letter or icon chip in the agent card header.
- Background light (`{colors.canvas}`), rounded `{rounded.sm}`, padding `{spacing.sm}`. Sits inline with the agent name heading.

### Section Bands

**`hero-band`** — the pure-white hero section.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.6xl} {spacing.xl}`. Inside: headline in `{typography.display-xl}` ("Own your AI"), lead copy in `{typography.body-lg}`, then a CTA row with `button-primary` + `button-secondary`. Demo cards bleed below.

**`feature-band`** — the warm-cream section wrapping marketing feature cards.
- Background `{colors.canvas-warm}`, text `{colors.ink}`, padding `{spacing.section} {spacing.xl}`. Section headline in `{typography.display-md}` or `{typography.display-lg}`.

**`section-band-dark`** — the near-black polarity-flip band.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, padding `{spacing.section} {spacing.xl}`. Used for the agent-demo cluster section.

**`footer`** — the warm-cream footer navigation.
- Background `{colors.canvas-warm}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Column labels in `{typography.label}` weight 500; link rows in `{typography.body-sm}` weight 400.

## Do's and Don'ts

### Do
- Use `{colors.coral}` (`#ff7759`) only as an inline text link accent — never as a filled button background. Its restraint is what makes it land.
- Set every headline in CohereText weight 400. The brand's display confidence comes from size, not weight. A 600-weight CohereText headline breaks the voice immediately.
- Use `{rounded.lg}` 22 px for all card chrome. This is the brand's measured signature radius — do not substitute a different value.
- Cycle surfaces in the three-step pattern: `{colors.canvas}` white → `{colors.canvas-warm}` cream → `{colors.canvas-dark}` near-black. Surface polarity is the depth and rhythm system.
- Apply `{rounded.pill}` 50 px only to the primary CTA button and the nav contact button. Pill shape signals "primary conversion action."
- Use `{typography.display-xl}` at 96 px with −1.92 px tracking only for the hero headline. Do not apply hero-scale type to section sub-headlines.
- Keep secondary CTAs as `{typography.button-lg}` underline links at weight 400. The brand's secondary action is deliberately typographic, never a bordered or ghost button.

### Don't
- Don't bold CohereText. Weight 400 is the ceiling for display type. If you need emphasis at display scale, increase size, not weight.
- Don't apply the 22 px card radius to buttons. The button radius is `{rounded.pill}` 50 px for primary actions and `{rounded.none}` for text-link actions — card geometry and button geometry are distinct systems.
- Don't introduce drop-shadows on cards. The brand's elevation system uses surface-colour stepping and hairline borders — never shadow blur.
- Don't use coral as a fill colour or background. It exists as a text accent only.
- Don't set body paragraphs in CohereText. CohereText is a display face; Unica77 is the body face. Mixing them at body scale collapses the hierarchy.
- Don't use all-caps or tracked-positive settings for any headline. Cohere's typographic voice is sentence-case with negative tracking — positively tracked or all-caps headlines signal a completely different brand register.
- Don't expand the accent palette. The brand operates on ink + cream + one coral. Adding a second accent dilutes the entire system.
