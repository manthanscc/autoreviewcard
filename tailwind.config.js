/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        grow: { from: { width: '0%' }, to: { width: '100%' } }
      },
      animation: {
        grow: 'grow 1.2s ease'
      }
    }
  },
  plugins: [],
};
