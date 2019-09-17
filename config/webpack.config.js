require('dotenv').config();
const path = require('path');
const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[contenthash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader']
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebPackPlugin({
      title: 'Banka',
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        minifyJS: true,
        minifyCSS: true
      }
    }),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.EnvironmentPlugin(['API_URL'])
  ],

  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  devServer: {
    contentBase: path.join(__dirname, '../build'),
    publicPath: '/',
    compress: true,
    hot: true,
    port: 8080,
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }
};
