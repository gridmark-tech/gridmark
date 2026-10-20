"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, ShoppingBag, MessageSquare, Shield, Cpu } from "lucide-react";

interface ProductPreview {
  id: string;
  name: string;
  specs: string;
  price: string;
  tag: string;
  category: string;
  image: string;
}

const DEMO_PRODUCTS: ProductPreview[] = [
  {
    id: "p1",
    name: "MacBook Pro 16\" (M3 Max)",
    specs: "36GB RAM · 1TB SSD · Space Black",
    price: "₦3,850,000",
    tag: "In Stock Ikeja",
    category: "Laptops",
    image: "/images/products/macbook-pro-16.webp",
  },
  {
    id: "p2",
    name: "Dell XPS 15 9530 OLED",
    specs: "Core i9 13th Gen · 32GB · RTX 4070",
    price: "₦2,450,000",
    tag: "Brand New Sealed",
    category: "Laptops",
    image: "/images/products/dell-xps-15.webp",
  },
  {
    id: "p3",
    name: "Dell UltraSharp 32\" 4K",
    specs: "IPS Black · USB-C Hub · 90W Power",
    price: "₦1,150,000",
    tag: "3 Left in Stock",
    category: "Displays",
    image: "/images/products/dell-ultrasharp-32.webp",
  },
];

export function StorefrontMockup() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<ProductPreview>(DEMO_PRODUCTS[0]);

  const categories = ["All", "Laptops", "Displays"];

  const filteredProducts =
    activeCategory === "All"
      ? DEMO_PRODUCTS
      : DEMO_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full rounded-2xl bg-brand-surface border border-brand-border shadow-xl overflow-hidden flex flex-col text-left">
      {/* Mockup Browser Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-neutral-100/80 border-b border-brand-border">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
        </div>

        <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-md text-xs font-sans text-brand-secondary border border-brand-border/60 shadow-2xs">
          <span className="text-emerald-600 font-bold">●</span> northstarelectronics.store/catalogue
        </div>

        <span className="text-[10px] font-heading font-semibold text-brand-secondary hidden sm:inline uppercase">
          Lagos Retail Engine
        </span>
      </div>

      {/* Mockup Storefront Sub-Header */}
      <div className="p-4 bg-brand-surface border-b border-brand-border/70 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand-dark-surface text-brand-dark-text font-heading font-extrabold text-xs flex items-center justify-center">
            N
          </div>
          <div>
            <span className="font-heading font-bold text-xs text-brand-primary block">
              Northstar Electronics
            </span>
            <span className="text-[10px] text-emerald-700 font-medium">
              Verified Stock Hub · Ikeja
            </span>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-1 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-brand-primary text-white"
                  : "bg-white text-brand-secondary hover:text-brand-primary border border-brand-border/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-white border border-brand-border rounded-lg text-xs text-brand-secondary">
          <Search className="w-3.5 h-3.5" />
          <span>Search inventory...</span>
        </div>
      </div>

      {/* Storefront Products Grid with WebP Images */}
      <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-brand-bg/40">
        {filteredProducts.map((product) => {
          const isSelected = selectedProduct.id === product.id;
          return (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer bg-brand-surface flex flex-col justify-between ${
                isSelected
                  ? "border-brand-primary ring-2 ring-brand-primary/10 shadow-sm"
                  : "border-brand-border hover:border-brand-primary/40"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] font-heading font-semibold uppercase px-2 py-0.5 rounded bg-neutral-100 text-brand-secondary">
                    {product.category}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {product.tag}
                  </span>
                </div>

                {/* Product Image Thumbnail */}
                <div className="relative w-full h-28 rounded-lg bg-neutral-100/90 border border-neutral-200 overflow-hidden mb-2.5 flex items-center justify-center p-2">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 250px"
                    className="object-contain p-1"
                  />
                </div>

                <p className="font-heading font-bold text-sm text-brand-primary line-clamp-1">
                  {product.name}
                </p>
                <p className="text-xs text-brand-secondary mt-1 flex items-center gap-1">
                  <Cpu className="w-3 h-3 shrink-0" />
                  <span className="truncate">{product.specs}</span>
                </p>
              </div>

              <div className="pt-2.5 mt-3 border-t border-brand-border/60 flex items-center justify-between">
                <span className="font-heading font-extrabold text-sm text-brand-primary">
                  {product.price}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-emerald-600 text-white px-2 py-1 rounded-md">
                  <MessageSquare className="w-3 h-3" /> WhatsApp
                </span>
              </div>
            </div>
          );
        })}

        {/* Highlight Feature Preview Card */}
        <div className="p-4 rounded-xl border border-dashed border-brand-border bg-brand-surface/70 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1 text-xs text-brand-primary font-semibold mb-1">
              <Shield className="w-3.5 h-3.5 text-brand-accent" />
              <span>Full Spec Verification</span>
            </div>
            <p className="text-xs text-brand-secondary leading-relaxed">
              Customers view serial status, battery cycles, warranty duration, and real studio photos before messaging.
            </p>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-brand-secondary">
            <span>Direct WhatsApp Handoff</span>
            <span className="font-heading font-bold text-emerald-600">1-Tap</span>
          </div>
        </div>
      </div>

      {/* Bottom Mockup Action Bar */}
      <div className="px-5 py-3 bg-white border-t border-brand-border flex items-center justify-between text-xs text-brand-secondary">
        <span className="inline-flex items-center gap-1">
          <ShoppingBag className="w-3.5 h-3.5 text-brand-primary" />
          <span>Verified Live Storefront · Production Deployment</span>
        </span>
        <span className="text-[11px] font-heading font-semibold text-brand-primary">
          Designed by Gridmark
        </span>
      </div>
    </div>
  );
}
