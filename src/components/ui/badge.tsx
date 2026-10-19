import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "dark" | "outline";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-brand-surface text-brand-primary border-brand-border",
    accent: "bg-brand-accent/25 text-brand-primary border-brand-accent/40 font-semibold",
    dark: "bg-brand-dark-surface text-brand-dark-text border-transparent",
    outline: "bg-transparent text-brand-secondary border-brand-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-heading font-medium tracking-wide uppercase rounded-full border shadow-2xs",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
