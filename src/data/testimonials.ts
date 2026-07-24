export interface Testimonial {
  quote: string;
  name: string;
  /** Session type or context */
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "They made our family feel so comfortable. The photos captured exactly who we are — playful, messy, and full of love.",
    name: "Sarah M.",
    context: "Family Mini Session",
  },
  {
    quote:
      "We were nervous about engagement photos, but the energy made it feel like a date night. We can't stop looking at them!",
    name: "Jessica & David",
    context: "Couples Session",
  },
  {
    quote:
      "The portraits for my senior year are absolutely stunning. They found the best light and made me feel like a model.",
    name: "Emma R.",
    context: "Portrait Mini",
  },
  {
    quote:
      "We only had 15 minutes and somehow they captured the most genuine photos we've ever taken as a family. Pure magic!",
    name: "The Nguyen Family",
    context: "Classic Mini Session",
  },
];
