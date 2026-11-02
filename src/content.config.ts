import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['individual', 'coletiva', 'transporte', 'produtos']),
    summary: z.string(),
    highlights: z.array(z.string()),
    order: z.number().default(0),
    badge: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const memorials = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/memorials' }),
  schema: z.object({
    name: z.string(),
    species: z.string(),
    family: z.string(),
    years: z.string(),
    message: z.string(),
    date: z.string(),
    photo: z.string().optional(),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = {
  services,
  memorials,
  faqs,
};
