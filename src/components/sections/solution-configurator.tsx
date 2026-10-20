"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Clock,
  Layers,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/config/contact";
import { Reveal } from "@/components/motion/reveal";

type BusinessType = "electronics" | "corporate" | "wholesale";
type ScaleTier = "starter" | "growth" | "enterprise";

interface ConfigResult {
  title: string;
  architecture: string;
  turnaround: string;
  deliverables: string[];
  recommendedPillar: string;
  whatsappMessage: string;
}

const CONFIG_MATRIX: Record<BusinessType, Record<ScaleTier, ConfigResult>> = {
  electronics: {
    starter: {
      title: "Essential Retail Storefront",
      architecture: "Next.js 16 + Dynamic Filter Grids + WhatsApp Direct",
      turnaround: "7–10 Business Days",
      deliverables: [
        "Up to 50 featured products with verified hardware specs",
        "Condition grading (New, Open Box, Refurbished)",
        "Showroom stock availability indicators",
        "Direct WhatsApp 1-tap ordering",
      ],
      recommendedPillar: "Digital Storefront Starter",
      whatsappMessage:
        "Hello Gridmark, I would like to build an Essential Retail Storefront (50 products) for my electronics store.",
    },
    growth: {
      title: "High-Volume Retail Catalogue",
      architecture: "Full Sub-Second Catalogue Engine + Live Search + Spec Grids",
      turnaround: "12–16 Business Days",
      deliverables: [
        "100–300+ SKUs across Laptops, Phones, Displays, Audio",
        "Multi-attribute search (RAM, GPU, Storage, Price, Warranty)",
        "Pre-filled WhatsApp purchase routing",
        "Low-bandwidth 4G asset optimization",
      ],
      recommendedPillar: "Digital Storefront Growth Tier",
      whatsappMessage:
        "Hello Gridmark, I need a High-Volume Retail Storefront (100–300+ products) with instant search for my electronics shop.",
    },
    enterprise: {
      title: "Omnichannel Showroom Suite",
      architecture: "Multi-Location Inventory Architecture + Social Branding Kit",
      turnaround: "18–24 Business Days",
      deliverables: [
        "Unlimited catalogue hierarchy with multi-branch stock tags",
        "Complete promotional Canva/Figma social template kit",
        "Priority 24/7 technical maintenance & quarterly refreshes",
        "Custom technical SEO indexing for Lagos electronics searches",
      ],
      recommendedPillar: "Storefront & Brand System",
      whatsappMessage:
        "Hello Gridmark, I want to discuss the complete Omnichannel Showroom Suite for our technology retail chain.",
    },
  },
  corporate: {
    starter: {
      title: "Executive Business Website",
      architecture: "Modern Server-Rendered Platform + Lead Capture",
      turnaround: "7–10 Business Days",
      deliverables: [
        "4–5 core pages (Home, Services, Case Studies, About, Contact)",
        "Mobile-first executive presentation & fast typography",
        "Secure server-validated lead generation forms",
        "Google Search Console & local business SEO setup",
      ],
      recommendedPillar: "Business Website Standard",
      whatsappMessage:
        "Hello Gridmark, I want to commission an Executive Business Website for our professional firm.",
    },
    growth: {
      title: "Corporate Growth Platform",
      architecture: "High-Performance Multi-Page System + Telemetry",
      turnaround: "12–15 Business Days",
      deliverables: [
        "Detailed service offering sub-pages & case study breakdowns",
        "100/100 Core Web Vitals performance guarantee",
        "Corporate WhatsApp direct consult routing",
        "Interactive consultation scheduler integration",
      ],
      recommendedPillar: "Corporate Growth Web Suite",
      whatsappMessage:
        "Hello Gridmark, I am interested in building a Corporate Growth Platform with verified 100/100 performance.",
    },
    enterprise: {
      title: "Enterprise Brand & Web Suite",
      architecture: "Full Corporate Identity + High-Scale Web Architecture",
      turnaround: "20–25 Business Days",
      deliverables: [
        "Complete brand visual identity kit & typography guidelines",
        "Multi-page enterprise architecture with custom lead workflows",
        "Structured privacy and compliance legal pages",
        "Dedicated technical retainer & framework monitoring",
      ],
      recommendedPillar: "Full Enterprise Web & Brand Suite",
      whatsappMessage:
        "Hello Gridmark, let's discuss an Enterprise Brand & Web Platform build for our organization.",
    },
  },
  wholesale: {
    starter: {
      title: "B2B Bulk Catalogue",
      architecture: "Fast Volume Pricing Catalogue + WhatsApp Inquiry",
      turnaround: "8–12 Business Days",
      deliverables: [
        "Tiered bulk pricing breakdowns (MOQ, Carton rates)",
        "Instant PDF spec sheet downloads for corporate clients",
        "Direct warehouse stock availability confirmation",
        "One-tap wholesale order inquiries",
      ],
      recommendedPillar: "B2B Storefront",
      whatsappMessage:
        "Hello Gridmark, I need a B2B Bulk Catalogue for our wholesale gadget distribution business.",
    },
    growth: {
      title: "Wholesale Distribution Hub",
      architecture: "Full Dealer Catalogue + Real-Time Margin Calculator",
      turnaround: "14–18 Business Days",
      deliverables: [
        "Dealer vs Retail pricing displays",
        "High-density inventory matrix with instant carton calculation",
        "Automated WhatsApp quote request generator",
        "Sub-second load times on mobile for field sales reps",
      ],
      recommendedPillar: "Wholesale Hub Architecture",
      whatsappMessage:
        "Hello Gridmark, I want to build a Wholesale Distribution Hub for our importer/distributor operations.",
    },
    enterprise: {
      title: "National Distributor Suite",
      architecture: "Multi-Region Inventory Catalogue + Dealer Portal Ready",
      turnaround: "20–30 Business Days",
      deliverables: [
        "Comprehensive SKU indexing across national dealer networks",
        "Integrated brand asset portal for authorized resellers",
        "Custom logistics and delivery route information tables",
        "Dedicated ongoing inventory maintenance arrangement",
      ],
      recommendedPillar: "National Distributor Solution",
      whatsappMessage:
        "Hello Gridmark, we require a comprehensive National Distributor Suite for our multi-warehouse operations.",
    },
  },
};

export function SolutionConfigurator() {
  const [business, setBusiness] = useState<BusinessType>("electronics");
  const [scale, setScale] = useState<ScaleTier>("growth");

  const result = CONFIG_MATRIX[business][scale];

  return (
    <section
      className="w-full py-16 sm:py-24 lg:py-28 bg-brand-surface/70 border-t border-brand-border/70"
      id="estimator"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <Reveal direction="up" delay={0.1}>
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary">
              Interactive Scope Planner
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="mt-2 font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-brand-primary">
              Configure the exact digital system your business needs.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-brand-secondary leading-relaxed">
              Select your commercial model and catalogue scale below to view
              recommended architecture, turnaround time, and deliverables.
            </p>
          </Reveal>
        </div>

        {/* Configurator Box */}
        <Reveal direction="up" delay={0.2}>
          <div className="rounded-2xl sm:rounded-3xl bg-brand-surface border border-brand-border/90 shadow-sm p-4 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            {/* Left Column: Interactive Inputs */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              {/* Step 1: Industry Selection */}
              <div>
                <label className="text-xs font-heading font-bold uppercase tracking-wider text-brand-primary block mb-2 sm:mb-3">
                  Step 1: Your Business Model
                </label>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
                  {[
                    {
                      id: "electronics",
                      shortLabel: "Electronics",
                      fullLabel: "Electronics Retail",
                      sub: "Computers / Gadgets",
                    },
                    {
                      id: "corporate",
                      shortLabel: "Corporate",
                      fullLabel: "Corporate Services",
                      sub: "Firms & Consultancies",
                    },
                    {
                      id: "wholesale",
                      shortLabel: "Wholesale",
                      fullLabel: "Wholesale & B2B",
                      sub: "Importers & Bulk",
                    },
                  ].map((item) => {
                    const isSelected = business === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setBusiness(item.id as BusinessType)}
                        className={`p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "bg-brand-dark-surface text-brand-dark-text border-brand-dark-surface shadow-xs"
                            : "bg-brand-bg/60 text-brand-primary border-brand-border hover:border-brand-primary/40"
                        }`}
                      >
                        <span className="font-heading font-bold text-xs sm:text-sm block leading-tight">
                          <span className="sm:hidden">{item.shortLabel}</span>
                          <span className="hidden sm:inline">{item.fullLabel}</span>
                        </span>
                        <span
                          className={`text-[9.5px] sm:text-[10px] block mt-1 truncate ${
                            isSelected
                              ? "text-brand-dark-text/70"
                              : "text-brand-secondary"
                          }`}
                        >
                          {item.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Inventory Scale Selection */}
              <div>
                <label className="text-xs font-heading font-bold uppercase tracking-wider text-brand-primary block mb-2 sm:mb-3">
                  Step 2: Catalogue / Platform Scale
                </label>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
                  {[
                    {
                      id: "starter",
                      shortLabel: "Starter",
                      fullLabel: "Starter Tier",
                      sub: "1–50 Core SKUs",
                    },
                    {
                      id: "growth",
                      shortLabel: "Growth",
                      fullLabel: "Growth Tier",
                      sub: "100–300+ SKUs",
                    },
                    {
                      id: "enterprise",
                      shortLabel: "Full Suite",
                      fullLabel: "Enterprise Suite",
                      sub: "Multi-Category",
                    },
                  ].map((tier) => {
                    const isSelected = scale === tier.id;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setScale(tier.id as ScaleTier)}
                        className={`p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "bg-brand-dark-surface text-brand-dark-text border-brand-dark-surface shadow-xs"
                            : "bg-brand-bg/60 text-brand-primary border-brand-border hover:border-brand-primary/40"
                        }`}
                      >
                        <span className="font-heading font-bold text-xs sm:text-sm block leading-tight">
                          <span className="sm:hidden">{tier.shortLabel}</span>
                          <span className="hidden sm:inline">{tier.fullLabel}</span>
                        </span>
                        <span
                          className={`text-[9.5px] sm:text-[10px] block mt-1 truncate ${
                            isSelected
                              ? "text-brand-dark-text/70"
                              : "text-brand-secondary"
                          }`}
                        >
                          {tier.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Architectural Highlights pill */}
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-brand-bg/70 border border-brand-border/80 flex items-center justify-between gap-2 text-xs text-brand-secondary">
                <span className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                  <span className="truncate">Lagos & Nigerian retail realities</span>
                </span>
                <span className="font-heading text-emerald-700 font-bold text-[11px] sm:text-xs shrink-0">
                  100% Fixed Scope
                </span>
              </div>
            </div>

            {/* Right Column: Live Tailored Architecture Card */}
            <div className="lg:col-span-6 bg-brand-bg/50 rounded-xl sm:rounded-2xl border border-brand-border p-4 sm:p-7 lg:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between border-b border-brand-border/70 pb-3.5 mb-4 gap-2">
                  <div className="min-w-0">
                    <span className="text-[9.5px] sm:text-[10px] font-heading uppercase tracking-wider text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded-full inline-block mb-1">
                      {result.recommendedPillar}
                    </span>
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl lg:text-2xl text-brand-primary leading-tight">
                      {result.title}
                    </h3>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[9px] sm:text-[10px] text-brand-secondary font-heading font-semibold block uppercase">
                      Timeline
                    </span>
                    <span className="font-sans font-bold text-xs sm:text-sm text-brand-primary flex items-center gap-1 justify-end mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{result.turnaround}</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <span className="text-[10.5px] sm:text-[11px] font-heading uppercase tracking-wider text-brand-secondary block mb-1 font-semibold">
                      Architecture & Stack
                    </span>
                    <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-brand-border text-xs font-sans font-medium text-brand-primary flex items-start sm:items-center gap-2 shadow-2xs">
                      <Layers className="w-4 h-4 text-brand-accent shrink-0 mt-0.5 sm:mt-0" />
                      <span className="leading-snug">{result.architecture}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10.5px] sm:text-[11px] font-heading uppercase tracking-wider text-brand-secondary block mb-1.5 font-semibold">
                      Key Inclusions
                    </span>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {result.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-brand-primary"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-brand-border/70 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <Button
                  href={getWhatsAppUrl(result.whatsappMessage)}
                  external
                  variant="accent"
                  size="md"
                  className="w-full sm:w-auto gap-2 shadow-xs font-heading font-bold text-xs sm:text-sm justify-center"
                >
                  <MessageSquare className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>Enquire Scope on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 ml-1 text-brand-primary shrink-0" />
                </Button>

                <Button
                  href="/contact"
                  variant="secondary"
                  size="md"
                  className="w-full sm:w-auto font-heading text-xs sm:text-sm justify-center"
                >
                  Submit Form Details
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
