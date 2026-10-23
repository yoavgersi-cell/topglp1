import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import type { Provider } from "@/data/providers";
import { TrustpilotStars } from "./trustpilot";

// A ranked provider card for the "Best GLP-1 programs" list. Editorial framing
// with a conversion-focused affiliate CTA. rel="sponsored nofollow" on the
// outbound link, with an FTC-friendly disclosure.
export function ProviderCard({ provider }: { provider: Provider }) {
  const isPlaceholder = provider.affiliateUrl === "#";
  const tp = provider.externalReviews;
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
      {provider.rank === 1 && (
        <div className="bg-primary px-4 py-1 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white">
          ★ Our #1 pick
        </div>
      )}
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6">
        {/* Rank + logo */}
        <div className="flex items-center gap-4 sm:w-28 sm:flex-col sm:items-start sm:gap-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary-light text-sm font-bold text-primary">
            {provider.rank}
          </span>
          <div className="relative h-11 w-28 shrink-0">
            <Image
              src={provider.logo}
              alt={`${provider.name} logo`}
              fill
              className="object-contain object-left"
              sizes="112px"
            />
          </div>
        </div>

        {/* Body */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
            <h3 className="text-lg font-bold text-foreground">{provider.name}</h3>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-primary-light px-2.5 py-0.5 text-sm font-bold text-primary">
              {provider.rating.toFixed(1)}
              <span className="text-xs font-semibold text-primary/70">/10</span>
            </span>
            <span className="text-xs text-muted">our score</span>
          </div>
          <p className="mt-1.5 text-sm text-muted">{provider.glp1Focus}</p>

          <ul className="mt-3 space-y-1.5">
            {provider.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-foreground">
                <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA column */}
        <div className="flex shrink-0 flex-col gap-3 sm:w-44">
          {tp && (
            <div className="rounded-xl border border-border bg-background px-3 py-2 text-center">
              <div className="flex justify-center">
                <TrustpilotStars value={tp.scoreValue} max={tp.scoreMax} size={14} />
              </div>
              <p className="mt-1 text-[11px] leading-tight text-muted">
                <span className="font-bold text-foreground">{tp.score}</span>/{tp.scoreMax} ·{" "}
                {tp.count.toLocaleString()} reviews
              </p>
            </div>
          )}
          <a
            href={provider.affiliateUrl}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="flex h-12 w-full items-center justify-center gap-1.5 rounded-xl bg-primary text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
            aria-disabled={isPlaceholder}
          >
            {provider.ctaText}
            <ArrowUpRight size={16} />
          </a>
          <p className="text-center text-[11px] leading-tight text-muted">
            Visit official site · we may earn a commission
          </p>
        </div>
      </div>
    </div>
  );
}
