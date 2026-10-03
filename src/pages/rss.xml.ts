import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site } from "~/data/site";

/** The journal as an RSS feed, linked from every page's <head>. */
export const GET: APIRoute = async () => {
  const posts = (await getCollection("journal", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
  return rss({
    title: `${site.name}: Journal`,
    description: "Field notes for founders on pitch decks, fundraising and building brands out of South Africa.",
    site: site.domain,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.seoDescription ?? p.data.description,
      pubDate: p.data.pubDate,
      link: `/journal/${p.slug}`,
      categories: [p.data.category],
    })),
    customData: `<language>${site.locale.toLowerCase()}</language>`,
    trailingSlash: false,
  });
};
