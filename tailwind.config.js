/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          blue: '#1e3a8a',
          gray: '#374151',
          dark: '#111827',
          light: '#f8fafc'
        }
      },
      fontFamily: {
        'industrial': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
