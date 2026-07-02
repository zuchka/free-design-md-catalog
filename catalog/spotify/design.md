---
version: alpha
name: Spotify-design-system
description: "Spotify's design language is a dark-first, music-native system — near-pitch `#121212` base swallows the entire viewport, and the brand's iconic Spotify Green (`#1ed760`) is the singular accent that pierces it. Every surface is a step of charcoal lifted slightly from the base: elevated cards at `#1f1f1f`, highlighted press states at `#2a2a2a`. There is no second accent colour, no decorative gradient at scale — the album art is the decoration. A proprietary rounded sans (SpotifyMixUI, falling back to Circular) carries every label, heading, and button at weights 400 / 700 only; the brand never reaches for a medium weight. Buttons are fully pill-shaped at `9999px`, cards are softly squared at `8px`, and those two radii never blur together."
colors:
  primary: "#1ed760"
  on-primary: "#000000"
  ink: "#ffffff"
  body: "#b3b3b3"
  mute: "#6a6a6a"
  hairline: "#2a2a2a"
  hairline-strong: "#3e3e3e"
  canvas: "#121212"
  canvas-elevated: "#1f1f1f"
  canvas-elevated-press: "#191919"
  canvas-elevated-highlight: "#2a2a2a"
  canvas-tinted: "#ffffff1a"
  canvas-tinted-highlight: "#ffffff24"
  canvas-tinted-press: "#ffffff36"
  canvas-press: "#000000"
  link: "#1ed760"
  success: "#1ed760"
  error: "#f3727f"
  warning: "#ffa42b"
  announcement: "#539df5"
  on-dark: "#ffffff"
  gradient-upsell-start: "#af2896"
  gradient-upsell-end: "#509bf5"
typography:
  display-lg:
    fontFamily: SpotifyMixUI, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, Helvetica Neue, helvetica, arial, Hiragino Sans, Meiryo, MS Gothic
    fontSize: 32px
    fontWeight: 700
    lineHeight: 36px
    letterSpacing: -0.5px
  display-md:
    fontFamily: SpotifyMixUI, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, Helvetica Neue, helvetica, arial, Hiragino Sans, Meiryo, MS Gothic
    fontSize: 24px
    fontWeight: 700
    lineHeight: 28px
    letterSpacing: -0.3px
  display-sm:
    fontFamily: SpotifyMixUI, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, Helvetica Neue, helvetica, arial, Hiragino Sans, Meiryo, MS Gothic
    fontSize: 18px
    fontWeight: 700
    lineHeight: 24px
  body-lg:
    fontFamily: SpotifyMixUI, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, Helvetica Neue, helvetica, arial, Hiragino Sans, Meiryo, MS Gothic
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md:
    fontFamily: SpotifyMixUI, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, Helvetica Neue, helvetica, arial, Hiragino Sans, Meiryo, MS Gothic
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm:
    fontFamily: SpotifyMixUI, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, Helvetica Neue, helvetica, arial, Hiragino Sans, Meiryo, MS Gothic
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  label-strong:
    fontFamily: SpotifyMixUI, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, Helvetica Neue, helvetica, arial, Hiragino Sans, Meiryo, MS Gothic
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
  label-sm-strong:
    fontFamily: SpotifyMixUI, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, Helvetica Neue, helvetica, arial, Hiragino Sans, Meiryo, MS Gothic
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
  button-md:
    fontFamily: SpotifyMixUI, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, Helvetica Neue, helvetica, arial, Hiragino Sans, Meiryo, MS Gothic
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
  caption:
    fontFamily: SpotifyMixUI, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, Helvetica Neue, helvetica, arial, Hiragino Sans, Meiryo, MS Gothic
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  card: 8px
  button: 9999px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  2xl: 32px
  3xl: 40px
  4xl: 48px
  section: 64px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    height: 64px
    padding: "{spacing.xs} {spacing.xl}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.label-sm-strong}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-login:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.xl}"
  nav-cta-signup:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.xl}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.xl}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    borderColor: "{colors.body}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.xl}"
  button-white:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.xl}"
  button-text:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
  sidebar-panel:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    width: 280px
  sidebar-nav-row:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.label-strong}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  library-card:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
  media-card:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.md} {spacing.lg}"
  artist-card:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
    imageShape: "{rounded.full}"
  section-header:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.md} {spacing.md} {spacing.xs} {spacing.md}"
  show-all-link:
    textColor: "{colors.body}"
    typography: "{typography.label-sm-strong}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    padding: "{spacing.xl} {spacing.md}"
  upsell-banner:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    gradientStart: "{colors.gradient-upsell-start}"
    gradientEnd: "{colors.gradient-upsell-end}"
  search-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
    height: 40px
  badge-explicit:
    backgroundColor: "{colors.body}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 1px {spacing.xxs}
  link-inline:
    textColor: "{colors.body}"
    typography: "{typography.caption}"
  ex-pricing-tier:
    description: Default pricing tier card — elevated surface with hairline border.
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured (Premium) tier — green accent CTA on elevated dark surface.
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses Spotify Green as a left-edge indicator or text highlight.
    backgroundColor: transparent
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  ex-auth-form-card:
    description: Sign-in / sign-up card on dark canvas.
    backgroundColor: "{colors.canvas-elevated}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog — elevated surface on dark scrim.
    backgroundColor: "{colors.canvas-elevated}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty state inside library / playlist area.
    backgroundColor: "{colors.canvas-elevated}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — elevated surface, green accent for success.
    backgroundColor: "{colors.canvas-elevated-highlight}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.md}"
    typography: "{typography.body-md}"
  ex-data-table-cell:
    description: Track list table row. Header uses label-sm-strong; body uses body-md.
    headerBackground: "{colors.canvas}"
    headerTypography: "{typography.label-sm-strong}"
    bodyTypography: "{typography.body-md}"
    cellPadding: "{spacing.xxs} {spacing.md}"
    rowBorder: "{colors.hairline}"
---
## Overview

Spotify's marketing and web-player surface is one of the most confident dark-mode systems on the consumer web. The entire page lives on near-pitch `{colors.canvas}` (`#121212`) — not charcoal, not dark-gray, just short of absolute black — and every surface above it is a deliberate lift: `{colors.canvas-elevated}` (`#1f1f1f`) for cards and sidebars, `{colors.canvas-elevated-highlight}` (`#2a2a2a`) for hover states and hairline dividers, and `{colors.canvas-press}` (`#000000`) for pressed states. The brand never introduces a second accent to compete with its green: `{colors.primary}` (`#1ed760`) appears on exactly one element at a time — the primary CTA, the active play-state, the success indicator — and nowhere else. The album and playlist artwork is the brand's entire visual decoration system.

Type is set entirely in a single proprietary rounded sans (SpotifyMixUI, falling back to the Circular family for international scripts). The weight palette is binary: `400` for body and secondary labels, `700` for every heading, button, and nav item. There is no intermediate `500` or `600`; the brand earns its hierarchy from size and colour step, not weight graduation. Display sizes sit between 18 and 32 px; body text clusters at 12–16 px. Letter-spacing is slightly negative at display sizes, neutral at body sizes.

Shapes split into exactly two systems and they never cross-contaminate: interactive controls — buttons, pills, search bars, the search input, the language selector — use `{rounded.button}` `9999px` (full pill). Content containers — media cards, library rows, the sidebar panel — use `{rounded.card}` `8px`. Artist images are the single exception to both: they use `{rounded.full}` `9999px` as circular crops for the artist photo grid.

The upsell banner at the bottom of the viewport is the brand's one moment of polychrome: a violet-to-blue gradient (`{colors.gradient-upsell-start}` → `{colors.gradient-upsell-end}`) grounds the "Preview of Spotify / Sign up free" strip. Everywhere else the page is monochrome dark with the single green accent.

## Colors

### Brand Accent
- **Primary Green** (`{colors.primary}` — `#1ed760`): The brand's single chromatic accent. Used for the primary CTA button, active playback indicator, and success states. Never diluted to a tint, never used for decoration.
- **On Primary** (`{colors.on-primary}` — `#000000`): Text and icons placed directly on the green CTA surface.

### Surfaces
- **Canvas** (`{colors.canvas}` — `#121212`): The page background — the base layer everything else sits on. Almost-black, not true black.
- **Canvas Elevated** (`{colors.canvas-elevated}` — `#1f1f1f`): The card and sidebar surface. Every media card, library panel, and sidebar drawer lives here.
- **Canvas Elevated Press** (`{colors.canvas-elevated-press}` — `#191919`): Pressed state for elevated surfaces.
- **Canvas Elevated Highlight** (`{colors.canvas-elevated-highlight}` — `#2a2a2a`): Hover/highlight state for elevated surfaces; doubles as a hairline divider tone.
- **Canvas Press** (`{colors.canvas-press}` — `#000000`): The deepest press state on the base canvas.
- **Canvas Tinted** (`{colors.canvas-tinted}` — `#ffffff1a`): A translucent white at 10 % opacity used for ghost-pill backgrounds on dark surfaces.
- **Canvas Tinted Highlight** (`{colors.canvas-tinted-highlight}` — `#ffffff24`): 14 % translucent white for hovered ghost elements.
- **Canvas Tinted Press** (`{colors.canvas-tinted-press}` — `#ffffff36`): 21 % translucent white for pressed ghost elements.

### Text
- **Ink** (`{colors.ink}` — `#ffffff`): Pure white — used for every primary heading, active link, and high-priority label.
- **Body** (`{colors.body}` — `#b3b3b3`): The mid-gray used for secondary labels, nav-link inactive state, artist subtitles, and footer text.
- **Mute** (`{colors.mute}` — `#6a6a6a`): Placeholder text, legal fine print, least-priority UI labels.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): Synonym for ink — used to name the semantic role on dark surfaces.

### Dividers
- **Hairline** (`{colors.hairline}` — `#2a2a2a`): Row separators, panel borders.
- **Hairline Strong** (`{colors.hairline-strong}` — `#3e3e3e`): Slightly more visible dividers in dense list views.

### Semantic
- **Success / Link** (`{colors.success}` — `#1ed760`): Active states, success confirmations, "Now Playing" indicators.
- **Error** (`{colors.error}` — `#f3727f`): Validation errors, destructive action labels.
- **Warning** (`{colors.warning}` — `#ffa42b`): Caution states, content advisory labels.
- **Announcement** (`{colors.announcement}` — `#539df5`): Informational banners, "New" badge tints.

### Gradient
- **Upsell Gradient** (`{colors.gradient-upsell-start}` `#af2896` → `{colors.gradient-upsell-end}` `#509bf5`): The violet-to-blue gradient used exclusively in the upsell/signup bottom banner. The brand's only polychrome moment.

## Typography

### Font Family
SpotifyMixUI is a proprietary rounded sans built for the Spotify brand. Its fallback chain covers Arabic, Hebrew, Cyrillic, Greek, and Devanagari through the CircularSp family before dropping to system sans stacks. For open-source substitution, **Circular Std** (400 / 700) is the closest available match; **Nunito** (400 / 700) is a passable second choice for its rounded terminals.

The brand uses **one typeface, two weights**: `400` for body and secondary labels, `700` for every heading, button, and interactive control label. This binary weight system is non-negotiable to the voice — introducing a 500 or 600 weight reading softens the brand's characteristic contrast.

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-lg}` | 32px | 700 | 36px | -0.5px | Section page-level headlines on marketing surfaces. |
| `{typography.display-md}` | 24px | 700 | 28px | -0.3px | Section headers — "Trending songs", "Popular artists". |
| `{typography.display-sm}` | 18px | 700 | 24px | 0 | Card cluster headlines, upsell headings. |
| `{typography.label-strong}` | 16px | 700 | 24px | 0 | Library panel headings ("Your Library"), sidebar section titles. |
| `{typography.body-lg}` | 16px | 400 | 24px | 0 | Primary body paragraphs, library card descriptors. |
| `{typography.body-md}` | 14px | 400 | 20px | 0 | Secondary body, artist subtitles, nav link labels. |
| `{typography.label-sm-strong}` | 14px | 700 | 20px | 0 | Nav item labels (Premium, Support, Download), "Show all" links, button labels. |
| `{typography.body-sm}` | 12px | 400 | 16px | 0 | Fine-print body, footer secondary text. |
| `{typography.button-md}` | 14px | 700 | 20px | 0 | All button labels at every scale. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Footer links, metadata labels, legal text. |

### Principles
- **Binary weight system.** 400 body, 700 headings and buttons — no intermediate weights appear anywhere in the rendered surface. Hierarchy comes from size and colour step, not weight graduation.
- **Near-neutral letter-spacing.** Slight negative tracking at display sizes (`-0.3` to `-0.5 px`); everything at body scale tracks at 0. The brand never uses positive tracking.
- **No sentence-period termination.** Unlike editorial brands, Spotify section headers are label-style — "Trending songs", "Popular artists" — and do not carry terminal punctuation.
- **Album art as the typographic contrast partner.** The dark surfaces and restrained type system are intentionally calm so that album cover colours dominate the visual hierarchy. Type defers to art.

## Layout

### Spacing System
- **Base unit**: 4 px. Every captured spacing value is a multiple of 4.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 20 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 40 px · `{spacing.4xl}` 48 px · `{spacing.section}` 64 px.
- **Card padding**: media cards and library rows use `{spacing.md}` `{spacing.lg}` (16 × 20 px) — the extracted card padding is exactly `16px 20px`.
- **Inline element gaps**: icon + label rows use `{spacing.xxs}` to `{spacing.xs}` (4–8 px). Section headers to card rows use `{spacing.xs}` (8 px).
- **Nav and sidebar**: both use `{spacing.md}` (16 px) horizontal and `{spacing.xs}` (8 px) vertical internal padding.

### Grid & Container
- **App shell**: fixed left sidebar (~280 px) + scrollable main content area. The sidebar contains the logo, nav links, and library panel. Main content carries the section header + horizontal card rows.
- **Card row pattern**: 5-up horizontal scroll row for both "Trending songs" and "Popular artists" grids at desktop; individual cards are fixed-width with consistent `{rounded.card}` 8 px chrome.
- **Artist image grid**: circular crops (`{rounded.full}`) at consistent size (~160 × 160 px in the visible row), 5-up at desktop.
- **Max width**: the main content area expands to fill the viewport right of the sidebar; no hard max-width container observed on the web player surface.

### Whitespace Philosophy
The dark canvas absorbs whitespace visually — the brand can afford tighter spacing than a light-surface system because the contrast ratio between `{colors.canvas}` and `{colors.canvas-elevated}` card surfaces creates visible separation even at small gaps. Section headers sit close to their card rows (`{spacing.xs}` gap), which gives the page a dense, app-like rhythm distinct from an editorial marketing site. The upsell banner is pinned to the bottom of the viewport, separate from the scroll, so it never competes with content spacing.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Base | No shadow, no border. `{colors.canvas}` `#121212`. | Page background, nav bar background. |
| Level 1 — Elevated | `{colors.canvas-elevated}` `#1f1f1f` surface, no shadow needed — the surface colour step provides the separation. | Media cards, sidebar panel, library rows. |
| Level 2 — Highlight | `{colors.canvas-elevated-highlight}` `#2a2a2a` surface. | Hover states on cards and list rows; hairline dividers. |
| Level 3 — Tinted Overlay | `{colors.canvas-tinted}` `rgba(255,255,255,0.10)` overlay on dark surfaces. | Ghost pill hover states, translucent button backgrounds. |
| Level 4 — Upsell Banner | Violet-to-blue gradient overlay at the bottom of the viewport. | The "Preview of Spotify / Sign up free" strip — the only elevated decorative surface. |

Spotify's elevation system is purely colour-step-based: there are no box shadows on any observed surface. The contrast between `#121212` base and `#1f1f1f` card surface (a ~7-unit lightness difference in HSL) is the entire depth vocabulary. Shadow would add visual noise against the dark background; the brand correctly omits it.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed background bands. |
| `{rounded.xs}` | 2px | Explicit-content badge (`E` label). |
| `{rounded.sm}` | 4px | Sidebar nav row active indicator. |
| `{rounded.md}` | 8px | Media cards, library panel, sidebar container — the card radius. |
| `{rounded.lg}` | 12px | Larger container surfaces where observed. |
| `{rounded.xl}` | 16px | Reserved for large modal surfaces. |
| `{rounded.card}` | 8px | Canonical media card radius — matches measured `8px` from extraction. |
| `{rounded.button}` | 9999px | Every interactive button, CTA, pill, search bar, and language selector. |
| `{rounded.pill}` | 9999px | Explicit pill elements (upsell CTA, "Sign up free" button). |
| `{rounded.full}` | 9999px | Artist image circular crops; icon button containers. |

The two-radius system — `8px` for containers, `9999px` for controls — is the brand's most distinctive shape signature. Mixing them (e.g., a square-cornered button or a pill-shaped card) would immediately break the language.

## Components

### Navigation

**`nav-bar`** — the top navigation bar.
- Background `{colors.canvas}`, text `{colors.ink}`, height 64 px, padding `{spacing.xs} {spacing.xl}`. Layout: Spotify logo left, home icon + search bar centre-left, "Premium / Support / Download" link cluster centre-right, "Install App / Sign up / Log in" CTA cluster far right. All CTAs are pill-shaped at `{rounded.button}`.

**`nav-link`** — the centred link row inside `nav-bar` ("Premium", "Support", "Download").
- Text `{colors.body}`, set in `{typography.label-sm-strong}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.full}`.

**`nav-cta-login`** — the "Log in" pill button in the nav.
- Background transparent, text `{colors.ink}`, label `{typography.button-md}`, shape `{rounded.button}`, padding `{spacing.xs} {spacing.xl}`. Renders with a visible border on the white-outlined pill.

**`nav-cta-signup`** — the "Sign up" pill button in the nav.
- Background `{colors.ink}` (white pill on dark nav), text `{colors.canvas}`, label `{typography.button-md}`, shape `{rounded.button}`, padding `{spacing.xs} {spacing.xl}`.

**`search-bar`** — the rounded search input in the nav area.
- Background `{colors.ink}` (white fill), text `{colors.canvas}`, set in `{typography.body-md}`, shape `{rounded.button}` `9999px`, height 40 px, padding `{spacing.xs} {spacing.md}`.

### Sidebar

**`sidebar-panel`** — the fixed left sidebar container.
- Background `{colors.canvas-elevated}`, text `{colors.ink}`, shape `{rounded.md}` 8 px, padding `{spacing.md}`, width ~280 px.

**`sidebar-nav-row`** — individual nav item rows inside the sidebar ("Your Library").
- Background transparent (hover: `{colors.canvas-elevated-highlight}`), text `{colors.body}`, set in `{typography.label-strong}`, shape `{rounded.sm}`, padding `{spacing.xs} {spacing.md}`.

**`library-card`** — the prompt cards inside the sidebar ("Create your first playlist", "Let's find some podcasts to follow").
- Background `{colors.canvas-elevated}`, text `{colors.ink}`, set in `{typography.body-md}`, shape `{rounded.md}`, padding `{spacing.md} {spacing.lg}`. Contains a white pill CTA button inside.

### Content

**`media-card`** — the canonical album / track / playlist card in the main content area.
- Background `{colors.canvas-elevated}`, text `{colors.ink}`, set in `{typography.body-md}`, shape `{rounded.card}` 8 px, padding `{spacing.md} {spacing.lg}`. Hosts a square album-art image at the top with consistent `{rounded.sm}` image crop. Artist or album title in `{typography.label-sm-strong}`; subtitle in `{typography.body-md}` `{colors.body}`.

**`artist-card`** — the artist photo + name card in the "Popular artists" row.
- Background `{colors.canvas-elevated}`, text `{colors.ink}`, set in `{typography.body-md}`, shape `{rounded.card}` 8 px, padding `{spacing.md}`. Artist image renders as a circle crop using `{rounded.full}`. Name in `{typography.label-sm-strong}`; "Artist" label in `{typography.body-md}` `{colors.body}`.

**`section-header`** — the row containing the section title and "Show all" link.
- Background transparent, title in `{typography.display-md}` `{colors.ink}`, "Show all" in `{typography.label-sm-strong}` `{colors.body}`, padding `{spacing.md} {spacing.md} {spacing.xs} {spacing.md}`.

**`badge-explicit`** — the small "E" explicit-content badge next to track titles.
- Background `{colors.body}`, text `{colors.canvas}`, set in `{typography.caption}`, shape `{rounded.xs}` 2 px, padding `1px {spacing.xxs}`.

### Buttons

**`button-primary`** — the Spotify Green CTA pill.
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.button-md}`, shape `{rounded.button}` 9999 px, padding `{spacing.xs} {spacing.xl}`.

**`button-secondary`** — the outlined/ghost pill variant.
- Background transparent, text `{colors.ink}`, 1 px solid `{colors.body}` border, label `{typography.button-md}`, shape `{rounded.button}`, padding `{spacing.xs} {spacing.xl}`.

**`button-white`** — the white-filled pill used for CTAs on dark panels ("Create playlist", "Browse podcasts").
- Background `{colors.ink}`, text `{colors.canvas}`, label `{typography.button-md}`, shape `{rounded.button}`, padding `{spacing.xs} {spacing.xl}`.

**`button-text`** — a label-only ghost button with no background or border.
- Background transparent, text `{colors.body}`, label `{typography.button-md}`, shape `{rounded.button}`, padding `{spacing.xs} {spacing.sm}`.

### Signature Components

**`upsell-banner`** — the pinned bottom-of-viewport "Preview of Spotify" conversion strip.
- Background `{colors.canvas-elevated}` with the violet-to-blue gradient overlay (`{colors.gradient-upsell-start}` → `{colors.gradient-upsell-end}`), text `{colors.ink}`, set in `{typography.body-md}`, shape `{rounded.md}`, padding `{spacing.md}`. Contains a white pill CTA ("Sign up free") and a brief value-prop copy line.

**`footer`** — the sidebar bottom legal/settings area.
- Background `{colors.canvas}`, text `{colors.body}`, set in `{typography.caption}`, padding `{spacing.xl} {spacing.md}`. Contains language selector pill and legal link row.

**`link-inline`** — inline body links.
- Text `{colors.body}`, set in `{typography.caption}`, no underline by default.

**`show-all-link`** — the "Show all" link at the top-right of each content section.
- Text `{colors.body}`, set in `{typography.label-sm-strong}`.


## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (`#1ed760`) for a single primary CTA and the active playback state per view. One green element at a time is the rule.
- Use `{rounded.button}` `9999px` for every interactive control — buttons, pills, search input, language selector — and `{rounded.card}` `8px` for every content container. Never mix the two scales.
- Render artist photos as circular crops (`{rounded.full}`). Album and playlist art stays square with `{rounded.sm}` crop.
- Use the binary weight system: 700 for every heading and button label, 400 for body and secondary text. Never introduce a 500 or 600 weight.
- Keep the dark surface stack ordered: `{colors.canvas}` base → `{colors.canvas-elevated}` cards → `{colors.canvas-elevated-highlight}` hover states. Elevation is surface colour, never shadow.
- Let album artwork carry the visual colour load. The system chrome should remain monochrome dark so cover art reads with full fidelity.
- Use the violet-to-blue upsell gradient exclusively in the bottom conversion banner. It is a single-use brand moment, not a reusable decoration pattern.

### Don't
- Don't introduce a second accent colour alongside the Spotify Green. The single-accent rule is central to the brand's restraint.
- Don't apply `{rounded.button}` `9999px` to content cards or list containers. The pill shape is reserved for controls only.
- Don't use box shadows on dark surfaces. Elevation is expressed through surface colour steps, not shadow offsets.
- Don't set any button or heading at weight 500 or 600. The brand's weight ceiling for strong text is 700; its floor for all else is 400.
- Don't render the upsell gradient as a general decorative pattern. It belongs exclusively to the bottom signup/upsell strip.
- Don't letter-space headings positively. The brand's display text tracks at neutral-to-slightly-negative; positive tracking reads as wrong on this face.
- Don't display body text in pure white (`{colors.ink}`) where `{colors.body}` (`#b3b3b3`) is the correct secondary register — over-use of white flattens the hierarchy the type scale depends on.
