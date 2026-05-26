"use client";

import Link from "next/link";
import { Check, Plus } from "lucide-react";
import type { Package } from "@/lib/data/packages";

const headerStyles: Record<string, { bg: string; pattern: string }> = {
  Basic: {
    bg: "linear-gradient(135deg, #1a1a1a 0%, #2e2e2e 100%)",
    pattern: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%)",
  },
  Standard: {
    bg: "linear-gradient(135deg, #0E0E10 0%, #1c1c1e 50%, #2a2a2e 100%)",
    pattern: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.08) 0%, transparent 60%)",
  },
  "Premium Luxury": {
    bg: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #111 100%)",
    pattern: "radial-gradient(circle at 15% 85%, rgba(255,255,255,0.07) 0%, transparent 45%), radial-gradient(circle at 85% 15%, rgba(255,255,255,0.05) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)",
  },
  Starter: {
    bg: "linear-gradient(135deg, #1c1c1e 0%, #2a2a2e 100%)",
    pattern: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 50%)",
  },
  Business: {
    bg: "linear-gradient(135deg, #0E0E10 0%, #222224 50%, #1a1a1a 100%)",
    pattern: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.08) 0%, transparent 60%)",
  },
  Premium: {
    bg: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #0E0E10 100%)",
    pattern: "radial-gradient(circle at 15% 85%, rgba(255,255,255,0.07) 0%, transparent 45%), radial-gradient(circle at 85% 15%, rgba(255,255,255,0.05) 0%, transparent 45%)",
  },
};

export default function PackageCard({
  name,
  tagline,
  price,
  priceNote,
  features,
  addOns,
  cta,
  highlighted,
}: Package) {
  const style = headerStyles[name] ?? headerStyles["Basic"];

  return (
    <article
      className={`flex flex-col rounded-2xl overflow-hidden bg-white ${
        highlighted ? "ring-2 ring-ink scale-[1.02]" : ""
      }`}
      style={{ boxShadow: highlighted ? "0 8px 32px rgba(0,0,0,0.14)" : "0 2px 8px rgba(0,0,0,0.08)" }}
    >
      {highlighted && (
        <div className="bg-ink text-bone text-xs font-semibold tracking-widest uppercase text-center py-2">
          Most Popular
        </div>
      )}

      {/* Designed header — no photo */}
      <div
        className="relative px-6 pt-8 pb-7 flex flex-col justify-end min-h-[180px]"
        style={{ background: `${style.pattern}, ${style.bg}` }}
      >
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative">
          <p className="text-white/50 text-xs font-medium tracking-[0.2em] uppercase mb-2">
            {tagline}
          </p>
          <div className="flex items-baseline justify-between">
            <h3 className="text-white text-2xl font-bold tracking-tight">{name}</h3>
            <div className="text-right">
              <span className="text-white text-3xl font-bold">{price}</span>
              {priceNote && (
                <p className="text-white/40 text-[10px] font-semibold tracking-[0.2em] uppercase mt-0.5">{priceNote}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <ul className="space-y-3 flex-1">
          {features.map((f) => (
            <li key={f.title}>
              <div className="flex items-start gap-3">
                <Check size={15} className="text-ink mt-0.5 shrink-0" strokeWidth={2.5} />
                <div>
                  <span className="text-sm font-semibold text-ink">{f.title}</span>
                  <p className="text-xs text-muted mt-0.5 leading-relaxed">{f.body}</p>
                  {f.addOns && (
                    <ul className="mt-1 space-y-0.5">
                      {f.addOns.map((a) => (
                        <li key={a} className="text-xs text-charcoal flex items-center gap-1.5">
                          <Plus size={10} className="text-muted" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {addOns && addOns.length > 0 && (
          <div className="mt-5 pt-4 border-t border-cream">
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
              Optional Add-Ons
            </p>
            <ul className="space-y-1">
              {addOns.map((a) => (
                <li key={a} className="text-xs text-charcoal flex items-center gap-1.5">
                  <Plus size={10} className="text-muted shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href={cta.href}
          className={`mt-6 block text-center text-sm font-semibold px-6 py-3 rounded-full select-none ${
            highlighted ? "bg-ink text-bone" : "border border-ink text-ink"
          }`}
          style={{ transition: "background-color 150ms ease-out, color 150ms ease-out" }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            if (highlighted) el.style.backgroundColor = "var(--color-charcoal)";
            else { el.style.backgroundColor = "var(--color-ink)"; el.style.color = "var(--color-bone)"; }
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            if (highlighted) el.style.backgroundColor = "var(--color-ink)";
            else { el.style.backgroundColor = "transparent"; el.style.color = "var(--color-ink)"; }
          }}
        >
          {cta.label}
        </Link>
      </div>
    </article>
  );
}
