---
version: alpha
name: Intuit
description: "Intuit is a financial-software platform brand — the page rendered as a bare XML/RSS feed stub with no CSS applied, yielding a single black Times Roman text line on white canvas. The extraction produced no colour tokens beyond pure black text, no custom fonts, no radii, no spacing rhythm, and no visual components beyond the browser's default document shell. This DESIGN.md is a best-faith reconstruction anchored strictly to what was observable: a stark black-on-white document surface, system-serif body type, and zero decorative chrome."

colors:
  ink: "#000000"
  canvas: "#ffffff"

typography:
  body-md:
    fontFamily: "Times, Times New Roman, serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: "Times, Times New Roman, serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 18px
  caption:
    fontFamily: "Times, Times New Roman, serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px

rounded:
  none: 0px

spacing:
  xs: 4px
  sm: 5px
  md: 8px
  lg: 16px

components:
  document-root:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "{spacing.sm}"
  xml-message-line:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.sm}"
  divider-line:
    backgroundColor: "{colors.ink}"
    height: 1px
  page-body:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
  inline-text:
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
  caption-label:
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
  document-header:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.sm}"
  document-footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    padding: "{spacing.sm}"
  xml-tree-node:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.lg}"
  xml-tree-leaf:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.lg}"
  ex-pricing-tier:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-product-selector:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    item-divider: "{colors.ink}"
  ex-app-shell-row:
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    headerBackground: "{colors.canvas}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.ink}"
  ex-auth-form-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-modal-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-empty-state-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"

---

## Overview

The screenshot captured for `https://www.intuit.com/` rendered not a marketing surface but a bare XML document stub — the browser's native XML tree viewer displaying the message "This XML file does not appear to have any style information associated with it. The document tree is shown below." followed by an empty white expanse. No CSS was applied, no custom fonts were loaded, no colours beyond browser-default black-on-white were present, and no structural components — nav bars, buttons, cards, hero bands — were visible.

The deterministic CSS extractor confirmed this: the only captured signal was `color: #000000` on body text rendered in the browser's fallback face, `Times`. No hex tokens for primary, secondary, accent, background, or surface were returned. No radii, no spacing rhythm, no logo assets were extracted.

This document therefore represents a degenerate surface state — an XML feed or sitemap endpoint served without a stylesheet, not Intuit's actual consumer marketing surface. The design tokens, typography scale, spacing system, and component library below are reconstructed strictly from what was observable: a pure-white document canvas, system-serif body type at browser default sizing, a single 1-pixel hairline divider below the browser's XML warning message, and no decorative chrome of any kind.

Any downstream consumer of this DESIGN.md should treat it as a baseline stub. Intuit's actual design system — which uses a proprietary sans-serif ("Avenir Next" family or a custom cut), a blue-heavy brand palette, and a rich component library — cannot be represented here without a successful CSS extraction from a rendered marketing page.

## Colors

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The only background colour present — the browser's default white document surface. Carries every component in this stub.

### Text
- **Ink** (`{colors.ink}` — `#000000`): The browser's default text colour. Carries the XML warning message, the divider line, and every text node in the document tree.

## Typography

The only font family extracted is `Times` — the browser's default system-serif fallback, loaded because no stylesheet was served. No custom faces, no weight variants beyond 400, and no explicit size tokens were captured.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.body-md}` | 16px | 400 | 24px | Default document body — the XML warning message line. |
| `{typography.body-sm}` | 13px | 400 | 18px | XML tree nodes — browser's default small text rendering inside the tree view. |
| `{typography.caption}` | 12px | 400 | 16px | Lowest-priority labels — fine-print and document metadata if present. |

### Principles
- **No brand typography is represented here.** The `Times` face is the browser's emergency fallback, not an editorial choice.
- **Weight 400 is the only working weight.** No bold, no medium, no display cut was loaded.
- **No letter-spacing signal.** Browser default tracking throughout — no brand intent to infer.

### Note on Font Substitutes
The actual Intuit brand surface uses a proprietary geometric sans (reported as a custom cut of the Avenir Next family). Open-source substitute: *Nunito Sans* (400 / 500 / 700) is the closest stylistic match for the rounded humanist sans character. *Inter* is a passable geometric alternative.

## Layout

### Spacing System
- **Base unit**: 4 px inferred from browser defaults. One measured value — `5px` top padding — was extracted.
- **Tokens**: `{spacing.xs}` 4 px · `{spacing.sm}` 5 px · `{spacing.md}` 8 px · `{spacing.lg}` 16 px.
- No section padding, no card interior padding, no gap tokens were measurable from this stub.

### Grid & Container
- No grid system is observable. The document renders as a single-column block at full viewport width — the browser's default XML tree layout.
- No max-width container, no column patterns, no gutters are present.

### Whitespace Philosophy
Not determinable from this surface. The browser's XML viewer uses a tight indented tree layout with minimal padding. No brand whitespace intent can be inferred.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | The only level present — the entire stub is flat document chrome. |

No shadows, no elevation layers, and no decorative depth signals were present in the captured surface.

## Do's and Don'ts

### Do
- Treat this file as a stub — re-run extraction against a rendered Intuit marketing URL (e.g. `https://www.intuit.com/` with JavaScript enabled and CSS loaded) to capture actual brand tokens.
- Preserve `{colors.canvas}` (`#ffffff`) and `{colors.ink}` (`#000000`) as the absolute fallback surface and text pair.

### Don't
- Don't invent brand colours, font families, radii, or component geometry from memory or assumed Intuit brand knowledge — this document is anchored only to what was observable in the extraction.
- Don't use `Times` as the brand body font in any generated UI — it is an emergency browser fallback, not an editorial choice.
- Don't apply shadows, radii, or decorative chrome based on inferred Intuit brand identity — all component geometry in this file resolves to `{rounded.none}` because no radii were captured.
