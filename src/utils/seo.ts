/**
 * SEO utility helpers for meta tags, Open Graph, and JSON-LD structured data.
 */

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
}

const SITE_NAME = "Kali Salinas Photography";
const DEFAULT_OG_IMAGE = "/og-image.jpg";

/**
 * Generate a full page title with site name suffix.
 */
export function getPageTitle(title: string): string {
  if (title === SITE_NAME) return title;
  return `${title} | ${SITE_NAME}`;
}

/**
 * Generate Open Graph meta tag values.
 */
export function getOpenGraphTags(props: SEOProps, url: string) {
  return {
    "og:title": getPageTitle(props.title),
    "og:description": props.description,
    "og:type": props.ogType ?? "website",
    "og:url": url,
    "og:image": props.ogImage ?? DEFAULT_OG_IMAGE,
    "og:site_name": SITE_NAME,
  };
}

/**
 * Generate Twitter Card meta tag values.
 */
export function getTwitterTags(props: SEOProps) {
  return {
    "twitter:card": "summary_large_image",
    "twitter:title": getPageTitle(props.title),
    "twitter:description": props.description,
    "twitter:image": props.ogImage ?? DEFAULT_OG_IMAGE,
  };
}

/**
 * Generate JSON-LD structured data for a LocalBusiness (Photography).
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description:
      "Natural family, portrait, and lifestyle photography serving Arizona and Southern California.",
    image: DEFAULT_OG_IMAGE,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "AZ",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "State", name: "Arizona" },
      { "@type": "State", name: "California" },
    ],
  };
}

/**
 * Generate JSON-LD structured data for a WebPage.
 */
export function getWebPageSchema(props: SEOProps, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: getPageTitle(props.title),
    description: props.description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
    },
  };
}
