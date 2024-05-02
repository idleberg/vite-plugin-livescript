// @ts-ignore
import { compile } from 'livescript';

type LivescriptCompileOptions = {
	bare?: boolean;
	const?: boolean;
	filename?: string;
	header?: boolean;
	json?: boolean;
	map?: boolean;
	warn?: boolean;
}

export default function LiveScriptPlugin(options: LivescriptCompileOptions = {
	bare: false,
	const: false,
	header: false,
	json: false,
	map: false,
	warn: false
}) {
	return {
		name: 'livescript',
		async transform(src: string, id: string) {
			if (!/\.ls$/.test(id)) {
				return;
			}

			const result = compile(src, options);

			if (options.map) {
				return {
					code: result.code,
					map: result.map.toJSON()
				};
			}

			return {
				code: result
			};
		}
	}
}
