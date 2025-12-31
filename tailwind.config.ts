import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // High contrast palette for dementia accessibility
        background: "#ffffff",
        foreground: "#000000",
        brand: {
          red: "#FF0000", // The Record Button
          gray: "#F3F4F6", // Card Backgrounds
        },
      },
      fontSize: {
        // Force larger text by default
        base: "1.125rem", // 18px
        lg: "1.25rem",    // 20px
        xl: "1.5rem",     // 24px
        "2xl": "2rem",    // 32px
      },
    },
  },
  plugins: [],
};
export default config;
