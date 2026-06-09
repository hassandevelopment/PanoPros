"use client";

import Image from "next/image";

const images = [
  { src: "/images/portfolio/1.1.webp",          alt: "Bahrain villa exterior" },
  { src: "/images/portfolio/aerial-1.webp",      alt: "Aerial property shot" },
  { src: "/images/portfolio/hdr-1.webp",         alt: "HDR interior" },
  { src: "/images/portfolio/dusk-1.webp",        alt: "Property at dusk" },
  { src: "/images/portfolio/11.webp",            alt: "Kitchen and dining area" },
  { src: "/images/portfolio/exterior-1.webp",    alt: "Property exterior" },
  { src: "/images/portfolio/aerial-2.webp",      alt: "Aerial property view" },
  { src: "/images/portfolio/hdr-2.webp",         alt: "HDR interior detail" },
  { src: "/images/portfolio/kitchen-hdr-1.webp", alt: "HDR kitchen" },
  { src: "/images/portfolio/16.webp",            alt: "Modern living room" },
];

const doubled = [...images, ...images];

export default function PhotoStrip() {
  return (
    <div className="w-full overflow-hidden rounded-lg my-8 md:my-10" aria-hidden="true">
      <div className="flex gap-1 photo-strip-track" style={{ width: "max-content" }}>
        {doubled.map((img, i) => (
          <div key={i} className="relative shrink-0 w-16 h-12 md:w-24 md:h-16 lg:w-28 lg:h-20 overflow-hidden">
            <Image
              src={img.src}
              alt=""
              fill
              sizes="112px"
              className="object-cover object-center"
              style={{ filter: "grayscale(30%)" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
