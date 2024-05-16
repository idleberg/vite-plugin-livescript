import { build } from 'vite'
import livescript from '../dist/index.mjs'
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const inputs = [
	'./fixtures/examples.ls',
	'./fixtures/js-entrypoint.js',
	'./fixtures/ts-entrypoint.ts',
];

(async () => {
	inputs.forEach(input => {
		[true, false].forEach(async sourcemap => {
			await build({
				plugins: [
					livescript(),
				],
				build: {
					emptyOutDir: false,
					rollupOptions: {
						input: resolve(__dirname, input),
						output: {
							dir: resolve(__dirname, 'dist/assets'),
							entryFileNames: sourcemap ? '[name]-[hash]-with-sourcemap.js': undefined,
						},
					},
					sourcemap,
				}
			});
		})
	})
})();
