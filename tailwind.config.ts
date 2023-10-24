import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)", ...fontFamily.sans],
        mono: ["var(--font-poppins)", ...fontFamily.mono],
      },
      colors: {
        "Fm-Pink": "hsl(322, 100%, 66%)",
        "Fm-Light-Pink": "hsl(321, 100%, 78%)",
        "Fm-Light-Red": "hsl(0, 100%, 63%)",
        "Fm-Very-Dark-Cyan": "hsl(192, 100%, 9%)",
        "Fm-Very-Pale-Blue": "hsl(207, 100%, 98%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
