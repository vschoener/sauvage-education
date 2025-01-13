import type {Config} from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6A7166', // Soft greenish-gray (dominant color)
        secondary: '#F2EAE2', // Complementary beige for sections
        accent: '#A17C64', // Brownish color for highlights
        highlight: '#EEF4E7', // Pale green for subtle backgrounds
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'], // Clean font for modern design
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
