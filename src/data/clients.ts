/**
 * Client work — the /clients showcase.
 *
 * Every line here is public. These are live engagements, so the rule is:
 * describe the work and the craft, never the client's numbers. No raise terms,
 * valuations, margins, trade terms, costs, sales figures, access keys or private
 * URLs. Outcomes only where the client has already published them themselves.
 *
 * Images live at /public/img/clients/<slug>/. Each is the client's own brand
 * asset or a screenshot of public work — no stock.
 */

export type ClientImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  /** "contain" for product shots on white that mustn't be cropped. */
  fit?: "cover" | "contain";
};

export type ClientStory = {
  slug: string;
  name: string;
  kind: string;
  where: string;
  year: string;
  /** One line under the name. */
  hook: string;
  /** Public links to the client's live work, where there is any. */
  links?: readonly { href: string; label: string }[];
  hero: ClientImage;
  /** "The brief" — a short paragraph or two. */
  brief: readonly string[];
  /** "What we built" — the story of the work. */
  work: readonly string[];
  /** "Where it landed" — outcomes, plain words. */
  landed: readonly string[];
  /** Big numerals in the sidebar. Public facts only. */
  stats: readonly { value: string; label: string }[];
  /** The deliverables, as a checklist. */
  built: readonly string[];
  /** Full-width screenshots of live work, shown above the gallery. */
  screens?: readonly ClientImage[];
  gallery: readonly ClientImage[];
};

export const clients: readonly ClientStory[] = [
  {
    slug: "dona-fuego",
    name: "Doña Fuego",
    kind: "Tequila RTD",
    where: "Cape Town",
    year: "2026",
    hook: "A tequila spirit cooler from Cape Town, getting ready for a national launch.",
    hero: {
      src: "/img/clients/dona-fuego/three-cans.jpg",
      alt: "Doña Fuego Spicy Margarita, Margarita and Paloma cans held side by side",
      caption: "The range from the launch shoot: Margarita, Spicy Margarita and Paloma.",
      width: 1800,
      height: 1350,
    },
    brief: [
      "Doña Fuego is a Cape Town distillery that makes a really good drink: real Mexican tequila and real juice in a 250ml can. Margarita, Spicy Margarita, Paloma and a non-alcoholic Margarita. When we started working together, the range had just cleared Checkers' tasting panels for a national launch.",
      "The founder had the product sorted. She wanted help with the rest: who it's for, how to launch it, how to talk to investors, and how to keep track of what's selling once it's in stores.",
    ],
    work: [
      "We started with when people actually drink it. About 95% of South African spirit coolers are vodka-based, so a tequila one had room to stand out. We settled on the cooler box: the braai, the boat, the weekend away. The drink you bring when everyone else brings wine.",
      "From there we planned the launch together: a partnership with a cooler brand, cooler boxes dropped at the right gatherings, a photo competition, and a plan for finding the first 1,000 loyal customers. For trade, we picked the stores most likely to move the most cans and put the effort there.",
      "For investors, I built a one-page site that explains the business quickly, with a dataroom behind it that only opens once an investor has signed an NDA and the founder has approved them. Every number on it comes from one financial model, so the figures always agree with each other.",
      "The piece that's been most useful day to day is the sales dashboard. Checkers sends a weekly sales email and stock reports, and someone used to copy those into a spreadsheet by hand. Now a script picks them up every 6 hours and a private dashboard shows what was delivered, what actually sold, what's still sitting in stores and how long it should last. It's checked against Checkers' real report format, so the numbers stay right when a report changes.",
    ],
    landed: [
      "Doña Fuego launched nationally in August 2026, exclusive to Checkers in 360 stores and on Sixty60, with 12 months of exclusivity.",
      "The founder went into launch with a clear story for the brand, investor material she's comfortable sending, and sales numbers that update themselves. Nobody has to copy reports into a spreadsheet each week.",
      "I've since written the dashboard up as a playbook, so other brands selling into Checkers, Shoprite, Pick n Pay or Spar can use the same setup.",
    ],
    stats: [
      { value: "360", label: "Checkers stores at launch, plus Sixty60" },
      { value: "12", label: "Months of national exclusivity" },
      { value: "6h", label: "Between automatic sales updates" },
    ],
    built: [
      "Positioning and audience",
      "Launch campaign plan",
      "Investor site",
      "NDA-gated dataroom",
      "Pro forma financial model",
      "Live retail trading dashboard",
    ],
    gallery: [
      {
        src: "/img/clients/dona-fuego/sunset-toast.jpg",
        alt: "Friends raising Doña Fuego cocktails in a toast around a long outdoor table at sunset",
        caption: "A long table at sunset. The moment the brand is made for.",
        width: 1050,
        height: 1400,
      },
      {
        src: "/img/clients/dona-fuego/lineup.jpg",
        alt: "Paloma, Margarita and Spicy Margarita cans on a stone board with fresh chillies and lime",
        caption: "The range lined up for trade buyers.",
        width: 1050,
        height: 1400,
      },
      {
        src: "/img/clients/dona-fuego/paloma-pour.jpg",
        alt: "A Doña Fuego Paloma being poured into a salt-rimmed glass beside fresh grapefruit",
        caption: "A Paloma, poured over grapefruit.",
        width: 1050,
        height: 1400,
      },
    ],
  },
  {
    slug: "rekrd",
    name: "REKRD",
    kind: "Hydration",
    where: "Pretoria",
    year: "2026",
    hook: "An electrolyte brand from Pretoria, getting set up to sell.",
    links: [
      { href: "https://shop.rekrd.io", label: "shop.rekrd.io" },
      { href: "https://coach.rekrd.io/ambassadors", label: "coach.rekrd.io" },
    ],
    hero: {
      src: "/img/clients/rekrd/hero.jpg",
      alt: "Five REKRD electrolyte sachets fanned out, beaded with water, one for each flavour",
      caption: "All 5 flavours. One sachet a day.",
      width: 1800,
      height: 1013,
    },
    brief: [
      "REKRD makes an electrolyte powder in single-serve sachets, sold in a 30-sachet tube you'll want to keep. It has a retro, premium feel and it's made for everyday people who play golf and padel, travel a lot or work long days, as much as for serious athletes.",
      "The packaging was already great. What was missing was a way to sell it. There was no online shop yet, which also held up payments and marketplace listings, and nothing to show a store buyer.",
    ],
    work: [
      "I designed the shop at shop.rekrd.io together with Linda, REKRD's Creative Director. Her packaging gave us the colours, the type and the flavour palette, so the shop feels like the product.",
      "We kept buying simple: a 5-sachet starter for R100 if you want to try it, the 30-sachet tube for R600, a subscribe-and-save option, and free delivery on the tube. The ingredients are laid out clearly, so people can see exactly what's in each sachet.",
      "Before settling on prices, I put together research on premium hydration brands here and overseas, so the pricing had some thinking behind it.",
      "For stores and distributors, I built a trade presenter: why it's worth stocking, answers to the usual questions, and a margin calculator buyers can run with their own numbers. We were careful with every product claim. It's a food product, not a medicine, and the wording has to reflect that.",
      "The third piece is the ambassador programme. Coaches, trainers and players already tell people to drink more water, so it made sense to give them an easy way to recommend REKRD. The site at coach.rekrd.io explains the offer, teaches them about the product so they can talk about it in their own words, shows what they could earn, and gives each ambassador their own discount code in Shopify.",
      "That code is how sales get tracked, which keeps things simple when someone says \"use my code\" at the padel club. Each night the site matches orders to codes and works out what each ambassador is owed, including refunds and subscription renewals. Ambassadors never see who their customers are.",
    ],
    landed: [
      "shop.rekrd.io is live and taking orders, with subscriptions switched on and a 5-star average from its first verified reviews.",
      "The ambassador programme is open for applications at coach.rekrd.io. Sales are tracked automatically, so working out what to pay ambassadors doesn't need a spreadsheet.",
      "The team also has a presenter they can send to any store buyer, and one list of open commercial decisions, so it's clear what's agreed and what still needs a conversation.",
    ],
    stats: [
      { value: "5.0", label: "Average rating from the first verified reviews" },
      { value: "3", label: "Ways to sell: online, in stores and through ambassadors" },
      { value: "5", label: "Flavours in the range" },
    ],
    built: [
      "Shop design, with the Creative Director",
      "Range, bundles and subscription set-up",
      "Market research",
      "Ambassador programme site and code tracking",
      "Trade presenter with margin calculator",
      "Commercial decision register",
    ],
    screens: [
      {
        src: "/img/clients/rekrd/ambassadors.jpg",
        alt: "Screenshot of the REKRD ambassador programme page: You already tell them to drink more water.",
        caption: "The ambassador site at coach.rekrd.io.",
        width: 1440,
        height: 900,
      },
    ],
    gallery: [
      {
        src: "/img/clients/rekrd/game-set.jpg",
        alt: "Tennis player mid-rally under the headline Game. Set. REKRD.",
        caption: "From the REKRD campaign.",
        width: 900,
        height: 1200,
      },
      {
        src: "/img/clients/rekrd/sachet-pour.jpg",
        alt: "A REKRD sachet being poured into a water bottle",
        caption: "One sachet in 500ml of cold water.",
        width: 900,
        height: 1200,
      },
      {
        src: "/img/clients/rekrd/tube.jpg",
        alt: "The REKRD powder-blue 30-sachet tube, beaded with water, reflected on a glossy surface",
        caption: "The 30-sachet tube.",
        width: 1120,
        height: 1400,
      },
    ],
  },
  {
    slug: "van-hunks",
    name: "Van Hunks",
    kind: "Sparkling wine",
    where: "Cape Town",
    year: "2026",
    hook: "A Cape Town sparkling wine house, getting ready to grow in the US.",
    hero: {
      src: "/img/clients/van-hunks/hero.jpg",
      alt: "Van Hunks non-alcoholic sparkling white and rosé with two glasses in late afternoon sun",
      caption: "The non-alcoholic sparkling white and rosé.",
      width: 1600,
      height: 1067,
    },
    brief: [
      "Van Hunks makes Cap Classique in Cape Town, using the same traditional method as Champagne. There are 6 wines, from a non-alcoholic sparkling white and rosé to a hand-painted Prestige Cuvée. The name comes from the Cape legend of Jan van Hunks, whose smoking contest with the devil is said to cause the tablecloth cloud on Table Mountain.",
      "The founders want to grow in America and asked for help telling that story to US investors. They already had a great brand, beautiful photography and the wine. The job was to bring it together in a way an American reader could follow, with numbers that stand up to questions.",
    ],
    work: [
      "We built the deck as a private web page rather than a PDF. One version can be sent with a password, and another runs as a password-protected site. Both are made from the same files, so they never drift apart.",
      "The numbers all come from the accountant's books. A script turns the books into the figures in the deck, so nothing gets retyped by hand, and when new books arrive we simply run it again. The five-year forecast works the same way.",
      "The brand had a shoot of more than 80 images. I prepared them for the deck, cutting the bottles out cleanly and adjusting the lifestyle shots, while keeping the colour of the wine true.",
      "Then the words. We rewrote the copy so it sounds like the two founders talking to someone who might back them: short sentences, plain words and no promises that aren't theirs to make. We also got the US details right. These wines are non-alcoholic, which on an American label is a different thing from alcohol-free.",
    ],
    landed: [
      "Van Hunks has a deck that sounds like its founders, with numbers taken straight from the books. They can send it with confidence and update it quickly when the numbers change.",
      "We're still working together, so there's more to this one that I can't share yet.",
    ],
    stats: [
      { value: "6", label: "Wines in the range" },
      { value: "80+", label: "Shoot images prepared for the deck" },
      { value: "1", label: "Set of books behind every number" },
    ],
    built: [
      "Private investor deck, two builds",
      "Financials straight from the books",
      "5-year forecast model",
      "Photography pipeline",
      "Copy in the founders' voice",
    ],
    gallery: [
      {
        src: "/img/clients/van-hunks/van.jpg",
        alt: "The Van Hunks delivery van, painted with the brand's woodcut character, outside the Old Biscuit Mill in Cape Town",
        caption: "The Van Hunks van at the Old Biscuit Mill, where the tasting room is.",
        width: 900,
        height: 1200,
      },
      {
        src: "/img/clients/van-hunks/table-mountain.jpg",
        alt: "Duotone photograph of the tablecloth cloud pouring over Table Mountain",
        caption: "The tablecloth over Table Mountain, the legend behind the name.",
        width: 1600,
        height: 789,
      },
      {
        src: "/img/clients/van-hunks/table.jpg",
        alt: "Friends around an outdoor table with Van Hunks sparkling wine and snacks",
        caption: "Sundowners with friends.",
        width: 1400,
        height: 934,
      },
    ],
  },
] as const;
