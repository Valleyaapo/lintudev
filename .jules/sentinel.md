## 2026-02-10 - Unsanitized HTML Injection in Email
**Vulnerability:** User input from the contact form was directly interpolated into the HTML body of an email. This could allow attackers to inject malicious HTML or scripts (stored XSS if rendered in a vulnerable client) or tracking pixels.
**Learning:** Even internal-facing outputs like emails must treat user input as untrusted. Sanitization should be applied at the boundary where data leaves the system (or before it's used in a sensitive context).
**Prevention:** Always escape HTML special characters when constructing HTML strings from user input. Use established libraries or helper functions like `escapeHtml` for this purpose. Also, enforce strict length limits to prevent DoS.
