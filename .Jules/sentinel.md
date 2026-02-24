## 2026-02-24 - [HTML Injection in Email Templates]
**Vulnerability:** User input (name, message) was directly interpolated into HTML email body strings without sanitization, allowing HTML injection (Stored XSS in email context).
**Learning:** Template literals used in backend code to construct HTML (e.g., for emails) are often overlooked as injection vectors. Manual string concatenation or interpolation is dangerous.
**Prevention:** Always sanitize user input using a robust HTML escaping utility before inserting it into email templates, or use a dedicated templating engine that auto-escapes.
