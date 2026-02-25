## 2026-10-25 - [Async State Accessibility]
**Learning:** Submit buttons must provide immediate visual (spinner) and semantic (`aria-busy`) feedback to indicate processing, especially for serverless functions that may have cold starts.
**Action:** Always add loading states and `aria-busy` to form submit buttons.

## 2026-10-25 - [Hydration Testing]
**Learning:** `client:visible` hydrated components in Astro may become visible before event listeners attach, causing test flakes.
**Action:** When testing hydrated components with Playwright, ensure hydration is complete (e.g., via timeout or specific hydration marker) before interacting.
