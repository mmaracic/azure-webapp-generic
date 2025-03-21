/// <reference types="vitest" />
import { defineConfig } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  test: {
    environment: 'jsdom'
  }
})
