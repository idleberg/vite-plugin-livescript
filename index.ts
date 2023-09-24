// @ts-ignore
import livescript from 'livescript';

type CompilerOptions = {
	bare?: boolean;
	header?: boolean;
	const?: boolean;
	json?: boolean;
	warn?: boolean;
	filename?: string;
}

export default function LiveScriptPlugin(options: CompilerOptions = {
	bare: false,
	header: false,
	const: false,
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
