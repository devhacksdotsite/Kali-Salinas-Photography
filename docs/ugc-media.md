# UGC Media Workflow

Portfolio videos are defined in `src/data/projects.ts` and rendered by the selected work section.

## Adding a project

1. Add the approved vertical video to `public/videos/` as an optimized MP4.
2. Add its poster image to `public/images/` as a compressed JPG or WebP.
3. Add a project object to `src/data/projects.ts`.
4. Use a descriptive `alt` value that explains what viewers see.
5. Run a production build and review the video on a narrow mobile viewport.

Example:

```ts
{
  id: "product-name-demo",
  title: "Product Name Demo",
  brand: "Product Name",
  category: "Product Demo",
  format: "Voiceover + B-roll",
  video: "/videos/product-name-demo.mp4",
  poster: "/images/product-name-demo.webp",
  alt: "Kali showing how Product Name fits into a daily routine",
  description: "A natural product walkthrough for short-form social content",
}
```

Use `9:16` video exports where possible. Keep individual files appropriately compressed, and avoid adding work that has not been approved for public use.
