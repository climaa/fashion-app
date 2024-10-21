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
      "@components": pathBase("src", "components"),
      "@assets": pathBase("src", "assets"),
      "@utils": pathBase("src", "utils"),
    },
  },
});
