## 2023-10-27 - Contact Form Input Validation and Error Handling
**Vulnerability:** The contact form API was vulnerable to HTML injection (XSS in emails) due to lack of input sanitization. It also exposed internal error details and lacked input length limits.
**Learning:** Always sanitize user inputs before interpolation in HTML emails, enforce length limits to prevent abuse, and avoid returning detailed error objects in API responses to fail securely.
**Prevention:** Implement an `escapeHtml` utility, enforce character limits on inputs, and log errors internally while returning generic error messages to the client.
