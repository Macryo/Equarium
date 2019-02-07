const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
module: {
  rules: [{test: /\.js$/,
use: {
            loader: 'babel-loader',
            options: {
            presets: ['@babel/preset-env']}} }]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
};
