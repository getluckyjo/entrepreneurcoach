/*
 * LinkedIn posts for the Claude for Entrepreneurs workshop.
 *
 * Built for copy-paste: each post lives on its own page with no bullets,
 * no bold inside the body, and no smart-formatting that LinkedIn would
 * strip or mangle. Select the block, copy, paste.
 */
const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel,
  AlignmentType, PageBreak, BorderStyle, ShadingType,
  Table, TableRow, TableCell, WidthType,
} = require("docx");

const RED = "F25C2A";
const INK = "0E0E10";
const MUTED = "6F6F73";
const RULE = "E0DED7";
// Arial, not Aptos: Aptos ships with Microsoft 365 but is absent elsewhere, and
// the fallback is a serif — wrong for a brand built on a grotesque.
const FONT = "Arial";

const OUT =
  "/Users/johannesleroux/iCloud Drive (Archive)/Desktop/Coaching & Entrepreneur/" +
  "Entrepreneur Coach Website/site/marketing/linkedin/linkedin-posts.docx";

/** Body paragraph of a post — the text that actually gets pasted. */
const body = (text) =>
  new Paragraph({
    spacing: { after: 220, line: 300 },
    children: [new TextRun({ text, font: FONT, size: 23, color: INK })],
  });

const label = (text, color = MUTED) =>
  new Paragraph({
    spacing: { after: 120 },
    children: [
      new TextRun({
        text, font: FONT, size: 17, bold: true, color,
        characterSpacing: 40, allCaps: true,
      }),
    ],
  });

const postTitle = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { after: 80 },
    children: [new TextRun({ text, font: FONT, size: 36, bold: true, color: INK })],
  });

const meta = (text) =>
  new Paragraph({
    spacing: { after: 320 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 10 } },
    children: [new TextRun({ text, font: FONT, size: 19, color: MUTED, italics: true })],
  });

/** Builds one post section. */
function post({ n, title, when, image, lines, last }) {
  const out = [
    label(`Post ${n}`, RED),
    postTitle(title),
    meta(`${when}   ·   Image: ${image}`),
    ...lines.map(body),
  ];
  if (!last) out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

const POSTS = [
  {
    n: 1,
    title: "The announcement",
    when: "Post first — Wednesday 29 July",
    image: "card-1.png",
    lines: [
      "15 years of writing briefs.",
      "That's the thing I keep coming back to.",
      "Every business I've built — Brannas, The Duchess, DOPE, Cape Spritz, Suncamino, Get Lucky Golf — came down to how well I could explain what I wanted to someone else. A designer. A distributor. A co-founder. An investor.",
      "Turns out that's the whole skill with AI too.",
      "Most people are typing questions into Claude and getting thin answers back. They're asking. They're not briefing. And the gap between people who get real work out of this and people who don't has almost nothing to do with technical ability.",
      "I've been obsessed with this for months. Reading everything, testing everything, breaking things.",
      "The other thing I've learnt about myself: I love teaching this stuff. So I'm running a workshop.",
      "Claude for Entrepreneurs. Saturday 22 August, 10:00–13:00. Ideas Cartel, Claremont. 8 seats.",
      "You bring a laptop and one real, messy job from your business. You leave with it running. Not a lecture, not a folder of notes about AI — one thing in your business actually working before you walk out.",
      "R3,500 for the founding cohort.",
      "entrepreneurcoach.co.za/workshop",
      "8 seats, and I mean 8.",
    ],
  },
  {
    n: 4,
    title: "What you can build",
    when: "Post second — Monday 3 August",
    image: "card-4.png",
    lines: [
      "Things you could make before lunch:",
      "A 5-year cashflow model with real COS and channel margins. Your month-end pack, rebuilt from the source spreadsheets instead of by hand. An investor deck you can actually defend in the room. A Monday 07:00 business brief that writes itself. A dashboard you send someone a link to. The SOPs you've never got around to writing down.",
      "None of that needs a developer. None of it needs you to learn to code.",
      "I charge R15,000 to build a 5-year model for a founder. That's a fair price for the work — it takes me days and it holds up in a room full of investors.",
      "It also means that if you walk out of a R3,500 workshop able to build your own, you've paid for the seat four times over before you've had lunch.",
      "That's not the pitch though. The pitch is what happens after.",
      "Once you can do this, the bigger stuff opens up: a sales pipeline that researches and drafts the follow-up while you approve. Customer relationships run by exception, so you only see the ones that need you. Recruitment screening against your actual scorecard.",
      "I'm not going to pretend anyone finishes those in an afternoon. Mine took longer than that. But you don't get there without the foundation, and the foundation is 3 hours.",
      "Claude for Entrepreneurs. Saturday 22 August, Ideas Cartel, Claremont. 8 seats.",
      "entrepreneurcoach.co.za/workshop",
    ],
  },
  {
    n: 2,
    title: "Clone yourself",
    when: "Post third — Monday 10 August",
    image: "card-2.png",
    lines: [
      "Every founder I know has said some version of this:",
      "“If I could just clone myself into 5 people, I'd be fine.”",
      "You don't need 5 of you. You need to stop being the constraint.",
      "I've been building businesses for 15 years. The bottleneck was never ideas. It was that I was the only one who could write the brief, build the model, chase the follow-up, rebuild the same management pack out of six spreadsheets every single month.",
      "Every mentor I've ever had says the same thing. Work smarter, not harder.",
      "Nobody ever explained how.",
      "Here's what actually changed: you can now scale your intelligence, not just your hours.",
      "That's a different thing entirely. Hiring scales hours. This scales judgement — your context, your standards, your way of doing things, running on the work you'd otherwise be doing at 11pm.",
      "I'm running a 3-hour workshop on exactly this. Saturday 22 August, 8 people, Ideas Cartel in Claremont.",
      "Bring the job you hate most. Leave with it running.",
      "entrepreneurcoach.co.za/workshop",
    ],
  },
  {
    n: 3,
    title: "The 4-Hour Work Week",
    when: "Post last — Monday 17 August, 5 days out",
    image: "card-3.png",
    last: true,
    lines: [
      "The first one-person billion dollar company is now genuinely possible.",
      "I don't say that as a hype line. I say it as someone who's built six businesses and knows exactly how many people it used to take.",
      "Think about what Tim Ferriss actually wrote in The 4-Hour Work Week. Automate. Delegate. Build systems that run without you. Own your time.",
      "That book was the original prompt guide.",
      "He was right about everything except the tooling. You still needed a team of VAs and a lot of hope.",
      "Now the tooling exists.",
      "The first principles of business haven't moved: know your customer, control your costs, protect your margin, ship faster than the other guy. What changed is how few people you need to do it.",
      "I'm not that interested in AI as a topic. I'm interested in what it does to the shape of a business.",
      "Saturday 22 August. 10:00–13:00. Ideas Cartel, Claremont. 8 seats. Bring a laptop and one real job from your venture.",
      "Claude for Entrepreneurs. R3,500 founding rate.",
      "entrepreneurcoach.co.za/workshop",
    ],
  },
];

/* ── Cover ── */
const cover = [
  label("Workshop", RED),
  new Paragraph({
    spacing: { after: 60 },
    children: [new TextRun({ text: "Claude for Entrepreneurs", font: FONT, size: 52, bold: true, color: INK })],
  }),
  new Paragraph({
    spacing: { after: 400 },
    children: [new TextRun({ text: "Four LinkedIn posts", font: FONT, size: 32, bold: true, color: RED, italics: true })],
  }),
  new Paragraph({
    spacing: { after: 100, line: 300 },
    children: [new TextRun({
      text: "Saturday 22 August 2026  ·  10:00–13:00  ·  Ideas Cartel, Claremont  ·  8 seats  ·  R3,500 founding rate",
      font: FONT, size: 21, color: INK,
    })],
  }),
  new Paragraph({
    spacing: { after: 400, line: 300 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 12 } },
    children: [new TextRun({ text: "entrepreneurcoach.co.za/workshop", font: FONT, size: 21, color: MUTED })],
  }),
  label("How to use this"),
  ...[
    "Each post is on its own page. Select the body text, copy, paste straight into LinkedIn — there's no formatting to strip.",
    "Post order is deliberate: who you are, then what they'd build, then the pain, then the big idea. Post 1 leads because the credibility is concrete; post 4 comes second because the R15,000-versus-R3,500 line is the strongest argument you have.",
    "LinkedIn cuts the preview at roughly 210 characters, so the first two lines carry the post. They're written to work alone.",
    "LinkedIn also suppresses posts containing outbound links. If reach matters more than clicks, delete the URL from the body and put it in the first comment instead.",
    "Attach the matching card from this folder to each post.",
  ].map(body),
];

const doc = new Document({
  creator: "Johannes le Roux",
  title: "Claude for Entrepreneurs — LinkedIn posts",
  description: "Four LinkedIn posts promoting the 22 August 2026 workshop",
  styles: { default: { document: { run: { font: FONT, size: 23, color: INK } } } },
  sections: [
    {
      properties: {
        // US Letter; docx-js defaults to A4.
        page: { size: { width: 12240, height: 15840 }, margin: { top: 1080, right: 1440, bottom: 1080, left: 1440 } },
      },
      children: [
        ...cover,
        new Paragraph({ children: [new PageBreak()] }),
        ...POSTS.flatMap(post),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(OUT, buf);
  console.log("wrote", OUT, buf.length, "bytes");
});
