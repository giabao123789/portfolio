import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        blush: {
          50: '#FFF5F7',
          100: '#FFECEF',
          200: '#F6D7DD',
          300: '#E2A8B3',
          900: '#1A1618',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 22px rgba(226, 168, 179, 0.28)' },
          '50%': { boxShadow: '0 0 42px rgba(226, 168, 179, 0.46)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
