import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  businessName: z
    .string()
    .trim()
    .max(100, "Business name must be less than 100 characters")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address")
    .max(255, "Email address is too long"),
  service: z
    .string()
    .min(1, "Please select the service of interest"),
  message: z
    .string()
    .trim()
    .min(10, "Please provide at least a brief 10-character description")
    .max(3000, "Message must be under 3000 characters"),
  websiteOrSocial: z
    .string()
    .trim()
    .max(200, "URL must be under 200 characters")
    .optional()
    .or(z.literal("")),
  budget: z
    .string()
    .optional()
    .or(z.literal("")),
  timeframe: z
    .string()
    .optional()
    .or(z.literal("")),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
