export interface Testimonial {
  quote: string;
  name: string;
  /** Session type or context */
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "She captured our family exactly as we are — the tickle fights, the messy hair, my toddler's belly laugh. These aren't just photos, they're memories I can feel.",
    name: "Sarah M.",
    context: "Family Mini Session",
  },
  {
    quote:
      "We didn't even realize she was shooting half the time. The candid moments she caught between us are more beautiful than anything we could have posed for.",
    name: "Jessica & David",
    context: "Couples Session",
  },
  {
    quote:
      "I was nervous about being in front of the camera, but she made it feel like we were just hanging out. The photos look like a page from a magazine but feel like real life.",
    name: "The Nguyen Family",
    context: "Extended Mini Session",
  },
  {
    quote:
      "She got my kids being totally themselves — running, laughing, piling on top of each other. I ugly-cried when I saw the gallery. These are exactly the moments I never want to forget.",
    name: "Rachel T.",
    context: "Classic Mini Session",
  },
];
