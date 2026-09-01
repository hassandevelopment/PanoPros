import type { Metadata } from "next";
import PackagesClient from "@/components/PackagesClient";
import { breadcrumb, graph, jsonLd, openGraph, twitter } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Photography & Virtual Tour Pricing in Bahrain | PanoPros",
  },
  description:
    "Real estate media and web development packages in Bahrain — photography, video, virtual tours, and custom websites. Request a quote today.",
  alternates: { canonical: "/packages" },
  openGraph: openGraph(
    "Photography & Virtual Tour Pricing in Bahrain | PanoPros",
    "Real estate media and web development packages in Bahrain — photography, video, virtual tours, and custom websites. Request a quote today.",
    "/packages"
  ),
  twitter: twitter(
    "Photography & Virtual Tour Pricing in Bahrain | PanoPros",
    "Real estate media and web development packages in Bahrain — photography, video, virtual tours, and custom websites. Request a quote today."
  ),
};

export default function PackagesPage() {
  return (
    <section className="grain pt-32 pb-20 md:pt-40 md:pb-28 bg-bone">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(graph(breadcrumb("Packages", "/packages")))}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="home-line w-full max-w-md h-px bg-ink/20 mb-10 mx-auto" />
          <h1
            className="home-word-1 text-5xl md:text-7xl font-medium tracking-[-0.02em] leading-none text-ink mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Packages
          </h1>
          <p className="home-word-2 text-base md:text-lg text-ink/60 max-w-lg mx-auto">
            Every project is unique. Let&apos;s talk.
          </p>
        </div>

        <PackagesClient />
      </div>
    </section>
  );
}
