# Portfolio · Paolo Laddomada

Sito statico in [Astro](https://docs.astro.build) con Tailwind v4. Nel browser non arriva nessun framework: solo HTML, CSS e due piccoli script.

## Comandi

| Comando           | Cosa fa                                                              |
| ----------------- | -------------------------------------------------------------------- |
| `npm run dev`     | Server di sviluppo su `localhost:4321`                               |
| `npm run build`   | Controllo dei tipi e build statica in `dist/`                        |
| `npm run preview` | Serve la build                                                       |
| `npm run shots`   | Rigenera gli screenshot dell'Interfaccia dalle story (serve Chrome) |

## Dove sta cosa

- `src/content/progetti.json`: un oggetto per progetto (testi, colori, URL, story ID, immagini). L'`id` diventa l'URL `/<id>/`, `ordine` decide la posizione nella home e il "prossimo progetto".
- `src/pages/index.astro`: home (01). `src/pages/[slug].astro`: dettaglio (02), con l'espansione della superficie e l'indice delle sezioni.
- `src/styles/global.css`: token. Le misure con `clamp()` interpolano tra i frame a 390 e a 1440 px del file FigCraft (v46).
- `src/assets`: SVG esportati da FigCraft e anteprime delle story.

## Storybook

La sezione Componenti carica le story dal vivo in un unico iframe; l'elenco è `componenti` in `progetti.json`. Link e iframe compaiono solo se `<storybook>/index.json` risponde durante la build, così uno Storybook non pubblicato non produce link rotti. Dopo aver pubblicato lo Storybook di PedagogicPoint su `pedagogic-point-storybook.vercel.app` basta rifare la build.

## Deploy

Vercel, preset Astro, output `dist/`. I redirect permanenti `/progetti` → `/` e `/progetti/<id>` → `/<id>` sono in `vercel.json`.
