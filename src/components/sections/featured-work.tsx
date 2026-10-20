import Image from "next/image";
import {
  ArrowRight,
  Laptop,
  MessageSquare,
  CheckCircle,
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
      className="w-full py-16 sm:py-24 lg:py-28 bg-brand-surface/70 border-t border-brand-border/70"
      id="work"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <Reveal direction="up" delay={0.1}>
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary">
              Case Studies & Proof
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="mt-2 font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-brand-primary">
              Good work should speak for itself.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-brand-secondary leading-relaxed">
              Explore digital experiences designed to make businesses easier to
              discover, understand, and engage with.
            </p>
          </Reveal>
        </div>

        {/* Featured Project Showcase Card */}
        <Reveal direction="up" delay={0.2} duration={0.6}>
          <div className="rounded-2xl sm:rounded-3xl bg-brand-surface border border-brand-border/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Project Details (Left Column) */}
            <div className="lg:col-span-6 p-5 sm:p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                  <Badge
                    variant="accent"
                    className="bg-emerald-100/90 text-emerald-800 border-emerald-300 font-semibold text-[11px] sm:text-xs"
                  >
                    Live Client Deployment
                  </Badge>
                  <span className="text-[11px] sm:text-xs font-heading font-semibold text-brand-secondary">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-brand-primary tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-brand-secondary leading-relaxed">
                  {project.summary}
                </p>

                {/* Key features checklist */}
                <div className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3">
                  <h4 className="text-[11px] sm:text-xs font-heading font-bold uppercase tracking-wider text-brand-primary">
                    Demonstrated Capabilities:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-brand-secondary">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-brand-border/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  href={`/work`}
                  variant="dark"
                  size="md"
                  className="w-full sm:w-auto justify-center font-heading font-bold text-xs sm:text-sm"
                >
                  <span>View project breakdown</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto justify-center font-heading text-xs sm:text-sm"
                >
                  Request similar build
                </Button>
              </div>
            </div>

            {/* Visual Preview Panel (Right Column) */}
            <div className="lg:col-span-6 bg-brand-bg/60 border-t lg:border-t-0 lg:border-l border-brand-border/80 p-3.5 sm:p-6 lg:p-8 flex flex-col justify-center">
              <div className="rounded-xl sm:rounded-2xl bg-white border border-brand-border shadow-sm overflow-hidden flex flex-col">
                {/* Storefront Chrome Header */}
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-neutral-100/90 border-b border-brand-border gap-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <Laptop className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                    <span className="text-xs font-heading font-bold text-brand-primary truncate">
                      Storefront Detail View
                    </span>
                  </div>
                  <span className="shrink-0 text-[10px] sm:text-[11px] font-heading font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Live Demo Flow
                  </span>
                </div>

                {/* Product Detail Card Container */}
                <div className="p-3.5 sm:p-5 flex flex-col gap-3">
                  <div className="p-3 sm:p-4 rounded-xl bg-neutral-50/80 border border-neutral-200/80 flex flex-col gap-3">
                    {/* Real Product Studio Photo Stage */}
                    <div className="relative w-full aspect-[16/10] sm:h-36 rounded-lg bg-white border border-neutral-200/90 overflow-hidden flex items-center justify-center p-2">
                      <Image
                        src="/images/products/macbook-pro-16.webp"
                        alt="MacBook Pro 16 M3 Max"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                        className="object-contain p-1.5"
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
                      <div className="text-[10px] text-brand-secondary uppercase font-heading font-bold tracking-wider">
                        Selected Model · Lagos Showroom
                      </div>
                      <div className="text-sm sm:text-base font-heading font-black text-brand-primary mt-0.5 leading-snug">
                        MacBook Pro 16&quot; Apple M3 Max
                      </div>

                      {/* Specs Pill Grid */}
                      <div className="mt-2 grid grid-cols-2 gap-1 text-[10.5px] sm:text-xs text-brand-secondary font-sans">
                        <span className="bg-white px-2 py-1 rounded border border-neutral-200/70 truncate">
                          • 36GB Unified RAM
                        </span>
                        <span className="bg-white px-2 py-1 rounded border border-neutral-200/70 truncate">
                          • 1TB High-Speed SSD
                        </span>
                        <span className="bg-white px-2 py-1 rounded border border-neutral-200/70 truncate">
                          • Liquid Retina XDR
                        </span>
                        <span className="bg-white px-2 py-1 rounded border border-neutral-200/70 truncate">
                          • 1-Yr Apple Warranty
                        </span>
                      </div>
                    </div>

                    {/* Price and 1-Tap WhatsApp Action */}
                    <div className="pt-2.5 border-t border-neutral-200/80 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[9px] font-heading uppercase text-brand-secondary block leading-none mb-0.5">
                          Advertised Price
                        </span>
                        <span className="font-heading font-black text-base sm:text-lg text-brand-primary block leading-none">
                          ₦3,850,000
                        </span>
                      </div>

                      <Button
                        href={getWhatsAppUrl(
                          "Hello Gridmark, I would like to enquire about building a digital storefront like Northstar Electronics."
                        )}
                        external
                        variant="accent"
                        size="sm"
                        className="font-heading font-bold text-xs gap-1.5 shadow-xs py-2 px-3"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                        <span className="whitespace-nowrap">Enquire Stock</span>
                      </Button>
                    </div>
                  </div>

                  {/* Micro-telemetry bar */}
                  <div className="flex items-center justify-between gap-1.5 text-[10.5px] text-brand-secondary pt-0.5">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>0.03s TTFB Page Load</span>
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
