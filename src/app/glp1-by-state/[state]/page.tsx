import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, Minus, X, ArrowRight, ArrowUpRight, DollarSign, Landmark, CreditCard, Stethoscope, ListChecks, ShieldCheck, Activity } from "lucide-react";
import { STATES, STATE_SLUGS, getState, medicaidStatus, obesityContext, medicaidProgram } from "@/data/states";
import { getProvider } from "@/data/providers";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialByline } from "@/components/editorial-byline";
import { MedicalSources } from "@/components/medical-sources";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return STATE_SLUGS.map((state) => ({ state }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const s = getState(state);
  if (!s) return {};
  return pageMetadata({
    title: `GLP-1 in ${s.name} (2026): Medicaid Coverage, Cost & How to Get It`,
    description: `How to get GLP-1 medication in ${s.name} in 2026 — Medicaid coverage status, cash pricing from $69/mo by telehealth, and eligibility. Verified against KFF/Stateline reporting.`,
    path: `/glp1-by-state/${s.slug}`,
  });
}

const toneIcon = { yes: Check, limited: Minus, no: X } as const;

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const s = getState(state);
  if (!s) notFound();

  const st = medicaidStatus(s);
  const Icon = toneIcon[st.tone];
  const embody = getProvider("embody");
  const isCovered = s.medicaid === "covered" || s.medicaid === "limited";
  const ob = obesityContext(s);
  const program = medicaidProgram(s);

  const COST_ROWS: { label: string; value: string; note: string }[] = [
    { label: "Branded (Wegovy / Zepbound) — cash", value: "$1,000–$1,400/mo", note: "Full list price without coverage" },
    { label: "Branded — with insurance", value: "$0–$550/mo", note: "If your plan covers it (varies widely)" },
    { label: "Compounded semaglutide — telehealth", value: "from $69/mo", note: "No insurance needed; ships to " + s.name },
    { label: "Compounded tirzepatide — telehealth", value: "from $119/mo", note: "The stronger dual-agonist molecule" },
  ];

  const quickAnswer = isCovered
    ? `${s.name} Medicaid ${st.tone === "limited" ? "covers GLP-1 for weight loss but with tightened criteria" : "is one of the few states that still cover GLP-1 for weight loss"} — so you may qualify through Medicaid. If you don't, a licensed telehealth program ships compounded GLP-1 to ${s.name} from about $69/month, no insurance required.`
    : `${s.name} Medicaid ${st.tone === "no" && s.medicaid === "dropped" ? "recently ended" : "does not currently offer"} coverage of GLP-1 for weight loss. The route that works for most ${s.name} residents is a licensed telehealth program: compounded GLP-1 from about $69/month, no insurance required.`;

  const faqs = [
    {
      q: `Does Medicaid cover GLP-1 for weight loss in ${s.name}?`,
      a: st.detail,
    },
    {
      q: `Who qualifies for GLP-1 in ${s.name}?`,
      a: `GLP-1 for weight management is generally appropriate for adults with a BMI of 30 or higher, or 27 or higher with a weight-related condition such as high blood pressure, high cholesterol, obstructive sleep apnoea or type 2 diabetes. A prescriber confirms whether it's right for you — the criteria are the same in ${s.name} as nationwide.`,
    },
    {
      q: `How much does GLP-1 cost in ${s.name} without insurance?`,
      a: `Branded GLP-1 at a ${s.name} pharmacy runs about $1,000–$1,400 a month at cash price. Compounded GLP-1 through a licensed telehealth program is far cheaper — from about $69/month for semaglutide and $119/month for tirzepatide (our top pick, Embody), shipped to ${s.name} with no insurance required.`,
    },
    {
      q: `How can I get GLP-1 in ${s.name} without insurance?`,
      a: `Complete a short online assessment with a licensed telehealth program. A prescriber reviews your case and, if appropriate, a licensed pharmacy ships the medication to your door in ${s.name}. It's the lowest-cost route and doesn't depend on ${s.name} Medicaid.`,
    },
    {
      q: `Is GLP-1 telehealth legal in ${s.name}?`,
      a: `Yes. Licensed telehealth GLP-1 programs operate in ${s.name}, with a prescriber reviewing your case and a licensed pharmacy filling the medication. Use our provider safety check to confirm a program's credentials before you sign up.`,
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "GLP-1 by state", path: "/glp1-by-state" },
              { name: s.name, path: `/glp1-by-state/${s.slug}` },
            ]),
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "GLP-1 by state", path: "/glp1-by-state" },
          { name: s.name, path: `/glp1-by-state/${s.slug}` },
        ]}
      />

      <h1 className="font-serif text-4xl font-semibold text-foreground">GLP-1 in {s.name}</h1>
      <EditorialByline chips={["Data from CDC, KFF & Stateline"]} />
      <p className="mt-4 text-lg leading-relaxed text-muted">
        A clear guide to getting GLP-1 medication in {s.name} in 2026 — what Medicaid covers, who qualifies, what it
        costs, and the fastest legal route regardless of your coverage.
      </p>

      {/* Quick answer (AEO) */}
      <div className="mt-6 rounded-r-xl border-l-4 border-primary bg-primary-light/40 py-4 pl-5 pr-4">
        <p className="leading-relaxed text-foreground">
          <strong>Short answer:</strong> {quickAnswer}
        </p>
      </div>

      {/* By the numbers — real, cited per-state context */}
      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">{s.name}: by the numbers</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
              <Activity size={14} className="text-primary" /> Adult obesity
            </p>
            <p className="mt-2 font-serif text-2xl font-semibold text-foreground">~{ob.regionPct}%</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              of adults in the {ob.region} have obesity (CDC, 2023).{" "}
              {ob.veryHigh
                ? `${s.name} is one of only three states where 40%+ of adults do.`
                : ob.high
                  ? `${s.name} is among the states where more than 1 in 3 adults do.`
                  : "The condition GLP-1 medications treat."}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
              <Landmark size={14} className="text-primary" /> Medicaid program
            </p>
            <p className="mt-2 font-serif text-2xl font-semibold text-foreground">{program}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              {isCovered
                ? "Covers GLP-1 for weight loss with clinical criteria."
                : "Does not cover GLP-1 for weight loss (diabetes still covered)."}
            </p>
          </div>
          <div className="rounded-2xl border-2 border-primary/30 bg-primary-light/30 p-5">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
              <Stethoscope size={14} /> Cash telehealth
            </p>
            <p className="mt-2 font-serif text-2xl font-semibold text-primary">from $69/mo</p>
            <p className="mt-1 text-xs leading-relaxed text-foreground">
              Compounded GLP-1 shipped to {s.name}, no insurance required.
            </p>
          </div>
        </div>
      </section>

      {/* Medicaid status card */}
      <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">{program} — weight-loss GLP-1</h2>
        <p className={`mt-2 flex items-center gap-2 font-serif text-2xl font-semibold ${st.tone === "yes" ? "text-primary" : st.tone === "limited" ? "text-accent" : "text-foreground"}`}>
          <Icon size={22} /> {st.label}
        </p>
        <p className="mt-3 leading-relaxed text-muted">{st.detail}</p>
      </div>

      {/* 3 routes */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">3 ways to get GLP-1 in {s.name}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
              <Landmark size={16} /> Medicaid
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {isCovered
                ? `${s.name} may cover it for weight loss with clinical criteria and prior authorization. Ask your ${s.name} Medicaid plan.`
                : `Not currently a weight-loss benefit in ${s.name} (diabetes coverage continues). Worth confirming, but most people use the cash route.`}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
              <CreditCard size={16} /> Private / employer
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Some commercial and employer plans cover branded GLP-1. Check your formulary; a prior authorization and a
              BMI threshold usually apply.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-primary/30 bg-primary-light/30 p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
              <Stethoscope size={16} /> Cash telehealth
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              Works statewide, no insurance required. Compounded GLP-1 from about <strong>$69/month</strong> — the
              fastest, lowest-cost route for most {s.name} residents.
            </p>
          </div>
        </div>
      </section>

      {/* Cost table */}
      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
          <DollarSign size={20} className="text-primary" /> What GLP-1 costs in {s.name}
        </h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border">
          {COST_ROWS.map((row, i) => (
            <div
              key={row.label}
              className={`flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${i > 0 ? "border-t border-border" : ""} ${i % 2 === 0 ? "bg-background" : "bg-surface"}`}
            >
              <div>
                <p className="text-sm font-semibold text-foreground">{row.label}</p>
                <p className="text-xs text-muted">{row.note}</p>
              </div>
              <span className="shrink-0 font-serif text-lg font-semibold text-primary">{row.value}</span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted">
          Prices are provider-reported and change; compounded availability depends on FDA shortage status. Confirm
          current pricing before you buy.
        </p>
      </section>

      {/* Eligibility */}
      <section className="mt-10 rounded-2xl border border-border bg-surface p-6">
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
          <ShieldCheck size={16} className="text-primary" /> Who qualifies in {s.name}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          GLP-1 for weight management is generally for adults with a <strong>BMI of 30+</strong>, or <strong>27+ with a
          weight-related condition</strong> (high blood pressure, high cholesterol, sleep apnoea or type 2 diabetes).
          The criteria are the same in {s.name} as nationwide — a prescriber makes the final call.
        </p>
      </section>

      {/* How to start */}
      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
          <ListChecks size={20} className="text-primary" /> How to start in {s.name}
        </h2>
        <ol className="mt-4 space-y-3">
          {[
            `Check your coverage first — ${isCovered ? `${s.name} Medicaid may cover it, and some private plans do too.` : `${s.name} Medicaid doesn't cover weight-loss GLP-1, so check any private/employer plan, then consider the cash route.`}`,
            "Complete a short online health assessment with a licensed telehealth program.",
            "A prescriber reviews your history and, if appropriate, prescribes.",
            `A licensed pharmacy ships the medication to your door in ${s.name} — often within days.`,
            "Follow up as your dose is titrated up over the first weeks.",
          ].map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-white">{i + 1}</span>
              <span className="text-sm leading-relaxed text-foreground">{step}</span>
            </li>
          ))}
        </ol>
        <div className="mt-5 flex flex-wrap gap-3">
          {embody && (
            <a
              href={embody.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              See {embody.name} — from $69/mo <ArrowUpRight size={15} />
            </a>
          )}
          <Link
            href="/tools/glp1-provider-safety-check"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary"
          >
            Check a provider's safety
          </Link>
        </div>
      </section>

      {/* Medicare note */}
      <section className="mt-8 rounded-2xl border border-border bg-primary-light/40 p-5 text-sm leading-relaxed text-foreground">
        <strong>On Medicare?</strong> Federal Part D still excludes weight-loss drugs, but a temporary{" "}
        <Link href="/glp1-medicare-coverage" className="font-semibold text-primary underline">Medicare GLP-1 Bridge</Link>{" "}
        program (July 2026–Dec 2027) offers Wegovy, Zepbound or Foundayo for a $50 copay to eligible members — the same
        in {s.name} as everywhere.
      </section>

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">GLP-1 in {s.name}: common questions</h2>
        <div className="mt-4 space-y-3">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-border bg-surface p-4">
              <p className="font-semibold text-foreground">{f.q}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <MedicalSources keys={["kff-medicaid-glp1", "stateline-glp1-medicaid", "cdc-obesity-maps", "medicare-glp1-bridge"]} />

      {/* Nearby states */}
      <nav className="mt-10 border-t border-border pt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Other states</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {STATES.filter((x) => x.slug !== s.slug)
            .slice(0, 12)
            .map((x) => (
              <Link
                key={x.slug}
                href={`/glp1-by-state/${x.slug}`}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground hover:border-primary"
              >
                {x.name}
              </Link>
            ))}
          <Link href="/glp1-by-state" className="inline-flex items-center gap-1 rounded-full bg-primary-light px-3 py-1.5 text-sm font-semibold text-primary">
            All states <ArrowRight size={13} />
          </Link>
        </div>
      </nav>
    </div>
  );
}
