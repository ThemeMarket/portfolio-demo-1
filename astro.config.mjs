import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://waltercode.github.io',
  // This repository is deployed as the waltercode.github.io user site, not a
  // project site. A project base here would make every generated asset 404.
  base: '/',
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
