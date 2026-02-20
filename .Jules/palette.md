## 2024-05-23 - Initial Entry

## 2024-05-23 - Contact Form Focus Management
**Learning:** When replacing form content with a success/error message, screen readers may lose context unless focus is explicitly moved to the new content. Using `tabIndex={-1}` and a React `ref` to focus the container ensures users are immediately aware of the status change.
**Action:** Always implement focus management for dynamic content replacements in single-page applications.
