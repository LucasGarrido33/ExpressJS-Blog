
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [
  new ExtractTextPlugin('[name].css'),
  new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    template: './app/public/index.html'
  })
];

module.exports = require('./webpack.config.base')({
  // Add hot reloading in development
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'app/index.js')
  ],

  // Don't use hashes in dev mode for better performance
  output: {
    filename: '[name].js'
  },

  // Add development plugins
  plugins: plugins

});
