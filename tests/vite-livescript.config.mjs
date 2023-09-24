import { defineConfig } from 'vite'
import livescript from '../dist/index.mjs'

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
