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
        background: "#FFFFFE",
        stroke: { light: "#A9A7B3", base: "#272343" },
        paragraph: "#2D334A",
        primary: "#FFD803",
        secondary: "#E3F6F5",
        tertiary: "#BAE8E8",
        error: "#FF6464",
        gray: {
          light: "#FAFAFA",
          base: "#D9D9D9",
          dark: "#595959",
        },
      },
    },
  },
  plugins: [],
};
export default config;
