/** @type {import('tailwindcss').Config} */

import { transform } from 'framer-motion';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '-1px 12px 22px -17px rgba(73, 198, 254, 1)',
        '4xl': '0px 0px 30px 2px rgba(73, 198, 254, 1)',
        '5xl': '0px 0px 15px 2px rgba(73, 198, 254, 1)',
      },
      keyframes: {
        wiggle: {
          '100%': { transform: 'translateY(250px) ' }
        },
        sand1: {
          '0%': { transform: 'translateX(0) rotate(180deg) '},
          '50%': { transform: 'translateX(400px)',
                       },
          
        },
        sand12: {
          '0%': { transform: 'translateX(0) rotate(180deg) ' },
          '50%': { transform: 'translateX(-400px)'
                     },
          
        },


        sand23: {
          '0%': { transform: 'translateX(0) rotate(180deg) '},
          '50%': { transform: 'translateX(260px)',
                       },
          
        },
        sand123: {
          '0%': { transform: 'translateX(0) rotate(180deg) ' },
          '50%': { transform: 'translateX(-260px)'
                     },
          
        },





//2 box





        sand2: {
          '0%': { transform: 'translateY(0px) rotate(180deg)' },
          '50%': { transform: 'translateY(400px)' },
          
        },
        sand21: {
          '0%': { transform: 'translateY(0px) rotate(-180deg)' },
          '50%': { transform: 'translateY(-400px)' },
          
        },

        sandsm2: {
          '0%': { transform: 'translateY(0px) rotate(180deg)' },
          '50%': { transform: 'translateY(260px)' },
          
        },
        sandsm21: {
          '0%': { transform: 'translateY(0px) rotate(-180deg)' },
          '50%': { transform: 'translateY(-260px)' },
          
        },





        //2 box
        sand3: {
          '0%' : { 
            transform: 'translateX(5px) translateY(5px) rotate(180deg)', 
          },
          '50%': { 
            transform: 'translateX(280px) translateY(280px)',
        },
        },
        sand31: {
          '0%' : { 
            transform: 'translateX(5px) translateY(5px) rotate(180deg)', 
          },
          '50%': { 
            transform: 'translateX(-280px) translateY(-280px)',
        },
        },


        sandsm3: {
          '0%' : { 
            transform: 'translateX(5px) translateY(5px) rotate(180deg)', 
          },
          '50%': { 
            transform: 'translateX(190px) translateY(190px)',
        },
        },
        sandsm31: {
          '0%' : { 
            transform: 'translateX(5px) translateY(5px) rotate(180deg)', 
          },
          '50%': { 
            transform: 'translateX(-190px) translateY(-190px)',
        },
        },

        // 2box
        
        sand4: {
          '0%' : { 
            transform: 'translateX(5px) translateY(5px) rotate(180deg)', 
          },
          '50%': { 
            transform: 'translateX(-280px) translateY(280px) ',
        },
        },
        sand41: {
          '0%' : { 
            transform: 'translateX(5px) translateY(5px) rotate(180deg)', 
            
          },
          '50%': { 
            transform: 'translateX(280px) translateY(-280px) ',
        },
        },


        sandsm4: {
          '0%' : { 
            transform: 'translateX(5px) translateY(5px) rotate(180deg)', 
          },
          '50%': { 
            transform: 'translateX(-190px) translateY(190px) ',
        },
        },
        sandsm41: {
          '0%' : { 
            transform: 'translateX(5px) translateY(5px) rotate(180deg)', 
            
          },
          '50%': { 
            transform: 'translateX(190px) translateY(-190px) ',
        },
        },
        



        reverseSpin :{
          '30%':{transform:'rotate(-90deg)'},
          '0%': { transform: 'y-10px' },
        },
        spin2 :{
          '0%':{transform:'rotate(180deg)',scale:"1"},
          '50%' : {transform:'rotate(-180deg)',scale:"0.5"}
          
        },
        spin :{
          '0%,100%':{transform:'rotate(3deg)'},
          '0%,100%':{transform:'rotate(-3deg)'},
          
        },
      },
      animation: {
        'spin-slow': 'spin2 10s linear infinite ' ,
        'wiggle-2': 'spin 11s linear infinite ' ,
        'reverse-spin': 'reverseSpin  11s linear infinite ',
        'wiggle': 'wiggle 1s ease-in-out infinite',

        'sand1': 'sand1 10s ease infinite',
        'sand12': 'sand12 10s ease infinite',

        'sand23': 'sand23 10s ease infinite',
        'sand123': 'sand123 10s ease infinite',
//2box
        'sand2': 'sand2 10s ease infinite',
        'sand21': 'sand21 10s ease infinite',

        'sandsm2': 'sandsm2 10s ease infinite',
        'sandsm21': 'sandsm21 10s ease infinite',
//2box
        'sand3': 'sand3 10s ease infinite',
        'sand31': 'sand31 10s ease infinite',

        'sandsm3': 'sandsm3 10s ease infinite',
        'sandsm31': 'sandsm31 10s ease infinite',

        // 2box
        'sand4': 'sand4 10s ease infinite',
        'sand41': 'sand41 10s ease infinite',

        'sandsm4': 'sandsm4 10s ease infinite',
        'sandsm41': 'sandsm41 10s ease infinite',
       
      }
    },
    fontFamily : {
      Poppins : ['Poppins'," sans-serif"],
      Lato: ['Lato', "sans-serif"],
      Mont: ['Montserrat', "sans-serif"],
      Roboto: ['Roboto', "sans-serif"],

    }
  },
  plugins: [],
}

