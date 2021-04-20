const path = require('path')

module.exports = {
  src: path.resolve(__dirname, '../app'), // source files
  build: path.resolve(__dirname, '../dist/'), // production build files
  assets: path.resolve(__dirname, '../app/assets'), // static files to copy to build folder
  templates : path.resolve(__dirname, '../app/templates'),
}
