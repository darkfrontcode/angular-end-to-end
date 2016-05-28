import path from 'path'
import webpack from 'webpack'

module.exports = {
	devtool: 'eval-source-map',
	entry: [
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		path.join(__dirname, './source/react/main.js')
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: "[name].js"
	},
	resolve: {
		extensions: ['', '.js', '.styl']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react-hmre']
				}
			},
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: "file-loader?name=assets/[name].[ext]"
			},
            {
				test: /\.(woff|woff2|eot|ttf)$/,
				loader: "file-loader?name=fonts/[name].[ext]"
			}
		]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
}
