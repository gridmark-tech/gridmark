import Image from "next/image";
import { ArrowRight, Laptop, MessageSquare, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projects";
import { Reveal } from "@/components/motion/reveal";

export function FeaturedWork() {
  const project = projectsData[0];

  return (
    <section className="w-full py-20 sm:py-28 bg-brand-surface/70 border-t border-brand-border/70" id="work">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <Reveal direction="up" delay={0.1}>
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary">
              Case Studies & Proof
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl tracking-tight text-brand-primary">
              Good work should speak for itself.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="mt-4 text-base sm:text-lg text-brand-secondary leading-relaxed">
              Explore digital experiences designed to make businesses easier to
              discover, understand, and engage with.
            </p>
          </Reveal>
        </div>

        {/* Featured Project Showcase Card */}
        <Reveal direction="up" delay={0.2} duration={0.6}>
          <div className="rounded-3xl bg-brand-surface border border-brand-border/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Project Details (Left) */}
            <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant="accent" className="bg-emerald-100/90 text-emerald-800 border-emerald-300 font-semibold">
                    Live Client Deployment
                  </Badge>
                  <span className="text-xs font-heading font-medium text-brand-secondary">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-primary tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-brand-secondary leading-relaxed">
                  {project.summary}
                </p>

                {/* Key features checklist */}
                <div className="mt-8 space-y-3">
                  <h4 className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-primary">
                    Demonstrated Capabilities:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-brand-secondary">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-10 pt-6 border-t border-brand-border/80 flex flex-wrap items-center gap-4">
                <Button href={`/work`} variant="dark" size="md">
                  <span>View project breakdown</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button href="/contact" variant="outline" size="md">
                  Request similar build
                </Button>
              </div>
            </div>

            {/* Visual Preview Panel (Right) */}
            <div className="lg:col-span-6 bg-brand-bg/80 border-t lg:border-t-0 lg:border-l border-brand-border/80 p-6 sm:p-8 flex flex-col justify-center">
              <div className="rounded-2xl bg-white border border-brand-border shadow-md p-5 sm:p-6">
                <div className="flex items-center justify-between border-b border-brand-border/70 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Laptop className="w-4 h-4 text-brand-primary" />
                    <span className="text-xs font-heading font-bold text-brand-primary">
                      Storefront Detail View
                    </span>
                  </div>
                  <span className="text-[11px] font-heading font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Live Demo Flow
                  </span>
                </div>

                {/* Micro product detail mockup */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    {/* Real Product Studio Photo */}
                    <div className="relative w-full h-32 rounded-lg bg-white border border-neutral-200 overflow-hidden mb-3 flex items-center justify-center p-2">
                      <Image
                        src="/images/products/macbook-pro-16.webp"
                        alt="MacBook Pro 16 M3 Max"
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-contain p-1"
                      />
                    </div>

                    <div className="text-xs text-brand-secondary uppercase font-heading font-semibold">
                      Selected Model
                    </div>
                    <div className="text-base font-heading font-bold text-brand-primary mt-1">
                      MacBook Pro 16&quot; Apple M3 Max
                    </div>
                    <div className="mt-2 text-xs text-brand-secondary grid grid-cols-2 gap-1.5 font-sans">
                      <span>• 36GB Unified Memory</span>
                      <span>• 1TB Ultra-Fast SSD</span>
                      <span>• Liquid Retina XDR</span>
                      <span>• 1-Yr Apple Warranty</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-heading font-extrabold text-lg text-brand-primary">
                        ₦3,850,000
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-600 text-white px-3 py-1.5 rounded-lg">
                        <MessageSquare className="w-3.5 h-3.5" /> Enquire Stock
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-brand-secondary text-center leading-relaxed italic">
                    Demonstration of direct WhatsApp conversion without cumbersome cart friction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
