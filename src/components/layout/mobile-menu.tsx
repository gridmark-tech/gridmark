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
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-brand-bg/98 backdrop-blur-xl md:hidden animate-in fade-in duration-200"
    >
      {/* Top Bar with Safe Area */}
      <div className="safe-top flex items-center justify-between px-5 py-4 border-b border-brand-border/60">
        <Logo showWordmark={true} />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-surface border border-brand-border text-brand-primary active:scale-95 transition-transform"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <nav className="flex flex-col gap-2">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "group flex items-center justify-between py-4 text-2xl font-heading font-bold tracking-tight transition-colors border-b border-brand-border/40",
                  isActive
                    ? "text-brand-primary"
                    : "text-brand-secondary hover:text-brand-primary"
                )}
              >
                <span>{item.label}</span>
                <ArrowRight
                  className={cn(
                    "w-5 h-5 transition-transform group-hover:translate-x-1",
                    isActive ? "text-brand-accent opacity-100" : "opacity-40"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions with Safe Area */}
        <div className="safe-bottom pt-8 flex flex-col gap-3">
          <Button
            href="/contact"
            variant="accent"
            size="lg"
            className="w-full"
            onClick={onClose}
          >
            Start a project
          </Button>

          <Button
            href={getWhatsAppUrl()}
            external
            variant="secondary"
            size="lg"
            className="w-full gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            Chat on WhatsApp
          </Button>

          <p className="text-center text-xs text-brand-secondary pt-3">
            Lagos, Nigeria · Digital solutions built for business
          </p>
        </div>
      </div>
    </div>
  );
}
