import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    proxy: {
      "/airport-data": {
        target: "https://a4aero.s3.ap-southeast-1.amazonaws.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/airport-data/, ""),
      },
    },
  },
  plugins: [react()],
});
