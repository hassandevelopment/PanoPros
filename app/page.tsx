import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <section
      aria-label="Choose a craft: Media or Development"
      className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] bg-bone text-ink flex items-center justify-center px-6 md:px-12"
    >
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">

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
    </section>
  );
}
