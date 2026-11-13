import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://musclemonk.in";

  const staticRoutes = [
    "",
    "/about",
    "/pricing",
    "/pricing/basic",
    "/pricing/pro",
    "/pricing/elite",
    "/services",
    "/services/strength-training",
    "/services/cardio-fitness",
    "/services/personal-training",
    "/services/flexibility-mobility",
    "/services/nutrition-planning",
    "/services/group-classes",
    "/gallery",
    "/contact",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
