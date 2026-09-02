import type { MetadataRoute } from "next";
import { areas } from "@/lib/site";

const base = "https://advfredericoferreira.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = [
    { url: base, lastModified: now, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${base}/escritorio`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/contato`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/politica-de-privacidade`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const areaPages = areas.map((a) => ({
    url: `${base}/areas/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...areaPages];
}
