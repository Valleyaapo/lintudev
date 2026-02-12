## 2026-02-12 - HTML Injection in Contact Form
**Vulnerability:** User input from the contact form was directly interpolated into the HTML email body without sanitization, allowing potential HTML injection attacks.
**Learning:** API routes generating HTML content (like emails) must treat all user input as untrusted and sanitize it, even if not rendering to a browser directly.
**Prevention:** Use the `escapeHtml` utility to sanitize all user-provided strings before interpolating them into HTML templates.
