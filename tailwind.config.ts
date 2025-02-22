/** @type {import('tailwindcss').Config} */
import containerQueries from '@tailwindcss/container-queries'

module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",  // For App Router
      "./pages/**/*.{js,ts,jsx,tsx}", // For Pages Router
      "./components/**/*.{js,ts,jsx,tsx}",
      "./features/**/components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      container:{
        center:true,
        padding:'2rem',
        screens:{
          sm:'1500px'
        }
      },
      extend: {},
    },
    plugins: [containerQueries],
  };
  