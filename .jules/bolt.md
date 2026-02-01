## 2025-02-17 - Optimization of Static Assets in Astro
**Learning:** Images in `public/` bypass Astro's optimization pipeline. To optimize, they must be moved to `src/assets/` and imported. This allows usage of `<Image />` component which automatically generates WebP/AVIF and correct sizes, significantly reducing file size (e.g. 700kb -> 50kb).
**Action:** When seeing `<img>` tags pointing to `/assets/...`, immediately check if they can be moved to `src/assets` and optimized.
