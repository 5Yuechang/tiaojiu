import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/tiaojiu/',  // 必须包含前后的斜杠
    build: {
        outDir: 'dist',
        assetsDir: '',  // 将资源文件放在根目录
        rollupOptions: {
            output: {
                // 简化输出路径
                assetFileNames: '[name].[hash].[ext]',
                chunkFileNames: '[name].[hash].js',
                entryFileNames: '[name].[hash].js'
            }
        }
    }
})