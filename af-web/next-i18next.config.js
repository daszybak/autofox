const path = require('path');

module.exports = {
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'hr'],
	},
	localePath: path.resolve('./public/locales'),
	ns: ['common', 'home'],
	nsSeparator: ':',
	keySeparator: '.',
	pluralSeparator: '_',
	contextSeparator: '_',
	interpolation: {
		prefix: '{{',
		suffix: '}}',
	},
};
