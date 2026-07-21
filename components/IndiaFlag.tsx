"use client";

import { useReducedMotion } from "framer-motion";
import { useId } from "react";

const SPOKES = 24;

function spokes(cx: number, cy: number, rInner: number, rOuter: number) {
  return Array.from({ length: SPOKES }, (_, i) => {
    const a = (i / SPOKES) * Math.PI * 2;
    return {
      x1: +(cx + Math.cos(a) * rInner).toFixed(2),
      y1: +(cy + Math.sin(a) * rInner).toFixed(2),
      x2: +(cx + Math.cos(a) * rOuter).toFixed(2),
      y2: +(cy + Math.sin(a) * rOuter).toFixed(2),
    };
  });
}

/**
 * The national flag at its official 3:2 ratio and band proportions, with an
 * accurate 24-spoke Ashoka Chakra on the white band (diameter matched to
 * the white band's width, per flag code). `wave` adds a genuine cloth
 * flutter via an SVG feTurbulence/feDisplacementMap filter animated with
 * SMIL — not a CSS transform hack — so the fabric actually ripples rather
 * than just tilting. Respects prefers-reduced-motion (the filter's
 * <animate> is dropped, leaving a static flag).
 */
export function IndiaFlag({
  width = 60,
  wave = false,
  className,
  title = "Flag of India",
}: {
  width?: number;
  wave?: boolean;
  className?: string;
  title?: string;
}) {
  const h = width * (2 / 3);
  const bandH = h / 3;
  const cx = width / 2;
  const cy = h / 2;
  // Flag code: the chakra's diameter approximates the white band's width (bandH).
  const chakraR = bandH * 0.42;
  const s = spokes(cx, cy, chakraR * 0.32, chakraR);
  const reduced = useReducedMotion();
  const active = wave && !reduced;
  const filterId = `flag-flutter-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${h}`}
      width={width}
      height={h}
      className={`mst-flag ${className ?? ""}`}
      role="img"
      aria-label={title}
    >
      {active && (
        <defs>
          <filter id={filterId} x="-10%" y="-30%" width="120%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.015 0.09" numOctaves={2} seed={4} result="noise">
              <animate
                attributeName="baseFrequency"
                dur="7s"
                values="0.015 0.09;0.024 0.09;0.015 0.09"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale={h * 0.11} xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      )}
      <g filter={active ? `url(#${filterId})` : undefined}>
        <rect x={0} y={0} width={width} height={h / 3} fill="#FF9933" />
        <rect x={0} y={h / 3} width={width} height={h / 3} fill="#F5F3EA" />
        <rect x={0} y={(2 * h) / 3} width={width} height={h / 3} fill="#128807" />
        <circle cx={cx} cy={cy} r={chakraR} fill="none" stroke="#0B3D7B" strokeWidth={h * 0.02} />
        <circle cx={cx} cy={cy} r={chakraR * 0.1} fill="#0B3D7B" />
        {s.map((sp, i) => (
          <line key={i} x1={sp.x1} y1={sp.y1} x2={sp.x2} y2={sp.y2} stroke="#0B3D7B" strokeWidth={h * 0.012} />
        ))}
      </g>
    </svg>
  );
}
