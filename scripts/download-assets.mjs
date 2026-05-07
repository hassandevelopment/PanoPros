import https from "https";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "public");

const assets = [
  {
    url: "https://images.squarespace-cdn.com/content/v1/658e5cc60e4ebd5770df0df1/47625e34-070f-4cdf-af49-760475dfd9e3/PanoProsLogo.png",
    dest: "logo.png",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/658e5cc60e4ebd5770df0df1/dd577826-0df0-41d2-9950-f8e9e090d3fa/2.2+%281%29.jpg",
    dest: "images/hero.jpg",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/658e5cc60e4ebd5770df0df1/9029f8ac-1e91-4d59-b88c-d907af3c4f2d/6+%281%29.jpg",
    dest: "images/services/photography.jpg",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/658e5cc60e4ebd5770df0df1/21594a82-f839-4b70-9ef1-94251c44d934/SHORT-INTRO-320x240-GIF.gif",
    dest: "images/services/virtual-tour.gif",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/658e5cc60e4ebd5770df0df1/647151bf-2252-4600-9527-5710472641f3/ezgif.com-video-to-gif-converter.gif",
    dest: "images/services/virtual-staging.gif",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/658e5cc60e4ebd5770df0df1/ce98d9d7-ab58-4154-b467-6b1772452942/GCT+Twilight+1.png",
    dest: "images/services/twilight.png",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/658e5cc60e4ebd5770df0df1/e0adbdc6-879e-46be-91d4-c4beb3806c5d/cubicasa3d.png",
    dest: "images/services/3d-floor-plan.png",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/658e5cc60e4ebd5770df0df1/be349a62-6ae9-4ff7-835b-ca4569efb6ca/310+Makobe+Lane+2D+Floor+Plan.png",
    dest: "images/services/2d-floor-plan.png",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/658e5cc60e4ebd5770df0df1/3a7156aa-fcbd-43fe-8730-e07690c589d2/ppp1.png",
    dest: "images/packages/basic.jpg",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/658e5cc60e4ebd5770df0df1/c63f6ab4-49fb-4a97-86ca-5b256c6637e4/ppp2.png",
    dest: "images/packages/standard.jpg",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/658e5cc60e4ebd5770df0df1/de76447c-9570-40c5-8c49-d4e686962aca/ppp3.png",
    dest: "images/packages/premium.jpg",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/658e5cc60e4ebd5770df0df1/4f5726c5-7bad-413c-85e6-3c3286131bf0/HassanPilot.jpg",
    dest: "images/founder-hassan.jpg",
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const fullDest = path.join(root, dest);
    fs.mkdirSync(path.dirname(fullDest), { recursive: true });
    const file = fs.createWriteStream(fullDest);
    const client = url.startsWith("https") ? https : http;

    function get(u) {
      client.get(u, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          get(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${u}`));
          return;
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(`✓ ${dest}`);
          resolve();
        });
      }).on("error", reject);
    }

    get(url);
  });
}

async function main() {
  console.log(`Downloading ${assets.length} assets…\n`);
  for (const { url, dest } of assets) {
    try {
      await download(url, dest);
    } catch (e) {
      console.error(`✗ ${dest}: ${e.message}`);
    }
  }
  console.log("\nDone.");
}

main();
