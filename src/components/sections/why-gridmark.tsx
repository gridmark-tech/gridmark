import React from "react";
import { Target, Compass, Smartphone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function WhyGridmark() {
  const principles = [
    {
      icon: Target,
      number: "01",
      title: "Business first",
      description:
        "We start by understanding what your business needs to communicate and what your customers need to do before writing a line of code.",
    },
    {
      icon: Compass,
      number: "02",
      title: "Designed with purpose",
      description:
        "Every page, interaction, and visual element should help visitors understand your business and take the next practical commercial step.",
    },
    {
      icon: Smartphone,
      number: "03",
      title: "Built for real use",
      description:
        "Your website should work reliably across mobile devices, load fast on local network conditions, and remain straightforward to maintain.",
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-18">
          <Reveal direction="up" delay={0.1}>
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary">
              Our Principles
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl tracking-tight text-brand-primary">
              Digital solutions should solve real business problems.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="mt-4 text-base sm:text-lg text-brand-secondary leading-relaxed">
              We replace guesswork and superficial effects with solutions rooted in commercial reality.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.number}
                direction="up"
                delay={0.15 * (index + 1)}
                className="h-full"
              >
                <div className="h-full p-8 rounded-2xl bg-brand-surface border border-brand-border/80 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-brand-bg flex items-center justify-center text-brand-primary border border-brand-border/60">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-sm font-bold text-brand-secondary/60">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-brand-primary">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-brand-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-brand-border/50 text-xs font-medium text-emerald-700">
                    Precision Delivery
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
