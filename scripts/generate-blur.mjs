import sharp from "sharp";
import { readdir, writeFile } from "fs/promises";
import { join } from "path";

const BASE = new URL("../public/images", import.meta.url).pathname;
const OUT = new URL("../lib/data/blur-data.ts", import.meta.url).pathname;

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
    .map((f) => ({ key: `/images/${dir}/${f}`, abs: join(BASE, dir, f) }));
}

const serviceFiles = await getFiles("services", (f) => f.endsWith(".webp"));
const portfolioFiles = await getFiles("portfolio", (f) => PORTFOLIO_ACTIVE.has(f));
const screenshotFiles = await getFiles("dev/screenshots", (f) => f.endsWith(".webp"));

const allFiles = [...serviceFiles, ...portfolioFiles, ...screenshotFiles];

const entries = {};

for (const { key, abs } of allFiles) {
  const buf = await sharp(abs)
    .resize(10)
    .blur(2)
    .webp({ quality: 20 })
    .toBuffer();
  entries[key] = `data:image/webp;base64,${buf.toString("base64")}`;
  console.log(`✓ ${key}`);
}

const lines = Object.entries(entries)
  .map(([k, v]) => `  "${k}": "${v}",`)
  .join("\n");

await writeFile(OUT, `export const blurData: Record<string, string> = {\n${lines}\n};\n`);
console.log(`\nWrote ${allFiles.length} blur entries to lib/data/blur-data.ts`);
