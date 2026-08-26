---
name: Ethereal Union
colors:
  surface: '#fff8f7'
  surface-dim: '#e1d8d7'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf1f1'
  surface-container: '#f5eceb'
  surface-container-high: '#efe6e5'
  surface-container-highest: '#e9e0e0'
  on-surface: '#1f1b1b'
  on-surface-variant: '#504444'
  inverse-surface: '#342f2f'
  inverse-on-surface: '#f8efee'
  outline: '#827473'
  outline-variant: '#d4c2c2'
  surface-tint: '#7b5455'
  primary: '#7b5455'
  on-primary: '#ffffff'
  primary-container: '#f4c2c2'
  on-primary-container: '#734e4e'
  inverse-primary: '#ecbaba'
  secondary: '#967c61'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#486456'
  on-tertiary: '#ffffff'
  tertiary-container: '#b6d5c3'
  on-tertiary-container: '#415d4f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad9'
  primary-fixed-dim: '#ecbaba'
  on-primary-fixed: '#2f1314'
  on-primary-fixed-variant: '#613d3e'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#caead7'
  tertiary-fixed-dim: '#afcebc'
  on-tertiary-fixed: '#042015'
  on-tertiary-fixed-variant: '#314c3f'
  background: '#fff8f7'
  on-background: '#1f1b1b'
  surface-variant: '#e9e0e0'
  powder-pink: '#F4C2C2'
  real-gold: '#D4AF37'
  charcoal-text: '#1B1C1B'
  neon-glow: '#FFF0F5'
  surface-warm: '#FBF9F7'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  neon-invitation:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 56px
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
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
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter-desktop: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 120px
  container-max: 1200px
---

## Brand & Style

This design system is a sophisticated evolution of "quiet luxury," blending the structural logic of **Material 3** with a **Minimalist and Editorial** aesthetic. It is specifically tailored for premium wedding experiences, evoking an emotional response that is timeless, romantic, and deeply personal.

The visual narrative is built on a "Modern Classic" foundation, utilizing generous whitespace and precise alignment to create an atmosphere of order and elegance. The design style is primarily **Minimalist**, but it introduces a **Neon-Calligraphic** edge for specific high-impact moments, creating a bridge between traditional luxury and contemporary digital artistry.

**Design Principles:**
- **Editorial Presence:** High-contrast layouts and large-scale serif typography mimic the pacing of a bespoke wedding magazine.
- **Luminous Accents:** Use light-based effects (neon glows and metallic reflections) to highlight key emotional anchors like the couple's names or invitation text.
- **Refined Materiality:** Elements should feel like physical artifacts—textured paper, metallic foil, and glowing glass.

## Colors

The palette transitions to a romantic yet high-contrast scheme centered on "Powder Pink" and "Real Gold."

- **Powder Pink (#F4C2C2):** The primary chromatic driver. Used for subtle containers, accents, and soft backgrounds. It provides a warm, approachable romanticism.
- **Real Gold (#D4AF37):** A metallic-inspired secondary color. Reserved for "jewelry" elements: icons, dividers, buttons, and calligraphic highlights.
- **Charcoal Text (#1B1C1B):** The neutral anchor. Used for primary body text and headlines to ensure high-contrast readability against light surfaces.
- **Surface Warm (#FBF9F7):** The main canvas. This off-white base prevents the digital "starkness" of pure white, feeling more like premium stationery.

**Neon Stylized Effect:**
For wedding invitations and hero text, a "Neon Glow" is applied using a multi-layered shadow technique:
- **Base:** Real Gold or Powder Pink text.
- **Outer Glow:** A soft, diffused drop-shadow using `#FFF0F5` (Neon Glow) with a 10px-20px blur radius at 60% opacity.

## Typography

This system utilizes a classic Serif/Sans-Serif pairing to communicate both historical weight and modern clarity.

- **Playfair Display (Headlines & Invitation):** The primary voice for all display text. It carries the "expensive" editorial character.
- **Inter (Body & UI):** Ensures maximum legibility for logistics, schedules, and form inputs.

**Neon Stylized Text Style:**
The `neon-invitation` level is used specifically for the names of the couple and the "You are invited" headers. It should be rendered in **Real Gold** with a subtle italic tilt. Apply a CSS text-shadow using the **Neon Glow** color to create the soft atmospheric illumination requested.

**Rhythm:**
- Always use `label-lg` for section eyebrow text (e.g., "THE CEREMONY") in all-caps with the specified 0.1em letter spacing.
- Body text should always be **Charcoal Text** to maintain the high-contrast accessibility requirement.

## Layout & Spacing

The layout philosophy follows a **fixed grid** model for desktop to ensure the editorial compositions remain perfectly balanced.

- **Grid Model:** A 12-column grid (1200px max) for desktop; a 4-column fluid grid for mobile.
- **Sectioning:** Significant vertical spacing (`section-gap`) is used to allow each phase of the wedding narrative to be consumed without distraction.
- **Reflow:** Content should stack vertically on mobile. Hero imagery should shift from a wide aspect ratio to a 3:4 portrait ratio to maximize the impact of photography on mobile screens.
- **Alignment:** While body text is left-aligned for readability, display titles and the Neon Stylized Invitation text should be center-aligned to evoke the formal structure of a physical invitation card.

## Elevation & Depth

In alignment with Material 3, hierarchy is achieved through **Tonal Layers** rather than aggressive shadows.

- **Surfaces:** The background is Elevation 0 (`Surface Warm`).
- **Cards:** Use Elevation 1 with a highly diffused, low-opacity shadow (4% opacity Charcoal) to create a "paper-on-linen" effect.
- **Glassmorphism:** For the Neon Stylized sections, use a very subtle backdrop blur (4px) on containers to suggest a frosted glass texture.
- **Neon Depth:** Unlike traditional UI elevation, the "depth" of neon text is achieved through glow intensity rather than shadow distance. The glow should feel as if it is illuminating the surface behind it.

## Shapes

The shape language is **Soft (0.25rem base)**, prioritizing a structured, formal appearance over the high-roundness of casual apps.

- **Small Elements (Buttons, Chips):** Use `rounded-sm` (4px) to maintain a crisp, precise editorial look.
- **Containers (Cards, Modals):** Use `rounded-lg` (8px) for a gentle but defined containment.
- **Imagery:** Photos should remain sharp-cornered (0px) or use a very minimal 4px radius to feel like printed photographs.

## Components

### Buttons
- **Primary:** Powder Pink background with Charcoal text. 4px radius. High emphasis.
- **Secondary:** Real Gold outline (1.5px) with Charcoal text. Used for "RSVP" or "Add to Calendar."
- **Tertiary:** Charcoal text with a Real Gold bottom border (1px) that expands on hover.

### Neon Invitation Card
A specialized component for the digital invite.
- **Background:** White with a subtle Powder Pink gradient (top-to-bottom).
- **Typography:** Uses `neon-invitation` style for names.
- **Border:** A double-line border in Real Gold (0.5px and 1.5px thickness).

### Cards
- **Construction:** Elevation 1, White background, 8px radius.
- **Detailing:** Include a 1px internal border in 5% opacity Real Gold to give a subtle "gilt edge" effect.

### Input Fields
- Outlined style. 1px Charcoal border (20% opacity). On focus, the border becomes Real Gold (100% opacity) with a soft glow effect.

### Chips (RSVP Status / Role)
- **Groom/Bride Labels:** Powder Pink background, Charcoal text, pill-shaped, 12px Inter Bold.
- **Guest Labels:** Surface-container-high background with Charcoal text.

### Timeline
- A vertical Real Gold line (1px).
- Nodes are small 8px circles in Real Gold, which "bloom" into a soft pink glow when the user scrolls to that event.
