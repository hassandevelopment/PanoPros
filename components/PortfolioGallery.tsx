"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { portfolioCategories, portfolioImages, devProjects } from "@/lib/data/portfolio";
import type { PortfolioCategory } from "@/lib/data/portfolio";
import DevProjectCard from "./DevProjectCard";

export default function PortfolioGallery({ initialFilter }: { initialFilter?: string }) {
  const resolved = (
    portfolioCategories.find(
      (c) => c.toLowerCase() === initialFilter?.toLowerCase()
    ) ?? "Development"
  ) as PortfolioCategory;

  const [active, setActive] = useState<PortfolioCategory>(resolved);
  const [index, setIndex] = useState(-1);

  const slides = portfolioImages.map((img) => ({ src: img.src, alt: img.alt }));

  return (
    <>
      {/* Filter pills — same style as PackagesClient toggle */}
      <div className="flex gap-2 justify-center mb-10">
        {portfolioCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="px-6 py-2 rounded-full text-sm font-medium border"
            style={{
              backgroundColor: active === cat ? "var(--color-ink)" : "transparent",
              color: active === cat ? "var(--color-bone)" : "var(--color-charcoal)",
              borderColor: active === cat ? "var(--color-ink)" : "rgba(42,42,46,0.3)",
              transition: "background-color 150ms ease-out, color 150ms ease-out, border-color 150ms ease-out",
            }}
            onMouseEnter={e => {
              if (active !== cat) {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-ink)";
                (e.currentTarget as HTMLElement).style.color = "var(--color-ink)";
              }
            }}
            onMouseLeave={e => {
              if (active !== cat) {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(42,42,46,0.3)";
                (e.currentTarget as HTMLElement).style.color = "var(--color-charcoal)";
              }
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Development projects */}
      {active === "Development" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devProjects.map((project) => (
            <DevProjectCard key={project.title} {...project} />
          ))}
        </div>
      )}

      {/* Media photo grid */}
      {active === "Media" && (
        <div className="portfolio-grid columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {portfolioImages.map((img, i) => (
            <button
              key={img.src}
              className="portfolio-item relative w-full overflow-hidden rounded-xl cursor-zoom-in block aspect-[4/3]"
              onClick={() => setIndex(i)}
              aria-label={`View: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                style={{ transition: "transform 400ms cubic-bezier(0.25, 0, 0, 1)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                unoptimized
                loading="eager"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: "rgba(14,14,16,0)", transition: "background-color 200ms ease-out" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(14,14,16,0.18)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(14,14,16,0)"; }}
              />
            </button>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-12 md:mt-16">
        <Link
          href="/packages"
          className="inline-block border border-ink text-ink rounded-full px-8 py-3 text-sm font-medium hover:bg-ink hover:text-bone transition-colors"
        >
          View Packages
        </Link>
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        on={{ view: ({ index: i }) => setIndex(i) }}
      />
    </>
  );
}
