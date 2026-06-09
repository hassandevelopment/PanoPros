import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data/services";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Media",
  description:
    "Real estate photography, cinematic video, Matterport virtual tours, twilight shoots, and 2D/3D floor plans in Bahrain.",
};

export default function MediaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end -mt-16 md:-mt-20 pt-16 md:pt-20">
        <Image
          src="/images/portfolio/1.1.webp"
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
            01 &nbsp;/&nbsp; MEDIA
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-[0.02em] leading-[0.95] text-bone max-w-3xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Real estate
            <br /> photography that closes deals.
          </h1>
          <p className="mt-6 text-bone/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            Photography, cinematic video, Matterport tours, twilight shoots, and floor plans for Bahraini agents and developers.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <p className="text-xs font-semibold tracking-[0.4em] text-muted mb-3">
              SERVICES
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-ink"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              What we shoot
            </h2>
          </ScrollReveal>
          <div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
