import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  server: {
    hmr: {
      host: 'localhost',
      protocol: 'ws',
      port: 5173
    },
    watch: {
      usePolling: true,
      interval: 100,
      ignored: ['**/node_modules/**']
    },
    host: '0.0.0.0',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
})
