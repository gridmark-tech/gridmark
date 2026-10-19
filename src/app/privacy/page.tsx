import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "Privacy notice and data handling practices for Gridmark website visitors.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12 sm:py-20">
        <Container className="max-w-4xl">
          <div className="mb-10">
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-secondary">
              Legal & Transparency
            </span>
            <h1 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl text-brand-primary">
              Privacy Notice
            </h1>
            <p className="mt-3 text-sm text-brand-secondary font-mono">
              Last updated: October 2026
            </p>
          </div>

          <div className="prose prose-neutral max-w-none space-y-8 text-sm sm:text-base text-brand-secondary leading-relaxed p-8 sm:p-12 rounded-3xl bg-brand-surface border border-brand-border/90">
            <section>
              <h2 className="font-heading font-bold text-xl text-brand-primary mb-3">
                1. Information We Collect
              </h2>
              <p>
                When you submit a project enquiry through our contact form or contact us via WhatsApp, we collect the details you voluntarily provide. This typically includes your name, business name, email address, website/social URLs, and project requirements.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-brand-primary mb-3">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information you provide solely to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-brand-primary">
                <li>Evaluate your project scope and feasibility</li>
                <li>Prepare and send project quotations or follow-up communications</li>
                <li>Deliver agreed digital design and development services</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or trade your personal or commercial contact information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-brand-primary mb-3">
                3. Third-Party Integrations
              </h2>
              <p>
                If you choose to contact us via WhatsApp, communications are handled in accordance with WhatsApp&apos;s privacy policies. We do not embed invasive third-party cross-site marketing trackers or sell advertising on this website.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-brand-primary mb-3">
                4. Data Retention and Security
              </h2>
              <p>
                We retain enquiry records for as long as necessary to fulfill project communications and commercial record-keeping. Appropriate technical safeguards are implemented to protect your communications against unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-brand-primary mb-3">
                5. Contact Us
              </h2>
              <p>
                If you have questions about how your information is handled, you may contact us at{" "}
                <a
                  href="mailto:hello@gridmark.tech"
                  className="font-medium text-brand-primary underline"
                >
                  hello@gridmark.tech
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
