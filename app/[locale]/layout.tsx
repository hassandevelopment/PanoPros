import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { graph, jsonLd, organization } from "@/lib/schema";

// latin only. The site has no latin-ext characters; dropping the subset
// removes a preloaded font file from every page.
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

const baseMetadata: Metadata = {
  metadataBase: new URL("https://panopros.bh"),
  title: {
    default: "PanoPros, Media & Development in Bahrain",
    template: "%s | PanoPros",
  },
  description:
    "Photography, video, and visual content that gets noticed. Websites and mobile apps that convert. Based in Bahrain.",
  keywords: ["photography", "video", "web development", "mobile apps", "Bahrain", "real estate media"],
  authors: [{ name: "PanoPros" }],
  creator: "PanoPros",
  robots: { index: true, follow: true },
  openGraph: {
    title: "PanoPros, Media & Development in Bahrain",
    description:
      "Photography, video, and visual content that gets noticed. Websites and mobile apps that convert.",
    url: "https://panopros.bh",
    siteName: "PanoPros",
    images: [
      {
        url: "https://panopros.bh/og-image.jpg",
        secureUrl: "https://panopros.bh/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PanoPros, Media & Development in Bahrain",
      },
    ],
    locale: "en_BH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PanoPros, Media & Development in Bahrain",
    description:
      "Photography, video, and visual content that gets noticed. Websites and mobile apps that convert.",
    images: ["https://panopros.bh/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

/**
 * /ar currently renders the English copy verbatim. next-intl is wired up but
 * no component calls useTranslations yet. Serving identical text at a second
 * URL is a duplicate-content liability, so the Arabic tree is kept out of the
 * index until real translations land. All i18n plumbing stays in place.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    ...baseMetadata,
    robots:
      locale === "ar"
        ? { index: false, follow: true }
        : { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Opt into static rendering for this locale (next-intl). Without this the
  // whole route tree renders dynamically on every request.
  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        {/* One organization node for the whole site; every page-level graph
            references it by @id rather than repeating it. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(graph(organization))}
        />
      </head>
      <body
        className="min-h-screen flex flex-col bg-bone text-ink antialiased"
        suppressHydrationWarning
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
