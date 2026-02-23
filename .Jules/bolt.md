## 2025-02-23 - [Optimized Project Images with Astro Assets]
**Learning:** Migrating static images from `public/` to `src/assets` and using Astro's `<Image />` component with `ImageMetadata` significantly reduces image size (e.g., 732kB -> 53kB for hero images) and enables modern formats like WebP/AVIF automatically.
**Action:** Always import images in data files (`src/data/projects.ts`) and use `getImage()` for non-component usages (like Open Graph tags) to leverage build-time optimization.
