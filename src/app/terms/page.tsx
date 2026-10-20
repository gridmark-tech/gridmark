import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use and engagement principles for Gridmark.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12 sm:py-20">
        <Container className="max-w-4xl">
          <div className="mb-10">
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary">
              Legal & Terms
            </span>
            <h1 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl text-brand-primary">
              Terms of Use
            </h1>
            <p className="mt-3 text-sm text-brand-secondary font-sans font-medium">
              Last updated: October 2026
            </p>
          </div>

          <div className="prose prose-neutral max-w-none space-y-8 text-sm sm:text-base text-brand-secondary leading-relaxed p-8 sm:p-12 rounded-3xl bg-brand-surface border border-brand-border/90">
            <section>
              <h2 className="font-heading font-bold text-xl text-brand-primary mb-3">
                1. General Overview
              </h2>
              <p>
                This website is operated by Gridmark to present digital design and development services. By accessing or using this website, you agree to comply with these terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-brand-primary mb-3">
                2. Portfolio & Client Case Studies
              </h2>
              <p>
                Projects and case studies presented on this website illustrate production systems, user experience designs, and technical architectures designed and implemented by Gridmark.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-brand-primary mb-3">
                3. Project Engagements
              </h2>
              <p>
                Website quotations, timelines, deliverables, payment milestones, and handover arrangements are formalized under specific written project agreements. Submission of an enquiry form does not constitute a binding contract until agreed upon in writing.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-brand-primary mb-3">
                4. Intellectual Property
              </h2>
              <p>
                The Gridmark wordmark, logo, custom code, copy, and layout components on this website are the intellectual property of Gridmark unless otherwise indicated.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-brand-primary mb-3">
                5. Inquiries
              </h2>
              <p>
                For questions regarding these terms, contact us at{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-medium text-brand-primary underline"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
