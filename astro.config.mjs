// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://juan-ocampo.me',
	base: '/',
	vite: {
		plugins: [tailwindcss()]
	}
});
