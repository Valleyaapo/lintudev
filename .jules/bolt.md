## 2024-05-15 - [Optimize Regular Expressions in API routes]
**Learning:** Moving Regular Expression declarations from inside request handlers to module scope in API routes improves performance by avoiding repeated `RegExp` object allocation and garbage collection overhead. Make sure not to use the global (`g`) flag to avoid shared state across requests.
**Action:** Always declare Regular Expressions in the module scope in API routes when they are static and don't need to be recreated dynamically.
