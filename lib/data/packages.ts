export interface PackageFeature {
  title: string;
  body: string;
  addOns?: string[];
}

export interface Package {
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  image: string;
  features: PackageFeature[];
  cta: { label: string; href: string };
  highlighted?: boolean;
  addOns?: string[];
}

export interface DevPackage {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  image: string;
  features: PackageFeature[];
  cta: { label: string; href: string };
  highlighted?: boolean;
}

export const devPackages: DevPackage[] = [
  {
    name: "Starter",
    tagline: "A clean, professional online presence — fast.",
    price: "250 BD",
    priceNote: "ONE-TIME",
    image: "",
    features: [
      { title: "Single-page professional website", body: "One polished, fully structured page covering everything your business needs." },
      { title: "Fully mobile-responsive design", body: "Looks and works perfectly on every screen size." },
      { title: "Contact form integration", body: "A working form that sends inquiries straight to your inbox." },
      { title: "Basic SEO setup", body: "Google-ready meta tags, sitemap, and structured data." },
      { title: "Hosting & domain setup support", body: "We guide you through getting live — no technical knowledge required." },
      { title: "Delivered live in 7 days", body: "" },
      { title: "1 round of revisions included", body: "" },
    ],
    cta: { label: "Book Starter", href: "/contact-us?package=dev-starter" },
  },
  {
    name: "Business",
    tagline: "Built to win customers, not just exist online.",
    price: "400 BD",
    priceNote: "ONE-TIME",
    image: "",
    features: [
      { title: "Multi-section custom website", body: "Hero, Services, Gallery, About, and Contact — all custom-designed to your brand." },
      { title: "Custom design matched to your brand", body: "Colours, fonts, and feel aligned with your identity." },
      { title: "Photo optimisation from your content", body: "We process and optimise every image you supply." },
      { title: "Smooth animations & transitions", body: "Subtle motion that makes the site feel modern and considered." },
      { title: "WhatsApp + contact form + Maps", body: "Every key conversion point covered." },
      { title: "Google Business listing setup", body: "Your business appears correctly in local search results." },
      { title: "Advanced SEO foundation", body: "Schema markup, performance tuning, and technical hygiene." },
      { title: "Delivered live in 10 days", body: "" },
      { title: "2 rounds of revisions included", body: "" },
    ],
    cta: { label: "Book Business", href: "/contact-us?package=dev-business" },
    highlighted: true,
  },
  {
    name: "Premium",
    tagline: "For businesses ready to compete and grow online.",
    price: "650 BD",
    priceNote: "ONE-TIME",
    image: "",
    features: [
      { title: "Everything in the Business package", body: "All Business features included as the baseline." },
      { title: "Booking / inquiry system integration", body: "Online booking or smart inquiry routing built directly into the site." },
      { title: "Bilingual support (English + Arabic)", body: "Full Arabic translation with proper RTL layout." },
      { title: "Blog or updates section", body: "A content area you can update yourself, no developer needed." },
      { title: "Social media feed integration", body: "Your latest Instagram or social posts, live on your site." },
      { title: "Performance & analytics dashboard", body: "See how your site is performing, in plain language." },
      { title: "First 3 months of updates included", body: "" },
      { title: "Unlimited revisions until perfect", body: "" },
    ],
    cta: { label: "Book Premium", href: "/contact-us?package=dev-premium" },
  },
];

export const carePlan = {
  name: "Care Plan",
  tagline: "Hands-off site management so you can focus on your business.",
  price: "30 BD",
  priceNote: "PER MONTH",
  features: [
    "Hosting & uptime monitoring",
    "Content updates",
    "New photos & offers",
    "Security patches",
    "Bug fixes",
    "Priority support",
  ],
};

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
