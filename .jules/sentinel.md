# Sentinel's Journal

## 2025-02-14 - HTML Injection in Contact Form
**Vulnerability:** User input in the contact form was directly interpolated into the email HTML body, allowing potential HTML injection/XSS.
**Learning:** Even internal-facing emails should treat user input as untrusted to prevent injection attacks or phishing attempts against admins.
**Prevention:** Always escape HTML special characters in user input before rendering it in an HTML context, even for emails.
