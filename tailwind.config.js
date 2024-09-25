/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#15803d',
        secondary: '#4da528',
        accent: '#fbad17',
        muted: '#6c757d',
      },
    },
  },
  plugins: [],
}

