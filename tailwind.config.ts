import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["Pretendard", "sans-serif"],
      serif: ["Pretendard", "serif"],
    },

    extend: {
      screens: {
        mo: "375px",
        web: "500px",
      },
      colors: {
        black: "#000",
        "black-1": "#111",
        "black-2": "#222",
        "black-3": "#333",
        "black-4": "#444",
        "black-5": "#555",
        "black-6": "#666",
        "black-7": "#777",
        "black-8": "#888",
        "black-9": "#999",
        "grey-a": "#aaa",
        "grey-b": "#bbb",
        "grey-c": "#ccc",
        "grey-d": "#ddd",
        "grey-e": "#eee",

        blue: "#0059E3",
        "main-blue": "#5C77FF",
        "blue-transparent": "rgba(1, 82, 207, 0.50)",
        "blue-1": "#F4F8FF",
        red: "#EE1439",
        "red-1": "#EE1616",
        orange: "#E67100",
        white: "#fff",
        brown: "#3D1200",
        green: "#03C75B",
        "lime-sub1": "#17D410",
        "lime-sub2": "#17D410",
        pink: "#FF3D73",
        "pink-main": "#FF3478",
        "pink-sub1": "#FE546E",
        "pink-sub2": "#E42E5F",
        "pink-transparent": "rgba(255, 239, 239, 0.6)",
        "pink-1": "#FE516F",
        "pink-2": "#FF3478",

        yellow: "#FFDB6D",
      },
      borderRadius: {
        md: "10px",
        lg: "12px",
        xl: "91px",
      },
      keyframes: {
        // 약관 동의 애니메이션
        transparencyAnimation: {
          "0%": { backgroundColor: "transparent" },
          "100%": { backgroundColor: "rgba(0,0,0,0.6)" },
        },
        transparencyAnimationReverse: {
          "0%": { backgroundColor: "rgba(0,0,0,0.6)" },
          "100%": { backgroundColor: "transparent" },
        },
        positionTopAnimation: {
          "0%": { bottom: "-500px" },
          "100%": { bottom: "0" },
        },
        positionTopAnimationReverse: {
          "0%": { bottom: "0" },
          "100%": { bottom: "-500px" },
        },
      },
      animation: {
        transparencyAnimation:
          "transparencyAnimation 0.2s ease-in-out forwards",
        transparencyAnimationReverse:
          "transparencyAnimationReverse 0.2s ease-in-out forwards",
        positionTopAnimation: "positionTopAnimation 0.2s ease-in-out forwards",
        positionTopAnimationReverse:
          "positionTopAnimationReverse 0.2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
