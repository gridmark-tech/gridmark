"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, XCircle, Zap, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function TrustPositioning() {
  // Fresh load begins on Status Quo Chaos (friction)
  const [mobileTab, setMobileTab] = useState<"friction" | "engine">("friction");
  const sectionRef = useRef<HTMLElement>(null);
  const hasAutoSwitchedRef = useRef(false);
  const userInteractedRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // If user already interacted (swiped or tapped) or already auto-switched once, keep normal consistent scroll
      if (hasAutoSwitchedRef.current || userInteractedRef.current) return;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Occurs when user has scrolled through the card and is about to exit to the next section
      // (top of section is scrolled up, and bottom is nearing lower viewport)
      if (rect.top < 0 && rect.bottom <= viewportHeight * 0.85 && rect.bottom >= viewportHeight * 0.1) {
        if (mobileTab === "friction") {
          setMobileTab("engine");
          hasAutoSwitchedRef.current = true;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileTab]);

  // Shared Chaos Card Component
  const renderChaosCard = () => (
    <div className="h-full rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-red-50/50 border border-red-200 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-3.5 border-b border-red-200/70 mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
            <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 shrink-0" />
            <span className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wide text-red-950">
              The WhatsApp Bottleneck
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-heading text-red-700 bg-red-100 px-2 sm:px-2.5 py-0.5 rounded-full font-semibold">
            Common Friction
          </span>
        </div>

        {/* Simulated Chat Chaos Visual */}
        <div className="space-y-2.5 sm:space-y-3 font-sans text-xs">
          <div className="p-2.5 sm:p-3 rounded-2xl rounded-tl-xs bg-white border border-red-200/90 max-w-[88%] shadow-2xs">
            <p className="text-neutral-800 font-medium leading-snug">
              &ldquo;Bro, price of that laptop you posted on your status yesterday?&rdquo;
            </p>
            <span className="text-[9.5px] text-neutral-400 block text-right mt-1">10:42 AM</span>
          </div>

          <div className="p-2.5 sm:p-3 rounded-2xl rounded-tr-xs bg-neutral-100 border border-neutral-200 ml-auto max-w-[88%] text-right shadow-2xs">
            <p className="text-neutral-700 leading-snug">
              &ldquo;Which one boss? I post 12 laptops yesterday. Send screenshot.&rdquo;
            </p>
            <span className="text-[9.5px] text-neutral-400 block mt-1">11:15 AM</span>
          </div>

          <div className="p-2.5 sm:p-3 rounded-2xl rounded-tl-xs bg-white border border-red-200/90 max-w-[88%] shadow-2xs">
            <p className="text-neutral-800 font-medium leading-snug">
              &ldquo;The Dell XPS. Is it 16GB or 32GB? What of battery health? Negotiable?&rdquo;
            </p>
            <span className="text-[9.5px] text-neutral-400 block text-right mt-1">11:28 AM</span>
          </div>

          <div className="p-2.5 sm:p-3 rounded-2xl rounded-tr-xs bg-neutral-100 border border-neutral-200 ml-auto max-w-[88%] text-right shadow-2xs">
            <p className="text-neutral-700 leading-snug">
              &ldquo;Ah that one sold out this morning boss, but I have another one...&rdquo;
            </p>
            <span className="text-[9.5px] text-neutral-400 block mt-1">12:40 PM</span>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl bg-red-100/70 border border-red-200 text-xs text-red-950 leading-relaxed font-medium">
          Result: 2 hours of manual typing, buyer frustration, customer loses patience and buys elsewhere.
        </div>
      </div>

      <div className="mt-5 pt-3.5 border-t border-red-200/70 flex items-center justify-between text-xs text-red-700 font-heading font-semibold">
        <span>Friction Factor: High</span>
        <span className="font-bold">Estimated 65% Lost Sales</span>
      </div>
    </div>
  );

  // Shared Engine Card Component
  const renderEngineCard = () => (
    <div className="h-full rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-emerald-50/50 border border-emerald-300 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-3.5 border-b border-emerald-200/80 mb-4 sm:mb-5">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
            <span className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wide text-emerald-950">
              The Gridmark Engine
            </span>
          </div>
          <span className="text-[10.5px] sm:text-xs font-heading text-emerald-800 bg-emerald-200/80 px-2 sm:px-2.5 py-0.5 rounded-full font-bold">
            1-Tap Conversion
          </span>
        </div>

        {/* Structured Live Catalogue Card Visual */}
        <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-3">
          {/* Real Product Studio Photo Banner */}
          <div className="relative w-full aspect-[16/10] sm:h-36 rounded-xl overflow-hidden bg-neutral-100/80 border border-neutral-200 flex items-center justify-center p-2">
            <Image
              src="/images/products/dell-xps-15.webp"
              alt="Dell XPS 15 9530 Studio Photo"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-contain p-1"
            />
            <div className="absolute top-2 left-2 flex gap-1.5">
              <span className="text-[9.5px] font-heading font-bold uppercase bg-white/95 backdrop-blur-xs text-neutral-800 px-1.5 py-0.5 rounded border border-neutral-200 shadow-2xs">
                Verified Stock
              </span>
            </div>
            <div className="absolute top-2 right-2">
              <span className="text-[10px] sm:text-xs font-bold text-emerald-800 bg-emerald-100/95 backdrop-blur-xs px-2 py-0.5 rounded-full border border-emerald-300 shadow-2xs">
                ● In Stock Ikeja
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-extrabold text-sm sm:text-base text-brand-primary">
              Dell XPS 15 9530 (2024 Edition)
            </h4>
            <p className="text-[11px] sm:text-xs text-brand-secondary mt-0.5 font-sans">
              Core i9-13900H · 32GB RAM · 1TB SSD · RTX 4070 · OLED 3.5K
            </p>
          </div>

          <div className="grid grid-cols-2 gap-1.5 text-[10.5px] sm:text-[11px] bg-neutral-50 p-2 sm:p-2.5 rounded-xl border border-neutral-200/70 font-sans">
            <div>Battery Health: <strong className="text-brand-primary">98% (32 Cycles)</strong></div>
            <div>Warranty: <strong className="text-brand-primary">6 Mo. Direct</strong></div>
            <div>Grade: <strong className="text-emerald-700">Open Box A+</strong></div>
            <div>Location: <strong className="text-brand-primary">Ikeja Hub</strong></div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <div>
              <span className="text-[9px] text-brand-secondary block uppercase">Advertised Price</span>
              <span className="font-heading font-extrabold text-base sm:text-lg text-brand-primary">₦2,450,000</span>
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-heading font-bold text-xs shadow-xs">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Order on WhatsApp</span>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 p-3 sm:p-4 rounded-xl bg-emerald-100/70 border border-emerald-200 text-xs text-emerald-950 leading-relaxed font-medium">
          Result: Buyer views exact photos, confirms specs and warranty, and taps once with prefilled model details ready to pay.
        </div>
      </div>

      <div className="mt-5 pt-3.5 border-t border-emerald-200/80 flex items-center justify-between text-xs text-emerald-800 font-heading font-semibold">
        <span>Customer Friction: Zero</span>
        <span className="font-bold flex items-center gap-1">
          <Zap className="w-3.5 h-3.5 text-emerald-600" />
          Instant Qualified Orders
        </span>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="w-full py-14 sm:py-20 lg:py-28 border-y border-brand-border/70 bg-brand-surface/40 overflow-hidden"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <Reveal direction="up" delay={0.1}>
            <span className="text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary">
              The Commercial Reality
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="mt-1.5 font-heading font-extrabold text-2xl sm:text-3xl md:text-5xl tracking-tight text-brand-primary">
              Stop losing paying customers in WhatsApp chaos.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-base lg:text-lg text-brand-secondary leading-relaxed">
              When product specs and prices are buried across 50 status updates and
              random chat screenshots, sales stall. Here is how Gridmark fixes it.
            </p>
          </Reveal>
        </div>

        {/* ================= MOBILE VIEW WITH SWIPE & SCROLL-TRANSITION (< md) ================= */}
        <div className="block md:hidden">
          {/* Mobile Comparison Tab Switcher */}
          <div className="flex justify-center mb-4">
            <div className="relative inline-flex p-1 rounded-2xl bg-brand-bg border border-brand-border/90 shadow-2xs w-full max-w-sm">
              <button
                type="button"
                onClick={() => {
                  setMobileTab("friction");
                  userInteractedRef.current = true;
                }}
                className={`relative z-10 flex-1 py-2 px-3 rounded-xl text-xs font-heading font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  mobileTab === "friction"
                    ? "text-white"
                    : "text-brand-secondary hover:text-brand-primary"
                }`}
              >
                {mobileTab === "friction" && (
                  <motion.span
                    layoutId="activeTrustTab"
                    className="absolute inset-0 rounded-xl bg-red-600 shadow-xs -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <XCircle className="w-3.5 h-3.5" />
                <span>Status Quo Chaos</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileTab("engine");
                  userInteractedRef.current = true;
                }}
                className={`relative z-10 flex-1 py-2 px-3 rounded-xl text-xs font-heading font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  mobileTab === "engine"
                    ? "text-white"
                    : "text-brand-secondary hover:text-brand-primary"
                }`}
              >
                {mobileTab === "engine" && (
                  <motion.span
                    layoutId="activeTrustTab"
                    className="absolute inset-0 rounded-xl bg-emerald-600 shadow-xs -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent" />
                <span>Gridmark Engine</span>
              </button>
            </div>
          </div>

          {/* Swipeable Motion Stage */}
          <div className="relative w-full touch-pan-y min-h-[500px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileTab}
                initial={{ opacity: 0, x: mobileTab === "engine" ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: mobileTab === "engine" ? -80 : 80 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_e, info) => {
                  const threshold = 40;
                  if (info.offset.x < -threshold && mobileTab === "friction") {
                    setMobileTab("engine");
                    userInteractedRef.current = true;
                  } else if (info.offset.x > threshold && mobileTab === "engine") {
                    setMobileTab("friction");
                    userInteractedRef.current = true;
                  }
                }}
                className="cursor-grab active:cursor-grabbing w-full"
              >
                {mobileTab === "friction" ? renderChaosCard() : renderEngineCard()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Swipe Hint & Dot Indicators */}
          <div className="flex items-center justify-center gap-2 text-[11px] font-heading text-brand-secondary mt-3.5 select-none">
            <span className="text-xs">↔</span>
            <span>Swipe sideways to compare</span>
            <div className="flex items-center gap-1.5 ml-1">
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  mobileTab === "friction" ? "bg-red-500 w-3.5" : "bg-neutral-300 w-1.5"
                }`}
              />
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  mobileTab === "engine" ? "bg-emerald-500 w-3.5" : "bg-neutral-300 w-1.5"
                }`}
              />
            </div>
          </div>
        </div>

        {/* ================= DESKTOP VIEW: SIDE-BY-SIDE (hidden md:grid) ================= */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 items-stretch">
          <Reveal direction="up" delay={0.2} className="h-full">
            {renderChaosCard()}
          </Reveal>
          <Reveal direction="up" delay={0.3} className="h-full">
            {renderEngineCard()}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
