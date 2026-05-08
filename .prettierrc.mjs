/** @type {import("prettier").Config} */
export default {
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	],
	useTabs: true,
	singleQuote: true,
	printWidth: 120,
	tabWidth: 4,
	trailingComma: 'none',
	bracketSameLine: true,
	arrowParens: 'avoid'
};
