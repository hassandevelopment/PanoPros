import type { Faq } from "@/lib/schema";

/**
 * Plain, always-visible Q&A. Deliberately not an accordion: answer text that is
 * present and visible in the served HTML is the most reliably extractable shape
 * for AI answer engines, which is the whole point of this section.
 */
export default function FaqSection({
  faqs,
  heading = "Common questions",
}: {
  faqs: Faq[];
  heading?: string;
}) {
  return (
    <section className="mt-20 md:mt-28" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3 text-center">
          FAQ
        </p>
        <h2
          id="faq-heading"
          className="text-3xl md:text-4xl font-medium tracking-[-0.02em] text-ink text-center mb-10 md:mb-14"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {heading}
        </h2>

        <dl className="divide-y divide-ink/10 border-t border-ink/10">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-6 md:py-7">
              <dt className="text-base md:text-lg font-semibold text-ink mb-2">
                {faq.question}
              </dt>
              <dd className="text-sm md:text-base text-charcoal leading-relaxed">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
