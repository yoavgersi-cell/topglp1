import { MEDICATIONS } from "@/data/medications";
import { GUIDES } from "@/data/guides";
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
      "Content is general educational information, not medical advice.",
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

  lines.push("## Key pages");
  lines.push(`- Best GLP-1 programs: ${SITE.url}/best-glp1-providers`);
  lines.push(`- About & editorial approach: ${SITE.url}/about`);
  lines.push(`- Medical disclaimer: ${SITE.url}/disclaimer`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
