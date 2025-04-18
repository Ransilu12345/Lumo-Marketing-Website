import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: true, // Allows access from network devices
    port: 8080, // Custom port
    open: true, // Automatically opens the app in the browser
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias for the src directory
      "~components": path.resolve(__dirname, "src/components"), // Alias for components
      "~pages": path.resolve(__dirname, "src/pages"), // Alias for pages
    },
  },
  build: {
    outDir: "dist", // Output directory for production build
    sourcemap: true, // Generate source maps for debugging
  },
});
