import InstagramIcon from "./InstagramIcon";
import { LogoLockup } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-10">
        {/* Top row: logo on left, contact + social on right */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-4">
          <div className="text-bone">
            <LogoLockup size="sm" direction="horizontal" showTagline={false} />
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href="mailto:info@panopros.bh"
              className="text-bone/85 hover:text-bone transition-colors"
            >
              info@panopros.bh
            </a>
            <a
              href="tel:+97333330340"
              className="text-bone/85 hover:text-bone transition-colors"
            >
              +973 3333 0340
            </a>
            <a
              href="https://www.instagram.com/panopros.bh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PanoPros on Instagram"
              className="text-bone/85 hover:text-bone transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        {/* Bottom row: thin divider + copyright */}
        <div className="mt-6 md:mt-8 pt-4 border-t border-bone/15 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-[10px] tracking-[0.32em] text-bone/50">
          <p>© 2026 PANOPROS &nbsp;·&nbsp; MANAMA, BAHRAIN &nbsp;·&nbsp; CR 197430-1</p>
          <p>MEDIA &nbsp;·&nbsp; DEVELOPMENT</p>
        </div>
      </div>
    </footer>
  );
}
