## 2025-02-14 - Stored XSS in Email Notifications

**Vulnerability:** User input from the contact form (`name`, `email`, `message`) was directly interpolated into the HTML body of email notifications without sanitization. This allowed attackers to inject malicious HTML/JavaScript (Stored XSS) that would be rendered in the recipient's email client.

**Learning:** When generating HTML content on the server (even for emails), all user input must be treated as untrusted. Standard string interpolation (`${variable}`) does not provide any automatic escaping.

**Prevention:** Always sanitize user input before embedding it in HTML. If a dedicated templating engine or sanitization library isn't available, implement a robust HTML escaping function to convert special characters (`<`, `>`, `&`, `"`, `'`) into their HTML entity equivalents.
