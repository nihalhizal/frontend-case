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
        blue: "#0F172A"
      },
      boxShadow: {
        'custom-light': '0px 0px 15px 0px rgba(0, 0, 0, 0.07)',
        'custom-dark': '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
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
