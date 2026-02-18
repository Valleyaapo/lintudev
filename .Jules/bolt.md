## 2025-02-18 - Manual Image Tags vs Performance
**Learning:** In Astro components using manual `<img>` tags (e.g. for dynamic paths from data), developers might manually set `loading="eager"` and `fetchpriority="high"` incorrectly on below-the-fold images. This competes with critical resources and degrades initial load performance.
**Action:** Always verify `loading` and `fetchpriority` attributes on manual `<img>` tags, ensuring only above-the-fold content is eager/high priority.
