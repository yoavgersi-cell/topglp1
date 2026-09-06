"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, X, ShieldCheck, ArrowUpRight } from "lucide-react";
import { PROVIDERS } from "@/data/providers";

interface SafetyCheck {
  label: string;
  pass: boolean;
  detail: string;
}

function buildChecks(pharmacy: string, clinicians: string, offering: string, consult: string): SafetyCheck[] {
  const p = pharmacy.toLowerCase();
  const legitScript = p.includes("legitscript");
  const accredited = legitScript || p.includes("503a") || p.includes("licensed");
  const branded = offering === "Branded";
  return [
    {
      label: "Prescription required",
      pass: true,
      detail: `A licensed prescriber reviews your case (${consult.toLowerCase()}).`,
    },
    {
      label: "Licensed clinicians",
      pass: clinicians.toLowerCase().includes("licensed") || clinicians.toLowerCase().includes("board"),
      detail: clinicians,
    },
    {
      label: "Accredited / licensed pharmacy",
      pass: accredited || branded,
      detail: pharmacy,
    },
    {
      label: "LegitScript-certified (stated)",
      pass: legitScript,
      detail: legitScript
        ? "Publicly states LegitScript certification — a strong trust signal."
        : "LegitScript certification not explicitly stated; confirm directly.",
    },
    {
      label: branded ? "FDA-approved finished product" : "Transparent about compounding",
      pass: true,
      detail: branded
        ? "Dispenses FDA-approved branded medication."
        : "Uses compounded medication (not an FDA-approved finished product) — the pharmacy's legitimacy matters.",
    },
  ];
}

export function ProviderSafetyCheck() {
  const sorted = [...PROVIDERS].sort((a, b) => a.rank - b.rank);
  const [id, setId] = useState(sorted[0].id);
  const provider = sorted.find((p) => p.id === id) ?? sorted[0];

  const checks = buildChecks(
    provider.specs.pharmacy,
    provider.specs.clinicians,
    provider.specs.offeringType,
    provider.specs.consult,
  );
  const passCount = checks.filter((c) => c.pass).length;
  const signal = passCount >= 5 ? "Strong" : passCount >= 4 ? "Good" : "Check carefully";

  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <label className="block">
        <span className="text-sm font-semibold text-foreground">Choose a GLP-1 program</span>
        <select
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
        >
          {sorted.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </label>

      <div className="mt-6 flex items-center justify-between rounded-2xl bg-primary-light/60 p-5">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-24">
            <Image src={provider.logo} alt={`${provider.name} logo`} fill className="object-contain object-left" sizes="96px" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-right">
          <ShieldCheck size={20} className="text-primary" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Safety signal</p>
            <p className="font-serif text-xl font-semibold text-foreground">{signal}</p>
          </div>
        </div>
      </div>

      <ul className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border">
        {checks.map((c) => (
          <li key={c.label} className="flex items-start gap-3 p-4">
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                c.pass ? "bg-primary text-white" : "bg-accent-light text-accent"
              }`}
            >
              {c.pass ? <Check size={13} /> : <X size={13} />}
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{c.label}</p>
              <p className="text-sm text-muted">{c.detail}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={provider.affiliateUrl}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
        >
          Visit {provider.name} <ArrowUpRight size={15} />
        </a>
        <Link
          href={`/reviews/${provider.slug}`}
          className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary"
        >
          Full {provider.name} review
        </Link>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        This check reflects provider-reported information and general safety criteria — it is not an FDA audit or an
        endorsement. Always verify licensing and certification directly with the provider and your state board of
        pharmacy before enrolling.
      </p>
    </div>
  );
}
