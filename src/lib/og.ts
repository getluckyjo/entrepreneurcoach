/**
 * Static OG image config + SVG renderer.
 *
 * Each entry maps a slug (URL path with leading `/` stripped, "" for home) to the
 * eyebrow + two-line headline rendered onto a 1200×630 SVG.
 *
 * IMPORTANT: these panels are rasterised to PNG, not served as SVG.
 * LinkedIn renders an SVG og:image as a grey placeholder — confirmed in a live
 * share, 2026-07-29 — and WhatsApp and Facebook are unreliable with it too.
 * Only Slack and iMessage cope. So `ogPathFor` points at /img/og/*.png.
 *
 * Regenerate after editing any panel below:  node scripts/build-og-images.mjs
 * The SVG endpoint at /og/[...slug].svg is kept for in-page/debug use.
 */

export type OgPanel = {
  /** Small caps eyebrow above the headline. */
  eyebrow: string;
  /** First headline line (ink). */
  line1: string;
  /** Second headline line (italic, vermilion). */
  line2: string;
  /** Optional kicker below the headline (small caps grey). Defaults to topics line. */
  kicker?: string;
};

export const ogPanels: Record<string, OgPanel> = {
  "": {
    eyebrow: "JOHANNES LE ROUX",
    line1: "Not a coach.",
    line2: "An operator who coaches.",
    kicker: "Pitch decks · Fundraising · Scaling out of South Africa",
  },
  coaching: {
    eyebrow: "COACHING — CAPE TOWN",
    line1: "Pick the package.",
    line2: "Get the deliverable.",
    kicker: "Pitch Deck Sprint · Founder OS · International Launch",
  },
  workshop: {
    eyebrow: "WORKSHOP — IDEAS CARTEL, CLAREMONT",
    line1: "Claude for",
    line2: "entrepreneurs.",
    // Deliberately no date — the image would go stale the moment a cohort
    // moves, and nobody would notice until it was already on LinkedIn.
    kicker: "3 hours · 8 seats · Bring one real job from your business",
  },
  about: {
    eyebrow: "ABOUT",
    line1: "Operator first.",
    line2: "Coach second.",
    kicker: "Founder · The Duchess · DOPE Drinks · Get Lucky Golf",
  },
  talks: {
    eyebrow: "KEYNOTE TALKS",
    line1: "Honest learnings",
    line2: "from real ventures.",
    kicker: "Pitch decks · Founder failure · Scaling globally",
  },
  journal: {
    eyebrow: "FIELD NOTES",
    line1: "Field notes",
    line2: "from the road.",
    kicker: "Pitch decks · Fundraising · Founder fatigue",
  },
  contact: {
    eyebrow: "CONTACT",
    line1: "Tell me about it.",
    line2: "Suggest two times.",
    kicker: "Founder Clinic · Cape Town & remote",
  },
  "the-duchess-deck": {
    eyebrow: "THE DUCHESS — 2021 RAISE DECK",
    line1: "I ripped apart",
    line2: "my own deck.",
    kicker: "Slide-by-slide · what worked · what I'd cut today",
  },
  "the-duchess-deck/download": {
    eyebrow: "DOWNLOAD",
    line1: "The deck is",
    line2: "in your inbox.",
    kicker: "The Duchess · 2021 raise · annotated",
  },
  "the-dope-deck": {
    eyebrow: "DOPE DRINKS — US RAISE DECK",
    line1: "The deck I used",
    line2: "to raise in America.",
    kicker: "Slide-by-slide · cannabis-bev · annotated",
  },
  "the-dope-deck/download": {
    eyebrow: "DOWNLOAD",
    line1: "The deck is",
    line2: "in your inbox.",
    kicker: "DOPE Drinks · US raise · annotated",
  },
  "the-get-lucky-deck": {
    eyebrow: "GET LUCKY GOLF — SEED RAISE DECK",
    line1: "The deck I just",
    line2: "raised on.",
    kicker: "Slide-by-slide · golf-tech · annotated",
  },
  "the-get-lucky-deck/download": {
    eyebrow: "DOWNLOAD",
    line1: "The deck is",
    line2: "in your inbox.",
    kicker: "Get Lucky Golf · seed raise · annotated",
  },
  "the-suncamino-deck": {
    eyebrow: "SUNCAMINO RUM — PARTNERSHIP DECK",
    line1: "Not every deck",
    line2: "raises capital.",
    kicker: "Slide-by-slide · distribution play · annotated",
  },
  "the-suncamino-deck/download": {
    eyebrow: "DOWNLOAD",
    line1: "The deck is",
    line2: "in your inbox.",
    kicker: "Suncamino Rum · partnership deck · annotated",
  },
};

/**
 * Render a 1200×630 OG SVG for a given panel.
 *
 * Self-contained: no external fonts (uses system stack), no external assets.
 */
export function renderOgSvg(p: OgPanel) {
  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" role="img" aria-label="${escape(p.line1)} ${escape(p.line2)}">
  <rect width="1200" height="630" fill="#FFFFFF"/>
  <rect x="0" y="0" width="1200" height="14" fill="#F25C2A"/>
  <text x="80" y="120" font-family="-apple-system, 'Helvetica Neue', sans-serif" font-weight="600" font-size="22" letter-spacing="6" fill="#6F6F73">${escape(p.eyebrow)}</text>
  <text x="80" y="290" font-family="-apple-system, 'Helvetica Neue', sans-serif" font-weight="800" font-size="96" fill="#0E0E10" letter-spacing="-3">${escape(p.line1)}</text>
  <text x="80" y="400" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-weight="400" font-size="96" fill="#F25C2A" letter-spacing="-3">${escape(p.line2)}</text>
  ${p.kicker ? `<text x="80" y="495" font-family="-apple-system, 'Helvetica Neue', sans-serif" font-weight="500" font-size="22" fill="#6F6F73">${escape(p.kicker)}</text>` : ""}
  <text x="80" y="560" font-family="-apple-system, 'Helvetica Neue', sans-serif" font-weight="600" font-size="18" letter-spacing="2" fill="#0E0E10">ENTREPRENEURCOACH.CO.ZA</text>
</svg>`;
}

/**
 * Compute the OG image URL for a given pathname.
 *
 * Returns PNG — social crawlers won't render the SVG (see note at the top of
 * this file). Files are generated by scripts/build-og-images.mjs.
 */
export function ogPathFor(pathname: string) {
  const slug = pathname.replace(/^\/+|\/+$/g, "");
  if (!slug) return "/img/og/home.png";
  // Journal posts share the journal panel.
  if (slug.startsWith("journal/")) return "/img/og/journal.png";
  if (ogPanels[slug]) return `/img/og/${slug}.png`;
  return "/img/og/home.png";
}
