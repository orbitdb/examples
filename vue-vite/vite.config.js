import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import process from 'process'

export default defineConfig({
  plugins: [vue()],
  define: {
    'process': {},
    'global': {},
  },
})
