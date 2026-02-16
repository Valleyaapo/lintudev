## 2024-05-24 - HTML Injection in API Routes
**Vulnerability:** User input was directly interpolated into HTML strings in API routes without sanitization, leading to XSS/Injection risks in email bodies.
**Learning:** Astro API routes (`src/pages/api/*.ts`) handle raw requests and do not provide automatic output encoding like JSX/Astro templates. Manual sanitization is required when constructing HTML programmatically.
**Prevention:** Use `src/utils/sanitize.ts`'s `escapeHtml` function for any user input used in HTML generation within API routes.
