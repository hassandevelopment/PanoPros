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
    image: "/images/services/dev-websites-1.jpg",
    images: [
      "/images/services/dev-websites-1.jpg",
      "/images/services/dev-websites-2.jpg",
      "/images/services/dev-websites-3.jpg",
    ],
    objectPosition: "center",
    body: "**A website that works as hard as you do.** Custom-built, mobile-first, and designed to convert visitors into customers — not just to look good.",
  },
  {
    title: "Landing Pages",
    image: "/images/services/dev-landing.png",
    objectPosition: "center",
    body: "Single-page sites built for speed and clarity. Perfect for new businesses, campaigns, or services that need a professional online presence fast.",
  },
  {
    title: "Brand Identity & Design",
    image: "/images/services/dev-branding.png",
    objectPosition: "center",
    body: "Logo, colour palette, typography, and the visual language your business needs to look credible and consistent from day one.",
  },
  {
    title: "SEO & Performance",
    image: "/images/portfolio/exterior-1.webp",
    objectPosition: "center",
    body: "Fast load times, clean code, and Google-ready structure baked in from the start — not bolted on after the fact.",
  },
];

export const services: Service[] = [
  {
    title: "Photography",
    image: "/images/portfolio/1.1.webp",
    objectPosition: "center",
    body: "**Stop losing buyers to poor visuals.** Many local listings have low lighting, clutter, and reflections. Our professional photos make your property stand out, so buyers choose you over the rest.",
  },
  {
    title: "Matterport Virtual Tours",
    image: "/images/services/virtual-tour.gif",
    objectPosition: "center",
    body: "**Virtual tours let buyers walk through your property online, from anywhere, at any time.** They explore more, understand the home better, and save you the time of unnecessary open houses.",
    link: {
      label: "Click here to see an example",
      href: "https://my.matterport.com/show/?m=YGXvNG1vJyB",
    },
  },
  {
    title: "Virtual Staging",
    image: "/images/services/virtual-staging.gif",
    objectPosition: "center",
    body: "**Empty rooms don't sell.** We stage spaces digitally so they feel lived-in and inviting, helping buyers connect with the property and decide faster.",
  },
  {
    title: "Twilight Shoot",
    image: "/images/services/twilight.png",
    objectPosition: "center",
    body: "Evening photos show your property at its best, attract more buyers, and help them decide faster.",
  },
  {
    title: "3D Floor Plans",
    image: "/images/services/3d-floor-plan.png",
    objectPosition: "top",
    body: "3D floor plans show buyers the layout clearly, helping them understand the space and imagine living there.",
  },
  {
    title: "2D Floor Plans",
    image: "/images/services/2d-floor-plan.png",
    objectPosition: "top",
    body: "2D floor plans give buyers a clear view of the property layout, so they can see how rooms connect and get a better sense of the space.",
  },
];
