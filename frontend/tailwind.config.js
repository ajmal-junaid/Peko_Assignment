/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#00baf2',
        'dark-blue': '#0f4a8a',
      },
    },
  },
  plugins: [
    flowbitePlugin
  ],
}

