/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        base: '16px',
      },
      screens: {
        sm: '385px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        primary: {
          DEFAULT: '#6016FC',
        },
        cyan: '#16FCD2',
        cardDark: '#161629',
        red: '#FC165B',
        dark: '#0B0B22',
        highlight: '#221048',
        muted: 'rgba(255, 255, 255, 0.6)'
      },
    },
  },
  plugins: [],
};
