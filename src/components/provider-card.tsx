import Link from "next/link";
import Image from "next/image";
import { Check, ArrowUpRight, Star, ShieldCheck, BadgeCheck } from "lucide-react";
import type { Provider } from "@/data/providers";

// Trustpilot's own star-colour scale for the inline trust line.
function tpStarColor(rating: number): string {
  if (rating >= 4.3) return "#00B67A";
  if (rating >= 3.8) return "#73CF11";
  if (rating >= 2.8) return "#FFCE00";
  if (rating >= 1.8) return "#FF8622";
  return "#FF3722";
}

// Large, editorial ranking card modeled on top affiliate comparison pages:
// a prominent score box, gold editorial stars, trust pills, the treatments and
// transparent starting price, a scannable facts grid, a strong CTA rail, and a
// Trustpilot trust line. Every value is grounded in real provider data.
export function ProviderCard({ provider }: { provider: Provider }) {
  const p = provider;
  const stars = Math.round(p.rating / 2);
  const treatments = [
    !p.specs.semaglutide.startsWith("—") && "Semaglutide",
    !p.specs.tirzepatide.startsWith("—") && "Tirzepatide",
  ].filter(Boolean) as string[];
  const pills = [
    p.specs.offeringType === "Both" ? "Brand + compounded" : p.specs.offeringType === "Branded" ? "Brand-name" : "Compounded",
    /legitscript/i.test(p.specs.pharmacy) && "LegitScript-certified",
    /free/i.test(p.specs.shipping) && "Free shipping",
  ].filter(Boolean).slice(0, 3) as string[];
  const facts = p.highlights.slice(0, 4);
  const tp = p.externalReviews;
  const reviewHref = `/reviews/${p.slug}`;
  const isCompounded = /compounded/i.test(p.specs.offeringType);

  return (
    <article className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      {p.rank === 1 && (
        <div className="flex items-center gap-1.5 bg-primary px-5 py-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-white">
          <BadgeCheck className="h-3.5 w-3.5" strokeWidth={2.5} /> Our #1 pick
        </div>
      )}

      <div className="p-4 sm:p-6">
        {/* Header: rank + logo, score box */}
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-foreground text-[12px] font-extrabold text-background sm:h-8 sm:w-8 sm:text-[13px]">
              {p.rank}
            </span>
            <div className="relative h-[38px] w-[120px] sm:h-[46px] sm:w-[160px]">
              <Image src={p.logo} alt={`${p.name} logo`} fill className="object-contain object-left" sizes="160px" />
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div className="text-right">
              <div className="flex justify-end gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    strokeWidth={0}
                    style={{ fill: i < stars ? "#FDB515" : "var(--color-border, #e5e7eb)", color: i < stars ? "#FDB515" : "var(--color-border, #e5e7eb)" }}
                  />
                ))}
              </div>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-primary sm:text-[11px]">{p.ratingLabel}</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-primary px-2.5 py-1 text-white sm:px-3 sm:py-1.5">
              <span className="text-[20px] font-extrabold leading-none sm:text-[24px]">{p.rating.toFixed(1)}</span>
              <span className="mt-0.5 text-[8px] font-semibold uppercase tracking-wide text-white/70 sm:text-[9px]">out of 10</span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        {p.tagline && <h3 className="mt-3.5 text-[15px] font-bold leading-snug text-foreground sm:mt-4 sm:text-[19px]">{p.tagline}</h3>}

        {/* Trust pills */}
        {pills.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5 sm:mt-3 sm:gap-2">
            {pills.map((pill) => (
              <span key={pill} className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11.5px] font-semibold text-emerald-700 sm:px-3 sm:py-1 sm:text-[12px]">
                <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2} /> {pill}
              </span>
            ))}
          </div>
        )}

        {/* Body: facts (left) + CTA rail (right) */}
        <div className="mt-4 flex flex-col gap-4 sm:mt-5 sm:gap-5 lg:flex-row lg:items-start">
          <div className="min-w-0 flex-1 space-y-3.5 sm:space-y-4">
            {/* Info panel: treatments + starting price */}
            <div className="rounded-xl border border-border bg-background/60 p-3.5 sm:p-4">
              {treatments.length > 0 && (
                <div>
                  <p className="text-[10.5px] font-bold uppercase tracking-wide text-muted sm:text-[11px]">Treatments offered</p>
                  <p className="mt-1 text-[12.5px] leading-snug text-foreground sm:text-[13.5px]">{treatments.join(" · ")}</p>
                </div>
              )}
              <div className={treatments.length > 0 ? "mt-2.5 border-t border-border pt-2.5 sm:mt-3 sm:pt-3" : ""}>
                <p className="text-[10.5px] font-bold uppercase tracking-wide text-muted sm:text-[11px]">Starting price</p>
                <p className="mt-1 text-[19px] font-extrabold text-foreground sm:text-[20px]">{p.specs.startingPrice}</p>
                {isCompounded && <p className="mt-1.5 text-[10.5px] leading-snug text-muted sm:text-[11px]">*Compounded medications are not FDA-approved.</p>}
              </div>
            </div>

            {/* Facts grid */}
            {facts.length > 0 && (
              <ul className="grid gap-x-5 gap-y-1.5 sm:grid-cols-2 sm:gap-y-2">
                {facts.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[12.5px] leading-snug text-foreground sm:text-[13px]">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* CTA rail */}
          <div className="flex shrink-0 flex-col gap-2.5 lg:w-[220px] lg:rounded-xl lg:bg-background/60 lg:p-4">
            <div className="hidden lg:block lg:text-center">
              <span className="text-[12.5px] text-muted">Pricing starts at</span>
              <p className="text-[22px] font-extrabold text-foreground">{p.specs.startingPrice}</p>
            </div>
            <a
              href={p.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="flex h-12 w-full items-center justify-center gap-1.5 rounded-xl bg-primary text-[15px] font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              Visit {p.name} <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
            <Link href={reviewHref} className="text-center text-[12.5px] font-semibold text-primary hover:underline">
              Read full review
            </Link>
            {tp && (
              <div className="mt-0.5 flex items-center justify-center gap-1.5 border-t border-border pt-2 text-[11.5px] text-muted">
                <Star className="h-3.5 w-3.5" strokeWidth={0} style={{ fill: tpStarColor(tp.scoreValue), color: tpStarColor(tp.scoreValue) }} />
                <span className="font-bold text-foreground">{tp.score}</span>
                <span>Trustpilot</span>
                <span className="text-muted/70">({tp.count.toLocaleString()})</span>
              </div>
            )}
            <p className="text-center text-[10.5px] leading-tight text-muted">Visit official site · we may earn a commission</p>
          </div>
        </div>

        {/* Intro + read more */}
        {p.glp1Focus && (
          <div className="mt-4 border-t border-border pt-3.5 sm:mt-5 sm:pt-4">
            <p className="text-[12.5px] leading-relaxed text-muted sm:text-[13.5px]">{p.glp1Focus}</p>
            <Link href={reviewHref} className="mt-1.5 inline-flex items-center gap-1 text-[12.5px] font-semibold text-primary hover:underline sm:text-[13px]">
              Read full {p.name} review <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
