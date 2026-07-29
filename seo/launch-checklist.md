# Launch checklist — entrepreneurcoach.co.za

Run this on the day of cutover, top to bottom.

## T-7 days (pre-launch)

- [ ] Strip EXIF from `public/img/johannes-portrait.jpg` (`exiftool -all= public/img/johannes-portrait.jpg`).
- [ ] Add the missing journal post: *"What a pitch deck coach actually does (and what we don't)"* targeting "pitch deck coach South Africa".
- [ ] Decide on phone number — supply real or leave blank everywhere (currently `site.whatsapp = "+27000000000"` and is not rendered).
- [ ] Confirm `entrepreneurcoach.co.za` is the production domain. If not, update `astro.config.mjs` `site` and `src/data/site.ts` `domain`.
- [ ] Set Vercel env vars:
  - `PUBLIC_GSC_VERIFICATION` — Google Search Console verification token
  - `PUBLIC_BING_VERIFICATION` — Bing Webmaster verification token
  - `PUBLIC_PLAUSIBLE_DOMAIN` — `entrepreneurcoach.co.za` (Plausible) **or**
  - `PUBLIC_GA4_ID` — GA4 measurement ID (only one of the two)
- [ ] Confirm the formsubmit.co verification email lands at `leroux.johannes@gmail.com` and click the activate link (only required once).

## T-1 day

- [ ] `npm run build` — confirm no errors, sitemap-index.xml generated, `/og/*.svg` endpoints render.
- [ ] Lighthouse run (mobile) — target Performance ≥ 90, SEO = 100, Accessibility ≥ 95.
- [ ] Validate JSON-LD with Google's Rich Results Test on home, /coaching, /about, one journal post.
- [ ] Twitter Card validator on home + /coaching.
- [ ] LinkedIn Post Inspector on home + one journal post.

## T-0 (cutover day)

- [ ] Point DNS: A record for apex → Vercel, CNAME for www → Vercel.
- [ ] Verify `https://www.entrepreneurcoach.co.za` resolves and apex 301-redirects to www (vercel.json handles this).
- [ ] **Add a redirect from `entrepreneurcoach.vercel.app` → production domain.** Vercel can't do host-rewrites between projects; the cleanest move is to change the preview project's domain alias so the vercel.app URL is no longer canonical. If staging needs to stay reachable, add `<meta name="robots" content="noindex" />` via a build-time env var.
- [ ] Submit `https://www.entrepreneurcoach.co.za/sitemap-index.xml` to Google Search Console.
- [ ] Submit the same to Bing Webmaster Tools.
- [ ] Set canonical domain (www) preference in Search Console.
- [ ] Request indexing for the top 5 pages in GSC: `/`, `/coaching`, `/about`, `/journal`, `/journal/the-pitch-deck-that-raised`.
- [ ] Spot-check `view-source:` on home — confirm `<title>`, canonical, OG, and JSON-LD are present.
- [ ] Spot-check `https://www.entrepreneurcoach.co.za/robots.txt` — confirm sitemap line points at production host.
- [ ] Publish the Google Business Profile (see `seo/gbp-brief.md`).

## T+7 days

- [ ] First GSC crawl review — fix any reported issues.
- [ ] Verify Knowledge Panel eligibility: search "Johannes le Roux entrepreneur coach" in incognito and confirm Person schema is reflected.
- [ ] Run a backlink push: pitch one article to How We Made It in Africa, one to Daily Maverick Business, one to Heavy Chef.
- [ ] Confirm GA4 / Plausible is reporting traffic.

## T+30 days

- [ ] Open GSC Performance and check top queries — adjust meta descriptions for any high-impressions / low-CTR pages.
- [ ] Add the next 2 journal posts targeting unranked primary keywords ("fundraising coach South Africa", "5-year financial model for fundraising").
- [ ] Generate per-post raster OG images (Twitter prefers PNG) — use `satori` + `@resvg/resvg-js` if/when it becomes worth the dep. Default SVG is acceptable for LinkedIn, Slack, iMessage, WhatsApp, Facebook in the meantime.

## Reusable verification commands

```bash
# Sitemap & robots
curl -s https://www.entrepreneurcoach.co.za/sitemap-index.xml | head
curl -s https://www.entrepreneurcoach.co.za/robots.txt

# Headers (HSTS, CSP, cache)
curl -sI https://www.entrepreneurcoach.co.za/

# JSON-LD on home
curl -s https://www.entrepreneurcoach.co.za/ | grep -oE '<script type="application/ld\+json">[^<]+' | head

# OG meta
curl -s https://www.entrepreneurcoach.co.za/coaching | grep -E 'og:(title|description|image)' | head
```
