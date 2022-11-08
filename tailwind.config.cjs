/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      colors: {
        'brand-gray-700': '#393939',
        'brand-gray-800': '#222222',
        'brand-gray-900': '#0D0D0D',
        'brand-purple-400': '#F500FF',
        
      },
      height: {
        '100': '6.25rem'
      },
      width: {
        '26': '26.87rem'
      },
      backgroundImage: {
        'bg-hover': 'radial-gradient(50% 31250% at 50% 50%, #F500FF 0%, rgba(0, 133, 133, 0) 100%)'
      }
    },
  },
  plugins: [],
}
