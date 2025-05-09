import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rallie.tennis/",
      lastModified: new Date(),
    },
    {
      url: "https://rallie.tennis/survey",
      lastModified: new Date(),
    },
    {
      url: "https://rallie.tennis/brand-story",
      lastModified: new Date(),
    },
    {
      url: "https://rallie.tennis/progress",
      lastModified: new Date(),
    },
  ]
}
