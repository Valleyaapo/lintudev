
## 2024-03-05 - Move regex to module scope in API routes
**Learning:** Recompiling a regular expression (like `emailRegex`) on every request in API routes introduces unnecessary overhead. Moving it to module scope avoids redundant compilation.
**Action:** Always declare static regular expressions at the module scope level rather than inside request handlers to improve the performance of route handlers.
