'use strict'
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distDir = __dirname + '/dist/';

module.exports = {
	entry: {
		app: './src/index.js',
	},
	output: {
		path: distDir,
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	module: {
		rules: [
			{
                test: /\.(js|jsx)?$/,
				loader: 'babel-loader',
				exclude: /node_modules/ // 引入的模块几乎都是向下兼容的，这部分的代码不需要走 loader
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ],
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'less-loader',
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 5120,
					outputPath: distDir + 'imgs/',
					name: '[name].[hash:7].[ext]',
				},
			},
		]
	},
	devServer: {
		contentBase: distDir,
		noInfo: true,
		overlay: true,
	},
	// 这个 source-map应该是开发环境最优选择，有列信息。不太清楚，只有行内信息的 map 会不会影响 debugger
	devtool: 'eval-source-map', 
	plugins: [
		new webpack.ProvidePlugin({
			_: 'underscore',
			React: 'react',
			ReactDOM: 'react-dom',
		}),
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
}
