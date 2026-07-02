---
version: alpha
name: The Verge
description: "The Verge is a media brand that treats technology journalism as both breaking news and cultural criticism — its design language matches that editorial confidence: a violent electric violet (#5200ff) that owns every CTA and accent moment on an otherwise stark near-black-on-white canvas, paired with an aggressively weighted sans-serif that runs headlines at weight 900 in near-black ink. No gradients, no illustration system, no decorative chrome — just type, whitespace, and one saturated purple doing all the heavy lifting."
colors:
  primary: "#5200ff"
  on-primary: "#ffffff"
  ink: "#131313"
  body: "#131313"
  mute: "#696969"
  hairline: "#e0e0e0"
  canvas: "#ffffff"
  canvas-soft: "#f8f8f8"
  link: "#5200ff"
  link-visited: "#131313"
  success: "#00a651"
  error: "#d0021b"
  warning: "#f5a623"
  nav-bg: "#ffffff"
  subscribe-bg: "#5200ff"
  subscribe-text: "#ffffff"
  tab-active-bg: "#131313"
  tab-active-text: "#ffffff"
  tab-inactive-text: "#131313"
  author-label: "#696969"
  section-label: "#696969"
typography:
  display-xl:
    fontFamily: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif
    fontSize: 48px
    fontWeight: 900
    lineHeight: 52px
    letterSpacing: -0.5px
  display-lg:
    fontFamily: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif
    fontSize: 32px
    fontWeight: 900
    lineHeight: 36px
    letterSpacing: -0.3px
  display-md:
    fontFamily: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif
    fontSize: 24px
    fontWeight: 900
    lineHeight: 26.4px
    letterSpacing: 0.24px
  display-sm:
    fontFamily: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif
    fontSize: 18px
    fontWeight: 900
    lineHeight: 21.6px
    letterSpacing: 0px
  body-lg:
    fontFamily: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
  caption:
    fontFamily: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  caption-strong:
    fontFamily: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif
    fontSize: 12px
    fontWeight: 700
    lineHeight: 16px
  label-upper:
    fontFamily: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif
    fontSize: 11px
    fontWeight: 400
    lineHeight: 14px
    letterSpacing: 0.5px
  nav-link:
    fontFamily: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
  button-md:
    fontFamily: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-sm:
    fontFamily: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif
    fontSize: 11px
    fontWeight: 400
    lineHeight: 14px
  article-headline:
    fontFamily: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif
    fontSize: 24px
    fontWeight: 900
    lineHeight: 26.4px
    letterSpacing: 0.24px
rounded:
  none: 0px
  button: 2px
  xs: 2px
  sm: 4px
  md: 8px
  lg: 16px
  pill: 24px
  full: 9999px
spacing:
  xxs: 4px
  xs: 6px
  sm: 10px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 30px
  4xl: 50px
  5xl: 64px
  section: 80px
components:
  nav-bar:
    backgroundColor: "{colors.nav-bg}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    borderBottom: "{colors.hairline}"
    padding: "{spacing.md} {spacing.lg}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-section-divider:
    color: "{colors.mute}"
    typography: "{typography.body-md}"
  nav-cta-subscribe:
    backgroundColor: "{colors.subscribe-bg}"
    textColor: "{colors.subscribe-text}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.2xl}"
  nav-cta-signin:
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "{spacing.xs} {spacing.sm}"
    rounded: "{rounded.button}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.2xl}"
  button-cta-small:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-upper}"
    rounded: "{rounded.button}"
    padding: 4px 5px 5px
  tab-pill-active:
    backgroundColor: "{colors.tab-active-bg}"
    textColor: "{colors.tab-active-text}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.2xl}"
  tab-pill-inactive:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.tab-inactive-text}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.2xl}"
  article-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  article-card-headline:
    textColor: "{colors.ink}"
    typography: "{typography.article-headline}"
    fontWeight: 900
  article-card-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-sm}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  author-byline:
    textColor: "{colors.mute}"
    typography: "{typography.caption-strong}"
    letterSpacing: 0.5px
  timestamp:
    textColor: "{colors.mute}"
    typography: "{typography.caption}"
  section-label:
    textColor: "{colors.mute}"
    typography: "{typography.caption-strong}"
    letterSpacing: 0.5px
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
    fontWeight: 900
    textDecoration: underline
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  feed-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    borderTop: "{colors.hairline}"
    padding: "{spacing.md} 0px"
  avatar-chip:
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.full}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    borderTop: "{colors.hairline}"
    padding: "{spacing.4xl} {spacing.lg}"
  notification-bell:
    textColor: "{colors.ink}"
    backgroundColor: "{colors.canvas}"
  hamburger-menu:
    textColor: "{colors.ink}"
    backgroundColor: "{colors.canvas}"
  ad-slot:
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  ex-pricing-tier:
    description: Default subscription tier card — plain canvas surface with hairline border, ink heading, muted body text.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured subscription tier — polarity-flipped to primary violet with white text and white-on-violet CTA.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: What's Included summary card — repurposed for content-access tier comparison (not a literal product gallery).
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary drawer — line items per tier/add-on.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row inside a reader/account shell. Active state uses primary violet as left-edge indicator bar.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: Data table chrome. Header uses caption-strong uppercase; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / subscribe form card — canvas-soft surface with button-primary CTA inside.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog — canvas surface with hairline border, button-primary CTA.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty feed or results frame — generous padding on canvas-soft.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification surface — flat card with hairline border.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"
---
## Overview

The Verge is a technology and culture publication that has always cared as much about the look of a story as its byline count. The design system reflects that editorial confidence: the page is built from exactly three structural colours — near-black `{colors.ink}` on pure white `{colors.canvas}`, interrupted at precisely one moment by the brand's defining electric violet `{colors.primary}`. That violet appears on exactly two affordances: the Subscribe CTA in the top-right nav and every interactive tab/button highlight. Everywhere else the page is typographic black-and-white — a working newspaper grid with no decorative chrome whatsoever.

Typography is the primary design tool. The brand uses a system sans-serif stack (no proprietary custom face) pushed to extreme weights: headlines run at weight 900 in near-black with subtle positive letter-spacing (`+0.24px` at 24 px h2 scale), which gives the masthead feel of a tabloid rather than a digital-first tech blog. The oversize logotype treatment — "TheVerge" letterforms cropped dramatically at the left edge — is a typographic illustration, not a bitmap. Body text stays at weight 400 in a comfortable 16–18 px, creating a deliberate tension between the heavy editorial headlines and the neutral reading text.

The layout is a classic broadsheet grid: a full-width nav row, an ad slot band, then a main content well that uses a card-list article feed. Cards are edgeless — `{rounded.none}` — separated by `{colors.hairline}` dividers rather than floating on shadows. The only raised surface visible is the "LATEST / FOLLOWING" tab row, which uses a 24 px pill radius (`{rounded.pill}`) with the active tab rendered as a solid `{colors.tab-active-bg}` black pill against a white sibling — a binary toggle, not a multi-step tab bar.

The brand's restraint is intentional and editorial: one accent colour, one weight extreme, no illustrations, no gradients, no elevation system beyond a hairline. Every pixel of decoration budget has been spent on the typography.

## Colors

### Brand & Accent
- **Primary Violet** (`{colors.primary}` — `#5200ff`): The single accent colour. Used exclusively on the Subscribe CTA button in the nav, on active interactive tab fills, and as the hover/link colour for inline text. The brand does not use this violet decoratively — it is a functional signal only.
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure white. Every article card, nav bar, and content surface sits on this tone.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f8f8f8`): Off-white used for ad slot backgrounds and inset surfaces.

### Text
- **Ink** (`{colors.ink}` — `#131313`): Near-black used for every headline and primary body text. The brand avoids pure `#000000` — the near-black reads softer in body contexts but retains editorial authority.
- **Mute** (`{colors.mute}` — `#696969`): Used for author bylines, section labels, timestamps, and secondary nav text. The h3 headline colour extracted from the CSS — a deliberate secondary voice for supporting story metadata.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): White text on the electric violet Subscribe button.

### Structural
- **Hairline** (`{colors.hairline}` — `#e0e0e0`): 1 px dividers between article cards, nav bottom border, footer top border. The brand uses horizontal rules as the primary spatial separator — no shadow separation here.

### Tabs & Controls
- **Tab Active Background** (`{colors.tab-active-bg}` — `#131313`): The solid black fill of the active "LATEST" tab pill — ink repurposed as an interactive control highlight.
- **Tab Active Text** (`{colors.tab-active-text}` — `#ffffff`): White label inside the active black pill.
- **Tab Inactive Text** (`{colors.tab-inactive-text}` — `#131313`): Ink-coloured label on the ghost inactive tab pill.

### Semantic
- **Link** (`{colors.link}` — `#5200ff`): Inline body links resolve to the same violet as the primary button — one accent, two roles.
- **Success** (`{colors.success}` — `#00a651`): Not visible on the captured surface but held as a semantic token.
- **Error** (`{colors.error}` — `#d0021b`): Not visible on the captured surface but held as a semantic token.

## Typography

### Font Family
The Verge uses the browser's own `ui-sans-serif` as the primary face — the brand does not load a custom or proprietary typeface on its marketing or editorial surfaces. The full stack resolves through `system-ui`, `-apple-system`, `Segoe UI`, `Roboto`, `Helvetica Neue`, and `Arial` in that order. On macOS/iOS the rendering face is SF Pro; on Windows it is Segoe UI; on Android it is Roboto. The brand relies on the system's own geometric quality rather than controlling the letterform.

The typographic voice is entirely constructed through **weight**, **size**, and **letter-spacing** — not through a bespoke typeface. Headlines at weight 900 with slight positive tracking (`+0.24px`) create the tabloid-newspaper register. Body text at weight 400 with neutral tracking reads as deliberately neutral against those headlines.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 900 | 52px | -0.5px | Hero / feature headline at article or section scale. |
| `{typography.display-lg}` | 32px | 900 | 36px | -0.3px | Major section header or large card headline. |
| `{typography.display-md}` | 24px | 900 | 26.4px | +0.24px | Standard article card headline (h2). Extracted exactly. |
| `{typography.display-sm}` | 18px | 900 | 21.6px | 0px | Secondary article headline (h3). Extracted exactly. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Article lead paragraph and standfirst. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph in articles and UI. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary body text, nav links, form labels. |
| `{typography.body-sm-strong}` | 14px | 700 | 20px | 0 | Tab labels ("LATEST", "FOLLOWING"). |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Timestamps, fine print, image captions. |
| `{typography.caption-strong}` | 12px | 700 | 16px | 0 | Author bylines, section category labels. |
| `{typography.label-upper}` | 11px | 400 | 14px | +0.5px | Smallest nav CTA label (extracted from Subscribe button at 11 px). |
| `{typography.nav-link}` | 14px | 700 | 20px | 0 | Nav category links (Tech / Reviews / Science / Entertainment / AI / Policy). |
| `{typography.button-md}` | 12px | 400 | 16px | 0 | Subscribe and CTA button labels at standard size. |
| `{typography.button-sm}` | 11px | 400 | 14px | 0 | Smallest CTA variant (nav Subscribe pill). |
| `{typography.article-headline}` | 24px | 900 | 26.4px | +0.24px | The canonical article card headline — same metrics as display-md, named separately for component clarity. |

### Principles
- **Weight 900 is the editorial voice.** Every headline on the page runs at the maximum weight. The brand never uses a medium weight for display type — it is either 900 (heading) or 400 (body). There is no 600 or 700 in the heading system.
- **Positive letter-spacing on headlines.** Unlike most developer-platform brands that track negatively at display size, The Verge uses a slight positive `+0.24px` at 24 px h2 scale — a deliberate newspaper-style choice that opens the letterspacing rather than tightening it.
- **System font as brand choice.** The absence of a custom typeface is itself a design decision: the brand trusts the platform's default geometric sans to carry its voice, investing instead in weight and scale contrast.
- **Muted h3 is a typographic hierarchy signal.** The h3 colour `{colors.mute}` (`#696969`) is not an accessibility decision — it is a deliberate secondary register for supporting story metadata, section labels, and timestamps.
- **No uppercase transforms in body copy.** Labels and section eyebrows that appear in uppercase are set that way in the markup, not via CSS `text-transform`.

## Layout

### Spacing System
- **Base unit**: 2 px (the brand's smallest captured gap is 4 px, but the scale suggests a 2 px base). In practice the working set is: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 10 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 20 px · `{spacing.2xl}` 24 px · `{spacing.3xl}` 30 px · `{spacing.4xl}` 50 px · `{spacing.5xl}` 64 px · `{spacing.section}` 80 px.
- The most frequently occurring padding on the page is `12px` (×250 in extraction), confirming `{spacing.md}` as the default card interior padding unit.
- `20px` is the second most common (×82), confirming `{spacing.xl}` as the article-row vertical rhythm unit.
- `24px` appears as the button horizontal padding and tab pill horizontal padding — the brand's `{spacing.2xl}` is the CTA padding token.

### Grid & Container
- **Full-width bands**: nav bar, ad slot, and footer all stretch edge-to-edge.
- **Content well**: the main article feed is contained within a centred max-width column (approximately 1200 px) with consistent left/right gutters of `{spacing.lg}` 16 px on desktop.
- **Column patterns**:
  - Primary feed: single-column article card list on mobile, two-column or asymmetric split at desktop (primary story left, supporting stories right).
  - Feed tab row ("LATEST / FOLLOWING"): two-pill centred toggle above the feed.
  - Nav link row: horizontal flex row with "/" separators between category links.

### Whitespace Philosophy
The Verge is deliberately tight. Inter-card spacing is a single `{colors.hairline}` divider — no vertical gap between cards, just the rule. Inside each card the headline/body/byline stack uses `{spacing.md}` 12 px gaps. The page's generous whitespace appears at the macro level: the nav-to-content gap and the ad slot band create breathing room at the top, then the feed runs compressed below. The brand reads as a news product, not a marketing site — information density is the goal.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 600px | Single-column feed; nav collapses to logo + hamburger; Subscribe CTA persists. |
| Tablet | 600–959px | Two-column feed begins; nav links visible. |
| Desktop | 960–1199px | Full nav with all category links; asymmetric feed layout. |
| Wide | ≥ 1200px | Content caps at ~1200px; bands extend edge-to-edge. |

#### Touch Targets
The `nav-cta-subscribe` button renders at approximately 32 px tall — tight but standard for a news publication nav. The tab pills ("LATEST / FOLLOWING") render at approximately 40 px tall, comfortably meeting the 44 × 44 px floor with the 24 px pill radius giving generous tap area.

## Elevation & Depth

The Verge uses essentially no shadow system. The brand's elevation model is flat:

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed nav band, ad slot, hero band. |
| Level 1 — Hairline Rule | 1 px solid `{colors.hairline}` top or bottom border. | Between article cards in the feed; nav bottom border; footer top border. |
| Level 2 — Active Pill | Solid fill `{colors.tab-active-bg}` on the active tab pill. | "LATEST" active state — fill rather than shadow signals selection. |

There is no drop-shadow or box-shadow system. No card floats above the page — everything is flush. Depth is communicated by typographic weight contrast and colour contrast, not shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | All article cards, content bands, nav bar — the page is predominantly square-cornered. |
| `{rounded.button}` | 2px | **Source-of-truth token** — every CTA and subscribe button. Measured directly from the extracted DOM at exactly 2 px. The brand's button is essentially square-cornered with a 1-pixel softening only. |
| `{rounded.xs}` | 2px | Same value as button — used for any tight inline chip or label. |
| `{rounded.sm}` | 4px | Smallest structural radius for form inputs and minimal UI chrome. |
| `{rounded.md}` | 8px | Moderate radius for modal and drawer surfaces. |
| `{rounded.lg}` | 16px | Larger card surfaces in illustrative/example components. |
| `{rounded.pill}` | 24px | The "LATEST / FOLLOWING" feed tab toggle pills — the brand's only pill-shaped interactive control. Extracted from the button radius signal of 24 px. |
| `{rounded.full}` | 9999px | Author avatar chip and icon-only circular controls. |

### Key Geometric Observation
The brand operates with **two radius regimes that could not be more different**: `{rounded.button}` at 2 px (nearly square) for every CTA, and `{rounded.pill}` at 24 px for the feed-tab toggle. These coexist on the same page as distinct affordance classes — the sharp 2 px signals "action" and the pill signals "navigation mode selector."

## Components

### Navigation

**`nav-bar`** — The sticky top navigation band.
- Background `{colors.nav-bg}` white, text `{colors.ink}`, a hairline bottom border in `{colors.hairline}`. Layout: logotype left, category link row with "/" separators at centre, notification bell + Sign In + Subscribe cluster at right. Nav links in `{typography.nav-link}` (14 px / 700). Height approximately 56 px.

**`nav-link`** — Each category link (Tech / Reviews / Science / Entertainment / AI / Policy).
- Text `{colors.ink}`, set in `{typography.nav-link}`, padding `{spacing.xs} {spacing.sm}`. No underline at rest; the "/" separator character between links is set in `{colors.mute}`.

**`nav-cta-subscribe`** — The violet Subscribe pill in the top right.
- Background `{colors.primary}`, text `{colors.on-primary}`, set in `{typography.button-md}` (12 px / 400), padding `{spacing.sm} {spacing.2xl}`, shape `{rounded.button}` 2 px. This is the brand's primary conversion target.

**`nav-cta-signin`** — The "Sign In" text link next to Subscribe.
- Text `{colors.ink}`, set in `{typography.nav-link}`, no background, no border.

### Feed Controls

**`tab-pill-active`** — The active "LATEST" tab.
- Background `{colors.tab-active-bg}` solid black, text `{colors.tab-active-text}` white, label in `{typography.body-sm-strong}` (14 px / 700), padding `{spacing.sm} {spacing.2xl}`, shape `{rounded.pill}` 24 px.

**`tab-pill-inactive`** — The ghost "FOLLOWING" tab.
- Background `{colors.canvas}` white, text `{colors.tab-inactive-text}` ink, 1 px solid `{colors.hairline}` border, same typography and padding as active, shape `{rounded.pill}` 24 px.

### Article Cards

**`article-card`** — The standard article card in the feed.
- Background `{colors.canvas}`, text `{colors.ink}`, headline in `{typography.article-headline}` (24 px / 900 / +0.24 px tracking), padding `{spacing.md}`, shape `{rounded.none}`. Separated from siblings by a `{colors.hairline}` top border. Contains a thumbnail image, headline, optional deck, and byline/timestamp row.

**`article-card-secondary`** — Smaller supporting article card in the right column or below the fold.
- Background `{colors.canvas}`, text `{colors.ink}`, headline in `{typography.display-sm}` (18 px / 900), padding `{spacing.md}`, shape `{rounded.none}`.

**`article-card-headline`** — The headline typographic element inside a card (named separately for component composition).
- Text `{colors.ink}`, set in `{typography.article-headline}`, weight 900.

### Metadata & Labels

**`author-byline`** — The author name label beneath article headlines.
- Text `{colors.mute}`, set in `{typography.caption-strong}` (12 px / 700), letter-spacing +0.5 px. Author name in all-caps or title-case depending on article template.

**`timestamp`** — The relative time indicator ("TWO HOURS AGO").
- Text `{colors.mute}`, set in `{typography.caption}` (12 px / 400). Sits beside or below the author byline.

**`section-label`** — The section/category eyebrow above or within an article card (e.g. the h3 colour treatment).
- Text `{colors.mute}`, set in `{typography.caption-strong}`, slightly tracked.

**`avatar-chip`** — The circular author avatar image beside a byline.
- Background `{colors.canvas-soft}` as placeholder, shape `{rounded.full}`. Approximately 24–32 px diameter.

### Buttons & CTAs

**`button-primary`** — The standard-scale violet CTA button.
- Background `{colors.primary}`, text `{colors.on-primary}`, set in `{typography.button-md}` (12 px / 400), padding `{spacing.sm} {spacing.2xl}`, shape `{rounded.button}` 2 px.

**`button-cta-small`** — The smallest CTA variant extracted from the DOM (11 px, padding 4 px 5 px).
- Background `{colors.primary}`, text `{colors.on-primary}`, set in `{typography.label-upper}` (11 px / 400), padding "4px 5px 5px", shape `{rounded.button}` 2 px.

### Links

**`link-inline`** — Inline body-copy links inside articles.
- Text `{colors.link}` (`#5200ff`), set in `{typography.body-md}`, weight 900 (matching extracted `fontWeight: 900` for link), underlined.

### Feed Layout

**`feed-row`** — The wrapping row for each article card entry in the main feed.
- Background `{colors.canvas}`, text `{colors.ink}`, border-top 1 px solid `{colors.hairline}`, padding `{spacing.md} 0px`. This is the structural spacer — cards sit inside it.

### Page Bands

**`hero-band`** — The top content band below the nav and ad slot.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.lg}`. Hosts the primary feature story at `{typography.display-xl}` weight 900.

**`ad-slot`** — The advertisement placement band between nav and content.
- Background `{colors.canvas-soft}`, padding `{spacing.md}`, shape `{rounded.none}`. Not styled with brand colour — intentionally neutral to let third-party ad creative dominate.

**`footer`** — The bottom navigation and legal band.
- Background `{colors.canvas}`, text `{colors.mute}`, set in `{typography.body-sm}`, border-top 1 px solid `{colors.hairline}`, padding `{spacing.4xl} {spacing.lg}`.

### Notifications & Controls

**`notification-bell`** — The bell icon button in the nav right cluster.
- Text/icon `{colors.ink}`, background `{colors.canvas}`, no border, shape `{rounded.full}` for the touch target.

**`hamburger-menu`** — The overflow menu icon at nav right (visible in the screenshot).
- Text/icon `{colors.ink}`, background `{colors.canvas}`, no border.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (`#5200ff`) for one purpose: the Subscribe CTA and active interactive state. One accent, no exceptions.
- Use weight 900 for every headline regardless of size. The weight IS the brand voice — do not soften to 700 for display type.
- Set article headlines with slight positive letter-spacing (`+0.24px` at 24 px). This is a measured typographic choice, not a default.
- Use `{rounded.button}` (2 px) for all CTA and subscribe buttons. The brand button is essentially square — do not round it to a pill.
- Use `{rounded.pill}` (24 px) exclusively for the feed-tab toggle pills (LATEST / FOLLOWING). The two radius regimes must remain distinct affordance classes.
- Separate article cards with `{colors.hairline}` 1 px horizontal rules. The card separation model is a rule, not a shadow or a gap.
- Use `{colors.mute}` (`#696969`) for all bylines, timestamps, and section labels — the typographic hierarchy is weight + colour together.
- Trust the system font stack. The brand voice comes from weight and scale, not a custom typeface.

### Don't
- Don't introduce a second accent colour. The violet is the brand's only departure from black-and-white. Adding a second colour breaks the editorial restraint.
- Don't use weight 600 or 700 for display headlines. The brand ceiling for body is 700 (byline), and the floor for display is 900. There is no middle weight in the heading system.
- Don't add shadow elevation to article cards. The brand's cards are flat — no `box-shadow`, no `drop-shadow`. A hairline rule is the only separator.
- Don't round CTA buttons beyond 2 px. Converting the Subscribe button to a pill invalidates the brand's deliberate sharp-corner/pill duality.
- Don't use `{colors.primary}` violet for body text, section labels, or decorative elements. It must remain a pure functional signal.
- Don't set body paragraphs in a custom or brand-loaded typeface — the system stack is intentional.
- Don't letter-space body text positively or negatively. Only the 24 px headline scale carries the `+0.24px` tracking; body stays at 0.
- Don't render the brand logo at a small scale inside content — the oversized cropped letterform treatment is a page-scale typographic gesture, not a scalable icon.
