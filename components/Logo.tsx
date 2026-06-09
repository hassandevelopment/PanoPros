"use client";

import { useId } from "react";

interface LogoMarkProps {
  size?: number;
  className?: string;
  color?: string;
}

/**
 * PanoPros logo mark — V3 (deeper tilt, no arrow).
 * Tilted oval halo around a phone displaying </>.
 * Uses currentColor for stroke and a mask to keep the phone interior
 * transparent — works on light AND dark backgrounds without a fill.
 */
export function LogoMark({
  size = 48,
  className = "",
  color = "currentColor",
}: LogoMarkProps) {
  const maskId = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label="PanoPros"
      className={className}
      fill="none"
    >
      <defs>
        <mask id={maskId}>
          <rect width="200" height="200" fill="#fff" />
          <rect x="74" y="38" width="52" height="124" rx="9" fill="#000" />
        </mask>
      </defs>
      <ellipse
        cx="100"
        cy="100"
        rx="86"
        ry="44"
        transform="rotate(-18 100 100)"
        stroke={color}
        strokeWidth="5"
        mask={`url(#${maskId})`}
      />
      <rect
        x="74"
        y="38"
        width="52"
        height="124"
        rx="9"
        stroke={color}
        strokeWidth="6"
      />
      <text
        x="100"
        y="108"
        textAnchor="middle"
        fontFamily="ui-monospace, 'Menlo', monospace"
        fontSize="28"
        fontWeight={700}
        fill={color}
      >
        {"</>"}
      </text>
    </svg>
  );
}

/**
 * Camera lens icon that replaces the "O" in PROS.
 * Concentric rings only — outer housing + glass edge.
 * No aperture blades, no center dot — reads as a camera lens, not a record button.
 * Uses a mask so the interior is transparent and works on any background.
 */
function Lens({ size, color }: { size: number; color: string }) {
  const maskId = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      style={{ display: "block", flexShrink: 0 }}
      aria-hidden="true"
    >
      <defs>
        <mask id={maskId}>
          <rect width="100" height="100" fill="#fff" />
          <circle cx="50" cy="50" r="28" fill="#000" />
        </mask>
      </defs>
      {/* Outer lens housing — solid ring (reads as the O letter) */}
      <circle cx="50" cy="50" r="46" fill={color} mask={`url(#${maskId})`} />
      {/* Glass element edge — thin inner ring */}
      <circle cx="50" cy="50" r="22" stroke={color} strokeWidth="2.5" fill="none" />
    </svg>
  );
}

/**
 * PANO|PROS wordmark — both halves in Inter 900.
 * PANO is rendered as SVG text with a stroke heavy enough that the inner
 * counters of P and A close against the outer outline instead of showing
 * as separate inner lines.
 * PROS uses HTML text (solid fill) where the O is replaced by a camera lens.
 */
function Wordmark({
  fontSize,
  color,
  strokeWidth,
}: {
  fontSize: number;
  color: string;
  strokeWidth: number;
}) {
  const maskId = useId();
  const panoVbW = fontSize * 3.2;
  const panoVbH = fontSize * 1.3;
  const lensSize = fontSize * 0.72;
  const fontFamily = "var(--font-inter), Inter, system-ui, sans-serif";
  const cx = panoVbW / 2;
  const cy = panoVbH / 2;

  // Outline thickness in CSS pixels is roughly (1 − scale) × (avg letter width)/2.
  // Solving for scale: scale = 1 − 2·strokeWidth/(fontSize·avgLetterWidthFactor).
  // Using ~0.65 as the factor for Inter 900.
  const innerScale = Math.max(0.7, 1 - (strokeWidth * 2) / (fontSize * 0.65));
  const tx = cx * (1 - innerScale);
  const ty = cy * (1 - innerScale);

  const textCommon = {
    x: cx,
    y: cy,
    textAnchor: "middle" as const,
    dominantBaseline: "central" as const,
    fontFamily,
    fontSize,
    fontWeight: 900,
    letterSpacing: "-0.5",
  };

  const solidSpan: React.CSSProperties = {
    fontFamily,
    fontSize: `${fontSize}px`,
    fontWeight: 900,
    lineHeight: 1,
    letterSpacing: "-0.02em",
    color,
    display: "inline-block",
  };

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        color,
        lineHeight: 1,
      }}
    >
      {/*
        PANO — both outer (filled) and inner (mask cutout) copies are rendered
        at the SAME fontSize using identical glyphs. The inner copy is then
        uniformly scaled down via SVG transform around the center point —
        avoiding font-hinting drift between different sizes, so the inner
        cutout aligns perfectly inside the outer letters. Result: a clean
        outline ring with no inner counter lines.
      */}
      <svg
        width={panoVbW}
        height={panoVbH}
        viewBox={`0 0 ${panoVbW} ${panoVbH}`}
        style={{ display: "block", overflow: "visible", flexShrink: 0 }}
        aria-hidden="true"
      >
        <defs>
          <mask id={maskId}>
            <rect width={panoVbW} height={panoVbH} fill="white" />
            <g transform={`translate(${tx} ${ty}) scale(${innerScale})`}>
              <text {...textCommon} fill="black">
                PANO
              </text>
            </g>
          </mask>
        </defs>
        <text {...textCommon} fill={color} mask={`url(#${maskId})`}>
          PANO
        </text>
      </svg>

      <span style={{ width: `${fontSize * 0.06}px`, display: "inline-block" }} />
      <span style={solidSpan}>PR</span>
      <Lens size={lensSize} color={color} />
      <span style={solidSpan}>S</span>
    </div>
  );
}

interface LogoLockupProps {
  size?: "sm" | "md" | "lg";
  direction?: "horizontal" | "vertical";
  className?: string;
  color?: string;
  showTagline?: boolean;
}

/**
 * Full lockup: mark + PANO (hollow) PROS (solid, O is a camera lens) + tagline.
 * Vertical = canonical brand presentation.
 * Horizontal = compact, for headers and inline navbars.
 */
export function LogoLockup({
  size = "md",
  direction = "vertical",
  className = "",
  color = "currentColor",
  showTagline = true,
}: LogoLockupProps) {
  const isVertical = direction === "vertical";

  // Stroke value is the dilation radius for the PANO outline filter.
  // ≈8% of fontSize — gives a thin outline ring AND closes the inner counters
  // of P and A automatically (counters smaller than 2*radius disappear).
  const dims = isVertical
    ? {
        sm: { mark: 56, fontSize: 22, tag: 8, stroke: 1.8 },
        md: { mark: 96, fontSize: 34, tag: 10, stroke: 2.6 },
        lg: { mark: 148, fontSize: 50, tag: 12, stroke: 3.8 },
      }[size]
    : {
        sm: { mark: 36, fontSize: 18, tag: 7, stroke: 1.4 },
        md: { mark: 48, fontSize: 24, tag: 8, stroke: 1.9 },
        lg: { mark: 72, fontSize: 34, tag: 10, stroke: 2.6 },
      }[size];

  const outerLayout = isVertical
    ? "flex flex-col items-center gap-4"
    : "flex flex-row items-center gap-3";

  const innerLayout = isVertical
    ? "flex flex-col items-center leading-none gap-2"
    : "flex flex-col leading-none gap-1";

  return (
    <div className={`${outerLayout} ${className}`} style={{ color }}>
      <LogoMark size={dims.mark} color={color} />
      <div className={innerLayout}>
        <Wordmark
          fontSize={dims.fontSize}
          color={color}
          strokeWidth={dims.stroke}
        />
        {showTagline && (
          <span
            style={{
              fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
              fontSize: `${dims.tag}px`,
              letterSpacing: "0.42em",
              opacity: 0.65,
              fontWeight: 600,
            }}
          >
            MEDIA &nbsp;·&nbsp; DEVELOPMENT
          </span>
        )}
      </div>
    </div>
  );
}

export default LogoMark;
