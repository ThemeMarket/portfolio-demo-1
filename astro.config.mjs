import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://walterjoelcode.github.io',
  // GitHub Pages deploys this project repository below its repository name.
  base: '/Waltercode.github.io',
  trailingSlash: 'always',
  outDir: './dist',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'terser',
      sourcemap: false,
    },
  },
  build: {
    assets: 'assets',
  },
});
