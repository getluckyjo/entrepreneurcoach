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
    }),
});

export const collections = { journal };
