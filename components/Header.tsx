"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import InstagramIcon from "./InstagramIcon";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import { LogoLockup } from "./Logo";

/**
 * Routes whose hero starts with a dark image background.
 * When unscrolled on these pages, header text must be light (bone).
 * Everywhere else, header text is dark (ink).
 */
const DARK_HERO_ROUTES = ["/development"];

function hasDarkHero(pathname: string): boolean {
  return DARK_HERO_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );
}

const navLinks = [
  { label: "Media", href: "/media" },
  { label: "Development", href: "/development" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const darkHero = hasDarkHero(pathname);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // When scrolled, header always uses ink text on a near-opaque bone surface.
  // When unscrolled, header is transparent and uses bone text on dark heroes, ink elsewhere.
  const textColor = scrolled
    ? "var(--color-ink)"
    : darkHero
    ? "var(--color-bone)"
    : "var(--color-ink)";

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50"
        style={{
          backgroundColor: scrolled ? "rgba(247,245,240,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
          transition: "background-color 200ms ease-out, box-shadow 200ms ease-out, backdrop-filter 200ms ease-out",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
          style={{
            color: textColor,
            transition: "color 200ms ease-out",
          }}
        >
          <Link href="/" className="flex items-center shrink-0">
            <LogoLockup size="sm" direction="horizontal" showTagline={false} />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide opacity-90 hover:opacity-100"
                style={{ transition: "opacity 150ms ease-out" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/panopros.bh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PanoPros on Instagram"
              className="opacity-90 hover:opacity-100"
              style={{ transition: "opacity 150ms ease-out" }}
            >
              <InstagramIcon size={20} />
            </a>
          </nav>

          <button
            className="md:hidden p-2 active:scale-90"
            style={{ transition: "transform 100ms ease-out" }}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu
        links={navLinks}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
