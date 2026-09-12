import Link from "next/link";
import Image from "next/image";
import { Trophy, ArrowUpRight, Star, ShieldCheck } from "lucide-react";
import { cashPayPicks, getProvider } from "@/data/providers";

// Honestly-ranked "best cash-pay compounded GLP-1" block for state pages.
// Our editorial score is labelled as ours; Trustpilot is shown only where we
// have verified data. All CTAs are rel="sponsored nofollow noopener".
export function StateProviderPicks({ stateName }: { stateName: string }) {
  const picks = cashPayPicks();
  if (picks.length === 0) return null;
  const ro = getProvider("ro");
  const showRo = ro && ro.affiliateUrl !== "#";

  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl font-semibold text-foreground">
        Best cash-pay GLP-1 programs for {stateName}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Our independent ranking of licensed telehealth programs that ship compounded GLP-1 to {stateName} without
        insurance. Scores are ours; prices are provider-reported and change — confirm before you buy.
      </p>

      <ol className="mt-5 space-y-3">
        {picks.map(({ provider: p, why }, i) => {
          const top = i === 0;
          return (
            <li
              key={p.id}
              className={`rounded-2xl border p-5 ${top ? "border-2 border-primary/40 bg-primary-light/25" : "border-border bg-surface"}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${top ? "bg-primary text-white" : "bg-primary-light text-primary"}`}
                >
                  {i + 1}
                </span>
                <div className="relative h-6 w-24">
                  <Image src={p.logo} alt={p.name} fill className="object-contain object-left" sizes="96px" />
                </div>
                {top && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                    <Trophy size={10} /> Top pick
                  </span>
                )}
                <span className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  <Star size={12} className="fill-primary text-primary" /> {p.rating.toFixed(1)}
                  <span className="font-normal text-muted">/10</span>
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-foreground">{why}</p>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                <span className="font-semibold text-foreground">{p.specs.startingPrice}</span>
                {p.externalReviews && <span>Trustpilot {p.externalReviews.score}</span>}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className={`inline-flex items-center gap-1 rounded-full px-5 py-2.5 text-sm font-semibold ${top ? "bg-primary text-white hover:bg-primary-dark" : "border border-border bg-background text-foreground hover:border-primary"}`}
                >
                  See {p.name} <ArrowUpRight size={15} />
                </a>
                <Link href={`/reviews/${p.slug}`} className="text-sm font-semibold text-primary hover:underline">
                  Read our {p.name} review
                </Link>
              </div>
            </li>
          );
        })}
      </ol>

      {showRo && (
        <div className="mt-4 rounded-2xl border-2 border-accent/25 bg-accent-light/30 p-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-accent">
              <ShieldCheck size={12} /> Prefer brand-name or have insurance?
            </span>
            <div className="relative h-6 w-20">
              <Image src={ro.logo} alt={ro.name} fill className="object-contain object-left" sizes="80px" />
            </div>
            <span className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-primary">
              <Star size={12} className="fill-primary text-primary" /> {ro.rating.toFixed(1)}
              <span className="font-normal text-muted">/10</span>
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            Compounded is the cheapest route — but if you want FDA-approved brand-name Wegovy or Zepbound, or your
            insurance covers GLP-1, <strong>{ro.name}</strong> handles branded medication and insurance coordination for{" "}
            {stateName} residents.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
            <span className="font-semibold text-foreground">Branded GLP-1 · works with insurance</span>
            {ro.externalReviews && <span>Trustpilot {ro.externalReviews.score}</span>}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={ro.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex items-center gap-1 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            >
              See {ro.name} <ArrowUpRight size={15} />
            </a>
            <Link href={`/reviews/${ro.slug}`} className="text-sm font-semibold text-primary hover:underline">
              Read our {ro.name} review
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
