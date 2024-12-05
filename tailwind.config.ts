import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
  daisyui:{
    themes:["forest", "dark", "retro"]
  }
} satisfies Config

