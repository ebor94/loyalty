import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],  
  optimizeDeps: {  
    include: ['html2pdf.js']  
  },
  build: {
    sourcemap: false, // Desactiva la generación de source maps
  },
})

