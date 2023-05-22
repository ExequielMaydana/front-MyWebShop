/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Puntos de interrupcion default.
      // sm: "480px",
      // md: "768px",
      // lg: "976px",
      // xl: "1440px",

      screens: {
        // Puntos de interrupcion especiales.
        s: "350px",
        sm: "480px",
      },
    },
    colors: {
      white: "#f9fafb",
      black: "#09090b",
      aliceBlue: "#eef2ff",
      darkSlateGray: "#27272a",
      dimGray: "#52525b",
      slateGray: "#D3D3D3",
      darkGray: "#9ca3af",
      royalBlue: "#4338ca",
      midNightBlue: "#111827",
      whiteSmoke: "#f3f4f6",
      mediumPurple: "#a78bfa",
      error: "#b00020",
    },
    fontSize: {
      //medidas xs, sm, lg, xl, xl, 2xl, 3xl...

      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "1xl": "1.3rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  plugins: [],
};
