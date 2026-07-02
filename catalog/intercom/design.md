---
version: alpha
name: Intercom
description: "Intercom is a customer-service platform whose design language is built on restraint and scale — a near-black ink on off-white cream canvas, punctuated by a single electric orange reserved entirely for Fin, the brand's AI Agent. The type system does most of the decorative work: a custom geometric sans (Saans) set at unusually large display sizes with weight 400 — never bold — and aggressive negative tracking that gives headlines a compressed, editorial authority. No gradient, no mesh, no illustration system. The page earns its presence through enormous type, generous whitespace, and a photography strip that runs edge-to-edge as the only visual texture."

colors:
  primary: "#000000"
  on-primary: "#ffffff"
  ink: "#111111"
  body: "#333333"
  mute: "#666666"
  hairline: "#e5e5e5"
  hairline-nav: "#00000080"
  canvas: "#ffffff"
  canvas-soft: "#f4f3ec"
  canvas-neutral-200: "#e8e8e8"
  canvas-neutral-300: "#d8d8d8"
  fin-orange: "#ff5600"
  on-fin-orange: "#ffffff"
  link: "#000000"
  link-underline: "#000000"
  nav-hover-bg: "#0000001a"
  nav-button-hover: "#000000cc"
  neutral-600: "#4a4a4a"
  blue-accent: "#4a7fc1"
  success: "#1a7f4b"
  error: "#cc0000"
  warning: "#f5a623"
  theme-near-black: "#050505"

typography:
  display-xl:
    fontFamily: "Saans, \"Saans Fallback\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 80px
    fontWeight: 400
    lineHeight: 72px
    letterSpacing: -2.4px
  display-lg:
    fontFamily: "Saans, \"Saans Fallback\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 54px
    fontWeight: 400
    lineHeight: 54px
    letterSpacing: -1.6px
  display-md:
    fontFamily: "Saans, \"Saans Fallback\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 40px
    letterSpacing: -1.2px
  display-sm:
    fontFamily: "Saans, \"Saans Fallback\", ui-sans-serif, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: -0.48px
  body-xl:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\""
    fontSize: 20px
    fontWeight: 400
    lineHeight: 22px
  body-lg:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\""
    fontSize: 18px
    fontWeight: 400
    lineHeight: 27px
  body-md:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\""
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\""
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
  caption:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\""
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
  button-lg:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\""
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  button-md:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\""
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
  nav-label:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\""
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px

rounded:
  none: 0px
  xs: 4px
  sm: 4px
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
  2xl: 32px
  3xl: 40px
  4xl: 48px
  5xl: 64px
  6xl: 96px
  section: 128px

components:
  announcement-bar:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.xl}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-nav}"
    typography: "{typography.nav-label}"
    height: 64px
    padding: "{spacing.xs} {spacing.xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-login:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-fin:
    backgroundColor: "{colors.fin-orange}"
    textColor: "{colors.on-fin-orange}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.3xl}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.3xl}"
  button-fin:
    backgroundColor: "{colors.fin-orange}"
    textColor: "{colors.on-fin-orange}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.3xl}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.5xl} {spacing.xl}"
  hero-photo-strip:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "0px"
  feature-tab-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    borderColor: "{colors.hairline}"
    padding: "{spacing.xs} {spacing.xl}"
  feature-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section} {spacing.xl}"
  card-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  card-soft:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  chat-widget:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    shadowColor: "{colors.primary}"
  pricing-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    borderColor: "{colors.hairline}"
  pricing-card-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  fin-badge:
    backgroundColor: "{colors.fin-orange}"
    textColor: "{colors.on-fin-orange}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.xs}"
  badge-neutral:
    backgroundColor: "{colors.canvas-neutral-200}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.xs}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
    height: 48px
  footer:
    backgroundColor: "{colors.theme-near-black}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.xl}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
    textDecoration: underline
  cookie-banner:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
    borderColor: "{colors.hairline}"
  ex-pricing-tier:
    description: "Default pricing tier card — hairline border on canvas surface with square corners."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured tier — polarity-flipped to near-black surface with white text and Fin orange accent."
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "Feature summary card on canvas-soft cream surface — used for AI Agent capability groupings."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    description: "Subscription summary — line items per add-on module, not a literal e-commerce cart."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row. Active state uses Fin orange as left-edge indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.fin-orange}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: "Table chrome — header uses caption uppercase; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card — square-cornered card-marketing chrome with form-input primitives inside."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog — same chrome as card-marketing with elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state frame on canvas-soft cream with generous padding."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification — square-cornered card chrome with soft shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"

---

## Overview

Intercom's design language is built around two ideas that pull against each other — enormous, weight-400 display type that fills the hero at 80 px, and total surface restraint that gives it room to breathe. There is no gradient, no illustration library, no icon system doing decorative work. The page is ink on cream: `{colors.ink}` near-black text on a `{colors.canvas-soft}` cream (`#f4f3ec`) body that reads warmer than white and softer than gray. The only chromatic accent is `{colors.fin-orange}` (`#ff5600`), reserved entirely for Fin — the brand's AI Agent product — appearing on a single nav button, a product badge, and select CTAs. It is a deliberate signal: orange means Fin, everywhere, always.

Typography is the decoration system. The brand uses Saans, a custom geometric sans, at display sizes that most brands would never attempt at weight 400 — the hero headline runs 80 px with a `.9` line-height ratio and `-2.4 px` tracking, giving it a compressed editorial authority that reads almost like a magazine cover rather than a SaaS homepage. Headings never go bold. The body switches to a system sans stack at 16–18 px, keeping the page readable without competing with the display type. The Saans voice is entirely in the headlines; the system face handles everything functional.

Button geometry is deliberately square — `0 px` radius across the board — which signals seriousness rather than friendliness. Every CTA is a flat rectangle: the primary black fill, the secondary white with a black border, the Fin orange fill. There is no pill, no rounded corner, no soft edge on any interactive element. This is the hardest-edged major SaaS marketing surface in the category.

The photography strip that runs edge-to-edge below the hero is the brand's primary visual texture — a horizontal scroll of editorial images at full viewport width, cropped to portrait-ish cards with no border-radius. No illustration, no icon spot art, no abstract shape. Humans and texture, printed wide.

## Colors

### Brand & Accent
- **Fin Orange** (`{colors.fin-orange}` — `#ff5600`): The brand's single chromatic accent. Used exclusively to mark Fin, the AI Agent — the "Fin AI Agent" nav button, Fin badges, and select hero CTAs. Never applied as a general brand color.
- **Ink** (`{colors.ink}` — `#111111`): The near-black used for all headings, body text, and icon strokes on light surfaces.
- **Primary / CTA** (`{colors.primary}` — `#000000`): Pure black, used as the fill for primary call-to-action buttons ("Start free trial") and the polarity-flipped footer surface.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure white — card surfaces, modal chrome, form inputs.
- **Canvas Soft / Cream** (`{colors.canvas-soft}` — `#f4f3ec`): The default page body background — a warm cream that reads distinctly warmer than gray-white. Feature bands and the announcement bar sit on this surface. This is the brand's defining surface tone.
- **Canvas Neutral 200** (`{colors.canvas-neutral-200}` — `#e8e8e8`): Slightly deeper neutral, used for dividers, disabled surfaces, and neutral badge fills.
- **Canvas Neutral 300** (`{colors.canvas-neutral-300}` — `#d8d8d8`): The stronger divider step, visible in table rows and form chrome.
- **Theme Near Black** (`{colors.theme-near-black}` — `#050505`): The footer background, extracted from `meta[theme-color]` — a near-pure black used to close the page.

### Text
- **Ink** (`{colors.ink}` — `#111111`): Headings and primary body text on all light surfaces.
- **Body** (`{colors.body}` — `#333333`): Secondary body copy — sub-headings, feature descriptions, and footer column body.
- **Mute** (`{colors.mute}` — `#666666`): Low-priority labels, placeholder text, fine print.
- **Neutral 600** (`{colors.neutral-600}` — `#4a4a4a`): The mid-gray extracted from `--color-neutral-600: lab(34.924% 0 0)` — used for secondary label text in denser UI sections.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): Text and icons on `{colors.primary}` (black) and `{colors.theme-near-black}` surfaces.
- **On Fin Orange** (`{colors.on-fin-orange}` — `#ffffff`): Text on `{colors.fin-orange}` — always white.

### Navigation
- **Hairline Nav** (`{colors.hairline-nav}` — `#00000080`): The 50 % black used as the nav border color, from `--color-nav-border: color-mix(in oklab, #000 50%, transparent)`.
- **Nav Hover Bg** (`{colors.nav-hover-bg}` — `#0000001a`): 10 % black used as the nav-link hover ghost, from `--color-nav-hover`.

### Semantic
- **Hairline** (`{colors.hairline}` — `#e5e5e5`): 1 px card borders, table rows, and form input borders.
- **Blue Accent** (`{colors.blue-accent}` — `#4a7fc1`): Observed inline link color, derived from `--color-blue-400: lab(65.0361% -1.42065 -56.9802)`.
- **Link** (`{colors.link}` — `#000000`): Body copy inline links; underlined in black per the extracted component signal.

## Typography

### Font Families
Two stacks carry the entire system:

1. **Saans** — a custom geometric sans used exclusively for display headings. Weight 400 only — the brand never weights up its headlines. Sizes run from 80 px (hero) down to 24 px (card headline). All display sizes use aggressive negative tracking and a tight sub-1.0 line-height ratio. The custom fallback `"Saans Fallback"` is declared in the stack, suggesting a metric-compatible system-font swap during load.
2. **System sans** (`ui-sans-serif, system-ui, sans-serif`) — the body, button, nav, and label face. No custom loading required. Weight 400 throughout; the brand never bolds body copy.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 80px | 400 | 72px (.9 ratio) | -2.4px | Hero headline ("The only helpdesk designed for the AI Agent era"). |
| `{typography.display-lg}` | 54px | 400 | 54px (1.0 ratio) | -1.6px | Section headlines — "What Intercom can do for you", pricing section heads. |
| `{typography.display-md}` | 40px | 400 | 40px (1.0 ratio) | -1.2px | Mid-scale section heads and callout panels. |
| `{typography.display-sm}` | 24px | 400 | 24px (1.0 ratio) | -0.48px | Card cluster headings, feature card titles. |
| `{typography.body-xl}` | 20px | 400 | 22px | 0 | Lead paragraphs under hero headline. |
| `{typography.body-lg}` | 18px | 400 | 27px | 0 | Primary body copy in feature bands. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph and button labels. |
| `{typography.body-sm}` | 14px | 400 | 21px | 0 | Nav labels, secondary body, footer column body. |
| `{typography.caption}` | 12px | 400 | 18px | 0 | Badge labels, fine print. |
| `{typography.button-lg}` | 16px | 400 | 24px | 0 | Marketing-scale CTA button labels ("Start free trial"). |
| `{typography.button-md}` | 14px | 400 | 21px | 0 | Nav button labels ("Log in", "Start free trial" in nav). |
| `{typography.nav-label}` | 14px | 400 | 20px | 0 | Nav-link labels ("Product", "Customers", "Resources", "Pricing"). |

### Principles
- **Weight 400 is the only display weight.** The brand never bolds a headline — the size and tracking do all the hierarchy work. Reverting to weight 600 or 700 on a Saans headline breaks the editorial calm that defines the page.
- **Negative tracking is structural, not decorative.** At 80 px the `-2.4 px` tracking is about compressed density; at 24 px the `-0.48 px` tracking still subtly tightens the card headline voice. The tracking scales proportionally down through the system.
- **Sentence case, no periods.** Unlike the Vercel reference, Intercom headlines do not close with a period — the incomplete, conversational fragment form is deliberate ("The only helpdesk designed for the AI Agent era").
- **System sans for everything functional.** Saans appears only in headlines. Buttons, labels, nav, body copy, and captions all use the system stack. The two families never mix within a single element.

### Note on Font Substitutes
Saans is a proprietary face built for Intercom. The closest open-source substitute for the geometric weight-400 authority is **Plus Jakarta Sans** (400) with `letter-spacing` tightened manually, or **Neue Haas Grotesk** for the condensed editorial feel. **Inter** at 400 is the safe fallback but lacks the proportional width character that makes Saans distinctive at 80 px.

## Layout

### Spacing System
- **Base unit**: 4 px. The page's extracted scale (`8 / 12 / 16 / 20 / 24 px`) is a 4-px grid with an extra `14 px` step that appears in tight nav and label contexts (extracted from the frequency table).
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 20 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 40 px · `{spacing.4xl}` 48 px · `{spacing.5xl}` 64 px · `{spacing.6xl}` 96 px · `{spacing.section}` 128 px.
- **Section padding**: marketing bands use `{spacing.section}` 128 px top/bottom, giving the large display type room to breathe without visual crowding.
- **Button padding**: the extracted button padding is `16px 40px` — `{spacing.md}` vertical, `{spacing.3xl}` horizontal — applied consistently to all marketing-scale CTAs.
- **Card interior padding**: cards use `{spacing.xl}` 24 px consistently; the cookie banner and announcement bar use `{spacing.xs}` vertical / `{spacing.xl}` horizontal.

### Grid & Container
- **Max width**: Observed ~1280 px content width; horizontal gutters of `{spacing.xl}` 24 px at desktop, `{spacing.md}` 16 px at mobile.
- **Column patterns**:
  - Hero: full-width single column for headline; right-aligned body + CTA cluster at desktop (split layout visible in screenshot).
  - Photography strip: full viewport-width horizontal scroll of portrait cards — no gutter between images.
  - Feature tab row: full-width with left-aligned tab labels and associated content panel.
  - Two-up feature pairs: standard 2-column grid at desktop for feature comparison panels.
  - Pricing tier grid: 3-up at desktop (implied), vertical stack at mobile.

### Whitespace Philosophy
The large display type demands generous breathing room. Section padding is set at `{spacing.section}` (128 px) top/bottom — not because of decorative elements that need air, but because the 80 px headline is itself architectural. Inside a feature band, the headline → body gap is tight (`{spacing.xs}` to `{spacing.sm}`), then a wider gap before the CTA. The cream background reads calmer than white and absorbs the generous whitespace without feeling hollow. The page rhythm is: enormous type, pause, body at normal scale, pause, next enormous type.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hero stacks vertically; nav collapses to hamburger; photography strip becomes 1-up scroll; display type scales to 40–48 px. |
| Tablet | 768–1023px | Hero maintains split but compressed; display type at ~54 px per `--text-heading-2-tablet: 4rem`; 2-up feature grids hold. |
| Desktop | 1024–1279px | Full split hero; 3-up pricing; nav shows full link row. |
| Wide | ≥ 1280px | Content centres at max-width; photography strip stretches edge-to-edge beyond content column. |

#### Touch Targets
The extracted button padding of `16px 40px` produces a ~56 px tall CTA at marketing scale, well above WCAG minimum. Nav buttons at `{spacing.xs}` vertical (8 px) + line-height 20 px produce a ~36 px touch target — adequate at desktop; mobile inflation should bring this to 44 px.

#### Collapsing Strategy
- **Nav**: full link row + "Log in / Contact sales / View demo / Start free trial / Fin AI Agent" cluster at desktop. Collapses to logo + hamburger at mobile.
- **Hero**: split layout (headline left, body + CTA right) at desktop collapses to single-column stack at mobile with headline first.
- **Photography strip**: horizontal scroll viewport-wide at all breakpoints — card widths reduce at mobile but the strip remains edge-to-edge.
- **Feature tab row**: horizontal tab bar with content panel collapses to accordion at mobile.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Hero band, feature bands, full-bleed photography strip, footer. |
| Level 1 — Hairline Border | `0 0 0 1px {colors.hairline}` 1 px border. | Card chrome — pricing cards, marketing cards. |
| Level 2 — Soft Drop | Subtle `0 4px 16px rgba(0,0,0,0.08)` | Chat widget / Fin messenger bubble visible in screenshot bottom-right. |
| Level 3 — Modal | `0 8px 32px rgba(0,0,0,0.12)` | Cookie consent banner and dropdown menus. |

Intercom's surface is overwhelmingly flat. The brand makes depth distinctions through surface-color alternation (`{colors.canvas}` card on `{colors.canvas-soft}` page, or `{colors.theme-near-black}` footer closing the page) rather than shadow. The Fin chat widget is the only element that floats on a meaningful drop-shadow — consistent with its role as an inset demo of the product inside the marketing surface.

### Decorative Depth
- **Surface alternation as the primary depth cue**: cream → white → cream bands read as a gentle rhythm without any chromatic decoration.
- **Photography strip as texture**: the only "decorative" object on the page is the full-width edge-to-edge photography strip — editorial images treated as a horizontal texture band rather than as illustrated content.
- **Fin orange as the sole chromatic signal**: the orange stands out precisely because nothing else is orange. It reads as an elevated signal rather than just a button style.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Every button — primary, secondary, Fin orange, nav CTAs. All form inputs. The square geometry is the brand's defining shape decision. |
| `{rounded.xs}` | 4px | `--radius-sm: .25rem` from extracted CSS — the smallest UI radius, used for small tags and inner UI chrome. |
| `{rounded.sm}` | 4px | Smallest interactive element radius — nav hover state ghost. |
| `{rounded.md}` | 8px | Marketing cards, feature cards, chat widget chrome. |
| `{rounded.lg}` | 12px | The Fin chat messenger popup visible in screenshot — the product UI widget. |
| `{rounded.xl}` | 16px | Largest card chrome for inset image panels. |
| `{rounded.pill}` | 9999px | Badge pills (Fin badge, neutral metadata badge). |
| `{rounded.full}` | 9999px | Circular avatar / icon containers inside the chat widget. |

### Photography Geometry
- **Photography strip**: full-bleed edge-to-edge, zero border-radius on image cards, portrait-cropped. Never framed inside a rounded container.
- **Chat widget**: `{rounded.lg}` 12 px container — the one rounded element at meaningful scale, consistent with product UI conventions rather than marketing chrome.
- **Announcement bar**: full-width, `{rounded.none}`, borderless — flush with the top of the viewport.

## Components

### Navigation & Announcement

**`announcement-bar`** — the "Introducing Intercom 2 — Discover over 60 product updates. Learn more" bar.
- Background `{colors.canvas-soft}` cream, text `{colors.ink}`, set in `{typography.body-sm}`, padding `{spacing.xs} {spacing.xl}`. The "Learn more" link underlines in black. The close ("×") icon sits flush right.

**`nav-bar`** — the sticky top navigation.
- Background `{colors.canvas}`, text `{colors.ink}`, height 64 px, 1 px solid `{colors.hairline-nav}` border-bottom. Layout: logo mark left, dropdown-enabled links centre-left ("Product / Customers / Resources / Pricing"), secondary utility cluster right ("Log in / Contact sales / View demo"), then primary cluster right-most ("Start free trial" black, "Fin AI Agent →" orange). All nav buttons are `{rounded.none}` 0 px radius.

**`nav-link`** — the centre-left navigation links with dropdown affordance.
- Text `{colors.ink}`, set in `{typography.nav-label}` (14 px / 400), padding `{spacing.xs} {spacing.sm}`, hover state uses `{colors.nav-hover-bg}` 10% black ghost fill.

**`nav-cta-login`** — "Log in", "Contact sales", "View demo" — the secondary utility links.
- Transparent background, text `{colors.ink}`, `{typography.button-md}`, `{rounded.none}`.

**`nav-cta-primary`** — "Start free trial" — the primary nav CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, `{typography.button-md}`, `{rounded.none}`.

**`nav-cta-fin`** — "Fin AI Agent →" — the brand's Fin-marked orange nav CTA.
- Background `{colors.fin-orange}`, text `{colors.on-fin-orange}`, `{typography.button-md}`, `{rounded.none}`. The arrow glyph is part of the label.

### Buttons

**`button-primary`** — the canonical black square-cornered CTA at marketing scale.
- Background `{colors.primary}`, text `{colors.on-primary}`, label set in `{typography.button-lg}` (16 px / 400), padding `{spacing.md} {spacing.3xl}` (16 px / 40 px), shape `{rounded.none}` 0 px. Renders ~56 px tall.

**`button-secondary`** — the white square-cornered CTA paired with the black primary.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, same typography + padding as `button-primary`, shape `{rounded.none}`.

**`button-fin`** — the Fin-orange CTA, used in hero and feature-band contexts that foreground the Fin AI Agent.
- Background `{colors.fin-orange}`, text `{colors.on-fin-orange}`, same typography + padding as `button-primary`, shape `{rounded.none}`.

### Cards & Containers

**`card-marketing`** — the standard feature-section card.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.xl}` 24 px, shape `{rounded.md}` 8 px, 1 px solid `{colors.hairline}` border.

**`card-soft`** — the cream-surface variant for inset feature groups.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.xl}`, shape `{rounded.md}`.

**`pricing-card`** — the default pricing tier card.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, padding `{spacing.xl}` 24 px, shape `{rounded.md}` 8 px.

**`pricing-card-featured`** — the polarity-flipped featured tier.
- Background `{colors.primary}`, text `{colors.on-primary}`, same shape + padding as `pricing-card`. CTA inverts to `button-secondary` (white on black).

**`chat-widget`** — the Fin chat messenger preview visible in the bottom-right of the screenshot.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.xl}`, shape `{rounded.lg}` 12 px, subtle Level 2 drop-shadow. Header shows the Intercom logo mark + "Hi there 👋" greeting in `{typography.body-md}`, agent attribution in `{typography.caption}`.

### Badges & Labels

**`fin-badge`** — the orange pill marking Fin-branded content ("Fin · Just now").
- Background `{colors.fin-orange}`, text `{colors.on-fin-orange}`, set in `{typography.caption}`, padding `{spacing.xxs} {spacing.xs}`, shape `{rounded.pill}`.

**`badge-neutral`** — the neutral gray metadata pill.
- Background `{colors.canvas-neutral-200}`, text `{colors.ink}`, set in `{typography.caption}`, padding `{spacing.xxs} {spacing.xs}`, shape `{rounded.pill}`.

### Inputs & Forms

**`form-input`** — the canonical text input.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, set in `{typography.body-md}` (16 px), padding `{spacing.sm} {spacing.md}`, height 48 px, shape `{rounded.none}` 0 px. Square geometry matches the button system.

### Sections & Bands

**`hero-band`** — the main landing hero with split layout.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.xl}`. Headline in `{typography.display-xl}` (80 px / 400 / -2.4 px), left-aligned spanning roughly 65 % of the viewport. Body paragraph + CTA cluster in the right column. Two small blue pixel marks visible top-left and top-right of the hero are the brand's subtle accent marks.

**`hero-photo-strip`** — the edge-to-edge horizontal photography band immediately below the hero.
- No background fill (images are the surface), `{rounded.none}` on all images, zero gap between cards. Full viewport width, images cropped to portrait format.

**`feature-tab-bar`** — the horizontal tab row for feature exploration ("AI-powered Insights / Self-improving...").
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.body-md}`, 1 px `{colors.hairline}` bottom border, padding `{spacing.xs} {spacing.xl}`. Active tab underlined in `{colors.fin-orange}` or `{colors.ink}`.

**`feature-band`** — the cream feature section bands.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.section} {spacing.xl}`. Section headline in `{typography.display-lg}` (54 px / 400 / -1.6 px).

**`footer`** — the near-black closing section.
- Background `{colors.theme-near-black}`, text `{colors.on-primary}`, set in `{typography.body-sm}`, padding `{spacing.4xl} {spacing.xl}`. Multi-column link grid with Saans display wordmark.

**`announcement-bar`** — the "Introducing Intercom 2" top banner.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, set in `{typography.body-sm}`, padding `{spacing.xs} {spacing.xl}`.

**`link-inline`** — body copy inline links.
- Text `{colors.link}` black, set in `{typography.body-md}`, underlined. Visible in the hero body ("Fin" is underlined in the extracted screenshot).

**`cookie-banner`** — the cookie consent overlay visible in the screenshot.
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.body-sm}`, padding `{spacing.xl}`, no border-radius, 1 px solid `{colors.hairline}` top border. "Website Terms of Use", "Privacy Policy", and "Cookie Policy" links are underlined inline.

## Do's and Don'ts

### Do
- Use `{rounded.none}` — 0 px radius — on every button and form input. The square geometry is non-negotiable and the brand's single hardest design rule.
- Set every display headline in `{typography.display-*}` at weight 400. Size and negative tracking carry the hierarchy; weight never does.
- Reserve `{colors.fin-orange}` exclusively for Fin AI Agent touchpoints — the nav CTA, Fin badges, and Fin-specific feature CTAs. One accent, one meaning.
- Place the hero headline in Saans at 80 px with `-2.4 px` tracking and a `.9` line-height ratio. Loosening tracking or inflating line-height breaks the compressed editorial authority.
- Use `{colors.canvas-soft}` cream as the default page body background. White (`{colors.canvas}`) is reserved for card surfaces that sit on the cream page.
- Alternate section surfaces between cream and white to create depth without shadows — `{colors.canvas-soft}` band → `{colors.canvas}` card → `{colors.canvas-soft}` next band.
- Set body copy, buttons, labels, and all functional text in the system sans stack. Saans is exclusively a headline face.
- Close the page with `{colors.theme-near-black}` footer — the near-black polarity flip is the brand's depth cue.

### Don't
- Don't round a button. Not 4 px, not 2 px. Zero radius on every interactive rectangle is the brand's clearest shape decision.
- Don't bold a Saans headline. Weight 400 is the display ceiling — promoting to 600 or 700 destroys the editorial calm.
- Don't introduce a second accent color. Fin orange is the only chromatic signal; adding blue, green, or purple cheapens the single-accent system.
- Don't miniaturise the photography strip. The edge-to-edge portrait band is the brand's sole decorative texture — it only works at full viewport width.
- Don't use Saans for body copy, buttons, or labels. The custom face is load-optimised for headline-only use and reads strangely at small sizes.
- Don't apply Fin orange to general UI elements (hover states, borders, progress bars). Orange means Fin. Only Fin.
- Don't add drop-shadows to marketing cards. Depth comes from surface alternation; shadows would introduce material weight the brand deliberately avoids.
- Don't letter-space positively. All tracking is either zero or negative throughout the system.
