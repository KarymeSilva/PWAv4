module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,eot,svg,ttf,woff,png,jpg,PNG,js,scss,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};