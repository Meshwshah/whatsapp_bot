---
name: Rishabh Communication
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#bac9cc'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#849396'
  outline-variant: '#3b494c'
  surface-tint: '#00daf3'
  primary: '#c3f5ff'
  on-primary: '#00363d'
  primary-container: '#00e5ff'
  on-primary-container: '#00626e'
  inverse-primary: '#006875'
  secondary: '#c3c6d2'
  on-secondary: '#2c3039'
  secondary-container: '#454953'
  on-secondary-container: '#b5b8c3'
  tertiary: '#ffe9cd'
  on-tertiary: '#432c00'
  tertiary-container: '#ffc769'
  on-tertiary-container: '#775200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#9cf0ff'
  primary-fixed-dim: '#00daf3'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#dfe2ee'
  secondary-fixed-dim: '#c3c6d2'
  on-secondary-fixed: '#181c24'
  on-secondary-fixed-variant: '#434750'
  tertiary-fixed: '#ffdeac'
  tertiary-fixed-dim: '#ffba38'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#604100'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system establishes a high-tier consumer-technology retail atmosphere. It blends surgical minimalism with luminous frosted glassmorphism, capturing the tactile excitement of unboxing flagship devices. The visual persona conveys uncompromising precision, security, and forward-looking innovation. 

The aesthetic centers on midnight slate backgrounds layered with refractive glass containers, hyper-clean neutral typography, and electric cyan focal points. Interfaces feel suspended and weightless, using translucent plane separation and soft edge highlights rather than heavy physical dropshadows. Micro-interactions are snappy and glossy, reflecting the calibrated mechanics of top-tier consumer electronics.

## Colors
The color hierarchy is anchored by a dark canvas with high-impact luminous accents.

- **Primary (`#00E5FF`):** Electric Cyan represents energy, connectivity, and active tech states. Used for primary interactions, critical status badges, key pricing, and reactive glows.
- **Secondary (`#0B0F17`):** Midnight Slate serves as the foundational substrate. Variations like `#111827` and `#1E293B` form tinted frosted layers behind UI elements.
- **Tertiary (`#FFB300`):** Warm Amber delivers calculated contrast for promotional deals, star ratings, alert states, and pre-order indicators without breaking the futuristic aesthetic.
- **Neutral (`#94A3B8`):** Cool Slate drives typography, inactive states, subtle dividers, and micro-labels, maintaining legibility against deep backgrounds.

Translucent white layers (`rgba(255, 255, 255, 0.04)` to `rgba(255, 255, 255, 0.12)`) act as structural planes, bordered with hairline rims (`rgba(255, 255, 255, 0.12)`) to yield clean glass refraction.

## Typography
Typography relies on Inter across all hierarchy tiers to reinforce a technical, utilitarian baseline. High-contrast negative letter spacing is applied to large headlines to ensure titles feel compact, precise, and architectural. 

Body text utilizes optical spacing with standard line heights for clarity against dark translucent surfaces. Upper-tier specifications, tech chip labels, and product SKUs lean on uppercase `label-sm` with widened letter-spacing (`0.05em`) to evoke technical hardware inscriptions.

## Layout & Spacing
The layout model employs a 12-column fluid grid system on desktop (breakpoints at 1024px and 1440px) with 1.5rem gutters, collapsing into an 8-column layout on tablet and a 4-column structure on mobile screens (&lt;768px). 

Vertical rhythm is strictly bound to an 8px base module (represented via `space-sm` at 8px, `space-md` at 16px, `space-lg` at 24px, and `space-xl` at 40px). Component padding prioritizes airiness inside glass cards to emphasize transparency without visual clutter. Density increases in product comparison matrixes and technical specification sheets through uniform application of `space-sm` and `space-xs`.

## Elevation & Depth
Depth is created through glass stratification rather than opaque elevation tiers:

- **Base Layer:** Deep slate background (`#0B0F17`) featuring subtle, stationary radial light cones in electric cyan and deep indigo at low opacity (8–12%).
- **Mid-Tier (Cards, Shelves, Navbars):** Surface panels composed of `rgba(17, 24, 39, 0.65)` layered with `backdrop-filter: blur(16px)` to `blur(24px)`. Each panel is rimmed with a 1px border of `rgba(255, 255, 255, 0.12)`.
- **Top-Tier (Flyouts, Modals, Overlays):** Interactive dialogs and contextual menus feature `rgba(30, 41, 59, 0.8)` with `backdrop-filter: blur(32px)`, 1px border of `rgba(255, 255, 255, 0.20)`, and an ambient outer glow: `0 8px 32px -4px rgba(0, 229, 255, 0.15)`.
- **Light Cues:** Surface elements catch directional light from the top-left, achieved via inset gradients: `linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)`.

## Shapes
A roundedness factor of `2` provides a modern, balanced geometry:
- Standard UI containers (cards, form inputs, modal dialogs) feature a radius of `0.5rem` (8px).
- Product showcases and hero modules feature `rounded-lg` at `1rem` (16px).
- Micro-elements such as specification tags, interactive status chips, and promotional pills utilize fully rounded capsule geometries (`rounded-full`) to contrast against rectangular screen matrices and hardware forms.

## Components

### Buttons
- **Primary Action:** Solid electric cyan background (`#00E5FF`) with dark text (`#0B0F17`), weight 600. Includes an ambient glow shadow: `0 0 20px rgba(0, 229, 255, 0.35)`. Subtle scale effect (0.98) on click.
- **Glass / Secondary:** Semi-transparent background `rgba(255, 255, 255, 0.06)` with a 1px border of `rgba(255, 255, 255, 0.15)`. Text is pure white. Hover shifts fill to `rgba(255, 255, 255, 0.12)` with border highlight `rgba(0, 229, 255, 0.5)`.

### Cards (Gadget & Product Displays)
- Built on `backdrop-filter: blur(20px)` over `rgba(15, 23, 42, 0.6)`. Hairline 1px border in `rgba(255, 255, 255, 0.1)`. 
- Device images float above the background plane with dynamic reflection beneath them. On hover, the border transitions smoothly to `rgba(0, 229, 255, 0.4)` accompanied by an outer cyan diffusion.

### Chips & Tech Badges
- Capsule pills using `rounded-full`, with internal padding `0.25rem 0.75rem`.
- Inactive: `rgba(255, 255, 255, 0.05)` with `rgba(255, 255, 255, 0.12)` border.
- Active/Highlight: `rgba(0, 229, 255, 0.15)` fill with `#00E5FF` text and 1px `#00E5FF` translucent border.

### Input Fields
- Dark inset backgrounds (`rgba(0, 0, 0, 0.35)`) with a 1px `rgba(255, 255, 255, 0.1)` border and `0.5rem` corner radius.
- Placeholder text uses `neutral` (`#94A3B8`). On focus, the field casts an inward and outward electric cyan halo (`box-shadow: 0 0 0 1px #00E5FF, 0 0 12px rgba(0, 229, 255, 0.25)`).

### Lists & Spec Rows
- Separated by thin translucent dividers (`rgba(255, 255, 255, 0.06)`). Data points alternate between subdued slate labels and crisp, bright white numerical data points.

### Checkboxes & Radios
- Custom translucent frames. Checked state triggers an instant solid `#00E5FF` core with a miniature radiant bloom behind the toggle.