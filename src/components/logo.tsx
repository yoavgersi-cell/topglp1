import Link from "next/link";

// The Top GLP-1 wordmark — a clean two-line editorial lockup: the name over a
// small positioning line. No icon; text only, so it reads like a masthead.
export function Logo({ className = "", variant, href = "/" }: { className?: string; variant?: "uk"; href?: string }) {
  // UK ad rules treat "GLP-1" as a reference to prescription weight-loss
  // medicines, so the UK wordmark must not carry it, nor a medicine tagline.
  const isUk = variant === "uk";
  const tagline = isUk ? "Independent, evidence-first guidance" : "Independent GLP-1 reviews & research";
  return (
    <Link
      href={href}
      className={`inline-flex flex-col leading-none ${className}`}
      aria-label={isUk ? "Top home" : "Top GLP-1 home"}
    >
      <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
        {isUk ? "Top" : <>Top <span className="text-primary">GLP-1</span></>}
      </span>
      <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
        {tagline}
      </span>
    </Link>
  );
}
