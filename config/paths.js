const path = require('path')

module.exports = {
  src: path.resolve(__dirname, '../app'), // source files
  build: path.resolve(__dirname, '../dist'), // production build files
  static: path.resolve(__dirname, '../app/assets'), // static files to copy to build folder
  img: path.resolve(__dirname, '../app/img'),
  fonts: path.resolve(__dirname, '../app/fonts'),
}