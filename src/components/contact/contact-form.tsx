"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { SERVICE_OPTIONS, BUDGET_OPTIONS } from "@/config/contact";
import { Button } from "@/components/ui/button";
import { Dropdown } from "@/components/ui/dropdown";
import type { ContactFormData } from "@/types";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    businessName: "",
    email: "",
    service: "digital-storefronts",
    message: "",
    websiteOrSocial: "",
    budget: "tier-2",
    timeframe: "within-month",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific field error on edit
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.details) {
          setFieldErrors(result.details);
        }
        throw new Error(result.error || "Failed to submit enquiry. Please try again.");
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please message us on WhatsApp.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-brand-surface border border-brand-border shadow-sm text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading font-extrabold text-2xl text-brand-primary">
          Enquiry Received
        </h3>
        <p className="mt-3 text-sm sm:text-base text-brand-secondary max-w-md leading-relaxed">
          Thank you for reaching out to Gridmark. We have received your project details
          and will review your requirements. You will hear back from us within 24 hours.
        </p>
        <div className="mt-8">
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                name: "",
                businessName: "",
                email: "",
                service: "digital-storefronts",
                message: "",
                websiteOrSocial: "",
                budget: "tier-2",
                timeframe: "within-month",
              });
            }}
          >
            Submit another enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-2xl bg-brand-surface border border-brand-border/90 shadow-sm flex flex-col gap-6"
      noValidate
    >
      {errorMessage && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Submission Failed</p>
            <p className="text-xs text-red-700 mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Row 1: Name and Business Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-heading font-semibold uppercase tracking-wider text-brand-primary mb-2"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Tunde Balogun"
            className={`w-full h-11 px-4 rounded-xl bg-brand-bg/50 border text-brand-primary placeholder:text-brand-secondary/50 focus:bg-white focus:outline-2 focus:outline-brand-primary text-base transition-colors ${
              fieldErrors.name ? "border-red-500" : "border-brand-border"
            }`}
          />
          {fieldErrors.name && (
            <p className="mt-1.5 text-xs text-red-600 font-medium">
              {fieldErrors.name[0]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="businessName"
            className="block text-xs font-heading font-semibold uppercase tracking-wider text-brand-primary mb-2"
          >
            Business / Store Name
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            autoComplete="organization"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="e.g. Apex Electronics Ltd"
            className="w-full h-11 px-4 rounded-xl bg-brand-bg/50 border border-brand-border text-brand-primary placeholder:text-brand-secondary/50 focus:bg-white focus:outline-2 focus:outline-brand-primary text-base transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Email and Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-heading font-semibold uppercase tracking-wider text-brand-primary mb-2"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@business.com"
            className={`w-full h-11 px-4 rounded-xl bg-brand-bg/50 border text-brand-primary placeholder:text-brand-secondary/50 focus:bg-white focus:outline-2 focus:outline-brand-primary text-base transition-colors ${
              fieldErrors.email ? "border-red-500" : "border-brand-border"
            }`}
          />
          {fieldErrors.email && (
            <p className="mt-1.5 text-xs text-red-600 font-medium">
              {fieldErrors.email[0]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-xs font-heading font-semibold uppercase tracking-wider text-brand-primary mb-2"
          >
            Service of Interest <span className="text-red-500">*</span>
          </label>
          <Dropdown
            id="service"
            name="service"
            value={formData.service}
            onChange={(val) => {
              setFormData((prev) => ({ ...prev, service: val }));
              if (fieldErrors.service) {
                setFieldErrors((prev) => {
                  const next = { ...prev };
                  delete next.service;
                  return next;
                });
              }
            }}
            options={SERVICE_OPTIONS}
            placeholder="Select service"
          />
        </div>
      </div>

      {/* Row 3: Website/Social and Indicative Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="websiteOrSocial"
            className="block text-xs font-heading font-semibold uppercase tracking-wider text-brand-primary mb-2"
          >
            Current Website or Social Page
          </label>
          <input
            id="websiteOrSocial"
            name="websiteOrSocial"
            type="url"
            value={formData.websiteOrSocial}
            onChange={handleChange}
            placeholder="instagram.com/yourhandle or existing URL"
            className="w-full h-11 px-4 rounded-xl bg-brand-bg/50 border border-brand-border text-brand-primary placeholder:text-brand-secondary/50 focus:bg-white focus:outline-2 focus:outline-brand-primary text-base transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="budget"
            className="block text-xs font-heading font-semibold uppercase tracking-wider text-brand-primary mb-2"
          >
            Indicative Scope / Tier
          </label>
          <Dropdown
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={(val) => {
              setFormData((prev) => ({ ...prev, budget: val }));
              if (fieldErrors.budget) {
                setFieldErrors((prev) => {
                  const next = { ...prev };
                  delete next.budget;
                  return next;
                });
              }
            }}
            options={BUDGET_OPTIONS}
            placeholder="Select scope / tier"
          />
        </div>
      </div>

      {/* Row 4: Message Description */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-heading font-semibold uppercase tracking-wider text-brand-primary mb-2"
        >
          Project Description & Requirements <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us what you sell, what challenges you face with customer orders, and what you want the new website or storefront to achieve..."
          className={`w-full p-4 rounded-xl bg-brand-bg/50 border text-brand-primary placeholder:text-brand-secondary/50 focus:bg-white focus:outline-2 focus:outline-brand-primary text-base transition-colors ${
            fieldErrors.message ? "border-red-500" : "border-brand-border"
          }`}
        />
        {fieldErrors.message && (
          <p className="mt-1.5 text-xs text-red-600 font-medium">
            {fieldErrors.message[0]}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-brand-secondary order-2 sm:order-1 text-center sm:text-left">
          No automated spam. Your details remain confidential.
        </p>
        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto order-1 sm:order-2 gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Project Enquiry</span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
