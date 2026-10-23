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

        {/* Horizontal Snap Scroll on Mobile (< md), 3-Column Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="snap-center shrink-0 w-[84%] sm:w-[86%] md:w-auto h-full"
              >
                <Reveal
                  direction="up"
                  delay={0.15 * (index + 1)}
                  className="h-full"
                >
                  <div className="h-full p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border/80 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-bg flex items-center justify-center text-brand-primary border border-brand-border/60">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className="font-heading text-xs sm:text-sm font-black text-brand-secondary/60">
                          {item.number}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-primary">
                        {item.title}
                      </h3>

                      <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-brand-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 sm:mt-8 pt-3.5 sm:pt-4 border-t border-brand-border/50 text-xs font-medium text-emerald-700">
                      Precision Delivery
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex justify-center items-center gap-1.5 mt-1 text-[11px] font-heading font-semibold text-brand-secondary/70">
          <span>Swipe principles</span>
          <span className="text-emerald-600">→</span>
        </div>
      </Container>
    </section>
  );
}
