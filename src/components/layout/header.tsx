"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { siteConfig } from "@/config/site";
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
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Header with balanced margins from top & viewport edges */}
      <header className="sticky top-2 sm:top-3 z-40 w-full px-3 sm:px-6 lg:px-8 safe-top">
        <div
          className={cn(
            "mx-auto w-full max-w-[1320px] rounded-2xl transition-all duration-200 px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between",
            isScrolled
              ? "bg-brand-surface/95 backdrop-blur-md border border-brand-border shadow-sm"
              : "bg-brand-surface/85 backdrop-blur-md border border-brand-border/80 shadow-2xs"
          )}
        >
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-1.5 px-2 py-1 rounded-full bg-brand-bg/70 border border-brand-border/60"
          >
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-1.5 text-xs sm:text-sm font-heading font-medium rounded-full transition-colors",
                    isActive
                      ? "bg-brand-dark-surface text-brand-dark-text shadow-2xs font-semibold"
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
            <Button href="/contact" variant="dark" size="sm" className="h-9 px-4 text-xs">
              Start a project
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              href="/contact"
              variant="dark"
              size="sm"
              className="text-xs h-8.5 px-3"
            >
              Start project
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-brand-surface border border-brand-border text-brand-primary active:scale-95 transition-transform"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dialog */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={handleCloseMobileMenu}
      />
    </>
  );
}
