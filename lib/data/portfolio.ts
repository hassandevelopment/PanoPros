export type PortfolioCategory =
  | "All"
  | "Photography"
  | "Virtual Staging"
  | "Floor Plans"
  | "Kitchens & Interiors";

export interface PortfolioImage {
  src: string;
  alt: string;
  category: Exclude<PortfolioCategory, "All">;
}

export const portfolioCategories: PortfolioCategory[] = [
  "All",
  "Photography",
  "Virtual Staging",
  "Floor Plans",
  "Kitchens & Interiors",
];

export const portfolioImages: PortfolioImage[] = [
  {
    src: "/images/portfolio/1.1.webp",
    alt: "Bahrain villa exterior",
    category: "Photography",
  },
  {
    src: "/images/portfolio/aerial-1.webp",
    alt: "Aerial property shot — Bahrain",
    category: "Photography",
  },
  {
    src: "/images/portfolio/aerial-2.webp",
    alt: "Aerial property view — Bahrain",
    category: "Photography",
  },
  {
    src: "/images/portfolio/16.webp",
    alt: "Modern living room interior",
    category: "Photography",
  },
  {
    src: "/images/portfolio/11.webp",
    alt: "Open-plan kitchen and dining area",
    category: "Kitchens & Interiors",
  },
  {
    src: "/images/portfolio/9.webp",
    alt: "Bedroom with natural light",
    category: "Photography",
  },
  {
    src: "/images/portfolio/pano.jpg",
    alt: "Panoramic property view",
    category: "Photography",
  },
  {
    src: "/images/portfolio/hdr-1.webp",
    alt: "HDR interior photograph",
    category: "Photography",
  },
  {
    src: "/images/portfolio/hdr-2.webp",
    alt: "HDR interior detail",
    category: "Photography",
  },
  {
    src: "/images/portfolio/hdr-3.webp",
    alt: "HDR interior — living space",
    category: "Photography",
  },
  {
    src: "/images/portfolio/11-2.webp",
    alt: "Living area detail",
    category: "Photography",
  },
  {
    src: "/images/portfolio/14.webp",
    alt: "Dining room with chandelier",
    category: "Photography",
  },
  {
    src: "/images/portfolio/dusk-1.webp",
    alt: "Property at dusk — twilight shoot",
    category: "Photography",
  },
  {
    src: "/images/portfolio/twilight-1.webp",
    alt: "Twilight exterior shoot",
    category: "Photography",
  },
  {
    src: "/images/portfolio/kitchen-hdr-1.webp",
    alt: "HDR kitchen — full view",
    category: "Kitchens & Interiors",
  },
  {
    src: "/images/portfolio/kitchen-hdr-2.webp",
    alt: "HDR kitchen — island detail",
    category: "Kitchens & Interiors",
  },
  {
    src: "/images/portfolio/kitchen-3.webp",
    alt: "Modern kitchen with island",
    category: "Kitchens & Interiors",
  },
  {
    src: "/images/portfolio/combo-staged.webp",
    alt: "Living room before and after virtual staging",
    category: "Virtual Staging",
  },
  {
    src: "/images/portfolio/combo-staged-2.webp",
    alt: "Room before and after virtual staging",
    category: "Virtual Staging",
  },
  {
    src: "/images/portfolio/combo-2-staged.webp",
    alt: "Open plan before and after virtual staging",
    category: "Virtual Staging",
  },
  {
    src: "/images/portfolio/living-room-staged-1.webp",
    alt: "Virtually staged living room",
    category: "Virtual Staging",
  },
  {
    src: "/images/portfolio/living-room-staged.webp",
    alt: "Virtually staged living room — alternate",
    category: "Virtual Staging",
  },
  {
    src: "/images/portfolio/master-bed-staged.webp",
    alt: "Virtually staged master bedroom",
    category: "Virtual Staging",
  },
  {
    src: "/images/portfolio/master-bed-staged-2.webp",
    alt: "Virtually staged master bedroom — variant",
    category: "Virtual Staging",
  },
  {
    src: "/images/portfolio/floor-plan-1.webp",
    alt: "2D floor plan — Makobe Lane property",
    category: "Floor Plans",
  },
  {
    src: "/images/portfolio/floor-plan-3d.webp",
    alt: "3D floor plan render",
    category: "Floor Plans",
  },
  {
    src: "/images/portfolio/exterior-1.webp",
    alt: "Property exterior",
    category: "Photography",
  },
];
