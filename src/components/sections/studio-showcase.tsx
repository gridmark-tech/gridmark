"use client";

import React, { useState } from "react";
import {
  Globe,
  Store,
  Palette,
  CheckCircle2,
  ArrowRight,
  Zap,
  ShieldCheck,
} from "lucide-react";

type SolutionPillar = "storefronts" | "websites" | "branding";

interface PillarData {
  id: SolutionPillar;
  tag: string;
  title: string;
  subtitle: string;
  badge: string;
  highlights: string[];
  metricLabel: string;
  metricValue: string;
  metricSub: string;
  actionText: string;
  actionHref: string;
}

const PILLARS: Record<SolutionPillar, PillarData> = {
  storefronts: {
    id: "storefronts",
    tag: "Retail & Electronics",
    title: "Digital Storefronts",
    subtitle: "High-density product catalogues designed for rapid mobile browsing and direct WhatsApp sales.",
    badge: "Active Client Deployments",
    highlights: [
      "Hardware spec sheets with grade & warranty verification",
      "Instant category filtering across thousands of SKUs",
      "One-tap prefilled WhatsApp checkout enquiries",
    ],
    metricLabel: "Lead Conversion",
    metricValue: "1-Tap",
    metricSub: "Direct WhatsApp handoff",
    actionText: "Explore Storefront Solutions",
    actionHref: "/services#digital-storefronts",
  },
  websites: {
    id: "websites",
    tag: "Enterprises & Services",
    title: "High-Trust Business Websites",
    subtitle: "Modern corporate web platforms that clearly explain your services and convert executive visitors.",
    badge: "Production Ready",
    highlights: [
      "Structured business narrative and service architecture",
      "Zero layout shifts with sub-second page rendering",
      "SEO-optimized markup for local & national discovery",
    ],
    metricLabel: "Load Performance",
    metricValue: "0.4s",
    metricSub: "Optimized for mobile 4G",
    actionText: "Explore Business Websites",
    actionHref: "/services#business-websites",
  },
  branding: {
    id: "branding",
    tag: "Brand Consistency",
    title: "Social & Digital Systems",
    subtitle: "Unified visual branding, promo templates, and coordinated post systems that look established.",
    badge: "Design Standards",
    highlights: [
      "Tailored promotional template library for your team",
      "Coordinated Instagram grid and banner systems",
      "Visual style guide for colors, typography & imagery",
    ],
    metricLabel: "Brand Cohesion",
    metricValue: "100%",
    metricSub: "Unified across touchpoints",
    actionText: "Explore Brand Systems",
    actionHref: "/services#social-media-branding",
  },
};

export function StudioShowcase() {
  const [activePillar, setActivePillar] = useState<SolutionPillar>("storefronts");
  const current = PILLARS[activePillar];

  return (
    <div className="w-full rounded-2xl bg-brand-surface border border-brand-border shadow-xl overflow-hidden flex flex-col text-left">
      {/* Studio Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-neutral-100/90 border-b border-brand-border">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-md text-xs font-mono text-brand-secondary border border-brand-border/60 shadow-2xs">
          <span className="text-emerald-600 font-bold">●</span> gridmark.studio · production
        </div>
        <span className="text-[11px] font-heading font-semibold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
          Verified Systems
        </span>
      </div>

      {/* Gridmark Solutions Selector */}
      <div className="p-4 sm:p-5 bg-brand-dark-surface text-brand-dark-text border-b border-white/10">
        <div className="flex items-center justify-between mb-3.5">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-brand-accent block">
              Gridmark Core Capabilities
            </span>
            <span className="font-heading font-extrabold text-base sm:text-lg text-white">
              Digital Solutions Suite
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-brand-dark-text/70 bg-white/10 px-3 py-1 rounded-full">
            <Zap className="w-3.5 h-3.5 text-brand-accent" />
            Lagos & Global Deployments
          </span>
        </div>

        {/* 3 Pillar Selector Tabs */}
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => setActivePillar("storefronts")}
            className={`flex items-center justify-center gap-1.5 py-2 px-2 sm:px-3 rounded-xl text-xs font-heading font-semibold transition-all cursor-pointer ${
              activePillar === "storefronts"
                ? "bg-brand-accent text-brand-primary shadow-xs"
                : "bg-white/10 text-white hover:bg-white/15"
            }`}
          >
            <Store className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Storefronts</span>
          </button>

          <button
            type="button"
            onClick={() => setActivePillar("websites")}
            className={`flex items-center justify-center gap-1.5 py-2 px-2 sm:px-3 rounded-xl text-xs font-heading font-semibold transition-all cursor-pointer ${
              activePillar === "websites"
                ? "bg-brand-accent text-brand-primary shadow-xs"
                : "bg-white/10 text-white hover:bg-white/15"
            }`}
          >
            <Globe className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Websites</span>
          </button>

          <button
            type="button"
            onClick={() => setActivePillar("branding")}
            className={`flex items-center justify-center gap-1.5 py-2 px-2 sm:px-3 rounded-xl text-xs font-heading font-semibold transition-all cursor-pointer ${
              activePillar === "branding"
                ? "bg-brand-accent text-brand-primary shadow-xs"
                : "bg-white/10 text-white hover:bg-white/15"
            }`}
          >
            <Palette className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Branding</span>
          </button>
        </div>
      </div>

      {/* Active Pillar Interactive Display */}
      <div className="p-5 sm:p-6 bg-brand-bg/50 flex flex-col justify-between gap-5">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-mono text-brand-secondary uppercase font-semibold">
              {current.tag}
            </span>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
              {current.badge}
            </span>
          </div>

          <h3 className="font-heading font-extrabold text-xl text-brand-primary tracking-tight">
            {current.title}
          </h3>

          <p className="mt-1.5 text-xs sm:text-sm text-brand-secondary leading-relaxed">
            {current.subtitle}
          </p>

          {/* Highlights checklist */}
          <ul className="mt-4 space-y-2">
            {current.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-brand-primary">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Live Metrics Row inside Showcase */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-brand-border/70">
          <div className="p-3 rounded-xl bg-brand-surface border border-brand-border/80">
            <span className="text-[10px] font-mono text-brand-secondary block uppercase">
              {current.metricLabel}
            </span>
            <span className="font-heading font-extrabold text-xl text-brand-primary block mt-0.5">
              {current.metricValue}
            </span>
            <span className="text-[10px] text-emerald-700 font-medium block">
              {current.metricSub}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-brand-surface border border-brand-border/80">
            <span className="text-[10px] font-mono text-brand-secondary block uppercase">
              Engineering Standard
            </span>
            <span className="font-heading font-extrabold text-xl text-brand-primary block mt-0.5">
              Strict 100%
            </span>
            <span className="text-[10px] text-emerald-700 font-medium block">
              Mobile-native speed
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Verified Client note */}
      <div className="px-5 py-3 bg-white border-t border-brand-border flex items-center justify-between text-xs text-brand-secondary">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span className="truncate">Proven in Nigerian retail & business environments</span>
        </span>
        <a
          href={current.actionHref}
          className="font-heading font-semibold text-brand-primary hover:text-emerald-700 inline-flex items-center gap-1 shrink-0 ml-2"
        >
          <span>Details</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
