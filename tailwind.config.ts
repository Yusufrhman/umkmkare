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
        custom: {
          black: "#000000",
          "olive-green": "#606c38",
          "light-olive-green": "#6c7a3f",
          "sage-green": "#ccd5ae",
          "light-gray": "#dddddd",
          "pale-yellow": "#e9edc9",
          "off-white": "#f8f8f8",
          "lime-green": "#bad26c",
          white: "#ffffff",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
