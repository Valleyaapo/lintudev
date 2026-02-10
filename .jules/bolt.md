## 2026-02-10 - [Missing Image Optimization Service]
**Learning:** The project was missing `sharp`, which prevented Astro's built-in image service from optimizing images during static builds (`output: 'static'`).
**Action:** Always ensure `sharp` is installed when using Astro's SSG mode for image optimization.
