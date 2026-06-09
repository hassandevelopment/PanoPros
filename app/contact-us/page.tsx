import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with PanoPros for real estate photography or a custom website in Bahrain. Quick turnaround, professional results.",
};

export default function ContactPage() {
  return (
    <section className="grain bg-bone min-h-screen px-6">
      <div className="max-w-xl mx-auto pt-32 md:pt-40 pb-20 md:pb-28">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="home-line w-full max-w-md h-px bg-ink/20 mb-10 mx-auto" />
          <h1
            className="home-word-1 text-5xl md:text-7xl font-medium tracking-[-0.02em] leading-none text-ink mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Contact
          </h1>
          <p className="home-word-2 text-base md:text-lg text-ink/60 max-w-lg mx-auto">
            Let&apos;s talk about your project.
          </p>
        </div>

        {/* Form */}
        <ContactForm />

        {/* Direct email */}
        <p className="mt-10 text-center text-sm text-ink/50">
          Or email us directly at{" "}
          <a
            href="mailto:info@panopros.bh"
            className="underline underline-offset-2 hover:text-ink/80 transition-colors"
          >
            info@panopros.bh
          </a>
        </p>
      </div>
    </section>
  );
}
