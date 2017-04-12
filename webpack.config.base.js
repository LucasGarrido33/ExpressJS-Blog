
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (options) => ({
  entry: options.entry,
  output: Object.assign({
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/'
  }, options.output),
  resolve: {
  extensions: ['.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/ },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf)$/i,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
      test: /\.woff$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]'
    },
    {
      test: /\.woff2$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]'
    }

    ]
  },
  plugins: options.plugins.concat([])

});
