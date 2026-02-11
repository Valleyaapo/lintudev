## 2025-02-23 - Astro Image Optimization Migration
**Learning:** Legacy images served from `public/` bypass Astro's build-time optimization pipeline. To enable `astro:assets` processing (WebP conversion, resizing), images must be moved to `src/assets` and imported as modules (`ImageMetadata`) rather than referenced by string paths.
**Action:** When optimizing images, refactor data sources to import assets directly and update components to use `<Image />` or `getImage()` for dynamic metadata.
