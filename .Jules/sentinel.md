## 2025-02-19 - [HTML Injection in Email Body]
**Vulnerability:** User input from the contact form was directly interpolated into the HTML email body without sanitization, allowing for HTML injection and potential XSS if the email client renders scripts.
**Learning:** Even when using external services like Resend, input validation and sanitization are the responsibility of the application. Trust boundaries exist between the app and the service.
**Prevention:** Always sanitize user input before rendering it into any HTML context, including emails. Use a dedicated sanitization library or function.
