// Trustpilot-style rating display, rendered entirely inline (no external images
// or scripts — our CSP blocks those, and we don't link users off-site).
// The green tiles with a white star are Trustpilot's signature look; we use them
// to attribute a REAL, cited rating, never an invented one.

const TP_GREEN = "#00b67a";
const TP_GRAY = "#dcdce6";

// A single 5-point star, drawn white and knocked out over the tile color.
function StarTile({ fill, size = 22 }: { fill: number; size?: number }) {
  const pct = Math.max(0, Math.min(1, fill)) * 100;
  return (
    <span
      className="relative inline-block overflow-hidden rounded-[3px]"
      style={{ width: size, height: size, background: TP_GRAY }}
      aria-hidden
    >
      <span className="absolute inset-0" style={{ width: `${pct}%`, background: TP_GREEN }} />
      <svg viewBox="0 0 24 24" width={size} height={size} className="absolute inset-0">
        <path
          d="M12 1.6l2.9 6.86 7.44.6-5.66 4.85 1.73 7.24L12 17.77 5.6 21.15l1.73-7.24L1.66 9.06l7.44-.6z"
          fill="#ffffff"
        />
      </svg>
    </span>
  );
}

/** Row of Trustpilot star tiles for `value` out of `max`. */
export function TrustpilotStars({ value, max = 5, size = 22 }: { value: number; max?: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-1" role="img" aria-label={`${value} out of ${max} on Trustpilot`}>
      {Array.from({ length: max }).map((_, i) => (
        <StarTile key={i} fill={value - i} size={size} />
      ))}
    </span>
  );
}

/** The Trustpilot star glyph + wordmark, for attribution. */
export function TrustpilotLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden>
        <path
          d="M12 1.6l2.9 6.86 7.44.6-5.66 4.85 1.73 7.24L12 17.77 5.6 21.15l1.73-7.24L1.66 9.06l7.44-.6z"
          fill={TP_GREEN}
        />
      </svg>
      <span className="font-semibold tracking-tight text-foreground">Trustpilot</span>
    </span>
  );
}
