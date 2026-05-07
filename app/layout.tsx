import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "PanoPros — Real Estate Photography & Media in Bahrain",
    template: "%s | PanoPros",
  },
  description:
    "Real estate photography, video, virtual tours, and floor plans in Bahrain. PanoPros helps realtors sell faster with media that attracts serious buyers.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.panopros.bh"
  ),
  openGraph: {
    siteName: "PanoPros",
    locale: "en_BH",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PanoPros",
  image: "https://www.panopros.bh/og-image.jpg",
  url: "https://www.panopros.bh",
  telephone: "+97333330340",
  email: "info@panopros.bh",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BH",
    addressRegion: "Bahrain",
  },
  areaServed: "Bahrain",
  description:
    "Professional real estate photography, video, virtual tours, and floor plans in Bahrain.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Real Estate Media Services",
    itemListElement: [
      "Photography",
      "Cinematic Video",
      "Social Media Video",
      "Matterport Virtual Tours",
      "Virtual Staging",
      "2D Floor Plans",
      "3D Floor Plans",
      "Twilight Photography",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bone text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
