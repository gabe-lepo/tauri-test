/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./main.tsx",
    "./App.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {center: true,},
    borderWidth: {DEFAULT: '1px',},
    borderColor: {DEFAULT: 'black',},
  },
  plugins: [],
}
