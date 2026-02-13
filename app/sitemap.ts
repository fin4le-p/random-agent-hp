// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://random-agent.nakano6.com";

const LAST_MODIFIED = {
  home: new Date("2026-02-13"),
  roadmap: new Date("2026-02-13"),
  punish: new Date("2026-02-13"),
  privacy: new Date("2026-02-13"),
  terms: new Date("2026-02-13"),
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: LAST_MODIFIED.home,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/roadmap`,
      lastModified: LAST_MODIFIED.roadmap,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/punish`,
      lastModified: LAST_MODIFIED.punish,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: LAST_MODIFIED.privacy,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: LAST_MODIFIED.terms,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
