import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import path from "path";
import remarkGfm from "remark-gfm";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // The app is served from the domain root; nginx handles SPA fallback.
  base: "/",
  plugins: [mdx({ remarkPlugins: [remarkGfm] }), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss/functions" as *;`,
      },
    },
  },
});
