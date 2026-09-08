import type { MetadataRoute } from "next";
import { MEDICATIONS } from "@/data/medications";
import { GUIDES } from "@/data/guides";
import { allBattleSlugs } from "@/data/battle-engine";
import { PROVIDERS } from "@/data/providers";
import { MED_COMPARISONS } from "@/data/med-comparisons";
import { STATES } from "@/data/states";
import { SITE } from "@/lib/site";
import { CONTENT_REVIEWED } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_REVIEWED);
  const base = SITE.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/medications`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/guides`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/best-glp1-providers`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/reviews`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/compare`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/vs`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/cheapest-glp1`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/semaglutide-online`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/tirzepatide-online`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/cheapest-tirzepatide`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/tools`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tools/glp1-cost-calculator`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/tools/am-i-eligible-for-glp1`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tools/glp1-provider-safety-check`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/find-your-match`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/glp1-answers`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/glp1-statistics`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/glp1-glossary`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/glp1-by-state`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/glp1-medicare-coverage`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/uk`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/uk/nhs-weight-loss-treatment`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/uk/buying-weight-loss-treatment-safely`, lastModified, changeFrequency: "weekly", priority: 0.75 },
    { url: `${base}/how-we-review`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/disclaimer`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified, changeFrequency: "monthly", priority: 0.2 },
  ];

  const medPages: MetadataRoute.Sitemap = MEDICATIONS.map((m) => ({
    url: `${base}/medications/${m.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const guidePages: MetadataRoute.Sitemap = GUIDES.map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const battlePages: MetadataRoute.Sitemap = allBattleSlugs().map((slug) => ({
    url: `${base}/compare/${slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const reviewPages: MetadataRoute.Sitemap = PROVIDERS.map((p) => ({
    url: `${base}/reviews/${p.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const medComparePages: MetadataRoute.Sitemap = MED_COMPARISONS.map((c) => ({
    url: `${base}/vs/${c.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const statePages: MetadataRoute.Sitemap = STATES.map((s) => ({
    url: `${base}/glp1-by-state/${s.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...medPages,
    ...guidePages,
    ...battlePages,
    ...reviewPages,
    ...medComparePages,
    ...statePages,
  ];
}
