# 🚀 Portfolio Redesign - Quick Start Guide

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
npm run build
npm run preview
```
- Opens automatically at `http://localhost:3000`
- Hot module replacement enabled
- Watch mode for file changes

### 3. Build for Production
```bash

```
- Compiles TypeScript
- Bundles with Vite
- Optimizes for performance
- Output: `dist/` directory

### 4. Preview Production Build
```bash

```
- Serves the built application locally
- Useful for testing production build before deployment

---

## Project Architecture

### Entry Point
```
index.html
  ↓
src/main.tsx (React root)
  ↓
src/App.tsx (Root component with ScrollSmoother)
```

### Section Flow
```
Hero (3D Canvas + Entrance Animation)
  ↓
About (Bio + Stats)
  ↓
Skills (Tech Stack with Marquee)
  ↓
Projects (Showcase Grid)
  ↓
Experience (Timeline)
  ↓
Services (Cards)
  ↓
Contact (Form + Socials)
  ↓
Footer (Copyright + Links)
```

### Key Technologies

| Package | Version | Purpose |
|---------|---------|---------|
| React | 18.3.1 | UI framework |
| Three.js | r128 | 3D graphics |
| @react-three/fiber | 8.16.8 | React Three.js renderer |
| @react-three/drei | 9.108.4 | Helpful utilities |
| @react-three/postprocessing | 2.16.4 | Post-FX effects |
| GSAP | 3.12.2 | Animations & timeline |
| Vite | 5.0.8 | Build tool |
| TypeScript | 5.3.3 | Type safety |

---

## Design System

### Color Palette
- **Primary**: Pink (`#ff9ed2`, `#ffb7dc`, `#ffc8e5`)
- **Glow**: Pink with transparency (`rgba(255, 158, 210, 0.x)`)
- **Background**: Dark (`#0b0b0f`, `#111111`)
- **Text**: White (`#ffffff`, `rgba(255, 255, 255, 0.6)`)

### Typography
- **Headings**: Clash Display (700 weight)
- **Body**: Satoshi (400-500 weight)
- **Loaded via**: Fontshare CDN (in `index.html`)

### Spacing Scale
- xs: 0.5rem
- sm: 1rem
- md: 2rem
- lg: 4rem
- xl: 8rem
- 2xl: 12rem
- 3xl: 18rem

### Animation System
- **Entrance**: Staggered character/word reveals
- **Scroll**: ScrollTrigger-based reveals (82-85% from top)
- **Hover**: Magnetic effects, scale transforms
- **Parallax**: Data-speed attribute on elements
- **Responsive**: Disabled on `prefers-reduced-motion`

---

## Component Organization

### Sections (`src/components/sections/`)
- Self-contained section components
- Include own CSS files
- Use scroll animations
- Responsive layouts

### UI Components (`src/components/ui/`)
- Reusable button, card, cursor
- Magnetic effects & hover states
- Accessibility features

### Layout (`src/components/layout/`)
- Navbar (sticky with blur on scroll)
- Footer (social links & copyright)

### Three.js (`src/components/three/`)
- Canvas wrapper
- 3D objects (6 floating geometries)
- Particle field (3000+ particles)
- Post-processing effects

---

## Performance Optimization

✅ **Already Implemented**
- Vite's fast bundling & code splitting
- Three.js deferred rendering (`frameloop="demand"`)
- GPU acceleration on animations
- Device capability detection (disables PostFX on low-end)
- Reduced particle count on mobile
- CSS GPU transforms (`will-change`, `transform: translateZ`)
- Lazy loading via Suspense

### Tips for Further Optimization
1. **Image Compression**: Use WebP with fallbacks
2. **Code Splitting**: Lazy load sections if needed
3. **Analytics**: Add @vercel/analytics (already in package.json)
4. **Caching**: Configure `.htaccess` or server headers

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Requires WebGL support for 3D scenes
- Graceful fallback if WebGL unavailable

---

## File Structure Reference

```
portfolio/
├── src/
│   ├── components/
│   │   ├── sections/     # Page sections (7 components)
│   │   ├── layout/       # Header & footer
│   │   ├── ui/           # Reusable UI components
│   │   └── three/        # 3D scene components
│   ├── animations/       # GSAP timelines & effects
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Helper functions
│   ├── styles/           # Global CSS
│   ├── data/             # Portfolio data
│   ├── types/            # TypeScript interfaces
│   ├── App.tsx           # Root component
│   ├── App.css           # App-level styles
│   └── main.tsx          # Entry point
├── index.html            # HTML template
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite configuration
└── README.md            # This file
```

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
- Auto-detects Vite project
- Builds & deploys automatically
- Free tier available

### Netlify
1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
```bash
npm install gh-pages
# Update package.json with "homepage": "https://username.github.io/portfolio"
npm run build
npx gh-pages -d dist
```

---

## Troubleshooting

### Build fails with CSS import errors
- Ensure Vite is configured correctly
- CSS must be imported in `.tsx` files directly
- Check `vite.config.ts` has correct paths

### Three.js scene not rendering
- Check browser console for WebGL errors
- Verify `@react-three/fiber` is installed
- Test on a device that supports WebGL

### Animations not working
- Verify GSAP plugins are registered
- Check `ScrollTrigger.refresh()` is called after content loads
- Ensure `prefers-reduced-motion` is handled

### Performance issues
- Check device capability with `useWebGL()`
- Disable PostFX on low-end devices
- Reduce particle count on mobile
- Use Chrome DevTools Performance tab

---

## Contact & Credits

**Developer**: Trần Gia Bảo
- GitHub: https://github.com
- LinkedIn: https://linkedin.com
- Email: bao@example.com

**Tech Stack**:
- Framework: React + Vite
- 3D: Three.js
- Animations: GSAP
- Styling: CSS with design tokens

---

## License

This portfolio template is open source and available for personal and commercial use.

---

**Last Updated**: January 2024
**Status**: Production Ready ✅
