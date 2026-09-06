import type { MetadataRoute } from "next";
import { MEDICATIONS } from "@/data/medications";
import { GUIDES } from "@/data/guides";
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

  return [...staticPages, ...medPages, ...guidePages];
}
