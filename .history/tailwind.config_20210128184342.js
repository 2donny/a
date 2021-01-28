
module.exports = {
    purge: {
      mode: "all",
      content: [
        "./components/**/*.{js,ts,jsx,tsx,css}",
        "./pages/**/*.{js,ts,jsx,tsx}",
      ],
      options: {
        safelist: { deep: [/blur$/] },
      },
    },
    theme: {
      extend: {
        fontSize: {
          "7xl": "4.5rem",
          '5xl': '2.5rem',
          '6xl': '2.75rem',
          '7xl': '3.5rem',
          '8xl': '5.25rem',
        },
        spacing: {
          28: '7rem',
        },
        lineHeight: {
          tight: 1.2,
        },
        boxShadow: {
          sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
          md: '0 8px 30px rgba(0, 0, 0, 0.12)',
        },
        typography: (theme) => ({
          DEFAULT: {
            css: {
              color: theme("colors.gray.800"),
              blockquote: {
                borderLeftColor: theme("colors.gray.700"),
              },
              "ol > li::before": {
                color: theme("colors.gray.700"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.700"),
              },
              a: {
                color: theme("colors.neon-orange"),
              },
            },
          },
  
          },
        }),
      },
    },
    variants: {},
    plugins: [require("@tailwindcss/typography")],
    variants: {
      extend: {
        typography: ["dark"],
      },
    },
  };