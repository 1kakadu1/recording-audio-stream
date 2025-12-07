import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			// '@/hooks': path.resolve(__dirname, './src/hooks'),
			// 'pages': path.resolve(__dirname, './src/pages'),
			// '@/application': path.resolve(__dirname, './src/application'),
			// '@/components': path.resolve(__dirname, './src/components'),
			// '@/assets': path.resolve(__dirname, './src/assets'),
			// '@/styles': path.resolve(__dirname, './src/styles'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: (content, filename) => {
					const base = path.basename(filename);

					if (base !== 'index.scss') {
						return `@use "@/styles/_mixin.scss" as *;\n${content}`;
					}

					return content;
				},
			},
		},
	},
});
