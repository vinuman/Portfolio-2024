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
        primary: {
          100: "var(--color-primary-dark)",
          200: "var(--color-primary-green)",
        },
        secondary: {
          100: "var(--color-secondary-dark)",
        },
        grey: {
          100: "var(--color-grey-light)",
        },
        neutral: {
          0: "var(--color-white)",
        },
      },
      fontSize: {
        "heading-xl": ["88px", { lineHeight: "88px", letterSpacing: "-2.5px" }],
        "body-l": ["18px", { lineHeight: "28px" }],
        "heading-l": ["48px", { lineHeight: "56px", letterSpacing: "-1.5px" }],
        "heading-m": ["24px", { lineHeight: "32px" }],
      },
    },
  },
  plugins: [],
};
export default config;
