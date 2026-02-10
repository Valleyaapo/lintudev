## 2024-05-22 - [Explicit Label Association & Loading States]
**Learning:** React forms in this codebase lacked explicit 'htmlFor'/'id' associations, relying on visual proximity which fails for screen readers. Additionally, async actions lacked visual and semantic feedback ('aria-busy').
**Action:** Always use 'useId' for unique ID generation in forms and implement 'aria-busy' with visual spinners for all async submit actions.
