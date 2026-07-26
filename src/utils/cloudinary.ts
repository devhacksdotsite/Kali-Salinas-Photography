/**
 * Cloudinary image utility for building optimized, responsive image URLs.
 *
 * Uses Cloudinary's URL-based transformation API (no SDK needed at runtime).
 * Images are served via CDN with automatic format negotiation (WebP/AVIF).
 */

const CLOUD_NAME = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME ?? "demo";
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/**
 * Cache version — bump this number to force CDN cache invalidation.
 * Set to empty string to disable.
 */
const CACHE_VERSION = "v2";

/** Common responsive breakpoints for srcset generation */
const DEFAULT_WIDTHS = [320, 480, 640, 768, 1024, 1280, 1536, 1920];

export interface TransformOptions {
  /** Width in pixels */
  width?: number;
  /** Height in pixels */
  height?: number;
  /** Crop mode */
  crop?: "fill" | "fit" | "scale" | "thumb" | "crop";
  /** Gravity for crop (e.g., "face", "center", "auto") */
  gravity?: string;
  /** Quality (1-100 or "auto") */
  quality?: number | "auto";
  /** Format (default: "auto" for WebP/AVIF negotiation) */
  format?: "auto" | "webp" | "avif" | "jpg" | "png";
  /** Aspect ratio (e.g., "16:9", "4:3") */
  aspectRatio?: string;
  /** Additional raw transformations */
  raw?: string;
}

/**
 * Build a Cloudinary transformation string from options.
 */
function buildTransformations(options: TransformOptions = {}): string {
  const parts: string[] = [];

  if (options.width) parts.push(`w_${options.width}`);
  if (options.height) parts.push(`h_${options.height}`);
  if (options.crop) parts.push(`c_${options.crop}`);
  if (options.gravity) parts.push(`g_${options.gravity}`);
  if (options.quality) parts.push(`q_${options.quality}`);
  if (options.format) parts.push(`f_${options.format}`);
  if (options.aspectRatio) parts.push(`ar_${options.aspectRatio}`);
  if (options.raw) parts.push(options.raw);

  // Default to auto format and auto quality if not specified
  if (!options.format) parts.push("f_auto");
  if (!options.quality) parts.push("q_auto");

  return parts.join(",");
}

/**
 * Generate a single Cloudinary image URL.
 *
 * @param publicId - The Cloudinary public ID (e.g., "portfolio/family-beach")
 * @param options - Transformation options
 * @returns Full Cloudinary URL
 *
 * @example
 * ```ts
 * getImageUrl("portfolio/family-beach", { width: 800, crop: "fill" })
 * // => "https://res.cloudinary.com/CLOUD/image/upload/w_800,c_fill,f_auto,q_auto/portfolio/family-beach"
 * ```
 */
export function getImageUrl(publicId: string, options: TransformOptions = {}): string {
  const transformations = buildTransformations(options);
  const version = CACHE_VERSION ? `${CACHE_VERSION}/` : "";
  return `${BASE_URL}/${transformations}/${version}${publicId}`;
}

/**
 * Generate a srcset string for responsive images.
 *
 * @param publicId - The Cloudinary public ID
 * @param options - Base transformation options (width will be overridden per breakpoint)
 * @param widths - Array of widths for srcset (defaults to common breakpoints)
 * @returns srcset string for use in <img> or <source>
 *
 * @example
 * ```ts
 * getSrcSet("portfolio/family-beach", { crop: "fill", aspectRatio: "3:2" })
 * // => "https://...w_320.../family-beach 320w, https://...w_480.../family-beach 480w, ..."
 * ```
 */
export function getSrcSet(
  publicId: string,
  options: TransformOptions = {},
  widths: number[] = DEFAULT_WIDTHS,
): string {
  return widths
    .map((w) => {
      const url = getImageUrl(publicId, { ...options, width: w });
      return `${url} ${w}w`;
    })
    .join(", ");
}

/**
 * Generate sizes attribute for common responsive layouts.
 */
export function getSizes(layout: "full" | "half" | "third" | "gallery"): string {
  switch (layout) {
    case "full":
      return "100vw";
    case "half":
      return "(max-width: 768px) 100vw, 50vw";
    case "third":
      return "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";
    case "gallery":
      return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
  }
}

/**
 * Get a low-quality placeholder URL for blur-up loading.
 *
 * @param publicId - The Cloudinary public ID
 * @returns A tiny, blurred placeholder URL
 */
export function getPlaceholderUrl(publicId: string): string {
  return getImageUrl(publicId, {
    width: 30,
    quality: 30,
    format: "auto",
    raw: "e_blur:1000",
  });
}
