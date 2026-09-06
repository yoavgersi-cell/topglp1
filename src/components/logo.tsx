import Link from "next/link";

// The TopGLP1 wordmark. A small "pen/injector" glyph + the name, kept as inline
// SVG so it's crisp at any size and needs no asset request.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`} aria-label="TopGLP1 home">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-white">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 20 L14 10 M12 4 L20 12 L17 15 L9 7 Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="6" cy="18" r="1.6" fill="currentColor" />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight text-foreground">
        Top<span className="text-primary">GLP1</span>
      </span>
    </Link>
  );
}
