import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, ShieldCheck, Scale, Activity, Calculator, ClipboardCheck, BookMarked } from "lucide-react";
import { MEDICATIONS } from "@/data/medications";
import { GUIDES } from "@/data/guides";
import { PROVIDERS, getProvider } from "@/data/providers";
import { BATTLES } from "@/data/battles";
import { allBattleSlugs } from "@/data/battle-engine";
import { MED_COMPARISONS } from "@/data/med-comparisons";
import { SITE, CONTENT_REVIEWED } from "@/lib/site";
import { ProviderCard } from "@/components/provider-card";
import { Faq } from "@/components/faq";

const FEATURED_GUIDES = [
  "how-glp1-medications-work",
  "glp1-side-effects-and-how-to-manage-them",
  "glp1-cost-and-insurance",
  "glp1-results-timeline",
];

export default function HomePage() {
  const featuredMeds = MEDICATIONS.filter((m) => m.slug !== "compounded-glp1").slice(0, 4);
  const guides = FEATURED_GUIDES.map((s) => GUIDES.find((g) => g.slug === s)!).filter(Boolean);
  const topProviders = [...PROVIDERS].sort((x, y) => x.rank - y.rank).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-primary-light/70 to-background">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            {/* Left: mission */}
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface px-3 py-1 text-xs font-semibold text-primary">
                <ShieldCheck size={14} /> Independent · Education-first · US-focused
              </span>
              <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl">
                The clear, honest guide to <span className="text-primary">GLP-1 medications</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Semaglutide, tirzepatide, retatrutide — what they are, how they work, what
                they cost, and how to get treatment safely. No hype, no jargon, no pressure.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/medications"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Explore the medications <ArrowRight size={16} />
                </Link>
                <Link
                  href="/best-glp1-providers"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary"
                >
                  Compare GLP-1 programs
                </Link>
              </div>
            </div>

            {/* Right: credibility panel */}
            <div className="animate-fade-up rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_3px_rgba(20,33,31,0.05)] sm:p-7">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted">
                <BookMarked size={15} className="text-primary" /> The independent GLP-1 desk
              </div>
              <dl className="mt-5 grid grid-cols-3 gap-4 text-center">
                {[
                  { n: PROVIDERS.length, l: "programs scored" },
                  { n: `${Math.floor(allBattleSlugs().length / 10) * 10}+`, l: "head-to-head comparisons" },
                  { n: GUIDES.length + MEDICATIONS.length, l: "guides & explainers" },
                ].map((s) => (
                  <div key={s.l}>
                    <dt className="font-serif text-3xl font-semibold text-primary">{s.n}</dt>
                    <dd className="mt-1 text-xs leading-snug text-muted">{s.l}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                {[
                  "Every clinical figure cited to NEJM & the FDA",
                  "Independent — our rankings aren't for sale",
                  "Written by people, reviewed against primary sources",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-foreground">
                    <ShieldCheck size={16} className="mt-0.5 shrink-0 text-primary" /> {t}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted">Last reviewed {CONTENT_REVIEWED} · {SITE.team}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Savings hook */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">At the pharmacy</p>
              <p className="font-serif text-3xl font-semibold text-muted line-through decoration-accent/60">$1,349/mo</p>
            </div>
            <ArrowRight size={28} className="shrink-0 text-primary" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Cheapest verified online</p>
              <p className="font-serif text-4xl font-semibold text-foreground">
                from $69<span className="text-lg font-normal text-muted">/mo</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/find-your-match"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              Find your match in 7 questions <ArrowRight size={16} />
            </Link>
            <Link href="/cheapest-glp1" className="text-sm font-semibold text-primary hover:underline">
              See cheapest options
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: BookOpen, title: "Science first", body: "We lead with how the drugs actually work — mechanism, dosing and evidence before any recommendation." },
            { icon: Scale, title: "Straight about cost", body: "Branded list prices, compounded pricing, and how insurance really behaves for weight loss vs diabetes." },
            { icon: Activity, title: "Honest about risk", body: "Real side effects, real warning signs, and who shouldn't take these medications." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-surface p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-light text-primary">
                <v.icon size={20} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Medications */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground">The GLP-1 medications</h2>
            <p className="mt-2 text-muted">Deep-dives on each drug — brands, dosing, results, side effects and cost.</p>
          </div>
          <Link href="/medications" className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary sm:inline-flex">
            View all <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {featuredMeds.map((med) => (
            <Link
              key={med.slug}
              href={`/medications/${med.slug}`}
              className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: med.accent }}
                />
                <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {med.statusLabel}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-foreground">
                {med.name}
                <span className="ml-2 text-sm font-normal text-muted">
                  {med.brandNames.slice(0, 2).join(", ")}
                </span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{med.oneLiner}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read the guide <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Drug comparisons */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground">Which drug is right for you?</h2>
            <p className="mt-2 text-muted">Cited head-to-head comparisons of the medications themselves.</p>
          </div>
          <Link href="/vs" className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary sm:inline-flex">
            All drug comparisons <ArrowRight size={15} />
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {MED_COMPARISONS.map((c) => (
            <Link
              key={c.slug}
              href={`/vs/${c.slug}`}
              className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary"
            >
              {c.title} <ArrowRight size={13} className="text-primary" />
            </Link>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-serif text-3xl font-semibold text-foreground">Start with the essentials</h2>
          <p className="mt-2 text-muted">The questions almost everyone has before and during treatment.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">{g.category}</span>
                <h3 className="mt-2 flex-1 font-semibold leading-snug text-foreground">{g.title}</h3>
                <span className="mt-3 text-xs text-muted">{g.readTime}</span>
              </Link>
            ))}
          </div>
          <Link href="/guides" className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Browse all guides <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Tools */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-serif text-3xl font-semibold text-foreground">Free tools, no signup</h2>
          <p className="mt-2 text-muted">Answer the two questions everyone has before starting.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/tools/glp1-cost-calculator"
              className="group flex items-start gap-4 rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-light text-primary">
                <Calculator size={22} />
              </span>
              <div>
                <h3 className="font-bold text-foreground">GLP-1 Cost Calculator</h3>
                <p className="mt-1 text-sm text-muted">Estimate what you'll actually pay — cash, insured, or compounded.</p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Calculate <ArrowRight size={14} />
                </span>
              </div>
            </Link>
            <Link
              href="/tools/am-i-eligible-for-glp1"
              className="group flex items-start gap-4 rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-light text-primary">
                <ClipboardCheck size={22} />
              </span>
              <div>
                <h3 className="font-bold text-foreground">Am I Eligible? (BMI Checker)</h3>
                <p className="mt-1 text-sm text-muted">See if you likely meet the clinical criteria in 30 seconds.</p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Check now <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground">Head-to-head comparisons</h2>
            <p className="mt-2 max-w-2xl text-muted">
              No scoreboard — we match each program to your priority (price, brand access, shipping, coaching).
            </p>
          </div>
          <Link href="/compare" className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary sm:inline-flex">
            All comparisons <ArrowRight size={15} />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {BATTLES.slice(0, 4).map((b) => {
            const a = getProvider(b.a);
            const bp = getProvider(b.b);
            if (!a || !bp) return null;
            return (
              <Link
                key={b.slug}
                href={`/compare/${b.slug}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary"
              >
                <div>
                  <h3 className="font-bold text-foreground">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted">{b.description}</p>
                </div>
                <ArrowRight size={16} className="shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Providers teaser */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground">Where to get GLP-1 treatment</h2>
            <p className="mt-2 max-w-2xl text-muted">
              If you've decided to pursue treatment, these are the telehealth programs we rate highest for
              GLP-1 access, pricing and clinical support.
            </p>
          </div>
          <Link href="/best-glp1-providers" className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary sm:inline-flex">
            Full ranking <ArrowRight size={15} />
          </Link>
        </div>
        <div className="mt-8 space-y-4">
          {topProviders.map((p) => (
            <ProviderCard key={p.id} provider={p} />
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/best-glp1-providers"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary"
          >
            See all {PROVIDERS.length} programs, ranked <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      {/* Find your GLP-1 path */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-serif text-3xl font-semibold text-foreground">Find your GLP-1 path</h2>
          <p className="mt-2 text-muted">Jump straight to what you're looking for.</p>
          <div className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {[
              { href: "/best-glp1-providers", title: "Best GLP-1 program for your situation", note: "All 21 programs scored and ranked" },
              { href: "/cheapest-glp1", title: "Cheapest GLP-1 without insurance", note: "Every program ranked by price" },
              { href: "/semaglutide-online", title: "Semaglutide online, compared", note: "Compounded & brand, from $69/mo" },
              { href: "/tirzepatide-online", title: "Tirzepatide online, compared", note: "The stronger molecule, from $119/mo" },
              { href: "/compare", title: "Compare any two programs", note: "Side-by-side on price, meds & credentials" },
              { href: "/vs", title: "Which drug is right for you?", note: "Ozempic vs Wegovy, and more" },
              { href: "/glp1-by-state", title: "GLP-1 coverage by your state", note: "Medicaid status for all 50 states" },
              { href: "/glp1-medicare-coverage", title: "Medicare GLP-1 coverage", note: "Part D, the $50 Bridge program & more" },
              { href: "/guides/glp1-side-effects-and-how-to-manage-them", title: "GLP-1 safety & side effects", note: "FDA warnings and what to watch" },
              { href: "/tools", title: "Free tools", note: "Cost calculator, eligibility & safety check" },
              { href: "/reviews", title: "All GLP-1 provider reviews", note: "Independent, methodology-scored" },
              { href: "/glp1-answers", title: "GLP-1 quick answers", note: "Direct, cited answers to the top questions" },
              { href: "/glp1-statistics", title: "GLP-1 statistics & facts", note: "Cited weight-loss, cost & coverage data" },
              { href: "/find-your-match", title: "Take the 2-minute match quiz", note: "Your best-fit program in 7 questions" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="group flex items-start justify-between gap-3 border-b border-border pb-4">
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary">{l.title}</p>
                  <p className="mt-0.5 text-sm text-muted">{l.note}</p>
                </div>
                <ArrowRight size={16} className="mt-1 shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl font-semibold text-foreground">Questions readers ask most</h2>
          <Link href="/glp1-answers" className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary sm:inline-flex">
            All quick answers <ArrowRight size={15} />
          </Link>
        </div>
        <div className="mt-6">
          <Faq
            items={[
              { q: "What is the cheapest GLP-1 program in 2026?", a: "Compounded semaglutide is the cheapest route — our top pick Embody offers it at a flat $69/month, versus $1,000+/month for branded at the pharmacy. See our cheapest-GLP-1 ranking for the full list." },
              { q: "Which GLP-1 medication works best for weight loss?", a: "In trials, tirzepatide (Zepbound) produced the most average weight loss (~15–21%), edging semaglutide (Wegovy, ~15%). A head-to-head trial, SURMOUNT-5, confirmed tirzepatide's average advantage. Both are highly effective." },
              { q: "Do I qualify for GLP-1 weight-loss medication?", a: "Prescribers generally use a BMI of 30+, or 27+ with a weight-related condition (like high blood pressure or type 2 diabetes). Try our free eligibility checker for an instant estimate — a clinician makes the final call." },
              { q: "What's the difference between brand-name and compounded GLP-1?", a: "Same active molecule; different manufacturing and oversight. Branded (Wegovy, Zepbound) is FDA-approved and expensive; compounded is pharmacy-prepared, far cheaper, and not FDA-approved as a finished product — so a legitimate, accredited pharmacy matters." },
              { q: "Will Medicare cover GLP-1 medications?", a: "Medicare has historically not covered GLP-1 drugs for weight loss alone, though coverage for diabetes and certain cardiovascular indications exists and policy is evolving. Always confirm your specific plan's formulary." },
              { q: "Can I get GLP-1 as a pill instead of an injection?", a: "Oral options exist (like Rybelsus, and newer oral GLP-1s in development), but the most effective GLP-1 treatments are still weekly injections. Most telehealth programs focus on injectable compounded semaglutide and tirzepatide." },
            ]}
          />
        </div>
      </section>

      {/* Editorial note */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-2xl border border-border bg-primary-light/40 p-8">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Why trust {SITE.name}?</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">
            {SITE.name} exists to be the clearest GLP-1 explainer on the web. We're upfront that
            we earn affiliate commissions from some providers — but our medication guides are
            written to inform, not to sell, and we'll happily tell you when a drug isn't right,
            when a product isn't legal, or when the honest answer is "talk to your doctor."
          </p>
          <Link href="/about" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Read our editorial approach <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
