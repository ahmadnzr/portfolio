/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_commons/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        serif: ['var(--font-prata)'],
      },
      colors: {
        'primary-1': '#4096FF',
        'primary-2': '#91CAFF',
        'primary-3': '#BAE0FF',
        'primary-4': '#F0F5FF',
        'neutral-1': '#434343',
        'neutral-2': '#595959',
        'neutral-3': '#8C8C8C',
        'neutral-4': '#D9D9D9',
        'neutral-5': '#F5F5F5',
      },
    },
  },
  plugins: [],
};
