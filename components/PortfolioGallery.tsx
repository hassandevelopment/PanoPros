"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { portfolioCategories, portfolioImages } from "@/lib/data/portfolio";
import type { PortfolioCategory } from "@/lib/data/portfolio";

export default function PortfolioGallery() {
  const [active, setActive] = useState<PortfolioCategory>("All");
  const [index, setIndex] = useState(-1);

  const filtered =
    active === "All"
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === active);

  const slides = filtered.map((img) => ({ src: img.src, alt: img.alt }));

  return (
    <>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {portfolioCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="px-4 py-1.5 rounded-full text-sm font-medium border"
            style={{
              backgroundColor: active === cat ? "var(--color-ink)" : "transparent",
              color: active === cat ? "var(--color-bone)" : "var(--color-charcoal)",
              borderColor: active === cat ? "var(--color-ink)" : "rgba(42,42,46,0.3)",
              transition: "background-color 150ms ease-out, color 150ms ease-out, border-color 150ms ease-out, transform 100ms ease-out",
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

      {/* Masonry grid */}
      <div className="portfolio-grid columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((img, i) => (
          <button
            key={img.src}
            className="portfolio-item relative w-full overflow-hidden rounded-xl cursor-zoom-in block"
            onClick={() => setIndex(i)}
            aria-label={`View: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-auto object-cover"
              style={{ transition: "transform 400ms cubic-bezier(0.25, 0, 0, 1)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundColor: "rgba(14,14,16,0)",
                transition: "background-color 200ms ease-out",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(14,14,16,0.18)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(14,14,16,0)";
              }}
            />
          </button>
        ))}
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
