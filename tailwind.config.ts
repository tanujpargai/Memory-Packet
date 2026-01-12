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
        background: "#F8F9FA",
        foreground: "#111827",
        patient: {
          bg: "#FFFFFF",
          text: "#000000",
          highlight: "#FFD700", // High visibility yellow
          alert: "#EF4444",    // Red for important things
          action: "#2563EB",   // Blue for primary actions
        },
        caregiver: {
          bg: "#F0F9FF",       // Calm blue tint
          primary: "#0284C7",  // Trusted blue
          success: "#10B981",  // Safe status
          warning: "#F59E0B",  // Attention needed
          danger: "#EF4444",   // Emergency
        }
      },
      fontSize: {
        base: "1.125rem", // 18px base
        lg: "1.25rem",    // 20px
        xl: "1.5rem",     // 24px
        "2xl": "2rem",    // 32px
        "3xl": "2.5rem",  // 40px
        "4xl": "3rem",    // 48px
      },
      boxShadow: {
        'brutalist': '4px 4px 0px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
};
export default config;
