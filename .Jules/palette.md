## 2026-02-14 - [Contact Form Accessibility]
**Learning:** Interactive forms in this codebase (React components inside Astro) lack proper `htmlFor`/`id` association and feedback states (loading/error) by default, requiring manual implementation.
**Action:** Always verify form accessibility using `get_by_label` in verification scripts and implement loading spinners for async actions.
