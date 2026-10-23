import { Check, X } from "lucide-react";
import type { ExternalReviews } from "@/data/providers";
import { TrustpilotStars, TrustpilotLogo } from "./trustpilot";

// A polished, trustworthy display of a provider's real third-party reviews:
// a big score header with Trustpilot stars + wordmark, an honest synthesis,
// and verbatim review cards (including the critical ones). Every number comes
// from stored, cited data — never invented.
export function TrustpilotSection({
  providerName,
  data,
}: {
  providerName: string;
  data: ExternalReviews;
}) {
  const quotes = data.quotes ?? [];
  return (
    <section id="reviews" className="mt-12 scroll-mt-24">
      <h2 className="font-serif text-2xl font-semibold text-foreground">
        What real {providerName} customers say
      </h2>

      {/* Score header */}
      <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-surface">
        <div className="flex flex-col gap-4 border-b border-border p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center">
              <span className="font-serif text-5xl font-bold leading-none text-foreground">{data.score}</span>
              <span className="mt-1 text-xs text-muted">out of {data.scoreMax}</span>
            </div>
            <div>
              <TrustpilotStars value={data.scoreValue} max={data.scoreMax} size={24} />
              <p className="mt-2 text-sm text-muted">
                {data.count.toLocaleString()} {data.source} reviews · checked {data.asOf}
              </p>
            </div>
          </div>
          <TrustpilotLogo className="text-base" />
        </div>
        {data.summary && (
          <p className="p-6 pt-5 leading-relaxed text-foreground">{data.summary}</p>
        )}
        {(data.positives?.length || data.negatives?.length) && (
          <div className="grid gap-5 border-t border-border p-6 sm:grid-cols-2">
            {data.positives && data.positives.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">What they praise</h3>
                <ul className="mt-2 space-y-1.5">
                  {data.positives.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {data.negatives && data.negatives.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-accent">The gripes</h3>
                <ul className="mt-2 space-y-1.5">
                  {data.negatives.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <X size={15} className="mt-0.5 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Verbatim review cards */}
      {quotes.length > 0 && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {quotes.map((qt) => (
            <figure key={qt.name + qt.date} className="flex flex-col rounded-2xl border border-border bg-surface p-5">
              <TrustpilotStars value={qt.stars} max={data.scoreMax} size={16} />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                &ldquo;{qt.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-xs text-muted">
                <span className="font-semibold text-foreground">{qt.name}</span>
                {qt.location ? ` · ${qt.location}` : ""}
                {qt.label ? ` · ${qt.label}` : ""} · {qt.date}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      <p className="mt-3 text-xs leading-relaxed text-muted">
        Ratings and quotes are drawn from {data.source} and shown as posted there, unedited — including the
        critical ones. We don&apos;t curate them to flatter our pick.
      </p>
    </section>
  );
}
