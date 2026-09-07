"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Lightbulb } from "lucide-react";
import {
  MEDICATION_OPTIONS,
  estimateCost,
  type InsuranceStatus,
} from "@/data/cost-model";
import { getProvider } from "@/data/providers";

const EMBODY_URL = getProvider("embody")?.affiliateUrl ?? "#";

const INSURANCE_CHOICES: { value: InsuranceStatus; label: string }[] = [
  { value: "none", label: "No insurance / paying cash" },
  { value: "covers", label: "My plan covers GLP-1" },
  { value: "excludes", label: "My plan excludes weight-loss GLP-1" },
];

export function CostCalculator() {
  const [medId, setMedId] = useState(MEDICATION_OPTIONS[0].id);
  const [insurance, setInsurance] = useState<InsuranceStatus>("none");
  const [months, setMonths] = useState(6);

  const result = estimateCost(medId, insurance, months);
  const fmt = (n: number) => `$${n.toLocaleString()}`;

  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-foreground">Medication</span>
          <select
            value={medId}
            onChange={(e) => setMedId(e.target.value)}
            className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
          >
            {MEDICATION_OPTIONS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-foreground">Insurance</span>
          <select
            value={insurance}
            onChange={(e) => setInsurance(e.target.value as InsuranceStatus)}
            className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
          >
            {INSURANCE_CHOICES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">How long?</span>
          <span className="text-sm font-semibold text-primary">
            {months} {months === 1 ? "month" : "months"}
          </span>
        </div>
        <input
          type="range"
          min={1}
          max={12}
          value={months}
          onChange={(e) => setMonths(Number(e.target.value))}
          className="mt-2 w-full accent-primary"
          aria-label="Number of months"
        />
      </div>

      {/* Result */}
      <div className="mt-6 rounded-2xl bg-primary-light/60 p-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Estimated monthly</p>
            <p className="mt-1 font-serif text-3xl font-semibold text-foreground">{result.headline}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              {months}-month total
            </p>
            <p className="mt-1 text-lg font-bold text-foreground">
              {fmt(result.totalLow)}
              {result.totalLow !== result.totalHigh && <>–{fmt(result.totalHigh)}</>}
            </p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-foreground">{result.note}</p>
      </div>

      {result.showCompoundedTip && (
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent-light/40 p-4">
          <Lightbulb size={18} className="mt-0.5 shrink-0 text-accent" />
          <p className="text-sm leading-relaxed text-foreground">
            <strong>Big savings alert:</strong> a compounded version of the same molecule can cost a fraction of
            this. Our top pick,{" "}
            <a
              href={EMBODY_URL}
              target="_blank"
              className="inline-flex items-center gap-0.5 font-semibold text-primary underline"
              rel="sponsored nofollow noopener"
            >
              Embody
            </a>
            , runs $69/mo for semaglutide and $119/mo for tirzepatide, flat.{" "}
            <Link href="/best-glp1-providers" className="font-semibold text-primary underline">
              Compare programs
            </Link>
            .
          </p>
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={EMBODY_URL}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
        >
          See our #1 pick, Embody <ArrowUpRight size={15} />
        </a>
        <Link
          href="/cheapest-glp1"
          className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary"
        >
          Cheapest GLP-1 options
        </Link>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        Estimates for planning only, not quotes. Real prices vary by provider, pharmacy, plan and promotions,
        and change frequently. Always confirm current pricing with the provider.
      </p>
    </div>
  );
}
