import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/*
  Nếu deploy trên GitHub Pages, base = '/Shop.co/'
  Nếu deploy trên Vercel, base = '/'
  Kiểm tra process.env.VERCEL để nhận diện Vercel.
*/

const isGitHubPages = process.env.NODE_ENV === "production" && process.env.VERCEL !== "1";

export default defineConfig({
  plugins: [react()],
  base: "/Shop.co/",
  build: {
    assetsDir: 'assets', // Thư mục chứa assets
  }
})
