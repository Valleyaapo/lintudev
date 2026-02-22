## 2026-02-22 - Verifying Loading States with Sync Playwright
**Learning:** In synchronous Playwright scripts, `time.sleep` inside a `page.route` handler blocks the main thread, freezing the test execution. This prevents the UI from updating or assertions from running while the request is delayed.
**Action:** To verify transient loading states (like "Sending..."), use `page.route` to intercept the request and simply do not fulfill it immediately (or loop/wait in the main test body), allowing the UI to render the pending state before checking assertions or taking screenshots.
