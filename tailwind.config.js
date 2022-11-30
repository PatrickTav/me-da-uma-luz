/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poop: "'Poppins', sans-serif"
      },
      backgroundImage: {
        'banner': "url('src/assets/contas.jpg')",
        
      }
    },
  },
  plugins: [],
}
