import path from 'path';
import { defineConfig } from 'vite';
import { readFileSync } from 'fs';
import { sveltekit } from '@sveltejs/kit/vite';
import { fileURLToPath } from 'url';

const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const pkg = JSON.parse(json);

const config = defineConfig({
	clearScreen: false,
	define: {
		'process.env.VITE_SVELTEKIT_VERSION': JSON.stringify(
			String(pkg.devDependencies['@sveltejs/kit'])
		),
		'process.env.VITE_BUILD_TIME': JSON.stringify(
			new Date().toISOString()
		),
	},
	server: {
		port: 5173,
		fs: {
			// Allow serving files from one level up to the project root
			// Alternatevaly set server.fs.strict to false
			allow: ['..']
		},
	},
	resolve: {
		alias: {
			$config: path.resolve('config'),
			$content: path.resolve('content'),
			$themes: path.resolve('themes'),
		},
	},
	plugins: [sveltekit()],
});

export default config;
