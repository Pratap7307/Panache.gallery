import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Serve the parent folder as static root so /home.gallery/* and other asset paths resolve
  publicDir: '../',
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
