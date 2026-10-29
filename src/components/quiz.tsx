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

// The quiz recommends only from our featured GLP-1 programs, in priority order.
const POOL_IDS = ["embody", "wellmedr", "eden"];

const QUESTIONS: Question[] = [
  {
    id: "budget",
    title: "What's your budget?",
    options: [
      { value: "lowest", label: "The lowest price possible" },
      { value: "under150", label: "Under ~$150/month is fine" },
      { value: "flexible", label: "Cost isn't my main concern" },
    ],
  },
  {
    id: "medication",
    title: "Which medication are you leaning toward?",
    options: [
      { value: "semaglutide", label: "Semaglutide (Wegovy/Ozempic's molecule)" },
      { value: "tirzepatide", label: "Tirzepatide (stronger, Zepbound's molecule)" },
      { value: "notsure", label: "Not sure yet" },
    ],
  },
  {
    id: "priority",
    title: "What matters most to you?",
    options: [
      { value: "price", label: "The lowest, cheapest price" },
      { value: "flat", label: "Flat, predictable pricing with no commitment" },
      { value: "support", label: "Responsive, 24/7 human support" },
      { value: "longevity", label: "Wellness & longevity add-ons (NAD+, B12)" },
    ],
  },
];

// Purpose-built scoring for the three featured programs: Embody (cheapest value),
// Eden (flat, no-commitment pricing + support) and wellmedr (support + longevity).
function score(p: Provider, a: Record<string, string>): number {
  let s = p.rating; // Embody 9.9 > Eden 9.3 > wellmedr 8.9 by default

  if (a.budget === "lowest") s += p.id === "embody" ? 2 : p.id === "eden" ? 0.5 : 0;
  if (a.budget === "flexible") s += p.id === "embody" ? 0 : 0.5;

  if (a.medication === "tirzepatide") s += p.id === "embody" ? 0.6 : 0.4; // all three offer it; Embody cheapest

  if (a.priority === "price") s += p.id === "embody" ? 2.5 : p.id === "eden" ? 0.5 : 0;
  if (a.priority === "flat") s += p.id === "eden" ? 2.5 : -0.5;
  if (a.priority === "support") s += p.id === "wellmedr" ? 2.5 : p.id === "eden" ? 1 : -0.5;
  if (a.priority === "longevity") s += p.id === "wellmedr" ? 3 : -0.5;

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

  const ranked = PROVIDERS.filter((p) => POOL_IDS.includes(p.id)).sort((a, b) => score(b, answers) - score(a, answers));
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
            {top.affiliateUrl !== "#" ? (
              <>
                <a
                  href={top.affiliateUrl}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="inline-flex items-center gap-1 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
                >
                  Visit {top.name} <ArrowUpRight size={15} />
                </a>
                <Link href={`/reviews/${top.slug}`} className="text-sm font-semibold text-primary hover:underline">
                  Read the full review
                </Link>
              </>
            ) : (
              <Link
                href={`/reviews/${top.slug}`}
                className="inline-flex items-center gap-1 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
              >
                See {top.name} details <ArrowUpRight size={15} />
              </Link>
            )}
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
