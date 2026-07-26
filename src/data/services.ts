export interface Service {
  title: string;
  description: string;
  href: string;
  /** Cloudinary public ID for the service image */
  image: string;
  /** Price label */
  price: string;
}

export const services: Service[] = [
  {
    title: "Quick Mini",
    description:
      "10 minutes — perfect for holiday cards, milestones, or a fresh profile photo.",
    href: "/pricing",
    image: "kali-photography/services/quick-mini",
    price: "From $150",
  },
  {
    title: "Classic Mini",
    description:
      "15 minutes — our most popular session. Real connection, no time pressure.",
    href: "/pricing",
    image: "kali-photography/services/classic-mini",
    price: "From $200",
  },
  {
    title: "Extended Mini",
    description:
      "30 minutes — more time to explore, play, and capture a wider variety of moments.",
    href: "/pricing",
    image: "kali-photography/services/extended-mini",
    price: "From $275",
  },
  {
    title: "Couples & Engagement",
    description:
      "45 minutes — celebrate your love story with romantic imagery in stunning locations.",
    href: "/pricing",
    image: "kali-photography/services/couples",
    price: "From $350",
  },
];
