const webpack = require('webpack')
const path = require('path')

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
	}
}
