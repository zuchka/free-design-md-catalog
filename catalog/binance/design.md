---
version: alpha
name: Binance
description: "Binance is a crypto-exchange brand that earns trust through weight and contrast: a near-black charcoal canvas punctuated by a single unmistakable golden yellow — the same yellow on every primary CTA, every accent icon, and the wordmark laurels. The surface palette is deliberately restrained to two tones of dark surface plus a bright text layer, letting live price data and percentage gains in green and red carry all the chromatic information. A proprietary sans face (BinanceNova) runs flat at weight 400 for most of the interface, stepping to 500 or 600 only at hero numerals and CTA labels. Corner radii are tight and functional — 4 px on cards and secondary buttons, 8 px on primary CTAs — never a pill, never a circle. This is a trading terminal that happens to have a marketing surface."
colors:
  primary: "#fcd535"
  on-primary: "#202630"
  ink: "#eaecef"
  ink-strong: "#f0f0f0"
  body: "#b7bdc8"
  mute: "#848e9c"
  hairline: "#2b3040"
  hairline-strong: "#3d4463"
  canvas: "#181a20"
  canvas-surface: "#1e2026"
  canvas-card: "#22262e"
  canvas-raised: "#2b2f36"
  canvas-modal: "#1e2026"
  link: "#f0b90b"
  success: "#03a66d"
  success-soft: "#0d2e24"
  error: "#cf304a"
  error-soft: "#2e1018"
  warning: "#f0b90b"
  warning-soft: "#2e2500"
  badge-new: "#fcd535"
  badge-on-new: "#181a20"
  price-positive: "#03a66d"
  price-negative: "#cf304a"
  overlay: "#000000"
typography:
  display-xl:
    fontFamily: BinanceNova, Arial, sans-serif
    fontSize: 56px
    fontWeight: 700
    lineHeight: 64px
    letterSpacing: -1px
  display-lg:
    fontFamily: BinanceNova, Arial, sans-serif
    fontSize: 40px
    fontWeight: 700
    lineHeight: 48px
    letterSpacing: normal
  display-md:
    fontFamily: BinanceNova, Arial, sans-serif
    fontSize: 28px
    fontWeight: 600
    lineHeight: 36px
    letterSpacing: normal
  display-sm:
    fontFamily: BinanceNova, Arial, sans-serif
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: normal
  body-lg:
    fontFamily: BinanceNova, Arial, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: BinanceNova, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: BinanceNova, Arial, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  body-sm:
    fontFamily: BinanceNova, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: BinanceNova, Arial, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  caption:
    fontFamily: BinanceNova, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  caption-strong:
    fontFamily: BinanceNova, Arial, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
  stat-hero:
    fontFamily: BinanceNova, Arial, sans-serif
    fontSize: 48px
    fontWeight: 700
    lineHeight: 56px
    letterSpacing: -1px
  button-md:
    fontFamily: BinanceNova, Arial, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  button-lg:
    fontFamily: BinanceNova, Arial, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  button: 8px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  2xl: 30px
  3xl: 48px
  4xl: 64px
  5xl: 96px
  section: 120px
components:
  announcement-bar:
    backgroundColor: "{colors.canvas-surface}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.xl}"
    height: 44px
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 64px
    padding: "{spacing.xs} {spacing.xl}"
    borderBottom: "{colors.hairline}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-login:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.xs}"
    height: 32px
  nav-cta-signup:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.xs}"
    height: 32px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.4xl}
  button-secondary:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.xs}
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 0px {spacing.xs}
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.3xl} {spacing.xl}"
  hero-stat:
    textColor: "{colors.primary}"
    typography: "{typography.stat-hero}"
    labelTypography: "{typography.display-sm}"
  hero-input-row:
    backgroundColor: "{colors.canvas-surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.xxs}"
    height: 48px
  ticker-table:
    backgroundColor: "{colors.canvas-surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    headerTypography: "{typography.caption-strong}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
    positiveColor: "{colors.price-positive}"
    negativeColor: "{colors.price-negative}"
  ticker-tab:
    backgroundColor: transparent
    activeBackgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.body}"
    activeTextColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.sm}"
  card-market:
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  card-feature:
    backgroundColor: "{colors.canvas-surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  badge-new:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.xs}"
    padding: 2px {spacing.xxs}
  badge-rank:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.xs}"
    padding: 2px {spacing.xxs}
  form-input:
    backgroundColor: "{colors.canvas-surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 0px {spacing.sm}
    height: 48px
  modal-overlay:
    backgroundColor: "{colors.canvas-modal}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  stat-badge:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    labelTypography: "{typography.caption}"
    valueTypography: "{typography.display-sm}"
    iconColor: "{colors.primary}"
  app-download-row:
    backgroundColor: "{colors.canvas-surface}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.sm}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.xl}"
    borderTop: "{colors.hairline}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  news-feed:
    backgroundColor: "{colors.canvas-surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
    categoryTypography: "{typography.caption-strong}"
    categoryColor: "{colors.mute}"
  ex-pricing-tier:
    description: Default feature-tier card. Canvas-card surface with hairline border.
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured tier — polarity-flipped to primary yellow fill with on-primary dark text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: Asset picker / coin selector card — scrollable list of coins with icon + symbol + price.
    backgroundColor: "{colors.canvas-surface}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  ex-cart-drawer:
    description: Order summary panel — fee breakdown and order total before trade confirmation.
    backgroundColor: "{colors.canvas-card}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row inside trading terminal shell. Active state uses primary gold left-edge bar.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.sm}"
  ex-data-table-cell:
    description: Market data table — header in caption-strong muted; price rows in body-sm with positive/negative color.
    headerBackground: "{colors.canvas-surface}"
    headerTypography: "{typography.caption-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xxs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card. Canvas-modal surface with form-input primitives.
    backgroundColor: "{colors.canvas-modal}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog — canvas-modal surface with hairline border and elevated appearance.
    backgroundColor: "{colors.canvas-modal}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty portfolio / no-data frame. Canvas-surface with generous padding.
    backgroundColor: "{colors.canvas-surface}"
    rounded: "{rounded.sm}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — canvas-raised surface with body-sm label.
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Binance operates the world's highest-volume cryptocurrency exchange, and its marketing surface reads like a trading terminal that has been asked to make a first impression. The foundation is a two-step dark canvas — near-black `{colors.canvas}` for the page body, a slightly lighter `{colors.canvas-surface}` for cards and panels — kept so consistent that the single chromatic decision becomes obvious: Binance yellow. `{colors.primary}` (`#fcd535`) carries every primary CTA, every accent icon, the hero stat numerals, the laurel-rank badges, and the wordmark itself. Nothing else is decorative. All the colour information on the actual page comes from live market data — `{colors.price-positive}` green and `{colors.price-negative}` red marking percentage ticks in the ticker panels.

Typography is a single proprietary sans face, BinanceNova, used at weight 400 for every body and nav context, climbing to 500 for button labels and 600–700 for hero numerals. The brand does not employ a second display face, a monospace terminal font, or any decorative typeface. The hierarchy is established entirely through size and weight, not family switching. Hero stats ("322,875,619 USERS TRUST US") are set large and bold in near-white `{colors.ink}` or gold `{colors.primary}`, with zero letter-spacing affectation.

Shapes are tight and deliberately functional. Cards, secondary buttons, and table rows all share a 4 px radius (`{rounded.sm}`). The primary CTA — the yellow "Sign Up" button — steps up to 8 px (`{rounded.button}`), and nothing on the visible marketing surface goes rounder than that. This is a financial platform; rounded pill shapes would read as playful in a context that demands precision.

The ticker table is the page's hero component. It sits as a persistent right-panel alongside the marketing copy, showing live BTC / ETH / BNB / XRP prices with positive percentage gains in green. The visual weight of real-time data is the brand's strongest trust signal — more persuasive than any illustration.

## Colors

### Brand
- **Primary Gold** (`{colors.primary}` — `#fcd535`): The single brand accent. Used on every primary CTA button, the wordmark laurels, hero stat numerals, coin rank badges, and accent icons. The only non-neutral colour in the chrome layer.
- **On-Primary** (`{colors.on-primary}` — `#202630`): The dark charcoal text used on every yellow surface — button labels, badge text on yellow fills.
- **Warning / Link Gold** (`{colors.warning}` / `{colors.link}` — `#f0b90b`): A slightly deeper amber, used for inline text links and the warning-state semantic. Visually close to primary but distinct enough to signal a link rather than a CTA.

### Surface
- **Canvas** (`{colors.canvas}` — `#181a20`): The deepest background. The page body, nav bar, and polarity sections sit on this tone.
- **Canvas Surface** (`{colors.canvas-surface}` — `#1e2026`): The first surface step up from canvas. Ticker table background, card panels, the hero email-capture row background.
- **Canvas Card** (`{colors.canvas-card}` — `#22262e`): The second surface step — individual market data cards, modal interior surfaces.
- **Canvas Raised** (`{colors.canvas-raised}` — `#2b2f36`): Used for secondary buttons, active tab backgrounds, and hovered list items.
- **Canvas Modal** (`{colors.canvas-modal}` — `#1e2026`): Modal dialog and overlay surface — same tone as canvas-surface, paired with a dark overlay scrim.

### Text
- **Ink** (`{colors.ink}` — `#eaecef`): The primary text colour on all dark surfaces. Hero headings, coin names, price values, nav labels.
- **Ink Strong** (`{colors.ink-strong}` — `#f0f0f0`): Slightly brighter white used for the largest display headings where contrast must be maximised.
- **Body** (`{colors.body}` — `#b7bdc8`): Secondary text — sub-labels, column header text in tables, nav-link inactive state, footer body rows.
- **Mute** (`{colors.mute}` — `#848e9c`): Lowest-priority text — timestamps, fine-print captions, placeholder text in inputs, market-data category labels.

### Semantic
- **Success / Price Positive** (`{colors.success}` — `#03a66d`): Every positive percentage change in the ticker table. Also used for "confirmed" / "completed" state badges in the product.
- **Success Soft** (`{colors.success-soft}` — `#0d2e24`): Background fill for success-state alert banners.
- **Error / Price Negative** (`{colors.error}` — `#cf304a`): Every negative percentage change. Also destructive action buttons and form validation errors.
- **Error Soft** (`{colors.error-soft}` — `#2e1018`): Background fill for error-state alert banners.

### Hairlines & Dividers
- **Hairline** (`{colors.hairline}` — `#2b3040`): The default 1 px separator — table row dividers, card borders, input borders.
- **Hairline Strong** (`{colors.hairline-strong}` — `#3d4463`): A stronger divider used for section separators and nav bottom borders.

## Typography

### Font Family
Binance uses a single proprietary face — **BinanceNova** — for the entire interface. No secondary display face, no monospace terminal font. The fallback stack is `Arial, sans-serif`. The face is geometric, slightly condensed, and reads cleanly at small sizes in a dense data context. Open-source substitute: **IBM Plex Sans** (weights 400 / 500 / 600) is the closest structural match; **Inter** is a passable second.

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 700 | 64px | -1px | Largest hero headline ("USERS TRUST US" scale). |
| `{typography.display-lg}` | 40px | 700 | 48px | normal | Section hero headline, extracted h2 at 40px. |
| `{typography.display-md}` | 28px | 600 | 36px | normal | Sub-section headlines, feature-card titles. |
| `{typography.display-sm}` | 20px | 600 | 28px | normal | Stat labels ("No.1 Customer Assets"), card sub-headings. |
| `{typography.stat-hero}` | 48px | 700 | 56px | -1px | The hero counter numeral ("322,875,619") in gold. |
| `{typography.body-lg}` | 18px | 400 | 28px | — | Lead paragraph under hero headline. |
| `{typography.body-md}` | 16px | 400 | 24px | — | Default body paragraph, card body. |
| `{typography.body-md-strong}` | 16px | 500 | 24px | — | Inline emphasis, CTA extracted at 16px/500. |
| `{typography.body-sm}` | 14px | 400 | 20px | — | Ticker table rows, nav links, secondary body. |
| `{typography.body-sm-strong}` | 14px | 500 | 20px | — | Table column values with emphasis, tab labels. |
| `{typography.caption}` | 12px | 400 | 16px | — | Timestamps, fine print, app-download row labels. |
| `{typography.caption-strong}` | 12px | 500 | 16px | — | Table header labels, badge text, category eyebrows. |
| `{typography.button-md}` | 14px | 500 | 20px | — | Secondary button labels, nav CTA "Log In". |
| `{typography.button-lg}` | 16px | 500 | 24px | — | Primary CTA "Sign Up" button label. |

### Principles
- **One face, no exceptions.** BinanceNova carries every context — display, body, button, table header, badge. The brand enforces this rigidly; mixing a second face would feel inconsistent.
- **Weight does the work.** Scale steps are communicated through 400 → 500 → 600 → 700 weight progression, not by switching families. The brand never uses 800 or 900.
- **Normal tracking at body scale.** Unlike the Vercel reference's aggressive negative tracking, Binance uses neutral letter-spacing for body text — appropriate for dense data tables where tracking adjustment would hurt readability.
- **All-caps for hero categories only.** "USERS TRUST US" in the hero headline is all-caps as a deliberate scale-emphasis device. Nav links, button labels, and table headers stay sentence-case.
- **Gold numerals as the hero stat device.** Large counters (user count, rank numbers) are set in `{colors.primary}` or `{colors.ink-strong}` at `{typography.stat-hero}` weight 700.

## Layout

### Spacing System
- **Base unit**: 4 px. Every captured spacing value is a multiple of 4.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 20 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 30 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px · `{spacing.section}` 120 px.
- **Most-used gaps**: 20 px and 24 px appear 63 and 58 times respectively in the extracted page — the brand's workhorse gaps for card grids and nav rows.
- **Section padding**: marketing bands use `{spacing.3xl}` 48 px top/bottom. The hero band stretches to `{spacing.4xl}` to give the stat headline room.
- **Card interior**: cards sit at `{spacing.sm}` 12 px (compact market cards) to `{spacing.xl}` 24 px (feature cards and modals).

### Grid & Container
- **Max width**: approximately 1440 px. Content centres with horizontal gutters of `{spacing.xl}` 24 px on desktop.
- **Column patterns**:
  - Hero split: 60 % copy + 40 % ticker table at desktop; stacks to single column on mobile.
  - Feature row: 2-up or 3-up card grid for exchange features.
  - Ticker table: single-column right panel with tabbed category pills above.
  - Stat badge row: 3-up horizontal strip of "No.1" stat badges with laurel icons.
  - App download row: inline icon group (Google / Apple / QR).

### Whitespace Philosophy
Binance uses whitespace conservatively compared to marketing-first brands. The page is data-dense by design — the ticker table occupies the viewport alongside hero copy. Card interiors are tight (`{spacing.sm}` gap between rows). Section-to-section spacing is moderate (`{spacing.3xl}` 48 px) — just enough to separate bands without the airy spacing of a pure marketing surface. The gold accent does more visual separation work than whitespace.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. `{colors.canvas}` base. | Full-width nav bar, announcement bar, page body. |
| Level 1 — Surface Step | Background steps from `{colors.canvas}` to `{colors.canvas-surface}` — no explicit shadow, colour difference creates the elevation cue. | Ticker table panel, hero input row, most card panels. |
| Level 2 — Card | Background `{colors.canvas-card}` (#22262e) against `{colors.canvas-surface}` parent — the second colour-based elevation step. | Inline market data cards, nested content panels. |
| Level 3 — Raised | Background `{colors.canvas-raised}` (#2b2f36). Used for interactive elements in hover/active state — secondary buttons, active tabs. | Hovered list rows, active tab pills, secondary buttons. |
| Level 4 — Modal Overlay | `{colors.canvas-modal}` surface with a dark semi-transparent scrim behind it. | Dialogs like the visible "unavailable in your country" modal. |

Binance's elevation system is entirely colour-based — no box-shadows appear on the marketing surface. The brand creates depth through progressive surface lightening from `#181a20` → `#1e2026` → `#22262e` → `#2b2f36`. This is the correct approach for a dark-mode-first interface where shadows are near-invisible anyway.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands, announcement bar, full-width dividers. |
| `{rounded.xs}` | 2px | Tightest inline badges — percentage-change pills in the ticker. |
| `{rounded.sm}` | 4px | The universal UI radius — cards, secondary buttons, form inputs, table cells, market data rows. This is the measured `border-radius: 4px` from extraction. |
| `{rounded.button}` | 8px | The primary CTA "Sign Up" button — the only element with a larger radius. Measured at 8px from the extracted CTA element. |
| `{rounded.md}` | 8px | Alias of `{rounded.button}` used for modal surfaces and larger containers. |
| `{rounded.lg}` | 12px | Larger container panels when visible (not primary in screenshot). |
| `{rounded.xl}` | 16px | Reserved for future large media cards. |

**Critical shape note**: The brand deliberately uses `{rounded.sm}` 4 px across cards, secondary buttons, and table rows — maintaining a sharp, data-terminal aesthetic. Only the primary yellow CTA steps to `{rounded.button}` 8 px. No pill shapes appear anywhere on the marketing surface. This asymmetry between the two button radii is a deliberate brand signal.

## Components

### Buttons

**`button-primary`** — the canonical yellow CTA. "Sign Up" in the hero and nav.
- Background `{colors.primary}` gold, text `{colors.on-primary}` dark charcoal, label in `{typography.button-lg}` (16 px / 500), padding `0px {spacing.4xl}` (0px 64px), radius `{rounded.button}` 8 px. Measured directly from extracted CTA: `rgb(252, 213, 53)`, `rgb(32, 38, 48)`, `8px`, `0px 32px`.

**`button-secondary`** — the charcoal-raised secondary button.
- Background `{colors.canvas-raised}`, text `{colors.ink}`, label in `{typography.button-md}` (14 px / 500), padding `0px {spacing.xs}`, radius `{rounded.sm}` 4 px. Measured from extracted button element: `rgb(51, 59, 71)`, 14 px.

**`button-ghost`** — text-only or minimal-chrome action.
- Background transparent, text `{colors.primary}` gold, label in `{typography.button-md}`, radius `{rounded.sm}`.

**`nav-cta-signup`** — the smaller "Sign Up" in the nav bar.
- Background `{colors.primary}`, text `{colors.on-primary}`, radius `{rounded.button}` 8 px, height 32 px.

**`nav-cta-login`** — the "Log In" nav button.
- Background `{colors.canvas-raised}`, text `{colors.ink}`, radius `{rounded.sm}` 4 px, height 32 px.

### Cards & Data Panels

**`card-market`** — the compact market data card.
- Background `{colors.canvas-card}`, text `{colors.ink}`, padding `{spacing.sm}` 12 px, radius `{rounded.sm}` 4 px. Measured from extracted card.

**`card-feature`** — the feature-section panel (exchange features, earn, etc.).
- Background `{colors.canvas-surface}`, text `{colors.ink}`, padding `{spacing.xl}` 24 px, radius `{rounded.sm}` 4 px.

**`ticker-table`** — the live-price table panel at the right of the hero.
- Background `{colors.canvas-surface}`, coin name and symbol in `{typography.body-sm}`, price in `{typography.body-sm-strong}`, percentage in `{colors.price-positive}` or `{colors.price-negative}`, header labels in `{typography.caption-strong}`, rows separated by `{colors.hairline}`, radius `{rounded.sm}`.

**`ticker-tab`** — the category-selector pills above the ticker table ("Popular", "New Listing").
- Inactive: transparent background, `{colors.body}` text. Active: `{colors.canvas-raised}` background, `{colors.ink}` text. Label in `{typography.body-sm-strong}`, padding `{spacing.xxs} {spacing.sm}`, radius `{rounded.sm}`.

**`news-feed`** — the "View All News" panel beside the ticker.
- Background `{colors.canvas-surface}`, category label in `{typography.caption-strong}` `{colors.mute}`, headline in `{typography.body-sm}` `{colors.ink}`, rows divided by `{colors.hairline}`, padding `{spacing.sm} {spacing.md}`.

### Hero Components

**`hero-band`** — the main landing section with stat counter and CTA.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.3xl} {spacing.xl}`. Contains `hero-stat` for the user count, a sub-headline in `{typography.body-lg}`, the stat-badge row, and the hero-input-row.

**`hero-stat`** — the gold counter ("322,875,619 USERS TRUST US").
- The numeral line rendered in `{typography.stat-hero}` in `{colors.primary}` gold; the category line ("USERS TRUST US") in `{typography.display-lg}` `{colors.ink}`.

**`hero-input-row`** — the inline email-capture + CTA row in the hero.
- Background `{colors.canvas-surface}`, hairline border, radius `{rounded.button}` 8 px for the outer pill container, with an inner `button-primary` nested at the right. Height 48 px.

**`stat-badge`** — the "No.1 Customer Assets" / "No.1 Trading Volume" badges with laurel icons.
- Icon in `{colors.primary}` gold, value label in `{typography.display-sm}` `{colors.primary}`, description in `{typography.caption}` `{colors.body}`. Three badges in a horizontal row.

### Overlays & Modals

**`modal-overlay`** — the visible "unavailable in country" dialog.
- Background `{colors.canvas-modal}`, text `{colors.ink}`, padding `{spacing.xl}`, radius `{rounded.md}` 8 px. Contains a gold warning icon, body copy in `{typography.body-md}`, a `button-primary` ("Visit Binance.US"), and a `button-ghost` ("Close").

**`announcement-bar`** — the top-of-page informational bar.
- Background `{colors.canvas-surface}`, text `{colors.body}`, typography `{typography.body-sm}`, padding `{spacing.xs} {spacing.xl}`, height 44 px. Contains an inline link to Binance.US.

### Forms & Inputs

**`form-input`** — the canonical text input.
- Background `{colors.canvas-surface}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, body in `{typography.body-md}` 16 px, padding `0px {spacing.sm}`, height 48 px, radius `{rounded.sm}` 4 px.

### Badges

**`badge-new`** — the "New Listing" or "New" tag.
- Background `{colors.primary}` gold, text `{colors.on-primary}`, typography `{typography.caption-strong}`, radius `{rounded.xs}` 2 px, padding `2px {spacing.xxs}`.

**`badge-rank`** — the "No.1" rank indicator.
- Transparent background, `{colors.primary}` text and border, typography `{typography.caption-strong}`, radius `{rounded.xs}`.

### Navigation & Footer

**`nav-bar`** — the sticky top nav.
- Background `{colors.canvas}`, text `{colors.ink}`, height 64 px, padding `{spacing.xs} {spacing.xl}`, bottom border in `{colors.hairline}`. Layout: Binance wordmark + logo left, link row centre ("Buy Crypto / Markets / Trade / Futures / Earn / Square / More"), icon cluster + "Log In" + "Sign Up" right.

**`nav-link`** — centred nav link row.
- Text `{colors.ink}`, typography `{typography.body-sm}`, padding `{spacing.xs} {spacing.sm}`.

**`footer`** — the bottom multi-column footer.
- Background `{colors.canvas}`, text `{colors.body}`, typography `{typography.body-sm}`, padding `{spacing.3xl} {spacing.xl}`, top border `{colors.hairline}`.

**`app-download-row`** — the Google / Apple / QR-code download strip in the hero.
- Background `{colors.canvas-surface}`, icons for Google, Apple, QR code, typography `{typography.caption}`, radius `{rounded.sm}`, padding `{spacing.xxs} {spacing.sm}`.

**`link-inline`** — body-copy inline text links.
- Text `{colors.link}` gold-amber (`#f0b90b`), typography `{typography.body-md}`.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` gold (`#fcd535`) for primary CTAs, the wordmark, and accent icons. Gold IS the brand's conversion signal — do not dilute it.
- Use `{rounded.button}` 8 px for primary CTAs and `{rounded.sm}` 4 px for everything else (cards, secondary buttons, inputs). Never invert this hierarchy.
- Set BinanceNova (or its substitute IBM Plex Sans) as the single face across all contexts — display, body, button, label, table.
- Communicate elevation through surface colour progression (`{colors.canvas}` → `{colors.canvas-surface}` → `{colors.canvas-card}` → `{colors.canvas-raised}`), not through shadows.
- Use `{colors.price-positive}` green and `{colors.price-negative}` red exclusively for market data percentages — never for brand decoration or UI state unrelated to financial data.
- Keep table rows tight at `{spacing.xxs}` to `{spacing.sm}` padding — the brand's data-density is a trust signal, not a design problem.
- Set the hero stat numeral in `{typography.stat-hero}` weight 700 in `{colors.primary}` gold — that counter IS the brand's social-proof device.

### Don't
- Don't introduce a pill-shaped button. The rounded-pill shape has no place in a financial trading interface. The maximum radius in use is 8 px on the primary CTA.
- Don't add a decorative gradient. Binance has no mesh, no multi-stop atmospheric gradient. The only gradient present is the gold-to-yellow of the primary accent, and it is never used as a page backdrop.
- Don't introduce a second typeface. The entire brand runs on BinanceNova. A second face would read as inconsistency, not sophistication.
- Don't use `{colors.success}` green or `{colors.error}` red for anything except price data and form validation. These colours carry strong financial meaning; misusing them creates confusion.
- Don't lighten the canvas. The near-black `{colors.canvas}` (`#181a20`) is the brand's trust surface — a lighter background would undermine the premium, secure feel of a financial platform.
- Don't letter-space body or display text. BinanceNova reads cleanly at default tracking; artificial spacing would clash with the face's geometry.
- Don't reduce the data density of the ticker table. The live-price panel in the hero is the brand's strongest conversion tool — treat it as a product feature, not a decorative element.
