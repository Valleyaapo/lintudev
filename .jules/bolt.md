## 2026-02-08 - [Astro SSG Image Optimization]
**Learning:** The `@astrojs/vercel` adapter combined with `output: 'static'` requires `sharp` to be installed for Astro's built-in `<Image />` component optimization to work during build time.
**Action:** Always install `sharp` when using Astro Assets in static builds deployed to Vercel.
