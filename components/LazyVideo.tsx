"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Video that defers ALL network activity until it nears the viewport.
 * Shows the poster (plain <img>, instant) until then, so heavy videos never
 * compete with page-critical resources on initial load.
 */
export default function LazyVideo({
  src,
  poster,
  autoPlay = false,
  controls = false,
  className,
  "aria-label": ariaLabel,
}: {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  controls?: boolean;
  className?: string;
  "aria-label"?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative">
      {near ? (
        <video
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={autoPlay}
          muted={autoPlay}
          playsInline
          controls={controls}
          // Autoplay videos buffer once visible; click-to-play stays cold until
          // the user presses play (poster only).
          preload={autoPlay ? "auto" : "none"}
          className={className}
          aria-label={ariaLabel}
        />
      ) : poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt={ariaLabel ?? ""} className={className} />
      ) : (
        <div className={className} aria-label={ariaLabel} />
      )}
    </div>
  );
}
