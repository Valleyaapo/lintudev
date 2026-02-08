## 2026-02-14 - HTML Injection in Email Body
**Vulnerability:** Contact form data (name, email, message) was directly interpolated into HTML email templates, allowing XSS if rendered in a vulnerable email client or admin dashboard.
**Learning:** Email bodies are HTML contexts that require strict sanitization, even if the primary recipient is an email client. Always assume input is malicious.
**Prevention:** Use a dedicated sanitization function like `escapeHtml` for all user input before embedding it in HTML strings.
