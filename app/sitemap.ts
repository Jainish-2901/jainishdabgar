import { MetadataRoute } from "next";

const BASE_URL = "https://jainishdabgar.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/archive`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/achievements`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}