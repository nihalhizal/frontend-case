import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: "#78350F",
        yellow: "#FFFBEB",
        blue: "#0F172A",
        darkYellow: "#FEF3C7",
        white: "#FFFFFF",
        lightBlue: "#E2E8F0"
      },
      boxShadow: {
        'custom': '0px 0px 15px 0px #FFFFFF12, 0px 25px 50px -12px #FFFFFF40',
        'custom-2': '0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A',
        'custom-3': '0px 0px 6px 0px #00000012, 0px 10px 15px -3px #0000001A',
        'custom-4': '0px 0px 4px 0px #00000012, 0px 4px 6px -1px #0000001A',
        'custom-5': '0px 0px 15px 0px #00000012, 0px 25px 50px -12px #00000040',
      },
    },
    screens: {
      xs: { max: "639px" },
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px" },
    },
  },
  plugins: [],
};
export default config;
