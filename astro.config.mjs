import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import { readFileSync, readdirSync } from "node:fs";

/**
 * Real last-modified dates for the sitemap: journal posts from their
 * frontmatter, annotated decks from their `pubDate` constant. Pages without a
 * date get no <lastmod> at all, which beats stamping every URL with the build
 * time (Google stops trusting lastmod that changes on every deploy).
 */
const SITE = "https://www.entrepreneurcoach.co.za";
const lastmods = new Map();
for (const file of readdirSync("src/content/journal")) {
  const src = readFileSync(`src/content/journal/${file}`, "utf8");
  const date = src.match(/^updatedDate:\s*"?([\d-]+)/m)?.[1] ?? src.match(/^pubDate:\s*"?([\d-]+)/m)?.[1];
  if (date) lastmods.set(`${SITE}/journal/${file.replace(/\.mdx?$/, "")}`, date);
}
for (const dir of readdirSync("src/pages").filter((d) => /^the-.*-deck$/.test(d))) {
  const date = readFileSync(`src/pages/${dir}/index.astro`, "utf8").match(/const pubDate = new Date\("([\d-]+)"\)/)?.[1];
  if (date) lastmods.set(`${SITE}/${dir}`, date);
}

export default defineConfig({
  site: "https://www.entrepreneurcoach.co.za",
  trailingSlash: "never",
  // Hover, not viewport: viewport prefetched every nav and footer link on every page.
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  integrations: [
    mdx(),
    react(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      filter: (page) =>
        !page.includes("/thanks") &&
        !page.includes("/404") &&
        !page.includes("/og/") &&
        !page.includes("/download"),
      // note: the /thanks exclusion also catches /workshop/thanks; /download pages are noindex
      serialize(item) {
        const url = item.url;
        const lastmod = lastmods.get(url.replace(/\/$/, ""));
        if (lastmod) item.lastmod = new Date(lastmod).toISOString();
        if (/\/$/.test(url) && !/journal\/$/.test(url)) {
          // Homepage
          if (url === "https://www.entrepreneurcoach.co.za/") return { ...item, priority: 1.0, changefreq: "weekly" };
        }
        if (/\/coaching$/.test(url)) return { ...item, priority: 0.95, changefreq: "monthly" };
        if (/\/workshop$/.test(url)) return { ...item, priority: 0.95, changefreq: "weekly" };
        if (/\/about$/.test(url)) return { ...item, priority: 0.85, changefreq: "monthly" };
        if (/\/talks$/.test(url)) return { ...item, priority: 0.8, changefreq: "monthly" };
        if (/\/contact$/.test(url)) return { ...item, priority: 0.7, changefreq: "monthly" };
        if (/\/journal$/.test(url)) return { ...item, priority: 0.85, changefreq: "weekly" };
        if (/\/journal\//.test(url)) return { ...item, priority: 0.75, changefreq: "monthly" };
        if (/\/(privacy|terms)$/.test(url)) return { ...item, priority: 0.2, changefreq: "yearly" };
        return item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: "auto" },
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
