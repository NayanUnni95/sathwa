/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ragam_black: '#000000',
        ragam_orange: '#FF4500',
        ragam_yellow: '#FFD700',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        oswald: ['var(--font-oswald)'],
      },
    },
  },
  plugins: [],
}
