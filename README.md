# 📦 Webpack 5 / SASS / ES6 Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) ![webpack-current](https://img.shields.io/badge/webpack-v5.27.2-green?logo=webpack) ![David](https://img.shields.io/badge/dependencies-up%20to%20date-green) ![David](https://img.shields.io/badge/node--version-15.14.0-blue)


Minimal Webpack 4 boilerplate with Babel, Sass, ESLint, Hot Module Replacement, and development/production optimization.

## Installation

```
git clone https://github.com/eljouno/BOILERPLATE-WEBPACK-SASS-ES6.git
npm i
```

## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:8080`.

### Production build

```bash
npm run build
```

## Features

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [ESLint](https://eslint.org/)

## Dependencies

### Webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for Webpack.
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for Webpack.
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration.

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript.
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel.
- [`babel-eslint`](https://github.com/babel/babel-eslint) - Lint Babel code.
- [`eslint`](https://github.com/eslint/eslint) - ESLint.

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and Webpack.
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS.
- [`node-sass`](https://github.com/sass/node-sass) - Node Sass.
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS.
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolves CSS imports into JS.
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM.
- [`eslint-loader`](https://webpack.js.org/loaders/eslint-loader/) - Use ESLint with Webpack.
- [`file-loader`](https://webpack.js.org/loaders/file-loader/) - Copy files to build folder.

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders.
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory.
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template.
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files.

## Author

- [Jonathan PEREZ](https://jonathanperez.fr)

## License

This project is open source and available under the [MIT License](LICENSE).

