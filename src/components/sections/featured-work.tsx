import Image from "next/image";
import {
  ArrowRight,
  Laptop,
  MessageSquare,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projects";
import { Reveal } from "@/components/motion/reveal";
import { getWhatsAppUrl } from "@/config/contact";

export function FeaturedWork() {
  const project = projectsData[0];

  return (
    <section
      className="w-full py-14 sm:py-20 lg:py-24 bg-brand-surface/70 border-t border-brand-border/70"
      id="work"
    >
      <Container>
        {/* Section Header: Clear, Direct */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <Reveal direction="up" delay={0.1}>
            <span className="text-[11px] sm:text-xs font-heading font-bold uppercase tracking-wider text-brand-secondary">
              Case Study & Proof
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="mt-1.5 font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-brand-primary">
              Real results for real businesses.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="mt-2 text-xs sm:text-sm lg:text-base text-brand-secondary leading-relaxed">
              How a Computer Village electronics dealer turned scattered social media
              posts into organized WhatsApp sales.
            </p>
          </Reveal>
        </div>

        {/* Featured Project Showcase Card */}
        <Reveal direction="up" delay={0.2} duration={0.6}>
          <div className="rounded-2xl sm:rounded-3xl bg-brand-surface border border-brand-border/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Project Details (Left Column) */}
            <div className="lg:col-span-6 p-4 sm:p-7 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-3">
                  <Badge
                    variant="accent"
                    className="bg-emerald-100 text-emerald-800 border-emerald-300 font-semibold text-[10.5px] sm:text-xs"
                  >
                    Live Client Deployment
                  </Badge>
                  <span className="text-[10.5px] sm:text-xs font-heading font-semibold text-brand-secondary">
                    Lagos · Computer Village
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-brand-primary tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-brand-secondary leading-relaxed">
                  Replaced chaotic Instagram DMs and repetitive pricing calls with a
                  lightning-fast catalogue where customers check specs, see live Ikeja
                  stock, and tap once to buy on WhatsApp.
                </p>

                {/* 3 Clear Proof Highlights */}
                <div className="mt-5 space-y-2">
                  {[
                    {
                      title: "1-Tap WhatsApp Checkout",
                      desc: "Customer taps once; sends exact model name, specs, and price.",
                    },
                    {
                      title: "Sub-Second 4G Speed",
                      desc: "Loads in 0.03s with zero layout lag on mobile smartphones.",
                    },
                    {
                      title: "300+ Verified Stock SKUs",
                      desc: "Live inventory tags (New, Open Box) end customer hesitation.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-brand-bg/60 border border-brand-border/70 flex items-start gap-2.5"
                    >
                      <div className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                        ✓
                      </div>
                      <div className="min-w-0">
                        <span className="font-heading font-bold text-xs text-brand-primary block leading-tight">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-brand-secondary block mt-0.5 leading-snug">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-brand-border/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <Button
                  href="/work"
                  variant="dark"
                  size="md"
                  className="w-full sm:w-auto justify-center font-heading font-bold text-xs sm:text-sm py-2.5 px-4"
                >
                  <span>View full case study</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button
                  href={getWhatsAppUrl(
                    "Hello Gridmark, I saw the Northstar Electronics case study on your site and want to build a similar digital storefront."
                  )}
                  external
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto justify-center font-heading text-xs sm:text-sm py-2.5 px-4"
                >
                  Request Similar Build
                </Button>
              </div>
            </div>

            {/* Visual Preview Panel (Right Column) */}
            <div className="lg:col-span-6 bg-brand-bg/60 border-t lg:border-t-0 lg:border-l border-brand-border/80 p-3.5 sm:p-6 lg:p-8 flex flex-col justify-center">
              <div className="rounded-xl sm:rounded-2xl bg-white border border-brand-border shadow-sm overflow-hidden flex flex-col">
                {/* Storefront Chrome Header */}
                <div className="flex items-center justify-between px-3.5 py-2 bg-neutral-100/90 border-b border-brand-border gap-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <Laptop className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                    <span className="text-xs font-heading font-bold text-brand-primary truncate">
                      Storefront Detail View
                    </span>
                  </div>
                  <span className="shrink-0 text-[10px] font-heading font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Live Demo Flow
                  </span>
                </div>

                {/* Product Detail Card */}
                <div className="p-3 sm:p-4 flex flex-col gap-2.5">
                  <div className="p-2.5 sm:p-3.5 rounded-xl bg-neutral-50/80 border border-neutral-200/80 flex flex-col gap-2.5">
                    {/* Real Product Studio Photo Stage */}
                    <div className="relative w-full aspect-[16/10] sm:h-36 rounded-lg bg-white border border-neutral-200/90 overflow-hidden flex items-center justify-center p-2">
                      <Image
                        src="/images/products/macbook-pro-16.webp"
                        alt="MacBook Pro 16 M3 Max"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                        className="object-contain p-1"
                      />

                      {/* Micro Overlay Badges */}
                      <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1 pointer-events-none">
                        <span className="text-[9px] font-heading font-bold uppercase bg-brand-surface/95 text-brand-primary px-1.5 py-0.5 rounded border border-brand-border shadow-2xs">
                          Brand New Sealed
                        </span>
                        <span className="text-[9px] font-heading font-bold text-emerald-800 bg-emerald-100/95 px-1.5 py-0.5 rounded border border-emerald-300 shadow-2xs">
                          In Stock Ikeja
                        </span>
                      </div>
                    </div>

                    {/* Product Metadata */}
                    <div>
                      <div className="text-[9.5px] text-brand-secondary uppercase font-heading font-bold tracking-wider">
                        Selected Model · Lagos Showroom
                      </div>
                      <div className="text-sm sm:text-base font-heading font-black text-brand-primary mt-0.5 leading-snug">
                        MacBook Pro 16&quot; Apple M3 Max
                      </div>

                      {/* Specs Pill Grid */}
                      <div className="mt-1.5 grid grid-cols-2 gap-1 text-[10.5px] text-brand-secondary font-sans">
                        <span className="bg-white px-2 py-0.5 rounded border border-neutral-200/70 truncate">
                          • 36GB Unified RAM
                        </span>
                        <span className="bg-white px-2 py-0.5 rounded border border-neutral-200/70 truncate">
                          • 1TB High-Speed SSD
                        </span>
                        <span className="bg-white px-2 py-0.5 rounded border border-neutral-200/70 truncate">
                          • Liquid Retina XDR
                        </span>
                        <span className="bg-white px-2 py-0.5 rounded border border-neutral-200/70 truncate">
                          • 1-Yr Apple Warranty
                        </span>
                      </div>
                    </div>

                    {/* Price and 1-Tap WhatsApp Action */}
                    <div className="pt-2 border-t border-neutral-200/80 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[9px] font-heading uppercase text-brand-secondary block leading-none mb-0.5">
                          Advertised Price
                        </span>
                        <span className="font-heading font-black text-base text-brand-primary block leading-none">
                          ₦3,850,000
                        </span>
                      </div>

                      <Button
                        href={getWhatsAppUrl(
                          "Hello Gridmark, I saw the Northstar Electronics case study on your site and want to build a similar digital storefront."
                        )}
                        external
                        variant="accent"
                        size="sm"
                        className="font-heading font-bold text-xs gap-1.5 shadow-xs py-1.5 px-3"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                        <span className="whitespace-nowrap">Enquire Stock</span>
                      </Button>
                    </div>
                  </div>

                  {/* Micro-telemetry bar */}
                  <div className="flex items-center justify-between gap-1.5 text-[10px] text-brand-secondary pt-0.5">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>0.03s Page Load</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>Zero Friction Handoff</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
