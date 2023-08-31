/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      },
      colors: {
        'text': '#ffffff',
        'background': '#1c1c1c',
        'primary': '#0046c4',
        'secondary': '#003e66',
        'accent': '#858585',
      },
    },
  },
  plugins: [],
}
