/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        snow: '#fcfbf8',
        mist: '#f3f1ec',
        line: '#e6e3db',
        char: '#1b1825',
        muted: '#5d5a6b',
        faint: '#9a97a8',
        accent: {
          DEFAULT: '#7c3aed',
          dim: '#6527d1',
          glow: 'rgba(124, 58, 237, 0.14)',
        },
        pop: {
          pink: '#ec4899',
          orange: '#fb923c',
          cyan: '#22d3ee',
          lime: '#a3e635',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(4%, -6%) scale(1.08)' },
          '66%': { transform: 'translate(-4%, 4%) scale(0.94)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 6s ease infinite',
        blob: 'blob 14s ease-in-out infinite',
        wiggle: 'wiggle 0.4s ease-in-out',
      },
    },
  },
  plugins: [],
}
