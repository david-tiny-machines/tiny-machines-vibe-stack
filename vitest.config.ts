import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    exclude: [
      '**/node_modules/**',
      '**/tests/**',        // Exclude Playwright tests
      '**/tests-examples/**' // Exclude Playwright examples
    ]
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})