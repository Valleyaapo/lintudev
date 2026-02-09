## 2024-05-22 - HTML Injection in Email Body
**Vulnerability:** User input from the contact form was directly interpolated into the email HTML body without sanitization, allowing HTML injection.
**Learning:** Always sanitize user input before using it in HTML contexts, even for internal emails.
**Prevention:** Use a dedicated sanitization function like `escapeHtml` for all user-generated content.
