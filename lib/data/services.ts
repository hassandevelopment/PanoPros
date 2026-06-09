export interface Service {
  title: string;
  image: string;
  images?: string[];
  objectPosition?: string;
  body: string;
  link?: { label: string; href: string };
}

export const devServices: Service[] = [
  {
    title: "Business Websites",
    image: "/images/services/dev-landing.png",
    objectPosition: "center",
    body: "Custom-built, mobile-first websites designed to convert visitors into customers.",
  },
  {
    title: "Mobile Applications",
    image: "/images/services/mobile-apps.png",
    objectPosition: "center",
    body: "Custom iOS and Android apps built for your business workflow.",
  },
  {
    title: "Landing Pages",
    image: "/images/services/dev-websites-1.jpg",
    images: [
      "/images/services/dev-websites-1.jpg",
      "/images/services/dev-websites-2.jpg",
      "/images/services/dev-websites-3.jpg",
    ],
    objectPosition: "center",
    body: "Single-page sites built for speed, clarity, and a professional first impression.",
  },
  {
    title: "Brand Identity & Design",
    image: "/images/services/dev-branding.png",
    objectPosition: "center",
    body: "Logo, colours, and typography that make your business look credible from day one.",
  },
  {
    title: "SEO & Performance",
    image: "/images/services/seo-performance.svg",
    objectPosition: "center",
    body: "Fast load times and Google-ready structure baked in from the start.",
  },
  {
    title: "Payment Integrations",
    image: "/images/services/payment-integrations.svg",
    objectPosition: "center",
    body: "Add credit, debit, and Benefit Pay to your website or app seamlessly.",
  },
];

export const services: Service[] = [
  {
    title: "Photography",
    image: "/images/portfolio/1.1.webp",
    objectPosition: "center",
    body: "Professional photos that make your listing stand out and attract serious buyers.",
  },
  {
    title: "Matterport Virtual Tours",
    image: "/images/services/virtual-tour.gif",
    objectPosition: "center",
    body: "Let buyers walk through your property online, from anywhere, at any time.",
    link: {
      label: "Click here to see an example",
      href: "https://my.matterport.com/show/?m=YGXvNG1vJyB",
    },
  },
  {
    title: "Virtual Staging",
    image: "/images/services/virtual-staging.gif",
    objectPosition: "center",
    body: "Empty rooms don't sell — we furnish them digitally so buyers can picture the space.",
  },
  {
    title: "Twilight Shoot",
    image: "/images/services/twilight.png",
    objectPosition: "center",
    body: "Evening light makes your property look its best and stops the scroll.",
  },
  {
    title: "3D Floor Plans",
    image: "/images/services/3d-floor-plan.png",
    objectPosition: "top",
    body: "Give buyers an immersive, three-dimensional view of your property layout.",
  },
  {
    title: "2D Floor Plans",
    image: "/images/services/2d-floor-plan.png",
    objectPosition: "top",
    body: "A clean, accurate floor plan so buyers instantly understand the space.",
  },
];
