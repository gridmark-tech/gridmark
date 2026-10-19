import type { Metadata } from "next";
import { MapPin, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "About Gridmark & Working Philosophy",
  description:
    "Learn about Gridmark's background, operating philosophy, and approach to designing digital storefronts and websites for commercial businesses.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Clarity over clutter",
      description:
        "Every page and interface element must have a clear reason to exist. We remove visual noise so customers can quickly find specs, pricing, and answers.",
    },
    {
      title: "Business value over complexity",
      description:
        "We don't sell bloated features just because they exist. If a streamlined catalogue and WhatsApp button will generate more revenue than an over-engineered cart, that is what we build.",
    },
    {
      title: "Responsive from the beginning",
      description:
        "Most of your customers in Nigeria will explore your business on a smartphone. We design mobile experiences that feel fast, native, and easy to navigate with one hand.",
    },
    {
      title: "Honest communication & defined scope",
      description:
        "No vague promises or surprise charges. We establish fixed scope, clear milestones, and realistic timelines before beginning development.",
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 py-12 sm:py-20">
        <Container>
          {/* Header */}
          <div className="max-w-3xl mb-14 sm:mb-18">
            <Reveal direction="up" delay={0.1}>
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary">
                About Gridmark
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-brand-primary leading-tight">
                We believe every business deserves a thoughtful digital presence.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="mt-6 text-base sm:text-lg text-brand-secondary leading-relaxed">
                Gridmark is a digital solutions brand focused on helping businesses present themselves professionally online.
                We build websites, digital storefronts, and cohesive brand experiences designed around practical commercial needs.
              </p>
            </Reveal>
          </div>

          {/* Narrative Overview */}
          <section className="p-8 sm:p-12 rounded-3xl bg-brand-surface border border-brand-border/90 shadow-2xs mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-brand-secondary leading-relaxed">
                <h2 className="font-heading font-bold text-2xl text-brand-primary">
                  Practical digital craft for commercial realities.
                </h2>
                <p>
                  Many businesses in Lagos operate thriving physical stores, maintain active WhatsApp customer chats, and have loyal followings. Yet their online presence often fails to do justice to their physical quality.
                </p>
                <p>
                  When product photos, technical specs, and prices are scattered across hundreds of chat messages and Instagram stories, customer service becomes an exhausting, repetitive manual chore.
                </p>
                <p>
                  Gridmark exists to solve this friction. Our approach combines thoughtful design, clean technical implementation, and a clear understanding of what customers need to see and do. The goal is simple: create digital experiences that make businesses easier to understand, explore, and contact.
                </p>
              </div>

              <div className="lg:col-span-5 bg-brand-bg/60 p-6 sm:p-8 rounded-2xl border border-brand-border/70 space-y-4">
                <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-brand-primary">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Operating Focus: Lagos, Nigeria</span>
                </div>
                <p className="text-xs text-brand-secondary leading-relaxed">
                  Headquartered in Lagos with a focus on high-density retail sectors such as computer hardware, consumer electronics, and professional services.
                </p>
                <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-primary font-medium">
                  <span>Transparent Fixed Engagements</span>
                  <span className="font-heading text-emerald-600 font-bold">100% Honest</span>
                </div>
              </div>
            </div>
          </section>

          {/* 4 Working Principles */}
          <section className="mb-20">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary">
                Our Standards
              </span>
              <h2 className="mt-2 font-heading font-extrabold text-2xl sm:text-3xl text-brand-primary">
                Four Working Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="p-7 rounded-2xl bg-brand-surface border border-brand-border/80 shadow-2xs"
                >
                  <span className="font-heading text-xs font-black text-brand-secondary/60 block mb-3">
                    0{index + 1}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-brand-primary">
                    {principle.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-brand-secondary leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-brand-dark-surface text-brand-dark-text flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                Interested in working together?
              </h3>
              <p className="mt-1 text-sm text-brand-dark-text/75">
                Let&apos;s talk about what your business needs to succeed online.
              </p>
            </div>
            <Button href="/contact" variant="accent" size="lg" className="shrink-0">
              <span>Start a project enquiry</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
