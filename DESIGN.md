# EightbornV Design System — Archival Noir Specification

```yaml
version: alpha
name: EightbornV
description: >-
  Dark, cinematic noir aesthetic: a near-black canvas, warm amber signal accent, teal status cues, and an archival, case-file typographic voice.
colors:
  surface: '#0e0e11'
  surface-dim: '#08080b'
  surface-bright: '#2d2c33'
  surface-container-lowest: '#050507'
  surface-container-low: '#111014'
  surface-container: '#16161a'
  surface-container-high: '#1c1b20'
  surface-container-highest: '#2d2c33'
  on-surface: '#f3f4f2'
  on-surface-variant: '#b3b2b2'
  inverse-surface: '#f3f4f2'
  inverse-on-surface: '#0e0e11'
  outline: '#8e8e8e'
  outline-variant: '#414045'
  surface-tint: '#ffc526'
  primary: '#ffc526'
  on-primary: '#0e0e11'
  primary-container: '#ffd76a'
  on-primary-container: '#161519'
  inverse-primary: '#8a6a00'
  secondary: '#16d5b2'
  on-secondary: '#0e0e11'
  secondary-container: '#19b394'
  on-secondary-container: '#050507'
  tertiary: '#e50a3e'
  on-tertiary: '#ffffff'
  tertiary-container: '#920728'
  on-tertiary-container: '#ffffff'
  error: '#ff425f'
  on-error: '#111111'
  error-container: '#920728'
  on-error-container: '#ffffff'
  primary-fixed: '#ffd76a'
  primary-fixed-dim: '#ffc526'
  on-primary-fixed: '#161519'
  on-primary-fixed-variant: '#414045'
  secondary-fixed: '#16d5b2'
  secondary-fixed-dim: '#14c2a2'
  on-secondary-fixed: '#050507'
  on-secondary-fixed-variant: '#222126'
  tertiary-fixed: '#ff6e84'
  tertiary-fixed-dim: '#e50a3e'
  on-tertiary-fixed: '#050507'
  on-tertiary-fixed-variant: '#2d2c33'
  background: '#0e0e11'
  on-background: '#f3f4f2'
  surface-variant: '#222126'
typography:
  display:
    fontFamily: Archivo Black, Impact, sans-serif
    fontSize: 32px
    fontWeight: 700
    lineHeight: 51.2px
    letterSpacing: '-0.02em'
  headline-lg:
    fontFamily: Archivo Black, Impact, sans-serif
    fontSize: 76px
    fontWeight: '700'
    lineHeight: 83.8656px
    letterSpacing: '-0.03em'
  headline-md:
    fontFamily: Inter, sans-serif
    fontSize: 48px
    fontWeight: 700
    lineHeight: 52px
    letterSpacing: '-0.02em'
  title-lg:
    fontFamily: Inter, sans-serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter, sans-serif
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28.8px
  body-md:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 25.6px
  label-md:
    fontFamily: Inter, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 18px
  label-sm:
    fontFamily: JetBrains Mono, monospace
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 2px
  DEFAULT: 4px
  md: 4px
  lg: 5px
  xl: 8px
  full: 9999px
spacing:
  unit: 8px
  xs: 8px
  sm: 10px
  md: 12px
  lg: 18px
  xl: 20px
  2xl: 24px
  gutter: 20px
  container-max: 1200px
elevation:
  sm: 'inset 0 0 0 1px #f3f4f2'
  md: 0 8px 16px rgba(0,0,0,0.4)
  lg: 'inset 0 0 0 2px #0e0e11'
layout:
  containerMaxWidth: 1200px
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.md}'
    padding: '{spacing.md}'
    height: 48px
  button-primary-hover:
    backgroundColor: '{colors.primary-container}'
    textColor: '{colors.on-primary-container}'
  button-secondary:
    backgroundColor: transparent
    textColor: '{colors.on-surface}'
    typography: '{typography.label-md}'
    rounded: '{rounded.md}'
    padding: '{spacing.md}'
    height: 48px
  button-secondary-hover:
    backgroundColor: '{colors.surface-container-high}'
  card:
    backgroundColor: '{colors.surface-container-low}'
    rounded: '{rounded.xl}'
    padding: '{spacing.xl}'
  card-hover:
    backgroundColor: '{colors.surface-container-high}'
  input-field:
    backgroundColor: '{colors.surface-container-lowest}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.DEFAULT}'
    padding: '{spacing.sm}'
  list-item:
    backgroundColor: transparent
    rounded: '{rounded.md}'
    padding: '{spacing.sm}'
  list-item-hover:
    backgroundColor: '{colors.surface-container-high}'
    textColor: '{colors.primary}'
  badge:
    backgroundColor: '{colors.secondary-container}'
    textColor: '{colors.on-secondary-container}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.full}'
    padding: '{spacing.xs}'
```

---

## 1. Visual Theme & Atmosphere

The EightbornV design system is characterized by an **Archival Noir** aesthetic:
- **Canvas:** Near-black foundation (`#0e0e11`) with matte, opaque surfaces.
- **Lighting & Accents:** A single warm amber signal (`#ffc526`) acts as the focal guide, complemented by teal status indicators (`#16d5b2`) and crimson urgency cues (`#e50a3e`).
- **Tactility:** Precise tactical corner radii (4px buttons and inputs, 8px cards, pill-shaped badges).
- **Depth:** Structured tonal layering (`#0e0e11` -> `#111014` -> `#16161a` -> `#1c1b20`) with subtle outlines (`#414045`) and restrained amber glows rather than blur or translucent glass.

---

## 2. Color Palette & Exact Roles

| Token | Hex Value | Role |
| :--- | :--- | :--- |
| **Canvas / Background** | `#0e0e11` | Root page canvas, deepest neutral foundation. |
| **Surface Dim** | `#08080b` | Darkest container floors, footer bedrock. |
| **Surface Low** | `#111014` | Primary cards, content tiles, header surfaces. |
| **Surface Container** | `#16161a` | Elevated panels, feature containers, badges. |
| **Surface High** | `#1c1b20` | Hover states, active focus panels, interactive lifts. |
| **Surface Lowest** | `#050507` | Form inputs, select dropdowns, sunken wells. |
| **Primary Amber** | `#ffc526` | Hero CTAs, active highlights, key metrics, active route underlines. |
| **Primary Container / Amber Hover** | `#ffd76a` | Hover states for primary buttons and active indicators. |
| **Secondary Teal** | `#16d5b2` | Status indicators, verified tags, affirmative checkmarks. |
| **Secondary Container** | `#19b394` | Teal container backgrounds and accent badge fills. |
| **Tertiary Crimson** | `#e50a3e` | Destructive alerts, critical badges, high-urgency notifications. |
| **Error** | `#ff425f` | Form field errors, invalid states. |
| **Primary Text (On-Surface)** | `#f3f4f2` | Primary headlines, titles, active nav items, body copy. |
| **Secondary Text (On-Surface-Variant)** | `#b3b2b2` | Secondary copy, descriptions, subtitles, inactive tabs. |
| **Muted Text / Outline** | `#8e8e8e` | Subtle labels, footers, tertiary captions. |
| **Outline Variant / Border** | `#414045` | Structural borders, card borders, dividers. |
| **Subtle Border** | `#222126` | Inset dividers, list row separators. |

---

## 3. Typography Hierarchy

- **Display & Headings:** `Archivo Black` (with system Impact/sans-serif fallbacks)
  - Bold, punchy, uppercase, tracking `-0.02em` to `-0.03em`.
  - Display Hero: `clamp(2.5rem, 6vw, 4.5rem)`, leading `0.98`–`1.05`.
  - Section Headings (H2): `clamp(1.875rem, 4vw, 2.75rem)`, leading `1.1`.
- **Body & Interface:** `Inter`
  - Clean, neutral, high legibility on dark surfaces.
  - Body Large: `1.125rem` (18px), leading `1.6`.
  - Body Regular: `1rem` (16px), leading `1.6`.
  - Body Small: `0.875rem` (14px), leading `1.5`.
- **Metadata & Labels:** `JetBrains Mono`
  - Monospace, tracked `0.08em`, uppercase, `11px`–`12px`.
  - Applied to operational badges, category tags, timestamps, coordinates, and specs.

---

## 4. Tactical Geometry & Corner Radii

- **Buttons:** `4px` (`rounded` / `rounded-md`) — crisp, physical tactility.
- **Inputs & Textareas:** `4px` (`rounded`) — precision inset framing.
- **Cards & Containers:** `8px` (`rounded-lg` / `rounded-xl`) — refined dossier panels.
- **Badges & Status Chips:** `9999px` (`rounded-full`) — unmistakable pill distinction.
- **Never 0px or rounded-3xl / pill buttons.**

---

## 5. Component Specifications

### Buttons
- **Primary CTA:**
  - Background: `#ffc526`, Text: `#0e0e11`, Border: 1px solid `#ffc526`.
  - Radius: `4px`, Height: `48px` (`h-12`).
  - Hover: Background `#ffd76a`, Border `#ffd76a`, Text: `#161519`.
  - Transition: `200ms ease`.
- **Secondary CTA:**
  - Background: `transparent`, Text: `#f3f4f2`, Border: 1px solid `#414045`.
  - Radius: `4px`, Height: `48px` (`h-12`).
  - Hover: Background `#1c1b20`, Border `#8e8e8e`, Text: `#f3f4f2`.
- **Ghost CTA:**
  - Background: `transparent`, Text: `#b3b2b2`, Border: 1px solid transparent.
  - Hover: Background `#1c1b20`, Text: `#ffc526`.
- **Destructive CTA:**
  - Background: `#e50a3e`, Text: `#ffffff`, Border: 1px solid `#e50a3e`.
  - Hover: Background `#920728`, Border `#920728`.

### Navigation & Header
- Surface: `#0e0e11` with bottom border 1px solid `#414045`.
- Monogram Brandmark: `#111014` tile with 1px border `#ffc526`/40, text `#ffc526`, 4px radius.
- Wordmark: `CLASSIC` in `#f3f4f2`, `FITNESS` in `#ffc526`.
- Links: `Inter 14px-16px`, color `#b3b2b2`, hover `#f3f4f2`. Active link shows a 2px amber (`#ffc526`) underline.
- Mobile Drawer: `#111014` with 1px border `#414045`.

### Cards & Panels
- Resting Surface: `#111014`.
- Border: 1px solid `#414045`.
- Radius: `8px`.
- Hover State: Surface shifts to `#1c1b20`, border transitions to `#ffc526`/40, subtle lift.
- Featured Card (Popular Tier): Framed with 2px border `#ffc526` and subtle amber glow `0 0 20px rgba(255, 197, 38, 0.15)`.

### Forms & Inputs
- Resting Surface: `#050507`.
- Border: 1px solid `#414045`.
- Radius: `4px`.
- Text: `#f3f4f2`. Placeholder: `#8e8e8e`.
- Focus State: 1px solid `#ffc526` border/ring, outline none.
- Error State: 1px solid `#ff425f` border, error text in `#ff425f`.

### Badges & Status Chips
- Shape: Pill (`rounded-full`).
- Typography: `JetBrains Mono` 11px, `tracking-wider`, uppercase.
- Accent Variant: Background `rgba(255, 197, 38, 0.12)`, Border 1px solid `rgba(255, 197, 38, 0.3)`, Text `#ffc526`.
- Teal / Success Variant: Background `rgba(22, 213, 178, 0.12)`, Border 1px solid `rgba(22, 213, 178, 0.3)`, Text `#16d5b2`.
- Outline Variant: Background `transparent`, Border 1px solid `#414045`, Text `#b3b2b2`.

### Modals & Dialogs
- Backdrop: `#0e0e11` at 85% opacity (`rgba(14, 14, 17, 0.85)`).
- Dialog Surface: `#111014`, Border 1px solid `#414045`, Radius `8px`, Shadow `0 8px 16px rgba(0,0,0,0.4)`.

---

## 6. Do's and Don'ts

### Do
- Use amber `#ffc526` exclusively for primary focal actions and active indicators.
- Set metadata tags and specs in `JetBrains Mono` at 11px with 0.08em tracking.
- Maintain consistent 4px radius on buttons/inputs and 8px on cards.
- Rely on rich, desaturated grayscale photographic assets set against `#0e0e11`.
- Keep cards and overlays opaque and matte.

### Don't
- Don't place amber and teal on the same button; amber is action, teal is affirmative status.
- Don't use frosted glass or blur filters; EightbornV surfaces are opaque and tactile.
- Don't use 0px square corners or oversized circular pill buttons.
- Don't introduce uncalibrated neon colors or previous brand colors (`#FAFAFA`, `#0A0A0A`, `#EF4444`).
