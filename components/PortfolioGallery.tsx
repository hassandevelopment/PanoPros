"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { portfolioCategories, portfolioImages, devProjects } from "@/lib/data/portfolio";
import type { PortfolioCategory } from "@/lib/data/portfolio";
import DevProjectCard from "./DevProjectCard";

export default function PortfolioGallery() {
  const [active, setActive] = useState<PortfolioCategory>("All");
  const [index, setIndex] = useState(-1);

  const showPhotos = active !== "Development";
  const showDevProjects = active === "All" || active === "Development";

  const filteredPhotos =
    active === "All"
      ? portfolioImages
      : active === "Development"
      ? []
      : portfolioImages.filter((img) => img.category === active);

  const slides = filteredPhotos.map((img) => ({ src: img.src, alt: img.alt }));

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

      {/* Photo masonry grid */}
      {showPhotos && filteredPhotos.length > 0 && (
        <div className="portfolio-grid columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredPhotos.map((img, i) => (
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
      )}

      {/* Development projects */}
      {showDevProjects && (
        <>
          {active === "All" && (
            <div className="mt-16 mb-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="flex-1 h-px bg-cream" />
                <p className="text-xs font-semibold tracking-widest uppercase text-muted px-2">Web & App Development</p>
                <div className="flex-1 h-px bg-cream" />
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devProjects.map((project) => (
              <DevProjectCard key={project.title} {...project} />
            ))}
          </div>
        </>
      )}

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
