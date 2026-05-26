import Image from "next/image";
import Link from "next/link";
import { services, devServices } from "@/lib/data/services";
import ServiceCard from "@/components/ServiceCard";
import CTAStrip from "@/components/CTAStrip";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/images/hero.jpg"
          alt="Luxury property in Bahrain photographed by PanoPros"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-body font-bold text-bone leading-tight">
            Professional Media &amp; Web Development in Bahrain
          </h1>
          <p className="mt-6 text-bone/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Real estate photography that closes deals. Websites that turn visitors into customers.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/packages"
              className="hero-btn bg-white text-ink font-semibold text-sm px-10 py-3.5 rounded w-full sm:w-auto text-center select-none"
            >
              View Packages
            </Link>
            <Link
              href="/portfolio"
              className="hero-btn bg-white text-ink font-semibold text-sm px-10 py-3.5 rounded w-full sm:w-auto text-center select-none"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink">
              What We Do
            </h2>
          </div>

          {/* Real Estate Media */}
          <div className="mb-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-2">Real Estate Media</p>
            <h3 className="text-xl font-semibold text-ink mb-8">Photography, Video &amp; Virtual Tours</h3>
          </div>
          <div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          {/* Divider */}
          <div className="my-16 flex items-center gap-6">
            <div className="flex-1 h-px bg-cream" />
            <span className="text-xs font-semibold tracking-widest uppercase text-muted px-2">Also</span>
            <div className="flex-1 h-px bg-cream" />
          </div>

          {/* Web & App Development */}
          <div className="mb-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-2">Web &amp; App Development</p>
            <h3 className="text-xl font-semibold text-ink mb-8">Custom Websites for Bahraini Businesses</h3>
          </div>
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
