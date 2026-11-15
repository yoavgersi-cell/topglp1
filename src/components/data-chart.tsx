import type { Block } from "@/data/glp1-weight-loss-guide";

type ChartBlock = Extract<Block, { type: "chart" }>;

// On-brand palette drawn from the site's design tokens.
const COLORS = ["#0C4B75", "#1a8cd8", "#7cb9e0", "#b9d9ee"];

// Server-rendered, accessible, no-JS horizontal grouped bar chart. The data is
// kept as readable text (labels, value tags, a visually-hidden data summary and
// an aria-label) so screen readers and crawlers/AI get the numbers, not just a
// picture — which is what makes it a real SEO/GEO asset rather than decoration.
export function DataChart({ block }: { block: ChartBlock }) {
  const { title, caption, unit = "", prefix = "", max = 100, groups, rows, alt } = block;

  const rowH = groups.length * 22 + 18; // height per category row
  const gap = 14;
  const labelW = 96;
  const valueW = 46;
  const plotLeft = labelW;
  const width = 680;
  const plotW = width - labelW - valueW - 12;
  const top = 8;
  const height = top + rows.length * rowH + (rows.length - 1) * gap + 8;

  return (
    <figure className="mt-6">
      {title && (
        <figcaption className="mb-1 text-sm font-semibold text-foreground">{title}</figcaption>
      )}
      <div className="overflow-x-auto rounded-2xl border border-border bg-surface p-4">
        {/* Legend */}
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
          {groups.map((g, gi) => (
            <span key={g} className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
              <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: COLORS[gi % COLORS.length] }} />
              {g}
            </span>
          ))}
        </div>

        <svg
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-label={alt}
          preserveAspectRatio="xMinYMin meet"
          className="h-auto w-full min-w-[480px]"
        >
          <title>{title ?? alt}</title>
          <desc>{alt}</desc>
          {rows.map((row, ri) => {
            const y0 = top + ri * (rowH + gap);
            return (
              <g key={row.label}>
                {/* category label */}
                <text x={0} y={y0 + rowH / 2} dominantBaseline="middle" fontSize="13" fontWeight="600" fill="#1f2937">
                  {row.label}
                </text>
                {row.values.map((v, gi) => {
                  const by = y0 + gi * 22;
                  const bw = Math.max(0, (Math.min(v, max) / max) * plotW);
                  return (
                    <g key={gi}>
                      <rect x={plotLeft} y={by} width={plotW} height={16} rx={3} fill="#eef2f6" />
                      <rect x={plotLeft} y={by} width={bw} height={16} rx={3} fill={COLORS[gi % COLORS.length]} />
                      <text x={plotLeft + plotW + 6} y={by + 8} dominantBaseline="middle" fontSize="12" fontWeight="600" fill="#1f2937">
                        {prefix}
                        {v}
                        {unit}
                      </text>
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>
      {caption && <figcaption className="mt-2 text-xs text-muted">{caption}</figcaption>}
    </figure>
  );
}
