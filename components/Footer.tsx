import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "./InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-[#EBEBEB] text-ink">
      <div className="py-16 px-6 flex flex-col items-center text-center">

        {/* Logo in white circle */}
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm mb-8">
          <Image
            src="/logo-footer.png"
            alt="PanoPros"
            width={52}
            height={52}
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-ink mb-6">
          Professional media. <strong className="font-bold">Serious results.</strong>
        </p>

        {/* Instagram icon */}
        <a
          href="https://www.instagram.com/panopros.bh/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="PanoPros on Instagram"
          className="text-ink hover:text-charcoal transition-colors mb-6"
        >
          <InstagramIcon size={24} />
        </a>

        {/* Contact links */}
        <div className="flex flex-col items-center gap-2">
          <a
            href="mailto:info@panopros.bh"
            className="text-sm text-ink underline underline-offset-2 hover:text-charcoal transition-colors"
          >
            info@panopros.bh
          </a>
          <a
            href="tel:+97333330340"
            className="text-sm text-ink underline underline-offset-2 hover:text-charcoal transition-colors"
          >
            +973 3333 0340
          </a>
        </div>

      </div>
    </footer>
  );
}
