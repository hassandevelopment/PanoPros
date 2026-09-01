import type { Faq } from "@/lib/schema";

/**
 * Answers are written to be quotable standalone — an AI answer engine lifts one
 * paragraph without surrounding context, so each carries its own subject, a
 * concrete figure, and "Bahrain" where it reads naturally.
 *
 * Every figure here traces to lib/data/packages.ts or to public geography.
 * Do not add numbers that are not verifiable — they end up in FAQPage schema
 * and get repeated as fact.
 */

export const mediaFaqs: Faq[] = [
  {
    question: "What is a Matterport virtual tour and how does it work?",
    answer:
      "A Matterport virtual tour is a navigable 3D scan of a property that buyers explore online, room by room, on any device. We scan the space on site and deliver a hosted link you can embed in any Bahrain property listing or share directly with a client.",
  },
  {
    question: "What is the difference between a 2D and a 3D floor plan?",
    answer:
      "A 2D floor plan is a clean overhead diagram showing room shapes and how spaces connect. A 3D floor plan renders the same layout with walls, flooring and furniture in three dimensions. Our Standard package includes the 2D plan; Premium Luxury includes both.",
  },
  {
    question: "How long does a property shoot take in Bahrain?",
    answer:
      "A shoot takes anywhere from 30 minutes to 3 hours, depending on the size of the property and the services booked. A compact apartment covered by our Basic package — 20 to 30 HDR images — sits at the short end; a large villa with a Matterport tour and floor plans takes the full session.",
  },
  {
    question: "Do you shoot commercial and hospitality, or only residential?",
    answer:
      "We shoot residential listings, commercial spaces and hospitality venues across Bahrain. The same services apply to all three — HDR photography, video, Matterport tours and 2D/3D floor plans — only the shot list changes. Tell us the property type and we will recommend one of our three media packages.",
  },
];

export const packagesFaqs: Faq[] = [
  {
    question: "How much does real estate photography cost in Bahrain?",
    answer:
      "Services start from BD 20. The final quote depends on the property size, the mix of services you book, and which package you choose — Basic, Standard, or Premium Luxury. Pricing is flat across Bahrain with no travel surcharge. Send us the property details and we will confirm an exact figure.",
  },
  {
    question: "How fast do I get my photos back?",
    answer:
      "Edited photographs are delivered within 24 to 48 hours of the shoot, so a Bahrain listing can go live the next working day. Every image is professionally retouched for lighting, colour balance and clarity before delivery. Video, floor plans and Matterport tours follow after the photographs.",
  },
  {
    question: "Do you cover Manama, Seef, Amwaj Islands and Riffa?",
    answer:
      "Yes. We cover all four of Bahrain's governorates, including Manama, Seef, Amwaj Islands, Riffa, Muharraq and Janabiya. Pricing is flat island-wide — there is no travel surcharge for any location in Bahrain. Include the property address when you request a quote and we will confirm timing.",
  },
];
