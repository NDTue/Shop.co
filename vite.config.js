import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Shop.co/',
  build: {
    assetsDir: 'assets', // Thư mục chứa assets
  }
})
