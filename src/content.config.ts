import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const colore = z.string().regex(/^#[0-9A-F]{6}$/i);
const storyId = z.string().regex(/^[a-z0-9-]+--[a-z0-9-]+$/);

const progetti = defineCollection({
  loader: file("src/content/progetti.json"),
  schema: ({ image }) =>
    z.object({
      ordine: z.number().int(),
      titolo: z.string(),
      nome: z.string(),
      descrizione: z.string(),
      sito: z.url(),
      repository: z.url(),
      design: z.url(),
      storybook: z.url().refine((u) => !/localhost|127\.0\.0\.1/.test(u), "Storybook deve essere pubblico"),
      colori: z.object({
        primary: colore,
        secondary: colore,
        onSecondary: colore,
        onPrimary: colore,
        textPrimary: colore,
        textMuted: colore,
        canvas: colore,
      }),
      home: z.object({ messaggio: z.string().optional(), prodotto: z.string() }),
      logo: image(),
      logoConNome: z.boolean().default(false),
      panoramica: z.object({ titolo: z.string(), testo: z.string(), stack: z.string() }),
      interfaccia: z.object({
        desktop: z.object({ immagine: image(), didascalia: z.string(), story: storyId.optional() }),
        mobile: z.object({ immagine: image(), didascalia: z.string(), story: storyId.optional() }),
      }),
      tipografia: z.object({ font: z.string(), nota: z.string(), story: storyId, campione: image().optional() }),
      palette: z.object({ nome: z.string(), nota: z.string(), story: storyId }),
      componenti: z
        .array(z.object({ nome: z.string(), story: storyId, altezza: z.number().int().min(160).max(640) }))
        .min(1),
    }),
});

export const collections = { progetti };
