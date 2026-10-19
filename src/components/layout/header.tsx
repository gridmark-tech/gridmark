"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleCloseMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200 safe-top",
          isScrolled
            ? "bg-brand-bg/90 backdrop-blur-md border-b border-brand-border/80 shadow-2xs py-3"
            : "bg-transparent py-4 sm:py-6"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-brand-surface/80 backdrop-blur-xs border border-brand-border/60 shadow-2xs"
          >
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-heading font-medium rounded-full transition-colors",
                    isActive
                      ? "bg-brand-dark-surface text-brand-dark-text shadow-2xs"
                      : "text-brand-secondary hover:text-brand-primary hover:bg-black/5"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button href="/contact" variant="dark" size="sm">
              Start a project
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              href="/contact"
              variant="dark"
              size="sm"
              className="text-xs h-9 px-3"
            >
              Start project
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-surface border border-brand-border text-brand-primary active:scale-95 transition-transform"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Dialog */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={handleCloseMobileMenu}
      />
    </>
  );
}
