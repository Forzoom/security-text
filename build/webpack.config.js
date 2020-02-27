const path = require('path');

module.exports = {
	mode: 'production',
	entry: [
		'./src/index.js',
	],
	output: {
		path: path.join(__dirname, '/../dist'),
		filename: 'security-text.cjs.js',
	},
	rules: [
		{
			test: /\.js/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		},
	],
}
