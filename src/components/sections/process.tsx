import React from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function Process() {
  const steps = [
    {
      step: "01",
      name: "Discover",
      description:
        "We discuss your business, audience, goals, existing sales channels, and core requirements.",
    },
    {
      step: "02",
      name: "Plan",
      description:
        "We agree on the scope, page structure, deliverables, timeline, and fixed project cost.",
    },
    {
      step: "03",
      name: "Build",
      description:
        "We design and develop the agreed solution, sharing progress and collecting feedback at defined checkpoints.",
    },
    {
      step: "04",
      name: "Launch",
      description:
        "We test the finished work, deploy to production, and provide the agreed handover or ongoing support.",
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-brand-surface/60 border-y border-brand-border/70" id="process">
      <Container>
        <div className="max-w-2xl mb-14 sm:mb-18">
          <Reveal direction="up" delay={0.1}>
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary">
              Our Methodology
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl tracking-tight text-brand-primary">
              From first conversation to launch.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="mt-4 text-base sm:text-lg text-brand-secondary leading-relaxed">
              A transparent, structured engagement that keeps you informed at every milestone without surprises.
            </p>
          </Reveal>
        </div>

        {/* Horizontal Snap Scroll on Mobile (< md), 2/4-Column Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="snap-center shrink-0 w-[82%] sm:w-[85%] md:w-auto h-full"
            >
              <Reveal
                direction="up"
                delay={0.1 * (index + 1)}
                className="h-full"
              >
                <div className="h-full p-5 sm:p-7 rounded-2xl bg-brand-surface border border-brand-border/80 shadow-2xs relative flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-5">
                      <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-dark-surface text-brand-dark-text font-heading text-xs sm:text-sm font-black flex items-center justify-center">
                        {step.step}
                      </span>
                      <span className="text-[11px] sm:text-xs font-heading uppercase tracking-wider text-brand-secondary font-medium">
                        Stage {index + 1}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-primary">
                      {step.name}
                    </h3>

                    <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-brand-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-brand-border/50 text-[11px] font-heading font-semibold text-brand-secondary">
                    Checkpoint verified
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex justify-center items-center gap-1.5 mt-1 text-[11px] font-heading font-semibold text-brand-secondary/70">
          <span>Swipe stages</span>
          <span className="text-emerald-600">→</span>
        </div>
      </Container>
    </section>
  );
}
