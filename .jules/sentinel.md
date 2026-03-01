## 2023-10-27 - Added input sanitization to email HTML template
**Vulnerability:** Unsanitized user inputs (name, email, message) were directly interpolated into an HTML string for the email body in `src/pages/api/contact.ts`, creating a Cross-Site Scripting (XSS) vulnerability if the email client renders the HTML unsafely.
**Learning:** Astro API routes do not automatically sanitize input, requiring manual handling for dynamic HTML generation. User inputs interpolated into HTML structures must be sanitized.
**Prevention:** Always use a utility function like `escapeHtml` to sanitize user inputs before embedding them into HTML strings.
