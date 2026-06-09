import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import PackagesClient from "@/components/PackagesClient";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Real estate media and web development packages in Bahrain — photography, video, virtual tours, and custom websites.",
};

export default function PackagesPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-bone">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
            Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-ink">
            Simple, Transparent Packages
          </h1>
          <p className="mt-4 text-charcoal max-w-xl mx-auto leading-relaxed">
            Two disciplines, one team. Real estate media to attract buyers,
            and custom web development to build your business online.
          </p>
        </ScrollReveal>

        <PackagesClient />
      </div>
    </section>
  );
}
