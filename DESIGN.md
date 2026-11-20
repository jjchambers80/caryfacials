---
name: caryfacials.com
description: A Cary skin consultation card for Román Skin & Body, set in the spa's own ivory, olive and charcoal.
colors:
  ivory: "#F8F6F2"
  paper: "#FFFFFF"
  ink: "#3D4246"
  ink-deep: "#24282A"
  olive-brand: "#6D796E"
  olive-ink: "#5B665C"
  olive-ink-deep: "#4A544B"
  mist: "#E9EDE6"
  rule: "#D9D4CA"
  foot-mist: "#D7DAD3"
typography:
  display:
    fontFamily: "Cormorant, Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.6rem, 9vw + .5rem, 4.75rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Cormorant, Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2rem, 4vw + 1rem, 3rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Cormorant, Cormorant Garamond, Georgia, serif"
    fontSize: "1.6rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  menu-name:
    fontFamily: "Cormorant, Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.9rem, 5vw, 2.6rem)"
    fontWeight: 500
    lineHeight: 1.05
  wordmark:
    fontFamily: "Cormorant, Cormorant Garamond, Georgia, serif"
    fontSize: "1.45rem"
    fontWeight: 600
    lineHeight: 1
  body:
    fontFamily: "Jost, Futura, Avenir Next, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Jost, Futura, Avenir Next, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.6
  meta:
    fontFamily: "Jost, Futura, Avenir Next, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
rounded:
  none: "0px"
  hairline: "2px"
  pill: "999px"
spacing:
  gutter-sm: "16px"
  gutter-md: "32px"
  gutter-lg: "max(40px, calc((100vw - 1200px) / 2))"
  row: "18px"
  section: "48px"
  section-lg: "72px"
  column-gap: "56px"
components:
  button-primary:
    backgroundColor: "{colors.olive-ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.hairline}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.olive-ink-deep}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.hairline}"
    padding: "0 24px"
    height: "52px"
  button-ink-hover:
    backgroundColor: "{colors.ink-deep}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.hairline}"
    padding: "0 24px"
    height: "52px"
  button-line-hover:
    backgroundColor: "{colors.mist}"
  pill:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  pill-hover:
    backgroundColor: "{colors.mist}"
  pill-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  consult-card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.none}"
  consult-option:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "13px 16px 13px 48px"
    height: "52px"
  consult-option-selected:
    backgroundColor: "{colors.olive-ink}"
    textColor: "{colors.paper}"
  result-panel:
    backgroundColor: "{colors.olive-ink}"
    textColor: "{colors.paper}"
    padding: "18px 16px 20px"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
---

# Design System: caryfacials.com

## Overview

**Creative North Star: "The Consultation Card"**

The site behaves like the intake card an esthetician hands a new client: a white sheet on an ivory counter, ruled with warm hairlines, where the client marks one answer and the matching care appears beneath it. Everything else is the printed spa menu that follows: treatment names set large in Cormorant, minutes and prices in plain tabular figures, hairlines between rows. The palette and type are the Román Skin & Body identity (ivory, olive, charcoal; Cormorant over Jost), carried over from the spa's own site rather than reinvented.

Density is calm but not sparse. Pages are single-column on phones, with the booking action in reach in every section, and open to two columns at 900px. Depth comes from hairlines and tonal panels, not shadow; only the consultation card lifts. Photography is always the studio's own: its entrance, Betty Román's facial room, Betty herself, a facial in progress, and the house product line.

**Key Characteristics:**
- Ivory ground, white card, olive answer: three surface tones carry the whole hierarchy.
- Menu-board structure: charcoal hairlines over treatment rows, Cormorant names, tabular minutes and prices.
- One lifted surface (the consultation card); everything else is flat.
- Square cards and photos, 2px buttons, full pills only in the header.
- A single motion: the result panel rises and fades in when a goal is chosen.

## Colors

A warm, low-chroma spa palette: ivory paper, a grey-green olive that marks choice and action, and a cool charcoal ink.

### Primary
- **Studio Olive Ink** (`olive-ink`): the working olive. Fills the selected consultation option, the result panel and the primary Book button; sets small supporting text (bylines, hints, breadcrumbs, minutes, notes, price ranges). Also the focus ring, caret and selection colour.
- **Studio Olive, brand** (`olive-brand`): the spa's published brand olive. At 4.2:1 on ivory it fails AA for body text, so it is reserved for large type and decoration; the shipped build declares it but does not apply it anywhere yet.

### Secondary
- **Charcoal Ink** (`ink`): all body text, menu-board hairlines, the outline and solid header pills, the Book button inside the olive result panel, and the footer ground.

### Neutral
- **Román Ivory** (`ivory`): page ground everywhere; the sticky header is the same ivory at 94% opacity.
- **Card White** (`paper`): the consultation card only, plus text on olive and charcoal.
- **Sage Mist** (`mist`): tonal section ground (who-we-are, other-facials) and the hover fill for options, pills and line buttons; also secondary text inside the olive panel.
- **Warm Hairline** (`rule`): soft dividers (header base, card rows, treatment rows, hours table, section tops).
- **Footer Mist** (`foot-mist`): small print on the charcoal footer.

### Named Rules
**The Text Olive Rule.** Any olive at text size, or any olive fill behind white text, is `olive-ink` (5.6:1 on ivory, 6:1 under white). The brand olive is for large display type and ornament only.

**The Two Hairlines Rule.** Warm `rule` divides soft content (card rows, treatment rows, tables). Charcoal `ink` draws the menu board: category list rows, treatment-group headings, other-facial links. Never mix the two in one list.

## Typography

**Display Font:** Cormorant (with Cormorant Garamond, Georgia)
**Body Font:** Jost (with Futura, Avenir Next, system-ui)

**Character:** A high-contrast book serif for names and headings over a geometric sans for facts; the pairing reads like a printed spa menu. Loaded from Google Fonts at Cormorant 500/600/500 italic and Jost 400/500.

### Hierarchy
- **Display** (500, clamp 2.6rem to 4.75rem, 1.05): page H1. The home consultation question uses a slightly larger fluid step (clamp 2.6rem, 10vw, 4.75rem); category H1s run smaller (clamp 2.4rem, 8vw + .4rem, 4.25rem). Balanced wrap.
- **Headline** (500, clamp 2rem to 3rem, 1.05): section H2. Treatment-group headings sit at 2.1rem with a charcoal rule beneath; result-panel headings at 1.9rem.
- **Menu name** (500, clamp 1.9rem to 2.6rem, 1.05): category names on the home menu board; other-facial links use 1.5rem.
- **Title** (500, 1.6rem, 1.1): H3 and treatment prices. Prices are set in Cormorant, never in the sans.
- **Wordmark** (600, 1.45rem, 1): "Cary Facials" in the header, with a 0.78rem olive byline beneath.
- **Body** (400, 1.0625rem, 1.6): running text, capped near 34 to 44em; pretty wrap.
- **Label** (500, 0.95rem): buttons, pills, option text, minutes.
- **Meta** (400, 0.85 to 0.9rem, tabular figures): hints, breadcrumbs, notes, footer small print.

### Named Rules
**The Tabular Facts Rule.** Every minute count and price range uses tabular figures and does not wrap (`white-space: nowrap`), so menu columns align and a price never breaks from its unit.

## Layout

Mobile first, one column, with a fluid page gutter: 16px on phones, 32px from 600px, and from 900px the gutter grows to center a 1200px measure (at least 40px). Sections stack full-bleed with 48px vertical padding (72px at 900px and up), separated by a warm hairline or a change of ground (ivory to mist to charcoal).

At 900px: the home consultation becomes intro-plus-photo beside a sticky card (column 380 to 460px, 56px gap, sticking at 96px); menu-board rows put name and facts on one baseline; the who section splits 1 : 1.6; the visit section splits photo and text half and half, the photo filling its column height. Category pages place treatment groups in an auto-fit grid of 420px minimum columns with a 56px gap, under a 21:8 banner photo (3:2 on phones).

Touch targets are at least 44px (pills, links in lists, treatment Book links) and 52px for buttons and options. The sticky header offsets anchor scrolling by 72px.

## Elevation & Depth

Flat by default. Depth is tonal (ivory, white, mist, olive, charcoal) and drawn with 1px hairlines. One shadow exists, a soft low ambient under the consultation card, so the card reads as a sheet lying on the ivory. The sticky header separates with a hairline and 94% ivory, not a shadow.

### Shadow Vocabulary
- **Card rest** (`box-shadow: 0 10px 30px -18px rgba(61, 66, 70, .35)`): the consultation card only.

### Named Rules
**The One Sheet Rule.** Only the consultation card is lifted. Panels, photos, buttons and menu rows stay flat.

## Shapes

Square by default: cards, result panels, photos and sections have no radius. Buttons carry a barely softened 2px corner, the focus ring a 2px corner. Full pills (999px) are reserved for the two header actions, Call and Book. Option radios are 18px circles with a 1.5px charcoal stroke, filled with a white dot on olive when chosen. Photos are cropped by `object-fit: cover` to 3:2 (21:8 for category banners on desktop).

## Components

### Buttons
Quiet, full-width on phones, and unmistakable.
- **Shape:** barely softened corners (2px), 52px tall, 24px side padding, Jost 500.
- **Primary (olive):** olive ink fill, white text. Used for Book in the visit block and the category page heads.
- **Ink:** charcoal fill, white text. Used for Book inside the olive result panel, where olive on olive would vanish.
- **Line:** transparent with a 1px charcoal border. Used for Call and Get directions beside a primary.
- **Hover / Focus:** fill darkens (olive to `olive-ink-deep`, charcoal to `ink-deep`, line to mist) over 0.2s on the house ease; focus is a 3px olive ink outline offset 3px.
- **Groups:** stack with a 10px gap on phones; sit side by side, left-aligned, from 600px.

### Header pills
- **Style:** 44px tall, full pill, 1px charcoal border, Jost 500 at 0.95rem. Call is outlined (phone number appears from 600px); Book is solid charcoal.
- **Hover:** outline fills with mist; solid darkens.

### Consultation card (signature)
- **Corner Style:** square.
- **Background:** white, 1px warm hairline border, the one card shadow.
- **Options:** a single-choice fieldset of 52px rows separated by warm hairlines; Jost 500 goal on the left, olive meta hint right-aligned; custom 18px radio circle at 16px from the left edge, the native input stretched invisibly over the row.
- **States:** hover fills mist; the checked row fills olive ink with white text and mist hint; keyboard focus shows a 3px charcoal inset outline.
- **Result panel:** olive ink ground beneath the options, white text. Each goal's result holds a headline, a short list of facials divided by translucent white hairlines (minutes and price in mist, tabular), a charcoal Book button and a text link to the full category. Shown CSS-only via `:has()`, announced in a polite live region, and entering with a 0.45s rise (10px lift, fade, 2px blur release) on `cubic-bezier(.16, 1, .3, 1)`.

### Menu board and treatment rows
- **Menu board:** list rows bounded by charcoal hairlines, 18px vertical padding; Cormorant name over olive tabular facts (count, minutes, price range). Name underlines on hover.
- **Treatment row:** warm hairline below; name and Cormorant price on one baseline; olive minutes beneath; body copy capped at 40em; package pricing in olive meta; a 44px text Book link.

### Navigation
- **Header:** sticky, ivory at 94% with a warm hairline base, 10px vertical padding; wordmark left, pills right.
- **Breadcrumbs:** olive meta at 0.9rem, slash-separated, 6px tap padding.
- **Footer:** charcoal ground, white links with 6px tap padding, foot-mist small print, white focus ring; three columns (1 : 1 : 1.4) from 900px.

### Photography
Only the studio's own photographs and product shots, served as 800px and full-size JPEG pairs through `srcset`, with descriptive alt text. Provenance of every shipping raster in `img/`:
- `studio-entrance-800/1600.jpg`: the studio entrance sign, from romanskinandbody.com's own photos. Desktop crop is anchored at `object-position: 88% 50%` so the sign stays legible.
- `facial-room-800/1600.jpg`: Betty Román's facial room, from romanskinandbody.com's own photos.
- `betty-roman-800/1600.jpg`: portrait of Betty Román, from romanskinandbody.com's own photos.
- `facial-800/1600.jpg`: a facial in progress, from the romanskinandbody repo's `assets/spa-menu-facial.jpg`.
- `hydra-creme-800/1600.jpg`: product shot, from the romanskinandbody repo's `assets/hero-1.png`.
- `serum-800/1600.jpg`: Román Skin product shot, from the romanskinandbody repo's `assets/hero-2.png`.

All were resized with ffmpeg; none are stock or generated.

## Do's and Don'ts

### Do:
- **Do** set small olive text and every olive fill in `olive-ink` (#5B665C); keep the brand olive (#6D796E) for large type and ornament.
- **Do** set prices in Cormorant and every minute and price figure in tabular numerals, unwrapped.
- **Do** separate content with 1px hairlines: warm `rule` for soft rows, charcoal `ink` for the menu board.
- **Do** keep a Book action (olive or charcoal button, or the header pill) reachable in every section, with 44px minimum targets.
- **Do** use only the studio's own photographs and product shots, and record each new raster's source in this file.
- **Do** honor `prefers-reduced-motion`: the build disables every animation and transition under it.

### Don't:
- **Don't** set olive text or olive fills behind white text in the brand olive (#6D796E); it fails WCAG AA at text size.
- **Don't** add shadows beyond the consultation card's single soft ambient.
- **Don't** round cards, panels or photos; the 999px pill belongs only to the header actions.
- **Don't** place the olive button inside the olive result panel; use the charcoal button there.
- **Don't** use stock or AI-generated imagery, or invented reviews and ratings.
