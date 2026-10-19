import type { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "northstar-electronics",
    slug: "northstar-electronics",
    title: "Northstar Electronics",
    category: "Digital Storefront Concept",
    clientType: "Electronics & Computer Retailer (Concept)",
    status: "Concept project",
    summary:
      "A demonstration storefront exploring how a Lagos electronics retailer can organize product categories, present technical specifications, and convert browsing into direct WhatsApp enquiries.",
    description:
      "Many computer and electronics retailers in Computer Village and across Lagos operate active physical stores and take orders through WhatsApp, but lack an organized central catalogue. Northstar Electronics demonstrates how a modern, lightning-fast digital storefront solves this: structured product categories, high-resolution device photos, explicit hardware specs, advertised prices, and one-tap WhatsApp stock checks.",
    objectives: [
      "Eliminate repetitive customer questions about specs and pricing",
      "Organize laptops, monitors, smartphones, and accessories into clear categories",
      "Streamline customer inquiries directly into WhatsApp with prefilled model info",
      "Load instantaneously on mobile connections without heavy app bloat",
    ],
    keyDecisions: [
      "Lightweight catalogue architecture rather than heavy multi-vendor e-commerce",
      "High-contrast specification tables highlighting CPU, RAM, GPU, storage, and warranty",
      "Prominent 'Enquire on WhatsApp' action on every product card and detail modal",
      "Single-hand mobile navigation with sticky bottom action controls",
    ],
    features: [
      "Interactive category filtering (Laptops, Desktops, Displays, Gadgets)",
      "Instant specification sheet preview with condition tags (Brand New, Open Box)",
      "Direct WhatsApp enquiry integration with pre-filled product details",
      "Stock availability badges (In Stock Ikeja, Available on Request)",
      "Optimized responsive layout with zero layout shifts",
    ],
    technologies: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Motion"],
    image: "/projects/northstar-preview.svg",
    accentColor: "#B8F36B",
  },
];
