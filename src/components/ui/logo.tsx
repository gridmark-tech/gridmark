import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  isDark?: boolean;
}

export function Logo({ className, showWordmark = true, isDark = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Gridmark Homepage"
      className={cn(
        "inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 active:scale-[0.98]",
        className
      )}
    >
      {/* Geometric Gridmark Emblem */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        {/* Background rounded frame */}
        <rect
          width="32"
          height="32"
          rx="7"
          className={isDark ? "fill-brand-bg" : "fill-brand-dark-surface"}
        />
        {/* 2x2 modular grid blocks with accent highlight */}
        <rect
          x="7"
          y="7"
          width="7"
          height="7"
          rx="2"
          className={isDark ? "fill-brand-dark-surface" : "fill-brand-surface"}
        />
        <rect
          x="18"
          y="7"
          width="7"
          height="7"
          rx="2"
          className="fill-brand-accent"
        />
        <rect
          x="7"
          y="18"
          width="7"
          height="7"
          rx="2"
          className="fill-brand-accent"
        />
        <rect
          x="18"
          y="18"
          width="7"
          height="7"
          rx="2"
          className={isDark ? "fill-brand-dark-surface" : "fill-brand-surface"}
        />
        {/* Central precision crosshair notch */}
        <circle
          cx="16"
          cy="16"
          r="1.25"
          className={isDark ? "fill-brand-bg" : "fill-brand-dark-surface"}
        />
      </svg>

      {showWordmark && (
        <span
          className={cn(
            "font-heading font-extrabold text-lg tracking-[-0.03em] uppercase select-none",
            isDark ? "text-brand-dark-text" : "text-brand-primary"
          )}
        >
          GRIDMARK
        </span>
      )}
    </Link>
  );
}
