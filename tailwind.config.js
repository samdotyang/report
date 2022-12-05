/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'mac-sidebar-light': 'rgba(206, 207, 210)',
        'mac-sidebar-light-select': 'rgba(182, 183, 185)',
        'mac-sidebar-gray': 'rgba(34, 36, 40)',
        'mac-sidebar-gray-select': 'rgba(61, 63, 64)',
        'mac-dark-card': 'rgba(51, 53, 55)',
        'mac-light-card': 'rgba(246, 247, 248)',
        'mac-dark-background': 'rgba(29, 31, 33)',
        'mac-light-background': 'rgba(255, 255, 255)',
        "mac-dark": 'rgba(29, 32, 37)',
        "mac-light": 'rgba(255, 255, 255)',
      },
    },
  },
  plugins: [],
};
