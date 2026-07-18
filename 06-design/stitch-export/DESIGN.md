---
name: Stealth Writer AI
colors:
  surface: '#fdf9ed'
  surface-dim: '#dedace'
  surface-bright: '#fdf9ed'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3e7'
  surface-container: '#f2eee2'
  surface-container-high: '#ece8dc'
  surface-container-highest: '#e6e2d6'
  on-surface: '#1d1c15'
  on-surface-variant: '#484740'
  inverse-surface: '#323129'
  inverse-on-surface: '#f5f1e4'
  outline: '#78776f'
  outline-variant: '#c9c6bd'
  surface-tint: '#5f5f57'
  primary: '#5f5f57'
  on-primary: '#ffffff'
  primary-container: '#f5f2e8'
  on-primary-container: '#6f6e66'
  inverse-primary: '#c9c6bd'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#506358'
  on-tertiary: '#ffffff'
  tertiary-container: '#e2f7e9'
  on-tertiary-container: '#5f7267'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2d9'
  primary-fixed-dim: '#c9c6bd'
  on-primary-fixed: '#1c1c16'
  on-primary-fixed-variant: '#484740'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#d2e8da'
  tertiary-fixed-dim: '#b6ccbe'
  on-tertiary-fixed: '#0d1f17'
  on-tertiary-fixed-variant: '#384b41'
  background: '#fdf9ed'
  on-background: '#1d1c15'
  surface-variant: '#e6e2d6'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.8'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  max-content-width: 1200px
  text-width: 680px
---

## Brand & Style
The design system is built upon a philosophy of **Minimalist Editorialism**. It transforms a technical AI writing tool into a sophisticated digital atelier. The target audience—professional writers, editors, and researchers—expects a focused environment that prioritizes clarity over ornamentation. 

The aesthetic draws from high-end print magazines and traditional typesetting:
- **Minimalism:** Use of extreme negative space to drive focus toward the manuscript.
- **Micro-interactions:** Transitions should be instantaneous yet soft, mimicking the physical act of turning a page or ink settling on paper.
- **Grain & Texture:** A constant, subtle noise texture is applied to the background to eliminate the "digital sterile" feel, providing a tactile, organic quality.

## Colors
The palette is centered on high-legibility and eye comfort for long-form writing sessions.
- **Primary (#F5F2E8):** A warm, parchment-inspired off-white. This is the global background color.
- **Secondary (#1A1A1A):** A deep charcoal used for all primary text, headings, and iconography.
- **Tertiary/Accent (#768A7E):** A muted Sage Green used exclusively for primary calls-to-action, success states, or active indicators. Use sparingly to maintain the editorial vibe.
- **Neutral (#E8E4D8):** A slightly darker shade of the parchment used for subtle borders and secondary surface containers.

## Typography
The typography system relies on the interplay between a classic Serif and a utilitarian Sans. 

- **Headings:** Utilize **Playfair Display**. Tighten the letter-spacing on larger sizes to create a "locked-in" editorial look.
- **Body:** Utilize **Inter**. Body text requires generous line heights (1.6 to 1.8) and slight positive tracking (letter-spacing) to ensure the technical AI interface feels as readable as a novel.
- **Labels:** Small labels and navigational items should be set in Inter, Medium weight, with uppercase styling and increased letter spacing to differentiate them from the manuscript text.

## Layout & Spacing
This design system uses a **Fixed Grid** approach for content containers but a fluid approach for typography-heavy sections.

- **The Manuscript View:** Centered layout with a restricted max-width of 680px for the text column to optimize the measure (characters per line).
- **Margins:** Large 64px margins on desktop to enforce the sense of "luxury space" found in premium broadsheets.
- **Spacing Rhythm:** Use multiples of 4px. Between different sections of text, use larger "Macro" gaps (e.g., 80px or 120px) to allow the eye to rest before moving to the next module.
- **Grid:** A 12-column grid is used for the dashboard views, with 24px gutters.

## Elevation & Depth
In alignment with the editorial style, traditional shadows are prohibited. Depth is achieved through **Fine Outlines** and **Tonal Layering**:

- **Borders:** Use 1px solid lines in the "Neutral" color (#E8E4D8) to separate UI modules. 
- **Layers:** Use subtle shifts in background color (from Primary to Neutral) to indicate a nested element or a sidebar.
- **Active State:** When an element is focused (like a text input), the border should transition to the "Secondary" charcoal color (#1A1A1A).
- **No Blurs:** Avoid all backdrop blurs or frosted glass effects; the interface should feel opaque and solid.

## Shapes
The shape language is strictly **Sharp (0)**. 
- All buttons, input fields, and cards utilize 0px border-radius. 
- The sharp corners mirror the edges of a physical piece of paper and reinforce a professional, architectural aesthetic.
- Avoid circular elements except for very small functional indicators (like status dots).

## Components
- **Buttons:** Primary buttons are solid Charcoal (#1A1A1A) with Paper (#F5F2E8) text. Secondary buttons are outlined in 1px Charcoal with no fill. There is no rounding.
- **Inputs:** Input fields are indicated by a single 1px bottom border rather than a full box, mimicking a signature line or a ledger.
- **Cards:** Cards have no shadow. They are defined by a 1px border in the Neutral shade or a slight tonal shift in background.
- **Chips/Labels:** Small, sharp-edged boxes with 1px borders. Use the Sage Green accent for "AI Processed" or "Verified" statuses.
- **Stealth Indicators:** For AI-specific features (like ghostwriting suggestions), use text in a lower-opacity Charcoal (60%) that "inks" into full opacity when hovered.