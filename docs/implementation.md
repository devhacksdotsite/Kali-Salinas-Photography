# Kali Salinas Photography — Implementation Plan (Phase 1 MVP)

## Phase 1: Foundation & Design System

### 1A: Global Styles & Typography
- Configure Tailwind with custom color palette (`#FAF8F6`, `#1F1F1F`, `#8B6B4A`, `#EEEAE5`, `#DDDDDD`)
- Add Google Fonts (Cormorant Garamond + Inter)
- Set up `global.css` with base styles, font imports, and CSS custom properties
- **Commit: "feat: configure design system — colors, typography, Tailwind theme"**

### 1B: Base Layout & SEO Utilities
- Create `src/layouts/BaseLayout.astro` with `<head>` (meta, OG tags, JSON-LD slot, canonical URL)
- Create `src/utils/seo.ts` with helper functions for generating meta tags and structured data
- Add `robots.txt` and configure `@astrojs/sitemap` in `astro.config.mjs`
- Set up favicon files in `public/favicon/`
- **Commit: "feat: add BaseLayout with SEO utilities, sitemap, robots.txt"**

### 1C: Common Components
- `src/components/common/Button.astro` — primary/secondary/outline variants
- `src/components/common/Container.astro` — max-width wrapper
- `src/components/common/SectionTitle.astro` — heading with optional subtitle
- `src/components/common/Card.astro` — reusable card
- **Commit: "feat: add common reusable components (Button, Container, SectionTitle, Card)"**

### 1D: Navigation & Footer
- Create `src/data/navigation.ts` and `src/data/social.ts`
- `src/components/layout/Navbar.astro` — responsive nav with logo
- `src/components/layout/MobileMenu.astro` — hamburger menu (Astro Island only if interactivity needed)
- `src/components/layout/Footer.astro` — links, social icons, copyright
- **Commit: "feat: add Navbar, MobileMenu, and Footer layout components"**

---

## Phase 2: Cloudinary Integration & Image Utilities

### 2A: Cloudinary Helper
- Create `src/utils/cloudinary.ts` — URL builder for responsive images, transformations, and srcset generation
- Support format auto (WebP/AVIF), quality, width, and crop parameters
- Add `.env.example` with `PUBLIC_CLOUDINARY_CLOUD_NAME`
- **Commit: "feat: add Cloudinary utility for optimized image delivery"**

---

## Phase 3: Home Page

### 3A: Hero Section
- `src/components/home/Hero.astro` — full-width hero image, headline, CTA button
- **Commit: "feat: add Hero section for home page"**

### 3B: Featured Gallery & Services
- `src/components/home/FeaturedGallery.astro` — grid of featured images
- `src/components/home/Services.astro` — overview of session types
- Create `src/data/services.ts`
- **Commit: "feat: add FeaturedGallery and Services home sections"**

### 3C: About Preview, Testimonials & CTA
- `src/components/home/AboutPreview.astro` — portrait + short bio
- `src/components/home/Testimonials.astro` — client quotes carousel/grid
- `src/components/home/CTA.astro` — call-to-action banner
- Create `src/data/testimonials.ts`
- **Commit: "feat: add AboutPreview, Testimonials, and CTA home sections"**

### 3D: Instagram Feed (Placeholder)
- `src/components/home/InstagramFeed.astro` — placeholder grid (static images, no API in MVP)
- **Commit: "feat: add InstagramFeed placeholder section"**

### 3E: Assemble Home Page
- Wire all sections into `src/pages/index.astro`
- **Commit: "feat: assemble complete Home page"**

---

## Phase 4: Portfolio Page

### 4A: Gallery Components
- `src/components/gallery/GalleryGrid.astro` — responsive masonry grid
- `src/components/gallery/GalleryCard.astro` — image card with title/category
- `src/components/gallery/CategoryFilter.astro` — filter buttons (client-side JS minimal)
- `src/components/gallery/Lightbox.astro` — modal image viewer (Astro Island)
- **Commit: "feat: add gallery components (grid, card, filter, lightbox)"**

### 4B: Content Collections & Portfolio Page
- Define content collection schema for `src/content/portfolio/`
- Add placeholder markdown entries for each category (families, couples, portraits, weddings, lifestyle)
- Create `src/pages/portfolio.astro` — wires gallery components with content
- **Commit: "feat: add portfolio content collection and portfolio page"**

---

## Phase 5: About Page

### 5A: About Page Sections & Assembly
- Create `src/pages/about.astro` with sections: portrait, story, photography style, equipment, mini-FAQ, CTA
- Reuse existing common components (SectionTitle, Container, Button, CTA)
- **Commit: "feat: add About page with all sections"**

---

## Phase 6: Pricing Page

### 6A: Pricing Components & Page
- Create `src/data/pricing.ts` — packages data (family, portrait, couples, events)
- Build pricing card within `src/pages/pricing.astro` (reuse Card component)
- Each package: starting price, session length, deliverables, contact CTA
- **Commit: "feat: add Pricing page with packages"**

---

## Phase 7: Contact Page

### 7A: Contact Form & Page
- `src/components/contact/ContactForm.astro` — form fields (name, email, phone, session type, preferred date, message)
- Configure for Formspree (MVP) with action URL via env var
- Create `src/pages/contact.astro`
- Add form validation (HTML5 + accessible error states)
- **Commit: "feat: add Contact page with form (Formspree)"**

---

## Phase 8: FAQ Page

### 8A: FAQ Page
- Create `src/pages/faq.astro` — accordion-style Q&A
- Include example questions from spec
- Minimal JS for expand/collapse (progressive enhancement)
- **Commit: "feat: add FAQ page with expandable questions"**

---

## Phase 9: Polish & Production Readiness

### 9A: Responsive QA & Accessibility
- Audit all pages across breakpoints (mobile, tablet, desktop, large)
- Verify semantic HTML, heading hierarchy, focus states, alt text, WCAG AA contrast
- **Commit: "fix: responsive and accessibility improvements"**

### 9B: Performance & Final SEO
- Add Open Graph images per page
- Add JSON-LD structured data (LocalBusiness, ImageGallery)
- Verify Lighthouse scores (target >95 across all categories)
- Ensure all images use Cloudinary with proper lazy loading
- **Commit: "feat: finalize SEO metadata and performance optimizations"**

### 9C: Deployment Setup
- Add GitHub Actions workflow for build + deploy to Cloudflare Pages
- Configure build output and environment variables
- **Commit: "ci: add GitHub Actions deployment workflow"**

---

## Summary

| Phase | Focus | Commits |
|-------|-------|---------|
| 1 | Foundation (styles, layout, nav, common components) | 4 |
| 2 | Cloudinary integration | 1 |
| 3 | Home page | 5 |
| 4 | Portfolio page | 2 |
| 5 | About page | 1 |
| 6 | Pricing page | 1 |
| 7 | Contact page | 1 |
| 8 | FAQ page | 1 |
| 9 | Polish, accessibility, SEO, deployment | 3 |

**Total: ~19 small, focused commits**

Each sub-phase is independently buildable and verifiable.
