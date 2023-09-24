// @ts-ignore
import livescript from 'livescript';

export default function LiveScriptPlugin(options = {}) {
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
