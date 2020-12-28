
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = function (env) {
	return {
		mode: env.development ? 'development' : (env.production ? 'production': 'none'),
		entry: {
			app: './src/index'
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'js/[name].bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader']
				}
			]
		},
		devtool: 'cheap-source-map',
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'index.html'),
				favicon: path.resolve(__dirname, 'static/favicon.ico'),
				filename: 'index.html'
			}),
			new CleanWebpackPlugin()
		]
	}
}