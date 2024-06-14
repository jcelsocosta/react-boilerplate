/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/components/**/*stories.{ts,tsx}',
    './src/components/ui/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      xs: '400px',
      'xs-max': { max: '539px' },
      sm: '540px',
      md: '720px',
      lg: '960px',
      'lg-max': { max: '960px' },
      xl: '1140px',
      '2xl': '1320px'
    },
  },
  plugins: [],
}

