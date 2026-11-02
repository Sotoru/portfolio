// Rigenera le anteprime dalle story pubblicate: `npm run shots` (richiede Google Chrome installato).
// Le immagini finiscono in src/assets e si versionano: la build non apre mai un browser.
import { readFile } from "node:fs/promises";
import { chromium } from "playwright-core";

const progetti = JSON.parse(await readFile(new URL("../src/content/progetti.json", import.meta.url), "utf8"));
const iframe = (base, id) => `${base}/iframe.html?id=${id}&viewMode=story`;
const assets = new URL("../src/content/", import.meta.url);

const lavori = progetti.flatMap((p) => [
  { ...p.interfaccia.desktop, base: p.storybook, viewport: { width: 1440, height: 1068 } },
  { ...p.interfaccia.mobile, base: p.storybook, viewport: { width: 390, height: 844 } },
].filter((l) => l.story));

const browser = await chromium.launch({ channel: "chrome" });
let errori = 0;
for (const l of lavori) {
  const page = await browser.newPage({ viewport: l.viewport, deviceScaleFactor: 2 });
  try {
    const res = await page.goto(iframe(l.base, l.story), { waitUntil: "networkidle" });
    if (!res?.ok()) throw new Error(`HTTP ${res?.status()}`);
    await page.waitForSelector("#storybook-root > *", { timeout: 15000 });
    await page.evaluate(() => document.fonts.ready);
    // Le story con play function lasciano il focus su un controllo: l'anteprima va presa a riposo.
    await page.evaluate(() => document.activeElement instanceof HTMLElement && document.activeElement.blur());
    await page.screenshot({ path: new URL(l.immagine, assets).pathname, animations: "disabled" });
    console.log("ok   ", l.story);
  } catch (e) {
    errori++;
    console.error("ERRORE", l.story, e.message);
  }
  await page.close();
}
await browser.close();
process.exitCode = errori ? 1 : 0;
