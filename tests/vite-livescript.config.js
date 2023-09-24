import { defineConfig } from 'vite'
import livescript from '../dist/index.js'

export default defineConfig({
    plugins: [
        livescript()
    ],
    build: {
        emptyOutDir: false,
        rollupOptions: {
            input: './fixtures/examples.ls'
        }
    }
});
