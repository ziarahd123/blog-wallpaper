import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    heroImage: z.string(),
    category: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog,
};