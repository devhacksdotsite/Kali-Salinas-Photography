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
    id: "terez-honor-eye-patches",
    title: "Caffeine Hyaluronic Acid Eye Gel Patch",
    brand: "Terez & Honor",
    category: "Beauty",
    format: "Product Demo",
    video: "/videos/terez-honor-eye-patches.mp4",
    poster: "/images/terez-honor-eye-patches.jpg",
    alt: "Terez & Honor Caffeine Hyaluronic Acid Eye Gel Patch being lifted from its jar",
    description: "A close-up beauty product demo highlighting the cooling gel texture",
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
