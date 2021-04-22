const paths = require('./paths')
const webpack = require('webpack')
const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    historyApiFallback: true,
    contentBase: paths.root,
    watchContentBase: true,
    open: true,
    compress: true,
    port: 8080,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})
