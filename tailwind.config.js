
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'popup': '#121923',
        'main-bg':'#3F7DF8',
        

      },
      backgroundImage: {
        'aboutBG': "url('/images/machine.png')",
        
      }
    },


  },
  variants: {
    extend: {},
  },
  plugins: [],
}
