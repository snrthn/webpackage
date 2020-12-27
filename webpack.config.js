
var path = require('path');

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
					use: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'css',
								name: '[name].[ext]'
							}
						}
					]
				}
			]
		},
		devtool: 'cheap-source-map'
	}
}