import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LogoMark, LogoLockup } from "@/components/Logo";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <section
      aria-label="Choose a craft: Media or Development"
      className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] bg-bone text-ink flex flex-col items-center justify-center px-6 md:px-12 py-20 md:py-24"
    >
      {/* Brand lockup — mark + wordmark + tagline */}
      <div className="mb-12 md:mb-16">
        <LogoLockup size="md" direction="vertical" showTagline />
      </div>

      {/* Lead */}
      <ScrollReveal delay={100} className="text-center mb-10 md:mb-14">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink text-center max-w-3xl leading-tight"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Professional Media &amp; Development in Bahrain
        </h1>
        <p className="mt-4 text-sm md:text-base text-ink/70 max-w-2xl mx-auto leading-relaxed">
          Photography, video, and visual content that gets noticed. Websites and mobile apps that convert. Your brand&apos;s full digital presence, built in Bahrain.
        </p>
      </ScrollReveal>

      {/* Two CTAs */}
      <ScrollReveal delay={200} className="w-full max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-10 md:gap-12 lg:gap-20">

        {/* MEDIA */}
        <Link
          href="/media"
          className="cta-link group flex flex-col items-center text-center min-w-0"
        >
          <p className="text-[10px] md:text-xs font-medium tracking-[0.4em] text-ink/50 mb-4">
            01 &nbsp;/&nbsp; SHOOT
          </p>
          <h2
            className="cta-word text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-[-0.02em] leading-none mb-5"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Media
          </h2>
          <p className="text-sm md:text-base text-ink/70 max-w-xs leading-relaxed mb-6">
            Photography, video, virtual tours, floor plans, brand work.
          </p>
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-[0.24em] uppercase border-b border-ink/40 group-hover:border-ink pb-1 transition-colors">
            See media work
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </Link>

        {/* Divider mark */}
        <div className="flex flex-col items-center text-ink/70" aria-hidden="true">
          <div className="hidden md:block w-px h-16 bg-ink/20 mb-4"></div>
          <LogoMark size={44} />
          <div className="hidden md:block w-px h-16 bg-ink/20 mt-4"></div>
        </div>

        {/* DEVELOPMENT */}
        <Link
          href="/development"
          className="cta-link group flex flex-col items-center text-center min-w-0"
        >
          <p className="text-[10px] md:text-xs font-medium tracking-[0.4em] text-ink/50 mb-4">
            02 &nbsp;/&nbsp; BUILD
          </p>
          <h2
            className="cta-word text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-[-0.02em] leading-none mb-5"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Development
          </h2>
          <p className="text-sm md:text-base text-ink/70 max-w-xs leading-relaxed mb-6">
            Custom websites, landing pages, mobile apps, brand identity.
          </p>
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-[0.24em] uppercase border-b border-ink/40 group-hover:border-ink pb-1 transition-colors">
            See development work
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </Link>

      </div>
      </ScrollReveal>

      {/* Bottom byline */}
      <p className="mt-16 md:mt-24 text-[10px] md:text-xs tracking-[0.36em] text-ink/40 text-center">
        EST. 2026 &nbsp;·&nbsp; MANAMA, BAHRAIN
      </p>
    </section>
  );
}
