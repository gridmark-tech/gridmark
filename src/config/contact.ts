import { siteConfig } from "./site";

export interface ScopeTierDetail {
  value: string;
  label: string;
  badge: string;
  description: string;
  timeline: string;
  summary: string;
  deliverables: string[];
}

export const SERVICE_OPTIONS = [
  {
    value: "digital-storefronts",
    label: "Digital Storefront & Product Catalogue",
    badge: "Core Service",
    description: "Sub-second catalogue with 1-tap WhatsApp checkout for retailers and gadget merchants.",
  },
  {
    value: "business-websites",
    label: "Executive Business Website",
    badge: "Core Service",
    description: "High-trust corporate website designed to convert qualified corporate and advisory clients.",
  },
  {
    value: "social-media-branding",
    label: "Social Media & Brand Identity",
    badge: "Add-On",
    description: "Cohesive visual identity, typography standards, and commercial marketing assets.",
  },
  {
    value: "maintenance",
    label: "Ongoing Maintenance & Support",
    badge: "Retainer",
    description: "Continuous speed audits, security updates, uptime monitoring, and catalogue sync.",
  },
  {
    value: "other",
    label: "Custom Consultation / Other",
    badge: "Bespoke",
    description: "Custom web applications, bulk dealer portals, or bespoke enterprise systems.",
  },
] as const;

export const BUDGET_TIER_DETAILS: Record<string, ScopeTierDetail> = {
  "tier-1": {
    value: "tier-1",
    label: "Starter Business Website (1–5 Pages)",
    badge: "7–10 Days",
    description: "Authority web presence with custom domain, local SEO, and WhatsApp lead capture.",
    timeline: "7–10 Business Days",
    summary:
      "Engineered for established service businesses, consultancies, and corporate firms replacing social link trees with a credible, search-indexed web presence.",
    deliverables: [
      "1–5 Custom Optimized Pages",
      "Executive Trust Presentation",
      "Direct WhatsApp Lead Routing",
      "Sub-Second Mobile 4G Speed",
      "Google Search Console Indexing",
    ],
  },
  "tier-2": {
    value: "tier-2",
    label: "Digital Storefront & Live Catalogue",
    badge: "7–10 Days · Popular",
    description: "Instant-loading product catalogue with live stock badges and 1-tap WhatsApp checkout.",
    timeline: "7–10 Business Days",
    summary:
      "Engineered for electronics retailers, phone shops, and commercial stores in Lagos selling high-velocity products through WhatsApp.",
    deliverables: [
      "Filterable Product Catalogue",
      "1-Tap Pre-filled WhatsApp Orders",
      "Live Stock & Showroom Badges",
      "0.03s Sub-Second Mobile Speed",
      "Zero Platform Transaction Fees",
    ],
  },
  "tier-3": {
    value: "tier-3",
    label: "Wholesale & Volume Enterprise",
    badge: "10–14 Days",
    description: "Wholesale ordering hub with carton margin calculators, dealer reorders, and stock sync.",
    timeline: "10–14 Business Days",
    summary:
      "Tailored for gadget importers, Computer Village bulk distributors, and multi-location merchants who need structured dealer ordering.",
    deliverables: [
      "Carton Rate & Volume Calculator",
      "Dealer Fast Reorder Portal",
      "Multi-Location Hub Stock Allocation",
      "Custom Admin Data Integration",
      "Priority Engineering Support",
    ],
  },
  "undecided": {
    value: "undecided",
    label: "Custom Scope / To Be Discussed",
    badge: "Discovery",
    description: "Unsure of exact specifications? We assess your workflow and recommend the exact architecture.",
    timeline: "Flexible",
    summary:
      "Ideal if you have unique integrations, multiple business units, or want an expert consultation before finalizing scope.",
    deliverables: [
      "Requirement Discovery Call",
      "Workflow Bottleneck Analysis",
      "Tailored Architecture Plan",
      "Transparent Fixed Quote",
    ],
  },
};

export const BUDGET_OPTIONS = [
  {
    value: "tier-1",
    label: "Starter Business Website (1–5 Pages)",
    badge: "7–10 Days",
    description: "Authority website for corporate services, consultancies, and law firms.",
  },
  {
    value: "tier-2",
    label: "Digital Storefront & Live Catalogue",
    badge: "7–10 Days · Popular",
    description: "Instant product catalogue with 1-tap WhatsApp checkout for retailers.",
  },
  {
    value: "tier-3",
    label: "Wholesale & Volume Enterprise",
    badge: "10–14 Days",
    description: "Bulk ordering portal with carton rate calculators and dealer workflows.",
  },
  {
    value: "undecided",
    label: "Custom Scope / To Be Discussed",
    badge: "Discovery",
    description: "Discuss requirements with our engineering team for a custom quote.",
  },
] as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMessage = "Hello Gridmark, I would like to discuss a project for my business.";
  const text = encodeURIComponent(customMessage || defaultMessage);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
}
