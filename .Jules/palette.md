## 2025-02-24 - Accessibility Gaps in Form Components
**Learning:** Basic form inputs (Input, Textarea) were missing `id` and `htmlFor` associations, causing screen reader failures. Even in modern React/Astro stacks, these fundamental HTML attributes are often overlooked.
**Action:** Always verify form accessibility using `get_by_label` in Playwright tests, as it enforces proper label association.

## 2025-02-24 - Loading State UX
**Learning:** Users lack feedback during async operations without explicit loading indicators. Adding `aria-busy` and a visual spinner provides immediate confirmation and improves perceived performance.
**Action:** Include `aria-busy` and a spinner for all async submit buttons by default.
