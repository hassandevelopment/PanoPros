import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Photography, Virtual Tours & Web Development in Bahrain | PanoPros",
  },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <section
      aria-label="Choose a craft: Media or Development"
      className="grain relative min-h-[100dvh] bg-bone text-ink flex flex-col items-center justify-center px-6 md:px-12"
    >
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">

        {/* The page's semantic anchor. Deliberately small and quiet — the
            Media / Development split below stays the visual centrepiece. */}
        <h1 className="home-word-1 max-w-xl text-center text-[11px] sm:text-xs font-medium tracking-[0.24em] uppercase text-ink/55 mb-8 md:mb-10">
          Photography, Virtual Tours &amp; Web Development in Bahrain
        </h1>

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

        <p className="home-word-2 mt-12 md:mt-20 max-w-lg text-center text-sm md:text-base text-ink/60 leading-relaxed">
          A media and development studio in Bahrain. We create photography,
          virtual tours, websites, and apps that help businesses stand out.
        </p>
      </div>
    </section>
  );
}
