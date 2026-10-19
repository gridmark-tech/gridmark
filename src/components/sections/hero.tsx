import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { InteractiveDeviceStage } from "./interactive-device-stage";
import { Reveal } from "@/components/motion/reveal";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-6 pb-16 sm:py-20 lg:py-24">
      {/* Subtle grid background pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(to_right,#E3E5DE_1px,transparent_1px),linear-gradient(to_bottom,#E3E5DE_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <Reveal direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-border/80 text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary shadow-2xs mb-6">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Digital Solutions for Ambitious Businesses</span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] text-brand-primary leading-[1.08]">
                Your business deserves a{" "}
                <span className="relative inline-block underline decoration-brand-accent decoration-wavy decoration-from-font">
                  better online
                </span>{" "}
                presence.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="mt-6 text-base sm:text-lg text-brand-secondary leading-relaxed max-w-xl">
                We design and build professional websites, digital storefronts, and brand
                experiences that help businesses present themselves with confidence,
                streamline customer enquiries, and win more sales.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                <Button href="/contact" variant="accent" size="lg" className="w-full sm:w-auto">
                  <span>Start a project</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>

                <Button href="/work" variant="secondary" size="lg" className="w-full sm:w-auto">
                  Explore our work
                </Button>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.5}>
              <div className="mt-10 pt-6 border-t border-brand-border/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-brand-secondary font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Websites
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Digital Storefronts
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Brand Experiences
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Mobile & Desktop Device Stage */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <Reveal direction="left" delay={0.3} duration={0.6}>
              <InteractiveDeviceStage />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
