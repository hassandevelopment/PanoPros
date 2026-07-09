export type PortfolioCategory = "Media" | "Development";

export interface PortfolioImage {
  src: string;
  alt: string;
  category: "Media";
}

export interface DevProject {
  title: string;
  client: string;
  description: string;
  href: string;
  screenshot?: string;
  category: "Development";
}

export const portfolioCategories: PortfolioCategory[] = ["Development", "Media"];

export const devProjects: DevProject[] = [
  {
    title: "PAD",
    client: "Architecture & Interior Design · Bahrain",
    description: "A refined portfolio site for an architecture and interior design studio — built to showcase projects and attract discerning clients.",
    href: "https://hassandevelopment.github.io/PAD/index.html",
    screenshot: "/images/dev/screenshots/pad.png",
    category: "Development",
  },
  {
    title: "CAS Premium",
    client: "Premium Car Care · Bahrain",
    description: "High-end auto detailing, ceramic coatings, and PPF — a premium site built to attract serious car enthusiasts.",
    href: "https://hassandevelopment.github.io/CAS-Premium/",
    screenshot: "/images/dev/screenshots/cas-premium.png",
    category: "Development",
  },
  {
    title: "Mélo Beauty Lounge",
    client: "Hair, Nails & Café · Barbar, Bahrain",
    description: "Full-service salon with an in-house café — hair colour, treatments, manicures, and pedicures in Barbar, Bahrain.",
    href: "https://hassandevelopment.github.io/Melo-Beauty-Lounge/",
    screenshot: "/images/dev/screenshots/melo-beauty-lounge.png",
    category: "Development",
  },
  {
    title: "Calma",
    client: "Wellness & Beauty · Bahrain",
    description: "A serene, conversion-focused site for a premium wellness brand — designed to attract and book clients effortlessly.",
    href: "https://hassandevelopment.github.io/Calma/",
    screenshot: "/images/dev/screenshots/calma.png",
    category: "Development",
  },
  {
    title: "Gusto Pizzeria Ristorante",
    client: "Italian Restaurant · Bahrain",
    description: "Authentic wood-fired Italian dining — a full-service restaurant site built to drive reservations.",
    href: "https://hassandevelopment.github.io/gusto-web/",
    screenshot: "/images/dev/screenshots/gusto-pizzeria-ristorante.png",
    category: "Development",
  },
  {
    title: "Custom Touch Car Care",
    client: "Auto Detailing · Salmabad, Bahrain",
    description: "Workshop-grade detailing — ceramic coatings, PPF, wrapping, and paint correction built for Gulf conditions.",
    href: "https://hassandevelopment.github.io/Custom-Touch-Car-Care/",
    screenshot: "/images/dev/screenshots/custom-touch-car-care.png",
    category: "Development",
  },
  {
    title: "3D Car Spa",
    client: "Car Detailing · Hidd, Bahrain",
    description: "Premium mobile car detailing with a spa-quality finish — comes to you anywhere in Bahrain.",
    href: "https://hassandevelopment.github.io/3D-Car-Spa/",
    screenshot: "/images/dev/screenshots/3d-car-spa.png",
    category: "Development",
  },
];

export const portfolioImages: PortfolioImage[] = [
  { src: "/images/portfolio/1.1.webp", alt: "Bahrain villa exterior", category: "Media" },
  { src: "/images/portfolio/marassi-balcony-view.webp", alt: "Marassi Bay waterfront balcony view", category: "Media" },
  { src: "/images/portfolio/marassi-living.webp", alt: "Marassi Bay furnished living room", category: "Media" },
  { src: "/images/portfolio/16.webp", alt: "Modern living room interior", category: "Media" },
  { src: "/images/portfolio/11.webp", alt: "Open-plan kitchen and dining area", category: "Media" },
  { src: "/images/portfolio/marassi-dining.webp", alt: "Marassi Bay dining and living area", category: "Media" },
  { src: "/images/portfolio/9.webp", alt: "Bedroom with natural light", category: "Media" },
  { src: "/images/portfolio/hdr-1.webp", alt: "HDR interior photograph", category: "Media" },
  { src: "/images/portfolio/hdr-2.webp", alt: "HDR interior detail", category: "Media" },
  { src: "/images/portfolio/hdr-3.webp", alt: "HDR interior - living space", category: "Media" },
  { src: "/images/portfolio/marassi-bedroom-1.webp", alt: "Marassi Bay bedroom with natural light", category: "Media" },
  { src: "/images/portfolio/marassi-bedroom-2.webp", alt: "Marassi Bay master bedroom", category: "Media" },
  { src: "/images/portfolio/11-2.webp", alt: "Living area detail", category: "Media" },
  { src: "/images/portfolio/14.webp", alt: "Dining room with chandelier", category: "Media" },
  { src: "/images/portfolio/naseem-interior.webp", alt: "Al Naseem villa interior", category: "Media" },
  { src: "/images/portfolio/kitchen-hdr-1.webp", alt: "HDR kitchen - full view", category: "Media" },
  { src: "/images/portfolio/kitchen-hdr-2.webp", alt: "HDR kitchen - island detail", category: "Media" },
  { src: "/images/portfolio/kitchen-3.webp", alt: "Modern kitchen with island", category: "Media" },
  { src: "/images/portfolio/combo-staged.webp", alt: "Living room before and after virtual staging", category: "Media" },
  { src: "/images/portfolio/combo-staged-2.webp", alt: "Room before and after virtual staging", category: "Media" },
  { src: "/images/portfolio/combo-2-staged.webp", alt: "Open plan before and after virtual staging", category: "Media" },
  { src: "/images/portfolio/living-room-staged-1.webp", alt: "Virtually staged living room", category: "Media" },
  { src: "/images/portfolio/living-room-staged.webp", alt: "Virtually staged living room - alternate", category: "Media" },
  { src: "/images/portfolio/master-bed-staged.webp", alt: "Virtually staged master bedroom", category: "Media" },
  { src: "/images/portfolio/master-bed-staged-2.webp", alt: "Virtually staged master bedroom - variant", category: "Media" },
  { src: "/images/portfolio/floor-plan-1.webp", alt: "2D floor plan - Makobe Lane property", category: "Media" },
  { src: "/images/portfolio/floor-plan-3d.webp", alt: "3D floor plan render", category: "Media" },
];
