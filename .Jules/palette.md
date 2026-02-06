## 2026-02-06 - Explicit Form Label Association

**Learning:** React components often use visual grouping for labels and inputs, but miss semantic association. `useId` is critical for generating unique IDs in reusable components to ensure `htmlFor` works correctly without ID collisions.

**Action:** Always verify that form inputs have a corresponding `<label>` with `htmlFor` matching the input's `id`. Use `useId` hook for dynamic ID generation.
