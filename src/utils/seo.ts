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

const SITE_NAME = "Kali Salinas";
const SITE_URL = "https://kalimaries.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.svg`;

/**
 * Generate a full page title with site name suffix.
 */
export function getPageTitle(title: string): string {
  if (title === SITE_NAME || title.includes(SITE_NAME)) return title;
  return `${title} | ${SITE_NAME}`;
}

/**
 * Resolve an image path to an absolute URL.
 */
function resolveImageUrl(image?: string): string {
  if (!image) return DEFAULT_OG_IMAGE;
  if (image.startsWith("http")) return image;
  return `${SITE_URL}${image.startsWith("/") ? "" : "/"}${image}`;
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
    "og:image": resolveImageUrl(props.ogImage),
    "og:image:alt": "Kali Salinas — Lifestyle UGC creator",
    "og:site_name": SITE_NAME,
    "og:locale": "en_US",
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
    "twitter:image": resolveImageUrl(props.ogImage),
    "twitter:image:alt": "Kali Salinas — Lifestyle UGC creator",
  };
}

/**
 * Generate JSON-LD structured data for the creator.
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://kalimaries.com/#kali-salinas",
    name: SITE_NAME,
    description:
      "Arizona-based UGC creator creating travel, beauty, lifestyle, and tech content for brands.",
    image: DEFAULT_OG_IMAGE,
    url: SITE_URL,
    jobTitle: "UGC Creator",
    email: "mailto:Kalisalinasm@gmail.com",
    address: { "@type": "PostalAddress", addressRegion: "AZ", addressCountry: "US" },
    sameAs: ["https://www.tiktok.com/@kalixmaries"],
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
