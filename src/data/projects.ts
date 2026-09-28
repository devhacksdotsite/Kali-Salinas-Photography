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
export const projects: Project[] = [];
