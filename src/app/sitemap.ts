import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/work", "/about", "/contact", "/privacy", "/terms"];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-10-19T00:00:00.000Z"),
    changeFrequency: route === "" || route === "/work" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/services" || route === "/work" ? 0.8 : 0.6,
  }));
}
