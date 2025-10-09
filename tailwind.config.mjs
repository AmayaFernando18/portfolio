import { Outfit } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // optional for dark mode
  theme: {
    extend: {
        colors: {
            lightHover: '#fcf4ff',
            darkHover: '#2a004a',
            darkTheme: '#11001F',

        },
        fontFamily: {
            Outfit: ["Outfit", "sans-serif"],
            Ovo: ["ovo", "serif"]
        },
        boxShadow: {
            'black' : '4px 4px 0 #000',
            'white': '4px 4px 0 #fff',
        },
        gridTemplateColumns: {
            'auto': 'repeat(auto-fit, minmax(200px,1fr))'
        }
    },
  },
  darkMode: 'selector',
  plugins: [],
};
