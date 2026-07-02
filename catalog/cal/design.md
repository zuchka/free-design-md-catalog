---
version: alpha
name: Cal.com
description: Cal.com is a scheduling-infrastructure brand whose surface is a warm near-white canvas broken by a large rounded hero card, a custom heavyweight geometric sans for headlines, and a near-black ink system for everything functional — the only decoration is the live product itself, embedded directly into the marketing page as a working calendar mockup.
colors:
  primary: "#000000"
  on-primary: "#ffffff"
  ink: "#242424"
  body: "#555555"
  mute: "#888888"
  hairline: "#e5e5e5"
  hairline-strong: "#d1d1d1"
  canvas: "#ffffff"
  canvas-soft: "#f4f4f4"
  canvas-card: "#ffffff"
  link: "#0000ee"
  success: "#22c55e"
  error: "#ef4444"
  warning: "#f59e0b"
  cal-brand: "#000000"
  cal-brand-emphasis: "#292929"
  rating-gold: "#f59e0b"
  rating-green: "#22c55e"
  time-slot-bg: "#f4f4f4"
  time-slot-selected-bg: "#000000"
  time-slot-selected-text: "#ffffff"
  calendar-today: "#000000"
  calendar-today-text: "#ffffff"
  calendar-available: "#f4f4f4"
typography:
  display-xl:
    fontFamily: Cal Sans, sans-serif
    fontSize: 64px
    fontWeight: 600
    lineHeight: 70.4px
    letterSpacing: normal
  display-lg:
    fontFamily: Cal Sans, sans-serif
    fontSize: 48px
    fontWeight: 600
    lineHeight: 52.8px
    letterSpacing: normal
  display-md:
    fontFamily: Cal Sans, sans-serif
    fontSize: 32px
    fontWeight: 600
    lineHeight: 38px
    letterSpacing: normal
  display-sm:
    fontFamily: Cal Sans, sans-serif
    fontSize: 18px
    fontWeight: 600
    lineHeight: 23.4px
    letterSpacing: -0.2px
  body-lg:
    fontFamily: sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  body-sm:
    fontFamily: sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  caption:
    fontFamily: sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  caption-strong:
    fontFamily: sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
  button-md:
    fontFamily: sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
  button-lg:
    fontFamily: sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  button: 8px
  card: 16px
  lg: 20px
  xl: 24px
  pill: 100px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 10px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 32px
  4xl: 40px
  5xl: 48px
  6xl: 64px
  section: 96px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 64px
    padding: "{spacing.md} {spacing.2xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-signin:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
  nav-cta-get-started:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.2xl}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.2xl}"
  button-secondary:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.2xl}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.2xl}"
  announcement-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.lg}"
  hero-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.5xl} {spacing.2xl}"
  hero-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
    shadow: rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px
  booking-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
    shadow: rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px
  calendar-widget:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  time-slot-pill:
    backgroundColor: "{colors.time-slot-bg}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
  time-slot-pill-selected:
    backgroundColor: "{colors.time-slot-selected-bg}"
    textColor: "{colors.time-slot-selected-text}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.lg}"
  card-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
    shadow: rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px
  review-strip:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    padding: "{spacing.lg} {spacing.2xl}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
    height: 40px
  badge:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "{spacing.xxs} {spacing.xs}"
  footer:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.2xl}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  avatar-chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.full}"
  ex-pricing-tier:
    description: Default pricing tier card on canvas surface with hairline border.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-pricing-tier-featured:
    description: Featured tier — polarity-flipped to primary fill with white text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-product-selector:
    description: Feature summary card for plan comparison — canvas-soft surface.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-cart-drawer:
    description: Add-on / subscription line-item summary drawer.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row inside the scheduling app shell. Active state uses primary as left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  ex-data-table-cell:
    description: Data table chrome for booking lists. Header uses caption-strong; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card. Card-marketing chrome with form-input primitives inside.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-modal-card:
    description: Modal dialog surface — card-marketing chrome with elevated shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.2xl}"
  ex-empty-state-card:
    description: Empty-state frame on canvas-soft with generous padding.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.5xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification surface — card-marketing shape with soft shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"
---
## Overview

Cal.com is a scheduling-infrastructure brand that earns its design credibility by putting the product front and centre — the hero section is not an illustration or a gradient, it is a live booking interface embedded directly into the marketing page. The surface beneath it is a warm `{colors.canvas-soft}` near-white (`#f4f4f4`), broken by a large `{rounded.card}` 16 px white card that contains both the event-selector panel and the working calendar widget. That self-referential move — "our product IS the demo" — sets the entire visual tone.

The typographic system runs on two voices. Every headline and display moment belongs to Cal Sans, the brand's own custom geometric display face at weight 600. It is used exclusively for display — it does not appear in buttons, body copy, or labels. Below display scale, an unadorned system sans (`sans-serif`) carries every UI label, body paragraph, button, and caption. The contrast between the expressive custom display face and the neutral functional sans is deliberate: Cal Sans signals "this is a product worth building", the system sans signals "this is an engineer's tool."

The colour palette is intentionally spare. Near-black `{colors.ink}` (`#242424`) on warm near-white `{colors.canvas-soft}` is the entire page surface. The primary CTA is pure black `{colors.primary}` (`#000000`) on white, rendered as a tight 8 px radius rectangle — decidedly not a pill, never rounded past the `{rounded.button}` token. The pill radius (`{rounded.pill}` 100 px) exists but appears only on the announcement banner chip at the top of the hero, not on functional CTAs. Elevation is handled by a two-stop stacked shadow — a tight 5 px focused contact shadow plus a wider 8 px diffuse ambient layer — giving cards a grounded, paper-on-desk quality without drama.

The review-strip at the bottom of the hero (Trustpilot, ProductHunt, G2 stars) acts as the only third-party social surface. No customer logos, no testimonial quotes — the brand trusts its star ratings and the live calendar widget to close the conversion.

## Colors

### Brand & Surface
- **Canvas Soft** (`{colors.canvas-soft}` — `#f4f4f4`): The page body background — a warm near-white that reads as off-white rather than gray. Every section except cards sits on this tone.
- **Canvas** (`{colors.canvas}` — `#ffffff`): The card and input surface — pure white used inside every elevated component to give the stacked shadow something to read against.
- **Primary / Cal Brand** (`{colors.primary}` — `#000000`): The single conversion-bearing colour. Every CTA button, the "Get started" nav pill, and the active calendar-day dot use pure black. Not softened to `#242424` — the brand is literal about its ink.
- **Cal Brand Emphasis** (`{colors.cal-brand-emphasis}` — `#292929`): A near-black used for hover states on primary elements.

### Text
- **Ink** (`{colors.ink}` — `#242424`): The headline and high-priority text colour, distinct from absolute black. Every H1/H2/H3 is set in this tone, not `#000000`.
- **Body** (`{colors.body}` — `#555555`): Secondary text — sub-headlines, body paragraphs, nav labels.
- **Mute** (`{colors.mute}` — `#888888`): Lowest-priority text — meta labels, helper text, disabled states.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): All text rendered on `{colors.primary}` surfaces (CTAs, selected time slots, today's calendar date).

### Borders & Dividers
- **Hairline** (`{colors.hairline}` — `#e5e5e5`): Standard 1 px divider for card borders, input outlines, row separators, and the announcement pill border.
- **Hairline Strong** (`{colors.hairline-strong}` — `#d1d1d1`): Slightly stronger divider for contextual separators inside the booking card.

### Functional
- **Time Slot Bg** (`{colors.time-slot-bg}` — `#f4f4f4`): The default state of duration-selector pills (15m / 30m / 45m / 1h). Matches the page background, giving them a recessed look.
- **Time Slot Selected Bg** (`{colors.time-slot-selected-bg}` — `#000000`): The active duration pill — polarity-flipped to pure black.
- **Calendar Today** (`{colors.calendar-today}` — `#000000`): The today indicator dot and the selected-day background in the calendar widget.
- **Calendar Available** (`{colors.calendar-available}` — `#f4f4f4`): Available-but-unselected calendar day chip background.
- **Link** (`{colors.link}` — `#0000ee`): Default browser-convention link colour; appears on inline body links.
- **Rating Gold** (`{colors.rating-gold}` — `#f59e0b`): Star rating fill on ProductHunt / G2 review strips.
- **Rating Green** (`{colors.rating-green}` — `#22c55e`): Trustpilot star fill.
- **Success** (`{colors.success}` — `#22c55e`): Form success and positive status indicators.
- **Error** (`{colors.error}` — `#ef4444`): Validation error states.
- **Warning** (`{colors.warning}` — `#f59e0b`): Caution and pending states.

## Typography

### Font Families
Two voices carry the system:

1. **Cal Sans** — the brand's custom geometric display face. Used at weight 600 only, at display scale (18 px and above). It appears in the H1 hero headline, section headlines, and the brand logotype. It does not appear in buttons, body copy, or captions. Open-source substitute: *Plus Jakarta Sans* at weight 700 with `font-feature-settings: "cv01"` comes closest; *DM Sans* at 600 is a serviceable second.

2. **System sans-serif** — the unbranded functional voice. Every button label, body paragraph, input text, caption, and navigation link uses the system stack at weights 400 and 500. This deliberate choice keeps the product's chrome neutral — "we are infrastructure" — while Cal Sans handles brand expression. Open-source substitute: *Inter* at weights 400 / 500.

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 600 | 70.4px | normal | H1 hero headline ("The better way to schedule your meetings"). |
| `{typography.display-lg}` | 48px | 600 | 52.8px | normal | Section headline scale. |
| `{typography.display-md}` | 32px | 600 | 38px | normal | Mid-tier section headlines. |
| `{typography.display-sm}` | 18px | 600 | 23.4px | -0.2px | Card headlines, feature labels, booking event title ("Partnerships Meeting"). |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Hero sub-headline / lead paragraph. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph. |
| `{typography.body-md-strong}` | 16px | 500 | 24px | 0 | Bolded inline body or emphasis labels. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Nav links, booking card metadata, calendar day labels. |
| `{typography.body-sm-strong}` | 14px | 500 | 20px | 0 | Time-slot pill labels, active nav states. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Review strip labels, fine print, helper text. |
| `{typography.caption-strong}` | 12px | 500 | 16px | 0 | Announcement pill text ("Cal.com launches v6.6"), badge labels. |
| `{typography.button-md}` | 12px | 500 | 16px | 0 | Primary CTA and nav "Get started" label. |
| `{typography.button-lg}` | 14px | 500 | 20px | 0 | Larger button contexts. |

### Principles
- **Cal Sans is display-only.** It never appears below 18 px and never in UI controls. Buttons, inputs, badges, and all navigation labels use the system sans.
- **No letter-spacing games above body scale.** Display headings use `normal` tracking (not negative like Vercel). Only the 18 px display-sm token introduces a subtle `-0.2 px` tracking.
- **No italic, no light weight.** The brand operates at 400 and 500 for the system sans, 600 for Cal Sans. No lighter weights appear on the marketing surface.
- **Sentence-case everywhere.** Headlines like "The better way to schedule your meetings" are sentence-case. Buttons are sentence-case or title-case but never all-caps.

## Layout

### Spacing System
- **Base unit**: 4 px. The extracted scale (`4px / 8px / 10px / 12px / 16px / 24px`) shows a compact 4-based rhythm with a 10 px step for minor adjustments.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 10 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 20 px · `{spacing.2xl}` 24 px · `{spacing.3xl}` 32 px · `{spacing.4xl}` 40 px · `{spacing.5xl}` 48 px · `{spacing.6xl}` 64 px · `{spacing.section}` 96 px.
- **Button interior padding**: `12px 24px` (`{spacing.md} {spacing.2xl}`) — measured directly from the extracted button signal.
- **Card interior padding**: `24px` (`{spacing.2xl}`) — consistent across the booking card and hero card.
- **Section vertical rhythm**: hero section uses `{spacing.5xl}` 48 px top/bottom; subsequent sections likely `{spacing.section}` 96 px between major bands.

### Grid & Container
- **Max width**: approximately 1200 px. The hero layout constrains to a two-column split — copy left, booking widget right — within a centered container.
- **Hero layout**: 50/50 column split at desktop. Left column holds the headline, sub-headline, and two CTA buttons. Right column holds the hero card containing the booking panel and the calendar widget side by side.
- **Hero card**: a single large `{rounded.card}` 16 px white card that groups the booking panel (left) and the calendar (right) as a compound component — the product demo is the visual centrepiece.
- **Review strip**: three review-platform badges (Trustpilot, ProductHunt, G2) sit below the hero card in a flex row, left-aligned under the card.

### Whitespace Philosophy
The page is generous but not extravagant. The single large hero card does most of the compositional work; whitespace above and below it gives the Cal Sans headline room to breathe at 64 px. Inside the booking card, information is compact — the event-owner avatar, title, and metadata stack tightly with 8–12 px gaps before the time-slot row. The philosophy is "product first, copy second": the live calendar widget occupies more visual real estate than the marketing headline.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Page background bands on `{colors.canvas-soft}`. |
| Level 1 — Contact Shadow | `rgba(36,36,36,0.7) 0px 1px 5px -4px, rgba(36,36,36,0.05) 0px 4px 8px 0px` | Every marketing card and the hero booking card. The tight contact component reads as a crisp edge lift; the wider diffuse component anchors the card to the surface. |
| Level 2 — Elevated | Increased diffuse spread, same two-stop stacking pattern. | Modal / dialog surfaces (inferred). |

The brand's shadow system is a deliberate two-stop stack — a focused near-black contact shadow (`0.7` opacity, `-4px` spread pulling it tight) paired with a soft near-invisible ambient (`0.05` opacity). The result reads as "paper sitting on a light table" — present without drama. There is no decorative gradient, no atmospheric mesh — the white card on the warm-gray body IS the entire depth system.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed section backgrounds. |
| `{rounded.xs}` | 4px | Smallest UI chips and internal dividers. |
| `{rounded.sm}` | 6px | Minor UI radius for small badges. |
| `{rounded.button}` | 8px | Every button and CTA — the brand's primary UI radius. Nav "Get started", primary CTAs, form inputs, time-slot pills. This is measured from the live site and is non-negotiable. |
| `{rounded.card}` | 16px | Every marketing card and the hero compound booking card. Distinct from button radius. |
| `{rounded.lg}` | 20px | Larger card variants. |
| `{rounded.xl}` | 24px | Outermost container chrome where needed. |
| `{rounded.pill}` | 100px | The announcement banner chip only ("Cal.com launches v6.6"). Not used on CTAs. |
| `{rounded.full}` | 9999px | Avatar circles, small icon containers. |

The most important constraint: `{rounded.button}` (8 px) and `{rounded.card}` (16 px) are measured values and must stay separate. The brand is explicitly NOT using pill-shaped CTAs — the marketing buttons are rectangular with an 8 px radius. This is a brand identity choice that separates Cal.com from rounder SaaS competitors.

## Components

### Navigation

**`nav-bar`** — the top navigation.
- White background `{colors.canvas}`, height 64 px, padding `{spacing.md} {spacing.2xl}`. Layout: Cal.com wordmark left, link row centre (Solutions / Enterprise / Cal.ai / Developer / Resources / Pricing), Sign in + Get started cluster right. Sign in is a ghost text link; Get started is the black `{rounded.button}` 8 px pill.

**`nav-link`** — centred navigation links with dropdown chevrons.
- Text `{colors.ink}`, set in `{typography.body-sm}`, padding `{spacing.xs} {spacing.md}`.

**`nav-cta-signin`** — the "Sign in" text CTA in the nav.
- Text `{colors.ink}`, set in `{typography.body-sm-strong}`. Renders as plain text with no border or background.

**`nav-cta-get-started`** — the black "Get started →" button in the nav.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}` (12 px / 500), padding `{spacing.md} {spacing.2xl}`, shape `{rounded.button}` 8 px. Carries a "→" chevron suffix.

### Buttons

**`button-primary`** — the marketing-scale black CTA ("Sign up with Google", "Get started").
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}` (12 px / 500), padding `{spacing.md} {spacing.2xl}`, shape `{rounded.button}` 8 px. Full-width inside the hero copy column.

**`button-secondary`** — the soft secondary CTA ("Sign up with email →").
- Background `{colors.canvas-soft}`, text `{colors.ink}`, same typography + padding as `button-primary`, shape `{rounded.button}` 8 px. Full-width, paired below `button-primary`.

**`button-ghost`** — a transparent / hairline-bordered button for tertiary actions.
- Background transparent, text `{colors.ink}`, shape `{rounded.button}` 8 px.

### Hero & Bands

**`hero-band`** — the page-opening section.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.2xl}`. Houses the announcement pill, the Cal Sans H1 at `{typography.display-xl}`, the lead body at `{typography.body-lg}`, two full-width CTA buttons, and the hero card compound to the right.

**`hero-card`** — the large white compound card that houses the live product demo.
- Background `{colors.canvas}`, text `{colors.ink}`, shape `{rounded.card}` 16 px, padding `{spacing.2xl}`, shadow Level 1. Contains the `booking-card` panel on the left and the `calendar-widget` on the right.

**`booking-card`** — the event-detail panel inside the hero card.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.2xl}`, set in `{typography.body-sm}`. Houses the host avatar + name, event title in `{typography.display-sm}`, description body, and the `time-slot-pill` row.

**`calendar-widget`** — the interactive calendar inside the hero card.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.2xl}`. Month/year header in `{typography.body-md-strong}`; day labels (SUN / MON…) in `{typography.caption-strong}`; day numbers in `{typography.body-sm}`. Available days render on `{colors.calendar-available}`; today renders on `{colors.calendar-today}` with white text; selected days rendered with a ring highlight.

### Chips & Pills

**`announcement-pill`** — the "Cal.com launches v6.6 ›" banner chip.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, label in `{typography.caption-strong}`, shape `{rounded.pill}` 100 px, padding `{spacing.xs} {spacing.lg}`. This is the only `{rounded.pill}` element in the hero.

**`time-slot-pill`** — the duration-selector chips (15m / 30m / 45m / 1h).
- Background `{colors.time-slot-bg}`, text `{colors.ink}`, label in `{typography.body-sm-strong}`, shape `{rounded.button}` 8 px, padding `{spacing.xs} {spacing.lg}`.

**`time-slot-pill-selected`** — the active duration chip.
- Background `{colors.time-slot-selected-bg}` pure black, text `{colors.on-primary}`, same shape + typography as `time-slot-pill`.

**`badge`** — small metadata label.
- Background `{colors.canvas-soft}`, text `{colors.body}`, label in `{typography.caption}`, shape `{rounded.full}`, padding `{spacing.xxs} {spacing.xs}`.

**`avatar-chip`** — the circular host avatar in the booking card.
- Shape `{rounded.full}`, carries the host photo. Name set in `{typography.body-sm}` below.

### Social Proof

**`review-strip`** — the row of star-rating logos (Trustpilot / ProductHunt / G2).
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.lg} {spacing.2xl}`. Logos + star SVGs in a flex row. Stars use `{colors.rating-green}` (Trustpilot) and `{colors.rating-gold}` (ProductHunt, G2). Labels set in `{typography.caption}`.

### Forms & Inputs

**`form-input`** — standard text input.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, label in `{typography.body-sm}`, shape `{rounded.button}` 8 px, padding `{spacing.xs} {spacing.md}`, height 40 px.

### Global

**`footer`** — the bottom navigation band.
- Background `{colors.canvas-soft}`, text `{colors.body}`, padding `{spacing.4xl} {spacing.2xl}`. Column headers in `{typography.body-sm-strong}`; link rows in `{typography.body-sm}`.

**`link-inline`** — body-copy inline links.
- Text `{colors.link}` (`#0000ee`), set in `{typography.body-md}`.

**`card-marketing`** — general-purpose marketing card for feature sections.
- Background `{colors.canvas}`, text `{colors.ink}`, shape `{rounded.card}` 16 px, padding `{spacing.2xl}`, shadow Level 1.

## Do's and Don'ts

### Do
- Use `{rounded.button}` (8 px) for every CTA, button, input, and time-slot chip. It is the brand's primary UI radius and is a measured, non-negotiable value.
- Use `{rounded.card}` (16 px) for every card surface. Keep it visually distinct from the button radius — this two-radius system is intentional.
- Reserve `{rounded.pill}` (100 px) exclusively for the announcement pill / banner chip. It must not be applied to CTAs or functional buttons.
- Set every hero headline in Cal Sans at weight 600, sentence-case. The custom display face is the only visual brand expression — protect it.
- Use the two-stop stacked shadow (`rgba(36,36,36,0.7) 0px 1px 5px -4px, rgba(36,36,36,0.05) 0px 4px 8px 0px`) for all elevated card surfaces. Never a single heavy drop-shadow.
- Put the live product interface (calendar / booking card) at the visual centre of marketing pages. The product IS the decoration.
- Use pure black `{colors.primary}` for primary CTAs. The brand is explicit — not near-black, not a brand blue, pure `#000000`.

### Don't
- Don't use Cal Sans below 18 px, in buttons, in nav links, in captions, or in any UI control. It is a display face only.
- Don't round CTA buttons past `{rounded.button}` (8 px). The brand deliberately avoids pill-shaped CTAs — they would contradict the "infrastructure tool" positioning.
- Don't introduce an accent colour. The palette is black / near-black ink on warm near-white. Adding a brand blue or any saturated accent would break the intentional restraint.
- Don't apply letter-spacing tricks to Cal Sans headlines. The face tracks at normal spacing — forced negative tracking is not part of this brand's voice.
- Don't add a heavy drop-shadow (single 8+ px blur, high opacity). The shadow system is a two-stop soft stack. Heavy shadows would fight the "paper on table" quality.
- Don't swap the booking card or calendar widget for an illustration or photograph. The live product demo is the hero — replacing it with static imagery would betray the brand's "product-first" positioning.
- Don't use the system sans at weight 600 or above. Body and UI text operates at 400 and 500 only; Cal Sans owns weight 600.
