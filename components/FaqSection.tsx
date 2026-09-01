import type { Faq } from "@/lib/schema";

/**
 * Collapsible FAQ built on native <details>/<summary>.
 *
 * Deliberately no JavaScript and no conditional rendering: every question AND
 * its full answer are in the server-rendered HTML at all times, and `details`
 * only hides the answer visually. Crawlers and AI answer engines read the raw
 * markup, so the text stays extractable while collapsed. Do not replace this
 * with a state-driven accordion that mounts answers on click.
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

        <div className="border-t border-ink/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-ink/10">
              <summary
                className="flex items-start justify-between gap-6 cursor-pointer list-none py-5 md:py-6 text-base md:text-lg font-semibold text-ink transition-colors hover:text-charcoal [&::-webkit-details-marker]:hidden [&::marker]:hidden"
              >
                <span>{faq.question}</span>
                {/* A plus that rotates into a cross when the item opens. */}
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-xl leading-none font-normal text-ink/35 transition-transform duration-200 ease-out group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 md:pb-7 pr-10 text-sm md:text-base text-charcoal leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
