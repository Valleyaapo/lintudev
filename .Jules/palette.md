## 2026-02-16 - Contact Form Accessibility & Interaction
**Learning:** Adding explicit associations between form labels and inputs (`htmlFor` + `id`) immediately improves the experience for both screen reader users (context) and mouse users (larger click area).
**Action:** Always verify label associations as a fundamental accessibility requirement for all forms.

## 2026-02-16 - Async Loading States
**Learning:** A simple text change (e.g., "Sending...") combined with a visual spinner significantly reduces user uncertainty during asynchronous operations, providing immediate feedback that the action is being processed.
**Action:** Implement visual loading indicators (spinner + text change) and `aria-busy` for all primary async actions like form submissions.
