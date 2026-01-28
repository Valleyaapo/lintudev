/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#1a1a2e',        // Dark navy (from image background)
        surface: '#16213e',   // Slightly lighter navy
        primary: '#40D0FF',   // Cyan - main brand color
        accent: '#49FFF5',    // Light mint cyan
        lime: '#88FE48',      // Lime green accent
        'text-main': '#f5f5f5',
        'text-muted': '#94a3b8',
        border: '#2d3748',    // Subtle border
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

