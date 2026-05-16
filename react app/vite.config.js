import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Dev: serve parent folder so /home.gallery/* and /signature_exhibition_expanded_gallery/* resolve
  publicDir: '../',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // IMPORTANT: prevents Vite from copying publicDir ('../') into dist,
    // which would cause an infinite recursive loop since dist lives inside publicDir.
    // A post-build script (scripts/copy-assets.mjs) handles copying images instead.
    copyPublicDir: false,
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
