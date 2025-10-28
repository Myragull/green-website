/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      sm: "600px",
      md: "750px",
      lg: "1000px",
      xl: "1200px",   // ✅ changed breakpoint
      "2xl": "1320px",
    },

    container: {
      center: true,
      padding: "1rem",
      screens: {
      sm: "600px",
      md: "750px",
      lg: "1000px",
      xl: "1200px",   // ✅ changed breakpoint
      "2xl": "1320px",
      },
    },

    extend: {
      colors: {
        background: "var(--background-color)",
        default: "var(--default-color)",
        heading: "var(--heading-color)",
        accent: "var(--accent-color)",
        surface: "var(--surface-color)",
        contrast: "var(--contrast-color)",

        nav: {
          DEFAULT: "var(--nav-color)",
          hover: "var(--nav-hover-color)",
          mobile: "var(--nav-mobile-background-color)",
          dropdown: "var(--nav-dropdown-background-color)",
          "dropdown-text": "var(--nav-dropdown-color)",
          "dropdown-hover": "var(--nav-dropdown-hover-color)",
        },
      },

      fontFamily: {
        default: "var(--default-font)",
        heading: "var(--heading-font)",
        nav: "var(--nav-font)",
      },

      transitionDuration: {
        DEFAULT: "500ms",
      },
      fontWeight: {
        semibold: "600",
        bold: "700",
      },

       // Added animations for Hero section
        keyframes: {
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(25px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 0.6s ease-out forwards",
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
      },

    },
  },

  plugins: [],
};
