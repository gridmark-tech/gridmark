import type { Metadata } from "next";
import { CheckCircle2, Zap } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StorefrontMockup } from "@/components/sections/storefront-mockup";
import { projectsData } from "@/data/projects";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Featured Work & Concepts",
  description:
    "Explore Gridmark's portfolio and technical demonstrations, including the Northstar Electronics Lagos digital storefront concept.",
};

export default function WorkPage() {
  const project = projectsData[0];

  return (
    <>
      <Header />
      <main className="flex-1 py-12 sm:py-20">
        <Container>
          {/* Header */}
          <div className="max-w-3xl mb-14 sm:mb-18">
            <Reveal direction="up" delay={0.1}>
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary">
                Portfolio & Demonstrations
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-brand-primary">
                Demonstrated craft and practical engineering.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="mt-4 text-base sm:text-lg text-brand-secondary leading-relaxed">
                Rather than inventing exaggerated claims or fabricated client lists,
                we demonstrate our capabilities through thorough, production-grade
                demonstrations designed for real market contexts.
              </p>
            </Reveal>
          </div>

          {/* Northstar Electronics Deep Dive */}
          <section className="rounded-3xl bg-brand-surface border border-brand-border/90 shadow-sm p-6 sm:p-10 lg:p-12 mb-16">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-border/70 pb-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="accent">Concept Project</Badge>
                  <span className="text-xs font-mono text-brand-secondary">
                    {project.clientType}
                  </span>
                </div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-primary tracking-tight">
                  {project.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <Button href="/contact" variant="dark" size="sm">
                  Request similar build
                </Button>
              </div>
            </div>

            {/* Two column: Overview & Live Interactive Mockup */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Context & Decisions */}
              <div className="lg:col-span-6 space-y-8">
                <div>
                  <h3 className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-primary mb-3">
                    The Problem We Addressed
                  </h3>
                  <p className="text-sm sm:text-base text-brand-secondary leading-relaxed">
                    Computer and electronics retailers in Lagos handle heavy customer
                    traffic across physical shops (such as Computer Village) and WhatsApp.
                    However, without a central digital catalogue, staff spend hours re-typing
                    specifications, confirming prices, and sending device photos.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-primary mb-3">
                    Project Objectives
                  </h3>
                  <ul className="space-y-2.5">
                    {project.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-brand-primary">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-primary mb-3">
                    Key Interface Decisions
                  </h3>
                  <ul className="space-y-2.5">
                    {project.keyDecisions.map((dec, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-brand-secondary">
                        <Zap className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                        <span>{dec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-primary mb-3">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-brand-bg text-xs font-mono font-medium text-brand-primary border border-brand-border/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Live Mockup Component */}
              <div className="lg:col-span-6">
                <StorefrontMockup />
                <p className="mt-4 text-xs text-brand-secondary text-center leading-relaxed">
                  Interactive simulation showing product filtering, stock availability flags,
                  and direct WhatsApp conversion.
                </p>
              </div>
            </div>
          </section>

          {/* Portfolio Note & CTA */}
          <div className="p-8 sm:p-12 rounded-3xl bg-brand-dark-surface text-brand-dark-text flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                Want a custom storefront or business website?
              </h3>
              <p className="mt-2 text-sm text-brand-dark-text/75 leading-relaxed">
                We can adapt this exact architecture to your brand, product categories,
                and inventory structure.
              </p>
            </div>
            <Button href="/contact" variant="accent" size="lg" className="shrink-0">
              Discuss your project
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
