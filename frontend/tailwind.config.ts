import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#618223', // Primary color
        secondary: '#015f74', // Secondary color
        accent: '#86efac', // Accent color
        neutral: '#fb923c', // Neutral color
        'base-100': '#fcf6e5', // Base color
        info: '#5eead4', // Information color
        success: '#22c55e', // Success color
        warning: '#fff129', // Warning color
        error: '#e11d48', // Error color
      },
    },
  },
  plugins: [],
};

export default config;
