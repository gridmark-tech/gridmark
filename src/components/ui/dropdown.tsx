"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Check } from "lucide-react";

export interface DropdownOption {
  value: string;
  label: string;
  description?: string;
  badge?: string;
}

interface DropdownProps {
  id?: string;
  name?: string;
  value?: string;
  onChange: (value: string) => void;
  options: readonly DropdownOption[] | DropdownOption[];
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function Dropdown({
  id,
  name,
  value = "",
  onChange,
  options,
  placeholder = "Select an option",
  className = "",
  disabled = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close on outside click or blur
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Hidden input for form data serialization if needed */}
      {name && <input type="hidden" name={name} value={value} />}

      <button
        type="button"
        id={id}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        className={`w-full h-11 px-4 rounded-xl bg-brand-bg/50 border border-brand-border text-brand-primary hover:bg-brand-bg/80 focus:bg-white focus:outline-2 focus:outline-brand-primary text-base sm:text-sm flex items-center justify-between transition-colors cursor-pointer text-left select-none ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`}
      >
        <span
          className={`truncate ${
            selectedOption ? "text-brand-primary" : "text-brand-secondary/60"
          }`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-brand-secondary shrink-0 ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="listbox"
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 top-full mt-1.5 z-50 p-1.5 bg-white border border-brand-border rounded-2xl shadow-xl max-h-80 overflow-y-auto no-scrollbar"
          >
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <div
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`px-3.5 py-3 rounded-xl flex items-start justify-between cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-brand-primary text-white"
                      : "text-brand-primary hover:bg-neutral-100"
                  }`}
                >
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-heading font-bold text-sm tracking-tight leading-snug">
                        {opt.label}
                      </span>
                      {opt.badge && (
                        <span
                          className={`text-[10px] font-sans px-2 py-0.5 rounded-full font-semibold tracking-wide shrink-0 ${
                            isSelected
                              ? "bg-white/20 text-brand-accent"
                              : "bg-brand-bg text-brand-secondary border border-brand-border/70"
                          }`}
                        >
                          {opt.badge}
                        </span>
                      )}
                    </div>
                    {opt.description && (
                      <p
                        className={`text-xs mt-1 leading-snug ${
                          isSelected ? "text-neutral-300" : "text-brand-secondary"
                        }`}
                      >
                        {opt.description}
                      </p>
                    )}
                  </div>
                  {isSelected && (
                    <Check className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
