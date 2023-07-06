import { type Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#09100F",
        primary_light: "#0F3835",
        disabled: "#09100F33",
        tertiary: "#C6D6E3",
        surface: "#EDEDED",
        surface_dark: "#C8C9C7",
        black: "#B7CE95",
        black_dim: "#868686",
        white: "#FFFFFF",
        error: "#007749",
      },
      fontFamily: {
        primary: ['var(--lexend-font)', ...fontFamily.sans]
      },
      fontSize: {
        36: `3rem`,
        24: `2rem`,
        20: '1,6669rem',
        16: '1,3331rem',
        12: '1rem',
        14: '1,1669rem',
      },
    },
  },
  plugins: [],
} satisfies Config;