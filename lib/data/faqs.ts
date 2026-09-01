import type { Faq } from "@/lib/schema";

/**
 * Answers are written to be quotable standalone — an AI answer engine lifts one
 * paragraph without surrounding context, so each carries its own subject, a
 * concrete figure, and "Bahrain" where it reads naturally.
 *
 * Plain language only: no em dashes (use commas, full stops, or "to" for
 * ranges) and no marketing filler. These are read aloud by assistants and
 * quoted verbatim, so they should sound like a person answering a question.
 *
 * Every figure here traces to lib/data/packages.ts, to the published starting
 * price, or to public geography. Do not add numbers that are not verifiable —
 * they end up in FAQPage schema and get repeated as fact.
 */

export const mediaFaqs: Faq[] = [
  {
    question: "What is a Matterport virtual tour and how does it work?",
    answer:
      "A Matterport virtual tour is a 3D scan of a property that buyers can walk through online, room by room, on a phone or laptop. We scan the space on site and send you a hosted link. You can put it in a property listing or send it straight to a client.",
  },
  {
    question: "What is the difference between a 2D and a 3D floor plan?",
    answer:
      "A 2D floor plan is an overhead diagram showing room shapes, sizes and how the rooms connect. A 3D floor plan shows the same layout with walls, flooring and furniture, drawn in three dimensions. Our Standard package includes the 2D plan. Premium Luxury includes both.",
  },
  {
    question: "How long does a property shoot take in Bahrain?",
    answer:
      "A shoot takes 30 minutes to 3 hours, depending on the size of the property and what you book. A small apartment on the Basic package, which covers 20 to 30 HDR images, is at the short end. A large villa with a Matterport tour and floor plans takes the full session.",
  },
  {
    question: "Do you shoot commercial and hospitality, or only residential?",
    answer:
      "We shoot residential listings, commercial spaces and hospitality venues across Bahrain. The services are the same for all three: HDR photography, video, Matterport tours and 2D or 3D floor plans. Only the shot list changes. Tell us the property type and we will point you to one of our three media packages.",
  },
];

export const packagesFaqs: Faq[] = [
  {
    question: "How much does real estate photography cost in Bahrain?",
    answer:
      "Services start from BD 20. What you pay depends on the size of the property, which services you book and which package you choose: Basic, Standard or Premium Luxury. Pricing is the same anywhere in Bahrain, with no travel surcharge. Send us the property details and we will confirm the exact figure.",
  },
  {
    question: "How fast do I get my photos back?",
    answer:
      "Edited photographs come back within 24 to 48 hours of the shoot, so a Bahrain listing can go live the next working day. Every image is retouched for lighting, colour balance and clarity before we send it. Video, floor plans and Matterport tours follow after the photographs.",
  },
  {
    question: "Do you cover Manama, Seef, Amwaj Islands and Riffa?",
    answer:
      "Yes. We cover all four of Bahrain's governorates, including Manama, Seef, Amwaj Islands, Riffa, Muharraq and Janabiya. Pricing is flat across the island, so there is no travel surcharge wherever the property is. Include the address when you request a quote and we will confirm timing.",
  },
];
