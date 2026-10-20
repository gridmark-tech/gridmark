import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "GRIDMARK",
  tagline: "Digital experiences. Built for business.",
  description:
    "Gridmark helps businesses turn products, services, and expertise into professional online experiences that make them easier to discover, understand, and contact.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gridmark.tech",
  proposedDomain: "gridmark.tech",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@gridmark.tech",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2349075340889",
    whatsappDisplay: "+234 907 534 0889",
    location: "Lagos, Nigeria",
  },
};
