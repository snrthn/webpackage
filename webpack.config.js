
var path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].bundle.js'
	}
}