module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,eot,svg,ttf,woff,png,jpg,PNG,js,scss,html,json}'
	],
	swDest: 'service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};