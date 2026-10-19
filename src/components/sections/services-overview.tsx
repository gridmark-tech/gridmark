import React from "react";
import Link from "next/link";
import { Globe, Store, Palette, ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { servicesData } from "@/data/services";
import { Reveal } from "@/components/motion/reveal";

const iconMap = {
  Globe: Globe,
  Store: Store,
  Palette: Palette,
};

export function ServicesOverview() {
  // Primary 3 services for homepage
  const featuredServices = servicesData.slice(0, 3);

  return (
    <section className="w-full py-20 sm:py-28" id="services">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <Reveal direction="up" delay={0.1}>
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary">
                Tailored Digital Services
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl tracking-tight text-brand-primary">
                Solutions engineered for modern business.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="mt-4 text-base sm:text-lg text-brand-secondary leading-relaxed">
                Whether you need a credible business website, a high-converting
                product catalogue, or cohesive branding, we deliver practical
                outcomes with precision.
              </p>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.2}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-heading font-semibold text-brand-primary hover:text-neutral-700 transition-colors"
            >
              <span>View all services & pricing scope</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service, index) => {
            const IconComponent =
              iconMap[service.iconName as keyof typeof iconMap] || Globe;

            return (
              <Reveal
                key={service.id}
                direction="up"
                delay={0.15 * (index + 1)}
                className="h-full"
              >
                <div className="group relative h-full flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border/80 shadow-2xs hover:shadow-md hover:border-brand-primary/30 transition-all duration-200">
                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-brand-bg flex items-center justify-center border border-brand-border/80 text-brand-primary group-hover:bg-brand-accent group-hover:border-brand-accent transition-colors duration-200 mb-6">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-primary tracking-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm text-brand-secondary leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Deliverables snippet */}
                    <ul className="mt-6 space-y-2.5 pt-6 border-t border-brand-border/60 text-xs sm:text-sm text-brand-secondary">
                      {service.deliverables.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA link */}
                  <div className="mt-8 pt-4">
                    <Link
                      href={service.href}
                      className="group/link inline-flex items-center gap-1.5 text-xs font-heading font-semibold uppercase tracking-wider text-brand-primary hover:text-emerald-700 transition-colors"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
