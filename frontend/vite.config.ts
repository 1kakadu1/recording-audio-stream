import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
        resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), 
            // '@/hooks': path.resolve(__dirname, './src/hooks'), 
            // 'pages': path.resolve(__dirname, './src/pages'), 
            // '@/application': path.resolve(__dirname, './src/application'),
            // '@/components': path.resolve(__dirname, './src/components'),
            // '@/assets': path.resolve(__dirname, './src/assets'),
            // '@/styles': path.resolve(__dirname, './src/styles'),
        },
      },
})
