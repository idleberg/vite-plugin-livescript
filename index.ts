// @ts-ignore
import livescript from 'livescript';

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

			const code = livescript.compile(src, options);

			return {
				code: code
			};
		}
	}
}
