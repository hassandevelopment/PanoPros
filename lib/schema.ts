import type { Metadata } from "next";
import { services, devServices, type Service } from "@/lib/data/services";

export const SITE_URL = "https://panopros.bh";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Serialise a JSON-LD node for `dangerouslySetInnerHTML`.
 *
 * `JSON.stringify` does not escape `<`, so a `</script>` sequence inside any
 * string value would close the tag early. Escaping `<` as its unicode form
 * closes that off. This is the approach the Next.js 16 JSON-LD guide
 * recommends (node_modules/next/dist/docs/01-app/02-guides/json-ld.md).
 */
export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

/** Wrap one or more nodes in a single @graph document. */
export function graph(...nodes: unknown[]) {
  return { "@context": "https://schema.org", "@graph": nodes.flat() };
}

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** Service.body carries **markdown bold** for the UI; schema wants clean prose. */
const plain = (s: string) => s.replace(/\*\*/g, "");

const offerCatalog = (name: string, items: Service[]) => ({
  "@type": "OfferCatalog",
  name,
  itemListElement: items.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: plain(s.body) },
  })),
});

/**
 * The single business entity. Everything else references this by @id rather
 * than repeating it, so there is one node in the graph, not seven.
 *
 * NOTE: `geo` is Manama city centre, not a surveyed address; still to be
 * confirmed. Opening hours match the Google Business Profile (open daily,
 * 08:00-18:30) and must be kept in sync with it.
 * `streetAddress` is deliberately omitted: no public street address exists yet,
 * and inventing one would break NAP consistency against the Google Business
 * Profile when that gets created.
 */
export const organization = {
  "@type": "ProfessionalService",
  "@id": ORGANIZATION_ID,
  name: "PanoPros",
  url: SITE_URL,
  description:
    "Real estate photography, videography, Matterport 3D virtual tours, virtual staging, 2D and 3D floor plans, and custom web and mobile app development for businesses in Bahrain.",
  slogan: "Professional media. Serious results.",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/favicon-512x512.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/og-image.jpg`,
  telephone: "+97333330340",
  email: "info@panopros.bh",
  priceRange: "$$",
  currenciesAccepted: "BHD",
  knowsLanguage: ["en", "ar"],
  identifier: {
    "@type": "PropertyValue",
    name: "Commercial Registration",
    value: "197430-1",
  },
  founder: { "@type": "Person", name: "Hassan Alnajjar" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manama",
    addressRegion: "Capital Governorate",
    addressCountry: "BH",
  },
  geo: { "@type": "GeoCoordinates", latitude: 26.2285, longitude: 50.586 },
  areaServed: [
    { "@type": "Country", name: "Bahrain" },
    { "@type": "City", name: "Manama" },
    { "@type": "City", name: "Seef" },
    { "@type": "City", name: "Riffa" },
    { "@type": "City", name: "Muharraq" },
    { "@type": "City", name: "Amwaj Islands" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:30",
    },
  ],
  sameAs: ["https://www.instagram.com/panopros.bh/"],
  hasOfferCatalog: [
    offerCatalog("Real Estate Media Services", services),
    offerCatalog("Web & App Development Services", devServices),
  ],
};

export const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "PanoPros",
  description:
    "A media and development studio in Bahrain, helping businesses stand out with photography, virtual tours, websites, and apps.",
  inLanguage: "en-BH",
  publisher: { "@id": ORGANIZATION_ID },
};

/** Trail from Home to the current page. Pass the page's own crumb only. */
export function breadcrumb(name: string, path: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

/** One Service node per offering, driven off lib/data/services.ts so it cannot drift. */
export function serviceList(items: Service[], pagePath: string, category: string) {
  return items.map((s) => ({
    "@type": "Service",
    "@id": `${SITE_URL}${pagePath}#${slug(s.title)}`,
    name: s.title,
    description: plain(s.body),
    serviceType: s.title,
    category,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "Bahrain" },
    url: `${SITE_URL}${pagePath}`,
  }));
}

export interface Faq {
  question: string;
  answer: string;
}

export function faqPage(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

const OG_IMAGE = {
  url: `${SITE_URL}/og-image.jpg`,
  secureUrl: `${SITE_URL}/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: "PanoPros, Media & Development in Bahrain",
};

/**
 * Per-route Open Graph / Twitter metadata.
 *
 * Next.js *replaces* a parent segment's `openGraph` when a child defines one.
 * It does not deep-merge, so siteName, images, locale and type are respecified
 * here rather than inherited from the root layout.
 */
export function openGraph(
  title: string,
  description: string,
  path: string
): Metadata["openGraph"] {
  return {
    title,
    description,
    url: `${SITE_URL}${path}`,
    siteName: "PanoPros",
    images: [OG_IMAGE],
    locale: "en_BH",
    type: "website",
  };
}

export function twitter(title: string, description: string): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [OG_IMAGE.url],
  };
}
