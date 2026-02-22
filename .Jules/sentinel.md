## 2026-02-22 - [HTML Injection in Email]
**Vulnerability:** User input (`name`, `email`, `message`) was directly interpolated into the HTML body of a contact form email in `src/pages/api/contact.ts`.
**Learning:** Even though the output is an email and not a web page, HTML injection is possible and can lead to phishing, spoofing, or malicious content rendering in email clients.
**Prevention:** Always escape user input before interpolating it into an HTML template, using a context-aware sanitizer like `escapeHtml`.
