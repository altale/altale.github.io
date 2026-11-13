import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const posts = defineCollection({
  // 文章放在 src/content/posts/ 下，.md 或 .mdx
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverCaption: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
