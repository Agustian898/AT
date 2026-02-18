'use strict';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/<YOUR-GITHUB-REPO-NAME>/', // Update the base path for GitHub Pages
  build: {
    outDir: 'dist', // Output directory for build files
    sourcemap: true, // Enable sourcemaps for easier debugging
  },
});