import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.entrepreneurcoach.co.za",
  trailingSlash: "never",
  prefetch: { prefetchAll: true, defaultStrategy: "viewport" },
  integrations: [
    mdx(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) =>
        !page.includes("/thanks") &&
        !page.includes("/404") &&
        !page.includes("/og/"),
      // note: the /thanks exclusion also catches /workshop/thanks
      serialize(item) {
        const url = item.url;
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
