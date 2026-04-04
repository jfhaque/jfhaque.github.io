/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg:           "#0a192f",   // base — hero, projects, footer
        bgAlt:        "#0d2138",   // very subtle shift — work, contact
        bgLight:      "#0f2542",   // nav, elevated surfaces
        bgCard:       "#112a48",   // cards — one step above bgAlt
        accent:       "#64ffda",   // teal highlight
        textPrimary:  "#ccd6f6",   // body text
        textSecondary:"#8892b0",   // muted text
        // legacy aliases
        primaryBlue:  "#0a192f",
        mediumBlue:   "#112240",
        darkBlue:     "#172a45",
        accentBlue:   "#64ffda",
        textDark:     "#e6f1ff",
        navyBlue:     "#0a192f",
        lightBlue:    "#112240",
      },
    },
  },
  plugins: [],
};
