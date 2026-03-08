/**
 * Vite Configuration
 * Konfigurasi build untuk produksi dan development
 * Siap deploy ke domain akamedihub.id
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // Base URL untuk deployment
  // Gunakan '/' untuk root domain atau '/nama-repo/' untuk subdirectory
  base: '/',
  
  // Server configuration untuk development
  server: {
    port: 5173,
    open: true,
    host: true,
  },
  
  // Build configuration untuk produksi
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks untuk optimasi loading
          vendor: ['react', 'react-dom', 'react-router-dom'],
          styles: ['styled-components'],
        },
      },
    },
  },
  
  // Resolve aliases
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@routes': '/src/routes',
    },
  },
  
  // CSS configuration
  css: {
    devSourcemap: true,
  },
  
  // Preview configuration
  preview: {
    port: 4173,
    host: true,
  },
});
