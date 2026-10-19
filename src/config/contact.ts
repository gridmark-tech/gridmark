import { siteConfig } from "./site";

export const SERVICE_OPTIONS = [
  { value: "business-websites", label: "Business Website" },
  { value: "digital-storefronts", label: "Digital Storefront / Product Catalogue" },
  { value: "social-media-branding", label: "Social Media Branding" },
  { value: "maintenance", label: "Ongoing Maintenance & Support" },
  { value: "other", label: "Other / Custom Consultation" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "tier-1", label: "Standard Starter Project" },
  { value: "tier-2", label: "Growth / Full Catalogue" },
  { value: "tier-3", label: "Custom Solution" },
  { value: "undecided", label: "To Be Discussed" },
] as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMessage = "Hello Gridmark, I would like to discuss a project for my business.";
  const text = encodeURIComponent(customMessage || defaultMessage);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
}
