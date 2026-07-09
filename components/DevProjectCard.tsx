import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { DevProject } from "@/lib/data/portfolio";

const cardGradients = [
  "linear-gradient(135deg, #1a1a1a 0%, #2e2e2e 100%)",
  "linear-gradient(135deg, #0E0E10 0%, #1c1c1e 100%)",
  "linear-gradient(135deg, #1c1c1e 0%, #0E0E10 100%)",
  "linear-gradient(135deg, #111 0%, #2a2a2e 100%)",
];

export default function DevProjectCard({ title, client, description, href, screenshot }: DevProject) {
  const gradient = cardGradients[title.length % cardGradients.length];

  return (
    <article
      className="flex flex-col rounded-xl overflow-hidden bg-white"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)", transition: "box-shadow 200ms ease-out" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.08)"; }}
    >
      {/* Header — screenshot if available, gradient fallback */}
      {screenshot ? (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={screenshot}
            alt={`${title} website screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top"
            style={{ transition: "transform 400ms cubic-bezier(0.25, 0, 0, 1)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            unoptimized
            loading="eager"
          />
          <div className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white/60 text-xs font-medium tracking-[0.18em] uppercase mb-0.5">{client}</p>
            <h3 className="text-white text-base font-bold tracking-tight">{title}</h3>
          </div>
        </div>
      ) : (
        <div
          className="px-6 pt-7 pb-6 min-h-[120px] flex flex-col justify-end relative"
          style={{ background: gradient }}
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative">
            <p className="text-white/50 text-xs font-medium tracking-[0.18em] uppercase mb-1.5">{client}</p>
            <h3 className="text-white text-xl font-bold tracking-tight">{title}</h3>
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <p className="text-charcoal text-sm leading-relaxed flex-1">{description}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink border border-ink px-4 py-2.5 rounded-full self-start"
          style={{ transition: "background-color 150ms ease-out, color 150ms ease-out" }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = "var(--color-ink)";
            el.style.color = "var(--color-bone)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = "transparent";
            el.style.color = "var(--color-ink)";
          }}
          aria-label={`View ${title} website live`}
        >
          View Live <ArrowUpRight size={14} />
        </a>
      </div>
    </article>
  );
}
