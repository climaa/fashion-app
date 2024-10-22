import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vercel from "vite-plugin-vercel";
import path from "path";
import svgr from "vite-plugin-svgr";

const pathBase = (...args) => path.resolve(__dirname, ...args);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vercel(),
    svgr(),
  ],
  resolve: {
    alias: {
      "@": pathBase("src"),
      "@api": pathBase("src", "shared", "api"),
      "@assets": pathBase("src", "assets"),
      "@components": pathBase("src", "shared", "components"),
      "@utils": pathBase("src", "shared", "utils"),
    },
  },
});
