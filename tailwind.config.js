/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 2s 1'
      },
      backgroundImage: {
        'hero-bakery': "url('./assets/first.jpeg')",
        'hero-make-dough': "url('./assets/second.jpg')",
        'hero-bake-bread': "url('./assets/third.jpg')",
        'hero-bread': "url('./assets/fourth.jpg')",
        'hero-croissant': "url('./assets/fifth.jpg')",
        'hero-sail': "url('./assets/sail.jpg')",
      },
    },
  },
  plugins: [],
}
