import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with PanoPros for real estate photography, video, and virtual tours in Bahrain. Quick turnaround, professional results.",
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-bone">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink">
            Ready to Stand Out?
          </h1>
          <p className="mt-4 text-charcoal max-w-lg mx-auto leading-relaxed">
            Tell us about your listing and we&apos;ll get back to you within one
            business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Contact info */}
          <div className="lg:col-span-2 bg-ink rounded-2xl p-8 text-bone space-y-6">
            <h2 className="font-heading text-xl font-semibold">
              Contact Information
            </h2>

            <a
              href="mailto:info@panopros.bh"
              className="flex items-start gap-3 hover:text-bone/80 transition-colors group"
            >
              <Mail size={18} className="mt-0.5 shrink-0 text-muted group-hover:text-bone transition-colors" />
              <div>
                <p className="text-xs text-muted uppercase tracking-wider mb-0.5">Email</p>
                <p className="text-sm">info@panopros.bh</p>
              </div>
            </a>

            <a
              href="tel:+97333330340"
              className="flex items-start gap-3 hover:text-bone/80 transition-colors group"
            >
              <Phone size={18} className="mt-0.5 shrink-0 text-muted group-hover:text-bone transition-colors" />
              <div>
                <p className="text-xs text-muted uppercase tracking-wider mb-0.5">Phone</p>
                <p className="text-sm">+973 3333 0340</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/panopros.bh/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:text-bone/80 transition-colors group"
            >
              <InstagramIcon size={18} className="mt-0.5 shrink-0 text-muted group-hover:text-bone transition-colors" />
              <div>
                <p className="text-xs text-muted uppercase tracking-wider mb-0.5">Instagram</p>
                <p className="text-sm">@panopros.bh</p>
              </div>
            </a>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-muted" />
              <div>
                <p className="text-xs text-muted uppercase tracking-wider mb-0.5">Service Area</p>
                <p className="text-sm">Serving all of Bahrain</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Suspense fallback={<div className="h-96 animate-pulse bg-cream rounded-2xl" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
