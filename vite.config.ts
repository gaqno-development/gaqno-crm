import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
	base: '/',
	server: {
		port: 3003,
		origin: 'http://localhost:3003',
		fs: {
			allow: ['.', '../shared'],
		},
	},
	plugins: [
		react(),
		federation({
			name: 'crm',
			filename: 'remoteEntry.js',
			exposes: {
				'./App': './src/App.tsx',
			},
			shared: {
				react: {
					requiredVersion: '^18.0.0',
				},
				'react-dom': {
					requiredVersion: '^18.0.0',
				},
				'react-router-dom': {
					requiredVersion: '^6.0.0',
				},
				'@tanstack/react-query': {
					requiredVersion: '^5.0.0',
				},
			},
		}),
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false,
	},
})
