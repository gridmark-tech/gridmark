import type { SiteConfig } from "@/types";

const rawSiteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
  "https://gridmark.tech"
).split(",")[0].trim();

const siteUrl = rawSiteUrl.startsWith("http") ? rawSiteUrl : `https://${rawSiteUrl}`;

const rawPhone =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
  process.env.NEXT_PUBLIC_PHONE_NUMBER ||
  "2349075340889";

const cleanedPhone = rawPhone.replace(/\D/g, "");

function formatPhoneDisplay(num: string): string {
  const digits = num.replace(/\D/g, "");
  if (digits.startsWith("234") && digits.length === 13) {
    return `+${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`;
  }
  if (num.startsWith("+")) return num;
  return `+${num}`;
}

const phoneDisplay =
  process.env.NEXT_PUBLIC_PHONE_DISPLAY ||
  process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY ||
  formatPhoneDisplay(cleanedPhone || rawPhone);

export const siteConfig: SiteConfig = {
  name: "GRIDMARK",
  tagline: "Digital experiences. Built for business.",
  description:
    "Gridmark helps businesses turn products, services, and expertise into professional online experiences that make them easier to discover, understand, and contact.",
  url: siteUrl,
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@gridmark.tech",
    phone: phoneDisplay,
    whatsappNumber: cleanedPhone || "2349075340889",
    whatsappDisplay: phoneDisplay,
    location: "Lagos, Nigeria",
  },
};
