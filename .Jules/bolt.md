## 2026-03-03 - Astro Image Optimization Missing Sharp
**Learning:** The project relies on Astro's built-in image optimization which requires `sharp` to be installed. However, it was not listed in `dependencies` and the build failed until manually installed.
**Action:** Ensure `sharp` is explicitly listed in `dependencies` when using `astro:assets` image optimization.
