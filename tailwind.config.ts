import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        'xs':'480px',
        'sm': '640px',
        'md':'768px',
        'lg':'1024',
        'xl':'1280px',
        '2xl':'1536px',
        'custom': '1400px',
      },
     
    },
  },
  plugins: [],
} satisfies Config;