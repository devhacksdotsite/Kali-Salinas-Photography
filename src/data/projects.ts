export interface Project {
  id: string;
  title: string;
  brand?: string;
  category: string;
  format?: string;
  description?: string;
  video: string;
  poster: string;
  alt: string;
  featured?: boolean;
}

// Add approved work here as finished media becomes available.
// Keep the video and poster filenames aligned so media can be reviewed locally.
export const projects: Project[] = [
  {
    id: "placeholder-product-demo",
    title: "Placeholder Product Demo",
    category: "Product Demo",
    format: "Talking Head",
    video: "/videos/placeholder-product-demo.mp4",
    poster: "/images/placeholder-product-demo.svg",
    alt: "Placeholder product demo video, to be replaced with approved portfolio work",
    description: "Placeholder media — replace before launch",
  },
  {
    id: "placeholder-screen-recording",
    title: "Placeholder Screen Recording",
    category: "Screen Recording",
    format: "Product Walkthrough",
    video: "/videos/placeholder-screen-recording.mp4",
    poster: "/images/placeholder-screen-recording.svg",
    alt: "Placeholder screen recording video, to be replaced with approved portfolio work",
    description: "Placeholder media — replace before launch",
  },
  {
    id: "placeholder-voiceover-broll",
    title: "Placeholder Voiceover + B-roll",
    category: "Voiceover + B-roll",
    format: "Lifestyle Story",
    video: "/videos/placeholder-voiceover-broll.mp4",
    poster: "/images/placeholder-voiceover-broll.svg",
    alt: "Placeholder voiceover and b-roll video, to be replaced with approved portfolio work",
    description: "Placeholder media — replace before launch",
  },
];
