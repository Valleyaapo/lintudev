## 2026-02-25 - [Astro Image Optimization]
**Learning:** Astro's built-in image optimization service requires `sharp` to be installed as a dependency when using `output: 'static'`, even if `@astrojs/vercel` is used.
**Action:** Always ensure `sharp` is added to dependencies for Astro projects relying on image optimization.
