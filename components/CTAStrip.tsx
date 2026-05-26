import Link from "next/link";

interface Props {
  heading?: string;
  subtext?: string;
  buttonLabel?: string;
  buttonHref?: string;
  tel?: boolean;
}

export default function CTAStrip({
  heading = "Professional media.",
  subtext = "Serious results.",
  buttonLabel = "Call Now",
  buttonHref = "tel:+97333330340",
  tel = true,
}: Props) {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-bone text-2xl md:text-3xl font-heading font-semibold">
          {heading} <span className="italic">{subtext}</span>
        </p>
        <a
          href={buttonHref}
          className="mt-8 inline-block bg-bone text-ink font-semibold text-sm px-8 py-3 rounded-full hover:bg-cream transition-colors"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
