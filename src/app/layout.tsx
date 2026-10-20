import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F7F4" },
    { media: "(prefers-color-scheme: dark)", color: "#171916" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "Gridmark | Websites & Digital Storefronts for Businesses",
    template: "%s | Gridmark",
  },
  description: siteConfig.description,
  keywords: [
    "website development Lagos",
    "digital storefronts Nigeria",
    "electronics store website",
    "business web design",
    "product catalogue web design",
    "brand experiences Lagos",
    "sub-second e-commerce",
  ],
  authors: [{ name: "Gridmark", url: siteConfig.url }],
  creator: "Gridmark",
  publisher: "Gridmark",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteConfig.url,
    title: "Gridmark | Websites & Digital Storefronts for Businesses",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Gridmark Digital Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gridmark | Websites & Digital Storefronts for Businesses",
    description: siteConfig.description,
    images: ["/images/hero/hero-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-primary font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
