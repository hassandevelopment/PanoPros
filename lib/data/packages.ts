export interface PackageFeature {
  title: string;
  body: string;
  addOns?: string[];
}

export interface Package {
  name: string;
  tagline: string;
  price: string;
  image: string;
  features: PackageFeature[];
  cta: { label: string; href: string };
  highlighted?: boolean;
  addOns?: string[];
}

export const packages: Package[] = [
  {
    name: "Basic",
    tagline: "For Standard Listings",
    price: "75 BD",
    image: "/images/packages/basic.jpg",
    features: [
      {
        title: "Professional HDR Photography",
        body: "20–30 professionally captured High Dynamic Range images that highlight the best features of your property.",
      },
      {
        title: "Basic Retouching",
        body: "Each photo is professionally edited for lighting, colour balance, and clarity.",
      },
      {
        title: "24–48 Hour Delivery",
        body: "Fast turnaround so your listing goes live without delay.",
      },
    ],
    addOns: ["2D Floor Plan — 20 BD", "Virtual Staging — 40 BD per image"],
    cta: { label: "Book Basic", href: "/contact-us?package=basic" },
  },
  {
    name: "Standard",
    tagline: "Most Popular",
    price: "120 BD",
    image: "/images/packages/standard.jpg",
    features: [
      {
        title: "HDR Photos",
        body: "High Dynamic Range photos: professionally captured images that highlight the best features of your property.",
      },
      {
        title: "Social Media Video",
        body: "The most popular way to showcase listings in the region. Short, vertical, high-impact videos made to grab attention and generate inquiries.",
      },
      {
        title: "2D Floor Plan",
        body: "A detailed and accurate floor plan to give potential buyers a clear understanding of the property's layout.",
      },
    ],
    addOns: ["3 Staged Images Bundle — 40 BD"],
    cta: { label: "Book Standard", href: "/contact-us?package=standard" },
    highlighted: true,
  },
  {
    name: "Premium Luxury",
    tagline: "The Full Package",
    price: "220 BD",
    image: "/images/packages/premium.jpg",
    features: [
      {
        title: "HDR Photos",
        body: "High Dynamic Range photos: professionally captured images that highlight the best features of your property.",
      },
      {
        title: "Cinematic Video",
        body: "1–2 minutes of smooth, high-quality visuals. Shot with professional equipment to showcase every detail.",
      },
      {
        title: "Social Media Video",
        body: "Short, vertical, high-impact videos made to grab attention and generate inquiries on social media.",
      },
      {
        title: "2D Floor Plan",
        body: "A detailed and accurate floor plan to give potential buyers a clear understanding of the property's layout.",
      },
      {
        title: "3D Floor Plan",
        body: "Take it a step further with a three-dimensional representation of your property.",
      },
      {
        title: "3D Virtual Tour",
        body: "Immerse potential buyers in a virtual walkthrough using industry-leading Matterport technology.",
      },
      {
        title: "3 Virtual Staging Rooms",
        body: "Transform vacant spaces with virtual staging, allowing buyers to visualise the potential of the property.",
        addOns: ["Additional Virtual Staging — 10 BD per image"],
      },
      {
        title: "Virtual Twilight",
        body: "Experience the charm of twilight with a virtual rendering, showcasing your property in the warm glow of evening light.",
      },
    ],
    cta: { label: "Book Premium", href: "/contact-us?package=premium" },
  },
];
