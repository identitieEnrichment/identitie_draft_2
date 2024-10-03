/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        "loop-scroll":"loop-scroll 160s linear infinite",
        fade: "fade 1s ease 200ms",
        slidein :"slidein 1s ease 200ms",
        "loop-scroll-reverse":"loop-scroll-reverse 160s linear infinite",
      },
      keyframes:{
        "loop-scroll":{
          from:{transform : "translateX(0)"},
          to:{transform:"translateX(-100%)"}
        },
        "loop-scroll-reverse":{
          from:{transform : "translateX(-100%)"},
          to:{transform:"translateX(0)"}
        },
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-50px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fade: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        londrina : ['Londrina Shadow', 'sans-serif'],
        roboto :['Roboto' ,'sans-serif'],
        koulen:['Koulen', 'sans-serif'],
        impact:['Impact', 'sans-serif'],
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1500px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}

