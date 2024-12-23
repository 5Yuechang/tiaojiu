import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/tiaojiu/',
    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                // 将资源文件放在根目录下
                assetFileNames: '[name].[hash].[ext]',
                chunkFileNames: '[name].[hash].js',
                entryFileNames: '[name].[hash].js'
            }
        }
    }
})