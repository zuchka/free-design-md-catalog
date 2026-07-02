---
version: alpha
name: Wise
description: "Wise is a fintech brand built on an almost aggressive sense of straightforwardness — a lime-green canvas that is the brand, not a highlight on top of it. Every headline is set in a weight-900 condensed grotesque, all-caps, in the deepest forest-ink tone, while the body surrenders to Inter at a modest 400. There are no gradients, no texture, no decorative system to speak of: the green IS the decoration. Cards sit on white with rounded-16px corners. CTAs are full pills. The voice is anti-fuss fintech — if it isn't necessary, it isn't there."
colors:
  primary: "#9fe870"
  on-primary: "#163300"
  primary-hover: "#cdffad"
  primary-active: "#c5edab"
  ink: "#0e0f0c"
  ink-deep: "#163300"
  body: "#454745"
  mute: "#868685"
  canvas: "#ffffff"
  canvas-elevated: "#ffffff"
  canvas-green: "#9fe870"
  canvas-green-deep: "#054d28"
  hairline: rgba(14,15,12,0.12)
  link: "#163300"
  link-active: "#0e0f0c"
  success: "#008026"
  success-hover: "#006d13"
  success-deep: "#054d28"
  positive-interactive: "#2ead4b"
  error: "#cf2929"
  error-hover: "#b8232b"
  error-active: "#a72027"
  error-deep: "#d03238"
  warning: "#ffd11a"
  warning-secondary: "#fff7d7"
  warning-content: "#4a3b1c"
  warning-active: "#b86700"
  accent-blue: rgba(56,200,255,0.10)
  bright-blue: "#a0e1e1"
  bright-orange: "#ffc091"
  dark-maroon: "#320707"
  celebration: "#0b4c72"
typography:
  display-xl:
    fontFamily: '"Wise Sans", Inter, sans-serif'
    fontSize: 86.86px
    fontWeight: 900
    lineHeight: 73.83px
    letterSpacing: normal
  display-lg:
    fontFamily: '"Wise Sans", Inter, sans-serif'
    fontSize: 56.69px
    fontWeight: 900
    lineHeight: 48.18px
    letterSpacing: normal
  display-md:
    fontFamily: '"Wise Sans", Inter, sans-serif'
    fontSize: 40px
    fontWeight: 900
    lineHeight: 34px
    letterSpacing: normal
  display-sm:
    fontFamily: '"Wise Sans", Inter, sans-serif'
    fontSize: 28px
    fontWeight: 900
    lineHeight: 32px
    letterSpacing: normal
  body-lg:
    fontFamily: Inter, Helvetica, Arial, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Inter, Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: Inter, Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  body-sm:
    fontFamily: Inter, Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: Inter, Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  caption:
    fontFamily: Inter, Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: Inter, Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  button-lg:
    fontFamily: Inter, Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  button: 9999px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  5xl: 128px
  section: 192px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 64px
    padding: "{spacing.sm} {spacing.lg}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.body-sm-strong}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-signup:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 5px {spacing.md}
  nav-cta-login:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    padding: "{spacing.xs} {spacing.sm}"
    rounded: "{rounded.button}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: 11px {spacing.lg}
    border: 1px solid {colors.primary}
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: 11px {spacing.lg}
    border: 1px solid {colors.hairline}
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink-deep}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: 5px {spacing.md}
  card-white:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  card-green:
    backgroundColor: "{colors.canvas-green}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  card-dark-green:
    backgroundColor: "{colors.canvas-green-deep}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  hero-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  currency-selector-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    border: 1px solid {colors.hairline}
  change-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
    border: 1px solid {colors.hairline}
  feature-band:
    backgroundColor: "{colors.canvas-green}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-md}"
    padding: "{spacing.3xl} {spacing.lg}"
  feature-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.2xl} {spacing.lg}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md-strong}"
  badge-pill:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.xs}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.md}"
    height: 48px
  ex-pricing-tier:
    description: Default fee/tier info card — white surface with hairline border and 16px radius.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: Featured tier — deep forest-green fill with white text, matching the brand's polarity flip.
    backgroundColor: "{colors.canvas-green-deep}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-product-selector:
    description: Currency / destination selector card — white card with flag icon + label row.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  ex-cart-drawer:
    description: Transfer summary panel — line items for amount, fee, and exchange rate.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses primary green as a left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: Rate / fee comparison table. Header uses body-sm-strong; body uses body-sm.
    headerBackground: "{colors.canvas}"
    headerTypography: "{typography.body-sm-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card. White elevated surface with form-input primitives inside.
    backgroundColor: "{colors.canvas-elevated}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog — white elevated surface with 16px radius and hairline border.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame on white surface with generous padding.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — white pill surface with hairline border and body-sm text.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Wise operates in fintech's least forgiving visual territory — international money transfer — and has built a brand that earns trust by stripping decoration to almost nothing. The lime green (`#9fe870`) is not an accent; it is the canvas itself. The hero section is painted solid lime, the nav sits on white above it, and the transition between the two is the only chromatic event on the page. There are no gradients, no illustrations in the decorative sense, no mesh effects. Green IS the brand.

The typography compounds the directness. Wise Sans at weight 900, all-caps, carries every headline with an almost brutalist authority — the h1 at ~87 px feels more like a billboard than a web heading. Beneath that, Inter at 400 carries all body copy in a neutral near-black (`#454745`). There is no middle weight doing decorative work. The face pairing is about contrast: an ultra-heavy proprietary grotesque for the brand voice, a transparent workhorse sans for the information layer.

Surface logic is binary: lime-green band for the hero and any full-bleed brand moment; white for everything below — cards, currency selectors, footers. Cards use a consistent 16px radius, which keeps them feeling approachable without going pill-shaped. The only pill shapes are buttons and the small "Change" selector pill inside the destination card. Elevation is nearly absent — no drop shadows on marketing cards. The page relies on background-colour contrast between the green band and the white content area below it.

**Key characteristics:**
- A single lime-green primary `{colors.primary}` carries the brand. It runs on backgrounds, CTAs, and the full-bleed hero — simultaneously the surface, the button, and the identity.
- All-caps weight-900 headlines are the brand's typographic voice. Sentence-case is never used for display copy.
- Button geometry is a full pill (`9999px`) at every scale, from the nav Sign Up to the hero CTA. This is non-negotiable.
- Cards are consistently 16px rounded — never pill-shaped, never square.
- The colour system has a dense semantic layer (positive / negative / warning tokens) pulled from CSS custom properties, signalling a mature in-product design system beneath the marketing surface.

## Colors

### Brand
- **Primary / Lime Green** (`{colors.primary}` — `#9fe870`): The brand's single defining colour. Appears as the hero background, every primary CTA, and the interactive-accent token. Used at full-bleed scale as a background, not as a highlight.
- **On Primary / Forest Ink** (`{colors.on-primary}` — `#163300`): The deep forest-green that sits on `{colors.primary}` surfaces. All hero headlines and CTA labels render in this tone against the lime background.
- **Primary Hover** (`{colors.primary-hover}` — `#cdffad`): The lighter lime hover state for interactive elements and badge fills.
- **Primary Active** (`{colors.primary-active}` — `#c5edab`): The pressed state for lime interactive controls.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The page background below the hero band, and the fill for every card, modal, and footer.
- **Canvas Green** (`{colors.canvas-green}` — `#9fe870`): The hero and feature band surface — the lime fill used at section scale.
- **Canvas Green Deep** (`{colors.canvas-green-deep}` — `#054d28`): The polarity-flipped dark surface for elevated or inverted card moments.
- **Hairline** (`{colors.hairline}` — `rgba(14,15,12,0.12)`): 1 px borders on cards, inputs, and dividers — a near-black at ~12% opacity so it reads as a subtle edge on both white and tinted surfaces.

### Text
- **Ink** (`{colors.ink}` — `#0e0f0c`): Near-pure black for highest-priority text and active link states.
- **Ink Deep** (`{colors.ink-deep}` — `#163300`): The forest-green ink used for headings on white surfaces and for link text.
- **Body** (`{colors.body}` — `#454745`): Default body copy on white — a warm dark-grey with a faint green undertone.
- **Mute** (`{colors.mute}` — `#868685`): Secondary labels, placeholder text, de-emphasised nav items.

### Semantic
- **Success** (`{colors.success}` — `#008026`): Positive status indicators and "arrived" states.
- **Success Hover** (`{colors.success-hover}` — `#006d13`): Pressed positive state.
- **Success Deep** (`{colors.success-deep}` — `#054d28`): The deepest positive tone — used as the polarity-flipped dark card surface.
- **Error** (`{colors.error}` — `#cf2929`): Validation errors, destructive actions, failed transfer states.
- **Error Hover / Active** (`{colors.error-hover}` — `#b8232b`, `{colors.error-active}` — `#a72027`): Hover and pressed destructive states.
- **Warning** (`{colors.warning}` — `#ffd11a`): Caution indicators, pending or delayed transfer states.
- **Warning Secondary** (`{colors.warning-secondary}` — `#fff7d7`): Soft yellow background for warning notices.
- **Warning Content** (`{colors.warning-content}` — `#4a3b1c`): Text on warning-yellow surfaces.

### Accent Colours
- **Bright Blue** (`{colors.bright-blue}` — `#a0e1e1`): A teal-mint accent visible in product illustrations and decorative moments.
- **Bright Orange** (`{colors.bright-orange}` — `#ffc091`): A peach-orange accent paired with bright blue in illustrated product moments.
- **Celebration** (`{colors.celebration}` — `#0b4c72`): A deep navy used for celebration-state labels and confetti-adjacent moments.

## Typography

### Font Families

Two faces carry the entire system:
1. **Wise Sans** — the brand's proprietary weight-900 grotesque for all display copy. Used all-caps at every display size. Open-source substitute: *Inter* with `font-feature-settings: "ss01"` at 900, or *Space Grotesk* at 700 as a rough stylistic stand-in.
2. **Inter** — the transparent workhorse face for all body, button, caption, and UI text. Weights 400 and 600 only.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 86.86px | 900 | 73.83px | normal | Hero headline ("THE FAST WAY TO SEND MONEY ABROAD"). All-caps, full-bleed lime band. |
| `{typography.display-lg}` | 56.69px | 900 | 48.18px | normal | Section-level headlines on feature bands. |
| `{typography.display-md}` | 40px | 900 | 34px | normal | Card-cluster and sub-section headlines. In h3 context, renders in `{colors.primary}` on dark surfaces. |
| `{typography.display-sm}` | 28px | 900 | 32px | normal | Smaller section headings and interior card headlines. |
| `{typography.body-lg}` | 18px | 400 | 28px | — | Lead paragraphs beneath hero headline. |
| `{typography.body-md}` | 16px | 400 | 24px | — | Default body paragraph text. |
| `{typography.body-md-strong}` | 16px | 600 | 24px | — | Inline emphasis, link text, prominent labels. |
| `{typography.body-sm}` | 14px | 400 | 20px | — | Nav links, secondary body, footer copy. |
| `{typography.body-sm-strong}` | 14px | 600 | 20px | — | Nav CTAs, button labels at nav scale, table emphasis. |
| `{typography.caption}` | 12px | 400 | 16px | — | Badge labels, fine print, footnotes. |
| `{typography.button-md}` | 14px | 600 | 20px | — | Nav-scale button labels ("Sign up" in nav). |
| `{typography.button-lg}` | 16px | 600 | 24px | — | Marketing-scale pill CTA labels ("Sign up" in hero). |

### Principles
- **All-caps is non-negotiable for display.** Wise Sans at 900 is only ever seen all-caps. Introducing mixed-case into a display headline breaks the brand's character entirely.
- **No letter-spacing manipulation.** The brand does not use negative or positive tracking — the face's natural spacing at 900 weight carries the voice.
- **Weight 600 is the ceiling for Inter.** Body and UI text run at 400 or 600. Weight 700 or above does not appear on Inter in this system.
- **Mono faces are not part of the system.** Unlike developer-platform brands, Wise uses no monospaced face anywhere — there is no technical layer expressed in type.

### Note on Font Substitutes
Wise Sans is proprietary and not available as a web-safe or Google Font. For prototyping:
- **Display** — *Barlow Condensed* at 900, all-caps, is a usable structural substitute for the compressed grotesque feel. *Space Grotesk* 700 works at smaller display sizes.
- **Body / UI** — *Inter* is already an open-source face and requires no substitution.

## Layout

### Spacing System
- **Base unit**: 4 px. Every measured value in the extraction is a multiple of 4 (with the exception of the computed `9.18px` which is a sub-pixel rendering artefact of percentage-based padding).
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.2xl}` 48px · `{spacing.3xl}` 64px · `{spacing.4xl}` 96px · `{spacing.5xl}` 128px · `{spacing.section}` 192px.
- **Hero band padding**: The lime-green hero uses generous vertical padding (`{spacing.4xl}` to `{spacing.5xl}`) to let the all-caps headline breathe at ~87px.
- **Card interior padding**: Feature and currency-selector cards use `{spacing.sm} {spacing.md}` (12px 16px) as extracted — tight, information-dense, not airy.
- **CTA padding**: The primary pill CTA renders at `11px {spacing.lg}` — a fixed 11px vertical that keeps the pill at approximately 46px tall, consistent with WCAG touch targets.

### Grid & Container
- **Max width**: approximately 1200px, centred, with horizontal gutters of `{spacing.lg}` 24px on desktop.
- **Column patterns**:
  - Hero: single-column centred headline + body + CTA stack on lime background.
  - Currency-selector: centred card, roughly 480px wide, sitting below the hero copy.
  - Feature section (below fold): 2-up or 3-up card grid on white background.
  - Footer: multi-column link grid, 4–5 columns on desktop.

### Whitespace Philosophy
The lime green does all the decorative work; whitespace separates the functional layers. The hero is dense at the top — tight line heights (73px for an 87px face), the body copy close beneath, then the CTA sitting at approximately one line-height of gap below the body. The page is not generous with vertical rhythm — it favours information density over breathing room, which matches the brand's "fast and direct" personality.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 600px | Hero headline stacks; font scales down; nav collapses to logo + Sign Up; single-column feature cards. |
| Tablet | 600–959px | 2-up feature card grid; nav still horizontal. |
| Desktop | 960px+ | Full nav with link row; 3-up feature card grid; currency selector card centred. |

#### Touch Targets
The `button-primary` pill renders at ~46px tall (11px top + 24px line-height + 11px bottom). The `nav-cta-signup` renders at ~34px (5px + 20px + 5px + border). Both comfortably exceed the 44px WCAG floor at marketing scale; the nav button is marginally below but is paired with generous horizontal padding expanding the hit area.

#### Collapsing Strategy
- **Nav**: full "Personal / Business / Platform" link row + "EN / Help / Log in / Sign up" cluster at desktop. Collapses to logo + Sign Up pill at mobile.
- **Hero headline**: scales from ~87px at desktop to approximately 40–48px at mobile; all-caps treatment persists across all breakpoints.
- **Currency selector card**: remains centred, single-column at all breakpoints.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed lime hero band and green feature bands. |
| Level 1 — Hairline | `0 0 0 1px rgba(14,15,12,0.12)` inset border only. | Currency-selector card, form inputs, "Change" pill. |
| Level 2 — Subtle Elevated | `0px 2px 8px rgba(14,15,12,0.08)` | White feature cards and modal surfaces above the lime band. |

The brand's elevation system is exceptionally flat. Marketing cards on the white surface below the hero rely almost entirely on the background-colour contrast (white card on white page) being communicated through rounded corners and hairline borders rather than shadow. This is deliberate — the lime green provides all the visual energy; the white content zone stays calm.

## Do's and Don'ts

### Do
- Use `{colors.primary}` lime green as a full-bleed background at hero and feature-band scale. The green is a surface, not a highlight.
- Set every display headline in `{typography.display-*}` at weight 900, all-caps. No exceptions.
- Apply `{rounded.button}` (`9999px`) to every CTA at every scale — nav pill and hero pill both use full pill geometry.
- Apply `{rounded.md}` (`16px`) to every card — currency selectors, feature cards, modals.
- Use `{colors.on-primary}` forest-ink (`#163300`) for all text that sits on the lime background.
- Keep Inter at 400 for body copy and 600 for labels / button text — no higher weight.
- Rely on background-colour contrast (lime band → white) as the primary depth cue between sections. Elevation shadows are minimal by intent.

### Don't
- Don't set display headlines in mixed-case. Wise Sans at 900 is an all-caps voice; mixed-case undermines the brand's directness.
- Don't apply letter-spacing to display type. The face's natural tracking is the voice.
- Don't use a monospaced face anywhere. There is no technical-layer type treatment in this system.
- Don't use the lime green as a small accent chip or badge fill (other than `{colors.primary-hover}` pale lime for badges). The green lives at scale.
- Don't apply heavy drop shadows to cards. The brand's elevation is a hairline border on white — that's the whole system.
- Don't introduce new accent colours outside the extracted token set. The bright-blue and bright-orange accents are for illustrative/decorative product moments only — not for UI chrome.
- Don't confuse card radius (`{rounded.md}` 16px) with button radius (`{rounded.button}` 9999px). These are two distinct shape systems that must never be swapped.
