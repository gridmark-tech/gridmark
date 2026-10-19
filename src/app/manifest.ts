import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gridmark — Digital Solutions for Business",
    short_name: "Gridmark",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F7F7F4",
    theme_color: "#171916",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
