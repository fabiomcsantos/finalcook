module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{html,png,json}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};