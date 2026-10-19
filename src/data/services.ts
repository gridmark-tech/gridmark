import type { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    shortDescription:
      "Professional, responsive websites that explain what you do, establish credibility, and give customers a clear way to reach you.",
    fullDescription:
      "A tailored online presence designed specifically for businesses in Lagos and beyond. We build responsive, accessible, high-performance web destinations that articulate your value proposition clearly and guide visitors towards direct engagement.",
    deliverables: [
      "Responsive, mobile-optimized page layouts",
      "Business information architecture and narrative structure",
      "Lead generation contact and enquiry forms",
      "Search-engine fundamentals and meta optimization",
      "Performance optimization for mobile devices",
      "Production deployment, testing, and handover",
    ],
    ctaText: "Explore website development",
    href: "/services#business-websites",
    iconName: "Globe",
    scopeNotes: "Ideal for corporate firms, consultancies, and established local enterprises.",
  },
  {
    id: "digital-storefronts",
    title: "Digital Storefronts",
    shortDescription:
      "Make your products easier to discover with an organized online catalogue built around how your customers shop.",
    fullDescription:
      "Bridge your physical showroom and your online customer conversations. Provide a comprehensive digital catalogue with high-resolution imagery, detailed specifications, live stock indicators, and instant WhatsApp enquiry channels.",
    deliverables: [
      "Structured product catalogues & category hierarchies",
      "High-detail specification grids & multi-angle galleries",
      "Instant search, filtering, and availability tags",
      "Direct WhatsApp enquiry integration with pre-filled product details",
      "Optional product administration workflows",
      "Engineered for low-bandwidth mobile connections",
    ],
    ctaText: "Explore digital storefronts",
    href: "/services#digital-storefronts",
    iconName: "Store",
    scopeNotes:
      "Built for electronics retailers, computer dealers, and gadget merchants who sell via WhatsApp and in-store pickup.",
  },
  {
    id: "social-media-branding",
    title: "Social Media Branding",
    shortDescription:
      "Create a consistent, professional visual identity across your business's social media presence.",
    fullDescription:
      "Ensure that every touchpoint a customer encounters reflects the quality and seriousness of your business. We produce cohesive visual design systems, reusable templates, and polished profile assets.",
    deliverables: [
      "High-resolution profile and banner graphics for major platforms",
      "Custom promotional graphic templates (announcements, deals)",
      "Coordinated Instagram 3-grid and 9-grid layout concepts",
      "Typography, color hierarchy, and visual consistency rules",
      "Reusable asset library for rapid in-house content creation",
    ],
    ctaText: "Explore brand experiences",
    href: "/services#social-media-branding",
    iconName: "Palette",
    scopeNotes: "Focuses on visual identity and templates; does not include ad management or community moderation.",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    shortDescription:
      "Reliable technical maintenance, security checks, and catalogue updates to keep your website fast and secure.",
    fullDescription:
      "Digital assets need proactive care. Our maintenance services ensure your platform remains secure, dependencies stay updated, new products get listed quickly, and technical issues are resolved promptly.",
    deliverables: [
      "Framework and dependency security updates",
      "Regular catalogue additions and price updates",
      "Mobile speed and performance monitoring",
      "Automated backups and uptime health checks",
      "Priority technical assistance and bug resolution",
    ],
    ctaText: "Explore maintenance plans",
    href: "/services#maintenance",
    iconName: "ShieldCheck",
    scopeNotes: "Provided as a scheduled monthly or quarterly arrangement.",
  },
];
