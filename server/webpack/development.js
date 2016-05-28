import path from 'path'
import webpack from 'webpack'

module.exports = {
	devtool: 'eval-source-map',
	entry: [
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		path.join(__dirname, '../angular/app.js')
	],
	output: {
		path: path.join(__dirname, '../../public'),
		filename: "app.js"
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
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
}
