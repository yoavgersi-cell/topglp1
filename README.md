# TopGLP1

The independent, education-first guide to GLP-1 medications — [topglp1.io](https://www.topglp1.io).

TopGLP1 is a standalone Next.js content site focused specifically on GLP-1 drugs
(semaglutide, tirzepatide, retatrutide, liraglutide and compounded options): how
they work, dosing, side effects, results, cost, and how to access treatment
safely. It is deliberately separate from any sister property — its own brand,
design, structure and independently-authored content.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS 4**
- Vercel Analytics + Speed Insights

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/                     App Router pages
    page.tsx               Homepage (authority hub)
    medications/           Medication library (index + [slug] deep-dives)
    guides/                Educational guides (index + [slug])
    best-glp1-providers/   Ranked telehealth programs
    about | disclaimer | privacy
    sitemap.ts | robots.ts | llms.txt | opengraph-image.tsx
  components/              Shared UI (header, footer, cards, FAQ, etc.)
  data/                    Content as typed data
    medications.ts         GLP-1 drug reference
    guides.ts              Long-form guides
    providers.ts           Affiliate telehealth programs
  lib/                     site config, SEO helpers, utils
```

## Content model

All content is authored as typed data in `src/data/*` and rendered by shared
page components. To add a medication or guide, add an entry to the relevant
data file — routes, sitemap and internal links pick it up automatically.

## Editorial

Content is general educational information, **not medical advice**. See
`/disclaimer`. Affiliate relationships fund the site and never change the
medication guidance or provider rankings.
