## 2026-02-20 - HTML Injection in Email Templates
**Vulnerability:** Unsanitized user input (`name`, `email`, `message`) was directly interpolated into the HTML body of email notifications sent via Resend API, allowing for potential XSS attacks against email recipients.
**Learning:** Interpolating user input directly into HTML strings is dangerous, even in server-side contexts like email generation. Email clients render HTML, and while they have some protections, it's a security risk.
**Prevention:** Always sanitize user input before embedding it into HTML. Use a dedicated HTML escaping utility or a templating engine that handles auto-escaping.
