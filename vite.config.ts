import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindPlugin from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindPlugin(), tsConfigPaths(), reactPlugin()],
});
