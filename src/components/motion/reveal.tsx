"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  viewportMargin?: string;
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
  viewportMargin = "-40px",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offsetMap = {
    up: { y: 8, x: 0 },
    down: { y: -8, x: 0 },
    left: { x: 8, y: 0 },
    right: { x: -8, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initialOffset = offsetMap[direction];
  const effectiveDelay = Math.min(delay, 0.15);
  const effectiveDuration = Math.min(duration, 0.3);

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        duration: effectiveDuration,
        delay: effectiveDelay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
