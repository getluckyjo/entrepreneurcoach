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
  /** Public link to the client's live work, where there is one. */
  url?: { href: string; label: string };
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
  gallery: readonly ClientImage[];
};

export const clients: readonly ClientStory[] = [
  {
    slug: "dona-fuego",
    name: "Doña Fuego",
    kind: "Tequila RTD",
    where: "Cape Town",
    year: "2026",
    hook: "A tequila spirit cooler, from a launch order to a business you can see.",
    hero: {
      src: "/img/clients/dona-fuego/three-cans.jpg",
      alt: "Doña Fuego Spicy Margarita, Margarita and Paloma cans held side by side",
      caption: "The range. Margarita, Spicy Margarita and Paloma, from the launch shoot.",
      width: 1800,
      height: 1350,
    },
    brief: [
      "A Cape Town distillery with a genuinely great liquid: real Mexican tequila and real juice in a 250ml can. Margarita, Spicy Margarita, Paloma, and a non-alcoholic Margarita. The range had just cleared Checkers' tasting panels for a national launch.",
      "The founder knew how to make it. What the business needed was everything around the can: who it's for, how it launches, how to talk to investors, and how to see what's actually selling once it's on shelf.",
    ],
    work: [
      "We started with the occasion, not the product. About 95% of South African spirit RTDs are vodka-based, so the white space was obvious. We landed on share of the cooler box: the braai, the boat, the beach house. The drink you bring when everyone else brings wine.",
      "From there we built the launch: a cooler-brand partnership, surprise cooler-box drops, a photo competition, and a plan to find the first 1,000 true fans. Trade marketing focused on the stores that would move the most cans, not on all of them.",
      "Then the investor side. A one-page investor site that makes the case in 60 seconds, and behind it a dataroom that investors only reach after signing an NDA online and being approved by the founder. Every number on it traces back to a single pro forma model. If it isn't in the workbook, it isn't on the page.",
      "The part I'm proudest of is the dashboard. Every week Checkers sends a sales email and the distribution centres export stock files. Before, someone copy-pasted those into a spreadsheet. Now a script reads them every 6 hours, fills one Google Sheet, and a private dashboard shows what matters: stock shipped in against stock actually sold, what's sitting in the channel, how long it will last, and live trading against plan. It's tested against the real retailer email format, so a changed column doesn't quietly break the numbers.",
    ],
    landed: [
      "Doña Fuego launched nationally in August 2026, exclusive to Checkers: 360 stores plus Sixty60 delivery, with 12 months of exclusivity.",
      "The founder walked into launch with a positioning she can repeat in one line, investor materials that hold up to questions, and a live view of the business that updates itself. The weekly copy-paste job is gone.",
      "I've since turned the dashboard into a repeatable playbook for any brand selling into Checkers, Shoprite, Pick n Pay or Spar.",
    ],
    stats: [
      { value: "360", label: "Checkers stores at launch, plus Sixty60" },
      { value: "12", label: "Months of national exclusivity" },
      { value: "6h", label: "Retailer data refresh. No copy-paste." },
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
        caption: "The occasion. A long table, a sunset, and the drink everyone brought.",
        width: 1050,
        height: 1400,
      },
      {
        src: "/img/clients/dona-fuego/lineup.jpg",
        alt: "Paloma, Margarita and Spicy Margarita cans on a stone board with fresh chillies and lime",
        caption: "Real tequila, real juice. The line-up for trade.",
        width: 1050,
        height: 1400,
      },
      {
        src: "/img/clients/dona-fuego/paloma-pour.jpg",
        alt: "A Doña Fuego Paloma being poured into a salt-rimmed glass beside fresh grapefruit",
        caption: "Paloma, poured over grapefruit.",
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
    hook: "A premium hydration brand, from beautiful packaging to a shop that sells.",
    url: { href: "https://shop.rekrd.io", label: "shop.rekrd.io" },
    hero: {
      src: "/img/clients/rekrd/hero.jpg",
      alt: "Five REKRD electrolyte sachets side by side, each with a different flavour colour",
      caption: "5 flavours, 1 sachet a day. The range the shop was built to sell.",
      width: 1400,
      height: 1008,
      fit: "contain",
    },
    brief: [
      "REKRD is a clean electrolyte powder in single-serve sachets, sold in a collectible 30-sachet tube. Retro, premium, country club rather than locker room. Built for people who play golf and padel, fly long-haul and work late, not just for hard-core athletes.",
      "The packaging was beautiful. But there was no shop, and without one there was no payment provider, no marketplace listing and no first sale. And no way to put the product in front of a store buyer.",
    ],
    work: [
      "I worked side by side with Linda, REKRD's Creative Director, to design the real shop at shop.rekrd.io. Her packaging set the rules: the colours, the type, the flavour spectrum. The shop looks like the tube because it's built from the tube.",
      "It's a shop built to convert, not just to look good. A 5-sachet starter at R100 for people who want to try it, the 30-sachet tube at R600, subscribe and save, and free delivery that the tube clears on its own. The formula is laid out like a spec sheet, so anyone can read exactly what's in a sachet.",
      "Behind it sits a market research deep dive on premium hydration, globally and in South Africa, so the price point had a reason behind it.",
      "Then the trade side. A trade presenter for independent stores and distributors: the pitch, why to stock it, the answers to the usual objections, and a margin calculator buyers run with their own numbers. Every claim was checked against strict product-claims rules. A foodstuff can't promise what a medicine can, and a buyer notices when you try.",
    ],
    landed: [
      "shop.rekrd.io is live and taking orders, with subscriptions switched on and a perfect 5-star average from its first verified reviews.",
      "The team has a tool they can send to any buyer, and every open commercial decision lives on one register, so everyone knows what's settled and what's still on the table.",
    ],
    stats: [
      { value: "5.0", label: "Star average from the first verified reviews" },
      { value: "2", label: "Channels built: direct and trade" },
      { value: "5", label: "Flavours, one design language" },
    ],
    built: [
      "Shop design, with the Creative Director",
      "Range, bundles and subscription set-up",
      "Market research",
      "Trade presenter with margin calculator",
      "Commercial decision register",
    ],
    gallery: [
      {
        src: "/img/clients/rekrd/game-set.jpg",
        alt: "Tennis player mid-rally under the headline Game. Set. REKRD.",
        caption: "Game. Set. REKRD. Lifestyle over locker room.",
        width: 900,
        height: 1200,
      },
      {
        src: "/img/clients/rekrd/sachet-pour.jpg",
        alt: "A REKRD sachet being poured into a water bottle",
        caption: "1 sachet, 500ml of cold water. That's the ritual.",
        width: 900,
        height: 1200,
      },
      {
        src: "/img/clients/rekrd/tube.jpg",
        alt: "The REKRD powder-blue collectible 30-sachet tube",
        caption: "The tube you keep long after the last sachet.",
        width: 896,
        height: 1200,
      },
    ],
  },
  {
    slug: "van-hunks",
    name: "Van Hunks",
    kind: "Sparkling wine",
    where: "Cape Town",
    year: "2026",
    hook: "A Cape Classique house, and a growth story built to cross the Atlantic.",
    hero: {
      src: "/img/clients/van-hunks/hero.jpg",
      alt: "Van Hunks non-alcoholic sparkling white and rosé with two glasses in late afternoon sun",
      caption: "The non-alcoholic pair. Where the US story starts.",
      width: 1600,
      height: 1067,
    },
    brief: [
      "Van Hunks makes Cap Classique, the traditional method, in Cape Town. 6 wines, from a non-alcoholic sparkling white and rosé to a hand-painted Prestige Cuvée. The name comes from the Cape legend of Jan van Hunks, whose smoking contest with the devil puts the tablecloth on Table Mountain.",
      "The founders wanted to grow in America and needed to tell that story to US investors. They had the brand, the photography and the wine. What they needed was a story an American reader could follow, built on numbers that hold up.",
    ],
    work: [
      "The deck is a web page, not a PDF, and it's private. One version can be sent on its own and opens with a key. The other runs as a password-protected site. Both are built from the same source, so there's only ever one version of the truth.",
      "The numbers come from one place: the accountant's books go in, a script does the work, and the figures come out. No number in that deck was typed by hand. When new books arrive, we run the script again. The forecast works the same way: change an assumption and the chart and table redraw themselves.",
      "We put the photography to work. A shoot of more than 80 images went through a pipeline that grades the lifestyle shots, cuts the bottles out cleanly, and gives text a readable background where it needs one, without flattening the colour of the wine.",
      "Then the words. Every line was rewritten so it reads like the two founders talking straight to someone who might back them. Short sentences, plain words, nothing promised that isn't theirs to promise. And the details that matter in America got fixed: these wines are non-alcoholic, not alcohol-free, and on a US label that distinction counts.",
    ],
    landed: [
      "Van Hunks now has a growth story that reads like its founders and numbers that come straight from the books. It's a private deck they can send with confidence, and they can rebuild it in minutes when the numbers move.",
      "The work is ongoing, so the rest of this story stays in the room for now.",
    ],
    stats: [
      { value: "0", label: "Figures typed by hand" },
      { value: "6", label: "Wines, one story" },
      { value: "80+", label: "Images from one shoot, graded for the deck" },
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
        caption: "The Van Hunks van at the Old Biscuit Mill, home of the tasting room.",
        width: 900,
        height: 1200,
      },
      {
        src: "/img/clients/van-hunks/table-mountain.jpg",
        alt: "Duotone photograph of the tablecloth cloud pouring over Table Mountain",
        caption: "The tablecloth over Table Mountain, given the heavy treatment for type to sit on.",
        width: 1600,
        height: 789,
      },
      {
        src: "/img/clients/van-hunks/table.jpg",
        alt: "Friends around an outdoor table with Van Hunks sparkling wine and snacks",
        caption: "Sundowners, the occasion the brand wants to own.",
        width: 1400,
        height: 934,
      },
    ],
  },
] as const;
