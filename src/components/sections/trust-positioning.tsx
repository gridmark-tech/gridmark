import React from "react";
import { CheckCircle2, XCircle, Zap, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function TrustPositioning() {
  return (
    <section className="w-full py-20 sm:py-28 border-y border-brand-border/70 bg-brand-surface/40">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <Reveal direction="up" delay={0.1}>
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary">
              The Commercial Reality
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-brand-primary">
              Stop losing paying customers in WhatsApp chaos.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="mt-4 text-base sm:text-lg text-brand-secondary leading-relaxed">
              When product specs and prices are buried across 50 status updates and random chat screenshots, sales stall.
              Here is how Gridmark fixes it in seconds.
            </p>
          </Reveal>
        </div>

        {/* Visual Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT: The Chaotic Status Quo */}
          <Reveal direction="right" delay={0.2} className="h-full">
            <div className="h-full rounded-3xl p-6 sm:p-8 bg-red-50/40 border border-red-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-red-200/60 mb-6">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                    <span className="font-heading font-bold text-sm uppercase tracking-wide text-red-900">
                      The WhatsApp Bottleneck
                    </span>
                  </div>
                  <span className="text-xs font-mono text-red-700 bg-red-100 px-2.5 py-0.5 rounded-full font-semibold">
                    Common Friction
                  </span>
                </div>

                {/* Simulated Chat Chaos Visual */}
                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3 rounded-2xl rounded-tl-xs bg-white border border-red-200 max-w-[85%] shadow-2xs">
                    <p className="text-neutral-800 font-medium">
                      &ldquo;Bro, price of that laptop you posted on your status yesterday?&rdquo;
                    </p>
                    <span className="text-[10px] text-neutral-400 block text-right mt-1">10:42 AM</span>
                  </div>

                  <div className="p-3 rounded-2xl rounded-tr-xs bg-neutral-100 border border-neutral-200 ml-auto max-w-[85%] text-right shadow-2xs">
                    <p className="text-neutral-700">
                      &ldquo;Which one boss? I post 12 laptops yesterday. Send screenshot.&rdquo;
                    </p>
                    <span className="text-[10px] text-neutral-400 block mt-1">11:15 AM</span>
                  </div>

                  <div className="p-3 rounded-2xl rounded-tl-xs bg-white border border-red-200 max-w-[85%] shadow-2xs">
                    <p className="text-neutral-800 font-medium">
                      &ldquo;The Dell XPS. Is it 16GB or 32GB? What of the battery cycle? Is price negotiable?&rdquo;
                    </p>
                    <span className="text-[10px] text-neutral-400 block text-right mt-1">11:28 AM</span>
                  </div>

                  <div className="p-3 rounded-2xl rounded-tr-xs bg-neutral-100 border border-neutral-200 ml-auto max-w-[85%] text-right shadow-2xs">
                    <p className="text-neutral-700">
                      &ldquo;Ah that one sold out this morning boss, but I have another one...&rdquo;
                    </p>
                    <span className="text-[10px] text-neutral-400 block mt-1">12:40 PM</span>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-red-100/60 border border-red-200 text-xs text-red-900 leading-relaxed font-medium">
                  Result: 2 hours of manual typing, buyer frustration, customer loses patience and buys elsewhere.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-red-200/60 flex items-center justify-between text-xs text-red-700 font-mono">
                <span>Friction Factor: High</span>
                <span className="font-bold">Estimated 65% Lost Leads</span>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: The Gridmark Storefront Engine */}
          <Reveal direction="left" delay={0.3} className="h-full">
            <div className="h-full rounded-3xl p-6 sm:p-8 bg-emerald-50/40 border border-emerald-300 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-emerald-200/80 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="font-heading font-bold text-sm uppercase tracking-wide text-emerald-950">
                      The Gridmark Engine
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-800 bg-emerald-200/80 px-2.5 py-0.5 rounded-full font-bold">
                    1-Tap Conversion
                  </span>
                </div>

                {/* Structured Live Catalogue Card Visual */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase bg-neutral-100 px-2 py-0.5 rounded text-neutral-600">
                      Verified Stock
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                      ● In Stock Ikeja
                    </span>
                  </div>

                  <div>
                    <h4 className="font-heading font-extrabold text-base text-brand-primary">
                      Dell XPS 15 9530 (2024 Edition)
                    </h4>
                    <p className="text-xs text-brand-secondary mt-0.5 font-mono">
                      Core i9-13900H · 32GB RAM · 1TB SSD · RTX 4070 · OLED 3.5K
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] bg-neutral-50 p-2.5 rounded-xl border border-neutral-200/70 font-mono">
                    <div>Battery Health: <strong className="text-brand-primary">98% (32 Cycles)</strong></div>
                    <div>Warranty: <strong className="text-brand-primary">6 Months Direct</strong></div>
                    <div>Grade: <strong className="text-emerald-700">Open Box A+</strong></div>
                    <div>Warehouse: <strong className="text-brand-primary">Computer Village</strong></div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-brand-secondary block uppercase">Advertised Price</span>
                      <span className="font-heading font-extrabold text-lg text-brand-primary">₦2,450,000</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white font-heading font-bold text-xs shadow-xs">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Order on WhatsApp</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-emerald-100/70 border border-emerald-200 text-xs text-emerald-950 leading-relaxed font-medium">
                  Result: Buyer views exact photos, confirms specs and warranty, and taps once with prefilled model details ready to pay.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-200/80 flex items-center justify-between text-xs text-emerald-800 font-mono">
                <span>Customer Friction: Zero</span>
                <span className="font-bold flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-emerald-600" />
                  Instant Qualified Inquiries
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
