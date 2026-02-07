## 2026-02-02 - React Label Association
**Learning:** React components in this codebase use visual label wrappers without explicit `htmlFor` bindings, breaking screen reader accessibility. Explicitly linking `label` to `input` via `htmlFor` and `id` (using `useId` for uniqueness) is critical.
**Action:** Always verify `htmlFor` attributes on labels and ensure they match input `id`s, using `useId` to avoid ID collisions in reusable components.
