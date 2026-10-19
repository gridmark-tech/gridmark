import type { Metadata } from "next";
import { MessageSquare, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/config/contact";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Contact & Project Enquiry",
  description:
    "Start a website or digital storefront project with Gridmark. Message directly on WhatsApp or submit a structured project enquiry.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12 sm:py-20">
        <Container>
          {/* Header */}
          <div className="max-w-2xl mb-12 sm:mb-16">
            <Reveal direction="up" delay={0.1}>
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary">
                Start a Conversation
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-brand-primary">
                Let&apos;s discuss your next digital project.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="mt-4 text-base sm:text-lg text-brand-secondary leading-relaxed">
                Whether you need a full digital storefront for your retail shop, a
                crisp business website, or cohesive brand templates, choose the
                enquiry method that suits you best.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Contact Info & WhatsApp Direct */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* WhatsApp Priority Card */}
              <Reveal direction="up" delay={0.2}>
                <div className="p-7 rounded-2xl bg-brand-surface border border-brand-border/90 shadow-2xs">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h2 className="font-heading font-bold text-xl text-brand-primary">
                    Fastest Response: WhatsApp
                  </h2>
                  <p className="mt-2 text-sm text-brand-secondary leading-relaxed">
                    Have quick questions about our storefront catalogues, timelines, or pricing? Chat directly with us.
                  </p>
                  <div className="mt-6">
                    <Button
                      href={getWhatsAppUrl()}
                      external
                      variant="dark"
                      size="md"
                      className="w-full gap-2 bg-emerald-700 hover:bg-emerald-800 border-emerald-700 text-white"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open WhatsApp Chat</span>
                      <ArrowRight className="w-4 h-4 ml-auto" />
                    </Button>
                  </div>
                </div>
              </Reveal>

              {/* Business Details Card */}
              <Reveal direction="up" delay={0.3}>
                <div className="p-7 rounded-2xl bg-brand-surface border border-brand-border/90 shadow-2xs space-y-5">
                  <h3 className="font-heading font-bold text-base text-brand-primary">
                    Communication Standards
                  </h3>

                  <div className="flex items-start gap-3.5 text-sm">
                    <Mail className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-brand-primary block">Email Enquiries</span>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-brand-secondary hover:text-brand-primary transition-colors text-xs"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 text-sm">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-brand-primary block">Operating Base</span>
                      <span className="text-brand-secondary text-xs">{siteConfig.contact.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 text-sm">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-brand-primary block">Typical Response Time</span>
                      <span className="text-brand-secondary text-xs">Within 24 business hours</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Structured Enquiry Form */}
            <div className="lg:col-span-7">
              <Reveal direction="up" delay={0.3}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
