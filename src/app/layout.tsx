import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
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
  ],
  authors: [{ name: "Gridmark" }],
  creator: "Gridmark",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteConfig.url,
    title: "Gridmark | Websites & Digital Storefronts for Businesses",
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gridmark | Websites & Digital Storefronts for Businesses",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
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
      </body>
    </html>
  );
}
