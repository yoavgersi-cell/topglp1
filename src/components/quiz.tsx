"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, RotateCcw, Trophy } from "lucide-react";
import { PROVIDERS, type Provider } from "@/data/providers";
import { bestForTag } from "@/data/rankings";

interface Question {
  id: string;
  title: string;
  options: { value: string; label: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: "budget",
    title: "What's your budget?",
    options: [
      { value: "lowest", label: "The lowest price possible" },
      { value: "under150", label: "Under ~$150/month" },
      { value: "insurance", label: "I'd like insurance to cover it" },
      { value: "flexible", label: "Cost isn't my main concern" },
    ],
  },
  {
    id: "medication",
    title: "Which medication are you leaning toward?",
    options: [
      { value: "semaglutide", label: "Semaglutide (Wegovy/Ozempic's molecule)" },
      { value: "tirzepatide", label: "Tirzepatide (stronger, Zepbound's molecule)" },
      { value: "brand", label: "Brand-name specifically" },
      { value: "notsure", label: "Not sure yet" },
    ],
  },
  {
    id: "insurance",
    title: "What's your insurance situation?",
    options: [
      { value: "cash", label: "No coverage — paying cash" },
      { value: "covers", label: "My plan likely covers GLP-1" },
      { value: "notsure", label: "Not sure" },
    ],
  },
  {
    id: "priority",
    title: "What matters most to you?",
    options: [
      { value: "price", label: "Lowest price" },
      { value: "shipping", label: "Fast shipping" },
      { value: "support", label: "Coaching & clinical support" },
      { value: "brand", label: "FDA-approved brand-name" },
    ],
  },
  {
    id: "commitment",
    title: "How do you feel about commitment?",
    options: [
      { value: "monthly", label: "Month-to-month only" },
      { value: "prepay", label: "OK to prepay for a lower rate" },
    ],
  },
  {
    id: "extras",
    title: "Do you want anything beyond the medication?",
    options: [
      { value: "justmeds", label: "Just the medication" },
      { value: "coaching", label: "Behavior coaching" },
      { value: "longevity", label: "Longevity / wellness add-ons" },
    ],
  },
  {
    id: "format",
    title: "Injection or pill?",
    options: [
      { value: "injection", label: "Injection is fine" },
      { value: "pill", label: "I'd prefer a pill" },
      { value: "nopref", label: "No preference" },
    ],
  },
];

const priceNum = (s: string) => {
  const m = s.match(/\$(\d[\d,]*)/);
  return m ? Number(m[1].replace(/,/g, "")) : 999;
};
const has = (p: Provider, kw: string) =>
  (p.specs.shipping + p.specs.insurance + p.specs.offeringType).toLowerCase().includes(kw);
const COACHING = new Set(["noom", "found", "calibrate", "sequence", "trimrx", "synergyrx"]);
const FAST_SHIP = new Set(["embody", "healthrx", "directmeds", "sprout"]);
const PREPAY = new Set(["healthrx", "calibrate"]);

function score(p: Provider, a: Record<string, string>): number {
  let s = p.rating;
  const sema = priceNum(p.specs.semaglutide);
  const branded = p.specs.offeringType === "Branded" || p.specs.offeringType === "Both";
  const insured = p.specs.insurance.toLowerCase().includes("insurance");
  const cheap = Math.max(0, (300 - sema) / 80); // ~2.9 for $69, 0 for $300+

  if (a.budget === "lowest") s += cheap;
  if (a.budget === "under150") s += sema <= 150 ? 1.5 : -1;
  if (a.budget === "insurance") s += insured ? 2 : -0.5;

  if (a.medication === "tirzepatide") s += p.specs.tirzepatide.startsWith("—") ? -3 : 1;
  if (a.medication === "brand") s += branded ? 1.5 : -2.5;

  if (a.insurance === "cash") s += insured ? -0.5 : 1;
  if (a.insurance === "covers") s += insured ? 1.5 : -0.5;

  if (a.priority === "price") s += cheap;
  if (a.priority === "shipping") s += FAST_SHIP.has(p.id) ? 1.5 : -0.5;
  if (a.priority === "support") s += COACHING.has(p.id) ? 1.8 : -0.3;
  if (a.priority === "brand") s += branded ? 1.5 : -1.5;

  if (a.commitment === "monthly") s += PREPAY.has(p.id) ? -1.5 : 0.3;
  if (a.commitment === "prepay") s += PREPAY.has(p.id) ? 0.8 : 0;

  if (a.extras === "justmeds") s += p.specs.offeringType === "Compounded" && !COACHING.has(p.id) ? 1 : 0;
  if (a.extras === "coaching") s += COACHING.has(p.id) ? 1.8 : -0.5;
  if (a.extras === "longevity") s += p.id === "wellmedr" ? 2.5 : -0.2;

  if (a.format === "brand" && !branded) s -= 0.3;
  void has;
  return s;
}

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const done = step >= QUESTIONS.length;

  const choose = (qid: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
    setStep((s) => s + 1);
  };

  const ranked = [...PROVIDERS].sort((a, b) => score(b, answers) - score(a, answers));
  const top = ranked[0];
  const alts = ranked.slice(1, 3);

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-6">
        <div className="rounded-2xl border-2 border-primary bg-primary-light/50 p-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            <Trophy size={14} /> Your best match
          </span>
          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="relative h-9 w-32">
              <Image src={top.logo} alt={`${top.name} logo`} fill className="object-contain object-left" sizes="128px" />
            </div>
            <span className="text-lg font-bold text-primary">{top.rating.toFixed(1)}/10</span>
          </div>
          <p className="mt-2 text-sm text-muted">
            <strong className="text-foreground">Best for:</strong> {bestForTag(top.id)}. {top.specs.standout}.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={top.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              Visit {top.name} <ArrowUpRight size={15} />
            </a>
            <Link href={`/reviews/${top.slug}`} className="text-sm font-semibold text-primary hover:underline">
              Read the full review
            </Link>
          </div>
        </div>

        <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted">Also worth a look</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {alts.map((p) => (
            <Link
              key={p.id}
              href={`/reviews/${p.slug}`}
              className="group flex items-center justify-between rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary"
            >
              <div>
                <div className="relative h-6 w-20">
                  <Image src={p.logo} alt={`${p.name} logo`} fill className="object-contain object-left" sizes="80px" />
                </div>
                <p className="mt-1 text-xs text-muted">Best for: {bestForTag(p.id)}</p>
              </div>
              <span className="text-sm font-bold text-primary">{p.rating.toFixed(1)}</span>
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            setAnswers({});
            setStep(0);
          }}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-primary"
        >
          <RotateCcw size={14} /> Retake the quiz
        </button>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          This match is a starting point based on your answers, not medical advice. Only a licensed clinician can
          decide what's right for you.
        </p>
      </div>
    );
  }

  const q = QUESTIONS[step];
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="flex items-center justify-between text-xs font-semibold text-muted">
        <span>
          Question {step + 1} of {QUESTIONS.length}
        </span>
        {step > 0 && (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="inline-flex items-center gap-1 hover:text-primary">
            <ArrowLeft size={13} /> Back
          </button>
        )}
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border">
        <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${(step / QUESTIONS.length) * 100}%` }} />
      </div>

      <h2 className="mt-5 font-serif text-2xl font-semibold text-foreground">{q.title}</h2>
      <div className="mt-4 grid gap-3">
        {q.options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => choose(q.id, o.value)}
            className="rounded-xl border border-border bg-background px-4 py-3.5 text-left text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary-light/40"
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
