/**
 * Site-wide content. Single source of truth.
 *
 * Edit anything here and it propagates everywhere. To add a new section
 * to the site (e.g. the Sept 2026 Network waitlist), add a new object
 * here and reference it from a component — see `extension points` below.
 */

export const site = {
  name: "Johannes le Roux",
  brand: "Johannes le Roux — Entrepreneur Coach",
  domain: "https://www.entrepreneurcoach.co.za",
  tagline: "Coaching for founders, by a founder.",
  description:
    "Entrepreneur coaching from a Cape Town founder who's built six brands across SA, Europe, and the US — all at multi-million-dollar, international scale. Pitch decks, fundraising, and scaling out of South Africa.",
  defaultOgImage: "/img/og-default.svg",
  locale: "en-ZA",
  email: "leroux.johannes@gmail.com", // canonical contact per Johannes — Gmail-of-record
  whatsapp: "+27000000000", // replace with real number
  address: {
    street: "Ideas Cartel, Claremont",
    city: "Cape Town",
    region: "Western Cape",
    postalCode: "7708",
    country: "ZA",
    geo: { lat: -33.9853, lng: 18.4699 }, // Ideas Cartel, Claremont
  },
  hours: "Mon–Thu, 09:00–17:00 SAST",
  social: {
    linkedin: "https://www.linkedin.com/in/johannesleroux/",
    twitter: "", // optional
    instagram: "",
  },
  legal: {
    operator: "Johannes le Roux",
    informationOfficer: "Johannes le Roux", // POPIA s.55–56
    legalEntity: "Johannes le Roux (Sole Proprietor)", // update if registered Pty
  },
} as const;

/** Headline ventures shown on home + about. Ordered by current relevance, not strict chronology —
 * BoldHero shows the first 3 (Get Lucky / Duchess / DOPE), BuiltStrip shows all six.
 * Add new ones (Golf Day Pro / Golf Site Pro / Sept-2026 network) here as they ship.
 *
 * Image convention: drop a 4:3 JPG (1200×900+) at /public/img/ventures/<slug>.jpg
 *   then set image: "/img/ventures/<slug>.jpg" on the venture below.
 * If image is empty, a tone-coloured typographic placeholder renders. */
export type Venture = {
  name: string;
  kind: string;
  role: string;
  years: string;
  note: string;
  url?: string;
  image?: string;
  /** Image alt text. Format: subject, context, location where relevant. */
  imageAlt?: string;
  /** Optional internal cross-link to the journal post most associated with this venture. */
  journalLink?: { slug: string; label: string };
  /** Placeholder tone used when image is empty. Map below. */
  tone: "ink" | "vermilion" | "bone" | "blue" | "lime" | "night";
};

export const ventures: readonly Venture[] = [
  {
    name: "Get Lucky Golf",
    kind: "Golf-tech",
    role: "Co-founder",
    years: "2025 — present",
    note: "A golf-tech business running the Hole-in-One Challenge across 30+ premium South African courses. AI shot-tracing, video capture, R1m grand prize, Indwe Risk Services on as headline sponsor. Currently scaling globally from a South African base.",
    image: "/img/ventures/get-lucky.jpg",
    imageAlt: "Get Lucky Golf — Hole-in-One Challenge brand identity, South Africa",
    tone: "lime",
  },
  {
    name: "The Duchess",
    kind: "Beverage",
    role: "Founder",
    years: "2016",
    note: "The world's first non-alcoholic gin & tonic — built brand-led from Cape Town in 2016. 20M units shipped across 10+ countries, 50%+ of revenue from export. Backed by ZX Ventures (AB InBev's VC arm) and an RMB-led consortium.",
    image: "/img/ventures/the-duchess.jpg",
    imageAlt: "The Duchess non-alcoholic gin & tonic — bottle and brand, founded in Cape Town 2016",
    journalLink: { slug: "the-pitch-deck-that-raised", label: "Read: the deck that raised" },
    tone: "bone",
  },
  {
    name: "DOPE Drinks",
    kind: "Cannabis",
    role: "Founder",
    years: "2019",
    note: "Cannabis-infused beverage brand built for the US market — 5mg THC + 5mg CBD per can, micro-dosed for the cannabis-curious adult. Funded at Summit at Sea, launched at BevNET New York. Now shipping into 42 US states. \"Born in Africa. Made in America.\"",
    image: "/img/ventures/dope-drinks.jpg",
    imageAlt: "DOPE Drinks cannabis-infused beverage can — Born in Africa, Made in America",
    journalLink: { slug: "cape-town-to-america", label: "Read: Cape Town to America" },
    tone: "night",
  },
  {
    name: "Cape Spritz",
    kind: "Wine",
    role: "Founder",
    years: "2022",
    note: "A wine spritz built for Cape Town summers. Easy-drinking, low-alcohol, ready-to-pour. The proof point that ready-to-drink premium wine has a place on the SA shelf.",
    image: "/img/ventures/cape-spritz.jpg",
    imageAlt: "Cape Spritz low-alcohol wine spritz — Cape Town, summer ready-to-pour",
    tone: "vermilion",
  },
  {
    name: "Suncamino",
    kind: "Rum",
    role: "Co-founder",
    years: "2017",
    note: "Premium rum out of Cape Town with Caribbean roots. Built on what The Duchess had just taught me about premium spirits brand-building and getting onto international shelves. Now on the advisory board.",
    image: "/img/ventures/suncamino.jpg",
    imageAlt: "Suncamino premium rum — Cape Town with Caribbean roots",
    tone: "ink",
  },
  {
    name: "Brannas Draught",
    kind: "Brandy",
    role: "Founder",
    years: "2012",
    note: "A South African brandy brand — the first venture out of the gate. Where I learned how brand-led FMCG actually works: the trade, the pricing, the bottle on the shelf.",
    image: "/img/ventures/brannas-draught.jpg",
    imageAlt: "Brannas Draught draught brandy & cola — South African FMCG brand, founded 2012",
    journalLink: { slug: "brannas-kwv", label: "Read: the Brannas × KWV story" },
    tone: "blue",
  },
];

/** Press / featured-in. Used on /about. */
export const press = [
  {
    outlet: "How We Made It in Africa",
    title: "Inside The Duchess: building a non-alcoholic spirits brand",
    url: "https://www.howwemadeitinafrica.com/tag/johannes-le-roux/",
    year: 2019,
  },
  {
    outlet: "News24",
    title: "An SA non-alcoholic drink is winning global awards",
    url: "https://www.news24.com/business/opinion/an-sa-non-alcoholic-drink-is-winning-global-awards-heres-what-the-makers-learnt-20191004",
    year: 2019,
  },
  {
    outlet: "The Money Show with Bruce Whitfield",
    title: "The Duchess: a non-alcoholic G&T",
    url: "/journal/the-money-show",
    year: 2022,
  },
  {
    outlet: "UCT Graduate School of Business",
    title: "Debunking 4 common entrepreneurial myths",
    url: "https://www.gsb.uct.ac.za/ideas-exchange/entrepreneurship-and-innovation/fo-debunking-4-common-entrepreneurial-myths",
    year: 2020,
  },
  {
    outlet: "Tribe Sober (podcast)",
    title: "Goodbye to Alcohol — founder of The Duchess",
    url: "https://janetgourand4.podbean.com/e/goodbye-to-alcohol-series-2-ep-3-johannes-le-roux-founder-of-the-duchess/",
    year: 2021,
  },
] as const;

/**
 * Coaching offers. Productised — outcome-led, not time-led, plus one pay-as-you-go hourly.
 * Prices reviewed with Johannes 2026-05; adjust before launch as needed.
 */
export type Offer = {
  slug: string;
  name: string;
  cadence: string;
  price: string;
  priceNumeric: number;
  summary: string;
  deliverables: readonly string[];
  bestFor: string;
  cta: string;
  featured?: boolean;
  /** Spans full-width on the offers grid (used for the pay-as-you-go option). */
  wide?: boolean;
  /** Optional internal cross-link to the most relevant journal post. */
  journalLink?: { slug: string; label: string };
};

export const offers: readonly Offer[] = [
  {
    slug: "founder-clinic",
    name: "Founder Clinic",
    cadence: "30 min · once-off",
    price: "Free",
    priceNumeric: 0,
    summary: "A short, no-fee call to figure out together whether coaching is the right move. Bring whatever you're working on — early-stage or scaling, polished or messy.",
    deliverables: [
      "30 minutes of straight feedback on whatever's stuck",
      "A written 3-bullet next-steps note within 24 hours",
      "No obligation, no upsell at the call",
    ],
    bestFor: "First-time founders, or anyone weighing up whether 1:1 coaching is the right move at all.",
    cta: "Book a Founder Clinic",
    featured: false,
  },
  {
    slug: "pitch-deck-sprint",
    name: "Pitch Deck Sprint",
    cadence: "3 sessions · 2 weeks",
    price: "R15,000",
    priceNumeric: 15000,
    summary: "We rebuild your deck from narrative up. You walk out with an investor-ready story you can defend.",
    deliverables: [
      "Three 60-min working sessions (Zoom or in-person Cape Town)",
      "Investor-ready deck (10–14 slides) — narrative, traction, ask",
      "Two rounds of async feedback on revisions",
      "Investor-shortlist guidance for your stage",
    ],
    bestFor: "Founders going into a pre-seed, seed, or angel round in the next 90 days.",
    cta: "Start the Sprint",
    featured: true,
    journalLink: { slug: "the-pitch-deck-that-raised", label: "See the deck that raised" },
  },
  {
    slug: "cashflow-projection",
    name: "5-Year Cashflow Projection",
    cadence: "2 sessions · 2 weeks",
    price: "R15,000",
    priceNumeric: 15000,
    summary: "An investor-ready 5-year financial model built around your real numbers — COS, retailer margins, distribution costs, ops, and marketing budgets. The model that holds up to the questions that usually end the round.",
    deliverables: [
      "Two 60-min working sessions (Zoom or in-person Cape Town)",
      "A working 5-year P&L + cashflow + balance sheet model (Sheets / Excel)",
      "COS breakdown — raw materials, packaging, manufacturing",
      "Retailer margin layers — distributor, retailer, end consumer",
      "Distribution, OPEX, headcount, and marketing budgets tied to CAC",
      "Sensitivity analysis on the 3–5 drivers that matter",
      "Investor-ready summary slides",
    ],
    bestFor: "Founders going into a seed, angel, or Series A round who need a model that holds up to scrutiny — especially in FMCG, beverage, retail, or any business with real COS and channel margins.",
    cta: "Build the model",
    featured: false,
  },
  {
    slug: "founder-os",
    name: "Founder Operating System",
    cadence: "5 sessions · 5 weeks",
    price: "R25,000",
    priceNumeric: 25000,
    summary: "A weekly cadence to pull you out of reactive mode. Strategy, ops, and the founder fatigue everyone pretends isn't there.",
    deliverables: [
      "Five weekly 60-min sessions",
      "90-day operating cadence (weekly review template, decision log, founder calendar)",
      "Founder's Fatigue diagnostic + recovery plan",
      "WhatsApp access between sessions for live calls",
    ],
    bestFor: "Founders running 5–30 person teams who are working harder, not better.",
    cta: "Start with FOS",
    featured: false,
    journalLink: { slug: "founders-fatigue-the-version", label: "Read: Founder's Fatigue" },
  },
  {
    slug: "international-launch",
    name: "International Launch Playbook",
    cadence: "8 sessions · 90 days",
    price: "R45,000",
    priceNumeric: 45000,
    summary: "A 90-day engagement to take you from product–market fit at home to first three customers / distributors abroad.",
    deliverables: [
      "Eight working sessions across 90 days",
      "Market entry plan for one or two target countries",
      "Three written customer / distributor briefs",
      "Direct intros from my US / UK / EU network where relevant",
      "WhatsApp + Slack access through the full engagement",
    ],
    bestFor: "Founders with PMF in SA who want a deliberate, considered run at international expansion.",
    cta: "Apply for the Playbook",
    featured: false,
    wide: true,
    journalLink: { slug: "cape-town-to-america", label: "Read: Cape Town to America" },
  },
  {
    slug: "custom-hourly",
    name: "Custom Hourly",
    cadence: "60 min · pay as you go",
    price: "R2,500 / hour",
    priceNumeric: 2500,
    summary: "Already know what you need? Book single hours of coaching or business consultancy for whatever sits outside the productised packages above.",
    deliverables: [
      "60-min sessions, on demand",
      "Coaching, consulting, or sounding-board work — your call",
      "Notes / written follow-up where useful",
      "No package commitment",
    ],
    bestFor: "Founders I've worked with before, or anyone with a bounded one-off problem.",
    cta: "Book an hour",
    featured: false,
    wide: true,
  },
] as const;

/** Talks page. */
export const talks = [
  {
    slug: "perfect-pitch-deck",
    title: "How to build the perfect pitch deck",
    duration: "90 min",
    summary:
      "Many great ideas never launch because of a lack of funding. Over the past decade I've developed a formula for building pitch decks that actually attract investment. This talk teaches your audience how to build one.",
  },
  {
    slug: "learnings-from-failure",
    title: "Learnings from my business failures",
    duration: "60 min",
    summary:
      "There is more to learn from failure than success. In this talk I share some of my catastrophic failures in business and the key learnings — the ones I wish I'd known earlier.",
  },
  {
    slug: "scaling-brands-globally",
    title: "Scaling brands globally",
    duration: "60 min",
    summary:
      "Some of my best entrepreneurial stories come from scaling South African brands internationally. This talk shares insights and cultural learnings from launching across America, Europe, and Australia.",
  },
] as const;

/** FAQ — used on /coaching with FAQPage schema. */
export const faqs = [
  {
    q: "Are sessions in person or remote?",
    a: "Both. In Cape Town we meet at Ideas Cartel, Claremont. Everywhere else, Zoom. The work is the same.",
  },
  {
    q: "Who is this not for?",
    a: "Founders looking for cheerleading, lifestyle businesses, or anyone who wants advice without doing the work between sessions. I'm direct and I expect you to be too.",
  },
  {
    q: "How is this different from a generic business coach?",
    a: "I'm an operator first. I've been involved in building six brands over the past decade — most of what I'd share comes from doing the work, getting things wrong, and trying again. The coaching draws on lived experience, not a certification.",
  },
  {
    q: "What happens after I book?",
    a: "You'll get a calendar invite within one business day along with a short pre-work brief — usually a few questions about where the venture is and what's stuck. We use the first session to set scope.",
  },
  {
    q: "Can I reschedule or cancel?",
    a: "Reschedule any session up to 24 hours before with no charge. Inside 24 hours the session is forfeited unless we agree otherwise — coaching only works if both sides treat the time as sacred.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, on request. The coaching agreement also has a confidentiality clause — your venture details stay between us by default.",
  },
  {
    q: "What's your refund policy?",
    a: "Full refund on the unused balance of any package up to 14 days after purchase. After that, refunds are case-by-case but I'd rather make it right than hold money you don't want with me.",
  },
] as const;

/**
 * Extension points (places to plug in new ideas without touching layout):
 *
 *   • Sept 2026 Inclusive Entrepreneur Network → add a `network` const here
 *     and import a new <NetworkWaitlist /> component on src/pages/index.astro.
 *   • New venture (Golf Day Pro / Golf Site Pro) → push to `ventures`.
 *   • New offer / package → push to `offers`. Set `featured: true` to highlight.
 *   • Press → push to `press`.
 *   • New FAQ → push to `faqs`. Schema is auto-generated.
 */
