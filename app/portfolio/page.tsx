import type { Metadata } from "next";
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Photography, virtual staging, floor plans, and custom websites built for businesses across Bahrain.",
};

export default function PortfolioPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-bone">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
            Our Work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-ink">
            Portfolio
          </h1>
          <p className="mt-4 text-charcoal max-w-lg mx-auto">
            Photography, virtual staging, floor plans — and the websites
            we&apos;ve built for businesses across Bahrain.
          </p>
        </div>

        <PortfolioGallery />
      </div>
    </section>
  );
}
