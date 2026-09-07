import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// We explicitly welcome answer-engine / AI crawlers (AEO). Getting cited in
// ChatGPT, Perplexity, Google AI Overviews and Gemini answers is a primary
// channel for this site, so every major AI user-agent is allowed to read the
// content. Only /api is disallowed.
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "Bingbot",
  "cohere-ai",
  "Meta-ExternalAgent",
  "CCBot",
  "YouBot",
  "DuckAssistBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: "/", disallow: ["/api/"] })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
