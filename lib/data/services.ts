export interface Service {
  title: string;
  image: string;
  images?: string[];
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  imageBackground?: string;
  body: string;
  link?: { label: string; href: string };
  unoptimized?: boolean;
  blurDataURL?: string;
}

export const devServices: Service[] = [
  {
    title: "Business Websites",
    image: "/images/services/dev-landing.webp",
    objectPosition: "center",
    blurDataURL: "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoIAAUAB0CWJaQAA3AA/u5U3Y2X6vApngAAAA==",
    body: "Custom-built, mobile-first websites designed to convert visitors into customers.",
  },
  {
    title: "Landing Pages",
    image: "/images/services/dev-websites-1.webp",
    images: [
      "/images/services/dev-websites-1.webp",
      "/images/services/dev-websites-2.webp",
      "/images/services/dev-websites-3.webp",
    ],
    objectPosition: "center",
    blurDataURL: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoIAAUAB0CWJZQAAvwT2k0AAP6OGRDIBmORdttdQoAAAA==",
    body: "Single-page sites built for speed, clarity, and a professional first impression.",
  },
  {
    title: "Mobile Applications",
    image: "/images/services/mobile-apps.webp",
    objectPosition: "center",
    objectFit: "contain",
    imageBackground: "#0E0E10",
    blurDataURL: "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoIAAUAB0CWJZwAAxfy7wgAAP7Q62DrqgAGswxQ0uIzFvfqTrgAAA==",
    body: "Custom iOS and Android apps built for your business workflow.",
  },
  {
    title: "Payment Integrations",
    image: "/images/services/payment-integrations.svg",
    objectPosition: "center",
    unoptimized: true,
    body: "Add credit, debit, and Benefit Pay to your website or app seamlessly.",
  },
  {
    title: "SEO & Performance",
    image: "/images/services/seo-performance.svg",
    objectPosition: "center",
    unoptimized: true,
    body: "Fast load times and Google-ready structure baked in from the start.",
  },
];

export const services: Service[] = [
  {
    title: "Photography",
    image: "/images/services/photography.webp",
    objectPosition: "center",
    blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAADQAQCdASoIAAUAB0CWJZQCdAEUkTm9AAD30Exq04IAt7HMkAA=",
    body: "Professional photos that make your listing stand out and attract serious buyers.",
  },
  {
    title: "Matterport Virtual Tours",
    image: "/images/services/virtual-tour.webp",
    objectPosition: "center",
    unoptimized: true,
    body: "Let buyers walk through your property online, from anywhere, at any time.",
    link: {
      label: "Click here to see an example",
      href: "https://my.matterport.com/show/?m=YGXvNG1vJyB",
    },
  },
  {
    title: "Virtual Staging",
    image: "/images/services/virtual-staging.webp",
    objectPosition: "center",
    unoptimized: true,
    body: "Empty rooms don't sell — we furnish them digitally so buyers can picture the space.",
  },
  {
    title: "Twilight Shoot",
    image: "/images/services/twilight.webp",
    objectPosition: "center",
    blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACQAQCdASoIAAUAB0CWJYwAApplJwAA/ng3zJa69FJmIw8gAAA=",
    body: "Evening light makes your property look its best and stops the scroll.",
  },
  {
    title: "3D Floor Plans",
    image: "/images/services/3d-floor-plan.webp",
    objectPosition: "top",
    blurDataURL: "data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAPpSYqaenrGh5////////kY////////96nP///////3EiR1VtmVxUOwBWUDggKAAAANABAJ0BKggABQAHQJYliAJ0AN07ZKgAAP6Yh4ujVZvRkcGeValsAAA=",
    body: "Give buyers an immersive, three-dimensional view of your property layout.",
  },
  {
    title: "2D Floor Plans",
    image: "/images/services/2d-floor-plan.webp",
    objectPosition: "top",
    blurDataURL: "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUAB0CWJaQAA3AA/u8iooIwAA==",
    body: "A clean, accurate floor plan so buyers instantly understand the space.",
  },
];
