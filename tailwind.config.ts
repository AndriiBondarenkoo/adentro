import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px',
    },

    extend: {
      colors: {
        main: '#1A1365',
        buttonColor: "#7774AA",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
        },
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1310px',
        }
      },

      fontSize: {
        sm: '14px',
        base: '16px'
      }
    },
  },
  plugins: [],
};
export default config;
