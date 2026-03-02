
## $(date +%Y-%m-%d) - Prevent HTML Injection in Email Payloads
**Vulnerability:** The `/api/contact.ts` endpoint constructed HTML strings for the email body using unsanitized user inputs (`name`, `email`, `message`), leading to an HTML injection / XSS vulnerability when recipients viewed the email. Also, the endpoint leaked internal error details and stack traces.
**Learning:** Using template literals to inject user input directly into HTML fields is a common vector for XSS, even in server-to-server API calls like Resend. The error messages leaked implementation details which could be used by attackers.
**Prevention:** Always sanitize user inputs using a utility like `escapeHtml` before embedding them into HTML strings. Ensure specific fields that require raw formatting (like `subject` or `reply_to`) are intentionally left raw. Ensure API routes fail securely by returning generic error messages to the client.
