"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Packages", href: "/packages" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="PanoPros"
              width={140}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal tracking-wide"
                style={{ transition: "color 150ms ease-out" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
                onMouseLeave={e => (e.currentTarget.style.color = "")}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/panopros.bh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PanoPros on Instagram"
              className="text-charcoal"
              style={{ transition: "color 150ms ease-out, opacity 150ms ease-out" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "")}
            >
              <InstagramIcon size={20} />
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-charcoal active:scale-90"
            style={{ transition: "transform 100ms ease-out, color 150ms ease-out" }}
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
