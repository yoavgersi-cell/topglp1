import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Minus, X } from "lucide-react";
import { STATES, medicaidStatus } from "@/data/states";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialByline } from "@/components/editorial-byline";
import { MedicalSources } from "@/components/medical-sources";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "GLP-1 Coverage by State 2026: Medicaid Rules & How to Get Treatment",
  description:
    "GLP-1 coverage by state in 2026 — which state Medicaid programs cover weight-loss GLP-1s (only ~11–13 do), plus how to get compounded GLP-1 by telehealth nationwide.",
  path: "/glp1-by-state",
});

const toneIcon = { yes: Check, limited: Minus, no: X } as const;
const toneColor = { yes: "text-primary", limited: "text-accent", no: "text-muted" } as const;

export default function StateHub() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "GLP-1 by state", path: "/glp1-by-state" },
            ]),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "GLP-1 by state", path: "/glp1-by-state" }]} />

      <h1 className="font-serif text-4xl font-semibold text-foreground">GLP-1 coverage by state</h1>
      <EditorialByline chips={["Medicaid data from KFF & Stateline", "Changes tracked over time"]} />
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Whether Medicaid pays for a GLP-1 depends heavily on your state — and, for weight loss specifically, only about
        11–13 states cover it in 2026, a number that's been shrinking. GLP-1s for type 2 diabetes are covered almost
        everywhere. Wherever you live, compounded GLP-1 by telehealth is a cash route available nationwide.
      </p>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[520px] border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-semibold text-muted">State</th>
              <th className="p-4 font-semibold text-muted">Medicaid for weight loss</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {STATES.map((s, i) => {
              const st = medicaidStatus(s);
              const Icon = toneIcon[st.tone];
              return (
                <tr key={s.slug} className={i % 2 === 0 ? "bg-background" : "bg-surface"}>
                  <td className="p-4 align-middle font-semibold text-foreground">{s.name}</td>
                  <td className="p-4 align-middle">
                    <span className={`inline-flex items-center gap-1.5 ${toneColor[st.tone]}`}>
                      <Icon size={15} /> {st.label}
                    </span>
                  </td>
                  <td className="p-4 align-middle text-right">
                    <Link href={`/glp1-by-state/${s.slug}`} className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                      {s.name} details <ArrowRight size={12} />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        Medicaid coverage for weight-loss GLP-1s changes frequently and is set by each state. Statuses reflect our last
        review of KFF and Stateline reporting; always confirm with your state Medicaid program. Coverage for type 2
        diabetes is separate and much more widely available. On Medicare, see our{" "}
        <Link href="/glp1-medicare-coverage" className="font-semibold text-primary underline">Medicare GLP-1 coverage guide</Link>.
      </p>

      <MedicalSources keys={["kff-medicaid-glp1", "stateline-glp1-medicaid"]} />
    </div>
  );
}
