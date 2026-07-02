---
version: alpha
name: Replicate
description: "Replicate is a developer-infrastructure brand whose hero is a full-bleed halftone-dot gradient — hot pink bleeding into magenta into a warm amber-yellow at the bottom right — that functions as the entire decoration system. Against that chromatic noise, a heavy geometric sans (Basier Square) runs at 72 px in flat weight 400, all lowercase, with tight -1.8 px tracking. Below the fold the brand switches to a clean white canvas with near-black ink — a stark two-surface system. The only accent is a saturated tomato-red used for h3 callouts. Buttons are square-cornered rectangles, not pills; 0 px radius is a deliberate brand signal."

colors:
  primary: "#202020"
  on-primary: "#ffffff"
  ink: "#202020"
  body: "#202020"
  mute: "#666666"
  hairline: "#e5e5e5"
  canvas: "#ffffff"
  canvas-soft: "#f5f5f5"
  on-hero: "#ffffff"
  accent-red: "#ea2804"
  hero-gradient-start: "#e040b0"
  hero-gradient-mid: "#cc2299"
  hero-gradient-end: "#f5c800"
  link: "#202020"
  success: "#16a34a"
  error: "#ea2804"
  warning: "#f5a623"
  code-bg: "#1a1a1a"
  code-fg: "#ffffff"
  code-keyword: "#7dd3fc"
  code-string: "#fbbf24"
  code-comment: "#94a3b8"
  tab-active-border: "#202020"

typography:
  display-xl:
    fontFamily: "basier-square, ui-sans-serif, system-ui, sans-serif"
    fontSize: 72px
    fontWeight: 400
    lineHeight: 72px
    letterSpacing: -1.8px
  display-lg:
    fontFamily: "basier-square, ui-sans-serif, system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 52px
    letterSpacing: -1.2px
  display-md:
    fontFamily: "basier-square, ui-sans-serif, system-ui, sans-serif"
    fontSize: 30px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: -0.5px
  display-sm:
    fontFamily: "basier-square, ui-sans-serif, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: normal
  body-lg:
    fontFamily: "basier-square, ui-sans-serif, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: "basier-square, ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: "basier-square, ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  body-sm:
    fontFamily: "basier-square, ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: "basier-square, ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  caption:
    fontFamily: "basier-square, ui-sans-serif, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  button-md:
    fontFamily: "basier-square, ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  button-lg:
    fontFamily: "basier-square, ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  nav-label:
    fontFamily: "basier-square, ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px

spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  section: 128px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    height: 64px
    padding: "{spacing.sm} {spacing.md}"
    borderBottom: "1px solid {colors.hairline}"
  nav-search:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-try:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-announcement-bar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xxs} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  button-sm:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  hero-band:
    backgroundGradient: "halftone-dot radial from {colors.hero-gradient-start} via {colors.hero-gradient-mid} to {colors.hero-gradient-end}"
    textColor: "{colors.on-hero}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.md}"
  code-editor-card:
    backgroundColor: "{colors.code-bg}"
    textColor: "{colors.code-fg}"
    typography: "{typography.code}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  code-tab-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    borderBottom: "1px solid {colors.hairline}"
    activeTabBorderColor: "{colors.tab-active-border}"
  model-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  section-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.4xl} {spacing.md}"
  section-label:
    textColor: "{colors.accent-red}"
    typography: "{typography.display-md}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    borderTop: "1px solid {colors.hairline}"
    padding: "{spacing.xl} {spacing.md}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md-strong}"
  badge-new:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.mute}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs} {spacing.xs}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
    height: 32px
  ex-pricing-tier:
    description: "Default pricing tier card on white canvas with hairline border."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured tier — polarity-flipped to primary ink surface with white text."
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "Model selector summary card on canvas-soft — repurposed for model-tier comparison."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  ex-cart-drawer:
    description: "API usage summary drawer — line items per model run, not a literal e-commerce cart."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row. Active state uses primary ink as a left-edge indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs} {spacing.sm}"
  ex-data-table-cell:
    description: "Model listing table. Header uses body-sm-strong uppercase; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.body-sm-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in card — flat square-cornered chrome with form-input primitives inside."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog surface — flat square chrome with elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state frame on canvas-soft with generous padding."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification — flat square card with hairline border."
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"

---

## Overview

Replicate is an API-first platform for machine learning engineers, and its design language earns that posture in the first scroll frame. The hero is a full-bleed halftone-dot gradient — hot pink bleeding through deep magenta into warm amber-yellow — that sits in direct contrast to everything below it. Once the fold turns, the page becomes a ruthlessly clean white-and-near-black system. That two-surface split is the whole decoration strategy: one loud atmospheric moment at the top, then pure utility.

The typeface is Basier Square, a geometric sans running in a single weight (400) across every size from 72 px hero to 14 px nav link. The brand never leans on weight to create hierarchy — it uses scale and colour instead. The 72 px hero headline drops to -1.8 px letter-spacing; section headings run at 30 px with a lighter -0.5 px pull. There is no bold display weight, no italic, no condensed variant. The system is remarkably monolithic for a consumer-facing developer tool.

Buttons are a decisive branding detail: every interactive element is 0 px radius — a hard square corner. The brand's pill radius (`9999px`) exists in the codebase but appears only on genuinely pill-shaped navigation elements like tag chips, never on call-to-action buttons. The nav-bar CTA ("Try for free") and the hero CTA ("Get started for free") are both square-cornered rectangles. That square geometry, combined with the flat weight typography, gives the product a direct, no-ornament posture that reads as "infrastructure" rather than "consumer app."

The code editor mockup inside the hero section is a dark `{colors.code-bg}` card with syntax-coloured mono text — blues for keywords, ambers for strings — against the halftone-gradient backdrop. It functions as a live API demonstration rather than a screenshot, which is consistent with the brand's "run it right now" promise.

## Colors

### Brand & Hero
- **Hero Gradient Start** (`{colors.hero-gradient-start}` — `#e040b0`): The hot-pink anchor of the hero halftone-dot backdrop. The gradient's loudest moment — used only at hero scale, never miniaturised.
- **Hero Gradient Mid** (`{colors.hero-gradient-mid}` — `#cc2299`): The deep magenta mid-stop of the hero gradient, visible as the dominant hue across the upper two-thirds of the hero band.
- **Hero Gradient End** (`{colors.hero-gradient-end}` — `#f5c800`): The warm amber-yellow that bleeds in from the bottom right corner of the hero. Visible as a warm glow behind the code editor card.
- **Accent Red** (`{colors.accent-red}` — `#ea2804`): A saturated tomato-red used for h3 callout labels below the fold — the only chromatic accent on the white canvas surfaces.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The default page and card surface. Every below-fold section sits on this flat white.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f5f5f5`): A light-gray inset surface used for alternating section backgrounds, badge fills, and form regions.
- **Code BG** (`{colors.code-bg}` — `#1a1a1a`): The near-black surface of every code editor card and terminal block.
- **Hairline** (`{colors.hairline}` — `#e5e5e5`): 1 px borders for cards, table rows, nav bottom borders, and form inputs.

### Text
- **Ink** (`{colors.ink}` — `#202020`): All headings and body paragraphs on white surfaces. The definitive near-black of the system.
- **On Hero** (`{colors.on-hero}` — `#ffffff`): All text sitting directly on the hero gradient — the hero headline, lead paragraph, and CTA label.
- **Mute** (`{colors.mute}` — `#666666`): Secondary and tertiary text — footer links, nav subtext, placeholder labels.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): Text on the primary `{colors.primary}` dark surface.

### Code Syntax
- **Code Keyword** (`{colors.code-keyword}` — `#7dd3fc`): Blue syntax highlighting for keywords and class names in code blocks.
- **Code String** (`{colors.code-string}` — `#fbbf24`): Amber syntax highlighting for string literals and values.
- **Code Comment** (`{colors.code-comment}` — `#94a3b8`): Muted slate for comments and secondary identifiers.

### Semantic
- **Success** (`{colors.success}` — `#16a34a`): Status indicators for successful model runs.
- **Error** (`{colors.error}` — `#ea2804`): Destructive state; doubles as the h3 accent red.
- **Warning** (`{colors.warning}` — `#f5a623`): Caution and pending status indicators.

## Typography

### Font Family
One face carries the entire system: **Basier Square**, a geometric sans that runs in weight 400 from 72 px hero headline to 12 px caption. The brand does not use a separate display weight — hierarchy is built entirely through size and colour. A system monospaced stack (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas`) handles code blocks and terminal mockups; Basier Square never appears in technical code contexts.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 400 | 72px | -1.8px | Hero headline ("Run AI / with an API."). The brand's biggest typographic moment — all lowercase, aggressively tracked. |
| `{typography.display-lg}` | 48px | 400 | 52px | -1.2px | Major section headlines at landing-page scale. |
| `{typography.display-md}` | 30px | 400 | 36px | -0.5px | Sub-section headings; often rendered in `{colors.accent-red}` for callout labels. |
| `{typography.display-sm}` | 24px | 400 | 32px | normal | Tertiary section heads and card titles. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Lead paragraph under the hero headline. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph for all marketing copy. |
| `{typography.body-md-strong}` | 16px | 600 | 24px | 0 | Bold inline body; the brand's only heavy-weight application. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Nav links, secondary body, button labels at small scale. |
| `{typography.body-sm-strong}` | 14px | 600 | 20px | 0 | Nav CTA labels, table emphasis. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Badges, fine print, footer secondary lines. |
| `{typography.code}` | 13px | 400 | 20px | 0 | Inline code, terminal mockups, API examples. |
| `{typography.button-md}` | 14px | 600 | 20px | 0 | Small button labels (nav-scale). |
| `{typography.button-lg}` | 16px | 600 | 24px | 0 | Marketing CTA button labels ("Get started for free"). |
| `{typography.nav-label}` | 14px | 400 | 20px | 0 | Nav bar link labels ("Explore", "Pricing", "Docs", "Blog"). |

### Principles
- **Weight 400 is the display voice.** The brand never uses bold or heavy weights for headlines — 600 appears only on button labels and inline emphasis. This flat-weight approach is non-negotiable; bolding a headline breaks the brand's engineered calm.
- **Negative tracking at display sizes.** The 72 px hero at -1.8 px and 48 px at -1.2 px; tracking eases to neutral at body sizes. Never track positively.
- **Lowercase headlines are intentional.** "Run AI with an API." sits in lowercase — this is the brand's editorial voice, not a typo. Capitalising hero headlines breaks the posture.
- **Scale carries all hierarchy.** Because weight is flat, the jump from 72 px to 14 px is the only differentiator at display scale. Intermediate sizes must be used deliberately.
- **Mono for code only.** Basier Square never appears in code blocks. The monospaced stack is the exclusive voice for technical content.

### Note on Font Substitutes
Basier Square is a commercial geometric sans. Open-source substitutes:
- **Geometric sans** — *Inter* (weight 400 / 600) is the closest match in proportion and open aperture. *DM Sans* at weight 400 is a passable second choice.

## Layout

### Spacing System
- **Base unit**: 4 px. The spacing scale is a pragmatic multi-step set observed as `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 48 px · `{spacing.3xl}` 64 px · `{spacing.4xl}` 96 px · `{spacing.section}` 128 px.
- **Section padding**: marketing bands use `{spacing.4xl}` (96 px) top/bottom. The hero band is more generous to give the gradient room.
- **Card interior padding**: model cards and content cards sit at `{spacing.md}` 16 px; larger feature cards use `{spacing.xl}` 32 px.
- **Inline gap**: nav links, button rows, and tab rows use `{spacing.xs}` to `{spacing.sm}` between siblings.

### Grid & Container
- **Max width**: approximately 1280 px; content centres with `{spacing.md}` 16 px gutters on desktop, `{spacing.sm}` 8 px on mobile.
- **Column patterns**:
  - Hero: single-column headline + CTA left-aligned, code editor card right of fold.
  - Code editor: split two-column — code on left, AI-generated image on right.
  - Model grid: dense card grid below the fold.
  - Nav: logo left, search + links centre-right, CTA cluster far right.

### Whitespace Philosophy
The halftone gradient does the decorative heavy lifting at the top; everything below is engineered whitespace. Section bands are separated by generous `{spacing.4xl}` vertical breathing room. Inside a card the content is tightly packed — the brand trusts whitespace at the macro level and density at the micro level. There is no decorative illustration, no icon system at hero scale — the code editor IS the hero image.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Hero band and polarity-flipped dark sections. |
| Level 1 — Hairline Border | `1px solid {colors.hairline}` | Default card chrome — model cards, nav bottom edge. |
| Level 2 — Subtle Drop | `0px 1px 3px rgba(0,0,0,0.08)` plus hairline border. | Slightly elevated cards. |
| Level 3 — Modal | `0px 4px 16px rgba(0,0,0,0.12)` plus hairline border. | Dropdown menus, modal surfaces. |

The brand's elevation is minimal — hairline borders carry most of the "you can see this card" work. No stacked shadow chains; no heavy drops. The code editor card inside the hero sits flat on the gradient without any shadow at all.

## Components

### Navigation

**`nav-bar`** — the sticky top nav.
- Background `{colors.canvas}`, text `{colors.ink}`, height 64 px, padding `{spacing.sm} {spacing.md}`, 1 px bottom hairline border. Layout: logo left, search bar + nav links in the middle, "Sign in / Try for free" cluster at the far right.

**`nav-search`** — the search input inside the nav bar.
- Background `{colors.canvas}`, placeholder text in `{colors.mute}`, 1 px `{colors.hairline}` border, `{typography.body-sm}`, `{rounded.sm}` 6 px. Displays a `cmd+k` shortcut chip inside the right edge.

**`nav-link`** — individual nav text links ("Explore", "Pricing", "Enterprise", "Docs", "Blog").
- Text `{colors.ink}`, `{typography.nav-label}`, padding `{spacing.xs} {spacing.sm}`. No background, no border on rest state.

**`nav-cta-try`** — the "Try for free" button in the nav.
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.body-sm-strong}`, `{rounded.none}` 0 px, padding `{spacing.xs} {spacing.sm}`. Square-cornered. Preceded by a lightning bolt icon.

**`nav-announcement-bar`** — the top-of-page announcement strip ("Try HappyHorse 1.1 from Alibaba →").
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.body-sm}`, padding `{spacing.xxs} {spacing.md}`. Full-width, dismissible via × button at right.

### Buttons

**`button-primary`** — the canonical marketing CTA ("Get started for free").
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.button-lg}`, `{rounded.none}` 0 px, padding `{spacing.sm} {spacing.md}`. Square corners. Preceded by lightning bolt icon.

**`button-secondary`** — the secondary outlined action.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, `{typography.button-lg}`, `{rounded.none}` 0 px, padding `{spacing.sm} {spacing.md}`.

**`button-sm`** — the small-scale button for nav and compact contexts.
- Background `{colors.canvas}`, text `{colors.ink}`, `{typography.button-md}`, `{rounded.none}` 0 px, padding `{spacing.xs} {spacing.sm}`.

### Hero & Section Bands

**`hero-band`** — the halftone-dot gradient hero section.
- Full-bleed background gradient from `{colors.hero-gradient-start}` through `{colors.hero-gradient-mid}` to `{colors.hero-gradient-end}`, rendered as a halftone-dot texture overlay. Text `{colors.on-hero}`. Headline in `{typography.display-xl}` (72 px / 400 / -1.8 px tracking, lowercase). Lead paragraph in `{typography.body-lg}`. CTA in `button-primary`. Padding `{spacing.4xl} {spacing.md}`.

**`section-band`** — the default below-fold content section.
- Background `{colors.canvas}`, text `{colors.ink}`, section headline in `{typography.display-md}`, padding `{spacing.4xl} {spacing.md}`.

**`section-label`** — the red callout label used above section bodies.
- Text `{colors.accent-red}`, `{typography.display-md}`. Used as a visual category marker, not a badge; it runs inline with the section headline.

### Code & Technical

**`code-editor-card`** — the dark API demonstration block inside the hero.
- Background `{colors.code-bg}`, text `{colors.code-fg}`, `{typography.code}` (monospaced 13 px), `{rounded.none}` 0 px, padding `{spacing.md}`. Syntax: keywords in `{colors.code-keyword}`, strings in `{colors.code-string}`, comments in `{colors.code-comment}`.

**`code-tab-bar`** — the "Node / Python / HTTP" tab strip above the code editor.
- Background `{colors.canvas}`, text `{colors.ink}`, `{typography.body-sm}`, bottom 1 px `{colors.hairline}` border. Active tab underlined with `{colors.tab-active-border}` 2 px.

### Cards

**`model-card`** — the grid card for individual AI models.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, `{typography.body-md}`, `{rounded.none}` 0 px, padding `{spacing.md}`.

### Forms & Inputs

**`form-input`** — the standard text input.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, `{typography.body-sm}`, `{rounded.none}` 0 px, padding `{spacing.xs} {spacing.sm}`, height 32 px.

### Utility

**`badge-new`** — small metadata label (version tags, "New" markers).
- Background `{colors.canvas-soft}`, text `{colors.mute}`, `{typography.caption}`, `{rounded.none}` 0 px, padding `{spacing.xxs} {spacing.xs}`.

**`link-inline`** — inline body-copy links.
- Text `{colors.link}`, `{typography.body-md-strong}`, no underline on rest (brand convention from extraction: `textDecoration: none`).

**`footer`** — the bottom nav and legal block.
- Background `{colors.canvas}`, text `{colors.mute}`, `{typography.body-sm}`, 1 px top `{colors.hairline}` border, padding `{spacing.xl} {spacing.md}`.

## Do's and Don'ts

### Do
- Use `{rounded.none}` 0 px on every button and interactive card. Square corners are a deliberate, load-bearing brand signal — not an oversight.
- Set hero headlines in `{typography.display-xl}` at weight 400, lowercase, with -1.8 px tracking. The flat weight IS the voice.
- Reserve the halftone-dot gradient for the hero band only — never apply it to cards, badges, or buttons.
- Use `{colors.accent-red}` exclusively for h3 callout labels below the fold. It is the only chromatic accent on white surfaces.
- Render all code blocks in the system monospace stack and `{colors.code-bg}` dark surface. Basier Square never appears in code.
- Apply `{colors.hairline}` 1 px borders as the primary elevation cue on white canvas — the brand relies on outlines, not shadows.
- Keep all display typography in weight 400. Weight 600 is reserved for button labels and inline `body-md-strong` emphasis only.

### Don't
- Don't round buttons or CTA cards. A `{rounded.sm}` or `{rounded.pill}` on a CTA breaks the brand's infrastructure posture.
- Don't bold display headlines. A 600-weight hero headline is not Replicate — it reads as a generic SaaS, not a developer-first API brand.
- Don't apply the hero gradient at card or badge scale. The halftone gradient lives at hero-band scale only.
- Don't introduce new accent colours. The system operates with ink + gray + accent-red + hero gradient. New colours dilute the spare voice.
- Don't use positive letter-spacing. Every tracked token is neutral or negative.
- Don't set section headlines in title-case with initial capitals — the brand's lowercase editorial voice extends to headlines below the fold.
- Don't add heavy drop-shadows. The brand's depth system is hairline borders; anything heavier than a 3 px soft drop reads as foreign.
