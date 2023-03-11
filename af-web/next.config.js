const { i18n } = require('./next-i18next.config');
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	outputStandalone: true,
	output: 'standalone',
	webpackDevMiddleware: (config) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		};
		return config;
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: [{ loader: '@svgr/webpack', options: { typescript: true, ext: 'tsx', icon: true } }],
		});

		return config;
	},
	i18n,
	images: {
		domains: ['autofox.blob.core.windows.net', 'autofox-v.azureedge.net'],
		// formats: ['webp', 'png', 'jpg', 'gif', 'jpeg', 'webp'],
	},
};

module.exports = nextConfig;
