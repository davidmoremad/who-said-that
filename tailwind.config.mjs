/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Noto Serif', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        parchment: '#F4E9D8',
        parchmentdark: '#e0d5c3',
        ink: '#2e1e17',
        inklight: '#4d4030',
      }
    },
  },
  plugins: [],
}