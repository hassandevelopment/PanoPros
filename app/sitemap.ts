import type { MetadataRoute } from "next";

/**
 * Static per-route dates. Previously every entry used `new Date()`, so lastmod
 * changed on every build even when the page had not. Search engines discount a
 * lastmod that churns. Bump a date by hand when that route's content changes.
 */
const UPDATED = {
  home: "2026-08-21",
  media: "2026-08-21",
  development: "2026-08-21",
  packages: "2026-08-21",
  portfolio: "2026-08-21",
  about: "2026-08-21",
  contact: "2026-08-21",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://panopros.bh";
  return [
    { url: base, lastModified: UPDATED.home, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/media`, lastModified: UPDATED.media, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/development`, lastModified: UPDATED.development, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/packages`, lastModified: UPDATED.packages, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/portfolio`, lastModified: UPDATED.portfolio, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, lastModified: UPDATED.about, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/contact-us`, lastModified: UPDATED.contact, changeFrequency: "yearly", priority: 0.8 },
  ];
}
