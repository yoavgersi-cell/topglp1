"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, AlertTriangle } from "lucide-react";

const CONDITIONS = [
  "Type 2 diabetes or prediabetes",
  "High blood pressure",
  "High cholesterol",
  "Obstructive sleep apnea",
  "Heart disease",
  "Fatty liver disease (MASLD/NAFLD)",
];

export function EligibilityChecker() {
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(8);
  const [weight, setWeight] = useState(200);
  const [conditions, setConditions] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  const totalInches = feet * 12 + inches;
  const bmi = totalInches > 0 ? (weight / (totalInches * totalInches)) * 703 : 0;
  const hasCondition = conditions.size > 0;

  // FDA-style criteria: BMI ≥ 30, or ≥ 27 with a weight-related condition.
  const likelyEligible = bmi >= 30 || (bmi >= 27 && hasCondition);
  const borderline = bmi >= 27 && bmi < 30 && !hasCondition;

  const toggle = (c: string) => {
    setConditions((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  };

  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <span className="text-sm font-semibold text-foreground">Height</span>
          <div className="mt-2 flex gap-2">
            <label className="flex-1">
              <select
                value={feet}
                onChange={(e) => setFeet(Number(e.target.value))}
                className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
                aria-label="Height feet"
              >
                {[4, 5, 6, 7].map((f) => (
                  <option key={f} value={f}>{f} ft</option>
                ))}
              </select>
            </label>
            <label className="flex-1">
              <select
                value={inches}
                onChange={(e) => setInches(Number(e.target.value))}
                className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
                aria-label="Height inches"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i}>{i} in</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <label className="block">
          <span className="text-sm font-semibold text-foreground">Weight (lbs)</span>
          <input
            type="number"
            value={weight}
            min={80}
            max={600}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
          />
        </label>

        <div className="flex items-end">
          <div className="w-full rounded-xl bg-primary-light/60 px-4 py-2.5 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Your BMI</p>
            <p className="font-serif text-2xl font-semibold text-foreground">{bmi ? bmi.toFixed(1) : "—"}</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <span className="text-sm font-semibold text-foreground">
          Any weight-related conditions? <span className="font-normal text-muted">(optional)</span>
        </span>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {CONDITIONS.map((c) => {
            const active = conditions.has(c);
            return (
              <button
                key={c}
                type="button"
                onClick={() => toggle(c)}
                className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-sm transition-colors ${
                  active ? "border-primary bg-primary-light/60 text-foreground" : "border-border bg-background text-muted"
                }`}
                aria-pressed={active}
              >
                <span
                  className={`grid h-4 w-4 shrink-0 place-items-center rounded border ${
                    active ? "border-primary bg-primary text-white" : "border-border"
                  }`}
                >
                  {active && <Check size={11} />}
                </span>
                {c}
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setSubmitted(true)}
        className="mt-5 w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark sm:w-auto sm:px-8"
      >
        Check my eligibility
      </button>

      {submitted && (
        <div className="mt-6 rounded-2xl border border-border bg-background p-5">
          {likelyEligible ? (
            <>
              <p className="flex items-center gap-2 font-serif text-xl font-semibold text-foreground">
                <Check size={20} className="text-primary" /> You likely meet the clinical criteria
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Based on a BMI of <strong>{bmi.toFixed(1)}</strong>
                {bmi >= 27 && bmi < 30 && hasCondition ? " plus a weight-related condition" : ""}, you likely meet the
                general FDA-style thresholds prescribers use (BMI ≥ 30, or ≥ 27 with a weight-related condition). Only a
                licensed clinician can confirm and prescribe.
              </p>
            </>
          ) : borderline ? (
            <>
              <p className="flex items-center gap-2 font-serif text-xl font-semibold text-foreground">
                <AlertTriangle size={20} className="text-accent" /> You may be borderline
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A BMI of <strong>{bmi.toFixed(1)}</strong> can qualify if you also have a weight-related condition. If you
                don't, you may fall just below the usual threshold — a clinician can assess your full picture.
              </p>
            </>
          ) : (
            <>
              <p className="flex items-center gap-2 font-serif text-xl font-semibold text-foreground">
                <AlertTriangle size={20} className="text-accent" /> You may not meet the usual threshold
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A BMI of <strong>{bmi.toFixed(1)}</strong> is below the typical cutoff (BMI ≥ 30, or ≥ 27 with a
                weight-related condition). This is a general guide only — talk to a clinician about what's right for you.
              </p>
            </>
          )}
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/best-glp1-providers"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              See GLP-1 programs
            </Link>
            <Link
              href="/guides/how-to-get-glp1-through-telehealth"
              className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary"
            >
              How to get treatment
            </Link>
          </div>
        </div>
      )}

      <p className="mt-4 text-xs leading-relaxed text-muted">
        This tool is educational and uses general, FDA-style BMI criteria. It is not a diagnosis or a prescription.
        Only a licensed clinician who knows your full history can determine whether GLP-1 treatment is appropriate.
      </p>
    </div>
  );
}
