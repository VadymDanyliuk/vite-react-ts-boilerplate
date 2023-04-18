import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    sourcemap: true,
  },
  preview: {
    port: 9000,
    open: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
