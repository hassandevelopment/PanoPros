export type PortfolioCategory =
  | "All"
  | "Photography"
  | "Virtual Staging"
  | "Floor Plans"
  | "Kitchens & Interiors"
  | "Development";

export interface PortfolioImage {
  src: string;
  alt: string;
  category: Exclude<PortfolioCategory, "All" | "Development">;
}

export interface DevProject {
  title: string;
  client: string;
  description: string;
  href: string;
  category: "Development";
}

export const portfolioCategories: PortfolioCategory[] = [
  "All",
  "Photography",
  "Virtual Staging",
  "Floor Plans",
  "Kitchens & Interiors",
  "Development",
];

export const devProjects: DevProject[] = [
  {
    title: "PAD",
    client: "Architecture & Interior Design · Bahrain",
    description: "A refined portfolio site for an architecture and interior design studio — built to showcase projects and attract discerning clients.",
    href: "https://hassandevelopment.github.io/PAD/index.html",
    category: "Development",
  },
  {
    title: "PanoPros",
    client: "Real Estate Media · Bahrain",
    description: "Professional photography, videography, virtual tours, floor plans, and virtual staging for Bahrain's property market.",
    href: "https://www.panopros.bh",
    category: "Development",
  },
  {
    title: "Mélo Beauty Lounge",
    client: "Hair, Nails & Café · Barbar, Bahrain",
    description: "Full-service salon with an in-house café — hair colour, treatments, manicures, and pedicures in Barbar, Bahrain.",
    href: "https://hassandevelopment.github.io/Melo-Beauty-Lounge/",
    category: "Development",
  },
  {
    title: "Calma",
    client: "Wellness & Beauty · Bahrain",
    description: "A serene, conversion-focused site for a premium wellness brand — designed to attract and book clients effortlessly.",
    href: "https://hassandevelopment.github.io/Calma/",
    category: "Development",
  },
  {
    title: "Gusto Pizzeria Ristorante",
    client: "Italian Restaurant · Bahrain",
    description: "Authentic wood-fired Italian dining — a full-service restaurant site built to drive reservations.",
    href: "https://hassandevelopment.github.io/Gusto-Menu/",
    category: "Development",
  },
  {
    title: "CAS Premium",
    client: "Premium Car Care · Bahrain",
    description: "High-end auto detailing, ceramic coatings, and PPF — a premium site built to attract serious car enthusiasts.",
    href: "https://hassandevelopment.github.io/CAS-Premium/",
    category: "Development",
  },
  {
    title: "Custom Touch Car Care",
    client: "Auto Detailing · Salmabad, Bahrain",
    description: "Workshop-grade detailing — ceramic coatings, PPF, wrapping, and paint correction built for Gulf conditions.",
    href: "https://hassandevelopment.github.io/Custom-Touch-Car-Care/",
    category: "Development",
  },
  {
    title: "3D Car Spa",
    client: "Car Detailing · Hidd, Bahrain",
    description: "Premium mobile car detailing with a spa-quality finish — comes to you anywhere in Bahrain.",
    href: "https://hassandevelopment.github.io/3D-Car-Spa/",
    category: "Development",
  },
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
