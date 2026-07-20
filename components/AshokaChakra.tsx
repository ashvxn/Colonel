const SPOKES = 24;

function spokePoints(cx: number, cy: number, rInner: number, rOuter: number) {
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
 * Accurate 24-spoke Ashoka Chakra, rendered navy-blue on its traditional
 * white field (as it appears on the national flag). Used as a decorative /
 * informational mark only — never as the Trust's own logo, which is the
 * separate abstract emblem in Nav/Footer.
 */
export function AshokaChakra({
  size = 40,
  spin = false,
  title = "Ashoka Chakra",
  className,
}: {
  size?: number;
  spin?: boolean;
  title?: string;
  className?: string;
}) {
  const cx = 20;
  const cy = 20;
  const spokes = spokePoints(cx, cy, 5.5, 16);

  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={`chakra-disc ${className ?? ""}`}
      role={title ? "img" : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
    >
      <circle className="base" cx={cx} cy={cy} r={19} />
      <g className={spin ? "chakra-spin" : undefined}>
        <circle className="rim" cx={cx} cy={cy} r={17} strokeWidth={1.6} />
        <circle className="hub" cx={cx} cy={cy} r={3.2} />
        {spokes.map((s, i) => (
          <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} strokeWidth={1.1} />
        ))}
      </g>
    </svg>
  );
}
