# Manon Reusens - Personal Academic Website

A modern, secure React website built with TypeScript, Ant Design, and best practices for frontend software design.

## Features

- ✅ **Modern React Architecture**: TypeScript, React Router, hooks, and functional components
- ✅ **Ant Design UI**: Professional, accessible component library
- ✅ **Dark/Light Theme**: Persistent theme switching with localStorage
- ✅ **Fully Responsive**: Mobile-first design with responsive grid layouts
- ✅ **Security First**: XSS protection, sanitized HTML, secure headers, and CSP
- ✅ **Performance Optimized**: Code splitting, lazy loading, and tree shaking
- ✅ **Type Safe**: Full TypeScript implementation
- ✅ **SEO Friendly**: Proper meta tags and semantic HTML
- ✅ **Accessible**: ARIA labels and keyboard navigation

## Project Structure

```
react-website/
├── src/
│   ├── components/        # Reusable components (Navigation, Footer, Layout)
│   ├── pages/            # Page components (Home, Publications, Talks, etc.)
│   ├── data/             # Data files (config, publications, talks, teaching)
│   ├── types/            # TypeScript type definitions
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions (helpers, theme)
│   ├── App.tsx           # Main app component with routing
│   └── main.tsx          # Entry point
├── public/               # Static assets (images, logos)
└── index.html            # HTML template
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy images from the original website to the `public/` folder:
   - MR-logo.png
   - profile.jpg
   - images/ folder

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Security Features

1. **XSS Protection**: All HTML content is sanitized using DOMPurify
2. **Secure Headers**: CSP, X-Frame-Options, X-Content-Type-Options
3. **Safe Links**: All external links use `rel="noopener noreferrer"`
4. **No Console Logs**: Removed in production builds
5. **Input Validation**: Type-safe data structures

## Data Management

All content is managed through TypeScript data files in `src/data/`:

- `config.ts` - Personal information and website configuration
- `publications.ts` - Publications database and API
- `talks.ts` - Talks and presentations
- `teaching.ts` - Teaching activities
- `news.ts` - Auto-generated news from publications and talks

To update content, simply edit these files. The type system will ensure data integrity.

## Deployment

### Netlify

1. Push to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Security headers are configured in `netlify.toml`

### Vercel

1. Push to GitHub
2. Import project in Vercel
3. Framework preset: Vite
4. Build command: `npm run build`
5. Output directory: `dist`

### Static Hosting

Upload the contents of the `dist/` folder to any static hosting provider.

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Ant Design**: Professional UI components
- **React Router**: Client-side routing
- **DOMPurify**: XSS protection
- **Day.js**: Date formatting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Manon Reusens. All rights reserved.

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
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

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
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
