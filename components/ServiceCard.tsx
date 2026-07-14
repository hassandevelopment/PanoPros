"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { parseInlineBold, versioned } from "@/lib/utils";
import type { Service } from "@/lib/data/services";
import { blurData } from "@/lib/data/blur-data";

export default function ServiceCard({ title, image, poster, images, objectPosition = "center", objectFit = "cover", imageBackground, body, link, priority }: Service) {
  const parts = parseInlineBold(body);
  const isVideo = image.endsWith(".mp4");
  const isGif = image.endsWith(".gif");
  const hasSlideshow = images && images.length > 1;

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (!hasSlideshow) return;
    const timer = setInterval(() => {
      setSlideIndex(i => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [hasSlideshow, images]);

  const currentSrc = hasSlideshow ? images[slideIndex] : image;

  // Defer the (heavy) autoplay video until the card is near the viewport, so its
  // download never competes with critical resources / other images on load.
  // Until then the poster image shows instantly.
  const mediaRef = useRef<HTMLDivElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);
  useEffect(() => {
    if (!isVideo) return;
    const el = mediaRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoadVideo(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isVideo]);

  const Wrapper = link ? "a" : "article";
  const wrapperProps = link
    ? { href: link.href, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="service-card group flex flex-col bg-white rounded-xl overflow-hidden"
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        transition: "box-shadow 200ms ease-out",
        cursor: link ? "pointer" : undefined,
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.08)";
      }}
    >
      <div ref={mediaRef} className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: imageBackground ?? '#e8e4de' }}>
        {hasSlideshow ? (
          <>
            {images.map((src, i) => (
              <Image
                key={src}
                src={versioned(src)}
                alt={`${title} - slide ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                unoptimized
                {...(priority && { priority: true })}
                placeholder="blur"
                blurDataURL={blurData[src] ?? undefined}
                style={{
                  objectPosition,
                  position: "absolute",
                  opacity: i === slideIndex ? 1 : 0,
                  transition: "opacity 800ms ease-in-out",
                }}
              />
            ))}
            {/* Dot indicators */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: i === slideIndex ? "rgba(247,245,240,0.95)" : "rgba(247,245,240,0.45)",
                    transition: "background-color 300ms ease-out",
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        ) : isVideo ? (
          <>
            {/* Poster shows instantly; the video only downloads once near view. */}
            {poster && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={versioned(poster)}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition }}
              />
            )}
            {loadVideo && (
              <video
                src={versioned(currentSrc)}
                {...(poster && { poster: versioned(poster) })}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition }}
              />
            )}
          </>
        ) : (
          <Image
            src={versioned(currentSrc)}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={objectFit === "contain" ? "object-contain" : "object-cover"}
            style={{
              objectPosition,
              transition: "transform 400ms cubic-bezier(0.25, 0, 0, 1)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
            unoptimized
            {...(priority && { priority: true })}
            {...(!currentSrc.endsWith(".svg") && blurData[currentSrc] && { placeholder: "blur" as const, blurDataURL: blurData[currentSrc] })}
          />
        )}
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
          <span className="mt-4 text-sm font-medium text-ink underline underline-offset-2">
            {link.label} →
          </span>
        )}
      </div>
    </Wrapper>
  );
}
