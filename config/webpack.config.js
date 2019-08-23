const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
    new CopyWebpackPlugin([{ from: 'public' }]),
    new Webpack.HotModuleReplacementPlugin()
  ],

  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: path.join(__dirname, '../build'),
    publicPath: '/',
    hot: true,
    port: 8080,
    historyApiFallback: true
  }
};
