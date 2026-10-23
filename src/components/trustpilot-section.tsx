"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ExternalReviews } from "@/data/providers";

// ───── Trustpilot section (ported from the treatmentshub design) ─────
// Big score header + an interactive carousel of verbatim reviews: fractional
// Trustpilot-coloured stars, reader-controlled sort, paged on desktop and a
// snap carousel on mobile. Every number comes from stored, cited data.

const TP_GREEN = "#00B67A";

// Trustpilot's own star-colour scale, keyed by the score shown.
function tpStarColor(rating: number): string {
  if (rating >= 4.3) return TP_GREEN;
  if (rating >= 3.8) return "#73CF11";
  if (rating >= 2.8) return "#FFCE00";
  if (rating >= 1.8) return "#FF8622";
  return "#FF3722";
}

function TPStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="white" className={className} aria-hidden="true">
      <path d="M12 2l2.6 6.6 7.4.4-5.7 4.6 1.9 7.1L12 16.8l-6.2 3.9 1.9-7.1L2 9l7.4-.4L12 2z" />
    </svg>
  );
}

function StarBox({ fill, color, size = 18 }: { fill: number; color: string; size?: number }) {
  const pct = Math.max(0, Math.min(1, fill)) * 100;
  return (
    <div
      className="flex items-center justify-center"
      style={{ width: size, height: size, background: `linear-gradient(90deg, ${color} ${pct}%, #DCDCE6 ${pct}%)` }}
    >
      <TPStar className="h-[68%] w-[68%]" />
    </div>
  );
}

function TPStars({ rating, size = 18 }: { rating: number; size?: number }) {
  const color = tpStarColor(rating);
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <StarBox key={i} fill={rating - i} color={color} size={size} />
      ))}
    </div>
  );
}

function TPWordmark({ starClass = "h-[18px] w-[18px]", textClass = "text-[15px]" }: { starClass?: string; textClass?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5" aria-label="Trustpilot">
      <svg viewBox="0 0 1133 1080" className={starClass} aria-hidden="true">
        <path fill={TP_GREEN} d="M1132.8 412.8H700.2L566.4 0 432.6 412.8 0 412.5l350.1 254.7L216 1080l350.4-254.4L916.8 1080 783 667.2l349.8-254.4z" />
        <path fill="#005128" d="M813.3 760.5 783 667.2 566.4 825.6z" />
      </svg>
      <span className={`${textClass} font-bold tracking-tight text-foreground`}>Trustpilot</span>
    </span>
  );
}

type Quote = NonNullable<ExternalReviews["quotes"]>[number];

function ReviewCard({ r }: { r: Quote }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-4">
      <div className="mb-2.5 flex items-center justify-between gap-2">
        <TPStars rating={r.stars} size={16} />
        {r.date && <span className="shrink-0 text-[11px] text-muted">{r.date}</span>}
      </div>
      <p className="mb-3.5 line-clamp-5 min-h-[76px] text-[12.5px] leading-[1.5] text-muted">&ldquo;{r.text}&rdquo;</p>
      <div className="mt-auto flex items-center gap-2">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
          {r.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="truncate text-[12.5px] font-semibold text-foreground">{r.name}</p>
          {r.location && <p className="text-[11px] text-muted">{r.location}</p>}
        </div>
      </div>
    </div>
  );
}

type Sort = "highest" | "newest" | "lowest";
const SORTS: { id: Sort; label: string }[] = [
  { id: "highest", label: "Highest rated" },
  { id: "newest", label: "Newest" },
  { id: "lowest", label: "Lowest rated" },
];

function reviewTime(r: Quote): number {
  if (!r.date) return 0;
  const t = new Date(r.date).getTime();
  return isNaN(t) ? 0 : t;
}
function sortReviews(reviews: Quote[], sort: Sort): Quote[] {
  const byNewest = (a: Quote, b: Quote) => reviewTime(b) - reviewTime(a);
  const list = [...reviews];
  if (sort === "newest") return list.sort(byNewest);
  if (sort === "lowest") return list.sort((a, b) => a.stars - b.stars || byNewest(a, b));
  return list.sort((a, b) => b.stars - a.stars || byNewest(a, b));
}

function Pager({ cards }: { cards: { key: string; node: React.ReactNode }[] }) {
  const [page, setPage] = useState(0);
  const perPage = 4;
  const pageCount = Math.ceil(cards.length / perPage);
  const visible = cards.slice(page * perPage, page * perPage + perPage);
  return (
    <>
      {/* Desktop grid */}
      <div className="hidden sm:block">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((c) => (
            <div key={c.key}>{c.node}</div>
          ))}
        </div>
        {pageCount > 1 && (
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => setPage((page - 1 + pageCount) % pageCount)}
              aria-label="Previous reviews"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:bg-background"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={2} />
            </button>
            <div className="flex">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button key={i} onClick={() => setPage(i)} aria-label={`Reviews page ${i + 1}`} className="flex h-6 w-6 items-center justify-center">
                  <span className={`h-1.5 rounded-full transition-all ${i === page ? "w-5 bg-primary" : "w-1.5 bg-border hover:bg-muted/40"}`} />
                </button>
              ))}
            </div>
            <button
              onClick={() => setPage((page + 1) % pageCount)}
              aria-label="Next reviews"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:bg-background"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        )}
      </div>
      {/* Mobile snap carousel */}
      <div className="sm:hidden">
        <div className="flex gap-3 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" style={{ scrollSnapType: "x mandatory" }}>
          {cards.map((c) => (
            <div key={c.key} className="w-[85%] shrink-0" style={{ scrollSnapAlign: "center" }}>
              {c.node}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function TrustpilotSection({ providerName, data, anchorId = "reviews" }: { providerName: string; data: ExternalReviews; anchorId?: string }) {
  const reviews = data.quotes ?? [];
  const [sort, setSort] = useState<Sort>("highest");
  const sorted = sortReviews(reviews, sort);
  const lowest = reviews.length ? Math.min(...reviews.map((r) => r.stars)) : 0;

  return (
    <section id={anchorId} className="mt-12 scroll-mt-24">
      <h2 className="font-serif text-2xl font-semibold text-foreground">What real {providerName} customers say</h2>

      {/* Score header */}
      <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center">
            <span className="font-serif text-5xl font-bold leading-none text-foreground">{data.score}</span>
            <span className="mt-1 text-xs text-muted">out of {data.scoreMax}</span>
          </div>
          <div>
            <TPStars rating={data.scoreValue} size={24} />
            <p className="mt-2 text-sm text-muted">
              <span className="font-semibold text-foreground">{data.count.toLocaleString()}</span> reviews · checked {data.asOf}
            </p>
          </div>
        </div>
        <TPWordmark />
      </div>

      {data.summary && <p className="mt-3 leading-relaxed text-foreground">{data.summary}</p>}

      {/* Carousel */}
      {reviews.length > 0 && (
        <div className="mt-5 rounded-2xl border border-border bg-background/60 p-5 sm:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <p className="text-[12.5px] text-muted">
              Verbatim reviews we captured, including every {lowest}-star one.
            </p>
            <div className="flex items-center gap-1.5" role="group" aria-label="Sort reviews">
              <span className="text-[11.5px] font-semibold uppercase tracking-wide text-muted">Sort</span>
              {SORTS.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setSort(o.id)}
                  aria-pressed={sort === o.id}
                  className={`rounded-full border px-2.5 py-1 text-[12px] font-semibold transition-colors ${
                    sort === o.id ? "border-primary bg-primary text-white" : "border-border bg-surface text-muted hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
          <Pager key={sort} cards={sorted.map((r, i) => ({ key: `${sort}-${i}`, node: <ReviewCard r={r} /> }))} />
          <p className="mt-3 text-[11.5px] leading-relaxed text-muted">
            Reviews are individual experiences quoted verbatim from public {data.source} profiles, names shortened; any
            weight-loss result mentioned is one person&rsquo;s and is not typical — results vary. We don&rsquo;t edit or
            curate them to flatter our pick.
          </p>
        </div>
      )}
    </section>
  );
}
