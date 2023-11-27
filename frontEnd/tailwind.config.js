/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
     'dm-sans' : ['DM Sans', 'sans-seri'],
     'satoshi' : ['Satoshi', 'sans-serif'],
     'source-serif-pro' : ['Source Serif Pro', 'serif'],
     'raleway' : ['Raleway', 'sans-serif'],
     'crimson' :['Crimson Text', 'serif']
    }
  },
  plugins: [],
}
