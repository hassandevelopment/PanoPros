import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.panopros.bh";
  const now = new Date();
  return [
    { url: base, lastModified: now, priority: 1 },
    { url: `${base}/packages`, lastModified: now, priority: 0.9 },
    { url: `${base}/portfolio`, lastModified: now, priority: 0.8 },
    { url: `${base}/about`, lastModified: now, priority: 0.7 },
    { url: `${base}/contact-us`, lastModified: now, priority: 0.8 },
  ];
}
