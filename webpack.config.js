const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const allSourceMapType = [
  'eval',
  'eval-cheap-source-map',
  'eval-cheap-module-source-map',
  'eval-source-map',
  'cheap-source-map',
  'cheap-module-source-map',
  'inline-cheap-source-map',
  'inline-cheap-module-source-map',
  'inline-source-map',
  'source-map',
  'hidden-source-map',
  'hidden-nosources-source-map',
  'hidden-nosources-cheap-source-map',
  'hidden-nosources-cheap-module-source-map',
  'hidden-cheap-source-map',
  'hidden-cheap-module-source-map',
  'nosources-source-map',
  'nosources-cheap-source-map',
  'nosources-cheap-module-source-map'
]

module.exports = allSourceMapType.map(item => {
  return {
    mode: 'none',
    devtool: item,
    entry: './src/index.js',
    output: {
      filename: `js/${item}.js`,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: `${item}.html`
      })
    ]
  }
})