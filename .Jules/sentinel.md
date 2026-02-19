## 2026-02-19 - Stored XSS in Contact Form
**Vulnerability:** Contact form data (name, email, message) was interpolated directly into the HTML email body without sanitization. This allowed for HTML injection and potential XSS if viewed in vulnerable email clients.
**Learning:** Even internal or admin-facing features (like email notifications) must sanitize user input before rendering it as HTML. Trust no input, even if it's just going to an admin.
**Prevention:** Always use a sanitization utility (like `escapeHtml`) when inserting user-controlled strings into HTML contexts. Alternatively, use a templating engine that auto-escapes by default.
