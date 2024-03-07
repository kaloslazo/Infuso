import { defineConfig } from 'vite'
import * as path from 'path';
import react from '@vitejs/plugin-react-swc'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    react()
  ],
  server: {
    port: 1111,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  }
})
