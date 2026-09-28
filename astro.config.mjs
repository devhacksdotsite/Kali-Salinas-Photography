// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://kalimaries.com",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/privacy"),
    }),
  ],
  vite: {
    cacheDir: process.env.VITE_CACHE_DIR ?? "./.astro-cache",
    plugins: [tailwindcss()],
  },
});
