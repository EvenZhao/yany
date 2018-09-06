'use strict'
const webpack = require('webpack');

module.exports = {
	entry: {
		app: './src/index.js',
	},
	output: {
		path: './dist/',
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	module: {
		rules: [
			{
                test: /\.(js|jsx)?$/,
                loader: "babel-loader",
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 5120,
					name: utils.assetsPath('imgs/[name].[hash:7].[ext]'),
				},
			},
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			_: 'underscore',
		}),
	],
}
