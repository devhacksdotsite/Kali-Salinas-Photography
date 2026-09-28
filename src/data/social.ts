export interface SocialLink {
  label: string;
  href: string;
  /** SVG path data for the icon (24x24 viewBox) */
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@kalixmaries",
    icon: "M19.589 6.686a4.793 4.793 0 0 1-3.77-3.858V2h-3.45v13.578a2.892 2.892 0 1 1-2.892-2.892c.178 0 .352.016.521.047V9.22a6.35 6.35 0 1 0 5.821 6.337V8.88a8.16 8.16 0 0 0 4.77 1.535V6.97a4.82 4.82 0 0 1-1-.284Z",
  },
];
