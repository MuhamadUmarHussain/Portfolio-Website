// tailwind.config.js
import motion from "tailwindcss-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    motion,  // ✅ use imported plugin
  ],
}
