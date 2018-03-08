'use strict';

const path = require("path");

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'front');

module.exports = {
	
	entry: APP_DIR + "/index.jsx",
	
	module: {
		rules: [
			{
				test: /.js?/,
				exclude: /node_modules/,
				use: 
				[
					'babel-loader',
					{
						loader: 'babel-loader',
						options: {
							presets: ['env', 'react']
						}
					}
				]
			}
		]
	},
	
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	}
};
