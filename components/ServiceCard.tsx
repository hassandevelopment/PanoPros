"use client";

import Image from "next/image";
import { parseInlineBold } from "@/lib/utils";
import type { Service } from "@/lib/data/services";

export default function ServiceCard({ title, image, objectPosition = "center", body, link }: Service) {
  const parts = parseInlineBold(body);
  const isGif = image.endsWith(".gif");

  return (
    <article
      className="service-card group flex flex-col bg-white rounded-xl overflow-hidden"
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        transition: "box-shadow 200ms ease-out",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.08)";
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          style={{
            objectPosition,
            transition: isGif ? "none" : "transform 400ms cubic-bezier(0.25, 0, 0, 1)",
          }}
          onMouseEnter={e => {
            if (!isGif) (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
          }}
          onMouseLeave={e => {
            if (!isGif) (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          }}
          unoptimized={isGif}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-ink mb-3">{title}</h3>
        <p className="text-charcoal text-sm leading-relaxed flex-1">
          {parts.map((part, i) =>
            typeof part === "string" ? (
              <span key={i}>{part}</span>
            ) : (
              <strong key={i} className="font-semibold text-ink">
                {part.bold}
              </strong>
            )
          )}
        </p>
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-sm font-medium text-ink underline underline-offset-2"
            style={{ transition: "opacity 150ms ease-out" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.6")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            {link.label} →
          </a>
        )}
      </div>
    </article>
  );
}
