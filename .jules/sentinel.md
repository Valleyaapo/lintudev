## 2025-02-14 - API Route HTML Injection
**Vulnerability:** HTML injection in email body construction via template literals in API routes.
**Learning:** Astro API routes do not sanitize input by default (unlike Astro components), requiring manual sanitization for dynamic HTML generation (e.g. emails).
**Prevention:** Use `escapeHtml` utility for any user input interpolated into HTML strings in API routes.
