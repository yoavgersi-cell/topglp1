import type { Provider } from "@/data/providers";
import { providerScorecard } from "@/data/rankings";

// Score breakdown for a provider. Aligned, contained bars: a fixed label
// column, a fixed numeric column, then a flexible track that the fill sits
// inside (so bars share a start x and can never overflow the card).
export function Scorecard({ provider }: { provider: Provider }) {
  const rows = providerScorecard(provider);

  const Row = ({
    label,
    score,
    weight,
    emphasis,
  }: {
    label: string;
    score: number;
    weight?: number;
    emphasis?: boolean;
  }) => (
    <div
      className={`grid grid-cols-[7.5rem_2.25rem_1fr] items-center gap-3 px-5 py-3.5 sm:grid-cols-[10rem_2.25rem_1fr] ${
        emphasis ? "bg-primary-light/40" : ""
      }`}
    >
      <span className={`text-sm leading-tight ${emphasis ? "font-bold text-foreground" : "text-foreground"}`}>
        {label}
        {weight != null && <span className="ml-1 text-xs font-normal text-muted">· {weight}%</span>}
      </span>
      <span className={`text-right text-sm font-bold tabular-nums ${emphasis ? "text-foreground" : "text-primary"}`}>
        {score.toFixed(1)}
      </span>
      <div className="h-2 overflow-hidden rounded-full bg-border/70">
        <div className="h-full rounded-full bg-primary" style={{ width: `${Math.min(100, score * 10)}%` }} />
      </div>
    </div>
  );

  return (
    <section id="scorecard" className="mt-10 scroll-mt-24">
      <h2 className="font-serif text-2xl font-semibold text-foreground">Scorecard</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        How {provider.name}&rsquo;s {provider.rating.toFixed(1)} overall score breaks down across our five weighted
        criteria. Each sub-score reflects {provider.name}&rsquo;s own specs and weights back to the overall.
      </p>
      <div className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
        {rows.map((r) => (
          <Row key={r.key} label={r.label} score={r.score} weight={r.weight} />
        ))}
        <Row label="Overall" score={provider.rating} emphasis />
      </div>
    </section>
  );
}
