import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 80,
            cors: {
              "origin": "http://localhost",
              "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
              "preflightContinue": false,
              "optionsSuccessStatus": 204
            }
  
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
