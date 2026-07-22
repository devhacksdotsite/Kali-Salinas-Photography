# Kali Salinas Photography

A modern, fast, SEO-friendly photography portfolio built with Astro and Tailwind CSS.

## Overview

Photography-first portfolio site for Kali Salinas Photography, serving Arizona and California. Designed for speed, accessibility, and excellent SEO with a static-first architecture.

## Tech Stack

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Images:** Cloudinary (CDN, responsive, WebP/AVIF)
- **Forms:** Formspree (MVP)
- **SEO:** @astrojs/sitemap, Open Graph, JSON-LD

## Commands

All commands are run from the root of the project:

| Command | Action |
| :---------------- | :----------------------------------------- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## Project Structure

```
src/
├── assets/
├── components/
│   ├── common/       # Button, Container, SectionTitle, Card
│   ├── layout/       # Navbar, Footer, MobileMenu
│   ├── home/         # Hero, FeaturedGallery, Services, etc.
│   ├── gallery/      # GalleryGrid, Lightbox, CategoryFilter
│   └── contact/      # ContactForm
├── content/
│   └── portfolio/    # Content collections by category
├── data/             # Static data (navigation, services, pricing, testimonials)
├── layouts/          # BaseLayout
├── pages/            # index, portfolio, about, pricing, contact, faq
├── styles/           # global.css
└── utils/            # seo.ts, cloudinary.ts
```

## Documentation

- [Project Spec](docs/init.md)
- [Implementation Plan](docs/implementation.md)
