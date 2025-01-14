import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern', // or "modern", "legacy"
        silenceDeprecations: ['import'],
        //importers: [
          // "~/styles/_main.scss"
        //],
        // additionalData: `@use "~/styles/_main.scss" as *;`,
      },
    },
  },
})
