## 2025-10-27 - Loading State UX
**Learning:** Adding a visual loading spinner along with `aria-busy` significantly improves perceived performance and accessibility during async form submissions. Users (and screen readers) get immediate feedback that their action is being processed.
**Action:** Always couple disabled submit buttons with a loading indicator and `aria-busy` attribute for async actions.
