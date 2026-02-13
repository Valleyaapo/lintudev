## 2026-02-13 - Unsanitized Email Templates
**Vulnerability:** Contact form input was interpolated directly into HTML email bodies without sanitization, allowing stored XSS attacks if email clients render HTML.
**Learning:** Email template construction in backend APIs often bypasses frontend framework protections (like React's escaping).
**Prevention:** Always use a sanitization utility (like `escapeHtml`) before inserting user input into raw HTML strings, especially for emails.
