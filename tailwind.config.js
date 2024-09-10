/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'denim': "url('./denim.jpg')",
        'leather': "url('./leather.jpg')",
        'fabric': "url('./fabric.jpg')",
      },
      fontFamily: {
        'inter' : ['inter', 'serif'],
      },
    },
  },
  plugins: [],
}

