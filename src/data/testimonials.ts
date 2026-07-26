export interface Testimonial {
  quote: string;
  name: string;
  /** Session type or context */
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "She got my kids being KIDS. Like actually running around and laughing and being crazy. I cried when I saw them. Best photos we've ever had.",
    name: "Sarah M.",
    context: "Family Mini",
  },
  {
    quote:
      "We forgot she was even there half the time. The photos look like us, not some stiff version of us trying to smile on command.",
    name: "Jessica & David",
    context: "Couples Session",
  },
  {
    quote:
      "15 minutes and somehow she got the most genuine photos of our family. My husband hates photos and even he said these were amazing.",
    name: "The Nguyen Family",
    context: "Classic Mini",
  },
  {
    quote:
      "I didn't want the overly edited Pinterest look. These feel real and warm and exactly like our life right now. So so happy.",
    name: "Rachel T.",
    context: "Extended Mini",
  },
];
