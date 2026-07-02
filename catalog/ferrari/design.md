---
version: alpha
name: Ferrari
description: "Ferrari's digital surface is as uncompromising as its engineering — a near-total blackout canvas broken only by full-bleed cinematic photography, the Cavallino Rampante prancing horse in white, and the brand's own proprietary sans face rendered at aggressive uppercase tracking. There is no decorative chrome, no gradient system, no colour accent palette: the cars are the decoration. The signature Rosso Corsa exists off-screen as heritage context, surfacing only in the slideshow carousel indicator ring and the occasional editorial flash. Every headline is uppercase, widely tracked, set in the bespoke FerrariSans at weight 500 — authority without ornamentation. Navigation is a flat, transparent bar over full-bleed imagery; buttons are square-cornered, sparse, often just a circle arrow icon beside a spaced-out label. The system is cinema first, interface second."

colors:
  ink: "#000000"
  on-ink: "#ffffff"
  canvas: "#ffffff"
  canvas-dark: "#181818"
  primary: "#da291c"
  on-primary: "#ffffff"
  body: "#181818"
  mute: "#888888"
  hairline: "#333333"
  hairline-light: "#cccccc"
  overlay-dark: "rgba(0,0,0,0.7)"
  overlay-mid: "rgba(0,0,0,0.4)"
  nav-bg: "rgba(0,0,0,0)"
  indicator-active: "#da291c"
  indicator-inactive: "#ffffff"
  carousel-dot: "#ffffff"
  pause-button-bg: "rgba(0,0,0,0)"
  pause-button-border: "#ffffff"

typography:
  display-xl:
    fontFamily: "FerrariSans, sans-serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 54px
    letterSpacing: 4px
  display-lg:
    fontFamily: "FerrariSans, sans-serif"
    fontSize: 36px
    fontWeight: 500
    lineHeight: 42px
    letterSpacing: 3px
  display-md:
    fontFamily: "FerrariSans, sans-serif"
    fontSize: 26px
    fontWeight: 500
    lineHeight: 39px
    letterSpacing: 0.195px
  display-sm:
    fontFamily: "FerrariSans, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 21.6px
    letterSpacing: 1.5px
  body-lg:
    fontFamily: "FerrariSans, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 22.4px
    letterSpacing: 0.08px
  body-md:
    fontFamily: "FerrariSans, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0.5px
  body-sm:
    fontFamily: "FerrariSans, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: 0.5px
  caption:
    fontFamily: "FerrariSans, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 14px
    letterSpacing: 1px
  label-nav:
    fontFamily: "FerrariSans, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: 2px
  label-cta:
    fontFamily: "FerrariSans, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: 2px
  eyebrow:
    fontFamily: "FerrariSans, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: 3px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  full: 9999px

spacing:
  xxs: 5px
  xs: 9px
  sm: 10px
  md: 15px
  lg: 20px
  xl: 40px
  2xl: 60px
  3xl: 80px
  4xl: 120px
  section: 160px

components:
  nav-bar:
    backgroundColor: "{colors.nav-bg}"
    textColor: "{colors.on-ink}"
    typography: "{typography.label-nav}"
    height: 56px
    padding: "{spacing.md} {spacing.xl}"
  nav-link:
    textColor: "{colors.on-ink}"
    typography: "{typography.label-nav}"
    padding: "{spacing.xxs} {spacing.sm}"
    rounded: "{rounded.none}"
  nav-logo:
    textColor: "{colors.on-ink}"
    width: 32px
    padding: "{spacing.sm}"
  hero-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.xl} {spacing.lg}"
  hero-eyebrow:
    textColor: "{colors.on-ink}"
    typography: "{typography.eyebrow}"
    padding: "{spacing.xxs} {spacing.sm}"
  hero-headline:
    textColor: "{colors.on-ink}"
    typography: "{typography.display-xl}"
    letterSpacing: 4px
  button-discover:
    backgroundColor: "{colors.nav-bg}"
    textColor: "{colors.on-ink}"
    borderColor: "{colors.on-ink}"
    typography: "{typography.label-cta}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs} {spacing.sm}"
  button-circle-arrow:
    backgroundColor: "{colors.nav-bg}"
    textColor: "{colors.on-ink}"
    borderColor: "{colors.on-ink}"
    rounded: "{rounded.full}"
    width: 36px
    height: 36px
  carousel-indicator-active:
    backgroundColor: "{colors.nav-bg}"
    borderColor: "{colors.indicator-active}"
    rounded: "{rounded.full}"
    width: 12px
    height: 12px
  carousel-indicator-inactive:
    backgroundColor: "{colors.carousel-dot}"
    rounded: "{rounded.full}"
    width: 8px
    height: 8px
  carousel-pause-button:
    backgroundColor: "{colors.pause-button-bg}"
    borderColor: "{colors.pause-button-border}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.full}"
    width: 36px
    height: 36px
  card-model:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.display-sm}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  card-editorial:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  section-band-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.3xl} {spacing.xl}"
  section-band-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.display-md}"
    padding: "{spacing.3xl} {spacing.xl}"
  footer:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xl} {spacing.xl}"
  footer-link:
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
  link-inline:
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
  badge-category:
    backgroundColor: "{colors.nav-bg}"
    textColor: "{colors.on-ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs} {spacing.sm}"
  overlay-scrim:
    backgroundColor: "{colors.overlay-dark}"
  ex-pricing-tier:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    borderColor: "{colors.hairline-light}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-product-selector:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline-light}"
  ex-app-shell-row:
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs} {spacing.sm}"
  ex-data-table-cell:
    headerBackground: "{colors.canvas-dark}"
    headerTypography: "{typography.eyebrow}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xxs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-modal-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    backgroundColor: "{colors.canvas-dark}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs} {spacing.md}"
    typography: "{typography.body-sm}"

---

## Overview

Ferrari's website is one of the few luxury digital presences that trusts photography so completely that it removes nearly everything else. The full-bleed cinematic hero fills the entire viewport — no card frame, no gradient scrim, no grid overlay. The brand's typographic system is a single proprietary face, FerrariSans, working across every scale from 12 px navigation labels to 48 px hero headlines. Every headline is uppercase, wide-tracked, weight 500. The interface never exceeds that weight; authority comes from letter-spacing and scale, not from heaviness.

The colour palette is a near-binary system: deep black (`{colors.ink}`) as the default canvas for dark surfaces, pure white (`{colors.on-ink}`) for all type and iconography on dark grounds, `{colors.canvas}` white for light-mode content sections, and a single saturated accent — Rosso Corsa (`{colors.primary}`, `#da291c`) — that appears only in the carousel indicator ring and as the heritage red of the cars themselves in photography. There is no secondary accent, no teal, no gradient. The car IS the accent.

Navigation is transparent over the hero image — the bar carries zero background, placing the white Cavallino Rampante horse mark and the five spaced navigation labels (`RACING`, `SPORTS CARS`, `COLLECTIONS`, `EXPERIENCES`, `ABOUT US`) directly over the photograph. Buttons are square-cornered (`{rounded.none}`) throughout; the "DISCOVER" CTA pairs a spaced text label with a bordered circle-arrow icon, both white, both transparent-background. This is the entirety of the brand's CTA vocabulary: a word and a ring.

The hero carousel uses three slides controlled by an active-ring indicator (red ring, white fill becomes active), two solid-dot indicators, and a circular pause button — all in the lower centre and lower-right corners. Every interactive element on the dark surface is white, thin-bordered, and zero-radius.

## Colors

### Surface
- **Ink** (`{colors.ink}` — `#000000`): The primary dark surface. Full-bleed hero backgrounds, dark section bands, the nav bar background (rendered transparent but falls over this tone). The screen reads black because the photography reads black.
- **Canvas** (`{colors.canvas}` — `#ffffff`): The light-mode page surface for content sections outside the hero. White with no tint.
- **Canvas Dark** (`{colors.canvas-dark}` — `#181818`): Used for footer backgrounds and dark-mode card surfaces where a pure black would feel too flat — a shade lighter than true ink.
- **Nav BG / Transparent** (`{colors.nav-bg}` — `rgba(0,0,0,0)`): The navigation bar carries a fully transparent background so the hero photograph bleeds to the top edge. Also the base for buttons and carousel controls that have a visible border but no fill.

### Text
- **On Ink** (`{colors.on-ink}` — `#ffffff`): All text on dark surfaces — nav labels, hero headlines, hero eyebrows, CTA labels, carousel controls.
- **Body** (`{colors.body}` — `#181818`): Paragraph and link text on light canvas sections.
- **Mute** (`{colors.mute}` — `#888888`): Footer secondary text, legal copy, metadata labels.

### Brand Accent
- **Primary / Rosso Corsa** (`{colors.primary}` — `#da291c`): The Ferrari red. Used as the carousel active-indicator ring colour and as the heritage context that the cars carry inside photography. It appears nowhere in the interface chrome as a fill colour.

### Dividers
- **Hairline** (`{colors.hairline}` — `#333333`): Thin separators on dark surfaces.
- **Hairline Light** (`{colors.hairline-light}` — `#cccccc`): Thin separators on light canvas sections.

### Overlays
- **Overlay Dark** (`{colors.overlay-dark}` — `rgba(0,0,0,0.7)`): Scrim applied behind centred hero text to ensure legibility over the brightest areas of the photography (applied at the bottom of the slide where the copy sits).
- **Overlay Mid** (`{colors.overlay-mid}` — `rgba(0,0,0,0.4)`): Lighter scrim for card overlays and secondary image panels.

## Typography

### Font Family
A single proprietary face, **FerrariSans**, carries everything. There is no second typeface, no monospace, no serif. The face appears at weight 400 (body, nav links, CTA labels) and weight 500 (all display headings). Weight 600 and above are never used. The brand achieves emphasis through letter-spacing and uppercase, not through bold weight.

No open-source substitute is an exact match. The closest aesthetic reference is *Futura PT* (for the geometric construction) or *Montserrat* (for the weight ladder). Neither replicates the Ferrari-cut proportions.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 500 | 54px | 4px | Reserved for the largest hero slides when the brand uses a larger scale. |
| `{typography.display-lg}` | 36px | 500 | 42px | 3px | Large section or model-reveal headlines. |
| `{typography.display-md}` | 26px | 500 | 39px | 0.195px | Hero slide headline ("SCUDERIA FERRARI"). Primary hero scale visible in screenshot. |
| `{typography.display-sm}` | 18px | 500 | 21.6px | 1.5px | Section sub-headlines, model name cards. |
| `{typography.body-lg}` | 16px | 400 | 22.4px | 0.08px | Lead body paragraphs inside content bands. |
| `{typography.body-md}` | 14px | 400 | 20px | 0.5px | Secondary body, card descriptions. |
| `{typography.body-sm}` | 12px | 400 | 18px | 0.5px | Footer links, fine print, button labels (extracted at 12px). |
| `{typography.caption}` | 10px | 400 | 14px | 1px | Metadata, legal footnotes. |
| `{typography.label-nav}` | 12px | 400 | 18px | 2px | Navigation link labels — uppercase, wide-tracked. |
| `{typography.label-cta}` | 12px | 400 | 18px | 2px | CTA text labels ("DISCOVER") beside the circle-arrow button. |
| `{typography.eyebrow}` | 12px | 400 | 18px | 3px | Slide category eyebrow above headline ("Racing"). |

### Principles
- **Uppercase is the display register.** Every headline, nav label, CTA label, and eyebrow is uppercase. FerrariSans lowercase exists for body copy only.
- **Wide tracking, never tight.** The brand tracks headlines loosely (2–4 px) — the opposite of the tech-brand convention of negative tracking. Tracking is authority.
- **Weight 500 is the ceiling.** Display sizes stop at 500. The brand never goes to 700 or bold — it reads calmer, more aristocratic for it.
- **One typeface, all roles.** There is no code face, no serif companion. FerrariSans does everything. This is a deliberate reduction — it makes every size feel part of the same family.

## Layout

### Spacing System
- **Base unit**: 5 px (extracted). The brand's spacing scale is `5 / 9 / 10 / 15 / 20 / 40 px` — an irregular rhythm built around the proportions of the photography and the spare interface chrome.
- **Tokens**: `{spacing.xxs}` 5 px · `{spacing.xs}` 9 px · `{spacing.sm}` 10 px · `{spacing.md}` 15 px · `{spacing.lg}` 20 px · `{spacing.xl}` 40 px · `{spacing.2xl}` 60 px · `{spacing.3xl}` 80 px · `{spacing.4xl}` 120 px · `{spacing.section}` 160 px.
- **Button padding**: the extracted button padding is `5px 0px` — an almost zero horizontal pad. The CTA is essentially label + icon, not a padded rectangle.
- **Hero text stack**: the hero copy cluster sits centre-bottom of the slide, using `{spacing.xxs}` between eyebrow and headline, `{spacing.lg}` before the CTA row.
- **Section vertical rhythm**: dark bands use `{spacing.3xl}` top/bottom. The hero is full-viewport with no padding cap — the image fills the screen edge to edge.

### Grid & Container
- **Hero**: 100vw × 100vh, no max-width, no gutter. Photography is the container.
- **Navigation**: full-width, transparent overlay bar, horizontally spaced links with auto flex gap.
- **Content sections** below the hero: likely a max-width of ~1280 px with `{spacing.xl}` 40 px gutters at desktop, narrowing on mobile.
- **Carousel controls**: centred horizontally at the bottom of the hero for the dot-indicator row; the pause button is fixed to the bottom-right corner.

### Whitespace Philosophy
The brand uses whitespace as restraint, not as generosity. The interface chrome occupies a fraction of the screen; the photography occupies the rest. Inside copy clusters, line-spacing is tight (39 px line-height on a 26 px heading) but inter-element gaps are generous. The brand never crowds — not because it has a large spacing scale, but because it puts so little on the page.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border | Full-bleed hero and photography sections. No card elevation is used here. |
| Level 1 — Scrim | `rgba(0,0,0,0.4–0.7)` gradient overlay | Applied over photography to ensure text legibility. This IS the brand's depth system — darkening the image, not casting a shadow on a card. |
| Level 2 — Border Ring | 1px solid white border, transparent background | The circle-arrow button and carousel pause button. No shadow — just a thin ring on the photography. |

The brand uses no drop-shadows whatsoever on UI chrome. There are no elevated cards, no modal shadows in the hero surface. Depth is purely photographic.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Everything — buttons, cards, nav elements, section bands. The brand is entirely square-cornered on UI surfaces. |
| `{rounded.xs}` | 2px | Reserved for micro-UI if needed; not observed in the screenshot. |
| `{rounded.sm}` | 4px | Minor radius if a specific sub-component requires softening; not observed. |
| `{rounded.full}` | 9999px | Circle-arrow CTA button, carousel indicator dots, carousel pause button. The only round elements in the system. |

The brand's shape vocabulary is binary: **square-cornered rectangles** for all content and text elements, **perfect circles** for all icon-button controls. Nothing in between.

## Components

### Navigation

**`nav-bar`** — the transparent overlay navigation bar.
- Background `{colors.nav-bg}` (transparent), text `{colors.on-ink}`, labels in `{typography.label-nav}` (12 px / 400 / 2 px tracking / uppercase), height 56 px. Layout: Cavallino Rampante horse mark left, five nav labels (`RACING / SPORTS CARS / COLLECTIONS / EXPERIENCES / ABOUT US`) distributed across centre-right.

**`nav-link`** — each navigation label.
- Text `{colors.on-ink}`, typography `{typography.label-nav}`, padding `{spacing.xxs} {spacing.sm}`, shape `{rounded.none}`. No hover background — hover state is likely an underline or opacity shift.

**`nav-logo`** — the prancing horse mark in the nav.
- White SVG mark, width ~32 px, placed flush left in the nav bar.

### Hero & Carousel

**`hero-band`** — the full-viewport cinematic slide.
- Background `{colors.ink}` (or full-bleed photograph over it), text `{colors.on-ink}`, headline in `{typography.display-md}` uppercase. Padding applies only to the copy cluster at bottom-centre, not to the image.

**`hero-eyebrow`** — the small category label above the slide headline ("Racing").
- Text `{colors.on-ink}`, typography `{typography.eyebrow}`, padding `{spacing.xxs} {spacing.sm}`, shape `{rounded.none}`. No background, no badge outline — plain spaced uppercase text.

**`hero-headline`** — the slide main headline ("SCUDERIA FERRARI").
- Text `{colors.on-ink}`, typography `{typography.display-md}`, letter-spacing 4 px, uppercase. Sits directly below the eyebrow.

**`button-discover`** — the "DISCOVER" CTA label beside the circle arrow.
- Background `{colors.nav-bg}` (transparent), text `{colors.on-ink}`, typography `{typography.label-cta}`, rounded `{rounded.none}`, padding `{spacing.xxs} {spacing.sm}`. Sits inline with `button-circle-arrow`.

**`button-circle-arrow`** — the circular arrow icon button.
- Background `{colors.nav-bg}`, 1 px solid `{colors.on-ink}` border, rounded `{rounded.full}`, width 36 px, height 36 px. Contains a white right-arrow chevron icon.

**`carousel-indicator-active`** — the active slide dot indicator (red ring with white inner dot).
- Background `{colors.nav-bg}`, 1–2 px solid `{colors.indicator-active}` border, rounded `{rounded.full}`, width ~12 px, height ~12 px. The Rosso Corsa ring is the ONLY appearance of the brand red in UI chrome.

**`carousel-indicator-inactive`** — the inactive slide dot.
- Background `{colors.carousel-dot}` (solid white), rounded `{rounded.full}`, width ~8 px, height ~8 px.

**`carousel-pause-button`** — the pause/play button at the bottom-right of the hero.
- Background `{colors.pause-button-bg}` (transparent), 1 px solid `{colors.pause-button-border}` border, text/icon `{colors.on-ink}`, rounded `{rounded.full}`, width ~36 px, height ~36 px.

**`overlay-scrim`** — the dark gradient scrim behind hero copy.
- Background `{colors.overlay-dark}`, applied as a gradient from transparent to `rgba(0,0,0,0.7)` rising from the bottom of the photograph to cover the copy cluster.

### Content & Cards

**`card-model`** — a model-name card in a content section below the hero.
- Background `{colors.ink}`, text `{colors.on-ink}`, typography `{typography.display-sm}`, rounded `{rounded.none}`, padding `{spacing.lg}`.

**`card-editorial`** — a larger editorial content card (photography + headline + body).
- Background `{colors.ink}`, text `{colors.on-ink}`, typography `{typography.body-lg}`, rounded `{rounded.none}`, padding `{spacing.xl}`.

**`badge-category`** — the small category label used as eyebrow text.
- Background `{colors.nav-bg}`, text `{colors.on-ink}`, typography `{typography.eyebrow}`, rounded `{rounded.none}`, padding `{spacing.xxs} {spacing.sm}`.

**`section-band-dark`** — a full-width dark content section.
- Background `{colors.ink}`, text `{colors.on-ink}`, typography `{typography.display-md}`, padding `{spacing.3xl} {spacing.xl}`.

**`section-band-light`** — a full-width light content section.
- Background `{colors.canvas}`, text `{colors.body}`, typography `{typography.display-md}`, padding `{spacing.3xl} {spacing.xl}`.

### Footer & Utility

**`footer`** — the site footer.
- Background `{colors.canvas-dark}`, text `{colors.mute}`, typography `{typography.body-sm}`, padding `{spacing.xl} {spacing.xl}`.

**`footer-link`** — footer navigation links.
- Text `{colors.mute}`, typography `{typography.body-sm}`, rounded `{rounded.none}`.

**`link-inline`** — body-copy inline links.
- Text `{colors.body}`, typography `{typography.body-md}`.

## Do's and Don'ts

### Do
- Set every headline uppercase with wide positive letter-spacing (2–4 px). Tracking IS the brand voice — reverting to tight or neutral tracking breaks it.
- Use `{rounded.none}` on all rectangular UI chrome — buttons, cards, section bands. Square corners are non-negotiable.
- Pair the "DISCOVER" CTA pattern as a text label + `{rounded.full}` circle-arrow icon — never a padded background-fill rectangle.
- Reserve `{colors.primary}` Rosso Corsa exclusively for the carousel active-indicator ring. Do not use it as a button fill, a hover state, or a text accent anywhere else in the interface chrome.
- Let full-bleed photography carry the decoration. The system has no gradients, no illustration, no icon sets beyond the prancing horse mark and directional arrows.
- Keep the nav bar transparent over the hero image. The nav is part of the photograph, not above it.
- Use weight 500 for display and weight 400 for body — that two-step weight ladder is the entire range. Never go heavier.

### Don't
- Don't introduce a rounded button shape. There are no pill CTAs, no `{rounded.sm}` buttons. Rectangles and circles only.
- Don't add a second typeface. FerrariSans is the entire typographic system. A second face — even a mono — would break the single-voice discipline.
- Don't use Rosso Corsa as a fill colour in UI chrome. It is a heritage colour in photography and a carousel control accent — not a primary CTA fill.
- Don't use a heavy drop-shadow. The brand has no card elevation. Depth is photographic, not material.
- Don't lowercase display headlines. Sentence-case or title-case headlines have no place in this system — uppercase with positive tracking IS the register.
- Don't introduce pastel, gradient, or decorative fill surfaces. The palette is binary: black and white, with a single red accent at minimal scale.
- Don't compress letter-spacing on headlines. The brand's spacing is wide by design; tight tracking reads as a different brand entirely.
