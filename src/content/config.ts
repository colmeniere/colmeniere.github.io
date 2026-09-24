import { defineCollection, z } from 'astro:content';

const labelledValue = z.object({ label: z.string(), value: z.string() });
const agendaEvent = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use the date format YYYY-MM-DD'),
  venue: z.string(),
  city: z.string(),
  country: z.string(),
  label: z.string().default('Info'),
  url: z.string().optional(),
  title: z.string().optional(),
});

const works = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    headerImage: z.string(),
    year: z.number(),
    status: z.enum(['gira', 'creacion', 'archivo']),
    statusLabel: z.string(),
    duration: z.string(),
    format: z.string(),
    cardMeta: z.string(),
    cardDescription: z.string(),
    synopsis: z.string(),
    availability: z.string(),
    performers: z.string().optional(),
    language: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    credits: z.array(z.object({ role: z.string(), name: z.string() })).default([]),
    technical: z.array(labelledValue).default([]),
    support: z.array(z.string()).default([]),
    video: z.object({
      src: z.string(),
      poster: z.string().optional(),
      label: z.string(),
    }).optional(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    galleryCredit: z.string().optional(),
    pressQuotes: z.array(z.object({ source: z.string(), text: z.string() })).default([]),
    dossierUrl: z.string().optional(),
    agenda: z.array(agendaEvent).default([]),
  }),
});

export const collections = { works };
