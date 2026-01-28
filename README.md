# Lintu Dev Studio

Specialized development studio shipping high-performance web applications and mobile solutions.

🌐 **Website**: [lintu.dev](https://lintu.dev)  
📧 **Contact**: hello@lintu.dev  
𝕏 **Twitter**: [@lintudev](https://x.com/lintudev)

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Deployment**: Vercel

## Features

- ⚡ Lightning-fast performance
- 🎨 Modern, clean design system
- 📱 Fully responsive
- ♿ Accessible components
- 🔒 Form spam protection (honeypot + rate limiting)
- 📧 Working contact form (Resend integration)
- 🔍 SEO optimized with meta tags and JSON-LD

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Environment Variables

For the contact form to work, set up:

```env
RESEND_API_KEY=your_resend_api_key
```

See [.env.example](.env.example) for details.

## Project Structure

```
src/
├── components/     # React components
├── pages/         # Page components
├── hooks/         # Custom hooks
└── assets/        # Static assets
api/
└── contact.ts     # Vercel serverless function
```

## Deployment

This project is configured for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Add `RESEND_API_KEY` to environment variables
3. Deploy!

The `vercel.json` file handles client-side routing automatically.

## License

© 2026 Lintu Dev Studio. All rights reserved.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
