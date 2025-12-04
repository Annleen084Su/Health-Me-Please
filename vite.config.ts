import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Health-Me-Please/',
  plugins: [react()],
  // สำคัญมาก: ชี้ให้ถูก path ของ GitHub Pages
  base: '/Health-Me-Please/',
})
