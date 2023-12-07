import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
  resolve: {
    alias: [
      { find: "assets", replacement: resolve(__dirname, "./src/assets") },
      { find: "const", replacement: resolve(__dirname, "./src/const") },
      { find: "components", replacement: resolve(__dirname, "./src/components") }
    ],
  }
})
