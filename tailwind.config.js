const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.trueGray,
        orange: {
          100: "#FFECEC",
          500: "#F53855",
        },
        green: {
          500: "#2FAB73",
        },
        primary: {
          500: "#0190FF",
        }
        
      },
    },
    fontFamily: {
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },

  
 
  plugins: [require("@tailwindcss/aspect-ratio")],
};
