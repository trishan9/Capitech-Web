import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  prefix: "",
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        primary: "var(--font-oswald)",
        poppins: "var(--font-poppins)",
        inter: "var(--font-inter)",
        roboto: "var(--font-roboto)",
        digital: "var(--font-digital)",
        oswald: "var(--font-oswald)",
      },
      backgroundImage: {
        "gradient-bg": "linear-gradient(180deg, #d37f35 0%, #e67e22 100%)",
        "light-gradient": "linear-gradient(180deg, #d37f35 0%, #e67e22 100%)",
      },
      colors: {
        primary: "#e67e22",
        secondary: "#d37f35",
        footer: "#954e17",
        footerTitle: "#ffde8a",
        background: {
          dark: "#111327",
          blue: "#382BD9",
        },

        text: {
          blue: "#382ADA",
          black: "#181818",
          gray: "#423D3D",
        },
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
  plugins: [require("tailwindcss-animate")],
};

export default config;
