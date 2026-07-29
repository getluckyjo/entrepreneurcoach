# entrepreneurcoach.co.za — site

Custom build of [www.entrepreneurcoach.co.za](https://www.entrepreneurcoach.co.za) — Astro 5 + Tailwind 4, statically generated, deployable to Vercel/Netlify/Cloudflare in a click.

The current Squarespace site stays live until this one is ready. Plan: build → review → migrate DNS.

---

## Quick start

```bash
cd site
npm install
npm run dev      # http://localhost:4321
```

```bash
npm run build    # → dist/ (deploy this)
npm run preview  # serve dist/ locally to sanity-check
```

Node 20+ recommended.

## Deploy

| Host | Command | Notes |
| --- | --- | --- |
| **Vercel** | `vercel` (or push to a Vercel Git project) | Zero config — Astro is detected. |
| **Netlify** | drag `dist/` to deploy, or connect a Git repo | Set build = `npm run build`, publish = `dist`. |
| **Cloudflare Pages** | connect repo | Same build / publish settings as Netlify. |

After first deploy, point `entrepreneurcoach.co.za` and `www.entrepreneurcoach.co.za` at the host. Set both apex and `www` to redirect to `https://www.entrepreneurcoach.co.za` (canonical in `astro.config.mjs`).

## Environment variables

Copy `.env.example` → `.env.local` and fill in what you have. Everything is optional — the contact form already works (formsubmit.co forwards to `site.email`), and the analytics blocks no-op when unset.

| Key | What it does |
| --- | --- |
| `PUBLIC_GA4_ID` | Google Analytics 4 measurement ID. Loads only after consent. Optional — Plausible is the default. |
| `PUBLIC_GSC_VERIFICATION` | Google Search Console `google-site-verification` content value. |
| `PUBLIC_BING_VERIFICATION` | Bing Webmaster Tools `msvalidate.01` content value. |
| `PUBLIC_NEWSLETTER_ENDPOINT` | (Reserved — wire when newsletter ships.) |

Plausible is hardcoded in `BaseLayout.astro` (the account ID is part of the script URL) and gated to production builds.

## Project layout

```
site/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── img/
│       ├── johannes-portrait.jpg   ← hero / about portrait
│       └── og-default.svg          ← social share image
└── src/
    ├── content/
    │   ├── config.ts               ← typed schema for journal posts
    │   └── journal/                ← MDX posts (one file per post)
    ├── data/
    │   └── site.ts                 ← single source of truth: ventures, offers, talks, FAQs
    ├── lib/
    │   └── seo.ts                  ← schema.org JSON-LD builders
    ├── components/
    │   ├── layout/                 ← BaseLayout, Nav, Footer, CookieBanner
    │   ├── home/                   ← Hero, BuiltStrip, Offers, Process, …
    │   └── ui/                     ← Button, Marquee, SectionHeader, PlaceholderBadge
    ├── pages/
    │   ├── index.astro             ← homepage
    │   ├── about.astro
    │   ├── coaching.astro
    │   ├── contact.astro
    │   ├── talks.astro
    │   ├── journal/
    │   │   ├── index.astro
    │   │   └── [...slug].astro
    │   ├── privacy.astro
    │   ├── terms.astro
    │   ├── thanks.astro
    │   └── 404.astro
    └── styles/
        └── global.css              ← design tokens + utilities
```

## Adding a new idea

The codebase is built so that every common change is one or two files.

| Change | Where |
| --- | --- |
| New venture (Golf Day Pro / Site Pro / network) | `src/data/site.ts` → `ventures` array |
| New coaching package | `src/data/site.ts` → `offers` array |
| New talk | `src/data/site.ts` → `talks` array |
| New journal post | drop a new `.mdx` file in `src/content/journal/` |
| New FAQ | `src/data/site.ts` → `faqs` array (schema auto-updates) |
| New press mention | `src/data/site.ts` → `press` array |
| Pricing change | `src/data/site.ts` → `offers[].price` (and `priceNumeric` for schema) |
| Sept-2026 Network waitlist | new component in `src/components/home/`, slot it into `src/pages/index.astro`; data goes in `src/data/site.ts` |

## Things to do before public launch

1. **Activate the contact form**: submit a test enquiry once, then click the formsubmit.co activation link emailed to `leroux.johannes@gmail.com` (one-time, then it just works).
2. **(Eventually)** swap `site.email` from the gmail to `johannes@entrepreneurcoach.co.za` once forwarding is configured at the registrar / Workspace.
3. **Set `whatsapp` and any social URLs** in `src/data/site.ts`.
4. **Render a proper PNG for `og-default`** (the SVG works but a 1200×630 PNG renders more reliably across social platforms).
5. **Run a final pass** on the three draft pillar posts (`*.mdx` with `draft: true`) and remove the `draft: true` flag.
6. **Register Google Business Profile** at the Mercantile Building address.
7. **Install Google Search Console** and submit `sitemap-index.xml`.

## Design tokens

All in `src/styles/global.css`:

- `--color-paper` `#FFFFFF` — white background
- `--color-ink` `#0E0E10` — text
- `--color-red` `#F25C2A` — vermilion accent for CTAs, italic display, links (variable name historical — value is vermilion)
- `--color-blue` `#2D55FF` — editorial secondary
- `--color-night` `#0A0A0C` — full-bleed dark sections
- `--font-display` / `--font-sans` Geist Variable (one family, full weight range)
- `--font-script` Caveat (handwritten signature accent)

Full design system: see [DESIGN.md](DESIGN.md).

Change them in one place, the whole site updates.

## Why this stack

- **Astro** — ships zero JavaScript by default. Pages are static HTML, hydration only where you ask. LCP target < 1.2s, INP irrelevant, CLS 0.
- **Tailwind 4** — design tokens live in CSS, not a JS config. Fewer moving parts.
- **MDX content collections** — typed frontmatter (`title`, `pubDate`, `category`, …); the schema is enforced at build time so a broken post can't ship.
- **Native View Transitions** — smooth nav between pages without a SPA.

## Audit reference

The accompanying audit lives at `../entrepreneurcoach-audit-2026-04-30.md`. Every architectural choice in this project maps to a finding there — it's the "why" if you want to override a "what".
