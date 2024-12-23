﻿import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/tiaojiu/',  // 改回仓库名
    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[hash].[ext]',
                chunkFileNames: 'assets/[name].[hash].js',
                entryFileNames: 'assets/[name].[hash].js'
            }
        }
    }
})