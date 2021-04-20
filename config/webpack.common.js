const paths = require('./paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');
const { html } = require('html-loader')

module.exports = {
  entry: {
    main: [paths.src + '/js/app.js', paths.src + '/scss/main.scss'],
    vendor: [paths.src + '/js/vendor.js']
  },
  output: {
    path: paths.build,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jp?eg|webp|svg)$/i,
        include: paths.img,
        loader: 'file-loader',
        options: {
          name: "[name].[ext]",
          outputPath: "img/",
        }
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        include: paths.fonts,
        loader: 'file-loader',
        options: {
          limit: 100000,
          name: "[name].[ext]",
          outputPath: "fonts/",
          esModule: false,
        },
      },
      {
        test: /\.html$/,
        loader: 'ejs-compiled-loader',
        options: {
          htmlmin: false
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new copyWebpackPlugin({
      patterns: [
        { from: paths.assets, to: paths.build + '/assets' },
      ],
    }),
    new htmlWebpackPlugin({
      title: 'Webpack Boilerplate',
      filename: 'index.html', // output file name
      template: paths.templates + '/pages/index.html', // template file
    }),
    new ESLintPlugin()
  ],
}
