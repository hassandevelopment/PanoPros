import Link from "next/link";
import { devServices } from "@/lib/data/services";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Development",
  description:
    "Custom websites, landing pages, mobile apps, and brand identity for Bahraini businesses. Fast, modern, bilingual-ready.",
};

export default function DevelopmentPage() {
  return (
    <section className="grain bg-bone min-h-screen">
      {/* Typographic header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 md:pt-40 pb-16 md:pb-20 text-center">
        <div className="home-line w-full max-w-md h-px bg-ink/20 mb-10 mx-auto" />
        <h1
          className="home-word-1 text-5xl md:text-7xl font-medium tracking-[-0.02em] leading-none text-ink mb-6"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Development
        </h1>
        <p className="home-word-2 text-base md:text-lg text-ink/60 max-w-lg mx-auto">
          Sites and Apps that Convert.
        </p>
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 md:pb-28">
        <ScrollReveal>
          <div className="dev-service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {devServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 md:mt-16">
          <Link
            href="/portfolio?filter=development"
            className="inline-block bg-ink text-bone rounded-full px-8 py-3 text-sm font-medium hover:bg-charcoal transition-colors"
          >
            See Our Work
          </Link>
          <Link
            href="/packages"
            className="inline-block border border-ink text-ink rounded-full px-8 py-3 text-sm font-medium hover:bg-ink hover:text-bone transition-colors"
          >
            View Packages
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
