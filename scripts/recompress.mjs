import sharp from "sharp";
import { readdir } from "fs/promises";
import { join } from "path";

const BASE = new URL("../public/images", import.meta.url).pathname;

const PORTFOLIO_ACTIVE = new Set([
  "marassi-living.webp",
  "marassi-bedroom-1.webp",
  "marassi-bedroom-2.webp",
  "marassi-dining.webp",
  "16.webp",
  "11-2.webp",
  "combo-staged-2.webp",
  "combo-2-staged.webp",
  "11.webp",
  "naseem-interior.webp",
]);

async function getFiles(dir, filter) {
  const entries = await readdir(join(BASE, dir));
  return entries
    .filter(filter)
    .map((f) => ({ name: f, abs: join(BASE, dir, f) }));
}

const serviceFiles = await getFiles("services", (f) => f.endsWith(".webp"));
const portfolioFiles = await getFiles("portfolio", (f) => PORTFOLIO_ACTIVE.has(f));
const screenshotFiles = await getFiles("dev/screenshots", (f) => f.endsWith(".webp"));

const allFiles = [...serviceFiles, ...portfolioFiles, ...screenshotFiles];

let compressed = 0;
let skipped = 0;

for (const { name, abs } of allFiles) {
  const img = sharp(abs);
  const meta = await img.metadata();
  const width = meta.width ?? 9999;

  await img
    .resize(width > 1200 ? 1200 : undefined)
    .webp({ quality: 55 })
    .toFile(abs + ".tmp");

  const { rename } = await import("fs/promises");
  await rename(abs + ".tmp", abs);

  const before = meta.size ?? "?";
  const after = (await sharp(abs).metadata()).size ?? "?";
  console.log(`✓ ${name}: ${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB`);
  compressed++;
}

console.log(`\nDone: ${compressed} recompressed, ${skipped} skipped.`);
