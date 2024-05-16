# vite-plugin-livescript

> A Vite plugin for your LiveScript projects

[![License](https://img.shields.io/github/license/idleberg/vite-plugin-livescript?color=blue&style=for-the-badge)](https://github.com/idleberg/vite-plugin-livescript/blob/main/LICENSE)
[![Version](https://img.shields.io/npm/v/vite-plugin-livescript?style=for-the-badge)](https://www.npmjs.org/package/vite-plugin-livescript)
[![Build](https://img.shields.io/github/actions/workflow/status/idleberg/vite-plugin-livescript/tests.yml?style=for-the-badge)](https://github.com/idleberg/vite-plugin-livescript/actions)

## Installation

`npm install -D vite-plugin-livescript`

## Usage

```js
import { defineConfig } from 'vite';
import livescript from 'vite-plugin-livescript';

export default defineConfig({
	plugins: [
		livescript({
			// the following are the default values
			bare: false,
			const: false,
			header: false,
			json: false,
			warn: false,
		})
	]
});
```

### Options

Please refer to the [LiveScript documentation](https://livescript.net/#usage) for available options.

## License

This work is licensed under [The MIT License](LICENSE)
