export interface Service {
  title: string;
  image: string;
  objectPosition?: string;
  body: string;
  link?: { label: string; href: string };
}

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
