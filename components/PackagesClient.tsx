"use client";

import { useState } from "react";
import Link from "next/link";
import { packages, devPackages, carePlan, devAddOns } from "@/lib/data/packages";
import type { Package } from "@/lib/data/packages";
import { CreditCard, Search, Globe } from "lucide-react";
import PackageCard from "@/components/PackageCard";

const processSteps = [
  { step: "01", title: "Discovery Call", desc: "15-minute chat about your business, goals, and what success looks like for you." },
  { step: "02", title: "Design & Build", desc: "We design and build your site, keeping you updated with progress along the way." },
  { step: "03", title: "Review & Refine", desc: "You review the live preview. We refine until it's exactly what you want." },
  { step: "04", title: "Launch & Live", desc: "Site goes live on your domain. You're online and ready for customers." },
];

type Tab = "development" | "media";

function TabBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 rounded-full text-sm font-medium border"
      style={{
        backgroundColor: active ? "var(--color-ink)" : "transparent",
        color: active ? "var(--color-bone)" : "var(--color-charcoal)",
        borderColor: active ? "var(--color-ink)" : "rgba(42,42,46,0.3)",
        transition: "background-color 150ms ease-out, color 150ms ease-out, border-color 150ms ease-out",
      }}
      onMouseEnter={e => {
        if (!active) {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--color-ink)";
          (e.currentTarget as HTMLElement).style.color = "var(--color-ink)";
        }
      }}
      onMouseLeave={e => {
        if (!active) {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(42,42,46,0.3)";
          (e.currentTarget as HTMLElement).style.color = "var(--color-charcoal)";
        }
      }}
    >
      {children}
    </button>
  );
}

export default function PackagesClient() {
  const [tab, setTab] = useState<Tab>("development");

  return (
    <>
      {/* Toggle — same pill style as portfolio filter */}
      <div className="flex gap-2 justify-center mb-12">
        <TabBtn active={tab === "development"} onClick={() => setTab("development")}>
          Web &amp; App Development
        </TabBtn>
        <TabBtn active={tab === "media"} onClick={() => setTab("media")}>
          Real Estate Media
        </TabBtn>
      </div>

      {/* ── Development tab ── */}
      {tab === "development" && (
        <div id="development">
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

          {/* How It Works */}
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

          {/* Care Plan */}
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
            <div className="shrink-0">
              <Link
                href="/contact-us?package=care-plan"
                className="inline-block border border-ink text-ink text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-ink hover:text-bone transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Add-Ons */}
          <div className="mt-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3 text-center">Enhance Your Project</p>
            <h3 className="text-2xl font-bold text-ink text-center mb-10">Optional Add-Ons</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {devAddOns.map(({ title, description, icon }) => {
                const Icon = icon === "CreditCard" ? CreditCard : icon === "Search" ? Search : Globe;
                return (
                  <div key={title} className="rounded-xl border border-cream bg-white p-6" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                    <Icon size={20} className="text-ink mb-4" strokeWidth={1.5} />
                    <h4 className="font-heading text-base font-semibold text-ink mb-2">{title}</h4>
                    <p className="text-sm text-charcoal leading-relaxed">{description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Good to Know */}
          <div className="mt-10 rounded-xl bg-cream p-6 max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">Good to Know</p>
            <ul className="space-y-2">
              {[
                "All packages include domain & hosting setup guidance",
                "Domain and hosting fees are separate (typically BD 15–25/year)",
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
      )}

      {/* ── Media tab ── */}
      {tab === "media" && (
        <div>
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
        </div>
      )}
    </>
  );
}
