---
version: alpha
name: Nintendo.com-2001
description: "A Wayback Machine snapshot of Nintendo.com circa February 2001 — a pre-CSS-layout era web property built entirely on HTML tables, inline GIF imagery, and browser-default Times serif. The surface is hospital white with a single purple link tone that serves as the entire interactive affordance system. No box shadows, no border radii, no custom typefaces: the design language is pure early-web utilitarianism, where the brand lives in the game imagery itself rather than in any surface treatment."

colors:
  canvas: "#ffffff"
  ink: "#000000"
  link: "#660099"
  link-visited: "#660099"
  on-dark: "#ffffff"
  wayback-bar-bg: "#f0f0f0"
  wayback-bar-border: "#cccccc"
  donate-banner-bg: "#ffffff"
  donate-banner-text: "#000000"
  footer-text: "#000000"
  table-border: "#000000"
  purple-accent: "#660099"

typography:
  body-md:
    fontFamily: "Times, Times New Roman, serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.2
  body-sm:
    fontFamily: "Times, Times New Roman, serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.2
  body-xs:
    fontFamily: "Times, Times New Roman, serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.2
  body-bold:
    fontFamily: "Times, Times New Roman, serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
  display-md:
    fontFamily: "Times, Times New Roman, serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.2
  caption:
    fontFamily: "Times, Times New Roman, serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.2
  nav-link:
    fontFamily: "Times, Times New Roman, serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.2
  footer-link:
    fontFamily: "Times, Times New Roman, serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.2

rounded:
  none: 0px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px

components:
  wayback-toolbar:
    backgroundColor: "{colors.wayback-bar-bg}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    borderColor: "{colors.wayback-bar-border}"
    padding: "{spacing.xs} {spacing.sm}"
    rounded: "{rounded.none}"
  donate-banner:
    backgroundColor: "{colors.donate-banner-bg}"
    textColor: "{colors.donate-banner-text}"
    typography: "{typography.body-sm}"
    padding: "{spacing.sm} {spacing.md}"
    rounded: "{rounded.none}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "{spacing.xs} {spacing.sm}"
    rounded: "{rounded.none}"
  nav-link:
    textColor: "{colors.link}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs} {spacing.xs}"
  site-logo:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs}"
  hero-image-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.sm}"
    rounded: "{rounded.none}"
  news-blurb:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.sm}"
    rounded: "{rounded.none}"
  news-link:
    textColor: "{colors.link}"
    typography: "{typography.body-bold}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs}"
  table-layout-cell:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "{spacing.xs}"
    rounded: "{rounded.none}"
  image-link-button:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs}"
  section-nav-image:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs} {spacing.xs}"
  game-thumbnail:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs}"
  partner-badge:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs}"
  esrb-badge:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.footer-text}"
    typography: "{typography.footer-link}"
    padding: "{spacing.md} {spacing.lg}"
    rounded: "{rounded.none}"
  footer-link:
    textColor: "{colors.link}"
    typography: "{typography.footer-link}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs} {spacing.xs}"
  footer-legal:
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
  ex-pricing-tier:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.table-border}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
  ex-pricing-tier-featured:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
  ex-product-selector:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
  ex-cart-drawer:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
    item-divider: "{colors.table-border}"
  ex-app-shell-row:
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.purple-accent}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    headerBackground: "{colors.canvas}"
    headerTypography: "{typography.body-bold}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.table-border}"
  ex-auth-form-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  ex-modal-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  ex-empty-state-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.2xl}"
    captionTypography: "{typography.body-sm}"
  ex-toast:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"

---

## Overview

This is Nintendo.com as it existed on 2 February 2001, captured by the Wayback Machine. The page is an artifact of the table-layout web — every element positioned via `<table>` nesting, every navigation item a GIF button, every surface a flat white `#ffffff` rectangle with zero border treatment. There are no rounded corners, no shadows, no CSS classes in any modern sense. The brand's visual identity in this era lived entirely in its game imagery and logo GIFs, not in its surface system.

The interactive affordance vocabulary is a single purple — `#660099` — applied uniformly to every hyperlink on the page, visited or not. Purple was a widely legible link convention in the late-1990s web era, and Nintendo adopted it without variation: nav links, news blurbs, footer pipes, and the small editorial callouts all share this one hue. No hover colour, no pressed state beyond the browser's own UA styling. The only hierarchy is bold weight inside anchor tags for news headlines.

Typography is 100% browser default. The `font-family` is `Times` — the pre-web-font era serif that shipped with every Netscape and IE installation. No custom sizing in the markup visible in this snapshot; sizes would have resolved to the browser's default 16 px medium. Headlines are distinguished by `<b>` tags and `<font size>` attributes rather than a CSS scale.

Layout is a single-column outer table with nested inner tables dividing the page into a top navigation strip, a wide content area split into a left editorial column and a right sidebar of game imagery GIFs, and a footer pipe-separated link row. There are no media queries, no responsive considerations. This is a 800 px-fixed-width design built for 1024 × 768 monitors.

## Colors

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The universal page and cell background. Every table cell, every card analogue, every band is flat white.

### Text
- **Ink** (`{colors.ink}` — `#000000`): Default body and headline text rendered by the browser in Times. Used for news blurbs, legal copy, and the editorial column body.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): White text intended for any dark-surface GIF-image buttons visible in the navigation strip.

### Interactive
- **Link / Purple Accent** (`{colors.link}` — `#660099`): The single interactive affordance color for the entire site. Every `<a>` tag renders in this purple — nav text links, in-body news story links, and all footer navigation links. This purple IS the interactive system.

### Infrastructure (Wayback Machine wrapper)
- **Wayback Bar Background** (`{colors.wayback-bar-bg}` — `#f0f0f0`): The Wayback Machine toolbar's own light-gray surface, injected by archive.org above the original document.
- **Wayback Bar Border** (`{colors.wayback-bar-border}` — `#cccccc`): The dividing border between the Wayback toolbar and the original page content.

### Borders
- **Table Border** (`{colors.table-border}` — `#000000`): Used by HTML `<table border>` attributes where visible grid lines appear.

## Typography

### Font Family
A single face carries the entire system: **Times** (resolved by browsers to Times New Roman, then the system-default serif). This is not a brand choice in the designed-typeface sense — it is the browser default of its era, left intentionally unoverridden. There are no webfonts, no Google Fonts, no `@font-face` declarations. The type system is entirely the operating system's.

Bold (`fontWeight: 700`) is applied via `<b>` tags for news headlines and navigation labels. No italic, no light weight, no tracking adjustments.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display-md}` | 18px | 700 | 1.2 | Section and story display headlines rendered via `<font size>` attributes or `<h3>`. |
| `{typography.body-md}` | 16px | 400 | 1.2 | Default browser body copy — news story editorial text. |
| `{typography.body-bold}` | 14px | 700 | 1.2 | Bolded news headline links; the primary in-body link treatment. |
| `{typography.body-sm}` | 14px | 400 | 1.2 | Secondary body, nav labels, sidebar captions. |
| `{typography.body-xs}` | 12px | 400 | 1.2 | Sub-captions, small notes inside table cells. |
| `{typography.nav-link}` | 13px | 400 | 1.2 | Top navigation text links set in the nav strip GIF/text row. |
| `{typography.footer-link}` | 12px | 400 | 1.2 | Pipe-separated footer nav links. |
| `{typography.caption}` | 11px | 400 | 1.2 | Copyright line and privacy statement fine print. |

### Principles
- **Browser default is the style guide.** The Times serif is inherited; no override exists. The design assumes the browser renders it at 16 px medium.
- **Bold is the only hierarchy tool.** Weight 700 via `<b>` is the sole typographic differentiator between a headline and a body paragraph.
- **Purple alone marks interactivity.** `{colors.link}` `#660099` is the only cue that a text node is a link. Underlines may be present per browser UA defaults.
- **No tracking, no leading adjustments, no custom sizing at scale.** This is pre-CSS-layout; every typographic decision defers to the browser.

### Note on Font Substitutes
Because Times is the browser default serif of its era, any modern reproduction should substitute **Georgia** (a screen-optimized serif with similar proportions) or, if needing strict fidelity, **Times New Roman** rendered at its default UA size. No proprietary faces are involved.

## Layout

### Spacing System
There is no formal spacing token system in the source. All spacing is controlled via HTML `<table cellpadding>`, `<table cellspacing>`, and `<spacer>` GIF elements. The values below are reverse-engineered estimates from typical late-1990s Nintendo table layouts:
- `{spacing.xxs}` 2 px · `{spacing.xs}` 4 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 48 px.

### Grid & Container
- **Outer container**: a single centered `<table>` at approximately 780–800 px wide, designed for 800 × 600 and 1024 × 768 displays.
- **Top navigation strip**: a full-width table row hosting the Nintendo/Game Boy logo GIF at left and a horizontal row of GIF-based navigation buttons.
- **Content split**: the main content area divides into two columns via nested tables — a wider left column (~65%) for editorial news copy and image GIFs, and a narrower right sidebar (~35%) for game screenshot GIFs, the Pokémon banner, and the ESRB badge.
- **Footer row**: a single centered `<p>` containing pipe-delimited text links.
- No responsive breakpoints exist. The page renders at a fixed pixel width.

### Whitespace Philosophy
Whitespace is functional, not expressive. Table `cellpadding` and `cellspacing` keep cells from colliding; there is no "breathing room" philosophy. The page is dense by modern standards — images and text are packed into the table grid with minimal margin. The brand voice in this era is communicated by GIF imagery richness, not by negative space.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | The entire page. Every surface is flat white with no elevation. |
| Level 1 — Table Border | HTML `border="1"` attribute on `<table>` elements. | Visible grid lines on inner layout tables where they appear. |

There is no CSS shadow system. No `box-shadow`, no `filter: drop-shadow`. This snapshot predates those properties' broad adoption. The only "depth" cue is the occasional HTML table border attribute, which produces a hard 1 px `{colors.table-border}` black rule.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Every element on the page — buttons, cells, images. No border radius exists anywhere in this snapshot. |

The era predates `border-radius` in broad use. Every GIF image, every table cell, every link block is hard-rectangular. Rounded shapes visible in navigation or game logos are baked into the GIF imagery itself, not applied via CSS.

## Components

### Navigation

**`nav-bar`** — the top navigation strip holding the site logo and section image-button row.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.xs} {spacing.sm}`, shape `{rounded.none}`. Layout is an HTML table row; actual nav items are GIF image links.

**`nav-link`** — text-based navigation links in the header area.
- Text `{colors.link}`, set in `{typography.nav-link}`, padding `{spacing.xxs} {spacing.xs}`, shape `{rounded.none}`. No hover state beyond browser UA underline.

**`site-logo`** — the Nintendo / Game Boy.com branded logo GIF in the top-left.
- Background `{colors.canvas}`, shape `{rounded.none}`, padding `{spacing.xs}`. Rendered as an `<img>` inside a table cell; acts as a home-page link.

**`section-nav-image`** — the GIF-based section navigation buttons (Hardware, Games, etc.) in the top nav row.
- Background `{colors.canvas}`, shape `{rounded.none}`, padding `{spacing.xxs} {spacing.xs}`. These are linked `<img>` GIFs, not CSS-styled buttons.

### Content

**`hero-image-band`** — the large promotional image GIF across the top of the main content area (Game Boy Advance imagery, character art).
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.sm}`, shape `{rounded.none}`. The visual centrepiece of the page; brand identity lives here.

**`news-blurb`** — the editorial text block in the left content column ("Budda-budda-budda! snarled Sgt. Rock...").
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.body-sm}`, padding `{spacing.xs} {spacing.sm}`, shape `{rounded.none}`.

**`news-link`** — headline links inside the editorial column ("Dynamite and LEGOs? Read on ...", "Game Boy Advance news flash from Japan!").
- Text `{colors.link}`, set in `{typography.body-bold}`, shape `{rounded.none}`, padding `{spacing.xxs}`. The primary in-body interactive element.

**`table-layout-cell`** — the generic table cell container used for all layout regions.
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.body-md}`, padding `{spacing.xs}`, shape `{rounded.none}`. Not a visual component per se — the structural atom of the layout.

**`image-link-button`** — a GIF image wrapped in an `<a>` tag, used for navigation and promotional items throughout the page.
- Background `{colors.canvas}`, shape `{rounded.none}`, padding `{spacing.xxs}`. The universal interactive pattern when text links aren't used.

**`game-thumbnail`** — the small game screenshot or box-art GIF images in the right sidebar column.
- Background `{colors.canvas}`, shape `{rounded.none}`, padding `{spacing.xxs}`. Linked images navigating to game product pages.

**`partner-badge`** — the Pokémon.com banner GIF in the lower right sidebar.
- Background `{colors.canvas}`, shape `{rounded.none}`, padding `{spacing.xs}`. A co-branded linked image.

**`esrb-badge`** — the ESRB Privacy Certified badge at the bottom of the right sidebar.
- Background `{colors.canvas}`, shape `{rounded.none}`, padding `{spacing.xs}`. A trust/compliance marker; non-interactive in display.

**`donate-banner`** — the Internet Archive donation solicitation banner injected at the very top of the page by archive.org.
- Background `{colors.donate-banner-bg}`, text `{colors.donate-banner-text}`, set in `{typography.body-sm}`, padding `{spacing.sm} {spacing.md}`, shape `{rounded.none}`. Not part of the original Nintendo page.

**`wayback-toolbar`** — the Wayback Machine navigation toolbar (URL bar, calendar, date navigation) injected by archive.org.
- Background `{colors.wayback-bar-bg}`, text `{colors.ink}`, set in `{typography.body-sm}`, border `{colors.wayback-bar-border}`, padding `{spacing.xs} {spacing.sm}`, shape `{rounded.none}`. Not part of the original Nintendo page.

### Footer

**`footer`** — the bottom legal and navigation area.
- Background `{colors.canvas}`, text `{colors.footer-text}`, set in `{typography.footer-link}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.none}`. Contains a single row of pipe-delimited text links followed by a copyright line and privacy statement link.

**`footer-link`** — the pipe-separated nav links at the bottom (Newsletter | Hardware | Release Dates | Game List | Game Boy Advance | Downloads | Site Help | Nintendo.com).
- Text `{colors.link}`, set in `{typography.footer-link}`, shape `{rounded.none}`, padding `{spacing.xxs} {spacing.xs}`.

**`footer-legal`** — the copyright and privacy statement fine print.
- Text `{colors.ink}`, set in `{typography.caption}`, shape `{rounded.none}`, padding `{spacing.xxs}`.

**`link-inline`** — any inline body-copy text link not covered by a named component above.
- Text `{colors.link}`, set in `{typography.body-md}`, shape `{rounded.none}`.

## Do's and Don'ts

### Do
- Honour the flat white `{colors.canvas}` as the universal surface. The page has no tinted backgrounds, no card surfaces, no alternating row colours.
- Use `{colors.link}` `#660099` as the sole interactive affordance colour. In this design system, purple IS the interaction pattern — no secondary link colour, no hover accent.
- Render all type in `{typography.body-md}` or its scale variants using the Times serif stack. The browser-default serif is the brand voice of this era.
- Keep all shapes at `{rounded.none}`. Rounded corners belong to a later era of Nintendo.com's design evolution.
- Accept that GIF imagery carries the entire decorative and brand-identity load. The surface system provides no decoration.
- Preserve pipe `|` separators in the footer link row — that visual convention is part of the era's UI grammar.

### Don't
- Don't introduce box shadows, gradients, or background tints. The design predates all of these as web conventions in common use.
- Don't substitute a sans-serif for Times. The serif is the document voice of the era, however unintentional.
- Don't add border radius to any element. Every rectangle on this page is hard-cornered.
- Don't introduce hover states beyond browser-UA default underline/colour changes. There is no JavaScript-driven hover system in this snapshot.
- Don't treat the Wayback Machine toolbar or donation banner as part of the Nintendo design system — they are archive.org injections.
- Don't add multiple link colours. The single purple `{colors.link}` covers every interactive text state in this snapshot; differentiation by hue was not a convention the page uses.
