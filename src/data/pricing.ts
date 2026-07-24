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
    title: "Quick Mini",
    startingPrice: 150,
    sessionLength: "10 minutes",
    deliverables: [
      "5–10 edited digital images",
      "Online gallery with downloads",
      "Print release included",
      "1 outfit / 1 setup",
      "Perfect for seasonal minis",
    ],
    description:
      "A quick, fun session — ideal for holiday cards, milestones, or a fresh profile photo.",
  },
  {
    title: "Classic Mini",
    startingPrice: 200,
    sessionLength: "15 minutes",
    deliverables: [
      "10–15 edited digital images",
      "Online gallery with downloads",
      "Print release included",
      "1–2 setups",
      "Wardrobe guidance",
    ],
    description:
      "Our most popular mini — enough time to capture real connection without the time commitment.",
    featured: true,
  },
  {
    title: "Extended Mini",
    startingPrice: 275,
    sessionLength: "30 minutes",
    deliverables: [
      "20–25 edited digital images",
      "Online gallery with downloads",
      "Print release included",
      "2–3 setups or outfit changes",
      "Location scouting assistance",
      "Wardrobe guidance",
    ],
    description:
      "More time to explore, play, and capture a wider variety of moments together.",
  },
  {
    title: "Couples & Engagement",
    startingPrice: 350,
    sessionLength: "45 minutes",
    deliverables: [
      "30+ edited digital images",
      "Online gallery with downloads",
      "Print release included",
      "2 location options",
      "Sunset timing coordination",
      "Posing & prompt guidance",
    ],
    description:
      "Celebrate your love story with romantic imagery in stunning locations.",
  },
  {
    title: "Full Session",
    startingPrice: 450,
    sessionLength: "60 minutes",
    deliverables: [
      "40+ edited digital images",
      "Online gallery with downloads",
      "Print release included",
      "Multiple outfits & locations",
      "Location scouting assistance",
      "Wardrobe guidance",
    ],
    description:
      "Our most comprehensive session — perfect for families wanting variety or milestone celebrations.",
  },
];
