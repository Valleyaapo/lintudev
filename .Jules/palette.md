# Palette's Journal

## 2026-05-21 - Form Accessibility Pattern
**Learning:** Found explicit "BAD" pattern where form labels were visually present but not programmatically linked to inputs via `htmlFor`/`id`. This breaks accessibility for screen reader users who won't know which label belongs to which input.
**Action:** When auditing forms, always check for `htmlFor` + `id` pairing. Use `React.useId()` for generating stable, unique IDs to avoid collisions and manual naming fatigue.
