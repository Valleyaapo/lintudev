
/**
 * Escapes unsafe characters in a string to prevent XSS.
 *
 * @param unsafe - The unsafe string to escape
 * @returns The escaped string
 */
export function escapeHtml(unsafe: string): string {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
