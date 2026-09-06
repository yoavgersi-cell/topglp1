import type { Metadata } from "next";
import { AlertTriangle, Check } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProviderSafetyCheck } from "@/components/provider-safety-check";
import { MedicalSources } from "@/components/medical-sources";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "GLP-1 Provider Safety Check: Is Your Program Legit?",
  description:
    "Check whether a telehealth GLP-1 program meets basic safety standards — licensed prescribers, accredited pharmacies, LegitScript certification — plus the red flags to avoid.",
  path: "/tools/glp1-provider-safety-check",
});

const RED_FLAGS = [
  "Selling GLP-1 with no prescription or medical review",
  'Products labeled "research use only" or "not for human consumption"',
  "Unlabeled vials, no dosing instructions, or no clinician to contact",
  "No verifiable, state-licensed pharmacy behind the medication",
  "Prices that seem too good to be true with no accreditation",
  "Pressure to buy large quantities up front with no clinical follow-up",
];

const GREEN_FLAGS = [
  "A licensed prescriber reviews your medical history",
  "A state-licensed pharmacy fills the prescription (LegitScript certification is a strong sign)",
  "Clear, written dosing instructions and a way to reach a clinician",
  "Transparent about whether the medication is compounded or branded",
  "Honest medical screening that can turn you away if GLP-1 isn't safe for you",
];

export default function SafetyCheckPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Tools", path: "/tools" },
              { name: "Provider safety check", path: "/tools/glp1-provider-safety-check" },
            ]),
          ),
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools" },
          { name: "Provider safety check", path: "/tools/glp1-provider-safety-check" },
        ]}
      />

      <h1 className="font-serif text-4xl font-semibold text-foreground">GLP-1 provider safety check</h1>
      <p className="mt-3 text-lg leading-relaxed text-muted">
        The GLP-1 boom brought a wave of sketchy sellers, and in 2026 the FDA stepped up enforcement against unsafe
        operators. Before you hand over money or inject anything, check that a program clears the basics.
      </p>

      <div className="mt-8">
        <ProviderSafetyCheck />
      </div>

      {/* Red flags */}
      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
          <AlertTriangle size={20} className="text-accent" /> Red flags — walk away
        </h2>
        <ul className="mt-4 space-y-2">
          {RED_FLAGS.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-foreground">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-light text-accent">
                <AlertTriangle size={12} />
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Green flags */}
      <section className="mt-8">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
          <Check size={20} className="text-primary" /> Green flags — signs of a legitimate program
        </h2>
        <ul className="mt-4 space-y-2">
          {GREEN_FLAGS.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-foreground">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-white">
                <Check size={12} />
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="prose-body mt-8">
        <h2 className="font-serif text-2xl font-semibold text-foreground">How we assess safety</h2>
        <p>
          Our check looks at the factors regulators and pharmacy boards care about: whether a licensed prescriber is
          genuinely involved, whether a state-licensed and ideally LegitScript-certified pharmacy fills the medication,
          and whether the program is transparent about compounded vs branded products. It reflects provider-reported
          information — not an FDA audit — so always verify directly. The FDA has specifically warned about the risks of
          unapproved and improperly compounded GLP-1 products, including dosing errors and adverse events.
        </p>
      </section>

      <MedicalSources keys={["fda-unapproved-glp1", "fda-compounding-dosing", "fda-compounding-policy"]} />
    </div>
  );
}
