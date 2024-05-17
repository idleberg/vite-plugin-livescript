import { build } from 'vite'
import { basename, dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access } from 'node:fs/promises';
import { suite, test } from 'uvu';
import * as assert from 'uvu/assert';
import livescript from '../dist/index.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url));

const inputs = {
	'examples.ls': '92b1e209',
	'js-entrypoint.js': 'b7f0689e',
	'ts-entrypoint.ts': 'ef395b9b',
};


for (const input of Object.keys(inputs)) {
	const testSuite = suite(basename(input));

	for (const sourcemap of [true, false]) {
		const inputFile = join('fixtures', input);
		await viteBuild(inputFile, sourcemap);

		testSuite(`${sourcemap ? 'with' : 'without'}} sourcemap`, async () => {
			const baseName = basename(input, extname(input));
			const hash = inputs[input];

			const actual = await fileExists(`${baseName}-${hash}.js`);

			assert.ok(actual);

			if (sourcemap) {
				const actual = await fileExists(`${baseName}-${hash}-with-sourcemap.js.map`);

				assert.ok(actual);
			}
		});
	}

	testSuite.run();
}

async function fileExists(filePath) {
	const absolutePath = resolve(__dirname, 'dist/assets', filePath);

	try {
		await access(absolutePath);
		return true;
	} catch {
		return false;
	}
}

async function viteBuild(input, sourcemap) {
	await build({
		build: {
			emptyOutDir: false,
			rollupOptions: {
				input: resolve(__dirname, input),
				output: {
					dir: resolve(__dirname, 'dist/assets'),
					entryFileNames: sourcemap ? '[name]-[hash]-with-sourcemap.js' : '[name]-[hash].js',
				},
			},
			sourcemap,
		},
		logLevel: 'silent',
		plugins: [
			livescript(),
		],
	});
}
