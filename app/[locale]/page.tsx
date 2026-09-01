import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { graph, jsonLd, openGraph, twitter, website } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Photography, Virtual Tours & Web Development in Bahrain | PanoPros",
  },
  alternates: { canonical: "/" },
  openGraph: openGraph(
    "Photography, Virtual Tours & Web Development in Bahrain | PanoPros",
    "A media and development studio in Bahrain, helping businesses stand out with photography, virtual tours, websites, and apps.",
    "/"
  ),
  twitter: twitter(
    "Photography, Virtual Tours & Web Development in Bahrain | PanoPros",
    "A media and development studio in Bahrain, helping businesses stand out with photography, virtual tours, websites, and apps."
  ),
};

export default function HomePage() {
  return (
    <section
      aria-label="Choose a craft: Media or Development"
      className="grain relative min-h-[100dvh] bg-bone text-ink flex flex-col items-center justify-center px-6 md:px-12 pt-24 md:pt-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(graph(website))}
      />
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">

        {/* Intro: title and subtitle read as one block. Set well below the
            scale of the Media / Development split, which stays the centrepiece. */}
        <div className="home-word-1 max-w-2xl text-center mb-12 md:mb-16">
          <h1
            className="text-2xl md:text-3xl font-medium tracking-[-0.01em] leading-snug text-ink text-balance"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Photography, Virtual Tours &amp; Web Development in Bahrain
          </h1>
          <p className="mt-4 max-w-lg mx-auto text-sm md:text-base text-ink/60 leading-relaxed">
            A media and development studio in Bahrain, helping businesses stand
            out with photography, virtual tours, websites, and apps.
          </p>
        </div>

        {/* Accent line */}
        <div className="home-line w-full max-w-md h-px bg-ink/20 mb-12 md:mb-16" />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">

          <div className="home-word-1">
            <Link href="/media" className="cta-link group flex flex-col items-center text-center">
              <h2
                className="cta-word text-6xl sm:text-7xl md:text-8xl font-medium tracking-[-0.02em] leading-none mb-6"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Media
              </h2>
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.24em] uppercase border-b border-ink/40 group-hover:border-ink pb-1 transition-colors">
                See media work
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="home-word-2">
            <Link href="/development" className="cta-link group flex flex-col items-center text-center">
              <h2
                className="cta-word text-6xl sm:text-7xl md:text-8xl font-medium tracking-[-0.02em] leading-none mb-6"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Development
              </h2>
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.24em] uppercase border-b border-ink/40 group-hover:border-ink pb-1 transition-colors">
                See development work
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
