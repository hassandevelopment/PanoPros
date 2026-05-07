"use client";

import Link from "next/link";
import { X } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import { useEffect, useRef } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function MobileMenu({ open, onClose, links }: Props) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Keep mounted for transition — only hide from tab order when closed
  return (
    <div
      className="fixed inset-0 z-[60] flex"
      aria-hidden={!open}
      style={{
        pointerEvents: open ? "auto" : "none",
      }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={onClose}
        style={{
          opacity: open ? 1 : 0,
          transition: "opacity 250ms ease-out",
        }}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="relative ml-auto w-72 max-w-full bg-bone h-full flex flex-col p-8 shadow-2xl"
        style={{
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: open
            ? "transform 300ms cubic-bezier(0.16, 1, 0.3, 1)"
            : "transform 220ms cubic-bezier(0.4, 0, 1, 1)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="self-end p-2 text-charcoal"
          style={{ transition: "color 150ms ease-out, transform 100ms ease-out" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
          onMouseLeave={e => (e.currentTarget.style.color = "")}
        >
          <X size={24} />
        </button>

        <nav className="mt-10 flex flex-col gap-6">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-xl font-medium text-ink"
              style={{
                transition: "opacity 150ms ease-out",
                opacity: open ? 1 : 0,
                transitionDelay: open ? `${i * 40 + 100}ms` : "0ms",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-cream">
          <a
            href="https://www.instagram.com/panopros.bh/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-charcoal"
            style={{ transition: "color 150ms ease-out" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
            onMouseLeave={e => (e.currentTarget.style.color = "")}
          >
            <InstagramIcon size={20} />
            <span className="text-sm">@panopros.bh</span>
          </a>
        </div>
      </div>
    </div>
  );
}
