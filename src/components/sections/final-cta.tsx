import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/config/contact";
import { Reveal } from "@/components/motion/reveal";

export function FinalCta() {
  return (
    <section className="w-full py-20 sm:py-28 bg-brand-dark-surface text-brand-dark-text relative overflow-hidden">
      {/* Decorative subtle ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <Reveal direction="down" delay={0.1}>
            <span className="text-xs font-heading font-semibold uppercase tracking-widest text-brand-accent">
              Get Started
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight">
              Let&apos;s build something useful for your business.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="mt-5 text-base sm:text-lg text-brand-dark-text/75 leading-relaxed max-w-xl">
              Tell us what you&apos;re trying to achieve. We&apos;ll discuss your requirements
              and outline the next practical, commercially sensible step.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button href="/contact" variant="accent" size="lg" className="w-full sm:w-auto">
                <span>Start a project</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button
                href={getWhatsAppUrl()}
                external
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </Button>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.5}>
            <p className="mt-8 text-xs text-brand-dark-text/50">
              Clear deliverables · No invented hype · Tailored for Lagos & global business
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
