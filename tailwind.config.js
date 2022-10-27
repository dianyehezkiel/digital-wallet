/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#2563eb',
          'primary-content': '#f5f5f5',
          'secondary': '#6d28d9',
          'secondary-content': '#f5f5f5',
          'accent': '#2563eb',
          'accent-content': '#f5f5f5',
          'neutral': '#44403c',
          'neutral-content': '#f5f5f5',
          'base-100': '#1f2937',
          'base-content': '#f5f5f5',
          'info': '#bfdbfe',
          'success': '#bbf7d0',
          'warning': '#fef9c3',
          'error': '#fecdd3',
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('daisyui'),
  ],
};
