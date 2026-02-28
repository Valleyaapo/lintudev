/**
 * Escapes HTML characters in a string to prevent XSS attacks when interpolating user input.
 *
 * @param {string} unsafe The input string that may contain raw HTML.
 * @returns {string} The HTML-escaped string.
 */
export function escapeHtml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
