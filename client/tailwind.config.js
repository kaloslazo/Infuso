import catppuccinConfig from '@catppuccin/tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [
    catppuccinConfig({
      prefix: 'ctp',
      defaultFlavour: 'mocha',
    }),
  ],
};