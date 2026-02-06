## 2026-02-06 - Stored XSS in Email Templates
**Vulnerability:** User input was directly interpolated into HTML email templates via template literals in `src/pages/api/contact.ts`.
**Learning:** The application sends HTML emails to the admin, treating user input as trusted HTML content.
**Prevention:** Always use an HTML escaping function (like the one added in `src/utils/sanitize.ts`) before embedding user input into HTML contexts, even for internal emails.
