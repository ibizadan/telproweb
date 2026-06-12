import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Ethnocentric', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      colors: {
        ink: { 50:'#f6f7fb', 100:'#eceef5', 200:'#d4d8e6', 400:'#7a8299', 500:'#525a73', 700:'#2a3045', 900:'#0a0d1a', 950:'#05070f' },
        brand: { 400:'#5b8aff', 500:'#3d6bf0', 600:'#1d4ed8', 700:'#1e40af' },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        shimmer: { '0%': { backgroundPosition: '-1000px 0' }, '100%': { backgroundPosition: '1000px 0' } },
        gradient: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
      },
      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [],
};
export default config;
