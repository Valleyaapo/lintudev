## 2025-02-12 - Astro Image Optimization
**Learning:** In Astro, image optimization (resizing, format conversion) using `<Image />` component only generates multiple responsive sizes if `widths` and `sizes` attributes are explicitly provided. Without them, it only performs format conversion (e.g., to WebP) but serves the original dimension, missing out on significant payload reduction for smaller viewports.
**Action:** Always specify `widths` and `sizes` when using Astro's `<Image />` component for responsive images to ensure optimal file sizes across devices.
