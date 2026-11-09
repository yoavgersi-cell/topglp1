import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Star } from "lucide-react";
import { PROVIDERS, getProvider, type Provider } from "@/data/providers";

// Reusable "top picks" block for pillar/buyer pages. Renders a ranked set of
// providers (default: the top 3 by our editorial rank) with rating, the spec
// that matters for the page, top pros and a guarded affiliate CTA. Server-
// rendered, crawlable, no client JS.
function defaultTop3(): Provider[] {
  return [...PROVIDERS].sort((a, b) => a.rank - b.rank).slice(0, 3);
}

export function TopProviders({
  ids,
  specKey = "tirzepatide",
  specLabel = "Tirzepatide",
  heading = "Our top 3 picks",
  intro,
}: {
  ids?: string[];
  specKey?: "semaglutide" | "tirzepatide" | "startingPrice";
  specLabel?: string;
  heading?: string;
  intro?: string;
}) {
  const providers = ids
    ? ids.map((id) => getProvider(id)).filter((p): p is Provider => Boolean(p))
    : defaultTop3();

  return (
    <section className="mt-6">
      {heading && (
        <h3 className="font-serif text-xl font-semibold text-foreground">{heading}</h3>
      )}
      {intro && <p className="mt-2 text-sm leading-relaxed text-muted">{intro}</p>}
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {providers.map((p, i) => {
          const live = p.affiliateUrl && p.affiliateUrl !== "#";
          const ext = p.externalReviews;
          return (
            <div
              key={p.id}
              className="flex flex-col rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-2.5 py-1 text-xs font-bold text-primary">
                  #{i + 1} pick
                </span>
                {ext?.scoreValue != null ? (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground">
                    <Star size={13} className="fill-primary text-primary" /> {ext.score}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground">
                    <Star size={13} className="fill-primary text-primary" /> {p.rating.toFixed(1)}/10
                  </span>
                )}
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="relative h-[34px] w-[108px] shrink-0">
                  <Image src={p.logo} alt={`${p.name} logo`} fill className="object-contain object-left" sizes="108px" />
                </div>
              </div>

              <p className="mt-3 text-sm leading-snug text-muted">{p.tagline}</p>

              <dl className="mt-4 space-y-1.5 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">{specLabel}</dt>
                  <dd className="text-right font-semibold text-foreground">{p.specs[specKey]}</dd>
                </div>
              </dl>

              <ul className="mt-4 space-y-1.5">
                {p.pros.slice(0, 3).map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm leading-snug text-foreground">
                    <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-col gap-2">
                {live ? (
                  <a
                    href={p.affiliateUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    {p.ctaText} <ArrowUpRight size={15} />
                  </a>
                ) : null}
                <Link
                  href={`/reviews/${p.slug}`}
                  className="inline-flex items-center justify-center gap-1 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Read full {p.name} review
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-xs text-muted">
        Ranked by our independent methodology; we may earn a commission from some links, which never changes our
        rankings. See <Link href="/how-we-review" className="text-primary hover:underline">how we review</Link>.
      </p>
    </section>
  );
}
