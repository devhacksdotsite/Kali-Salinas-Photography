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

const SITE_NAME = "Nums n' Snugs";
const SITE_URL = "https://numsandsnugs.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * Generate a full page title with site name suffix.
 */
export function getPageTitle(title: string): string {
  if (title === SITE_NAME) return title;
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
    "twitter:image": resolveImageUrl(props.ogImage),
  };
}

/**
 * Generate JSON-LD structured data for a LocalBusiness (Photography).
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://numsandsnugs.com",
    name: SITE_NAME,
    description:
      "Authentic, heartfelt lifestyle family photography capturing genuine connections and quiet moments. Serving Surprise, AZ and the West Valley.",
    image: DEFAULT_OG_IMAGE,
    priceRange: "$$",
    url: SITE_URL,
    telephone: "",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surprise",
      addressRegion: "AZ",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.6292,
      longitude: -112.3679,
    },
    areaServed: [
      { "@type": "City", name: "Surprise, AZ" },
      { "@type": "City", name: "Goodyear, AZ" },
      { "@type": "City", name: "Buckeye, AZ" },
      { "@type": "City", name: "Peoria, AZ" },
      { "@type": "City", name: "Avondale, AZ" },
      { "@type": "City", name: "Litchfield Park, AZ" },
      { "@type": "City", name: "Sun City, AZ" },
      { "@type": "City", name: "Glendale, AZ" },
      { "@type": "AdministrativeArea", name: "West Valley, Phoenix Metro" },
      { "@type": "State", name: "Arizona" },
      { "@type": "AdministrativeArea", name: "Southern California" },
    ],
    sameAs: [
      "https://instagram.com/numsandsnugs",
      "https://facebook.com/numsandsnugs",
      "https://pinterest.com/numsandsnugs",
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
