## 2024-05-22 - HTML Injection in Email Body
**Vulnerability:** User input was directly interpolated into the HTML body of emails sent via Resend, allowing potential HTML injection.
**Learning:** Even in email contexts, unsanitized HTML interpolation allows attackers to alter the email content, potentially leading to phishing or confusion attacks against the email recipient.
**Prevention:** Always use an HTML escaping utility (like `escapeHtml`) to sanitize any user-provided data before embedding it into HTML strings.
