import { getTrendingNovels } from "@/actions/trending-novels";
import { siteConfig } from "@/lib/metadata";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/trending`,
      lastModified: new Date(),
      changeFrequency: "hourly" as const,
      priority: 0.8,
    },
  ];

  // Dynamic novel pages
  try {
    const trendingNovels = await getTrendingNovels(100); // Get top 100 for sitemap
    const novelPages = trendingNovels.map((novel) => ({
      url: `${baseUrl}${novel.link}`,
      lastModified: new Date(novel.lastSearched),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

    return [...staticPages, ...novelPages];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return staticPages;
  }
}
