## 2026-02-05 - Astro Image Optimization
**Learning:** Moving images from `public/` to `src/assets/` and using `astro:assets` reduced image sizes by ~90% (e.g., 732kB -> 53kB) without visible quality loss. This is a critical pattern for this architecture.
**Action:** Always prefer `src/assets` + import + `<Image />` over `public/` + `<img>`. Update data files to store `ImageMetadata` objects instead of string paths.
