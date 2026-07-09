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
    screenshot: "/images/dev/screenshots/pad.webp",
    category: "Development",
  },
  {
    title: "CAS Premium",
    client: "Premium Car Care · Bahrain",
    description: "High-end auto detailing, ceramic coatings, and PPF — a premium site built to attract serious car enthusiasts.",
    href: "https://hassandevelopment.github.io/CAS-Premium/",
    screenshot: "/images/dev/screenshots/cas-premium.webp",
    category: "Development",
  },
  {
    title: "Mélo Beauty Lounge",
    client: "Hair, Nails & Café · Barbar, Bahrain",
    description: "Full-service salon with an in-house café — hair colour, treatments, manicures, and pedicures in Barbar, Bahrain.",
    href: "https://hassandevelopment.github.io/Melo-Beauty-Lounge/",
    screenshot: "/images/dev/screenshots/melo-beauty-lounge.webp",
    category: "Development",
  },
  {
    title: "Calma",
    client: "Wellness & Beauty · Bahrain",
    description: "A serene, conversion-focused site for a premium wellness brand — designed to attract and book clients effortlessly.",
    href: "https://hassandevelopment.github.io/Calma/",
    screenshot: "/images/dev/screenshots/calma.webp",
    category: "Development",
  },
  {
    title: "Gusto Pizzeria Ristorante",
    client: "Italian Restaurant · Bahrain",
    description: "Authentic wood-fired Italian dining — a full-service restaurant site built to drive reservations.",
    href: "https://hassandevelopment.github.io/gusto-web/",
    screenshot: "/images/dev/screenshots/gusto-pizzeria-ristorante.webp",
    category: "Development",
  },
  {
    title: "Custom Touch Car Care",
    client: "Auto Detailing · Salmabad, Bahrain",
    description: "Workshop-grade detailing — ceramic coatings, PPF, wrapping, and paint correction built for Gulf conditions.",
    href: "https://hassandevelopment.github.io/Custom-Touch-Car-Care/",
    screenshot: "/images/dev/screenshots/custom-touch-car-care.webp",
    category: "Development",
  },
  {
    title: "3D Car Spa",
    client: "Car Detailing · Hidd, Bahrain",
    description: "Premium mobile car detailing with a spa-quality finish — comes to you anywhere in Bahrain.",
    href: "https://hassandevelopment.github.io/3D-Car-Spa/",
    screenshot: "/images/dev/screenshots/3d-car-spa.webp",
    category: "Development",
  },
];

export const portfolioImages: PortfolioImage[] = [
  { src: "/images/portfolio/marassi-living.webp", alt: "Marassi Bay furnished living room", category: "Media" },
  { src: "/images/portfolio/marassi-bedroom-1.webp", alt: "Marassi Bay bedroom with natural light", category: "Media" },
  { src: "/images/portfolio/marassi-bedroom-2.webp", alt: "Marassi Bay master bedroom", category: "Media" },
  { src: "/images/portfolio/marassi-dining.webp", alt: "Marassi Bay dining and living area", category: "Media" },
  { src: "/images/portfolio/16.webp", alt: "Modern living room interior", category: "Media" },
  { src: "/images/portfolio/11-2.webp", alt: "Living area detail", category: "Media" },
  { src: "/images/portfolio/combo-staged-2.webp", alt: "Room before and after virtual staging", category: "Media" },
  { src: "/images/portfolio/combo-2-staged.webp", alt: "Open plan before and after virtual staging", category: "Media" },
  { src: "/images/portfolio/11.webp", alt: "Open-plan kitchen and dining area", category: "Media" },
  { src: "/images/portfolio/naseem-interior.webp", alt: "Al Naseem villa interior", category: "Media" },
];
