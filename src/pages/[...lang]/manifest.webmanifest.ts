import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { i18n, indirizzo, lingueEstere, tr } from "../../i18n";

export const getStaticPaths: GetStaticPaths = () => [{ params: { lang: undefined } }, ...lingueEstere.map((lang) => ({ params: { lang } }))];

// Un manifest per lingua: installata da /en/ l'app parte in inglese e mostra i nomi in inglese.
export const GET: APIRoute = async ({ params }) => {
  const { l, t } = i18n(params);
  const progetti = (await getCollection("progetti")).sort((a, b) => a.data.ordine - b.data.ordine);
  const home = indirizzo(l);
  return new Response(
    JSON.stringify({
      id: "/",
      name: t("homeTitolo"),
      short_name: t("appBreve"),
      description: t("homeDescrizione"),
      lang: l,
      dir: "ltr",
      start_url: home,
      scope: "/",
      display: "standalone",
      background_color: "#EFF2FB",
      theme_color: "#EFF2FB",
      categories: ["portfolio", "design", "developer"],
      icons: [
        { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
        { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
        { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        { src: "/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      ],
      shortcuts: progetti.map((p) => ({
        name: p.data.nome,
        short_name: tr(p.data.titolo, l),
        description: tr(p.data.descrizione, l),
        url: indirizzo(l, `${p.id}/`),
        icons: [{ src: "/icon-192.png", sizes: "192x192", type: "image/png" }],
      })),
    }),
    { headers: { "Content-Type": "application/manifest+json" } },
  );
};
