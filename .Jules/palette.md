## 2026-02-05 - Form Accessibility Pattern
**Learning:** React forms were missing `htmlFor`/`id` associations, making them inaccessible to screen readers.
**Action:** Always use `useId` hook to generate unique IDs for form inputs and link them to labels.
