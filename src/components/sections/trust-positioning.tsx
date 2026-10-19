import React from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function TrustPositioning() {
  return (
    <section className="w-full py-16 sm:py-20 border-y border-brand-border/70 bg-brand-surface/60">
      <Container>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <Reveal direction="up" delay={0.1}>
            <span className="text-xs font-heading font-semibold uppercase tracking-widest text-brand-secondary">
              Our Core Philosophy
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight text-brand-primary leading-tight">
              Built around the way your business works.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="mt-5 text-base sm:text-lg text-brand-secondary leading-relaxed max-w-2xl">
              Your online presence should make your business easier to understand,
              your products easier to explore, and your next customer conversation
              easier to start.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-left pt-8 border-t border-brand-border/60">
              <div className="p-4 rounded-xl bg-brand-bg/50 border border-brand-border/60">
                <span className="font-mono text-xs text-brand-secondary font-bold">01</span>
                <h3 className="font-heading font-bold text-sm text-brand-primary mt-1.5">
                  Clear Catalogues
                </h3>
                <p className="text-xs text-brand-secondary mt-1 leading-relaxed">
                  No more sending 50 scattered photos on WhatsApp to explain what you have in stock.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-bg/50 border border-brand-border/60">
                <span className="font-mono text-xs text-brand-secondary font-bold">02</span>
                <h3 className="font-heading font-bold text-sm text-brand-primary mt-1.5">
                  Direct Enquiries
                </h3>
                <p className="text-xs text-brand-secondary mt-1 leading-relaxed">
                  Every product link routes qualified buyers right into your active sales channel.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-bg/50 border border-brand-border/60">
                <span className="font-mono text-xs text-brand-secondary font-bold">03</span>
                <h3 className="font-heading font-bold text-sm text-brand-primary mt-1.5">
                  High-Trust Image
                </h3>
                <p className="text-xs text-brand-secondary mt-1 leading-relaxed">
                  Give customers the confidence to order with transparent specs, warranty, and pricing.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
