/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "mac-sidebar-gray": "rgba(34, 36, 40)",
        "mac-sidebar-gray-select": "rgba(61, 63, 64)",
        "mac-card": "rgba(51, 53, 55)"
      }
    },
  },
  plugins: [],
}
