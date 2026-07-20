/**
 * Simplified, iconographic reference to the Lion Capital of Ashoka (India's
 * State Emblem) — used only in a small, informational "conferred by the
 * Republic of India" context, never as a logo or brand mark. The Emblems
 * and Names (Prevention of Improper Use) Act, 1950 restricts use of the
 * official emblem; this is a deliberately abstracted badge-style rendering,
 * not a reproduction of the official seal.
 */
export function NationalEmblem({
  size = 28,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      role="img"
      aria-label="Emblem of India (stylised reference)"
    >
      {/* inverted-lotus base */}
      <polygon points="16,34 24,34 21.5,30 18.5,30" />
      {/* abacus */}
      <rect x="9" y="27.5" width="22" height="2.2" />
      {/* small chakra relief on the abacus */}
      <circle cx="20" cy="28.6" r="1" fill="none" stroke="currentColor" strokeWidth="0.5" />
      {/* three visible lion heads (frontal capital view) */}
      <g>
        <ellipse cx="20" cy="17.5" rx="5" ry="6.2" />
        <polygon points="16.4,12.5 18.4,12.5 17.4,9.3" />
        <polygon points="21.6,12.5 23.6,12.5 22.6,9.3" />
      </g>
      <g opacity="0.82">
        <ellipse cx="9.5" cy="19" rx="4" ry="5.2" />
        <polygon points="6.6,14.7 8.3,14.7 7.4,12" />
      </g>
      <g opacity="0.82">
        <ellipse cx="30.5" cy="19" rx="4" ry="5.2" />
        <polygon points="31.7,14.7 33.4,14.7 32.6,12" />
      </g>
    </svg>
  );
}
