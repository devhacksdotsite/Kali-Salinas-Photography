export interface PricingPackage {
  title: string;
  startingPrice: number;
  sessionLength: string;
  deliverables: string[];
  description: string;
  /** Highlight as most popular */
  featured?: boolean;
}

export const packages: PricingPackage[] = [
  {
    title: "Family Sessions",
    startingPrice: 350,
    sessionLength: "60 minutes",
    deliverables: [
      "40+ edited digital images",
      "Online gallery with downloads",
      "Print release included",
      "Location scouting assistance",
      "Wardrobe guidance",
    ],
    description:
      "Relaxed, joyful sessions that capture your family's unique connection.",
  },
  {
    title: "Portrait Sessions",
    startingPrice: 275,
    sessionLength: "45 minutes",
    deliverables: [
      "25+ edited digital images",
      "Online gallery with downloads",
      "Print release included",
      "1 outfit change",
      "Posing guidance",
    ],
    description:
      "Seniors, headshots, and creative portraits — personal and authentic.",
  },
  {
    title: "Couples & Engagement",
    startingPrice: 400,
    sessionLength: "75 minutes",
    deliverables: [
      "50+ edited digital images",
      "Online gallery with downloads",
      "Print release included",
      "2 location options",
      "Sunset timing coordination",
    ],
    description:
      "Celebrate your love story with romantic imagery in stunning locations.",
    featured: true,
  },
  {
    title: "Events & Weddings",
    startingPrice: 2500,
    sessionLength: "Custom coverage",
    deliverables: [
      "Full day coverage available",
      "300+ edited digital images",
      "Online gallery with downloads",
      "Second shooter available",
      "Engagement session add-on",
      "Custom timeline planning",
    ],
    description:
      "Editorial yet candid documentation of your most important day.",
  },
];
