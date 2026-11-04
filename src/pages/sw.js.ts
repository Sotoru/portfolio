import type { APIRoute } from "astro";
import { indirizzo, lingue } from "../i18n";

// Cambia a ogni build: il service worker nuovo prende il posto del vecchio e ne cancella le cache.
const versione = Date.now().toString(36);

// Pagine da avere subito offline: la home e la pagina "Sei offline" di ogni lingua.
const precarica = lingue.flatMap((l) => [indirizzo(l), indirizzo(l, "offline/")]);

const codice = /* js */ `
const VERSIONE = ${JSON.stringify(versione)};
const PAGINE = "pagine-" + VERSIONE;
const RISORSE = "risorse-" + VERSIONE;
const PRECARICA = ${JSON.stringify(precarica)};
const LINGUE = ${JSON.stringify(lingue.filter((l) => l !== "it"))};

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(PAGINE).then((c) => c.addAll(PRECARICA)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((nomi) => Promise.all(nomi.filter((n) => n !== PAGINE && n !== RISORSE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim()),
  );
});

const offline = (url) => {
  const lingua = LINGUE.find((l) => url.pathname.startsWith("/" + l + "/"));
  return lingua ? "/" + lingua + "/offline/" : "/offline/";
};

// Scarica dalla rete e salva una copia in cache; la copia si fa prima di restituire la risposta, che poi la pagina consuma.
const salva = (cache, chiave, req) =>
  fetch(req).then((r) => {
    if (r.ok) {
      const copia = r.clone();
      caches.open(cache).then((c) => c.put(chiave, copia));
    }
    return r;
  });

self.addEventListener("fetch", (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return;

  // Pagine: prima la rete, così si vede sempre l'ultima versione; senza rete la copia salvata o la pagina offline.
  if (req.mode === "navigate") {
    e.respondWith(
      salva(PAGINE, url.pathname, req).catch(() => caches.match(url.pathname).then((r) => r || caches.match(offline(url)))),
    );
    return;
  }

  // File con hash nel nome (/_astro/), font, icone e immagini: non cambiano, prima la cache.
  if (url.pathname.startsWith("/_astro/") || /\\.(png|svg|webp|jpg|woff2|webmanifest)$/.test(url.pathname)) {
    e.respondWith(caches.match(req).then((salvata) => salvata || salva(RISORSE, req, req)));
  }
});
`;

export const GET: APIRoute = () =>
  new Response(codice, { headers: { "Content-Type": "text/javascript; charset=utf-8" } });
