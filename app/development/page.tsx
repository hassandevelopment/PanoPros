import Image from "next/image";
import Link from "next/link";
import { devServices } from "@/lib/data/services";
import ServiceCard from "@/components/ServiceCard";
import CTAStrip from "@/components/CTAStrip";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Development",
  description:
    "Custom websites, landing pages, mobile apps, and brand identity for Bahraini businesses. Fast, modern, bilingual-ready.",
};

export default function DevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end -mt-16 md:-mt-20 pt-16 md:pt-20">
        <Image
          src="/images/dev/gusto-screen.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-12 md:pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.24em] text-bone/70 hover:text-bone mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> BACK
          </Link>
          <p className="text-[10px] md:text-xs font-medium tracking-[0.4em] text-bone/70 mb-3">
            02 &nbsp;/&nbsp; DEVELOPMENT
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-[0.02em] leading-[0.95] text-bone max-w-3xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Sites &amp; apps
            <br /> that convert.
          </h1>
          <p className="mt-6 text-bone/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            Custom websites, landing pages, mobile applications, and brand identity for businesses in Bahrain.
          </p>
        </div>
      </section>

      {/* Featured Work — Gusto */}
      <section className="py-20 md:py-28 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <p className="text-xs font-semibold tracking-[0.4em] text-muted mb-3">
              FEATURED WORK
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-ink"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Selected case studies
            </h2>
          </ScrollReveal>

          <Link
            href="/development/work/gusto"
            className="group block relative overflow-hidden bg-ink text-bone"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[440px] overflow-hidden">
                <Image
                  src="/images/dev/gusto-screen.webp"
                  alt="Gusto app — service marketplace built in Bahrain"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <p className="text-[10px] md:text-xs font-medium tracking-[0.4em] text-bone/70 mb-3">
                  CASE STUDY &nbsp;/&nbsp; 01
                </p>
                <h3
                  className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[0.02em] leading-[1.05] mb-5"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Gusto
                </h3>
                <p className="text-bone/80 text-base md:text-lg leading-relaxed mb-6 max-w-md">
                  A service-marketplace mobile app — connecting Bahrainis to local pros for everything from home repairs to professional services.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.16em] uppercase border-b border-bone/40 group-hover:border-bone pb-1 self-start transition-colors">
                  Read case study
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <p className="text-xs font-semibold tracking-[0.4em] text-muted mb-3">
              SERVICES
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-ink"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              What we build
            </h2>
          </ScrollReveal>
          <div className="dev-service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {devServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
