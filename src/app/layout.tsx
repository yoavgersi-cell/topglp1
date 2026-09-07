import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SITE } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "GLP-1",
    "GLP-1 medications",
    "semaglutide",
    "tirzepatide",
    "retatrutide",
    "Wegovy",
    "Zepbound",
    "Ozempic",
    "Mounjaro",
    "compounded GLP-1",
    "GLP-1 side effects",
    "GLP-1 cost",
  ],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  alternates: { canonical: SITE.url },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "content-language": "en-US",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F8670",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${inter.variable} ${newsreader.variable} h-full`}>
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
