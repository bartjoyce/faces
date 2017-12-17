const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

const isProductionBuild = (process.argv.indexOf('--production') !== -1)

var plugins = []

if (isProductionBuild) {
	plugins.push(
		// Strip warning/error messages from React
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),

		// Minify output using UglifyJs
		new webpack.optimize.UglifyJsPlugin()
	)
}

module.exports = {
	context: __dirname,
	entry: {
		'index': path.join(__dirname, 'src/index.js')
	},
	output: {
		path: path.join(__dirname, 'htdocs/js'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['env', 'react']
				}
			},
      {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      }
		]
	},
	plugins: plugins
}
