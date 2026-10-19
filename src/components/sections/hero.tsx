import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { InteractiveDeviceStage } from "./interactive-device-stage";
import { Reveal } from "@/components/motion/reveal";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col justify-center min-h-[calc(100dvh-4.5rem)] py-6 sm:py-8 lg:py-6">
      {/* Subtle atmospheric background image & grid texture */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/hero/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/70 via-transparent to-brand-bg" />
      </div>

      {/* Subtle grid background pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(to_right,#E3E5DE_1px,transparent_1px),linear-gradient(to_bottom,#E3E5DE_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <Reveal direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border/80 text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary shadow-2xs mb-3.5 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Digital Solutions for Ambitious Businesses</span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] tracking-[-0.03em] text-brand-primary leading-[1.12]">
                <span className="sm:whitespace-nowrap">Your business deserves a</span>{" "}
                <span className="relative inline-block underline decoration-brand-accent decoration-wavy decoration-from-font">
                  better online
                </span>{" "}
                presence.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="mt-3.5 sm:mt-4 text-sm sm:text-base text-brand-secondary leading-relaxed max-w-2xl">
                We design and build professional websites, digital storefronts, and brand
                experiences that help businesses present themselves with confidence,
                streamline customer enquiries, and win more sales.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <Button href="/contact" variant="accent" size="md" className="w-full sm:w-auto px-6 font-bold whitespace-nowrap">
                  <span>Start a project</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>

                <Button href="/work" variant="secondary" size="md" className="w-full sm:w-auto px-6 whitespace-nowrap">
                  Explore our work
                </Button>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.5}>
              <div className="mt-6 sm:mt-7 pt-4 sm:pt-5 border-t border-brand-border/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-brand-secondary font-medium">
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Websites
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Digital Storefronts
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Brand Experiences
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Mobile & Desktop Device Stage */}
          <div className="lg:col-span-5 w-full min-w-0 max-w-full flex justify-center lg:justify-end">
            <Reveal direction="up" delay={0.3} duration={0.6} className="w-full min-w-0 max-w-full flex justify-center lg:justify-end">
              <InteractiveDeviceStage />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
