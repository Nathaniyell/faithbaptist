import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      colors: {
        primary: "#800000",
        primary2: "#982B1C",
        secondary: "#DAD4B5",
        secondary2: "#F2E8C6",
       
      },
      backgroundImage: {
        'schedulePattern': "url('/public/images/pattern_shape.svg')"
      },
      fontFamily: {
        title: "Akaya Kanadaka, system-ui"
      }
    },
  },
  plugins: [require('tailwindcss'),
  require('autoprefixer'),],
}
export default config
