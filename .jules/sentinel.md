# Sentinel's Journal

## 2025-02-12 - Email Injection Vulnerabilities in Contact Forms
**Vulnerability:** User inputs (name, email, message) were directly interpolated into the HTML body of emails sent via Resend, allowing for XSS and HTML injection.
**Learning:** Even backend processes like email sending need output encoding. Email clients render HTML, and malicious scripts or phishing links can be injected if input is not sanitized. Also, error handling was leaking internal error details to the client.
**Prevention:** Always sanitize user input before using it in any HTML context, including emails. Use a dedicated sanitization library or function. Ensure error responses are generic and log details server-side only.
