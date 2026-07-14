export interface Service {
  title: string;
  image: string;
  poster?: string;
  images?: string[];
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  imageBackground?: string;
  body: string;
  link?: { label: string; href: string };
  priority?: boolean;
}

export const devServices: Service[] = [
  {
    title: "Business Websites",
    image: "/images/services/dev-landing.webp",
    objectPosition: "center",
    body: "Custom-built, mobile-first websites designed to convert visitors into customers.",
    priority: true,
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
    body: "Single-page sites built for speed, clarity, and a professional first impression.",
    priority: true,
  },
  {
    title: "Mobile Applications",
    image: "/images/services/mobile-apps.webp",
    objectPosition: "center",
    objectFit: "contain",
    imageBackground: "#0E0E10",
    body: "Custom iOS and Android apps built for your business workflow.",
  },
  {
    title: "Payment Integrations",
    image: "/images/services/payment-integrations.svg",
    objectPosition: "center",
    body: "Add credit, debit, and Benefit Pay to your website or app seamlessly.",
  },
  {
    title: "SEO & Performance",
    image: "/images/services/seo-performance.svg",
    objectPosition: "center",
    body: "Fast load times and Google-ready structure baked in from the start.",
  },
];

export const services: Service[] = [
  {
    title: "Photography",
    image: "/images/services/photography.webp",
    objectPosition: "center",
    body: "Professional photos that make your listing stand out and attract serious buyers.",
    priority: true,
  },
  {
    title: "Matterport Virtual Tours",
    image: "/images/services/virtual-tour.mp4",
    poster: "/images/services/virtual-tour-poster.webp",
    objectPosition: "center",
    body: "Let buyers walk through your property online, from anywhere, at any time.",
    priority: true,
    link: {
      label: "Click here to see an example",
      href: "https://my.matterport.com/show/?m=YGXvNG1vJyB",
    },
  },
  {
    title: "Virtual Staging",
    image: "/images/services/virtual-staging.webp",
    objectPosition: "center",
    body: "Empty rooms don't sell — we furnish them digitally so buyers can picture the space.",
  },
  {
    title: "Twilight Shoot",
    image: "/images/services/twilight.webp",
    objectPosition: "center",
    body: "Evening light makes your property look its best and stops the scroll.",
  },
  {
    title: "3D Floor Plans",
    image: "/images/services/3d-floor-plan.webp",
    objectPosition: "top",
    body: "Give buyers an immersive, three-dimensional view of your property layout.",
  },
  {
    title: "2D Floor Plans",
    image: "/images/services/2d-floor-plan.webp",
    objectPosition: "top",
    body: "A clean, accurate floor plan so buyers instantly understand the space.",
  },
];
