import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";
import { lingue } from "./i18n";

const colore = z.string().regex(/^#[0-9A-F]{6}$/i);
// Testo tradotto: uno per lingua, tutte obbligatorie.
const testo = z.object(Object.fromEntries(lingue.map((l) => [l, z.string()])) as Record<(typeof lingue)[number], z.ZodString>);
const storyId = z.string().regex(/^[a-z0-9-]+--[a-z0-9-]+$/);

const progetti = defineCollection({
  loader: file("src/content/progetti.json"),
  schema: ({ image }) =>
    z.object({
      ordine: z.number().int(),
      titolo: testo,
      nome: z.string(),
      descrizione: testo,
      sito: z.url(),
      repository: z.url(),
      design: z.url(),
      storybook: z.url().refine((u) => !/localhost|127\.0\.0\.1/.test(u), "Storybook deve essere pubblico"),
      coloriScuri: z.object({ primary: colore, secondary: colore, onSecondary: colore, onPrimary: colore, textPrimary: colore, textMuted: colore, canvas: colore, accento: colore, attivo: colore, onAttivo: colore }).optional(),
      colori: z.object({
        primary: colore,
        secondary: colore,
        onSecondary: colore,
        onPrimary: colore,
        textPrimary: colore,
        textMuted: colore,
        canvas: colore,
      }),
      home: z.object({ messaggio: testo.optional(), prodotto: z.string() }),
      logo: image(),
      logoConNome: z.boolean().default(false),
      panoramica: z.object({ titolo: testo, testo: testo, stack: z.string() }),
      interfaccia: z.object({
        desktop: z.object({ immagine: image(), didascalia: testo, story: storyId.optional() }),
        mobile: z.object({ immagine: image(), didascalia: testo, story: storyId.optional() }),
      }),
      tipografia: z.object({ font: z.string(), nota: testo, story: storyId, campione: image().optional() }),
      palette: z.object({ nome: testo, nota: testo, story: storyId }),
      componenti: z
        .array(z.object({ nome: testo, story: storyId, altezza: z.number().int().min(160).max(640) }))
        .min(1),
    }),
});

export const collections = { progetti };
