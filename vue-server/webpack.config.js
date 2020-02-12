const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const server = {
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new NodemonPlugin()
  ]
}

const client = {
  target: 'web',
  node: {
    fs: 'empty',
    module: 'empty'
  },
  entry: path.join(__dirname, 'src/client.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin()
  ]
}

module.exports = [server, client]
