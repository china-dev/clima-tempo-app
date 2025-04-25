import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    hmr: {
      host: 'localhost',
      port: 5173
    },
    watch: {
      usePolling: true 
    },
    host: '0.0.0.0'
  }
})
