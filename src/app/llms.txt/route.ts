import { MEDICATIONS } from "@/data/medications";
import { GUIDES } from "@/data/guides";
import { BATTLES } from "@/data/battles";
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

  lines.push("## Key pages");
  lines.push(`- Best GLP-1 programs: ${SITE.url}/best-glp1-providers`);
  lines.push(`- All comparisons: ${SITE.url}/compare`);
  lines.push(`- About & editorial approach: ${SITE.url}/about`);
  lines.push(`- Medical disclaimer: ${SITE.url}/disclaimer`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
