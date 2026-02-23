## 2025-02-18 - [In-Memory Rate Limiting in Serverless Functions]
**Vulnerability:** The contact form API uses an in-memory object (`requestCounts`) for rate limiting.
**Learning:** In serverless environments (like Vercel functions used here), in-memory state does not persist across invocations or scaling instances, making this rate limiting ineffective against distributed attacks or even simple sequential requests if new instances are spun up.
**Prevention:** Use an external store (e.g., Redis, database) or a dedicated rate-limiting service (e.g., Vercel KV, Upstash) for stateful rate limiting in serverless functions.

## 2025-02-18 - [Unsanitized User Input in Email Body]
**Vulnerability:** User input (`name`, `email`, `message`) was directly interpolated into the HTML email body in `src/pages/api/contact.ts`.
**Learning:** Even though modern email clients have some protections, sending unsanitized HTML allows for potential HTML injection and phishing vectors. Server-side sanitization is critical when constructing HTML emails from user input.
**Prevention:** Always sanitize user input before interpolating it into HTML contexts. Added `escapeHtml` utility for this purpose.
