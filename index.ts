// @ts-ignore
import { compile } from 'livescript';

type LivescriptCompileOptions = {
	bare?: boolean;
	const?: boolean;
	filename?: string;
	header?: boolean;
	json?: boolean;
	warn?: boolean;
}

export default function LiveScriptPlugin(options: LivescriptCompileOptions = {
	bare: false,
	const: false,
	header: false,
	json: false,
	warn: false
}) {
	return {
		name: 'livescript',
		async transform(src: string, id: string) {
			if (!/\.ls$/.test(id)) {
				return;
			}

			const result = compile(src, {
				...options,
				// force sourcemaps to be generated, even though the actual creation is tied to build.sourcemap
				map: true
			});

			return {
				code: result.code,
				map: result.map.toJSON()
			};
		}
	}
}
