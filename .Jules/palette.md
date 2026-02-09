## 2025-05-18 - Initial Palette Setup

**Learning:** React's `useId` hook is essential for accessible form associations (label + input) when components might be reused or rendered multiple times, preventing ID collisions.
**Action:** Always use `useId` for generating unique IDs in form components to ensure `htmlFor` and `id` match robustly.
