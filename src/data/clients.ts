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
  /** "landscape" shows gallery images uncropped at 3:2. Default is 4:5 portrait. */
  galleryShape?: "portrait" | "landscape";
};

export const clients: readonly ClientStory[] = [
  {
    slug: "dona-fuego",
    name: "Doña Fuego",
    kind: "Tequila RTD",
    where: "Cape Town",
    year: "2026",
    hook: "A tequila spirit cooler from Cape Town, launched nationally with Checkers.",
    hero: {
      src: "/img/clients/dona-fuego/toast.jpg",
      alt: "Friends toasting with Doña Fuego cans over a braai table of corn, salads and meat, shot on a disposable camera",
      caption: "The toast, shot by one of the guests on a disposable camera.",
      width: 1800,
      height: 1207,
    },
    brief: [
      "Doña Fuego is a Cape Town distillery that makes a really good drink: real Mexican tequila and real juice in a 250ml can. Margarita, Spicy Margarita, Paloma and a non-alcoholic Margarita. When we started working together, the range had just cleared Checkers' tasting panels for a national launch.",
      "The founder had the product sorted. She wanted help with the rest: who it's for, how to launch it, how to talk to investors, and how to keep track of what's selling once it's in stores.",
    ],
    work: [
      "We started with when people actually drink it. About 95% of South African spirit coolers are vodka-based, so a tequila one had room to stand out. We settled on the cooler box: the braai, the boat, the weekend away. The drink you bring when everyone else brings wine.",
      "I've put brands on South African shelves before. Brannas Draught taught me how the trade really works, the pricing and the fight for the shelf, and Cape Spritz showed me a premium ready-to-drink can earn its place next to the big names. So we planned the launch around what matters with a national retailer: a partnership with a cooler brand, cooler boxes dropped at the right gatherings, a photo competition, a plan for the first 1,000 loyal customers, and trade effort focused on the stores most likely to sell.",
      "For content, we chose real over polished. We hosted a braai, handed the guests disposable cameras and let the afternoon happen. 679 photos came back, enough for months of social content that looks like people enjoying the drink, because they were.",
      "Raising money for The Duchess and for DOPE Drinks taught me what investors actually ask. We used that to shape Doña Fuego's investor story and the financial model behind it, so the founder can answer the hard questions with confidence.",
      "The big risk with a national retailer is not knowing what's selling until it's too late to act. So we set up a weekly view of sales and stock from Checkers' own reports. The founder can see which stores are moving and where to put her energy.",
    ],
    landed: [
      "Doña Fuego launched nationally in August 2026, exclusive to Checkers in 360 stores and on Sixty60, with 12 months of exclusivity.",
      "The founder went into launch with a clear position, a launch plan, investor material she's comfortable sending and a clear view of how the cans are selling. And the brand has a library of real photos from real people to post from for months.",
      "The sales view has since become a playbook I use with other brands selling into Checkers, Shoprite, Pick n Pay or Spar.",
    ],
    stats: [
      { value: "360", label: "Checkers stores at launch, plus Sixty60" },
      { value: "12", label: "Months of national exclusivity" },
      { value: "95%", label: "Of SA spirit coolers are vodka-based. The gap we went after." },
    ],
    built: [
      "Positioning and audience",
      "Launch and trade plan",
      "Social content strategy and braai shoot",
      "Investor story and financial model",
      "Investor site and dataroom",
      "Weekly retail sales view",
    ],
    gallery: [
      {
        src: "/img/clients/dona-fuego/armful-of-cans.jpg",
        alt: "A guest carrying an armful of Doña Fuego Paloma and Margarita cans",
        caption: "An armful of cans on the way to the cooler.",
        width: 1200,
        height: 804,
      },
      {
        src: "/img/clients/dona-fuego/kodak-cheers.jpg",
        alt: "A guest holding up a disposable camera and a Paloma can, cheersing towards the lens",
        caption: "Shooting back at the camera, Paloma in hand.",
        width: 1200,
        height: 811,
      },
      {
        src: "/img/clients/dona-fuego/cooler.jpg",
        alt: "A hand lifting a Spicy Margarita can out of a white cooler box",
        caption: "Straight out of the cooler box.",
        width: 1200,
        height: 811,
      },
      {
        src: "/img/clients/dona-fuego/corn.jpg",
        alt: "A guest biting into corn on the cob at sunset, with a light leak across the frame",
        caption: "Corn, sunset and a light leak. Exactly the kind of frame we wanted.",
        width: 1200,
        height: 811,
      },
      {
        src: "/img/clients/dona-fuego/laughing.jpg",
        alt: "A guest leaning back on a white bench, laughing",
        caption: "The laughs were not staged.",
        width: 1200,
        height: 811,
      },
      {
        src: "/img/clients/dona-fuego/glass.jpg",
        alt: "A guest blowing a kiss to the camera, holding a Doña Fuego cocktail in a coupe glass",
        caption: "Last light, coupe in hand.",
        width: 1200,
        height: 811,
      },
    ],
    galleryShape: "landscape",
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
      "REKRD's packaging was already premium, and premium is something I know. We built The Duchess brand-first, and that's how we approached REKRD: the shop, the price and the words all had to feel as considered as the tube.",
      "I designed shop.rekrd.io together with Linda, REKRD's Creative Director. We kept the offer simple: a R100 starter pack to try it, the R600 tube for regulars, subscribe and save, and free delivery on the tube. The pricing came from research into premium hydration brands in South Africa and overseas, so the tube sits where a premium product should.",
      "For stores, I drew on what Brannas Draught taught me about selling to the trade: a buyer wants to know why it will sell and what they'll make on it. We built a sales presenter that answers both, and kept every product claim careful, because it's a food product, not a medicine.",
      "The biggest opportunity was people. Get Lucky Golf has shown me how much a sporting community trusts the people in it. Coaches, trainers and players already tell their clients to drink more water, so we built an ambassador programme at coach.rekrd.io that gives them a simple, fair way to recommend REKRD and earn from it.",
    ],
    landed: [
      "shop.rekrd.io is live and taking orders, with subscriptions switched on and a 5-star average from its first verified reviews.",
      "The ambassador programme is open for applications at coach.rekrd.io.",
      "REKRD now has three ways to sell, online, in stores and through ambassadors, and a clear list of the commercial decisions still to make.",
    ],
    stats: [
      { value: "5.0", label: "Average rating from the first verified reviews" },
      { value: "3", label: "Sales channels: online, stores and ambassadors" },
    ],
    built: [
      "Brand and pricing strategy",
      "Shop design, with the Creative Director",
      "Market research",
      "Trade sales presenter",
      "Ambassador programme",
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
      "Taking a non-alcoholic drink from Cape Town to the world is close to home for me. With The Duchess, we built the world's first non-alcoholic gin and tonic here and shipped it to more than 10 countries, with over half the revenue from export. With DOPE Drinks, I built a brand for the US market, raised money there and launched at BevNET in New York. Van Hunks gets both of those experiences.",
      "We worked on what an American investor needs to hear: why non-alcoholic, why now, why this brand, and how they'll grow in the US. The non-alcoholic sparkling white and rosé lead the story, with the traditional Cap Classique range behind them.",
      "Then the deck itself. We rewrote it so it sounds like the two founders talking to someone who might back them, with every number coming straight from their books. We also got the US details right: these wines are non-alcoholic, which on an American label means something different from alcohol-free.",
    ],
    landed: [
      "Van Hunks has a US growth story that sounds like its founders and stands on real numbers.",
      "We're still working together, so there's more to this one that I can't share yet.",
    ],
    stats: [
      { value: "10+", label: "Countries I took The Duchess to, a non-alcoholic brand from Cape Town" },
      { value: "42", label: "US states DOPE Drinks ships into, a brand I built for America" },
    ],
    built: [
      "US growth strategy",
      "Investor story and deck",
      "Financials and five-year forecast",
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
