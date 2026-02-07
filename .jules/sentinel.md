## 2026-02-07 - HTML Injection in Contact Form
**Vulnerability:** User input (name, email, message) was interpolated directly into the HTML email body without sanitization.
**Learning:** Even simple string interpolation can be dangerous when dealing with user input in email bodies. Always sanitize data before using it in HTML contexts.
**Prevention:** Use the `escapeHtml` utility from `src/utils/sanitize.ts` to escape special characters before interpolation.
