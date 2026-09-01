import type { Metadata } from "next";
import PortfolioGallery from "@/components/PortfolioGallery";
import { breadcrumb, graph, jsonLd, openGraph, twitter } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Property Photography & Web Design Portfolio in Bahrain",
  },
  description:
    "Real estate photography, virtual staging, 2D and 3D floor plans, and custom websites delivered for clients across Bahrain.",
  alternates: { canonical: "/portfolio" },
  openGraph: openGraph(
    "Property Photography & Web Design Portfolio in Bahrain",
    "Real estate photography, virtual staging, 2D and 3D floor plans, and custom websites delivered for clients across Bahrain.",
    "/portfolio"
  ),
  twitter: twitter(
    "Property Photography & Web Design Portfolio in Bahrain",
    "Real estate photography, virtual staging, 2D and 3D floor plans, and custom websites delivered for clients across Bahrain."
  ),
};

export default function PortfolioPage({
  searchParams,
}: {
  searchParams?: { filter?: string };
}) {
  const initialFilter = searchParams?.filter ?? undefined;

  return (
    <section className="grain pt-32 pb-20 md:pt-40 md:pb-28 bg-bone">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(graph(breadcrumb("Portfolio", "/portfolio")))}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="home-line w-full max-w-md h-px bg-ink/20 mb-10 mx-auto" />
          <h1
            className="home-word-1 text-5xl md:text-7xl font-medium tracking-[-0.02em] leading-none text-ink"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Portfolio
          </h1>
        </div>

        <PortfolioGallery initialFilter={initialFilter} />
      </div>
    </section>
  );
}
