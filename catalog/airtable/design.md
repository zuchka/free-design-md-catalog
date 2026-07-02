---
version: alpha
name: Airtable
description: "Airtable is a no-code platform brand whose surface is a clean white canvas anchored by a deep charcoal-near-black ink system, interrupted at feature scale by warm coral-orange accent cards that signal the brand's appetite for bold, rounded warmth — 32 px card radii against a measured 12 px button geometry. The type system is built entirely on a proprietary Haas grotesque family: a display-weight variant for headlines at neutral tracking, a text-optimised variant for body. No aggressive negative tracking, no mono technical face — this is a business-software brand that wants to feel approachable and capable, not austere."
colors:
  primary: "#181d26"
  on-primary: "#ffffff"
  ink: "#333840"
  body: "#333333"
  mute: "#6b7280"
  hairline: "#e5e7eb"
  hairline-strong: "#d1d5db"
  canvas: "#ffffff"
  canvas-soft: "#f5f7fa"
  canvas-blue-tint: "#edf2ff"
  link: "#1a56db"
  success: "#0e9f6e"
  error: "#f05252"
  warning: "#c27803"
  accent-coral: "#aa2d00"
  accent-coral-text: "#fcab79"
  accent-coral-on: "#ffffff"
  banner-bg: "#eef2ff"
  banner-text: "#181d26"
  banner-link: "#1a56db"
  nav-cta-signup-bg: "#181d26"
  nav-cta-signup-text: "#ffffff"
  nav-cta-demo-bg: "#ffffff"
  nav-cta-demo-text: "#181d26"
  nav-cta-demo-border: "#181d26"
typography:
  display-xl:
    fontFamily: Haas, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 56px
    letterSpacing: normal
  display-lg:
    fontFamily: Haas, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif
    fontSize: 40px
    fontWeight: 400
    lineHeight: 48px
    letterSpacing: normal
  display-md:
    fontFamily: Haas, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif
    fontSize: 32px
    fontWeight: 400
    lineHeight: 40px
    letterSpacing: normal
  display-sm:
    fontFamily: Haas, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif
    fontSize: 24px
    fontWeight: 400
    lineHeight: 32.4px
    letterSpacing: 0.12px
  body-lg:
    fontFamily: '"Haas Groot Disp", Haas, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif'
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: '"Haas Groot Disp", Haas, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: '"Haas Groot Disp", Haas, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif'
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  body-sm:
    fontFamily: '"Haas Groot Disp", Haas, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 18.9px
    letterSpacing: 0.16px
  body-sm-strong:
    fontFamily: '"Haas Groot Disp", Haas, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif'
    fontSize: 14px
    fontWeight: 500
    lineHeight: 18.9px
    letterSpacing: 0.16px
  caption:
    fontFamily: '"Haas Groot Disp", Haas, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: '"Haas Groot Disp", Haas, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif'
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  button-lg:
    fontFamily: '"Haas Groot Disp", Haas, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif'
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  button: 12px
  pill: 10px
  lg: 16px
  xl: 24px
  card: 32px
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
  6xl: 120px
  section: 160px
components:
  announcement-banner:
    backgroundColor: "{colors.banner-bg}"
    textColor: "{colors.banner-text}"
    linkColor: "{colors.banner-link}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.lg}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    height: 64px
    padding: "{spacing.sm} {spacing.lg}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
  nav-cta-demo:
    backgroundColor: "{colors.nav-cta-demo-bg}"
    textColor: "{colors.nav-cta-demo-text}"
    borderColor: "{colors.nav-cta-demo-border}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
  nav-cta-signup:
    backgroundColor: "{colors.nav-cta-signup-bg}"
    textColor: "{colors.nav-cta-signup-text}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
  nav-login:
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "{spacing.xs} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.4xl} {spacing.lg}"
  feature-card:
    backgroundColor: "{colors.accent-coral}"
    textColor: "{colors.accent-coral-text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.sm} {spacing.lg}"
  card-soft:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl} {spacing.xl}"
  card-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl} {spacing.xl}"
  badge-pill:
    backgroundColor: "{colors.canvas-blue-tint}"
    textColor: "{colors.link}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.sm}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.lg}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.md}"
    height: 48px
  cookie-modal:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.lg} {spacing.lg}"
  ex-pricing-tier:
    description: Default pricing tier card on soft canvas surface.
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured pricing tier — polarity-flipped to primary dark fill with white text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: Feature summary card repurposed for workflow or app category selection.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription summary panel — line items per plan add-on, not a literal e-commerce cart.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.button}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row inside an embedded Airtable app shell. Active state uses primary as the left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: Airtable's core grid view chrome. Header uses body-sm-strong; body uses body-sm.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.body-sm-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card. Uses card-marketing chrome with form-input primitives inside.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog surface — card-marketing chrome with elevated shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame. Generous padding on canvas-soft with body-lg caption.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-lg}"
  ex-toast:
    description: Toast notification surface — compact card-marketing chrome with subtle shadow.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
---
## Overview

Airtable is a no-code / low-code platform for teams — and its marketing surface reads exactly like that: welcoming, rounded, and warm without sacrificing enterprise legibility. The dominant surface is pure white `{colors.canvas}` with the charcoal-near-black `{colors.ink}` (`#333840`) carrying all editorial weight. No dark-mode polarity flip on the homepage hero; the brand keeps both CTAs and headline on the same bright white stage.

The decisive visual signature is the large-radius card geometry. Cards don't get a 8 px corner — they get a full `{rounded.card}` 32 px, giving feature panels a distinct "friendly document" silhouette. Buttons maintain a separate 12 px radius (`{rounded.button}`), measured precisely from the extracted live page and distinct from both the card and any pill-shaped elements. This two-radius language — 12 px for interactive controls, 32 px for content containers — is non-negotiable.

The type system is entirely proprietary Haas grotesque, split into two optical variants: `Haas` for display headlines (40 px–48 px, weight 400, neutral tracking — not aggressively tracked negative like Vercel), and `Haas Groot Disp` for all body, button, and label work. The brand never uses a monospace face on the marketing surface; no code aesthetic is asserted. Headlines run sentence-case at normal letter-spacing, projecting confidence without engineering posture.

**Key Characteristics:**
- White-on-charcoal CTA (`button-primary`, `nav-cta-signup`) plus outlined white-on-charcoal `button-secondary` — two CTAs always appear as a pair in the hero row.
- Warm coral-orange accent (`{colors.accent-coral}` `#aa2d00`) appears on feature cards with a complementary peach text (`{colors.accent-coral-text}` `#fcab79`) — this is the brand's only vivid accent on the marketing surface and lives at card scale, never miniaturised to a button or badge.
- Announcement banner at the very top of the page: a blue-tinted `{colors.banner-bg}` strip with a `{colors.banner-link}` call-to-action linking to an integration highlight.
- Border-outlined "Book Demo" and filled "Sign up for free" nav CTA pair — same 12 px radius, same font scale.
- The spacing rhythm is built around 4-8 px base multiples, with 12 px and 48 px as the most-used increments (347 and 252 occurrences respectively in the measured extraction).


## Colors

### Brand & Ink
- **Primary / Ink Dark** (`{colors.primary}` — `#181d26`): The deepest brand tone. Used as the filled CTA background ("Sign up for free" button, nav CTA), the body text on the cookie banner, and the "Book Demo" button text. Not pure black — carries a faint blue-charcoal cast.
- **Ink** (`{colors.ink}` — `#333840`): The headline and h1 colour on white surfaces. Slightly lighter than `{colors.primary}`, this is the brand's editorial voice colour on canvas. All hero headline text lives here.
- **Body** (`{colors.body}` — `#333333`): Paragraph body text throughout. A warm dark gray — marginally less cool than `{colors.ink}`.
- **Mute** (`{colors.mute}` — `#6b7280`): Deemphasised secondary text — meta labels, footer secondary lines, placeholder copy.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The page default and every card surface.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f5f7fa`): Inset regions, alternate section backgrounds, and the pricing/feature grid background.
- **Canvas Blue Tint** (`{colors.canvas-blue-tint}` — `#edf2ff`): Used in the announcement banner background — a cold periwinkle wash that signals information, not marketing.
- **Hairline** (`{colors.hairline}` — `#e5e7eb`): 1 px dividers — table rows, card borders, form input borders.
- **Hairline Strong** (`{colors.hairline-strong}` — `#d1d5db`): Slightly stronger divider for emphasis contexts.

### Accent
- **Accent Coral** (`{colors.accent-coral}` — `#aa2d00`): The brand's distinctive warm coral-orange. Appears as the background on feature accent cards in the marketing body. A rich, burnt-orange tone — not a pastel, not a neon. It is the brand's only vivid chromatic statement.
- **Accent Coral Text** (`{colors.accent-coral-text}` — `#fcab79`): The peach-tan text that lives on top of `{colors.accent-coral}` cards. A carefully lightened complement — readable but warm.

### Semantic
- **Link** (`{colors.link}` — `#1a56db`): Inline link blue. Visible in the announcement banner "Try it now →" call-to-action.
- **Banner Bg** (`{colors.banner-bg}` — `#eef2ff`): The blue-tinted announcement strip at the top of the page.
- **Banner Link** (`{colors.banner-link}` — `#1a56db`): The "Try it now →" link text inside the banner.
- **Success** (`{colors.success}` — `#0e9f6e`): Semantic success / confirmation green.
- **Error** (`{colors.error}` — `#f05252`): Validation / destructive error red.
- **Warning** (`{colors.warning}` — `#c27803`): Caution / pending amber.


## Typography

### Font Family
Airtable's type system rests on a proprietary Haas grotesque family in two optical variants:

1. **Display variant** (`Haas`) — carries every headline, display size, and section label at weight 400. Unlike many display systems, Airtable never pumps the weight to 600 or 700 for headlines; the brand's authority comes from size, not weight. Letter-spacing is neutral (no aggressive negative tracking). Open-source substitute: *Inter* at weight 400, or *Neue Haas Grotesk* if licensed.
2. **Text / body variant** (`Haas Groot Disp`) — carries body paragraphs, button labels, nav links, captions, and all UI chrome at weight 400 (body) or 500 (buttons, strong labels). Open-source substitute: *Inter* at 400/500 is the closest match.

No monospace face is used anywhere on the marketing surface.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 400 | 56px | normal | Largest hero scale (above the fold on wide viewports). |
| `{typography.display-lg}` | 40px | 400 | 48px | normal | Primary hero headline ("All your teams, all their workflows—connected in one workspace"). |
| `{typography.display-md}` | 32px | 400 | 40px | normal | Section sub-headlines, feature band headings. |
| `{typography.display-sm}` | 24px | 400 | 32.4px | 0.12px | Card cluster headlines, pricing tier names. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Lead paragraph under hero headline. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph, nav link text, button label. |
| `{typography.body-md-strong}` | 16px | 500 | 24px | 0 | Bolded inline body, featured nav link labels. |
| `{typography.body-sm}` | 14px | 400 | 18.9px | 0.16px | Secondary body text, nav link inactive, banner text, footer rows. |
| `{typography.body-sm-strong}` | 14px | 500 | 18.9px | 0.16px | Small button labels, table column headers, badge text. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Footer secondary lines, badge labels, fine print. |
| `{typography.button-md}` | 14px | 500 | 20px | 0 | Compact button labels inside cards and tight contexts. |
| `{typography.button-lg}` | 16px | 500 | 24px | 0 | Primary marketing CTA button labels ("Get started for free", "Book demo"). |

### Principles
- **Weight 400 for display, 500 for interaction.** Airtable never sets a headline at 600 or 700. Display authority comes from size and clear hierarchy, not bold weight. Buttons and interactive labels step up to 500 only.
- **Neutral tracking throughout.** Unlike brands that use aggressive negative letter-spacing as a stylistic voice, Airtable stays near-zero or slightly positive (0.12–0.16 px at small sizes). This keeps the text approachable rather than editorial.
- **No monospace layer.** Airtable is not asserting a platform-engineering identity on the marketing page. All type — headlines, body, CTAs — is from the same grotesque family.
- **Sentence-case headlines.** The hero headline runs sentence-case with em-dash punctuation. No all-caps anywhere on the marketing surface.

### Note on Font Substitutes
Both faces are proprietary. Open-source substitutes:
- **Display (`Haas`)** — *Inter* (weight 400) with optical sizing enabled; *Neue Haas Grotesk* if commercially licensed.
- **Body/UI (`Haas Groot Disp`)** — *Inter* (400/500) is the closest match. *DM Sans* is a warmer alternative.


## Layout

### Spacing System
- **Base unit**: 4 px. The brand's spacing scale aligns to 4 px multiples, with 12 px and 48 px as the two highest-frequency increments on the live page (347 and 252 measured occurrences respectively).
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px · `{spacing.6xl}` 120 px · `{spacing.section}` 160 px.
- **Section padding**: marketing bands use `{spacing.3xl}` to `{spacing.4xl}` top/bottom. The hero band is given extra breathing room approaching `{spacing.5xl}`.
- **Card interior padding**: feature cards measured at `{spacing.sm} {spacing.lg}` (12 px × 24 px) — tighter than the reference brand because the card shape itself (32 px radius) provides the visual breathing room. Larger content cards use `{spacing.xl}` (32 px).
- **Button padding**: extracted precisely as `{spacing.md} {spacing.lg}` (16 px × 24 px) from the live page. This is the canonical CTA padding for both `button-primary` and `button-secondary`.

### Grid & Container
- **Max width**: approximately 1280 px content width; centred with `{spacing.lg}` 24 px horizontal gutters on desktop.
- **Column patterns**:
  - Hero: single centred column with headline + body + two-button CTA row.
  - Feature-card grid: appears to run 3-up or 4-up at desktop with the large-radius coral accent cards.
  - Pricing tier grid: 3-up or 4-up at desktop.
  - Footer: 4–5 column nav grid.

### Whitespace Philosophy
The 32 px card radius does significant perceptual work — the rounded card silhouette itself signals separation and containment without needing large internal gutters. Section-level separation is generous (`{spacing.3xl}` to `{spacing.5xl}`), but interior card padding is tighter because the card shape carries the weight. Button rows in the hero use `{spacing.sm}` 12 px gap between siblings. The page reads as open and organised — not as sparse and austere.


## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed hero bands, announcement banner strip, footer. |
| Level 1 — Hairline Border | `1px solid {colors.hairline}` | Default card border — the "Book Demo" outlined button, form inputs. |
| Level 2 — Soft Card | Faint box-shadow with low opacity spread | Feature cards and soft-canvas cards at marketing scale. |
| Level 3 — Elevated | Small multi-offset shadow | Cookie preference modal, dropdown menus. |
| Level 4 — Modal | Larger compound shadow | Modal dialogs and overlays. |

Airtable's marketing surface uses flat-to-subtle elevation — the extracted card sample shows `shadow: none` on the coral feature card, meaning the brand relies on background colour contrast and the distinctive 32 px rounded shape rather than shadow to separate cards from the page surface. Modals and interactive overlays (cookie banner) use modest elevation to indicate layering.


## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands, footer, announcement bar. |
| `{rounded.xs}` | 4px | Tightest inline decorative elements. |
| `{rounded.sm}` | 6px | Small inline badges at tighter scale. |
| `{rounded.md}` | 8px | Internal UI chrome (dropdown items, table cells). |
| `{rounded.button}` | 12px | **All button and CTA shapes** — primary, secondary, nav CTAs, form inputs, cookie modal buttons. Measured precisely from the live page. |
| `{rounded.pill}` | 10px | Explicitly pill-shaped elements (small badge pills, announcement tags). Not used for rectangular CTAs. |
| `{rounded.lg}` | 16px | Medium card inset regions. |
| `{rounded.xl}` | 24px | Larger inset panels. |
| `{rounded.card}` | 32px | **All marketing content cards** — feature cards, pricing cards, showcase cards. Measured precisely from the live page. Distinct from button radius. |
| `{rounded.full}` | 9999px | Circular icon buttons, avatar containers. |

### Photography Geometry
- **Hero band**: flat colour (white canvas), no image or gradient at the hero level visible in the screenshot.
- **Feature cards**: the coral `{colors.accent-coral}` fill with `{rounded.card}` 32 px corners is the visual anchor of the marketing body — treated as coloured containers, not images.
- **Cookie modal**: `{rounded.button}` 12 px corners on the modal surface.


## Components

### Buttons

**`button-primary`** — the canonical filled CTA.
- Background `{colors.primary}` (`#181d26`), text `{colors.on-primary}`, label in `{typography.button-lg}` (16 px / 500), padding `{spacing.md} {spacing.lg}` (16 px × 24 px), shape `{rounded.button}` 12 px. Renders the "Get started for free" and "Sign up for free" actions.

**`button-secondary`** — the outlined CTA paired with `button-primary` in the hero.
- Background `{colors.canvas}`, text `{colors.primary}`, 1 px solid `{colors.primary}` border, same typography + padding + radius as `button-primary`. Renders "Book demo" and "Book Demo" nav actions.

### Navigation

**`announcement-banner`** — the thin top-of-page informational strip.
- Background `{colors.banner-bg}` (blue-tinted), text `{colors.banner-text}`, link `{colors.banner-link}`, set in `{typography.body-sm}`, full-width, no border radius (flat). Renders "Bring your Airtable data into Claude. Try it now →".

**`nav-bar`** — the sticky top navigation.
- Background `{colors.canvas}`, text `{colors.ink}`, height 64 px, padding `{spacing.sm} {spacing.lg}`. Layout: Airtable logo + wordmark left, dropdown nav centre (Platform / Solutions / Resources / Enterprise / Pricing), "Book Demo" + "Sign up for free" + "Log in" cluster right.

**`nav-link`** — the centred dropdown-trigger links in the nav row.
- Text `{colors.body}`, set in `{typography.body-md}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.button}` on hover/active state.

**`nav-cta-demo`** — the "Book Demo" outlined button in the nav.
- Background `{colors.nav-cta-demo-bg}` (white), text `{colors.nav-cta-demo-text}` (charcoal), 1 px solid `{colors.nav-cta-demo-border}` border, typography `{typography.button-lg}`, shape `{rounded.button}` 12 px, padding `{spacing.md} {spacing.lg}`.

**`nav-cta-signup`** — the "Sign up for free" filled button in the nav.
- Background `{colors.nav-cta-signup-bg}` (charcoal), text `{colors.nav-cta-signup-text}` (white), typography `{typography.button-lg}`, shape `{rounded.button}` 12 px, padding `{spacing.md} {spacing.lg}`.

**`nav-login`** — the plain "Log in" text link in the nav cluster.
- Text `{colors.ink}`, typography `{typography.body-md}`, no border, no background, padding `{spacing.xs} {spacing.md}`.

### Cards & Content

**`hero-band`** — the above-the-fold white hero section.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.lg}`. Inside: large headline in `{typography.display-lg}`, lead paragraph in `{typography.body-lg}`, then a `button-primary` + `button-secondary` CTA row with `{spacing.sm}` gap.

**`feature-card`** — the signature coral accent card.
- Background `{colors.accent-coral}`, text `{colors.accent-coral-text}`, typography `{typography.body-md}`, shape `{rounded.card}` 32 px, padding `{spacing.sm} {spacing.lg}`. This is the brand's only vivid chromatic card surface.

**`card-marketing`** — a standard white marketing card.
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.body-md}`, shape `{rounded.card}` 32 px, padding `{spacing.xl} {spacing.xl}`.

**`card-soft`** — a soft-background content card for alternate sections.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, typography `{typography.body-md}`, shape `{rounded.card}` 32 px, padding `{spacing.xl} {spacing.xl}`.

### Utility

**`badge-pill`** — a small metadata pill for feature tags or category labels.
- Background `{colors.canvas-blue-tint}`, text `{colors.link}`, typography `{typography.caption}`, shape `{rounded.pill}` 10 px, padding `{spacing.xxs} {spacing.sm}`.

**`link-inline`** — body-copy inline links.
- Text `{colors.link}` (`#1a56db`), typography `{typography.body-md}`.

**`form-input`** — the standard text input.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, typography `{typography.body-md}`, shape `{rounded.button}` 12 px, padding `{spacing.xs} {spacing.md}`, height 48 px.

**`footer`** — the bottom navigation section.
- Background `{colors.canvas}`, text `{colors.body}`, typography `{typography.body-sm}`, padding `{spacing.3xl} {spacing.lg}`. Column headers in `{typography.body-sm-strong}`.

**`cookie-modal`** — the cookie preferences overlay (visible in the screenshot).
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.body-sm}`, shape `{rounded.button}` 12 px, padding `{spacing.lg} {spacing.lg}`. Action buttons ("Agree", "Reject All, Except Strictly Necessary", "Manage Cookie Preferences") use `button-secondary` chrome.


## Do's and Don'ts

### Do
- Use `{rounded.button}` 12 px for every interactive control — buttons, inputs, nav CTAs, modal action buttons. This is a precise measurement from the live page, not an approximation.
- Use `{rounded.card}` 32 px for every marketing content card. The large radius is the brand's warmth signal — do not reduce it to match button geometry.
- Keep display headlines at weight 400 in the Haas display face. The brand's authority is scale-driven, not weight-driven.
- Always pair `button-primary` (filled charcoal) with `button-secondary` (outlined) in hero CTA rows — the brand consistently shows both options.
- Reserve `{colors.accent-coral}` (`#aa2d00`) for content card backgrounds only. It is the brand's single chromatic accent and carries that role at card scale.
- Use neutral letter-spacing throughout. Airtable's voice is approachable and professional — not editorially tight like a developer platform.

### Don't
- Don't apply `{rounded.card}` 32 px to buttons — the two radius values are distinct languages. Conflating them loses the brand's intentional warmth-vs-control geometry.
- Don't use `{colors.accent-coral}` on buttons, nav elements, or badges. It lives on large card surfaces only.
- Don't set headlines at weight 600 or 700. Airtable never goes that heavy — the display face at weight 400 at large sizes is the brand's voice.
- Don't introduce a monospace face. Airtable's marketing surface carries no code/engineering aesthetic; both font variants are grotesque sans-serif only.
- Don't add aggressive negative letter-spacing. The brand tracks at neutral-to-slightly-positive values (`0px` to `+0.16px`). Negative tracking imports a different brand voice entirely.
- Don't use the coral accent (`{colors.accent-coral}`) as a full-page band background. It is a card-scale accent, not a section surface.
- Don't miniaturise the 32 px rounded card to a standard 8–12 px corner just because it "looks more standard." The large radius is non-negotiable brand identity.
