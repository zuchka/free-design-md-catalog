---
version: alpha
name: VoltAgent
description: "VoltAgent is a developer-infrastructure brand living entirely in the dark — a near-black canvas (#050507) that reads as deep space, broken by a single electric emerald accent that does all the persuasive work the brand needs. No gradients, no photography, no decoration system beyond the glow of that one green. The heading face is system-ui at weight 400, tracked slightly negative, which gives the display sizes a stripped-down engineering posture — not a marketing system trying to look technical, but an actual technical product that happens to have a marketing page. A monospaced terminal snippet sits in the hero CTA row, signalling that the primary user installs things from a command line. The surface rhythm is one step: deep-black page, deep-black cards with a single warm-grey hairline border, emerald glow on the focal icon. That's the whole visual language."
colors:
  primary: "#2fd6a1"
  on-primary: "#050507"
  ink: "#f5f5f5"
  body: "#f2f2f2"
  mute: "#b8b3b0"
  mute-mid: "#6b7280"
  hairline: "#3d3a39"
  hairline-dark: "#1f2937"
  canvas: "#050507"
  canvas-raised: "#0a0a0a"
  canvas-soft: "#141414"
  secondary-surface: "#262626"
  on-secondary: "#f2f2f2"
  link: "#2fd6a1"
  accent-green: "#10b981"
  accent-purple: "#818cf8"
  accent-blue: "#60a5fa"
  accent-red: "#ef4444"
  white: "#ffffff"
  black: "#000000"
  success: "#2fd6a1"
  error: "#ef4444"
  warning: "#f59e0b"
typography:
  display-xl:
    fontFamily: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif
    fontSize: 60px
    fontWeight: 400
    lineHeight: 60px
    letterSpacing: -0.65px
  display-lg:
    fontFamily: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 52px
    letterSpacing: -0.6px
  display-md:
    fontFamily: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif
    fontSize: 32px
    fontWeight: 400
    lineHeight: 40px
    letterSpacing: -0.6px
  display-sm:
    fontFamily: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif
    fontSize: 24px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: -0.6px
  body-lg:
    fontFamily: Inter, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-xs:
    fontFamily: Inter, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  caption:
    fontFamily: Inter, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  code:
    fontFamily: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  button-md:
    fontFamily: Inter, sans-serif
    fontSize: 13px
    fontWeight: 500
    lineHeight: 20px
  button-lg:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  label-caps:
    fontFamily: Inter, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  none: 0px
  xs: 4px
  button: 6px
  card: 8px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px
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
  section: 128px
components:
  announcement-banner:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    padding: "{spacing.sm} {spacing.xl}"
    height: 40px
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    height: 64px
    padding: "{spacing.md} {spacing.xl}"
    borderColor: "{colors.hairline}"
  nav-link:
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
  nav-cta-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
  nav-github-badge:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.body}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.md}"
  nav-discord-icon:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.mute}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm}"
  button-primary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.white}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
  button-terminal:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.code}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  hero-eyebrow:
    textColor: "{colors.primary}"
    typography: "{typography.display-md}"
    fontStyle: italic
  hero-diagram-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.sm} {spacing.lg}"
  hero-diagram-node:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  feature-icon-pill:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.primary}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  card-feature:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  card-feature-label:
    textColor: "{colors.mute}"
    typography: "{typography.body-xs}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    borderColor: "{colors.hairline}"
    padding: "{spacing.4xl} {spacing.xl}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  badge-muted:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.mute-mid}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.sm}"
  code-snippet:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.code}"
    rounded: "{rounded.button}"
    padding: "{spacing.md} {spacing.lg}"
  nav-dropdown:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.body}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    padding: "{spacing.sm}"
  ex-pricing-tier:
    description: Default pricing tier card on deep-canvas surface with hairline border.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: Featured tier — emerald primary border accent on deep-canvas; CTA inverts to primary green.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: Feature capability summary card — re-purposed for agent capability tiers.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    description: Subscription / add-on summary panel — line items per capability module.
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: Sidebar nav row inside the VoltOps console. Active state uses emerald left-edge indicator.
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.button}"
    padding: "{spacing.sm} {spacing.md}"
  ex-data-table-cell:
    description: Agent trace / log table chrome. Header uses label-caps; body uses body-xs.
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.label-caps}"
    bodyTypography: "{typography.body-xs}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: Sign-in card on canvas-raised surface with form inputs inside.
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: Modal dialog surface — card-feature chrome with hairline ring and soft glow at the primary accent.
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: Empty-state frame with generous padding on canvas-soft.
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: Toast notification — card-feature shape at body-xs scale with hairline border.
    backgroundColor: "{colors.canvas-raised}"
    rounded: "{rounded.card}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-xs}"
---
## Overview

VoltAgent operates in a register most marketing sites avoid: it trusts pure darkness as a design choice, not a fallback. The page background is a near-absolute black (`{colors.canvas}` — `#050507`) and every surface stays within one or two steps of that tone. Cards don't float on soft grays — they sit on the same black, held apart only by a warm-grey hairline border (`{colors.hairline}` — `#3d3a39`). The result is a constellation effect: the page feels like a circuit diagram laid on matte black, with the single electric emerald (`{colors.primary}` — `#2fd6a1`) supplying the only light.

Type is the second decisive register. Headlines use system-ui at weight 400 — deliberately not a custom geometric sans — with modest negative letter-spacing (`-0.65 px` at 60 px, `-0.6 px` at 24 px). The brand reads as engineered rather than polished, which is accurate to the product. Body copy is Inter, neutral, functional. A terminal code snippet (`npm create voltagent-app@latest`) sits in the hero row as an equal-weight CTA alongside the "Get Started" button, signalling that the primary conversion path is a command line, not a form.

The decorative vocabulary is minimal to the point of ascetic: no gradients, no illustrations, no photography. The hero's interactive diagram — floating tool cards (Airtable, GitHub, Slack, Gmail) connected to a glowing VoltAgent node — is the closest thing to artwork on the page, and it reads as a technical system diagram, not a marketing illustration. The emerald glow on that central node is the brand's only atmospheric effect.

**Key Characteristics:**
- A single emerald accent (`{colors.primary}`) carries every link, every active element, and the italic display eyebrow ("Platform") in the hero. It is the brand's entire accent system.
- Deep-black surfaces differentiated only by hairline borders — no shadow elevation, no soft-wash backgrounds for section separation.
- System-ui headlines at weight 400 with negative tracking, paired with Inter body at weight 400. The restraint in weight is intentional: nothing goes bold except button labels (weight 500).
- A terminal snippet as a first-class CTA — the brand treats `npm install` as a call-to-action equal to a button.
- The hero diagram communicates multi-agent orchestration visually; it is the product's core concept rendered as the page's primary graphic.

## Colors

### Brand Accent
- **Primary Emerald** (`{colors.primary}` — `#2fd6a1`): The single accent color. Carries every link, every active nav item, the italic eyebrow headline ("Platform"), icon glows, and the VoltAgent node ring in the hero diagram. Used nowhere as a fill for large surfaces — only as text, border, or glow.
- **Accent Green** (`{colors.accent-green}` — `#10b981`): The deeper emerald used in CSS custom property `--color-accent`. Appears as an icon filter and in lower-hierarchy accent moments. Slightly less saturated than the primary.

### Surface
- **Canvas** (`{colors.canvas}` — `#050507`): The absolute page background — near-black, almost indistinguishable from pure black but with a faint blue-black cast. Every section, every band, every card lives on or very close to this tone.
- **Canvas Raised** (`{colors.canvas-raised}` — `#0a0a0a`): One step lighter than canvas. Used for nav dropdowns and raised panel surfaces.
- **Canvas Soft** (`{colors.canvas-soft}` — `#141414`): The slightly elevated surface for code snippet blocks, secondary card fills, and inset regions.
- **Secondary Surface** (`{colors.secondary-surface}` — `#262626`): Matches the `--secondary` token (0% 15% lightness). Used for secondary interactive states and hover fills.

### Text
- **Ink** (`{colors.ink}` — `#f5f5f5`): Primary heading color. Every H1 on the page.
- **Body** (`{colors.body}` — `#f2f2f2`): Default body text and H2 color. Marginally cooler than ink.
- **Mute** (`{colors.mute}` — `#b8b3b0`): H3 and secondary label text — the warm-grey deemphasis tone. Notably warm, not a pure gray.
- **Mute Mid** (`{colors.mute-mid}` — `#6b7280`): The `--color-muted` token. Used for lowest-priority labels, footer fine print, placeholder text.

### Hairlines & Borders
- **Hairline** (`{colors.hairline}` — `#3d3a39`): The universal card border. Warm-toned (slightly brown-grey), consistent across all card edges and dividers. The brand's only separation mechanism between surfaces.
- **Hairline Dark** (`{colors.hairline-dark}` — `#1f2937`): The `--color-grey-dark` token. Used for stronger dividers and hover-state backgrounds.

### Semantic
- **Success / Link** (`{colors.success}` — `#2fd6a1`): The emerald primary doubles as success indicator and all inline link color.
- **Error** (`{colors.error}` — `#ef4444`): Validation red for destructive states.
- **Warning** (`{colors.warning}` — `#f59e0b`): Caution/pending indicator.
- **Accent Purple** (`{colors.accent-purple}` — `#818cf8`): Present in the CSS token set (`--color-purple`). Used for secondary accent moments and potentially for multi-agent type differentiation in diagrams.
- **Accent Blue** (`{colors.accent-blue}` — `#60a5fa`): The `--color-blue` token. Used for informational states and diagram connector highlights.

## Typography

### Font Families
Two faces carry the entire system:

1. **System-ui** (resolved from the OS native sans) — used for every display headline. The brand deliberately reaches for the device's native face rather than serving a custom geometric sans. This reads as a pragmatic engineering choice, not a brand oversight. Weight 400 only for headings; the restraint is the voice.
2. **Inter** — the body and UI face. Weight 400 for prose, weight 500 for button labels. Consistent with the majority of developer-tool brands in this category, but kept neutral so it doesn't compete with the emerald accent.

A monospaced stack (ui-monospace → Menlo → Consolas) is used for the terminal CTA snippet and any code blocks. Not a named custom face — the system monospace, consistent with the system-ui heading choice.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 60px | 400 | 60px | -0.65px | Hero headline ("AI Agent Engineering"). |
| `{typography.display-lg}` | 48px | 400 | 52px | -0.6px | Large section headlines. |
| `{typography.display-md}` | 32px | 400 | 40px | -0.6px | Section sub-headlines and feature cluster headings. |
| `{typography.display-sm}` | 24px | 400 | 32px | -0.6px | Card-level headlines and pricing tier names. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Lead paragraph under hero headline. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Nav links, secondary body, card descriptions. |
| `{typography.body-xs}` | 13px | 400 | 20px | 0 | Button labels (base), fine-grain card metadata. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Footer fine print, badge labels. |
| `{typography.code}` | 13px | 400 | 20px | 0 | Terminal snippet, inline code, command text. |
| `{typography.button-md}` | 13px | 500 | 20px | 0 | Nav CTA and small button labels. |
| `{typography.button-lg}` | 14px | 500 | 20px | 0 | Marketing-scale button labels. |
| `{typography.label-caps}` | 12px | 500 | 16px | 0.08em | Table headers, section eyebrow labels in uppercase mono-style. |

### Principles
- **Weight 400 is the display ceiling.** System-ui never appears bold in headings. The brand's authority comes from size and negative tracking, not weight.
- **Negative tracking on all display sizes.** `-0.65 px` at 60 px, `-0.6 px` at 24 px. Removing this tracking relaxes the brand's posture into generic.
- **Italic as accent.** The word "Platform" in the hero eyebrow is italic and emerald — the brand's only typographic decoration gesture. It is a deliberate, distinctive choice.
- **Mono for commands, not captions.** The terminal snippet is the only mono element at hero scale. Section eyebrows and labels stay in Inter.
- **Sentence-case throughout.** The brand does not use all-caps outside of potential label-caps table headers.

## Layout

### Spacing System
- **Base unit**: 4 px. The spacing scale steps at 4, 6, 8, 12, 16, 24, 32, 40, 48, 64, 96, 128 px.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 40 px · `{spacing.4xl}` 48 px · `{spacing.5xl}` 64 px · `{spacing.6xl}` 96 px · `{spacing.section}` 128 px.
- **Section top/bottom padding**: hero and major bands use `{spacing.4xl}` to `{spacing.6xl}`. The dark background means breathing room is the primary section separator — no coloured band dividers.
- **Card interior**: cards use `{spacing.xl}` 24 px interior padding, consistent with the extracted measurement.
- **Button interior**: `{spacing.md}` 12 px top/bottom, `{spacing.lg}` 16 px left/right — matching the measured `12px 16px` button padding.
- **Inline gap**: nav items and CTA pairs use `{spacing.sm}` to `{spacing.md}` between siblings.

### Grid & Container
- **Max width**: approximately 1200–1280 px centred; the page content constrains itself to a readable measure while the black background stretches edge-to-edge.
- **Hero layout**: left-aligned headline block (~50% width) with a right-aligned interactive diagram occupying the remaining half at desktop. Not a centred hero — a split information/illustration layout.
- **Feature grid**: likely a 2-up or 3-up card grid for feature sections below the hero fold.
- **Diagram grid**: the hero diagram uses a freeform connector layout with floating tool-cards on the left, a central VoltAgent node, and feature-label cards on the right.
- **Footer icon row**: a horizontal row of capability icons (Workflow, LLM, Memory, RAG, Tools) inside a card at the bottom of the hero diagram panel.

### Whitespace Philosophy
The dark canvas means whitespace is invisible as tone — section separation happens through spacing alone, not background colour shifts. The brand compensates with generous vertical padding between sections. Inside cards, content is tight: icon + label pairs use minimal gap, and the card border does the separation work. The page reads as dense but structured — an engineering dashboard ethos, not a marketing landing page ethos.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed page bands and the main canvas. |
| Level 1 — Hairline | `1px solid #3d3a39` border, no shadow. | Default card chrome — every feature card, nav dropdown, hero diagram card. |
| Level 2 — Emerald Glow | `0 0 0 1px #2fd6a1` ring + optional outer glow at low opacity. | The VoltAgent central node in the hero diagram; active/focused states. |

The brand uses **no drop-shadow elevation**. Cards are distinguished from the page background purely by their warm-grey hairline border. There is no multi-level shadow stack — the elevation system is flat + border only. This is consistent with the engineering-dashboard posture: depth is information structure, not visual decoration.

### Decorative Depth
- **The emerald node glow**: the central VoltAgent icon in the hero diagram emits a soft emerald glow — the page's only atmospheric depth effect. It reads as the system's "active" state rendered as an illustration.
- **Dark polarity as the only band separator**: there is no light-to-dark polarity flip. The brand stays on one surface tone throughout and uses vertical spacing as the section rhythm.
- **Connector lines in the diagram**: thin dot-matrix or dashed lines connecting the tool cards to the VoltAgent node suggest a circuit-board or network topology. These are SVG or canvas-drawn paths, not CSS borders.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands and raw terminal output surfaces. |
| `{rounded.xs}` | 4px | Tightest inline decorative elements. |
| `{rounded.button}` | 6px | **All buttons and CTAs.** The measured radius for every interactive button element on the page, including "Get Started" and "Try VoltOps". Non-negotiable. |
| `{rounded.card}` | 8px | All card surfaces — feature cards, hero diagram cards, tool icon cards. |
| `{rounded.lg}` | 12px | Larger panel chrome where a softer edge is appropriate. |
| `{rounded.xl}` | 16px | Largest container surfaces. |
| `{rounded.pill}` | 9999px | GitHub star badge, Discord pill, explicitly pill-shaped badges only. Not used for standard rectangular CTAs. |

### Note on Radius Discipline
The 6 px button radius and 8 px card radius coexist deliberately and must not be conflated. The "Get Started" button at 6 px reads as a utilitarian UI control. The cards at 8 px have a marginally softer feel. The pill radius (9999 px) appears only on the GitHub star badge and similarly explicit badge elements — it is not the CTA shape.

## Components

### Buttons & CTAs

**`button-primary`** — the canonical CTA button ("Get Started", "Try VoltOps").
- Background `{colors.canvas}`, text `{colors.white}`, 1 px hairline border, label in `{typography.button-md}`, padding `{spacing.md} {spacing.lg}` (12 px × 16 px), radius `{rounded.button}` 6 px. The brand's primary conversion surface is bordered dark, not filled with the accent colour.

**`button-terminal`** — the `npm create voltagent-app@latest` CTA in the hero row.
- Background `{colors.canvas-soft}`, text `{colors.primary}`, label in `{typography.code}`, radius `{rounded.button}` 6 px, padding `{spacing.md} {spacing.lg}`. A code snippet styled as a button — equal-weight sibling to `button-primary` in the hero CTA row.

**`nav-cta-primary`** — the "Try VoltOps →" button in the nav.
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-md}`, radius `{rounded.button}` 6 px.

**`nav-github-badge`** — the "9.9K ★" GitHub star counter in the nav.
- Background `{colors.canvas-raised}`, text `{colors.body}`, 1 px hairline border, label in `{typography.body-sm}`, radius `{rounded.pill}`. The only pill-shaped element in the nav; its pill shape communicates "badge / metric", distinct from action buttons.

### Navigation

**`nav-bar`** — the top navigation.
- Background `{colors.canvas}`, text `{colors.body}`, height 64 px, padding `{spacing.md} {spacing.xl}`, bottom 1 px hairline border. Layout: VoltAgent logo left, nav link row centre, GitHub badge + Discord icon + "Try VoltOps" cluster right.

**`nav-link`** — links inside the nav row ("Products ▾", "Documentation", "Pricing", "Use Cases ▾", "Resources ▾").
- Text `{colors.mute}`, label in `{typography.body-sm}`, padding `{spacing.sm} {spacing.md}`, radius `{rounded.button}`.

**`nav-discord-icon`** — the Discord icon button in the nav cluster.
- Background `{colors.canvas-raised}`, hairline border, radius `{rounded.button}`, padding `{spacing.sm}`.

**`nav-dropdown`** — the dropdown panel that opens from nav items with chevrons.
- Background `{colors.canvas-raised}`, text `{colors.body}`, 1 px hairline border, label in `{typography.body-sm}`, radius `{rounded.card}`.

**`announcement-banner`** — the "⭐ We're open source" bar at the very top.
- Background `{colors.canvas}`, text `{colors.mute}`, bottom hairline border, label in `{typography.body-sm}`, full-width with centred text.

### Cards & Containers

**`card-feature`** — the canonical feature card.
- Background `{colors.canvas}`, text `{colors.body}`, 1 px `{colors.hairline}` border, padding `{spacing.xl}` 24 px, radius `{rounded.card}` 8 px. No shadow.

**`hero-diagram-card`** — the floating tool cards in the hero diagram (Airtable, GitHub, Slack, Gmail; AI Resp., Automations, API Resp., Webhooks).
- Background `{colors.canvas}`, text `{colors.body}`, 1 px hairline border, label in `{typography.body-sm}`, radius `{rounded.card}`, padding `{spacing.sm} {spacing.lg}`.

**`hero-diagram-node`** — the central VoltAgent circular node with the lightning bolt icon.
- Background `{colors.canvas}`, icon/ring color `{colors.primary}`, 1–2 px `{colors.primary}` border, radius `{rounded.full}`. Carries the emerald glow effect.

**`feature-icon-pill`** — the icon container circles in the bottom capability row (Workflow, LLM, Memory, RAG, Tools).
- Background `{colors.canvas-soft}`, icon color `{colors.primary}`, hairline border, radius `{rounded.full}`.

**`code-snippet`** — inline terminal / command display.
- Background `{colors.canvas-soft}`, text `{colors.primary}`, label in `{typography.code}`, radius `{rounded.button}`, padding `{spacing.md} {spacing.lg}`.

**`badge-muted`** — small metadata pills and status badges.
- Background `{colors.canvas-soft}`, text `{colors.mute-mid}`, label in `{typography.caption}`, radius `{rounded.pill}`, padding `{spacing.xxs} {spacing.sm}`.

### Hero & Sections

**`hero-band`** — the main hero section.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Contains: eyebrow line in `{colors.mute}`, display headline ("The end-to-end") in `{typography.display-md}`, italic emerald accent headline ("AI Agent Engineering / Platform") in `{typography.display-xl}`, body lead in `{typography.body-lg}`, CTA row with `button-primary` + `button-terminal` side by side, and the hero diagram panel to the right.

**`hero-eyebrow`** — the italic emerald "Platform" word in the hero.
- Text `{colors.primary}`, italic style, set in `{typography.display-xl}`. The brand's signature typographic gesture.

**`footer`** — the bottom navigation and legal band.
- Background `{colors.canvas}`, text `{colors.mute}`, top hairline border, padding `{spacing.4xl} {spacing.xl}`, labels in `{typography.body-sm}`.

**`link-inline`** — body-copy inline links.
- Text `{colors.link}` (`#2fd6a1`), label in `{typography.body-md}`.

## Do's and Don'ts

### Do
- Use `{colors.primary}` (`#2fd6a1`) exclusively as an accent — text, borders, icon fills, and glows. Never fill a large surface or button background with it (except `nav-cta-primary` which is a deliberate brand-entry call to action).
- Set all buttons at `{rounded.button}` 6 px. Resist the temptation to round them further — the 6 px radius is the brand's "utilitarian control" cue.
- Keep all display headings at system-ui weight 400 with negative letter-spacing. The brand's authority is in size and spacing restraint, not weight.
- Use `{colors.hairline}` (`#3d3a39`) as the only surface separator. Dark-on-dark cards are held together by this warm-grey hairline — do not substitute a lighter or cooler border tone.
- Treat the terminal snippet as a first-class CTA element, equal in hierarchy to the primary button. The `npm install` pattern is the brand's conversion voice.
- Use italic + emerald for exactly one display-level typographic accent per page section. The "Platform" italic is a deliberate singular gesture, not a pattern to repeat at every level.
- Stay entirely on dark surfaces. The brand does not flip to light mode for any section — the deep-black canvas is non-negotiable.

### Don't
- Don't fill the primary CTA button with `{colors.primary}` emerald (except `nav-cta-primary`). The hero "Get Started" button is a bordered dark surface, not a green button. Green is an accent, not a fill.
- Don't introduce gradients. The brand's only atmospheric effect is the emerald node glow. Gradients flatten the engineering posture.
- Don't use `{rounded.pill}` for rectangular action buttons. Pill radius is reserved for badge-shaped elements (GitHub star counter, status badges). CTAs stay at 6 px.
- Don't use weight 700 or 800 for any headline. The system-ui face at weight 400 is the deliberate ceiling. Bolding breaks the engineering register.
- Don't use letter-spacing above zero for display sizes. Positive tracking on the dark-canvas dark-type combination reads as corporate, not technical.
- Don't introduce a light band or white section. There is no polarity-flip in this brand's section rhythm — whitespace is vertical gap, not a background colour change.
- Don't render the emerald node glow at small scales. The VoltAgent icon glow is a hero-diagram-scale effect, not a reusable decoration for individual UI controls.
