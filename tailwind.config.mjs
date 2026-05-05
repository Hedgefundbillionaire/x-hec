/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A2540",
        gold: "#D4AF37",
        ink: "#1A1A1A",
        mist: "#F7F9FC"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(10, 37, 64, 0.10)"
      }
    }
  },
  plugins: []
};
