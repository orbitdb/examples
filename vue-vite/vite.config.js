import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import process from 'process'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [vue(), nodePolyfills()],
  define: {
    'process': {},
    'global': {},
  },
})
