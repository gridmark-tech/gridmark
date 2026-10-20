"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Store,
  Palette,
  ArrowRight,
  Check,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function ServicesOverview() {
  const [storefrontTapped, setStorefrontTapped] = useState(false);
  const [mobileTab, setMobileTab] = useState<"storefronts" | "websites" | "brand">("storefronts");

  return (
    <section className="w-full py-16 sm:py-24 lg:py-28" id="services">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <Reveal direction="up" delay={0.1}>
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary">
                Tailored Digital Systems
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl tracking-tight text-brand-primary">
                Built to perform, designed to convert.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="mt-3.5 text-base sm:text-lg text-brand-secondary leading-relaxed">
                Replace generic templates with custom-engineered digital assets that drive tangible commercial outcomes.
              </p>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.2}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-heading font-semibold text-brand-primary hover:text-neutral-700 transition-colors"
            >
              <span>Explore all service specifications</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Mobile Service Tab Switcher (Visible on < md to eliminate massive scrolling) */}
        <div className="flex md:hidden justify-center mb-6">
          <div className="inline-flex p-1 rounded-2xl bg-brand-surface border border-brand-border/90 shadow-2xs w-full max-w-sm">
            <button
              type="button"
              onClick={() => setMobileTab("storefronts")}
              className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-heading font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                mobileTab === "storefronts"
                  ? "bg-brand-primary text-white shadow-xs"
                  : "text-brand-secondary hover:text-brand-primary"
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              <span>Storefronts</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileTab("websites")}
              className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-heading font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                mobileTab === "websites"
                  ? "bg-brand-primary text-white shadow-xs"
                  : "text-brand-secondary hover:text-brand-primary"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Websites</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileTab("brand")}
              className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-heading font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                mobileTab === "brand"
                  ? "bg-brand-primary text-white shadow-xs"
                  : "text-brand-secondary hover:text-brand-primary"
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Brand</span>
            </button>
          </div>
        </div>

        {/* 3 Visual Artifact Cards Grid (Tabbed on mobile, 3-column on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* ================= CARD 1: STOREFRONTS ================= */}
          <div
            className={`h-full ${
              mobileTab === "storefronts" ? "block" : "hidden md:block"
            }`}
          >
            <Reveal direction="up" delay={0.1} className="h-full">
              <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-brand-surface border border-brand-border/80 shadow-xs hover:border-brand-primary/40 hover:shadow-md transition-all duration-200">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center justify-center">
                      <Store className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-heading uppercase bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">
                      Retail Engine
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-brand-primary tracking-tight">
                    Digital Storefronts
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-brand-secondary leading-relaxed">
                    Turn scattered inventory photos into a lightning-fast catalogue with real-time stock indicators and 1-tap WhatsApp orders.
                  </p>

                  {/* Visual Artifact 1: Live Interactive Catalogue Micro-Widget with WebP Image */}
                  <div className="mt-5 p-3.5 rounded-2xl bg-brand-bg/80 border border-brand-border space-y-2.5">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-heading font-semibold text-brand-secondary">Ikeja Showroom Stock</span>
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live Verified
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-brand-border shadow-2xs space-y-2.5">
                      <div className="flex items-center gap-3">
                        <div className="relative w-14 h-14 rounded-lg bg-neutral-100 border border-brand-border/60 overflow-hidden shrink-0 flex items-center justify-center">
                          <Image
                            src="/images/products/macbook-pro-16.webp"
                            alt="MacBook Pro 16"
                            fill
                            sizes="56px"
                            className="object-contain p-1"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-heading font-bold text-xs text-brand-primary truncate">
                            MacBook Pro 16&quot; M3 Max
                          </p>
                          <p className="text-[10px] text-brand-secondary font-sans mt-0.5 truncate">
                            36GB RAM · 1TB SSD · Space Black
                          </p>
                          <span className="font-heading font-black text-xs text-brand-primary block mt-1">
                            ₦3,850,000
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setStorefrontTapped(true);
                          setTimeout(() => setStorefrontTapped(false), 2000);
                        }}
                        className={`w-full py-2 px-3 rounded-lg text-[11px] font-heading font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          storefrontTapped
                            ? "bg-emerald-600 text-white"
                            : "bg-brand-dark-surface text-brand-dark-text hover:bg-black"
                        }`}
                      >
                        {storefrontTapped ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-brand-accent" />
                            <span>Handoff to WhatsApp Complete!</span>
                          </>
                        ) : (
                          <>
                            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Test 1-Tap Customer Order</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <ul className="mt-5 space-y-2 text-xs text-brand-secondary">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Instant mobile specification search</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>No cumbersome carts or abandoned checkouts</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/60">
                  <Link
                    href="/services#digital-storefronts"
                    className="group/link inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-primary hover:text-emerald-700"
                  >
                    <span>Explore Storefront Systems</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ================= CARD 2: BUSINESS WEBSITES ================= */}
          <div
            className={`h-full ${
              mobileTab === "websites" ? "block" : "hidden md:block"
            }`}
          >
            <Reveal direction="up" delay={0.2} className="h-full">
              <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-brand-surface border border-brand-border/80 shadow-xs hover:border-brand-primary/40 hover:shadow-md transition-all duration-200">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 border border-blue-200/60 flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-heading uppercase bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full font-bold">
                      Web Platform
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-brand-primary tracking-tight">
                    Business Websites
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-brand-secondary leading-relaxed">
                    Tailored corporate and enterprise websites engineered for sub-second speeds, flawless SEO, and executive trust.
                  </p>

                  {/* Visual Artifact 2: Telemetry & Core Web Vitals Gauge */}
                  <div className="mt-5 p-3.5 rounded-2xl bg-brand-bg/80 border border-brand-border space-y-2.5">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-heading font-semibold text-brand-secondary">Mobile Performance Telemetry</span>
                      <span className="font-sans text-emerald-700 font-bold">Grade: 100/100</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2.5 rounded-xl bg-white border border-brand-border text-center">
                        <div className="w-8 h-8 rounded-full border-2 border-emerald-500 text-emerald-600 font-bold text-xs flex items-center justify-center mx-auto font-sans">
                          100
                        </div>
                        <span className="text-[9px] font-heading font-semibold text-brand-secondary block mt-1 uppercase">
                          Performance
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white border border-brand-border text-center">
                        <div className="w-8 h-8 rounded-full border-2 border-emerald-500 text-emerald-600 font-bold text-xs flex items-center justify-center mx-auto font-sans">
                          0.4s
                        </div>
                        <span className="text-[9px] font-heading font-semibold text-brand-secondary block mt-1 uppercase">
                          LCP Time
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white border border-brand-border text-center">
                        <div className="w-8 h-8 rounded-full border-2 border-emerald-500 text-emerald-600 font-bold text-xs flex items-center justify-center mx-auto font-sans">
                          0.0
                        </div>
                        <span className="text-[9px] font-heading font-semibold text-brand-secondary block mt-1 uppercase">
                          Zero CLS
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <ul className="mt-5 space-y-2 text-xs text-brand-secondary">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Server-rendered with Next.js 16 App Router</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Structured corporate lead capture workflows</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/60">
                  <Link
                    href="/services#business-websites"
                    className="group/link inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-primary hover:text-emerald-700"
                  >
                    <span>Explore Business Websites</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ================= CARD 3: BRANDING & SOCIAL ================= */}
          <div
            className={`h-full ${
              mobileTab === "brand" ? "block" : "hidden md:block"
            }`}
          >
            <Reveal direction="up" delay={0.3} className="h-full">
              <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-brand-surface border border-brand-border/80 shadow-xs hover:border-brand-primary/40 hover:shadow-md transition-all duration-200">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 border border-purple-200/60 flex items-center justify-center">
                      <Palette className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-heading uppercase bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-full font-bold">
                      Identity Systems
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-brand-primary tracking-tight">
                    Social & Brand Systems
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-brand-secondary leading-relaxed">
                    Establish an unmistakable visual brand with coordinated promotional graphic kits, Instagram grid architectures, and style rules.
                  </p>

                  {/* Visual Artifact 3: Brand Color Token Swatches + Mini Grid */}
                  <div className="mt-5 p-3.5 rounded-2xl bg-brand-bg/80 border border-brand-border space-y-2.5">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-heading font-semibold text-brand-secondary">Design Tokens & Palette</span>
                      <span className="text-purple-700 font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-purple-600" />
                        Strict Cohesion
                      </span>
                    </div>

                    {/* Swatches Bar */}
                    <div className="grid grid-cols-4 gap-1.5 p-2 bg-white rounded-xl border border-brand-border">
                      <div className="space-y-1 text-center">
                        <div className="h-7 rounded-md bg-[#171916] border border-black/10" />
                        <span className="text-[9px] font-heading font-semibold text-neutral-600 block">Carbon</span>
                      </div>
                      <div className="space-y-1 text-center">
                        <div className="h-7 rounded-md bg-[#B8F36B] border border-black/10" />
                        <span className="text-[9px] font-heading font-semibold text-neutral-600 block">Lime</span>
                      </div>
                      <div className="space-y-1 text-center">
                        <div className="h-7 rounded-md bg-[#FFFFFF] border border-neutral-300" />
                        <span className="text-[9px] font-heading font-semibold text-neutral-600 block">Ivory</span>
                      </div>
                      <div className="space-y-1 text-center">
                        <div className="h-7 rounded-md bg-[#646962] border border-black/10" />
                        <span className="text-[9px] font-heading font-semibold text-neutral-600 block">Steel</span>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <ul className="mt-5 space-y-2 text-xs text-brand-secondary">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Reusable Figma / Canva promo templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Coordinated 3-grid & 9-grid layout systems</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/60">
                  <Link
                    href="/services#social-media-branding"
                    className="group/link inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-primary hover:text-emerald-700"
                  >
                    <span>Explore Brand Kits</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
