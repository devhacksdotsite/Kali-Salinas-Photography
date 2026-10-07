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
    id: "little-spoon-strawberry-banana-shake",
    title: "Strawberry Banana Shake",
    brand: "Little Spoon",
    category: "Lifestyle",
    format: "Product Demo",
    video: "/videos/little-spoon-strawberry-banana-shake.mp4",
    poster: "/images/little-spoon-strawberry-banana-shake.jpg",
    alt: "Little Spoon Strawberry Banana Shake pouch being opened over a child’s tray",
    description: "A warm, everyday product moment featuring Little Spoon’s strawberry banana shake",
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
    description: "A soft, everyday baby-care product showcase featuring Tubby Todd essentials",
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
    description: "A clear app walkthrough showing how FamilyWall keeps household life organized",
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
    description: "A polished beauty product showcase for Olive & June's at-home manicure",
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
    description: "A warm, real-life product demo showing Nanit in a parent’s daily routine",
  },
];
