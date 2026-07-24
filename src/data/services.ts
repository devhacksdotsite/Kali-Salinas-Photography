export interface Service {
  title: string;
  description: string;
  href: string;
  /** Cloudinary public ID for the service image */
  image: string;
}

export const services: Service[] = [
  {
    title: "Family Sessions",
    description:
      "Relaxed, joyful sessions that capture the connection and love your family shares.",
    href: "/portfolio?category=families",
    image: "kali-photography/services/family",
  },
  {
    title: "Portraits",
    description:
      "Personal and authentic portraits — seniors, headshots, and creative sessions.",
    href: "/portfolio?category=portraits",
    image: "kali-photography/services/portrait",
  },
  {
    title: "Couples & Engagement",
    description:
      "Celebrate your love story with natural, romantic imagery in stunning locations.",
    href: "/portfolio?category=couples",
    image: "kali-photography/services/couples",
  },
  {
    title: "Lifestyle",
    description:
      "Documentary-style sessions capturing everyday moments and the beauty in your routine.",
    href: "/portfolio?category=lifestyle",
    image: "kali-photography/services/lifestyle",
  },
];
