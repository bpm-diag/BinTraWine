import { type Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateAreas: {
        'layout': [
          'header',
          'main',
        ],
        'customer': [
          'sidebar main',
          'sidebar main',
          'footer main',
        ],
        'customer-mobile': [
          'sidebar',
          'main',
          'footer',
        ]
      },
      gridTemplateColumns: {
        'layout': '1fr',
        'customer': '20% 1fr',
        'customer-mobile': '1fr',
      },
      gridTemplateRows: {
        'layout': '4rem 1fr',
        'customer': 'auto 1fr',
        'customer-mobile': 'auto 1fr auto',
      },
      colors: {
        accent: "#F13B09",
        accent_light: "#F77636",
        primary: "#09100F",
        primary_light: "#0F3835",
        disabled: "#09100F33",
        tertiary: "#C6D6E3",
        surface: "#FAFAFA",
        surface_dark: "#EDEDED",
        black: "#B7CE95",
        black_dim: "#868686",
        purple: "#E0BBF6",
        aqua: "#7FF5EC",
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
      minHeight: {
        '60': '60px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
} satisfies Config;