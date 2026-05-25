# Design System: Max & Vika Wedding

> Category: Personal / Life event
> Bilingual (EN + UA) wedding site for Max & Victoria.
> Venue: Vinha Boutique Hotel, Vila Nova de Gaia, Portugal. Date: September 13, 2026.

## 1. Visual Theme & Atmosphere

The site should feel like opening a well-made envelope: warm paper, quiet type, and one elegant detail that makes you pause. This is not a platform, not a product, not a brand play. It is a personal invitation extended to people the couple actually knows. The design earns trust through restraint.

The current maxvika.life achieves this with an almost monochrome palette (cream + charcoal + gold) and Cormorant Garamond at weight 300. The typography does nearly all the work: enormous serif headlines, spaced-out sans labels, and generous whitespace where lesser sites would put ornament. That restraint is the spirit to keep.

What evolves: the gold accent is demoted to a functional role (dates, times, digits), replaced by a muted sage green that connects the design to the vineyard venue and the natural world. A blush rose enters as a secondary warmth for confirmation states and subtle interactive moments. The neutrals gain a warm olive-brown cast to harmonize with the sage. The result is a site that reads as: warm, natural, considered. Not Pinterest-wedding-template. Not SaaS-landing-page. A well-set table.

**Key characteristics:**

- Cormorant Garamond serif at weight 300 for all display type: airy, architectural, never heavy
- Montserrat geometric sans for body, labels, nav: precise, modern, wide-tracked when uppercase
- Sage green (`oklch(58% 0.09 155)`) as the singular accent: botanical, muted, never neon
- Cream canvas (`oklch(97.5% 0.007 80)`) that reads as quality paper stock, not as generic warm-beige AI-slop
- Zero shadows, zero gradients (except photo scrims), near-zero border-radius
- Full Cyrillic coverage for Ukrainian language support
- Photographs carry the color story: the UI is the envelope, the photos are the letter

## 2. Color Palette & Roles

All values specified in OKLch for perceptual uniformity. Hex approximations provided for reference.

### Core Tokens (bind to `:root`)

| Token       | OKLch                   | Hex approx | Role                                                                 |
| ----------- | ----------------------- | ---------- | -------------------------------------------------------------------- |
| `--bg`      | `oklch(97.5% 0.007 80)` | #f9f6f2    | Page canvas. Warm cream, like a heavy cotton invitation stock.       |
| `--surface` | `oklch(99% 0.004 80)`   | #fdfcfa    | Elevated areas: cards, nav glass, modals. Barely off-white.          |
| `--fg`      | `oklch(25% 0.015 55)`   | #302a24    | Primary text. Warm charcoal with olive-brown cast, never pure black. |
| `--muted`   | `oklch(52% 0.02 55)`    | #76685d    | Secondary text, captions, placeholders. Same warm family as fg.      |
| `--border`  | `oklch(88% 0.012 70)`   | #ddd5cc    | Hairlines, dividers, card edges. Warm, not grey.                     |
| `--accent`  | `oklch(58% 0.09 155)`   | #5d9a73    | Sage green. Primary accent: eyebrows, CTAs, active states.           |

### Extended Tokens

| Token            | OKLch                                                 | Hex approx | Role                                                                |
| ---------------- | ----------------------------------------------------- | ---------- | ------------------------------------------------------------------- |
| `--accent-soft`  | `color-mix(in oklch, var(--accent) 14%, transparent)` | —          | Tinted background for pills, hover fills, tag backgrounds           |
| `--accent-hover` | `oklch(52% 0.10 155)`                                 | #4d8a63    | Sage darkened for hover/pressed on accent buttons                   |
| `--accent-blush` | `oklch(76% 0.05 15)`                                  | #c9a09e    | Blush rose: RSVP confirmation, subtle hover warmth, divider accents |
| `--accent-gold`  | `oklch(74% 0.10 75)`                                  | #b89e60    | Gold: dates, times, countdown digits, numerical highlights          |
| `--fg-soft`      | `color-mix(in oklch, var(--fg) 6%, transparent)`      | —          | Table row hover, subtle background tint                             |

### Semantic Colors

| Purpose | Token       | Value                 | Notes                                               |
| ------- | ----------- | --------------------- | --------------------------------------------------- |
| Success | `--success` | `oklch(62% 0.12 150)` | RSVP confirmed: uses a slightly more saturated sage |
| Error   | `--error`   | `oklch(58% 0.14 22)`  | Form validation: muted rose-red, not alarming       |
| Info    | `--info`    | `oklch(58% 0.08 240)` | Informational notes: quiet blue-grey                |

### Palette Rules

1. **Sage is the singular accent.** One CTA accent per screen, used at most twice (eyebrow + primary button). Three usages on one screen means one must be demoted.
2. **Blush never backgrounds a section.** It appears in hover tints, confirmation badges, and as a subtle rule-break in dividers. Never as a hero fill or card wash.
3. **Gold is functional, not decorative.** Countdown digits, dates ("13 . 09 . 26"), time callouts ("1:00 PM"). Never on buttons, headings, or links.
4. **No pure black or pure white.** The warmest the palette goes is `--fg` at oklch(25%); the lightest is `--surface` at oklch(99%). This keeps the cream canvas believable.
5. **Photographs supply the saturation.** The couple's photos, the venue, the landscape of Porto: these are the color source. The UI stays neutral enough to frame anything.

## 3. Typography Rules

### Font Families

**Display (serif):**

```
'Cormorant Garamond', Georgia, 'Times New Roman', serif
```

Loaded via Google Fonts at weights 300, 400. Full Cyrillic subset included (unicode-range U+301, U+400-45F, U+490-491, U+4B0-4B1). This is the emotional voice of the site: light, architectural, elegant without being fussy.

**Body (sans-serif):**

```
'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, sans-serif
```

Loaded at weights 400, 500. Full Cyrillic subset. Geometric precision at small sizes, wide-tracking capability for uppercase labels, excellent digit clarity for the countdown.

**Mono (metadata):**

```
ui-monospace, 'SF Mono', 'JetBrains Mono', Menlo, Monaco, Consolas, monospace
```

System mono stack. Used for dates, tracking numbers, metadata captions, countdown digits. Tabular-nums enabled for alignment.

### Type Scale

| Token          | Size                       | Weight | Line-height | Family  | Use                                          |
| -------------- | -------------------------- | ------ | ----------- | ------- | -------------------------------------------- |
| `--fs-hero`    | `clamp(48px, 7vw, 96px)`   | 300    | 1.0         | Display | Couple names on hero                         |
| `--fs-h1`      | `clamp(36px, 5vw, 64px)`   | 300    | 1.05        | Display | Section titles ("Our Story", "Details")      |
| `--fs-h2`      | `clamp(28px, 3.5vw, 40px)` | 400    | 1.15        | Display | Subsection headings ("Vinha Boutique Hotel") |
| `--fs-h3`      | `22px`                     | 500    | 1.3         | Body    | Card headings, bold labels                   |
| `--fs-lead`    | `19px`                     | 400    | 1.55        | Body    | Subheads, intro paragraphs                   |
| `--fs-body`    | `16px`                     | 400    | 1.6         | Body    | Running text                                 |
| `--fs-small`   | `14px`                     | 400    | 1.5         | Body    | Captions, secondary body                     |
| `--fs-meta`    | `12px`                     | 500    | 1.5         | Mono    | Dates, tags, metadata                        |
| `--fs-eyebrow` | `11px`                     | 500    | 1.0         | Body    | Uppercase labels with 0.2em tracking         |

### Tracking Tiers

| Context          | `letter-spacing` | Notes                                             |
| ---------------- | ---------------- | ------------------------------------------------- |
| Body text        | `0`              | Default. Montserrat reads well untouched.         |
| Section headings | `-0.01em`        | Slight tightening on serif at large sizes         |
| Nav links        | `0.12em`         | Opens up Montserrat for nav clarity               |
| Labels/eyebrows  | `0.2em`          | The luxury/invitation register. Always uppercase. |
| Hero date        | `0.15em`         | "13 . 09 . 26" with inner dots + tracking         |

### Principles

- **Two weights per family, maximum.** Cormorant: 300 (display default) and 400 (emphasis). Montserrat: 400 (body) and 500 (labels, buttons). Weight 600+ in either family would feel heavy against the cream canvas.
- **Serif at large sizes only.** Cormorant below 22px loses its architectural quality and reads as small-print legal copy. Below the H2 threshold, switch to Montserrat.
- **Soft black, never hard.** Title text at `oklch(25%)` reads as ink-on-paper, not screen-on-face.
- **Mono for temporal data.** Countdown, dates, times, RSVP codes. The shift to monospace signals "this is information" versus "this is narrative."
- **Ukrainian text uses the same scale.** Cyrillic Cormorant Garamond has the same metrics as the Latin subset. No per-language overrides needed; the unicode-range subsetting handles glyph loading.

## 4. Component Stylings

### Buttons

**Primary (sage fill)**

- Background: `var(--accent)` (sage)
- Text: `var(--surface)` (near-white)
- Padding: `14px 28px`
- Border-radius: `6px`
- Font: Montserrat 500, 14px, tracking 0.08em, uppercase
- Hover: background shifts to `var(--accent-hover)` (darker sage)
- Active: `translateY(1px)`
- No shadow

**Secondary (outlined)**

- Background: transparent
- Border: `1px solid var(--fg)`
- Text: `var(--fg)`
- Same padding, radius, font as primary
- Hover: `background: var(--fg); color: var(--surface)` (inverts)

**Ghost (text-only)**

- Background: transparent
- Border: none
- Text: `var(--muted)`
- Padding: `8px 4px`
- Hover: `color: var(--accent)`

**RSVP Button (special case)**

- Uses primary styling (sage fill) by default
- Confirmation state: background shifts to `var(--accent-blush)` with text "Thank You"

### Navigation

- Fixed position, top 0
- Background: `color-mix(in oklch, var(--bg) 92%, transparent)` with `backdrop-filter: blur(12px)`
- Border-bottom: `1px solid var(--border)`
- Logo center: Cormorant Garamond, 24px, weight 300, tracking 0.05em. "M&V" monogram.
- Links left/right: Montserrat 12px, weight 500, tracking 0.2em, uppercase, color `--muted`
- Link hover: color shifts to `--fg`
- Language toggle: `11px`, bordered pill, `border: 1px solid var(--border)`, radius 4px
- RSVP link right-aligned: secondary button styling (outlined, uppercase)
- Mobile: hamburger (three 1px lines, 24px wide), opens full-screen overlay

### Cards

- Background: `var(--surface)`
- Border: `1px solid var(--border)` (optional: omit for flush photo cards)
- Border-radius: `4px` (or 0 when image is flush to edge)
- Padding: `24px` (text cards), `0` (photo cards where image bleeds to edge)
- No shadow. Separation comes from the cream-to-surface color contrast.
- Hover: none by default (this is not a marketplace). If interactive (e.g., gallery thumbnail), subtle `opacity: 0.92` on the image.

### Form Fields (RSVP)

- Background: `var(--surface)`
- Border: `1px solid var(--border)`
- Border-radius: `4px`
- Padding: `14px 16px`
- Font: Montserrat 400, 15px
- Placeholder: `var(--muted)` at 400 weight
- Focus: `border-color: var(--accent); outline: 2px solid var(--accent-soft)`
- Label: Montserrat 500, 12px, tracking 0.08em, uppercase, `var(--muted)`
- Error state: `border-color: var(--error)`, error text below in `--error` at 13px
- Textarea: same styling, min-height 96px, resize vertical

### Radio / Selection (RSVP attending)

- Custom radio presented as selectable cards
- Unselected: `border: 1px solid var(--border)`, background transparent
- Selected: `border: 1px solid var(--fg)`, subtle `var(--fg-soft)` background tint
- Label inside: Cormorant Garamond 400, 18px (e.g., "Joyfully Accept" / "Regretfully Decline")

### Countdown Timer

- Four units: Days, Hours, Minutes, Seconds
- Number: Cormorant Garamond 300, `clamp(36px, 5vw, 56px)`, color `var(--fg)`
- Label: Montserrat 500, 10-12px, tracking 0.2em, uppercase, `var(--muted)`
- Separated by generous gap (48-64px)
- Digits update via JS; on initial load, opacity transitions from 0 to 1

### Tags / Pills

- Background: `var(--accent-soft)`
- Text: `var(--accent)`
- Padding: `4px 12px`
- Border-radius: `999px` (pill)
- Font: Mono, 11px, tracking 0.04em, uppercase
- Use: section labels, category markers on schedule items

### Photo Containers

- Images never have border-radius (they bleed edge-to-edge within their container or crop to the container's shape)
- Aspect ratios: `4:5` for portraits, `16:9` for landscapes, `1:1` for gallery grid
- Loading: lazy, with a warm cream placeholder until loaded
- Overlay for text-on-photo sections: `linear-gradient(rgba(44,42,36,0.4), rgba(44,42,36,0.15))` matching the warm fg cast

### Dividers

- Default: `1px solid var(--border)` (warm hairline)
- Section separator: `border-top` on `.section + .section`
- Accent rule (rare): `1px solid var(--accent-blush)` for a single decorative moment

## 5. Layout Principles

### Spacing System (8pt grid)

Base unit: 8px. Common stops: `4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64`.

| Token       | Value | Use                                          |
| ----------- | ----- | -------------------------------------------- |
| `--gap-xs`  | 8px   | Tight spacing: inside form groups, icon gaps |
| `--gap-sm`  | 12px  | Label-to-input, small component spacing      |
| `--gap-md`  | 20px  | Default content spacing, paragraph gaps      |
| `--gap-lg`  | 32px  | Between card groups, nav elements            |
| `--gap-xl`  | 56px  | Section internal padding, major breaks       |
| `--gap-2xl` | 96px  | Between major page sections                  |

### Section Rhythm

Sections alternate between the cream canvas and warm-white backgrounds, with `clamp(64px, 10vw, 120px)` vertical padding. Each section is a self-contained block with its own internal composition.

Recommended page rhythm:

1. Hero (full-viewport, photo overlay, couple names + date + countdown)
2. Details (split: photo left, venue info right)
3. CTA band (text-on-photo: "Join Us" + RSVP button)
4. Our Story (editorial: alternating text + photo)
5. Travel & Stay (cards or stacked info blocks)
6. RSVP (centered form)
7. Footer (minimal: questions + nav links + monogram)

### Container

- Max width: `1120px`
- Page gutter: `32px` desktop, `20px` tablet, `16px` mobile
- Hero sections: full-bleed (no container constraint on background)
- Content within hero: constrained to `max-width: 640px` centered

### Grid

- Two-column layouts: `grid-template-columns: 1fr 1fr` with `gap: 48-64px`
- Photo + text splits: image takes full height of the grid cell, content aligns center
- Gallery: CSS grid with `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))`
- All grids collapse to single-column below 768px

## 6. Depth & Elevation

Two levels. This site is almost entirely flat.

| Level     | Treatment                                      | Use                                                    |
| --------- | ---------------------------------------------- | ------------------------------------------------------ |
| Flat (0)  | No shadow                                      | Default for everything: cards, buttons, sections, nav. |
| Glass (1) | `backdrop-filter: blur(12px)` + translucent bg | Sticky navigation only.                                |

**There is no shadow level.** Depth in this system comes from:

1. The cream-to-surface color step (bg → surface = canvas → card)
2. The 1px warm border on surfaces that need separation
3. Generous whitespace around elements

Do not add `box-shadow` to any element. Not even subtle ones. The warmth of the palette already provides visual lift.

## 7. Do's and Don'ts

### Do

- Use sage green as the singular accent. Budget it: eyebrow + CTA per screen.
- Set display type in Cormorant Garamond at weight 300. The lightness IS the elegance.
- Wide-track uppercase Montserrat for labels: 0.2em tracking, weight 500. This is the invitation register.
- Let photos carry the color story. The couple's photos, the venue, Porto's light.
- Use cream canvas from the palette. It reads as paper stock, not as generic warm-beige.
- Mono stack for temporal data: countdown, dates, RSVP codes.
- Provide equal-quality experiences in English and Ukrainian. Same scale, same weight, same hierarchy.
- Center the couple's names. "Max & Victoria" (or "Макс & Вікторія") is always the biggest thing on the page.
- Use the `4:5` portrait ratio for couple photos. It echoes the aspect ratio of a held phone in portrait.
- Animate entrance sequences with staggered opacity + translateY. Subtle, 200-500ms delays.

### Don't

- Don't use sage as a page-wash background. It's an accent, not a canvas.
- Don't use blush/rose as a primary CTA color. Blush is warmth, not action.
- Don't set Cormorant Garamond bold (weight 600+). The font loses its architectural quality and turns fussy.
- Don't add shadows to cards or buttons. This palette provides depth through color, not elevation.
- Don't use gradients on any surface (the only exception: photo overlay scrims for text legibility).
- Don't use stock wedding imagery (rings on flowers, sunset beach walks, venue establishing shots from Shutterstock). Use the couple's own photos or honest grey placeholders.
- Don't use script/calligraphic fonts for the couple's names. Cormorant at 300 already achieves that elegance.
- Don't center-align body text. Only hero headlines, date, and countdown are centered. Body text is left-aligned.
- Don't use emoji as decorative elements. No hearts, no champagne glasses, no ring emoji.
- Don't create a Pinterest-style mood board as a page section. This is a wedding invitation, not a planning tool.
- Don't use gold as a button color. Gold is for digits and timestamps.
- Don't add a dark mode. A wedding invitation is cream paper with dark ink. There is one mode.
- Don't use Inter, Roboto, or system sans as a display face. Montserrat is the body sans. Cormorant is the display serif. Those are the two.

## 8. Responsive Behavior

### Breakpoints

| Name    | Width      | Layout changes                                             |
| ------- | ---------- | ---------------------------------------------------------- |
| Mobile  | < 640px    | Single column, hamburger nav, reduced hero type            |
| Tablet  | 640-1024px | Two-column grids hold, nav links visible, type scales down |
| Desktop | > 1024px   | Full layout, all nav visible, max container width engaged  |

### Collapsing Strategy

- **Hero**: type scales via `clamp()` from 48px to 96px. Countdown stays horizontal at all sizes (4 units in a row, gaps reduce from 64px to 32px).
- **Details section**: two-column (photo + info) on desktop, stacks to photo-on-top on mobile.
- **Navigation**: horizontal nav links hidden on mobile, replaced by hamburger. Logo stays centered. Language toggle and RSVP persist on mobile (in the overlay).
- **RSVP form**: max-width 560px, centered. Fields stack vertically at all sizes.
- **Gallery**: auto-fill grid collapses naturally from 3-4 columns to 2 to 1.
- **Footer**: three-column layout collapses to centered stack on mobile.

### Touch Targets

- Minimum 44px hit target on mobile. Nav links in the hamburger overlay: `padding: 16px 0`, full-width tap area.
- Buttons: minimum height 48px on mobile (the 14px vertical padding + 14px text achieves this).
- Form fields: minimum height 48px (the 14px padding + 16px text achieves this).

### Type at Mobile

- Hero display does not go below 48px (the `clamp()` floor).
- Body stays at 16px. Never shrink body text on mobile.
- Eyebrow stays at 11px. Below this, uppercase tracked text becomes illegible.

## 9. Agent Prompt Guide

### Quick Color Reference

- Accent (sage): `oklch(58% 0.09 155)` / `#5d9a73`
- Accent hover: `oklch(52% 0.10 155)` / `#4d8a63`
- Blush: `oklch(76% 0.05 15)` / `#c9a09e`
- Gold: `oklch(74% 0.10 75)` / `#b89e60`
- Canvas: `oklch(97.5% 0.007 80)` / `#f9f6f2`
- Surface: `oklch(99% 0.004 80)` / `#fdfcfa`
- Foreground: `oklch(25% 0.015 55)` / `#302a24`
- Muted: `oklch(52% 0.02 55)` / `#76685d`
- Border: `oklch(88% 0.012 70)` / `#ddd5cc`

### Quick Type Reference

- Display: `'Cormorant Garamond', Georgia, serif` at 300 / 400
- Body: `'Montserrat', system-ui, sans-serif` at 400 / 500
- Mono: `ui-monospace, 'SF Mono', Menlo, monospace`
- Hero: clamp(48px, 7vw, 96px) at weight 300
- Section titles: clamp(36px, 5vw, 64px) at weight 300
- Body: 16px at weight 400
- Eyebrow: 11px, uppercase, 0.2em tracking, sage color

### Component One-Liners

- Primary CTA: `background: var(--accent); color: var(--surface); border-radius: 6px; padding: 14px 28px; font: 500 14px/1 'Montserrat'; text-transform: uppercase; letter-spacing: 0.08em;`
- Secondary CTA: `background: transparent; border: 1px solid var(--fg); color: var(--fg); border-radius: 6px; padding: 14px 28px;`
- Nav bar: `position: fixed; background: color-mix(in oklch, var(--bg) 92%, transparent); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border);`
- Card: `background: var(--surface); border: 1px solid var(--border); border-radius: 4px; padding: 24px;`
- Input: `background: var(--surface); border: 1px solid var(--border); border-radius: 4px; padding: 14px 16px; font: 400 15px 'Montserrat';`
- Pill: `background: var(--accent-soft); color: var(--accent); border-radius: 999px; padding: 4px 12px; font: 500 11px/1 ui-monospace; text-transform: uppercase;`
- Photo overlay scrim: `linear-gradient(rgba(48,42,36,0.4), rgba(48,42,36,0.15))`

### Iteration Guide

1. **Start from the couple's names.** "Max & Victoria" in Cormorant 300 at hero scale. If that looks right, the system is working.
2. **Sage once, sage twice, stop.** Eyebrow color + primary CTA fill. That is the accent budget.
3. **Warm your greys.** Reach for `var(--muted)` (oklch 52%, warm olive-brown) before reaching for any neutral hex.
4. **Photos first.** Drop the couple's photo into the layout before writing surrounding copy. The photo is the content; everything else frames it.
5. **Wide tracking is your luxury signal.** 0.2em on uppercase Montserrat reads as engraved stationery.
6. **Test in both languages.** Switch to Ukrainian and verify the same hierarchy holds. Cyrillic Cormorant at 300 should read just as elegantly as Latin.
7. **One animation per section.** Fade-in with translateY on entry, staggered 200-500ms. No bouncing, no spinning, no parallax.
