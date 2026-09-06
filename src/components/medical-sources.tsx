import { BookMarked, ExternalLink } from "lucide-react";
import { getSources } from "@/data/sources";

// Renders a credible "Sources & references" section from a list of source keys.
// Used on medication and guide pages to make every clinical claim traceable to
// a peer-reviewed trial or an FDA source.
export function MedicalSources({ keys }: { keys: string[] }) {
  const sources = getSources(keys);
  if (sources.length === 0) return null;

  return (
    <section className="mt-12 rounded-2xl border border-border bg-surface p-6">
      <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
        <BookMarked size={16} className="text-primary" />
        Sources &amp; references
      </h2>
      <p className="mt-2 text-xs text-muted">
        Clinical figures on this page trace to peer-reviewed trials and official regulators.
        We link the primary record so you can verify it yourself.
      </p>
      <ol className="mt-4 space-y-3">
        {sources.map((s, i) => (
          <li key={s.key} className="flex gap-3 text-sm">
            <span className="shrink-0 font-semibold text-primary">{i + 1}.</span>
            <div>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline font-medium text-foreground underline decoration-border underline-offset-2 hover:decoration-primary"
              >
                {s.citation}
                <ExternalLink size={12} className="ml-1 inline align-baseline text-muted" />
              </a>
              <div className="mt-0.5 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary-light px-2 py-0.5 text-[11px] font-semibold text-primary">
                  {s.type}
                </span>
                <span className="text-xs text-muted">{s.publisher}</span>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
