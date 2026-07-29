# Design system — Johannes le Roux · Entrepreneur Coach

> **Source of truth.** Anything that disagrees with this document is a bug, not a style choice. Update this first; ship code second.

---

## 1. Position

A personal brand site for **Johannes le Roux** — Cape Town entrepreneur, founder of three multi-million-dollar brands across three continents, now coaching the next generation. The site has to do two jobs at once:

1. **Establish credibility** in 5 seconds — operator, not "a coach".
2. **Convert** — book a clinic, buy a package, get the talk gig.

It is **not** a coaching-template site. It's an *operator's* coaching site. The ceiling is the level of [Flight Story](https://www.flightstory.com/) and [Virgin](https://www.virgin.com/) — confident, brand-forward, declarative.

### Reference DNA

| Source | What we steal | What we leave |
| --- | --- | --- |
| **Flight Story** | Bold stacked single-word display headlines · neutral grotesque · loud accent palette over white · big tabular metrics ("1.2 BIL Downloads") · mixed-case display mischief · clean modular cards | Webflow scaffolding · agency-first content shape · 4-city ground stamp |
| **Virgin** | A confident primary accent (we use vermilion, they use red) · script signature for the personal-brand moment · witty / direct / human voice · energy and optimism · founder-as-protagonist | Conglomerate breadth · airline UX patterns · British register where it doesn't fit SA |
| **Operator's own work** (The Duchess, DOPE Drinks, Get Lucky Golf) | Real brand names, real receipts, real photography | Generic stock |

### Voice principles

1. **Declarative, not descriptive.** "I built three brands." (✅) — not "With over fifteen years of experience…" (❌)
2. **Numbers in numerals.** *3 brands*, not *three brands*. *15+ countries*, not *fifteen*. Numerals are visual.
3. **Operator tone.** Direct. Slightly cheeky. South African-direct, not American-bro.
4. **Short sentences. Then a longer one to vary rhythm.** Then short again.
5. **No coaching-industry vocabulary.** Avoid: *unlock potential, holistic, journey, transformative, empowering*. Replace with: *raise, ship, scale, fix, decide*.
6. **Two voices, deliberately mixed.** A loud declarative voice for headlines (*"Not a coach. An operator who coaches."*) + a quieter, plain-spoken voice for body copy (the same voice you'd use over coffee).

---

## 2. Colour

A high-contrast white-ground system with a single primary accent (**vermilion** `#F25C2A`), an editorial secondary (**blue**), and a flair tertiary (**lime**) used sparingly. No greys decorating themselves.

> **Why vermilion, not red.** Every consultant in the SA market uses red, blue, or green. Vermilion has the same emotional energy as red but is rarer in the coaching/consulting space — confident-warm rather than aggressive-loud. Visually it echoes Cape Town golden-hour light, which lands the personal-brand layer.

### Tokens

```css
--color-paper:       #FFFFFF   /* base background */
--color-bone:        #F4F4F1   /* warm off-white, panels & cards */
--color-soft:        #ECEAE3   /* secondary panel */

--color-ink:         #0E0E10   /* near-black body text */
--color-ink-soft:    #2A2A2D   /* muted body */
--color-muted:       #6F6F73   /* secondary text, captions */
--color-rule:        #E0DED7   /* hairlines */

--color-red:         #F25C2A   /* PRIMARY ACCENT — vermilion (variable name kept "red" for code stability) */
--color-red-deep:    #C8421A   /* hover / pressed */
--color-red-soft:    #FCE6DC   /* background tint */

--color-blue:        #2D55FF   /* SECONDARY — editorial highlight */
--color-blue-soft:   #DDE3FF

--color-lime:        #C6F03A   /* TERTIARY — flair, hover ticks, never body */

--color-night:       #0A0A0C   /* full-bleed dark sections */
```

### Usage rules

- **80 / 15 / 5** — 80% white + ink, 15% vermilion, 5% blue/lime combined. Never both blue and lime in the same viewport.
- **Vermilion is for action and emphasis only** — buttons, primary links, italic emphasis on display headlines, the brand mark dot, "most booked" / hot ticks, the underline on hover.
- **Blue is for editorial moments** — journal categories, metric numerals, occasional pull-quote backgrounds. Never on a CTA.
- **Lime is for surprise** — a single tick, a flag on a featured card, the cursor dot, a paragraph pull-mark. If you used it twice on the page, take one out.
- **Night is a full-bleed dark section** — the metrics block, the contact CTA, occasional editorial breakers. Never a card or a button background.

### Forbidden

- Mid-grey decorative blocks
- Gradient mesh backgrounds (drop the umber blob — overrated)
- Soft pastel washes
- Multiple accent colours competing in one section
- Vermilion text on vermilion

---

## 3. Typography

### Families

- **Display + body — [Geist](https://vercel.com/font)** (variable, weights 100–900). Modern grotesque, sharp, geometric, distinctly contemporary. Self-hosted via `@fontsource-variable/geist`. Closest free alternative to the Neue Haas Grotesk that Flight Story uses. **Apply across the entire site.**
- **Signature accent — [Caveat](https://fonts.google.com/specimen/Caveat)** (Google Fonts). Handwritten cursive used **once or twice per page**: a real "Johannes" signature on the about page, a *"this is the one to book"* hand-mark on the featured offer card. The Virgin script trick.
- **No serif.** The previous Fraunces editorial direction is retired. Keep typography in one family for force; let scale and weight do the work.

### Scale

```
display-mega   clamp(4.5rem, 11vw, 12rem)    line-height 0.86  letter-spacing -0.04em  weight 800
display-xl     clamp(3rem, 7vw, 7rem)        line-height 0.92  letter-spacing -0.035em weight 700
display-l      clamp(2.2rem, 4.5vw, 4.4rem)  line-height 0.96  letter-spacing -0.03em  weight 700
h1             clamp(2.6rem, 6vw, 5.4rem)    line-height 1.0   letter-spacing -0.025em weight 700
h2             clamp(2rem, 3.5vw, 3.4rem)    line-height 1.05  letter-spacing -0.02em  weight 600
h3             clamp(1.4rem, 1.8vw, 1.9rem)  line-height 1.15  letter-spacing -0.015em weight 600
lead           clamp(1.15rem, 1.5vw, 1.4rem) line-height 1.45                          weight 400
body           17px                          line-height 1.55                          weight 400
small          14px                          line-height 1.5                           weight 500
caption        12px                          line-height 1.4   letter-spacing 0.18em uppercase  weight 600
```

### Mixing rules (the typographic mischief Flight Story does)

- **Stacked one-word-per-line display headlines** are the signature hero device. *"PITCH. / RAISE. / SHIP. / SCALE."* Each word a line. Punctuation matters (the full stops are part of the device).
- **Mixed case on display words** — sparingly. *"Our studIo"* / *"NoT a CoAcH"* once or twice on the site. If used three times it's a tic, not a device.
- **Italic (Geist's italic) carries emphasis on display lines only.** Don't italicise body.
- **All-caps is for captions, eyebrows, and one-line section markers** — never paragraphs.
- **The Caveat signature** appears at most twice on the site: (a) below the Johannes portrait on /about, (b) as a handwritten "← book this one" on the featured offer card.
- **Numerals are big.** Metric numbers go to `display-mega`. Numbers are part of the visual system, not text inside it.

### Forbidden

- Two display families on one page
- Display-mega used more than once per page (it loses force)
- Justified body text
- Anything below 13px outside the cookie banner

---

## 4. Layout

### Grid

- **12-column desktop**, 24px gutter at 1280+ / 16px at 768 / 12px below
- **Page max-width 1320px**, 64px outer padding desktop / 24px mobile
- **Asymmetric** by default — content prefers cols 1–7 or 6–12, not centered. Centred only for hero metric strips and the closing CTA.
- **Full-bleed sections** for night-mode (metrics, closing CTA), marquees, and image moments. Sections inside `.container-page`; full-bleed sections set their own background and contain a `.container-page` inside.

### Section rhythm

The page should breathe in this loud–quiet pattern:

```
HERO (loud)              ─ stacked display, white
MARQUEE (loud)           ─ scrolling type strip
BUILT (quiet)            ─ ventures grid, bone background
METRICS (loud)           ─ full-bleed night, mega numerals
OFFERS (quiet)           ─ 4 cards on white
PROCESS (medium)         ─ 4 numbered steps on bone
TESTIMONIALS (loud)      ─ full-bleed night with one giant pull-quote
JOURNAL (quiet)          ─ 4 editorial cards
TALKS (medium)           ─ side-by-side list on bone
CONTACT CTA (loud)       ─ full-bleed red, mega type, single button
FOOTER                   ─ ink, signature watermark
```

Loud = high typographic force or full-bleed colour. Quiet = white, restrained, editorial.

### Spacing scale

```
4   8   12   16   24   32   48   64   96   128   192
```

(no in-between values; use design-tokens, not arbitrary px)

### Card system

Cards are minimal, with a structural detail not a decorative one:

- 1px `--color-rule` border, no shadow at rest
- 18px corner radius
- 32px padding
- A coloured top-edge or top-tag — vermilion for "most booked", blue for editorial categories, lime for "new"
- Hover: border darkens to ink (no lift, no glow)
- Featured cards: ink border + a Caveat handwritten "← book this one" floating outside the card

---

## 5. Motion

Motion is functional, not decorative. Three categories:

### A. Reveal-on-scroll

- 600ms ease-out, 12px upward translate, fade in
- Fired by IntersectionObserver at threshold 0.1
- Respects `prefers-reduced-motion: reduce`

### B. Marquee scroll

- 40s linear infinite, mask gradient at edges
- Pauses on hover (hover = "I'm reading this", let them read)
- Respects reduced motion (animation: none)

### C. Counter tween

- Numbers tween from 0 to target on first viewport intersection
- 1400ms cubic ease
- Numerals are tabular-nums to prevent layout shift

### Never

- Parallax (cliché, accessibility hostile)
- Blob drifts, gradient mesh animations (retired)
- Cursor followers / custom cursors (mobile-hostile, distraction)
- Page-load splash screens
- Carousel auto-advance under 8 seconds

### Hover language

- **Buttons** — background swap to vermilion (or vermilion-deep on vermilion). 180ms ease.
- **Links inline in body** — vermilion underline, slides in left-to-right on hover (CSS `transform: scale-x` on the underline pseudo-element). 250ms.
- **Cards** — border colour shift, 200ms.
- **Nav links** — vermilion dot fades in to the left of the active item.

---

## 6. Brand mark

A single drawn glyph used as favicon, navbar mark, and footer signature.

- **Form** — black square, 8px corner radius, italic "J" inside in Caveat (handwritten, white), vermilion dot in upper-right corner.
- **Why** — the dot is the "tick of approval" Virgin uses on its V; the Caveat J makes it a signature, not a typeset wordmark.
- **Sizes**: favicon 32, nav 28, footer 24.

The handwritten signature **"Johannes le Roux"** in Caveat appears once on /about, large, in vermilion, under the portrait. It's the personal-brand anchor of the entire system.

---

## 7. Imagery

### Photography rules

- **Real, in-house photography only.** No stock. The Stefan Marcel Gerard B&W press shoot is the canonical asset; commission a colour shoot before launch.
- **Treatment** — the canonical portrait is B&W. Where photography appears as a colour image (future shoots, event coverage), keep it natural — no Instagram filters, no duotone gimmicks.
- **Portrait crop** — 3:4 vertical for hero, 1:1 square for journal author bylines.
- **Framing graphic detail** — never just the photo. Always a structural detail beside it: a red square, a red caption stripe, a numeral, a Caveat caption.

### Illustration / SVG

- Custom SVG only. No stock illustration packs.
- Use sparingly: one per offer card (compass, slide stack, calendar grid, globe arc) drawn in 1px line-work in `currentColor` with red accents. Inherit the card's text colour.
- Always editorial, never decorative. Each illustration represents the deliverable.

### Forbidden

- Stock photography of people in suits at whiteboards
- 3D blob / spline renders
- Generic "abstract gradient" hero backgrounds
- Mockups of laptops and phones

---

## 8. Components inventory (build & extend)

The components below are the entire site's vocabulary. Reach for these first; build new ones only when none fits.

| Name | Purpose |
| --- | --- |
| `BrandMark` | Header / footer monogram + wordmark |
| `Nav` | Sticky top nav with red-dot active indicator |
| `Footer` | Massive faded "le Roux" signature + nav columns |
| `Marquee` | Scrolling type strip, alternating roman/italic |
| `Container` (CSS class) | 1320px max, fluid padding |
| `Eyebrow` (CSS class) | All-caps tracking-wide caption |
| `Pill` | Rounded category chip (used for journal categories, "most booked") |
| `Button` (`btn-primary` / `btn-ghost` / `btn-link`) | The three CTA shapes |
| `Card` | Border, padding, hover state — base for offers / journal previews |
| `OfferIllustration` | One drawn signature per package |
| `AnimatedNumber` | Tweening counter |
| `PlaceholderBadge` | Loud "PLACEHOLDER" flag for unfilled placeholders |
| `BoldHero` | Stacked one-word-per-line display headline + portrait |
| `Metrics` | Full-bleed night-mode numerals strip |
| `BuiltStrip` | Ventures grid (The Duchess, DOPE Drinks, Get Lucky) |
| `Offers` | 4-card coaching grid |
| `Process` | 01–04 numbered engagement flow |
| `JournalPreview` | 4 editorial post cards |
| `TalksPreview` | Side-by-side talks list |
| `BigCTA` | Full-bleed red "GET IN TOUCH" closer |
| `Signature` | Caveat handwritten "Johannes le Roux" anchor (about page) |

Each maps to a file under `src/components/{layout|home|coaching|ui}/`.

---

## 9. Page-level patterns

### Homepage

`BoldHero → Marquee → BuiltStrip → Metrics → Offers → Process → JournalPreview → TalksPreview → BigCTA → Footer`

### About

`Header (eyebrow + display headline) → Portrait + Caveat signature → Bio (3-paragraph plain-spoken) → Ventures grid → Press list → BigCTA`

### Coaching

`Header → 4 cards expanded with full deliverables → FAQ accordion → BigCTA`

### Contact

`Header → Contact form with two-time-slot suggestion (left) + sidebar with next-steps + email/address (right) → microcopy on POPIA`

### Talks

`Header → 3 talks expanded as full-row editorial entries → BigCTA`

### Journal index

`Header → Featured post (full-bleed image card) → 6+ post grid`

### Journal post

`Header (category tag, date, title) → Hero image (where applicable) → Prose (max 720px) → Author byline → Related posts → BigCTA`

### Privacy / Terms / Thanks / 404

Editorial pages, container-prose width, no hero theatrics.

---

## 10. Don'ts (the audit's leftover gotchas)

- ❌ Empty `LocalBusiness` schema. (Already fixed; don't regress.)
- ❌ `<html lang="en-US">`. Always `en-ZA`.
- ❌ Personal Gmail in footer. Always `johannes@entrepreneurcoach.co.za`.
- ❌ Squarespace template alt-text. Every image gets a real alt.
- ❌ "Read more" / "Click here". Always action-specific link text.
- ❌ More than one display family per page.
- ❌ Mid-grey decorative blocks.

---

## 11. Implementation tokens (mirrored to code)

`src/styles/global.css` is the single CSS source of truth. It declares:

- All tokens in section §2 above as CSS custom properties
- The type scale in section §3 as utility classes
- Reveal / marquee / counter motion in section §5 as CSS keyframes
- A small `prose` style for journal posts

`src/data/site.ts` is the single content source of truth (ventures, offers, talks, FAQs, press, contact info).

When in doubt: edit the tokens, not the components. The components should be thin enough to be re-skinned by changing tokens alone.

---

## 12. What changes from previous direction

The Fraunces + umber + grain editorial direction is retired. Replaced with:

- **Geist** instead of Fraunces / Manrope (one family, full weight range)
- **Vermilion** instead of umber (`#F25C2A` instead of `#B8462A`) — primary accent on white. Holds the same conversion-driving role red would; less common in the coaching field
- **White ground** instead of warm off-white (`#FFFFFF` instead of `#FAFAF7`)
- **Bold stacked declarative hero** instead of editorial display + portrait split
- **Caveat handwritten signature** as the personal-brand anchor
- **No grain, no gradient blobs** — clarity beats texture
- **Full-bleed night sections** for metrics and CTAs — high contrast moments

This is the direction. Build to it.
