const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  target: 'node',
  module: {
    rules: [
      {
        test: '/\.js$',
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

{
	// resolve: {
	// 	extensions: ['.cson']
	// },
	module: {
		loaders: [
			{ test: /\.cson$/, loader: "cson" }
		]
	}
}

