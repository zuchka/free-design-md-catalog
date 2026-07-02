---
version: alpha
name: Slack
description: "Slack is an AI work platform whose visual identity is a confident duet of deep aubergine and white — the brand's signature purple (#611f69) owns every primary CTA, the nav border, and the Salesforce parentage badge, while the rest of the marketing surface runs on near-white canvas and pure black ink. Headlines are set in a proprietary geometric sans (Salesforce Avant Garde) at billboard weight 700 with tight negative tracking; body copy shifts to a companion humanist sans (Salesforce Sans) at comfortable reading weight. The only decoration is a soft pink-to-lavender gradient bloom that bleeds off the left and right edges of the hero, framing the product screenshot like a glow — the brand's equivalent of Vercel's mesh: atmospheric, never iconographic. CTAs are square-cornered rectangles at 4 px radius, not pills — a deliberate engineering-product posture."
colors:
  primary: "#611f69"
  on-primary: "#ffffff"
  ink: "#000000"
  body: "#1d1c1d"
  mute: "#696969"
  hairline: "#e0e0e0"
  canvas: "#ffffff"
  canvas-soft: "#f4ede4"
  canvas-hero: "#fff8f0"
  link: "#611f69"
  link-hover: "#4a154b"
  on-dark: "#ffffff"
  nav-border: "#dddddd"
  button-outline-border: "#611f69"
  success: "#007a5a"
  error: "#e01e5a"
  warning: "#ecb22e"
  gradient-hero-left: "#f5e6ff"
  gradient-hero-right: "#fff0e0"
  aubergine-deep: "#4a154b"
  salesforce-blue: "#00a1e0"
typography:
  display-xl:
    fontFamily: Salesforce-Avant-Garde, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 64px
    fontWeight: 700
    lineHeight: 71.68px
    letterSpacing: -0.768px
  display-lg:
    fontFamily: Salesforce-Avant-Garde, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 58px
    fontWeight: 700
    lineHeight: 72.5px
    letterSpacing: -0.464px
  display-md:
    fontFamily: Salesforce-Avant-Garde, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 36px
    fontWeight: 700
    lineHeight: 42px
    letterSpacing: -0.3px
  display-sm:
    fontFamily: Salesforce-Avant-Garde, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 30px
    letterSpacing: -0.096px
  body-lg:
    fontFamily: Salesforce-Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Salesforce-Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 26px
  body-sm:
    fontFamily: Salesforce-Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22px
  body-xs:
    fontFamily: Salesforce-Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 18px
  caption:
    fontFamily: Salesforce-Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-cta:
    fontFamily: Salesforce-Avant-Garde, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
  button-md:
    fontFamily: Salesforce-Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 15px
    fontWeight: 700
    lineHeight: 20px
  nav-label:
    fontFamily: Salesforce-Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 15px
    fontWeight: 400
    lineHeight: 20px
  label-caps:
    fontFamily: Salesforce-Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 12px
    fontWeight: 700
    lineHeight: 16px
    letterSpacing: 0.6px
rounded:
  none: 0px
  button: 4px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 40px
  4xl: 48px
  5xl: 64px
  6xl: 96px
  section: 120px
components:
  announcement-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-xs}"
    borderBottom: "{colors.nav-border}"
    padding: "{spacing.sm} {spacing.xl}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    borderBottom: "{colors.nav-border}"
    height: 72px
    padding: "{spacing.lg} {spacing.xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.sm} {spacing.md}"
  nav-cta-demo:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    borderColor: "{colors.button-outline-border}"
    typography: "{typography.button-cta}"
    rounded: "{rounded.button}"
    padding: 10px {spacing.3xl}
  nav-cta-get-started:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-cta}"
    rounded: "{rounded.button}"
    padding: 10px {spacing.xl}
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-cta}"
    rounded: "{rounded.button}"
    padding: 19px {spacing.3xl} 20px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    borderColor: "{colors.button-outline-border}"
    typography: "{typography.button-cta}"
    rounded: "{rounded.button}"
    padding: 19px {spacing.3xl} 20px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.lg}"
  hero-band:
    backgroundColor: "{colors.canvas-hero}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section} {spacing.xl}"
  logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.caption}"
    padding: "{spacing.xl} {spacing.2xl}"
  feature-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  product-screenshot-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm}"
    shadow: rgba(0, 0, 0, 0.1) 0px 5px 20px 0px
  tag-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.lg}"
    shadow: rgba(0, 0, 0, 0.1) 0px 5px 20px 0px
  section-band-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.section} {spacing.xl}"
  section-band-soft:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.section} {spacing.xl}"
  section-band-dark:
    backgroundColor: "{colors.aubergine-deep}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    padding: "{spacing.section} {spacing.xl}"
  pricing-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
    borderColor: "{colors.hairline}"
  pricing-card-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
    height: 48px
  badge:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.md}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  footer:
    backgroundColor: "{colors.aubergine-deep}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.xl}"
  ex-pricing-tier:
    description: Default pricing tier card. White surface with hairline border, brand body typography, and a purple CTA at the bottom.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-pricing-tier-featured:
    description: Featured tier — polarity-flipped to aubergine primary with white text and white-outlined CTA.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-product-selector:
    description: What's Included summary panel — used for plan feature comparison lists.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    description: Subscription summary drawer — line items per plan tier or add-on.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row inside the Slack product shell. Active state uses brand primary as a left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  ex-data-table-cell:
    description: Data table chrome. Header uses label-caps uppercase; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.label-caps}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.lg}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in card. White surface with form-input primitives and a full-width purple CTA.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-modal-card:
    description: Modal dialog surface — white card with hairline border and soft drop shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-empty-state-card:
    description: Empty-state frame. Soft canvas background with centred caption and illustration.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.4xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification surface — white card with soft shadow and body-sm label.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"
---
## Overview

Slack's marketing surface is one of the more self-assured enterprise-consumer hybrids on the web. The visual system reduces to a single chromatic decision — deep aubergine (`{colors.primary}`) on white — and then repeats that choice with unusual consistency across every CTA, every nav accent, and every active-state indicator. The page never reaches for a second accent colour. The only relief is a diffuse pink-to-lavender gradient bloom bleeding in from the left and right edges of the hero band, framing the product screenshot with the subtlety of a spotlight rather than a decoration.

The typographic system is similarly focused. Two proprietary Salesforce faces do all the work: Salesforce Avant Garde for every headline (64 px hero down to 24 px card label, always weight 700, always negative-tracked), and Salesforce Sans for every body line, nav label, and button. The two faces pair cleanly because they share proportions — Avant Garde is the display register, Sans is the text register, and neither appears outside its lane. Headlines are sentence-case, period-terminated at the largest sizes, and set with measured negative letter-spacing that tightens as size increases.

Shape is where Slack diverges most sharply from pill-button contemporaries. Primary CTAs are 4 px-radius rectangles — almost square-cornered — which reads as intentional and serious against the soft purple fill. The `{rounded.button}` token is `4px` and it governs every interactive control. The one exception is the tag-pill and card component extracted from the page's floating UI mockup labels, which use a full `{rounded.pill}` 999 px to signal a different register entirely: those are status indicators, not actions.

Salesforce parentage is visible in the co-branding lockup below the Slack wordmark and in the `{colors.salesforce-blue}` accent that appears in certain Salesforce-integrated feature callouts, though the marketing page itself uses it sparingly. The footer flips to the deep aubergine (`{colors.aubergine-deep}`) — same hue family as primary, darker — for the polarity-flip section that closes the page.

## Colors

### Brand

- **Primary** (`{colors.primary}` — `#611f69`): The single aubergine that carries every CTA button fill, every nav border accent, every active indicator, every link color. It is the brand color, used without a secondary companion.
- **Aubergine Deep** (`{colors.aubergine-deep}` — `#4a154b`): The darkened variant of the primary, used as the footer band background and in polarity-flipped dark sections. Visibly the same hue family, 15–20 % darker.
- **Salesforce Blue** (`{colors.salesforce-blue}` — `#00a1e0`): The Salesforce corporate blue, visible in the co-brand lockup and Salesforce-connected feature zones. Used sparingly — not a page-wide accent.

### Surface

- **Canvas** (`{colors.canvas}` — `#ffffff`): The default card and page background. Every feature card, pricing card, and dialog sits on pure white.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f4ede4`): A warm cream-peach used for alternating section backgrounds and soft inset panels.
- **Canvas Hero** (`{colors.canvas-hero}` — `#fff8f0`): The near-white warm tint behind the hero band — slightly warmer than canvas, gives the gradient bloom a richer base to bleed into.

### Gradient

- **Gradient Hero Left** (`{colors.gradient-hero-left}` — `#f5e6ff`): The pink-lavender bloom that fades in from the left edge of the hero, keyed to the brand's purple family.
- **Gradient Hero Right** (`{colors.gradient-hero-right}` — `#fff0e0`): The warm peach-cream bloom from the right edge, pairing with the left to create a warm-cool atmospheric frame around the product screenshot.

### Text

- **Ink** (`{colors.ink}` — `#000000`): All headlines and primary body text on light surfaces.
- **Body** (`{colors.body}` — `#1d1c1d`): The near-black used for secondary body copy and Slack's native UI chrome text.
- **Mute** (`{colors.mute}` — `#696969`): Low-priority labels — "Trusted by top teams" caption, fine print, footer secondary lines.
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — `#ffffff`): White text on `{colors.primary}` CTAs and `{colors.aubergine-deep}` footer surfaces.

### Semantic

- **Link** (`{colors.link}` — `#611f69`): Inline links share the primary aubergine.
- **Link Hover** (`{colors.link-hover}` — `#4a154b`): The deeper pressed/hover variant.
- **Hairline** (`{colors.hairline}` — `#e0e0e0`): Card borders, table row dividers, input borders.
- **Nav Border** (`{colors.nav-border}` — `#dddddd`): The 1 px bottom rule on the sticky nav bar.
- **Success** (`{colors.success}` — `#007a5a`): Slack's canonical green, used for active/online status indicators and success states.
- **Error** (`{colors.error}` — `#e01e5a`): The brand's alert pink-red for destructive actions and error states.
- **Warning** (`{colors.warning}` — `#ecb22e`): The brand's amber for caution states.

## Typography

### Font Family

Two proprietary Salesforce faces carry the entire system:

1. **Salesforce Avant Garde** — the custom geometric display sans for every headline, display label, and button label. Weight 700 exclusively on the marketing surface. The face has geometric proportions with circular bowls; it reads as authoritative and warm simultaneously. Open-source substitute: *Nunito* (700) or *Poppins* (700) captures the rounded-geometric quality; *Montserrat* (700) is the most common fallback.
2. **Salesforce Sans** — the custom humanist sans for body copy, nav labels, captions, and form inputs. Weights 400 and 700 are the working set on this surface. Open-source substitute: *Source Sans 3* (400/700) is the closest stylistic match.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 700 | 71.68px | -0.768px | Hero headline ("All your people and AI agents working together.") |
| `{typography.display-lg}` | 58px | 700 | 72.5px | -0.464px | Large section headlines on dark/inverted bands |
| `{typography.display-md}` | 36px | 700 | 42px | -0.3px | Mid-page section headlines on light bands |
| `{typography.display-sm}` | 24px | 700 | 30px | -0.096px | Feature-card headlines, pricing tier names |
| `{typography.body-lg}` | 20px | 400 | 28px | 0 | Hero lead paragraph below the headline |
| `{typography.body-md}` | 18px | 400 | 26px | 0 | Default body paragraph, feature descriptions |
| `{typography.body-sm}` | 15px | 400 | 22px | 0 | Nav links, secondary body, button ghost labels |
| `{typography.body-xs}` | 13px | 400 | 18px | 0 | Announcement bar text, fine-print footnotes |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Logo-strip label, "Trusted by top teams" |
| `{typography.button-cta}` | 14px | 700 | 20px | 0 | All primary and secondary CTA button labels |
| `{typography.button-md}` | 15px | 700 | 20px | 0 | Ghost / outline button labels, nav CTA labels |
| `{typography.nav-label}` | 15px | 400 | 20px | 0 | Main nav dropdown labels |
| `{typography.label-caps}` | 12px | 700 | 16px | 0.6px | Eyebrow labels, table headers, uppercase category labels |

### Principles

- **Negative tracking scales with size.** The 64 px hero sits at `-0.768 px` tracking; the 24 px display-sm tracks at `-0.096 px`. The tighter the size, the looser the hand on tracking. This is the brand's most precise typographic decision.
- **Weight 700 is the headline ceiling.** Avant Garde never appears lighter than 700 on the marketing surface. There is no 600-weight display — the brand reads bolder than Vercel by design.
- **Sentence-case, period-terminated at hero.** "All your people and AI agents working together." ends with a deliberate period at hero scale, part of the brand's conversational-assertive voice.
- **Button labels use Avant Garde, not Sans.** CTAs inherit the display face at 14 px / 700 — a subtle distinction that makes buttons feel more branded and less generic.
- **All-caps appears only in structural labels.** `{typography.label-caps}` with `0.6 px` tracking is reserved for eyebrows and table headers — never for headline or body text.

## Layout

### Spacing System

- **Base unit**: 4 px. The spacing scale steps in 4 px multiples (4, 8, 12, 16, 24) with 6 px as an intermediate step for tight-packed UI elements.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 40 px · `{spacing.4xl}` 48 px · `{spacing.5xl}` 64 px · `{spacing.6xl}` 96 px · `{spacing.section}` 120 px.
- **Section padding**: marketing bands use `{spacing.section}` 120 px top/bottom. The hero has additional breathing room to let the gradient bloom fill the frame.
- **Card interior padding**: feature cards use `{spacing.xl}` 24 px; pricing cards step up to `{spacing.2xl}` 32 px.
- **CTA padding**: the primary hero button uses 19 px / 20 px top/bottom with `{spacing.3xl}` 40 px side padding — wide, not tall. The nav CTA is tighter at 10 px top/bottom.

### Grid & Container

- **Max width**: approximately 1200 px; content centres with `{spacing.xl}` 24 px horizontal gutters on desktop, `{spacing.lg}` 16 px on mobile.
- **Column patterns**:
  - Hero: centred single-column headline + body + CTA row, then full-width product screenshot below.
  - Logo strip: ~6 logos wide in a single flex row, centred.
  - Feature grid: 3-up cards at desktop, 1-up stacked at mobile.
  - Pricing grid: 3–4 up at desktop with featured card polarity-flipped; vertical stack at mobile.

### Whitespace Philosophy

The hero gradient bloom does the atmospheric work; whitespace handles section separation. The brand is generous between bands (`{spacing.section}`) and tight inside card clusters (8–12 px between headline and body). The product screenshot sits in a generous white frame, padded from the hero copy above — the screenshot IS the hero's payload and the layout gives it room. Section alternation between `{colors.canvas}`, `{colors.canvas-soft}`, and `{colors.aubergine-deep}` is the primary depth and pacing cue.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero, footer, and polarity-flipped bands. |
| Level 1 — Hairline | 1 px solid `{colors.hairline}` border. | Default card chrome — pricing cards, feature cards. |
| Level 2 — Soft Drop | `rgba(0, 0, 0, 0.1) 0px 5px 20px 0px` | Product screenshot card, tag-pill UI mockup labels, elevated feature panels. |
| Level 3 — Modal | `rgba(0, 0, 0, 0.15) 0px 8px 32px 0px` plus hairline border. | Dialog / modal surfaces and dropdown menus. |

Slack uses a single consistent soft drop shadow — one layer, wide blur, low opacity — rather than a stacked multi-offset system. Cards feel grounded rather than floating; the shadow is gentle enough that the page still reads flat-first.

### Decorative Depth

- **Gradient bloom as atmospheric depth**: the pink-lavender and warm-peach blooms in the hero are the brand's only atmospheric effect — 2-D diffuse colour bleeds, never illustrated or iconographic. Used at hero scale only.
- **Polarity-flipped aubergine band**: switching from `{colors.canvas}` to `{colors.aubergine-deep}` in the footer is the brand's chief dark-mode depth cue.
- **Product screenshot as depth prop**: the macOS-chrome screenshot sitting inside the hero is rendered at Level 2 elevation with rounded corners, giving it a "hovering above the page" quality.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero, footer, and announcement-bar bands. |
| `{rounded.button}` | 4px | Every interactive button and form input — the brand's universal control radius. Square-cornered by design. |
| `{rounded.xs}` | 4px | Alias of button; smallest general-purpose radius. |
| `{rounded.sm}` | 6px | Minor inset panels, tooltip chrome. |
| `{rounded.md}` | 8px | Feature cards, pricing cards, product screenshot inner panels. |
| `{rounded.lg}` | 12px | Larger card chrome hosting imagery. |
| `{rounded.xl}` | 16px | Modal dialogs and large overlay surfaces. |
| `{rounded.pill}` | 999px | Tag-pill UI mockup labels floating over the product screenshot; the badge component. NOT used for CTAs. |
| `{rounded.full}` | 9999px | Avatar circles, icon-button circular containers. |

The 4 px button radius is the brand's most deliberate shape decision. It reads as purposeful-square rather than pill-soft — the brand is signalling productivity tool, not consumer app. The coexistence of `{rounded.button}` (4 px, CTAs) and `{rounded.pill}` (999 px, status tags) is intentional: two registers, two meanings.

## Components

### Buttons

**`button-primary`** — the canonical aubergine CTA rectangle.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-cta}` (14 px / 700 / Avant Garde), padding `19px {spacing.3xl} 20px`, shape `{rounded.button}` 4 px. Renders approximately 52 px tall in the hero layout. "GET STARTED" is all-caps — the only all-caps usage in button labels on this surface.

**`button-secondary`** — the outline CTA paired with the primary in hero and section rows.
- Background `{colors.canvas}`, text `{colors.primary}`, 1 px solid `{colors.button-outline-border}` border, same typography + padding + radius as `button-primary`.

**`button-ghost`** — the transparent-background button used for low-priority actions.
- Background transparent, text `{colors.ink}`, label in `{typography.button-md}` (15 px / 700 / Sans), shape `{rounded.button}`.

**`nav-cta-demo`** — "REQUEST A DEMO" in the nav, outline variant.
- Background `{colors.canvas}`, text `{colors.primary}`, border `{colors.button-outline-border}`, label `{typography.button-cta}`, shape `{rounded.button}`.

**`nav-cta-get-started`** — "GET STARTED" in the nav, filled variant.
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.button-cta}`, shape `{rounded.button}`.

### Navigation

**`announcement-bar`** — the thin topmost bar ("See what's new in Slack →").
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.body-xs}`, with a bottom hairline and a right-side cluster of utility links (globe icon, App Marketplace, Download Slack, Sign in).

**`nav-bar`** — the sticky primary navigation.
- Background `{colors.canvas}`, height 72 px, bottom border `{colors.nav-border}`, padding `{spacing.lg} {spacing.xl}`. Layout: Slack wordmark left, Features / Solutions / Enterprise / Resources / Pricing link row centre, search icon + "REQUEST A DEMO" outline + "GET STARTED" filled right cluster.

**`nav-link`** — the centred dropdown-trigger links.
- Text `{colors.ink}`, set in `{typography.nav-label}`, padding `{spacing.sm} {spacing.md}`. Chevron suffix on links with dropdowns.

**`footer`** — the bottom multi-column nav.
- Background `{colors.aubergine-deep}`, text `{colors.on-dark}`, padding `{spacing.4xl} {spacing.xl}`. Column headers in `{typography.label-caps}` uppercase; link rows in `{typography.body-sm}` white.

### Cards & Containers

**`feature-card`** — the standard marketing feature card in 3-up grids.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.xl}`, shape `{rounded.md}` 8 px, Level 1 hairline border.

**`product-screenshot-card`** — the macOS-chrome product screenshot in the hero.
- Background `{colors.canvas}`, shape `{rounded.lg}` 12 px, Level 2 soft shadow. Acts as the hero's centrepiece — oversized, centred, treated as an image at the layout level.

**`pricing-card`** — the default pricing tier card.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.2xl}` 32 px, shape `{rounded.md}`, Level 1 hairline border. Tier name in `{typography.display-sm}`; price in `{typography.display-md}`; feature list in `{typography.body-sm}` rows; CTA `button-primary` at the bottom.

**`pricing-card-featured`** — the polarity-flipped featured tier.
- Background `{colors.primary}`, text `{colors.on-primary}`, same shape + padding as `pricing-card`. CTA inverts to `button-secondary` style (white text / white border on purple background).

### Badges & Indicators

**`tag-pill`** — the floating UI label pills over the product screenshot (e.g. "# account-acme", "Slackbot", "Messages / History / Files").
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.caption}`, padding `{spacing.xs} {spacing.lg}`, shape `{rounded.pill}` 999 px, Level 2 soft shadow. These are the UI chrome labels extracted from the product mockup — not page-level badges.

**`badge`** — the small inline metadata indicator (status, category label).
- Background `{colors.canvas-soft}`, text `{colors.body}`, set in `{typography.label-caps}`, padding `{spacing.xxs} {spacing.md}`, shape `{rounded.pill}`.

### Section Bands

**`hero-band`** — the opening hero with gradient bloom.
- Background `{colors.canvas-hero}`, text `{colors.ink}`, padding `{spacing.section} {spacing.xl}`. Inside: hero headline in `{typography.display-xl}` (sentence-case, period-terminated), body in `{typography.body-lg}`, then a CTA row with `button-primary` ("GET STARTED") + `button-secondary` ("FIND YOUR PLAN →"). Below the copy, the full-width `product-screenshot-card`.

**`logo-strip`** — the "Trusted by top teams" customer logo row.
- Background `{colors.canvas}`, text `{colors.mute}`, padding `{spacing.xl} {spacing.2xl}`. "Trusted by top teams" in `{typography.caption}` left; logos (GM, OpenAI, Target, Paramount, Stripe, IBM visible) in a flex row, consistent height, rendered in black/dark monochrome.

**`section-band-light`** — the default alternating section on white canvas.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.section} {spacing.xl}`.

**`section-band-soft`** — the warm-cream alternating section.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.section} {spacing.xl}`.

**`section-band-dark`** — the polarity-flipped aubergine band.
- Background `{colors.aubergine-deep}`, text `{colors.on-dark}`, padding `{spacing.section} {spacing.xl}`. Section headline in `{typography.display-lg}` or `{typography.display-md}` in white.

### Forms

**`form-input`** — the canonical text field.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, set in `{typography.body-sm}`, padding `{spacing.md} {spacing.lg}`, height 48 px, shape `{rounded.button}` 4 px.

**`link-inline`** — body-copy inline links.
- Text `{colors.link}` (aubergine), set in `{typography.body-md}`.

## Do's and Don'ts

### Do
- Use `{colors.primary}` aubergine exclusively for primary CTAs, nav accents, active states, and inline links. The brand has one conversion color — use it with that discipline.
- Set every CTA label in `{typography.button-cta}` (Avant Garde 700, 14 px). The display face in buttons is the brand's subtle differentiator.
- Apply `{rounded.button}` 4 px to every interactive control — buttons, inputs, dropdowns. Square-cornered controls are the brand's shape voice.
- Use the hero gradient bloom at hero scale only — left and right edge bleeds of pink-lavender and warm peach framing the product screenshot. Never miniaturise to an icon or reduce to a single tint.
- Alternate section bands across `{colors.canvas}` → `{colors.canvas-soft}` → `{colors.aubergine-deep}` for pacing and depth. The dark band is the only dramatic moment.
- Set headlines in `{typography.display-*}` weight 700, sentence-case, with calibrated negative letter-spacing. The tracking numbers are precise — honour them.
- Use `{rounded.pill}` 999 px exclusively for tag-pills and status badges, never for CTA buttons. The two shapes must not collide.

### Don't
- Don't introduce a second accent colour. Salesforce blue (`{colors.salesforce-blue}`) exists for co-brand contexts only — it is not a general page accent.
- Don't round CTA buttons to a pill shape. The 4 px radius is a brand decision; softening it to 8 px or more erodes the productivity-tool posture.
- Don't set body paragraphs in Avant Garde. The display face is reserved for headlines and buttons — body is always Salesforce Sans.
- Don't render the hero gradient bloom at component scale, inside a card, or as a button background. It lives at full-band width only.
- Don't use all-caps outside of `{typography.label-caps}` eyebrows and explicit CTA button labels ("GET STARTED"). Body paragraphs, nav labels, and card headlines are sentence-case.
- Don't apply Level 2 shadow to every card. Feature cards use hairline-only (Level 1); the soft drop shadow (Level 2) is reserved for the product screenshot and floating UI elements.
- Don't promote body text to weight 700 for emphasis — use a separate strong element or `{typography.button-md}` weight 700 in its appropriate context. Random bolding flattens the typographic hierarchy.
