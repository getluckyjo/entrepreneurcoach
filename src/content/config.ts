import { defineCollection, z } from "astro:content";

const journal = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      /** Shorter title for search results (≤41 chars, the suffix adds 19). The H1 keeps `title`. */
      seoTitle: z.string().max(41).optional(),
      /** Meta description when `description`, which is also the visible lede, runs past 160 chars. */
      seoDescription: z.string().max(160).optional(),
      /** Show the annotated pitch-deck cards after the post (posts about decks and raising). */
      decks: z.boolean().default(false),
      /** A video embedded in the post, for VideoObject schema. */
      video: z
        .object({ youtubeId: z.string(), name: z.string(), uploadDate: z.coerce.date(), thumbnail: z.string() })
        .optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: z.enum(["Lecture", "Coaching", "Article", "Interview", "Field Notes", "Playbook"]),
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      /**
       * Which product the post's closing CTAs push — the footer button and the
       * full-bleed band. Defaults to the Founder Clinic; set "workshop" on posts
       * that argue for the workshop, so the page doesn't end by selling coaching.
       * Copy lives in the template, not here, so it stays in one place.
       */
      cta: z.enum(["clinic", "workshop"]).default("clinic"),
    }),
});

export const collections = { journal };
