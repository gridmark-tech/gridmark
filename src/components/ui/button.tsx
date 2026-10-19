import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "accent" | "dark" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  accent:
    "bg-brand-accent text-brand-primary font-semibold hover:brightness-105 border border-brand-accent shadow-sm",
  dark:
    "bg-brand-dark-surface text-brand-dark-text font-medium hover:bg-black/90 border border-brand-dark-surface shadow-sm",
  secondary:
    "bg-brand-surface text-brand-primary font-medium border border-brand-border hover:bg-neutral-50 shadow-xs",
  outline:
    "bg-transparent text-brand-primary font-medium border border-brand-border hover:border-brand-primary hover:bg-brand-surface/40",
  ghost:
    "bg-transparent text-brand-primary font-medium hover:bg-black/5 border border-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-xs sm:text-sm rounded-lg gap-1.5",
  md: "h-11 px-5 text-sm sm:text-base rounded-xl gap-2",
  lg: "h-13 px-7 text-base sm:text-lg rounded-xl gap-2.5",
};

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = "accent",
      size = "md",
      className,
      children,
      href,
      ...rest
    } = props;

    const baseClasses = cn(
      "inline-flex items-center justify-center text-center font-heading transition-all duration-150 ease-out",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary",
      "active:scale-[0.98] select-none touch-manipulation disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href !== undefined) {
      const isExternal =
        "external" in props ? props.external : href.startsWith("http") || href.startsWith("https");

      // Strip 'external' prop so it never spreads onto the DOM element
      const anchorRest = { ...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement> & { external?: boolean }) };
      delete anchorRest.external;

      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClasses}
            {...anchorRest}
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseClasses}
          {...anchorRest}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseClasses}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
