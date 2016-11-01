var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  context: path.resolve('./frontend'),
  entry: {
    javascriptt: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      'whatwg-fetch',
      './src/index.jsx'
    ],
    html: './index.html'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve('./public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loaders: [
        'style',
        'css?modules&importLoaders=1&localIdentName=[name]--[local]--[hash:base64:8]',
        'postcss',
      ]
    }, {
      test: /\.html$/,
      loader: 'file?name=[path][name].[ext]'
    }]
  }
};
