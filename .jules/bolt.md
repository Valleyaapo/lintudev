## 2024-05-22 - [Optimized Image Assets with Astro]
**Learning:** Moving images from `public/` to `src/assets/` and using `astro:assets` `<Image />` component provided massive size reductions (e.g., ~90% reduction, 474kB -> 50kB) without visual loss. `import.meta.glob` is essential for dynamic image loading in this setup.
**Action:** Always prefer `src/assets` + `<Image />` over `public/` folder for static images in Astro.
