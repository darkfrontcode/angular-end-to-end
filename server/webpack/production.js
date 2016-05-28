var path = require('path'),
	webpack = require('webpack');

module.exports = {
	entry: [
		path.join(__dirname, '../angular/app.js')
	],
	output: {
		path: path.join(__dirname, '../../public'),
		filename: "app.js",
	},
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query:{
					presets: ['es2015']
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.BannerPlugin("{copyright:['Dark Front Code','https://github.com/darkfrontcode']}")
	]
}
