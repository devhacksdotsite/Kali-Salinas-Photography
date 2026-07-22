import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["families", "couples", "portraits", "weddings", "lifestyle"]),
    /** Cloudinary public ID for the image */
    image: z.string(),
    /** Alt text for accessibility */
    alt: z.string(),
    /** Display order (lower = first) */
    order: z.number().optional().default(0),
    /** Whether to feature on the home page */
    featured: z.boolean().optional().default(false),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { portfolio };
