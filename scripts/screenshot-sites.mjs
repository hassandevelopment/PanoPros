import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images/dev/screenshots");

const sites = [
  { slug: "pad",                     url: "https://hassandevelopment.github.io/PAD/index.html" },
  { slug: "panopros",                url: "https://www.panopros.bh" },
  { slug: "melo-beauty-lounge",      url: "https://hassandevelopment.github.io/Melo-Beauty-Lounge/" },
  { slug: "calma",                   url: "https://hassandevelopment.github.io/Calma/" },
  { slug: "gusto-pizzeria-ristorante", url: "https://hassandevelopment.github.io/gusto-web/" },
  { slug: "cas-premium",             url: "https://hassandevelopment.github.io/CAS-Premium/" },
  { slug: "custom-touch-car-care",   url: "https://hassandevelopment.github.io/Custom-Touch-Car-Care/" },
  { slug: "3d-car-spa",              url: "https://hassandevelopment.github.io/3D-Car-Spa/" },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 800 });

for (const { slug, url } of sites) {
  const dest = path.join(outDir, `${slug}.png`);
  console.log(`Screenshotting ${url} → ${slug}.png`);
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(800);
    await page.screenshot({ path: dest, clip: { x: 0, y: 0, width: 1280, height: 800 } });
    console.log(`  ✓ saved`);
  } catch (err) {
    console.error(`  ✗ failed: ${err.message}`);
  }
}

await browser.close();
console.log("Done.");
