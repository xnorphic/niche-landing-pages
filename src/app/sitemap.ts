import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteUrl();
  const routes = [
    "",
    "/doctors",
    "/interior",
    "/hvac",
    "/jewellery",
    "/gridrank",
    "/gridrank/privacy",
    "/gridrank/terms",
  ];

  return routes.map((route) => ({
    url: `${site}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
