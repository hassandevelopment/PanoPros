import type { Metadata } from "next";
import Link from "next/link";
import { packages, devPackages, carePlan } from "@/lib/data/packages";
import type { Package } from "@/lib/data/packages";
import PackageCard from "@/components/PackageCard";
import CTAStrip from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Real estate media and web development packages in Bahrain — photography, video, virtual tours, and custom websites.",
};

const processSteps = [
  { step: "01", title: "Discovery Call", desc: "15-minute chat about your business, goals, and what success looks like for you." },
  { step: "02", title: "Design & Build", desc: "We design and build your site, keeping you updated with progress along the way." },
  { step: "03", title: "Review & Refine", desc: "You review the live preview. We refine until it's exactly what you want." },
  { step: "04", title: "Launch & Live", desc: "Site goes live on your domain. You're online and ready for customers." },
];

export default function PackagesPage() {
  return (
    <>
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
              Two disciplines, one team. Real estate media to attract buyers,
              and custom web development to build your business online.
            </p>
          </div>

          {/* ── Real Estate Media ── */}
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-1">Real Estate Media</p>
            <h2 className="text-2xl font-bold text-ink">Photography, Video &amp; More</h2>
            <p className="mt-2 text-charcoal text-sm">Every shoot is handled personally — no outsourcing, no shortcuts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} />
            ))}
          </div>

          <p className="text-center text-sm text-muted mt-8">
            Not sure which package?{" "}
            <Link href="/contact-us" className="text-ink underline underline-offset-2 hover:text-charcoal">
              Get in touch
            </Link>{" "}
            and we&apos;ll recommend the right fit.
          </p>

          {/* ── Divider ── */}
          <div className="my-20 flex items-center gap-6">
            <div className="flex-1 h-px bg-cream" />
            <span className="text-xs font-semibold tracking-widest uppercase text-muted px-2">Also Available</span>
            <div className="flex-1 h-px bg-cream" />
          </div>

          {/* ── Web & App Development ── */}
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-1">Web &amp; App Development</p>
            <h2 className="text-2xl font-bold text-ink">Custom Websites for Bahraini Businesses</h2>
            <p className="mt-2 text-charcoal text-sm">Pick the package that matches where your business is right now.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {devPackages.map((pkg) => (
              <PackageCard key={pkg.name} {...(pkg as unknown as Package)} />
            ))}
          </div>

          {/* ── How It Works ── */}
          <div className="mt-16 mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3 text-center">How It Works</p>
            <h3 className="text-2xl font-bold text-ink text-center mb-10">A simple 4-step process.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map(({ step, title, desc }) => (
                <div key={step} className="bg-white rounded-xl p-6" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.07)" }}>
                  <p className="text-xs font-bold tracking-[0.2em] text-muted uppercase mb-3">STEP {step}</p>
                  <h4 className="font-heading text-lg font-semibold text-ink mb-2">{title}</h4>
                  <p className="text-sm text-charcoal leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Care Plan ── */}
          <div className="mt-8 rounded-2xl border border-cream bg-white p-8 flex flex-col sm:flex-row items-start sm:items-center gap-8" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-1">Keep It Running</p>
              <h3 className="text-xl font-bold text-ink mb-1">{carePlan.name}</h3>
              <p className="text-sm text-charcoal mb-4">{carePlan.tagline}</p>
              <div className="flex flex-wrap gap-2">
                {carePlan.features.map((f) => (
                  <span key={f} className="text-xs font-medium text-charcoal bg-cream px-3 py-1 rounded-full">{f}</span>
                ))}
              </div>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-ink">{carePlan.price}</span>
              </div>
              <p className="text-xs text-muted tracking-widest uppercase">{carePlan.priceNote}</p>
              <Link
                href="/contact-us?package=care-plan"
                className="mt-4 inline-block border border-ink text-ink text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-ink hover:text-bone transition-colors"
              >
                Add Care Plan
              </Link>
            </div>
          </div>

          {/* ── Good to Know ── */}
          <div className="mt-10 rounded-xl bg-cream p-6 max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">Good to Know</p>
            <ul className="space-y-2">
              {[
                "50% deposit to start, 50% on launch — no surprises",
                "All packages include domain & hosting setup guidance",
                "Pricing excludes domain and hosting fees (typically BD 15–25/year)",
                "Custom features outside listed packages are quoted separately",
              ].map((note) => (
                <li key={note} className="flex items-start gap-2 text-sm text-charcoal">
                  <span className="text-muted mt-0.5 shrink-0">→</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
