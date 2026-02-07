## 2024-05-23 - Astro Assets Dependency Requirement
**Learning:** Astro's built-in image optimization (`astro:assets`) fails during build with a `MissingSharp` error if the `sharp` package is not explicitly installed in the project dependencies.
**Action:** Always install `sharp` (`pnpm add sharp`) immediately when enabling or using `astro:assets` for image optimization.
