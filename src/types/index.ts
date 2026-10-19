export type ServiceCategory =
  | "business-websites"
  | "digital-storefronts"
  | "social-media-branding"
  | "maintenance";

export interface ServiceItem {
  id: ServiceCategory;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  ctaText: string;
  href: string;
  iconName: string;
  scopeNotes?: string;
}

export type ProjectStatus = "Live client project" | "Active deployment" | "In development";

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  clientType: string;
  status: ProjectStatus;
  summary: string;
  description: string;
  objectives: string[];
  keyDecisions: string[];
  features: string[];
  technologies: string[];
  image: string;
  accentColor?: string;
  previewUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  proposedDomain: string;
  navItems: NavItem[];
  contact: {
    email: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    location: string;
  };
}

export interface ContactFormData {
  name: string;
  businessName?: string;
  email: string;
  service: string;
  message: string;
  websiteOrSocial?: string;
  budget?: string;
  timeframe?: string;
}
