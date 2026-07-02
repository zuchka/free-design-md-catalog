---
version: alpha
name: WIRED
description: "WIRED is a news-media brand whose visual identity runs on maximum ink contrast — pure black on white, with no decorative colour system whatsoever. The wordmark is the brand: a heavy, condensed sans at enormous scale. Every headline is set in a thick-stroked serif display face with tight negative tracking; every label, byline, and section flag is set in a tight uppercase grotesque at 11–13 px. The palette has two entries — black and white — and the only accent is a thin black rule. This is editorial brutalism in its most considered form."
colors:
  ink: "#000000"
  canvas: "#ffffff"
  on-ink: "#ffffff"
  mute: "#767676"
  hairline: "#cccccc"
  hairline-strong: "#000000"
  canvas-soft: "#f2f2f2"
  subscribe-bg: "#000000"
  subscribe-text: "#ffffff"
  section-label-bg: "#000000"
  section-label-text: "#ffffff"
  trending-label-bg: "#000000"
  trending-label-text: "#ffffff"
  byline: "#767676"
  ad-border: "#cccccc"
typography:
  display-xl:
    fontFamily: BreveText, helvetica, sans-serif
    fontSize: 64px
    fontWeight: 700
    lineHeight: 59.52px
    letterSpacing: -0.5px
  display-lg:
    fontFamily: BreveText, helvetica, sans-serif
    fontSize: 38px
    fontWeight: 700
    lineHeight: 44px
    letterSpacing: -0.3px
  display-md:
    fontFamily: BreveText, helvetica, sans-serif
    fontSize: 28px
    fontWeight: 700
    lineHeight: 32px
    letterSpacing: -0.2px
  display-sm:
    fontFamily: BreveText, helvetica, sans-serif
    fontSize: 20px
    fontWeight: 700
    lineHeight: 24px
    letterSpacing: -0.1px
  body-md:
    fontFamily: BreveText, helvetica, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: BreveText, helvetica, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  caption:
    fontFamily: BreveText, helvetica, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  label-uppercase:
    fontFamily: helvetica, sans-serif
    fontSize: 11px
    fontWeight: 700
    lineHeight: 16px
    letterSpacing: 0.108px
  label-section:
    fontFamily: helvetica, sans-serif
    fontSize: 13px
    fontWeight: 700
    lineHeight: 16px
    letterSpacing: 0.108px
  byline:
    fontFamily: helvetica, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  nav-link:
    fontFamily: helvetica, sans-serif
    fontSize: 13px
    fontWeight: 700
    lineHeight: 16px
    letterSpacing: 0.108px
  button-md:
    fontFamily: helvetica, sans-serif
    fontSize: 13px
    fontWeight: 700
    lineHeight: 16px
    letterSpacing: 0.108px
  button-lg:
    fontFamily: helvetica, sans-serif
    fontSize: 19px
    fontWeight: 700
    lineHeight: 24px
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  button: 4px
  md: 4px
  pill: 4px
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
  section: 64px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderBottom: 1px solid {colors.hairline-strong}
    typography: "{typography.nav-link}"
    height: 48px
    padding: "{spacing.xs} {spacing.lg}"
  nav-wordmark:
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    fontWeight: 700
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-subscribe:
    backgroundColor: "{colors.subscribe-bg}"
    textColor: "{colors.subscribe-text}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-newsletters:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: 1px solid {colors.ink}
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  section-label:
    backgroundColor: "{colors.section-label-bg}"
    textColor: "{colors.section-label-text}"
    typography: "{typography.label-section}"
    padding: "{spacing.xxs} {spacing.xs}"
    rounded: "{rounded.none}"
  trending-label:
    backgroundColor: "{colors.trending-label-bg}"
    textColor: "{colors.trending-label-text}"
    typography: "{typography.label-section}"
    padding: "{spacing.xxs} {spacing.xs}"
    rounded: "{rounded.none}"
  category-eyebrow:
    textColor: "{colors.ink}"
    typography: "{typography.label-uppercase}"
    letterSpacing: 0.108px
  hero-article-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.lg}"
    borderBottom: 1px solid {colors.hairline}
  article-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.xs} {spacing.sm}"
    borderBottom: 1px solid {colors.hairline}
    rounded: "{rounded.none}"
  article-card-sm:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.xs}"
    borderBottom: 1px solid {colors.hairline}
    rounded: "{rounded.none}"
  article-card-thumbnail:
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    imageAspectRatio: 16:9
  byline-row:
    textColor: "{colors.byline}"
    typography: "{typography.byline}"
    padding: "{spacing.xxs} 0px"
  section-header:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderBottom: 2px solid {colors.ink}
    typography: "{typography.label-section}"
    padding: "{spacing.xs} 0px"
  trending-sidebar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderLeft: 1px solid {colors.hairline}
    padding: "{spacing.md}"
  trending-item:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-sm}"
    borderBottom: 1px solid {colors.hairline}
    padding: "{spacing.sm} 0px"
  ad-slot:
    backgroundColor: "{colors.canvas}"
    border: 1px solid {colors.ad-border}
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderTop: 2px solid {colors.ink}
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.lg}"
  link-inline:
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    textDecoration: none
  hamburger-menu:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderRight: 1px solid {colors.hairline}
    padding: "{spacing.xs}"
  podcast-badge:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.label-uppercase}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs} {spacing.xs}"
  ex-pricing-tier:
    description: Default subscription tier card — hairline-bordered card on canvas, no decorative colour.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured/highlighted subscription tier — polarity-flipped to ink surface with white text and white-bordered CTA.
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: Content-category selector — re-purposed for WIRED verticals (Science, Business, Culture etc.). Canvas-soft surface with hairline divider.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary — line items per tier / add-on. Canvas surface with hairline row dividers.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses a 2px left-edge ink rule as indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: Data-table chrome. Header uses label-uppercase in all-caps; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.label-uppercase}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card. Canvas surface with button-primary inside; 0px radius consistent with WIRED's square system.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog surface — canvas card with 2px ink border-top, no rounded corners.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame — generous canvas-soft surface, caption typography.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — flat ink-on-white card with hairline border, no rounded corners.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

WIRED's design language is editorial maximalism stripped to its bones. The palette has exactly two values — black and white — and the brand never deviates. There is no primary blue, no accent green, no gradient. The ink-on-canvas system is total: headlines are set in a thick-stroked serif display face (BreveText) at enormous scale with tight negative tracking; every section label, byline credit, and nav link is set in a tight uppercase grotesque at 11–13 px; the only decorative move is a 1–2 px black rule drawn between zones. Everything else is content.

The wordmark is the brand. The stacked, condensed WIRED logotype — rendered in massive weight — operates as the decorative object on the page. It asks no supporting illustration, no hero gradient, no photography backdrop. The logo is the hero. Below it, the page drops into a newspaper-grid discipline: a dominant lead story at 64 px, a secondary cluster of 38 px article cards, a sidebar of trending items separated by hairline rules.

Typography does all the heavy lifting. BreveText weight 700 at 64 px with −0.5 px tracking carries the lead article; the same face at 38 px carries secondary stories. The scale drops through 28 px and 20 px before giving way to 16 px body text. Every headline is mixed-case — never all-caps — because the thick serifs at this weight read as powerful without shouting. The grotesque sans (Helvetica stack) handles every piece of metadata: category eyebrows in 13 px uppercase with +0.108 px tracking, bylines in 12 px gray, nav links in 13 px bold. These two typefaces — and no others — carry the entire publication.

Surfaces are flat and undecorated. Cards have no border-radius, no shadow, no background fill — they are separated by 1 px hairline rules and white space alone. The subscribe CTA is the only component that inverts to a filled black rectangle. Podcast and media badges use a canvas-soft (`#f2f2f2`) fill as the sole concession to a third surface tone.

## Colors

### Brand & Surface
- **Ink** (`{colors.ink}` — `#000000`): The absolute primary — used for every headline, body paragraph, nav link, section divider, and the subscribe button fill. Black IS the brand.
- **Canvas** (`{colors.canvas}` — `#ffffff`): The page background and every card surface. WIRED runs on white. There is no alternate light surface.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f2f2f2`): A near-white fill used sparingly for podcast/media badges, image placeholder states, and inset background regions. The only third-surface tone.
- **On Ink** (`{colors.on-ink}` — `#ffffff`): All text that appears on ink-filled surfaces — the subscribe button label, the section-label chip text, the "TRENDING STORIES" flag.

### Text
- **Byline / Mute** (`{colors.byline}` — `#767676`): Author credits, secondary captions, and deemphasised metadata. The only gray in the system.
- **Subscribe Text** (`{colors.subscribe-text}` — `#ffffff`): Text on the subscribe CTA button — effectively the same as `on-ink`.

### Borders & Dividers
- **Hairline** (`{colors.hairline}` — `#cccccc`): 1 px rules between article cards, between sidebar items, and around ad slots. The soft divider.
- **Hairline Strong** (`{colors.hairline-strong}` — `#000000`): The 2 px ink rule that closes the nav-bar bottom edge and heads every section column. The structural divider.
- **Ad Border** (`{colors.ad-border}` — `#cccccc`): The faint border ring around advertising slots, matching the hairline tone.

### Label Chips
- **Section Label BG** (`{colors.section-label-bg}` — `#000000`): The filled black rectangle behind "TODAY'S PICKS", "TRENDING STORIES", and section eyebrow chips.
- **Section Label Text** (`{colors.section-label-text}` — `#ffffff`): The white text inside those black chips.

## Typography

### Font Families
WIRED uses two font families and no others:

1. **BreveText** — A thick-stroked serif display face. Used for every headline at every scale, from the 64 px lead story to 20 px card titles. Weights 700 (display) and 400 (body). This is the brand voice. The face earns its size through stroke contrast and tight negative tracking — it was chosen to feel like a front page, not a dashboard.
2. **Helvetica / sans-serif** — The system grotesque stack (`helvetica, sans-serif`). Used only for metadata: nav links, category eyebrows, bylines, button labels, section flags. Always 11–19 px, always weight 700 for labels and nav, 400 for bylines. The brand never sets body paragraphs in the grotesque.

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 700 | 59.52px | -0.5px | Lead hero article headline — the dominant typographic object on the page. |
| `{typography.display-lg}` | 38px | 700 | 44px | -0.3px | Secondary article headlines in the main well. |
| `{typography.display-md}` | 28px | 700 | 32px | -0.2px | Tertiary article headlines and sidebar trending items at larger breakpoints. |
| `{typography.display-sm}` | 20px | 700 | 24px | -0.1px | Smallest headline scale — trending sidebar items, related-article titles. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Article dek (standfirst) and body text. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary body text, footer links, fine print. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Image captions and supplementary notes. |
| `{typography.label-uppercase}` | 11px | 700 | 16px | 0.108px | Smallest metadata label — article category eyebrows like "AI SAFETY", "BLESS UP". |
| `{typography.label-section}` | 13px | 700 | 16px | 0.108px | Section flag labels — "TODAY'S PICKS", "TRENDING STORIES", nav links, subscribe button. |
| `{typography.byline}` | 12px | 400 | 16px | 0 | Author credit lines — "BY SHEON HAN", "BY DHRUV MEHROTRA AND JOEL KHALILI". Set in gray `{colors.byline}`. |
| `{typography.nav-link}` | 13px | 700 | 16px | 0.108px | Primary navigation links — SECURITY, POLITICS, THE BIG STORY, BUSINESS, SCIENCE, CULTURE, REVIEWS. |
| `{typography.button-md}` | 13px | 700 | 16px | 0.108px | Nav-scale button labels — NEWSLETTERS, SUBSCRIBE. |
| `{typography.button-lg}` | 19px | 700 | 24px | 0 | Marketing-scale button labels — extracted from button element CSS. |

### Principles
- **Negative tracking is structural.** The display serif runs −0.5 px at 64 px and −0.3 px at 38 px. The headlines fill horizontal space by design; restoring tracking opens gaps the grid cannot absorb.
- **Mixed-case headlines, always.** The brand never sets display headlines in all-caps. The thick BreveText serifs carry authority at natural casing — caps would push the tone from editorial to poster.
- **Uppercase grotesque for metadata only.** Category eyebrows, bylines, nav links, and section flags are the only uppercase text on the page. The contrast between the serif lowercase headlines and the grotesque uppercase metadata creates the publication's rhythmic identity.
- **Weight 700 is the display ceiling.** BreveText appears only at 700 for headlines and 400 for body. The grotesque appears only at 700 for labels and 400 for bylines. The system reads as deliberate precisely because it never exceeds these two weights.
- **No italic.** The captured surface shows no italic type. The brand communicates emphasis through size and weight, not slant.

### Note on Font Substitutes
BreveText is a licensed display serif. Open-source substitutes:
- **Display serif** — *Playfair Display* (700) is the closest open-source match for stroke contrast and headline weight. *Libre Baskerville* Bold is a second option.
- **Grotesque sans** — The brand falls back to the system Helvetica stack. *Inter* (700) at small sizes with `letter-spacing: 0.1px` is the closest open-source match; *IBM Plex Sans* Bold is a passable second.

## Layout

### Spacing System
- **Base unit**: 4 px. Every measured padding value is a multiple of 4 px.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.section}` 64 px.
- **Section padding**: top and bottom bands use `{spacing.4xl}` 64 px — the dominant large value in the extracted frequency data (28 occurrences). Nav uses `{spacing.xs}` 8 px vertically.
- **Card interior**: article cards use `{spacing.xs}` to `{spacing.sm}` interior padding; cards are separated by hairline rules rather than visual margin.
- **Inline gap**: byline rows, nav link rows, and label clusters use `{spacing.xxs}` to `{spacing.xs}` between siblings.

### Grid & Container
- **Max width**: approximately 1280 px; content centres with `{spacing.lg}` 24 px horizontal gutters on desktop.
- **Column patterns** (visible in screenshot):
  - **Main well + sidebar**: dominant 2-column split at desktop — roughly 70 % main well (lead article + secondary cluster + "TODAY'S PICKS") and 30 % trending sidebar. The sidebar is separated by a 1 px hairline rule, not a gutter.
  - **TODAY'S PICKS cluster**: 1-up vertical stack of article cards with thumbnail left + headline right layout.
  - **Trending sidebar**: 1-up vertical stack of plain headline cards with no thumbnails, ranked by implicit editorial priority.
  - **Ad slot**: centred single-column ad banner between content columns.

### Whitespace Philosophy
The brand uses whitespace as the primary separator — not colour, not shadow. Section columns breathe through `{spacing.lg}` to `{spacing.4xl}` vertical gaps; individual card stacks are tight at `{spacing.xs}` so the rule lines carry the rhythm. The page reads as a newspaper grid: dense horizontal bands of content interrupted by thin ink rules, not card-shadow elevation systems. The absence of decorative chrome IS the design.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 600px | Nav collapses to hamburger + wordmark; article cards stack 1-up; trending sidebar moves below main well. |
| Tablet | 600–959px | 2-up article grid; trending sidebar may collapse. |
| Desktop | 960–1279px | Full main-well + sidebar split; "TODAY'S PICKS" 3-up visible. |
| Wide | ≥ 1280px | Content caps at max-width; bands stretch edge-to-edge in white. |

#### Touch Targets
The subscribe button measured at approximately 36 px tall with `{spacing.xs}` padding. The hamburger menu icon is left-anchored. Nav links use `{spacing.xs} {spacing.sm}` padding to meet minimum touch targets on mobile.

#### Collapsing Strategy
- **Nav**: full horizontal link row at desktop; collapses to hamburger icon + centred wordmark on mobile.
- **Main well + sidebar**: stacks vertically on mobile with trending sidebar dropping below the article cluster.
- **Article cards**: always 1-up on mobile; may run 2-up on tablet for secondary cards.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border, no background fill. | Every article card surface — the brand's universal card state. |
| Level 1 — Hairline Rule | `1px solid #cccccc` bottom or right border. | Divider between article cards, between sidebar items, and around ad slots. |
| Level 2 — Ink Rule | `2px solid #000000` top or bottom border. | Section column headers ("TODAY'S PICKS" bar, nav-bar bottom edge). The brand's only structural depth cue. |
| Level 3 — Fill Inversion | Surface switches from `{colors.canvas}` to `{colors.ink}`. | Subscribe button, section-label chips. The only "elevated" state — polarity flip rather than shadow. |

The brand uses zero drop-shadow. There is no box-shadow anywhere in the captured surface. Elevation is communicated entirely through rule weight and fill inversion. This is the starkest elevation system observable on a major media site.

### Decorative Depth
- **Rule lines as section depth**: the 2 px ink rule is the brand's only structural decoration — it marks column tops and nav-bar bottoms.
- **Thumbnail images as the only photography**: article card thumbnails at 16:9 aspect ratio in a flat `{colors.canvas-soft}` placeholder state are the only photography surface. Images float on white with no border-radius and no shadow frame.
- **No gradients, no illustrations, no icons beyond the wordmark**: the brand carries all visual weight in type.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Every article card, section header, footer band, ad slot. The brand's universal shape. |
| `{rounded.xs}` | 2px | Not observed in primary surfaces; reserved for micro-elements if needed. |
| `{rounded.sm}` | 4px | Subscribe button, newsletter CTA button — the only rounded element on the page. Measured at exactly 4 px from deterministic extraction. |
| `{rounded.button}` | 4px | Locked measurement from extraction; applied to all button/CTA components. |
| `{rounded.full}` | 9999px | Not observed on primary surfaces; available for pill-badge use if introduced. |

The brand is a square system. Every content surface — cards, section headers, image frames, ad slots — has zero border-radius. The 4 px button radius is the single concession to softness, and it is barely perceptible at the button's proportions.

## Components

### Navigation

**`nav-bar`** — The sticky top navigation strip.
- White canvas background with a 1 px solid ink bottom rule. Height approximately 48 px. Padding `{spacing.xs} {spacing.lg}`. Layout: hamburger icon far-left, WIRED wordmark centre-left, horizontal link row centre, account icon + NEWSLETTERS + SUBSCRIBE cluster far-right.

**`nav-wordmark`** — The WIRED logotype inside the nav.
- Pure black ink, rendered in the heavy condensed wordmark typeface at large scale. This is the brand's primary decorative object.

**`nav-link`** — Primary horizontal nav links (SECURITY, POLITICS, THE BIG STORY, BUSINESS, SCIENCE, CULTURE, REVIEWS).
- Text `{colors.ink}`, set in `{typography.nav-link}` — 13 px bold grotesque with +0.108 px tracking. No background, no border-radius. Uppercase.

**`nav-cta-subscribe`** — The "SUBSCRIBE" button in the top-right nav cluster.
- Background `{colors.subscribe-bg}` (ink black), text `{colors.subscribe-text}` (white), set in `{typography.button-md}`, rounded `{rounded.button}` 4 px.

**`nav-cta-newsletters`** — The "NEWSLETTERS" text link adjacent to SUBSCRIBE.
- Background transparent / canvas, text `{colors.ink}`, set in `{typography.button-md}`. No fill, no border.

**`hamburger-menu`** — The menu-open icon at the far left of the nav.
- Canvas background, ink icon, `{spacing.xs}` padding.

### Section Labels & Eyebrows

**`section-label`** — The filled black chip used for "TODAY'S PICKS" and "TRENDING STORIES".
- Background `{colors.section-label-bg}`, text `{colors.section-label-text}`, set in `{typography.label-section}`, padding `{spacing.xxs} {spacing.xs}`, zero border-radius.

**`category-eyebrow`** — The small uppercase category label above an article headline ("AI SAFETY", "BLESS UP", "I[INTERN], ROBOT").
- Text `{colors.ink}`, set in `{typography.label-uppercase}`, no background, no border. Pure text label, uppercase, with +0.108 px tracking.

**`section-header`** — The column header row that opens a content section, topped by a 2 px ink rule.
- Canvas background, ink text, 2 px solid ink top-border, set in `{typography.label-section}`, padding `{spacing.xs} 0px`.

### Article Cards

**`hero-article-card`** — The dominant lead article container (64 px headline, standfirst, byline).
- Canvas background, ink text, headline in `{typography.display-xl}` (64 px / -0.5 px tracking), dek in `{typography.body-md}`, byline in `{typography.byline}`. Bottom hairline rule. Padding `{spacing.lg}`.

**`article-card`** — Standard secondary article card with thumbnail.
- Canvas background, ink text, headline in `{typography.display-lg}` (38 px), byline in `{typography.byline}`. Thumbnail left, headline+byline right layout. Bottom hairline rule. Rounded `{rounded.none}`.

**`article-card-sm`** — Smaller article card for tighter clusters or sidebar secondary items.
- Canvas background, ink text, headline in `{typography.display-md}` (28 px). Bottom hairline rule. Rounded `{rounded.none}`.

**`article-card-thumbnail`** — The 16:9 image frame inside an article card.
- Background `{colors.canvas-soft}` in placeholder state. Zero border-radius. No shadow. Flat against the card surface.

**`byline-row`** — The "BY [AUTHOR NAME]" credit line below a headline.
- Text `{colors.byline}` (gray `#767676`), set in `{typography.byline}` (12 px), `{spacing.xxs}` top padding.

### Sidebar

**`trending-sidebar`** — The right-column "TRENDING STORIES" container.
- Canvas background, ink text, separated from the main well by a 1 px hairline left-border. Padding `{spacing.md}`.

**`trending-item`** — An individual ranked item inside the trending sidebar.
- Canvas background, ink text, headline in `{typography.display-sm}` (20 px), byline in `{typography.byline}`, bottom hairline rule, padding `{spacing.sm} 0px`.

### Utility

**`ad-slot`** — The advertising unit embedded in the page.
- Canvas background, 1 px `{colors.ad-border}` border ring, zero border-radius. Padding `{spacing.md}`. Treated as a neutral placeholder container.

**`podcast-badge`** — The small headphone-icon badge overlaid on article card thumbnails for podcast/audio content.
- Background `{colors.canvas-soft}`, ink icon, set in `{typography.label-uppercase}`, zero border-radius.

**`link-inline`** — Body-copy inline links.
- Text `{colors.ink}`, set in `{typography.body-md}`, no underline (text-decoration: none), consistent with the brand's no-decoration link convention.

**`footer`** — The bottom navigation band.
- Canvas background, ink and body text, 2 px solid ink top-border, set in `{typography.body-sm}`, padding `{spacing.4xl} {spacing.lg}`.

**`button-primary`** — Full marketing-scale CTA button.
- Background `{colors.ink}`, text `{colors.on-ink}`, set in `{typography.button-lg}` (19 px / bold grotesque), rounded `{rounded.button}` 4 px.

**`button-secondary`** — Secondary outlined CTA button.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid ink border, set in `{typography.button-lg}`, rounded `{rounded.button}` 4 px.

## Do's and Don'ts

### Do
- Keep the palette at two entries: `{colors.ink}` and `{colors.canvas}`. Canvas-soft `{colors.canvas-soft}` is acceptable for badge fills and placeholder states only.
- Set every headline in BreveText weight 700, mixed-case, with negative tracking. The thick serifs at this weight are the brand's entire decorative system.
- Use `{rounded.button}` 4 px for the subscribe button and any CTA. Every card and container surface must be zero border-radius.
- Separate sections with 1–2 px ink or hairline rules — never with shadow, gradient, or coloured band.
- Set all metadata (category eyebrows, nav links, bylines, section labels) in the grotesque stack (Helvetica), uppercase, 11–13 px, weight 700. Mixed-case body paragraphs stay in BreveText.
- Invert polarity (white text on ink fill) only for the subscribe CTA and section-label chips. That is the brand's only colour move.
- Maintain the newspaper-grid discipline: dominant lead card at full column width, secondary cards stacked below, trending sidebar separated by a hairline rule.

### Don't
- Don't introduce any accent colour, gradient, or decorative illustration. The brand carries all visual weight in type. Adding a colour breaks the editorial voice immediately.
- Don't apply border-radius to any card, image frame, or container. The 4 px radius belongs only to buttons.
- Don't use all-caps for display headlines. Category eyebrows and nav links are uppercase; article headlines are mixed-case — the distinction is the publication's rhythm.
- Don't add drop-shadow to any surface. Elevation is communicated through rule weight and fill inversion, never shadow.
- Don't set body paragraphs in the grotesque (Helvetica). BreveText at 400 carries all narrative text.
- Don't promote BreveText to weight 800 or heavier. Weight 700 is the ceiling; heavier weights destroy the face's stroke contrast.
- Don't render the byline text in black. Bylines are always `{colors.byline}` gray (`#767676`) — the only gray in the system.
