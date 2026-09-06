import Image from "next/image";
import { Star, ArrowUpRight, Check } from "lucide-react";
import type { Provider } from "@/data/providers";

// A ranked provider card for the "Best GLP-1 programs" list. Editorial framing
// with an affiliate CTA. rel="sponsored nofollow" on outbound affiliate links.
export function ProviderCard({ provider }: { provider: Provider }) {
  const isPlaceholder = provider.affiliateUrl === "#";
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        <div className="flex items-center gap-4">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-light text-sm font-bold text-primary">
            {provider.rank}
          </span>
          <div className="relative h-12 w-28 shrink-0">
            <Image
              src={provider.logo}
              alt={`${provider.name} logo`}
              fill
              className="object-contain object-left"
              sizes="112px"
            />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-lg font-bold text-foreground">{provider.name}</h3>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
              <Star size={14} className="fill-primary text-primary" />
              {provider.rating.toFixed(1)}
              <span className="font-normal text-muted">· {provider.ratingLabel}</span>
            </span>
          </div>
          <p className="mt-1 text-sm text-muted">{provider.glp1Focus}</p>

          <ul className="mt-3 space-y-1.5">
            {provider.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-foreground">
                <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex shrink-0 flex-col items-stretch gap-2 sm:w-40">
          <a
            href={provider.affiliateUrl}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="inline-flex items-center justify-center gap-1 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:brightness-95"
            aria-disabled={isPlaceholder}
          >
            {provider.ctaText}
            <ArrowUpRight size={15} />
          </a>
          <span className="text-center text-xs text-muted">
            {provider.reviewCount.toLocaleString()} reviews
          </span>
        </div>
      </div>
    </div>
  );
}
