// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path'; // ← 追加

export default defineConfig({
  root: 'src',
  envDir: resolve(__dirname), // ← これがカギ！！
  build: {
    outDir: '../dist',
  },
});
