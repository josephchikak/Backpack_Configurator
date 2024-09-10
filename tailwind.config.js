/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'denim': "url('./denim.webp')",
        'leather': "url('./leather.webp')",
        'fabric': "url('./fabric.webp')",
      },
      fontFamily: {
        'inter' : ['inter', 'serif'],
      },
    },
  },
  plugins: [],
}

