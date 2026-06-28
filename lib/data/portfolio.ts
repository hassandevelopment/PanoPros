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
  blurDataURL?: string;
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
    blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAABwAQCdASoJAAUAB0CWJYwAAkq9uAD+sBrgc+H+XXremNd1bAA=",
    category: "Development",
  },
  {
    title: "CAS Premium",
    client: "Premium Car Care · Bahrain",
    description: "High-end auto detailing, ceramic coatings, and PPF — a premium site built to attract serious car enthusiasts.",
    href: "https://hassandevelopment.github.io/CAS-Premium/",
    screenshot: "/images/dev/screenshots/cas-premium.webp",
    blurDataURL: "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoJAAUAB0CWJaQAA3AA/u3WnWCyvTNieggAAA==",
    category: "Development",
  },
  {
    title: "Mélo Beauty Lounge",
    client: "Hair, Nails & Café · Barbar, Bahrain",
    description: "Full-service salon with an in-house café — hair colour, treatments, manicures, and pedicures in Barbar, Bahrain.",
    href: "https://hassandevelopment.github.io/Melo-Beauty-Lounge/",
    screenshot: "/images/dev/screenshots/melo-beauty-lounge.webp",
    blurDataURL: "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACwAQCdASoJAAUAB0CWJQBOgBt9dG8AAP7e+hmHbVRKMoPsuhL+0L8rVAA=",
    category: "Development",
  },
  {
    title: "Calma",
    client: "Wellness & Beauty · Bahrain",
    description: "A serene, conversion-focused site for a premium wellness brand — designed to attract and book clients effortlessly.",
    href: "https://hassandevelopment.github.io/Calma/",
    screenshot: "/images/dev/screenshots/calma.webp",
    blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAADQAQCdASoJAAUAB0CWJQBYdiLs3pUAgAD+3rZuB61UQLSpGCrKAAAA",
    category: "Development",
  },
  {
    title: "Gusto Pizzeria Ristorante",
    client: "Italian Restaurant · Bahrain",
    description: "Authentic wood-fired Italian dining — a full-service restaurant site built to drive reservations.",
    href: "https://hassandevelopment.github.io/gusto-web/",
    screenshot: "/images/dev/screenshots/gusto-pizzeria-ristorante.webp",
    blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACQAQCdASoJAAUAB0CWJZwAAvhO5wAA/IxVL3o0s1h45HkAAAA=",
    category: "Development",
  },
  {
    title: "Custom Touch Car Care",
    client: "Auto Detailing · Salmabad, Bahrain",
    description: "Workshop-grade detailing — ceramic coatings, PPF, wrapping, and paint correction built for Gulf conditions.",
    href: "https://hassandevelopment.github.io/Custom-Touch-Car-Care/",
    screenshot: "/images/dev/screenshots/custom-touch-car-care.webp",
    blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACQAQCdASoJAAUAB0CWJZQAAp0JGAAA/uOEplmg7vp9i8OAAAA=",
    category: "Development",
  },
  {
    title: "3D Car Spa",
    client: "Car Detailing · Hidd, Bahrain",
    description: "Premium mobile car detailing with a spa-quality finish — comes to you anywhere in Bahrain.",
    href: "https://hassandevelopment.github.io/3D-Car-Spa/",
    screenshot: "/images/dev/screenshots/3d-car-spa.webp",
    blurDataURL: "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoJAAUAB0CWJaQAA3AA/u6V4gS+lkoAAAA=",
    category: "Development",
  },
];

export const portfolioImages: PortfolioImage[] = [
  { src: "/images/portfolio/1.1.webp", alt: "Bahrain villa exterior", category: "Media" },
  { src: "/images/portfolio/aerial-1.webp", alt: "Aerial property shot — Bahrain", category: "Media" },
  { src: "/images/portfolio/aerial-2.webp", alt: "Aerial property view — Bahrain", category: "Media" },
  { src: "/images/portfolio/16.webp", alt: "Modern living room interior", category: "Media" },
  { src: "/images/portfolio/11.webp", alt: "Open-plan kitchen and dining area", category: "Media" },
  { src: "/images/portfolio/9.webp", alt: "Bedroom with natural light", category: "Media" },
  { src: "/images/portfolio/hdr-1.webp", alt: "HDR interior photograph", category: "Media" },
  { src: "/images/portfolio/hdr-2.webp", alt: "HDR interior detail", category: "Media" },
  { src: "/images/portfolio/hdr-3.webp", alt: "HDR interior — living space", category: "Media" },
  { src: "/images/portfolio/11-2.webp", alt: "Living area detail", category: "Media" },
  { src: "/images/portfolio/14.webp", alt: "Dining room with chandelier", category: "Media" },
  { src: "/images/portfolio/dusk-1.webp", alt: "Property at dusk — twilight shoot", category: "Media" },
  { src: "/images/portfolio/twilight-1.webp", alt: "Twilight exterior shoot", category: "Media" },
  { src: "/images/portfolio/kitchen-hdr-1.webp", alt: "HDR kitchen — full view", category: "Media" },
  { src: "/images/portfolio/kitchen-hdr-2.webp", alt: "HDR kitchen — island detail", category: "Media" },
  { src: "/images/portfolio/kitchen-3.webp", alt: "Modern kitchen with island", category: "Media" },
  { src: "/images/portfolio/combo-staged.webp", alt: "Living room before and after virtual staging", category: "Media" },
  { src: "/images/portfolio/combo-staged-2.webp", alt: "Room before and after virtual staging", category: "Media" },
  { src: "/images/portfolio/combo-2-staged.webp", alt: "Open plan before and after virtual staging", category: "Media" },
  { src: "/images/portfolio/living-room-staged-1.webp", alt: "Virtually staged living room", category: "Media" },
  { src: "/images/portfolio/living-room-staged.webp", alt: "Virtually staged living room — alternate", category: "Media" },
  { src: "/images/portfolio/master-bed-staged.webp", alt: "Virtually staged master bedroom", category: "Media" },
  { src: "/images/portfolio/master-bed-staged-2.webp", alt: "Virtually staged master bedroom — variant", category: "Media" },
  { src: "/images/portfolio/floor-plan-1.webp", alt: "2D floor plan — Makobe Lane property", category: "Media" },
  { src: "/images/portfolio/floor-plan-3d.webp", alt: "3D floor plan render", category: "Media" },
  { src: "/images/portfolio/exterior-1.webp", alt: "Property exterior", category: "Media" },
];
