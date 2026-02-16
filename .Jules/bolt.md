## 2026-02-16 - Astro Image Optimization
**Learning:** Astro projects require `sharp` for image optimization, which was missing. Also, switching from string URLs to `ImageMetadata` is a breaking change for consumers.
**Action:** Always check `package.json` for `sharp` before optimizing Astro images. Always grep for usages when changing data interfaces.
