# Sentinel's Journal

## 2025-02-18 - HTML Injection in Contact Form
**Vulnerability:** User input (`name`, `email`, `message`) was directly interpolated into the HTML body of email notifications sent via the Contact API. This allowed for HTML Injection (Stored XSS targeting email clients).
**Learning:** Even internal-facing emails must sanitize user input, as they can be vectors for phishing or executing malicious scripts in vulnerable email clients. Trusting user input in any HTML context is dangerous.
**Prevention:** Always use an HTML escaping function (like `escapeHtml`) when inserting untrusted data into HTML strings, even for emails.
