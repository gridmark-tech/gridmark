"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/config/contact";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Close when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Lock body scroll
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const prevPathnameRef = React.useRef(pathname);

  // Close only when route actually changes
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs md:hidden animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Floating Island Menu Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        className="fixed inset-x-3 top-3 bottom-auto max-h-[calc(100dvh-1.5rem)] z-50 flex flex-col rounded-3xl bg-brand-surface/98 backdrop-blur-2xl border border-brand-border/90 shadow-2xl overflow-hidden md:hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Top Bar matching Floating Navbar styling */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-brand-border/70">
          <Logo showWordmark={true} />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-brand-bg border border-brand-border text-brand-primary active:scale-95 transition-transform cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col justify-between">
          <nav className="flex flex-col gap-1">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "group flex items-center justify-between py-3 px-3 rounded-xl font-heading font-bold text-lg tracking-tight transition-colors",
                    isActive
                      ? "bg-brand-dark-surface text-brand-dark-text"
                      : "text-brand-secondary hover:text-brand-primary hover:bg-black/5"
                  )}
                >
                  <span>{item.label}</span>
                  <ArrowRight
                    className={cn(
                      "w-4 h-4 transition-transform group-hover:translate-x-1",
                      isActive ? "text-brand-accent opacity-100" : "opacity-40"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="pt-6 mt-4 border-t border-brand-border/60 flex flex-col gap-2.5">
            <Button
              href="/contact"
              variant="accent"
              size="md"
              className="w-full justify-center"
              onClick={onClose}
            >
              Start a project
            </Button>

            <Button
              href={getWhatsAppUrl()}
              external
              variant="secondary"
              size="md"
              className="w-full justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              Chat on WhatsApp
            </Button>

            <p className="text-center text-[11px] text-brand-secondary pt-1">
              Lagos, Nigeria · Digital solutions built for business
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
