import Link from "next/link";
import { MessageSquare, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/config/contact";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-dark-surface text-brand-dark-text mt-auto border-t border-white/10 safe-bottom">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Logo isDark={true} />
            <p className="text-sm sm:text-base text-brand-dark-text/70 max-w-sm leading-relaxed">
              {siteConfig.tagline} We design and build professional websites,
              digital storefronts, and brand systems for ambitious businesses in
              Lagos and beyond.
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-brand-dark-text/75 pt-2">
              <div className="inline-flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0" />
                <span>{siteConfig.contact.location}</span>
              </div>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2.5 hover:text-brand-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-brand-accent transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-brand-accent shrink-0" />
                <span>WhatsApp Project Enquiry</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Services */}
            <div className="flex flex-col gap-3.5">
              <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-brand-accent">
                Services
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm text-brand-dark-text/70">
                <li>
                  <Link
                    href="/services#business-websites"
                    className="hover:text-brand-dark-text transition-colors"
                  >
                    Business Websites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#digital-storefronts"
                    className="hover:text-brand-dark-text transition-colors"
                  >
                    Digital Storefronts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#social-media-branding"
                    className="hover:text-brand-dark-text transition-colors"
                  >
                    Social Media Branding
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#maintenance"
                    className="hover:text-brand-dark-text transition-colors"
                  >
                    Maintenance & Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-3.5">
              <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-brand-accent">
                Company
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm text-brand-dark-text/70">
                <li>
                  <Link
                    href="/"
                    className="hover:text-brand-dark-text transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work"
                    className="hover:text-brand-dark-text transition-colors"
                  >
                    Featured Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-brand-dark-text transition-colors"
                  >
                    About Gridmark
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-brand-dark-text transition-colors"
                  >
                    Start a Project
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Domain */}
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-3.5">
              <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-brand-accent">
                Legal
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm text-brand-dark-text/70">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-brand-dark-text transition-colors"
                  >
                    Privacy Notice
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-brand-dark-text transition-colors"
                  >
                    Terms of Use
                  </Link>
                </li>
              </ul>
              <p className="text-xs text-brand-dark-text/50 pt-2 leading-relaxed">
                Proposed domain: {siteConfig.proposedDomain}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-dark-text/50">
          <p>© {currentYear} GRIDMARK. All rights reserved.</p>
          <p>Built with precision in Lagos, Nigeria.</p>
        </div>
      </Container>
    </footer>
  );
}
