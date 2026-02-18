## 2025-02-14 - API Route HTML Injection
**Vulnerability:** Contact form API endpoint interpolated user input directly into HTML email body, allowing potential XSS if the email client renders the HTML.
**Learning:** Astro API routes do not automatically sanitize input. Even backend APIs sending emails must sanitize user input to prevent injection attacks in the recipient's context.
**Prevention:** Use a dedicated sanitization utility (like `escapeHtml`) for all user input before including it in HTML templates.
