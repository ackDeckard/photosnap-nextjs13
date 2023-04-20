/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('/assets/shared/desktop/bg-beta.jpg')",
        mobile: "url('/assets/shared/mobile/bg-beta.jpg')",
        tablet: "url('/assets/shared/tablet/bg-beta.jpg')",
      },
      colors: {
        customGray: "hsl(0, 0%, 88%)",
        gradientEnd: "hsl(28, 100%, 79%)",
        gradientMiddle: "hsl(329, 36%, 59%)",
        gradientStart: "hsl(229, 100%, 68%)",
      },
    },
  },
  plugins: [],
};
