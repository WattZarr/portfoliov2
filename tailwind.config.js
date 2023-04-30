/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'dark-blue' : '#0a192f',
        'light-green' : '#64ffda',
        'dark-blue-x2' : '#112240'
      },
      fontFamily: {
        'inter' : ['Inter', 'sans-serif'],
        'fira' : ['Fira Code', 'monospace']
      },
    },
  },
  plugins: [],
}