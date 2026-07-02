---
version: alpha
name: opencode-design-system
description: "OpenCode is a developer-tool brand that commits fully to the monospaced voice: every headline, every body paragraph, every label is set in Berkeley Mono — a fixed-pitch typeface that signals terminal, not marketing. The surface system is a near-clinical two-tone: pure white canvas against near-black ink (#1d1d1f), with a single small-radius 4 px square-corner geometry applied universally to buttons, cards, and inputs. No decorative gradients, no illustration system, no rounded pills. The brand's visual personality is the command line itself — courier-width characters at deliberate weight contrast (700 for display, 400 for body), an announcement badge rendered as an inline mono label, and a code-block install panel as the hero's centrepiece. Color is used instrumentally: an iOS-lineage blue accent (#007aff) for interactive states and links, a system green for success, a danger red for destructive actions — all inherited from a CSS custom-property token set that reads like Xcode's system palette. The decoration system is the typeface."
colors:
  primary: "#1d1d1f"
  on-primary: "#fdfdfc"
  ink: "#1d1d1f"
  ink-deep: "#201d1d"
  body: "#424245"
  mute: "#6e6e73"
  disabled: "#86868b"
  hairline: "#d2d2d7"
  hairline-soft: "#e5e5ea"
  canvas: "#ffffff"
  canvas-soft: "#f5f5f7"
  canvas-elevated: "#ffffff"
  canvas-hover: "#ffffff"
  accent: "#007aff"
  accent-hover: "#0056b3"
  accent-active: "#004085"
  link: "#007aff"
  success: "#30d158"
  error: "#ff3b30"
  error-hover: "#d70015"
  error-active: "#a50011"
  error-on: "#ffffff"
  warning: "#ff9f0a"
  warning-hover: "#cc7f08"
  warning-active: "#995f06"
  warning-on: "#000000"
  black: "#000000"
  white: "#ffffff"
typography:
  display-xl:
    fontFamily: '"Berkeley Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    fontSize: 38px
    fontWeight: 700
    lineHeight: 57px
    letterSpacing: normal
  display-lg:
    fontFamily: '"Berkeley Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    fontSize: 28px
    fontWeight: 700
    lineHeight: 40px
    letterSpacing: normal
  display-md:
    fontFamily: '"Berkeley Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    fontSize: 20px
    fontWeight: 700
    lineHeight: 32px
    letterSpacing: normal
  display-sm:
    fontFamily: '"Berkeley Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
    letterSpacing: normal
  body-lg:
    fontFamily: '"Berkeley Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: normal
  body-md:
    fontFamily: '"Berkeley Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: normal
  body-sm:
    fontFamily: '"Berkeley Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: normal
  code:
    fontFamily: '"Berkeley Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: normal
  button-md:
    fontFamily: '"Berkeley Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: normal
  button-sm:
    fontFamily: '"Berkeley Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: normal
  caption:
    fontFamily: '"Berkeley Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: normal
  nav-label:
    fontFamily: '"Berkeley Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: normal
rounded:
  none: 0px
  button: 4px
  sm: 4px
  md: 4px
  lg: 8px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 64px
  4xl: 80px
  section: 128px
components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.md} {spacing.xl}"
    borderBottom: "{colors.hairline}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    padding: "{spacing.xxs} {spacing.xs}"
  nav-cta-download:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.lg}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs} {spacing.lg}"
  badge-new:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.xs}"
  announcement-banner:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "{spacing.md} {spacing.xl}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  install-panel:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.code}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  install-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    activeTextColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "{spacing.xs} {spacing.sm}"
    activeBorderBottom: "{colors.ink}"
  code-command:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    padding: "{spacing.xs} {spacing.md}"
  copy-button:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    rounded: "{rounded.button}"
    padding: "{spacing.xxs}"
  dark-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    padding: "{spacing.4xl} {spacing.xl}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
    textDecoration: underline
  footer:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.xl}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.xs} {spacing.sm}"
    height: 36px
  card-surface:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-pricing-tier:
    description: Default tier card on canvas-soft surface with hairline border.
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured tier polarity-flipped to near-black fill with light text.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: Feature summary card on canvas-soft for plan/tier breakdowns.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: Subscription or add-on summary panel — line items on canvas surface.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row. Active state uses near-black ink as a left-edge indicator bar.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.sm}"
  ex-data-table-cell:
    description: Data table chrome. Header uses display-sm mono caps; body uses body-md.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.display-sm}"
    bodyTypography: "{typography.body-md}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in / sign-up card. Card-surface chrome with form-input primitives inside.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog surface — card-surface chrome with elevated hairline border.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame on canvas-soft with generous padding.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — card-surface chrome with hairline border.
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
    typography: "{typography.body-md}"
---
## Overview

OpenCode is a developer tool with the confidence to make Berkeley Mono do all the decorative work. Where most developer-marketing sites reach for gradient backdrops or illustration systems, OpenCode's homepage is built entirely from fixed-width characters: the hero headline is 38 px bold monospace, the body copy is 14–16 px regular monospace, and the install panel — a tabbed code block showing `curl`, `npm`, `bun`, `brew`, and `paru` commands — is the centrepiece of the page. There are no other decorative elements. The typeface is the brand.

The color system is surgical. Two surface tones — pure white `{colors.canvas}` and near-black `{colors.primary}` (`#1d1d1f`) — carry the entire light/dark polarity. The page body lives on white; the lower half of the scroll shifts to a near-black band that inverts the ink. Neither surface introduces any tint or hue. The only chromatic values in the system are an iOS-lineage blue accent `{colors.accent}` (`#007aff`) for interactive states and inline links, a system green `{colors.success}` for positive status, and a system red `{colors.error}` for destructive actions — a palette that reads like Xcode's semantic color system, which is deliberate.

Geometry is equally restrained. The single documented radius is `4 px` (`{rounded.button}`), applied universally to buttons, the install panel border, and form inputs. There are no pills, no full-radius chip shapes, no card-level rounding variation. Every interactive surface is a small square-cornered rectangle. The brand's shape vocabulary is, again, the terminal.

Navigation is minimal: a wordmark logo (`opencode` in monospace), five text links at regular weight, and a filled "Download" button at `{rounded.button}` 4 px — the only CTA in the nav bar. No megamenus, no secondary nav, no icon-only controls in the header. The announcement strip above the hero reads "New · Desktop app available in beta on macOS, Windows, and Linux." — the period is part of the voice.

## Colors

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The default page background and card surface. Everything above the fold sits on pure white.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f5f5f7`): The light inset surface used for secondary panels, footer regions, and surface cards. Pulled from `--color-bg-surface` and `--color-surface`.
- **Canvas Elevated** (`{colors.canvas-elevated}` — `#ffffff`): Elevated surface (dropdowns, modals) — same white as canvas, distinguished by shadow + border.

### Text
- **Ink** (`{colors.ink}` — `#1d1d1f`): The primary text color for all headings and body copy on light surfaces. Used as background for the polarity-flipped dark band.
- **Ink Deep** (`{colors.ink-deep}` — `#201d1d`): The slightly-warmer near-black used by the link component and h1/h3 color assignments — close enough to be the same visual tone, distinct in the token set.
- **Body** (`{colors.body}` — `#424245`): Secondary text — supporting paragraphs, nav metadata, footer body copy.
- **Mute** (`{colors.mute}` — `#6e6e73`): Low-priority labels, placeholder text, icon-button default color.
- **Disabled** (`{colors.disabled}` — `#86868b`): Disabled input labels and inactive control states.
- **On Primary** (`{colors.on-primary}` — `#fdfdfc`): Text and icon color on the near-black `{colors.primary}` surface — warm off-white rather than clinical pure white.

### Border
- **Hairline** (`{colors.hairline}` — `#d2d2d7`): The standard 1 px divider — install panel border, nav bottom border, input borders, card outlines.
- **Hairline Soft** (`{colors.hairline-soft}` — `#e5e5ea`): Lighter divider for low-emphasis separators.

### Accent & Semantic
- **Accent** (`{colors.accent}` — `#007aff`): iOS system blue. Used for interactive states, focus rings, and the primary link color.
- **Accent Hover** (`{colors.accent-hover}` — `#0056b3`) / **Accent Active** (`{colors.accent-active}` — `#004085`): Pressed and focused variants of the accent.
- **Link** (`{colors.link}` — `#007aff`): Inline text links. Same value as accent; semantically named separately.
- **Success** (`{colors.success}` — `#30d158`): Positive status indicators, success toasts.
- **Error** (`{colors.error}` — `#ff3b30`): Destructive actions, form validation, danger states.
- **Error Hover** (`{colors.error-hover}` — `#d70015`) / **Error Active** (`{colors.error-active}` — `#a50011`): Pressed variants.
- **Error On** (`{colors.error-on}` — `#ffffff`): Text on error-colored surfaces.
- **Warning** (`{colors.warning}` — `#ff9f0a`): Caution / pending states.
- **Warning Hover** (`{colors.warning-hover}` — `#cc7f08`) / **Warning Active** (`{colors.warning-active}` — `#995f06`): Pressed variants.
- **Warning On** (`{colors.warning-on}` — `#000000`): Text on warning-colored surfaces.

## Typography

### Font Family
The entire site — every heading, every body line, every button label, every code block — is set in a single typeface: **Berkeley Mono**. This is not a code-only face used as an accent; it is the brand's sole typographic instrument. Weight 700 carries the display hierarchy; weight 400 handles everything else. There is no secondary sans, no geometric display face, no editorial serif.

The font stack is `"Berkeley Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`. IBM Plex Mono is the first-level fallback and the recommended open-source substitute for any context where Berkeley Mono is unavailable.

### Type Scale

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display-xl}` | 38px | 700 | 57px | Hero headline ("The open source AI coding agent"). The brand's single display headline size. |
| `{typography.display-lg}` | 28px | 700 | 40px | Section headlines in dark bands and feature sections. |
| `{typography.display-md}` | 20px | 700 | 32px | Mid-level section headings, feature card titles. |
| `{typography.display-sm}` | 16px | 700 | 24px | Small display labels, table headers, inline eyebrows. |
| `{typography.body-lg}` | 16px | 400 | 28px | Lead body paragraph under the hero headline. |
| `{typography.body-md}` | 14px | 400 | 24px | Default body text, announcement banner text, nav links. |
| `{typography.body-sm}` | 12px | 400 | 20px | Footer secondary lines, meta labels. |
| `{typography.code}` | 14px | 400 | 24px | Install panel code commands, inline code references. Visually identical to body-md — the distinction is semantic. |
| `{typography.button-md}` | 16px | 400 | 24px | Marketing-scale button labels (Download, primary CTAs). Weight 400 — the brand does not bold its buttons. |
| `{typography.button-sm}` | 14px | 400 | 20px | Smaller button labels, tab labels inside the install panel. |
| `{typography.caption}` | 12px | 400 | 16px | Badge labels ("New"), fine print. |
| `{typography.nav-label}` | 14px | 400 | 20px | Nav link text and nav CTA labels. |

### Principles
- **One typeface, one brand.** Berkeley Mono carries everything. The brand's personality lives entirely in the fixed-pitch rhythm of the characters, not in color or illustration.
- **Weight contrast is the only hierarchy tool.** 700 for headings, 400 for everything else — the brand never uses 500 or 600 intermediate weights.
- **Letter-spacing is neutral.** Unlike brands that track display type negatively for visual compression, OpenCode leaves tracking at `normal` across all sizes. The mono rhythm does not need artificial tightening.
- **No case transformation.** Headlines appear in sentence case. Labels appear as written. The brand does not uppercase labels or use small-caps.
- **Buttons are regular weight.** The "Download" CTA and all button labels are weight 400, not 500 or 600 — consistent with the brand's refusal to over-assert.

### Note on Font Substitutes
Berkeley Mono is a licensed proprietary typeface. For open-source contexts:
- **IBM Plex Mono** (400 / 700) is the closest stylistic match and the first fallback in the brand's own font stack. At small sizes it is nearly indistinguishable.
- **Commit Mono** or **Iosevka** are acceptable second-level substitutes for code-heavy surfaces.

## Layout

### Spacing System
- **Base unit**: 4 px. The spacing scale is a mix of 4-px and 8-px multiples typical of Apple-adjacent design systems.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 64 px · `{spacing.4xl}` 80 px · `{spacing.section}` 128 px.
- **Section padding**: marketing bands use `{spacing.4xl}` (80 px) top and bottom. The hero has generous vertical breathing room — approximately 80 px above the badge, 80 px below the install panel.
- **Install panel interior**: `{spacing.md}` 16 px vertical, `{spacing.lg}` 24 px horizontal, creating a comfortable reading frame for code lines.
- **Nav padding**: `{spacing.md}` vertical, `{spacing.xl}` horizontal — the nav sits in a contained horizontal band.
- **Inline gap**: nav links are spaced at approximately `{spacing.lg}` between siblings; button-to-link gap in the nav is `{spacing.xl}`.

### Grid & Container
- **Max width**: approximately 1080 px; content is centred with horizontal gutters of `{spacing.xl}` (32 px) on desktop.
- **Hero layout**: single-column, left-aligned. The badge, headline, body, and install panel stack vertically without a side-by-side split.
- **Install panel**: full-width within the hero content column — approximately 900 px at desktop.
- **Tab row inside install panel**: 5 package-manager tabs in a horizontal row (`curl`, `npm`, `bun`, `brew`, `paru`), underline-active variant.
- **Dark band**: full-bleed background color with content centred at the same max-width container.
- **Nav**: logo left, link row centred or following, Download CTA right — standard constrained-width horizontal nav.

### Whitespace Philosophy
The page earns its authority through restraint. No section is over-furnished. The hero gives the install panel a full content-width block and surrounds it with ~80 px vertical margins so it can be read as a terminal frame, not a feature card. Section transitions use the polarity flip (white to near-black) as the structural signal — there are no decorative dividers, no HR lines, no icon clusters between sections. Whitespace is the only separator.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero stacks; nav collapses; install panel scrolls horizontally; tab row enables horizontal scroll. |
| Tablet | 640–1023px | Content column narrows; install panel remains full-column width. |
| Desktop | 1024px+ | Full layout; nav link row visible; install panel at full content-width. |

#### Touch Targets
The "Download" button renders at approximately 36–40 px tall with `4 px {spacing.xxs}` vertical padding and `20 px {spacing.lg}` horizontal — close to the 44 px touch-target floor. Nav links rely on surrounding whitespace to meet tap targets on mobile.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Hero band, dark band, full-bleed sections. |
| Level 1 — Hairline Border | 1 px solid `{colors.hairline}` border only. | Install panel, form inputs, secondary cards. No shadow. |
| Level 2 — Soft Elevation | 1 px hairline border + subtle box-shadow. | Dropdowns, elevated surface panels. |
| Level 3 — Modal | 1 px hairline border + medium box-shadow. | Modal dialogs and overlay surfaces. |

The brand's elevation vocabulary is intentionally flat. The install panel is framed by a hairline border alone — no shadow, no depth illusion. This is consistent with the terminal metaphor: a terminal window has a border, not a drop shadow.

### Decorative Depth
- **Polarity flip as depth**: switching from `{colors.canvas}` white to `{colors.primary}` near-black is the sole depth transition between page sections. There is no gradient, no mesh, no illustration bridging the two surfaces.
- **Underline as active indicator**: the install panel's active tab uses a bottom-border underline (`{colors.ink}`) on a flat white surface — no pill background, no elevation change, no shadow. The indicator is typographic.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands, the dark section. |
| `{rounded.button}` | 4px | All buttons, the install panel border, form inputs. The universal interactive radius. |
| `{rounded.sm}` | 4px | Alias for button — same value, used for small inline badges and copy-button. |
| `{rounded.md}` | 4px | Cards and surface panels — same square-corner geometry throughout. |
| `{rounded.lg}` | 8px | Reserved for future larger surface chrome; not prominently observed in current screenshot. |
| `{rounded.full}` | 9999px | Not in active use on this site; defined for completeness if tag/chip shapes are needed in the app. |

Every interactive surface in the brand uses exactly 4 px radius. There are no pills. There are no fully-rounded chips. The consistency of 4 px across button, panel, badge, and input is the shape signature.

## Components

### Navigation

**`nav-bar`** — the constrained-width top nav.
- Background `{colors.canvas}`, text `{colors.ink}`, height approximately 56–64 px, padding `{spacing.md} {spacing.xl}`. Layout: `opencode` wordmark logo left (monospace, bold), five text links centre-right (`GitHub`, `Docs`, `Data`, `Zen`, `Go`, `Enterprise`), "Download" CTA far right.

**`nav-link`** — text link inside the nav bar.
- Text `{colors.ink}`, set in `{typography.nav-label}` (14 px / 400), padding `{spacing.xxs} {spacing.xs}`. No background, no border on rest state; accent color on hover.

**`nav-cta-download`** — the primary nav CTA.
- Background `{colors.primary}` (`#201d1d`), text `{colors.on-primary}`, label in `{typography.button-md}` (16 px / 400), padding `{spacing.xxs} {spacing.lg}`, shape `{rounded.button}` 4 px. Rendered with a download icon prefix glyph.

### Hero

**`announcement-banner`** — the inline announcement strip above the hero headline.
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.body-md}`. Contains a `badge-new` label followed by plain text and a `{colors.link}` underlined "Download now" link. No background fill on the banner itself — it sits flat on the hero canvas.

**`badge-new`** — the small "New" label in the announcement strip.
- Background `{colors.primary}`, text `{colors.on-primary}`, set in `{typography.caption}` (12 px / 400), padding `{spacing.xxs} {spacing.xs}`, shape `{rounded.sm}` 4 px.

**`hero-band`** — the above-fold hero section.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Inside: announcement banner, then h1 headline in `{typography.display-xl}` (38 px / 700 / 57 px line-height), then body in `{typography.body-lg}`, then the `install-panel`.

### Install Panel

**`install-panel`** — the hero's centrepiece: a tabbed code-block for installation commands.
- Background `{colors.canvas}`, border 1 px solid `{colors.hairline}`, set in `{typography.code}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.sm}` 4 px. Contains a `install-tab` row at the top and a `code-command` block below it.

**`install-tab`** — one tab in the install panel tab row (`curl`, `npm`, `bun`, `brew`, `paru`).
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.button-sm}` (14 px / 400), padding `{spacing.xs} {spacing.sm}`. Active state: 2 px bottom-border in `{colors.ink}`, text stays `{colors.ink}`. Inactive: text `{colors.mute}`.

**`code-command`** — the code-command line inside the install panel.
- Background `{colors.canvas}`, text `{colors.ink}`, set in `{typography.code}` (14 px / 400). The command path segment (`opencode.ai/install`) renders at a slightly higher contrast / bold weight visually, but the font stack is the same. A `copy-button` icon sits inline at the right edge.

**`copy-button`** — the icon button that copies the install command to clipboard.
- Background `{colors.canvas}`, icon color `{colors.mute}`, shape `{rounded.sm}` 4 px, padding `{spacing.xxs}`. No visible border at rest.

### Sections & Bands

**`dark-band`** — the polarity-flipped near-black section below the hero.
- Background `{colors.primary}` (`#1d1d1f`), text `{colors.on-primary}`, padding `{spacing.4xl} {spacing.xl}`. Section content in `{typography.display-lg}` (700) for headings, `{typography.body-lg}` (400) for supporting body.

**`card-surface`** — a surface card used inside feature or content sections.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, border 1 px solid `{colors.hairline}`, padding `{spacing.lg}`, shape `{rounded.md}` 4 px.

### Utility

**`link-inline`** — inline body-copy text links.
- Text `{colors.link}` (`#007aff`), set in `{typography.body-md}`, underlined.

**`form-input`** — text input field.
- Background `{colors.canvas}`, text `{colors.ink}`, border 1 px solid `{colors.hairline}`, set in `{typography.body-md}`, padding `{spacing.xs} {spacing.sm}`, height 36 px, shape `{rounded.button}` 4 px.

**`footer`** — the bottom section.
- Background `{colors.canvas-soft}`, text `{colors.body}`, set in `{typography.body-sm}`, padding `{spacing.3xl} {spacing.xl}`.

## Do's and Don'ts

### Do
- Set every heading and body paragraph in Berkeley Mono (or IBM Plex Mono as fallback). The entire brand voice lives in the fixed-pitch rhythm. Introducing a sans-serif breaks the terminal metaphor.
- Use `{rounded.button}` 4 px universally — buttons, panels, badges, inputs. The square-corner geometry is the shape system.
- Keep button labels at weight 400. The brand does not bold CTAs; the background fill is the only assertion needed.
- Use `{colors.accent}` (`#007aff`) exclusively for interactive states, focus rings, and inline links. It is the system blue — a signal color, not a decorative one.
- Flip the section surface from `{colors.canvas}` white to `{colors.primary}` near-black as the sole section-transition mechanism. This polarity flip is the depth cue.
- Keep the install panel as the hero's visual centrepiece. It is the product. Pushing it below the fold or reducing it to a screenshot image erases the brand's claim.
- Sentence-case all headlines, period-optional. The brand does not uppercase section headings.

### Don't
- Don't introduce decorative gradients, mesh backdrops, or illustration systems. The typeface is the decoration system.
- Don't add pill-shaped buttons or full-radius chip shapes. The 4 px square-corner geometry is the entire shape vocabulary. A pill reads as a different brand.
- Don't set button labels or display headings at weight 500 or 600. The brand's weight ladder is 700 (display) and 400 (everything else). Intermediate weights dilute the contrast.
- Don't use heavy drop shadows on cards or panels. Surface depth is communicated by hairline borders and background-color shifts, not by elevation shadows.
- Don't miniaturise Berkeley Mono below 12 px. The fixed-pitch rhythm breaks at small optical sizes and the character shapes lose legibility.
- Don't introduce a secondary accent color beyond the system blue, green, red, and warning amber. The semantic palette is complete; additional hues flatten the signal value.
- Don't apply positive letter-spacing to mono text. The brand leaves tracking at normal. Positive tracking on a fixed-pitch face produces an unintended typewriter-comedy effect.
