## 2026-02-21 - Contact Form Accessibility and Feedback
**Learning:** The Contact component inputs were missing `id` and `htmlFor` attributes, making them inaccessible to screen readers.
**Action:** Always verify form inputs have associated labels using `id` and `htmlFor` during development.

## 2026-02-21 - Loading State Verification
**Learning:** Playwright's `page.route` with artificial delay is effective for verifying transient loading states that are otherwise too fast to test.
**Action:** Use request interception to reliably test loading indicators and disabled states.
