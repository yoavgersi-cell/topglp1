import { Info } from "lucide-react";

// Compact inline medical-disclaimer banner. Shown at the top of medication and
// guide pages to reinforce E-E-A-T and set expectations honestly.
export function MedicalDisclaimer({
  className = "",
  body,
}: {
  className?: string;
  /** Override the body text (e.g. a medicine-free version for UK pages). */
  body?: string;
}) {
  return (
    <div
      className={`flex items-start gap-3 rounded-xl border border-border bg-primary-light/60 px-4 py-3 text-sm text-foreground ${className}`}
    >
      <Info size={18} className="mt-0.5 shrink-0 text-primary" />
      <p className="leading-relaxed">
        <strong>Educational, not medical advice.</strong>{" "}
        {body ??
          "This page explains GLP-1 medications in general terms. Only a licensed clinician who knows your history can decide what's right for you."}
      </p>
    </div>
  );
}
