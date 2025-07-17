// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      // Stop Vite yelling about chunk with dashjs inside
      chunkSizeWarningLimit: 1000
    }
  }
});
