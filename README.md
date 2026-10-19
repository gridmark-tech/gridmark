# GRIDMARK

> **Digital experiences. Built for business.**

Gridmark is a digital solutions brand that helps businesses establish and improve their online presence through professional websites, digital storefronts, and cohesive digital branding.

The platform is engineered specifically for commercial retailers and enterprises in Lagos, Nigeria and beyond, providing instant-loading product catalogues, direct WhatsApp sales channels, and high-trust digital presentation.

---

## Tech Stack & Architecture

- **Framework:** [Next.js 16.4](https://nextjs.org) (App Router, Turbopack, Partial Prerendering)
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) with custom design tokens
- **Animations:** [Motion for React](https://motion.dev) with `prefers-reduced-motion` compliance
- **Typography:** Manrope (headings) & Inter (body) via `next/font/google`
- **Validation:** [Zod](https://zod.dev) for server and client schema validation
- **Icons:** [Lucide React](https://lucide.dev)
- **Deployment Target:** Vercel

---

## Design System Tokens

| Token | Hex Value | Description |
|---|---|---|
| Background | `#F7F7F4` | Primary light canvas |
| Surface | `#FFFFFF` | Elevated cards and containers |
| Primary Text | `#171916` | Main headings and high-contrast text |
| Secondary Text | `#646962` | Subtitles, body descriptions, and captions |
| Primary Accent | `#B8F36B` | High-visibility calls-to-action & accents |
| Border | `#E3E5DE` | Card outlines, dividers, and structural lines |
| Dark Surface | `#171916` | Feature contrast blocks and footer |
| Dark Text | `#F7F7F4` | Text on dark backgrounds |

---

## Strict Typography Standards

To guarantee visual consistency and prevent operating system font leaks:

- **Headings & Accent Labels:** `Manrope` (`font-heading`) strictly applied to all titles, section badges, and step markers.
- **Body, Metadata & Numbers:** `Inter` (`font-sans`) applied to all body copy, technical specs, pricing, and numbers.
- **Monospace Purge:** System monospace fallbacks are purged globally; `--font-mono` is re-mapped to `Inter` to prevent OS Courier/Liberation leaks.

---

## Mobile-Native Foundations

In accordance with mobile-native engineering standards:

1. **Tap Feedback:** Tap highlight flash eliminated (`-webkit-tap-highlight-color: transparent`), with tactile `:active` press transforms (`scale(0.98)`).
2. **Click Latency:** `touch-action: manipulation` applied to interactive controls to skip 300ms double-tap zoom delays.
3. **Viewport Auto-Zoom Fix:** Form input text sizes set to minimum 16px to prevent iOS Safari auto-zoom on focus.
4. **Edge-to-Edge Safe Areas:** Header and footer incorporate `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)`.
5. **Dynamic Viewport Height:** Mobile navigation and app layout utilize `100dvh` to seamlessly adjust with mobile browser address bars.
6. **Overscroll Guarding:** `overscroll-behavior-y: none` prevents accidental page rubber-banding during catalogue interaction.
7. **Control Selection Guard:** `user-select: none` applied to buttons and control handles while preserving copyable text on content.
8. **Scrollbar Suppression:** Global scrollbar track removal (`scrollbar-width: none !important`) ensuring an app-native aesthetic while retaining full mouse wheel and touch scrollability.

---

## Site Routes

| Route | Purpose |
|---|---|
| `/` | Homepage (Hero, Positioning, Services, Featured Concept, Principles, Process, Final CTA) |
| `/services` | Detailed breakdown of websites, storefronts, branding, maintenance, and FAQs |
| `/work` | Concept project showcase: *Northstar Electronics Digital Storefront* |
| `/about` | Brand philosophy, Lagos commercial context, and 4 working principles |
| `/contact` | Direct WhatsApp integration & validated project enquiry form |
| `/privacy` | Privacy and data protection notice |
| `/terms` | Commercial engagement terms & concept demonstration disclaimers |
| `/api/contact` | Server-side Route Handler with Zod schema verification & abuse limits |
| `/sitemap.xml` | Generated sitemap for search indexing |
| `/robots.txt` | Crawler policy |
| `/manifest.webmanifest` | PWA web app manifest |

---

## Getting Started

### Prerequisites

- Node.js `24.x` or compatible LTS
- Package manager: `pnpm` (version 11+)

### Installation

```bash
# Clone the repository
git clone https://github.com/gridmark/gridmark.git
cd GRIDMARK

# Install dependencies using pnpm
pnpm install
```

### Environment Configuration

Create a local `.env.local` file from `.env.example`:

```bash
cp .env.example .env.local
```

Configure your environment variables:

```dotenv
NEXT_PUBLIC_SITE_URL=https://gridmark.tech
NEXT_PUBLIC_CONTACT_EMAIL=hello@gridmark.tech
NEXT_PUBLIC_WHATSAPP_NUMBER=2348000000000
```

### Running Locally

```bash
# Start development server
pnpm dev

# Or build and run production server
pnpm build
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Quality Checks & Verification

Run all required quality gates before committing:

```bash
# Type checking
pnpm exec tsc --noEmit

# Linting
pnpm exec eslint .

# Production build
pnpm build
```

---

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Connect your repository to Vercel.
2. Ensure framework preset is detected as **Next.js**.
3. Add the required environment variables in project settings.
4. Deploy the main branch.
