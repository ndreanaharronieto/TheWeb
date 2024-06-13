/** @type {import('tailwindcss').Config} */
export default {
  content: ['**/*.{html,js}', '*.{html,js}',"./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        NotoSans: ["Noto-Sans", 'sans-serif'],
        FreakGrotesk: ["Freak-Grotesk", 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
