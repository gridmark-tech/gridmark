# GRIDMARK
## Website Product Requirements Document & Implementation Specification

**Document type:** Product Requirements Document (PRD) + Technical Implementation Brief  
**Brand:** Gridmark  
**Proposed domain:** `gridmark.tech` — subject to availability and registration  
**Framework:** Next.js 16.4  
**Language:** TypeScript  
**Styling:** Tailwind CSS  
**Deployment target:** Vercel  
**Primary market:** Businesses in Lagos, Nigeria, with potential to serve clients elsewhere  
**Initial business objective:** Acquire paying clients for website development, digital storefronts, and social media branding.

---

# 1. PROJECT OVERVIEW

## 1.1 What Is Gridmark?

Gridmark is a digital solutions brand that helps businesses establish and improve their online presence through professional websites, digital storefronts, and cohesive digital branding.

The business initially targets established computer and electronics retailers in Lagos that operate physical stores but lack professional websites or effective online product catalogues.

The website must position Gridmark as a capable, professional business partner—not an inexperienced freelancer advertising generic development services.

The presentation should communicate competence, commercial awareness, attention to detail, and the ability to deliver practical digital solutions.

## 1.2 Business Context

Gridmark is intended to operate as a sub-brand of a future holding company.

The holding company has not yet been established, so the website must present Gridmark as an independent-facing brand without inventing a parent company's name, registration details, or corporate history.

Gridmark is also distinct from Technicality, another brand that may be developed in the future.

Do not merge their identities, services, websites, or visual branding.

## 1.3 The Problem We Solve

Many businesses depend on physical locations, WhatsApp conversations, and social media pages to display their products and communicate with customers.

This can create several problems:

- Customers cannot easily browse a complete product catalogue.
- Product specifications and prices are scattered across posts and messages.
- Customers repeatedly ask questions about availability and pricing.
- The business lacks a central online destination.
- Its digital presentation may not reflect the quality of its physical operation.
- Product discovery and customer enquiries require unnecessary manual effort.

Gridmark helps businesses address these problems through well-designed digital experiences.

## 1.4 Our Initial Value Proposition

**Gridmark helps businesses turn their products, services, and expertise into a professional online experience that makes them easier to discover, understand, and contact.**

This proposition should guide the website's content and design.

## 1.5 Primary Conversion Goal

The primary goal is to generate qualified enquiries from potential clients.

The website must encourage visitors to:

1. Understand what Gridmark offers.
2. Identify the service relevant to their business.
3. Examine examples of Gridmark's capabilities.
4. Start a project enquiry through WhatsApp or the contact form.

Secondary goals include establishing credibility, attracting referrals, and creating a foundation for future service expansion.

---

# 2. TARGET AUDIENCE

## 2.1 Primary Audience: Technology Retailers

Examples include:

- Computer and laptop retailers.
- Electronics shops.
- Smartphone retailers.
- Computer hardware stores.
- Gadget wholesalers.
- Technology accessory retailers.

The initial geographical focus is Lagos, Nigeria.

### Their needs

They need a professional online destination where customers can:

- Browse available products.
- View product images.
- Read specifications.
- See advertised prices where applicable.
- Understand availability.
- Contact the retailer to confirm stock.
- Ask questions or initiate a purchase.

Gridmark should communicate that a website can complement an existing physical store and WhatsApp-based sales process.

It should not imply that every retailer needs a complicated e-commerce platform.

## 2.2 Secondary Audience: General Businesses

The same website should appeal to businesses outside technology retail.

Examples include:

- Professional service providers.
- Small and medium-sized businesses.
- Local brands.
- Startups.
- Businesses with outdated websites.
- Businesses whose online presence is limited to social media.

This secondary audience is important because it allows Gridmark to grow without changing its brand identity.

## 2.3 Visitor Expectations

Visitors should be able to answer these questions quickly:

- What does Gridmark do?
- Is Gridmark relevant to my business?
- What can the company build for me?
- Can I see an example?
- How do I get a quotation?
- What happens after I make contact?

The website must answer these questions without requiring visitors to read lengthy explanations.

---

# 3. BRAND IDENTITY

## 3.1 Brand Name

**GRIDMARK**

Always render the brand name consistently.

The visual identity should work with the full wordmark, a compact icon, a browser favicon, and social media profile imagery.

Do not add a permanent suffix such as "Agency," "Technologies," or "Limited" to the official brand name without approval.

## 3.2 Brand Personality

Gridmark should feel:

- Professional.
- Modern.
- Precise.
- Capable.
- Commercially aware.
- Technically competent.
- Approachable.
- Ambitious without being boastful.

Avoid a playful startup aesthetic, excessive futuristic effects, and generic corporate stock imagery.

## 3.3 Suggested Tagline

Primary recommendation:

**Digital experiences. Built for business.**

Alternative messaging can be used in page content, but the primary tagline should remain consistent across the website until deliberately revised.

## 3.4 Brand Voice

Use concise, confident, plain English.

The copy should focus on business outcomes rather than technical jargon.

Prefer:

"Give your customers one place to explore your products."

Avoid:

"We leverage next-generation digital transformation paradigms to optimize your omnichannel synergy."

Do not make unsupported claims about revenue increases, customer growth, years of experience, client numbers, or project results.

## 3.5 Logo Direction

Create an original, minimal Gridmark logo.

The logo should include:

1. A distinctive wordmark.
2. A compact icon or monogram.
3. A favicon-compatible variation.

Potential visual inspiration includes geometric grid structures, alignment marks, modular blocks, or a custom letterform based on G.

The logo must be original.

Do not copy another company's logo or rely on a generic icon that makes Gridmark indistinguishable from competing agencies.

Implement the logo as an SVG component or a carefully designed vector asset.

It must remain crisp at small sizes.

---

# 4. VISUAL DESIGN SYSTEM

## 4.1 Design Direction

Build a premium digital studio website with a strong editorial layout.

The design should combine:

- Bold typography.
- Generous whitespace.
- Clear visual hierarchy.
- Precise alignment.
- Restrained accent colours.
- High-quality product imagery.
- Fluid, purposeful animations.
- Carefully composed mockups of websites and digital storefronts.

The overall impression should be closer to a premium design and technology studio than a generic agency template.

## 4.2 Colour Palette

Use the following initial palette as design tokens.

| Token | Hex value | Usage |
|---|---|---|
| Background | `#F7F7F4` | Main light background |
| Surface | `#FFFFFF` | Cards and elevated surfaces |
| Primary text | `#171916` | Headings and important content |
| Secondary text | `#646962` | Supporting descriptions |
| Primary accent | `#B8F36B` | Calls to action and selected highlights |
| Border | `#E3E5DE` | Dividers and card borders |
| Dark surface | `#171916` | Dark feature sections |
| Dark text | `#F7F7F4` | Text on dark surfaces |

These are starting tokens, not permission to apply the accent colour everywhere.

The light background should dominate. The lime accent should be used sparingly.

Use the accent colour to highlight important actions and small visual details rather than filling every section with bright green.

### Colour requirements

- Maintain readable text contrast.
- Do not use gradients as the primary visual identity.
- Avoid purple as a dominant colour.
- Do not use random colours for individual components.
- Define colours centrally using CSS variables.
- Ensure buttons, links, hover states, and focus indicators remain accessible.

## 4.3 Typography

Use a modern sans-serif typeface.

Recommended pairing:

- **Headings:** Manrope.
- **Body text:** Inter.

Load fonts using `next/font` where appropriate.

Typography should use responsive sizing with `clamp()` or equivalent responsive Tailwind utilities.

Large headings should be expressive but readable.

Avoid excessive letter spacing, excessively thin text, and headings that wrap into awkward single-word lines.

## 4.4 Layout

Use a responsive, grid-based layout.

Desktop:

- Maximum content width of approximately 1,280–1,360 pixels.
- Generous horizontal padding.
- Consistent spacing between sections.
- Strong alignment between headings, content, and cards.

Tablet:

- Reduce horizontal spacing.
- Reflow multi-column sections naturally.
- Maintain comfortable reading widths.

Mobile:

- Prioritize readability and one-handed navigation.
- Use a single-column layout where appropriate.
- Avoid horizontal overflow.
- Ensure buttons and interactive elements have comfortable touch targets.

Do not force desktop layouts onto mobile screens.

---

# 5. SITE ARCHITECTURE

The initial release should contain five principal routes.

| Route | Purpose |
|---|---|
| `/` | Main landing page and primary conversion destination |
| `/services` | Detailed explanation of Gridmark's services |
| `/work` | Portfolio, concept projects, and case studies |
| `/about` | Brand introduction and working philosophy |
| `/contact` | Project enquiry and contact options |

Additional infrastructure:

- `/privacy` — privacy notice.
- `/terms` — terms of use, where appropriate.
- `not-found.tsx` — branded 404 page.
- `robots.ts` — crawler instructions.
- `sitemap.ts` — sitemap generation.
- `manifest.ts` — web app manifest if required.

Do not create unnecessary routes merely to make the website appear larger.

All navigation links must point to working pages or legitimate external destinations.

---

# 6. GLOBAL NAVIGATION

## 6.1 Desktop Header

Create a clean navigation bar.

Left:
- Gridmark logo.

Centre or right:
- Home.
- Services.
- Work.
- About.

Far right:
- Primary CTA: "Start a project."

The header should have sufficient visual separation from the hero.

Use a restrained sticky-header treatment if it improves navigation.

If the header changes appearance while scrolling, animate the transition smoothly without causing layout shifts.

## 6.2 Mobile Navigation

On mobile, use a compact header containing the logo and a menu button.

The menu must:

- Open and close reliably.
- Support keyboard navigation.
- Include visible focus states.
- Close when a navigation destination is selected.
- Close when Escape is pressed.
- Prevent accidental background interaction when presented as a modal overlay.
- Respect reduced-motion preferences.

Do not add a persistent mobile bottom navigation bar. This is a professional business website, not a mobile application.

## 6.3 Navigation Behaviour

Use Next.js navigation components.

Internal navigation must work without full-page reloads where appropriate.

Use meaningful active states.

Do not animate every navigation item independently with excessive delays.

---

# 7. HOMEPAGE SPECIFICATION

The homepage is the most important page.

It must communicate the value proposition immediately and guide visitors towards a project enquiry.

## SECTION 1: HERO

### Purpose

Explain what Gridmark does, establish the visual identity, and encourage visitors to explore services or begin a project.

### Suggested content

Eyebrow:

DIGITAL SOLUTIONS FOR AMBITIOUS BUSINESSES

Main headline:

**Your business deserves a better online presence.**

Supporting text:

"We design and build professional websites, digital storefronts, and brand experiences that help businesses present themselves with confidence."

Primary CTA:

**Start a project**

Secondary CTA:

**Explore our work**

A small supporting line may read:

"Websites · Digital storefronts · Brand experiences"

Do not include invented client statistics, fake awards, or fabricated testimonials.

### Layout

Use a two-column desktop composition.

Left column:
- Eyebrow.
- Headline.
- Supporting copy.
- CTA buttons.
- Optional service summary.

Right column:
- A carefully composed visual representation of Gridmark's work.

The visual should demonstrate a website or digital storefront rather than display a random abstract 3D object.

### Hero visual

Create an original mockup of an electronics retailer's online storefront.

The mockup can include:

- A sample retailer wordmark.
- Product category navigation.
- Laptop or smartphone product cards.
- Product images.
- Example prices.
- Search or category filters.
- A clearly visible enquiry or shopping action.

This should look like a real digital product.

Use fictitious demonstration data and label the project as a concept.

Do not use another retailer's branding in a way that implies a real partnership.

### Hero animation

On initial load:

1. The hero eyebrow appears with a short opacity transition.
2. The headline enters using a subtle vertical reveal.
3. Supporting copy fades in.
4. CTA buttons appear with a small stagger.
5. The storefront mockup reveals through a clipped or masked transition.

The animation sequence should feel coordinated and finish quickly.

Target a total introductory sequence of approximately 700–1,000 milliseconds.

Do not delay access to the main heading or important CTA unnecessarily.

The content must remain accessible if animations are disabled.

---

## SECTION 2: TRUST AND POSITIONING

### Purpose

Reinforce the company's practical business focus.

Use a restrained transition between the hero and the next section.

Suggested heading:

**Built around the way your business works.**

Supporting text:

"Your online presence should make your business easier to understand, your products easier to explore, and your next customer conversation easier to start."

Do not display client logos, partner logos, or certifications unless they are genuine and approved for publication.

This section should use typography and layout rather than fabricated social proof.

---

## SECTION 3: SERVICES OVERVIEW

### Purpose

Introduce the company's initial three service categories.

Use a visually cohesive grid of three service cards.

### Service 1: Business Websites

Description:

"Professional, responsive websites that explain what you do, establish credibility, and give customers a clear way to reach you."

Potential deliverables:

- Responsive page layouts.
- Business information architecture.
- Contact and enquiry forms.
- Mobile-friendly design.
- Search-engine fundamentals.
- Deployment and handover.

CTA:

"Explore website development"

Destination:

`/services#business-websites`

### Service 2: Digital Storefronts

Description:

"Make your products easier to discover with an organized online catalogue built around how your customers shop."

Potential deliverables:

- Product catalogues.
- Product images and specifications.
- Categories and search.
- Advertised pricing.
- Stock-status indicators.
- WhatsApp enquiries.
- Optional e-commerce functionality when required.

CTA:

"Explore digital storefronts"

Destination:

`/services#digital-storefronts`

Important distinction:

A digital storefront does not automatically mean a complete e-commerce platform.

The initial offer can provide a catalogue and enquiry workflow without payments, accounts, delivery integrations, or inventory synchronization.

Advanced functionality must be scoped and priced separately.

### Service 3: Social Media Branding

Description:

"Create a consistent, professional visual identity across your business's social media presence."

Potential deliverables:

- Profile and cover imagery.
- Promotional graphic templates.
- Coordinated post designs.
- Instagram pinned-post concepts.
- Visual consistency guidelines.

CTA:

"Explore brand experiences"

Destination:

`/services#social-media-branding`

### Interaction

Each service card should have a restrained hover interaction.

Possible behaviours:

- Border colour transition.
- Slight elevation.
- Subtle icon movement.
- Arrow movement on the CTA.

Avoid dramatic card rotation, excessive scaling, or animation that interferes with reading.

---

## SECTION 4: FEATURED WORK

### Purpose

Demonstrate practical capabilities to prospective clients.

Heading:

**Good work should speak for itself.**

Supporting text:

"Explore digital experiences designed to make businesses easier to discover and engage with."

### Initial project

Create a concept project for a fictional Lagos-based electronics retailer.

Working concept name:

**Northstar Electronics**

This is a placeholder for a fictional demonstration brand, not a real client.

The storefront should demonstrate:

- A polished homepage.
- Product category navigation.
- Product cards.
- Example product specifications.
- Product detail presentation.
- Responsive behaviour.
- Clear WhatsApp enquiry actions.

Display the project with a visible label:

"CONCEPT PROJECT"

Do not describe it as commissioned work or claim measurable commercial results.

### Project card content

Each project card should include:

- Preview image or rendered mockup.
- Project name.
- Project category.
- Brief description.
- Project type.
- Link to project details or a live demonstration, when implemented.

For the initial release, one strong concept project is better than several fabricated case studies.

### Animation

Use a restrained scroll-triggered reveal for project cards.

The visual preview may respond subtly to pointer movement on capable devices.

Disable pointer-follow effects on touch devices and when reduced motion is requested.

---

## SECTION 5: WHY GRIDMARK

### Purpose

Explain the company's approach without making unsupported claims.

Heading:

**Digital solutions should solve real business problems.**

Introduce three principles.

### Principle 1: Business first

"We start by understanding what your business needs to communicate and what your customers need to do."

### Principle 2: Designed with purpose

"Every page, interaction, and visual element should help visitors understand your business and take the next step."

### Principle 3: Built for real use

"Your website should work across devices, load efficiently, and be straightforward to maintain."

Use simple typography, small graphic details, or a clean three-column composition.

Do not invent claims such as "trusted by hundreds of businesses."

---

## SECTION 6: PROCESS

### Purpose

Make the engagement process understandable.

Heading:

**From first conversation to launch.**

Display four stages.

### Stage 01 — Discover

"We discuss your business, audience, goals, and requirements."

### Stage 02 — Plan

"We agree on the scope, page structure, deliverables, timeline, and project cost."

### Stage 03 — Build

"We design and develop the agreed solution, sharing progress and collecting feedback at defined checkpoints."

### Stage 04 — Launch

"We test the finished work, deploy the website, and provide the agreed handover or maintenance support."

Use a horizontal process layout on desktop and a vertical timeline on mobile.

The process should not imply unlimited revisions or indefinite support.

The final agreement must define scope, payment milestones, revision limits, and handover arrangements.

---

## SECTION 7: FINAL CALL TO ACTION

### Purpose

Convert interested visitors into prospective clients.

Heading:

**Let's build something useful for your business.**

Supporting text:

"Tell us what you're trying to achieve. We'll discuss your requirements and the next practical step."

Primary CTA:

**Start a project**

Secondary option:

**Chat on WhatsApp**

Use a contrasting dark section with restrained accent details.

Keep the design visually consistent with the rest of the website.

Do not use artificial urgency, countdowns, or misleading availability claims.

---

# 8. SERVICES PAGE

Route: `/services`

## 8.1 Purpose

Explain the service offerings in enough detail for prospective clients to understand what they can purchase.

The page should help visitors identify the appropriate service and request a quotation.

## 8.2 Page Structure

1. Introductory hero.
2. Business websites.
3. Digital storefronts.
4. Social media branding.
5. Optional ongoing maintenance.
6. Frequently asked questions.
7. Project enquiry CTA.

## 8.3 Business Websites

Explain the difference between a basic business website and a more complex custom solution.

Potential project types:

- Company websites.
- Service business websites.
- Landing pages.
- Professional business profiles.
- Lead-generation websites.

Potential deliverables:

- Information architecture.
- Responsive UI.
- Content integration.
- Contact forms.
- Basic technical SEO.
- Deployment.
- Documentation and handover.

## 8.4 Digital Storefronts

Describe a catalogue-oriented solution for businesses with many products.

Potential features:

- Product categories.
- Search and filtering.
- Product detail pages.
- Specifications and images.
- Prices and availability indicators.
- WhatsApp enquiry links.
- Optional product administration.
- Optional inventory integration.

Clearly distinguish between features included in the initial catalogue offer and those requiring custom development.

Do not promise live inventory synchronization unless a compatible source system exists and the integration has been implemented.

## 8.5 Social Media Branding

Explain the visual and structural improvements Gridmark can provide.

Potential services:

- Social profile presentation.
- Brand-consistent graphics.
- Promotional post design.
- Coordinated pinned-post layouts.
- Reusable visual templates.

Do not imply that graphic design automatically includes social media management, copywriting, advertising, or audience growth.

## 8.6 Maintenance

Describe optional ongoing support.

Potential activities:

- Dependency and framework updates.
- Security maintenance.
- Minor content updates.
- Product catalogue updates.
- Bug fixes.
- Backups where supported.
- Monitoring where configured.

Define maintenance as a separately scoped service.

Avoid promising unlimited updates or guaranteed uninterrupted availability.

---

# 9. WORK / PORTFOLIO PAGE

Route: `/work`

## 9.1 Purpose

Show tangible evidence of Gridmark's design and development capabilities.

The page must remain honest about the status of each project.

## 9.2 Initial Content

Create one complete concept project:

**Northstar Electronics — Digital Storefront Concept**

Project description:

"A demonstration storefront exploring how an electronics retailer can organize product categories, present specifications, and help customers make enquiries online."

Project status:

"Concept project — not commissioned client work."

Include:

- Desktop preview.
- Mobile preview.
- Design objectives.
- Key interface decisions.
- Implemented features.
- Technologies used, if relevant.

Only describe functionality that actually exists in the demonstration.

## 9.3 Future Project Support

Create a reusable project data structure so future projects can be added without redesigning the page.

Each project should support:

- Title.
- Slug.
- Summary.
- Category.
- Cover image.
- Project status.
- Feature list.
- Optional technologies.
- Optional external URL.
- Optional detail page.

Do not build a CMS or database solely for the initial project.

A typed local data file is sufficient for the first release.

---

# 10. ABOUT PAGE

Route: `/about`

## 10.1 Purpose

Introduce Gridmark's philosophy and explain the kind of work it undertakes.

The page should sound professional without pretending the business has a long corporate history.

## 10.2 Suggested Copy

### Heading

**We believe every business deserves a thoughtful digital presence.**

### Body

"Gridmark is a digital solutions brand focused on helping businesses present themselves professionally online.

We build websites, digital storefronts, and cohesive brand experiences designed around practical business needs.

Our approach combines thoughtful design, technical implementation, and a clear understanding of what customers need to see and do.

The goal is simple: create digital experiences that make businesses easier to understand, explore, and contact."

This is proposed brand copy and can be refined before launch.

Do not invent:

- Founding dates.
- Company registration details.
- Staff numbers.
- Awards.
- Client relationships.
- Office locations.
- Corporate milestones.

## 10.3 Working Principles

Present four principles:

1. Clarity over clutter.
2. Business value over unnecessary complexity.
3. Responsive design from the beginning.
4. Honest communication and clearly defined deliverables.

---

# 11. CONTACT AND LEAD GENERATION

Route: `/contact`

## 11.1 Purpose

Make it easy for a potential client to initiate a project.

The contact page must provide both a direct WhatsApp option and a structured enquiry form.

## 11.2 Contact Form Fields

Required:

- Name.
- Business name, where applicable.
- Email address.
- Service of interest.
- Brief project description.

Optional:

- Website or social media URL.
- Indicative budget range.
- Desired completion timeframe.
- Additional notes.

Do not ask for unnecessary personal information.

## 11.3 Form Behaviour

The form must:

- Validate inputs.
- Display clear error messages.
- Prevent duplicate submissions while processing.
- Display a success confirmation.
- Handle failed submissions gracefully.
- Work on mobile.
- Include accessible labels.
- Provide a usable keyboard experience.

Do not display a success message unless the enquiry has actually been accepted by the configured submission mechanism.

## 11.4 Submission Architecture

For the initial release, use a lightweight server-side submission mechanism.

Recommended approach:

- Create a Next.js Route Handler.
- Validate input on the server.
- Validate and normalize fields using Zod.
- Apply reasonable request-size limits.
- Include basic abuse protection.
- Send the enquiry through a configurable email provider.

Keep credentials in environment variables.

Do not expose API keys or email provider secrets in client-side code.

If an email provider has not been configured, document the missing configuration and provide a clear development-mode message.

Do not silently discard submissions.

## 11.5 WhatsApp Integration

Use a configurable WhatsApp business contact number.

Do not invent a number.

Store the number in configuration and create a properly encoded WhatsApp URL.

The prefilled message should be concise.

Example:

"Hello Gridmark, I'd like to discuss a project for my business."

If the visitor selects a specific service, the message may include that service.

Open WhatsApp through a normal link.

Do not require visitors to create an account on Gridmark's website.

---

# 12. FLUID ANIMATION SYSTEM

Animation is a major design requirement.

However, animation must support the content rather than compete with it.

The website should feel responsive, fluid, and carefully crafted.

## 12.1 Recommended Library

Use Motion for React, from the Motion project.

Install the current compatible package and follow its official API.

Keep animations reusable and avoid writing a different animation implementation for every section.

Do not add multiple animation libraries for the same purpose.

## 12.2 Animation Principles

Use:

- Opacity transitions.
- Small translations.
- Staggered entrances.
- Smooth hover feedback.
- Scroll-triggered reveals.
- Carefully controlled clipping.
- Subtle image movement.
- Responsive navigation transitions.

Avoid:

- Constantly moving backgrounds.
- Excessive parallax.
- Large spinning elements.
- Unnecessary 3D effects.
- Long entrance delays.
- Animation that blocks interaction.
- Scroll hijacking.
- Excessive motion on mobile.

## 12.3 Animation Tokens

Use consistent timing tokens.

| Token | Suggested duration | Use |
|---|---:|---|
| Fast | 150–200 ms | Button and link feedback |
| Standard | 250–350 ms | Cards and common interactions |
| Reveal | 400–650 ms | Scroll-triggered content |
| Hero | 500–800 ms | Main introductory sequence |
| Navigation | 200–300 ms | Menus and navigation transitions |

Use easing curves that feel natural.

Do not make every transition use the same exaggerated spring effect.

## 12.4 Scroll Reveal Behaviour

Create a reusable reveal component or hook.

Requirements:

- Trigger when an element approaches the viewport.
- Avoid repeating animations unnecessarily.
- Do not hide essential content indefinitely if animation initialization fails.
- Avoid large vertical offsets.
- Do not animate entire long sections when smaller elements would be more effective.
- Avoid layout shifts.

## 12.5 Hover Behaviour

Interactive elements should respond immediately.

Examples:

- Buttons subtly change colour and position.
- Cards receive a slight elevation or border transition.
- Arrows shift a few pixels.
- Image previews may scale very slightly.
- Navigation links show clear hover and focus states.

Hover effects must not be the only way to discover functionality.

## 12.6 Reduced Motion

Respect `prefers-reduced-motion`.

When reduced motion is enabled:

- Remove or simplify nonessential entrance animations.
- Disable pointer-follow and parallax effects.
- Avoid large transforms.
- Keep essential state transitions understandable.
- Preserve immediate access to content.

Do not rely exclusively on JavaScript to hide content until an animation begins.

## 12.7 Performance

Prefer animations based on `transform` and `opacity`.

Avoid animating expensive layout properties on large elements.

Do not introduce unnecessary animation loops.

Load animation code only where needed.

Use server-rendered content for the majority of the website and limit client components to genuinely interactive areas.

The site must remain usable if JavaScript is delayed or unavailable.

---

# 13. TECHNICAL ARCHITECTURE

## 13.1 Framework

Use:

- Next.js 16.4.
- React version compatible with the selected Next.js release.
- TypeScript in strict mode.
- App Router.
- Tailwind CSS.
- ESLint.

Consult the official installation guide and version-specific documentation during setup:

https://nextjs.org/docs/app/getting-started/installation

Use the latest compatible patch versions within the specified framework release where practical.

Do not automatically upgrade to a different Next.js major or minor version without documenting why.

## 13.2 Package Manager

Use pnpm.

Do not mix npm, pnpm, and Bun package-management workflows in the same project.

Use a consistent lockfile and document the required runtime.

## 13.3 Rendering Strategy

Use Server Components by default.

Use Client Components only for components that need:

- Browser events.
- Local interactive state.
- Motion interactions.
- Mobile navigation state.
- Form interactions.

Avoid marking entire pages as client components.

Use Next.js metadata and server-side rendering capabilities appropriately.

## 13.4 Suggested Project Structure

```text
gridmark/
├── public/
│   ├── images/
│   ├── projects/
│   ├── icons/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── work/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   ├── terms/
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   ├── manifest.ts
│   │   ├── not-found.tsx
│   │   └── error.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── mobile-menu.tsx
│   │   ├── sections/
│   │   │   ├── hero.tsx
│   │   │   ├── services-overview.tsx
│   │   │   ├── featured-work.tsx
│   │   │   ├── process.tsx
│   │   │   └── final-cta.tsx
│   │   ├── services/
│   │   ├── projects/
│   │   ├── contact/
│   │   ├── motion/
│   │   └── ui/
│   ├── config/
│   │   ├── site.ts
│   │   └── contact.ts
│   ├── data/
│   │   ├── services.ts
│   │   └── projects.ts
│   ├── lib/
│   │   ├── validation/
│   │   └── utils.ts
│   └── types/
├── tests/
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── AGENTS.md
└── README.md
```

Adapt the structure if a simpler arrangement is more appropriate.

Do not create empty abstractions or unnecessary files solely to match this tree.

## 13.5 Reusable Components

Create reusable components for:

- Header.
- Footer.
- Buttons.
- Section headings.
- Service cards.
- Project cards.
- CTA sections.
- Form fields.
- Animation wrappers.
- Responsive containers.

Shared elements must have consistent styling and behaviour.

## 13.6 Configuration

Create a central site configuration containing:

- Brand name.
- Tagline.
- Site URL.
- Navigation items.
- Service links.
- Social links, if configured.
- Contact details.
- Default metadata.

Use `gridmark.tech` only as the proposed production domain until registration is confirmed.

Avoid scattering the same string across dozens of components.

---

# 14. DESIGN AND COMPONENT LIBRARIES

## 14.1 Tailwind CSS

Use Tailwind CSS for the primary styling system.

Define the design tokens centrally.

Use semantic HTML and meaningful component names.

Avoid excessive arbitrary values when a reusable design token would be more appropriate.

## 14.2 shadcn/ui

Use shadcn/ui selectively when it improves accessibility or development speed.

Potential use cases:

- Form controls.
- Dialogs.
- Dropdown menus.
- Accessible interactive primitives.

Do not let a component library determine the entire visual identity.

The website should retain a distinctive Gridmark design.

## 14.3 Icons

Use a consistent icon library such as Lucide.

Use icons to support meaning rather than decorate every line of text.

Do not use emoji as the primary visual system for service cards or navigation.

---

# 15. SEO AND SOCIAL SHARING

## 15.1 Metadata

Provide appropriate metadata for every public route.

Homepage title proposal:

"Gridmark | Websites & Digital Storefronts for Businesses"

Homepage description proposal:

"Gridmark helps businesses build professional websites, digital storefronts, and cohesive online brand experiences."

Create distinct titles and descriptions for the Services, Work, About, and Contact pages.

## 15.2 Technical SEO

Implement:

- Semantic heading hierarchy.
- Descriptive page titles.
- Metadata descriptions.
- Canonical URLs when appropriate.
- Open Graph metadata.
- Social sharing images.
- XML sitemap.
- Robots instructions.
- Descriptive image alternative text.
- Clean URL structure.
- Internal links between related services and projects.

Do not create fake location pages for areas the business does not actually serve.

## 15.3 Structured Data

Add appropriate structured data only when the information is accurate.

Potential types include Organization and WebSite.

Do not publish an invented physical address, phone number, registration number, or customer rating.

## 15.4 Search Intent

The content should naturally communicate relevance to searches involving:

- Website development in Lagos.
- Business website design.
- Electronics store websites.
- Product catalogue websites.
- Digital storefront development.
- Social media branding for businesses.

Avoid keyword stuffing.

---

# 16. ACCESSIBILITY

The website must be usable by visitors with different abilities and input methods.

Requirements:

- Semantic HTML.
- Keyboard-accessible navigation.
- Visible focus indicators.
- Accessible form labels.
- Appropriate error announcements.
- Sufficient colour contrast.
- Descriptive links.
- Alternative text for meaningful images.
- Correct heading order.
- Accessible mobile navigation.
- Reduced-motion support.

Aim for WCAG 2.2 AA where applicable.

Do not sacrifice accessibility to achieve a particular animation or visual effect.

---

# 17. PERFORMANCE

The website must feel fast on ordinary mobile devices and connections.

Requirements:

- Optimize and appropriately size images.
- Use `next/image` for suitable local or remote images.
- Avoid unnecessarily large client bundles.
- Lazy-load below-the-fold imagery where appropriate.
- Avoid layout shifts.
- Use font loading responsibly.
- Avoid autoplay video backgrounds.
- Avoid unnecessary third-party scripts.
- Use server rendering for static content.
- Minimize animation overhead.
- Provide sensible loading and error states.

Performance targets:

- Lighthouse Performance: aim for 90 or above.
- Lighthouse Accessibility: aim for 95 or above.
- Lighthouse Best Practices: aim for 95 or above.
- Lighthouse SEO: aim for 95 or above.

These are targets to test against, not guaranteed scores.

Test on mobile and desktop.

---

# 18. SECURITY AND PRIVACY

## 18.1 Contact Form Security

Implement server-side validation.

Treat all incoming form values as untrusted.

Requirements:

- Zod schema validation.
- Length limits.
- Safe output handling.
- Reasonable rate limiting or abuse protection.
- No unnecessary personal data collection.
- No secrets exposed to the browser.
- Safe error handling.
- No sensitive information in logs.

## 18.2 Environment Variables

Create `.env.example`.

Include placeholders only for configuration that is actually used.

For example:

```dotenv
NEXT_PUBLIC_SITE_URL=https://gridmark.tech
CONTACT_EMAIL=
EMAIL_PROVIDER_API_KEY=
WHATSAPP_NUMBER=
```

Document which values are required for production.

Do not commit real credentials.

Do not expose private provider keys through `NEXT_PUBLIC_` variables.

## 18.3 Privacy

Create a privacy notice appropriate to the actual data collected.

Explain the purpose of contact-form submissions and how enquiries are handled.

Do not claim compliance with specific legal requirements without checking the requirements applicable to the deployed service.

Do not add invasive analytics or marketing trackers by default.

---

# 19. TESTING REQUIREMENTS

## 19.1 Functional Tests

Verify:

- All routes render successfully.
- Internal navigation works.
- Header and footer links are correct.
- The mobile menu opens and closes.
- CTAs navigate to the intended destinations.
- Contact-form validation works.
- Successful form submissions receive appropriate confirmation.
- Failed submissions show useful error messages.
- WhatsApp links are correctly encoded.
- Project links do not lead to nonexistent destinations.
- The 404 page renders correctly.

## 19.2 Responsive Testing

Test at minimum:

- Small mobile viewport.
- Standard mobile viewport.
- Tablet viewport.
- Laptop viewport.
- Large desktop viewport.

Check for:

- Horizontal overflow.
- Broken typography.
- Overlapping sections.
- Cropped CTAs.
- Incorrect menu behaviour.
- Excessive animation on small screens.

## 19.3 Browser Testing

Use Playwright if appropriate.

Verify the primary visitor journey:

1. Open the homepage.
2. Navigate to Services.
3. Inspect the digital storefront offering.
4. Open the Work page.
5. Start a project enquiry.
6. Complete the contact form.
7. Verify validation and submission feedback.

Test both desktop and mobile layouts.

## 19.4 Accessibility Testing

Use automated accessibility checks where practical, followed by manual keyboard testing.

Verify:

- Tab order.
- Focus visibility.
- Menu behaviour.
- Form labels.
- Error announcements.
- Reduced-motion behaviour.

## 19.5 Build Checks

Before considering the project complete, run:

```bash
pnpm exec tsc --noEmit
pnpm exec eslint .
pnpm build
```

Use the appropriate supported Next.js production-build command for the installed version.

Do not disable TypeScript checking to make a failed build pass.

Fix errors rather than suppressing them without justification.

---

# 20. IMPLEMENTATION WORKFLOW

The coding agent must implement the website incrementally.

Do not generate the entire application in one unverified step.

## Phase 1 — Project Setup

1. Inspect the existing repository.
2. If the repository already contains work, inspect it before making changes.
3. Preserve existing user changes.
4. If no repository exists, initialize one.
5. Configure Next.js 16.4, TypeScript, Tailwind CSS, and ESLint.
6. Establish the initial project structure.
7. Create the global design tokens.
8. Verify that the project starts successfully.

Deliverable: a clean, working project foundation.

## Phase 2 — Design System and Shared Layout

1. Implement the logo.
2. Implement the header and navigation.
3. Implement the footer.
4. Build reusable buttons and containers.
5. Establish typography and spacing.
6. Implement mobile navigation.
7. Verify responsive behaviour.

Deliverable: the shared site shell.

## Phase 3 — Homepage

Implement the homepage in the following order:

1. Hero.
2. Positioning section.
3. Services.
4. Featured concept project.
5. Why Gridmark.
6. Process.
7. Final CTA.

Use the specified copy as a starting point.

Refine the layout to achieve a cohesive visual result.

Deliverable: a complete, responsive homepage.

## Phase 4 — Animation

1. Add the selected animation library.
2. Implement hero transitions.
3. Implement section reveals.
4. Implement hover feedback.
5. Animate mobile navigation.
6. Respect reduced-motion preferences.
7. Test performance.

Deliverable: a polished animation system.

## Phase 5 — Supporting Pages

Implement:

- Services.
- Work.
- About.
- Contact.
- Privacy.
- Terms, if appropriate.

Ensure all routes are functional and consistent with the design system.

## Phase 6 — Contact Integration

1. Implement the contact form.
2. Add server-side validation.
3. Configure the submission mechanism.
4. Add appropriate error handling.
5. Configure WhatsApp.
6. Document required environment variables.
7. Test successful and failed submissions.

Deliverable: a working enquiry workflow.

## Phase 7 — SEO, Accessibility, and Optimization

Implement the required metadata, sitemap, robots instructions, responsive image handling, and accessibility improvements.

Measure performance rather than assuming the site is optimized.

## Phase 8 — Verification and Handover

1. Run type checks.
2. Run ESLint.
3. Run production build.
4. Run functional tests.
5. Perform browser testing.
6. Inspect mobile layouts.
7. Verify reduced-motion behaviour.
8. Fix discovered issues.
9. Commit the completed work.
10. Document deployment instructions.

Do not declare completion while critical routes, contact functionality, or build checks are broken.

---

# 21. GIT AND CODING AGENT RULES

The coding agent must follow these project rules.

1. Use pnpm consistently.
2. Inspect the repository before editing.
3. Preserve unrelated user changes.
4. Implement one feature at a time.
5. Run relevant checks after each major feature.
6. Fix regressions before moving forward.
7. Use clear, descriptive commit messages.
8. Avoid unnecessary dependencies.
9. Avoid suppressing lint or type errors without a documented reason.
10. Test the actual browser experience.
11. Do not use placeholder links that silently do nothing.
12. Do not invent client information or company credentials.
13. Do not add unnecessary authentication, databases, or dashboards.
14. Keep configuration and contact details centralized.
15. Update the README when setup or deployment instructions change.

If an `AGENTS.md` file already exists, inspect and preserve its applicable instructions.

The repository's existing conventions take precedence where they do not conflict with this specification.

---

# 22. CONTENT AND ASSET RULES

The website must not ship with obvious unfinished placeholders.

Avoid:

- Lorem ipsum.
- Broken images.
- Empty portfolio cards.
- Fake customer testimonials.
- Fabricated client logos.
- Invented company statistics.
- Fake awards.
- Nonfunctional forms.
- Buttons with no action.
- Unconfigured contact links.

Use original assets wherever practical.

For the Northstar Electronics concept, create a cohesive collection of demonstration product images and realistic sample data.

Make it clear that the project is a concept.

Keep the number of sample products manageable.

The purpose is to demonstrate the user experience, not build a complete retail inventory system.

---

# 23. INITIAL RELEASE SCOPE

## Included

- Professional Gridmark brand presentation.
- Responsive homepage.
- Services page.
- Work page with one concept project.
- About page.
- Contact page.
- Functional navigation.
- Fluid, restrained animations.
- WhatsApp enquiry integration.
- Validated contact form.
- Configurable email submission.
- SEO fundamentals.
- Accessibility considerations.
- Responsive testing.
- Deployment documentation.

## Excluded from the Initial Release

Unless explicitly approved later, do not build:

- User registration or authentication.
- An administrative dashboard.
- A content management system.
- A customer portal.
- A full e-commerce platform for Gridmark.
- Online payment processing.
- Subscription billing.
- Complex CRM functionality.
- Automated sales outreach.
- An inventory management system.
- Unnecessary database infrastructure.

These features do not directly contribute enough value to justify their initial complexity.

---

# 24. ACCEPTANCE CRITERIA

The website is ready for its first production release when all of the following are true.

### Brand and presentation

- Gridmark has a consistent visual identity.
- The homepage communicates the business offering clearly.
- The website looks professional on desktop and mobile.
- The design avoids generic template aesthetics.
- No fabricated credentials or testimonials appear.

### Content

- All core pages have complete content.
- Service descriptions are clear.
- The concept project is accurately labelled.
- All links point to valid destinations.

### Functionality

- Navigation works.
- The mobile menu works.
- CTAs lead to appropriate destinations.
- The contact form validates inputs.
- The configured submission mechanism handles success and failure.
- WhatsApp links are correctly configured.

### Animation

- Animations feel fluid and purposeful.
- Content is not inaccessible while waiting for animations.
- Reduced-motion preferences are respected.
- Mobile performance remains acceptable.

### Technical quality

- TypeScript checks pass.
- ESLint passes.
- Production build succeeds.
- Critical browser tests pass.
- No critical accessibility or responsive defects remain.
- Required environment variables are documented.
- No private credentials are committed.

### Deployment readiness

- The production domain is configurable.
- Metadata uses the correct production URL once confirmed.
- Contact details have been verified.
- Deployment instructions are complete.
- The repository has clear setup and maintenance documentation.

---

# 25. FINAL DIRECTION TO THE CODING AGENT

Build Gridmark as a polished, commercially focused digital solutions website.

The priority is not to maximize the number of pages or technical features.

The priority is to create a website that makes a potential client think:

"This company understands what my business needs, can present it professionally, and has a clear process for delivering it."

Use strong typography, clean layouts, carefully designed product mockups, restrained colour, and fluid animations.

Make the website responsive, accessible, maintainable, and fast.

Use Next.js 16.4 and TypeScript, keep the architecture appropriately simple, and verify the implementation through real browser testing.

Do not fabricate proof of experience. Demonstrate capability through a high-quality concept project instead.

Implement the work incrementally, verify each stage, and finish with a working production build and clear deployment instructions.

**The ultimate objective is to help Gridmark win its first paying clients. Every design and technical decision should support that objective.**