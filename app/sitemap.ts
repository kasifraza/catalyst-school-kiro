import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/academics",
    "/admissions",
    "/contact",
    "/gallery",
    "/mandatory-public-disclosure",
    "/notices",
    "/admissions/fee-structure",
    "/academics/results",
    "/faculty",
    "/achievements",
    "/alumni",
    "/policies/anti-ragging",
    "/policies/grievance",
    "/policies/privacy",
    "/blog",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
