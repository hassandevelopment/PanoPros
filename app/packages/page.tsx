import type { Metadata } from "next";
import { packages } from "@/lib/data/packages";
import PackageCard from "@/components/PackageCard";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Three flexible packages for real estate media in Bahrain — from HDR photography to cinematic video, Matterport tours, and virtual staging.",
};

export default function PackagesPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-bone">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
            Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-ink">
            Simple, Transparent Packages
          </h1>
          <p className="mt-4 text-charcoal max-w-xl mx-auto leading-relaxed">
            Choose the package that fits your listing. Every shoot is handled
            personally — no outsourcing, no shortcuts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} {...pkg} />
          ))}
        </div>

        <p className="text-center text-sm text-muted mt-10">
          Not sure which package?{" "}
          <a href="/contact-us" className="text-ink underline underline-offset-2 hover:text-charcoal">
            Get in touch
          </a>{" "}
          and we&apos;ll recommend the right fit.
        </p>
      </div>
    </section>
  );
}
