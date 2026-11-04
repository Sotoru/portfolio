// Rigenera le icone dell'app da public/favicon.svg: `npm run icone`.
// Le PNG finiscono in public/ e si versionano; la build non le ricrea.
import { readFile } from "node:fs/promises";
import sharp from "sharp";

const fondo = "#EFF2FB";
const svg = await readFile(new URL("../public/favicon.svg", import.meta.url));
const pub = (f) => new URL(`../public/${f}`, import.meta.url).pathname;

// Il marchio su fondo pieno; `scala` è la parte del lato occupata dal marchio.
const icona = async (lato, scala, file) => {
  const marchio = await sharp(svg, { density: 72 * Math.ceil((lato * scala) / 32) })
    .resize(Math.round(lato * scala))
    .png()
    .toBuffer();
  await sharp({ create: { width: lato, height: lato, channels: 4, background: fondo } })
    .composite([{ input: marchio, gravity: "center" }])
    .png()
    .toFile(pub(file));
  console.log("ok", file);
};

await icona(192, 0.82, "icon-192.png");
await icona(512, 0.82, "icon-512.png");
await icona(180, 0.82, "apple-touch-icon.png");
// Maskable: Android ritaglia fino al 20% per lato, quindi il marchio sta nel cerchio sicuro centrale (60% del lato).
await icona(512, 0.6, "icon-maskable-512.png");
