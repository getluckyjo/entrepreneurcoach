import { defineCollection, z } from "astro:content";

const journal = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
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
