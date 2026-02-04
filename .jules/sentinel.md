## 2026-02-04 - HTML Email Injection Risk
**Vulnerability:** Raw user input was interpolated directly into HTML email strings in API routes.
**Learning:** The project uses manual string concatenation for emails (Resend API) without a templating engine that auto-escapes.
**Prevention:** Always use `escapeHtml` helper from `src/utils/sanitize.ts` when embedding user input into email HTML bodies.
