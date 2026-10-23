import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { InteractiveDeviceStage } from "./interactive-device-stage";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col justify-center min-h-[calc(100dvh-4.5rem)] py-3 sm:py-8 lg:py-6">
      {/* Subtle atmospheric background image & grid texture */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/hero/hero-bg.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-right lg:object-center opacity-85"
        />
        {/* Directional contrast gradients: text readability on left, clean curves on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/30 via-transparent to-brand-bg" />
      </div>

      {/* Subtle grid background pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(to_right,#E3E5DE_1px,transparent_1px),linear-gradient(to_bottom,#E3E5DE_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-brand-surface border border-brand-border/80 text-[10px] sm:text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary shadow-2xs mb-2 sm:mb-4">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
              <span>Digital Solutions for Ambitious Businesses</span>
            </div>

            <h1 className="font-heading font-extrabold text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] tracking-[-0.03em] text-brand-primary leading-[1.14] sm:leading-[1.12]">
              <span className="sm:whitespace-nowrap">Your business deserves a</span>{" "}
              <span className="relative inline-block underline decoration-brand-accent decoration-wavy decoration-from-font">
                better online
              </span>{" "}
              presence.
            </h1>

            <p className="mt-2.5 sm:mt-4 text-xs sm:text-base text-brand-secondary leading-relaxed max-w-2xl">
              <span className="sm:hidden">
                High-converting websites and digital storefronts engineered to turn enquiries into paying customers.
              </span>
              <span className="hidden sm:inline">
                We design and build professional websites, digital storefronts, and brand
                experiences that help businesses present themselves with confidence,
                streamline customer enquiries, and win more sales.
              </span>
            </p>

            <div className="mt-4 sm:mt-6 flex flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <Button href="/contact" variant="accent" size="sm" className="flex-1 sm:flex-initial px-4 sm:px-6 font-bold whitespace-nowrap justify-center text-xs sm:text-sm">
                <span>Start a project</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1" />
              </Button>

              <Button href="/work" variant="secondary" size="sm" className="flex-1 sm:flex-initial px-3 sm:px-6 whitespace-nowrap justify-center text-xs sm:text-sm">
                Explore our work
              </Button>
            </div>

            <div className="mt-3.5 sm:mt-7 pt-2.5 sm:pt-5 border-t border-brand-border/70 flex items-center justify-between sm:justify-start gap-2 sm:gap-6 text-[10.5px] sm:text-sm text-brand-secondary font-medium w-full">
              <span className="inline-flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                Websites
              </span>
              <span className="inline-flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                Storefronts
              </span>
              <span className="inline-flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                Brand Systems
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Mobile & Desktop Device Stage */}
          <div className="lg:col-span-5 xl:col-span-6 w-full min-w-0 max-w-full flex justify-center lg:justify-end">
            <InteractiveDeviceStage />
          </div>
        </div>
      </Container>
    </section>
  );
}
