module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation:{
        blob:'blob 3s infinite'
      },
      keyframes:{
        blob:{
          '0%':{
            transform: "scale(1)"
          },
          '33%':{
            transform: "scale(1.2)"
          },
          '50%':{
            transform: "scale(1.4)"
          },
          '66%':{
            transform: "scale(1.2)"
          },
          '85%':{
            transform: "scale(1.1)"
          },
          '100%':{
            transform: "scale(1)"
          }
        }

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
