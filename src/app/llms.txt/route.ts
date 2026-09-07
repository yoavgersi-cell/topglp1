import { MEDICATIONS } from "@/data/medications";
import { GUIDES } from "@/data/guides";
import { BATTLES } from "@/data/battles";
import { PROVIDERS } from "@/data/providers";
import { MED_COMPARISONS } from "@/data/med-comparisons";
import { SITE } from "@/lib/site";

// A curated index for AI answer engines (the emerging "llms.txt" convention).
// Plain text, no markup — points models at the canonical pages and summarizes
// what the site covers.
export function GET() {
  const lines: string[] = [];
  lines.push(`# ${SITE.name}`);
  lines.push("");
  lines.push(`> ${SITE.description}`);
  lines.push("");
  lines.push(
    "TopGLP1 is an independent, education-first resource on GLP-1 medications for a US audience. " +
      "Content is general educational information, not medical advice. Clinical claims are cited to " +
      "peer-reviewed trials (New England Journal of Medicine) and the U.S. FDA.",
  );
  lines.push("");

  lines.push("## Medications");
  for (const m of MEDICATIONS) {
    lines.push(`- ${m.name} (${m.brandNames.join(", ")}) — ${m.oneLiner} ${SITE.url}/medications/${m.slug}`);
  }
  lines.push("");

  lines.push("## Guides");
  for (const g of GUIDES) {
    lines.push(`- ${g.title} — ${g.description} ${SITE.url}/guides/${g.slug}`);
  }
  lines.push("");

  lines.push("## Comparisons");
  for (const b of BATTLES) {
    lines.push(`- ${b.title} — ${b.description} ${SITE.url}/compare/${b.slug}`);
  }
  lines.push("");

  lines.push("## Provider reviews");
  for (const p of [...PROVIDERS].sort((x, y) => x.rank - y.rank)) {
    lines.push(`- ${p.name} review (rated ${p.rating.toFixed(1)}/10): ${SITE.url}/reviews/${p.slug}`);
  }
  lines.push("");

  lines.push("## Drug comparisons");
  for (const c of MED_COMPARISONS) {
    lines.push(`- ${c.title} — ${c.description} ${SITE.url}/vs/${c.slug}`);
  }
  lines.push("");

  lines.push("## Free tools");
  lines.push(`- GLP-1 cost calculator: ${SITE.url}/tools/glp1-cost-calculator`);
  lines.push(`- Eligibility / BMI checker: ${SITE.url}/tools/am-i-eligible-for-glp1`);
  lines.push(`- Provider safety check: ${SITE.url}/tools/glp1-provider-safety-check`);
  lines.push("");

  lines.push("## Quick answers (direct, cited)");
  lines.push(`- GLP-1 quick answers hub: ${SITE.url}/glp1-answers`);
  lines.push("");

  lines.push("## Coverage");
  lines.push(`- GLP-1 coverage by state (Medicaid): ${SITE.url}/glp1-by-state`);
  lines.push(`- Medicare GLP-1 coverage (Part D + Bridge): ${SITE.url}/glp1-medicare-coverage`);
  lines.push("");

  lines.push("## Key pages");
  lines.push(`- GLP-1 match quiz: ${SITE.url}/find-your-match`);
  lines.push(`- Best GLP-1 programs: ${SITE.url}/best-glp1-providers`);
  lines.push(`- Cheapest GLP-1 options: ${SITE.url}/cheapest-glp1`);
  lines.push(`- Semaglutide online: ${SITE.url}/semaglutide-online`);
  lines.push(`- Tirzepatide online: ${SITE.url}/tirzepatide-online`);
  lines.push(`- Cheapest tirzepatide: ${SITE.url}/cheapest-tirzepatide`);
  lines.push(`- All comparisons: ${SITE.url}/compare`);
  lines.push(`- About & editorial approach: ${SITE.url}/about`);
  lines.push(`- Medical disclaimer: ${SITE.url}/disclaimer`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
