"use client";

import React, { useState } from "react";
import { Search, ShoppingBag, MessageSquare, Check, Shield, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductPreview {
  id: string;
  name: string;
  specs: string;
  price: string;
  tag: string;
  category: string;
}

const DEMO_PRODUCTS: ProductPreview[] = [
  {
    id: "p1",
    name: "MacBook Pro 16\" (M3 Max)",
    specs: "36GB RAM · 1TB SSD · Space Black",
    price: "₦3,850,000",
    tag: "In Stock Ikeja",
    category: "Laptops",
  },
  {
    id: "p2",
    name: "Dell XPS 15 9530 OLED",
    specs: "Core i9 13th Gen · 32GB · RTX 4070",
    price: "₦2,450,000",
    tag: "Brand New Sealed",
    category: "Laptops",
  },
  {
    id: "p3",
    name: "Dell UltraSharp 32\" 4K",
    specs: "IPS Black · USB-C Hub · 90W Power",
    price: "₦1,150,000",
    tag: "3 Left in Stock",
    category: "Displays",
  },
];

export function StorefrontMockup() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<ProductPreview>(DEMO_PRODUCTS[0]);

  const categories = ["All", "Laptops", "Displays", "Accessories"];

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
        <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-md text-xs font-mono text-brand-secondary border border-brand-border/60 shadow-2xs max-w-[200px] truncate">
          <span className="text-emerald-600">🔒</span> northstar.gridmark.store
        </div>
        <Badge variant="accent" className="text-[10px] py-0 px-2 bg-emerald-100/80 text-emerald-800 border-emerald-300">
          Live Storefront
        </Badge>
      </div>

      {/* Store Header inside mockup */}
      <div className="px-5 py-3.5 bg-brand-dark-surface text-brand-dark-text flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-brand-accent flex items-center justify-center font-bold text-xs text-brand-primary">
            N
          </div>
          <div>
            <span className="font-heading font-bold text-sm tracking-tight text-white block">
              NORTHSTAR ELECTRONICS
            </span>
            <span className="text-[10px] text-brand-dark-text/60 block">
              Computer Village · Ikeja, Lagos
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] bg-white/10 px-2.5 py-1 rounded-full text-brand-accent">
            <Check className="w-3 h-3" /> Live Stock Updates
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="px-5 py-3 bg-neutral-50/70 border-b border-brand-border flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 text-xs">
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

      {/* Storefront Products Grid */}
      <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-brand-bg/40">
        {filteredProducts.map((product) => {
          const isSelected = selectedProduct.id === product.id;
          return (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer bg-brand-surface ${
                isSelected
                  ? "border-brand-primary ring-2 ring-brand-primary/10 shadow-sm"
                  : "border-brand-border hover:border-brand-primary/40"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-brand-secondary">
                  {product.category}
                </span>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {product.tag}
                </span>
              </div>

              <div className="my-3">
                <h4 className="font-heading font-bold text-sm text-brand-primary line-clamp-1">
                  {product.name}
                </h4>
                <p className="text-xs text-brand-secondary mt-1 flex items-center gap-1">
                  <Cpu className="w-3 h-3 shrink-0" />
                  <span className="truncate">{product.specs}</span>
                </p>
              </div>

              <div className="pt-2 border-t border-brand-border/60 flex items-center justify-between">
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
              Customers view serial status, battery cycles, warranty duration, and real shop photos before messaging.
            </p>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-brand-secondary">
            <span>Direct WhatsApp Handoff</span>
            <span className="font-mono text-emerald-600 font-bold">1-Tap</span>
          </div>
        </div>
      </div>

      {/* Bottom Mockup Action Bar */}
      <div className="px-5 py-3 bg-white border-t border-brand-border flex items-center justify-between text-xs text-brand-secondary">
        <span className="inline-flex items-center gap-1">
          <ShoppingBag className="w-3.5 h-3.5 text-brand-primary" />
          <span>Verified Live Storefront · Production Deployment</span>
        </span>
        <span className="text-[11px] font-mono font-medium text-brand-primary">
          Designed by Gridmark
        </span>
      </div>
    </div>
  );
}
