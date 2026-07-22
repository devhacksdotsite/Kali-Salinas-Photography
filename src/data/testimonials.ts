export interface Testimonial {
  quote: string;
  name: string;
  /** Session type or context */
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Kali made our family feel so comfortable. The photos captured exactly who we are — playful, messy, and full of love.",
    name: "Sarah M.",
    context: "Family Session",
  },
  {
    quote:
      "We were nervous about engagement photos, but Kali's energy made it feel like a date night. We can't stop looking at them!",
    name: "Jessica & David",
    context: "Engagement Session",
  },
  {
    quote:
      "The portraits Kali took for my senior year are absolutely stunning. She found the best light and made me feel like a model.",
    name: "Emma R.",
    context: "Senior Portraits",
  },
  {
    quote:
      "Kali captured our wedding day perfectly — all the emotions, the details, the joy. We'll treasure these forever.",
    name: "Megan & Tyler",
    context: "Wedding",
  },
];
