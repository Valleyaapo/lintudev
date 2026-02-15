## 2026-02-15 - HTML Injection in Email Body
**Vulnerability:** User input (name, email, message) was directly interpolated into the HTML body of emails sent via Resend API, allowing for Stored XSS attacks against email recipients.
**Learning:** Astro API routes do not automatically sanitize input, and simple string interpolation for HTML generation is dangerous even for internal emails.
**Prevention:** Always use a sanitization utility like `escapeHtml` before inserting user-controlled data into HTML strings, or use a templating engine that auto-escapes.
