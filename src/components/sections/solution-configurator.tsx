"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  ArrowRight,
  MessageSquare,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/config/contact";
import { Reveal } from "@/components/motion/reveal";

type BusinessType = "retail" | "corporate" | "wholesale";

interface PackageData {
  id: BusinessType;
  tabLabel: string;
  icon: string;
  badge: string;
  title: string;
  subtitle: string;
  timeline: string;
  keyBenefits: { title: string; desc: string }[];
  samplePreview: {
    title: string;
    specs: string;
    price: string;
    badge: string;
    image: string;
    actionLabel: string;
  };
  whatsappMessage: string;
}

const PACKAGES: Record<BusinessType, PackageData> = {
  retail: {
    id: "retail",
    tabLabel: "Retail & Gadgets",
    icon: "🛍️",
    badge: "Most Popular in Lagos",
    title: "Digital Storefront & Live Catalogue",
    subtitle:
      "Instant catalogue with 1-tap WhatsApp checkout for phone & gadget merchants.",
    timeline: "7–10 Days",
    keyBenefits: [
      {
        title: "1-Tap WhatsApp Orders",
        desc: "Customers tap once; pre-filled model, price & specs land in your chat.",
      },
      {
        title: "Live Showroom Inventory",
        desc: "Clear stock badges (In Stock Ikeja / 2 Left) end repetitive pricing DMs.",
      },
      {
        title: "Sub-Second 4G Speed",
        desc: "Loads in 0.03s on smartphones so buyers never drop off waiting.",
      },
    ],
    samplePreview: {
      title: "MacBook Pro 16\" M3 Max",
      specs: "36GB RAM · 1TB SSD · Sealed",
      price: "₦3,850,000",
      badge: "In Stock Ikeja",
      image: "/images/products/macbook-pro-16.webp",
      actionLabel: "1-Tap WhatsApp",
    },
    whatsappMessage:
      "Hello Gridmark, I want to build a Retail Storefront for my shop with 1-tap WhatsApp ordering.",
  },
  corporate: {
    id: "corporate",
    tabLabel: "Corporate Site",
    icon: "🏢",
    badge: "Executive Web Presence",
    title: "Executive Business Website",
    subtitle:
      "High-trust corporate presence for consultancies, law firms, and advisory agencies.",
    timeline: "7–10 Days",
    keyBenefits: [
      {
        title: "Executive Credibility",
        desc: "Clean typography, practice areas & case studies that win corporate clients.",
      },
      {
        title: "Direct Client Inquiries",
        desc: "Briefs delivered instantly to official business email & leadership WhatsApp.",
      },
      {
        title: "Google Search Indexing",
        desc: "Optimized for corporate search discovery and sub-second mobile speed.",
      },
    ],
    samplePreview: {
      title: "Strategic Advisory Firm",
      specs: "Practice Areas · Client Portal · SEO",
      price: "Enterprise Scope",
      badge: "Corporate Firm",
      image: "/images/previews/corporate-landing.webp",
      actionLabel: "Direct Consult",
    },
    whatsappMessage:
      "Hello Gridmark, I would like to build an Executive Business Website for our firm.",
  },
  wholesale: {
    id: "wholesale",
    tabLabel: "Wholesale & B2B",
    icon: "📦",
    badge: "Bulk & Importers",
    title: "Wholesale & Volume Catalogue",
    subtitle:
      "Structured bulk ordering portal for gadget importers and multi-hub distributors.",
    timeline: "10–14 Days",
    keyBenefits: [
      {
        title: "Carton & Volume Pricing",
        desc: "Clear MOQ & carton rate tiers end daily price haggling.",
      },
      {
        title: "Fast Dealer Reorders",
        desc: "Retail dealers and agents submit bulk orders with one tap.",
      },
      {
        title: "Multi-Hub Inventory",
        desc: "Live stock allocation across warehouses prevents overselling.",
      },
    ],
    samplePreview: {
      title: "Wholesale & Volume Inventory",
      specs: "Carton Margin Calc · Real-Time Stock",
      price: "Volume Engine",
      badge: "Dealer Analytics",
      image: "/images/previews/wholesale-analytics.webp",
      actionLabel: "Dealer Reorder",
    },
    whatsappMessage:
      "Hello Gridmark, I need a Wholesale / B2B Catalogue for our distribution business.",
  },
};

export function SolutionConfigurator() {
  const [activeTab, setActiveTab] = useState<BusinessType>("retail");
  const pkg = PACKAGES[activeTab];

  return (
    <section
      className="w-full py-14 sm:py-20 lg:py-24 bg-brand-surface/70 border-t border-brand-border/70"
      id="estimator"
    >
      <Container>
        {/* Section Header: Clear, Punchy, Zero Fluff */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <Reveal direction="up" delay={0.1}>
            <span className="text-[11px] sm:text-xs font-heading font-bold uppercase tracking-wider text-brand-secondary">
              Scope & Launch Planner
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="mt-1.5 font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-brand-primary">
              What does your business need?
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="mt-2 text-xs sm:text-sm lg:text-base text-brand-secondary leading-relaxed">
              Tap your business model to see what you get, how it works, and your
              launch timeline.
            </p>
          </Reveal>
        </div>

        {/* Configurator Box */}
        <Reveal direction="up" delay={0.2}>
          <div className="rounded-2xl sm:rounded-3xl bg-brand-surface border border-brand-border/90 shadow-sm p-3.5 sm:p-7 lg:p-10 flex flex-col gap-5 sm:gap-7">
            {/* 3-Way Segmented Tabs (Thumb-Friendly, Zero Truncation) */}
            <div className="grid grid-cols-3 gap-1 sm:gap-2 p-1 rounded-xl bg-brand-bg border border-brand-border/80">
              {(
                [
                  { id: "retail", short: "Retail", full: "Retail & Gadgets", icon: "🛍️" },
                  { id: "corporate", short: "Corporate", full: "Corporate Site", icon: "🏢" },
                  { id: "wholesale", short: "Wholesale", full: "Wholesale & B2B", icon: "📦" },
                ] as const
              ).map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 sm:py-2.5 px-1 sm:px-3 rounded-lg font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-1 sm:gap-1.5 text-center ${
                      isSelected
                        ? "bg-brand-dark-surface text-brand-dark-text shadow-xs"
                        : "text-brand-secondary hover:text-brand-primary"
                    }`}
                  >
                    <span className="text-xs sm:text-sm shrink-0">{tab.icon}</span>
                    <span className="sm:hidden">{tab.short}</span>
                    <span className="hidden sm:inline">{tab.full}</span>
                  </button>
                );
              })}
            </div>

            {/* Main Interactive Presentation Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch">
              {/* Left Column: Solution Details & 3 Key Value Drivers */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-5">
                <div>
                  {/* Top Badge & Title Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {pkg.badge}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-heading font-bold text-brand-primary bg-brand-bg px-2.5 py-0.5 rounded-full border border-brand-border">
                      <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Ready in {pkg.timeline}</span>
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-brand-primary">
                    {pkg.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-secondary mt-1.5 leading-relaxed">
                    {pkg.subtitle}
                  </p>

                  {/* 3 Visual Key Benefits (Scannable, Punchy, Zero Fluff) */}
                  <div className="mt-4 space-y-2">
                    {pkg.keyBenefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-brand-bg/60 border border-brand-border/70 flex items-start gap-2.5"
                      >
                        <div className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                          ✓
                        </div>
                        <div className="min-w-0">
                          <span className="font-heading font-bold text-xs sm:text-sm text-brand-primary block leading-tight">
                            {benefit.title}
                          </span>
                          <span className="text-[11px] sm:text-xs text-brand-secondary block mt-0.5 leading-snug">
                            {benefit.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Bar: 1 Primary CTA + 1 Secondary Link */}
                <div className="pt-3.5 border-t border-brand-border/70 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <Button
                    href={getWhatsAppUrl(pkg.whatsappMessage)}
                    external
                    variant="accent"
                    size="md"
                    className="w-full sm:w-auto font-heading font-bold text-xs sm:text-sm justify-center gap-2 shadow-xs py-2.5 px-5"
                  >
                    <MessageSquare className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>Get Exact Scope on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 text-brand-primary shrink-0" />
                  </Button>

                  <Button
                    href="/contact"
                    variant="ghost"
                    size="sm"
                    className="text-xs font-heading font-bold text-brand-secondary hover:text-brand-primary transition-colors py-1 px-2"
                  >
                    Request Written Proposal →
                  </Button>
                </div>
              </div>

              {/* Right Column: Live Visual Sample Card (Proves What Client Gets) */}
              <div className="lg:col-span-5 bg-brand-bg/60 rounded-xl sm:rounded-2xl border border-brand-border p-3.5 sm:p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-brand-border/80 pb-2.5 mb-3">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-brand-secondary">
                      Sample Customer View
                    </span>
                    <span className="text-[10px] font-heading font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Live Storefront Flow
                    </span>
                  </div>

                  {/* Micro Product Card */}
                  <div className="p-3 rounded-xl bg-white border border-brand-border shadow-2xs flex flex-col gap-2.5">
                    <div className="relative w-full aspect-[16/10] sm:h-36 rounded-lg bg-neutral-50 border border-neutral-200/80 overflow-hidden flex items-center justify-center p-2">
                      <Image
                        src={pkg.samplePreview.image}
                        alt={pkg.samplePreview.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 300px"
                        className="object-contain p-1"
                      />
                      <span className="absolute top-2 right-2 text-[9px] font-heading font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded border border-emerald-300">
                        {pkg.samplePreview.badge}
                      </span>
                    </div>

                    <div>
                      <p className="font-heading font-bold text-xs sm:text-sm text-brand-primary truncate">
                        {pkg.samplePreview.title}
                      </p>
                      <p className="text-[10.5px] text-brand-secondary font-sans truncate mt-0.5">
                        {pkg.samplePreview.specs}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-brand-border/70 flex items-center justify-between gap-2">
                      <span className="font-heading font-black text-sm sm:text-base text-brand-primary">
                        {pkg.samplePreview.price}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-heading font-bold bg-brand-dark-surface text-brand-dark-text px-2 py-1 rounded-md">
                        <MessageSquare className="w-3 h-3 text-brand-accent" />
                        {pkg.samplePreview.actionLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Proof Telemetry Bar */}
                <div className="mt-3 pt-2.5 border-t border-brand-border/70 flex items-center justify-between text-[10px] text-brand-secondary">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>0.03s 4G Load</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>100% Fixed Price</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
