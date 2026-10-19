import type { Metadata } from "next";
import {
  Globe,
  Store,
  Palette,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Services & Scope",
  description:
    "Explore Gridmark's core services: business websites, digital storefront catalogues, social media branding systems, and ongoing technical maintenance.",
};

const iconMap = {
  Globe,
  Store,
  Palette,
  ShieldCheck,
};

const FAQS = [
  {
    q: "What is the difference between a digital storefront and full e-commerce?",
    a: "A digital storefront gives your store an organized online product catalogue with full specs, advertised prices, high-res photos, and instant WhatsApp enquiry buttons. It eliminates customer confusion without requiring expensive payment gateway setups, inventory sync software, or delivery integrations.",
  },
  {
    q: "Can you add online card payments later?",
    a: "Yes. Our architectures are modular. When your transaction volume justifies automated checkout and inventory reconciliation, payment processing and order management can be integrated seamlessly.",
  },
  {
    q: "How long does a typical project take from start to launch?",
    a: "Standard business websites and storefront catalogues typically take 2 to 4 weeks, depending on how quickly product photos, specifications, and brand assets are prepared.",
  },
  {
    q: "Do you provide hosting and domain registration?",
    a: "We configure and deploy your website to industry-leading infrastructure (such as Vercel) and help connect your custom domain (e.g. yourstore.com or yourstore.ng). Domain purchase and recurring hosting fees are transparent and direct.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12 sm:py-20">
        <Container>
          {/* Services Hero Header */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <Reveal direction="up" delay={0.1}>
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary">
                Our Capabilities
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-brand-primary">
                Digital services designed around practical business goals.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="mt-5 text-base sm:text-lg text-brand-secondary leading-relaxed">
                We design and build digital solutions that fit into your existing operations.
                No bloated software you don&apos;t need—only practical, well-executed systems
                that make your products and services easier to discover and buy.
              </p>
            </Reveal>
          </div>

          {/* Detailed Service Sections */}
          <div className="space-y-16 sm:space-y-24">
            {servicesData.map((service) => {
              const Icon = iconMap[service.iconName as keyof typeof iconMap] || Globe;

              return (
                <section
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-brand-surface border border-brand-border/90 shadow-2xs"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left: Service Overview */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                      <div>
                        <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-primary border border-brand-border/80 mb-6">
                          <Icon className="w-6 h-6" />
                        </div>

                        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-primary tracking-tight">
                          {service.title}
                        </h2>

                        <p className="mt-4 text-base text-brand-secondary leading-relaxed">
                          {service.fullDescription}
                        </p>

                        {service.scopeNotes && (
                          <div className="mt-6 p-4 rounded-xl bg-brand-bg/60 border border-brand-border/70 text-xs text-brand-secondary leading-relaxed">
                            <strong className="text-brand-primary font-semibold block mb-0.5">
                              Scope Consideration:
                            </strong>
                            {service.scopeNotes}
                          </div>
                        )}
                      </div>

                      <div className="mt-8 pt-6 border-t border-brand-border/60">
                        <Button href="/contact" variant="accent" size="md">
                          <span>Request quotation for this service</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>

                    {/* Right: Deliverables Checklist */}
                    <div className="lg:col-span-6 bg-brand-bg/50 p-6 sm:p-8 rounded-2xl border border-brand-border/70">
                      <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-primary mb-5">
                        Key Deliverables & Inclusions:
                      </h3>

                      <ul className="space-y-3.5">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-brand-primary">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          {/* Frequently Asked Questions */}
          <section className="mt-24 pt-20 border-t border-brand-border/80">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary">
                Common Questions
              </span>
              <h2 className="mt-2 font-heading font-extrabold text-3xl text-brand-primary">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-7 rounded-2xl bg-brand-surface border border-brand-border/80"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading font-bold text-base text-brand-primary">
                        {faq.q}
                      </h3>
                      <p className="mt-2 text-sm text-brand-secondary leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Conversion Prompt */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-brand-dark-surface text-brand-dark-text text-center flex flex-col items-center">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Have a specific project in mind?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-brand-dark-text/75 max-w-lg">
              Let&apos;s evaluate your current setup and determine the best approach
              for your business.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <Button href="/contact" variant="accent" size="md">
                Start a project conversation
              </Button>
              <Button href="/work" variant="outline" size="md" className="border-white/20 text-white hover:bg-white/10">
                View Northstar Electronics Case Study
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
