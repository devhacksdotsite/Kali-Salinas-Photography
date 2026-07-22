# Kali Salinas Photography

## Project Overview

Kali Salinas Photography is a modern, fast, SEO-friendly photography portfolio built with Astro and Tailwind CSS.

The initial release focuses on showcasing photography, building trust with potential clients, and providing a way to contact Kali for bookings.

Future releases will add online booking, payments, client galleries, and a lightweight CMS.

---

# Design Goals

- Photography-first experience
- Clean, minimal layout
- Elegant typography
- Mobile-first
- Fast page loads
- Excellent SEO
- Accessible
- Easy to maintain
- Static-first architecture

---

# Tech Stack

## Core

- Astro
- TypeScript
- Tailwind CSS
- Vite

## Images

- Cloudinary
- Astro Image

## Forms

- Netlify Forms (or Formspree during MVP)

## SEO

- @astrojs/sitemap
- robots.txt
- Open Graph
- JSON-LD Structured Data

## Analytics

- Google Analytics
- Vercel Analytics (optional)

## Future Integrations

- Stripe
- Cal.com or Calendly
- Supabase
- Resend
- Client Gallery

---

# Folder Structure

```
src/
│
├── assets/
│
├── components/
│   ├── common/
│   │   ├── Button.astro
│   │   ├── Container.astro
│   │   ├── SectionTitle.astro
│   │   └── Card.astro
│   │
│   ├── layout/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   └── MobileMenu.astro
│   │
│   ├── home/
│   │   ├── Hero.astro
│   │   ├── FeaturedGallery.astro
│   │   ├── Services.astro
│   │   ├── AboutPreview.astro
│   │   ├── Testimonials.astro
│   │   ├── InstagramFeed.astro
│   │   └── CTA.astro
│   │
│   ├── gallery/
│   │   ├── GalleryGrid.astro
│   │   ├── GalleryCard.astro
│   │   ├── Lightbox.astro
│   │   └── CategoryFilter.astro
│   │
│   └── contact/
│       └── ContactForm.astro
│
├── content/
│   └── portfolio/
│       ├── families/
│       ├── couples/
│       ├── portraits/
│       ├── weddings/
│       └── lifestyle/
│
├── data/
│   ├── navigation.ts
│   ├── services.ts
│   ├── pricing.ts
│   ├── testimonials.ts
│   └── social.ts
│
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── portfolio.astro
│   ├── pricing.astro
│   ├── contact.astro
│   └── faq.astro
│
├── styles/
│   └── global.css
│
└── utils/
    ├── seo.ts
    └── cloudinary.ts

public/
│
├── favicon/
├── images/
└── og-image.jpg
```

---

# Pages

## Home

Purpose:

Introduce Kali and showcase her best work.

Sections

- Hero
- Featured Portfolio
- Services
- About Preview
- Testimonials
- Instagram Preview
- Call To Action

---

## Portfolio

Purpose:

Browse photography by category.

Categories

- Family
- Portraits
- Couples
- Engagement
- Weddings
- Lifestyle

Features

- Responsive masonry grid
- Category filtering
- Lightbox
- Optimized images

---

## About

Purpose:

Build trust.

Sections

- Portrait
- Story
- Photography Style
- Equipment
- FAQ
- CTA

---

## Pricing

Purpose:

Present packages.

Initial Packages

- Family Sessions
- Portrait Sessions
- Couples
- Events

Each package includes

- Starting price
- Session length
- Deliverables
- Contact button

---

## Contact

Fields

- Name
- Email
- Phone
- Session Type
- Preferred Date
- Message

---

## FAQ

Example questions

- What should we wear?
- How long does a session last?
- Do you travel?
- How many images are included?
- What happens if it rains?

---

# Navigation

- Home
- Portfolio
- About
- Pricing
- Contact

---

# Color Palette

Background

```
#FAF8F6
```

Primary Text

```
#1F1F1F
```

Accent

```
#8B6B4A
```

Light Accent

```
#EEEAE5
```

Border

```
#DDDDDD
```

---

# Typography

Headings

Cormorant Garamond

Body

Inter

Buttons

Inter SemiBold

---

# Component List

## Layout

- Navbar
- Footer
- Mobile Menu

## Common

- Button
- Card
- Section Title
- Container

## Home

- Hero
- Featured Gallery
- Services
- Testimonials
- About Preview
- Instagram Feed
- CTA

## Portfolio

- Masonry Grid
- Gallery Card
- Category Filter
- Lightbox

## Contact

- Contact Form

---

# Responsive Breakpoints

Mobile

```
<640px
```

Tablet

```
640px
```

Desktop

```
1024px
```

Large Desktop

```
1280px+
```

---

# SEO Strategy

Every page should include

- Unique title
- Meta description
- Canonical URL
- Open Graph image
- Twitter Card
- Structured Data

Portfolio pages should include

- Location keywords
- Alt text
- Image descriptions

Example

Title

```
San Diego Family Photographer | Kali Salinas Photography
```

Description

```
Natural family, portrait, and lifestyle photography serving San Diego and Southern California.
```

---

# Image Strategy

Images should never live inside Git.

Use Cloudinary.

Benefits

- Responsive images
- Automatic WebP
- AVIF
- Lazy loading
- CDN
- Compression
- Cropping

---

# Performance Goals

Lighthouse

- Performance >95
- Accessibility >95
- SEO >95
- Best Practices >95

---

# Phase 1 (MVP)

Features

- Home
- Portfolio
- About
- Pricing
- Contact
- Responsive Design
- SEO
- Cloudinary Images

No booking or payment system.

---

# Phase 2

Booking

- Calendar
- Session Request
- Deposit Payment
- Confirmation Emails

Technology

- Stripe
- Cal.com
- Resend

---

# Phase 3

Client Portal

Features

- Password Protected Galleries
- Favorites
- Downloads
- Print Ordering
- Invoice History

Technology

- Supabase
- Stripe
- Cloudinary

---

# Future Blog

Purpose

Improve SEO.

Categories

- Family Photography Tips
- Session Guides
- Wedding Advice
- Locations
- Client Stories

Built using Astro Content Collections.

---

# Accessibility

Requirements

- Semantic HTML
- Keyboard navigation
- Visible focus states
- WCAG AA contrast
- Proper heading hierarchy
- Alt text on all images

---

# Coding Standards

- TypeScript everywhere possible
- Reusable components
- Mobile-first CSS
- No inline styles
- Prefer Astro Islands only when interactivity is required
- Keep JavaScript minimal
- Components should have a single responsibility
- Use descriptive filenames
- Favor composition over large monolithic components

---

# Deployment

Production

GitHub

↓

GitHub Actions

↓

Cloudflare Pages (recommended)

or

AWS S3 + CloudFront

Domain

kalisalinasphotography.com (or preferred custom domain)

---

# Long-Term Vision

Kali Salinas Photography should evolve from a beautiful static portfolio into a complete photography business platform while preserving Astro's speed and simplicity.

The architecture should remain modular so future features—including online booking, Stripe payments, a client portal, blogging, and print sales—can be added without requiring a major redesign or rewrite.
