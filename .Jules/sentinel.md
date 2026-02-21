## 2024-02-27 - Email HTML Injection
**Vulnerability:** User input (`name`, `email`, `message`) was directly interpolated into the HTML body of emails sent via the contact form.
**Learning:** Email clients render HTML content, making this a vector for HTML injection or XSS if the recipient views the email in a vulnerable client. It also allows attackers to spoof content or structure within the email.
**Prevention:** Always sanitize user input using an HTML escaping function before embedding it into HTML email templates.
