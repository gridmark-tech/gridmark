import React from "react";
import { Target, Compass, Smartphone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function WhyGridmark() {
  const principles = [
    {
      icon: Target,
      number: "01",
      title: "High-Converting Design",
      description:
        "We design clean, distraction-free layouts structured around buyer psychology, turning casual social media browsers into paid orders.",
    },
    {
      icon: Compass,
      number: "02",
      title: "Automated Sales Flow",
      description:
        "Stop repeating prices and bank details in DMs. Direct integrations route customer orders with pre-filled specs straight to your WhatsApp.",
    },
    {
      icon: Smartphone,
      number: "03",
      title: "Guaranteed Delivery",
      description:
        "No endless revisions or vague timelines. Clear scopes, transparent milestones, and on-schedule launches without surprises.",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <Reveal direction="up" delay={0.1}>
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary">
              Why Businesses Choose Us
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="mt-2 font-heading font-extrabold text-2xl sm:text-4xl tracking-tight text-brand-primary">
              Built for sales, not just aesthetics.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="mt-3 text-sm sm:text-base text-brand-secondary leading-relaxed">
              Every layout, button, and headline is engineered to guide visitors toward buying, booking, or sending an enquiry.
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
