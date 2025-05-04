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

type LiveScriptTransform = {
	code: string;
	map: string;
} | void;

export default function LiveScriptPlugin(options: LivescriptCompileOptions = {
	bare: false,
	const: false,
	header: false,
	json: false,
	warn: false,
}) {
	return {
		name: 'livescript',
		transform(src: string, id: string): LiveScriptTransform {
			if (!/\.ls$/.test(id)) {
				return;
			}

			const result = compile(src, {
				...options,
				filename: id,
				map: true,
			});

			return {
				code: result.code,
				map: result.map.toJSON()
			};
		}
	}
}
