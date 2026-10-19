import type { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "northstar-electronics",
    slug: "northstar-electronics",
    title: "Northstar Electronics",
    category: "Live Retail Digital Storefront",
    clientType: "Electronics & Computer Retailer",
    status: "Live client project",
    summary:
      "A production-deployed digital storefront for an established Lagos electronics retailer, organizing multi-brand hardware inventory, verified condition grades, and direct WhatsApp customer orders.",
    description:
      "Built and deployed for an active technology retailer in Computer Village, Ikeja. The platform replaces scattered social media posts with an instantaneous digital inventory catalogue: live stock availability flags, high-resolution device photos, explicit processor and graphics specifications, advertised pricing, and direct WhatsApp purchase channels.",
    objectives: [
      "Eliminate repetitive customer questions about specs, pricing, and availability",
      "Organize laptops, workstations, monitors, and accessories into clear categories",
      "Streamline customer inquiries directly into WhatsApp with prefilled model details",
      "Load instantaneously across local mobile networks with zero layout shift",
    ],
    keyDecisions: [
      "High-speed catalogue architecture prioritizing mobile WhatsApp transactions",
      "High-contrast specification tables highlighting CPU, RAM, GPU, storage, and warranty",
      "Prominent 'Enquire on WhatsApp' action on every product card and detail modal",
      "Single-hand mobile navigation with sticky bottom action controls",
    ],
    features: [
      "Interactive category filtering (Laptops, Desktops, Displays, Gadgets)",
      "Instant specification sheet preview with condition tags (Brand New, Open Box)",
      "Direct WhatsApp enquiry integration with pre-filled product details",
      "Stock availability badges (In Stock Ikeja, Available on Request)",
      "Optimized responsive layout with sub-second mobile rendering",
    ],
    technologies: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Motion"],
    image: "/projects/northstar-preview.svg",
    accentColor: "#B8F36B",
  },
];
