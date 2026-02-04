## 2025-05-18 - Astro Image Optimization
**Learning:** Moving static images from `public/` to `src/assets` and using `astro:assets` (<Image /> component) drastically reduces file size (e.g., 732kB -> 53kB for hero images) and enables automatic WebP/AVIF conversion.
**Action:** Always prefer `src/assets` imports over `public/` string paths for local images in Astro projects.
