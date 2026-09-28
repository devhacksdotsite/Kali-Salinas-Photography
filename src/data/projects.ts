export interface Project {
  id: string;
  title: string;
  category: string;
  description?: string;
  video: string;
  poster?: string;
  alt: string;
  featured?: boolean;
}

// Add new portfolio items here as finished work becomes available.
export const projects: Project[] = [];
