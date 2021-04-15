const paths = require('./paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const imageminPlugin = require('imagemin-webpack-plugin').default
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
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'resolve-url-loader' },
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
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new copyWebpackPlugin({
      patterns: [
        { from: paths.img, to: paths.build + '/img' },
        { from: paths.fonts, to: paths.build + '/fonts' },
      ],
    }),
    new imageminPlugin({
      disable: process.env.NODE_ENV !== 'production',
      test: /\.(?:ico|gif|png|jp?eg|webp|svg)$/i,
      pngquant: {
        quality: '95-100'
      }
    }),
    new htmlWebpackPlugin({
      title: 'Webpack Boilerplate',
      template: paths.src + '/index.html', // template file
      filename: 'index.html', // output file
    }),
  ],
}
