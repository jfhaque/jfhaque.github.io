/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg:           "#0a192f",   // main background (deep navy)
        bgLight:      "#112240",   // section / elevated surfaces
        bgCard:       "#172a45",   // cards
        accent:       "#64ffda",   // teal highlight
        textPrimary:  "#ccd6f6",   // body text
        textSecondary:"#8892b0",   // muted text
        // legacy aliases kept so nothing breaks
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
