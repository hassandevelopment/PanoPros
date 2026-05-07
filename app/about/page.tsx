import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded by Hassan Alnajjar, PanoPros delivers real estate photography and media that helps Bahraini realtors close deals faster.",
};

export default function AboutPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-4">
                Our Story
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink leading-tight">
                We Exist to Make Your Listings Impossible to Ignore
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
                    Poor visuals cost time, interest, and opportunities.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-semibold text-ink mb-2">
                    What We Do
                  </h2>
                  <p>
                    We help realtors elevate their listings with professional
                    photography, cinematic videos, immersive virtual tours, and
                    clear 2D/3D floor plans — tools that help buyers understand
                    the space quickly and help you close deals more efficiently.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-semibold text-ink mb-2">
                    Why It Matters
                  </h2>
                  <p>
                    Better visuals lead to better engagement online, fewer wasted
                    showings, and stronger interest from qualified buyers. We
                    combine creativity with results so your listings stand out
                    and work harder for you.
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
                    dedication to every project. We treat every listing as an
                    opportunity to elevate your brand and your results.
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
  );
}
