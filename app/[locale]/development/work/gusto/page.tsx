import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Gusto — service marketplace app",
  description:
    "A mobile app connecting people in Bahrain with local service professionals. Built by PanoPros.",
};

export default function GustoCaseStudy() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink text-bone -mt-16 md:-mt-20 pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/development"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.24em] text-bone/70 hover:text-bone mb-10 transition-colors"
          >
            <ArrowLeft size={14} /> ALL DEVELOPMENT WORK
          </Link>
          <p className="text-[10px] md:text-xs font-medium tracking-[0.4em] text-bone/70 mb-3">
            CASE STUDY &nbsp;/&nbsp; 01
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-[0.02em] leading-[0.95] mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Gusto
          </h1>
          <p className="text-bone/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            A service-marketplace mobile app — connecting Bahrainis to local
            professionals for home repairs, beauty, fitness, and trade services.
          </p>

          {/* Quick metadata */}
          <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-3xl border-t border-bone/20 pt-8">
            <div>
              <dt className="text-[10px] tracking-[0.32em] text-bone/50 mb-2">CLIENT</dt>
              <dd className="text-sm">Gusto BH</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.32em] text-bone/50 mb-2">TYPE</dt>
              <dd className="text-sm">Mobile app</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.32em] text-bone/50 mb-2">YEAR</dt>
              <dd className="text-sm">2026</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.32em] text-bone/50 mb-2">SCOPE</dt>
              <dd className="text-sm">Design + build</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Hero video — looped teaser */}
      <section className="bg-ink">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-16 md:pb-24">
          <video
            src="/videos/gusto-teaser.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-3xl mx-auto aspect-[9/16] object-cover bg-charcoal"
            aria-label="Gusto app demo — looped preview"
          />
        </div>
      </section>

      {/* Write-up */}
      <section className="py-20 md:py-28 bg-bone">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.4em] text-muted mb-4">
                THE PROBLEM
              </p>
              <p className="text-lg md:text-xl text-ink leading-relaxed">
                Finding a reliable plumber, hairdresser, or personal trainer in Bahrain usually means asking around on WhatsApp groups. There&apos;s no single place to browse vetted local pros, see reviews, and book a time slot.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.4em] text-muted mb-4">
                THE APPROACH
              </p>
              <p className="text-lg md:text-xl text-ink leading-relaxed">
                We designed and built a mobile-first marketplace that pairs customers with vetted service providers. Clean discovery, real reviews, in-app messaging, and a booking flow that doesn&apos;t make you want to give up halfway through.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.4em] text-muted mb-4">
                THE STACK
              </p>
              <ul className="text-lg md:text-xl text-ink leading-relaxed space-y-2 list-none">
                <li>— React Native (iOS &amp; Android from one codebase)</li>
                <li>— Custom design system, B&amp;W minimalist</li>
                <li>— Bilingual EN / AR support, RTL-aware</li>
                <li>— Bahrain-native: BHD pricing, local categories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Full video */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.4em] text-muted mb-4 text-center">
            FULL DEMO
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-ink text-center mb-10"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            See it in action
          </h2>
          <video
            src="/videos/gusto-full.mp4"
            controls
            playsInline
            poster="/images/dev/gusto-screen.webp"
            className="w-full aspect-video object-contain bg-ink"
            aria-label="Gusto app — full product demo"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-bone py-20 md:py-28 text-center px-6">
        <p className="text-xs font-semibold tracking-[0.4em] text-bone/60 mb-4">
          NEXT
        </p>
        <h2
          className="text-3xl md:text-5xl font-medium mb-6"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Have an app or site to build?
        </h2>
        <p className="text-bone/75 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
          Tell us about your idea. We build for Bahraini businesses that want to be taken seriously online.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 px-8 py-4 bg-bone text-ink text-sm font-semibold tracking-[0.16em] uppercase hover:opacity-90 transition-opacity"
        >
          Start a project
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
