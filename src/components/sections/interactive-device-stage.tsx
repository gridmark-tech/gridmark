"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Smartphone,
  Laptop,
  Check,
  MessageSquare,
  Cpu,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface ProductItem {
  id: string;
  name: string;
  shortName: string;
  specs: string;
  price: string;
  condition: string;
  stock: string;
  category: "laptops" | "phones" | "displays";
  image: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: "1",
    name: "MacBook Pro 16\" M3 Max",
    shortName: "MacBook Pro 16\"",
    specs: "36GB RAM · 1TB SSD · 16-Core CPU",
    price: "₦3,850,000",
    condition: "Brand New Sealed",
    stock: "In Stock Ikeja",
    category: "laptops",
    image: "/images/products/macbook-pro-16.webp",
  },
  {
    id: "2",
    name: "Dell XPS 15 9530",
    shortName: "Dell XPS 15",
    specs: "i9 13900H · 32GB · RTX 4070 · OLED",
    price: "₦2,450,000",
    condition: "Open Box A+",
    stock: "2 Units Left",
    category: "laptops",
    image: "/images/products/dell-xps-15.webp",
  },
  {
    id: "3",
    name: "iPhone 16 Pro Max 256GB",
    shortName: "iPhone 16 Pro Max",
    specs: "Natural Titanium · eSIM + Physical",
    price: "₦1,950,000",
    condition: "Brand New Sealed",
    stock: "In Stock",
    category: "phones",
    image: "/images/products/iphone-16-pro.webp",
  },
  {
    id: "4",
    name: "Dell UltraSharp 32\" 4K",
    shortName: "UltraSharp 32\"",
    specs: "IPS Black · USB-C Hub 90W · HDR400",
    price: "₦1,150,000",
    condition: "Brand New",
    stock: "Available Ikeja",
    category: "displays",
    image: "/images/products/dell-ultrasharp-32.webp",
  },
];

export function InteractiveDeviceStage() {
  const [deviceMode, setDeviceMode] = useState<"mobile" | "desktop">("mobile");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>(PRODUCTS[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleEnquire = (product: ProductItem) => {
    setCopiedId(product.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="w-full max-w-full min-w-0 flex flex-col items-center">
      {/* =========================================================================
          1. MOBILE-NATIVE INTERACTIVE SHOWCASE (< lg screens)
          Designed specifically for phone viewports: no nested phone chassis,
          no endless scrolling, immediate visual product proof + 1-tap test.
         ========================================================================= */}
      <div className="w-full max-w-full sm:max-w-md mx-auto min-w-0 lg:hidden flex flex-col items-stretch">
        <div className="w-full max-w-full min-w-0 rounded-2xl sm:rounded-3xl bg-brand-surface border border-brand-border/90 shadow-md overflow-hidden">
          {/* Header Bar */}
          <div className="px-3.5 sm:px-4 py-2.5 sm:py-3 bg-brand-dark-surface text-brand-dark-text flex items-center justify-between gap-2 min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <span className="w-5 h-5 rounded-md bg-brand-accent text-brand-primary font-extrabold text-[10px] flex items-center justify-center shrink-0">
                G
              </span>
              <span className="font-heading font-bold text-xs tracking-tight text-white truncate">
                LIVE STORE ENGINE
              </span>
            </div>
            <span className="shrink-0 text-[10px] bg-emerald-500/20 text-emerald-400 font-heading font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Sub-Second 4G
            </span>
          </div>

          {/* Quick SKU Switcher Pills (Horizontal Snap Scroll without scrollbar) */}
          <div
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="px-2.5 sm:px-3 py-2 bg-brand-bg/60 border-b border-brand-border/70 flex items-center gap-1.5 overflow-x-auto no-scrollbar touch-pan-x w-full min-w-0"
          >
            {PRODUCTS.map((prod) => {
              const isSelected = selectedProduct.id === prod.id;
              return (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => setSelectedProduct(prod)}
                  className={`shrink-0 px-2.5 py-1.5 rounded-lg text-xs font-heading font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? "bg-brand-primary text-white shadow-xs"
                      : "bg-brand-surface text-brand-secondary border border-brand-border hover:text-brand-primary"
                  }`}
                >
                  {prod.shortName}
                </button>
              );
            })}
          </div>

          {/* Active Product Showcase */}
          <div className="p-3.5 sm:p-5 flex flex-col gap-3 min-w-0 w-full">
            {/* Product Image Stage */}
            <div className="relative w-full max-w-full aspect-[16/10] rounded-xl sm:rounded-2xl bg-gradient-to-b from-neutral-100 to-neutral-200/50 border border-brand-border/60 overflow-hidden flex items-center justify-center p-2 sm:p-3">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-contain p-2 drop-shadow-md"
              />

              {/* Status Badges Overlay */}
              <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1 pointer-events-none">
                <span className="text-[9px] sm:text-[10px] font-heading font-bold uppercase bg-brand-surface/95 backdrop-blur-xs text-brand-primary px-1.5 sm:px-2 py-0.5 rounded-md border border-brand-border shadow-2xs">
                  {selectedProduct.condition}
                </span>
                <span className="text-[9px] sm:text-[10px] font-heading font-bold text-emerald-800 bg-emerald-100/95 backdrop-blur-xs px-1.5 sm:px-2 py-0.5 rounded-md border border-emerald-300 shadow-2xs">
                  {selectedProduct.stock}
                </span>
              </div>
            </div>

            {/* Product Metadata */}
            <div className="min-w-0">
              <p className="font-heading font-extrabold text-sm sm:text-base text-brand-primary leading-snug">
                {selectedProduct.name}
              </p>
              <p className="text-xs text-brand-secondary mt-1 flex items-center gap-1.5 min-w-0">
                <Cpu className="w-3.5 h-3.5 text-brand-secondary shrink-0" />
                <span className="truncate">{selectedProduct.specs}</span>
              </p>
            </div>

            {/* Price & 1-Tap Action Row */}
            <div className="pt-2.5 sm:pt-3 border-t border-brand-border/70 flex items-center justify-between gap-2 min-w-0">
              <div className="min-w-0">
                <span className="text-[9px] sm:text-[10px] font-heading font-semibold uppercase text-brand-secondary block leading-none mb-1">
                  Advertised Price
                </span>
                <span className="font-heading font-black text-base sm:text-lg text-brand-primary block leading-none">
                  {selectedProduct.price}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleEnquire(selectedProduct)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl font-heading font-bold text-xs transition-all cursor-pointer ${
                  copiedId === selectedProduct.id
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-brand-dark-surface text-brand-dark-text hover:bg-black active:scale-95"
                }`}
              >
                {copiedId === selectedProduct.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-brand-accent" />
                    <span>WhatsApp Ready!</span>
                  </>
                ) : (
                  <>
                    <MessageSquare className="w-3.5 h-3.5 text-brand-accent" />
                    <span>1-Tap Order</span>
                  </>
                )}
              </button>
            </div>

            {/* Feedback Simulation Message when tapped */}
            {copiedId === selectedProduct.id && (
              <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900 leading-snug animate-in fade-in slide-in-from-top-1">
                <span className="font-bold block">✓ Instant Handoff Simulated:</span>
                &ldquo;Hello, I want to order {selectedProduct.name} ({selectedProduct.price}) confirmed in stock at {selectedProduct.stock}.&rdquo;
              </div>
            )}
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="px-3 sm:px-4 py-2 bg-brand-surface border-t border-brand-border/80 flex items-center justify-between gap-1 text-[9.5px] sm:text-[10px] text-brand-secondary overflow-hidden whitespace-nowrap">
            <span className="flex items-center gap-1 truncate">
              <Zap className="w-3 h-3 text-emerald-600 shrink-0" /> 0.03s Page Load
            </span>
            <span className="flex items-center gap-1 truncate">
              <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" /> Verified Showroom Stock
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. DESKTOP DUAL-MODE HARDWARE STAGE (hidden lg:flex)
          Full interactive iPhone chassis + Desktop Studio Inspector for wide screens
         ========================================================================= */}
      <div className="hidden lg:flex flex-col items-center w-full">
        {/* Device Display Stage */}
        <div className="w-full flex justify-center items-start min-h-[580px]">
          <AnimatePresence mode="wait" initial={false}>
            {deviceMode === "mobile" ? (
              <motion.div
                key="mobile"
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex justify-center"
              >
                {/* ================= ENLARGED PHOTOREALISTIC IPHONE MOCKUP FRAME ================= */}
                <div className="relative w-full max-w-[340px] xl:max-w-[355px] aspect-[302/594] select-none mx-auto drop-shadow-2xl">
                  {/* Inner Screen Content */}
                  <div className="absolute top-[2.2%] bottom-[2.8%] left-[6.3%] right-[7.0%] rounded-[40px] overflow-hidden bg-brand-bg flex flex-col text-left z-10 shadow-inner">
                    {/* Mobile App Bar */}
                    <div className="pt-10 px-4 pb-2.5 bg-brand-dark-surface text-brand-dark-text flex items-center justify-between border-b border-white/10 shrink-0">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-5 h-5 rounded-md bg-brand-accent text-brand-primary font-extrabold text-[10px] flex items-center justify-center shrink-0">
                          G
                        </span>
                        <span className="font-heading font-bold text-xs tracking-tight text-white block leading-tight truncate">
                          GRIDMARK STORE
                        </span>
                      </div>

                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-heading font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live 4G
                      </span>
                    </div>

                    {/* Quick Filter Chips */}
                    <div
                      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                      className="px-3 py-2 bg-brand-surface border-b border-brand-border/70 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs shrink-0"
                    >
                      {["all", "laptops", "phones", "displays"].map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setActiveCategory(cat)}
                          className={`px-2.5 py-1 rounded-md font-heading font-semibold capitalize whitespace-nowrap transition-colors cursor-pointer ${
                            activeCategory === cat
                              ? "bg-brand-primary text-white"
                              : "bg-brand-bg text-brand-secondary border border-brand-border/70"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    {/* Scrollable Product Feed */}
                    <div className="flex-1 overflow-y-auto p-2.5 space-y-2 no-scrollbar">
                      {filtered.map((product) => {
                        const isSelected = selectedProduct.id === product.id;
                        const isCopied = copiedId === product.id;

                        return (
                          <div
                            key={product.id}
                            onClick={() => setSelectedProduct(product)}
                            className={`p-2.5 rounded-xl border transition-all cursor-pointer bg-brand-surface flex items-center gap-2.5 ${
                              isSelected
                                ? "border-brand-primary ring-2 ring-brand-primary/10 shadow-xs"
                                : "border-brand-border hover:border-brand-primary/40"
                            }`}
                          >
                            {/* Product Thumbnail WebP */}
                            <div className="relative w-14 h-14 rounded-lg bg-neutral-100 border border-brand-border/60 overflow-hidden shrink-0 flex items-center justify-center">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="56px"
                                className="object-contain p-1"
                              />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between text-[9px] mb-0.5">
                                <span className="font-heading font-semibold text-brand-secondary uppercase">
                                  {product.category}
                                </span>
                                <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-full font-semibold border border-emerald-200/60">
                                  {product.stock}
                                </span>
                              </div>

                              <p className="font-heading font-bold text-xs text-brand-primary leading-tight truncate">
                                {product.name}
                              </p>

                              <p className="text-[10px] text-brand-secondary mt-0.5 truncate">
                                {product.specs}
                              </p>

                              <div className="mt-1 pt-1 border-t border-brand-border/60 flex items-center justify-between">
                                <span className="font-heading font-extrabold text-xs text-brand-primary">
                                  {product.price}
                                </span>

                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleEnquire(product);
                                  }}
                                  className={`inline-flex items-center gap-1 text-[9.5px] font-semibold px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                                    isCopied
                                      ? "bg-emerald-600 text-white"
                                      : "bg-brand-dark-surface text-brand-dark-text hover:bg-black"
                                  }`}
                                >
                                  {isCopied ? (
                                    <Check className="w-2.5 h-2.5 text-brand-accent" />
                                  ) : (
                                    <MessageSquare className="w-2.5 h-2.5 text-brand-accent" />
                                  )}
                                  <span>{isCopied ? "Added" : "Order"}</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Mobile Bottom Status / Navigation Bar */}
                    <div className="px-4 pt-2 pb-5 bg-brand-surface border-t border-brand-border/80 flex items-center justify-between text-xs shrink-0">
                      <div className="flex items-center gap-1.5 text-brand-secondary">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="font-sans font-medium text-[10px] whitespace-nowrap">Zero Lag UX</span>
                      </div>
                      <span className="font-heading font-bold text-[11px] text-brand-primary whitespace-nowrap">
                        Instant Handoff
                      </span>
                    </div>
                  </div>

                  {/* Photorealistic iPhone Frame Overlay */}
                  <Image
                    src="/images/mockups/iphone-bezel.png"
                    alt="iPhone Mockup"
                    fill
                    sizes="(max-width: 1280px) 340px, 355px"
                    className="pointer-events-none select-none z-20 object-contain drop-shadow-2xl"
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="desktop"
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex justify-center"
              >
                {/* ================= ENLARGED DESKTOP STUDIO DIGITAL STOREFRONT ================= */}
                <div className="w-full max-w-[620px] xl:max-w-[650px] rounded-2xl bg-brand-surface border border-brand-border shadow-xl overflow-hidden flex flex-col text-left">
                  {/* macOS Browser Chrome Bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-100/95 border-b border-brand-border gap-2">
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="w-3 h-3 rounded-full bg-red-400 inline-block shrink-0" />
                        <span className="w-3 h-3 rounded-full bg-amber-400 inline-block shrink-0" />
                        <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block shrink-0" />
                      </div>
                      <span className="text-xs font-heading font-semibold text-brand-secondary ml-1 whitespace-nowrap">
                        Northstar Electronics
                      </span>
                    </div>

                    {/* Minimal Address Bar */}
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-md text-xs font-sans text-brand-secondary border border-brand-border/70 shadow-2xs whitespace-nowrap shrink-0">
                      <span className="text-emerald-600 text-xs">🔒</span>
                      <span className="text-brand-primary font-medium whitespace-nowrap">store.northstar-electronics.ng</span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-heading font-bold border border-emerald-200/80 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                        <span className="whitespace-nowrap">Lagos Hub Active</span>
                      </span>
                    </div>
                  </div>

                  {/* In-Storefront Navigation & Subheader */}
                  <div className="px-4 py-2 bg-brand-surface border-b border-brand-border/70 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {["all", "laptops", "phones", "displays"].map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setActiveCategory(cat)}
                          className={`px-3 py-1 rounded-md text-xs font-heading font-semibold transition-colors capitalize cursor-pointer ${
                            activeCategory === cat
                              ? "bg-brand-primary text-white"
                              : "text-brand-secondary hover:text-brand-primary"
                          }`}
                        >
                          {cat === "all" ? `All (${PRODUCTS.length})` : cat}
                        </button>
                      ))}
                    </div>

                    <div className="hidden sm:flex items-center gap-2 text-xs text-brand-secondary font-sans">
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                        <Zap className="w-3.5 h-3.5 text-emerald-600" />
                        0.03s TTFB
                      </span>
                    </div>
                  </div>

                  {/* Desktop Storefront Content Container */}
                  <div className="p-4 bg-brand-bg/40 flex flex-col gap-3">
                    {/* Product Hero Spotlight Stage */}
                    <div className="relative w-full h-50 sm:h-54 rounded-xl bg-gradient-to-b from-white via-neutral-50 to-neutral-100/70 border border-brand-border/80 shadow-xs flex items-center justify-center p-3 overflow-hidden group">
                      {/* Subtle Ambient Radial Glow */}
                      <div className="absolute inset-0 bg-radial from-brand-accent/10 via-transparent to-transparent opacity-60 pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none z-10">
                        <span className="px-2.5 py-1 rounded-md bg-brand-surface/95 backdrop-blur-xs text-brand-primary text-xs font-heading font-bold border border-brand-border/80 shadow-2xs">
                          {selectedProduct.condition}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-emerald-100/95 backdrop-blur-xs text-emerald-900 text-xs font-heading font-bold border border-emerald-300/80 shadow-2xs flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                          {selectedProduct.stock}
                        </span>
                      </div>

                      {/* High-Res Studio Image */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={selectedProduct.id}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="relative w-full h-full flex items-center justify-center"
                          >
                            <Image
                              src={selectedProduct.image}
                              alt={selectedProduct.name}
                              fill
                              sizes="(max-width: 1024px) 100vw, 620px"
                              className="object-contain p-2 drop-shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* SKU Details & Quick Action Card */}
                    <div className="bg-white rounded-xl border border-brand-border p-3.5 shadow-xs flex flex-col gap-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="text-[10px] font-heading uppercase tracking-wider text-brand-secondary font-bold whitespace-nowrap">
                              {selectedProduct.category} · Lagos Stock
                            </span>
                            <span className="text-[10px] font-heading font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                              Verified Genuine
                            </span>
                          </div>
                          <p className="font-heading font-black text-base text-brand-primary leading-tight truncate whitespace-nowrap">
                            {selectedProduct.name}
                          </p>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-[10px] font-heading uppercase text-brand-secondary block leading-none mb-1 whitespace-nowrap">
                            Showroom Price
                          </span>
                          <span className="font-heading font-black text-lg text-brand-primary block leading-none whitespace-nowrap">
                            {selectedProduct.price}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-brand-secondary truncate font-sans">
                        {selectedProduct.specs}
                      </p>

                      {/* Simulated WhatsApp Toast if clicked */}
                      {copiedId === selectedProduct.id && (
                        <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 leading-snug animate-in fade-in">
                          <span className="font-heading font-bold block mb-0.5 flex items-center gap-1 text-xs whitespace-nowrap">
                            <Check className="w-3.5 h-3.5 text-emerald-700" />
                            Inquiry Copied & Ready for WhatsApp:
                          </span>
                          <p className="font-sans text-[11px]">
                            &ldquo;Hello, I want to order {selectedProduct.name} ({selectedProduct.price}) confirmed in stock at {selectedProduct.stock}.&rdquo;
                          </p>
                        </div>
                      )}

                      {/* Instant 1-Tap Order Button */}
                      <button
                        type="button"
                        onClick={() => handleEnquire(selectedProduct)}
                        className={`w-full py-2.5 px-4 rounded-lg font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm whitespace-nowrap ${
                          copiedId === selectedProduct.id
                            ? "bg-emerald-600 text-white"
                            : "bg-brand-accent text-brand-primary hover:brightness-105 active:scale-[0.98]"
                        }`}
                      >
                        {copiedId === selectedProduct.id ? (
                          <>
                            <Check className="w-4 h-4 text-white" />
                            <span className="whitespace-nowrap">Inquiry Copied! Ready for WhatsApp</span>
                          </>
                        ) : (
                          <>
                            <MessageSquare className="w-4 h-4 text-brand-primary" />
                            <span className="whitespace-nowrap">Order via WhatsApp (Instant Handoff)</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* SKU Thumbnail Switcher Strip */}
                    <div>
                      <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-brand-secondary block mb-1.5">
                        Click to Switch Active Showroom SKU:
                      </span>
                      <div className="grid grid-cols-4 gap-2">
                        {PRODUCTS.map((prod) => {
                          const isSelected = selectedProduct.id === prod.id;
                          return (
                            <button
                              key={prod.id}
                              type="button"
                              onClick={() => setSelectedProduct(prod)}
                              className={`p-1.5 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                                isSelected
                                  ? "bg-white border-brand-primary ring-2 ring-brand-primary/10 shadow-xs"
                                  : "bg-brand-surface/90 border-brand-border/80 hover:border-brand-primary/40 hover:bg-white"
                              }`}
                            >
                              <div className="relative w-full aspect-[16/10] rounded bg-neutral-100/80 border border-brand-border/40 overflow-hidden mb-1.5 flex items-center justify-center">
                                <Image
                                  src={prod.image}
                                  alt={prod.name}
                                  fill
                                  sizes="120px"
                                  className="object-contain p-0.5"
                                />
                              </div>
                              <p className="font-heading font-bold text-[10.5px] text-brand-primary truncate leading-tight">
                                {prod.shortName}
                              </p>
                              <span className="font-sans font-bold text-[9.5px] text-brand-secondary mt-0.5">
                                {prod.price}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Floating Device Switcher Dock (Clean bottom pill, leaving full height above) */}
        <div className="mt-4 flex items-center justify-center z-30">
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-brand-surface/95 backdrop-blur-md border border-brand-border/90 shadow-md">
            <button
              type="button"
              onClick={() => setDeviceMode("mobile")}
              className={`relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-heading font-semibold transition-colors cursor-pointer ${
                deviceMode === "mobile"
                  ? "text-brand-dark-text"
                  : "text-brand-secondary hover:text-brand-primary"
              }`}
            >
              {deviceMode === "mobile" && (
                <motion.span
                  layoutId="activeDockTab"
                  className="absolute inset-0 rounded-full bg-brand-dark-surface shadow-xs -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <Smartphone className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">Mobile Store (90% Users)</span>
            </button>

            <button
              type="button"
              onClick={() => setDeviceMode("desktop")}
              className={`relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-heading font-semibold transition-colors cursor-pointer ${
                deviceMode === "desktop"
                  ? "text-brand-dark-text"
                  : "text-brand-secondary hover:text-brand-primary"
              }`}
            >
              {deviceMode === "desktop" && (
                <motion.span
                  layoutId="activeDockTab"
                  className="absolute inset-0 rounded-full bg-brand-dark-surface shadow-xs -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <Laptop className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">Desktop Studio</span>
            </button>
          </div>
        </div>
      </div>
</div>
  );
}
