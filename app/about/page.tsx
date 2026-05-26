import type { Metadata } from "next";
import Image from "next/image";
import CTAStrip from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded by Hassan Alnajjar, PanoPros delivers real estate photography and custom web development that helps Bahraini businesses win online.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-4">
                Our Story
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink leading-tight">
                We Make Your Business Impossible to Ignore
              </h1>

              <div className="mt-10 space-y-8 text-charcoal leading-relaxed">
                <div>
                  <h2 className="font-heading text-xl font-semibold text-ink mb-2">
                    Our Story
                  </h2>
                  <p>
                    We started PanoPros because we saw a simple truth:{" "}
                    <strong className="text-ink font-semibold">
                      most listings don&apos;t show properties the way buyers
                      really want to see them.
                    </strong>{" "}
                    Poor visuals cost time, interest, and opportunities. That
                    same principle extends to every business online — if your
                    website doesn&apos;t represent you well, you&apos;re losing
                    customers before they&apos;ve said a word.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-semibold text-ink mb-2">
                    What We Do
                  </h2>
                  <p>
                    We help businesses make the right impression online. For
                    realtors, that means professional photography, cinematic
                    videos, immersive virtual tours, and clear floor plans. For
                    businesses that need a web presence, that means
                    custom-coded websites designed to convert — mobile-first,
                    SEO-ready, and delivered fast.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-semibold text-ink mb-2">
                    Why It Matters
                  </h2>
                  <p>
                    Better visuals lead to better engagement, fewer wasted
                    showings, and stronger interest from qualified buyers. A
                    well-built website turns visitors into customers before
                    you&apos;ve said a word. We combine creativity with results
                    across both disciplines so your business stands out and
                    works harder for you.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-semibold text-ink mb-2">
                    Who We Are
                  </h2>
                  <p>
                    PanoPros is founded and led by{" "}
                    <strong className="text-ink font-semibold">
                      Hassan Alnajjar
                    </strong>
                    , who brings passion, technical skill, and personal
                    dedication to every project. We treat every listing and
                    every website as an opportunity to elevate your brand and
                    your results.
                  </p>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/founder-hassan.jpg"
                alt="Hassan Alnajjar, founder of PanoPros, holding a drone controller"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
