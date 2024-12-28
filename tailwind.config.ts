import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Grenze-Gotisch": ["Grenze Gotisch", "serif"],
        Figtree: ["Figtree", "serif"],
      },
      colors: {
        black: "#000000",
        "olive-green": "#606c38",
        "sage-green": "#ccd5ae",
        "light-gray": "#dddddd", 
        "pale-yellow": "#e9edc9",
        "off-white": "#f8f8f8", 
        white: "#ffffff",
      },
    },
  },
  plugins: [],
} satisfies Config;
