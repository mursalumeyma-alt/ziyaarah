import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [],
    },
  },
  server: {
  proxy: {
    '/api': {
      target: 'https://ziyaarah.vercel.app',
        changeOrigin: true,
        secure: true,
        //rewrite: (path) => path.replace(/^\/api/, '/api')

    },
  },
},
});