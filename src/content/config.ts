// 1. Import utilities from `astro:content`
import { z, reference, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      // cover: image().refine((img) => img.width >= 1080, {
      //   message: "Cover image must be at least 1080 pixels wide!",
      // }),
      image: z.object({
        src: image().refine((img) => img.width >= 1080, {
          message: "Cover image must be at least 1080 pixels wide!",
        }),
        alt: z.string(),
      }),
      // coverAlt: z.string(),
      authors: z.array(reference("authors")),
      date: z.string().transform((str) => new Date(str)),
      description: z.string(),
    }),
});

const authorsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      displayName: z.string(),
      role: z.string(),
      firstName: z.string().optional(),
      lastName: z.string().optional(),
      image: image().refine((img) => img.width >= 120, {
        message: "Cover image must be at least 120 pixels wide!",
      }),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
};
