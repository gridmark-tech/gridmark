"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Smartphone,
  Laptop,
  Check,
  MessageSquare,
  Cpu,
  ShieldCheck,
  Zap,
  Sparkles,
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
            <span className="shrink-0 text-[10px] bg-emerald-500/20 text-emerald-400 font-mono px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
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
                priority
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-contain p-2 drop-shadow-md"
              />

              {/* Status Badges Overlay */}
              <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1 pointer-events-none">
                <span className="text-[9px] sm:text-[10px] font-mono font-semibold uppercase bg-brand-surface/95 backdrop-blur-xs text-brand-primary px-1.5 sm:px-2 py-0.5 rounded-md border border-brand-border shadow-2xs">
                  {selectedProduct.condition}
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-emerald-800 bg-emerald-100/95 backdrop-blur-xs px-1.5 sm:px-2 py-0.5 rounded-md border border-emerald-300 shadow-2xs">
                  {selectedProduct.stock}
                </span>
              </div>
            </div>

            {/* Product Metadata */}
            <div className="min-w-0">
              <h3 className="font-heading font-extrabold text-sm sm:text-base text-brand-primary leading-snug">
                {selectedProduct.name}
              </h3>
              <p className="text-xs text-brand-secondary mt-1 flex items-center gap-1.5 min-w-0">
                <Cpu className="w-3.5 h-3.5 text-brand-secondary shrink-0" />
                <span className="truncate">{selectedProduct.specs}</span>
              </p>
            </div>

            {/* Price & 1-Tap Action Row */}
            <div className="pt-2.5 sm:pt-3 border-t border-brand-border/70 flex items-center justify-between gap-2 min-w-0">
              <div className="min-w-0">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase text-brand-secondary block leading-none mb-1">
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
          <div className="px-3 sm:px-4 py-2 bg-brand-surface border-t border-brand-border/80 flex flex-wrap items-center justify-between gap-1.5 text-[10px] text-brand-secondary">
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-emerald-600 shrink-0" /> 0.03s Page Load
            </span>
            <span className="flex items-center gap-1">
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
        {/* Device Mode Switcher Bar */}
        <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-brand-surface border border-brand-border/90 shadow-xs mb-5">
          <button
            type="button"
            onClick={() => setDeviceMode("mobile")}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-heading font-semibold transition-all cursor-pointer ${
              deviceMode === "mobile"
                ? "bg-brand-dark-surface text-brand-dark-text shadow-xs"
                : "text-brand-secondary hover:text-brand-primary"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Device (90% Users)</span>
          </button>

          <button
            type="button"
            onClick={() => setDeviceMode("desktop")}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-heading font-semibold transition-all cursor-pointer ${
              deviceMode === "desktop"
                ? "bg-brand-dark-surface text-brand-dark-text shadow-xs"
                : "text-brand-secondary hover:text-brand-primary"
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Desktop Studio View</span>
          </button>
        </div>

        {deviceMode === "mobile" ? (
          /* ================= MOBILE PHONE FRAME ================= */
          <div className="relative w-full max-w-[360px] rounded-[44px] p-3.5 bg-neutral-900 border-[6px] border-neutral-800 shadow-2xl ring-1 ring-black/50">
            {/* Hardware Notch / Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2">
              <span className="w-2 h-2 rounded-full bg-neutral-800" />
            </div>

            {/* Screen Content */}
            <div className="w-full rounded-[32px] bg-brand-bg overflow-hidden flex flex-col h-[580px] text-left border border-white/5 relative">
              {/* Mobile App Bar */}
              <div className="pt-8 px-4 pb-3 bg-brand-dark-surface text-brand-dark-text flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-brand-accent text-brand-primary font-extrabold text-[10px] flex items-center justify-center">
                    G
                  </span>
                  <div>
                    <span className="font-heading font-bold text-xs tracking-tight text-white block">
                      GRIDMARK STORE ENGINE
                    </span>
                    <span className="text-[9px] text-brand-dark-text/60 block">
                      Fast Live Catalogue
                    </span>
                  </div>
                </div>

                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-mono px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live 4G
                </span>
              </div>

              {/* Quick Filter Chips */}
              <div
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                className="p-3 bg-brand-surface border-b border-brand-border/70 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-[11px]"
              >
                {["all", "laptops", "phones", "displays"].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-2.5 py-1 rounded-lg font-heading font-semibold capitalize whitespace-nowrap transition-colors cursor-pointer ${
                      activeCategory === cat
                        ? "bg-brand-primary text-white"
                        : "bg-brand-bg text-brand-secondary border border-brand-border/70"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Scrollable Product Feed with Product Images */}
              <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
                {filtered.map((product) => {
                  const isSelected = selectedProduct.id === product.id;
                  const isCopied = copiedId === product.id;

                  return (
                    <div
                      key={product.id}
                      onClick={() => setSelectedProduct(product)}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer bg-brand-surface flex items-center gap-3 ${
                        isSelected
                          ? "border-brand-primary ring-2 ring-brand-primary/10 shadow-xs"
                          : "border-brand-border hover:border-brand-primary/40"
                      }`}
                    >
                      {/* Product Thumbnail WebP */}
                      <div className="relative w-16 h-16 rounded-xl bg-neutral-100 border border-brand-border/60 overflow-hidden shrink-0 flex items-center justify-center">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="64px"
                          className="object-contain p-1"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between text-[9px] mb-0.5">
                          <span className="font-mono text-brand-secondary uppercase">
                            {product.category}
                          </span>
                          <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-full font-semibold border border-emerald-200/60">
                            {product.stock}
                          </span>
                        </div>

                        <h4 className="font-heading font-bold text-xs text-brand-primary leading-tight truncate">
                          {product.name}
                        </h4>

                        <p className="text-[10px] text-brand-secondary mt-0.5 truncate">
                          {product.specs}
                        </p>

                        <div className="mt-1.5 pt-1.5 border-t border-brand-border/60 flex items-center justify-between">
                          <span className="font-heading font-extrabold text-xs text-brand-primary">
                            {product.price}
                          </span>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEnquire(product);
                            }}
                            className={`inline-flex items-center gap-1 text-[9px] font-semibold px-2 py-0.5 rounded-md transition-all cursor-pointer ${
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

              {/* Mobile Bottom Navigation Bar */}
              <div className="p-3 bg-brand-surface border-t border-brand-border/80 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 text-brand-secondary">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-mono text-[10px]">Zero Lag UX</span>
                </div>
                <span className="font-heading font-bold text-xs text-brand-primary">
                  Instant Handoff
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* ================= DESKTOP STUDIO VIEW ================= */
          <div className="w-full rounded-2xl bg-brand-surface border border-brand-border shadow-xl overflow-hidden flex flex-col text-left">
            {/* Browser Chrome Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-100/90 border-b border-brand-border">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-md text-xs font-mono text-brand-secondary border border-brand-border/60 shadow-2xs">
                <span className="text-emerald-600">🔒</span> gridmark.studio/live-storefront
              </div>
              <span className="text-[11px] font-heading font-semibold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                Production Verified
              </span>
            </div>

            {/* Desktop Showcase Content */}
            <div className="p-6 bg-brand-bg/40 grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left: Product List */}
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-brand-primary">
                    Live Stock Feed (Lagos Retail)
                  </span>
                  <span className="text-xs text-emerald-600 font-mono font-medium">
                    4 Active SKUs
                  </span>
                </div>

                {PRODUCTS.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedProduct(item)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer bg-brand-surface flex items-center justify-between gap-3 ${
                      selectedProduct.id === item.id
                        ? "border-brand-primary ring-2 ring-brand-primary/10 shadow-xs"
                        : "border-brand-border hover:border-brand-primary/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-lg bg-neutral-100 border border-brand-border/60 overflow-hidden shrink-0 flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="48px"
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-brand-secondary uppercase block">
                          {item.condition} · {item.stock}
                        </span>
                        <h4 className="font-heading font-bold text-sm text-brand-primary">
                          {item.name}
                        </h4>
                        <p className="text-xs text-brand-secondary mt-0.5">{item.specs}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-heading font-extrabold text-sm text-brand-primary block">
                        {item.price}
                      </span>
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">
                        WhatsApp Ready
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Technical Inspector Card with Hero Product Image */}
              <div className="md:col-span-5 bg-brand-surface rounded-2xl border border-brand-border p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-brand-secondary mb-3">
                    <Zap className="w-3.5 h-3.5 text-brand-accent" />
                    <span>Architecture Inspector</span>
                  </div>

                  {/* Active Product Studio Photo */}
                  <div className="relative w-full aspect-[16/10] rounded-xl bg-neutral-100/90 border border-brand-border/70 overflow-hidden mb-3.5 flex items-center justify-center">
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      priority
                      sizes="350px"
                      className="object-contain p-3 drop-shadow-md"
                    />
                  </div>

                  <h4 className="font-heading font-extrabold text-base text-brand-primary">
                    {selectedProduct.name}
                  </h4>

                  <div className="mt-3 p-3 rounded-xl bg-brand-bg border border-brand-border space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-brand-secondary">Price advertised:</span>
                      <span className="font-bold text-brand-primary font-mono">{selectedProduct.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-secondary">Grade status:</span>
                      <span className="font-bold text-emerald-700">{selectedProduct.condition}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-secondary">Lagos warehouse:</span>
                      <span className="font-bold text-brand-primary">{selectedProduct.stock}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-secondary">Payload render:</span>
                      <span className="font-mono text-emerald-600 font-bold">0.03s</span>
                    </div>
                  </div>

                  <div className="mt-3.5 p-3 rounded-xl bg-emerald-50 border border-emerald-200/70 text-xs text-emerald-900 leading-relaxed">
                    <span className="font-bold flex items-center gap-1 mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                      Automated WhatsApp Message
                    </span>
                    &ldquo;Hello, I want to confirm stock for {selectedProduct.name} ({selectedProduct.price}) advertised on your Gridmark storefront.&rdquo;
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleEnquire(selectedProduct)}
                  className={`mt-4 w-full py-2.5 px-4 rounded-xl font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    copiedId === selectedProduct.id
                      ? "bg-emerald-600 text-white"
                      : "bg-brand-dark-surface text-brand-dark-text hover:bg-black"
                  }`}
                >
                  {copiedId === selectedProduct.id ? (
                    <>
                      <Check className="w-4 h-4 text-brand-accent" />
                      <span>Copied Pre-filled Inquiry!</span>
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4 text-brand-accent" />
                      <span>Simulate Customer Order Click</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
