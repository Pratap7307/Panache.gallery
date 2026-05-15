---
name: Panache S16
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2b2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0a0a0a'
  on-primary-container: '#7b7979'
  inverse-primary: '#5f5e5e'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#ffb4a8'
  on-tertiary: '#690000'
  tertiary-container: '#200000'
  on-tertiary-container: '#df3d2c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdad4'
  tertiary-fixed-dim: '#ffb4a8'
  on-tertiary-fixed: '#410000'
  on-tertiary-fixed-variant: '#930000'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display-xl:
    fontFamily: Bodoni Moda
    fontSize: 96px
    fontWeight: '800'
    lineHeight: 100%
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Bodoni Moda
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 110%
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 110%
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 120%
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 130%
  body-lg:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: 0.2em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-tablet: 40px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style

The design system evokes the atmosphere of a high-end fashion gala merged with the dramatic intensity of a cinematic premiere. It is built for "Panache S16" to transition the college cultural festival from a standard event to a luxury experience. The personality is sophisticated, avant-garde, and exclusive.

The aesthetic leans heavily into **Editorial Minimalism** and **Glassmorphism**. It prioritizes immersive storytelling through large-scale, high-contrast photography that bleeds into the deep charcoal canvas. Whitespace is treated as a premium commodity, used intentionally to frame content and create a sense of prestige. Motion should be fluid and staggered, mimicking the slow-motion reveal of a film title sequence.

## Colors

The palette is anchored by a void-like deep charcoal black (`#0A0A0A`), providing a high-contrast stage for cinematic elements. Typography is rendered in a soft off-white to reduce eye strain while maintaining a crisp, luxury feel.

Accents are used sparingly to denote importance and energy:
- **Gold:** Reserved for hero headlines, premium call-to-actions, and winner categories.
- **Crimson:** Used for high-energy event types (Dance, Drama) and urgent interactive states.
- **Warm Orange Glow:** Employed as a lighting effect (backdrops, hover states) to simulate the warmth of stage lights against the dark environment.

## Typography

This design system utilizes a high-contrast typographic pairing to achieve an editorial look. 

**Bodoni Moda** is the voice of the festival—elegant, bold, and unapologetically fashion-forward. It should be used for all major headings and "hero" statements. Large display sizes should use tight letter-spacing to create a monolithic, impactful appearance.

**Manrope** provides a functional, modern counter-balance. Its geometric clarity ensures legibility for schedules, descriptions, and fine print. All labels and secondary headers should use the `label-caps` style to maintain an organized, catalog-like structure.

## Layout & Spacing

The layout follows a **Fixed 12-Column Grid** for desktop to ensure the magazine-style composition remains structured. On mobile devices, the layout transitions to a single-column fluid flow with generous vertical padding.

Key layout principles:
- **Generous Verticality:** Sections are separated by large gaps (`160px` or more) to allow photography to breathe and to create a sense of anticipation as the user scrolls.
- **Asymmetric Grids:** For event galleries or performer line-ups, use an offset grid where images span different column counts (e.g., a 7-column image adjacent to a 4-column text block with a 1-column gap).
- **Safe Margins:** Content should never feel cramped; wide horizontal margins on desktop create a "letterbox" cinematic effect.

## Elevation & Depth

Depth is conveyed through light and transparency rather than traditional shadows. 

1.  **Glassmorphism:** Navigation bars and overlays use a high-refraction backdrop blur (20px+) with a 10% white tint. This creates a "frosted lens" effect that feels premium and modern.
2.  **Luminous Glows:** Interactive cards do not have shadows; instead, they emit a subtle, soft-edged outer glow using the `accent_glow_hex` color when hovered. 
3.  **Z-Axis Layering:** Background textures (like film grain or subtle gradients) should exist at the lowest level, with photography mid-level, and typography/UI elements on the top layer to create a parallax-ready stack.

## Shapes

The shape language is predominantly **Sharp and Architectural**. 

Full-screen imagery and section containers should use 0px border radius to maintain a sophisticated, "un-bubbly" editorial look. Interactive elements like buttons and cards use a subtle `0.25rem` (Soft) radius to provide just enough approachability without breaking the high-fashion aesthetic. 

Decorative elements—such as category tags or "live" indicators—may use pill-shapes to contrast against the sharp grid.

## Components

### Navigation
The navigation is a minimalist, sticky bar. It remains transparent at the top and transitions into a glassmorphic surface (`backdrop-filter: blur`) upon scrolling. Use thin, 1px gold borders on the bottom of the nav to define the edge.

### Premium Cards
Cards for festival events should feature full-bleed imagery. The text is overlaid at the bottom using a subtle dark-to-transparent gradient. On hover, the card should scale slightly (1.02x) and develop a warm orange outer glow.

### Buttons
- **Primary:** Solid Gold background with black text, no border, sharp corners.
- **Secondary:** Ghost style with an off-white 1px border and high-contrast hover state (fill on hover).
- **Typography:** Always use `label-caps` for button text to maintain a formal tone.

### Editorial Content Grids
Use varying aspect ratios for images (2:3, 16:9, 1:1) within the grid to mimic a high-end magazine spread. Captions should be placed in the adjacent empty columns rather than directly under the images to utilize whitespace effectively.

### Input Fields
Inputs are minimalist: a single 1px off-white line at the bottom (underline style) that glows Gold when focused. Placeholder text should be in a light grey with high letter spacing.