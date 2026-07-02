---
version: alpha
name: Stripe-design-system
description: "Stripe is a financial infrastructure brand whose surface is a clean white canvas punctuated by a single bold violet primary — #533afd — and a signature multi-stop aurora gradient (lavender through violet through magenta through coral through amber) that sweeps across hero sections as the brand's entire decorative system. A variable-weight geometric sans (sohne-var) carries every headline at weight 300 — deliberately light, almost editorial — and every body line at weight 400. The type is set in deep navy ink on white, with aggressive negative tracking at display sizes. Buttons are square-cornered by financial-platform standards: 4 px radius, never a pill. The brand reads as precise, trustworthy, and quietly modern."
colors:
  primary: "#533afd"
  on-primary: "#ffffff"
  ink: "#061b31"
  body: "#061b31"
  mute: "#425466"
  hairline: "#e6ebf1"
  canvas: "#ffffff"
  canvas-soft: "#f2f7fe"
  canvas-navy: "#061b31"
  link: "#533afd"
  success: "#00a67e"
  error: "#cd3d64"
  warning: "#e8a000"
  accent-gradient-stop-1: "#bdb4ff"
  accent-gradient-stop-2: "#643afd"
  accent-gradient-stop-3: "#533afd"
  gradient-aurora-lavender: "#bdb4ff"
  gradient-aurora-violet: "#533afd"
  gradient-aurora-magenta: "#d946a8"
  gradient-aurora-coral: "#f97316"
  gradient-aurora-amber: "#f59e0b"
  on-navy: "#ffffff"
  nav-text: "#061b31"
typography:
  display-xl:
    fontFamily: sohne-var, "SF Pro Display", sans-serif
    fontSize: 48px
    fontWeight: 300
    lineHeight: 55.2px
    letterSpacing: -0.96px
  display-lg:
    fontFamily: sohne-var, "SF Pro Display", sans-serif
    fontSize: 32px
    fontWeight: 300
    lineHeight: 35.2px
    letterSpacing: -0.64px
  display-md:
    fontFamily: sohne-var, "SF Pro Display", sans-serif
    fontSize: 26px
    fontWeight: 300
    lineHeight: 29.12px
    letterSpacing: -0.26px
  display-sm:
    fontFamily: sohne-var, "SF Pro Display", sans-serif
    fontSize: 22px
    fontWeight: 300
    lineHeight: 26.4px
    letterSpacing: -0.22px
  body-lg:
    fontFamily: sohne-var, "SF Pro Display", sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: sohne-var, "SF Pro Display", sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: sohne-var, "SF Pro Display", sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  caption:
    fontFamily: sohne-var, "SF Pro Display", sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  label-mono:
    fontFamily: sohne-var, "SF Pro Display", sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: sohne-var, "SF Pro Display", sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  button-lg:
    fontFamily: sohne-var, "SF Pro Display", sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  nav-link:
    fontFamily: sohne-var, "SF Pro Display", sans-serif
    fontSize: 15px
    fontWeight: 400
    lineHeight: 20px
  stat-display:
    fontFamily: sohne-var, "SF Pro Display", sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 18px
rounded:
  none: 0px
  button: 4px
  card: 6px
  md: 8px
  lg: 12px
  xl: 20px
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
  5xl: 96px
  6xl: 128px
  section: 160px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.nav-text}"
    typography: "{typography.nav-link}"
    height: 64px
    padding: "{spacing.md} {spacing.xl}"
  nav-link:
    textColor: "{colors.nav-text}"
    typography: "{typography.nav-link}"
    padding: "{spacing.xxs} {spacing.xs}"
  nav-cta-signin:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-contact:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: 15.5px {spacing.lg} 16.5px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: 15.5px {spacing.lg} 16.5px
  button-google-oauth:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: 15.5px {spacing.lg} 16.5px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  stat-ticker:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.stat-display}"
    padding: "{spacing.md} {spacing.xl}"
  logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.lg} {spacing.xl}"
  feature-card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl} {spacing.md}"
  feature-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.xl}"
  product-card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg} {spacing.lg}"
  navy-band:
    backgroundColor: "{colors.canvas-navy}"
    textColor: "{colors.on-navy}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.xl}"
  footer:
    backgroundColor: "{colors.canvas-navy}"
    textColor: "{colors.on-navy}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.xl}"
  link-inline:
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  badge-stat:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.mute}"
    typography: "{typography.caption}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.xs}"
  chat-widget:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.sm} {spacing.md}"
  ex-pricing-tier:
    description: Default pricing tier card — canvas-soft surface with hairline border and square-cornered chrome.
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured pricing tier — polarity-flipped to primary violet surface with white text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: What's Included summary card — canvas-soft surface for SaaS add-on feature tiers.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary drawer — line items per add-on on white canvas.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses primary violet as the left-edge indicator bar.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: Data table chrome. Header uses caption typography; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in card — canvas-soft surface with form inputs and primary button CTA inside.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog surface — white canvas with hairline border and card radius.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame — generous padding on canvas-soft.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — white card with hairline border and button radius.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Stripe is a financial infrastructure brand — the page is a developer and business platform whose marketing surface is engineered to inspire confidence in technical buyers and CFOs simultaneously. It achieves this through one of the cleanest restraint systems in fintech: a pure white `{colors.canvas}` canvas, deep-navy `{colors.ink}` copy, and a single violet primary `{colors.primary}` that carries every conversion target. The only moment the brand introduces colour at scale is the signature aurora gradient — a sweeping multi-stop ribbon of lavender through violet through magenta through coral through amber — that occupies the upper-right quadrant of the hero as the page's entire decorative gesture. That gradient is the brand's identity mark at display scale.

Type is the second decisive voice. A variable-weight geometric sans (`sohne-var`) carries every display headline at weight 300 — deliberately lighter than any comparable platform's headline face — and every body paragraph at 400. The result reads as calm authority: the brand never shouts. Display sizes are tracked aggressively negative (`-0.96px` at 48 px hero, `-0.64px` at 32 px section), so the wordmark-level openness is reserved for body text only. Headlines are sentence-case throughout; the brand never uses all-caps marketing headings.

Surfaces use a two-step ladder: `{colors.canvas}` pure white for the hero and primary sections, `{colors.canvas-soft}` `#f2f7fe` (a pale blue-white) for feature cards and inset regions. The deep-navy `{colors.canvas-navy}` `#061b31` serves as the polarity-flipped dark band for footer and closing sections. Buttons are 4 px radius — the brand's most distinctive geometric decision. In a world of pill CTAs, Stripe insists on near-square corners for all interactive controls, which reads as precise and platform-grade rather than soft-consumer. The "Sign up with Google" OAuth button sits alongside the primary CTA as a peer, not a secondary afterthought.

**Key Characteristics:**
- A single violet primary `{colors.primary}` carries every primary CTA. The "Contact sales" nav button and "Get started" hero button are both this violet — conversion and enterprise touchpoints use the same ink.
- The aurora gradient (lavender → violet → magenta → coral → amber) is the entire decorative system at hero scale. It is rendered as a large swept ribbon, never miniaturised, never reduced to a single stop.
- Every button — marketing scale or nav scale — uses `{rounded.button}` 4 px radius. No pill shapes anywhere in the Stripe system.
- Cards use `{rounded.card}` 6 px, just one step softer than the buttons, maintaining the near-square aesthetic throughout.
- The type weight 300 for all display sizes is structurally non-negotiable. Reversing to 600 or 700 breaks the brand entirely.

## Colors

### Brand & Accent
- **Primary Violet** (`{colors.primary}` — `#533afd`): The brand's one true accent. Every primary CTA button, every inline link, every active indicator. The "Get started" hero button, the "Contact sales" nav CTA, and hover states across the product all resolve to this tone.
- **Aurora Lavender** (`{colors.gradient-aurora-lavender}` — `#bdb4ff`): The lightest stop of the hero aurora gradient — the soft lavender at the gradient's upper reach. Also used as the lightest accent-gradient stop (`--accent-gradient-color-stop-1`).
- **Aurora Violet Deep** (`{colors.accent-gradient-stop-2}` — `#643afd`): The mid-point stop, between the lavender and the full primary, used in the gradient sweep.
- **Aurora Magenta** (`{colors.gradient-aurora-magenta}` — `#d946a8`): The warm-pink stop visible in the hero gradient's middle band.
- **Aurora Coral** (`{colors.gradient-aurora-coral}` — `#f97316`): The orange-coral stop visible at the gradient's lower-right reach.
- **Aurora Amber** (`{colors.gradient-aurora-amber}` — `#f59e0b`): The warm amber terminus of the gradient sweep.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure white. The hero, navigation, and primary content sections all sit on this ground.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f2f7fe`): A cool blue-tinted near-white used for feature cards, product cards, and inset regions. The brand's secondary surface — it signals "contained content" without introducing a strong tonal shift.
- **Canvas Navy** (`{colors.canvas-navy}` — `#061b31`): The deep navy used for the footer band and closing CTA sections. The polarity-flip surface when the brand wants gravity and authority.
- **Hairline** (`{colors.hairline}` — `#e6ebf1`): 1 px borders on cards, inputs, and secondary buttons.

### Text
- **Ink** (`{colors.ink}` — `#061b31`): The primary text colour — a deep navy-near-black, not pure black. Every headline and body paragraph on white or soft surfaces.
- **Mute** (`{colors.mute}` — `#425466`): Secondary text — sub-labels, stat captions, footer secondary lines, nav dropdown descriptors.
- **On Primary / On Navy** (`{colors.on-primary}` / `{colors.on-navy}` — `#ffffff`): All text on violet primary or navy-canvas surfaces.

### Semantic
- **Link** (`{colors.link}` — `#533afd`): Shares the primary violet. Inline links are set in this tone with underline-on-hover.
- **Success** (`{colors.success}` — `#00a67e`): Status indicators for completed payments and live integrations.
- **Error** (`{colors.error}` — `#cd3d64`): Validation and failed-state red-pink, visible in form and dashboard error states.
- **Warning** (`{colors.warning}` — `#e8a000`): Pending or cautionary status indicator.

## Typography

### Font Family
One variable-weight geometric sans — `sohne-var` — carries the entire system. It operates in two weight registers: **300** (light) for every display headline and **400** (regular) for every body paragraph, button label, and nav link. The face never appears at 600 or 700 in any captured marketing surface; the brand's restraint is structural, not accidental.

There is no monospace face in use on the marketing homepage, though Stripe's developer documentation surfaces use a code face for terminal blocks.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 300 | 55.2px | -0.96px | Hero headline ("Financial infrastructure to grow your revenue.") |
| `{typography.display-lg}` | 32px | 300 | 35.2px | -0.64px | Section headlines, product-category headings |
| `{typography.display-md}` | 26px | 300 | 29.12px | -0.26px | Card cluster headlines, feature-block headings |
| `{typography.display-sm}` | 22px | 300 | 26.4px | -0.22px | Inline sub-headings, product-section eyebrows |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Lead paragraphs under section headlines |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph, card body copy |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary body, nav dropdown text, footer links |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Fine print, badge labels, footer secondary lines |
| `{typography.button-lg}` | 16px | 400 | 24px | 0 | Marketing-scale button labels ("Get started", "Contact sales") |
| `{typography.button-md}` | 14px | 400 | 20px | 0 | Nav-scale button labels, small CTAs |
| `{typography.nav-link}` | 15px | 400 | 20px | 0 | Top navigation link items ("Products", "Solutions", "Pricing") |
| `{typography.stat-display}` | 13px | 400 | 18px | 0 | Live ticker labels ("Global GDP running on Stripe: 1.664%") |

### Principles
- **Weight 300 for display is the brand's voice.** Stripe's headlines read as precise and editorial precisely because they are light. Increasing display weight to 500 or 600 collapses the brand into generic SaaS.
- **Negative tracking at display scale.** `-0.96px` at 48 px and `-0.64px` at 32 px are non-negotiable. The brand does not open-track any display size.
- **Sentence-case headlines throughout.** No all-caps. No title case on headlines. The first word capitalised, then natural sentence flow.
- **Weight 400 for everything interactive.** Button labels, nav links, and inline CTAs are all 400 — the brand does not bold its interactive text. The violet colour does the work of signalling interactivity.
- **One face, two weights.** The simplicity of the system — one variable font, two operating weights — is a deliberate brand choice. Do not introduce a second display face.

### Note on Font Substitutes
`sohne-var` is a proprietary variable-weight geometric sans (by Klim Type Foundry, licensed by Stripe). The closest open-source substitute for weight 300 display usage is *Inter* at weight 300 with `font-feature-settings: "cv05", "cv08"` for the more geometric alternates. *Plus Jakarta Sans* at 300 is a second-best option. The variable-font axis (`wght`) must be available for the display-light / body-regular split to work correctly.

## Layout

### Spacing System
- **Base unit**: 4 px. Every captured padding and gap value is a multiple of 4 px.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px · `{spacing.6xl}` 128 px · `{spacing.section}` 160 px.
- **Hero band padding**: `{spacing.4xl}` 64 px top/bottom to give the aurora gradient room to sweep. The gradient occupies the right half of the hero's visual weight.
- **Card interior padding**: feature cards use `{spacing.3xl}` 48 px top/bottom with `{spacing.md}` 16 px horizontal — generously padded to let single-concept content breathe inside a contained surface.
- **Nav padding**: `{spacing.md}` 16 px vertical, `{spacing.xl}` 32 px horizontal. The nav sits tight relative to the hero's generous padding.

### Grid & Container
- **Max width**: approximately 1200 px, centred with horizontal gutters of `{spacing.xl}` 32 px on desktop, `{spacing.md}` 16 px on mobile.
- **Column patterns**:
  - Hero: single-column headline + CTA cluster left-aligned with gradient backdrop right.
  - Logo strip: 7–8 logos across in a single flex row, full bleed edge-to-edge.
  - Feature card row: 3-up or 4-up grid at desktop, collapsing to 1-up at mobile.
  - Product section: 2-up split (copy left, product illustration right).
  - Footer: 4–5 column nav grid on navy canvas.

### Whitespace Philosophy
The aurora gradient handles all decorative weight in the hero; whitespace handles section separation everywhere else. Section-to-section spacing is `{spacing.5xl}` 96 px, giving each product cluster its own visual territory. Inside cards the headline/body stack is tight (8 px gap), then a gap before any CTA or link. The page reads as confident and unhurried — large inter-section gaps, tight intra-card stacks.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero band, footer navy band, logo strip. |
| Level 1 — Hairline | `0 0 0 1px {colors.hairline}` 1 px border. | Feature cards on soft-canvas background; secondary button chrome. |
| Level 2 — Subtle Drop | `0px 2px 8px rgba(6, 27, 49, 0.06)` | Slightly elevated product cards and form inputs. |
| Level 3 — Card Float | `0px 4px 16px rgba(6, 27, 49, 0.08)` | The chat widget, modal dialogs, dropdown menus. |

Stripe's elevation is exceptionally flat — the brand relies on background-colour contrast (`{colors.canvas}` vs `{colors.canvas-soft}`) rather than shadows to separate layers. When shadows appear, they are single-offset and navy-tinted (derived from `{colors.ink}`), never a generic grey drop.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero and footer bands. |
| `{rounded.button}` | 4px | Every button and interactive control — "Get started", "Sign up with Google", "Sign in", "Contact sales". The brand's most distinctive geometric signature. |
| `{rounded.card}` | 6px | Feature cards, product cards, form inputs, the chat widget. |
| `{rounded.md}` | 8px | Slightly larger container chrome where cards host image or illustration caps. |
| `{rounded.lg}` | 12px | Larger modal or dialog surfaces. |
| `{rounded.xl}` | 20px | Rounded container panels on specific product pages. |
| `{rounded.full}` | 9999px | Avatar circles, icon containers only — never used for CTA buttons. |

The absence of pill buttons is the defining geometric statement of the Stripe system. 4 px is not a design accident — it is a brand position: we are infrastructure, not consumer.

## Components

### Buttons

**`button-primary`** — the canonical violet CTA, marketing scale.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-lg}` (16 px / 400), padding `15.5px {spacing.lg} 16.5px`, shape `{rounded.button}` 4 px. Renders ~48 px tall in marketing flex layouts.

**`button-secondary`** — the white outlined peer button ("Sign up with Google").
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, same typography and padding as `button-primary`, shape `{rounded.button}` 4 px.

**`button-google-oauth`** — the Google-branded sign-up button with the Google logo prefix.
- Background `{colors.canvas}`, text `{colors.ink}`, border `{colors.hairline}`, typography `{typography.button-lg}`, shape `{rounded.button}` 4 px. Hosts the Google coloured `G` logomark as a leading icon.

**`nav-cta-signin`** — the "Sign in" nav button, outlined violet.
- Background `{colors.canvas}`, text `{colors.primary}`, border `{colors.primary}`, label in `{typography.button-md}`, shape `{rounded.button}` 4 px.

**`nav-cta-contact`** — the "Contact sales" nav CTA, filled violet.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}`, shape `{rounded.button}` 4 px.

### Navigation

**`nav-bar`** — the sticky top navigation.
- Background `{colors.canvas}`, text `{colors.nav-text}`, height 64 px, padding `{spacing.md} {spacing.xl}`. Layout: Stripe wordmark left, five dropdown link groups centre, "Sign in" + "Contact sales" cluster right.

**`nav-link`** — the dropdown trigger links in the nav row.
- Text `{colors.nav-text}`, set in `{typography.nav-link}`, padding `{spacing.xxs} {spacing.xs}`. Each carries a chevron-down indicator for the dropdown.

### Hero & Bands

**`hero-band`** — the white hero with aurora gradient backdrop.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Inside: a live stat ticker above the headline, the headline in `{typography.display-xl}` (weight 300, sentence-case), body lead in `{typography.body-lg}`, then a CTA row with `button-primary` ("Get started") + `button-google-oauth` ("Sign up with Google"). The aurora gradient occupies the upper-right region of the hero as a swept ribbon.

**`stat-ticker`** — the "Global GDP running on Stripe: 1.664%" live counter above the hero headline.
- Background `{colors.canvas}`, text split between `{colors.ink}` (label) and `{colors.mute}` (value), set in `{typography.stat-display}`, padding `{spacing.md} {spacing.xl}`.

**`feature-band`** — a white section hosting product feature copy and illustration.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.xl}`. Section headline in `{typography.display-lg}`; supporting body in `{typography.body-md}`.

**`navy-band`** — the polarity-flipped deep navy closing section.
- Background `{colors.canvas-navy}`, text `{colors.on-navy}`, padding `{spacing.5xl} {spacing.xl}`. Headline in `{typography.display-lg}` white on navy; CTA resolves to the white-outlined `button-secondary` variant.

### Cards & Containers

**`feature-card`** — the canonical product feature card (3-up or 4-up grid sections).
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.3xl} {spacing.md}` (48 px / 16 px), shape `{rounded.card}` 6 px. Carries a product icon or illustration at top, headline in `{typography.display-md}`, body in `{typography.body-md}`.

**`product-card`** — the more compact product-category tile.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.lg} {spacing.lg}`, shape `{rounded.card}` 6 px.

### Supporting Elements

**`logo-strip`** — the customer-logo marquee row (OpenAI, Amazon, NVIDIA, Ford, Coinbase, Google, Shopify, etc.).
- Background `{colors.canvas}`, text `{colors.mute}`, padding `{spacing.lg} {spacing.xl}`. Logos rendered in their native colours or monochrome at consistent height in a single flex row.

**`badge-stat`** — small inline label chips for live data captions.
- Background `{colors.canvas-soft}`, text `{colors.mute}`, set in `{typography.caption}`, padding `{spacing.xxs} {spacing.xs}`, shape `{rounded.button}` 4 px.

**`chat-widget`** — the "Chat with Stripe sales" floating widget in the bottom-right corner.
- Background `{colors.canvas}`, text `{colors.ink}`, border `{colors.hairline}`, set in `{typography.body-sm}`, shape `{rounded.card}` 6 px, padding `{spacing.sm} {spacing.md}`.

**`footer`** — the deep navy footer with multi-column nav.
- Background `{colors.canvas-navy}`, text `{colors.on-navy}`, padding `{spacing.4xl} {spacing.xl}`. Column labels in `{typography.caption}` (uppercase-styled); link rows in `{typography.body-sm}`.

**`link-inline`** — inline body-copy links.
- Text `{colors.link}` (`#533afd`), set in `{typography.body-md}`, underlined on hover.

## Do's and Don'ts

### Do
- Use `{colors.primary}` (`#533afd`) for every primary CTA button, active nav indicator, and inline link. Violet IS the conversion signal.
- Keep every button at `{rounded.button}` 4 px. The near-square shape is the brand's geometric identity — it signals platform infrastructure, not consumer product.
- Set display headlines at weight 300. The light weight paired with negative tracking is the brand's most distinctive typographic statement.
- Use the aurora gradient at hero scale only — the full swept ribbon occupying a generous portion of the hero backdrop. Never reduce it to a small swatch, icon fill, or single-colour extract.
- Cycle page surfaces between `{colors.canvas}` white and `{colors.canvas-soft}` blue-white for feature sections; use `{colors.canvas-navy}` as the closing polarity-flip band.
- Keep card radius at `{rounded.card}` 6 px — one step above the button, maintaining a consistent near-square aesthetic throughout.
- Rely on background-colour contrast (`canvas` vs `canvas-soft`) as the primary depth cue. Shadows are used sparingly and with navy tint, not generic grey.

### Don't
- Don't round CTAs to a pill or any radius above 6 px. A pill-shaped CTA would directly contradict the brand's infrastructure positioning.
- Don't increase display font weight above 300. Weight 500, 600, or 700 in sohne-var makes the brand read as a generic growth-marketing site, not precision infrastructure.
- Don't apply the aurora gradient at icon or badge scale. It belongs to the hero as an atmospheric gesture, not as a colour-fill shortcut for small elements.
- Don't use the aurora gradient's individual colour stops as standalone accents in UI chrome. The gradient is a unified object — only the primary violet `{colors.primary}` is extracted from it as a standalone brand colour.
- Don't introduce a heavy drop-shadow on cards. The brand's elevation is near-flat; cards sit on the page via surface-colour contrast and hairline borders.
- Don't use all-caps or title-case headlines. Sentence-case is non-negotiable across every scale.
- Don't use a second typeface. The sohne-var variable font at two weights is the complete typographic system.
