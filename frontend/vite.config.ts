import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'dist', // where the final build will be output
    sourcemap: false, // disable sourcemaps for production
    minify: 'esbuild' // minifies with esbuild (Vite default)
  }
})
