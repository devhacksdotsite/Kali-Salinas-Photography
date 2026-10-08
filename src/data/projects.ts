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
    description: "An up-close look at the texture, application, and little details that make this product stand out.",
  },
  {
    id: "little-spoon-strawberry-banana-shake",
    title: "Strawberry Banana Shake",
    brand: "Little Spoon",
    category: "Lifestyle",
    format: "Product Demo",
    video: "/videos/little-spoon-strawberry-banana-shake.mp4",
    poster: "/images/little-spoon-strawberry-banana-shake.jpg",
    alt: "Little Spoon Strawberry Banana Shake pouch being opened over a child’s tray",
    description: "A little everyday moment featuring Little Spoon's strawberry banana shake and how it fits into a busy day.",
  },
  {
    id: "tubby-todd-all-over-products",
    title: "All Over Ointment + Hair & Body Wash",
    brand: "Tubby Todd",
    category: "Lifestyle",
    format: "Product Demo",
    video: "/videos/tubby-todd-all-over-products.mp4",
    poster: "/images/tubby-todd-all-over-products.jpg",
    alt: "Tubby Todd All Over Ointment held in front of the brand's Hair & Body Wash",
    description: "A closer look at an everyday skincare favorite, highlighting the product and the little details that make it special.",
  },
  {
    id: "familywall-app-walkthrough",
    title: "FamilyWall App",
    brand: "FamilyWall",
    category: "Tech",
    format: "App Walkthrough",
    video: "/videos/familywall-app-walkthrough.mp4",
    poster: "/images/familywall-app-walkthrough.jpg",
    alt: "FamilyWall family organization app dashboard showing lists, calendar, budget, and documents",
    description: "A quick look at FamilyWall's colorful dashboard and the everyday tools it brings together.",
  },
  {
    id: "olive-june-press-ons",
    title: "Instant Mani Press-Ons",
    brand: "Olive & June",
    category: "Beauty",
    format: "Product Demo",
    video: "/videos/olive-june-press-ons.mp4",
    poster: "/images/olive-june-press-ons.jpg",
    alt: "Olive & June Instant Mani press-on nails in a deep red shade",
    description: "A close-up look at Olive & June's deep red Instant Mani press-ons and the details of the set.",
  },
  {
    id: "nanit-baby-monitor",
    title: "Baby Monitor",
    brand: "Nanit",
    category: "Tech",
    format: "Product Demo",
    video: "/videos/nanit-baby-monitor.mp4",
    poster: "/images/nanit-baby-monitor.jpg",
    alt: "Nanit baby monitor tablet held by a parent in a nursery",
    description: "A natural, everyday moment with a parent exploring the Nanit baby monitor.",
  },
  {
    id: "good-gather-decaf-caramel-macchiato",
    title: "Decaf Caramel Macchiato",
    brand: "Good & Gather",
    category: "Lifestyle",
    format: "Product Demo",
    video: "/videos/good-gather-decaf-caramel-macchiato.mp4",
    poster: "/images/good-gather-decaf-caramel-macchiato.jpg",
    alt: "Good & Gather decaf caramel macchiato coffee enjoyed in a patterned mug",
    description: "A cozy coffee moment featuring Good & Gather's decaf caramel macchiato flavor.",
  },
];
