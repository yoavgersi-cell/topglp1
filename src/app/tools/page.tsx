import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, ClipboardCheck, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Free GLP-1 Tools: Cost Calculator & Eligibility Checker",
  description:
    "Free, no-signup GLP-1 tools — estimate what you'll actually pay each month with the cost calculator, and check whether you meet the clinical criteria with the eligibility checker.",
  path: "/tools",
});

const TOOLS = [
  {
    href: "/tools/glp1-cost-calculator",
    icon: Calculator,
    title: "GLP-1 Cost Calculator",
    body: "Estimate your real monthly and total cost by medication and insurance situation — and see how much compounded can save you.",
  },
  {
    href: "/tools/am-i-eligible-for-glp1",
    icon: ClipboardCheck,
    title: "Am I Eligible? (BMI Checker)",
    body: "Enter your height, weight and any weight-related conditions to see whether you likely meet the clinical criteria for GLP-1 treatment.",
  },
];

export default function ToolsHub() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Tools", path: "/tools" },
            ]),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Tools", path: "/tools" }]} />

      <h1 className="font-serif text-4xl font-semibold text-foreground">Free GLP-1 tools</h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
        Quick, no-signup tools to answer the two questions everyone has before starting: what will it cost me, and
        do I even qualify?
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {TOOLS.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-light text-primary">
              <t.icon size={22} />
            </span>
            <h2 className="mt-4 text-lg font-bold text-foreground">{t.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t.body}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Open tool <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
