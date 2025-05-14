import { defineConfig } from 'vite';
import { resolve } from 'path'; //

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
  },
  envDir: resolve(__dirname), // ← これを追加！
  server: {
    fs: {
      strict: false,
    },
  },
});
