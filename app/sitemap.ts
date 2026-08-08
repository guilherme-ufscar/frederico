import type { MetadataRoute } from "next";
import { areas } from "@/lib/site";

const base = "https://advfredericoferreira.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: base, changeFrequency: "monthly" as const, priority: 1 },
    { url: `${base}/escritorio`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/contato`, changeFrequency: "monthly" as const, priority: 0.9 },
  ];

  const areaPages = areas.map((a) => ({
    url: `${base}/areas/${a.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...areaPages];
}
