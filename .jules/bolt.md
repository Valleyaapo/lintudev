## 2026-02-07 - [Astro Image Optimization]
**Learning:** Moving static images from `public/assets` to `src/assets` and using Astro's `<Image />` component reduced total image size from ~4.5MB to ~300KB.
**Action:** Always prefer `src/assets` imports for images over `public/` references to leverage build-time optimization.
